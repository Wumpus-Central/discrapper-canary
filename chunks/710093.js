"use strict";
n.d(t, { R: () => s });
var r = n(506774),
    i = n(56562);
class s {
    static _loaded = null;
    static storageKey = "GameDisplayModeStorage";
    games;
    constructor(e) {
        this.games = e;
    }
    save() {
        let e = { games: this.games };
        r.w.set(s.storageKey, e);
    }
    static load() {
        return null == s._loaded && (s._loaded = s.loadInternal()), s._loaded;
    }
    static loadInternal() {
        let e = r.w.get(s.storageKey);
        if (null != e) return new s(e.games ?? {});
        let t = new s({});
        return t.save(), t;
    }
    static getGameSettings(e) {
        return null == e ? null : (s.load().games[e] ?? null);
    }
    static updateGameSettings(e, t) {
        if (null == e) return;
        let n = s.load(),
            r = n.games[e];
        if (null == r) {
            (n.games[e] = { screen: i.aI.UNKNOWN, date: Date.now(), ...t }), n.save();
            return;
        }
        "boolean" == typeof t.disabled && (r.disabled = t.disabled),
            "number" == typeof t.screen && (r.screen = t.screen),
            (r.date = Date.now()),
            n.save();
    }
    static isPromptingForGameDisable(e) {
        return s.getGameSettings(e)?.disabled ?? !1;
    }
    static setPromptingForGameDisable(e, t) {
        s.updateGameSettings(e, { disabled: t });
    }
    static getGameDisplayMode(e) {
        return null == e ? null : (s.getGameSettings(e)?.screen ?? null);
    }
    static setGameDisplayMode(e, t) {
        s.updateGameSettings(e, { screen: t });
    }
    static clearOldGameSettings() {
        let e = s.load();
        if (null == e.games) return;
        let t = Date.now() - 31536e6;
        for (let n in e.games) e.games[n].date < t && delete e.games[n];
        e.save();
    }
    static reset() {
        let e = s.load();
        (e.games = {}), e.save();
    }
    static isTestMode() {
        return !!window.__GAME_DISPLAY_MODE_TEST_MODE__;
    }
    static isVerbose() {
        return !!window.__GAME_DISPLAY_MODE_DEBUG__;
    }
}
setTimeout(() => s.clearOldGameSettings(), 6e4);

"use strict";
n.d(t, { R: () => a });
var r = n(506774),
    i = n(56562);
class a {
    static _loaded = null;
    static storageKey = "GameDisplayModeStorage";
    games;
    constructor(e) {
        this.games = e;
    }
    save() {
        let e = { games: this.games };
        r.w.set(a.storageKey, e);
    }
    static load() {
        return null == a._loaded && (a._loaded = a.loadInternal()), a._loaded;
    }
    static loadInternal() {
        let e = r.w.get(a.storageKey);
        if (null != e) return new a(e.games ?? {});
        let t = new a({});
        return t.save(), t;
    }
    static getGameSettings(e) {
        return null == e ? null : (a.load().games[e] ?? null);
    }
    static updateGameSettings(e, t) {
        if (null == e) return;
        let n = a.load(),
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
        return a.getGameSettings(e)?.disabled ?? !1;
    }
    static setPromptingForGameDisable(e, t) {
        a.updateGameSettings(e, { disabled: t });
    }
    static getGameDisplayMode(e) {
        return null == e ? null : (a.getGameSettings(e)?.screen ?? null);
    }
    static setGameDisplayMode(e, t) {
        a.updateGameSettings(e, { screen: t });
    }
    static clearOldGameSettings() {
        let e = a.load();
        if (null == e.games) return;
        let t = Date.now() - 31536e6;
        for (let n in e.games) e.games[n].date < t && delete e.games[n];
        e.save();
    }
    static reset() {
        let e = a.load();
        (e.games = {}), e.save();
    }
    static isTestMode() {
        return !!window.__GAME_DISPLAY_MODE_TEST_MODE__;
    }
    static isVerbose() {
        return !!window.__GAME_DISPLAY_MODE_DEBUG__;
    }
}
setTimeout(() => a.clearOldGameSettings(), 6e4);

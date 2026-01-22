n.d(t, {
    R: () => o,
});
var r = n(506774),
    i = n(56562);

function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
class o {
    save() {
        let e = {
            games: this.games,
        };
        r.w.set(o.storageKey, e);
    }
    static load() {
        return null == o._loaded && (o._loaded = o.loadInternal()), o._loaded;
    }
    static loadInternal() {
        let e = r.w.get(o.storageKey);
        if (null != e) {
            var t;
            return new o(null != (t = e.games) ? t : {});
        }
        let n = new o({});
        return n.save(), n;
    }
    static getGameSettings(e) {
        var t;
        return null == e ? null : null != (t = o.load().games[e]) ? t : null;
    }
    static updateGameSettings(e, t) {
        if (null == e) return;
        let n = o.load(),
            r = n.games[e];
        if (null == r) {
            (n.games[e] = s(
                {
                    screen: i.aI.UNKNOWN,
                    date: Date.now(),
                },
                t,
            )),
                n.save();
            return;
        }
        "boolean" == typeof t.disabled && (r.disabled = t.disabled),
            "number" == typeof t.screen && (r.screen = t.screen),
            (r.date = Date.now()),
            n.save();
    }
    static isPromptingForGameDisable(e) {
        var t, n;
        return null != (t = null == (n = o.getGameSettings(e)) ? void 0 : n.disabled) && t;
    }
    static setPromptingForGameDisable(e, t) {
        o.updateGameSettings(e, {
            disabled: t,
        });
    }
    static getGameDisplayMode(e) {
        var t, n;
        return null == e ? null : null != (t = null == (n = o.getGameSettings(e)) ? void 0 : n.screen) ? t : null;
    }
    static setGameDisplayMode(e, t) {
        o.updateGameSettings(e, {
            screen: t,
        });
    }
    static clearOldGameSettings() {
        let e = o.load();
        if (null == e.games) return;
        let t = Date.now() - 31536e6;
        for (let n in e.games) e.games[n].date < t && delete e.games[n];
        e.save();
    }
    static reset() {
        let e = o.load();
        (e.games = {}), e.save();
    }
    static isTestMode() {
        return !!window.__GAME_DISPLAY_MODE_TEST_MODE__;
    }
    static isVerbose() {
        return !!window.__GAME_DISPLAY_MODE_DEBUG__;
    }
    constructor(e) {
        a(this, "games", void 0), (this.games = e);
    }
}
a(o, "_loaded", null), a(o, "storageKey", "GameDisplayModeStorage"), setTimeout(() => o.clearOldGameSettings(), 6e4);

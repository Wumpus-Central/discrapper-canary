n.d(t, { A: () => d });
var i = n(17928),
    r = n(506774),
    a = n(228366),
    s = n(652215);
let _ = { lastViewedPath: null, lastViewedNonVoicePath: null },
    l = _,
    o = "LAST_VIEWED_PATH";
class E extends i.Ay.PersistedStore {
    static displayName = "DefaultRouteStore";
    static persistKey = "DefaultRouteStore";
    static migrations = [
        () => {
            let e = r.w.get(o, null);
            return r.w.remove(o), { lastViewedPath: e };
        },
    ];
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _;
        l = e ?? _;
    }
    get defaultRoute() {
        return s.BVt.ME;
    }
    get lastNonVoiceRoute() {
        return l.lastViewedNonVoicePath ?? s.BVt.ME;
    }
    get fallbackRoute() {
        return s.BVt.ME;
    }
    getState() {
        return l;
    }
}
let d = new E(a.h, {
    SAVE_LAST_ROUTE: function (e) {
        let { path: t } = e;
        return (l.lastViewedPath = t), !0;
    },
    SAVE_LAST_NON_VOICE_ROUTE: function (e) {
        let { path: t } = e;
        return (l.lastViewedNonVoicePath = t), !0;
    },
});

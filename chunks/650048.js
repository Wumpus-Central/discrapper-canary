n.d(t, { A: () => _ });
var i = n(17928),
    a = n(506774),
    r = n(228366),
    s = n(652215);
let l = { lastViewedPath: null, lastViewedNonVoicePath: null },
    o = l,
    d = "LAST_VIEWED_PATH";
class c extends i.Ay.PersistedStore {
    static displayName = "DefaultRouteStore";
    static persistKey = "DefaultRouteStore";
    static migrations = [
        () => {
            let e = a.w.get(d, null);
            return a.w.remove(d), { lastViewedPath: e };
        },
    ];
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
        o = e ?? l;
    }
    get defaultRoute() {
        return s.BVt.ME;
    }
    get lastNonVoiceRoute() {
        return o.lastViewedNonVoicePath ?? s.BVt.ME;
    }
    get fallbackRoute() {
        return s.BVt.ME;
    }
    getState() {
        return o;
    }
}
let _ = new c(r.h, {
    SAVE_LAST_ROUTE: function (e) {
        let { path: t } = e;
        return (o.lastViewedPath = t), !0;
    },
    SAVE_LAST_NON_VOICE_ROUTE: function (e) {
        let { path: t } = e;
        return (o.lastViewedNonVoicePath = t), !0;
    },
});

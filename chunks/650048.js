"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(506774),
    s = n(228366),
    a = n(652215);
let o = { lastViewedPath: null, lastViewedNonVoicePath: null },
    l = o,
    u = "LAST_VIEWED_PATH";
class c extends i.Ay.PersistedStore {
    static displayName = "DefaultRouteStore";
    static persistKey = "DefaultRouteStore";
    static migrations = [
        () => {
            let e = r.w.get(u, null);
            return r.w.remove(u), { lastViewedPath: e };
        },
    ];
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
        l = e ?? o;
    }
    get defaultRoute() {
        return a.BVt.ME;
    }
    get lastNonVoiceRoute() {
        return l.lastViewedNonVoicePath ?? a.BVt.ME;
    }
    get fallbackRoute() {
        return a.BVt.ME;
    }
    getState() {
        return l;
    }
}
let d = new c(s.h, {
    SAVE_LAST_ROUTE: function (e) {
        let { path: t } = e;
        return (l.lastViewedPath = t), !0;
    },
    SAVE_LAST_NON_VOICE_ROUTE: function (e) {
        let { path: t } = e;
        return (l.lastViewedNonVoicePath = t), !0;
    },
});

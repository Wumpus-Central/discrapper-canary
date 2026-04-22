"use strict";
n.d(t, { A: () => c });
var r = n(311907),
    i = n(506774),
    s = n(73153),
    a = n(652215);
let o = { lastViewedPath: null, lastViewedNonVoicePath: null },
    l = o,
    u = "LAST_VIEWED_PATH";
class d extends r.Ay.PersistedStore {
    static displayName = "DefaultRouteStore";
    static persistKey = "DefaultRouteStore";
    static migrations = [
        () => {
            let e = i.w.get(u, null);
            return i.w.remove(u), { lastViewedPath: e };
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
let c = new d(s.h, {
    SAVE_LAST_ROUTE: function (e) {
        let { path: t } = e;
        return (l.lastViewedPath = t), !0;
    },
    SAVE_LAST_NON_VOICE_ROUTE: function (e) {
        let { path: t } = e;
        return (l.lastViewedNonVoicePath = t), !0;
    },
});

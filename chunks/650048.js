"use strict";
n.d(t, { A: () => f });
var r = n(311907),
    i = n(506774),
    a = n(73153),
    s = n(652215);
let o = { lastViewedPath: null, lastViewedNonVoicePath: null },
    l = o,
    u = "LAST_VIEWED_PATH";
function c(e) {
    let { path: t } = e;
    return (l.lastViewedPath = t), !0;
}
function d(e) {
    let { path: t } = e;
    return (l.lastViewedNonVoicePath = t), !0;
}
class _ extends r.Ay.PersistedStore {
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
let f = new _(a.h, { SAVE_LAST_ROUTE: c, SAVE_LAST_NON_VOICE_ROUTE: d });

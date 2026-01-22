n.d(t, {
    A: () => h,
});
var r,
    i = n(311907),
    a = n(506774),
    s = n(73153),
    o = n(652215);

function l(e, t, n) {
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
let c = {
        lastViewedPath: null,
        lastViewedNonVoicePath: null,
    },
    u = c,
    d = "LAST_VIEWED_PATH";

function f(e) {
    let { path: t } = e;
    return (u.lastViewedPath = t), !0;
}

function p(e) {
    let { path: t } = e;
    return (u.lastViewedNonVoicePath = t), !0;
}
class _ extends (r = i.Ay.PersistedStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c;
        u = null != e ? e : c;
    }
    get defaultRoute() {
        return o.BVt.ME;
    }
    get lastNonVoiceRoute() {
        var e;
        return null != (e = u.lastViewedNonVoicePath) ? e : o.BVt.ME;
    }
    get fallbackRoute() {
        return o.BVt.ME;
    }
    getState() {
        return u;
    }
}
l(_, "displayName", "DefaultRouteStore"),
    l(_, "persistKey", "DefaultRouteStore"),
    l(_, "migrations", [
        () => {
            let e = a.w.get(d, null);
            return (
                a.w.remove(d),
                {
                    lastViewedPath: e,
                }
            );
        },
    ]);
let h = new _(s.h, {
    SAVE_LAST_ROUTE: f,
    SAVE_LAST_NON_VOICE_ROUTE: p,
});

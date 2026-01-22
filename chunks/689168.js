n.d(t, {
    A: () => v,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(451988),
    s = n(73153),
    o = n(375492),
    l = n(461213),
    c = n(652215);

function u(e, t, n) {
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

function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
let f = {},
    p = {},
    _ = 12e4,
    h = 15e3;

function m(e) {
    let { applicationId: t, activityType: n } = e,
        r = f[t];
    if (null == r) return !1;
    delete r[n];
}

function g(e, t, n) {
    null != p[e] && p[e].stop();
    let r = new a.Ep();
    r.start(n, () =>
        s.h.dispatch({
            type: "ACTIVITY_LAUNCH_FAIL",
            applicationId: e,
            activityType: t,
        }),
    ),
        (p[e] = r);
}

function E(e, t, n) {
    var r, i;
    let { applicationId: a, remotePartyId: s } = n;
    if (e === c.eAD.COMPLETE) {
        null == (i = f[a]) || delete i[t], null != p[a] && (p[a].stop(), delete p[a]);
        return;
    }
    let o = null != (r = f[a]) ? r : {};
    (o[t] = {
        state: e,
        remotePartyId: s,
    }),
        (f[a] = o),
        __OVERLAY__ || e !== c.eAD.FAILED ? e === c.eAD.LOADING && null != s && g(a, t, h) : g(a, t, _);
}

function b(e) {
    let { activityLauncherStates: t } = e;
    f = d({}, t);
}

function y(e) {
    return E(c.eAD.COMPLETE, c.xL.JOIN, e);
}

function O() {
    let e = Object.entries(f)
            .map((e) => {
                var t;
                let [n, r] = e;
                return {
                    applicationId: n,
                    remotePartyId: null == (t = r[c.xL.JOIN]) ? void 0 : t.remotePartyId,
                };
            })
            .filter((e) => {
                let { remotePartyId: t } = e;
                return null != t;
            }),
        t = !1;
    return (
        e.forEach((e) => {
            var n, r;
            let { applicationId: i, remotePartyId: a } = e,
                s = o.A.getApplicationActivity(i),
                u = l.A.getApplicationActivity(i);
            ((null == s || null == (n = s.party) ? void 0 : n.id) === a ||
                (null == u || null == (r = u.party) ? void 0 : r.id) === a) &&
                (E(c.eAD.COMPLETE, c.xL.JOIN, {
                    applicationId: i,
                    remotePartyId: a,
                }),
                (t = !0));
        }),
        t
    );
}
class A extends (r = i.Ay.Store) {
    initialize() {
        this.syncWith([o.A, l.A], O);
    }
    getState(e, t) {
        var n;
        let r = f[e];
        return null == r || null == (n = r[t]) ? void 0 : n.state;
    }
    getStates() {
        return f;
    }
}
u(A, "displayName", "ActivityLauncherStore");
let v = new A(s.h, {
    OVERLAY_INITIALIZE: b,
    ACTIVITY_JOIN_LOADING: (e) => E(c.eAD.LOADING, c.xL.JOIN, e),
    ACTIVITY_JOIN_FAILED: (e) => E(c.eAD.FAILED, c.xL.JOIN, e),
    ACTIVITY_JOIN: y,
    EMBEDDED_ACTIVITY_CLOSE: y,
    ACTIVITY_LAUNCH_FAIL: m,
});

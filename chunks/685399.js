n.d(t, {
    Ay: () => h,
    IQ: () => g,
    Rz: () => E,
    a1: () => m,
}),
    n(896048),
    n(321073);
var r = n(64700),
    i = n(311907),
    a = n(429913),
    s = n(290863),
    o = n(287809),
    l = n(403362),
    c = n(933958),
    u = n(969151);

function d(e, t, n) {
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

function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}

function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function h(e, t) {
    return g(
        (0, i.yK)([c.Ay], () =>
            null != e && null != e.id && "" !== e.id ? c.Ay.getEmbeddedActivitiesForChannel(e.id) : c.Am,
        ),
        t,
    );
}

function m(e) {
    let t = g((0, i.bG)([c.Ay], () => (null != e ? c.Ay.getEmbeddedActivitiesForGuild(e) : c.Am)));
    return r.useMemo(() => {
        let e = new Map();
        return (
            t.forEach((t) => {
                var n;
                let r = (0, u.H)(t.embeddedActivity.location);
                if (null == r) return;
                let i = null != (n = e.get(r)) ? n : [];
                i.push(t), e.set(r, i);
            }),
            e
        );
    }, [t]);
}

function g(e, t) {
    let n = e.map((e) => e.applicationId),
        s = (0, a.A)(n),
        c = new Set([]);
    for (let t of e) for (let e of t.userIds) c.add(e);
    let u = (0, i.yK)([o.default], () => {
        let e = [];
        for (let t of c) e.push(o.default.getUser(t));
        return e;
    }, [c]);
    return r.useMemo(() => {
        let n = new Map();
        return (
            u.forEach((e) => {
                null != e && n.set(e.id, e);
            }),
            e
                .map((e, r) => {
                    let i = s[r],
                        a = [];
                    if (null != a)
                        for (let r of e.userIds) {
                            let e = n.get(r);
                            if (null != e && null != t) {
                                let n = t(e);
                                null != n && a.push(n);
                            }
                        }
                    return null == i
                        ? null
                        : {
                              embeddedActivity: e,
                              application: i,
                              userParticipantAvatarUrls: a,
                          };
                })
                .filter(l.Vq)
        );
    }, [e, s, u, t]);
}

function E(e) {
    return (0, i.bG)(
        [s.A],
        () => {
            let t = new Map();
            return (
                e.forEach((e) => {
                    var n;
                    let r = s.A.findActivity(
                        null == e ? void 0 : e.embeddedActivity.userIds.values().next().value,
                        (t) => {
                            var n;
                            return t.application_id === (null == e || null == (n = e.application) ? void 0 : n.id);
                        },
                    );
                    t.set(
                        null == e || null == (n = e.application) ? void 0 : n.id,
                        _(f({}, e), {
                            presenceActivity: r,
                        }),
                    );
                }),
                t
            );
        },
        [e],
        i.My,
    );
}

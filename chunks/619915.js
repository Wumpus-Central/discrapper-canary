n.d(t, {
    QN: () => h,
    ZP: () => m,
    gb: () => g,
    uF: () => E,
}),
    n(388685),
    n(539854);
var r = n(473749),
    i = n(442837),
    a = n(835473),
    o = n(158776),
    s = n(594174),
    l = n(823379),
    c = n(317381),
    u = n(16609);
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
function m(e, t) {
    return g(
        (0, i.Wu)([c.ZP], () =>
            null != e && null != e.id && "" !== e.id ? c.ZP.getEmbeddedActivitiesForChannel(e.id) : c.i6,
        ),
        t,
    );
}
function h(e) {
    let t = g((0, i.e7)([c.ZP], () => (null != e ? c.ZP.getEmbeddedActivitiesForGuild(e) : c.i6)));
    return r.useMemo(() => {
        let e = new Map();
        return (
            t.forEach((t) => {
                var n;
                let r = (0, u.p)(t.embeddedActivity.location);
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
        o = (0, a.Z)(n),
        c = new Set([]);
    for (let t of e) for (let e of t.userIds) c.add(e);
    let u = (0, i.Wu)([s.default], () => {
        let e = [];
        for (let t of c) e.push(s.default.getUser(t));
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
                    let i = o[r],
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
                .filter(l.lm)
        );
    }, [e, o, u, t]);
}
function E(e) {
    return (0, i.e7)(
        [o.Z],
        () => {
            let t = new Map();
            return (
                e.forEach((e) => {
                    var n;
                    let r = o.Z.findActivity(
                        null == e ? void 0 : e.embeddedActivity.userIds.values().next().value,
                        (t) => {
                            var n;
                            return t.application_id === (null == e || null == (n = e.application) ? void 0 : n.id);
                        },
                    );
                    t.set(
                        null == e || null == (n = e.application) ? void 0 : n.id,
                        _(f({}, e), { presenceActivity: r }),
                    );
                }),
                t
            );
        },
        [e],
        i.pF,
    );
}

n.d(t, {
    QN: () => p,
    ZP: () => s,
    gb: () => f,
    uF: () => v
}),
    n(47120),
    n(653041);
var i = n(192379),
    r = n(442837),
    o = n(835473),
    l = n(158776),
    c = n(594174),
    a = n(823379),
    u = n(317381),
    d = n(16609);
function s(e, t) {
    return f(
        (0, r.Wu)([u.ZP], () => (null != e && null != e.id && '' !== e.id ? u.ZP.getEmbeddedActivitiesForChannel(e.id) : u.i6)),
        t
    );
}
function p(e) {
    let t = f((0, r.e7)([u.ZP], () => (null != e ? u.ZP.getEmbeddedActivitiesForGuild(e) : u.i6)));
    return i.useMemo(() => {
        let e = new Map();
        return (
            t.forEach((t) => {
                var n;
                let i = (0, d.pY)(t.embeddedActivity.location);
                if (null == i) return;
                let r = null != (n = e.get(i)) ? n : [];
                r.push(t), e.set(i, r);
            }),
            e
        );
    }, [t]);
}
function f(e, t) {
    let n = e.map((e) => e.applicationId),
        l = (0, o.Z)(n),
        u = new Set([]);
    for (let t of e) for (let e of t.userIds) u.add(e);
    let d = (0, r.Wu)(
        [c.default],
        () => {
            let e = [];
            for (let t of u) e.push(c.default.getUser(t));
            return e;
        },
        [u]
    );
    return i.useMemo(() => {
        let n = new Map();
        return (
            d.forEach((e) => {
                null != e && n.set(e.id, e);
            }),
            e
                .map((e, i) => {
                    let r = l[i],
                        o = [];
                    if (null != o)
                        for (let i of e.userIds) {
                            let e = n.get(i);
                            if (null != e && null != t) {
                                let n = t(e);
                                null != n && o.push(n);
                            }
                        }
                    return null == r
                        ? null
                        : {
                              embeddedActivity: e,
                              application: r,
                              userParticipantAvatarUrls: o
                          };
                })
                .filter(a.lm)
        );
    }, [e, l, d, t]);
}
function v(e) {
    return (0, r.e7)(
        [l.Z],
        () => {
            let t = new Map();
            return (
                e.forEach((e) => {
                    var n, i, r;
                    let o = l.Z.findActivity(null == e ? void 0 : e.embeddedActivity.userIds.values().next().value, (t) => {
                        var n;
                        return t.application_id === (null == e || null == (n = e.application) ? void 0 : n.id);
                    });
                    t.set(
                        null == e || null == (n = e.application) ? void 0 : n.id,
                        ((i = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })({}, e)),
                        (r = r = { presenceActivity: o }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        i)
                    );
                }),
                t
            );
        },
        [e],
        r.pF
    );
}

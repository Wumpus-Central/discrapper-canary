n.d(t, {
    QN: () => E,
    ZP: () => d,
    gb: () => _,
    uF: () => O
}),
    n(388685),
    n(539854);
var r = n(73800),
    i = n(442837),
    l = n(835473),
    o = n(158776),
    a = n(594174),
    s = n(823379),
    c = n(317381),
    u = n(16609);
function d(e, t) {
    return _(
        (0, i.Wu)([c.ZP], () => (null != e && null != e.id && '' !== e.id ? c.ZP.getEmbeddedActivitiesForChannel(e.id) : c.i6)),
        t
    );
}
function E(e) {
    let t = _((0, i.e7)([c.ZP], () => (null != e ? c.ZP.getEmbeddedActivitiesForGuild(e) : c.i6)));
    return r.useMemo(() => {
        let e = new Map();
        return (
            t.forEach((t) => {
                var n;
                let r = (0, u.pY)(t.embeddedActivity.location);
                if (null == r) return;
                let i = null != (n = e.get(r)) ? n : [];
                i.push(t), e.set(r, i);
            }),
            e
        );
    }, [t]);
}
function _(e, t) {
    let n = e.map((e) => e.applicationId),
        o = (0, l.Z)(n),
        c = new Set([]);
    for (let t of e) for (let e of t.userIds) c.add(e);
    let u = (0, i.Wu)(
        [a.default],
        () => {
            let e = [];
            for (let t of c) e.push(a.default.getUser(t));
            return e;
        },
        [c]
    );
    return r.useMemo(() => {
        let n = new Map();
        return (
            u.forEach((e) => {
                null != e && n.set(e.id, e);
            }),
            e
                .map((e, r) => {
                    let i = o[r],
                        l = [];
                    if (null != l)
                        for (let r of e.userIds) {
                            let e = n.get(r);
                            if (null != e && null != t) {
                                let n = t(e);
                                null != n && l.push(n);
                            }
                        }
                    return null == i
                        ? null
                        : {
                              embeddedActivity: e,
                              application: i,
                              userParticipantAvatarUrls: l
                          };
                })
                .filter(s.lm)
        );
    }, [e, o, u, t]);
}
function O(e) {
    return (0, i.e7)(
        [o.Z],
        () => {
            let t = new Map();
            return (
                e.forEach((e) => {
                    var n, r, i;
                    let l = o.Z.findActivity(null == e ? void 0 : e.embeddedActivity.userIds.values().next().value, (t) => {
                        var n;
                        return t.application_id === (null == e || null == (n = e.application) ? void 0 : n.id);
                    });
                    t.set(
                        null == e || null == (n = e.application) ? void 0 : n.id,
                        ((r = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, e)),
                        (i = i = { presenceActivity: l }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        r)
                    );
                }),
                t
            );
        },
        [e],
        i.pF
    );
}

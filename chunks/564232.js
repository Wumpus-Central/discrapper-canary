r.d(t, { default: () => x }), r(388685);
var n = r(255367),
    s = r(73800),
    i = r(392711),
    l = r.n(i),
    u = r(442837),
    o = r(481060),
    c = r(239091),
    d = r(276264),
    a = r(600164),
    f = r(313201),
    m = r(670188),
    b = r(271383),
    g = r(699516),
    h = r(594174),
    p = r(709054),
    O = r(432496),
    j = r(981631),
    I = r(388032),
    y = r(763147);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function S(e) {
    let { guildId: t, guildOwnerId: i, member: l } = e,
        u = h.default.getUser(l.userId),
        o = s.useRef(null);
    return (0, n.jsx)(
        m.Z,
        {
            targetElementRef: o,
            userId: l.userId,
            guildId: t,
            spacing: 14,
            clickTrap: !0,
            children: (e, s) => {
                let { isShown: a } = s;
                return (0, n.jsx)(
                    d.Z,
                    w(
                        {
                            ref: o,
                            className: y.member,
                            selected: a,
                            colorString: l.colorString,
                            colorStrings: l.colorStrings,
                            user: u,
                            isOwner: l.userId === i,
                            nick: l.nick,
                            premiumSince: null == l.premiumSince ? null : new Date(l.premiumSince),
                            guildId: t,
                            onContextMenu: (e) => {
                                (0, c.jW)(e, async () => {
                                    let { default: e } = await Promise.all([r.e('79695'), r.e('26976'), r.e('88606')]).then(r.bind(r, 415118));
                                    return (r) => {
                                        var s, i;
                                        return (0, n.jsx)(
                                            e,
                                            ((s = w({}, r)),
                                            (i = i =
                                                {
                                                    user: u,
                                                    guildId: t,
                                                    showMediaItems: !0
                                                }),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(i))
                                                : (function (e, t) {
                                                      var r = Object.keys(e);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var n = Object.getOwnPropertySymbols(e);
                                                          r.push.apply(r, n);
                                                      }
                                                      return r;
                                                  })(Object(i)).forEach(function (e) {
                                                      Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(i, e));
                                                  }),
                                            s)
                                        );
                                    };
                                });
                            }
                        },
                        e
                    ),
                    l.userId
                );
            }
        },
        u.id
    );
}
function x(e) {
    let { guild: t, transitionState: r, onClose: i } = e,
        c = (0, f.Dt)(),
        d = s.useMemo(() => {
            let e = g.Z.getRelationships();
            return p.default.keys(e).filter((t) => e[t] === j.OGo.FRIEND);
        }, []);
    s.useEffect(() => {
        O.Z.fetchFriendMembersIfNotFetched(t.id, d);
    }, [t.id, d]);
    let m = (0, u.e7)([b.ZP], () => b.ZP.getMembers(t.id)),
        w = s.useMemo(
            () =>
                l()(m)
                    .filter((e) => !!d.includes(e.userId) && null != h.default.getUser(e.userId))
                    .sortBy((e) => {
                        var t;
                        let r = h.default.getUser(e.userId);
                        return (null != r ? (null != (t = e.nick) ? t : r.username) : '').toLocaleLowerCase();
                    })
                    .map((e) =>
                        (0, n.jsx)(
                            S,
                            {
                                guildId: t.id,
                                guildOwnerId: t.ownerId,
                                member: e
                            },
                            e.userId
                        )
                    )
                    .value(),
            [d, t.id, t.ownerId, m]
        ),
        x = O.Z.isFetchingFriendsForGuild(t.id);
    return (0, n.jsxs)(o.Y0X, {
        transitionState: r,
        size: o.CgR.SMALL,
        'aria-labelledby': c,
        children: [
            (0, n.jsxs)(o.xBx, {
                separator: !1,
                justify: a.Z.Justify.BETWEEN,
                children: [
                    (0, n.jsxs)('div', {
                        className: y.heading,
                        children: [
                            (0, n.jsx)('span', { children: (0, n.jsx)(o.iFz, {}) }),
                            (0, n.jsx)(o.X6q, {
                                variant: 'heading-lg/semibold',
                                children: I.intl.format(x ? I.t.EtQnZm : I.t.OgMdNT, {
                                    guildName: t.name,
                                    numFriends: w.length
                                })
                            })
                        ]
                    }),
                    (0, n.jsx)(o.olH, { onClick: i })
                ]
            }),
            (0, n.jsxs)(o.hzk, {
                className: y.content,
                children: [x && (0, n.jsx)(o.$jN, {}), (0, n.jsx)(o.Ttm, { children: w })]
            })
        ]
    });
}

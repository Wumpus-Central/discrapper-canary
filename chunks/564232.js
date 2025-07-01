r.d(t, { default: () => w });
var n = r(255367),
    i = r(73800),
    s = r(392711),
    l = r.n(s),
    u = r(442837),
    o = r(481060),
    d = r(239091),
    c = r(276264),
    a = r(600164),
    m = r(313201),
    f = r(670188),
    b = r(271383),
    g = r(699516),
    h = r(594174),
    p = r(432496),
    O = r(388032),
    j = r(763147);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function y(e) {
    let { guildId: t, guildOwnerId: s, member: l } = e,
        u = h.default.getUser(l.userId),
        o = i.useRef(null);
    return (0, n.jsx)(
        f.Z,
        {
            targetElementRef: o,
            userId: l.userId,
            guildId: t,
            spacing: 14,
            clickTrap: !0,
            children: (e, i) => {
                let { isShown: a } = i;
                return (0, n.jsx)(
                    c.Z,
                    I(
                        {
                            ref: o,
                            className: j.member,
                            selected: a,
                            colorString: l.colorString,
                            colorStrings: l.colorStrings,
                            user: u,
                            isOwner: l.userId === s,
                            nick: l.nick,
                            premiumSince: null == l.premiumSince ? null : new Date(l.premiumSince),
                            guildId: t,
                            onContextMenu: (e) => {
                                (0, d.jW)(e, async () => {
                                    let { default: e } = await Promise.all([r.e('79695'), r.e('26976'), r.e('88606')]).then(r.bind(r, 415118));
                                    return (r) => {
                                        var i, s;
                                        return (0, n.jsx)(
                                            e,
                                            ((i = I({}, r)),
                                            (s = s =
                                                {
                                                    user: u,
                                                    guildId: t,
                                                    showMediaItems: !0
                                                }),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                                                : (function (e, t) {
                                                      var r = Object.keys(e);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var n = Object.getOwnPropertySymbols(e);
                                                          r.push.apply(r, n);
                                                      }
                                                      return r;
                                                  })(Object(s)).forEach(function (e) {
                                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                                                  }),
                                            i)
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
function w(e) {
    let { guild: t, transitionState: r, onClose: s } = e,
        d = (0, m.Dt)(),
        c = i.useMemo(() => g.Z.getFriendIDs(), []);
    i.useEffect(() => {
        p.Z.fetchFriendMembersIfNotFetched(t.id, c);
    }, [t.id, c]);
    let f = (0, u.e7)([b.ZP], () => b.ZP.getMembers(t.id)),
        I = i.useMemo(
            () =>
                l()(f)
                    .filter((e) => !!c.includes(e.userId) && null != h.default.getUser(e.userId))
                    .sortBy((e) => {
                        var t;
                        let r = h.default.getUser(e.userId);
                        return (null != r ? (null != (t = e.nick) ? t : r.username) : '').toLocaleLowerCase();
                    })
                    .map((e) =>
                        (0, n.jsx)(
                            y,
                            {
                                guildId: t.id,
                                guildOwnerId: t.ownerId,
                                member: e
                            },
                            e.userId
                        )
                    )
                    .value(),
            [c, t.id, t.ownerId, f]
        ),
        w = p.Z.isFetchingFriendsForGuild(t.id);
    return (0, n.jsxs)(o.Y0X, {
        transitionState: r,
        size: o.CgR.SMALL,
        'aria-labelledby': d,
        parentComponent: 'GuildFriendsModal',
        children: [
            (0, n.jsxs)(o.xBx, {
                separator: !1,
                justify: a.Z.Justify.BETWEEN,
                children: [
                    (0, n.jsxs)('div', {
                        className: j.heading,
                        children: [
                            (0, n.jsx)('span', { children: (0, n.jsx)(o.iFz, {}) }),
                            (0, n.jsx)(o.X6q, {
                                variant: 'heading-lg/semibold',
                                children: O.intl.format(w ? O.t.EtQnZm : O.t.OgMdNT, {
                                    guildName: t.name,
                                    numFriends: I.length
                                })
                            })
                        ]
                    }),
                    (0, n.jsx)(o.olH, { onClick: s })
                ]
            }),
            (0, n.jsxs)(o.hzk, {
                className: j.content,
                children: [w && (0, n.jsx)(o.$jN, {}), (0, n.jsx)(o.Ttm, { children: I })]
            })
        ]
    });
}

r.d(t, { default: () => y });
var n = r(255367),
    i = r(73800),
    u = r(392711),
    s = r.n(u),
    o = r(442837),
    l = r(82659),
    c = r(481060),
    d = r(239091),
    a = r(276264),
    f = r(670188),
    m = r(271383),
    b = r(699516),
    g = r(594174),
    p = r(432496),
    O = r(388032),
    h = r(763147);
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
function j(e) {
    let { guildId: t, guildOwnerId: u, member: s } = e,
        o = g.default.getUser(s.userId),
        l = i.useRef(null);
    return (0, n.jsx)(
        f.Z,
        {
            targetElementRef: l,
            userId: s.userId,
            guildId: t,
            spacing: 14,
            clickTrap: !0,
            children: (e, i) => {
                let { isShown: c } = i;
                return (0, n.jsx)(
                    a.Z,
                    I(
                        {
                            ref: l,
                            className: h.member,
                            selected: c,
                            colorString: s.colorString,
                            colorStrings: s.colorStrings,
                            user: o,
                            isOwner: s.userId === u,
                            nick: s.nick,
                            premiumSince: null == s.premiumSince ? null : new Date(s.premiumSince),
                            guildId: t,
                            onContextMenu: (e) => {
                                (0, d.jW)(e, async () => {
                                    let { default: e } = await Promise.all([r.e('79695'), r.e('26976'), r.e('88606')]).then(r.bind(r, 415118));
                                    return (r) => {
                                        var i, u;
                                        return (0, n.jsx)(
                                            e,
                                            ((i = I({}, r)),
                                            (u = u =
                                                {
                                                    user: o,
                                                    guildId: t,
                                                    showMediaItems: !0
                                                }),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(u))
                                                : (function (e, t) {
                                                      var r = Object.keys(e);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var n = Object.getOwnPropertySymbols(e);
                                                          r.push.apply(r, n);
                                                      }
                                                      return r;
                                                  })(Object(u)).forEach(function (e) {
                                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(u, e));
                                                  }),
                                            i)
                                        );
                                    };
                                });
                            }
                        },
                        e
                    ),
                    s.userId
                );
            }
        },
        o.id
    );
}
function y(e) {
    let { guild: t, transitionState: r, onClose: u } = e,
        d = i.useMemo(() => b.Z.getFriendIDs(), []);
    i.useEffect(() => {
        p.Z.fetchFriendMembersIfNotFetched(t.id, d);
    }, [t.id, d]);
    let a = (0, o.e7)([m.ZP], () => m.ZP.getMembers(t.id)),
        f = i.useMemo(
            () =>
                s()(a)
                    .filter((e) => !!d.includes(e.userId) && null != g.default.getUser(e.userId))
                    .sortBy((e) => {
                        var t;
                        let r = g.default.getUser(e.userId);
                        return (null != r ? (null != (t = e.nick) ? t : r.username) : '').toLocaleLowerCase();
                    })
                    .map((e) =>
                        (0, n.jsx)(
                            j,
                            {
                                guildId: t.id,
                                guildOwnerId: t.ownerId,
                                member: e
                            },
                            e.userId
                        )
                    )
                    .value(),
            [d, t.id, t.ownerId, a]
        ),
        h = p.Z.isFetchingFriendsForGuild(t.id);
    return (0, n.jsxs)(l.u, {
        title: O.intl.string(O.t.kYxEcH),
        subtitle: O.intl.format(h ? O.t.EtQnZm : O.t.OgMdNT, {
            guildName: t.name,
            numFriends: f.length
        }),
        actions: void 0,
        transitionState: r,
        onClose: u,
        children: [h && (0, n.jsx)(c.$jN, {}), f]
    });
}

r.d(t, { default: () => I });
var n = r(54381),
    i = r(473749),
    s = r(392711),
    u = r.n(s),
    l = r(793030),
    o = r(442837),
    c = r(481060),
    d = r(239091),
    a = r(276264),
    f = r(670188),
    m = r(271383),
    b = r(699516),
    p = r(594174),
    g = r(432496),
    O = r(388032),
    j = r(283602);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function w(e) {
    let { guildId: t, guildOwnerId: s, member: u } = e,
        l = p.default.getUser(u.userId),
        o = i.useRef(null);
    return (0, n.jsx)(
        f.Z,
        {
            targetElementRef: o,
            userId: u.userId,
            guildId: t,
            spacing: 14,
            clickTrap: !0,
            children: (e, i) => {
                let { isShown: c } = i;
                return (0, n.jsx)(
                    a.Z,
                    y(
                        {
                            ref: o,
                            className: j.member,
                            selected: c,
                            colorString: u.colorString,
                            colorStrings: u.colorStrings,
                            user: l,
                            isOwner: u.userId === s,
                            nick: u.nick,
                            premiumSince: null == u.premiumSince ? null : new Date(u.premiumSince),
                            guildId: t,
                            onContextMenu: (e) => {
                                (0, d.jW)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        r.e("79695"),
                                        r.e("26976"),
                                        r.e("52092"),
                                    ]).then(r.bind(r, 415118));
                                    return (r) => {
                                        var i, s;
                                        return (0, n.jsx)(
                                            e,
                                            ((i = y({}, r)),
                                            (s = s =
                                                {
                                                    user: l,
                                                    guildId: t,
                                                    showMediaItems: !0,
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
                                                      Object.defineProperty(
                                                          i,
                                                          e,
                                                          Object.getOwnPropertyDescriptor(s, e),
                                                      );
                                                  }),
                                            i),
                                        );
                                    };
                                });
                            },
                        },
                        e,
                    ),
                    u.userId,
                );
            },
        },
        l.id,
    );
}
function I(e) {
    let { guild: t, transitionState: r, onClose: s } = e,
        d = i.useMemo(() => b.Z.getFriendIDs(), []);
    i.useEffect(() => {
        g.Z.fetchFriendMembersIfNotFetched(t.id, d);
    }, [t.id, d]);
    let a = (0, o.e7)([m.ZP], () => m.ZP.getMembers(t.id)),
        f = i.useMemo(
            () =>
                u()(a)
                    .filter((e) => !!d.includes(e.userId) && null != p.default.getUser(e.userId))
                    .sortBy((e) => {
                        var t;
                        let r = p.default.getUser(e.userId);
                        return (null != r ? (null != (t = e.nick) ? t : r.username) : "").toLocaleLowerCase();
                    })
                    .map((e) =>
                        (0, n.jsx)(
                            w,
                            {
                                guildId: t.id,
                                guildOwnerId: t.ownerId,
                                member: e,
                            },
                            e.userId,
                        ),
                    )
                    .value(),
            [d, t.id, t.ownerId, a],
        ),
        j = g.Z.isFetchingFriendsForGuild(t.id);
    return (0, n.jsxs)(l.Modal, {
        title: O.intl.string(O.t.kYxEcH),
        subtitle: O.intl.format(j ? O.t.EtQnZi : O.t.OgMdNS, {
            guildName: t.name,
            numFriends: f.length,
        }),
        actions: void 0,
        transitionState: r,
        onClose: s,
        children: [j && (0, n.jsx)(c.$jN, {}), f],
    });
}

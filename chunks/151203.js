r.d(t, {
    default: () => I,
});
var n = r(627968),
    i = r(64700),
    s = r(735438),
    u = r.n(s),
    l = r(158954),
    o = r(311907),
    c = r(397927),
    d = r(442433),
    a = r(110574),
    f = r(342296),
    p = r(696451),
    b = r(994500),
    g = r(287809),
    m = r(542986),
    O = r(985018),
    y = r(275167);

function j(e) {
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
        l = g.default.getUser(u.userId),
        o = i.useRef(null);
    return (0, n.jsx)(
        f.A,
        {
            targetElementRef: o,
            userId: u.userId,
            guildId: t,
            spacing: 14,
            clickTrap: !0,
            children: (e, i) => {
                let { isShown: c } = i;
                return (0, n.jsx)(
                    a.A,
                    j(
                        {
                            ref: o,
                            className: y.Dc,
                            selected: c,
                            colorString: u.colorString,
                            colorStrings: u.colorStrings,
                            user: l,
                            isOwner: u.userId === s,
                            nick: u.nick,
                            premiumSince: null == u.premiumSince ? null : new Date(u.premiumSince),
                            guildId: t,
                            onContextMenu: (e) => {
                                (0, d.L3)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        r.e("97262"),
                                        r.e("91042"),
                                        r.e("21601"),
                                    ]).then(r.bind(r, 365689));
                                    return (r) => {
                                        var i, s;
                                        return (0, n.jsx)(
                                            e,
                                            ((i = j({}, r)),
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
        d = i.useMemo(() => b.A.getFriendIDs(), []);
    i.useEffect(() => {
        m.A.fetchFriendMembersIfNotFetched(t.id, d);
    }, [t.id, d]);
    let a = (0, o.bG)([p.Ay], () => p.Ay.getMembers(t.id)),
        f = i.useMemo(
            () =>
                u()(a)
                    .filter((e) => !!d.includes(e.userId) && null != g.default.getUser(e.userId))
                    .sortBy((e) => {
                        var t;
                        let r = g.default.getUser(e.userId);
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
        y = m.A.isFetchingFriendsForGuild(t.id);
    return (0, n.jsxs)(l.Modal, {
        title: O.intl.string(O.t.kYxEcH),
        subtitle: O.intl.format(y ? O.t.EtQnZi : O.t.OgMdNS, {
            guildName: t.name,
            numFriends: f.length,
        }),
        actions: void 0,
        transitionState: r,
        onClose: s,
        children: [y && (0, n.jsx)(c.y$y, {}), f],
    });
}

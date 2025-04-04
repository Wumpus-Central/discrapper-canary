t.d(r, { default: () => I }), t(388685);
var n = t(200651),
    i = t(192379),
    s = t(392711),
    l = t.n(s),
    c = t(442837),
    o = t(481060),
    u = t(239091),
    d = t(276264),
    a = t(600164),
    b = t(313201),
    m = t(670188),
    p = t(271383),
    f = t(699516),
    g = t(594174),
    j = t(709054),
    h = t(432496),
    O = t(981631),
    y = t(388032),
    w = t(763147);
function x(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {},
            n = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            n.forEach(function (r) {
                var n;
                (n = t[r]),
                    r in e
                        ? Object.defineProperty(e, r, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[r] = n);
            });
    }
    return e;
}
function I(e) {
    let { guild: r, transitionState: s, onClose: I } = e,
        P = (0, b.Dt)(),
        k = i.useMemo(() => {
            let e = f.Z.getRelationships();
            return j.default.keys(e).filter((r) => e[r] === O.OGo.FRIEND);
        }, []);
    i.useEffect(() => {
        h.Z.fetchFriendMembersIfNotFetched(r.id, k);
    }, [r.id, k]);
    let S = (0, c.e7)([p.ZP], () => p.ZP.getMembers(r.id)),
        v = i.useMemo(
            () =>
                l()(S)
                    .filter((e) => !!k.includes(e.userId) && null != g.default.getUser(e.userId))
                    .sortBy((e) => {
                        var r;
                        let t = g.default.getUser(e.userId);
                        return (null != t ? (null != (r = e.nick) ? r : t.username) : '').toLocaleLowerCase();
                    })
                    .map((e) => {
                        let i = g.default.getUser(e.userId);
                        return (0, n.jsx)(
                            m.Z,
                            {
                                userId: e.userId,
                                guildId: r.id,
                                spacing: 14,
                                clickTrap: !0,
                                children: (s, l) => {
                                    let { isShown: c } = l;
                                    return (0, n.jsx)(
                                        d.Z,
                                        x(
                                            {
                                                className: w.member,
                                                selected: c,
                                                colorString: e.colorString,
                                                colorStrings: e.colorStrings,
                                                user: i,
                                                isOwner: e.userId === r.ownerId,
                                                nick: e.nick,
                                                premiumSince: null == e.premiumSince ? null : new Date(e.premiumSince),
                                                guildId: r.id,
                                                onContextMenu: (e) => {
                                                    (0, u.jW)(e, async () => {
                                                        let { default: e } = await Promise.all([t.e('79695'), t.e('26976'), t.e('88606')]).then(t.bind(t, 415118));
                                                        return (t) => {
                                                            var s, l;
                                                            return (0, n.jsx)(
                                                                e,
                                                                ((s = x({}, t)),
                                                                (l = l =
                                                                    {
                                                                        user: i,
                                                                        guildId: r.id,
                                                                        showMediaItems: !0
                                                                    }),
                                                                Object.getOwnPropertyDescriptors
                                                                    ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(l))
                                                                    : (function (e, r) {
                                                                          var t = Object.keys(e);
                                                                          if (Object.getOwnPropertySymbols) {
                                                                              var n = Object.getOwnPropertySymbols(e);
                                                                              t.push.apply(t, n);
                                                                          }
                                                                          return t;
                                                                      })(Object(l)).forEach(function (e) {
                                                                          Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(l, e));
                                                                      }),
                                                                s)
                                                            );
                                                        };
                                                    });
                                                }
                                            },
                                            s
                                        ),
                                        e.userId
                                    );
                                }
                            },
                            i.id
                        );
                    })
                    .value(),
            [k, r.id, r.ownerId, S]
        ),
        N = h.Z.isFetchingFriendsForGuild(r.id);
    return (0, n.jsxs)(o.Y0X, {
        transitionState: s,
        size: o.CgR.SMALL,
        'aria-labelledby': P,
        children: [
            (0, n.jsxs)(o.xBx, {
                separator: !1,
                justify: a.Z.Justify.BETWEEN,
                children: [
                    (0, n.jsxs)('div', {
                        className: w.heading,
                        children: [
                            (0, n.jsx)('span', { children: (0, n.jsx)(o.iFz, {}) }),
                            (0, n.jsx)(o.X6q, {
                                variant: 'heading-lg/semibold',
                                children: y.NW.format(N ? y.t.EtQnZm : y.t.OgMdNT, {
                                    guildName: r.name,
                                    numFriends: v.length
                                })
                            })
                        ]
                    }),
                    (0, n.jsx)(o.olH, { onClick: I })
                ]
            }),
            (0, n.jsxs)(o.hzk, {
                className: w.content,
                children: [N && (0, n.jsx)(o.$jN, {}), (0, n.jsx)(o.Ttm, { children: v })]
            })
        ]
    });
}

r.d(t, { default: () => w }), r(388685);
var n = r(200651),
    i = r(192379),
    s = r(392711),
    l = r.n(s),
    o = r(442837),
    u = r(481060),
    c = r(239091),
    d = r(276264),
    a = r(600164),
    f = r(313201),
    m = r(670188),
    b = r(271383),
    h = r(699516),
    g = r(594174),
    p = r(709054),
    O = r(432496),
    j = r(981631),
    y = r(388032),
    I = r(985959);
function S(e) {
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
function w(e) {
    let { guild: t, transitionState: s, onClose: w } = e,
        M = (0, f.Dt)(),
        x = i.useMemo(() => {
            let e = h.Z.getRelationships();
            return p.default.keys(e).filter((t) => e[t] === j.OGo.FRIEND);
        }, []);
    i.useEffect(() => {
        O.Z.fetchFriendMembersIfNotFetched(t.id, x);
    }, [t.id, x]);
    let N = (0, o.e7)([b.ZP], () => b.ZP.getMembers(t.id)),
        P = i.useMemo(
            () =>
                l()(N)
                    .filter((e) => !!x.includes(e.userId) && null != g.default.getUser(e.userId))
                    .sortBy((e) => {
                        var t;
                        let r = g.default.getUser(e.userId);
                        return (null != r ? (null != (t = e.nick) ? t : r.username) : '').toLocaleLowerCase();
                    })
                    .map((e) => {
                        let i = g.default.getUser(e.userId);
                        return (0, n.jsx)(
                            m.Z,
                            {
                                userId: e.userId,
                                guildId: t.id,
                                spacing: 14,
                                clickTrap: !0,
                                children: (s, l) => {
                                    let { isShown: o } = l;
                                    return (0, n.jsx)(
                                        d.Z,
                                        S(
                                            {
                                                className: I.member,
                                                selected: o,
                                                colorString: e.colorString,
                                                colorStrings: e.colorStrings,
                                                user: i,
                                                isOwner: e.userId === t.ownerId,
                                                nick: e.nick,
                                                premiumSince: null == e.premiumSince ? null : new Date(e.premiumSince),
                                                guildId: t.id,
                                                onContextMenu: (e) => {
                                                    (0, c.jW)(e, async () => {
                                                        let { default: e } = await Promise.all([r.e('26881'), r.e('26976'), r.e('30343')]).then(r.bind(r, 415118));
                                                        return (r) => {
                                                            var s, l;
                                                            return (0, n.jsx)(
                                                                e,
                                                                ((s = S({}, r)),
                                                                (l = l =
                                                                    {
                                                                        user: i,
                                                                        guildId: t.id,
                                                                        showMediaItems: !0
                                                                    }),
                                                                Object.getOwnPropertyDescriptors
                                                                    ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(l))
                                                                    : (function (e, t) {
                                                                          var r = Object.keys(e);
                                                                          if (Object.getOwnPropertySymbols) {
                                                                              var n = Object.getOwnPropertySymbols(e);
                                                                              r.push.apply(r, n);
                                                                          }
                                                                          return r;
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
            [x, t.id, t.ownerId, N]
        ),
        v = O.Z.isFetchingFriendsForGuild(t.id);
    return (0, n.jsxs)(u.Y0X, {
        transitionState: s,
        size: u.CgR.SMALL,
        'aria-labelledby': M,
        children: [
            (0, n.jsxs)(u.xBx, {
                separator: !1,
                justify: a.Z.Justify.BETWEEN,
                children: [
                    (0, n.jsxs)('div', {
                        className: I.heading,
                        children: [
                            (0, n.jsx)('span', { children: (0, n.jsx)(u.iFz, {}) }),
                            (0, n.jsx)(u.X6q, {
                                variant: 'heading-lg/semibold',
                                children: y.NW.format(v ? y.t.EtQnZm : y.t.OgMdNT, {
                                    guildName: t.name,
                                    numFriends: P.length
                                })
                            })
                        ]
                    }),
                    (0, n.jsx)(u.olH, { onClick: w })
                ]
            }),
            (0, n.jsxs)(u.hzk, {
                className: I.content,
                children: [v && (0, n.jsx)(u.$jN, {}), (0, n.jsx)(u.Ttm, { children: P })]
            })
        ]
    });
}

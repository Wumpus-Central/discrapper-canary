t.d(r, { default: () => k }), t(47120);
var n = t(200651),
    i = t(192379),
    s = t(392711),
    l = t.n(s),
    c = t(442837),
    o = t(481060),
    d = t(239091),
    u = t(276264),
    a = t(600164),
    p = t(313201),
    b = t(184301),
    m = t(347475),
    f = t(271383),
    g = t(699516),
    j = t(594174),
    h = t(709054),
    y = t(432496),
    O = t(981631),
    w = t(388032),
    x = t(763147);
function I(e) {
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
function P(e, r) {
    return (
        (r = null != r ? r : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : (function (e, r) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              }),
        e
    );
}
function k(e) {
    let { guild: r, transitionState: s, onClose: k } = e,
        S = (0, p.Dt)(),
        v = i.useMemo(() => {
            let e = g.Z.getRelationships();
            return h.default.keys(e).filter((r) => e[r] === O.OGo.FRIEND);
        }, []);
    i.useEffect(() => {
        y.Z.fetchFriendMembersIfNotFetched(r.id, v);
    }, [r.id, v]);
    let N = (0, c.e7)([f.ZP], () => f.ZP.getMembers(r.id)),
        Z = i.useMemo(
            () =>
                l()(N)
                    .filter((e) => !!v.includes(e.userId) && null != j.default.getUser(e.userId))
                    .sortBy((e) => {
                        var r;
                        let t = j.default.getUser(e.userId);
                        return (null != t ? (null != (r = e.nick) ? r : t.username) : '').toLocaleLowerCase();
                    })
                    .map((e) => {
                        let i = j.default.getUser(e.userId);
                        return (0, n.jsx)(
                            o.yRy,
                            {
                                preload: () => (0, b.Z)(i.id, i.getAvatarURL(r.id, 80), { guildId: r.id }),
                                renderPopout: (t) =>
                                    (0, n.jsx)(
                                        m.Z,
                                        P(I({}, t), {
                                            userId: e.userId,
                                            guildId: r.id
                                        })
                                    ),
                                spacing: 14,
                                clickTrap: !0,
                                children: (s, l) => {
                                    let { isShown: c } = l;
                                    return (0, n.jsx)(
                                        u.Z,
                                        I(
                                            {
                                                className: x.member,
                                                selected: c,
                                                colorString: e.colorString,
                                                colorStrings: e.colorStrings,
                                                user: i,
                                                isOwner: e.userId === r.ownerId,
                                                nick: e.nick,
                                                premiumSince: null == e.premiumSince ? null : new Date(e.premiumSince),
                                                guildId: r.id,
                                                onContextMenu: (e) => {
                                                    (0, d.jW)(e, async () => {
                                                        let { default: e } = await Promise.all([t.e('79695'), t.e('26976'), t.e('88606')]).then(t.bind(t, 415118));
                                                        return (t) =>
                                                            (0, n.jsx)(
                                                                e,
                                                                P(I({}, t), {
                                                                    user: i,
                                                                    guildId: r.id,
                                                                    showMediaItems: !0
                                                                })
                                                            );
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
            [v, r.id, r.ownerId, N]
        ),
        E = y.Z.isFetchingFriendsForGuild(r.id);
    return (0, n.jsxs)(o.Y0X, {
        transitionState: s,
        size: o.CgR.SMALL,
        'aria-labelledby': S,
        children: [
            (0, n.jsxs)(o.xBx, {
                separator: !1,
                justify: a.Z.Justify.BETWEEN,
                children: [
                    (0, n.jsxs)('div', {
                        className: x.heading,
                        children: [
                            (0, n.jsx)('span', { children: (0, n.jsx)(o.iFz, {}) }),
                            (0, n.jsx)(o.X6q, {
                                variant: 'heading-lg/semibold',
                                children: w.NW.format(E ? w.t.EtQnZm : w.t.OgMdNT, {
                                    guildName: r.name,
                                    numFriends: Z.length
                                })
                            })
                        ]
                    }),
                    (0, n.jsx)(o.olH, { onClick: k })
                ]
            }),
            (0, n.jsxs)(o.hzk, {
                className: x.content,
                children: [E && (0, n.jsx)(o.$jN, {}), (0, n.jsx)(o.Ttm, { children: Z })]
            })
        ]
    });
}

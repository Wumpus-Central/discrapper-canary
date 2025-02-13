t.d(i, { default: () => w }), t(47120);
var n = t(200651),
    r = t(192379),
    s = t(392711),
    d = t.n(s),
    l = t(442837),
    u = t(481060),
    a = t(239091),
    c = t(276264),
    o = t(600164),
    m = t(313201),
    h = t(184301),
    g = t(347475),
    f = t(271383),
    p = t(699516),
    x = t(594174),
    j = t(709054),
    I = t(432496),
    b = t(981631),
    k = t(388032),
    Z = t(76731);
function w(e) {
    let { guild: i, transitionState: s, onClose: w } = e,
        N = (0, m.Dt)(),
        y = r.useMemo(() => {
            let e = p.Z.getRelationships();
            return j.default.keys(e).filter((i) => e[i] === b.OGo.FRIEND);
        }, []);
    r.useEffect(() => {
        I.Z.fetchFriendMembersIfNotFetched(i.id, y);
    }, [i.id, y]);
    let F = (0, l.e7)([f.ZP], () => f.ZP.getMembers(i.id)),
        M = r.useMemo(
            () =>
                d()(F)
                    .filter((e) => !!y.includes(e.userId) && null != x.default.getUser(e.userId))
                    .sortBy((e) => {
                        var i;
                        let t = x.default.getUser(e.userId);
                        return (null != t ? (null !== (i = e.nick) && void 0 !== i ? i : t.username) : '').toLocaleLowerCase();
                    })
                    .map((e) => {
                        let r = x.default.getUser(e.userId);
                        return (0, n.jsx)(
                            u.yRy,
                            {
                                preload: () => (0, h.Z)(r.id, r.getAvatarURL(i.id, 80), { guildId: i.id }),
                                renderPopout: (t) =>
                                    (0, n.jsx)(g.Z, {
                                        ...t,
                                        userId: e.userId,
                                        guildId: i.id
                                    }),
                                spacing: 14,
                                children: (s, d) => {
                                    let { isShown: l } = d;
                                    return (0, n.jsx)(
                                        c.Z,
                                        {
                                            className: Z.member,
                                            selected: l,
                                            colorString: e.colorString,
                                            user: r,
                                            isOwner: e.userId === i.ownerId,
                                            nick: e.nick,
                                            premiumSince: null == e.premiumSince ? null : new Date(e.premiumSince),
                                            guildId: i.id,
                                            onContextMenu: (e) => {
                                                (0, a.jW)(e, async () => {
                                                    let { default: e } = await Promise.all([t.e('79695'), t.e('26976'), t.e('97319')]).then(t.bind(t, 415118));
                                                    return (t) =>
                                                        (0, n.jsx)(e, {
                                                            ...t,
                                                            user: r,
                                                            guildId: i.id,
                                                            showMediaItems: !0
                                                        });
                                                });
                                            },
                                            ...s
                                        },
                                        e.userId
                                    );
                                }
                            },
                            r.id
                        );
                    })
                    .value(),
            [y, i.id, i.ownerId, F]
        ),
        _ = I.Z.isFetchingFriendsForGuild(i.id);
    return (0, n.jsxs)(u.Y0X, {
        transitionState: s,
        size: u.CgR.SMALL,
        'aria-labelledby': N,
        children: [
            (0, n.jsxs)(u.xBx, {
                separator: !1,
                justify: o.Z.Justify.BETWEEN,
                children: [
                    (0, n.jsxs)('div', {
                        className: Z.heading,
                        children: [
                            (0, n.jsx)('span', { children: (0, n.jsx)(u.iFz, {}) }),
                            (0, n.jsx)(u.X6q, {
                                variant: 'heading-lg/semibold',
                                children: k.intl.format(_ ? k.t.EtQnZm : k.t.OgMdNT, {
                                    guildName: i.name,
                                    numFriends: M.length
                                })
                            })
                        ]
                    }),
                    (0, n.jsx)(u.olH, { onClick: w })
                ]
            }),
            (0, n.jsxs)(u.hzk, {
                className: Z.content,
                children: [_ && (0, n.jsx)(u.$jN, {}), (0, n.jsx)(u.Ttm, { children: M })]
            })
        ]
    });
}

r.d(t, { default: () => k });
var i = r(627968),
    n = r(64700),
    s = r(735438),
    d = r.n(s),
    u = r(158954),
    l = r(311907),
    c = r(397927),
    a = r(442433),
    o = r(110574),
    m = r(342296),
    g = r(696451),
    I = r(994500),
    f = r(287809),
    p = r(542986),
    h = r(985018),
    b = r(761396);
function w(e) {
    let { guildId: t, guildOwnerId: s, member: d } = e,
        u = f.default.getUser(d.userId),
        l = n.useRef(null);
    return (0, i.jsx)(
        m.default,
        {
            targetElementRef: l,
            userId: d.userId,
            guildId: t,
            spacing: 14,
            clickTrap: !0,
            children: (e, n) => {
                let { isShown: c } = n;
                return (0, i.jsx)(
                    o.A,
                    {
                        ref: l,
                        className: b.Dc,
                        selected: c,
                        colorString: d.colorString,
                        colorStrings: d.colorStrings,
                        user: u,
                        isOwner: d.userId === s,
                        nick: d.nick,
                        premiumSince: null == d.premiumSince ? null : new Date(d.premiumSince),
                        guildId: t,
                        onContextMenu: (e) => {
                            (0, a.L3)(e, async () => {
                                let { default: e } = await Promise.all([r.e("97262"), r.e("91042"), r.e("54631")]).then(
                                    r.bind(r, 365689),
                                );
                                return (r) => (0, i.jsx)(e, { ...r, user: u, guildId: t, showMediaItems: !0 });
                            });
                        },
                        ...e,
                    },
                    d.userId,
                );
            },
        },
        u.id,
    );
}
function k(e) {
    let { guild: t, transitionState: r, onClose: s } = e,
        a = n.useMemo(() => I.A.getFriendIDs(), []);
    n.useEffect(() => {
        p.A.fetchFriendMembersIfNotFetched(t.id, a);
    }, [t.id, a]);
    let o = (0, l.bG)([g.Ay], () => g.Ay.getMembers(t.id)),
        m = n.useMemo(
            () =>
                d()(o)
                    .filter((e) => !!a.includes(e.userId) && null != f.default.getUser(e.userId))
                    .sortBy((e) => {
                        let t = f.default.getUser(e.userId);
                        return (null != t ? (e.nick ?? t.username) : "").toLocaleLowerCase();
                    })
                    .map((e) => (0, i.jsx)(w, { guildId: t.id, guildOwnerId: t.ownerId, member: e }, e.userId))
                    .value(),
            [a, t.id, t.ownerId, o],
        ),
        b = p.A.isFetchingFriendsForGuild(t.id);
    return (0, i.jsxs)(u.Modal, {
        title: h.intl.string(h.t.kYxEcH),
        subtitle: h.intl.format(b ? h.t.EtQnZi : h.t.OgMdNS, { guildName: t.name, numFriends: m.length }),
        actions: void 0,
        transitionState: r,
        onClose: s,
        children: [b && (0, i.jsx)(c.y$y, {}), m],
    });
}

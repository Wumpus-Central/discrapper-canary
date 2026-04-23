r.d(t, { default: () => k });
var i = r(627968),
    n = r(64700),
    s = r(735438),
    d = r.n(s),
    u = r(189213),
    l = r(17928),
    c = r(289873),
    o = r(442433),
    a = r(110574),
    m = r(342296),
    g = r(696451),
    I = r(994500),
    f = r(287809),
    p = r(542986),
    h = r(985018),
    b = r(935076);
function w(e) {
    let { guildId: t, guildOwnerId: s, member: d } = e,
        u = f.default.getUser(d.userId),
        l = n.useRef(null);
    return (0, i.jsx)(
        m.A,
        {
            targetElementRef: l,
            userId: d.userId,
            guildId: t,
            spacing: 14,
            clickTrap: !0,
            children: (e, n) => {
                let { isShown: c } = n;
                return (0, i.jsx)(
                    a.A,
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
                            (0, o.L3)(e, async () => {
                                let { default: e } = await Promise.all([r.e("97262"), r.e("91042"), r.e("499")]).then(
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
        o = n.useMemo(() => I.A.getFriendIDs(), []);
    n.useEffect(() => {
        p.A.fetchFriendMembersIfNotFetched(t.id, o);
    }, [t.id, o]);
    let a = (0, l.bG)([g.Ay], () => g.Ay.getMembers(t.id)),
        m = n.useMemo(
            () =>
                d()(a)
                    .filter((e) => !!o.includes(e.userId) && null != f.default.getUser(e.userId))
                    .sortBy((e) => {
                        let t = f.default.getUser(e.userId);
                        return (null != t ? (e.nick ?? t.username) : "").toLocaleLowerCase();
                    })
                    .map((e) => (0, i.jsx)(w, { guildId: t.id, guildOwnerId: t.ownerId, member: e }, e.userId))
                    .value(),
            [o, t.id, t.ownerId, a],
        ),
        b = p.A.isFetchingFriendsForGuild(t.id);
    return (0, i.jsxs)(u.Modal, {
        title: h.intl.string(h.t.kYxEcH),
        subtitle: h.intl.format(b ? h.t.EtQnZi : h.t.OgMdNS, { guildName: t.name, numFriends: m.length }),
        actions: void 0,
        transitionState: r,
        onClose: s,
        children: [b && (0, i.jsx)(c.y, {}), m],
    });
}

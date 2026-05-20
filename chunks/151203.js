r.d(t, { default: () => S });
var i = r(627968),
    n = r(64700),
    s = r(735438),
    d = r.n(s),
    u = r(189213),
    l = r(17928),
    c = r(289873),
    a = r(442433),
    o = r(589158),
    m = r(342296),
    g = r(696451),
    I = r(994500),
    f = r(287809),
    h = r(542986),
    p = r(375708),
    w = r(935076);
function k(e) {
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
                    o.A,
                    {
                        ref: l,
                        className: w.Dc,
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
                                let { default: e } = await Promise.all([
                                    r.e("8516"),
                                    r.e("23531"),
                                    r.e("20706"),
                                    r.e("94881"),
                                    r.e("26132"),
                                    r.e("46652"),
                                    r.e("93190"),
                                    r.e("34552"),
                                    r.e("93103"),
                                    r.e("8757"),
                                    r.e("89673"),
                                    r.e("85968"),
                                    r.e("60195"),
                                    r.e("21921"),
                                    r.e("68403"),
                                    r.e("76418"),
                                    r.e("29787"),
                                    r.e("71210"),
                                    r.e("97558"),
                                    r.e("94000"),
                                    r.e("66495"),
                                    r.e("88342"),
                                    r.e("42451"),
                                    r.e("76665"),
                                    r.e("98965"),
                                    r.e("35313"),
                                    r.e("76273"),
                                    r.e("24198"),
                                    r.e("39171"),
                                    r.e("49145"),
                                    r.e("74610"),
                                    r.e("70314"),
                                    r.e("70515"),
                                    r.e("27435"),
                                    r.e("66939"),
                                    r.e("91042"),
                                ]).then(r.bind(r, 365689));
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
function S(e) {
    let { guild: t, transitionState: r, onClose: s } = e,
        a = n.useMemo(() => I.A.getFriendIDs(), []);
    n.useEffect(() => {
        h.A.fetchFriendMembersIfNotFetched(t.id, a);
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
                    .map((e) => (0, i.jsx)(k, { guildId: t.id, guildOwnerId: t.ownerId, member: e }, e.userId))
                    .value(),
            [a, t.id, t.ownerId, o],
        ),
        w = h.A.isFetchingFriendsForGuild(t.id);
    return (0, i.jsxs)(u.Modal, {
        title: p.intl.string(p.t.kYxEcH),
        subtitle: p.intl.format(w ? p.t.EtQnZi : p.t.OgMdNS, { guildName: t.name, numFriends: m.length }),
        actions: void 0,
        transitionState: r,
        onClose: s,
        children: [w && (0, i.jsx)(c.y, {}), m],
    });
}

r.d(t, { default: () => S });
var i = r(477900),
    n = r(582128),
    s = r(435558),
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
    w = r(340220);
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
                                    r.e("440351"),
                                    r.e("676279"),
                                    r.e("545309"),
                                    r.e("197422"),
                                    r.e("397705"),
                                    r.e("926132"),
                                    r.e("146652"),
                                    r.e("993103"),
                                    r.e("834552"),
                                    r.e("893190"),
                                    r.e("21921"),
                                    r.e("708757"),
                                    r.e("571210"),
                                    r.e("676418"),
                                    r.e("468403"),
                                    r.e("166495"),
                                    r.e("88342"),
                                    r.e("585968"),
                                    r.e("189673"),
                                    r.e("311802"),
                                    r.e("229787"),
                                    r.e("698965"),
                                    r.e("882073"),
                                    r.e("797558"),
                                    r.e("235313"),
                                    r.e("576665"),
                                    r.e("776273"),
                                    r.e("474610"),
                                    r.e("939171"),
                                    r.e("624198"),
                                    r.e("449145"),
                                    r.e("470314"),
                                    r.e("70515"),
                                    r.e("404524"),
                                    r.e("654148"),
                                    r.e("666939"),
                                    r.e("491042"),
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

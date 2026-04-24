n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var l = n(17928),
    a = n(836480),
    s = n(307301),
    r = n(192308),
    o = n(241541),
    d = n(652793),
    c = n(855725),
    u = n(976860),
    h = n(309010),
    _ = n(519480),
    m = n(370876),
    g = n(222823),
    f = n(935208),
    A = n(652215),
    p = n(985018);
let C = [
        {
            key: "JOIN_SERVERS",
            renderIcon: (e) => (0, i.jsx)(a.Q, { size: "md", color: "currentColor", className: e }),
            getName: () => p.intl.string(p.t.K50GHd),
            handler: (e, t) => (0, u.uh)(e.id, t.id),
        },
        {
            key: "ADD_SERVERS",
            renderIcon: (e) => (0, i.jsx)(s.j, { size: "md", color: "currentColor", className: e }),
            getName: () => p.intl.string(p.t.emRpdS),
            handler: (e, t) =>
                (0, r.openModalLazy)(async () => {
                    let { default: l } = await Promise.all([n.e("93103"), n.e("96349"), n.e("22711")]).then(
                        n.bind(n, 579735),
                    );
                    return (n) =>
                        (0, i.jsx)(l, {
                            ...n,
                            directoryGuildName: e.name,
                            directoryGuildId: e.id,
                            directoryChannelId: t.id,
                        });
                }),
        },
        {
            key: "INVITE_MEMBERS",
            renderIcon: (e) => (0, i.jsx)(o.D, { className: e }),
            getName: () => p.intl.string(p.t.MJQOuJ),
            handler: (e, t) =>
                (0, r.openModalLazy)(async () => {
                    let { default: l } = await Promise.all([n.e("28136"), n.e("22547"), n.e("42738")]).then(
                        n.bind(n, 1310),
                    );
                    return (n) => (0, i.jsx)(l, { ...n, guild: e, channel: t, source: A.PE1.HUB_SIDEBAR });
                }),
        },
    ],
    E = (e) => {
        let { guild: t, channel: n } = e,
            a = (0, l.bG)([h.A], () => null != n && h.A.getChannelId() === n.id),
            s = (0, l.bG)([_.A, g.Ay], () => {
                if (null == n) return 0;
                let e = g.Ay.ackMessageId(n.id);
                if (null == e) return 0;
                let t = Object.values(_.A.getDirectoryEntries(n.id) ?? {}).filter(
                    (t) => new Date(t.createdAt).getTime() > f.default.extractTimestamp(e),
                );
                return Math.min(m.zP, t.length);
            }, [n]);
        return (0, i.jsx)(i.Fragment, {
            children: C.map((e) => {
                let { key: l, getName: r, handler: o, renderIcon: u } = e,
                    h = a && "JOIN_SERVERS" === l,
                    _ = `${l}-${t.id}`;
                return (0, i.jsx)(
                    d.G,
                    {
                        id: _,
                        renderIcon: u,
                        text: r(),
                        selected: h,
                        onClick: null != n ? () => o(t, n) : void 0,
                        trailing: "JOIN_SERVERS" === l && s > 0 ? (0, c.w)(s) : null,
                    },
                    _,
                );
            }),
        });
    };

n.d(t, { A: () => C });
var i = n(627968);
n(64700);
var l = n(17928),
    s = n(836480),
    r = n(307301),
    a = n(192308),
    o = n(241541),
    d = n(652793),
    c = n(855725),
    u = n(976860),
    h = n(309010),
    A = n(519480),
    _ = n(370876),
    g = n(222823),
    m = n(935208),
    p = n(652215),
    f = n(985018);
let E = [
        {
            key: "JOIN_SERVERS",
            renderIcon: (e) => (0, i.jsx)(s.Q, { size: "md", color: "currentColor", className: e }),
            getName: () => f.intl.string(f.t.K50GHd),
            handler: (e, t) => (0, u.uh)(e.id, t.id),
        },
        {
            key: "ADD_SERVERS",
            renderIcon: (e) => (0, i.jsx)(r.j, { size: "md", color: "currentColor", className: e }),
            getName: () => f.intl.string(f.t.emRpdS),
            handler: (e, t) =>
                (0, a.openModalLazy)(async () => {
                    let { default: l } = await n.e("96349").then(n.bind(n, 579735));
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
            getName: () => f.intl.string(f.t.MJQOuJ),
            handler: (e, t) =>
                (0, a.openModalLazy)(async () => {
                    let { default: l } = await Promise.all([n.e("28136"), n.e("22547"), n.e("42738")]).then(
                        n.bind(n, 1310),
                    );
                    return (n) => (0, i.jsx)(l, { ...n, guild: e, channel: t, source: p.PE1.HUB_SIDEBAR });
                }),
        },
    ],
    C = (e) => {
        let { guild: t, channel: n } = e,
            s = (0, l.bG)([h.A], () => null != n && h.A.getChannelId() === n.id),
            r = (0, l.bG)([A.A, g.Ay], () => {
                if (null == n) return 0;
                let e = g.Ay.ackMessageId(n.id);
                if (null == e) return 0;
                let t = Object.values(A.A.getDirectoryEntries(n.id) ?? {}).filter(
                    (t) => new Date(t.createdAt).getTime() > m.default.extractTimestamp(e),
                );
                return Math.min(_.zP, t.length);
            }, [n]);
        return (0, i.jsx)(i.Fragment, {
            children: E.map((e) => {
                let { key: l, getName: a, handler: o, renderIcon: u } = e,
                    h = s && "JOIN_SERVERS" === l,
                    A = `${l}-${t.id}`;
                return (0, i.jsx)(
                    d.G,
                    {
                        id: A,
                        renderIcon: u,
                        text: a(),
                        selected: h,
                        onClick: null != n ? () => o(t, n) : void 0,
                        trailing: "JOIN_SERVERS" === l && r > 0 ? (0, c.w)(r) : null,
                    },
                    A,
                );
            }),
        });
    };

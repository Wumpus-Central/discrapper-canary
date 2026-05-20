n.d(t, { A: () => x });
var l = n(627968);
n(64700);
var i = n(17928),
    s = n(836480),
    r = n(307301),
    a = n(192308),
    o = n(241541),
    d = n(652793),
    c = n(771640),
    u = n(976860),
    h = n(309010),
    A = n(519480),
    g = n(370876),
    m = n(222823),
    p = n(935208),
    f = n(652215),
    C = n(375708);
let E = [
        {
            key: "JOIN_SERVERS",
            renderIcon: (e) => (0, l.jsx)(s.Q, { size: "md", color: "currentColor", className: e }),
            getName: () => C.intl.string(C.t.K50GHd),
            handler: (e, t) => (0, u.uh)(e.id, t.id),
        },
        {
            key: "ADD_SERVERS",
            renderIcon: (e) => (0, l.jsx)(r.j, { size: "md", color: "currentColor", className: e }),
            getName: () => C.intl.string(C.t.emRpdS),
            handler: (e, t) =>
                (0, a.openModalLazy)(async () => {
                    let { default: i } = await Promise.all([
                        n.e("63897"),
                        n.e("25226"),
                        n.e("72891"),
                        n.e("54046"),
                        n.e("93103"),
                        n.e("74610"),
                        n.e("19580"),
                        n.e("97804"),
                        n.e("56856"),
                        n.e("80782"),
                        n.e("96349"),
                    ]).then(n.bind(n, 579735));
                    return (n) =>
                        (0, l.jsx)(i, {
                            ...n,
                            directoryGuildName: e.name,
                            directoryGuildId: e.id,
                            directoryChannelId: t.id,
                        });
                }),
        },
        {
            key: "INVITE_MEMBERS",
            renderIcon: (e) => (0, l.jsx)(o.D, { className: e }),
            getName: () => C.intl.string(C.t.MJQOuJ),
            handler: (e, t) =>
                (0, a.openModalLazy)(async () => {
                    let { default: i } = await Promise.all([
                        n.e("44710"),
                        n.e("59957"),
                        n.e("28136"),
                        n.e("16084"),
                        n.e("22547"),
                    ]).then(n.bind(n, 1310));
                    return (n) => (0, l.jsx)(i, { ...n, guild: e, channel: t, source: f.PE1.HUB_SIDEBAR });
                }),
        },
    ],
    x = (e) => {
        let { guild: t, channel: n } = e,
            s = (0, i.bG)([h.A], () => null != n && h.A.getChannelId() === n.id),
            r = (0, i.bG)([A.A, m.Ay], () => {
                if (null == n) return 0;
                let e = m.Ay.ackMessageId(n.id);
                if (null == e) return 0;
                let t = Object.values(A.A.getDirectoryEntries(n.id) ?? {}).filter(
                    (t) => new Date(t.createdAt).getTime() > p.default.extractTimestamp(e),
                );
                return Math.min(g.zP, t.length);
            }, [n]);
        return (0, l.jsx)(l.Fragment, {
            children: E.map((e) => {
                let { key: i, getName: a, handler: o, renderIcon: u } = e,
                    h = s && "JOIN_SERVERS" === i,
                    A = `${i}-${t.id}`;
                return (0, l.jsx)(
                    d.G,
                    {
                        id: A,
                        renderIcon: u,
                        text: a(),
                        selected: h,
                        onClick: null != n ? () => o(t, n) : void 0,
                        trailing: "JOIN_SERVERS" === i && r > 0 ? (0, c.wN)(r) : null,
                    },
                    A,
                );
            }),
        });
    };

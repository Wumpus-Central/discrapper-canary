n.d(t, { A: () => x });
var l = n(477900);
n(582128);
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
    m = n(573163),
    f = n(935208),
    p = n(652215),
    C = n(375708);
let E = [
        {
            key: "JOIN_SERVERS",
            renderIcon: (e) => (0, l.jsx)(s.CompassIcon, { size: "md", color: "currentColor", className: e }),
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
                        n.e("122326"),
                        n.e("376991"),
                        n.e("554970"),
                        n.e("140606"),
                        n.e("993103"),
                        n.e("474610"),
                        n.e("419580"),
                        n.e("197804"),
                        n.e("534475"),
                        n.e("980782"),
                        n.e("796349"),
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
                        n.e("683621"),
                        n.e("711162"),
                        n.e("159957"),
                        n.e("728136"),
                        n.e("216084"),
                        n.e("22547"),
                    ]).then(n.bind(n, 1310));
                    return (n) => (0, l.jsx)(i, { ...n, guild: e, channel: t, source: p.PE1.HUB_SIDEBAR });
                }),
        },
    ],
    x = function (e) {
        let { guild: t, channel: n } = e,
            s = (0, i.bG)([h.Ay], () => null != n && h.Ay.getChannelId() === n.id),
            r = (0, i.bG)([A.A, m.Ay], () => {
                if (null == n) return 0;
                let e = m.Ay.ackMessageId(n.id);
                if (null == e) return 0;
                let t = Object.values(A.A.getDirectoryEntries(n.id) ?? {}).filter(
                    (t) => new Date(t.createdAt).getTime() > f.default.extractTimestamp(e),
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

l.d(t, { A: () => H });
var n = l(627968),
    i = l(64700),
    a = l(735438),
    s = l.n(a),
    r = l(311907),
    o = l(732955),
    C = l(397927),
    d = l(73153),
    c = l(437553),
    u = l(34457),
    m = l(317525),
    x = l(576705),
    h = l(552247),
    g = l(985018),
    _ = l(58761);
let H = (e) => {
    let { guild: t, transitionState: l, onClose: a } = e,
        [H, p] = i.useState(7),
        [f, j] = i.useState([]),
        b = (0, h._k)(t.id, H, f) ?? -1;
    i.useEffect(() => {
        let e = (e) => {
            if (e.guildId !== t.id || !e.prune.isPreview) return;
            let l = e.prune.days,
                n = e.prune.includeRoles,
                i = Number(e.prune.pruneCount);
            (0, h.nA)(e.guildId, l, n, i);
        };
        return (
            d.h.subscribe("GUILD_PRUNE_UPDATE", e),
            () => {
                d.h.unsubscribe("GUILD_PRUNE_UPDATE", e);
            }
        );
    }, [t.id]),
        i.useEffect(() => {
            -1 === b && c.A.updateEstimateV2(t.id, H, f);
        }, [t.id, H, f, b]);
    let v = i.useCallback(() => {
            c.A.prune(t.id, H, f), a();
        }, [t.id, H, f, a]),
        A = (0, r.yK)([x.A, m.A], () => {
            let e = x.A.getHighestRole(t);
            return s()(m.A.getSortedRoles(t.id))
                .filter((l) => !(0, u.Oy)(l) && x.A.isRoleHigher(t, e, l))
                .map((e) => {
                    let { id: t, name: l } = e;
                    return { id: t, label: l, value: t };
                })
                .value();
        }, [t]);
    return (0, n.jsx)(o.aFV, {
        title: `${g.intl.string(g.t.zbyz7p)}—${null != t ? t.name : ""}`,
        actions: [
            { text: g.intl.string(g.t["ETE/oC"]), onClick: a, variant: "secondary" },
            { text: g.intl.string(g.t["2mIlKQ"]), onClick: v },
        ],
        onClose: async () => {
            await a();
        },
        transitionState: l,
        children: (0, n.jsxs)("div", {
            className: _.Q,
            children: [
                (0, n.jsx)(C.z6M, {
                    label: g.intl.string(g.t.YccTvK),
                    value: String(H),
                    options: [
                        { name: g.intl.formatToPlainString(g.t.FM1dHS, { days: 7 }), value: "7" },
                        { name: g.intl.formatToPlainString(g.t.FM1dHS, { days: 30 }), value: "30" },
                    ],
                    onChange: (e) => {
                        p(Number(e));
                    },
                }),
                (0, n.jsx)(C.IpV, {
                    className: _.X,
                    children: (0, n.jsx)(C.ZiE, {
                        selectionMode: "multiple",
                        label: g.intl.string(g.t.buoe17),
                        maxOptionsVisible: 10,
                        value: f,
                        onSelectionChange: (e) => j(e),
                        options: A,
                    }),
                }),
                (0, n.jsx)(C.Text, {
                    variant: "text-sm/normal",
                    children:
                        f.length > 0
                            ? g.intl.format(g.t["5WxHHp"], { members: b, days: H })
                            : g.intl.format(g.t.f13az9, { members: b, days: H }),
                }),
            ],
        }),
    });
};

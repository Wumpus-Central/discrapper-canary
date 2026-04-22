l.d(t, { A: () => j });
var n = l(627968),
    i = l(64700),
    a = l(735438),
    s = l.n(a),
    C = l(311907),
    r = l(189213),
    o = l(954197),
    d = l(573613),
    c = l(783878),
    u = l(834730),
    m = l(73153),
    h = l(437553),
    x = l(34457),
    g = l(317525),
    H = l(576705),
    _ = l(552247),
    p = l(985018),
    f = l(104514);
let j = (e) => {
    let { guild: t, transitionState: l, onClose: a } = e,
        [j, b] = i.useState(7),
        [A, v] = i.useState([]),
        { count: V, isLoading: L } = (0, _._k)(t.id, j, A);
    i.useEffect(() => {
        let e = (e) => {
            if (e.guildId !== t.id || !e.prune.isPreview) return;
            let l = e.prune.days,
                n = e.prune.includeRoles,
                i = Number(e.prune.pruneCount);
            (0, _.nA)(e.guildId, l, n, i, e.prune.isFinished);
        };
        return (
            m.h.subscribe("GUILD_PRUNE_UPDATE", e),
            () => {
                m.h.unsubscribe("GUILD_PRUNE_UPDATE", e);
            }
        );
    }, [t.id, j, A]),
        i.useEffect(() => {
            null == V && h.A.updateEstimateV2(t.id, j, A);
        }, [t.id, j, A, V]);
    let D = i.useCallback(() => {
            h.A.prune(t.id, j, A), a(), (0, _.yb)();
        }, [t.id, j, A, a]),
        R = (0, C.yK)([H.A, g.A], () => {
            let e = H.A.getHighestRole(t);
            return s()(g.A.getSortedRoles(t.id))
                .filter((l) => !(0, x.Oy)(l) && H.A.isRoleHigher(t, e, l))
                .map((e) => {
                    let { id: t, name: l } = e;
                    return { id: t, label: l, value: t };
                })
                .value();
        }, [t]);
    return (0, n.jsx)(r.Modal, {
        title: `${p.intl.string(p.t.zbyz7p)}—${null != t ? t.name : ""}`,
        actions: [
            { text: p.intl.string(p.t["ETE/oC"]), onClick: a, variant: "secondary" },
            { text: p.intl.string(p.t["2mIlKQ"]), onClick: D },
        ],
        onClose: async () => {
            await a();
        },
        transitionState: l,
        children: (0, n.jsxs)("div", {
            className: f.Q,
            children: [
                (0, n.jsx)(o.z, {
                    label: p.intl.string(p.t.YccTvK),
                    value: String(j),
                    options: [
                        { name: p.intl.formatToPlainString(p.t.FM1dHS, { days: 7 }), value: "7" },
                        { name: p.intl.formatToPlainString(p.t.FM1dHS, { days: 30 }), value: "30" },
                    ],
                    onChange: (e) => {
                        b(Number(e));
                    },
                }),
                (0, n.jsx)(d.Ip, {
                    className: f.X,
                    children: (0, n.jsx)(c.Z, {
                        selectionMode: "multiple",
                        label: p.intl.string(p.t.buoe17),
                        maxOptionsVisible: 10,
                        value: A,
                        onSelectionChange: (e) => v(e),
                        options: R,
                    }),
                }),
                (0, n.jsx)(u.E, {
                    variant: "text-sm/normal",
                    children:
                        A.length > 0
                            ? p.intl.format(L ? p.t.xSDcLk : p.t["5WxHHp"], { members: V ?? -1, days: j })
                            : p.intl.format(L ? p.t["98cHOp"] : p.t.f13az9, { members: V ?? -1, days: j }),
                }),
            ],
        }),
    });
};

var l = i(477900),
    s = i(582128),
    n = i(284009),
    a = i.n(n),
    r = i(855986),
    u = i(189213),
    o = i(27192),
    d = i(683438),
    c = i(778858),
    p = i(71393),
    h = i(200662),
    b = i(739174);
i(73510);
var g = i(792996),
    k = i(490069);
i.d(
    t,
    {},
    {
        default: function (e) {
            let {
                    editPermissions: t,
                    guildId: i,
                    hasMemberSearch: n,
                    headerText: C,
                    onClose: m,
                    overwrittenKeys: y,
                    search: E,
                    searchPlaceholderText: v,
                    selectedPermissionCount: x,
                    transitionState: f,
                } = e,
                j = (0, r.bG)([p.A], () => p.A.getGuild(i), [i]);
            a()(null != j, "");
            let [w, A] = s.useState(null),
                { query: T, results: I, setQuery: M } = E(i),
                [q, N] = s.useState({}),
                O = s.useMemo(() => Object.keys(q).length, [q]),
                S = O + x >= 100,
                G = s.useMemo(
                    () =>
                        I.filter((e) => {
                            let t = (0, h.Eu)(e.id, e.type);
                            return !y.includes(t);
                        }),
                    [y, I],
                ),
                H = s.useCallback(
                    (e, t) => {
                        N((i) => {
                            let l = (0, h.Eu)(e, t),
                                s = { ...i };
                            return (l in i ? delete s[l] : S || (s[l] = { id: e, permission: !0, type: t }), s);
                        });
                    },
                    [S, N],
                ),
                R = s.useCallback(() => {
                    (t(q, []), m());
                }, [t, m, q]);
            s.useEffect(() => () => clearTimeout(w), [w]);
            let V = s.useCallback(
                    (e) => {
                        (M(e),
                            n &&
                                A((t) =>
                                    (clearTimeout(t), 0 === e.length)
                                        ? null
                                        : setTimeout(() => {
                                              c.A.requestMembers(i, e, 200, !1);
                                          }, 500),
                                ));
                    },
                    [i, n, M, A],
                ),
                _ = s.useCallback(
                    (e) => {
                        let t = G[e.rowIndex],
                            i = (0, h.Eu)(t.id, t.type),
                            s = i in q,
                            n = S && !s;
                        return (0, l.jsx)(
                            "div",
                            {
                                className: k.A,
                                children: (0, l.jsx)(o.Kj, {
                                    type: o.Or.INVERTED,
                                    disabled: n,
                                    value: s,
                                    onChange: () => H(t.id, t.type),
                                    children: (0, l.jsx)(b.A, { guild: j, id: t.id, type: t.type, isLocked: !1 }),
                                }),
                            },
                            i,
                        );
                    },
                    [G, j, S, H, q],
                );
            return (
                s.useEffect(() => {
                    c.A.requestMembers(i, void 0, 200, !1);
                }, [i]),
                (0, l.jsx)(u.a, {
                    "aria-label": g.intl.string(g.t["N+InBa"]),
                    transitionState: f,
                    title: C,
                    subtitle: S ? g.intl.string(g.t["XTwtW/"]) : void 0,
                    onClose: m,
                    input: (0, l.jsx)(d.I, {
                        query: T,
                        placeholder: v,
                        "aria-label": v,
                        onChange: V,
                        onClear: () => M(""),
                    }),
                    actions: [
                        { text: g.intl.string(g.t["ETE/oC"]), onClick: m, variant: "secondary" },
                        { text: g.intl.string(g.t.OYkgVk), onClick: R, variant: "primary", disabled: 0 === O },
                    ],
                    listProps: { renderRow: _, sections: [G.length], rowHeight: 36, sectionHeight: 36 },
                })
            );
        },
    },
);

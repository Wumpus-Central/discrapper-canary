i.d(t, { default: () => m });
var l = i(627968),
    s = i(64700),
    n = i(284009),
    a = i.n(n),
    r = i(189213),
    u = i(311907),
    o = i(27192),
    d = i(892547),
    c = i(686956),
    p = i(71393),
    h = i(200662),
    b = i(739174),
    g = i(73510),
    k = i(985018),
    C = i(997020);
function m(e) {
    let {
            editPermissions: t,
            guildId: i,
            hasMemberSearch: n,
            headerText: m,
            onClose: y,
            overwrittenKeys: x,
            search: E,
            searchPlaceholderText: f,
            selectedPermissionCount: j,
            transitionState: v,
        } = e,
        A = (0, u.bG)([p.A], () => p.A.getGuild(i), [i]);
    a()(null != A, "");
    let [w, T] = s.useState(null),
        { query: M, results: I, setQuery: _ } = E(i),
        [q, N] = s.useState({}),
        O = s.useMemo(() => Object.keys(q).length, [q]),
        S = O + j >= g.iW,
        G = s.useMemo(
            () =>
                I.filter((e) => {
                    let t = (0, h.Eu)(e.id, e.type);
                    return !x.includes(t);
                }),
            [x, I],
        ),
        H = s.useCallback(
            (e, t) => {
                N((i) => {
                    let l = (0, h.Eu)(e, t),
                        s = { ...i };
                    return l in i ? delete s[l] : S || (s[l] = { id: e, permission: !0, type: t }), s;
                });
            },
            [S, N],
        ),
        R = s.useCallback(() => {
            t(q, []), y();
        }, [t, y, q]);
    s.useEffect(() => () => clearTimeout(w), [w]);
    let V = s.useCallback(
            (e) => {
                _(e),
                    n &&
                        T((t) =>
                            (clearTimeout(t), 0 === e.length)
                                ? null
                                : setTimeout(() => {
                                      c.A.requestMembers(i, e, 200, !1);
                                  }, 500),
                        );
            },
            [i, n, _, T],
        ),
        W = s.useCallback(
            (e) => {
                let t = G[e.rowIndex],
                    i = (0, h.Eu)(t.id, t.type),
                    s = i in q,
                    n = S && !s;
                return (0, l.jsx)(
                    "div",
                    {
                        className: C.A,
                        children: (0, l.jsx)(o.Kj, {
                            type: o.Or.INVERTED,
                            disabled: n,
                            value: s,
                            onChange: () => H(t.id, t.type),
                            children: (0, l.jsx)(b.A, { guild: A, id: t.id, type: t.type, isLocked: !1 }),
                        }),
                    },
                    i,
                );
            },
            [G, A, S, H, q],
        );
    return (
        s.useEffect(() => {
            c.A.requestMembers(i, void 0, 200, !1);
        }, [i]),
        (0, l.jsx)(r.Modal, {
            "aria-label": k.intl.string(k.t["N+InBa"]),
            transitionState: v,
            title: m,
            subtitle: S ? k.intl.string(k.t["XTwtW/"]) : void 0,
            onClose: y,
            input: (0, l.jsx)(d.I, { query: M, placeholder: f, "aria-label": f, onChange: V, onClear: () => _("") }),
            actions: [
                { text: k.intl.string(k.t["ETE/oC"]), onClick: y, variant: "secondary" },
                { text: k.intl.string(k.t.OYkgVk), onClick: R, variant: "primary", disabled: 0 === O },
            ],
            listProps: { renderRow: W, sections: [G.length], rowHeight: 36, sectionHeight: 36 },
        })
    );
}

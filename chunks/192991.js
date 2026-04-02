i.d(t, { default: () => m });
var l = i(627968),
    s = i(64700),
    n = i(284009),
    a = i.n(n),
    r = i(158954),
    u = i(311907),
    o = i(421380),
    d = i(397927),
    c = i(686956),
    p = i(71393),
    h = i(200662),
    b = i(739174),
    g = i(73510),
    k = i(985018),
    C = i(85601);
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
        S = s.useMemo(() => Object.keys(q).length, [q]),
        V = S + j >= g.iW,
        W = s.useMemo(
            () =>
                I.filter((e) => {
                    let t = (0, h.Eu)(e.id, e.type);
                    return !x.includes(t);
                }),
            [x, I],
        ),
        G = s.useCallback(
            (e, t) => {
                N((i) => {
                    let l = (0, h.Eu)(e, t),
                        s = { ...i };
                    return l in i ? delete s[l] : V || (s[l] = { id: e, permission: !0, type: t }), s;
                });
            },
            [V, N],
        ),
        H = s.useCallback(() => {
            t(q, []), y();
        }, [t, y, q]);
    s.useEffect(() => () => clearTimeout(w), [w]);
    let O = s.useCallback(
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
        R = s.useCallback(
            (e) => {
                let t = W[e.rowIndex],
                    i = (0, h.Eu)(t.id, t.type),
                    s = i in q,
                    n = V && !s;
                return (0, l.jsx)(
                    "div",
                    {
                        className: C.A,
                        children: (0, l.jsx)(o.Kj, {
                            type: o.Xo.INVERTED,
                            disabled: n,
                            value: s,
                            onChange: () => G(t.id, t.type),
                            children: (0, l.jsx)(b.A, { guild: A, id: t.id, type: t.type, isLocked: !1 }),
                        }),
                    },
                    i,
                );
            },
            [W, A, V, G, q],
        );
    return (
        s.useEffect(() => {
            c.A.requestMembers(i, void 0, 200, !1);
        }, [i]),
        (0, l.jsx)(r.Modal, {
            "aria-label": k.intl.string(k.t["N+InBa"]),
            transitionState: v,
            title: m,
            subtitle: V ? k.intl.string(k.t["XTwtW/"]) : void 0,
            onClose: y,
            input: (0, l.jsx)(d.IWV, { query: M, placeholder: f, "aria-label": f, onChange: O, onClear: () => _("") }),
            actions: [
                { text: k.intl.string(k.t["ETE/oC"]), onClick: y, variant: "secondary" },
                { text: k.intl.string(k.t.OYkgVk), onClick: H, variant: "primary", disabled: 0 === S },
            ],
            listProps: { renderRow: R, sections: [W.length], rowHeight: 36, sectionHeight: 36 },
        })
    );
}

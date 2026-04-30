i.d(t, { default: () => m });
var l = i(627968),
    s = i(64700),
    n = i(284009),
    a = i.n(n),
    r = i(189213),
    u = i(17928),
    o = i(27192),
    d = i(892547),
    c = i(66834),
    p = i(71393),
    h = i(200662),
    b = i(739174),
    g = i(73510),
    k = i(375708),
    C = i(997020);
function m(e) {
    let {
            editPermissions: t,
            guildId: i,
            hasMemberSearch: n,
            headerText: m,
            onClose: y,
            overwrittenKeys: E,
            search: x,
            searchPlaceholderText: f,
            selectedPermissionCount: j,
            transitionState: v,
        } = e,
        w = (0, u.bG)([p.A], () => p.A.getGuild(i), [i]);
    a()(null != w, "");
    let [A, T] = s.useState(null),
        { query: M, results: I, setQuery: q } = x(i),
        [N, O] = s.useState({}),
        S = s.useMemo(() => Object.keys(N).length, [N]),
        G = S + j >= g.iW,
        H = s.useMemo(
            () =>
                I.filter((e) => {
                    let t = (0, h.Eu)(e.id, e.type);
                    return !E.includes(t);
                }),
            [E, I],
        ),
        R = s.useCallback(
            (e, t) => {
                O((i) => {
                    let l = (0, h.Eu)(e, t),
                        s = { ...i };
                    return l in i ? delete s[l] : G || (s[l] = { id: e, permission: !0, type: t }), s;
                });
            },
            [G, O],
        ),
        V = s.useCallback(() => {
            t(N, []), y();
        }, [t, y, N]);
    s.useEffect(() => () => clearTimeout(A), [A]);
    let W = s.useCallback(
            (e) => {
                q(e),
                    n &&
                        T((t) =>
                            (clearTimeout(t), 0 === e.length)
                                ? null
                                : setTimeout(() => {
                                      c.A.requestMembers(i, e, 200, !1);
                                  }, 500),
                        );
            },
            [i, n, q, T],
        ),
        _ = s.useCallback(
            (e) => {
                let t = H[e.rowIndex],
                    i = (0, h.Eu)(t.id, t.type),
                    s = i in N,
                    n = G && !s;
                return (0, l.jsx)(
                    "div",
                    {
                        className: C.A,
                        children: (0, l.jsx)(o.Kj, {
                            type: o.Or.INVERTED,
                            disabled: n,
                            value: s,
                            onChange: () => R(t.id, t.type),
                            children: (0, l.jsx)(b.A, { guild: w, id: t.id, type: t.type, isLocked: !1 }),
                        }),
                    },
                    i,
                );
            },
            [H, w, G, R, N],
        );
    return (
        s.useEffect(() => {
            c.A.requestMembers(i, void 0, 200, !1);
        }, [i]),
        (0, l.jsx)(r.Modal, {
            "aria-label": k.intl.string(k.t["N+InBa"]),
            transitionState: v,
            title: m,
            subtitle: G ? k.intl.string(k.t["XTwtW/"]) : void 0,
            onClose: y,
            input: (0, l.jsx)(d.I, { query: M, placeholder: f, "aria-label": f, onChange: W, onClear: () => q("") }),
            actions: [
                { text: k.intl.string(k.t["ETE/oC"]), onClick: y, variant: "secondary" },
                { text: k.intl.string(k.t.OYkgVk), onClick: V, variant: "primary", disabled: 0 === S },
            ],
            listProps: { renderRow: _, sections: [H.length], rowHeight: 36, sectionHeight: 36 },
        })
    );
}

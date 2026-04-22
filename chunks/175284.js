n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(534514),
    o = n(834730),
    d = n(892547),
    c = n(821609),
    u = n(686956),
    m = n(975571),
    g = n(50249),
    h = n(512031),
    x = n(652215),
    _ = n(985018),
    p = n(823059);
function A(e) {
    let {
            guild: t,
            everyoneRole: n,
            filteredRoles: s,
            setEditRoleId: r,
            query: d,
            setQuery: c,
            setHeaderHeight: u,
        } = e,
        m = l.useRef(null);
    l.useEffect(() => {
        u(m.current?.offsetHeight ?? h.p4);
    }, [u]);
    let g = l.useCallback(() => {
        r(n.id);
    }, [r, n.id]);
    return (0, i.jsxs)("div", {
        ref: m,
        children: [
            (0, i.jsx)(a.D, { variant: "heading-lg/semibold", children: _.intl.string(_.t["LPJmL/"]) }),
            (0, i.jsx)(o.E, {
                className: p.h_,
                color: "text-default",
                variant: "text-sm/normal",
                children: _.intl.string(_.t["1ydhVp"]),
            }),
            (0, i.jsx)(E, {
                guild: t,
                everyoneRole: n,
                filteredRoles: s,
                query: d,
                setQuery: c,
                onEveryoneRoleClick: g,
            }),
        ],
    });
}
function E(e) {
    let { guild: t, everyoneRole: n, filteredRoles: l, query: s, setQuery: a, onEveryoneRoleClick: d } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(g.A, { role: n, onClick: d }),
            (0, i.jsx)(f, { guild: t, query: s, setQuery: a }),
            (0, i.jsx)(o.E, {
                className: p.BK,
                color: "text-default",
                variant: "text-sm/normal",
                children: _.intl.format(_.t.xkC3Yf, { articleURL: m.A.getArticleURL(x.MVz.PERMISSIONS_TUTORIAL) }),
            }),
            (0, i.jsx)("div", {
                className: p.kA,
                children: (0, i.jsxs)("div", {
                    className: p.qd,
                    children: [
                        (0, i.jsx)("div", { className: p._M }),
                        (0, i.jsx)(o.E, {
                            className: r()(p.jA, p.N5),
                            variant: "text-sm/normal",
                            children: _.intl.format(_.t["38N3Vz"], { numRoles: String(l.length) }),
                        }),
                        (0, i.jsx)(o.E, {
                            className: r()(p.jA, p.Hp),
                            variant: "text-sm/normal",
                            children: _.intl.string(_.t["9Oq93m"]),
                        }),
                        (0, i.jsx)("div", { className: p.DE }),
                    ],
                }),
            }),
        ],
    });
}
function f(e) {
    let { guild: t, query: n, setQuery: s } = e,
        [r, a] = l.useState(!1),
        o = l.useCallback(
            (e) => {
                s(e);
            },
            [s],
        ),
        m = l.useCallback(() => {
            s("");
        }, [s]),
        g = async () => {
            a(!0), await u.A.createRole(t.id), a(!1);
        };
    return (0, i.jsx)("div", {
        className: p.__invalid_rolesList,
        children: (0, i.jsxs)("div", {
            className: p.MT,
            children: [
                (0, i.jsx)(d.I, {
                    query: n,
                    onChange: o,
                    onClear: m,
                    placeholder: _.intl.string(_.t.Sojqsr),
                    "aria-label": _.intl.string(_.t.Sojqsr),
                }),
                (0, i.jsx)(c.$, { size: "sm", onClick: g, loading: r, text: _.intl.string(_.t.JZZjQK) }),
            ],
        }),
    });
}

"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
    o = n(686956),
    d = n(975571),
    c = n(50249),
    u = n(512031),
    m = n(652215),
    g = n(985018),
    x = n(823059);
function h(e) {
    let {
            guild: t,
            everyoneRole: n,
            filteredRoles: l,
            setEditRoleId: r,
            query: o,
            setQuery: d,
            setHeaderHeight: c,
        } = e,
        m = s.useRef(null);
    s.useEffect(() => {
        c(m.current?.offsetHeight ?? u.p4);
    }, [c]);
    let h = s.useCallback(() => {
        r(n.id);
    }, [r, n.id]);
    return (0, i.jsxs)("div", {
        ref: m,
        children: [
            (0, i.jsx)(a.Heading, { variant: "heading-lg/semibold", children: g.intl.string(g.t["LPJmL/"]) }),
            (0, i.jsx)(a.Text, {
                className: x.h_,
                color: "text-default",
                variant: "text-sm/normal",
                children: g.intl.string(g.t["1ydhVp"]),
            }),
            (0, i.jsx)(_, {
                guild: t,
                everyoneRole: n,
                filteredRoles: l,
                query: o,
                setQuery: d,
                onEveryoneRoleClick: h,
            }),
        ],
    });
}
function _(e) {
    let { guild: t, everyoneRole: n, filteredRoles: s, query: l, setQuery: o, onEveryoneRoleClick: u } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.A, { role: n, onClick: u }),
            (0, i.jsx)(A, { guild: t, query: l, setQuery: o }),
            (0, i.jsx)(a.Text, {
                className: x.BK,
                color: "text-default",
                variant: "text-sm/normal",
                children: g.intl.format(g.t.xkC3Yf, { articleURL: d.A.getArticleURL(m.MVz.PERMISSIONS_TUTORIAL) }),
            }),
            (0, i.jsx)("div", {
                className: x.kA,
                children: (0, i.jsxs)("div", {
                    className: x.qd,
                    children: [
                        (0, i.jsx)("div", { className: x._M }),
                        (0, i.jsx)(a.Text, {
                            className: r()(x.jA, x.N5),
                            variant: "text-sm/normal",
                            children: g.intl.format(g.t["38N3Vz"], { numRoles: String(s.length) }),
                        }),
                        (0, i.jsx)(a.Text, {
                            className: r()(x.jA, x.Hp),
                            variant: "text-sm/normal",
                            children: g.intl.string(g.t["9Oq93m"]),
                        }),
                        (0, i.jsx)("div", { className: x.DE }),
                    ],
                }),
            }),
        ],
    });
}
function A(e) {
    let { guild: t, query: n, setQuery: l } = e,
        [r, d] = s.useState(!1),
        c = s.useCallback(
            (e) => {
                l(e);
            },
            [l],
        ),
        u = s.useCallback(() => {
            l("");
        }, [l]),
        m = async () => {
            d(!0), await o.A.createRole(t.id), d(!1);
        };
    return (0, i.jsx)("div", {
        className: x.__invalid_rolesList,
        children: (0, i.jsxs)("div", {
            className: x.MT,
            children: [
                (0, i.jsx)(a.IWV, {
                    query: n,
                    onChange: c,
                    onClear: u,
                    placeholder: g.intl.string(g.t.Sojqsr),
                    "aria-label": g.intl.string(g.t.Sojqsr),
                }),
                (0, i.jsx)(a.Button, { size: "sm", onClick: m, loading: r, text: g.intl.string(g.t.JZZjQK) }),
            ],
        }),
    });
}

"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
    o = n(686956),
    d = n(975571),
    c = n(50249),
    u = n(305053),
    m = n(512031),
    g = n(652215),
    x = n(985018),
    h = n(107550);
function _(e) {
    let {
            guild: t,
            everyoneRole: n,
            filteredRoles: l,
            setEditRoleId: r,
            query: o,
            setQuery: d,
            setHeaderHeight: c,
        } = e,
        g = s.useRef(null);
    s.useEffect(() => {
        c(g.current?.offsetHeight ?? m.p4);
    }, [c]);
    let _ = s.useCallback(() => {
        r(n.id);
    }, [r, n.id]);
    return (0, i.jsxs)("div", {
        ref: g,
        children: [
            (0, i.jsx)(a.Heading, { variant: "heading-lg/semibold", children: x.intl.string(x.t["LPJmL/"]) }),
            (0, i.jsx)(a.Text, {
                className: h.h_,
                color: "text-default",
                variant: "text-sm/normal",
                children: x.intl.string(x.t["1ydhVp"]),
            }),
            (0, i.jsx)(u.A, { guild: t }),
            (0, i.jsx)(A, {
                guild: t,
                everyoneRole: n,
                filteredRoles: l,
                query: o,
                setQuery: d,
                onEveryoneRoleClick: _,
            }),
        ],
    });
}
function A(e) {
    let { guild: t, everyoneRole: n, filteredRoles: s, query: l, setQuery: o, onEveryoneRoleClick: u } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.A, { role: n, onClick: u }),
            (0, i.jsx)(p, { guild: t, query: l, setQuery: o }),
            (0, i.jsx)(a.Text, {
                className: h.BK,
                color: "text-default",
                variant: "text-sm/normal",
                children: x.intl.format(x.t.xkC3Yf, { articleURL: d.A.getArticleURL(g.MVz.PERMISSIONS_TUTORIAL) }),
            }),
            (0, i.jsx)("div", {
                className: h.kA,
                children: (0, i.jsxs)("div", {
                    className: h.qd,
                    children: [
                        (0, i.jsx)("div", { className: h._M }),
                        (0, i.jsx)(a.Text, {
                            className: r()(h.jA, h.N5),
                            variant: "text-sm/normal",
                            children: x.intl.format(x.t["38N3Vz"], { numRoles: String(s.length) }),
                        }),
                        (0, i.jsx)(a.Text, {
                            className: r()(h.jA, h.Hp),
                            variant: "text-sm/normal",
                            children: x.intl.string(x.t["9Oq93m"]),
                        }),
                        (0, i.jsx)("div", { className: h.DE }),
                    ],
                }),
            }),
        ],
    });
}
function p(e) {
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
        className: h.__invalid_rolesList,
        children: (0, i.jsxs)("div", {
            className: h.MT,
            children: [
                (0, i.jsx)(a.IWV, {
                    query: n,
                    onChange: c,
                    onClear: u,
                    placeholder: x.intl.string(x.t.Sojqsr),
                    "aria-label": x.intl.string(x.t.Sojqsr),
                }),
                (0, i.jsx)(a.Button, { size: "sm", onClick: m, loading: r, text: x.intl.string(x.t.JZZjQK) }),
            ],
        }),
    });
}

n.d(t, { A: () => x });
var r = n(627968),
    a = n(64700),
    o = n(503698),
    i = n.n(o),
    l = n(607399),
    s = n(732955),
    c = n(397927),
    _ = n(97469),
    u = n(894858),
    d = n(641324),
    b = n(82186),
    m = n(985018),
    p = n(379763);
function g(e) {
    let { icon: t, label: n, onClick: a } = e;
    return (0, r.jsx)(s.K0, { onClick: a, icon: t, size: "sm", variant: "icon-only", "aria-label": n });
}
function f(e) {
    let { setting: t, onClose: n } = e,
        a = (0, _.NC)();
    return (0, r.jsx)(c.NPJ, {
        theme: a,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: i()(p.$Q, e),
                children: [
                    (0, r.jsxs)(c.BJc, {
                        direction: "horizontal",
                        align: "center",
                        className: p.y9,
                        children: [
                            l.Fr &&
                                (0, r.jsx)(g, {
                                    icon: c.fEi,
                                    onClick: () => u.A.setState({ showNavigationMobile: !0 }),
                                    label: m.intl.string(m.t["13/7kX"]),
                                }),
                            null != t && (0, r.jsx)(b.E, { node: t }),
                        ],
                    }),
                    (0, r.jsx)(g, { icon: c.d$L, onClick: n, label: m.intl.string(m.t.cpT0Cq) }),
                ],
            }),
    });
}
let x = a.memo(function (e) {
    let { onClose: t, setting: n } = e,
        a = u.A.useField("showNavigationMobile");
    return (0, r.jsxs)("div", {
        className: i()(p.Qs, { [p.Hw]: l.Fr, [p.n7]: a }),
        children: [
            (0, r.jsx)(f, { setting: n, onClose: t }),
            (0, r.jsx)("div", { className: p.yp, children: null != n && (0, r.jsx)(d.A, { node: n }) }),
        ],
    });
});

n.d(t, { A: () => f });
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
    b = n(985018),
    m = n(379763);
function g(e) {
    let { icon: t, label: n, onClick: a } = e;
    return (0, r.jsx)(s.K0, { onClick: a, icon: t, size: "sm", variant: "icon-only", "aria-label": n });
}
function p(e) {
    let { title: t, badge: n, onClose: a } = e,
        o = (0, _.NC)();
    return (0, r.jsx)(c.NPJ, {
        theme: o,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: i()(m.$Q, e),
                children: [
                    (0, r.jsxs)("div", {
                        className: m.y9,
                        children: [
                            l.Fr &&
                                (0, r.jsx)(g, {
                                    icon: c.fEi,
                                    onClick: () => u.A.setState({ showNavigationMobile: !0 }),
                                    label: b.intl.string(b.t["13/7kX"]),
                                }),
                            (0, r.jsx)(c.Heading, { variant: "heading-md/medium", color: "text-default", children: t }),
                            null != n && n,
                        ],
                    }),
                    (0, r.jsx)(g, { icon: c.d$L, onClick: a, label: b.intl.string(b.t.cpT0Cq) }),
                ],
            }),
    });
}
let f = a.memo(function (e) {
    let { onClose: t, setting: n } = e,
        a = n?.useTitle() ?? "",
        o = n?.useBadge?.(),
        s = u.A.useField("showNavigationMobile");
    return (0, r.jsxs)("div", {
        className: i()(m.Qs, { [m.Hw]: l.Fr, [m.n7]: s }),
        children: [
            (0, r.jsx)(p, { title: a, badge: o, onClose: t }),
            (0, r.jsx)("div", { className: m.yp, children: null != n && (0, r.jsx)(d.A, { node: n }) }),
        ],
    });
});

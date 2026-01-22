r.d(t, { A: () => O });
var n = r(627968),
    l = r(64700),
    o = r(503698),
    a = r.n(o),
    c = r(607399),
    i = r(732955),
    s = r(397927),
    u = r(97469),
    f = r(894858),
    b = r(641324),
    y = r(985018),
    d = r(379763);
function p(e) {
    let { icon: t, label: r, onClick: l } = e;
    return (0, n.jsx)(i.K0, {
        onClick: l,
        icon: t,
        size: "sm",
        variant: "icon-only",
        "aria-label": r,
    });
}
function g(e) {
    let { title: t, badge: r, onClose: l } = e,
        o = (0, u.NC)();
    return (0, n.jsx)(s.NPJ, {
        theme: o,
        children: (e) =>
            (0, n.jsxs)("div", {
                className: a()(d.$Q, e),
                children: [
                    (0, n.jsxs)("div", {
                        className: d.y9,
                        children: [
                            c.Fr &&
                                (0, n.jsx)(p, {
                                    icon: s.fEi,
                                    onClick: () => f.A.setState({ showNavigationMobile: !0 }),
                                    label: y.intl.string(y.t["13/7kX"]),
                                }),
                            (0, n.jsx)(s.Heading, {
                                variant: "heading-md/medium",
                                color: "text-default",
                                children: t,
                            }),
                            null != r && r,
                        ],
                    }),
                    (0, n.jsx)(p, {
                        icon: s.d$L,
                        onClick: l,
                        label: y.intl.string(y.t.cpT0Cq),
                    }),
                ],
            }),
    });
}
let O = l.memo(function (e) {
    var t, r;
    let { onClose: l, setting: o } = e,
        i = null != (t = null == o ? void 0 : o.useTitle()) ? t : "",
        s = null == o || null == (r = o.useBadge) ? void 0 : r.call(o),
        u = f.A.useField("showNavigationMobile");
    return (0, n.jsxs)("div", {
        className: a()(d.Qs, {
            [d.Hw]: c.Fr,
            [d.n7]: u,
        }),
        children: [
            (0, n.jsx)(g, {
                title: i,
                badge: s,
                onClose: l,
            }),
            (0, n.jsx)("div", {
                className: d.yp,
                children: null != o && (0, n.jsx)(b.A, { node: o }),
            }),
        ],
    });
});

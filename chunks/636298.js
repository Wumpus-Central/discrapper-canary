n.d(t, { Z: () => O });
var r = n(54381),
    o = n(473749),
    a = n(120356),
    i = n.n(a),
    l = n(873546),
    c = n(159691),
    s = n(481060),
    u = n(984802),
    f = n(996435),
    d = n(36361),
    b = n(388032),
    y = n(283924);
function p(e) {
    let { icon: t, label: n, onClick: o } = e;
    return (0, r.jsx)(c.hU, {
        onClick: o,
        icon: t,
        size: "sm",
        variant: "icon-only",
        "aria-label": n,
    });
}
function g(e) {
    let { title: t, badge: n, onClose: o } = e,
        a = (0, u.Ll)();
    return (0, r.jsx)(s.f6W, {
        theme: a,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: i()(y.contentHeader, e),
                children: [
                    (0, r.jsxs)("div", {
                        className: y.contentHeaderLeft,
                        children: [
                            l.tq &&
                                (0, r.jsx)(p, {
                                    icon: s.yFM,
                                    onClick: () => f.Z.setState({ showNavigationMobile: !0 }),
                                    label: b.intl.string(b.t["13/7kX"]),
                                }),
                            (0, r.jsx)(s.Heading, {
                                variant: "heading-md/medium",
                                color: "text-default",
                                children: t,
                            }),
                            null != n && n,
                        ],
                    }),
                    (0, r.jsx)(p, {
                        icon: s.Uz9,
                        onClick: o,
                        label: b.intl.string(b.t.cpT0Cq),
                    }),
                ],
            }),
    });
}
let O = o.memo(function (e) {
    var t, n;
    let { onClose: o, setting: a } = e,
        c = null != (n = null == a ? void 0 : a.useTitle()) ? n : "",
        s = null == a || null == (t = a.useBadge) ? void 0 : t.call(a),
        u = f.Z.useField("showNavigationMobile");
    return (0, r.jsxs)("div", {
        className: i()(y.content, {
            [y.mobile]: l.tq,
            [y.mobileNavigationOpen]: u,
        }),
        children: [
            (0, r.jsx)(g, {
                title: c,
                badge: s,
                onClose: o,
            }),
            (0, r.jsx)("div", {
                className: y.contentBody,
                children: null != a && (0, r.jsx)(d.Z, { node: a }),
            }),
        ],
    });
});

n.d(t, { Z: () => j });
var r = n(951288),
    l = n(647438),
    o = n(120356),
    i = n.n(o),
    a = n(873546),
    s = n(159691),
    c = n(481060),
    u = n(984802),
    d = n(996435),
    f = n(36361),
    b = n(388032),
    m = n(214779);
function v(e) {
    let { icon: t, label: n, onClick: l } = e;
    return (0, r.jsx)(s.hU, {
        onClick: l,
        icon: t,
        size: "sm",
        variant: "icon-only",
        "aria-label": n,
    });
}
function p(e) {
    let { title: t, badge: n, onClose: l } = e,
        o = (0, u.Ll)();
    return (0, r.jsx)(c.f6W, {
        theme: o,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: i()(m.contentHeader, e),
                children: [
                    (0, r.jsxs)("div", {
                        className: m.contentHeaderLeft,
                        children: [
                            a.tq &&
                                (0, r.jsx)(v, {
                                    icon: c.yFM,
                                    onClick: () => d.Z.setState({ showNavigationMobile: !0 }),
                                    label: b.intl.string(b.t["13/7kZ"]),
                                }),
                            (0, r.jsx)(c.Heading, {
                                variant: "heading-md/medium",
                                color: "header-secondary",
                                children: t,
                            }),
                            null != n && n,
                        ],
                    }),
                    (0, r.jsx)(v, {
                        icon: c.Uz9,
                        onClick: l,
                        label: b.intl.string(b.t.cpT0Cg),
                    }),
                ],
            }),
    });
}
let j = l.memo(function (e) {
    var t, n;
    let { onClose: l, setting: o } = e,
        s = null != (n = null == o ? void 0 : o.useTitle()) ? n : "",
        c = null == o || null == (t = o.useBadge) ? void 0 : t.call(o),
        u = d.Z.useField("showNavigationMobile");
    return (0, r.jsxs)("div", {
        className: i()(m.content, {
            [m.mobile]: a.tq,
            [m.mobileNavigationOpen]: u,
        }),
        children: [
            (0, r.jsx)(p, {
                title: s,
                badge: c,
                onClose: l,
            }),
            (0, r.jsx)("div", {
                className: m.contentBody,
                children: null != o && (0, r.jsx)(f.Z, { node: o }),
            }),
        ],
    });
});

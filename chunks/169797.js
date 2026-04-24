n.d(t, { Jg: () => h, lo: () => _, oH: () => S, s3: () => p });
var l = n(627968),
    r = n(64700),
    u = n(503698),
    i = n.n(u),
    a = n(20742),
    o = n(364840),
    s = n(331322),
    c = n(224640),
    d = n(430993),
    A = n(500380),
    f = n(518977),
    E = n(683433),
    T = n(981036),
    N = n(725836),
    m = n(857414);
function p(e) {
    let { gradientColor: t, title: n, headerBadgeText: u, headerBadgeIcon: i, countryCode: o, ...s } = e,
        { checkoutHeaderConfigs: c } = (0, N.ck)(),
        d = r.useCallback(
            () => (null == o ? null : (0, l.jsx)("img", { alt: "", className: m.bI, src: (0, A.t)(o) })),
            [o],
        ),
        E = r.useMemo(() => {
            if (null != u || null != c.headerBadgeText)
                return {
                    icon: c.headerBadgeIcon ?? i,
                    type: { text: c.headerBadgeText ?? u ?? "" },
                    variant: "expressive",
                };
        }, [u, i, c.headerBadgeText, c.headerBadgeIcon]);
    return (0, l.jsx)(a.rQ, {
        ...s,
        badge: E,
        badgePosition: "end",
        gradientColor: t,
        titleTextVariant: "heading-lg/semibold",
        alignCenter: !1,
        title: n,
        subtitle: null != o ? { text: (0, f.j7)((0, f.ni)(o)), leadingIcon: d } : void 0,
    });
}
let I = { top: 16, bottom: 8 };
function _(e) {
    let { onBackClick: t, primaryButtonProps: n, portalClassName: r } = e,
        { variant: u } = n,
        { setCheckoutFooterContentNode: a } = (0, N.ck)();
    return (0, l.jsxs)(o.j, {
        children: [
            (0, l.jsx)("div", { ref: a, className: i()(m.K4, r) }),
            (0, l.jsxs)(s.B, {
                direction: "horizontal",
                align: "center",
                justify: null != t ? "space-between" : "end",
                fullWidth: !0,
                padding: I,
                children: [
                    null != t ? (0, l.jsx)(E.A, { onClick: t }) : null,
                    (0, l.jsx)(T.p, { ...n, variant: u ?? "active" }),
                ],
            }),
        ],
    });
}
function h(e) {
    let { children: t, size: n = "md", maxHeight: r = "viewport", ...u } = e;
    return (0, l.jsx)(c.d, { size: n, ...u, maxHeight: r, children: t });
}
function S(e) {
    let {
        title: t,
        gradientColor: n = "purple",
        countryCode: r,
        headerBadgeText: u,
        headerBadgeIcon: i,
        onBackClick: a,
        primaryButtonProps: o,
        children: s,
        ...A
    } = e;
    return (0, l.jsx)(N.e0, {
        children: (0, l.jsxs)(c.d, {
            ...A,
            children: [
                (0, l.jsx)(p, { gradientColor: n, title: t, countryCode: r, headerBadgeText: u, headerBadgeIcon: i }),
                (0, l.jsx)(d.c, { children: s }),
                (0, l.jsx)(_, { onBackClick: a, primaryButtonProps: o }),
            ],
        }),
    });
}

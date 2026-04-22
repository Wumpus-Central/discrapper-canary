n.d(t, { Jg: () => P, lo: () => f, oH: () => S, s3: () => E });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(20742),
    o = n(364840),
    u = n(331322),
    c = n(224640),
    d = n(430993),
    p = n(500380),
    m = n(518977),
    h = n(683433),
    A = n(981036),
    _ = n(725836),
    C = n(857414);
function E(e) {
    let { gradientColor: t, title: n, headerBadgeText: a, headerBadgeIcon: r, countryCode: o, ...u } = e,
        { checkoutHeaderConfigs: c } = (0, _.ck)(),
        d = i.useCallback(
            () => (null == o ? null : (0, l.jsx)("img", { alt: "", className: C.bI, src: (0, p.t)(o) })),
            [o],
        ),
        h = i.useMemo(() => {
            if (null != a || null != c.headerBadgeText)
                return {
                    icon: c.headerBadgeIcon ?? r,
                    type: { text: c.headerBadgeText ?? a ?? "" },
                    variant: "expressive",
                };
        }, [a, r, c.headerBadgeText, c.headerBadgeIcon]);
    return (0, l.jsx)(s.rQ, {
        ...u,
        badge: h,
        badgePosition: "end",
        gradientColor: t,
        titleTextVariant: "heading-lg/semibold",
        alignCenter: !1,
        title: n,
        subtitle: null != o ? { text: (0, m.j7)((0, m.ni)(o)), leadingIcon: d } : void 0,
    });
}
let y = { top: 16, bottom: 8 };
function f(e) {
    let { onBackClick: t, primaryButtonProps: n, portalClassName: i } = e,
        { variant: a } = n,
        { setCheckoutFooterContentNode: s } = (0, _.ck)();
    return (0, l.jsxs)(o.j, {
        children: [
            (0, l.jsx)("div", { ref: s, className: r()(C.K4, i) }),
            (0, l.jsxs)(u.B, {
                direction: "horizontal",
                align: "center",
                justify: null != t ? "space-between" : "end",
                fullWidth: !0,
                padding: y,
                children: [
                    null != t ? (0, l.jsx)(h.A, { onClick: t }) : null,
                    (0, l.jsx)(A.p, { ...n, variant: a ?? "active" }),
                ],
            }),
        ],
    });
}
function P(e) {
    let { children: t, size: n = "md", maxHeight: i = "viewport", ...a } = e;
    return (0, l.jsx)(c.d, { size: n, ...a, maxHeight: i, children: t });
}
function S(e) {
    let {
        title: t,
        gradientColor: n = "purple",
        countryCode: i,
        headerBadgeText: a,
        headerBadgeIcon: r,
        onBackClick: s,
        primaryButtonProps: o,
        children: u,
        ...p
    } = e;
    return (0, l.jsx)(_.e0, {
        children: (0, l.jsxs)(c.d, {
            ...p,
            children: [
                (0, l.jsx)(E, { gradientColor: n, title: t, countryCode: i, headerBadgeText: a, headerBadgeIcon: r }),
                (0, l.jsx)(d.c, { children: u }),
                (0, l.jsx)(f, { onBackClick: s, primaryButtonProps: o }),
            ],
        }),
    });
}

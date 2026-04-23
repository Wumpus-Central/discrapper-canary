n.d(t, { Jg: () => P, lo: () => A, oH: () => b, s3: () => f });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(20742),
    u = n(364840),
    o = n(331322),
    c = n(224640),
    d = n(430993),
    p = n(500380),
    h = n(518977),
    C = n(683433),
    m = n(981036),
    I = n(725836),
    E = n(857414);
function f(e) {
    let { gradientColor: t, title: n, headerBadgeText: l, headerBadgeIcon: s, countryCode: u, ...o } = e,
        { checkoutHeaderConfigs: c } = (0, I.ck)(),
        d = r.useCallback(
            () => (null == u ? null : (0, i.jsx)("img", { alt: "", className: E.bI, src: (0, p.t)(u) })),
            [u],
        ),
        C = r.useMemo(() => {
            if (null != l || null != c.headerBadgeText)
                return {
                    icon: c.headerBadgeIcon ?? s,
                    type: { text: c.headerBadgeText ?? l ?? "" },
                    variant: "expressive",
                };
        }, [l, s, c.headerBadgeText, c.headerBadgeIcon]);
    return (0, i.jsx)(a.rQ, {
        ...o,
        badge: C,
        badgePosition: "end",
        gradientColor: t,
        titleTextVariant: "heading-lg/semibold",
        alignCenter: !1,
        title: n,
        subtitle: null != u ? { text: (0, h.j7)((0, h.ni)(u)), leadingIcon: d } : void 0,
    });
}
let _ = { top: 16, bottom: 8 };
function A(e) {
    let { onBackClick: t, primaryButtonProps: n, portalClassName: r } = e,
        { variant: l } = n,
        { setCheckoutFooterContentNode: a } = (0, I.ck)();
    return (0, i.jsxs)(u.j, {
        children: [
            (0, i.jsx)("div", { ref: a, className: s()(E.K4, r) }),
            (0, i.jsxs)(o.B, {
                direction: "horizontal",
                align: "center",
                justify: null != t ? "space-between" : "end",
                fullWidth: !0,
                padding: _,
                children: [
                    null != t ? (0, i.jsx)(C.A, { onClick: t }) : null,
                    (0, i.jsx)(m.p, { ...n, variant: l ?? "active" }),
                ],
            }),
        ],
    });
}
function P(e) {
    let { children: t, size: n = "md", maxHeight: r = "viewport", ...l } = e;
    return (0, i.jsx)(c.d, { size: n, ...l, maxHeight: r, children: t });
}
function b(e) {
    let {
        title: t,
        gradientColor: n = "purple",
        countryCode: r,
        headerBadgeText: l,
        headerBadgeIcon: s,
        onBackClick: a,
        primaryButtonProps: u,
        children: o,
        ...p
    } = e;
    return (0, i.jsx)(I.e0, {
        children: (0, i.jsxs)(c.d, {
            ...p,
            children: [
                (0, i.jsx)(f, { gradientColor: n, title: t, countryCode: r, headerBadgeText: l, headerBadgeIcon: s }),
                (0, i.jsx)(d.c, { children: o }),
                (0, i.jsx)(A, { onBackClick: a, primaryButtonProps: u }),
            ],
        }),
    });
}

"use strict";
n.d(t, { Jg: () => h, lo: () => p, oH: () => m, s3: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(158954),
    a = n(500380),
    o = n(518977),
    l = n(683433),
    u = n(981036),
    c = n(725836),
    d = n(13499);
function _(e) {
    let { gradientColor: t, title: n, headerBadgeText: l, headerBadgeIcon: u, countryCode: _, ...f } = e,
        { checkoutHeaderConfigs: p } = (0, c.ck)(),
        h = i.useCallback(
            () => (null == _ ? null : (0, r.jsx)("img", { alt: "", className: d.bI, src: (0, a.t)(_) })),
            [_],
        ),
        m = i.useMemo(() => {
            if (null != l || null != p.headerBadgeText)
                return {
                    icon: p.headerBadgeIcon ?? u,
                    type: { text: p.headerBadgeText ?? l ?? "" },
                    variant: "expressive",
                };
        }, [l, u, p.headerBadgeText, p.headerBadgeIcon]);
    return (0, r.jsx)(s.rQ0, {
        ...f,
        badge: m,
        badgePosition: "end",
        gradientColor: t,
        titleTextVariant: "heading-lg/semibold",
        alignCenter: !1,
        title: n,
        subtitle: null != _ ? { text: (0, o.Gw)((0, o.ni)(_)), leadingIcon: h } : void 0,
    });
}
let f = { top: 16, bottom: 8 };
function p(e) {
    let { onBackClick: t, primaryButtonProps: n } = e,
        { variant: i } = n,
        { setCheckoutFooterContentNode: a } = (0, c.ck)();
    return (0, r.jsxs)(s.jlY, {
        children: [
            (0, r.jsx)("div", { ref: a }),
            (0, r.jsxs)(s.BJc, {
                direction: "horizontal",
                align: "center",
                justify: null != t ? "space-between" : "end",
                fullWidth: !0,
                padding: f,
                children: [
                    null != t ? (0, r.jsx)(l.A, { onClick: t }) : null,
                    (0, r.jsx)(u.p, { ...n, variant: i ?? "active" }),
                ],
            }),
        ],
    });
}
function h(e) {
    let { children: t, size: n = "md", maxHeight: i = "viewport", ...a } = e;
    return (0, r.jsx)(s.dWK, { size: n, ...a, maxHeight: i, children: t });
}
function m(e) {
    let {
        title: t,
        gradientColor: n = "purple",
        countryCode: i,
        headerBadgeText: a,
        headerBadgeIcon: o,
        onBackClick: l,
        primaryButtonProps: u,
        children: d,
        ...f
    } = e;
    return (0, r.jsx)(c.e0, {
        children: (0, r.jsxs)(s.dWK, {
            ...f,
            children: [
                (0, r.jsx)(_, { gradientColor: n, title: t, countryCode: i, headerBadgeText: a, headerBadgeIcon: o }),
                (0, r.jsx)(s.cwr, { children: d }),
                (0, r.jsx)(p, { onBackClick: l, primaryButtonProps: u }),
            ],
        }),
    });
}

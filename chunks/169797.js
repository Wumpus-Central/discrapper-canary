"use strict";
n.d(t, { Jg: () => E, lo: () => m, oH: () => g, s3: () => p });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(158954),
    l = n(500380),
    u = n(518977),
    c = n(683433),
    d = n(981036),
    _ = n(725836),
    f = n(996541);
function p(e) {
    let { gradientColor: t, title: n, headerBadgeText: s, headerBadgeIcon: a, countryCode: c, ...d } = e,
        { checkoutHeaderConfigs: p } = (0, _.ck)(),
        h = i.useCallback(
            () => (null == c ? null : (0, r.jsx)("img", { alt: "", className: f.bI, src: (0, l.t)(c) })),
            [c],
        ),
        m = i.useMemo(() => {
            if (null != s || null != p.headerBadgeText)
                return {
                    icon: p.headerBadgeIcon ?? a,
                    type: { text: p.headerBadgeText ?? s ?? "" },
                    variant: "expressive",
                };
        }, [s, a, p.headerBadgeText, p.headerBadgeIcon]);
    return (0, r.jsx)(o.rQ0, {
        ...d,
        badge: m,
        badgePosition: "end",
        gradientColor: t,
        titleTextVariant: "heading-lg/semibold",
        alignCenter: !1,
        title: n,
        subtitle: null != c ? { text: (0, u.Gw)((0, u.ni)(c)), leadingIcon: h } : void 0,
    });
}
let h = { top: 16, bottom: 8 };
function m(e) {
    let { onBackClick: t, primaryButtonProps: n, portalClassName: i } = e,
        { variant: s } = n,
        { setCheckoutFooterContentNode: l } = (0, _.ck)();
    return (0, r.jsxs)(o.jlY, {
        children: [
            (0, r.jsx)("div", { ref: l, className: a()(f.K4, i) }),
            (0, r.jsxs)(o.BJc, {
                direction: "horizontal",
                align: "center",
                justify: null != t ? "space-between" : "end",
                fullWidth: !0,
                padding: h,
                children: [
                    null != t ? (0, r.jsx)(c.A, { onClick: t }) : null,
                    (0, r.jsx)(d.p, { ...n, variant: s ?? "active" }),
                ],
            }),
        ],
    });
}
function E(e) {
    let { children: t, size: n = "md", maxHeight: i = "viewport", ...s } = e;
    return (0, r.jsx)(o.dWK, { size: n, ...s, maxHeight: i, children: t });
}
function g(e) {
    let {
        title: t,
        gradientColor: n = "purple",
        countryCode: i,
        headerBadgeText: s,
        headerBadgeIcon: a,
        onBackClick: l,
        primaryButtonProps: u,
        children: c,
        ...d
    } = e;
    return (0, r.jsx)(_.e0, {
        children: (0, r.jsxs)(o.dWK, {
            ...d,
            children: [
                (0, r.jsx)(p, { gradientColor: n, title: t, countryCode: i, headerBadgeText: s, headerBadgeIcon: a }),
                (0, r.jsx)(o.cwr, { children: c }),
                (0, r.jsx)(m, { onBackClick: l, primaryButtonProps: u }),
            ],
        }),
    });
}

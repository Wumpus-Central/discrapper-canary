"use strict";
n.d(t, { Jg: () => p, lo: () => h, oH: () => g, s3: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(500380),
    o = n(518977),
    l = n(683433),
    u = n(981036),
    c = n(725836),
    d = n(996541);
function _(e) {
    let { gradientColor: t, title: n, headerBadgeText: l, headerBadgeIcon: u, countryCode: c, ..._ } = e,
        f = i.useCallback(
            () => (null == c ? null : (0, r.jsx)("img", { alt: "", className: d.bI, src: (0, s.t)(c) })),
            [c],
        ),
        h = i.useMemo(() => {
            if (null != l) return { icon: u, type: { text: l }, variant: "expressive" };
        }, [l, u]);
    return (0, r.jsx)(a.rQ0, {
        ..._,
        badge: h,
        badgePosition: "end",
        gradientColor: t,
        titleTextVariant: "heading-lg/semibold",
        alignCenter: !1,
        title: n,
        subtitle: null != c ? { text: (0, o.Gw)((0, o.ni)(c)), leadingIcon: f } : void 0,
    });
}
let f = { top: 16, bottom: 8 };
function h(e) {
    let { onBackClick: t, primaryButtonProps: n } = e,
        { variant: i } = n,
        { setCheckoutFooterContentNode: s } = (0, c.ck)();
    return (0, r.jsxs)(a.jlY, {
        children: [
            (0, r.jsx)("div", { ref: s }),
            (0, r.jsxs)(a.BJc, {
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
function p(e) {
    let { children: t, size: n = "md", maxHeight: i = "viewport", ...s } = e;
    return (0, r.jsx)(a.dWK, { size: n, ...s, maxHeight: i, children: t });
}
function g(e) {
    let {
        title: t,
        gradientColor: n = "purple",
        countryCode: i,
        headerBadgeText: s,
        headerBadgeIcon: o,
        onBackClick: l,
        primaryButtonProps: u,
        children: d,
        ...f
    } = e;
    return (0, r.jsx)(c.e0, {
        children: (0, r.jsxs)(a.dWK, {
            ...f,
            children: [
                (0, r.jsx)(_, { gradientColor: n, title: t, countryCode: i, headerBadgeText: s, headerBadgeIcon: o }),
                (0, r.jsx)(a.cwr, { children: d }),
                (0, r.jsx)(h, { onBackClick: l, primaryButtonProps: u }),
            ],
        }),
    });
}

"use strict";
n.d(t, { Jg: () => T, lo: () => I, oH: () => S, s3: () => g });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(20742),
    l = n(364840),
    u = n(331322),
    c = n(224640),
    d = n(430993),
    _ = n(500380),
    f = n(518977),
    p = n(683433),
    h = n(981036),
    E = n(725836),
    m = n(857414);
function g(e) {
    let { gradientColor: t, title: n, headerBadgeText: s, headerBadgeIcon: a, countryCode: l, ...u } = e,
        { checkoutHeaderConfigs: c } = (0, E.ck)(),
        d = i.useCallback(
            () => (null == l ? null : (0, r.jsx)("img", { alt: "", className: m.bI, src: (0, _.t)(l) })),
            [l],
        ),
        p = i.useMemo(() => {
            if (null != s || null != c.headerBadgeText)
                return {
                    icon: c.headerBadgeIcon ?? a,
                    type: { text: c.headerBadgeText ?? s ?? "" },
                    variant: "expressive",
                };
        }, [s, a, c.headerBadgeText, c.headerBadgeIcon]);
    return (0, r.jsx)(o.rQ, {
        ...u,
        badge: p,
        badgePosition: "end",
        gradientColor: t,
        titleTextVariant: "heading-lg/semibold",
        alignCenter: !1,
        title: n,
        subtitle: null != l ? { text: (0, f.j7)((0, f.ni)(l)), leadingIcon: d } : void 0,
    });
}
let A = { top: 16, bottom: 8 };
function I(e) {
    let { onBackClick: t, primaryButtonProps: n, portalClassName: i } = e,
        { variant: s } = n,
        { setCheckoutFooterContentNode: o } = (0, E.ck)();
    return (0, r.jsxs)(l.j, {
        children: [
            (0, r.jsx)("div", { ref: o, className: a()(m.K4, i) }),
            (0, r.jsxs)(u.B, {
                direction: "horizontal",
                align: "center",
                justify: null != t ? "space-between" : "end",
                fullWidth: !0,
                padding: A,
                children: [
                    null != t ? (0, r.jsx)(p.A, { onClick: t }) : null,
                    (0, r.jsx)(h.p, { ...n, variant: s ?? "active" }),
                ],
            }),
        ],
    });
}
function T(e) {
    let { children: t, size: n = "md", maxHeight: i = "viewport", ...s } = e;
    return (0, r.jsx)(c.d, { size: n, ...s, maxHeight: i, children: t });
}
function S(e) {
    let {
        title: t,
        gradientColor: n = "purple",
        countryCode: i,
        headerBadgeText: s,
        headerBadgeIcon: a,
        onBackClick: o,
        primaryButtonProps: l,
        children: u,
        ..._
    } = e;
    return (0, r.jsx)(E.e0, {
        children: (0, r.jsxs)(c.d, {
            ..._,
            children: [
                (0, r.jsx)(g, { gradientColor: n, title: t, countryCode: i, headerBadgeText: s, headerBadgeIcon: a }),
                (0, r.jsx)(d.c, { children: u }),
                (0, r.jsx)(I, { onBackClick: o, primaryButtonProps: l }),
            ],
        }),
    });
}

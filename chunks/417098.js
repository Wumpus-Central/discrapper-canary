var l = t(477900);
t(582128);
var r = t(503698),
    c = t.n(r),
    i = t(607399),
    s = t(559106),
    o = t(28863),
    u = t(939249),
    a = t(789645),
    _ = t(129230),
    E = t(652215),
    A = t(792996),
    C = t(934966);
let N = Object.freeze({
    DEFAULT: C.Lx,
    NEUTRAL: C.NT,
    BRAND: C.x8,
    WARNING: C.SO,
    DANGER: C.HW,
    INFO: C.io,
    STREAMER_MODE: C.kL,
    CUSTOM: C.P4,
    SPOTIFY: C.AU,
    PREMIUM_TIER_0: C.zw,
    PREMIUM_TIER_1: C.G_,
    PREMIUM_TIER_2: C.NS,
});
function d(e) {
    let { children: n, className: t, minor: r = !1, ...i } = e;
    return (0, l.jsx)(s.vN, {
        children: (0, l.jsx)("button", { className: c()(C.x6, t, { [C.oy]: r }), ...i, children: n }),
    });
}
t.d(
    n,
    {},
    {
        $T: function (e) {
            let { color: n = N.DEFAULT, className: t, style: r, ref: s, children: o } = e;
            return (0, l.jsx)("div", {
                ref: s,
                className: c()(C.lm, { [C.Fr]: i.Fr }, t, n),
                style: null != r ? r : void 0,
                children: o,
            });
        },
        Hv: N,
        PM: function (e) {
            let { onClick: n, noticeType: t, className: r } = e;
            return (0, l.jsx)(u.D, {
                focusProps: { offset: 6 },
                className: c()(C.b, r),
                onClick: () => {
                    (n(), null != t && _.default.track(E.HAw.APP_NOTICE_CLOSED, { notice_type: t }));
                },
                "aria-label": A.intl.string(A.t.WAI6xu),
                children: (0, l.jsx)(a.P, { size: "sm", color: "currentColor", className: C.ut }),
            });
        },
        Z_: function (e) {
            let { children: n, noticeType: t, ...r } = e;
            return (0, l.jsx)(d, {
                ...r,
                onClick: (e) => {
                    (null != r.onClick && r.onClick(e),
                        null != t && _.default.track(E.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: t }));
                },
                children: n,
            });
        },
        eC: function (e) {
            let { children: n, href: t, noticeType: r, ...c } = e;
            return (0, l.jsx)(o.Anchor, {
                ...c,
                className: C.x6,
                href: t,
                onClick: (e) => {
                    (c.onClick?.(e), _.default.track(E.HAw.APP_NOTICE_ANCHOR_CLICKED, { notice_type: r, href: t }));
                },
                children: n,
            });
        },
        zr: d,
    },
);

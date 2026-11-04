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
    A = t(652215),
    E = t(792996),
    N = t(934966);
let C = Object.freeze({
    DEFAULT: N.Lx,
    NEUTRAL: N.NT,
    BRAND: N.x8,
    WARNING: N.SO,
    DANGER: N.HW,
    INFO: N.io,
    STREAMER_MODE: N.kL,
    CUSTOM: N.P4,
    SPOTIFY: N.AU,
    PLAYSTATION: N._9,
    PREMIUM_TIER_0: N.zw,
    PREMIUM_TIER_1: N.G_,
    PREMIUM_TIER_2: N.NS,
});
function P(e) {
    let { children: n, className: t, minor: r = !1, ...i } = e;
    return (0, l.jsx)(s.vN, {
        children: (0, l.jsx)("button", { className: c()(N.x6, t, { [N.oy]: r }), ...i, children: n }),
    });
}
t.d(
    n,
    {},
    {
        $T: function (e) {
            let { color: n = C.DEFAULT, className: t, style: r, ref: s, children: o } = e;
            return (0, l.jsx)("div", {
                ref: s,
                className: c()(N.lm, { [N.Fr]: i.Fr }, t, n),
                style: null != r ? r : void 0,
                children: o,
            });
        },
        Hv: C,
        PM: function (e) {
            let { onClick: n, noticeType: t, className: r } = e;
            return (0, l.jsx)(u.D, {
                focusProps: { offset: 6 },
                className: c()(N.b, r),
                onClick: () => {
                    (n(), null != t && _.default.track(A.HAw.APP_NOTICE_CLOSED, { notice_type: t }));
                },
                "aria-label": E.intl.string(E.t.WAI6xu),
                children: (0, l.jsx)(a.P, { size: "sm", color: "currentColor", className: N.ut }),
            });
        },
        Z_: function (e) {
            let { children: n, noticeType: t, ...r } = e;
            return (0, l.jsx)(P, {
                ...r,
                onClick: (e) => {
                    (null != r.onClick && r.onClick(e),
                        null != t && _.default.track(A.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: t }));
                },
                children: n,
            });
        },
        eC: function (e) {
            let { children: n, href: t, noticeType: r, ...c } = e;
            return (0, l.jsx)(o.Anchor, {
                ...c,
                className: N.x6,
                href: t,
                onClick: (e) => {
                    (c.onClick?.(e), _.default.track(A.HAw.APP_NOTICE_ANCHOR_CLICKED, { notice_type: r, href: t }));
                },
                children: n,
            });
        },
        zr: P,
    },
);

var t = n(477900);
n(582128);
var c = n(503698),
    r = n.n(c),
    i = n(607399),
    s = n(559106),
    o = n(28863),
    a = n(939249),
    u = n(789645),
    _ = n(129230),
    E = n(652215),
    A = n(792996),
    C = n(934966);
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
    let { children: l, className: n, minor: c = !1, ...i } = e;
    return (0, t.jsx)(s.vN, {
        children: (0, t.jsx)("button", { className: r()(C.x6, n, { [C.oy]: c }), ...i, children: l }),
    });
}
n.d(
    l,
    {},
    {
        $T: function (e) {
            let { color: l = N.DEFAULT, className: n, style: c, ref: s, children: o } = e;
            return (0, t.jsx)("div", {
                ref: s,
                className: r()(C.lm, { [C.Fr]: i.Fr }, n, l),
                style: null != c ? c : void 0,
                children: o,
            });
        },
        Hv: N,
        PM: function (e) {
            let { onClick: l, noticeType: n, className: c } = e;
            return (0, t.jsx)(a.D, {
                focusProps: { offset: 6 },
                className: r()(C.b, c),
                onClick: () => {
                    (l(), null != n && _.default.track(E.HAw.APP_NOTICE_CLOSED, { notice_type: n }));
                },
                "aria-label": A.intl.string(A.t.WAI6xu),
                children: (0, t.jsx)(u.XSmallIcon, { size: "sm", color: "currentColor", className: C.ut }),
            });
        },
        Z_: function (e) {
            let { children: l, noticeType: n, ...c } = e;
            return (0, t.jsx)(d, {
                ...c,
                onClick: (e) => {
                    (null != c.onClick && c.onClick(e),
                        null != n && _.default.track(E.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: n }));
                },
                children: l,
            });
        },
        eC: function (e) {
            let { children: l, href: n, noticeType: c, ...r } = e;
            return (0, t.jsx)(o.Anchor, {
                ...r,
                className: C.x6,
                href: n,
                onClick: (e) => {
                    (r.onClick?.(e), _.default.track(E.HAw.APP_NOTICE_ANCHOR_CLICKED, { notice_type: c, href: n }));
                },
                children: l,
            });
        },
        zr: d,
    },
);

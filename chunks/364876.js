n.d(t, { _: () => f });
var l = n(627968),
    r = n(311907),
    i = n(582754),
    s = n(397927),
    a = n(736653),
    o = n(775602),
    u = n(937008),
    c = n(552736),
    d = n(810498),
    p = n(298305),
    m = n(686046);
function f() {
    var e, t;
    let n = (0, r.bG)([o.A], () => o.A.useReducedMotion),
        f = (0, a.Ay)(),
        g = (0, i.Mw)(f),
        j = (0, c.A)(),
        y = null == j ? void 0 : j.planSelectionBanner,
        { claimableRewards: h } = (0, u.Pv)();
    if (null == y || null == h) return null;
    let v = null == (e = y.getBackgroundImageUrl) ? void 0 : e.call(y, g),
        b = (0, d.gc)(v),
        O =
            null == (t = y.gradientConfig)
                ? void 0
                : t.call(y, {
                      isDarkMode: g,
                      isAndroid: !1,
                  }),
        x = (0, d.K5)(O, {
            colorStops: [0, 12, 100],
        }),
        P = (0, d.x)(b, x, {
            backgroundSize: "cover, auto",
            backgroundPosition: "right center, 0% 0%",
        });
    return (0, l.jsxs)("div", {
        className: m.qD,
        style: P,
        children: [
            (0, l.jsx)("div", {
                className: m.my,
                children: (0, l.jsx)(p.A, {
                    claimableRewards: h,
                    maxRewardImageSrc: y.getImageUrl(g, n),
                    size: s._3J.SIZE_40,
                    imageScaling: 1.25,
                }),
            }),
            (0, l.jsx)(s.Text, {
                variant: "text-md/medium",
                className: m._M,
                color: "always-white",
                children: y.desktopBannerText(h.length),
            }),
        ],
    });
}

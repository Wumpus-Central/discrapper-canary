n.d(t, { K: () => f });
var r = n(54381),
    i = n(442837),
    a = n(481060),
    o = n(607070),
    s = n(987209),
    l = n(347896),
    c = n(717401),
    u = n(897942),
    d = n(383475);
function f() {
    var e;
    let t = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        { claimableRewards: n } = (0, s.wD)(),
        f = (0, l.Z)(),
        p = null == f ? void 0 : f.planSelection;
    if (null == p || null == n || 0 === n.length) return null;
    let _ = (0, c.Yr)(null == (e = p.getBannerImageUrl) ? void 0 : e.call(p)),
        m = (0, c.Tl)(p.gradientConfig, { defaultAngle: 180 });
    return (0, r.jsxs)("div", {
        className: d.promotionalGiftMessage,
        style: null != _ ? _ : m,
        children: [
            (0, r.jsxs)("div", {
                className: d.promotionalTextSection,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/semibold",
                        color: "always-white",
                        children: p.heading(),
                    }),
                    null != p.subheading &&
                        (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            children: p.subheading(n.length),
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: d.avatar,
                children: (0, r.jsx)(u.Z, {
                    maxRewardImageSrc: p.getImageUrl(!0, t),
                    claimableRewards: n,
                    size: a.EFr.SIZE_80,
                }),
            }),
        ],
    });
}

r.d(t, { K: () => g });
var i = r(627968),
    n = r(311907),
    a = r(834730),
    s = r(778712),
    l = r(775602),
    o = r(937008),
    c = r(552736),
    d = r(810498),
    u = r(298305),
    m = r(731113);
function g() {
    let e = (0, n.bG)([l.A], () => l.A.useReducedMotion),
        { claimableRewards: t } = (0, o.Pv)(),
        r = (0, c.A)(),
        g = r?.planSelection;
    if (null == g || null == t || 0 === t.length) return null;
    let x = (0, d.gc)(g.getBannerImageUrl?.()),
        p = (0, d.K5)(g.gradientConfig, { defaultAngle: 180 });
    return (0, i.jsxs)("div", {
        className: m.us,
        style: x ?? p,
        children: [
            (0, i.jsxs)("div", {
                className: m.ZR,
                children: [
                    (0, i.jsx)(a.E, { variant: "text-sm/semibold", color: "always-white", children: g.heading() }),
                    null != g.subheading &&
                        (0, i.jsx)(a.E, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            children: g.subheading(t.length),
                        }),
                ],
            }),
            (0, i.jsx)("div", {
                className: m.my,
                children: (0, i.jsx)(u.A, {
                    maxRewardImageSrc: g.getImageUrl(!0, e),
                    claimableRewards: t,
                    size: s._3.SIZE_80,
                }),
            }),
        ],
    });
}

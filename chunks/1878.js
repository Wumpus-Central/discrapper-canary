n.d(t, { K: () => f });
var r = n(627968),
    i = n(311907),
    a = n(397927),
    s = n(775602),
    o = n(937008),
    l = n(552736),
    c = n(810498),
    u = n(298305),
    d = n(733724);
function f() {
    var e;
    let t = (0, i.bG)([s.A], () => s.A.useReducedMotion),
        { claimableRewards: n } = (0, o.Pv)(),
        f = (0, l.A)(),
        p = null == f ? void 0 : f.planSelection;
    if (null == p || null == n || 0 === n.length) return null;
    let _ = (0, c.gc)(null == (e = p.getBannerImageUrl) ? void 0 : e.call(p)),
        h = (0, c.K5)(p.gradientConfig, { defaultAngle: 180 });
    return (0, r.jsxs)("div", {
        className: d.us,
        style: null != _ ? _ : h,
        children: [
            (0, r.jsxs)("div", {
                className: d.ZR,
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
                className: d.my,
                children: (0, r.jsx)(u.A, {
                    maxRewardImageSrc: p.getImageUrl(!0, t),
                    claimableRewards: n,
                    size: a._3J.SIZE_80,
                }),
            }),
        ],
    });
}

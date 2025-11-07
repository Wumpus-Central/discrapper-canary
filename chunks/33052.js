n.d(t, { K: () => f });
var r = n(951288),
    i = n(442837),
    a = n(481060),
    o = n(607070),
    s = n(987209),
    l = n(347896),
    c = n(717401),
    u = n(897942),
    d = n(897159);
function f() {
    var e;
    let t = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        { claimableRewards: n } = (0, s.wD)(),
        f = (0, l.Z)(),
        _ = null == f ? void 0 : f.planSelection;
    if (null == _ || null == n || 0 === n.length) return null;
    let p = (0, c.Yr)(null == (e = _.getBannerImageUrl) ? void 0 : e.call(_)),
        h = (0, c.Tl)(_.gradientConfig, { defaultAngle: 180 });
    return (0, r.jsxs)("div", {
        className: d.promotionalGiftMessage,
        style: null != p ? p : h,
        children: [
            (0, r.jsxs)("div", {
                className: d.promotionalTextSection,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/semibold",
                        color: "always-white",
                        children: _.heading(),
                    }),
                    null != _.subheading &&
                        (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            children: _.subheading(n.length),
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: d.avatar,
                children: (0, r.jsx)(u.Z, {
                    maxRewardImageSrc: _.getImageUrl(!0, t),
                    claimableRewards: n,
                    size: a.EFr.SIZE_80,
                }),
            }),
        ],
    });
}

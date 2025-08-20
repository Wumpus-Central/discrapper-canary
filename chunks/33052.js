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
    let e = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        { claimableRewards: t } = (0, s.wD)(),
        n = (0, l.Z)(),
        f = null == n ? void 0 : n.planSelection;
    if (null == f || null == t || 0 === t.length) return null;
    let _ = (0, c.Tl)(f.gradientConfig);
    return (0, r.jsxs)("div", {
        className: d.promotionalGiftMessage,
        style: _,
        children: [
            (0, r.jsxs)("div", {
                className: d.promotionalTextSection,
                children: [
                    (0, r.jsx)(a.Text, {
                        className: d.promotionalGiftMessageText,
                        variant: "text-sm/semibold",
                        children: f.heading(),
                    }),
                    null != f.subheading &&
                        t.length > 1 &&
                        (0, r.jsx)(a.Text, {
                            className: d.promotionalGiftMessageText,
                            variant: "text-sm/normal",
                            children: f.subheading(t.length),
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: d.avatar,
                children: (0, r.jsx)(u.Z, {
                    maxRewardImageSrc: f.getImageUrl(!0, e),
                    claimableRewards: t,
                    size: a.EFr.SIZE_80,
                }),
            }),
        ],
    });
}

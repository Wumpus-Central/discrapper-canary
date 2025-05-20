n.d(t, { K: () => C });
var r = n(255367),
    i = n(442837),
    l = n(481060),
    a = n(607070),
    s = n(987209),
    o = n(717401),
    c = n(286961),
    u = n(897942),
    d = n(154422);
function C() {
    let e = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        { claimableRewards: t } = (0, s.wD)(),
        n = (0, c.Z)(),
        C = null == n ? void 0 : n.planSelection;
    if (null == C || null == t || 0 === t.length) return null;
    let m = (0, o.Tl)(C.gradientConfig);
    return (0, r.jsxs)('div', {
        className: d.promotionalGiftMessage,
        style: m,
        children: [
            (0, r.jsxs)('div', {
                className: d.promotionalTextSection,
                children: [
                    (0, r.jsx)(l.Text, {
                        className: d.promotionalGiftMessageText,
                        variant: 'text-sm/semibold',
                        children: C.heading()
                    }),
                    null != C.subheading &&
                        t.length > 1 &&
                        (0, r.jsx)(l.Text, {
                            className: d.promotionalGiftMessageText,
                            variant: 'text-sm/normal',
                            children: C.subheading(t.length)
                        })
                ]
            }),
            (0, r.jsx)('div', {
                className: d.avatar,
                children: (0, r.jsx)(u.Z, {
                    maxRewardImageSrc: C.getImageUrl(!0, e),
                    claimableRewards: t,
                    size: l.EFr.SIZE_56
                })
            })
        ]
    });
}

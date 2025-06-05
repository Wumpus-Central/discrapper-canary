i.d(t, { K: () => m });
var n = i(255367),
    r = i(442837),
    l = i(481060),
    a = i(607070),
    s = i(987209),
    o = i(717401),
    c = i(286961),
    u = i(897942),
    d = i(154422);
function m() {
    let e = (0, r.e7)([a.Z], () => a.Z.useReducedMotion),
        { claimableRewards: t } = (0, s.wD)(),
        i = (0, c.Z)(),
        m = null == i ? void 0 : i.planSelection;
    if (null == m || null == t || 0 === t.length) return null;
    let C = (0, o.Tl)(m.gradientConfig);
    return (0, n.jsxs)('div', {
        className: d.promotionalGiftMessage,
        style: C,
        children: [
            (0, n.jsxs)('div', {
                className: d.promotionalTextSection,
                children: [
                    (0, n.jsx)(l.Text, {
                        className: d.promotionalGiftMessageText,
                        variant: 'text-sm/semibold',
                        children: m.heading()
                    }),
                    null != m.subheading &&
                        t.length > 1 &&
                        (0, n.jsx)(l.Text, {
                            className: d.promotionalGiftMessageText,
                            variant: 'text-sm/normal',
                            children: m.subheading(t.length)
                        })
                ]
            }),
            (0, n.jsx)('div', {
                className: d.avatar,
                children: (0, n.jsx)(u.Z, {
                    maxRewardImageSrc: m.getImageUrl(!0, e),
                    claimableRewards: t,
                    size: l.EFr.SIZE_80
                })
            })
        ]
    });
}

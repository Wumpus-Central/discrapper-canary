n.d(t, { K: () => m });
var i = n(255367),
    r = n(442837),
    l = n(481060),
    a = n(607070),
    s = n(987209),
    o = n(717401),
    c = n(286961),
    u = n(897942),
    d = n(124221);
function m() {
    let e = (0, r.e7)([a.Z], () => a.Z.useReducedMotion),
        { claimableRewards: t } = (0, s.wD)(),
        n = (0, c.Z)(),
        m = null == n ? void 0 : n.planSelection;
    if (null == m || null == t || 0 === t.length) return null;
    let C = (0, o.Tl)(m.gradientConfig);
    return (0, i.jsxs)('div', {
        className: d.promotionalGiftMessage,
        style: C,
        children: [
            (0, i.jsxs)('div', {
                className: d.promotionalTextSection,
                children: [
                    (0, i.jsx)(l.Text, {
                        className: d.promotionalGiftMessageText,
                        variant: 'text-sm/semibold',
                        children: m.heading()
                    }),
                    null != m.subheading &&
                        t.length > 1 &&
                        (0, i.jsx)(l.Text, {
                            className: d.promotionalGiftMessageText,
                            variant: 'text-sm/normal',
                            children: m.subheading(t.length)
                        })
                ]
            }),
            (0, i.jsx)('div', {
                className: d.avatar,
                children: (0, i.jsx)(u.Z, {
                    maxRewardImageSrc: m.getImageUrl(!0, e),
                    claimableRewards: t,
                    size: l.EFr.SIZE_56
                })
            })
        ]
    });
}

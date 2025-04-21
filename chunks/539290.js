n.d(t, {
    E: () => f,
    Z: () => p
});
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    o = n(780384),
    l = n(481060),
    a = n(410030),
    c = n(696936),
    u = n(903773),
    d = n(734344);
let f = {
    RIGHT: d.horizontalStatusWarningBlock,
    BOTTOM: d.verticalStatusWarningBlock
};
function p(e) {
    let { className: t, color: n = c.W.YELLOW, buttonPosition: i = f.BOTTOM, notice: p, ctaLabel: g, ctaLoading: b, ctaDisabled: m, ctaClassName: h, onClick: v } = e,
        _ = (0, a.ZP)();
    return (0, r.jsx)(u.Z, {
        className: s()(d.statusWarningBlock, { [d.statusWarningBlockWithCta]: null != g }, t),
        color: (0, o.wj)(_) ? n : c.W.BROWN,
        children: (0, r.jsxs)('div', {
            className: i,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    color: 'interactive-active',
                    children: p
                }),
                null != g &&
                    null != v &&
                    (0, r.jsx)('div', {
                        className: d.ctaButtonContainer,
                        children: (0, r.jsx)(l.zxk, {
                            className: s()(d.ctaButton, (0, o.wj)(_) ? void 0 : d.ctaBlackButton, h),
                            color: (0, o.wj)(_) ? l.zxk.Colors.WHITE : l.zxk.Colors.CUSTOM,
                            size: l.PhG.MEDIUM,
                            onClick: v,
                            disabled: m,
                            submitting: b,
                            children: (0, r.jsx)(l.Text, {
                                className: d.ctaButtonText,
                                variant: 'text-sm/medium',
                                children: g
                            })
                        })
                    })
            ]
        })
    });
}

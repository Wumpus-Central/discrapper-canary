s.d(t, {
    E: () => p,
    Z: () => f
});
var n = s(200651);
s(192379);
var i = s(120356),
    r = s.n(i),
    a = s(780384),
    o = s(481060),
    l = s(410030),
    c = s(696936),
    u = s(903773),
    d = s(529819);
let p = {
    RIGHT: d.horizontalStatusWarningBlock,
    BOTTOM: d.verticalStatusWarningBlock
};
function f(e) {
    let { className: t, color: s = c.W.YELLOW, buttonPosition: i = p.BOTTOM, notice: f, ctaLabel: g, ctaLoading: x, ctaDisabled: h, ctaClassName: m, onClick: v } = e,
        b = (0, l.ZP)();
    return (0, n.jsx)(u.Z, {
        className: r()(d.statusWarningBlock, { [d.statusWarningBlockWithCta]: null != g }, t),
        color: (0, a.wj)(b) ? s : c.W.BROWN,
        children: (0, n.jsxs)('div', {
            className: i,
            children: [
                (0, n.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'interactive-active',
                    children: f
                }),
                null != g &&
                    null != v &&
                    (0, n.jsx)('div', {
                        className: d.ctaButtonContainer,
                        children: (0, n.jsx)(o.zxk, {
                            className: r()(d.ctaButton, (0, a.wj)(b) ? void 0 : d.ctaBlackButton, m),
                            color: (0, a.wj)(b) ? o.zxk.Colors.WHITE : o.zxk.Colors.CUSTOM,
                            size: o.PhG.MEDIUM,
                            onClick: v,
                            disabled: h,
                            submitting: x,
                            children: (0, n.jsx)(o.Text, {
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

s.d(t, {
    E: () => f,
    Z: () => p
});
var n = s(200651);
s(192379);
var i = s(120356),
    r = s.n(i),
    o = s(780384),
    l = s(481060),
    a = s(410030),
    c = s(696936),
    u = s(903773),
    d = s(964556);
let f = {
    RIGHT: d.horizontalStatusWarningBlock,
    BOTTOM: d.verticalStatusWarningBlock
};
function p(e) {
    let { className: t, color: s = c.W.YELLOW, buttonPosition: i = f.BOTTOM, notice: p, ctaLabel: g, ctaLoading: x, ctaDisabled: h, ctaClassName: m, onClick: v } = e,
        b = (0, a.ZP)();
    return (0, n.jsx)(u.Z, {
        className: r()(d.statusWarningBlock, { [d.statusWarningBlockWithCta]: null != g }, t),
        color: (0, o.wj)(b) ? s : c.W.BROWN,
        children: (0, n.jsxs)('div', {
            className: i,
            children: [
                (0, n.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    color: 'interactive-active',
                    children: p
                }),
                null != g &&
                    null != v &&
                    (0, n.jsx)('div', {
                        className: d.ctaButtonContainer,
                        children: (0, n.jsx)(l.zxk, {
                            className: r()(d.ctaButton, (0, o.wj)(b) ? void 0 : d.ctaBlackButton, m),
                            color: (0, o.wj)(b) ? l.zxk.Colors.WHITE : l.zxk.Colors.CUSTOM,
                            size: l.PhG.MEDIUM,
                            onClick: v,
                            disabled: h,
                            submitting: x,
                            children: (0, n.jsx)(l.Text, {
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

n.d(t, {
    E: () => p,
    Z: () => f
});
var s = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    o = n(780384),
    c = n(481060),
    a = n(410030),
    l = n(696936),
    u = n(903773),
    d = n(7742);
let p = {
    RIGHT: d.horizontalStatusWarningBlock,
    BOTTOM: d.verticalStatusWarningBlock
};
function f(e) {
    let { className: t, color: n = l.W.YELLOW, buttonPosition: r = p.BOTTOM, notice: f, ctaLabel: b, ctaLoading: g, ctaDisabled: m, ctaClassName: O, onClick: h } = e,
        v = (0, a.ZP)();
    return (0, s.jsx)(u.Z, {
        className: i()(d.statusWarningBlock, { [d.statusWarningBlockWithCta]: null != b }, t),
        color: (0, o.wj)(v) ? n : l.W.BROWN,
        children: (0, s.jsxs)('div', {
            className: r,
            children: [
                (0, s.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'interactive-active',
                    children: f
                }),
                null != b &&
                    null != h &&
                    (0, s.jsx)('div', {
                        className: d.ctaButtonContainer,
                        children: (0, s.jsx)(c.zxk, {
                            className: i()(d.ctaButton, (0, o.wj)(v) ? void 0 : d.ctaBlackButton, O),
                            color: (0, o.wj)(v) ? c.zxk.Colors.WHITE : c.zxk.Colors.CUSTOM,
                            size: c.PhG.MEDIUM,
                            onClick: h,
                            disabled: m,
                            submitting: g,
                            children: (0, s.jsx)(c.Text, {
                                className: d.ctaButtonText,
                                variant: 'text-sm/medium',
                                children: b
                            })
                        })
                    })
            ]
        })
    });
}

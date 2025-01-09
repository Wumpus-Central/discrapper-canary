s.d(n, {
    E: function () {
        return p;
    },
    Z: function () {
        return f;
    }
});
var e = s(200651);
s(192379);
var i = s(120356),
    r = s.n(i),
    o = s(780384),
    c = s(481060),
    a = s(410030),
    l = s(696936),
    u = s(903773),
    d = s(529819);
let p = {
    RIGHT: d.horizontalStatusWarningBlock,
    BOTTOM: d.verticalStatusWarningBlock
};
function f(t) {
    let { className: n, color: s = l.W.YELLOW, buttonPosition: i = p.BOTTOM, notice: f, ctaLabel: g, ctaLoading: x, ctaDisabled: E, ctaClassName: h, onClick: b } = t,
        m = (0, a.ZP)();
    return (0, e.jsx)(u.Z, {
        className: r()(d.statusWarningBlock, { [d.statusWarningBlockWithCta]: null != g }, n),
        color: (0, o.wj)(m) ? s : l.W.BROWN,
        children: (0, e.jsxs)('div', {
            className: i,
            children: [
                (0, e.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'interactive-active',
                    children: f
                }),
                null != g &&
                    null != b &&
                    (0, e.jsx)('div', {
                        className: d.ctaButtonContainer,
                        children: (0, e.jsx)(c.Button, {
                            className: r()(d.ctaButton, (0, o.wj)(m) ? void 0 : d.ctaBlackButton, h),
                            color: (0, o.wj)(m) ? c.Button.Colors.WHITE : c.Button.Colors.CUSTOM,
                            size: c.ButtonSizes.MEDIUM,
                            onClick: b,
                            disabled: E,
                            submitting: x,
                            children: (0, e.jsx)(c.Text, {
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

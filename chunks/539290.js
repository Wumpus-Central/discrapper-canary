n.d(t, {
    E: function () {
        return f;
    },
    Z: function () {
        return p;
    }
});
var s = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    o = n(780384),
    c = n(481060),
    l = n(410030),
    a = n(696936),
    u = n(903773),
    d = n(529819);
let f = {
    RIGHT: d.horizontalStatusWarningBlock,
    BOTTOM: d.verticalStatusWarningBlock
};
function p(e) {
    let { className: t, color: n = a.W.YELLOW, buttonPosition: i = f.BOTTOM, notice: p, ctaLabel: g, ctaLoading: x, ctaDisabled: h, ctaClassName: b, onClick: m } = e,
        v = (0, l.ZP)();
    return (0, s.jsx)(u.Z, {
        className: r()(d.statusWarningBlock, { [d.statusWarningBlockWithCta]: null != g }, t),
        color: (0, o.wj)(v) ? n : a.W.BROWN,
        children: (0, s.jsxs)('div', {
            className: i,
            children: [
                (0, s.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'interactive-active',
                    children: p
                }),
                null != g &&
                    null != m &&
                    (0, s.jsx)('div', {
                        className: d.ctaButtonContainer,
                        children: (0, s.jsx)(c.Button, {
                            className: r()(d.ctaButton, (0, o.wj)(v) ? void 0 : d.ctaBlackButton, b),
                            color: (0, o.wj)(v) ? c.Button.Colors.WHITE : c.Button.Colors.CUSTOM,
                            size: c.ButtonSizes.MEDIUM,
                            onClick: m,
                            disabled: h,
                            submitting: x,
                            children: (0, s.jsx)(c.Text, {
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

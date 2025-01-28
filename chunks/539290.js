s.d(t, {
    E: function () {
        return f;
    },
    Z: function () {
        return p;
    }
});
var n = s(200651);
s(192379);
var i = s(120356),
    r = s.n(i),
    o = s(780384),
    c = s(481060),
    a = s(410030),
    l = s(696936),
    u = s(903773),
    d = s(529819);
let f = {
    RIGHT: d.horizontalStatusWarningBlock,
    BOTTOM: d.verticalStatusWarningBlock
};
function p(e) {
    let { className: t, color: s = l.W.YELLOW, buttonPosition: i = f.BOTTOM, notice: p, ctaLabel: g, ctaLoading: b, ctaDisabled: x, ctaClassName: h, onClick: m } = e,
        v = (0, a.ZP)();
    return (0, n.jsx)(u.Z, {
        className: r()(d.statusWarningBlock, { [d.statusWarningBlockWithCta]: null != g }, t),
        color: (0, o.wj)(v) ? s : l.W.BROWN,
        children: (0, n.jsxs)('div', {
            className: i,
            children: [
                (0, n.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'interactive-active',
                    children: p
                }),
                null != g &&
                    null != m &&
                    (0, n.jsx)('div', {
                        className: d.ctaButtonContainer,
                        children: (0, n.jsx)(c.Button, {
                            className: r()(d.ctaButton, (0, o.wj)(v) ? void 0 : d.ctaBlackButton, h),
                            color: (0, o.wj)(v) ? c.Button.Colors.WHITE : c.Button.Colors.CUSTOM,
                            size: c.ButtonSizes.MEDIUM,
                            onClick: m,
                            disabled: x,
                            submitting: b,
                            children: (0, n.jsx)(c.Text, {
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

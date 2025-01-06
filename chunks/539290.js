e.d(n, {
    E: function () {
        return g;
    },
    Z: function () {
        return E;
    }
});
var i = e(200651);
e(192379);
var s = e(120356),
    r = e.n(s),
    l = e(780384),
    o = e(481060),
    a = e(410030),
    c = e(696936),
    u = e(903773),
    d = e(529819);
let g = {
    RIGHT: d.horizontalStatusWarningBlock,
    BOTTOM: d.verticalStatusWarningBlock
};
function E(t) {
    let { className: n, color: e = c.W.YELLOW, buttonPosition: s = g.BOTTOM, notice: E, ctaLabel: f, ctaLoading: h, ctaDisabled: m, ctaClassName: p, onClick: x } = t,
        N = (0, a.ZP)();
    return (0, i.jsx)(u.Z, {
        className: r()(d.statusWarningBlock, { [d.statusWarningBlockWithCta]: null != f }, n),
        color: (0, l.wj)(N) ? e : c.W.BROWN,
        children: (0, i.jsxs)('div', {
            className: s,
            children: [
                (0, i.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'interactive-active',
                    children: E
                }),
                null != f &&
                    null != x &&
                    (0, i.jsx)('div', {
                        className: d.ctaButtonContainer,
                        children: (0, i.jsx)(o.Button, {
                            className: r()(d.ctaButton, (0, l.wj)(N) ? void 0 : d.ctaBlackButton, p),
                            color: (0, l.wj)(N) ? o.Button.Colors.WHITE : o.Button.Colors.CUSTOM,
                            size: o.ButtonSizes.MEDIUM,
                            onClick: x,
                            disabled: m,
                            submitting: h,
                            children: (0, i.jsx)(o.Text, {
                                className: d.ctaButtonText,
                                variant: 'text-sm/medium',
                                children: f
                            })
                        })
                    })
            ]
        })
    });
}

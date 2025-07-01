n.d(t, {
    E: () => f,
    Z: () => p
});
var r = n(255367);
n(73800);
var s = n(120356),
    i = n.n(s),
    l = n(780384),
    o = n(481060),
    a = n(410030),
    c = n(696936),
    u = n(903773),
    d = n(734344);
let f = {
    RIGHT: d.horizontalStatusWarningBlock,
    BOTTOM: d.verticalStatusWarningBlock
};
function p(e) {
    let { className: t, color: n = c.W.YELLOW, buttonPosition: s = f.BOTTOM, notice: p, ctaLabel: g, ctaLoading: b, ctaDisabled: v, ctaClassName: m, onClick: h } = e,
        O = (0, a.ZP)();
    return (0, r.jsx)(u.Z, {
        className: i()(d.statusWarningBlock, { [d.statusWarningBlockWithCta]: null != g }, t),
        color: (0, l.wj)(O) ? n : c.W.BROWN,
        children: (0, r.jsxs)('div', {
            className: s,
            children: [
                (0, r.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'interactive-active',
                    children: p
                }),
                null != g &&
                    null != h &&
                    (0, r.jsx)('div', {
                        className: d.ctaButtonContainer,
                        children: (0, r.jsx)(o.zxk, {
                            className: i()(d.ctaButton, (0, l.wj)(O) ? void 0 : d.ctaBlackButton, m),
                            color: (0, l.wj)(O) ? o.zxk.Colors.WHITE : o.zxk.Colors.CUSTOM,
                            size: o.PhG.MEDIUM,
                            onClick: h,
                            disabled: v,
                            submitting: b,
                            children: (0, r.jsx)(o.Text, {
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

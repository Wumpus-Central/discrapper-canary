n.d(t, {
    E: () => f,
    Z: () => p
});
var r = n(255367);
n(73800);
var s = n(120356),
    i = n.n(s),
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
    let { className: t, color: n = c.W.YELLOW, buttonPosition: s = f.BOTTOM, notice: p, ctaLabel: g, ctaLoading: b, ctaDisabled: m, ctaClassName: v, onClick: h } = e,
        O = (0, a.ZP)();
    return (0, r.jsx)(u.Z, {
        className: i()(d.statusWarningBlock, { [d.statusWarningBlockWithCta]: null != g }, t),
        color: (0, o.wj)(O) ? n : c.W.BROWN,
        children: (0, r.jsxs)('div', {
            className: s,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    color: 'interactive-active',
                    children: p
                }),
                null != g &&
                    null != h &&
                    (0, r.jsx)('div', {
                        className: d.ctaButtonContainer,
                        children: (0, r.jsx)(l.zxk, {
                            className: i()(d.ctaButton, (0, o.wj)(O) ? void 0 : d.ctaBlackButton, v),
                            color: (0, o.wj)(O) ? l.zxk.Colors.WHITE : l.zxk.Colors.CUSTOM,
                            size: l.PhG.MEDIUM,
                            onClick: h,
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

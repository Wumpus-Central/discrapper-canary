n.d(t, {
    E: () => p,
    Z: () => f
});
var r = n(255367);
n(73800);
var i = n(120356),
    s = n.n(i),
    o = n(780384),
    l = n(481060),
    a = n(410030),
    c = n(696936),
    u = n(903773),
    d = n(734344);
let p = {
    RIGHT: d.horizontalStatusWarningBlock,
    BOTTOM: d.verticalStatusWarningBlock
};
function f(e) {
    let { className: t, color: n = c.W.YELLOW, buttonPosition: i = p.BOTTOM, notice: f, ctaLabel: g, ctaLoading: b, ctaDisabled: m, ctaClassName: _, onClick: v } = e,
        h = (0, a.ZP)();
    return (0, r.jsx)(u.Z, {
        className: s()(d.statusWarningBlock, { [d.statusWarningBlockWithCta]: null != g }, t),
        color: (0, o.wj)(h) ? n : c.W.BROWN,
        children: (0, r.jsxs)('div', {
            className: i,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    color: 'interactive-active',
                    children: f
                }),
                null != g &&
                    null != v &&
                    (0, r.jsx)('div', {
                        className: d.ctaButtonContainer,
                        children: (0, r.jsx)(l.zxk, {
                            className: s()(d.ctaButton, (0, o.wj)(h) ? void 0 : d.ctaBlackButton, _),
                            color: (0, o.wj)(h) ? l.zxk.Colors.WHITE : l.zxk.Colors.CUSTOM,
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

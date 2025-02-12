e.d(s, {
    E: () => p,
    Z: () => g
});
var n = e(200651);
e(192379);
var i = e(120356),
    r = e.n(i),
    a = e(780384),
    c = e(481060),
    o = e(410030),
    l = e(696936),
    u = e(903773),
    d = e(912122);
let p = {
    RIGHT: d.horizontalStatusWarningBlock,
    BOTTOM: d.verticalStatusWarningBlock
};
function g(t) {
    let { className: s, color: e = l.W.YELLOW, buttonPosition: i = p.BOTTOM, notice: g, ctaLabel: f, ctaLoading: x, ctaDisabled: h, ctaClassName: E, onClick: m } = t,
        v = (0, o.ZP)();
    return (0, n.jsx)(u.Z, {
        className: r()(d.statusWarningBlock, { [d.statusWarningBlockWithCta]: null != f }, s),
        color: (0, a.wj)(v) ? e : l.W.BROWN,
        children: (0, n.jsxs)('div', {
            className: i,
            children: [
                (0, n.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'interactive-active',
                    children: g
                }),
                null != f &&
                    null != m &&
                    (0, n.jsx)('div', {
                        className: d.ctaButtonContainer,
                        children: (0, n.jsx)(c.zxk, {
                            className: r()(d.ctaButton, (0, a.wj)(v) ? void 0 : d.ctaBlackButton, E),
                            color: (0, a.wj)(v) ? c.zxk.Colors.WHITE : c.zxk.Colors.CUSTOM,
                            size: c.PhG.MEDIUM,
                            onClick: m,
                            disabled: h,
                            submitting: x,
                            children: (0, n.jsx)(c.Text, {
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

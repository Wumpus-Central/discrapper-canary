r.d(t, {
    E: () => u,
    Z: () => f
});
var n = r(200651);
r(192379);
var i = r(120356),
    s = r.n(i),
    o = r(780384),
    l = r(481060),
    a = r(410030),
    c = r(696936),
    h = r(903773),
    v = r(734344);
let u = {
    RIGHT: v.horizontalStatusWarningBlock,
    BOTTOM: v.verticalStatusWarningBlock
};
function f(e) {
    let { className: t, color: r = c.W.YELLOW, buttonPosition: i = u.BOTTOM, notice: f, ctaLabel: p, ctaLoading: d, ctaDisabled: b, ctaClassName: g, onClick: Z } = e,
        j = (0, a.ZP)();
    return (0, n.jsx)(h.Z, {
        className: s()(v.statusWarningBlock, { [v.statusWarningBlockWithCta]: null != p }, t),
        color: (0, o.wj)(j) ? r : c.W.BROWN,
        children: (0, n.jsxs)('div', {
            className: i,
            children: [
                (0, n.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    color: 'interactive-active',
                    children: f
                }),
                null != p &&
                    null != Z &&
                    (0, n.jsx)('div', {
                        className: v.ctaButtonContainer,
                        children: (0, n.jsx)(l.zxk, {
                            className: s()(v.ctaButton, (0, o.wj)(j) ? void 0 : v.ctaBlackButton, g),
                            color: (0, o.wj)(j) ? l.zxk.Colors.WHITE : l.zxk.Colors.CUSTOM,
                            size: l.PhG.MEDIUM,
                            onClick: Z,
                            disabled: b,
                            submitting: d,
                            children: (0, n.jsx)(l.Text, {
                                className: v.ctaButtonText,
                                variant: 'text-sm/medium',
                                children: p
                            })
                        })
                    })
            ]
        })
    });
}

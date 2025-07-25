n.d(t, {
    E: () => p,
    Z: () => g
});
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    s = n(780384),
    o = n(755721),
    a = n(481060),
    c = n(410030),
    u = n(696936),
    d = n(903773),
    f = n(734344);
let p = {
    RIGHT: f.horizontalStatusWarningBlock,
    BOTTOM: f.verticalStatusWarningBlock
};
function g(e) {
    let { className: t, color: n = u.W.YELLOW, buttonPosition: i = p.BOTTOM, notice: g, ctaLabel: m, ctaLoading: b, ctaDisabled: h, ctaClassName: v, onClick: O } = e,
        y = (0, c.ZP)();
    return (0, r.jsx)(d.Z, {
        className: l()(f.statusWarningBlock, { [f.statusWarningBlockWithCta]: null != m }, t),
        color: (0, s.wj)(y) ? n : u.W.BROWN,
        children: (0, r.jsxs)('div', {
            className: i,
            children: [
                (0, r.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'interactive-active',
                    children: g
                }),
                null != m &&
                    null != O &&
                    (0, r.jsx)('div', {
                        className: f.ctaButtonContainer,
                        children: (0, r.jsx)(o.zx, {
                            className: l()(f.ctaButton, (0, s.wj)(y) ? void 0 : f.ctaBlackButton, v),
                            color: (0, s.wj)(y) ? o.zx.Colors.WHITE : o.zx.Colors.CUSTOM,
                            size: o.Ph.MEDIUM,
                            onClick: O,
                            disabled: h,
                            submitting: b,
                            children: (0, r.jsx)(a.Text, {
                                className: f.ctaButtonText,
                                variant: 'text-sm/medium',
                                children: m
                            })
                        })
                    })
            ]
        })
    });
}

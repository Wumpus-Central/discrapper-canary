n.d(t, {
    E: () => p,
    Z: () => g
});
var r = n(255367);
n(73800);
var i = n(120356),
    s = n.n(i),
    l = n(780384),
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
    let { className: t, color: n = u.W.YELLOW, buttonPosition: i = p.BOTTOM, notice: g, ctaLabel: b, ctaLoading: v, ctaDisabled: m, ctaClassName: h, onClick: O } = e,
        y = (0, c.ZP)();
    return (0, r.jsx)(d.Z, {
        className: s()(f.statusWarningBlock, { [f.statusWarningBlockWithCta]: null != b }, t),
        color: (0, l.wj)(y) ? n : u.W.BROWN,
        children: (0, r.jsxs)('div', {
            className: i,
            children: [
                (0, r.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'interactive-active',
                    children: g
                }),
                null != b &&
                    null != O &&
                    (0, r.jsx)('div', {
                        className: f.ctaButtonContainer,
                        children: (0, r.jsx)(o.zx, {
                            className: s()(f.ctaButton, (0, l.wj)(y) ? void 0 : f.ctaBlackButton, h),
                            color: (0, l.wj)(y) ? o.zx.Colors.WHITE : o.zx.Colors.CUSTOM,
                            size: o.Ph.MEDIUM,
                            onClick: O,
                            disabled: m,
                            submitting: v,
                            children: (0, r.jsx)(a.Text, {
                                className: f.ctaButtonText,
                                variant: 'text-sm/medium',
                                children: b
                            })
                        })
                    })
            ]
        })
    });
}

s.d(t, {
    E: () => p,
    Z: () => f
});
var r = s(200651);
s(192379);
var n = s(120356),
    i = s.n(n),
    o = s(780384),
    l = s(481060),
    a = s(410030),
    c = s(696936),
    u = s(903773),
    d = s(734344);
let p = {
    RIGHT: d.horizontalStatusWarningBlock,
    BOTTOM: d.verticalStatusWarningBlock
};
function f(e) {
    let { className: t, color: s = c.W.YELLOW, buttonPosition: n = p.BOTTOM, notice: f, ctaLabel: b, ctaLoading: g, ctaDisabled: O, ctaClassName: x, onClick: m } = e,
        h = (0, a.ZP)();
    return (0, r.jsx)(u.Z, {
        className: i()(d.statusWarningBlock, { [d.statusWarningBlockWithCta]: null != b }, t),
        color: (0, o.wj)(h) ? s : c.W.BROWN,
        children: (0, r.jsxs)('div', {
            className: n,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    color: 'interactive-active',
                    children: f
                }),
                null != b &&
                    null != m &&
                    (0, r.jsx)('div', {
                        className: d.ctaButtonContainer,
                        children: (0, r.jsx)(l.zxk, {
                            className: i()(d.ctaButton, (0, o.wj)(h) ? void 0 : d.ctaBlackButton, x),
                            color: (0, o.wj)(h) ? l.zxk.Colors.WHITE : l.zxk.Colors.CUSTOM,
                            size: l.PhG.MEDIUM,
                            onClick: m,
                            disabled: O,
                            submitting: g,
                            children: (0, r.jsx)(l.Text, {
                                className: d.ctaButtonText,
                                variant: 'text-sm/medium',
                                children: b
                            })
                        })
                    })
            ]
        })
    });
}

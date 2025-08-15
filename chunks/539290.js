n.d(t, {
    E: () => p,
    Z: () => g,
});
var i = n(951288);
n(647438);
var r = n(120356),
    s = n.n(r),
    l = n(780384),
    o = n(755721),
    a = n(481060),
    u = n(410030),
    c = n(696936),
    d = n(903773),
    h = n(672628);
let p = {
    RIGHT: h.horizontalStatusWarningBlock,
    BOTTOM: h.verticalStatusWarningBlock,
};
function g(e) {
    let {
            className: t,
            color: n = c.W.YELLOW,
            buttonPosition: r = p.BOTTOM,
            notice: g,
            ctaLabel: f,
            ctaLoading: v,
            ctaDisabled: m,
            ctaClassName: C,
            onClick: b,
        } = e,
        y = (0, u.ZP)();
    return (0, i.jsx)(d.Z, {
        className: s()(h.statusWarningBlock, { [h.statusWarningBlockWithCta]: null != f }, t),
        color: (0, l.wj)(y) ? n : c.W.BROWN,
        children: (0, i.jsxs)("div", {
            className: r,
            children: [
                (0, i.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "interactive-active",
                    children: g,
                }),
                null != f &&
                    null != b &&
                    (0, i.jsx)("div", {
                        className: h.ctaButtonContainer,
                        children: (0, i.jsx)(o.zx, {
                            className: s()(h.ctaButton, (0, l.wj)(y) ? void 0 : h.ctaBlackButton, C),
                            color: (0, l.wj)(y) ? o.zx.Colors.WHITE : o.zx.Colors.CUSTOM,
                            size: o.Ph.MEDIUM,
                            onClick: b,
                            disabled: m,
                            submitting: v,
                            children: (0, i.jsx)(a.Text, {
                                className: h.ctaButtonText,
                                variant: "text-sm/medium",
                                children: f,
                            }),
                        }),
                    }),
            ],
        }),
    });
}

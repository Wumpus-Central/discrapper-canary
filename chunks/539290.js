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
    c = n(410030),
    u = n(696936),
    d = n(903773),
    h = n(672628);
let p = {
    RIGHT: h.horizontalStatusWarningBlock,
    BOTTOM: h.verticalStatusWarningBlock,
};
function g(e) {
    let {
            className: t,
            color: n = u.W.YELLOW,
            buttonPosition: r = p.BOTTOM,
            notice: g,
            ctaLabel: f,
            ctaLoading: m,
            ctaDisabled: b,
            ctaClassName: v,
            onClick: C,
        } = e,
        _ = (0, c.ZP)();
    return (0, i.jsx)(d.Z, {
        className: s()(h.statusWarningBlock, { [h.statusWarningBlockWithCta]: null != f }, t),
        color: (0, l.wj)(_) ? n : u.W.BROWN,
        children: (0, i.jsxs)("div", {
            className: r,
            children: [
                (0, i.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "interactive-active",
                    children: g,
                }),
                null != f &&
                    null != C &&
                    (0, i.jsx)("div", {
                        className: h.ctaButtonContainer,
                        children: (0, i.jsx)(o.zx, {
                            className: s()(h.ctaButton, (0, l.wj)(_) ? void 0 : h.ctaBlackButton, v),
                            color: (0, l.wj)(_) ? o.zx.Colors.WHITE : o.zx.Colors.CUSTOM,
                            size: o.Ph.MEDIUM,
                            onClick: C,
                            disabled: b,
                            submitting: m,
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

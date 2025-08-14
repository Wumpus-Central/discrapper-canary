n.d(t, {
    E: () => p,
    Z: () => b,
});
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(780384),
    s = n(755721),
    c = n(481060),
    a = n(410030),
    u = n(696936),
    d = n(903773),
    f = n(672628);
let p = {
    RIGHT: f.horizontalStatusWarningBlock,
    BOTTOM: f.verticalStatusWarningBlock,
};
function b(e) {
    let {
            className: t,
            color: n = u.W.YELLOW,
            buttonPosition: i = p.BOTTOM,
            notice: b,
            ctaLabel: O,
            ctaLoading: m,
            ctaDisabled: h,
            ctaClassName: g,
            onClick: j,
        } = e,
        y = (0, a.ZP)();
    return (0, r.jsx)(d.Z, {
        className: l()(f.statusWarningBlock, { [f.statusWarningBlockWithCta]: null != O }, t),
        color: (0, o.wj)(y) ? n : u.W.BROWN,
        children: (0, r.jsxs)("div", {
            className: i,
            children: [
                (0, r.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    color: "interactive-active",
                    children: b,
                }),
                null != O &&
                    null != j &&
                    (0, r.jsx)("div", {
                        className: f.ctaButtonContainer,
                        children: (0, r.jsx)(s.zx, {
                            className: l()(f.ctaButton, (0, o.wj)(y) ? void 0 : f.ctaBlackButton, g),
                            color: (0, o.wj)(y) ? s.zx.Colors.WHITE : s.zx.Colors.CUSTOM,
                            size: s.Ph.MEDIUM,
                            onClick: j,
                            disabled: h,
                            submitting: m,
                            children: (0, r.jsx)(c.Text, {
                                className: f.ctaButtonText,
                                variant: "text-sm/medium",
                                children: O,
                            }),
                        }),
                    }),
            ],
        }),
    });
}

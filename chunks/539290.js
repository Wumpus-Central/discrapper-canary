n.d(t, {
    E: () => _,
    Z: () => p,
});
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(780384),
    s = n(755721),
    l = n(481060),
    c = n(410030),
    u = n(696936),
    d = n(903773),
    f = n(672628);
let _ = {
    RIGHT: f.horizontalStatusWarningBlock,
    BOTTOM: f.verticalStatusWarningBlock,
};
function p(e) {
    let {
            className: t,
            color: n = u.W.YELLOW,
            buttonPosition: i = _.BOTTOM,
            notice: p,
            ctaLabel: h,
            ctaLoading: m,
            ctaDisabled: g,
            ctaClassName: E,
            onClick: b,
        } = e,
        y = (0, c.ZP)();
    return (0, r.jsx)(d.Z, {
        className: a()(f.statusWarningBlock, { [f.statusWarningBlockWithCta]: null != h }, t),
        color: (0, o.wj)(y) ? n : u.W.BROWN,
        children: (0, r.jsxs)("div", {
            className: i,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    color: "interactive-active",
                    children: p,
                }),
                null != h &&
                    null != b &&
                    (0, r.jsx)("div", {
                        className: f.ctaButtonContainer,
                        children: (0, r.jsx)(s.zx, {
                            className: a()(f.ctaButton, (0, o.wj)(y) ? void 0 : f.ctaBlackButton, E),
                            color: (0, o.wj)(y) ? s.zx.Colors.WHITE : s.zx.Colors.CUSTOM,
                            size: s.Ph.MEDIUM,
                            onClick: b,
                            disabled: g,
                            submitting: m,
                            children: (0, r.jsx)(l.Text, {
                                className: f.ctaButtonText,
                                variant: "text-sm/medium",
                                children: h,
                            }),
                        }),
                    }),
            ],
        }),
    });
}

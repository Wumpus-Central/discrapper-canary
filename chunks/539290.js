n.d(t, {
    E: () => f,
    Z: () => _,
});
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(780384),
    s = n(481060),
    l = n(410030),
    c = n(696936),
    u = n(903773),
    d = n(71025);
let f = {
    RIGHT: d.horizontalStatusWarningBlock,
    BOTTOM: d.verticalStatusWarningBlock,
};
function _(e) {
    let {
            className: t,
            color: n = c.W.YELLOW,
            buttonPosition: i = f.BOTTOM,
            notice: _,
            ctaLabel: p,
            ctaLoading: h,
            ctaDisabled: m,
            onClick: g,
        } = e,
        E = (0, l.ZP)();
    return (0, r.jsx)(u.Z, {
        className: a()(d.statusWarningBlock, { [d.statusWarningBlockWithCta]: null != p }, t),
        color: (0, o.wj)(E) ? n : c.W.BROWN,
        children: (0, r.jsxs)("div", {
            className: i,
            children: [
                (0, r.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "interactive-active",
                    children: _,
                }),
                null != p &&
                    null != g &&
                    (0, r.jsx)("div", {
                        className: d.ctaButtonContainer,
                        children: (0, r.jsx)(s.zxk, {
                            text: p,
                            variant: "overlay-secondary",
                            onClick: g,
                            disabled: m,
                            loading: h,
                        }),
                    }),
            ],
        }),
    });
}

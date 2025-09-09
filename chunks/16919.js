r.d(i, { default: () => h });
var n = r(951288);
r(647438);
var a = r(257465),
    e = r(369585),
    o = r(37148),
    s = r(481060),
    l = r(37234),
    d = r(453591),
    c = r(388032),
    x = r(296148);
function h(t) {
    let { transitionState: i, onClose: r } = t,
        { redeemReward: h } = (0, d.h)(!0);
    return (0, n.jsxs)(a.I, {
        transitionState: i,
        onClose: r,
        size: "sm",
        paddingSize: "lg",
        children: [
            (0, n.jsx)(o.x, {
                title: c.intl.string(c.t.oFJPCg),
                titleTextVariant: "heading-lg/semibold",
            }),
            (0, n.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "text-secondary",
                className: x.errorModalBody,
                children: c.intl.string(c.t.mgM2z8),
            }),
            (0, n.jsx)(e.G, {
                actionsFullWidth: !0,
                actions: [
                    {
                        text: c.intl.string(c.t.qcikJS),
                        variant: "primary",
                        onClick: () => {
                            r(), (0, l.xf)(), h();
                        },
                    },
                ],
            }),
        ],
    });
}

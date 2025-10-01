r.d(i, { default: () => c });
var n = r(951288);
r(647438);
var a = r(793030),
    o = r(481060),
    e = r(37234),
    s = r(453591),
    l = r(388032),
    d = r(296148);
function c(t) {
    let { transitionState: i, onClose: r } = t,
        { redeemReward: c } = (0, s.h)(!0);
    return (0, n.jsxs)(a.IX, {
        transitionState: i,
        onClose: r,
        size: "sm",
        paddingSize: "lg",
        children: [
            (0, n.jsx)(a.xBx, {
                title: l.intl.string(l.t.oFJPCg),
                titleTextVariant: "heading-lg/semibold",
            }),
            (0, n.jsx)(o.Text, {
                variant: "text-md/normal",
                color: "text-secondary",
                className: d.errorModalBody,
                children: l.intl.string(l.t.mgM2z8),
            }),
            (0, n.jsx)(a.Go$, {
                actionsFullWidth: !0,
                actions: [
                    {
                        text: l.intl.string(l.t.qcikJS),
                        variant: "primary",
                        onClick: () => {
                            r(), (0, e.xf)(), c();
                        },
                    },
                ],
            }),
        ],
    });
}

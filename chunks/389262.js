e.d(i, { default: () => d });
var a = e(54381);
e(473749);
var n = e(793030),
    r = e(481060),
    s = e(313201),
    l = e(388032),
    o = e(758590),
    c = e(365627);
function d(t) {
    let { transitionState: i, onClose: e, storeListing: d, subscription: u } = t,
        p = (0, s.Dt)();
    return (0, a.jsx)(n.ExpressiveModal, {
        actions: [
            {
                variant: "secondary",
                onClick: e,
                text: l.intl.string(l.t["JtWl+a"]),
            },
        ],
        "aria-labelledby": p,
        graphic: {
            type: "image",
            src: c,
        },
        onClose: e,
        transitionState: i,
        title: l.intl.formatToPlainString(l.t.wLFT6z, { tier: d.summary }),
        children: (0, a.jsx)(r.Text, {
            className: o.subtitle,
            variant: "text-md/medium",
            color: "text-default",
            children: l.intl.format(l.t.OsAK9h, { timestamp: null == u ? void 0 : u.currentPeriodEnd }),
        }),
    });
}

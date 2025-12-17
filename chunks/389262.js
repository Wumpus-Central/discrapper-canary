i.d(e, { default: () => d });
var a = i(54381);
i(473749);
var n = i(793030),
    r = i(481060),
    s = i(313201),
    l = i(388032),
    c = i(835980),
    o = i(365627);
function d(t) {
    let { transitionState: e, onClose: i, storeListing: d, subscription: u } = t,
        p = (0, s.Dt)();
    return (0, a.jsx)(n.ExpressiveModal, {
        actions: [
            {
                variant: "secondary",
                onClick: i,
                text: l.intl.string(l.t["JtWl+a"]),
            },
        ],
        "aria-labelledby": p,
        graphic: {
            type: "image",
            src: o,
        },
        onClose: i,
        transitionState: e,
        title: l.intl.formatToPlainString(l.t.wLFT6z, { tier: d.summary }),
        children: (0, a.jsx)(r.Text, {
            className: c.subtitle,
            variant: "text-md/medium",
            color: "text-default",
            children: l.intl.format(l.t.OsAK9h, { timestamp: null == u ? void 0 : u.currentPeriodEnd }),
        }),
    });
}

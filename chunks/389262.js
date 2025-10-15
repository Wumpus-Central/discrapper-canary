i.d(e, { default: () => d });
var a = i(951288);
i(647438);
var r = i(793030),
    n = i(481060),
    s = i(313201),
    l = i(388032),
    o = i(758590),
    c = i(365627);
function d(t) {
    let { transitionState: e, onClose: i, storeListing: d, subscription: u } = t,
        p = (0, s.Dt)();
    return (0, a.jsx)(r.ExpressiveModal, {
        actions: [
            {
                variant: "secondary",
                onClick: i,
                text: l.intl.string(l.t["JtWl+f"]),
            },
        ],
        "aria-labelledby": p,
        graphic: {
            type: "image",
            src: c,
        },
        onClose: i,
        transitionState: e,
        title: l.intl.formatToPlainString(l.t["wLFT6+"], { tier: d.summary }),
        children: (0, a.jsx)(n.Text, {
            className: o.subtitle,
            variant: "text-md/medium",
            color: "header-secondary",
            children: l.intl.format(l.t.OsAK9v, { timestamp: null == u ? void 0 : u.currentPeriodEnd }),
        }),
    });
}

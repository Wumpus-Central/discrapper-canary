e.d(i, { default: () => d });
var a = e(951288);
e(647438);
var n = e(667202),
    r = e(481060),
    s = e(313201),
    l = e(388032),
    o = e(758590),
    c = e(365627);
function d(t) {
    let { transitionState: i, onClose: e, storeListing: d, subscription: u } = t,
        m = (0, s.Dt)();
    return (0, a.jsx)(n.I, {
        actions: [
            {
                variant: "secondary",
                onClick: e,
                text: l.intl.string(l.t["JtWl+f"]),
            },
        ],
        "aria-labelledby": m,
        graphic: {
            type: "image",
            src: c,
        },
        onClose: e,
        transitionState: i,
        title: l.intl.formatToPlainString(l.t["wLFT6+"], { tier: d.summary }),
        children: (0, a.jsx)(r.Text, {
            className: o.subtitle,
            variant: "text-md/medium",
            color: "header-secondary",
            children: l.intl.format(l.t.OsAK9v, { timestamp: null == u ? void 0 : u.currentPeriodEnd }),
        }),
    });
}

e.d(a, {
    default: () => d,
});
var i = e(627968);
e(64700);
var r = e(158954),
    n = e(397927),
    s = e(915089),
    l = e(985018),
    c = e(399675),
    o = e(938430);

function d(t) {
    let { transitionState: a, onClose: e, storeListing: d, subscription: p } = t,
        u = (0, s.GV)();
    return (0, i.jsx)(r.ExpressiveModal, {
        actions: [
            {
                variant: "secondary",
                onClick: e,
                text: l.intl.string(l.t["JtWl+a"]),
            },
        ],
        "aria-labelledby": u,
        graphic: {
            type: "image",
            src: o,
        },
        onClose: e,
        transitionState: a,
        title: l.intl.formatToPlainString(l.t.wLFT6z, {
            tier: d.summary,
        }),
        children: (0, i.jsx)(n.Text, {
            className: c.VA,
            variant: "text-md/medium",
            color: "text-default",
            children: l.intl.format(l.t.OsAK9h, {
                timestamp: null == p ? void 0 : p.currentPeriodEnd,
            }),
        }),
    });
}

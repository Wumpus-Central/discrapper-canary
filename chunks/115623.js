a.d(e, { default: () => d });
var i = a(627968);
a(64700);
var r = a(158954),
    s = a(397927),
    n = a(915089),
    l = a(985018),
    o = a(399675),
    c = a(938430);
function d(t) {
    let { transitionState: e, onClose: a, storeListing: d, subscription: p } = t,
        u = (0, n.GV)();
    return (0, i.jsx)(r.ExpressiveModal, {
        actions: [{ variant: "secondary", onClick: a, text: l.intl.string(l.t["JtWl+a"]) }],
        "aria-labelledby": u,
        graphic: { type: "image", src: c },
        onClose: a,
        transitionState: e,
        title: l.intl.formatToPlainString(l.t.wLFT6z, { tier: d.summary }),
        children: (0, i.jsx)(s.Text, {
            className: o.VA,
            variant: "text-md/medium",
            color: "text-default",
            children: l.intl.format(l.t.OsAK9h, { timestamp: p?.currentPeriodEnd }),
        }),
    });
}

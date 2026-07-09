i.d(a, { default: () => o });
var e = i(627968);
i(64700);
var r = i(772707),
    n = i(834730),
    s = i(915089),
    l = i(375708),
    c = i(71372),
    d = i(938430);
function o(t) {
    let { transitionState: a, onClose: i, storeListing: o, subscription: m } = t,
        u = (0, s.GV)();
    return (0, e.jsx)(r.k, {
        actions: [{ variant: "secondary", onClick: i, text: l.intl.string(l.t["JtWl+a"]) }],
        "aria-labelledby": u,
        graphic: { type: "image", src: d },
        onClose: i,
        transitionState: a,
        title: l.intl.formatToPlainString(l.t.wLFT6z, { tier: o.summary }),
        children: (0, e.jsx)(n.E, {
            className: c.VA,
            variant: "text-md/medium",
            color: "text-default",
            children: l.intl.format(l.t.OsAK9h, { timestamp: m?.currentPeriodEnd }),
        }),
    });
}

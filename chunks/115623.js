i.d(a, { default: () => o });
var r = i(477900);
i(582128);
var e = i(772707),
    n = i(834730),
    s = i(915089),
    l = i(105292),
    c = i(988901),
    d = i(938430);
function o(t) {
    let { transitionState: a, onClose: i, storeListing: o, subscription: m } = t,
        u = (0, s.GV)();
    return (0, r.jsx)(e.k, {
        actions: [{ variant: "secondary", onClick: i, text: l.intl.string(l.t["JtWl+a"]) }],
        "aria-labelledby": u,
        graphic: { type: "image", src: d },
        onClose: i,
        transitionState: a,
        title: l.intl.formatToPlainString(l.t.wLFT6z, { tier: o.summary }),
        children: (0, r.jsx)(n.E, {
            className: c.VA,
            variant: "body-md/medium",
            color: "text-default",
            children: l.intl.format(l.t.OsAK9h, { timestamp: m?.currentPeriodEnd }),
        }),
    });
}

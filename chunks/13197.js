n.d(i, { default: () => p });
var a = n(627968);
n(64700);
var r = n(284009),
    s = n.n(r),
    e = n(189213),
    l = n(834730),
    o = n(599941),
    c = n(985018),
    d = n(943128);
function p(t) {
    let { onClose: i, guildId: n, transitionState: r } = t,
        p = (0, o.Tq)(n);
    return (
        s()(null != p, "subscriptionsSettings cannot be null"),
        (0, a.jsx)(e.Modal, {
            onClose: i,
            title: c.intl.string(c.t.xPum5Q),
            transitionState: r,
            "aria-label": c.intl.string(c.t.D98gRz),
            actions: [{ variant: "primary", text: c.intl.string(c.t.wdo1oB), onClick: i }],
            children: (0, a.jsx)(l.E, {
                variant: "text-md/normal",
                color: "text-muted",
                className: d.h,
                children: p.description,
            }),
        })
    );
}

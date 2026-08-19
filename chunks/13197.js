i.d(n, { default: () => u });
var a = i(477900);
i(582128);
var r = i(284009),
    s = i.n(r),
    e = i(189213),
    l = i(834730),
    o = i(599941),
    c = i(375708),
    d = i(78311);
function u(t) {
    let { onClose: n, guildId: i, transitionState: r } = t,
        u = (0, o.Tq)(i);
    return (
        s()(null != u, "subscriptionsSettings cannot be null"),
        (0, a.jsx)(e.Modal, {
            onClose: n,
            title: c.intl.string(c.t.xPum5Q),
            transitionState: r,
            "aria-label": c.intl.string(c.t.D98gRz),
            actions: [{ variant: "primary", text: c.intl.string(c.t.wdo1oB), onClick: n }],
            children: (0, a.jsx)(l.E, {
                variant: "text-md/normal",
                color: "text-muted",
                className: d.h,
                children: u.description,
            }),
        })
    );
}

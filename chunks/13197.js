i.d(n, { default: () => u }), i(228524);
var a = i(627968);
i(64700);
var e = i(284009),
    r = i.n(e),
    s = i(158954),
    l = i(397927),
    o = i(599941),
    c = i(985018),
    d = i(257529);
function u(t) {
    let { onClose: n, guildId: i, transitionState: e } = t,
        u = (0, o.Tq)(i);
    return (
        r()(null != u, "subscriptionsSettings cannot be null"),
        (0, a.jsx)(s.Modal, {
            onClose: n,
            title: c.intl.string(c.t.xPum5Q),
            transitionState: e,
            "aria-label": c.intl.string(c.t.D98gRz),
            actions: [
                {
                    variant: "primary",
                    text: c.intl.string(c.t.wdo1oB),
                    onClick: n,
                },
            ],
            children: (0, a.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                className: d.h,
                children: u.description,
            }),
        })
    );
}

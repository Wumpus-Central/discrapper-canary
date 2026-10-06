e.d(a, { default: () => o });
var i = e(477900),
    n = e(582128),
    s = e(189213),
    r = e(37948),
    l = e(375708);
let o = (t) => {
    let { transitionState: a, onClose: e, game: o, websiteButtons: c, trackAction: u } = t,
        p = (0, r.A)(),
        d = n.useMemo(
            () =>
                c.map((t) => ({
                    icon: t.icon,
                    text: t.text,
                    "aria-label": t.ariaLabel,
                    variant: "secondary",
                    onClick: () => {
                        (u(t.action), p(t.url));
                    },
                    role: "link",
                })),
            [u, c, p],
        );
    return (0, i.jsx)(s.a, {
        onClose: e,
        transitionState: a,
        size: "sm",
        title: l.intl.string(l.t["/4gj6r"]),
        subtitle: l.intl.format(l.t["0acM2Y"], { gameName: o.name }),
        actions: d,
    });
};

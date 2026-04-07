e.d(a, { default: () => o });
var i = e(627968),
    n = e(64700),
    s = e(158954),
    l = e(37948),
    r = e(985018);
let o = (t) => {
    let { transitionState: a, onClose: e, game: o, websiteButtons: c, trackAction: u } = t,
        d = (0, l.A)(),
        p = n.useMemo(
            () =>
                c.map((t) => ({
                    icon: t.icon,
                    text: t.text,
                    "aria-label": t.ariaLabel,
                    variant: "secondary",
                    onClick: () => {
                        u(t.action), d(t.url);
                    },
                    role: "link",
                })),
            [u, c, d],
        );
    return (0, i.jsx)(s.Modal, {
        onClose: e,
        transitionState: a,
        size: "sm",
        title: r.intl.string(r.t["/4gj6r"]),
        subtitle: r.intl.format(r.t["0acM2Y"], { gameName: o.name }),
        actions: p,
    });
};

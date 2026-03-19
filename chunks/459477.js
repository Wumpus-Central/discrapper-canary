a.d(t, { default: () => i });
var n = a(627968),
    r = a(64700),
    o = a(158954),
    s = a(37948),
    l = a(985018);
let i = (e) => {
    let { transitionState: t, onClose: a, detectedGame: i, websiteButtons: c, trackAction: u } = e,
        d = (0, s.A)(),
        m = r.useMemo(
            () =>
                c.map((e) => ({
                    icon: e.icon,
                    text: e.text,
                    "aria-label": e.ariaLabel,
                    variant: "secondary",
                    onClick: () => {
                        u(e.action), d(e.url);
                    },
                    role: "link",
                })),
            [u, c, d],
        );
    return (0, n.jsx)(o.Modal, {
        onClose: a,
        transitionState: t,
        size: "sm",
        title: l.intl.string(l.t["/4gj6r"]),
        subtitle: l.intl.format(l.t["0acM2Y"], { gameName: i.name }),
        actions: m,
    });
};

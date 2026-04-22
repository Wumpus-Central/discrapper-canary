n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    l = n(821609),
    a = n(688810),
    r = n(637193),
    o = n(84540),
    d = n(919395),
    u = n(128450),
    c = n(985018),
    g = n(727369);
function m(e) {
    let { user: t, guild: n, titleIcon: m } = e,
        { analyticsLocations: _ } = (0, a.Ay)(),
        A = null != n,
        { userNameplate: h, guildNameplate: p, pendingNameplate: x, pendingErrors: E } = (0, d.rv)(t, n?.id),
        T = s.useCallback(() => {
            (0, r.p)({ analyticsLocations: _, guildId: n?.id });
        }, [_, n?.id]),
        S = s.useCallback(() => {
            (0, o.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, i.jsx)(u.A, {
        title: c.intl.string(c.t.x5CoXR),
        titleIcon: m,
        errors: E,
        children: (0, i.jsxs)("div", {
            className: g.u,
            children: [
                (0, i.jsx)(l.$, { variant: "primary", size: "sm", text: c.intl.string(c.t.BwdeM1), onClick: T }),
                (void 0 === x ? (A ? p : h) != null : null != x) &&
                    (0, i.jsx)(l.$, {
                        variant: "secondary",
                        size: "sm",
                        text: A ? c.intl.string(c.t.CHf9iJ) : c.intl.string(c.t["9zwziY"]),
                        onClick: S,
                    }),
            ],
        }),
    });
}

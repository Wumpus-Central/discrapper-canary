n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(688810),
    r = n(590547),
    o = n(84540),
    d = n(919395),
    c = n(128450),
    u = n(985018),
    _ = n(352126);
function m(e) {
    let { user: t, guild: n, titleIcon: m } = e,
        { analyticsLocations: g } = (0, a.Ay)(),
        A = null != n,
        { userNameplate: x, guildNameplate: h, pendingNameplate: p, pendingErrors: T } = (0, d.rv)(t, n?.id),
        E = s.useCallback(() => {
            (0, r.p)({ analyticsLocations: g, guildId: n?.id });
        }, [g, n?.id]),
        S = s.useCallback(() => {
            (0, o.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, i.jsx)(c.A, {
        title: u.intl.string(u.t.x5CoXR),
        titleIcon: m,
        errors: T,
        children: (0, i.jsxs)("div", {
            className: _.u,
            children: [
                (0, i.jsx)(l.Button, { variant: "primary", size: "sm", text: u.intl.string(u.t.BwdeM1), onClick: E }),
                (void 0 === p ? (A ? h : x) != null : null != p) &&
                    (0, i.jsx)(l.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: A ? u.intl.string(u.t.CHf9iJ) : u.intl.string(u.t["9zwziY"]),
                        onClick: S,
                    }),
            ],
        }),
    });
}

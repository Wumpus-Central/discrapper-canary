n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    a = n(688810),
    l = n(590547),
    o = n(919395),
    c = n(128450),
    d = n(985018),
    u = n(888920);
function _(e) {
    let { user: t, guild: n, titleIcon: _ } = e,
        { analyticsLocations: m } = (0, a.Ay)(),
        A = null != n,
        { userNameplate: g, guildNameplate: E, pendingNameplate: h, pendingErrors: p } = (0, o.rv)(t, n?.id),
        C = s.useCallback(() => {
            (0, l.p)({ analyticsLocations: m, guildId: n?.id });
        }, [m, n?.id]),
        x = s.useCallback(() => {
            (0, o.pX)(null, n?.id);
        }, [n?.id]);
    return (0, i.jsx)(c.A, {
        title: d.intl.string(d.t.x5CoXR),
        titleIcon: _,
        errors: p,
        children: (0, i.jsxs)("div", {
            className: u.u,
            children: [
                (0, i.jsx)(r.Button, { variant: "primary", size: "sm", text: d.intl.string(d.t.BwdeM1), onClick: C }),
                (void 0 === h ? (A ? E : g) != null : null != h) &&
                    (0, i.jsx)(r.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: A ? d.intl.string(d.t.CHf9iJ) : d.intl.string(d.t["9zwziY"]),
                        onClick: x,
                    }),
            ],
        }),
    });
}

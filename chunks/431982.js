n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(688810),
    o = n(590547),
    l = n(919395),
    c = n(128450),
    u = n(985018),
    d = n(888920);
function f(e) {
    let { user: t, guild: n, titleIcon: f } = e,
        { analyticsLocations: p } = (0, s.Ay)(),
        _ = null != n,
        {
            userNameplate: h,
            guildNameplate: m,
            pendingNameplate: g,
            pendingErrors: E,
        } = (0, l.rv)(t, null == n ? void 0 : n.id),
        b = void 0 === g ? (_ ? m : h) != null : null != g,
        y = i.useCallback(() => {
            (0, o.p)({
                analyticsLocations: p,
                guildId: null == n ? void 0 : n.id,
            });
        }, [p, null == n ? void 0 : n.id]),
        O = i.useCallback(() => {
            (0, l.pX)(null, null == n ? void 0 : n.id);
        }, [null == n ? void 0 : n.id]);
    return (0, r.jsx)(c.A, {
        title: u.intl.string(u.t.x5CoXR),
        titleIcon: f,
        errors: E,
        children: (0, r.jsxs)("div", {
            className: d.u,
            children: [
                (0, r.jsx)(a.Button, {
                    variant: "primary",
                    size: "sm",
                    text: u.intl.string(u.t.BwdeM1),
                    onClick: y,
                }),
                b &&
                    (0, r.jsx)(a.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: _ ? u.intl.string(u.t.CHf9iJ) : u.intl.string(u.t["9zwziY"]),
                        onClick: O,
                    }),
            ],
        }),
    });
}

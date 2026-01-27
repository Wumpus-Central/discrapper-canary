n.d(t, {
    A: () => _,
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(688810),
    a = n(590547),
    o = n(919395),
    c = n(128450),
    d = n(985018),
    u = n(888920);

function _(e) {
    let { user: t, guild: n, titleIcon: _ } = e,
        { analyticsLocations: p } = (0, s.Ay)(),
        m = null != n,
        {
            userNameplate: g,
            guildNameplate: A,
            pendingNameplate: f,
            pendingErrors: h,
        } = (0, o.rv)(t, null == n ? void 0 : n.id),
        b = i.useCallback(() => {
            (0, a.p)({
                analyticsLocations: p,
                guildId: null == n ? void 0 : n.id,
            });
        }, [p, null == n ? void 0 : n.id]),
        E = i.useCallback(() => {
            (0, o.pX)(null, null == n ? void 0 : n.id);
        }, [null == n ? void 0 : n.id]);
    return (0, r.jsx)(c.A, {
        title: d.intl.string(d.t.x5CoXR),
        titleIcon: _,
        errors: h,
        children: (0, r.jsxs)("div", {
            className: u.u,
            children: [
                (0, r.jsx)(l.Button, {
                    variant: "primary",
                    size: "sm",
                    text: d.intl.string(d.t.BwdeM1),
                    onClick: b,
                }),
                (void 0 === f ? (m ? A : g) != null : null != f) &&
                    (0, r.jsx)(l.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: m ? d.intl.string(d.t.CHf9iJ) : d.intl.string(d.t["9zwziY"]),
                        onClick: E,
                    }),
            ],
        }),
    });
}

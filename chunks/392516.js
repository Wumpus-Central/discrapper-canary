a.d(e, { default: () => k });
var n = a(627968),
    i = a(64700),
    s = a(732955),
    r = a(397927),
    l = a(686956),
    c = a(181658),
    d = a(58149),
    o = a(688810),
    u = a(954571),
    x = a(427262),
    h = a(652215),
    m = a(985018),
    g = a(399199);
function k(t) {
    let { transitionState: e, guild: a, user: k, ban: p, onClose: A } = t,
        [b, j] = i.useState(!1),
        [v, y] = i.useState(null),
        { analyticsLocations: C } = (0, o.Ay)(),
        _ = C?.[0] ?? null,
        f = i.useCallback(async () => {
            if (null != a) {
                y(null), j(!0);
                try {
                    await l.A.unbanUser(a.id, k.id),
                        A(),
                        u.default.track(h.HAw.GUILD_BAN_REMOVED, {
                            ...(0, d.H$)(a.id),
                            target_user_id: k.id,
                            reason: p.reason,
                            location: _,
                        });
                } catch (t) {
                    y(new c.A(t)), j(!1);
                }
            }
        }, [p.reason, a, _, A, k.id]);
    return (0, n.jsx)(s.aFV, {
        title: x.Ay.getUserTag(k, { mode: "username" }),
        actions: [
            { text: m.intl.string(m.t.UPcIa5), onClick: f, variant: "critical-secondary", loading: b },
            { text: m.intl.string(m.t.i4jeWR), onClick: A },
        ],
        onClose: A,
        transitionState: e,
        children: (0, n.jsxs)("div", {
            className: g.Qs,
            children: [
                (0, n.jsx)(r.Text, { variant: "text-md/medium", children: m.intl.string(m.t["9Ki66N"]) }),
                (0, n.jsx)(r.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: null != p.reason && "" !== p.reason ? p.reason : m.intl.string(m.t["t+2Zci"]),
                }),
                null != v
                    ? (0, n.jsx)(r.Text, {
                          className: g.z3,
                          color: "text-feedback-critical",
                          variant: "text-sm/normal",
                          children: v.getAnyErrorMessage(),
                      })
                    : null,
            ],
        }),
    });
}

a.d(e, { default: () => k });
var n = a(627968),
    i = a(64700),
    s = a(189213),
    l = a(834730),
    r = a(66834),
    c = a(181658),
    d = a(95561),
    o = a(688810),
    u = a(174459),
    x = a(427262),
    h = a(652215),
    m = a(375708),
    g = a(399199);
function k(t) {
    let { transitionState: e, guild: a, user: k, ban: p, onClose: A } = t,
        [b, j] = i.useState(!1),
        [v, y] = i.useState(null),
        { analyticsLocations: C } = (0, o.Ay)(),
        E = C?.[0] ?? null,
        _ = i.useCallback(async () => {
            if (null != a) {
                y(null), j(!0);
                try {
                    await r.A.unbanUser(a.id, k.id),
                        A(),
                        u.default.track(h.HAw.GUILD_BAN_REMOVED, {
                            ...(0, d.H$)(a.id),
                            target_user_id: k.id,
                            reason: p.reason,
                            location: E,
                        });
                } catch (t) {
                    y(new c.A(t)), j(!1);
                }
            }
        }, [p.reason, a, E, A, k.id]);
    return (0, n.jsx)(s.Modal, {
        title: x.Ay.getUserTag(k, { mode: "username" }),
        actions: [
            { text: m.intl.string(m.t.UPcIa5), onClick: _, variant: "critical-secondary", loading: b },
            { text: m.intl.string(m.t.i4jeWR), onClick: A },
        ],
        onClose: A,
        transitionState: e,
        children: (0, n.jsxs)("div", {
            className: g.Qs,
            children: [
                (0, n.jsx)(l.E, { variant: "text-md/medium", children: m.intl.string(m.t["9Ki66N"]) }),
                (0, n.jsx)(l.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: null != p.reason && "" !== p.reason ? p.reason : m.intl.string(m.t["t+2Zci"]),
                }),
                null != v
                    ? (0, n.jsx)(l.E, {
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

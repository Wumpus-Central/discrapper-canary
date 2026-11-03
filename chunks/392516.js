(n.d(e, { default: () => k }), n(321073));
var a = n(477900),
    i = n(582128),
    s = n(17928),
    l = n(189213),
    r = n(834730),
    c = n(66834),
    d = n(181658),
    o = n(666860),
    u = n(688810),
    h = n(576705),
    m = n(174459),
    x = n(427262),
    b = n(652215),
    g = n(105292),
    A = n(566612);
function k(t) {
    let { transitionState: e, guild: n, user: k, ban: p, onClose: y } = t,
        [E, _] = i.useState(!1),
        [j, v] = i.useState(null),
        C = (0, s.bG)([h.A], () => null != n && h.A.can(b.xBc.BAN_MEMBERS, n), [n]),
        { analyticsLocations: f } = (0, u.Ay)(),
        w = f?.[0] ?? null,
        N = i.useCallback(async () => {
            if (null != n) {
                (v(null), _(!0));
                try {
                    (await c.A.unbanUser(n.id, k.id),
                        y(),
                        m.default.track(b.HAw.GUILD_BAN_REMOVED, {
                            ...(0, o.H$)(n.id),
                            target_user_id: k.id,
                            reason: p.reason,
                            location: w,
                        }));
                } catch (t) {
                    (v(new d.A(t)), _(!1));
                }
            }
        }, [p.reason, n, w, y, k.id]),
        B = [];
    return (
        C &&
            (B.push({ text: g.intl.string(g.t.UPcIa5), onClick: N, variant: "critical-secondary", loading: E }),
            B.push({ text: g.intl.string(g.t.i4jeWR), onClick: y })),
        (0, a.jsx)(l.a, {
            title: x.Ay.getUserTag(k, { mode: "username" }),
            actions: B,
            onClose: y,
            transitionState: e,
            children: (0, a.jsxs)("div", {
                className: A.Qs,
                children: [
                    (0, a.jsx)(r.E, { variant: "body-md/medium", children: g.intl.string(g.t["9Ki66N"]) }),
                    (0, a.jsx)(r.E, {
                        variant: "body-xs/medium",
                        color: "text-subtle",
                        children: null != p.reason && "" !== p.reason ? p.reason : g.intl.string(g.t["t+2Zci"]),
                    }),
                    null != j
                        ? (0, a.jsx)(r.E, {
                              className: A.z3,
                              color: "text-feedback-critical",
                              variant: "body-sm/normal",
                              children: j.getAnyErrorMessage(),
                          })
                        : null,
                ],
            }),
        })
    );
}

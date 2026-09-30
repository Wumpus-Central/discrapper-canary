(n.d(e, { default: () => p }), n(321073));
var a = n(477900),
    i = n(582128),
    s = n(17928),
    l = n(189213),
    r = n(834730),
    c = n(66834),
    u = n(181658),
    d = n(95561),
    o = n(688810),
    x = n(576705),
    h = n(174459),
    m = n(427262),
    g = n(652215),
    A = n(375708),
    k = n(566612);
function p(t) {
    let { transitionState: e, guild: n, user: p, ban: E, onClose: b } = t,
        [_, j] = i.useState(!1),
        [v, y] = i.useState(null),
        C = (0, s.bG)([x.A], () => null != n && x.A.can(g.xBc.BAN_MEMBERS, n), [n]),
        { analyticsLocations: f } = (0, o.Ay)(),
        w = f?.[0] ?? null,
        N = i.useCallback(async () => {
            if (null != n) {
                (y(null), j(!0));
                try {
                    (await c.A.unbanUser(n.id, p.id),
                        b(),
                        h.default.track(g.HAw.GUILD_BAN_REMOVED, {
                            ...(0, d.H$)(n.id),
                            target_user_id: p.id,
                            reason: E.reason,
                            location: w,
                        }));
                } catch (t) {
                    (y(new u.A(t)), j(!1));
                }
            }
        }, [E.reason, n, w, b, p.id]),
        B = [];
    return (
        C &&
            (B.push({ text: A.intl.string(A.t.UPcIa5), onClick: N, variant: "critical-secondary", loading: _ }),
            B.push({ text: A.intl.string(A.t.i4jeWR), onClick: b })),
        (0, a.jsx)(l.a, {
            title: m.Ay.getUserTag(p, { mode: "username" }),
            actions: B,
            onClose: b,
            transitionState: e,
            children: (0, a.jsxs)("div", {
                className: k.Qs,
                children: [
                    (0, a.jsx)(r.E, { variant: "text-md/medium", children: A.intl.string(A.t["9Ki66N"]) }),
                    (0, a.jsx)(r.E, {
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: null != E.reason && "" !== E.reason ? E.reason : A.intl.string(A.t["t+2Zci"]),
                    }),
                    null != v
                        ? (0, a.jsx)(r.E, {
                              className: k.z3,
                              color: "text-feedback-critical",
                              variant: "text-sm/normal",
                              children: v.getAnyErrorMessage(),
                          })
                        : null,
                ],
            }),
        })
    );
}

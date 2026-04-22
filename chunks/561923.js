n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(280513),
    o = n(311907),
    d = n(243721),
    c = n(834730),
    u = n(349288),
    m = n(837011),
    g = n(348943),
    h = n(576055),
    x = n(997509),
    _ = n(665346),
    p = n(652215),
    A = n(985018),
    E = n(39144);
function f(e) {
    let { profile: t, canManageGuild: n } = e,
        s = t.id,
        f = a.i.VISIBLE.has(t.visibility),
        j = (0, o.bG)([m.A], () => m.A.getProfile(s)?.visibility === g.n.PUBLIC_WITH_RECRUITMENT, [s]),
        N = l.useRef(null);
    (0, _.A)(N, p.nd0.PROFILE_VISIBILITY);
    let I = l.useCallback(() => {
            f
                ? x.A.updateGuildProfile(s, { visibility: g.n.RESTRICTED })
                : x.A.updateGuildProfile(s, { visibility: j ? g.n.PUBLIC_WITH_RECRUITMENT : g.n.PUBLIC });
        }, [s, j, f]),
        C = l.useCallback(() => {
            x.A.setSection(p.BEX.ACCESS, p.nd0.ACCESS_DISCOVERABLE);
        }, []),
        b = t.features?.includes(p.GuildFeatures.DISCOVERABLE);
    return (0, i.jsxs)("div", {
        className: E.Im,
        ref: N,
        children: [
            (0, i.jsxs)("div", {
                className: E.fi,
                children: [
                    (0, i.jsx)(d.d, {
                        label: A.intl.string(A.t.fjHWen),
                        description: A.intl.string(A.t.J1YOV6),
                        checked: !f,
                        onChange: I,
                        disabled: b || !n,
                    }),
                    b &&
                        (0, i.jsx)(c.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: A.intl.format(A.t.R8jY9g, {
                                accessLink: (e, t) => (0, i.jsx)(u.Anchor, { onClick: C, children: e }, t),
                            }),
                        }),
                ],
            }),
            (0, i.jsx)("div", {
                className: r()(E.fi, { [E.Rl]: f }),
                children: (0, i.jsx)(h.A, { guildId: s, name: null }),
            }),
        ],
    });
}

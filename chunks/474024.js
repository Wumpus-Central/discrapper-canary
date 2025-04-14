n.d(t, { Z: () => x });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(580685),
    o = n(442837),
    c = n(481060),
    d = n(314852),
    u = n(330705),
    m = n(323220),
    g = n(434404),
    p = n(981631),
    h = n(388032),
    f = n(951767);
function x(e) {
    var t;
    let { profile: n, canManageGuild: s } = e,
        x = n.id,
        b = a.Y.VISIBLE.has(n.visibility),
        j = (0, o.e7)(
            [d.Z],
            () => {
                var e;
                return (null == (e = d.Z.getProfile(x)) ? void 0 : e.visibility) === u.k.PUBLIC_WITH_RECRUITMENT;
            },
            [x]
        ),
        N = i.useCallback(() => {
            b ? g.Z.updateGuildProfile(x, { visibility: u.k.RESTRICTED }) : g.Z.updateGuildProfile(x, { visibility: j ? u.k.PUBLIC_WITH_RECRUITMENT : u.k.PUBLIC });
        }, [x, j, b]),
        _ = i.useCallback(() => {
            g.Z.setSection(p.pNK.ACCESS, p.KsC.ACCESS_DISCOVERABLE);
        }, []),
        v = null == (t = n.features) ? void 0 : t.includes(p.oNc.DISCOVERABLE);
    return (0, r.jsxs)(c.hjN, {
        className: f.twoColumnContainer,
        children: [
            (0, r.jsxs)('div', {
                className: f.column,
                children: [
                    (0, r.jsx)(c.j7V, {
                        onChange: N,
                        value: !b,
                        hideBorder: !0,
                        disabled: v || !s,
                        children: h.NW.string(h.t.fjHWen)
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: h.NW.string(h.t.J1YOV1)
                    }),
                    v &&
                        (0, r.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-muted',
                            children: h.NW.format(h.t.R8jY9v, {
                                accessLink: (e, t) =>
                                    (0, r.jsx)(
                                        c.eee,
                                        {
                                            onClick: _,
                                            children: e
                                        },
                                        t
                                    )
                            })
                        })
                ]
            }),
            (0, r.jsx)('div', {
                className: l()(f.column, { [f.profileViewDisabled]: b }),
                children: (0, r.jsx)(m.Z, {
                    guildId: x,
                    name: n.name
                })
            })
        ]
    });
}

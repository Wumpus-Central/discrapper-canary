n.d(t, { Z: () => b });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(580685),
    o = n(442837),
    c = n(481060),
    d = n(314852),
    u = n(330705),
    m = n(323220),
    g = n(434404),
    p = n(981631),
    f = n(388032),
    h = n(951767);
function b(e) {
    var t;
    let { profile: n, canManageGuild: s } = e,
        b = n.id,
        x = l.Y.VISIBLE.has(n.visibility),
        j = (0, o.e7)(
            [d.Z],
            () => {
                var e;
                return (null == (e = d.Z.getProfile(b)) ? void 0 : e.visibility) === u.k.PUBLIC_WITH_RECRUITMENT;
            },
            [b]
        ),
        N = i.useCallback(() => {
            x ? g.Z.updateGuildProfile(b, { visibility: u.k.RESTRICTED }) : g.Z.updateGuildProfile(b, { visibility: j ? u.k.PUBLIC_WITH_RECRUITMENT : u.k.PUBLIC });
        }, [b, j, x]),
        v = i.useCallback(() => {
            g.Z.setSection(p.pNK.ACCESS, p.KsC.ACCESS_DISCOVERABLE);
        }, []),
        _ = null == (t = n.features) ? void 0 : t.includes(p.oNc.DISCOVERABLE);
    return (0, r.jsxs)(c.hjN, {
        className: h.twoColumnContainer,
        children: [
            (0, r.jsxs)('div', {
                className: h.column,
                children: [
                    (0, r.jsx)(c.j7V, {
                        onChange: N,
                        value: !x,
                        hideBorder: !0,
                        disabled: _ || !s,
                        children: f.NW.string(f.t.fjHWen)
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: f.NW.string(f.t.J1YOV1)
                    }),
                    _ &&
                        (0, r.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-muted',
                            children: f.NW.format(f.t.R8jY9v, {
                                accessLink: (e, t) =>
                                    (0, r.jsx)(
                                        c.eee,
                                        {
                                            onClick: v,
                                            children: e
                                        },
                                        t
                                    )
                            })
                        })
                ]
            }),
            (0, r.jsx)('div', {
                className: a()(h.column, { [h.profileViewDisabled]: x }),
                children: (0, r.jsx)(m.Z, {
                    guildId: b,
                    name: n.name
                })
            })
        ]
    });
}

n.d(t, { Z: () => h });
var r = n(200651),
    i = n(192379),
    s = n(580685),
    a = n(442837),
    l = n(481060),
    o = n(314852),
    c = n(405222),
    d = n(323220),
    u = n(434404),
    m = n(981631),
    p = n(388032),
    g = n(985775);
function h(e) {
    var t;
    let { profile: n } = e,
        h = n.id,
        f = s.Y.VISIBLE.has(n.visibility),
        b = (0, a.e7)(
            [o.Z],
            () => {
                var e;
                return (null === (e = o.Z.getProfile(h)) || void 0 === e ? void 0 : e.visibility) === c.k.PUBLIC_WITH_RECRUITMENT;
            },
            [h]
        ),
        x = i.useCallback(() => {
            f ? u.Z.updateGuildProfile(h, { visibility: c.k.RESTRICTED }) : u.Z.updateGuildProfile(h, { visibility: b ? c.k.PUBLIC_WITH_RECRUITMENT : c.k.PUBLIC });
        }, [h, b, f]),
        j = i.useCallback(() => {
            u.Z.setSection(m.pNK.ACCESS, m.KsC.ACCESS_DISCOVERABLE);
        }, []),
        N = null === (t = n.features) || void 0 === t ? void 0 : t.includes(m.oNc.DISCOVERABLE);
    return (0, r.jsxs)(l.hjN, {
        className: g.twoColumnContainer,
        children: [
            (0, r.jsxs)('div', {
                className: g.column,
                children: [
                    (0, r.jsx)(l.j7V, {
                        onChange: x,
                        value: !f,
                        hideBorder: !0,
                        disabled: N,
                        children: p.NW.string(p.t.fjHWen)
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: p.NW.string(p.t.J1YOV1)
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: p.NW.string(p.t.YtCViY)
                    }),
                    N &&
                        (0, r.jsx)(l.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-muted',
                            children: p.NW.format(p.t.R8jY9v, {
                                accessLink: (e, t) =>
                                    (0, r.jsx)(
                                        l.eee,
                                        {
                                            onClick: j,
                                            children: e
                                        },
                                        t
                                    )
                            })
                        })
                ]
            }),
            (0, r.jsx)('div', {
                className: g.column,
                children: (0, r.jsx)(d.Z, {
                    guildId: h,
                    name: n.name
                })
            })
        ]
    });
}

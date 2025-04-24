n.d(t, { Z: () => b });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(580685),
    o = n(442837),
    c = n(481060),
    u = n(314852),
    d = n(330705),
    m = n(323220),
    g = n(434404),
    p = n(436879),
    h = n(981631),
    f = n(388032),
    x = n(951767);
function b(e) {
    var t;
    let { profile: n, canManageGuild: l } = e,
        b = n.id,
        j = a.Y.VISIBLE.has(n.visibility),
        _ = (0, o.e7)(
            [u.Z],
            () => {
                var e;
                return (null == (e = u.Z.getProfile(b)) ? void 0 : e.visibility) === d.k.PUBLIC_WITH_RECRUITMENT;
            },
            [b]
        ),
        v = i.useRef(null);
    (0, p.Z)(v, h.KsC.PROFILE_VISIBILITY);
    let O = i.useCallback(() => {
            j ? g.Z.updateGuildProfile(b, { visibility: d.k.RESTRICTED }) : g.Z.updateGuildProfile(b, { visibility: _ ? d.k.PUBLIC_WITH_RECRUITMENT : d.k.PUBLIC });
        }, [b, _, j]),
        C = i.useCallback(() => {
            g.Z.setSection(h.pNK.ACCESS, h.KsC.ACCESS_DISCOVERABLE);
        }, []),
        y = null == (t = n.features) ? void 0 : t.includes(h.oNc.DISCOVERABLE);
    return (0, r.jsxs)(c.hjN, {
        className: x.twoColumnContainer,
        ref: v,
        children: [
            (0, r.jsxs)('div', {
                className: x.column,
                children: [
                    (0, r.jsx)(c.j7V, {
                        onChange: O,
                        value: !j,
                        hideBorder: !0,
                        disabled: y || !l,
                        children: f.intl.string(f.t.fjHWen)
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: f.intl.string(f.t.J1YOV1)
                    }),
                    y &&
                        (0, r.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-muted',
                            children: f.intl.format(f.t.R8jY9v, {
                                accessLink: (e, t) =>
                                    (0, r.jsx)(
                                        c.eee,
                                        {
                                            onClick: C,
                                            children: e
                                        },
                                        t
                                    )
                            })
                        })
                ]
            }),
            (0, r.jsx)('div', {
                className: s()(x.column, { [x.profileViewDisabled]: j }),
                children: (0, r.jsx)(m.Z, {
                    guildId: b,
                    name: null
                })
            })
        ]
    });
}

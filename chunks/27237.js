(t.d(n, { ZP: () => C }), t(388685));
var r = t(255367),
    i = t(73800),
    o = t(120356),
    a = t.n(o),
    s = t(793030),
    l = t(481060),
    c = t(808189),
    d = t(477415),
    u = t(690786),
    p = t(838968),
    m = t(262212),
    _ = t(279604),
    f = t(981631),
    x = t(93841),
    b = t(388032),
    v = t(568413),
    g = t(117172);
function h(e) {
    let n,
        { active: t, nextActive: i, position: o } = e;
    return (
        (n = t && !1 !== i ? 'full' : t && !1 === i ? 'half' : 'none'),
        (0, r.jsxs)('div', {
            className: v.progressContainer,
            children: [
                (0, r.jsx)('div', { className: a()(v.progress, v[o], v[n]) }),
                (0, r.jsx)('div', {
                    className: a()(v.boostContainer, { [v.boostContainerActive]: t }),
                    children: (0, r.jsx)(l.$Eu, {
                        size: 'sm',
                        color: 'white'
                    })
                })
            ]
        })
    );
}
function j(e) {
    let { index: n } = e,
        t = i.useMemo(() => {
            let e = c.C[n];
            if (null == e) return [];
            let t = e.tier === f.Eu4.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return null == t
                ? void 0
                : t.map((e, t) =>
                      (0, r.jsxs)(
                          'div',
                          {
                              className: v.perkRow,
                              children: [
                                  (0, r.jsx)(e.icon, {
                                      color: l.TVs.colors.TEXT_MUTED,
                                      size: 'sm'
                                  }),
                                  (0, r.jsx)(s.xv, {
                                      className: v.perkText,
                                      color: 'text-muted',
                                      variant: 'text-sm/medium',
                                      children: e.getCopy()
                                  })
                              ]
                          },
                          'perk-'.concat(n, '-').concat(t)
                      )
                  );
        }, [n]);
    return (0, r.jsxs)('div', {
        className: v.perkRowContainer,
        children: [
            t,
            (0, r.jsx)('div', {
                className: v.perkRow,
                children: (0, r.jsx)(s.xv, {
                    color: 'text-muted',
                    variant: 'text-sm/medium',
                    children: b.intl.string(x.default.nIj3LS)
                })
            })
        ]
    });
}
function C(e) {
    let n,
        { guildId: t, index: o, powerup: a, nextPowerup: l } = e,
        c = (0, d.Z)(t, a),
        f = (0, d.Z)(t, l),
        x = null != (0, u.Z)(t, a) || c,
        b = null != (0, u.Z)(t, l) || f,
        [C, E] = i.useState(void 0);
    return (
        (0, _.KT)(C),
        (n = 0 === o ? 'start' : null == l ? 'end' : 'middle'),
        (0, r.jsxs)(p.Z, {
            guildId: t,
            powerup: a,
            className: v.card,
            children: [
                (0, r.jsx)(h, {
                    position: n,
                    active: x,
                    nextActive: null != l ? b : void 0
                }),
                (0, r.jsxs)('div', {
                    className: g.contentContainer,
                    children: [
                        (0, r.jsx)(s.X6, {
                            variant: 'heading-md/bold',
                            children: a.title
                        }),
                        (0, r.jsx)(j, { index: o }),
                        !c &&
                            (0, r.jsx)(p.u, {
                                className: v.footer,
                                guildId: t,
                                powerup: a
                            })
                    ]
                }),
                !c &&
                    (0, r.jsx)('div', {
                        className: g.buttonContainer,
                        children: (0, r.jsx)(m.ZP, {
                            guildId: t,
                            powerup: a,
                            onError: E
                        })
                    })
            ]
        })
    );
}

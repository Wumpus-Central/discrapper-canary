(t.d(n, { ZP: () => E }), t(388685));
var r = t(255367),
    i = t(73800),
    o = t(120356),
    a = t.n(o),
    s = t(793030),
    l = t(481060),
    c = t(808189),
    d = t(477415),
    u = t(690786),
    m = t(838968),
    p = t(262212),
    _ = t(279604),
    f = t(279475),
    x = t(981631),
    b = t(93841),
    g = t(388032),
    v = t(568413),
    h = t(117172);
function j(e) {
    let n,
        { active: t, nextActive: i, position: o } = e;
    return (
        (n = t && !1 !== i ? 'full' : t && !1 === i ? 'half' : 'none'),
        (0, r.jsxs)('div', {
            className: v.progressContainer,
            children: [
                (0, r.jsx)('div', { className: a()(v.progress, v[o], v[n]) }),
                (0, r.jsx)('div', {
                    className: a()(v.boostContainer, h.boostProgressBackground, {
                        [v.boostContainerActive]: t,
                        [h.active]: t
                    }),
                    children: (0, r.jsx)(l.$Eu, {
                        size: 'sm',
                        color: 'white'
                    })
                })
            ]
        })
    );
}
function C(e) {
    let { isActive: n, index: t } = e,
        o = (0, f.d)(n),
        a = (0, f.u)(n),
        l = i.useMemo(() => {
            let e = c.C[t];
            if (null == e) return [];
            let n = e.tier === x.Eu4.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return null == n
                ? void 0
                : n.map((e, n) =>
                      (0, r.jsxs)(
                          'div',
                          {
                              className: v.perkRow,
                              children: [
                                  (0, r.jsx)(e.icon, {
                                      color: a,
                                      size: 'sm'
                                  }),
                                  (0, r.jsx)(s.xv, {
                                      className: v.perkText,
                                      color: o,
                                      variant: 'text-sm/medium',
                                      children: e.getCopy()
                                  })
                              ]
                          },
                          'perk-'.concat(t, '-').concat(n)
                      )
                  );
        }, [t, a, o]);
    return (0, r.jsxs)('div', {
        className: v.perkRowContainer,
        children: [
            l,
            (0, r.jsx)('div', {
                className: v.perkRow,
                children: (0, r.jsx)(s.xv, {
                    color: o,
                    variant: 'text-sm/medium',
                    children: g.intl.string(b.default.nIj3LS)
                })
            })
        ]
    });
}
function E(e) {
    let n,
        { guildId: t, index: o, powerup: a, nextPowerup: l } = e,
        c = (0, d.Z)(t, a),
        x = (0, d.Z)(t, l),
        b = null != (0, u.Z)(t, a) || c,
        g = null != (0, u.Z)(t, l) || x,
        [E, N] = i.useState(void 0);
    ((0, _.KT)(E), (n = 0 === o ? 'start' : null == l ? 'end' : 'middle'));
    let Z = (0, f.d)(b);
    return (0, r.jsxs)(m.Z, {
        guildId: t,
        powerup: a,
        className: v.card,
        children: [
            (0, r.jsx)(j, {
                position: n,
                active: b,
                nextActive: null != l ? g : void 0
            }),
            (0, r.jsxs)('div', {
                className: h.contentContainer,
                children: [
                    (0, r.jsx)(s.X6, {
                        variant: 'heading-md/bold',
                        color: Z,
                        children: a.title
                    }),
                    (0, r.jsx)(C, {
                        isActive: b,
                        index: o
                    }),
                    !c &&
                        (0, r.jsx)(m.u, {
                            className: v.footer,
                            guildId: t,
                            powerup: a
                        })
                ]
            }),
            !c &&
                (0, r.jsx)('div', {
                    className: h.buttonContainer,
                    children: (0, r.jsx)(p.ZP, {
                        guildId: t,
                        powerup: a,
                        onError: N
                    })
                })
        ]
    });
}

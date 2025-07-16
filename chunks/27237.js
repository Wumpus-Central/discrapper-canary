(n.d(t, { ZP: () => C }), n(388685));
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(793030),
    l = n(481060),
    c = n(808189),
    d = n(973772),
    u = n(838968),
    p = n(262212),
    m = n(279604),
    _ = n(279475),
    f = n(535396),
    x = n(981631),
    b = n(93841),
    v = n(388032),
    g = n(568413),
    h = n(117172);
function E(e) {
    let t,
        { active: n, nextActive: i, position: o } = e;
    return (
        (t = n && !1 !== i ? 'full' : n && !1 === i ? 'half' : 'none'),
        (0, r.jsxs)('div', {
            className: g.progressContainer,
            children: [
                (0, r.jsx)('div', { className: a()(g.progress, g[o], g[t]) }),
                (0, r.jsx)('div', {
                    className: a()(g.boostContainer, h.boostProgressBackground, {
                        [g.boostContainerActive]: n,
                        [h.active]: n
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
function j(e) {
    let { isActive: t, index: n } = e,
        o = (0, _.d)(t),
        a = (0, _.u)(t),
        l = i.useMemo(() => {
            let e = c.C[n];
            if (null == e) return [];
            let t = e.tier === x.Eu4.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return null == t
                ? void 0
                : t.map((e, t) =>
                      (0, r.jsxs)(
                          'div',
                          {
                              className: g.perkRow,
                              children: [
                                  (0, r.jsx)(e.icon, {
                                      color: a,
                                      size: 'sm'
                                  }),
                                  (0, r.jsx)(s.xv, {
                                      className: g.perkText,
                                      color: o,
                                      variant: 'text-sm/medium',
                                      children: e.getCopy()
                                  })
                              ]
                          },
                          'perk-'.concat(n, '-').concat(t)
                      )
                  );
        }, [n, a, o]);
    return (0, r.jsxs)('div', {
        className: g.perkRowContainer,
        children: [
            l,
            (0, r.jsx)('div', {
                className: g.perkRow,
                children: (0, r.jsx)(s.xv, {
                    color: o,
                    variant: 'text-sm/medium',
                    children: v.intl.string(b.default.nIj3LS)
                })
            })
        ]
    });
}
function C(e) {
    let { guildId: t, index: n, powerup: o, nextPowerup: a } = e,
        l = (0, d.Z)(t, o),
        c = (0, d.Z)(t, a),
        x = l.type !== f.A3.INACTIVE,
        b = c.type !== f.A3.INACTIVE,
        v = l.type === f.A3.TIER_OVERRIDE_ACTIVATED,
        [C, N] = i.useState(void 0);
    (0, m.KT)(C);
    let I = (0, _.d)(x);
    return (0, r.jsxs)(u.Z, {
        guildId: t,
        powerup: o,
        className: g.card,
        children: [
            (0, r.jsx)(E, {
                position: 0 === n ? 'start' : null == a ? 'end' : 'middle',
                active: x,
                nextActive: null != a ? b : void 0
            }),
            (0, r.jsxs)('div', {
                className: h.contentContainer,
                children: [
                    (0, r.jsx)(s.X6, {
                        variant: 'heading-md/bold',
                        color: I,
                        children: o.title
                    }),
                    (0, r.jsx)(j, {
                        isActive: x,
                        index: n
                    }),
                    !v &&
                        (0, r.jsx)(u.u, {
                            className: g.footer,
                            guildId: t,
                            powerup: o
                        })
                ]
            }),
            !v &&
                (0, r.jsx)('div', {
                    className: h.buttonContainer,
                    children: (0, r.jsx)(p.ZP, {
                        guildId: t,
                        powerup: o,
                        onError: N
                    })
                })
        ]
    });
}

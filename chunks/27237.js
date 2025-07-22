(n.d(t, { ZP: () => C }), n(388685));
var r = n(255367),
    o = n(73800),
    i = n(120356),
    s = n.n(i),
    l = n(793030),
    a = n(481060),
    c = n(808189),
    u = n(973772),
    d = n(838968),
    p = n(262212),
    m = n(279604),
    f = n(279475),
    _ = n(535396),
    x = n(981631),
    v = n(93841),
    g = n(388032),
    b = n(568413),
    j = n(117172);
function E(e) {
    let t,
        { active: n, nextActive: o, position: i } = e;
    return (
        (t = n && !1 !== o ? 'full' : n && !1 === o ? 'half' : 'none'),
        (0, r.jsxs)('div', {
            className: b.progressContainer,
            children: [
                (0, r.jsx)('div', { className: s()(b.progress, b[i], b[t]) }),
                (0, r.jsx)('div', {
                    className: s()(b.boostContainer, j.boostProgressBackground, {
                        [b.boostContainerActive]: n,
                        [j.active]: n
                    }),
                    children: (0, r.jsx)(a.$Eu, {
                        size: 'sm',
                        color: 'white'
                    })
                })
            ]
        })
    );
}
function h(e) {
    let { isActive: t, index: n } = e,
        i = (0, f.d)(t),
        s = (0, f.u)(t),
        a = o.useMemo(() => {
            let e = c.C[n];
            if (null == e) return [];
            let t = e.tier === x.Eu4.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return null == t
                ? void 0
                : t.map((e, t) =>
                      (0, r.jsxs)(
                          'div',
                          {
                              className: b.perkRow,
                              children: [
                                  (0, r.jsx)(e.icon, {
                                      color: s,
                                      size: 'sm'
                                  }),
                                  (0, r.jsx)(l.xv, {
                                      className: b.perkText,
                                      color: i,
                                      variant: 'text-sm/medium',
                                      children: e.getCopy()
                                  })
                              ]
                          },
                          'perk-'.concat(n, '-').concat(t)
                      )
                  );
        }, [n, s, i]);
    return (0, r.jsxs)('div', {
        className: b.perkRowContainer,
        children: [
            a,
            (0, r.jsx)('div', {
                className: b.perkRow,
                children: (0, r.jsx)(l.xv, {
                    color: i,
                    variant: 'text-sm/medium',
                    children: g.intl.string(v.default.nIj3LS)
                })
            })
        ]
    });
}
function C(e) {
    let { guildId: t, index: n, powerup: i, nextPowerup: s } = e,
        a = (0, u.Z)(t, i),
        c = (0, u.Z)(t, s),
        x = a.type !== _.A3.INACTIVE,
        v = c.type !== _.A3.INACTIVE,
        g = a.type === _.A3.TIER_OVERRIDE_ACTIVATED,
        [C, I] = o.useState(void 0);
    (0, m.KT)(C);
    let N = (0, f.d)(x);
    return (0, r.jsxs)(d.Z, {
        guildId: t,
        powerup: i,
        className: b.card,
        children: [
            (0, r.jsx)(E, {
                position: 0 === n ? 'start' : null == s ? 'end' : 'middle',
                active: x,
                nextActive: null != s ? v : void 0
            }),
            (0, r.jsxs)('div', {
                className: j.contentContainer,
                children: [
                    (0, r.jsx)(l.X6, {
                        variant: 'heading-md/bold',
                        color: N,
                        children: i.title
                    }),
                    (0, r.jsx)(h, {
                        isActive: x,
                        index: n
                    }),
                    !g &&
                        (0, r.jsx)(d.u, {
                            className: b.footer,
                            guildId: t,
                            powerup: i
                        })
                ]
            }),
            !g &&
                (0, r.jsx)('div', {
                    className: j.buttonContainer,
                    children: (0, r.jsx)(p.ZP, {
                        guildId: t,
                        powerup: i,
                        onError: I
                    })
                })
        ]
    });
}

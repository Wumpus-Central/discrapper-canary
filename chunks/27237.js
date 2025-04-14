t.d(n, { ZP: () => b }), t(388685);
var r = t(200651),
    o = t(192379),
    s = t(120356),
    i = t.n(s),
    a = t(793030),
    l = t(481060),
    c = t(808189),
    d = t(690786),
    u = t(838968),
    p = t(262212),
    m = t(279604),
    x = t(981631),
    _ = t(680278),
    v = t(388032),
    f = t(568413),
    g = t(117172);
function h(e) {
    let n,
        { active: t, nextActive: o, position: s } = e;
    return (
        (n = t && !1 !== o ? 'full' : t && !1 === o ? 'half' : 'none'),
        (0, r.jsxs)('div', {
            className: f.progressContainer,
            children: [
                (0, r.jsx)('div', { className: i()(f.progress, f[s], f[n]) }),
                (0, r.jsx)('div', {
                    className: i()(f.boostContainer, { [f.boostContainerActive]: t }),
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
        t = o.useMemo(() => {
            let e = c.C[n];
            if (null == e) return [];
            let t = e.tier === x.Eu4.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return null == t
                ? void 0
                : t.map((e, t) =>
                      (0, r.jsxs)(
                          'div',
                          {
                              className: f.perkRow,
                              children: [
                                  (0, r.jsx)(e.icon, {
                                      color: l.TVs.colors.TEXT_MUTED,
                                      size: 'sm'
                                  }),
                                  (0, r.jsx)(a.xv, {
                                      className: f.perkText,
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
        className: f.perkRowContainer,
        children: [
            t,
            (0, r.jsx)('div', {
                className: f.perkRow,
                children: (0, r.jsx)(a.xv, {
                    color: 'text-muted',
                    variant: 'text-sm/medium',
                    children: v.NW.string(_.Z.nIj3LS)
                })
            })
        ]
    });
}
function b(e) {
    let n,
        { guildId: t, index: s, powerup: i, nextPowerup: l } = e,
        c = null != (0, d.Z)(t, i),
        x = null != (0, d.Z)(t, l),
        [_, v] = o.useState(void 0);
    return (
        (0, m.KT)(_),
        (n = 0 === s ? 'start' : null == l ? 'end' : 'middle'),
        (0, r.jsxs)(u.Z, {
            guildId: t,
            powerup: i,
            className: f.card,
            children: [
                (0, r.jsx)(h, {
                    position: n,
                    active: c,
                    nextActive: x
                }),
                (0, r.jsxs)('div', {
                    className: g.contentContainer,
                    children: [
                        (0, r.jsx)(a.X6, {
                            variant: 'heading-md/bold',
                            children: i.title
                        }),
                        (0, r.jsx)(j, { index: s }),
                        (0, r.jsx)(u.u, {
                            className: f.footer,
                            guildId: t,
                            powerup: i
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: g.buttonContainer,
                    children: (0, r.jsx)(p.ZP, {
                        guildId: t,
                        powerup: i,
                        onError: v
                    })
                })
            ]
        })
    );
}

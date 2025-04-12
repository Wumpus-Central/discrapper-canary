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
    m = t(262212),
    p = t(279604),
    x = t(981631),
    _ = t(680278),
    f = t(388032),
    v = t(568413),
    g = t(117172);
function h(e) {
    let n,
        { active: t, nextActive: o, position: s } = e;
    return (
        (n = t && !1 !== o ? 'full' : t && !1 === o ? 'half' : 'none'),
        (0, r.jsxs)('div', {
            className: v.progressContainer,
            children: [
                (0, r.jsx)('div', { className: i()(v.progress, v[s], v[n]) }),
                (0, r.jsx)('div', {
                    className: i()(v.boostContainer, { [v.boostContainerActive]: t }),
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
                              className: v.perkRow,
                              children: [
                                  (0, r.jsx)(e.icon, {
                                      color: l.TVs.colors.TEXT_MUTED,
                                      size: 'sm'
                                  }),
                                  (0, r.jsx)(a.xv, {
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
                children: (0, r.jsx)(a.xv, {
                    color: 'text-muted',
                    variant: 'text-sm/medium',
                    children: f.NW.string(_.Z.nIj3LS)
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
        [_, f] = o.useState(void 0);
    return (
        (0, p.KT)(_),
        (n = 0 === s ? 'start' : null == l ? 'end' : 'middle'),
        (0, r.jsxs)(u.Z, {
            guildId: t,
            powerup: i,
            className: v.card,
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
                            className: v.footer,
                            guildId: t,
                            powerup: i
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: g.buttonContainer,
                    children: (0, r.jsx)(m.ZP, {
                        guildId: t,
                        powerup: i,
                        onError: f
                    })
                })
            ]
        })
    );
}

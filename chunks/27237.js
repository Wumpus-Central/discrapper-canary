t.d(n, { ZP: () => C }), t(388685);
var r = t(200651),
    i = t(192379),
    o = t(120356),
    s = t.n(o),
    a = t(793030),
    l = t(481060),
    c = t(808189),
    u = t(477415),
    d = t(690786),
    p = t(838968),
    m = t(262212),
    _ = t(279604),
    x = t(981631),
    f = t(680278),
    v = t(388032),
    g = t(568413),
    j = t(117172);
function b(e) {
    let n,
        { active: t, nextActive: i, position: o } = e;
    return (
        (n = t && !1 !== i ? 'full' : t && !1 === i ? 'half' : 'none'),
        (0, r.jsxs)('div', {
            className: g.progressContainer,
            children: [
                (0, r.jsx)('div', { className: s()(g.progress, g[o], g[n]) }),
                (0, r.jsx)('div', {
                    className: s()(g.boostContainer, { [g.boostContainerActive]: t }),
                    children: (0, r.jsx)(l.$Eu, {
                        size: 'sm',
                        color: 'white'
                    })
                })
            ]
        })
    );
}
function h(e) {
    let { index: n } = e,
        t = i.useMemo(() => {
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
                                      color: l.TVs.colors.TEXT_MUTED,
                                      size: 'sm'
                                  }),
                                  (0, r.jsx)(a.xv, {
                                      className: g.perkText,
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
        className: g.perkRowContainer,
        children: [
            t,
            (0, r.jsx)('div', {
                className: g.perkRow,
                children: (0, r.jsx)(a.xv, {
                    color: 'text-muted',
                    variant: 'text-sm/medium',
                    children: v.intl.string(f.default.nIj3LS)
                })
            })
        ]
    });
}
function C(e) {
    let n,
        { guildId: t, index: o, powerup: s, nextPowerup: l } = e,
        c = (0, u.Z)(t, s),
        x = (0, u.Z)(t, l),
        f = null != (0, d.Z)(t, s) || c,
        v = null != (0, d.Z)(t, l) || x,
        [C, N] = i.useState(void 0);
    return (
        (0, _.KT)(C),
        (n = 0 === o ? 'start' : null == l ? 'end' : 'middle'),
        (0, r.jsxs)(p.Z, {
            guildId: t,
            powerup: s,
            className: g.card,
            children: [
                (0, r.jsx)(b, {
                    position: n,
                    active: f,
                    nextActive: null != l ? v : void 0
                }),
                (0, r.jsxs)('div', {
                    className: j.contentContainer,
                    children: [
                        (0, r.jsx)(a.X6, {
                            variant: 'heading-md/bold',
                            children: s.title
                        }),
                        (0, r.jsx)(h, { index: o }),
                        !c &&
                            (0, r.jsx)(p.u, {
                                className: g.footer,
                                guildId: t,
                                powerup: s
                            })
                    ]
                }),
                !c &&
                    (0, r.jsx)('div', {
                        className: j.buttonContainer,
                        children: (0, r.jsx)(m.ZP, {
                            guildId: t,
                            powerup: s,
                            onError: N
                        })
                    })
            ]
        })
    );
}

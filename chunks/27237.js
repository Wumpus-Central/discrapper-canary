t.d(n, { ZP: () => N }), t(388685);
var r = t(200651),
    o = t(192379),
    i = t(120356),
    s = t.n(i),
    a = t(793030),
    l = t(481060),
    c = t(808189),
    d = t(477415),
    u = t(690786),
    p = t(838968),
    m = t(262212),
    x = t(279604),
    _ = t(981631),
    v = t(680278),
    f = t(388032),
    g = t(568413),
    j = t(117172);
function h(e) {
    let n,
        { active: t, nextActive: o, position: i } = e;
    return (
        (n = t && !1 !== o ? 'full' : t && !1 === o ? 'half' : 'none'),
        (0, r.jsxs)('div', {
            className: g.progressContainer,
            children: [
                (0, r.jsx)('div', { className: s()(g.progress, g[i], g[n]) }),
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
function b(e) {
    let { index: n } = e,
        t = o.useMemo(() => {
            let e = c.C[n];
            if (null == e) return [];
            let t = e.tier === _.Eu4.TIER_3 ? e.perks.slice(0, -1) : e.perks;
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
                    children: f.NW.string(v.Z.nIj3LS)
                })
            })
        ]
    });
}
function N(e) {
    let n,
        { guildId: t, index: i, powerup: s, nextPowerup: l } = e,
        c = (0, d.Z)(t, s),
        _ = (0, d.Z)(t, l),
        v = null != (0, u.Z)(t, s) || c,
        f = null != (0, u.Z)(t, l) || _,
        [N, Z] = o.useState(void 0);
    return (
        (0, x.KT)(N),
        (n = 0 === i ? 'start' : null == l ? 'end' : 'middle'),
        (0, r.jsxs)(p.Z, {
            guildId: t,
            powerup: s,
            className: g.card,
            children: [
                (0, r.jsx)(h, {
                    position: n,
                    active: v,
                    nextActive: null != l ? f : void 0
                }),
                (0, r.jsxs)('div', {
                    className: j.contentContainer,
                    children: [
                        (0, r.jsx)(a.X6, {
                            variant: 'heading-md/bold',
                            children: s.title
                        }),
                        (0, r.jsx)(b, { index: i }),
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
                            onError: Z
                        })
                    })
            ]
        })
    );
}

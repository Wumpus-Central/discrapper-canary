t.d(n, { ZP: () => Z }), t(47120);
var r = t(200651),
    o = t(192379),
    i = t(120356),
    s = t.n(i),
    a = t(793030),
    l = t(481060),
    c = t(808189),
    d = t(413335),
    u = t(690786),
    p = t(838968),
    m = t(262212),
    x = t(279604),
    _ = t(981631),
    v = t(680278),
    f = t(388032),
    b = t(568413),
    g = t(117172);
function j(e) {
    let n,
        { active: t, nextActive: o, position: i } = e;
    return (
        (n = t && !1 !== o ? 'full' : t && !1 === o ? 'half' : 'none'),
        (0, r.jsxs)('div', {
            className: b.progressContainer,
            children: [
                (0, r.jsx)('div', { className: s()(b.progress, b[i], b[n]) }),
                (0, r.jsx)('div', {
                    className: s()(b.boostContainer, { [b.boostContainerActive]: t }),
                    children: (0, r.jsx)(d.Z, {
                        size: 'sm',
                        className: b.boost,
                        fill: 'white'
                    })
                })
            ]
        })
    );
}
function h(e) {
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
                              className: b.perkRow,
                              children: [
                                  (0, r.jsx)(e.icon, {
                                      color: l.TVs.colors.TEXT_MUTED,
                                      size: 'sm'
                                  }),
                                  (0, r.jsx)(a.xv, {
                                      className: b.perkText,
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
        className: b.perkRowContainer,
        children: [
            t,
            (0, r.jsx)('div', {
                className: b.perkRow,
                children: (0, r.jsx)(a.xv, {
                    color: 'text-muted',
                    variant: 'text-sm/medium',
                    children: f.NW.string(v.Z.nIj3LS)
                })
            })
        ]
    });
}
function Z(e) {
    let n,
        { guildId: t, index: i, powerup: s, nextPowerup: l } = e,
        c = null != (0, u.Z)(t, s),
        d = null != (0, u.Z)(t, l),
        [_, v] = o.useState(void 0);
    return (
        (0, x.KT)(_),
        (n = 0 === i ? 'start' : null == l ? 'end' : 'middle'),
        (0, r.jsxs)(p.Z, {
            guildId: t,
            powerup: s,
            className: b.card,
            children: [
                (0, r.jsx)(j, {
                    position: n,
                    active: c,
                    nextActive: d
                }),
                (0, r.jsxs)('div', {
                    className: g.contentContainer,
                    children: [
                        (0, r.jsx)(a.X6, {
                            variant: 'heading-md/bold',
                            children: s.title
                        }),
                        (0, r.jsx)(h, { index: i }),
                        (0, r.jsx)(p.u, {
                            className: b.footer,
                            guildId: t,
                            powerup: s
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: g.buttonContainer,
                    children: (0, r.jsx)(m.ZP, {
                        guildId: t,
                        powerup: s,
                        onError: v
                    })
                })
            ]
        })
    );
}

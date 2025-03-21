t.d(n, { ZP: () => f }), t(47120);
var i = t(200651),
    r = t(192379),
    o = t(120356),
    s = t.n(o),
    a = t(793030),
    l = t(481060),
    c = t(808189),
    d = t(413335),
    u = t(690786),
    m = t(838968),
    x = t(969867),
    v = t(279604),
    p = t(981631),
    _ = t(367123),
    b = t(388032),
    j = t(610881),
    g = t(709435);
function h(e) {
    let n,
        { active: t, nextActive: r, position: o } = e;
    return (
        (n = t && !1 !== r ? 'full' : t && !1 === r ? 'half' : 'none'),
        (0, i.jsxs)('div', {
            className: j.progressContainer,
            children: [
                (0, i.jsx)('div', { className: s()(j.progress, j[o], j[n]) }),
                (0, i.jsx)('div', {
                    className: s()(j.boostContainer, { [j.boostContainerActive]: t }),
                    children: (0, i.jsx)(d.Z, {
                        size: 'sm',
                        className: j.boost,
                        fill: 'white'
                    })
                })
            ]
        })
    );
}
function Z(e) {
    let { index: n } = e,
        t = r.useMemo(() => {
            let e = c.C[n];
            if (null == e) return [];
            let t = e.tier === p.Eu4.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return null == t
                ? void 0
                : t.map((e, t) =>
                      (0, i.jsxs)(
                          'div',
                          {
                              className: j.perkRow,
                              children: [
                                  (0, i.jsx)(e.icon, {
                                      color: l.TVs.colors.TEXT_MUTED,
                                      size: 'sm'
                                  }),
                                  (0, i.jsx)(a.xv, {
                                      className: j.perkText,
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
    return (0, i.jsxs)('div', {
        className: j.perkRowContainer,
        children: [
            t,
            (0, i.jsx)('div', {
                className: j.perkRow,
                children: (0, i.jsx)(a.xv, {
                    color: 'text-muted',
                    variant: 'text-sm/medium',
                    children: b.NW.string(_.Z.nIj3LS)
                })
            })
        ]
    });
}
function f(e) {
    let n,
        { guildId: t, index: o, powerup: s, nextPowerup: l } = e,
        c = null != (0, u.Z)(t, s),
        d = null != (0, u.Z)(t, l),
        [p, _] = r.useState(void 0);
    return (
        (0, v.KT)(p),
        (n = 0 === o ? 'start' : null == l ? 'end' : 'middle'),
        (0, i.jsxs)(m.Z, {
            guildId: t,
            powerup: s,
            className: j.card,
            children: [
                (0, i.jsx)(h, {
                    position: n,
                    active: c,
                    nextActive: d
                }),
                (0, i.jsxs)('div', {
                    className: g.contentContainer,
                    children: [
                        (0, i.jsx)(a.X6, {
                            variant: 'heading-md/bold',
                            children: s.title
                        }),
                        (0, i.jsx)(Z, { index: o }),
                        (0, i.jsx)(m.Y, {
                            className: j.footer,
                            guildId: t,
                            powerup: s
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: g.buttonContainer,
                    children: (0, i.jsx)(x.Z, {
                        guildId: t,
                        powerup: s,
                        onError: _
                    })
                })
            ]
        })
    );
}

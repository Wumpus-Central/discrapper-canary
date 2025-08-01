(n.d(t, { ZP: () => I }), n(388685));
var r = n(255367),
    o = n(73800),
    i = n(120356),
    l = n.n(i),
    s = n(793030),
    a = n(481060),
    c = n(808189),
    u = n(973772),
    d = n(838968),
    p = n(262212),
    m = n(226278),
    f = n(279604),
    _ = n(279475),
    x = n(535396),
    g = n(981631),
    v = n(93841),
    b = n(388032),
    j = n(246499),
    h = n(568413);
function E(e) {
    let t,
        { active: n, nextActive: o, position: i } = e;
    return (
        (t = n && !1 !== o ? 'full' : n && !1 === o ? 'half' : 'none'),
        (0, r.jsxs)('div', {
            className: h.progressContainer,
            children: [
                (0, r.jsx)('div', { className: l()(h.progress, h[i], h[t]) }),
                (0, r.jsx)('div', {
                    className: l()(h.boostContainer, j.boostProgressBackground, {
                        [h.boostContainerActive]: n,
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
function C(e) {
    let { isActive: t, index: n } = e,
        i = (0, _.d)(t),
        l = (0, _.u)(t),
        a = o.useMemo(() => {
            let e = c.C[n];
            if (null == e) return [];
            let t = e.tier === g.Eu4.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return null == t
                ? void 0
                : t.map((e, t) =>
                      (0, r.jsxs)(
                          'div',
                          {
                              className: h.perkRow,
                              children: [
                                  (0, r.jsx)(e.icon, {
                                      color: l,
                                      size: 'sm'
                                  }),
                                  (0, r.jsx)(s.xv, {
                                      className: h.perkText,
                                      color: i,
                                      variant: 'text-sm/medium',
                                      children: e.getCopy()
                                  })
                              ]
                          },
                          'perk-'.concat(n, '-').concat(t)
                      )
                  );
        }, [n, l, i]);
    return (0, r.jsxs)('div', {
        className: h.perkRowContainer,
        children: [
            a,
            (0, r.jsx)('div', {
                className: h.perkRow,
                children: (0, r.jsx)(s.xv, {
                    color: i,
                    variant: 'text-sm/medium',
                    children: b.intl.string(v.default.nIj3LS)
                })
            })
        ]
    });
}
function I(e) {
    let { guildId: t, index: n, powerup: i, nextPowerup: l } = e,
        s = (0, u.Z)(t, i),
        a = (0, u.Z)(t, l),
        c = s.type !== x.A3.INACTIVE,
        g = a.type !== x.A3.INACTIVE,
        v = s.type === x.A3.TIER_OVERRIDE_ACTIVATED,
        [b, j] = o.useState(void 0);
    (0, f.KT)(b);
    let I = (0, _.d)(c);
    return (0, r.jsxs)(m.Z, {
        guildId: t,
        powerup: i,
        className: h.card,
        children: [
            (0, r.jsx)(E, {
                position: 0 === n ? 'start' : null == l ? 'end' : 'middle',
                active: c,
                nextActive: null != l ? g : void 0
            }),
            (0, r.jsx)(d.Q9, {
                title: i.title,
                textColor: I,
                footer:
                    !v &&
                    (0, r.jsx)(m.g, {
                        className: h.footer,
                        guildId: t,
                        powerup: i
                    }),
                children: (0, r.jsx)(C, {
                    isActive: c,
                    index: n
                })
            }),
            !v &&
                (0, r.jsx)(d.N4, {
                    children: (0, r.jsx)(p.ZP, {
                        guildId: t,
                        powerup: i,
                        onError: j
                    })
                })
        ]
    });
}

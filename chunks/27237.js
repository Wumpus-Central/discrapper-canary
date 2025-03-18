t.d(n, { ZP: () => h }), t(47120);
var r = t(200651),
    i = t(192379),
    o = t(120356),
    s = t.n(o),
    a = t(793030),
    l = t(481060),
    c = t(808189),
    d = t(413335),
    u = t(690786),
    x = t(838968),
    m = t(969867),
    p = t(279604),
    v = t(610881),
    b = t(709435);
function _(e) {
    let n,
        { active: t, nextActive: i, position: o } = e;
    return (
        (n = t && !1 !== i ? 'full' : t && !1 === i ? 'half' : 'none'),
        (0, r.jsxs)('div', {
            className: v.progressContainer,
            children: [
                (0, r.jsx)('div', { className: s()(v.progress, v[o], v[n]) }),
                (0, r.jsx)('div', {
                    className: s()(v.boostContainer, { [v.boostContainerActive]: t }),
                    children: (0, r.jsx)(d.Z, {
                        size: 'sm',
                        className: v.boost,
                        fill: 'white'
                    })
                })
            ]
        })
    );
}
function j(e) {
    var n, t;
    let { index: i } = e;
    return (0, r.jsx)('div', {
        className: v.perkRowContainer,
        children:
            null === (t = c.C[i]) || void 0 === t
                ? void 0
                : null === (n = t.perks) || void 0 === n
                  ? void 0
                  : n.map((e, n) =>
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
                            n
                        )
                    )
    });
}
function h(e) {
    let n,
        { guildId: t, index: o, powerup: s, nextPowerup: l } = e,
        c = null != (0, u.Z)(t, s),
        d = null != (0, u.Z)(t, l),
        [h, g] = i.useState(void 0);
    return (
        (0, p.KT)(h),
        (n = 0 === o ? 'start' : null == l ? 'end' : 'middle'),
        (0, r.jsxs)(x.Z, {
            guildId: t,
            powerup: s,
            className: v.card,
            children: [
                (0, r.jsx)(_, {
                    position: n,
                    active: c,
                    nextActive: d
                }),
                (0, r.jsxs)('div', {
                    className: b.contentContainer,
                    children: [
                        (0, r.jsx)(a.X6, {
                            variant: 'heading-md/bold',
                            children: s.title
                        }),
                        (0, r.jsx)(j, { index: o }),
                        (0, r.jsx)(x.Y, {
                            className: v.footer,
                            guildId: t,
                            powerup: s
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: b.buttonContainer,
                    children: (0, r.jsx)(m.Z, {
                        guildId: t,
                        powerup: s,
                        onError: g
                    })
                })
            ]
        })
    );
}

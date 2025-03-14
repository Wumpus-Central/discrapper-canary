t.d(n, { ZP: () => h }), t(47120);
var r = t(200651),
    i = t(192379),
    o = t(120356),
    s = t.n(o),
    a = t(793030),
    l = t(481060),
    c = t(808189),
    d = t(413335),
    u = t(157353),
    x = t(838968),
    p = t(969867),
    v = t(279604),
    m = t(610881),
    b = t(709435);
function _(e) {
    let n,
        { active: t, nextActive: i, position: o } = e;
    return (
        (n = t && !1 !== i ? 'full' : t && !1 === i ? 'half' : 'none'),
        (0, r.jsxs)('div', {
            className: m.progressContainer,
            children: [
                (0, r.jsx)('div', { className: s()(m.progress, m[o], m[n]) }),
                (0, r.jsx)('div', {
                    className: s()(m.boostContainer, { [m.boostContainerActive]: t }),
                    children: (0, r.jsx)(d.Z, {
                        size: 'sm',
                        className: m.boost,
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
        className: m.perkRowContainer,
        children:
            null === (t = c.C[i]) || void 0 === t
                ? void 0
                : null === (n = t.perks) || void 0 === n
                  ? void 0
                  : n.map((e, n) =>
                        (0, r.jsxs)(
                            'div',
                            {
                                className: m.perkRow,
                                children: [
                                    (0, r.jsx)(e.icon, {
                                        color: l.TVs.colors.TEXT_MUTED,
                                        size: 'sm'
                                    }),
                                    (0, r.jsx)(a.xv, {
                                        className: m.perkText,
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
        { onShowMore: c } = (0, v.ZP)(t, s),
        d = (0, u.Z)(t, s),
        h = (0, u.Z)(t, l),
        [f, g] = i.useState(void 0);
    return (
        (0, v.KT)(f),
        (n = 0 === o ? 'start' : null == l ? 'end' : 'middle'),
        (0, r.jsxs)(x.Z, {
            label: s.title,
            onClick: c,
            active: d,
            className: m.card,
            children: [
                (0, r.jsx)(_, {
                    position: n,
                    active: d,
                    nextActive: h
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
                            className: m.footer,
                            guildId: t,
                            powerup: s
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: b.buttonContainer,
                    children: (0, r.jsx)(p.Z, {
                        guildId: t,
                        powerup: s,
                        onError: g
                    })
                })
            ]
        })
    );
}

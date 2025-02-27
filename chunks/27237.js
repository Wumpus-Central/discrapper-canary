t.d(n, {
    ZP: () => f,
    _R: () => j
}),
    t(47120);
var i = t(200651),
    r = t(192379),
    o = t(120356),
    a = t.n(o),
    s = t(793030),
    c = t(481060),
    l = t(808189),
    d = t(413335),
    u = t(838968),
    x = t(279604),
    v = t(730621),
    p = t(388032),
    b = t(610881),
    _ = t(709435);
function m(e) {
    let n,
        { active: t, nextActive: r, position: o } = e;
    return (
        (n = t && !1 !== r ? 'full' : t && !1 === r ? 'half' : 'none'),
        (0, i.jsxs)('div', {
            className: b.progressContainer,
            children: [
                (0, i.jsx)('div', { className: a()(b.progress, b[o], b[n]) }),
                (0, i.jsx)('div', {
                    className: a()(b.boostContainer, { [b.boostContainerActive]: t }),
                    children: (0, i.jsx)(d.Z, {
                        className: b.boost,
                        width: 16,
                        height: 16,
                        fill: 'white'
                    })
                })
            ]
        })
    );
}
function h(e) {
    var n, t;
    let { index: r } = e;
    return (0, i.jsx)('div', {
        className: b.perkRowContainer,
        children:
            null === (t = l.C[r]) || void 0 === t
                ? void 0
                : null === (n = t.perks) || void 0 === n
                  ? void 0
                  : n.map((e, n) =>
                        (0, i.jsxs)(
                            'div',
                            {
                                className: b.perkRow,
                                children: [
                                    (0, i.jsx)(e.icon, {
                                        color: c.TVs.colors.TEXT_MUTED,
                                        size: 'sm'
                                    }),
                                    (0, i.jsx)(s.xv, {
                                        className: b.perkText,
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
function j(e) {
    let { className: n, guildId: t, powerup: o, onError: s } = e,
        { onActivate: l, isLoading: u, error: _, onDeactivate: m } = (0, x.Z)(t, o);
    return (
        r.useEffect(() => {
            null == s || s(_);
        }, [_, s]),
        (0, i.jsxs)(c.zxk, {
            onClick: o.active ? m : l,
            fullWidth: !0,
            className: a()(b.button, n),
            innerClassName: b.buttonInner,
            color: o.active ? c.Ttl.PRIMARY : c.Ttl.BRAND,
            submitting: u,
            children: [
                p.NW.string(o.active ? v.Z.PYPdl5 : v.Z.AOQgkp),
                !o.active &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('span', {
                                className: b.dot,
                                children: '\u2022'
                            }),
                            (0, i.jsx)(d.Z, {
                                className: b.boost,
                                width: 16,
                                height: 16,
                                fill: 'white'
                            }),
                            ' ',
                            (0, i.jsx)('span', {
                                className: b.cost,
                                children: o.cost
                            })
                        ]
                    })
            ]
        })
    );
}
function f(e) {
    let n,
        { guildId: t, index: o, powerup: a, nextPowerup: c } = e,
        { onShowMore: l } = (0, x.Z)(t, a),
        [d, v] = r.useState(void 0);
    return (
        (0, x.K)(d),
        (n = 0 === o ? 'start' : null == c ? 'end' : 'middle'),
        (0, i.jsxs)(u.Z, {
            label: a.title,
            onClick: l,
            active: a.active,
            className: b.card,
            children: [
                (0, i.jsx)(m, {
                    position: n,
                    active: a.active,
                    nextActive: null == c ? void 0 : c.active
                }),
                (0, i.jsxs)('div', {
                    className: _.contentContainer,
                    children: [
                        (0, i.jsx)(s.X6, {
                            variant: 'heading-md/bold',
                            children: a.title
                        }),
                        (0, i.jsx)(h, { index: o }),
                        (0, i.jsx)(j, {
                            guildId: t,
                            powerup: a,
                            onError: v
                        })
                    ]
                })
            ]
        })
    );
}

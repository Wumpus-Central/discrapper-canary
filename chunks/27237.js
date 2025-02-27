t.d(n, {
    ZP: () => f,
    _R: () => j,
    gm: () => h
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
    v = t(783684),
    p = t(388032),
    _ = t(104109),
    b = t(623388);
function m(e) {
    let n,
        { active: t, nextActive: r, position: o } = e;
    return (
        (n = t && !1 !== r ? 'full' : t && !1 === r ? 'half' : 'none'),
        (0, i.jsxs)('div', {
            className: _.progressContainer,
            children: [
                (0, i.jsx)('div', { className: a()(_.progress, _[o], _[n]) }),
                (0, i.jsx)('div', {
                    className: a()(_.boostContainer, { [_.boostContainerActive]: t }),
                    children: (0, i.jsx)(d.Z, {
                        className: _.boost,
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
        className: _.perkRowContainer,
        children:
            null === (t = l.C[r]) || void 0 === t
                ? void 0
                : null === (n = t.perks) || void 0 === n
                  ? void 0
                  : n.map((e, n) =>
                        (0, i.jsxs)(
                            'div',
                            {
                                className: _.perkRow,
                                children: [
                                    (0, i.jsx)(e.icon, {
                                        color: c.TVs.colors.TEXT_MUTED,
                                        size: 'sm'
                                    }),
                                    (0, i.jsx)(s.xv, {
                                        className: _.perkText,
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
    let { guildId: n, powerup: t, onError: o } = e,
        { onActivate: a, isLoading: s, error: l, onDeactivate: u } = (0, x.Z)(n, t);
    return (
        r.useEffect(() => {
            null == o || o(l);
        }, [l, o]),
        (0, i.jsxs)(c.zxk, {
            onClick: t.active ? u : a,
            fullWidth: !0,
            className: _.button,
            innerClassName: _.buttonInner,
            color: t.active ? c.Ttl.PRIMARY : c.Ttl.BRAND,
            submitting: s,
            children: [
                p.NW.string(t.active ? v.Z.PYPdl5 : v.Z.AOQgkp),
                !t.active &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('span', {
                                className: _.dot,
                                children: '\u2022'
                            }),
                            (0, i.jsx)(d.Z, {
                                className: _.boost,
                                width: 16,
                                height: 16,
                                fill: 'white'
                            }),
                            ' ',
                            (0, i.jsx)('span', {
                                className: _.cost,
                                children: t.cost
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
            className: _.card,
            children: [
                (0, i.jsx)(m, {
                    position: n,
                    active: a.active,
                    nextActive: null == c ? void 0 : c.active
                }),
                (0, i.jsxs)('div', {
                    className: b.contentContainer,
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

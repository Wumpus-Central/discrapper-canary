t.d(n, {
    KV: () => j,
    ZP: () => _,
    _R: () => h
});
var r = t(200651),
    i = t(120356),
    o = t.n(i),
    a = t(793030),
    s = t(481060),
    c = t(808189),
    l = t(413335),
    d = t(838968),
    u = t(279604),
    x = t(783684),
    v = t(388032),
    m = t(78555),
    p = t(355135);
function b(e) {
    let n,
        { active: t, nextActive: i, position: a } = e;
    return (
        (n = t && !1 !== i ? 'full' : t && !1 === i ? 'half' : 'none'),
        (0, r.jsxs)('div', {
            className: m.progressContainer,
            children: [
                (0, r.jsx)('div', { className: o()(m.progress, m[a], m[n]) }),
                (0, r.jsx)('div', {
                    className: o()(m.boostContainer, { [m.boostContainerActive]: t }),
                    children: (0, r.jsx)(l.Z, {
                        className: m.boost,
                        width: 16,
                        height: 16,
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
                                        color: s.TVs.colors.TEXT_MUTED,
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
    let { powerup: n } = e,
        { onActivate: t } = (0, u.Z)(n);
    return (0, r.jsxs)(s.zxk, {
        onClick: t,
        fullWidth: !0,
        className: m.button,
        innerClassName: m.buttonInner,
        color: n.active ? s.Ttl.PRIMARY : s.Ttl.BRAND,
        children: [
            v.NW.string(n.active ? x.Z.PYPdl5 : x.Z.AOQgkp),
            !n.active &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('span', {
                            className: m.dot,
                            children: '\u2022'
                        }),
                        (0, r.jsx)(l.Z, {
                            className: m.boost,
                            width: 16,
                            height: 16,
                            fill: 'white'
                        }),
                        ' ',
                        (0, r.jsx)('span', {
                            className: m.cost,
                            children: n.cost
                        })
                    ]
                })
        ]
    });
}
function _(e) {
    let n,
        { index: t, powerup: i, nextPowerup: o } = e,
        { onShowMore: s } = (0, u.Z)(i);
    return (
        (n = 0 === t ? 'start' : null == o ? 'end' : 'middle'),
        (0, r.jsxs)(d.Z, {
            label: i.title,
            onClick: s,
            active: i.active,
            className: m.card,
            children: [
                (0, r.jsx)(b, {
                    position: n,
                    active: i.active,
                    nextActive: null == o ? void 0 : o.active
                }),
                (0, r.jsxs)('div', {
                    className: p.contentContainer,
                    children: [
                        (0, r.jsx)(a.X6, {
                            variant: 'heading-md/bold',
                            children: i.title
                        }),
                        (0, r.jsx)(j, { index: t }),
                        (0, r.jsx)(h, { powerup: i })
                    ]
                })
            ]
        })
    );
}

i.d(n, { Z: () => j });
var t = i(200651),
    a = i(120356),
    r = i.n(a),
    s = i(793030),
    o = i(481060),
    c = i(808189),
    l = i(413335),
    d = i(838968),
    u = i(279604),
    x = i(947494),
    m = i(388032),
    p = i(72981),
    v = i(14573);
function h(e) {
    let n,
        { active: i, nextActive: a, position: s } = e;
    return (
        (n = i && !1 !== a ? 'full' : i && !1 === a ? 'half' : 'none'),
        (0, t.jsxs)('div', {
            className: p.progressContainer,
            children: [
                (0, t.jsx)('div', { className: r()(p.progress, p[s], p[n]) }),
                (0, t.jsx)('div', {
                    className: r()(p.boostContainer, { [p.boostContainerActive]: i }),
                    children: (0, t.jsx)(l.Z, {
                        className: p.boost,
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
    var n, i;
    let a,
        { index: r, powerup: l, nextPowerup: j } = e,
        { onActivate: C, onShowMore: b } = (0, u.Z)(l);
    return (
        (a = 0 === r ? 'start' : null == j ? 'end' : 'middle'),
        (0, t.jsxs)(d.Z, {
            label: l.title,
            onClick: b,
            active: l.active,
            className: p.card,
            children: [
                (0, t.jsx)(h, {
                    position: a,
                    active: l.active,
                    nextActive: null == j ? void 0 : j.active
                }),
                (0, t.jsxs)('div', {
                    className: v.contentContainer,
                    children: [
                        (0, t.jsx)(s.X6, {
                            variant: 'heading-md/bold',
                            children: l.title
                        }),
                        (0, t.jsx)('div', {
                            className: p.perkRowContainer,
                            children:
                                null === (i = c.C[r]) || void 0 === i
                                    ? void 0
                                    : null === (n = i.perks) || void 0 === n
                                      ? void 0
                                      : n.map((e, n) =>
                                            (0, t.jsxs)(
                                                'div',
                                                {
                                                    className: p.perkRow,
                                                    children: [
                                                        (0, t.jsx)(e.icon, {
                                                            color: o.TVs.colors.TEXT_MUTED,
                                                            size: 'sm'
                                                        }),
                                                        (0, t.jsx)(s.xv, {
                                                            className: p.perkText,
                                                            color: 'text-muted',
                                                            variant: 'text-sm/medium',
                                                            children: e.getCopy()
                                                        })
                                                    ]
                                                },
                                                n
                                            )
                                        )
                        }),
                        (0, t.jsx)(o.zxk, {
                            onClick: C,
                            fullWidth: !0,
                            className: p.button,
                            color: l.active ? o.Ttl.PRIMARY : o.Ttl.BRAND,
                            children: m.intl.string(l.active ? x.Z.R3ZG5O : x.Z.adzkaW)
                        })
                    ]
                })
            ]
        })
    );
}

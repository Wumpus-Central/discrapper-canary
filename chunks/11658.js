t.d(n, { Z: () => j });
var i = t(200651),
    r = t(120356),
    a = t.n(r),
    o = t(793030),
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
        { active: t, nextActive: r, position: o } = e;
    return (
        (n = t && !1 !== r ? 'full' : t && !1 === r ? 'half' : 'none'),
        (0, i.jsxs)('div', {
            className: m.progressContainer,
            children: [
                (0, i.jsx)('div', { className: a()(m.progress, m[o], m[n]) }),
                (0, i.jsx)('div', {
                    className: a()(m.boostContainer, { [m.boostContainerActive]: t }),
                    children: (0, i.jsx)(l.Z, {
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
    let r,
        { index: a, powerup: l, nextPowerup: j } = e,
        { onActivate: h, onShowMore: C } = (0, u.Z)(l);
    return (
        (r = 0 === a ? 'start' : null == j ? 'end' : 'middle'),
        (0, i.jsxs)(d.Z, {
            label: l.title,
            onClick: C,
            active: l.active,
            className: m.card,
            children: [
                (0, i.jsx)(b, {
                    position: r,
                    active: l.active,
                    nextActive: null == j ? void 0 : j.active
                }),
                (0, i.jsxs)('div', {
                    className: p.contentContainer,
                    children: [
                        (0, i.jsx)(o.X6, {
                            variant: 'heading-md/bold',
                            children: l.title
                        }),
                        (0, i.jsx)('div', {
                            className: m.perkRowContainer,
                            children:
                                null === (t = c.C[a]) || void 0 === t
                                    ? void 0
                                    : null === (n = t.perks) || void 0 === n
                                      ? void 0
                                      : n.map((e, n) =>
                                            (0, i.jsxs)(
                                                'div',
                                                {
                                                    className: m.perkRow,
                                                    children: [
                                                        (0, i.jsx)(e.icon, {
                                                            color: s.TVs.colors.TEXT_MUTED,
                                                            size: 'sm'
                                                        }),
                                                        (0, i.jsx)(o.xv, {
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
                        }),
                        (0, i.jsx)(s.zxk, {
                            onClick: h,
                            fullWidth: !0,
                            className: m.button,
                            color: l.active ? s.Ttl.PRIMARY : s.Ttl.BRAND,
                            children: v.NW.string(l.active ? x.Z.R3ZG5O : x.Z.adzkaW)
                        })
                    ]
                })
            ]
        })
    );
}

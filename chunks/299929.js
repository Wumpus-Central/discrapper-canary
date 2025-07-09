(n.d(t, { Z: () => p }), n(953529));
var i = n(255367),
    r = n(73800),
    s = n(755721),
    a = n(481060),
    l = n(731722),
    o = n(172751),
    c = n(446094),
    d = n(131085),
    u = n(388032),
    m = n(729495);
let p = r.memo(function (e) {
    let { guildId: t, guildProfile: n, title: r, description: p, onClose: g } = e,
        { isAdopting: h, onAdoptTag: f, onEditProfile: b } = (0, c.Z)(t, g);
    return (0, i.jsxs)('div', {
        className: m.container,
        ref: e.ref,
        children: [
            (0, i.jsx)(a.olH, {
                className: m.closeButton,
                onClick: g
            }),
            (0, i.jsx)('div', {
                className: m.tagContainer,
                children: (0, i.jsxs)('div', {
                    className: m.tag,
                    children: [
                        null != n.badge &&
                            (0, i.jsx)(o.eI, {
                                src: (0, l.Ic)(t, n.badge, d.Gg.SIZE_36),
                                tag: n.tag,
                                size: d.Gg.SIZE_36,
                                className: m.badge
                            }),
                        (0, i.jsx)(a.Text, {
                            tag: 'span',
                            variant: 'heading-xxl/semibold',
                            children: n.tag
                        })
                    ]
                })
            }),
            (0, i.jsx)(a.X6q, {
                variant: 'heading-md/semibold',
                className: m.title,
                children: r
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-sm/medium',
                className: m.description,
                children: p
            }),
            (0, i.jsx)(s.zx, {
                className: m.adoptButton,
                submitting: h,
                onClick: f,
                children: u.intl.string(u.t.jwEaiY)
            }),
            (0, i.jsx)(s.zx, {
                color: s.zx.Colors.PRIMARY,
                className: m.editButton,
                onClick: b,
                children: u.intl.string(u.t.s5vZlZ)
            })
        ]
    });
});

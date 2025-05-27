n.d(t, { Z: () => m }), n(953529);
var i = n(255367),
    r = n(73800),
    s = n(481060),
    l = n(731722),
    a = n(172751),
    o = n(446094),
    c = n(131085),
    d = n(388032),
    u = n(729495);
let m = r.memo(function (e) {
    let { guildId: t, guildProfile: n, title: r, description: m, onClose: g } = e,
        { isAdopting: p, onAdoptTag: h, onEditProfile: f } = (0, o.Z)(t, g);
    return (0, i.jsxs)('div', {
        className: u.container,
        ref: e.ref,
        children: [
            (0, i.jsx)(s.olH, {
                className: u.closeButton,
                onClick: g
            }),
            (0, i.jsx)('div', {
                className: u.tagContainer,
                children: (0, i.jsxs)('div', {
                    className: u.tag,
                    children: [
                        null != n.badge &&
                            (0, i.jsx)(a.eI, {
                                src: (0, l.Ic)(t, n.badge, c.Gg.SIZE_36),
                                tag: n.tag,
                                size: c.Gg.SIZE_36,
                                className: u.badge
                            }),
                        (0, i.jsx)(s.Text, {
                            tag: 'span',
                            variant: 'heading-xxl/semibold',
                            children: n.tag
                        })
                    ]
                })
            }),
            (0, i.jsx)(s.X6q, {
                variant: 'heading-md/semibold',
                className: u.title,
                children: r
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/medium',
                className: u.description,
                children: m
            }),
            (0, i.jsx)(s.zxk, {
                className: u.adoptButton,
                submitting: p,
                onClick: h,
                children: d.intl.string(d.t.jwEaiY)
            }),
            (0, i.jsx)(s.zxk, {
                color: s.zxk.Colors.PRIMARY,
                className: u.editButton,
                onClick: f,
                children: d.intl.string(d.t.s5vZlZ)
            })
        ]
    });
});

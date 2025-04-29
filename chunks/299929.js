n.d(t, { Z: () => g }), n(953529), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(481060),
    l = n(300284),
    a = n(321114),
    o = n(731722),
    c = n(172751),
    d = n(131085),
    u = n(526761),
    m = n(388032),
    p = n(729495);
let g = r.memo(function (e) {
    let { guildId: t, guildProfile: n, title: g, description: h, onClose: f } = e,
        b = (0, l.Z)({ scrollPosition: u.Y_.GUILD_TAG }),
        [_, x] = r.useState(!1);
    async function E() {
        x(!0), await (0, a.c)(t, !0), x(!1), null == f || f();
    }
    return (0, i.jsxs)('div', {
        className: p.container,
        children: [
            (0, i.jsx)(s.olH, {
                className: p.closeButton,
                onClick: f
            }),
            (0, i.jsx)('div', {
                className: p.tagContainer,
                children: (0, i.jsxs)('div', {
                    className: p.tag,
                    children: [
                        null != n.badge &&
                            (0, i.jsx)(c.eI, {
                                src: (0, o.Ic)(t, n.badge, d.Gg.SIZE_36),
                                tag: n.tag,
                                size: d.Gg.SIZE_36,
                                className: p.badge
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
                className: p.title,
                children: g
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/medium',
                className: p.description,
                children: h
            }),
            (0, i.jsx)(s.zxk, {
                className: p.adoptButton,
                submitting: _,
                onClick: E,
                children: m.intl.string(m.t.jwEaiY)
            }),
            (0, i.jsx)(s.zxk, {
                color: s.zxk.Colors.PRIMARY,
                className: p.editButton,
                onClick: function () {
                    null == f || f(), b();
                },
                children: m.intl.string(m.t.s5vZlZ)
            })
        ]
    });
});

n.d(t, { Z: () => p }), n(953529), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(481060),
    l = n(931240),
    a = n(300284),
    o = n(731722),
    c = n(172751),
    d = n(131085),
    u = n(526761),
    m = n(388032),
    g = n(729495);
let p = r.memo(function (e) {
    let { guildId: t, guildProfile: n, title: p, description: h, onClose: f } = e,
        b = (0, a.Z)({ scrollPosition: u.Y_.GUILD_TAG }),
        [_, x] = r.useState(!1);
    async function E() {
        x(!0), await (0, l.nE)(t, !0), x(!1), null == f || f();
    }
    return (0, i.jsxs)('div', {
        className: g.container,
        children: [
            (0, i.jsx)(s.olH, {
                className: g.closeButton,
                onClick: f
            }),
            (0, i.jsx)('div', {
                className: g.tagContainer,
                children: (0, i.jsxs)('div', {
                    className: g.tag,
                    children: [
                        null != n.badge &&
                            (0, i.jsx)(c.eI, {
                                src: (0, o.Ic)(t, n.badge, d.Gg.SIZE_36),
                                tag: n.tag,
                                size: d.Gg.SIZE_36,
                                className: g.badge
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
                className: g.title,
                children: p
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/medium',
                className: g.description,
                children: h
            }),
            (0, i.jsx)(s.zxk, {
                className: g.adoptButton,
                submitting: _,
                onClick: E,
                children: m.intl.string(m.t.jwEaiY)
            }),
            (0, i.jsx)(s.zxk, {
                color: s.zxk.Colors.PRIMARY,
                className: g.editButton,
                onClick: function () {
                    null == f || f(), b();
                },
                children: m.intl.string(m.t.s5vZlZ)
            })
        ]
    });
});

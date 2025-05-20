n.d(t, { Z: () => p }), n(953529), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(481060),
    l = n(300284),
    a = n(321114),
    o = n(731722),
    c = n(172751),
    d = n(131085),
    u = n(526761),
    g = n(388032),
    m = n(729495);
let p = r.memo(function (e) {
    let { guildId: t, guildProfile: n, title: p, description: h, onClose: f } = e,
        b = (0, l.Z)({ scrollPosition: u.Y_.GUILD_TAG }),
        [_, x] = r.useState(!1);
    async function E() {
        x(!0), await (0, a.c)(t, !0), x(!1), null == f || f();
    }
    return (0, i.jsxs)('div', {
        className: m.container,
        ref: e.ref,
        children: [
            (0, i.jsx)(s.olH, {
                className: m.closeButton,
                onClick: f
            }),
            (0, i.jsx)('div', {
                className: m.tagContainer,
                children: (0, i.jsxs)('div', {
                    className: m.tag,
                    children: [
                        null != n.badge &&
                            (0, i.jsx)(c.eI, {
                                src: (0, o.Ic)(t, n.badge, d.Gg.SIZE_36),
                                tag: n.tag,
                                size: d.Gg.SIZE_36,
                                className: m.badge
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
                className: m.title,
                children: p
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/medium',
                className: m.description,
                children: h
            }),
            (0, i.jsx)(s.zxk, {
                className: m.adoptButton,
                submitting: _,
                onClick: E,
                children: g.intl.string(g.t.jwEaiY)
            }),
            (0, i.jsx)(s.zxk, {
                color: s.zxk.Colors.PRIMARY,
                className: m.editButton,
                onClick: function () {
                    null == f || f(), b();
                },
                children: g.intl.string(g.t.s5vZlZ)
            })
        ]
    });
});

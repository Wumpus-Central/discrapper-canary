n.d(t, { Z: () => m }), n(953529), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(481060),
    l = n(931240),
    a = n(550271),
    o = n(300284),
    c = n(526761),
    d = n(388032),
    u = n(729495);
let m = r.memo(function (e) {
    let { guildId: t, guildProfile: n, title: m, description: g, onClose: p } = e,
        h = (0, o.Z)({ scrollPosition: c.Y_.GUILD_TAG }),
        [f, b] = r.useState(!1);
    if (null === n) return null;
    async function _() {
        b(!0), await (0, l.nE)(t, !0), b(!1), null == p || p();
    }
    return (0, i.jsxs)('div', {
        className: u.container,
        children: [
            (0, i.jsx)(s.olH, {
                className: u.closeButton,
                onClick: p
            }),
            (0, i.jsx)('div', {
                className: u.tagContainer,
                children: (0, i.jsxs)('div', {
                    className: u.tag,
                    children: [
                        null !== n.badge &&
                            null !== n.badgeColorPrimary &&
                            null !== n.badgeColorSecondary &&
                            (0, i.jsx)(a.A, {
                                className: u.badge,
                                badge: n.badge,
                                width: 40,
                                height: 40,
                                primaryTintColor: n.badgeColorPrimary,
                                secondaryTintColor: n.badgeColorSecondary
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
                children: m
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/medium',
                className: u.description,
                children: g
            }),
            (0, i.jsx)(s.zxk, {
                className: u.adoptButton,
                submitting: f,
                onClick: _,
                children: d.intl.string(d.t.jwEaiY)
            }),
            (0, i.jsx)(s.zxk, {
                color: s.zxk.Colors.PRIMARY,
                className: u.editButton,
                onClick: function () {
                    null == p || p(), h();
                },
                children: d.intl.string(d.t.s5vZlZ)
            })
        ]
    });
});

n.d(t, { Z: () => m }), n(953529), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(931240),
    l = n(550271),
    o = n(300284),
    c = n(526761),
    d = n(388032),
    u = n(729495);
let m = i.memo(function (e) {
    let { guildId: t, guildProfile: n, title: m, description: g, onClose: p } = e,
        h = (0, o.Z)({ scrollPosition: c.Y_.GUILD_TAG }),
        [f, b] = i.useState(!1);
    if (null === n) return null;
    async function N() {
        b(!0), await (0, a.nE)(t, !0), b(!1), null == p || p();
    }
    return (0, r.jsxs)('div', {
        className: u.container,
        children: [
            (0, r.jsx)(s.olH, {
                className: u.closeButton,
                onClick: p
            }),
            (0, r.jsx)('div', {
                className: u.tagContainer,
                children: (0, r.jsxs)('div', {
                    className: u.tag,
                    children: [
                        null !== n.badge &&
                            null !== n.badgeColorPrimary &&
                            null !== n.badgeColorSecondary &&
                            (0, r.jsx)(l.A, {
                                className: u.badge,
                                badge: n.badge,
                                width: 40,
                                height: 40,
                                primaryTintColor: n.badgeColorPrimary,
                                secondaryTintColor: n.badgeColorSecondary
                            }),
                        (0, r.jsx)(s.Text, {
                            tag: 'span',
                            variant: 'heading-xxl/semibold',
                            children: n.tag
                        })
                    ]
                })
            }),
            (0, r.jsx)(s.X6q, {
                variant: 'heading-md/semibold',
                className: u.title,
                children: m
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-sm/medium',
                className: u.description,
                children: g
            }),
            (0, r.jsx)(s.zxk, {
                className: u.adoptButton,
                submitting: f,
                onClick: N,
                children: d.NW.string(d.t.jwEaiY)
            }),
            (0, r.jsx)(s.zxk, {
                color: s.zxk.Colors.PRIMARY,
                className: u.editButton,
                onClick: function () {
                    null == p || p(), h();
                },
                children: d.NW.string(d.t.s5vZlZ)
            })
        ]
    });
});

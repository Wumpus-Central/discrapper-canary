n.d(t, { Z: () => p }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(931240),
    l = n(550271),
    o = n(314852),
    c = n(65361),
    d = n(300284),
    u = n(526761),
    m = n(388032),
    g = n(729495);
let p = i.memo(function (e) {
    let { fetchGuildProfile: t, fetchStatus: n, guildProfile: p } = (0, c.u)(e.guildId),
        h = (0, d.Z)({ scrollPosition: u.Y_.GUILD_TAG }),
        [f, b] = i.useState(!1);
    if (
        (i.useEffect(() => {
            n === o.a.NOT_FETCHED && t();
        }, [t, n]),
        null === p)
    )
        return null;
    async function N() {
        var t;
        b(!0), await (0, a.nE)(e.guildId, !0), b(!1), null == (t = e.onClose) || t.call(e);
    }
    return (0, r.jsxs)('div', {
        className: g.container,
        children: [
            (0, r.jsx)(s.olH, {
                className: g.closeButton,
                onClick: e.onClose
            }),
            (0, r.jsx)('div', {
                className: g.tagContainer,
                children: (0, r.jsxs)('div', {
                    className: g.tag,
                    children: [
                        null !== p.badge &&
                            null !== p.badgeColorPrimary &&
                            null !== p.badgeColorSecondary &&
                            (0, r.jsx)(l.A, {
                                className: g.badge,
                                badge: p.badge,
                                width: 40,
                                height: 40,
                                primaryTintColor: p.badgeColorPrimary,
                                secondaryTintColor: p.badgeColorSecondary
                            }),
                        (0, r.jsx)(s.Text, {
                            tag: 'span',
                            variant: 'heading-xxl/semibold',
                            children: p.tag
                        })
                    ]
                })
            }),
            (0, r.jsx)(s.X6q, {
                variant: 'heading-md/semibold',
                className: g.title,
                children: e.title
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-sm/medium',
                className: g.description,
                children: e.description
            }),
            (0, r.jsx)(s.zxk, {
                className: g.adoptButton,
                submitting: f,
                onClick: N,
                children: m.NW.string(m.t.jwEaiY)
            }),
            (0, r.jsx)(s.zxk, {
                color: s.zxk.Colors.PRIMARY,
                className: g.editButton,
                onClick: function () {
                    var t;
                    null == (t = e.onClose) || t.call(e), h();
                },
                children: m.NW.string(m.t.s5vZlZ)
            })
        ]
    });
});

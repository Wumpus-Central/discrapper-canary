n.d(t, { Z: () => g });
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(665906),
    s = n(499033),
    o = n(585483),
    c = n(456269),
    d = n(228392),
    u = n(981631),
    m = n(388032),
    h = n(242029);
function g(e) {
    let { channelName: t, guildId: g, tagFilter: x, channel: f } = e,
        p = (0, c.r_)(f),
        v = (0, a.cD)(f),
        C = f.isMediaChannel(),
        _ = r.useCallback(() => {
            (0, d.qz)(),
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e('18417').then(n.bind(n, 740696));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            guildId: g
                        });
                });
        }, [g]),
        b = x.size > 0,
        j = v || p,
        N = !b && p && !C,
        T = r.useCallback(() => (N ? _() : v ? void o.S.dispatch(u.CkL.FOCUS_COMPOSER_TITLE) : (0, u.VqG)()), [_, N, v]);
    return (0, i.jsxs)('div', {
        className: h.container,
        children: [
            (0, i.jsxs)('div', {
                className: h.iconContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: h.icon,
                        children: (0, i.jsx)(l.kBi, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 30,
                            height: 30
                        })
                    }),
                    (0, i.jsx)(s.Z, { className: h.stars })
                ]
            }),
            (0, i.jsx)(l.X6q, {
                className: h.header,
                variant: 'heading-md/semibold',
                children: b ? m.intl.formatToPlainString(m.t.lvPci4, { numTags: x.size }) : m.intl.string(m.t.PwTMGx)
            }),
            (0, i.jsx)(l.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: b ? m.intl.formatToPlainString(m.t.AAeye3, { numTags: x.size }) : m.intl.formatToPlainString(m.t.YtsXFB, { channelName: t })
            }),
            j &&
                (0, i.jsxs)(l.zxk, {
                    look: l.zxk.Looks.BLANK,
                    size: l.zxk.Sizes.MIN,
                    color: l.zxk.Colors.GREEN,
                    onClick: T,
                    className: h.cta,
                    innerClassName: h.button,
                    children: [
                        N ? m.intl.string(m.t.DgatTU) : m.intl.string(m.t.wOKE8P),
                        (0, i.jsx)(l.Fbu, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 12
                        })
                    ]
                })
        ]
    });
}

n.d(t, {
    Z: function () {
        return g;
    }
});
var a = n(200651),
    i = n(192379),
    r = n(481060),
    l = n(665906),
    s = n(499033),
    o = n(585483),
    c = n(456269),
    d = n(228392),
    u = n(981631),
    m = n(388032),
    h = n(51092);
function g(e) {
    let { channelName: t, guildId: g, tagFilter: x, channel: f } = e,
        p = (0, c.r_)(f),
        C = (0, l.cD)(f),
        v = f.isMediaChannel(),
        b = i.useCallback(() => {
            (0, d.qz)(),
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await n.e('18417').then(n.bind(n, 740696));
                    return (t) =>
                        (0, a.jsx)(e, {
                            ...t,
                            guildId: g
                        });
                });
        }, [g]),
        j = x.size > 0,
        _ = C || p,
        I = !j && p && !v,
        T = i.useCallback(() => (I ? b() : C ? void o.S.dispatch(u.CkL.FOCUS_COMPOSER_TITLE) : (0, u.VqG)()), [b, I, C]);
    return (0, a.jsxs)('div', {
        className: h.container,
        children: [
            (0, a.jsxs)('div', {
                className: h.iconContainer,
                children: [
                    (0, a.jsx)('div', {
                        className: h.icon,
                        children: (0, a.jsx)(r.ChatIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 30,
                            height: 30
                        })
                    }),
                    (0, a.jsx)(s.Z, { className: h.stars })
                ]
            }),
            (0, a.jsx)(r.Heading, {
                className: h.header,
                variant: 'heading-md/semibold',
                children: j ? m.intl.formatToPlainString(m.t.lvPci4, { numTags: x.size }) : m.intl.string(m.t.PwTMGx)
            }),
            (0, a.jsx)(r.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: j ? m.intl.formatToPlainString(m.t.AAeye3, { numTags: x.size }) : m.intl.formatToPlainString(m.t.YtsXFB, { channelName: t })
            }),
            _ &&
                (0, a.jsxs)(r.Button, {
                    look: r.Button.Looks.BLANK,
                    size: r.Button.Sizes.MIN,
                    color: r.Button.Colors.GREEN,
                    onClick: T,
                    className: h.cta,
                    innerClassName: h.button,
                    children: [
                        I ? m.intl.string(m.t.DgatTU) : m.intl.string(m.t.wOKE8P),
                        (0, a.jsx)(r.ChevronSmallRightIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 12
                        })
                    ]
                })
        ]
    });
}

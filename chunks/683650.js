n.d(t, { o: () => h });
var s = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    r = n(497505),
    o = n(266843),
    d = n(341907),
    u = n(388032),
    c = n(172576),
    m = n(87181);
function x() {
    return (0, s.jsx)('div', {
        className: c.buttonContainer,
        children: (0, s.jsx)(a.zxk, {
            className: c.button,
            color: a.Ttl.BRAND,
            onClick: () => {
                (0, d.navigateToQuestHome)({ fromContent: r.jn.QUESTS_EMBED });
            },
            children: u.intl.string(u.t.GURBQk)
        })
    });
}
function h() {
    let { containerRef: e, size: t } = (0, o.h)();
    return (0, s.jsxs)('div', {
        ref: (t) => (e.current = t),
        className: l()(c.container, {
            [c.wide]: 'lg' === t,
            [c.tall]: 'lg' !== t
        }),
        children: [
            (0, s.jsxs)('div', {
                className: c.contentContainer,
                children: [
                    (0, s.jsx)(a.X6q, {
                        variant: 'lg' === t ? 'heading-xl/bold' : 'heading-lg/bold',
                        color: 'header-primary',
                        children: u.intl.string(u.t.vnP31d)
                    }),
                    (0, s.jsx)(a.Text, {
                        variant: 'lg' === t ? 'text-sm/medium' : 'text-xs/medium',
                        color: 'text-normal',
                        className: c.__invalid_mobileWebCopy,
                        children: u.intl.string(u.t.CTn0yc)
                    }),
                    (0, s.jsx)(x, {})
                ]
            }),
            (0, s.jsx)('div', {
                className: c.imgContainer,
                children: (0, s.jsx)('img', {
                    src: m,
                    alt: '',
                    className: c.missingQuestImage
                })
            })
        ]
    });
}

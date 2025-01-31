n.d(t, { o: () => g });
var s = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    r = n(497505),
    o = n(266843),
    d = n(341907),
    u = n(46140),
    c = n(388032),
    m = n(625838),
    x = n(87181);
function h() {
    return (0, s.jsx)('div', {
        className: m.buttonContainer,
        children: (0, s.jsx)(a.zxk, {
            className: m.button,
            color: a.Ttl.BRAND,
            onClick: () => {
                (0, d.navigateToQuestHome)(u.dr.EMBED_DESKTOP, r.jn.QUESTS_EMBED);
            },
            children: c.intl.string(c.t.GURBQk)
        })
    });
}
function g() {
    let { containerRef: e, size: t } = (0, o.h)();
    return (0, s.jsxs)('div', {
        ref: (t) => (e.current = t),
        className: l()(m.container, {
            [m.wide]: 'lg' === t,
            [m.tall]: 'lg' !== t
        }),
        children: [
            (0, s.jsxs)('div', {
                className: m.contentContainer,
                children: [
                    (0, s.jsx)(a.X6q, {
                        variant: 'lg' === t ? 'heading-xl/bold' : 'heading-lg/bold',
                        color: 'header-primary',
                        children: c.intl.string(c.t.vnP31d)
                    }),
                    (0, s.jsx)(a.Text, {
                        variant: 'lg' === t ? 'text-sm/medium' : 'text-xs/medium',
                        color: 'text-normal',
                        className: m.__invalid_mobileWebCopy,
                        children: c.intl.string(c.t.CTn0yc)
                    }),
                    (0, s.jsx)(h, {})
                ]
            }),
            (0, s.jsx)('div', {
                className: m.imgContainer,
                children: (0, s.jsx)('img', {
                    src: x,
                    alt: '',
                    className: m.missingQuestImage
                })
            })
        ]
    });
}

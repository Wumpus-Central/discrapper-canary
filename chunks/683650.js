n.d(t, {
    o: function () {
        return C;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(481060),
    o = n(497505),
    a = n(266843),
    u = n(341907),
    c = n(46140),
    d = n(388032),
    m = n(625838),
    x = n(87181);
function h() {
    return (0, i.jsx)('div', {
        className: m.buttonContainer,
        children: (0, i.jsx)(r.Button, {
            className: m.button,
            color: r.ButtonColors.BRAND,
            onClick: () => {
                (0, u.navigateToQuestHome)(c.dr.EMBED_DESKTOP, o.jn.QUESTS_EMBED);
            },
            children: d.intl.string(d.t.GURBQk)
        })
    });
}
function C() {
    let { containerRef: e, size: t } = (0, a.h)();
    return (0, i.jsxs)('div', {
        ref: (t) => (e.current = t),
        className: l()(m.container, {
            [m.wide]: 'lg' === t,
            [m.tall]: 'lg' !== t
        }),
        children: [
            (0, i.jsxs)('div', {
                className: m.contentContainer,
                children: [
                    (0, i.jsx)(r.Heading, {
                        variant: 'lg' === t ? 'heading-xl/bold' : 'heading-lg/bold',
                        color: 'header-primary',
                        children: d.intl.string(d.t.vnP31d)
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'lg' === t ? 'text-sm/medium' : 'text-xs/medium',
                        color: 'text-normal',
                        className: m.__invalid_mobileWebCopy,
                        children: d.intl.string(d.t.CTn0yc)
                    }),
                    (0, i.jsx)(h, {})
                ]
            }),
            (0, i.jsx)('div', {
                className: m.imgContainer,
                children: (0, i.jsx)('img', {
                    src: x,
                    alt: '',
                    className: m.missingQuestImage
                })
            })
        ]
    });
}

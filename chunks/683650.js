n.d(t, { o: () => x });
var r = n(200651);
n(192379);
var s = n(120356),
    i = n.n(s),
    o = n(481060),
    l = n(497505),
    a = n(266843),
    c = n(341907),
    u = n(388032),
    d = n(74662),
    m = n(87181);
function p() {
    return (0, r.jsx)('div', {
        className: d.buttonContainer,
        children: (0, r.jsx)(o.zxk, {
            className: d.button,
            color: o.Ttl.BRAND,
            onClick: () => {
                (0, c.navigateToQuestHome)({ fromContent: l.jn.QUESTS_EMBED });
            },
            children: u.NW.string(u.t.GURBQk)
        })
    });
}
function x() {
    let { containerRef: e, size: t } = (0, a.h)();
    return (0, r.jsxs)('div', {
        ref: (t) => (e.current = t),
        className: i()(d.container, {
            [d.wide]: 'lg' === t,
            [d.tall]: 'lg' !== t
        }),
        children: [
            (0, r.jsxs)('div', {
                className: d.contentContainer,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: 'lg' === t ? 'heading-xl/bold' : 'heading-lg/bold',
                        color: 'header-primary',
                        children: u.NW.string(u.t.vnP31d)
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'lg' === t ? 'text-sm/medium' : 'text-xs/medium',
                        color: 'text-normal',
                        className: d.__invalid_mobileWebCopy,
                        children: u.NW.string(u.t.CTn0yc)
                    }),
                    (0, r.jsx)(p, {})
                ]
            }),
            (0, r.jsx)('div', {
                className: d.imgContainer,
                children: (0, r.jsx)('img', {
                    src: m,
                    alt: '',
                    className: d.missingQuestImage
                })
            })
        ]
    });
}

n.d(t, { W: () => f });
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    l = n(497505),
    s = n(266843),
    c = n(341907),
    d = n(388032),
    u = n(767320),
    p = n(87181);
function m() {
    return (0, r.jsx)('div', {
        className: u.buttonContainer,
        children: (0, r.jsx)(o.zxk, {
            className: u.button,
            color: o.Ttl.BRAND,
            onClick: () => {
                (0, c.navigateToQuestHome)({ fromContent: l.jn.QUESTS_EMBED });
            },
            children: d.NW.string(d.t.GURBQk)
        })
    });
}
function f() {
    let { containerRef: e, size: t } = (0, s.h)();
    return (0, r.jsxs)('div', {
        ref: (t) => (e.current = t),
        className: a()(u.container, {
            [u.wide]: 'lg' === t,
            [u.tall]: 'lg' !== t
        }),
        children: [
            (0, r.jsxs)('div', {
                className: u.contentContainer,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: 'lg' === t ? 'heading-xl/bold' : 'heading-lg/bold',
                        color: 'header-primary',
                        children: d.NW.string(d.t.vnP31d)
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'lg' === t ? 'text-sm/medium' : 'text-xs/medium',
                        color: 'text-normal',
                        className: u.__invalid_mobileWebCopy,
                        children: d.NW.string(d.t.nuWSYW)
                    }),
                    (0, r.jsx)(m, {})
                ]
            }),
            (0, r.jsx)('div', {
                className: u.imgContainer,
                children: (0, r.jsx)('img', {
                    src: p,
                    alt: '',
                    className: u.missingQuestImage
                })
            })
        ]
    });
}

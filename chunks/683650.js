n.d(t, {
    X: () => C,
    o: () => f
});
var r,
    s = n(255367);
n(73800);
var o = n(120356),
    i = n.n(o),
    a = n(755721),
    l = n(481060),
    c = n(617136),
    u = n(497505),
    d = n(266843),
    m = n(341907),
    p = n(46140),
    h = n(388032),
    x = n(444879),
    g = n(87181);
function j() {
    return (0, s.jsx)('div', {
        className: x.buttonContainer,
        children: (0, s.jsx)(a.zx, {
            className: x.button,
            color: a.Tt.BRAND,
            onClick: () => {
                (0, m.navigateToQuestHome)({ fromContent: u.jn.QUESTS_EMBED });
            },
            children: h.intl.string(h.t.GURBQk)
        })
    });
}
var C = (((r = {}).NOT_FOUND = 'not_found'), (r.MOBILE_ONLY = 'mobile_only'), r);
function f(e) {
    let { questId: t, reason: n = 'not_found' } = e,
        { containerRef: r, size: o } = (0, d.h)();
    return (
        (0, c.Zk)(p.V_.UNKNOWN_QUEST, t),
        (0, s.jsxs)('div', {
            ref: (e) => {
                r.current = e;
            },
            className: i()(x.container, {
                [x.wide]: 'lg' === o,
                [x.tall]: 'lg' !== o
            }),
            children: [
                (0, s.jsxs)('div', {
                    className: x.contentContainer,
                    children: [
                        (0, s.jsx)(l.X6q, {
                            variant: 'lg' === o ? 'heading-xl/bold' : 'heading-lg/bold',
                            color: 'header-primary',
                            children: h.intl.string(h.t.vnP31d)
                        }),
                        (0, s.jsx)(l.Text, {
                            variant: 'lg' === o ? 'text-sm/medium' : 'text-xs/medium',
                            color: 'text-default',
                            className: x.__invalid_mobileWebCopy,
                            children: h.intl.string('mobile_only' === n ? h.t.Pag1gY : h.t.CTn0yc)
                        }),
                        (0, s.jsx)(j, {})
                    ]
                }),
                (0, s.jsx)('div', {
                    className: x.imgContainer,
                    children: (0, s.jsx)('img', {
                        src: g,
                        alt: '',
                        className: x.missingQuestImage
                    })
                })
            ]
        })
    );
}

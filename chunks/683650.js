n.d(t, {
    X: () => f,
    o: () => j
});
var r,
    s = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    l = n(617136),
    c = n(497505),
    u = n(266843),
    d = n(341907),
    m = n(46140),
    p = n(388032),
    x = n(444879),
    g = n(87181);
function h() {
    return (0, s.jsx)('div', {
        className: x.buttonContainer,
        children: (0, s.jsx)(a.zxk, {
            className: x.button,
            color: a.Ttl.BRAND,
            onClick: () => {
                (0, d.navigateToQuestHome)({ fromContent: c.jn.QUESTS_EMBED });
            },
            children: p.intl.string(p.t.GURBQk)
        })
    });
}
var f = (((r = {}).NOT_FOUND = 'not_found'), (r.MOBILE_ONLY = 'mobile_only'), r);
function j(e) {
    let { questId: t, reason: n = 'not_found' } = e,
        { containerRef: r, size: i } = (0, u.h)();
    return (
        (0, l.Zk)(m.V_.UNKNOWN_QUEST, t),
        (0, s.jsxs)('div', {
            ref: (e) => {
                r.current = e;
            },
            className: o()(x.container, {
                [x.wide]: 'lg' === i,
                [x.tall]: 'lg' !== i
            }),
            children: [
                (0, s.jsxs)('div', {
                    className: x.contentContainer,
                    children: [
                        (0, s.jsx)(a.X6q, {
                            variant: 'lg' === i ? 'heading-xl/bold' : 'heading-lg/bold',
                            color: 'header-primary',
                            children: p.intl.string(p.t.vnP31d)
                        }),
                        (0, s.jsx)(a.Text, {
                            variant: 'lg' === i ? 'text-sm/medium' : 'text-xs/medium',
                            color: 'text-normal',
                            className: x.__invalid_mobileWebCopy,
                            children: p.intl.string('mobile_only' === n ? p.t.Pag1gY : p.t.CTn0yc)
                        }),
                        (0, s.jsx)(h, {})
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

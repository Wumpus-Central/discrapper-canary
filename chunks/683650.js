n.d(t, {
    X: () => j,
    o: () => f
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
    x = n(388032),
    p = n(444879),
    h = n(87181);
function g() {
    return (0, s.jsx)('div', {
        className: p.buttonContainer,
        children: (0, s.jsx)(a.zxk, {
            className: p.button,
            color: a.Ttl.BRAND,
            onClick: () => {
                (0, d.navigateToQuestHome)({ fromContent: c.jn.QUESTS_EMBED });
            },
            children: x.intl.string(x.t.GURBQk)
        })
    });
}
var j = (((r = {}).NOT_FOUND = 'not_found'), (r.MOBILE_ONLY = 'mobile_only'), r);
function f(e) {
    let { questId: t, reason: n = 'not_found' } = e,
        { containerRef: r, size: i } = (0, u.h)();
    return (
        (0, l.Zk)(m.V_.UNKNOWN_QUEST, t),
        (0, s.jsxs)('div', {
            ref: (e) => {
                r.current = e;
            },
            className: o()(p.container, {
                [p.wide]: 'lg' === i,
                [p.tall]: 'lg' !== i
            }),
            children: [
                (0, s.jsxs)('div', {
                    className: p.contentContainer,
                    children: [
                        (0, s.jsx)(a.X6q, {
                            variant: 'lg' === i ? 'heading-xl/bold' : 'heading-lg/bold',
                            color: 'header-primary',
                            children: x.intl.string(x.t.vnP31d)
                        }),
                        (0, s.jsx)(a.Text, {
                            variant: 'lg' === i ? 'text-sm/medium' : 'text-xs/medium',
                            color: 'text-normal',
                            className: p.__invalid_mobileWebCopy,
                            children: x.intl.string('mobile_only' === n ? x.t.Pag1gY : x.t.CTn0yc)
                        }),
                        (0, s.jsx)(g, {})
                    ]
                }),
                (0, s.jsx)('div', {
                    className: p.imgContainer,
                    children: (0, s.jsx)('img', {
                        src: h,
                        alt: '',
                        className: p.missingQuestImage
                    })
                })
            ]
        })
    );
}

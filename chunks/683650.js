n.d(t, {
    X: () => j,
    o: () => C
});
var r,
    s = n(255367);
n(73800);
var o = n(120356),
    i = n.n(o),
    l = n(481060),
    a = n(617136),
    c = n(497505),
    u = n(266843),
    d = n(341907),
    m = n(46140),
    p = n(388032),
    h = n(444879),
    x = n(87181);
function g() {
    return (0, s.jsx)('div', {
        className: h.buttonContainer,
        children: (0, s.jsx)(l.zxk, {
            className: h.button,
            color: l.Ttl.BRAND,
            onClick: () => {
                (0, d.navigateToQuestHome)({ fromContent: c.jn.QUESTS_EMBED });
            },
            children: p.intl.string(p.t.GURBQk)
        })
    });
}
var j = (((r = {}).NOT_FOUND = 'not_found'), (r.MOBILE_ONLY = 'mobile_only'), r);
function C(e) {
    let { questId: t, reason: n = 'not_found' } = e,
        { containerRef: r, size: o } = (0, u.h)();
    return (
        (0, a.Zk)(m.V_.UNKNOWN_QUEST, t),
        (0, s.jsxs)('div', {
            ref: (e) => {
                r.current = e;
            },
            className: i()(h.container, {
                [h.wide]: 'lg' === o,
                [h.tall]: 'lg' !== o
            }),
            children: [
                (0, s.jsxs)('div', {
                    className: h.contentContainer,
                    children: [
                        (0, s.jsx)(l.X6q, {
                            variant: 'lg' === o ? 'heading-xl/bold' : 'heading-lg/bold',
                            color: 'header-primary',
                            children: p.intl.string(p.t.vnP31d)
                        }),
                        (0, s.jsx)(l.Text, {
                            variant: 'lg' === o ? 'text-sm/medium' : 'text-xs/medium',
                            color: 'text-default',
                            className: h.__invalid_mobileWebCopy,
                            children: p.intl.string('mobile_only' === n ? p.t.Pag1gY : p.t.CTn0yc)
                        }),
                        (0, s.jsx)(g, {})
                    ]
                }),
                (0, s.jsx)('div', {
                    className: h.imgContainer,
                    children: (0, s.jsx)('img', {
                        src: x,
                        alt: '',
                        className: h.missingQuestImage
                    })
                })
            ]
        })
    );
}

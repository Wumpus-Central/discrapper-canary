n.d(t, {
    X: () => g,
    o: () => E
});
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(755721),
    s = n(481060),
    l = n(617136),
    c = n(497505),
    u = n(110560),
    d = n(266843),
    f = n(46140),
    _ = n(388032),
    p = n(444879),
    h = n(87181);
function m() {
    let e = () => {
        (0, u.navigateToQuestHome)({ fromContent: c.jn.QUESTS_EMBED });
    };
    return (0, r.jsx)('div', {
        className: p.buttonContainer,
        children: (0, r.jsx)(o.zx, {
            className: p.button,
            color: o.Tt.BRAND,
            onClick: e,
            children: _.intl.string(_.t.GURBQk)
        })
    });
}
var g = (function (e) {
    return ((e.NOT_FOUND = 'not_found'), (e.MOBILE_ONLY = 'mobile_only'), e);
})({});
function E(e) {
    let { questId: t, reason: n = 'not_found' } = e,
        { containerRef: i, size: o } = (0, d.h)();
    return (
        (0, l.Zk)(f.V_.UNKNOWN_QUEST, t),
        (0, r.jsxs)('div', {
            ref: (e) => {
                i.current = e;
            },
            className: a()(p.container, {
                [p.wide]: 'lg' === o,
                [p.tall]: 'lg' !== o
            }),
            children: [
                (0, r.jsxs)('div', {
                    className: p.contentContainer,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: 'lg' === o ? 'heading-xl/bold' : 'heading-lg/bold',
                            color: 'header-primary',
                            children: _.intl.string(_.t.vnP31d)
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: 'lg' === o ? 'text-sm/medium' : 'text-xs/medium',
                            color: 'text-default',
                            className: p.__invalid_mobileWebCopy,
                            children: _.intl.string('mobile_only' === n ? _.t.Pag1gY : _.t.CTn0yc)
                        }),
                        (0, r.jsx)(m, {})
                    ]
                }),
                (0, r.jsx)('div', {
                    className: p.imgContainer,
                    children: (0, r.jsx)('img', {
                        src: h,
                        alt: '',
                        className: p.missingQuestImage
                    })
                })
            ]
        })
    );
}

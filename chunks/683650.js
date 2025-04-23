n.d(t, { o: () => h });
var r = n(200651);
n(192379);
var s = n(120356),
    i = n.n(s),
    o = n(481060),
    a = n(617136),
    l = n(497505),
    c = n(266843),
    u = n(341907),
    d = n(46140),
    m = n(388032),
    p = n(444879),
    x = n(87181);
function g() {
    return (0, r.jsx)('div', {
        className: p.buttonContainer,
        children: (0, r.jsx)(o.zxk, {
            className: p.button,
            color: o.Ttl.BRAND,
            onClick: () => {
                (0, u.navigateToQuestHome)({ fromContent: l.jn.QUESTS_EMBED });
            },
            children: m.intl.string(m.t.GURBQk)
        })
    });
}
function h(e) {
    let { questId: t } = e,
        { containerRef: n, size: s } = (0, c.h)();
    return (
        (0, a.Zk)(d.V_.UNKNOWN_QUEST, t),
        (0, r.jsxs)('div', {
            ref: (e) => {
                n.current = e;
            },
            className: i()(p.container, {
                [p.wide]: 'lg' === s,
                [p.tall]: 'lg' !== s
            }),
            children: [
                (0, r.jsxs)('div', {
                    className: p.contentContainer,
                    children: [
                        (0, r.jsx)(o.X6q, {
                            variant: 'lg' === s ? 'heading-xl/bold' : 'heading-lg/bold',
                            color: 'header-primary',
                            children: m.intl.string(m.t.vnP31d)
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: 'lg' === s ? 'text-sm/medium' : 'text-xs/medium',
                            color: 'text-normal',
                            className: p.__invalid_mobileWebCopy,
                            children: m.intl.string(m.t.CTn0yc)
                        }),
                        (0, r.jsx)(g, {})
                    ]
                }),
                (0, r.jsx)('div', {
                    className: p.imgContainer,
                    children: (0, r.jsx)('img', {
                        src: x,
                        alt: '',
                        className: p.missingQuestImage
                    })
                })
            ]
        })
    );
}

n.d(t, { W: () => b });
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    l = n(626135),
    s = n(617136),
    c = n(497505),
    d = n(266843),
    u = n(341907),
    p = n(46140),
    m = n(981631),
    f = n(388032),
    h = n(330966),
    g = n(87181);
function _() {
    return (0, r.jsx)('div', {
        className: h.buttonContainer,
        children: (0, r.jsx)(o.zxk, {
            className: h.button,
            color: o.Ttl.BRAND,
            onClick: () => {
                (0, u.navigateToQuestHome)({ fromContent: c.jn.EXCLUDED_QUEST_EMBED }),
                    l.default.track(
                        m.rMx.QUEST_CONTENT_CLICKED,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({ cta_name: s.jZ.VIEW_QUESTS }, (0, s.mH)(c.jn.EXCLUDED_QUEST_EMBED))
                    );
            },
            children: f.NW.string(f.t.GURBQk)
        })
    });
}
function b(e) {
    let { questId: t } = e,
        { containerRef: n, size: i } = (0, d.h)();
    return (
        (0, s.Zk)(p.V_.EXCLUDED_QUEST, t),
        (0, r.jsxs)('div', {
            ref: (e) => (n.current = e),
            className: a()(h.container, {
                [h.wide]: 'lg' === i,
                [h.tall]: 'lg' !== i
            }),
            children: [
                (0, r.jsxs)('div', {
                    className: h.contentContainer,
                    children: [
                        (0, r.jsx)(o.X6q, {
                            variant: 'lg' === i ? 'heading-xl/bold' : 'heading-lg/bold',
                            color: 'header-primary',
                            children: f.NW.string(f.t.vnP31d)
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: 'lg' === i ? 'text-sm/medium' : 'text-xs/medium',
                            color: 'text-normal',
                            className: h.__invalid_mobileWebCopy,
                            children: f.NW.string(f.t.nuWSYW)
                        }),
                        (0, r.jsx)(_, {})
                    ]
                }),
                (0, r.jsx)('div', {
                    className: h.imgContainer,
                    children: (0, r.jsx)('img', {
                        src: g,
                        alt: '',
                        className: h.missingQuestImage
                    })
                })
            ]
        })
    );
}

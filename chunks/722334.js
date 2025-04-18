n.d(t, { W: () => b });
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    l = n(481060),
    o = n(626135),
    s = n(617136),
    c = n(497505),
    u = n(266843),
    d = n(341907),
    p = n(46140),
    m = n(981631),
    f = n(388032),
    h = n(355060),
    g = n(87181);
function _(e) {
    let { questId: t } = e;
    return (0, r.jsx)('div', {
        className: h.buttonContainer,
        children: (0, r.jsx)(l.zxk, {
            className: h.button,
            color: l.Ttl.BRAND,
            onClick: () => {
                (0, d.navigateToQuestHome)({ fromContent: c.jn.EXCLUDED_QUEST_EMBED }),
                    o.default.track(
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
                        })(
                            {
                                quest_id: t,
                                cta_name: s.jZ.VIEW_QUESTS
                            },
                            (0, s.mH)(c.jn.EXCLUDED_QUEST_EMBED)
                        )
                    );
            },
            children: f.NW.string(f.t.GURBQk)
        })
    });
}
function b(e) {
    let { questId: t } = e,
        { containerRef: n, size: i } = (0, u.h)();
    return (
        (0, s.Zk)(p.V_.EXCLUDED_QUEST, t),
        (0, r.jsxs)('div', {
            ref: (e) => {
                n.current = e;
            },
            className: a()(h.container, {
                [h.wide]: 'lg' === i,
                [h.tall]: 'lg' !== i
            }),
            children: [
                (0, r.jsxs)('div', {
                    className: h.contentContainer,
                    children: [
                        (0, r.jsx)(l.X6q, {
                            variant: 'lg' === i ? 'heading-xl/bold' : 'heading-lg/bold',
                            color: 'header-primary',
                            children: f.NW.string(f.t.vnP31d)
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'lg' === i ? 'text-sm/medium' : 'text-xs/medium',
                            color: 'text-normal',
                            className: h.__invalid_mobileWebCopy,
                            children: f.NW.string(f.t.nuWSYW)
                        }),
                        (0, r.jsx)(_, { questId: t })
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

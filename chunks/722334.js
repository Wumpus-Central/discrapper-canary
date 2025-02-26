n.d(t, { W: () => _ });
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
    p = n(981631),
    m = n(388032),
    f = n(767320),
    h = n(87181);
function g() {
    return (0, r.jsx)('div', {
        className: f.buttonContainer,
        children: (0, r.jsx)(o.zxk, {
            className: f.button,
            color: o.Ttl.BRAND,
            onClick: () => {
                (0, u.navigateToQuestHome)({ fromContent: c.jn.EXCLUDED_QUEST_EMBED }),
                    l.default.track(
                        p.rMx.QUEST_CONTENT_CLICKED,
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
            children: m.NW.string(m.t.GURBQk)
        })
    });
}
function _() {
    let { containerRef: e, size: t } = (0, d.h)();
    return (0, r.jsxs)('div', {
        ref: (t) => (e.current = t),
        className: a()(f.container, {
            [f.wide]: 'lg' === t,
            [f.tall]: 'lg' !== t
        }),
        children: [
            (0, r.jsxs)('div', {
                className: f.contentContainer,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: 'lg' === t ? 'heading-xl/bold' : 'heading-lg/bold',
                        color: 'header-primary',
                        children: m.NW.string(m.t.vnP31d)
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'lg' === t ? 'text-sm/medium' : 'text-xs/medium',
                        color: 'text-normal',
                        className: f.__invalid_mobileWebCopy,
                        children: m.NW.string(m.t.nuWSYW)
                    }),
                    (0, r.jsx)(g, {})
                ]
            }),
            (0, r.jsx)('div', {
                className: f.imgContainer,
                children: (0, r.jsx)('img', {
                    src: h,
                    alt: '',
                    className: f.missingQuestImage
                })
            })
        ]
    });
}

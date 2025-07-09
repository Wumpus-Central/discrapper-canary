n.d(t, { W: () => y });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(772848),
    o = n(755721),
    s = n(481060),
    c = n(626135),
    u = n(617136),
    d = n(497505),
    p = n(266843),
    m = n(341907),
    f = n(46140),
    _ = n(981631),
    g = n(388032),
    h = n(355060),
    b = n(87181);
function E(e) {
    let { questId: t } = e;
    return (0, r.jsx)('div', {
        className: h.buttonContainer,
        children: (0, r.jsx)(o.zx, {
            className: h.button,
            color: o.Tt.BRAND,
            onClick: () => {
                ((0, m.navigateToQuestHome)({ fromContent: d.jn.EXCLUDED_QUEST_EMBED }),
                    c.default.track(
                        _.rMx.QUEST_CONTENT_CLICKED,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        ((r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r));
                                    }));
                            }
                            return e;
                        })(
                            {
                                quest_id: t,
                                click_id: (0, a.Z)(),
                                cta_name: u.jZ.VIEW_QUESTS,
                                is_targeted: !1
                            },
                            (0, u.mH)(d.jn.EXCLUDED_QUEST_EMBED)
                        )
                    ));
            },
            children: g.intl.string(g.t.GURBQk)
        })
    });
}
function y(e) {
    let { questId: t } = e,
        { containerRef: n, size: i } = (0, p.h)();
    return (
        (0, u.Zk)(f.V_.EXCLUDED_QUEST, t),
        (0, r.jsxs)('div', {
            ref: (e) => {
                n.current = e;
            },
            className: l()(h.container, {
                [h.wide]: 'lg' === i,
                [h.tall]: 'lg' !== i
            }),
            children: [
                (0, r.jsxs)('div', {
                    className: h.contentContainer,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: 'lg' === i ? 'heading-xl/bold' : 'heading-lg/bold',
                            color: 'header-primary',
                            children: g.intl.string(g.t.vnP31d)
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: 'lg' === i ? 'text-sm/medium' : 'text-xs/medium',
                            color: 'text-default',
                            className: h.__invalid_mobileWebCopy,
                            children: g.intl.string(g.t.nuWSYW)
                        }),
                        (0, r.jsx)(E, { questId: t })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: h.imgContainer,
                    children: (0, r.jsx)('img', {
                        src: b,
                        alt: '',
                        className: h.missingQuestImage
                    })
                })
            ]
        })
    );
}

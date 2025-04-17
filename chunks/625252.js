n.d(t, { Z: () => b });
var r = n(200651),
    i = n(192379),
    s = n(780384),
    a = n(481060),
    l = n(37234),
    o = n(410030),
    c = n(626135),
    d = n(617136),
    u = n(497505),
    m = n(341907),
    g = n(981631),
    p = n(388032),
    h = n(31903),
    f = n(66094);
function b() {
    let e = (0, s.wj)((0, o.ZP)()),
        t = i.useMemo(() => ({ backgroundImage: 'url('.concat('https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png', ')') }), []),
        n = i.useCallback(() => {
            (0, l.xf)(),
                (0, m.navigateToQuestHome)({ fromContent: u.jn.QUEST_HOME_MOVE_CALLOUT }),
                c.default.track(
                    g.rMx.QUEST_CONTENT_CLICKED,
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
                    })({ cta_name: d.jZ.VIEW_QUESTS }, (0, d.mH)(u.jn.QUEST_HOME_MOVE_CALLOUT))
                );
        }, []);
    return (0, r.jsx)('div', {
        className: h.container,
        style: t,
        children: (0, r.jsxs)('div', {
            className: h.textContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: h.headerContainer,
                    children: [
                        (0, r.jsx)('img', {
                            alt: '',
                            src: f,
                            className: h.icon
                        }),
                        (0, r.jsx)(a.X6q, {
                            variant: 'heading-lg/bold',
                            color: 'always-white',
                            children: p.NW.string(p.t.z8YP2N)
                        })
                    ]
                }),
                (0, r.jsx)(a.Text, {
                    variant: 'text-md/medium',
                    color: 'text-secondary',
                    children: p.NW.string(p.t.IqmRZ2)
                }),
                (0, r.jsx)(a.zxk, {
                    size: 'large',
                    color: e ? a.Ttl.BRAND : a.Ttl.WHITE,
                    className: h.button,
                    onClick: n,
                    innerClassName: h.innerButton,
                    children: (0, r.jsx)(a.Text, {
                        variant: 'text-md/medium',
                        color: e ? 'always-white' : 'text-normal',
                        children: p.NW.string(p.t.GURBQk)
                    })
                })
            ]
        })
    });
}

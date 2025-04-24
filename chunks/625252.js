n.d(t, { Z: () => b });
var i = n(200651),
    r = n(192379),
    s = n(780384),
    l = n(481060),
    a = n(37234),
    o = n(410030),
    c = n(626135),
    d = n(617136),
    u = n(497505),
    m = n(341907),
    p = n(981631),
    g = n(388032),
    h = n(31903),
    f = n(66094);
function b() {
    let e = (0, s.wj)((0, o.ZP)()),
        t = r.useMemo(() => ({ backgroundImage: 'url('.concat('https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png', ')') }), []),
        n = r.useCallback(() => {
            (0, a.xf)(),
                (0, m.navigateToQuestHome)({ fromContent: u.jn.QUEST_HOME_MOVE_CALLOUT }),
                c.default.track(
                    p.rMx.QUEST_CONTENT_CLICKED,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })({ cta_name: d.jZ.VIEW_QUESTS }, (0, d.mH)(u.jn.QUEST_HOME_MOVE_CALLOUT))
                );
        }, []);
    return (0, i.jsx)('div', {
        className: h.container,
        style: t,
        children: (0, i.jsxs)('div', {
            className: h.textContainer,
            children: [
                (0, i.jsxs)('div', {
                    className: h.headerContainer,
                    children: [
                        (0, i.jsx)('img', {
                            alt: '',
                            src: f,
                            className: h.icon
                        }),
                        (0, i.jsx)(l.X6q, {
                            variant: 'heading-lg/bold',
                            color: 'always-white',
                            children: g.intl.string(g.t.z8YP2N)
                        })
                    ]
                }),
                (0, i.jsx)(l.Text, {
                    variant: 'text-md/medium',
                    color: 'text-secondary',
                    children: g.intl.string(g.t.IqmRZ2)
                }),
                (0, i.jsx)(l.zxk, {
                    size: 'large',
                    color: e ? l.Ttl.BRAND : l.Ttl.WHITE,
                    className: h.button,
                    onClick: n,
                    innerClassName: h.innerButton,
                    children: (0, i.jsx)(l.Text, {
                        variant: 'text-md/medium',
                        color: e ? 'always-white' : 'text-normal',
                        children: g.intl.string(g.t.GURBQk)
                    })
                })
            ]
        })
    });
}

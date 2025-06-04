n.d(t, { Z: () => _ });
var i = n(255367),
    r = n(73800),
    s = n(772848),
    l = n(780384),
    a = n(481060),
    o = n(37234),
    c = n(410030),
    d = n(626135),
    u = n(617136),
    m = n(497505),
    g = n(341907),
    p = n(981631),
    h = n(388032),
    f = n(31903),
    b = n(66094);
function _() {
    let e = (0, l.wj)((0, c.ZP)()),
        t = r.useMemo(() => ({ backgroundImage: 'url('.concat('https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png', ')') }), []),
        n = r.useCallback(() => {
            (0, o.xf)(),
                (0, g.navigateToQuestHome)({ fromContent: m.jn.QUEST_HOME_MOVE_CALLOUT }),
                d.default.track(
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
                    })(
                        {
                            cta_name: u.jZ.VIEW_QUESTS,
                            click_id: (0, s.Z)(),
                            is_targeted: !1
                        },
                        (0, u.mH)(m.jn.QUEST_HOME_MOVE_CALLOUT)
                    )
                );
        }, []);
    return (0, i.jsx)('div', {
        className: f.container,
        style: t,
        children: (0, i.jsxs)('div', {
            className: f.textContainer,
            children: [
                (0, i.jsxs)('div', {
                    className: f.headerContainer,
                    children: [
                        (0, i.jsx)('img', {
                            alt: '',
                            src: b,
                            className: f.icon
                        }),
                        (0, i.jsx)(a.X6q, {
                            variant: 'heading-lg/bold',
                            color: 'always-white',
                            children: h.intl.string(h.t.z8YP2N)
                        })
                    ]
                }),
                (0, i.jsx)(a.Text, {
                    variant: 'text-md/medium',
                    color: 'text-secondary',
                    children: h.intl.string(h.t.IqmRZ2)
                }),
                (0, i.jsx)(a.zxk, {
                    size: 'large',
                    color: e ? a.Ttl.BRAND : a.Ttl.WHITE,
                    className: f.button,
                    onClick: n,
                    innerClassName: f.innerButton,
                    children: (0, i.jsx)(a.Text, {
                        variant: 'text-md/medium',
                        color: e ? 'always-white' : 'text-normal',
                        children: h.intl.string(h.t.GURBQk)
                    })
                })
            ]
        })
    });
}

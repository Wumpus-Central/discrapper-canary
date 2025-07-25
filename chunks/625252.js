n.d(t, { Z: () => _ });
var i = n(255367),
    r = n(73800),
    s = n(772848),
    a = n(780384),
    l = n(755721),
    o = n(481060),
    c = n(37234),
    d = n(410030),
    u = n(626135),
    m = n(617136),
    p = n(497505),
    g = n(110560),
    h = n(981631),
    f = n(388032),
    b = n(31903),
    x = n(66094);
function _() {
    let e = (0, a.wj)((0, d.ZP)()),
        t = r.useMemo(() => ({ backgroundImage: 'url('.concat('https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png', ')') }), []),
        n = r.useCallback(() => {
            ((0, c.xf)(),
                (0, g.navigateToQuestHome)({ fromContent: p.jn.QUEST_HOME_MOVE_CALLOUT }),
                u.default.track(
                    h.rMx.QUEST_CONTENT_CLICKED,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    ((i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i));
                                }));
                        }
                        return e;
                    })(
                        {
                            cta_name: m.jZ.VIEW_QUESTS,
                            click_id: (0, s.Z)(),
                            is_targeted: !1
                        },
                        (0, m.mH)(p.jn.QUEST_HOME_MOVE_CALLOUT)
                    )
                ));
        }, []);
    return (0, i.jsx)('div', {
        className: b.container,
        style: t,
        children: (0, i.jsxs)('div', {
            className: b.textContainer,
            children: [
                (0, i.jsxs)('div', {
                    className: b.headerContainer,
                    children: [
                        (0, i.jsx)('img', {
                            alt: '',
                            src: x,
                            className: b.icon
                        }),
                        (0, i.jsx)(o.X6q, {
                            variant: 'heading-lg/bold',
                            color: 'always-white',
                            children: f.intl.string(f.t.z8YP2N)
                        })
                    ]
                }),
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/medium',
                    color: 'text-secondary',
                    children: f.intl.string(f.t.IqmRZ2)
                }),
                (0, i.jsx)(l.zx, {
                    size: 'large',
                    color: e ? l.Tt.BRAND : l.Tt.WHITE,
                    className: b.button,
                    onClick: n,
                    innerClassName: b.innerButton,
                    children: (0, i.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: e ? 'always-white' : 'text-default',
                        children: f.intl.string(f.t.GURBQk)
                    })
                })
            ]
        })
    });
}

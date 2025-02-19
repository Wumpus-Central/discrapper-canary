n.d(t, { Z: () => E });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(704215),
    o = n(780384),
    c = n(481060),
    d = n(37234),
    u = n(410030),
    m = n(605236),
    g = n(626135),
    p = n(617136),
    h = n(497505),
    f = n(341907),
    N = n(981631),
    x = n(388032),
    b = n(788090),
    _ = n(66094);
function E() {
    let e = (0, o.wj)((0, u.ZP)()),
        t = i.useMemo(() => ({ backgroundImage: 'url('.concat('https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png', ')') }), []),
        n = i.useCallback(() => {
            (0, d.xf)(),
                (0, f.navigateToQuestHome)({ fromContent: h.jn.QUEST_HOME_MOVE_CALLOUT }),
                g.default.track(
                    N.rMx.QUEST_CONTENT_CLICKED,
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
                    })({ cta_name: p.jZ.VIEW_QUESTS }, (0, p.mH)(h.jn.QUEST_HOME_MOVE_CALLOUT))
                );
        }, []);
    return (
        i.useCallback(() => {
            (0, m.EW)(l.z.GIFT_INVENTORY_QUESTS_MOVED_TO_QUEST_HOME);
        }, []),
        (0, m.un)(l.z.GIFT_INVENTORY_QUESTS_MOVED_TO_QUEST_HOME),
        (0, r.jsxs)('div', {
            className: a()(b.container),
            style: t,
            children: [
                !1,
                (0, r.jsxs)('div', {
                    className: b.textContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: b.headerContainer,
                            children: [
                                (0, r.jsx)('img', {
                                    alt: '',
                                    src: _,
                                    className: b.icon
                                }),
                                (0, r.jsx)(c.X6q, {
                                    variant: 'heading-lg/bold',
                                    color: 'always-white',
                                    children: x.NW.string(x.t.z8YP2N)
                                })
                            ]
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            color: 'text-muted',
                            children: x.NW.string(x.t.IqmRZ2)
                        }),
                        (0, r.jsx)(c.zxk, {
                            size: 'large',
                            color: e ? c.Ttl.BRAND : c.Ttl.WHITE,
                            className: b.button,
                            onClick: n,
                            innerClassName: b.innerButton,
                            children: (0, r.jsx)(c.Text, {
                                variant: 'text-md/medium',
                                color: e ? 'always-white' : 'text-normal',
                                children: x.NW.string(x.t.GURBQk)
                            })
                        })
                    ]
                })
            ]
        })
    );
}

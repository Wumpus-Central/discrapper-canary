n.d(t, { Z: () => I });
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(704215),
    o = n(780384),
    c = n(481060),
    d = n(37234),
    u = n(410030),
    h = n(605236),
    m = n(626135),
    g = n(617136),
    x = n(497505),
    _ = n(341907),
    p = n(46140),
    E = n(981631),
    C = n(388032),
    N = n(403840),
    f = n(66094);
function I() {
    let e = (0, o.wj)((0, u.ZP)()),
        t = s.useMemo(() => ({ backgroundImage: 'url('.concat('https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png', ')') }), []),
        n = s.useCallback(() => {
            (0, d.xf)(),
                (0, _.navigateToQuestHome)(p.dr.USER_SETTINGS_GIFT_INVENTORY, x.jn.QUEST_HOME_MOVE_CALLOUT),
                m.default.track(E.rMx.QUEST_CONTENT_CLICKED, {
                    cta_name: g.jZ.VIEW_QUESTS,
                    ...(0, g.mH)(x.jn.QUEST_HOME_MOVE_CALLOUT)
                });
        }, []);
    return (
        s.useCallback(() => {
            (0, h.EW)(a.z.GIFT_INVENTORY_QUESTS_MOVED_TO_QUEST_HOME);
        }, []),
        (0, h.un)(a.z.GIFT_INVENTORY_QUESTS_MOVED_TO_QUEST_HOME),
        (0, i.jsxs)('div', {
            className: r()(N.container),
            style: t,
            children: [
                !1,
                (0, i.jsxs)('div', {
                    className: N.textContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: N.headerContainer,
                            children: [
                                (0, i.jsx)('img', {
                                    alt: '',
                                    src: f,
                                    className: N.icon
                                }),
                                (0, i.jsx)(c.X6q, {
                                    variant: 'heading-lg/bold',
                                    color: 'always-white',
                                    children: C.intl.string(C.t.z8YP2N)
                                })
                            ]
                        }),
                        (0, i.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            color: 'text-muted',
                            children: C.intl.string(C.t.IqmRZ2)
                        }),
                        (0, i.jsx)(c.zxk, {
                            size: 'large',
                            color: e ? c.Ttl.BRAND : c.Ttl.WHITE,
                            className: N.button,
                            onClick: n,
                            innerClassName: N.innerButton,
                            children: (0, i.jsx)(c.Text, {
                                variant: 'text-md/medium',
                                color: e ? 'always-white' : 'text-normal',
                                children: C.intl.string(C.t.GURBQk)
                            })
                        })
                    ]
                })
            ]
        })
    );
}

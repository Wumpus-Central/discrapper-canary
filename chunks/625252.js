n.d(t, { Z: () => N });
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(704215),
    o = n(780384),
    c = n(481060),
    d = n(37234),
    u = n(410030),
    m = n(605236),
    h = n(626135),
    g = n(617136),
    _ = n(497505),
    x = n(341907),
    p = n(46140),
    E = n(981631),
    C = n(388032),
    f = n(839905),
    T = n(66094);
function N() {
    let e = (0, o.wj)((0, u.ZP)()),
        t = s.useMemo(() => ({ backgroundImage: 'url('.concat('https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png', ')') }), []),
        n = s.useCallback(() => {
            (0, d.xf)(),
                (0, x.navigateToQuestHome)(p.dr.USER_SETTINGS_GIFT_INVENTORY, _.jn.QUEST_HOME_MOVE_CALLOUT),
                h.default.track(E.rMx.QUEST_CONTENT_CLICKED, {
                    cta_name: g.jZ.VIEW_QUESTS,
                    ...(0, g.mH)(_.jn.QUEST_HOME_MOVE_CALLOUT)
                });
        }, []);
    return (
        s.useCallback(() => {
            (0, m.EW)(a.z.GIFT_INVENTORY_QUESTS_MOVED_TO_QUEST_HOME);
        }, []),
        (0, m.un)(a.z.GIFT_INVENTORY_QUESTS_MOVED_TO_QUEST_HOME),
        (0, i.jsxs)('div', {
            className: l()(f.container),
            style: t,
            children: [
                !1,
                (0, i.jsxs)('div', {
                    className: f.textContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: f.headerContainer,
                            children: [
                                (0, i.jsx)('img', {
                                    alt: '',
                                    src: T,
                                    className: f.icon
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
                            className: f.button,
                            onClick: n,
                            innerClassName: f.innerButton,
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

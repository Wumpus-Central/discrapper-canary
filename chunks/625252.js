n.d(t, { Z: () => f });
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
    p = n(981631),
    E = n(388032),
    C = n(999426),
    N = n(66094);
function f() {
    let e = (0, o.wj)((0, u.ZP)()),
        t = s.useMemo(() => ({ backgroundImage: 'url('.concat('https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png', ')') }), []),
        n = s.useCallback(() => {
            (0, d.xf)(),
                (0, _.navigateToQuestHome)({ fromContent: x.jn.QUEST_HOME_MOVE_CALLOUT }),
                m.default.track(p.rMx.QUEST_CONTENT_CLICKED, {
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
            className: r()(C.container),
            style: t,
            children: [
                !1,
                (0, i.jsxs)('div', {
                    className: C.textContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: C.headerContainer,
                            children: [
                                (0, i.jsx)('img', {
                                    alt: '',
                                    src: N,
                                    className: C.icon
                                }),
                                (0, i.jsx)(c.X6q, {
                                    variant: 'heading-lg/bold',
                                    color: 'always-white',
                                    children: E.intl.string(E.t.z8YP2N)
                                })
                            ]
                        }),
                        (0, i.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            color: 'text-muted',
                            children: E.intl.string(E.t.IqmRZ2)
                        }),
                        (0, i.jsx)(c.zxk, {
                            size: 'large',
                            color: e ? c.Ttl.BRAND : c.Ttl.WHITE,
                            className: C.button,
                            onClick: n,
                            innerClassName: C.innerButton,
                            children: (0, i.jsx)(c.Text, {
                                variant: 'text-md/medium',
                                color: e ? 'always-white' : 'text-normal',
                                children: E.intl.string(E.t.GURBQk)
                            })
                        })
                    ]
                })
            ]
        })
    );
}

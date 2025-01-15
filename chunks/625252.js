n.d(t, {
    Z: function () {
        return S;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(704215),
    o = n(780384),
    c = n(481060),
    d = n(37234),
    u = n(410030),
    m = n(605236),
    g = n(626135),
    h = n(617136),
    p = n(497505),
    x = n(341907),
    f = n(46140),
    _ = n(981631),
    E = n(388032),
    C = n(209008),
    T = n(66094);
function S() {
    let e = (0, o.wj)((0, u.ZP)()),
        t = r.useMemo(() => ({ backgroundImage: 'url('.concat('https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png', ')') }), []),
        n = r.useCallback(() => {
            (0, d.xf)(),
                (0, x.navigateToQuestHome)(f.dr.USER_SETTINGS_GIFT_INVENTORY, p.jn.QUEST_HOME_MOVE_CALLOUT),
                g.default.track(_.rMx.QUEST_CONTENT_CLICKED, {
                    cta_name: h.jZ.VIEW_QUESTS,
                    ...(0, h.mH)(p.jn.QUEST_HOME_MOVE_CALLOUT)
                });
        }, []);
    return (
        r.useCallback(() => {
            (0, m.EW)(l.z.GIFT_INVENTORY_QUESTS_MOVED_TO_QUEST_HOME);
        }, []),
        (0, m.un)(l.z.GIFT_INVENTORY_QUESTS_MOVED_TO_QUEST_HOME),
        (0, i.jsxs)('div', {
            className: a()(C.container),
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
                                    src: T,
                                    className: C.icon
                                }),
                                (0, i.jsx)(c.Heading, {
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
                        (0, i.jsx)(c.Button, {
                            size: 'large',
                            color: e ? c.ButtonColors.BRAND : c.ButtonColors.WHITE,
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

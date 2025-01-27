n(610138), n(216116), n(78328), n(815648), n(47120), n(757143);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(512969),
    o = n(873546),
    c = n(442837),
    d = n(481060),
    u = n(570140),
    h = n(150063),
    m = n(529103),
    p = n(252618),
    g = n(313201),
    f = n(5254),
    _ = n(984370),
    E = n(518311),
    I = n(199104),
    C = n(922611),
    v = n(108427),
    N = n(210887),
    T = n(974042),
    S = n(849862),
    b = n(666286),
    A = n(596957),
    Z = n(981631),
    x = n(723359),
    L = n(388032),
    y = n(224602);
function P() {
    return (0, i.jsx)('div', {
        className: y.inviteToolbar,
        children: (0, i.jsx)(E.Z, { tooltip: L.intl.string(L.t.HfOgAw) })
    });
}
t.Z = function (e) {
    let { initialSection: t } = e,
        n = (0, C.Do)({ location: 'PeoplePage' }),
        l = (0, s.TH)(),
        E = (0, s.k6)();
    r.useEffect(() => {
        'true' === new URLSearchParams(l.search).get('confirm-age') &&
            u.Z.dispatch({
                type: 'AGE_GATE_MODAL_OPEN',
                source: x.L0.DEEP_LINK_PROMPT
            }).then(() => {
                E.replace(Z.Z5c.ME);
            });
    }, [E, l]),
        r.useEffect(() => {
            h.Y(Z.Z5c.FRIENDS), (0, v.e)('friends');
        }, []),
        r.useEffect(() => {
            null != t && m.Z.setInitialSection(t);
        }, [t]);
    let O = (0, c.e7)([N.Z], () => N.Z.theme),
        { section: R } = (0, c.cj)([T.ZP], () => T.ZP.getState()),
        j = (0, S.If)(),
        D = (0, c.e7)([f.Z], () => f.Z.getSuggestionCount()),
        M = (e) => {
            m.Z.setSection(e);
        },
        w = (0, g.Dt)(),
        k = (0, g.Dt)();
    return (0, i.jsxs)('main', {
        className: y.container,
        'aria-label': L.intl.string(L.t.TdEu5e),
        children: [
            (0, i.jsx)(p.yY, { location: L.intl.string(L.t.TdEu5e) }),
            (0, i.jsx)(d.ThemeProvider, {
                theme: O,
                children: (e) =>
                    (0, i.jsxs)(_.Z, {
                        className: e,
                        toolbar: (0, i.jsx)(P, {}),
                        scrollable: o.tq,
                        role: 'navigation',
                        'aria-labelledby': w,
                        children: [
                            (0, i.jsx)(_.Z.Icon, {
                                icon: d.FriendsIcon,
                                'aria-hidden': !0
                            }),
                            (0, i.jsx)(_.Z.Title, {
                                id: w,
                                children: L.intl.string(L.t.TdEu5e)
                            }),
                            (0, i.jsx)(_.Z.Divider, {}),
                            (0, i.jsxs)(d.TabBar, {
                                'aria-label': L.intl.string(L.t.TdEu5e),
                                selectedItem: R,
                                type: 'top-pill',
                                onItemSelect: M,
                                className: y.tabBar,
                                children: [
                                    (0, i.jsx)(d.TabBar.Item, {
                                        id: Z.pJs.ONLINE,
                                        className: y.item,
                                        children: L.intl.string(L.t.b9w3bG)
                                    }),
                                    (0, i.jsx)(d.TabBar.Item, {
                                        id: Z.pJs.ALL,
                                        className: y.item,
                                        children: L.intl.string(L.t.PfjFjY)
                                    }),
                                    (0, i.jsxs)(d.TabBar.Item, {
                                        id: Z.pJs.PENDING,
                                        className: y.item,
                                        'aria-label': L.intl.string(L.t.p6IHGB),
                                        children: [
                                            L.intl.string(L.t.p6IHGB),
                                            j > 0
                                                ? (0, i.jsx)(d.NumberBadge, {
                                                      count: j,
                                                      className: y.badge
                                                  })
                                                : null
                                        ]
                                    }),
                                    D > 0
                                        ? (0, i.jsxs)(d.TabBar.Item, {
                                              id: Z.pJs.SUGGESTIONS,
                                              className: y.item,
                                              'aria-label': L.intl.string(L.t['8rSi19']),
                                              children: [
                                                  L.intl.string(L.t['8rSi19']),
                                                  (0, i.jsx)(d.NumberBadge, {
                                                      count: D,
                                                      className: y.badge
                                                  })
                                              ]
                                          })
                                        : null,
                                    n
                                        ? null
                                        : (0, i.jsx)(d.TabBar.Item, {
                                              id: Z.pJs.BLOCKED,
                                              className: y.item,
                                              children: L.intl.string(L.t['4bDptL'])
                                          }),
                                    (0, i.jsx)(d.TabBar.Item, {
                                        'aria-label': L.intl.string(L.t.j0wbEx),
                                        className: a()(y.item, y.addFriend),
                                        id: Z.pJs.ADD_FRIEND,
                                        children: (0, i.jsx)('span', { children: L.intl.string(L.t.j0wbEx) })
                                    })
                                ]
                            })
                        ]
                    })
            }),
            (0, i.jsxs)('div', {
                className: y.tabBody,
                children: [
                    (0, i.jsx)(d.TabBar.Panel, {
                        id: R,
                        className: y.peopleColumn,
                        'aria-labelledby': k,
                        children: R === Z.pJs.ADD_FRIEND ? (0, i.jsx)(b.Z, {}) : (0, i.jsx)(A.Z, { titleId: k })
                    }),
                    (0, i.jsx)('div', {
                        className: y.nowPlayingColumn,
                        children: (0, i.jsx)(I.Z, {})
                    })
                ]
            })
        ]
    });
};

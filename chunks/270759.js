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
    N = n(108427),
    v = n(210887),
    S = n(974042),
    T = n(666286),
    b = n(596957),
    A = n(981631),
    Z = n(723359),
    x = n(388032),
    L = n(224602);
function P() {
    return (0, i.jsx)('div', {
        className: L.inviteToolbar,
        children: (0, i.jsx)(E.Z, { tooltip: x.intl.string(x.t.HfOgAw) })
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
                source: Z.L0.DEEP_LINK_PROMPT
            }).then(() => {
                E.replace(A.Z5c.ME);
            });
    }, [E, l]),
        r.useEffect(() => {
            h.Y(A.Z5c.FRIENDS), (0, N.e)('friends');
        }, []),
        r.useEffect(() => {
            null != t && m.Z.setInitialSection(t);
        }, [t]);
    let O = (0, c.e7)([v.Z], () => v.Z.theme),
        { section: y, pendingCount: R } = (0, c.cj)([S.ZP], () => S.ZP.getState()),
        j = (0, c.e7)([f.Z], () => f.Z.getSuggestionCount()),
        D = (e) => {
            m.Z.setSection(e);
        },
        M = (0, g.Dt)(),
        w = (0, g.Dt)();
    return (0, i.jsxs)('main', {
        className: L.container,
        'aria-label': x.intl.string(x.t.TdEu5e),
        children: [
            (0, i.jsx)(p.yY, { location: x.intl.string(x.t.TdEu5e) }),
            (0, i.jsx)(d.ThemeProvider, {
                theme: O,
                children: (e) =>
                    (0, i.jsxs)(_.Z, {
                        className: e,
                        toolbar: (0, i.jsx)(P, {}),
                        scrollable: o.tq,
                        role: 'navigation',
                        'aria-labelledby': M,
                        children: [
                            (0, i.jsx)(_.Z.Icon, {
                                icon: d.FriendsIcon,
                                'aria-hidden': !0
                            }),
                            (0, i.jsx)(_.Z.Title, {
                                id: M,
                                children: x.intl.string(x.t.TdEu5e)
                            }),
                            (0, i.jsx)(_.Z.Divider, {}),
                            (0, i.jsxs)(d.TabBar, {
                                'aria-label': x.intl.string(x.t.TdEu5e),
                                selectedItem: y,
                                type: 'top-pill',
                                onItemSelect: D,
                                className: L.tabBar,
                                children: [
                                    (0, i.jsx)(d.TabBar.Item, {
                                        id: A.pJs.ONLINE,
                                        className: L.item,
                                        children: x.intl.string(x.t.b9w3bG)
                                    }),
                                    (0, i.jsx)(d.TabBar.Item, {
                                        id: A.pJs.ALL,
                                        className: L.item,
                                        children: x.intl.string(x.t.PfjFjY)
                                    }),
                                    (0, i.jsxs)(d.TabBar.Item, {
                                        id: A.pJs.PENDING,
                                        className: L.item,
                                        'aria-label': x.intl.string(x.t.p6IHGB),
                                        children: [
                                            x.intl.string(x.t.p6IHGB),
                                            R > 0
                                                ? (0, i.jsx)(d.NumberBadge, {
                                                      count: R,
                                                      className: L.badge
                                                  })
                                                : null
                                        ]
                                    }),
                                    j > 0
                                        ? (0, i.jsxs)(d.TabBar.Item, {
                                              id: A.pJs.SUGGESTIONS,
                                              className: L.item,
                                              'aria-label': x.intl.string(x.t['8rSi19']),
                                              children: [
                                                  x.intl.string(x.t['8rSi19']),
                                                  (0, i.jsx)(d.NumberBadge, {
                                                      count: j,
                                                      className: L.badge
                                                  })
                                              ]
                                          })
                                        : null,
                                    n
                                        ? null
                                        : (0, i.jsx)(d.TabBar.Item, {
                                              id: A.pJs.BLOCKED,
                                              className: L.item,
                                              children: x.intl.string(x.t['4bDptL'])
                                          }),
                                    (0, i.jsx)(d.TabBar.Item, {
                                        'aria-label': x.intl.string(x.t.j0wbEx),
                                        className: a()(L.item, L.addFriend),
                                        id: A.pJs.ADD_FRIEND,
                                        children: (0, i.jsx)('span', { children: x.intl.string(x.t.j0wbEx) })
                                    })
                                ]
                            })
                        ]
                    })
            }),
            (0, i.jsxs)('div', {
                className: L.tabBody,
                children: [
                    (0, i.jsx)(d.TabBar.Panel, {
                        id: y,
                        className: L.peopleColumn,
                        'aria-labelledby': w,
                        children:
                            y === A.pJs.ADD_FRIEND
                                ? (0, i.jsx)(T.Z, {})
                                : (0, i.jsx)(b.Z, {
                                      titleId: w,
                                      sectionFilter: y
                                  })
                    }),
                    (0, i.jsx)('div', {
                        className: L.nowPlayingColumn,
                        children: (0, i.jsx)(I.Z, {})
                    })
                ]
            })
        ]
    });
};

n.d(t, { Z: () => R }), n(610138), n(216116), n(78328), n(815648), n(47120), n(757143);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(512969),
    o = n(873546),
    c = n(442837),
    d = n(481060),
    u = n(570140),
    h = n(150063),
    m = n(529103),
    p = n(252618),
    g = n(313201),
    _ = n(540059),
    f = n(5254),
    E = n(984370),
    I = n(518311),
    C = n(199104),
    N = n(922611),
    v = n(108427),
    T = n(210887),
    S = n(974042),
    A = n(849862),
    Z = n(666286),
    b = n(596957),
    x = n(981631),
    L = n(723359),
    y = n(388032),
    P = n(945133);
function O() {
    return (0, i.jsx)('div', {
        className: P.inviteToolbar,
        children: (0, i.jsx)(I.Z, { tooltip: y.intl.string(y.t.HfOgAw) })
    });
}
let R = function (e) {
    let { initialSection: t } = e,
        n = (0, N.Do)({ location: 'PeoplePage' }),
        r = (0, s.TH)(),
        I = (0, s.k6)(),
        R = (0, _.Q3)('PeoplePage');
    l.useEffect(() => {
        'true' === new URLSearchParams(r.search).get('confirm-age') &&
            u.Z.dispatch({
                type: 'AGE_GATE_MODAL_OPEN',
                source: L.L0.DEEP_LINK_PROMPT
            }).then(() => {
                I.replace(x.Z5c.ME);
            });
    }, [I, r]),
        l.useEffect(() => {
            h.Y(x.Z5c.FRIENDS), (0, v.e)('friends');
        }, []);
    let j = (0, c.e7)([T.Z], () => T.Z.theme),
        D = (0, A.If)(),
        { section: w, rows: M } = (0, c.cj)([S.ZP], () => S.ZP.getState()),
        k = (0, c.e7)([f.Z], () => f.Z.getSuggestionCount()),
        U = l.useMemo(() => M.getRelationshipCounts(), [M]);
    l.useEffect(() => {
        null != t && m.Z.setInitialSection(t), 0 === U[x.OGo.FRIEND] && 0 === U[x.OGo.PENDING_INCOMING] && 0 === U[x.OGo.PENDING_OUTGOING] && 0 === U[x.OGo.BLOCKED] && m.Z.setSection(x.pJs.ADD_FRIEND);
    }, [t, U]);
    let G = (e) => {
            m.Z.setSection(e);
        },
        B = (0, g.Dt)(),
        V = (0, g.Dt)(),
        H = [
            {
                id: x.pJs.ONLINE,
                show: !R || M.filter(x.pJs.ONLINE).length > 0,
                content: y.intl.string(y.t.b9w3bG),
                className: P.item
            },
            {
                id: x.pJs.ALL,
                show: !R || U[x.OGo.FRIEND] > 0,
                content: y.intl.string(y.t.PfjFjY),
                className: P.item
            },
            {
                id: x.pJs.PENDING,
                show: !R || M.filter(x.pJs.PENDING).length > 0,
                content: (0, i.jsxs)(i.Fragment, {
                    children: [
                        y.intl.string(y.t.p6IHGB),
                        D > 0 &&
                            (0, i.jsx)(d.mAB, {
                                count: D,
                                className: P.badge
                            })
                    ]
                }),
                ariaLabel: y.intl.formatToPlainString(y.t.OAC0Z2, { count: D.toString() }),
                className: P.item
            },
            {
                id: x.pJs.SUGGESTIONS,
                show: k > 0,
                content: (0, i.jsxs)(i.Fragment, {
                    children: [
                        y.intl.string(y.t['8rSi19']),
                        (0, i.jsx)(d.mAB, {
                            count: k,
                            className: P.badge
                        })
                    ]
                }),
                ariaLabel: y.intl.formatToPlainString(y.t.AbMQp6, { count: k.toString() }),
                className: P.item
            },
            {
                id: x.pJs.BLOCKED,
                show: R ? U[x.OGo.BLOCKED] > 0 && !n : !n,
                content: y.intl.string(y.t['4bDptL']),
                className: P.item
            },
            {
                id: x.pJs.ADD_FRIEND,
                show: !0,
                content: (0, i.jsx)('span', { children: y.intl.string(y.t.j0wbEx) }),
                ariaLabel: y.intl.string(y.t.j0wbEx),
                className: a()(P.item, P.addFriend)
            }
        ];
    return (0, i.jsxs)('main', {
        className: P.container,
        'aria-label': y.intl.string(y.t.TdEu5e),
        children: [
            (0, i.jsx)(p.yY, { location: y.intl.string(y.t.TdEu5e) }),
            (0, i.jsx)(d.f6W, {
                theme: j,
                children: (e) =>
                    (0, i.jsxs)(E.Z, {
                        className: e,
                        toolbar: (0, i.jsx)(O, {}),
                        scrollable: o.tq,
                        role: 'navigation',
                        'aria-labelledby': B,
                        children: [
                            (0, i.jsx)(E.Z.Icon, {
                                icon: d.iFz,
                                'aria-hidden': !0
                            }),
                            (0, i.jsx)(E.Z.Title, {
                                id: B,
                                children: y.intl.string(y.t.TdEu5e)
                            }),
                            (0, i.jsx)(E.Z.Divider, {}),
                            (0, i.jsx)(d.njP, {
                                'aria-label': y.intl.string(y.t.TdEu5e),
                                selectedItem: w,
                                type: 'top-pill',
                                onItemSelect: G,
                                className: P.tabBar,
                                children: H.filter((e) => e.show).map((e) =>
                                    (0, i.jsx)(
                                        d.njP.Item,
                                        {
                                            id: e.id,
                                            className: e.className,
                                            'aria-label': e.ariaLabel,
                                            children: e.content
                                        },
                                        e.id
                                    )
                                )
                            })
                        ]
                    })
            }),
            (0, i.jsxs)('div', {
                className: P.tabBody,
                children: [
                    (0, i.jsx)(d.njP.Panel, {
                        id: w,
                        className: P.peopleColumn,
                        'aria-labelledby': V,
                        children: w === x.pJs.ADD_FRIEND ? (0, i.jsx)(Z.Z, {}) : (0, i.jsx)(b.Z, { titleId: V })
                    }),
                    (0, i.jsx)('div', {
                        className: P.nowPlayingColumn,
                        children: (0, i.jsx)(C.Z, {})
                    })
                ]
            })
        ]
    });
};

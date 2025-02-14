n.d(t, { Z: () => R }), n(610138), n(216116), n(78328), n(815648), n(47120), n(757143);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(512969),
    o = n(873546),
    d = n(442837),
    c = n(481060),
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
    x = n(596957),
    b = n(981631),
    L = n(723359),
    y = n(388032),
    O = n(778639);
function P() {
    return (0, i.jsx)('div', {
        className: O.inviteToolbar,
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
                I.replace(b.Z5c.ME);
            });
    }, [I, r]),
        l.useEffect(() => {
            h.Y(b.Z5c.FRIENDS), (0, v.e)('friends');
        }, []);
    let j = (0, d.e7)([T.Z], () => T.Z.theme),
        D = (0, A.If)(),
        { section: w, rows: M } = (0, d.cj)([S.ZP], () => S.ZP.getState()),
        k = (0, d.e7)([f.Z], () => f.Z.getSuggestionCount()),
        U = l.useMemo(() => M.getRelationshipCounts(), [M]);
    l.useEffect(() => {
        null != t && m.Z.setInitialSection(t), 0 === U[b.OGo.FRIEND] && 0 === U[b.OGo.PENDING_INCOMING] && 0 === U[b.OGo.PENDING_OUTGOING] && 0 === U[b.OGo.BLOCKED] && m.Z.setSection(b.pJs.ADD_FRIEND);
    }, [t, U]);
    let G = (e) => {
            m.Z.setSection(e);
        },
        B = (0, g.Dt)(),
        V = (0, g.Dt)(),
        H = [
            {
                id: b.pJs.ONLINE,
                show: !R || M.filter(b.pJs.ONLINE).length > 0,
                content: y.intl.string(y.t.b9w3bG),
                className: O.item
            },
            {
                id: b.pJs.ALL,
                show: !R || U[b.OGo.FRIEND] > 0,
                content: y.intl.string(y.t.PfjFjY),
                className: O.item
            },
            {
                id: b.pJs.PENDING,
                show: !R || M.filter(b.pJs.PENDING).length > 0,
                content: (0, i.jsxs)(i.Fragment, {
                    children: [
                        y.intl.string(y.t.p6IHGB),
                        D > 0 &&
                            (0, i.jsx)(c.mAB, {
                                count: D,
                                className: O.badge
                            })
                    ]
                }),
                ariaLabel: y.intl.formatToPlainString(y.t.OAC0Z2, { count: D.toString() }),
                className: O.item
            },
            {
                id: b.pJs.SUGGESTIONS,
                show: k > 0,
                content: (0, i.jsxs)(i.Fragment, {
                    children: [
                        y.intl.string(y.t['8rSi19']),
                        (0, i.jsx)(c.mAB, {
                            count: k,
                            className: O.badge
                        })
                    ]
                }),
                ariaLabel: y.intl.formatToPlainString(y.t.AbMQp6, { count: k.toString() }),
                className: O.item
            },
            {
                id: b.pJs.BLOCKED,
                show: R ? U[b.OGo.BLOCKED] > 0 && !n : !n,
                content: y.intl.string(y.t['4bDptL']),
                className: O.item
            },
            {
                id: b.pJs.ADD_FRIEND,
                show: !0,
                content: (0, i.jsx)('span', { children: y.intl.string(y.t.j0wbEx) }),
                ariaLabel: y.intl.string(y.t.j0wbEx),
                className: a()(O.item, O.addFriend)
            }
        ];
    return (0, i.jsxs)('main', {
        className: O.container,
        'aria-label': y.intl.string(y.t.TdEu5e),
        children: [
            (0, i.jsx)(p.yY, { location: y.intl.string(y.t.TdEu5e) }),
            (0, i.jsx)(c.f6W, {
                theme: j,
                children: (e) =>
                    (0, i.jsxs)(E.Z, {
                        className: e,
                        toolbar: (0, i.jsx)(P, {}),
                        scrollable: o.tq,
                        role: 'navigation',
                        'aria-labelledby': B,
                        children: [
                            (0, i.jsx)(E.Z.Icon, {
                                icon: c.iFz,
                                'aria-hidden': !0
                            }),
                            (0, i.jsx)(E.Z.Title, {
                                id: B,
                                children: y.intl.string(y.t.TdEu5e)
                            }),
                            (0, i.jsx)(E.Z.Divider, {}),
                            (0, i.jsx)(c.njP, {
                                'aria-label': y.intl.string(y.t.TdEu5e),
                                selectedItem: w,
                                type: 'top-pill',
                                onItemSelect: G,
                                className: O.tabBar,
                                children: H.filter((e) => e.show).map((e) =>
                                    (0, i.jsx)(
                                        c.njP.Item,
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
                className: O.tabBody,
                children: [
                    (0, i.jsx)(c.njP.Panel, {
                        id: w,
                        className: O.peopleColumn,
                        'aria-labelledby': V,
                        children: w === b.pJs.ADD_FRIEND ? (0, i.jsx)(Z.Z, {}) : (0, i.jsx)(x.Z, { titleId: V })
                    }),
                    (0, i.jsx)('div', {
                        className: O.nowPlayingColumn,
                        children: (0, i.jsx)(C.Z, {})
                    })
                ]
            })
        ]
    });
};

n.d(t, { Z: () => Z }), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282), n(704826);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(114858),
    s = n(873546),
    c = n(442837),
    u = n(481060),
    d = n(570140),
    p = n(150063),
    h = n(529103),
    f = n(252618),
    g = n(313201),
    m = n(5254),
    b = n(984370),
    _ = n(518311),
    E = n(199104),
    O = n(108427),
    y = n(210887),
    I = n(974042),
    v = n(849862),
    C = n(666286),
    S = n(596957),
    N = n(981631),
    T = n(723359),
    P = n(388032),
    j = n(610725);
function A() {
    return (0, r.jsx)('div', {
        className: j.inviteToolbar,
        children: (0, r.jsx)(_.Z, {
            tooltip: P.intl.string(P.t.HfOgAw),
            location: 'PeoplePageHeaderToolbar-CreateDMButton'
        })
    });
}
let Z = function (e) {
    let { initialSection: t } = e,
        n = (0, o.TH)(),
        l = (0, o.k6)();
    i.useEffect(() => {
        'true' === new URLSearchParams(n.search).get('confirm-age') &&
            d.Z.dispatch({
                type: 'AGE_GATE_MODAL_OPEN',
                source: T.L0.DEEP_LINK_PROMPT
            }).then(() => {
                l.replace(N.Z5c.ME);
            });
    }, [l, n]),
        i.useEffect(() => {
            p.Y(N.Z5c.FRIENDS), (0, O.e)('friends');
        }, []);
    let _ = (0, c.e7)([y.Z], () => y.Z.theme),
        Z = (0, v.If)(),
        { section: x, rows: w } = (0, c.cj)([I.ZP], () => I.ZP.getState()),
        L = (0, c.e7)([m.Z], () => m.Z.getSuggestionCount()),
        R = i.useMemo(() => w.getRelationshipCounts(), [w]);
    i.useEffect(() => {
        null != t && h.Z.setInitialSection(t), 0 === R[N.OGo.FRIEND] && 0 === R[N.OGo.PENDING_INCOMING] && 0 === R[N.OGo.PENDING_OUTGOING] && 0 === R[N.OGo.BLOCKED] && h.Z.setSection(N.pJs.ADD_FRIEND);
    }, [t, R]);
    let D = (e) => {
            h.Z.setSection(e);
        },
        k = (0, g.Dt)(),
        M = (0, g.Dt)(),
        U = [
            {
                id: N.pJs.ONLINE,
                show: w.filter(N.pJs.ONLINE).length > 0,
                content: P.intl.string(P.t.b9w3bG),
                className: j.item
            },
            {
                id: N.pJs.ALL,
                show: R[N.OGo.FRIEND] > 0,
                content: P.intl.string(P.t.PfjFjY),
                className: j.item
            },
            {
                id: N.pJs.PENDING,
                show: w.filter(N.pJs.PENDING).length > 0,
                content: (0, r.jsxs)(r.Fragment, {
                    children: [
                        P.intl.string(P.t.p6IHGB),
                        Z > 0 &&
                            (0, r.jsx)(u.mAB, {
                                count: Z,
                                className: j.badge
                            })
                    ]
                }),
                ariaLabel: P.intl.formatToPlainString(P.t.OAC0Z2, { count: Z.toString() }),
                className: j.item
            },
            {
                id: N.pJs.SUGGESTIONS,
                show: L > 0,
                content: (0, r.jsxs)(r.Fragment, {
                    children: [
                        P.intl.string(P.t['8rSi19']),
                        (0, r.jsx)(u.mAB, {
                            count: L,
                            className: j.badge
                        })
                    ]
                }),
                ariaLabel: P.intl.formatToPlainString(P.t.AbMQp6, { count: L.toString() }),
                className: j.item
            },
            {
                id: N.pJs.ADD_FRIEND,
                show: !0,
                content: (0, r.jsx)('span', { children: P.intl.string(P.t.j0wbEx) }),
                ariaLabel: P.intl.string(P.t.j0wbEx),
                className: a()(j.item, j.addFriend)
            }
        ];
    return (0, r.jsxs)('main', {
        className: j.container,
        'aria-label': P.intl.string(P.t.TdEu5e),
        children: [
            (0, r.jsx)(f.yY, { location: P.intl.string(P.t.TdEu5e) }),
            (0, r.jsx)(u.f6W, {
                theme: _,
                children: (e) =>
                    (0, r.jsxs)(b.Z, {
                        className: e,
                        toolbar: (0, r.jsx)(A, {}),
                        scrollable: s.tq,
                        role: 'navigation',
                        'aria-labelledby': k,
                        children: [
                            (0, r.jsx)(b.Z.Icon, {
                                icon: u.iFz,
                                'aria-hidden': !0
                            }),
                            (0, r.jsx)(b.Z.Title, {
                                id: k,
                                children: P.intl.string(P.t.TdEu5e)
                            }),
                            (0, r.jsx)(b.Z.Divider, {}),
                            (0, r.jsx)(u.njP, {
                                'aria-label': P.intl.string(P.t.TdEu5e),
                                selectedItem: x,
                                type: 'top-pill',
                                onItemSelect: D,
                                className: j.tabBar,
                                children: U.filter((e) => e.show).map((e) =>
                                    (0, r.jsx)(
                                        u.njP.Item,
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
            (0, r.jsxs)('div', {
                className: j.tabBody,
                children: [
                    (0, r.jsx)(u.njP.Panel, {
                        id: x,
                        className: j.peopleColumn,
                        'aria-labelledby': M,
                        children: x === N.pJs.ADD_FRIEND ? (0, r.jsx)(C.Z, {}) : (0, r.jsx)(S.Z, { titleId: M })
                    }),
                    (0, r.jsx)('div', {
                        className: j.nowPlayingColumn,
                        children: (0, r.jsx)(E.Z, {})
                    })
                ]
            })
        ]
    });
};

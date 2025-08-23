n.d(t, { Z: () => x }), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282), n(704826);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(843611),
    s = n(442837),
    c = n(481060),
    u = n(570140),
    d = n(150063),
    p = n(529103),
    f = n(252618),
    h = n(313201),
    g = n(5254),
    m = n(984370),
    b = n(518311),
    _ = n(199104),
    O = n(108427),
    E = n(210887),
    y = n(974042),
    v = n(849862),
    I = n(666286),
    C = n(596957),
    S = n(981631),
    N = n(723359),
    T = n(388032),
    P = n(236202);
function j() {
    return (0, r.jsx)("div", {
        className: P.inviteToolbar,
        children: (0, r.jsx)(b.Z, {
            tooltip: T.intl.string(T.t.HfOgAw),
            location: "PeoplePageHeaderToolbar-CreateDMButton",
        }),
    });
}
let x = function (e) {
    let { initialSection: t } = e,
        n = (0, o.TH)(),
        l = (0, o.k6)();
    i.useEffect(() => {
        "true" === new URLSearchParams(n.search).get("confirm-age") &&
            u.Z.dispatch({
                type: "AGE_GATE_MODAL_OPEN",
                source: N.L0.DEEP_LINK_PROMPT,
            }).then(() => {
                l.replace(S.Z5c.ME);
            });
    }, [l, n]),
        i.useEffect(() => {
            d.Y(S.Z5c.FRIENDS), (0, O.e)("friends");
        }, []);
    let b = (0, s.e7)([E.Z], () => E.Z.theme),
        x = (0, v.If)(),
        { section: A, rows: Z } = (0, s.cj)([y.ZP], () => y.ZP.getState()),
        w = (0, s.e7)([g.Z], () => g.Z.getSuggestionCount()),
        L = i.useMemo(() => Z.getRelationshipCounts(), [Z]);
    i.useEffect(() => {
        null != t && p.Z.setInitialSection(t),
            0 === L[S.OGo.FRIEND] &&
                0 === L[S.OGo.PENDING_INCOMING] &&
                0 === L[S.OGo.PENDING_OUTGOING] &&
                0 === L[S.OGo.BLOCKED] &&
                p.Z.transitionToSection(S.pJs.ADD_FRIEND);
    }, [t, L]);
    let R = (e) => {
            p.Z.transitionToSection(e, { explicit: !0 });
        },
        D = (0, h.Dt)(),
        k = (0, h.Dt)(),
        M = [
            {
                id: S.pJs.ONLINE,
                show: Z.filter(S.pJs.ONLINE).length > 0,
                content: T.intl.string(T.t.b9w3bG),
                className: P.item,
            },
            {
                id: S.pJs.ALL,
                show: L[S.OGo.FRIEND] > 0,
                content: T.intl.string(T.t.PfjFjY),
                className: P.item,
            },
            {
                id: S.pJs.PENDING,
                show: Z.filter(S.pJs.PENDING).length > 0,
                content: (0, r.jsxs)(r.Fragment, {
                    children: [
                        T.intl.string(T.t.p6IHGB),
                        x > 0 &&
                            (0, r.jsx)(c.mAB, {
                                count: x,
                                className: P.badge,
                            }),
                    ],
                }),
                ariaLabel: T.intl.formatToPlainString(T.t.OAC0Z2, { count: x.toString() }),
                className: P.item,
            },
            {
                id: S.pJs.SUGGESTIONS,
                show: w > 0,
                content: (0, r.jsxs)(r.Fragment, {
                    children: [
                        T.intl.string(T.t["8rSi19"]),
                        (0, r.jsx)(c.mAB, {
                            count: w,
                            className: P.badge,
                        }),
                    ],
                }),
                ariaLabel: T.intl.formatToPlainString(T.t.AbMQp6, { count: w.toString() }),
                className: P.item,
            },
            {
                id: S.pJs.ADD_FRIEND,
                show: !0,
                content: (0, r.jsx)("span", { children: T.intl.string(T.t.j0wbEx) }),
                ariaLabel: T.intl.string(T.t.j0wbEx),
                className: a()(P.item, P.addFriend),
            },
        ];
    return (0, r.jsxs)("main", {
        className: P.container,
        "aria-label": T.intl.string(T.t.TdEu5e),
        children: [
            (0, r.jsx)(f.yY, { location: T.intl.string(T.t.TdEu5e) }),
            (0, r.jsx)(c.f6W, {
                theme: b,
                children: (e) =>
                    (0, r.jsxs)(m.Z, {
                        className: e,
                        toolbar: (0, r.jsx)(j, {}),
                        role: "navigation",
                        "aria-labelledby": D,
                        scrollable: !0,
                        children: [
                            (0, r.jsx)(m.Z.Icon, {
                                icon: c.iFz,
                                "aria-hidden": !0,
                            }),
                            (0, r.jsx)(m.Z.Title, {
                                id: D,
                                children: T.intl.string(T.t.TdEu5e),
                            }),
                            (0, r.jsx)(m.Z.Divider, {}),
                            (0, r.jsx)(c.njP, {
                                "aria-label": T.intl.string(T.t.TdEu5e),
                                selectedItem: A,
                                type: "top-pill",
                                onItemSelect: R,
                                className: P.tabBar,
                                children: M.filter((e) => e.show).map((e) =>
                                    (0, r.jsx)(
                                        c.njP.Item,
                                        {
                                            id: e.id,
                                            className: e.className,
                                            "aria-label": e.ariaLabel,
                                            children: e.content,
                                        },
                                        e.id,
                                    ),
                                ),
                            }),
                        ],
                    }),
            }),
            (0, r.jsxs)("div", {
                className: P.tabBody,
                children: [
                    (0, r.jsx)(c.njP.Panel, {
                        id: A,
                        className: P.peopleColumn,
                        "aria-labelledby": k,
                        children: A === S.pJs.ADD_FRIEND ? (0, r.jsx)(I.Z, {}) : (0, r.jsx)(C.Z, { titleId: k }),
                    }),
                    (0, r.jsx)("div", {
                        className: P.nowPlayingColumn,
                        children: (0, r.jsx)(_.Z, {}),
                    }),
                ],
            }),
        ],
    });
};

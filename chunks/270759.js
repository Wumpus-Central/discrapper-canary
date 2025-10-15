n.d(t, {
    F: () => A,
    Z: () => x,
}),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685),
    n(35282),
    n(704826);
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
    E = n(108427),
    O = n(210887),
    y = n(974042),
    v = n(365113),
    I = n(849862),
    C = n(666286),
    S = n(596957),
    T = n(981631),
    N = n(723359),
    P = n(388032),
    j = n(236202);
function A() {
    return (0, r.jsx)("div", {
        className: j.inviteToolbar,
        children: (0, r.jsx)(b.Z, {
            tooltip: P.intl.string(P.t.HfOgAw),
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
                l.replace(T.Z5c.ME);
            });
    }, [l, n]),
        i.useEffect(() => {
            d.Y(T.Z5c.FRIENDS), (0, E.e)("friends");
        }, []);
    let b = (0, s.e7)([O.Z], () => O.Z.theme),
        x = (0, I.If)(),
        { section: Z, rows: w } = (0, s.cj)([y.ZP], () => y.ZP.getState()),
        L = (0, s.e7)([g.Z], () => g.Z.getSuggestionCount()),
        R = i.useMemo(() => w.getRelationshipCounts(), [w]);
    i.useEffect(() => {
        null != t && p.Z.setInitialSection(t),
            0 === R[T.OGo.FRIEND] &&
                0 === R[T.OGo.PENDING_INCOMING] &&
                0 === R[T.OGo.PENDING_OUTGOING] &&
                0 === R[T.OGo.BLOCKED] &&
                p.Z.transitionToSection(T.pJs.ADD_FRIEND);
    }, [t, R]);
    let D = (e) => {
            p.Z.transitionToSection(e, { explicit: !0 });
        },
        k = (0, h.Dt)(),
        M = (0, h.Dt)(),
        U = [
            {
                id: T.pJs.ONLINE,
                show: w.filter(T.pJs.ONLINE).length > 0,
                content: P.intl.string(P.t.b9w3bG),
                className: j.item,
            },
            {
                id: T.pJs.ALL,
                show: R[T.OGo.FRIEND] > 0,
                content: P.intl.string(P.t.PfjFjY),
                className: j.item,
            },
            {
                id: T.pJs.PENDING,
                show: w.filter(T.pJs.PENDING).length > 0,
                content: (0, r.jsxs)(r.Fragment, {
                    children: [
                        P.intl.string(P.t.p6IHGB),
                        x > 0 &&
                            (0, r.jsx)(c.mAB, {
                                count: x,
                                className: j.badge,
                            }),
                    ],
                }),
                ariaLabel: P.intl.formatToPlainString(P.t.OAC0Z2, { count: x.toString() }),
                className: j.item,
            },
            {
                id: T.pJs.SUGGESTIONS,
                show: L > 0,
                content: (0, r.jsxs)(r.Fragment, {
                    children: [
                        P.intl.string(P.t["8rSi19"]),
                        (0, r.jsx)(c.mAB, {
                            count: L,
                            className: j.badge,
                        }),
                    ],
                }),
                ariaLabel: P.intl.formatToPlainString(P.t.AbMQp6, { count: L.toString() }),
                className: j.item,
            },
            {
                id: T.pJs.ADD_FRIEND,
                show: !0,
                content: (0, r.jsx)("span", { children: P.intl.string(P.t.j0wbEx) }),
                ariaLabel: P.intl.string(P.t.j0wbEx),
                className: a()(j.item, j.addFriend),
            },
        ],
        G = v.o.useConfig({ location: "people page" }).friendsTab,
        B = null,
        H = G
            ? null
            : (0, r.jsx)("div", {
                  className: j.nowPlayingColumn,
                  children: (0, r.jsx)(_.Z, {}),
              });
    return (
        (B = Z === T.pJs.ADD_FRIEND ? (0, r.jsx)(C.Z, {}) : (0, r.jsx)(S.Z, { titleId: M })),
        (0, r.jsxs)("main", {
            className: j.container,
            "aria-label": P.intl.string(P.t.TdEu5e),
            children: [
                (0, r.jsx)(f.yY, { location: P.intl.string(P.t.TdEu5e) }),
                (0, r.jsx)(c.f6W, {
                    theme: b,
                    children: (e) =>
                        (0, r.jsxs)(m.Z, {
                            className: e,
                            toolbar: (0, r.jsx)(A, {}),
                            role: "navigation",
                            "aria-labelledby": k,
                            scrollable: !0,
                            children: [
                                (0, r.jsx)(m.Z.Icon, {
                                    icon: c.iFz,
                                    "aria-hidden": !0,
                                }),
                                (0, r.jsx)(m.Z.Title, {
                                    id: k,
                                    children: P.intl.string(P.t.TdEu5e),
                                }),
                                (0, r.jsx)(m.Z.Divider, {}),
                                (0, r.jsx)(c.njP, {
                                    "aria-label": P.intl.string(P.t.TdEu5e),
                                    selectedItem: Z,
                                    type: "top-pill",
                                    onItemSelect: D,
                                    className: j.tabBar,
                                    children: U.filter((e) => e.show).map((e) =>
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
                    className: j.tabBody,
                    children: [
                        (0, r.jsx)(c.njP.Panel, {
                            id: Z,
                            className: j.peopleColumn,
                            "aria-labelledby": M,
                            children: B,
                        }),
                        H,
                    ],
                }),
            ],
        })
    );
};

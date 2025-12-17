n.d(t, {
    F: () => x,
    Z: () => A,
}),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685),
    n(35282),
    n(704826);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(828700),
    s = n(442837),
    c = n(481060),
    u = n(570140),
    d = n(150063),
    p = n(529103),
    f = n(252618),
    g = n(313201),
    h = n(5254),
    m = n(984370),
    b = n(518311),
    _ = n(199104),
    E = n(108427),
    O = n(210887),
    v = n(974042),
    y = n(365113),
    I = n(849862),
    C = n(666286),
    S = n(596957),
    T = n(981631),
    N = n(723359),
    j = n(388032),
    P = n(221534);
function x() {
    return (0, r.jsx)("div", {
        className: P.inviteToolbar,
        children: (0, r.jsx)(b.Z, {
            tooltip: j.intl.string(j.t["HfOgA/"]),
            location: "PeoplePageHeaderToolbar-CreateDMButton",
        }),
    });
}
let A = function (e) {
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
        A = (0, I.If)(),
        { section: Z, rows: w } = (0, s.cj)([v.ZP], () => v.ZP.getState()),
        L = (0, s.e7)([h.Z], () => h.Z.getSuggestionCount()),
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
        M = (0, g.Dt)(),
        k = (0, g.Dt)(),
        U = [
            {
                id: T.pJs.ONLINE,
                show: w.filter(T.pJs.ONLINE).length > 0,
                content: j.intl.string(j.t.b9w3bO),
                className: P.item,
            },
            {
                id: T.pJs.ALL,
                show: R[T.OGo.FRIEND] > 0,
                content: j.intl.string(j.t.PfjFjR),
                className: P.item,
            },
            {
                id: T.pJs.PENDING,
                show: w.filter(T.pJs.PENDING).length > 0,
                content: (0, r.jsxs)(r.Fragment, {
                    children: [
                        j.intl.string(j.t.p6IHGE),
                        A > 0 &&
                            (0, r.jsx)(c.mAB, {
                                count: A,
                                className: P.badge,
                            }),
                    ],
                }),
                ariaLabel: j.intl.formatToPlainString(j.t.OAC0Z4, { count: A.toString() }),
                className: P.item,
            },
            {
                id: T.pJs.SUGGESTIONS,
                show: L > 0,
                content: (0, r.jsxs)(r.Fragment, {
                    children: [
                        j.intl.string(j.t["8rSi1/"]),
                        (0, r.jsx)(c.mAB, {
                            count: L,
                            className: P.badge,
                        }),
                    ],
                }),
                ariaLabel: j.intl.formatToPlainString(j.t.AbMQp7, { count: L.toString() }),
                className: P.item,
            },
            {
                id: T.pJs.ADD_FRIEND,
                show: !0,
                content: (0, r.jsx)("span", { children: j.intl.string(j.t.j0wbE5) }),
                ariaLabel: j.intl.string(j.t.j0wbE5),
                className: a()(P.item, P.addFriend),
            },
        ],
        G = y.o.useConfig({ location: "people page" }).friendsTab,
        H = null,
        B = G
            ? null
            : (0, r.jsx)("div", {
                  className: P.nowPlayingColumn,
                  children: (0, r.jsx)(_.Z, {}),
              });
    return (
        (H = Z === T.pJs.ADD_FRIEND ? (0, r.jsx)(C.Z, {}) : (0, r.jsx)(S.Z, { titleId: k })),
        (0, r.jsxs)("main", {
            className: P.container,
            "aria-label": j.intl.string(j.t.TdEu5X),
            children: [
                (0, r.jsx)(f.yY, { location: j.intl.string(j.t.TdEu5X) }),
                (0, r.jsx)(c.f6W, {
                    theme: b,
                    children: (e) =>
                        (0, r.jsxs)(m.Z, {
                            className: e,
                            toolbar: (0, r.jsx)(x, {}),
                            role: "navigation",
                            "aria-labelledby": M,
                            scrollable: !0,
                            children: [
                                (0, r.jsx)(m.Z.Icon, {
                                    icon: c.iFz,
                                    "aria-hidden": !0,
                                }),
                                (0, r.jsx)(m.Z.Title, {
                                    id: M,
                                    children: j.intl.string(j.t.TdEu5X),
                                }),
                                (0, r.jsx)(m.Z.Divider, {}),
                                (0, r.jsx)(c.njP, {
                                    "aria-label": j.intl.string(j.t.TdEu5X),
                                    selectedItem: Z,
                                    type: "top-pill",
                                    onItemSelect: D,
                                    className: P.tabBar,
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
                    className: P.tabBody,
                    children: [
                        (0, r.jsx)(c.njP.Panel, {
                            id: Z,
                            className: P.peopleColumn,
                            "aria-labelledby": k,
                            children: H,
                        }),
                        B,
                    ],
                }),
            ],
        })
    );
};

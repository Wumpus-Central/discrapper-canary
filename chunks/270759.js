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
    v = n(974042),
    y = n(365113),
    I = n(849862),
    C = n(666286),
    S = n(596957),
    N = n(981631),
    T = n(723359),
    P = n(388032),
    j = n(236202);
function x() {
    return (0, r.jsx)("div", {
        className: j.inviteToolbar,
        children: (0, r.jsx)(b.Z, {
            tooltip: P.intl.string(P.t["HfOgA/"]),
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
                source: T.L0.DEEP_LINK_PROMPT,
            }).then(() => {
                l.replace(N.Z5c.ME);
            });
    }, [l, n]),
        i.useEffect(() => {
            d.Y(N.Z5c.FRIENDS), (0, E.e)("friends");
        }, []);
    let b = (0, s.e7)([O.Z], () => O.Z.theme),
        A = (0, I.If)(),
        { section: Z, rows: w } = (0, s.cj)([v.ZP], () => v.ZP.getState()),
        L = (0, s.e7)([g.Z], () => g.Z.getSuggestionCount()),
        R = i.useMemo(() => w.getRelationshipCounts(), [w]);
    i.useEffect(() => {
        null != t && p.Z.setInitialSection(t),
            0 === R[N.OGo.FRIEND] &&
                0 === R[N.OGo.PENDING_INCOMING] &&
                0 === R[N.OGo.PENDING_OUTGOING] &&
                0 === R[N.OGo.BLOCKED] &&
                p.Z.transitionToSection(N.pJs.ADD_FRIEND);
    }, [t, R]);
    let D = (e) => {
            p.Z.transitionToSection(e, { explicit: !0 });
        },
        M = (0, h.Dt)(),
        k = (0, h.Dt)(),
        U = [
            {
                id: N.pJs.ONLINE,
                show: w.filter(N.pJs.ONLINE).length > 0,
                content: P.intl.string(P.t.b9w3bO),
                className: j.item,
            },
            {
                id: N.pJs.ALL,
                show: R[N.OGo.FRIEND] > 0,
                content: P.intl.string(P.t.PfjFjR),
                className: j.item,
            },
            {
                id: N.pJs.PENDING,
                show: w.filter(N.pJs.PENDING).length > 0,
                content: (0, r.jsxs)(r.Fragment, {
                    children: [
                        P.intl.string(P.t.p6IHGE),
                        A > 0 &&
                            (0, r.jsx)(c.mAB, {
                                count: A,
                                className: j.badge,
                            }),
                    ],
                }),
                ariaLabel: P.intl.formatToPlainString(P.t.OAC0Z4, { count: A.toString() }),
                className: j.item,
            },
            {
                id: N.pJs.SUGGESTIONS,
                show: L > 0,
                content: (0, r.jsxs)(r.Fragment, {
                    children: [
                        P.intl.string(P.t["8rSi1/"]),
                        (0, r.jsx)(c.mAB, {
                            count: L,
                            className: j.badge,
                        }),
                    ],
                }),
                ariaLabel: P.intl.formatToPlainString(P.t.AbMQp7, { count: L.toString() }),
                className: j.item,
            },
            {
                id: N.pJs.ADD_FRIEND,
                show: !0,
                content: (0, r.jsx)("span", { children: P.intl.string(P.t.j0wbE5) }),
                ariaLabel: P.intl.string(P.t.j0wbE5),
                className: a()(j.item, j.addFriend),
            },
        ],
        G = y.o.useConfig({ location: "people page" }).friendsTab,
        B = null,
        H = G
            ? null
            : (0, r.jsx)("div", {
                  className: j.nowPlayingColumn,
                  children: (0, r.jsx)(_.Z, {}),
              });
    return (
        (B = Z === N.pJs.ADD_FRIEND ? (0, r.jsx)(C.Z, {}) : (0, r.jsx)(S.Z, { titleId: k })),
        (0, r.jsxs)("main", {
            className: j.container,
            "aria-label": P.intl.string(P.t.TdEu5X),
            children: [
                (0, r.jsx)(f.yY, { location: P.intl.string(P.t.TdEu5X) }),
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
                                    children: P.intl.string(P.t.TdEu5X),
                                }),
                                (0, r.jsx)(m.Z.Divider, {}),
                                (0, r.jsx)(c.njP, {
                                    "aria-label": P.intl.string(P.t.TdEu5X),
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
                            "aria-labelledby": k,
                            children: B,
                        }),
                        H,
                    ],
                }),
            ],
        })
    );
};

n.d(t, { Z: () => x }), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282), n(704826);
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
    m = n(5254),
    h = n(984370),
    b = n(518311),
    _ = n(199104),
    E = n(108427),
    O = n(210887),
    v = n(974042),
    y = n(849862),
    I = n(666286),
    C = n(596957),
    S = n(981631),
    T = n(723359),
    N = n(388032),
    j = n(221534);
function P() {
    return (0, r.jsx)("div", {
        className: j.inviteToolbar,
        children: (0, r.jsx)(b.Z, {
            tooltip: N.intl.string(N.t["HfOgA/"]),
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
                source: T.L0.DEEP_LINK_PROMPT,
            }).then(() => {
                l.replace(S.Z5c.ME);
            });
    }, [l, n]),
        i.useEffect(() => {
            d.Y(S.Z5c.FRIENDS), (0, E.e)("friends");
        }, []);
    let b = (0, s.e7)([O.Z], () => O.Z.theme),
        x = (0, y.If)(),
        { section: A, rows: Z } = (0, s.cj)([v.ZP], () => v.ZP.getState()),
        w = (0, s.e7)([m.Z], () => m.Z.getSuggestionCount()),
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
        D = (0, g.Dt)(),
        M = (0, g.Dt)(),
        k = [
            {
                id: S.pJs.ONLINE,
                show: Z.filter(S.pJs.ONLINE).length > 0,
                content: N.intl.string(N.t.b9w3bO),
                className: j.item,
            },
            {
                id: S.pJs.ALL,
                show: L[S.OGo.FRIEND] > 0,
                content: N.intl.string(N.t.PfjFjR),
                className: j.item,
            },
            {
                id: S.pJs.PENDING,
                show: Z.filter(S.pJs.PENDING).length > 0,
                content: (0, r.jsxs)(r.Fragment, {
                    children: [
                        N.intl.string(N.t.p6IHGE),
                        x > 0 &&
                            (0, r.jsx)(c.mAB, {
                                count: x,
                                className: j.badge,
                            }),
                    ],
                }),
                ariaLabel: N.intl.formatToPlainString(N.t.OAC0Z4, { count: x.toString() }),
                className: j.item,
            },
            {
                id: S.pJs.SUGGESTIONS,
                show: w > 0,
                content: (0, r.jsxs)(r.Fragment, {
                    children: [
                        N.intl.string(N.t["8rSi1/"]),
                        (0, r.jsx)(c.mAB, {
                            count: w,
                            className: j.badge,
                        }),
                    ],
                }),
                ariaLabel: N.intl.formatToPlainString(N.t.AbMQp7, { count: w.toString() }),
                className: j.item,
            },
            {
                id: S.pJs.ADD_FRIEND,
                show: !0,
                content: (0, r.jsx)("span", { children: N.intl.string(N.t.j0wbE5) }),
                ariaLabel: N.intl.string(N.t.j0wbE5),
                className: a()(j.item, j.addFriend),
            },
        ],
        U = null,
        G = (0, r.jsx)("div", {
            className: j.nowPlayingColumn,
            children: (0, r.jsx)(_.Z, {}),
        });
    return (
        (U = A === S.pJs.ADD_FRIEND ? (0, r.jsx)(I.Z, {}) : (0, r.jsx)(C.Z, { titleId: M })),
        (0, r.jsxs)("main", {
            className: j.container,
            "aria-label": N.intl.string(N.t.TdEu5X),
            children: [
                (0, r.jsx)(f.yY, { location: N.intl.string(N.t.TdEu5X) }),
                (0, r.jsx)(c.f6W, {
                    theme: b,
                    children: (e) =>
                        (0, r.jsxs)(h.Z, {
                            className: e,
                            toolbar: (0, r.jsx)(P, {}),
                            role: "navigation",
                            "aria-labelledby": D,
                            scrollable: !0,
                            children: [
                                (0, r.jsx)(h.Z.Icon, {
                                    icon: c.iFz,
                                    "aria-hidden": !0,
                                }),
                                (0, r.jsx)(h.Z.Title, {
                                    id: D,
                                    children: N.intl.string(N.t.TdEu5X),
                                }),
                                (0, r.jsx)(h.Z.Divider, {}),
                                (0, r.jsx)(c.njP, {
                                    "aria-label": N.intl.string(N.t.TdEu5X),
                                    selectedItem: A,
                                    type: "top-pill",
                                    onItemSelect: R,
                                    className: j.tabBar,
                                    children: k
                                        .filter((e) => e.show)
                                        .map((e) =>
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
                            id: A,
                            className: j.peopleColumn,
                            "aria-labelledby": M,
                            children: U,
                        }),
                        G,
                    ],
                }),
            ],
        })
    );
};

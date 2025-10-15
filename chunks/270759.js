n.d(t, { Z: () => Z }), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282), n(704826), n(290780);
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
    v = n(974042),
    y = n(365113),
    I = n(849862),
    C = n(666286),
    S = n(596957),
    T = n(576360),
    N = n(981631),
    j = n(723359),
    P = n(388032),
    x = n(236202);
function A() {
    return (0, r.jsx)("div", {
        className: x.inviteToolbar,
        children: (0, r.jsx)(b.Z, {
            tooltip: P.intl.string(P.t.HfOgAw),
            location: "PeoplePageHeaderToolbar-CreateDMButton",
        }),
    });
}
let Z = function (e) {
    let { initialSection: t } = e,
        n = (0, o.TH)(),
        l = (0, o.k6)();
    i.useEffect(() => {
        "true" === new URLSearchParams(n.search).get("confirm-age") &&
            u.Z.dispatch({
                type: "AGE_GATE_MODAL_OPEN",
                source: j.L0.DEEP_LINK_PROMPT,
            }).then(() => {
                l.replace(N.Z5c.ME);
            });
    }, [l, n]),
        i.useEffect(() => {
            d.Y(N.Z5c.FRIENDS), (0, O.e)("friends");
        }, []);
    let b = (0, s.e7)([E.Z], () => E.Z.theme),
        Z = (0, I.If)(),
        { section: w, rows: L } = (0, s.cj)([v.ZP], () => v.ZP.getState()),
        R = (0, s.e7)([g.Z], () => g.Z.getSuggestionCount()),
        D = i.useMemo(() => L.getRelationshipCounts(), [L]);
    i.useEffect(() => {
        null != t && p.Z.setInitialSection(t),
            0 === D[N.OGo.FRIEND] &&
                0 === D[N.OGo.PENDING_INCOMING] &&
                0 === D[N.OGo.PENDING_OUTGOING] &&
                0 === D[N.OGo.BLOCKED] &&
                p.Z.transitionToSection(N.pJs.ADD_FRIEND);
    }, [t, D]);
    let k = (e) => {
            p.Z.transitionToSection(e, { explicit: !0 });
        },
        M = (0, h.Dt)(),
        U = (0, h.Dt)(),
        G = [
            {
                id: N.pJs.ONLINE,
                show: L.filter(N.pJs.ONLINE).length > 0,
                content: P.intl.string(P.t.b9w3bG),
                className: x.item,
            },
            {
                id: N.pJs.ALL,
                show: D[N.OGo.FRIEND] > 0,
                content: P.intl.string(P.t.PfjFjY),
                className: x.item,
            },
            {
                id: N.pJs.PENDING,
                show: L.filter(N.pJs.PENDING).length > 0,
                content: (0, r.jsxs)(r.Fragment, {
                    children: [
                        P.intl.string(P.t.p6IHGB),
                        Z > 0 &&
                            (0, r.jsx)(c.mAB, {
                                count: Z,
                                className: x.badge,
                            }),
                    ],
                }),
                ariaLabel: P.intl.formatToPlainString(P.t.OAC0Z2, { count: Z.toString() }),
                className: x.item,
            },
            {
                id: N.pJs.SUGGESTIONS,
                show: R > 0,
                content: (0, r.jsxs)(r.Fragment, {
                    children: [
                        P.intl.string(P.t["8rSi19"]),
                        (0, r.jsx)(c.mAB, {
                            count: R,
                            className: x.badge,
                        }),
                    ],
                }),
                ariaLabel: P.intl.formatToPlainString(P.t.AbMQp6, { count: R.toString() }),
                className: x.item,
            },
            {
                id: N.pJs.ADD_FRIEND,
                show: !0,
                content: (0, r.jsx)("span", { children: P.intl.string(P.t.j0wbEx) }),
                ariaLabel: P.intl.string(P.t.j0wbEx),
                className: a()(x.item, x.addFriend),
            },
        ],
        B = y.o.useConfig({ location: "friendstore" }).landOnProfilePage;
    B &&
        G.unshift({
            id: N.pJs.YOU,
            show: !0,
            content: P.intl.string(P.t.LuZzxs),
            className: x.item,
        });
    let H = null,
        V = (0, r.jsx)("div", {
            className: x.nowPlayingColumn,
            children: (0, r.jsx)(_.Z, {}),
        });
    return (
        w === N.pJs.ADD_FRIEND
            ? (H = (0, r.jsx)(C.Z, {}))
            : w === N.pJs.YOU
              ? B
                  ? (H = (0, r.jsx)(T.Z, {}))
                  : ((H = (0, r.jsx)(c.Ttm, {
                        className: x.nowPlayingFullWidth,
                        children: (0, r.jsx)("div", {
                            style: { maxWidth: 600 },
                            children: (0, r.jsx)(_.Z, {}),
                        }),
                    })),
                    (V = null))
              : (H = (0, r.jsx)(S.Z, { titleId: U })),
        (0, r.jsxs)("main", {
            className: x.container,
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
                            "aria-labelledby": M,
                            scrollable: !0,
                            children: [
                                (0, r.jsx)(m.Z.Icon, {
                                    icon: c.iFz,
                                    "aria-hidden": !0,
                                }),
                                (0, r.jsx)(m.Z.Title, {
                                    id: M,
                                    children: P.intl.string(P.t.TdEu5e),
                                }),
                                (0, r.jsx)(m.Z.Divider, {}),
                                (0, r.jsx)(c.njP, {
                                    "aria-label": P.intl.string(P.t.TdEu5e),
                                    selectedItem: w,
                                    type: "top-pill",
                                    onItemSelect: k,
                                    className: x.tabBar,
                                    children: G.filter((e) => e.show).map((e) =>
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
                    className: x.tabBody,
                    children: [
                        (0, r.jsx)(c.njP.Panel, {
                            id: w,
                            className: x.peopleColumn,
                            "aria-labelledby": U,
                            children: H,
                        }),
                        V,
                    ],
                }),
            ],
        })
    );
};

n.d(t, {
    A: () => x,
}),
    n(896048),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(747238),
    n(812715);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(960488),
    o = n(311907),
    c = n(397927),
    u = n(73153),
    d = n(944791),
    p = n(711950),
    f = n(726249),
    h = n(915089),
    A = n(346084),
    g = n(742589),
    m = n(95550),
    b = n(608881),
    _ = n(210714),
    E = n(544028),
    O = n(595623),
    y = n(912309),
    I = n(662074),
    v = n(265990),
    S = n(652215),
    C = n(204925),
    N = n(985018),
    T = n(790367);

function j() {
    return (0, r.jsx)("div", {
        className: T.N3,
        children: (0, r.jsx)(m.A, {
            tooltip: N.intl.string(N.t["HfOgA/"]),
        }),
    });
}
let x = function (e) {
    let { initialSection: t } = e,
        n = (0, s.zy)(),
        l = (0, s.W6)();
    i.useEffect(() => {
        "true" === new URLSearchParams(n.search).get("confirm-age") &&
            u.h
                .dispatch({
                    type: "AGE_GATE_MODAL_OPEN",
                    source: C.w_.DEEP_LINK_PROMPT,
                })
                .then(() => {
                    l.replace(S.BVt.ME);
                });
    }, [l, n]),
        i.useEffect(() => {
            d.I(S.BVt.FRIENDS), (0, _.d)("friends");
        }, []);
    let m = (0, o.bG)([E.A], () => E.A.theme),
        x = (0, y.kX)(),
        { section: P, rows: w } = (0, o.cf)([O.Ay], () => O.Ay.getState()),
        L = (0, o.bG)([A.A], () => A.A.getSuggestionCount()),
        R = i.useMemo(() => w.getRelationshipCounts(), [w]);
    i.useEffect(() => {
        null != t && p.A.setInitialSection(t),
            0 === R[S.eA$.FRIEND] &&
                0 === R[S.eA$.PENDING_INCOMING] &&
                0 === R[S.eA$.PENDING_OUTGOING] &&
                0 === R[S.eA$.BLOCKED] &&
                p.A.transitionToSection(S.m3P.ADD_FRIEND);
    }, [t, R]);
    let D = (e) => {
            p.A.transitionToSection(e, {
                explicit: !0,
            });
        },
        M = (0, h.GV)(),
        k = (0, h.GV)(),
        U = [
            {
                id: S.m3P.ONLINE,
                show: w.filter(S.m3P.ONLINE).length > 0,
                content: N.intl.string(N.t.b9w3bO),
                className: T.AS,
            },
            {
                id: S.m3P.ALL,
                show: R[S.eA$.FRIEND] > 0,
                content: N.intl.string(N.t.PfjFjR),
                className: T.AS,
            },
            {
                id: S.m3P.PENDING,
                show: w.filter(S.m3P.PENDING).length > 0,
                content: (0, r.jsxs)(r.Fragment, {
                    children: [
                        N.intl.string(N.t.p6IHGE),
                        x > 0 &&
                            (0, r.jsx)(c.hVq, {
                                count: x,
                                className: T.qS,
                            }),
                    ],
                }),
                ariaLabel: N.intl.formatToPlainString(N.t.OAC0Z4, {
                    count: x.toString(),
                }),
                className: T.AS,
            },
            {
                id: S.m3P.SUGGESTIONS,
                show: L > 0,
                content: (0, r.jsxs)(r.Fragment, {
                    children: [
                        N.intl.string(N.t["8rSi1/"]),
                        (0, r.jsx)(c.hVq, {
                            count: L,
                            className: T.qS,
                        }),
                    ],
                }),
                ariaLabel: N.intl.formatToPlainString(N.t.AbMQp7, {
                    count: L.toString(),
                }),
                className: T.AS,
            },
            {
                id: S.m3P.ADD_FRIEND,
                show: !0,
                content: (0, r.jsx)("span", {
                    children: N.intl.string(N.t.j0wbE5),
                }),
                ariaLabel: N.intl.string(N.t.j0wbE5),
                className: a()(T.AS, T.GU),
            },
        ],
        G = null,
        V = (0, r.jsx)("div", {
            className: T.Xl,
            children: (0, r.jsx)(b.A, {}),
        });
    return (
        (G =
            P === S.m3P.ADD_FRIEND
                ? (0, r.jsx)(I.A, {})
                : (0, r.jsx)(v.A, {
                      titleId: k,
                  })),
        (0, r.jsxs)("main", {
            className: T.kL,
            "aria-label": N.intl.string(N.t.TdEu5X),
            children: [
                (0, r.jsx)(f.HI, {
                    location: N.intl.string(N.t.TdEu5X),
                }),
                (0, r.jsx)(c.NPJ, {
                    theme: m,
                    children: (e) =>
                        (0, r.jsxs)(g.A, {
                            className: e,
                            toolbar: (0, r.jsx)(j, {}),
                            role: "navigation",
                            "aria-labelledby": M,
                            scrollable: !0,
                            children: [
                                (0, r.jsx)(g.A.Icon, {
                                    icon: c.$yI,
                                    "aria-hidden": !0,
                                }),
                                (0, r.jsx)(g.A.Title, {
                                    id: M,
                                    children: N.intl.string(N.t.TdEu5X),
                                }),
                                (0, r.jsx)(g.A.Divider, {}),
                                (0, r.jsx)(c.VQ0, {
                                    "aria-label": N.intl.string(N.t.TdEu5X),
                                    selectedItem: P,
                                    type: "top-pill",
                                    onItemSelect: D,
                                    className: T.$H,
                                    children: U.filter((e) => e.show).map((e) =>
                                        (0, r.jsx)(
                                            c.VQ0.Item,
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
                    className: T.MJ,
                    children: [
                        (0, r.jsx)(c.VQ0.Panel, {
                            id: P,
                            className: T.UL,
                            "aria-labelledby": k,
                            children: G,
                        }),
                        V,
                    ],
                }),
            ],
        })
    );
};

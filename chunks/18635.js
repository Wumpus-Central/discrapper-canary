n.r(t), n.d(t, { HeaderToolbar: () => R, default: () => D }), n(323874), n(14289), n(35956);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(873263),
    o = n(311907),
    c = n(777666),
    d = n(43990),
    u = n(214947),
    m = n(761508),
    A = n(73153),
    h = n(944791),
    x = n(711950),
    p = n(726249),
    g = n(915089),
    N = n(346084),
    f = n(742589),
    _ = n(95550),
    I = n(608881),
    v = n(210714),
    j = n(544028),
    C = n(595623),
    y = n(912309),
    S = n(662074),
    E = n(265990),
    T = n(652215),
    b = n(204925),
    P = n(985018),
    L = n(465158);
function R() {
    return (0, i.jsx)("div", {
        className: L.N3,
        children: (0, i.jsx)(_.Ay, { tooltip: P.intl.string(P.t["HfOgA/"]) }),
    });
}
let D = function (e) {
    let { initialSection: t } = e,
        n = (0, r.zy)(),
        l = (0, r.W6)();
    s.useEffect(() => {
        "true" === new URLSearchParams(n.search).get("confirm-age") &&
            A.h.dispatch({ type: "AGE_GATE_MODAL_OPEN", source: b.w_.DEEP_LINK_PROMPT }).then(() => {
                l.replace(T.BVt.ME);
            });
    }, [l, n]),
        s.useEffect(() => {
            h.I(T.BVt.FRIENDS), (0, v.d)("friends");
        }, []);
    let _ = (0, o.bG)([j.A], () => j.A.theme),
        D = (0, y.kX)(),
        { section: O, rows: k } = (0, o.cf)([C.Ay], () => C.Ay.getState()),
        F = (0, o.bG)([N.A], () => N.A.getSuggestionCount()),
        w = s.useMemo(() => k.getRelationshipCounts(), [k]);
    s.useEffect(() => {
        null != t && x.A.setInitialSection(t),
            0 === w[T.eA$.FRIEND] &&
                0 === w[T.eA$.PENDING_INCOMING] &&
                0 === w[T.eA$.PENDING_OUTGOING] &&
                0 === w[T.eA$.BLOCKED] &&
                x.A.transitionToSection(T.m3P.ADD_FRIEND);
    }, [t, w]);
    let G = (e) => {
            x.A.transitionToSection(e, { explicit: !0 });
        },
        M = (0, g.GV)(),
        U = (0, g.GV)(),
        V = [
            {
                id: T.m3P.ONLINE,
                show: k.filter(T.m3P.ONLINE).length > 0,
                content: P.intl.string(P.t.b9w3bO),
                className: L.AS,
            },
            { id: T.m3P.ALL, show: w[T.eA$.FRIEND] > 0, content: P.intl.string(P.t.PfjFjR), className: L.AS },
            {
                id: T.m3P.PENDING,
                show: k.filter(T.m3P.PENDING).length > 0,
                content: (0, i.jsxs)(i.Fragment, {
                    children: [P.intl.string(P.t.p6IHGE), D > 0 && (0, i.jsx)(c.hV, { count: D, className: L.qS })],
                }),
                ariaLabel: P.intl.formatToPlainString(P.t.OAC0Z4, { count: D.toString() }),
                className: L.AS,
            },
            {
                id: T.m3P.SUGGESTIONS,
                show: F > 0,
                content: (0, i.jsxs)(i.Fragment, {
                    children: [P.intl.string(P.t["8rSi1/"]), (0, i.jsx)(c.hV, { count: F, className: L.qS })],
                }),
                ariaLabel: P.intl.formatToPlainString(P.t.AbMQp7, { count: F.toString() }),
                className: L.AS,
            },
            {
                id: T.m3P.ADD_FRIEND,
                show: !0,
                content: (0, i.jsx)("span", { children: P.intl.string(P.t.j0wbE5) }),
                ariaLabel: P.intl.string(P.t.j0wbE5),
                className: a()(L.AS, L.GU),
            },
        ],
        Y = null,
        $ = (0, i.jsx)("div", { className: L.Xl, children: (0, i.jsx)(I.A, {}) });
    return (
        (Y = O === T.m3P.ADD_FRIEND ? (0, i.jsx)(S.A, {}) : (0, i.jsx)(E.A, { titleId: U })),
        (0, i.jsxs)("main", {
            className: L.kL,
            "aria-label": P.intl.string(P.t.TdEu5X),
            children: [
                (0, i.jsx)(p.HI, { location: P.intl.string(P.t.TdEu5X) }),
                (0, i.jsx)(d.N, {
                    theme: _,
                    children: (e) =>
                        (0, i.jsxs)(f.A, {
                            className: e,
                            toolbar: (0, i.jsx)(R, {}),
                            role: "navigation",
                            "aria-labelledby": M,
                            scrollable: !0,
                            children: [
                                (0, i.jsx)(f.A.Icon, { icon: u.$, "aria-hidden": !0 }),
                                (0, i.jsx)(f.A.Title, { id: M, children: P.intl.string(P.t.TdEu5X) }),
                                (0, i.jsx)(f.A.Divider, {}),
                                (0, i.jsx)(m.V, {
                                    "aria-label": P.intl.string(P.t.TdEu5X),
                                    selectedItem: O,
                                    type: "top-pill",
                                    onItemSelect: G,
                                    className: L.$H,
                                    children: V.filter((e) => e.show).map((e) =>
                                        (0, i.jsx)(
                                            m.V.Item,
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
                (0, i.jsxs)("div", {
                    className: L.MJ,
                    children: [(0, i.jsx)(m.V.Panel, { id: O, className: L.UL, "aria-labelledby": U, children: Y }), $],
                }),
            ],
        })
    );
};

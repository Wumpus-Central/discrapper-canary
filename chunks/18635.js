n.d(t, { A: () => L }), n(323874), n(14289), n(35956);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(873263),
    o = n(311907),
    d = n(397927),
    c = n(73153),
    u = n(944791),
    A = n(711950),
    h = n(726249),
    _ = n(915089),
    m = n(346084),
    p = n(742589),
    g = n(95550),
    E = n(608881),
    I = n(210714),
    f = n(544028),
    C = n(595623),
    T = n(912309),
    N = n(662074),
    S = n(265990),
    v = n(652215),
    x = n(204925),
    y = n(985018),
    b = n(10581);
function O() {
    return (0, i.jsx)("div", {
        className: b.N3,
        children: (0, i.jsx)(g.Ay, { tooltip: y.intl.string(y.t["HfOgA/"]) }),
    });
}
let L = function (e) {
    let { initialSection: t } = e,
        n = (0, s.zy)(),
        a = (0, s.W6)();
    r.useEffect(() => {
        "true" === new URLSearchParams(n.search).get("confirm-age") &&
            c.h.dispatch({ type: "AGE_GATE_MODAL_OPEN", source: x.w_.DEEP_LINK_PROMPT }).then(() => {
                a.replace(v.BVt.ME);
            });
    }, [a, n]),
        r.useEffect(() => {
            u.I(v.BVt.FRIENDS), (0, I.d)("friends");
        }, []);
    let g = (0, o.bG)([f.A], () => f.A.theme),
        L = (0, T.kX)(),
        { section: R, rows: P } = (0, o.cf)([C.Ay], () => C.Ay.getState()),
        D = (0, o.bG)([m.A], () => m.A.getSuggestionCount()),
        M = r.useMemo(() => P.getRelationshipCounts(), [P]);
    r.useEffect(() => {
        null != t && A.A.setInitialSection(t),
            0 === M[v.eA$.FRIEND] &&
                0 === M[v.eA$.PENDING_INCOMING] &&
                0 === M[v.eA$.PENDING_OUTGOING] &&
                0 === M[v.eA$.BLOCKED] &&
                A.A.transitionToSection(v.m3P.ADD_FRIEND);
    }, [t, M]);
    let j = (e) => {
            A.A.transitionToSection(e, { explicit: !0 });
        },
        w = (0, _.GV)(),
        U = (0, _.GV)(),
        G = [
            {
                id: v.m3P.ONLINE,
                show: P.filter(v.m3P.ONLINE).length > 0,
                content: y.intl.string(y.t.b9w3bO),
                className: b.AS,
            },
            { id: v.m3P.ALL, show: M[v.eA$.FRIEND] > 0, content: y.intl.string(y.t.PfjFjR), className: b.AS },
            {
                id: v.m3P.PENDING,
                show: P.filter(v.m3P.PENDING).length > 0,
                content: (0, i.jsxs)(i.Fragment, {
                    children: [y.intl.string(y.t.p6IHGE), L > 0 && (0, i.jsx)(d.hVq, { count: L, className: b.qS })],
                }),
                ariaLabel: y.intl.formatToPlainString(y.t.OAC0Z4, { count: L.toString() }),
                className: b.AS,
            },
            {
                id: v.m3P.SUGGESTIONS,
                show: D > 0,
                content: (0, i.jsxs)(i.Fragment, {
                    children: [y.intl.string(y.t["8rSi1/"]), (0, i.jsx)(d.hVq, { count: D, className: b.qS })],
                }),
                ariaLabel: y.intl.formatToPlainString(y.t.AbMQp7, { count: D.toString() }),
                className: b.AS,
            },
            {
                id: v.m3P.ADD_FRIEND,
                show: !0,
                content: (0, i.jsx)("span", { children: y.intl.string(y.t.j0wbE5) }),
                ariaLabel: y.intl.string(y.t.j0wbE5),
                className: l()(b.AS, b.GU),
            },
        ],
        k = null,
        V = (0, i.jsx)("div", { className: b.Xl, children: (0, i.jsx)(E.A, {}) });
    return (
        (k = R === v.m3P.ADD_FRIEND ? (0, i.jsx)(N.A, {}) : (0, i.jsx)(S.A, { titleId: U })),
        (0, i.jsxs)("main", {
            className: b.kL,
            "aria-label": y.intl.string(y.t.TdEu5X),
            children: [
                (0, i.jsx)(h.HI, { location: y.intl.string(y.t.TdEu5X) }),
                (0, i.jsx)(d.NPJ, {
                    theme: g,
                    children: (e) =>
                        (0, i.jsxs)(p.A, {
                            className: e,
                            toolbar: (0, i.jsx)(O, {}),
                            role: "navigation",
                            "aria-labelledby": w,
                            scrollable: !0,
                            children: [
                                (0, i.jsx)(p.A.Icon, { icon: d.$yI, "aria-hidden": !0 }),
                                (0, i.jsx)(p.A.Title, { id: w, children: y.intl.string(y.t.TdEu5X) }),
                                (0, i.jsx)(p.A.Divider, {}),
                                (0, i.jsx)(d.VQ0, {
                                    "aria-label": y.intl.string(y.t.TdEu5X),
                                    selectedItem: R,
                                    type: "top-pill",
                                    onItemSelect: j,
                                    className: b.$H,
                                    children: G.filter((e) => e.show).map((e) =>
                                        (0, i.jsx)(
                                            d.VQ0.Item,
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
                    className: b.MJ,
                    children: [
                        (0, i.jsx)(d.VQ0.Panel, { id: R, className: b.UL, "aria-labelledby": U, children: k }),
                        V,
                    ],
                }),
            ],
        })
    );
};

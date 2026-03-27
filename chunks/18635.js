n.d(t, { A: () => L }), n(323874), n(14289), n(35956);
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(873263),
    o = n(311907),
    d = n(397927),
    c = n(73153),
    u = n(944791),
    A = n(711950),
    h = n(726249),
    _ = n(915089),
    m = n(346084),
    g = n(742589),
    p = n(95550),
    E = n(608881),
    I = n(210714),
    f = n(544028),
    C = n(595623),
    T = n(912309),
    N = n(662074),
    S = n(265990),
    x = n(652215),
    v = n(204925),
    y = n(985018),
    b = n(10581);
function O() {
    return (0, i.jsx)("div", {
        className: b.N3,
        children: (0, i.jsx)(p.Ay, { tooltip: y.intl.string(y.t["HfOgA/"]) }),
    });
}
let L = function (e) {
    let { initialSection: t } = e,
        n = (0, s.zy)(),
        l = (0, s.W6)();
    a.useEffect(() => {
        "true" === new URLSearchParams(n.search).get("confirm-age") &&
            c.h.dispatch({ type: "AGE_GATE_MODAL_OPEN", source: v.w_.DEEP_LINK_PROMPT }).then(() => {
                l.replace(x.BVt.ME);
            });
    }, [l, n]),
        a.useEffect(() => {
            u.I(x.BVt.FRIENDS), (0, I.d)("friends");
        }, []);
    let p = (0, o.bG)([f.A], () => f.A.theme),
        L = (0, T.kX)(),
        { section: R, rows: P } = (0, o.cf)([C.Ay], () => C.Ay.getState()),
        D = (0, o.bG)([m.A], () => m.A.getSuggestionCount()),
        M = a.useMemo(() => P.getRelationshipCounts(), [P]);
    a.useEffect(() => {
        null != t && A.A.setInitialSection(t),
            0 === M[x.eA$.FRIEND] &&
                0 === M[x.eA$.PENDING_INCOMING] &&
                0 === M[x.eA$.PENDING_OUTGOING] &&
                0 === M[x.eA$.BLOCKED] &&
                A.A.transitionToSection(x.m3P.ADD_FRIEND);
    }, [t, M]);
    let j = (e) => {
            A.A.transitionToSection(e, { explicit: !0 });
        },
        w = (0, _.GV)(),
        U = (0, _.GV)(),
        G = [
            {
                id: x.m3P.ONLINE,
                show: P.filter(x.m3P.ONLINE).length > 0,
                content: y.intl.string(y.t.b9w3bO),
                className: b.AS,
            },
            { id: x.m3P.ALL, show: M[x.eA$.FRIEND] > 0, content: y.intl.string(y.t.PfjFjR), className: b.AS },
            {
                id: x.m3P.PENDING,
                show: P.filter(x.m3P.PENDING).length > 0,
                content: (0, i.jsxs)(i.Fragment, {
                    children: [y.intl.string(y.t.p6IHGE), L > 0 && (0, i.jsx)(d.hVq, { count: L, className: b.qS })],
                }),
                ariaLabel: y.intl.formatToPlainString(y.t.OAC0Z4, { count: L.toString() }),
                className: b.AS,
            },
            {
                id: x.m3P.SUGGESTIONS,
                show: D > 0,
                content: (0, i.jsxs)(i.Fragment, {
                    children: [y.intl.string(y.t["8rSi1/"]), (0, i.jsx)(d.hVq, { count: D, className: b.qS })],
                }),
                ariaLabel: y.intl.formatToPlainString(y.t.AbMQp7, { count: D.toString() }),
                className: b.AS,
            },
            {
                id: x.m3P.ADD_FRIEND,
                show: !0,
                content: (0, i.jsx)("span", { children: y.intl.string(y.t.j0wbE5) }),
                ariaLabel: y.intl.string(y.t.j0wbE5),
                className: r()(b.AS, b.GU),
            },
        ],
        k = null,
        V = (0, i.jsx)("div", { className: b.Xl, children: (0, i.jsx)(E.A, {}) });
    return (
        (k = R === x.m3P.ADD_FRIEND ? (0, i.jsx)(N.A, {}) : (0, i.jsx)(S.A, { titleId: U })),
        (0, i.jsxs)("main", {
            className: b.kL,
            "aria-label": y.intl.string(y.t.TdEu5X),
            children: [
                (0, i.jsx)(h.HI, { location: y.intl.string(y.t.TdEu5X) }),
                (0, i.jsx)(d.NPJ, {
                    theme: p,
                    children: (e) =>
                        (0, i.jsxs)(g.A, {
                            className: e,
                            toolbar: (0, i.jsx)(O, {}),
                            role: "navigation",
                            "aria-labelledby": w,
                            scrollable: !0,
                            children: [
                                (0, i.jsx)(g.A.Icon, { icon: d.$yI, "aria-hidden": !0 }),
                                (0, i.jsx)(g.A.Title, { id: w, children: y.intl.string(y.t.TdEu5X) }),
                                (0, i.jsx)(g.A.Divider, {}),
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

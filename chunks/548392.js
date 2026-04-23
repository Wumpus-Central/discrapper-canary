l.d(t, { AI: () => p, N4: () => N, cp: () => b });
var s = l(627968);
l(64700);
var a = l(503698),
    n = l.n(a),
    i = l(284009),
    r = l.n(i),
    d = l(340287),
    c = l(821609),
    o = l(935286),
    u = l(104510),
    m = l(477155),
    v = l(509790),
    x = l(576709),
    g = l(985018),
    f = l(41549);
function j(e) {
    let { onNext: t } = (0, v.bv)();
    return (0, s.jsx)(c.$, {
        variant: "primary",
        text: g.intl.string(g.t["3PatSz"]),
        onClick: t,
        icon: o.E,
        iconPosition: "end",
        ...e,
    });
}
function h(e) {
    let { onNext: t, stepLoading: l, gameServerInstance: a, availableBoostCount: n, planCost: i } = (0, v.bv)(),
        r = i > 0 && n < i,
        d =
            i > 0
                ? null != a
                    ? g.intl.string(x.default.e3Q5Kz)
                    : g.intl.string(x.default["cmSy/b"])
                : g.intl.string(g.t.K344S7);
    return (0, s.jsx)(c.$, {
        variant: r || i > 0 ? "expressive" : "primary",
        text: d,
        onClick: t,
        icon: r || i > 0 ? u._ : void 0,
        iconPosition: "start",
        loading: l,
        ...e,
    });
}
function b(e) {
    let { stepAction: t } = (0, v.bv)(),
        l = t?.onNext?.type;
    switch (l) {
        case "go-to-step":
            return (0, s.jsx)(j, { ...e });
        case "save":
            return (0, s.jsx)(h, { ...e });
        default:
            r()(null != l, `Invalid stepType ${l}`);
    }
}
function p(e) {
    let t,
        { onBack: l, stepAction: a } = (0, v.bv)(),
        n = a?.onBack?.type;
    switch (n) {
        case "go-to-step":
            t = g.intl.string(g.t["13/7kX"]);
            break;
        case "close":
            t = g.intl.string(g.t.cpT0Cq);
    }
    return (
        r()(null != t, `Invalid stepType ${n}`),
        (0, s.jsx)(c.$, {
            ...e,
            variant: "secondary",
            text: t,
            onClick: l,
            icon: "go-to-step" === n ? m.r : void 0,
            iconPosition: "start",
        })
    );
}
function N(e) {
    let { step: t, className: l, children: a } = e,
        { footerNode: i, step: r } = (0, v.bv)();
    return null == i || r !== t
        ? null
        : d.createPortal((0, s.jsx)("div", { className: n()(f.q, l), children: a }), i, t);
}

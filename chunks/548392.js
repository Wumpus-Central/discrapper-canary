l.d(t, { AI: () => p, N4: () => N, cp: () => b });
var n = l(627968);
l(64700);
var a = l(503698),
    s = l.n(a),
    i = l(284009),
    r = l.n(i),
    d = l(340287),
    o = l(821609),
    c = l(935286),
    u = l(104510),
    m = l(477155),
    v = l(27023),
    x = l(76660),
    g = l(985018),
    f = l(147469);
function j(e) {
    let { onNext: t } = (0, v.bv)();
    return (0, n.jsx)(o.$, {
        variant: "primary",
        text: g.intl.string(g.t["3PatSz"]),
        onClick: t,
        icon: c.E,
        iconPosition: "end",
        ...e,
    });
}
function h(e) {
    let { onNext: t, stepLoading: l, gameServerInstance: a, availableBoostCount: s, planCost: i } = (0, v.bv)(),
        r = i > 0 && s < i,
        d =
            i > 0
                ? null != a
                    ? g.intl.string(x.default.e3Q5Kz)
                    : g.intl.string(x.default["cmSy/b"])
                : g.intl.string(g.t.K344S7);
    return (0, n.jsx)(o.$, {
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
            return (0, n.jsx)(j, { ...e });
        case "save":
            return (0, n.jsx)(h, { ...e });
        default:
            r()(null != l, `Invalid stepType ${l}`);
    }
}
function p(e) {
    let t,
        { onBack: l, stepAction: a } = (0, v.bv)(),
        s = a?.onBack?.type;
    switch (s) {
        case "go-to-step":
            t = g.intl.string(g.t["13/7kX"]);
            break;
        case "close":
            t = g.intl.string(g.t.cpT0Cq);
    }
    return (
        r()(null != t, `Invalid stepType ${s}`),
        (0, n.jsx)(o.$, {
            ...e,
            variant: "secondary",
            text: t,
            onClick: l,
            icon: "go-to-step" === s ? m.r : void 0,
            iconPosition: "start",
        })
    );
}
function N(e) {
    let { step: t, className: l, children: a } = e,
        { footerNode: i, step: r } = (0, v.bv)();
    return null == i || r !== t
        ? null
        : d.createPortal((0, n.jsx)("div", { className: s()(f.q, l), children: a }), i, t);
}

t.d(n, { AI: () => f, N4: () => p, cp: () => C });
var i = t(477900);
t(582128);
var a = t(503698),
    s = t.n(a),
    l = t(284009),
    r = t.n(l),
    d = t(333007),
    o = t(821609),
    c = t(935286),
    m = t(104510),
    u = t(477155),
    x = t(608266),
    v = t(135570),
    g = t(105292),
    j = t(629846);
function b(e) {
    let { onNext: n } = (0, x.bv)();
    return (0, i.jsx)(o.$, {
        variant: "primary",
        text: g.intl.string(g.t["3PatSz"]),
        onClick: n,
        icon: c.E,
        iconPosition: "end",
        ...e,
    });
}
function h(e) {
    let { onNext: n, stepLoading: t, gameServerInstance: a, availableBoostCount: s, planCost: l } = (0, x.bv)(),
        r = l > 0 && s < l,
        d =
            l > 0
                ? null != a
                    ? g.intl.string(v.default.e3Q5Kz)
                    : g.intl.string(v.default["cmSy/b"])
                : g.intl.string(g.t.K344S7);
    return (0, i.jsx)(o.$, {
        variant: r || l > 0 ? "expressive" : "primary",
        text: d,
        onClick: n,
        icon: r || l > 0 ? m._ : void 0,
        iconPosition: "start",
        loading: t,
        ...e,
    });
}
function C(e) {
    let { stepAction: n } = (0, x.bv)(),
        t = n?.onNext?.type;
    switch (t) {
        case "go-to-step":
            return (0, i.jsx)(b, { ...e });
        case "save":
            return (0, i.jsx)(h, { ...e });
        default:
            r()(null != t, `Invalid stepType ${t}`);
    }
}
function f(e) {
    let n,
        { onBack: t, stepAction: a } = (0, x.bv)(),
        s = a?.onBack?.type;
    switch (s) {
        case "go-to-step":
            n = g.intl.string(g.t["13/7kX"]);
            break;
        case "close":
            n = g.intl.string(g.t.cpT0Cq);
    }
    return (
        r()(null != n, `Invalid stepType ${s}`),
        (0, i.jsx)(o.$, {
            ...e,
            variant: "secondary",
            text: n,
            onClick: t,
            icon: "go-to-step" === s ? u.r : void 0,
            iconPosition: "start",
        })
    );
}
function p(e) {
    let { step: n, className: t, children: a } = e,
        { footerNode: l, step: r } = (0, x.bv)();
    return null == l || r !== n
        ? null
        : d.createPortal((0, i.jsx)("div", { className: s()(j.q, t), children: a }), l, n);
}

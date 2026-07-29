n.d(t, { AI: () => f, N4: () => p, cp: () => C });
var i = n(477900);
n(582128);
var a = n(503698),
    s = n.n(a),
    l = n(284009),
    r = n.n(l),
    d = n(333007),
    o = n(821609),
    c = n(712905),
    m = n(104510),
    u = n(477155),
    x = n(608266),
    v = n(275695),
    g = n(375708),
    j = n(171287);
function b(e) {
    let { onNext: t } = (0, x.bv)();
    return (0, i.jsx)(o.$, {
        variant: "primary",
        text: g.intl.string(g.t["3PatSz"]),
        onClick: t,
        icon: c.E,
        iconPosition: "end",
        ...e,
    });
}
function h(e) {
    let { onNext: t, stepLoading: n, gameServerInstance: a, availableBoostCount: s, planCost: l } = (0, x.bv)(),
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
        onClick: t,
        icon: r || l > 0 ? m._ : void 0,
        iconPosition: "start",
        loading: n,
        ...e,
    });
}
function C(e) {
    let { stepAction: t } = (0, x.bv)(),
        n = t?.onNext?.type;
    switch (n) {
        case "go-to-step":
            return (0, i.jsx)(b, { ...e });
        case "save":
            return (0, i.jsx)(h, { ...e });
        default:
            r()(null != n, `Invalid stepType ${n}`);
    }
}
function f(e) {
    let t,
        { onBack: n, stepAction: a } = (0, x.bv)(),
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
        (0, i.jsx)(o.$, {
            ...e,
            variant: "secondary",
            text: t,
            onClick: n,
            icon: "go-to-step" === s ? u.r : void 0,
            iconPosition: "start",
        })
    );
}
function p(e) {
    let { step: t, className: n, children: a } = e,
        { footerNode: l, step: r } = (0, x.bv)();
    return null == l || r !== t
        ? null
        : d.createPortal((0, i.jsx)("div", { className: s()(j.q, n), children: a }), l, t);
}

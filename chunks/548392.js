n.d(t, { AI: () => j, N4: () => b, cp: () => f });
var a = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    i = n(284009),
    r = n.n(i),
    d = n(340287),
    o = n(397927),
    c = n(27023),
    u = n(294726),
    m = n(985018),
    x = n(26045);
function v(e) {
    let { onNext: t } = (0, c.bv)();
    return (0, a.jsx)(o.Button, {
        variant: "primary",
        text: m.intl.string(m.t["3PatSz"]),
        onClick: t,
        icon: o.EdP,
        iconPosition: "end",
        ...e,
    });
}
function g(e) {
    let { onNext: t, stepLoading: n, gameServerInstance: l, availableBoostCount: s, planCost: i } = (0, c.bv)(),
        r = i > 0 && s < i,
        d =
            i > 0
                ? null != l
                    ? m.intl.string(u.default.e3Q5Kz)
                    : m.intl.string(u.default["cmSy/b"])
                : m.intl.string(m.t.K344S7);
    return (0, a.jsx)(o.Button, {
        variant: r || i > 0 ? "expressive" : "primary",
        text: d,
        onClick: t,
        icon: r || i > 0 ? o._Jp : void 0,
        iconPosition: "start",
        loading: n,
        ...e,
    });
}
function f(e) {
    let { stepAction: t } = (0, c.bv)(),
        n = t?.onNext?.type;
    switch (n) {
        case "go-to-step":
            return (0, a.jsx)(v, { ...e });
        case "save":
            return (0, a.jsx)(g, { ...e });
        default:
            r()(null != n, `Invalid stepType ${n}`);
    }
}
function j(e) {
    let t,
        { onBack: n, stepAction: l } = (0, c.bv)(),
        s = l?.onBack?.type;
    switch (s) {
        case "go-to-step":
            t = m.intl.string(m.t["13/7kX"]);
            break;
        case "close":
            t = m.intl.string(m.t.cpT0Cq);
    }
    return (
        r()(null != t, `Invalid stepType ${s}`),
        (0, a.jsx)(o.Button, {
            ...e,
            variant: "secondary",
            text: t,
            onClick: n,
            icon: "go-to-step" === s ? o.rJJ : void 0,
            iconPosition: "start",
        })
    );
}
function b(e) {
    let { step: t, className: n, children: l } = e,
        { footerNode: i, step: r } = (0, c.bv)();
    return null == i || r !== t
        ? null
        : d.createPortal((0, a.jsx)("div", { className: s()(x.q, n), children: l }), i, t);
}

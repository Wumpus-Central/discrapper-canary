n.d(t, { AI: () => p, N4: () => x, cp: () => v });
var a = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(284009),
    r = n.n(s),
    d = n(340287),
    u = n(397927),
    c = n(27023),
    o = n(294726),
    m = n(985018),
    g = n(227530);
function f(e) {
    let { onNext: t } = (0, c.bv)();
    return (0, a.jsx)(u.Button, {
        variant: "primary",
        text: m.intl.string(m.t["3PatSz"]),
        onClick: t,
        icon: u.EdP,
        iconPosition: "end",
        ...e,
    });
}
function _(e) {
    let { onNext: t, stepLoading: n, gameServerInstance: i, availableBoostCount: l, planCost: s } = (0, c.bv)(),
        r = s > 0 && l < s,
        d =
            s > 0
                ? null != i
                    ? m.intl.string(o.default.e3Q5Kz)
                    : m.intl.string(o.default["cmSy/b"])
                : m.intl.string(m.t.K344S7);
    return (0, a.jsx)(u.Button, {
        variant: r || s > 0 ? "expressive" : "primary",
        text: d,
        onClick: t,
        icon: r || s > 0 ? u._Jp : void 0,
        iconPosition: "start",
        loading: n,
        ...e,
    });
}
function v(e) {
    let { stepAction: t } = (0, c.bv)(),
        n = t?.onNext?.type;
    switch (n) {
        case "go-to-step":
            return (0, a.jsx)(f, { ...e });
        case "save":
            return (0, a.jsx)(_, { ...e });
        default:
            r()(null != n, `Invalid stepType ${n}`);
    }
}
function p(e) {
    let t,
        { onBack: n, stepAction: i } = (0, c.bv)(),
        l = i?.onBack?.type;
    switch (l) {
        case "go-to-step":
            t = m.intl.string(m.t["13/7kX"]);
            break;
        case "close":
            t = m.intl.string(m.t.cpT0Cq);
    }
    return (
        r()(null != t, `Invalid stepType ${l}`),
        (0, a.jsx)(u.Button, {
            ...e,
            variant: "secondary",
            text: t,
            onClick: n,
            icon: "go-to-step" === l ? u.rJJ : void 0,
            iconPosition: "start",
        })
    );
}
function x(e) {
    let { step: t, className: n, children: i } = e,
        { footerNode: s, step: r } = (0, c.bv)();
    return null == s || r !== t
        ? null
        : d.createPortal((0, a.jsx)("div", { className: l()(g.q, n), children: i }), s, t);
}

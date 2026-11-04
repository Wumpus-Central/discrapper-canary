var i = t(477900);
t(582128);
var s = t(503698),
    a = t.n(s),
    l = t(284009),
    r = t.n(l),
    d = t(333007),
    o = t(821609),
    c = t(935286),
    m = t(104510),
    u = t(477155),
    x = t(802671),
    v = t(105518),
    g = t(792996),
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
    let { onNext: n, stepLoading: t, gameServerInstance: s, availableBoostCount: a, planCost: l } = (0, x.bv)(),
        r = l > 0 && a < l,
        d =
            l > 0
                ? null != s
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
t.d(
    n,
    {},
    {
        AI: function (e) {
            let n,
                { onBack: t, stepAction: s } = (0, x.bv)(),
                a = s?.onBack?.type;
            switch (a) {
                case "go-to-step":
                    n = g.intl.string(g.t["13/7kX"]);
                    break;
                case "close":
                    n = g.intl.string(g.t.cpT0Cq);
            }
            return (
                r()(null != n, `Invalid stepType ${a}`),
                (0, i.jsx)(o.$, {
                    ...e,
                    variant: "secondary",
                    text: n,
                    onClick: t,
                    icon: "go-to-step" === a ? u.r : void 0,
                    iconPosition: "start",
                })
            );
        },
        N4: function (e) {
            let { step: n, className: t, children: s } = e,
                { footerNode: l, step: r } = (0, x.bv)();
            return null == l || r !== n
                ? null
                : d.createPortal((0, i.jsx)("div", { className: a()(j.q, t), children: s }), l, n);
        },
        cp: function (e) {
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
        },
    },
);

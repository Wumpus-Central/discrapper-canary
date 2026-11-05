var s = t(477900);
t(582128);
var i = t(503698),
    a = t.n(i),
    l = t(284009),
    r = t.n(l),
    o = t(333007),
    d = t(821609),
    c = t(935286),
    m = t(104510),
    u = t(477155),
    x = t(802671),
    v = t(105518),
    g = t(792996),
    j = t(629846);
function b(e) {
    let { onNext: n } = (0, x.bv)();
    return (0, s.jsx)(d.$, {
        variant: "primary",
        text: g.intl.string(g.t["3PatSz"]),
        onClick: n,
        icon: c.ArrowSmallRightIcon,
        iconPosition: "end",
        ...e,
    });
}
function h(e) {
    let { onNext: n, stepLoading: t, gameServerInstance: i, availableBoostCount: a, planCost: l } = (0, x.bv)(),
        r = l > 0 && a < l,
        o =
            l > 0
                ? null != i
                    ? g.intl.string(v.default.e3Q5Kz)
                    : g.intl.string(v.default["cmSy/b"])
                : g.intl.string(g.t.K344S7);
    return (0, s.jsx)(d.$, {
        variant: r || l > 0 ? "expressive" : "primary",
        text: o,
        onClick: n,
        icon: r || l > 0 ? m.BoostGemIcon : void 0,
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
                { onBack: t, stepAction: i } = (0, x.bv)(),
                a = i?.onBack?.type;
            switch (a) {
                case "go-to-step":
                    n = g.intl.string(g.t["13/7kX"]);
                    break;
                case "close":
                    n = g.intl.string(g.t.cpT0Cq);
            }
            return (
                r()(null != n, `Invalid stepType ${a}`),
                (0, s.jsx)(d.$, {
                    ...e,
                    variant: "secondary",
                    text: n,
                    onClick: t,
                    icon: "go-to-step" === a ? u.ArrowSmallLeftIcon : void 0,
                    iconPosition: "start",
                })
            );
        },
        N4: function (e) {
            let { step: n, className: t, children: i } = e,
                { footerNode: l, step: r } = (0, x.bv)();
            return null == l || r !== n
                ? null
                : o.createPortal((0, s.jsx)("div", { className: a()(j.q, t), children: i }), l, n);
        },
        cp: function (e) {
            let { stepAction: n } = (0, x.bv)(),
                t = n?.onNext?.type;
            switch (t) {
                case "go-to-step":
                    return (0, s.jsx)(b, { ...e });
                case "save":
                    return (0, s.jsx)(h, { ...e });
                default:
                    r()(null != t, `Invalid stepType ${t}`);
            }
        },
    },
);

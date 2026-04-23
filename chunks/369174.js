n.d(t, { $L: () => S, NI: () => j, kd: () => I, TG: () => h, P5: () => v, Ft: () => b, Yq: () => E });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(628284),
    o = n(661531),
    d = n(834730),
    u = n(695366),
    c = n(104510),
    _ = n(534514),
    p = n(890856),
    m = n(777666),
    g = n(773669),
    x = n(853513),
    f = n(985018),
    A = n(989177);
function h(e) {
    let { text: t } = e;
    return (0, r.jsxs)("div", {
        className: A.mG,
        children: [
            (0, r.jsx)(a.y, { size: "xs", color: o.A.colors.STATUS_POSITIVE }),
            (0, r.jsx)(d.E, { color: "text-feedback-positive", variant: "text-sm/bold", children: t }),
        ],
    });
}
function v(e) {
    let { dateString: t } = e;
    return (0, r.jsxs)("div", {
        className: A.mG,
        children: [
            (0, r.jsx)(u.E, { size: "xs", color: o.A.colors.STATUS_WARNING }),
            (0, r.jsx)(d.E, {
                color: "status-warning",
                variant: "text-sm/bold",
                children: f.intl.formatToMarkdownString(x.default["ol/ao/"], {
                    dateString: new Date(t).toLocaleDateString(g.default.locale, { month: "2-digit", day: "2-digit" }),
                }),
            }),
        ],
    });
}
function E(e) {
    let { removingAt: t } = e;
    return (0, r.jsxs)("div", {
        className: A.wL,
        children: [
            (0, r.jsx)(u.E, { size: "xs", color: o.A.colors.STATUS_WARNING }),
            (0, r.jsx)(d.E, {
                color: "status-warning",
                variant: "text-sm/bold",
                children: f.intl.formatToPlainString(x.default["6e2ry1"], {
                    dateString: (function (e) {
                        let t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : { month: "numeric", day: "numeric" };
                        return new Date(e).toLocaleDateString(g.default.locale, t);
                    })(t),
                }),
            }),
        ],
    });
}
function S(e) {
    let { cost: t, costDecorator: n, status: l, className: i } = e,
        a = void 0 !== t ? A._A : A.$3;
    return (0, r.jsxs)("div", {
        className: s()(a, i),
        children: [
            void 0 !== t &&
                (0, r.jsxs)("div", {
                    className: s()(A.mG, A.pT),
                    children: [
                        (0, r.jsx)(c._, { size: "sm", color: o.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                        (0, r.jsx)(d.E, {
                            className: A.q9,
                            tag: "div",
                            variant: "heading-md/semibold",
                            color: "text-subtle",
                            children: f.intl.formatToPlainString(f.t.t2Wbo1, { required: t, decorator: n ?? "" }),
                        }),
                    ],
                }),
            l?.type === "expiring" && (0, r.jsx)(v, { dateString: l.expiringAt }),
            l?.type === "removing" && (0, r.jsx)(E, { removingAt: l.removingAt }),
            l?.type === "active" && (0, r.jsx)(h, { text: l.statusText }),
        ],
    });
}
function I(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: A.UD, children: t });
}
function b(e) {
    let { title: t, textColor: n, children: l, footer: i } = e;
    return (0, r.jsxs)("div", {
        className: A.hQ,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)("div", {
                        className: A.N1,
                        children: (0, r.jsx)(_.D, { color: n, variant: "heading-md/bold", children: t }),
                    }),
                    l,
                ],
            }),
            i,
        ],
    });
}
let j = l.forwardRef(function (e, t) {
    let {
        className: n,
        label: l,
        isActive: i,
        isWarning: a,
        badge: d,
        canRollback: u,
        onClick: c,
        onMouseOver: _,
        onMouseLeave: g,
        children: x,
    } = e;
    return (0, r.jsx)("div", {
        className: s()(A.gp, { [A.Wq]: u && !i }),
        ref: t,
        children: (0, r.jsxs)(p.s, {
            "aria-label": l,
            onClick: c,
            onMouseOver: _,
            onMouseLeave: g,
            className: s()(A.kL, { [A.vu]: i, [A.$e]: a || (u && i) }, n),
            children: [
                x,
                "new" === d && (0, r.jsx)(m.Lp, { className: A.Hl, text: f.intl.string(f.t.y2b7CA) }),
                "beta" === d &&
                    (0, r.jsx)(m.Lp, {
                        className: A.Hl,
                        text: f.intl.string(f.t.oW0eUd),
                        color: o.A.colors.BACKGROUND_BRAND.css,
                    }),
            ],
        }),
    });
});

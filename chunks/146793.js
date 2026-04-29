s.d(t, { $L: () => S, NI: () => w, kd: () => T, TG: () => f, P5: () => p, Ft: () => b, Yq: () => A });
var i = s(627968),
    r = s(64700),
    n = s(503698),
    a = s.n(n),
    l = s(628284),
    o = s(661531),
    c = s(834730),
    d = s(695366),
    x = s(104510),
    u = s(534514),
    m = s(890856),
    v = s(777666),
    h = s(773669),
    j = s(853513),
    g = s(985018),
    N = s(989177);
function f(e) {
    let { text: t } = e;
    return (0, i.jsxs)("div", {
        className: N.mG,
        children: [
            (0, i.jsx)(l.y, { size: "xs", color: o.A.colors.STATUS_POSITIVE }),
            (0, i.jsx)(c.E, { color: "text-feedback-positive", variant: "text-sm/bold", children: t }),
        ],
    });
}
function p(e) {
    let { dateString: t } = e;
    return (0, i.jsxs)("div", {
        className: N.mG,
        children: [
            (0, i.jsx)(d.E, { size: "xs", color: o.A.colors.STATUS_WARNING }),
            (0, i.jsx)(c.E, {
                color: "status-warning",
                variant: "text-sm/bold",
                children: g.intl.formatToMarkdownString(j.default["ol/ao/"], {
                    dateString: new Date(t).toLocaleDateString(h.default.locale, { month: "2-digit", day: "2-digit" }),
                }),
            }),
        ],
    });
}
function A(e) {
    let { removingAt: t } = e;
    return (0, i.jsxs)("div", {
        className: N.wL,
        children: [
            (0, i.jsx)(d.E, { size: "xs", color: o.A.colors.STATUS_WARNING }),
            (0, i.jsx)(c.E, {
                color: "status-warning",
                variant: "text-sm/bold",
                children: g.intl.formatToPlainString(j.default["6e2ry1"], {
                    dateString: (function (e) {
                        let t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : { month: "numeric", day: "numeric" };
                        return new Date(e).toLocaleDateString(h.default.locale, t);
                    })(t),
                }),
            }),
        ],
    });
}
function S(e) {
    let { cost: t, costDecorator: s, status: r, className: n } = e,
        l = void 0 !== t ? N._A : N.$3;
    return (0, i.jsxs)("div", {
        className: a()(l, n),
        children: [
            void 0 !== t &&
                (0, i.jsxs)("div", {
                    className: a()(N.mG, N.pT),
                    children: [
                        (0, i.jsx)(x._, { size: "sm", color: o.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                        (0, i.jsx)(c.E, {
                            className: N.q9,
                            tag: "div",
                            variant: "heading-md/semibold",
                            color: "text-subtle",
                            children: g.intl.formatToPlainString(g.t.t2Wbo1, { required: t, decorator: s ?? "" }),
                        }),
                    ],
                }),
            r?.type === "expiring" && (0, i.jsx)(p, { dateString: r.expiringAt }),
            r?.type === "removing" && (0, i.jsx)(A, { removingAt: r.removingAt }),
            r?.type === "active" && (0, i.jsx)(f, { text: r.statusText }),
        ],
    });
}
function T(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: N.UD, children: t });
}
function b(e) {
    let { title: t, textColor: s, children: r, footer: n } = e;
    return (0, i.jsxs)("div", {
        className: N.hQ,
        children: [
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)("div", {
                        className: N.N1,
                        children: (0, i.jsx)(u.D, { color: s, variant: "heading-md/bold", children: t }),
                    }),
                    r,
                ],
            }),
            n,
        ],
    });
}
let w = r.forwardRef(function (e, t) {
    let {
        className: s,
        label: r,
        isActive: n,
        isWarning: l,
        badge: c,
        canRollback: d,
        onClick: x,
        onMouseOver: u,
        onMouseLeave: h,
        children: j,
    } = e;
    return (0, i.jsx)("div", {
        className: a()(N.gp, { [N.Wq]: d && !n }),
        ref: t,
        children: (0, i.jsxs)(m.s, {
            "aria-label": r,
            onClick: x,
            onMouseOver: u,
            onMouseLeave: h,
            className: a()(N.kL, { [N.vu]: n, [N.$e]: l || (d && n) }, s),
            children: [
                j,
                "new" === c && (0, i.jsx)(v.Lp, { className: N.Hl, text: g.intl.string(g.t.y2b7CA) }),
                "beta" === c &&
                    (0, i.jsx)(v.Lp, {
                        className: N.Hl,
                        text: g.intl.string(g.t.oW0eUd),
                        color: o.A.colors.BACKGROUND_BRAND.css,
                    }),
            ],
        }),
    });
});

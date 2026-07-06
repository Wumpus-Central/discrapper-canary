s.d(t, { $L: () => S, NI: () => _, kd: () => T, TG: () => A, P5: () => p, Ft: () => k, Yq: () => b });
var i = s(627968),
    r = s(64700),
    n = s(503698),
    a = s.n(n),
    l = s(628284),
    o = s(661531),
    c = s(834730),
    d = s(695366),
    x = s(104510),
    m = s(534514),
    u = s(890856),
    v = s(812993),
    h = s(773669),
    j = s(939981),
    N = s(853513),
    g = s(375708),
    f = s(989177);
function A(e) {
    let { text: t } = e;
    return (0, i.jsxs)("div", {
        className: f.mG,
        children: [
            (0, i.jsx)(l.y, { size: "xs", color: o.A.colors.STATUS_POSITIVE }),
            (0, i.jsx)(c.E, { color: "text-feedback-positive", variant: "text-sm/bold", children: t }),
        ],
    });
}
function p(e) {
    let { dateString: t } = e;
    return (0, i.jsxs)("div", {
        className: f.mG,
        children: [
            (0, i.jsx)(d.E, { size: "xs", color: o.A.colors.STATUS_WARNING }),
            (0, i.jsx)(c.E, {
                color: "text-feedback-warning",
                variant: "text-sm/bold",
                children: g.intl.formatToMarkdownString(N.default["ol/ao/"], {
                    dateString: new Date(t).toLocaleDateString(h.default.locale, { month: "2-digit", day: "2-digit" }),
                }),
            }),
        ],
    });
}
function b(e) {
    let { removingAt: t } = e;
    return (0, i.jsxs)("div", {
        className: f.wL,
        children: [
            (0, i.jsx)(d.E, { size: "xs", color: o.A.colors.STATUS_WARNING }),
            (0, i.jsx)(c.E, {
                color: "text-feedback-warning",
                variant: "text-sm/bold",
                children: g.intl.formatToPlainString(N.default["6e2ry1"], { dateString: (0, j.A)(t) }),
            }),
        ],
    });
}
function S(e) {
    let { cost: t, costDecorator: s, status: r, className: n } = e,
        l = void 0 !== t ? f._A : f.$3;
    return (0, i.jsxs)("div", {
        className: a()(l, n),
        children: [
            void 0 !== t &&
                (0, i.jsxs)("div", {
                    className: a()(f.mG, f.pT),
                    children: [
                        (0, i.jsx)(x._, { size: "sm", color: o.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                        (0, i.jsx)(c.E, {
                            className: f.q9,
                            tag: "div",
                            variant: "heading-md/semibold",
                            color: "text-subtle",
                            children: g.intl.formatToPlainString(g.t.t2Wbo1, { required: t, decorator: s ?? "" }),
                        }),
                    ],
                }),
            r?.type === "expiring" && (0, i.jsx)(p, { dateString: r.expiringAt }),
            r?.type === "removing" && (0, i.jsx)(b, { removingAt: r.removingAt }),
            r?.type === "active" && (0, i.jsx)(A, { text: r.statusText }),
        ],
    });
}
function T(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: f.UD, children: t });
}
function k(e) {
    let { title: t, textColor: s, children: r, footer: n } = e;
    return (0, i.jsxs)("div", {
        className: f.hQ,
        children: [
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)("div", {
                        className: f.N1,
                        children: (0, i.jsx)(m.D, { color: s, variant: "heading-md/bold", children: t }),
                    }),
                    r,
                ],
            }),
            n,
        ],
    });
}
let _ = r.forwardRef(function (e, t) {
    let {
        className: s,
        label: r,
        isActive: n,
        isWarning: l,
        badge: c,
        canRollback: d,
        onClick: x,
        onMouseOver: m,
        onMouseLeave: h,
        children: j,
    } = e;
    return (0, i.jsx)("div", {
        className: a()(f.gp, { [f.Wq]: d && !n }),
        ref: t,
        children: (0, i.jsxs)(u.s, {
            "aria-label": r,
            onClick: x,
            onMouseOver: m,
            onMouseLeave: h,
            className: a()(f.kL, { [f.vu]: n, [f.$e]: l || (d && n) }, s),
            children: [
                j,
                "new" === c && (0, i.jsx)(v.Lp, { className: f.Hl, text: g.intl.string(g.t.y2b7CA) }),
                "beta" === c &&
                    (0, i.jsx)(v.Lp, {
                        className: f.Hl,
                        text: g.intl.string(g.t.oW0eUd),
                        color: o.A.colors.BACKGROUND_BRAND.css,
                    }),
            ],
        }),
    });
});

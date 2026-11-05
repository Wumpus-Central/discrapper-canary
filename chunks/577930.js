r.d(i, { $L: () => S, NI: () => k, Ft: () => T, TG: () => g, kd: () => A, P5: () => b, Yq: () => p });
var s = r(477900);
r(582128);
var a = r(503698),
    t = r.n(a),
    n = r(628284),
    o = r(646514),
    l = r(834730),
    c = r(695366);
if (221552 == r.j) var d = r(104510);
if (221552 == r.j) var x = r(534514);
if (221552 == r.j) var m = r(890856);
if (221552 == r.j) var v = r(805251);
var j = r(773669),
    h = r(939981),
    u = r(586428),
    f = r(792996),
    N = r(517826);
function g(e) {
    let { text: i } = e;
    return (0, s.jsxs)("div", {
        className: N.mG,
        children: [
            (0, s.jsx)(n.CircleCheckIcon, { size: "xs", color: o.A.colors.STATUS_POSITIVE }),
            (0, s.jsx)(l.E, { color: "text-feedback-positive", variant: "body-sm/semibold", children: i }),
        ],
    });
}
function b(e) {
    let { dateString: i } = e;
    return (0, s.jsxs)("div", {
        className: N.mG,
        children: [
            (0, s.jsx)(c.CircleErrorIcon, { size: "xs", color: o.A.colors.STATUS_WARNING }),
            (0, s.jsx)(l.E, {
                color: "text-feedback-warning",
                variant: "body-sm/semibold",
                children: f.intl.formatToMarkdownString(u.default["ol/ao/"], {
                    dateString: new Date(i).toLocaleDateString(j.default.locale, { month: "2-digit", day: "2-digit" }),
                }),
            }),
        ],
    });
}
function p(e) {
    let { removingAt: i } = e;
    return (0, s.jsxs)("div", {
        className: N.wL,
        children: [
            (0, s.jsx)(c.CircleErrorIcon, { size: "xs", color: o.A.colors.STATUS_WARNING }),
            (0, s.jsx)(l.E, {
                color: "text-feedback-warning",
                variant: "body-sm/semibold",
                children: f.intl.formatToPlainString(u.default["6e2ry1"], { dateString: (0, h.A)(i) }),
            }),
        ],
    });
}
function S(e) {
    let { cost: i, costDecorator: r, status: a, className: n } = e,
        c = void 0 !== i ? N._A : N.$3;
    return (0, s.jsxs)("div", {
        className: t()(c, n),
        children: [
            void 0 !== i &&
                (0, s.jsxs)("div", {
                    className: N.mG,
                    children: [
                        (0, s.jsx)(d.BoostGemIcon, {
                            size: "sm",
                            color: o.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                        }),
                        (0, s.jsx)(l.E, {
                            className: N.q9,
                            tag: "div",
                            variant: "heading-sm/semibold",
                            color: "text-subtle",
                            children: f.intl.formatToPlainString(f.t.t2Wbo1, { required: i, decorator: r ?? "" }),
                        }),
                    ],
                }),
            a?.type === "expiring" && (0, s.jsx)(b, { dateString: a.expiringAt }),
            a?.type === "removing" && (0, s.jsx)(p, { removingAt: a.removingAt }),
            a?.type === "active" && (0, s.jsx)(g, { text: a.statusText }),
        ],
    });
}
function A(e) {
    let { children: i } = e;
    return (0, s.jsx)("div", { className: N.UD, children: i });
}
function T(e) {
    let { title: i, textColor: r, children: a, footer: t } = e;
    return (0, s.jsxs)("div", {
        className: N.hQ,
        children: [
            (0, s.jsxs)("div", {
                children: [
                    (0, s.jsx)("div", {
                        className: N.N1,
                        children: (0, s.jsx)(x.D, { color: r, variant: "heading-sm/semibold", children: i }),
                    }),
                    a,
                ],
            }),
            t,
        ],
    });
}
function k(e) {
    let { ref: i, ...r } = e,
        {
            className: a,
            label: n,
            isActive: o,
            isWarning: l,
            badge: c,
            canRollback: d,
            onClick: x,
            onMouseOver: j,
            onMouseLeave: h,
            children: u,
        } = r;
    return (0, s.jsx)("div", {
        className: t()(N.gp, { [N.Wq]: d && !o }),
        ref: i,
        children: (0, s.jsxs)(m.s, {
            "aria-label": n,
            onClick: x,
            onMouseOver: j,
            onMouseLeave: h,
            className: t()(N.kL, { [N.vu]: o, [N.$e]: l || (d && o) }, a),
            children: [
                u,
                "new" === c &&
                    (0, s.jsx)("div", {
                        className: N.Oj,
                        children: (0, s.jsx)(v.E, { type: "new", variant: "primary" }),
                    }),
                "beta" === c &&
                    (0, s.jsx)("div", {
                        className: N.Oj,
                        children: (0, s.jsx)(v.E, { type: "beta", variant: "primary" }),
                    }),
            ],
        }),
    });
}

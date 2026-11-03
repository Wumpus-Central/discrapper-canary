s.d(i, { $L: () => S, NI: () => T, kd: () => A, TG: () => g, P5: () => b, Ft: () => y, Yq: () => p });
var r = s(477900);
s(582128);
var a = s(503698),
    t = s.n(a),
    n = s(628284),
    l = s(661531),
    o = s(834730),
    d = s(695366);
if (221552 == s.j) var c = s(104510);
if (221552 == s.j) var x = s(534514);
if (221552 == s.j) var v = s(890856);
if (221552 == s.j) var m = s(62010);
var j = s(773669),
    u = s(939981),
    h = s(959456),
    f = s(105292),
    N = s(517826);
function g(e) {
    let { text: i } = e;
    return (0, r.jsxs)("div", {
        className: N.mG,
        children: [
            (0, r.jsx)(n.y, { size: "xs", color: l.A.colors.STATUS_POSITIVE }),
            (0, r.jsx)(o.E, { color: "text-feedback-positive", variant: "body-sm/semibold", children: i }),
        ],
    });
}
function b(e) {
    let { dateString: i } = e;
    return (0, r.jsxs)("div", {
        className: N.mG,
        children: [
            (0, r.jsx)(d.E, { size: "xs", color: l.A.colors.STATUS_WARNING }),
            (0, r.jsx)(o.E, {
                color: "text-feedback-warning",
                variant: "body-sm/semibold",
                children: f.intl.formatToMarkdownString(h.default["ol/ao/"], {
                    dateString: new Date(i).toLocaleDateString(j.default.locale, { month: "2-digit", day: "2-digit" }),
                }),
            }),
        ],
    });
}
function p(e) {
    let { removingAt: i } = e;
    return (0, r.jsxs)("div", {
        className: N.wL,
        children: [
            (0, r.jsx)(d.E, { size: "xs", color: l.A.colors.STATUS_WARNING }),
            (0, r.jsx)(o.E, {
                color: "text-feedback-warning",
                variant: "body-sm/semibold",
                children: f.intl.formatToPlainString(h.default["6e2ry1"], { dateString: (0, u.A)(i) }),
            }),
        ],
    });
}
function S(e) {
    let { cost: i, costDecorator: s, status: a, className: n } = e,
        d = void 0 !== i ? N._A : N.$3;
    return (0, r.jsxs)("div", {
        className: t()(d, n),
        children: [
            void 0 !== i &&
                (0, r.jsxs)("div", {
                    className: N.mG,
                    children: [
                        (0, r.jsx)(c._, { size: "sm", color: l.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH }),
                        (0, r.jsx)(o.E, {
                            className: N.q9,
                            tag: "div",
                            variant: "heading-sm/semibold",
                            color: "text-subtle",
                            children: f.intl.formatToPlainString(f.t.t2Wbo1, { required: i, decorator: s ?? "" }),
                        }),
                    ],
                }),
            a?.type === "expiring" && (0, r.jsx)(b, { dateString: a.expiringAt }),
            a?.type === "removing" && (0, r.jsx)(p, { removingAt: a.removingAt }),
            a?.type === "active" && (0, r.jsx)(g, { text: a.statusText }),
        ],
    });
}
function A(e) {
    let { children: i } = e;
    return (0, r.jsx)("div", { className: N.UD, children: i });
}
function y(e) {
    let { title: i, textColor: s, children: a, footer: t } = e;
    return (0, r.jsxs)("div", {
        className: N.hQ,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)("div", {
                        className: N.N1,
                        children: (0, r.jsx)(x.D, { color: s, variant: "heading-sm/semibold", children: i }),
                    }),
                    a,
                ],
            }),
            t,
        ],
    });
}
function T(e) {
    let { ref: i, ...s } = e,
        {
            className: a,
            label: n,
            isActive: l,
            isWarning: o,
            badge: d,
            canRollback: c,
            onClick: x,
            onMouseOver: j,
            onMouseLeave: u,
            children: h,
        } = s;
    return (0, r.jsx)("div", {
        className: t()(N.gp, { [N.Wq]: c && !l }),
        ref: i,
        children: (0, r.jsxs)(v.s, {
            "aria-label": n,
            onClick: x,
            onMouseOver: j,
            onMouseLeave: u,
            className: t()(N.kL, { [N.vu]: l, [N.$e]: o || (c && l) }, a),
            children: [
                h,
                "new" === d &&
                    (0, r.jsx)("div", {
                        className: N.Oj,
                        children: (0, r.jsx)(m.E, { type: "new", variant: "primary" }),
                    }),
                "beta" === d &&
                    (0, r.jsx)("div", {
                        className: N.Oj,
                        children: (0, r.jsx)(m.E, { type: "beta", variant: "primary" }),
                    }),
            ],
        }),
    });
}

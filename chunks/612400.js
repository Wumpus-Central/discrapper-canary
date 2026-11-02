s.d(i, { $L: () => S, NI: () => k, kd: () => A, TG: () => g, P5: () => p, Ft: () => T, Yq: () => b });
var t = s(477900);
s(582128);
var r = s(503698),
    a = s.n(r),
    n = s(628284),
    l = s(661531),
    o = s(834730),
    c = s(695366);
if (221552 == s.j) var d = s(104510);
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
    return (0, t.jsxs)("div", {
        className: N.mG,
        children: [
            (0, t.jsx)(n.y, { size: "xs", color: l.A.colors.STATUS_POSITIVE }),
            (0, t.jsx)(o.E, { color: "text-feedback-positive", variant: "text-sm/semibold", children: i }),
        ],
    });
}
function p(e) {
    let { dateString: i } = e;
    return (0, t.jsxs)("div", {
        className: N.mG,
        children: [
            (0, t.jsx)(c.E, { size: "xs", color: l.A.colors.STATUS_WARNING }),
            (0, t.jsx)(o.E, {
                color: "text-feedback-warning",
                variant: "text-sm/semibold",
                children: f.intl.formatToMarkdownString(h.default["ol/ao/"], {
                    dateString: new Date(i).toLocaleDateString(j.default.locale, { month: "2-digit", day: "2-digit" }),
                }),
            }),
        ],
    });
}
function b(e) {
    let { removingAt: i } = e;
    return (0, t.jsxs)("div", {
        className: N.wL,
        children: [
            (0, t.jsx)(c.E, { size: "xs", color: l.A.colors.STATUS_WARNING }),
            (0, t.jsx)(o.E, {
                color: "text-feedback-warning",
                variant: "text-sm/semibold",
                children: f.intl.formatToPlainString(h.default["6e2ry1"], { dateString: (0, u.A)(i) }),
            }),
        ],
    });
}
function S(e) {
    let { cost: i, costDecorator: s, status: r, className: n } = e,
        c = void 0 !== i ? N._A : N.$3;
    return (0, t.jsxs)("div", {
        className: a()(c, n),
        children: [
            void 0 !== i &&
                (0, t.jsxs)("div", {
                    className: N.mG,
                    children: [
                        (0, t.jsx)(d._, { size: "sm", color: l.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                        (0, t.jsx)(o.E, {
                            className: N.q9,
                            tag: "div",
                            variant: "heading-md/semibold",
                            color: "text-subtle",
                            children: f.intl.formatToPlainString(f.t.t2Wbo1, { required: i, decorator: s ?? "" }),
                        }),
                    ],
                }),
            r?.type === "expiring" && (0, t.jsx)(p, { dateString: r.expiringAt }),
            r?.type === "removing" && (0, t.jsx)(b, { removingAt: r.removingAt }),
            r?.type === "active" && (0, t.jsx)(g, { text: r.statusText }),
        ],
    });
}
function A(e) {
    let { children: i } = e;
    return (0, t.jsx)("div", { className: N.UD, children: i });
}
function T(e) {
    let { title: i, textColor: s, children: r, footer: a } = e;
    return (0, t.jsxs)("div", {
        className: N.hQ,
        children: [
            (0, t.jsxs)("div", {
                children: [
                    (0, t.jsx)("div", {
                        className: N.N1,
                        children: (0, t.jsx)(x.D, { color: s, variant: "heading-md/semibold", children: i }),
                    }),
                    r,
                ],
            }),
            a,
        ],
    });
}
function k(e) {
    let { ref: i, ...s } = e,
        {
            className: r,
            label: n,
            isActive: l,
            isWarning: o,
            badge: c,
            canRollback: d,
            onClick: x,
            onMouseOver: j,
            onMouseLeave: u,
            children: h,
        } = s;
    return (0, t.jsx)("div", {
        className: a()(N.gp, { [N.Wq]: d && !l }),
        ref: i,
        children: (0, t.jsxs)(v.s, {
            "aria-label": n,
            onClick: x,
            onMouseOver: j,
            onMouseLeave: u,
            className: a()(N.kL, { [N.vu]: l, [N.$e]: o || (d && l) }, r),
            children: [
                h,
                "new" === c &&
                    (0, t.jsx)("div", {
                        className: N.Oj,
                        children: (0, t.jsx)(m.E, { type: "new", variant: "primary" }),
                    }),
                "beta" === c &&
                    (0, t.jsx)("div", {
                        className: N.Oj,
                        children: (0, t.jsx)(m.E, { type: "beta", variant: "primary" }),
                    }),
            ],
        }),
    });
}

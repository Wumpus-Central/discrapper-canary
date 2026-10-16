t.d(i, { $L: () => S, NI: () => k, kd: () => T, TG: () => N, P5: () => b, Ft: () => w, Yq: () => A });
var r = t(477900);
t(582128);
var s = t(503698),
    a = t.n(s),
    n = t(628284),
    o = t(661531),
    l = t(834730),
    d = t(695366);
if (221552 == t.j) var c = t(104510);
if (221552 == t.j) var x = t(297264);
if (221552 == t.j) var m = t(890856);
if (221552 == t.j) var v = t(62010);
var u = t(37537),
    j = t(773669),
    h = t(939981),
    p = t(25525),
    f = t(105292),
    g = t(517826);
function N(e) {
    let { text: i } = e,
        t = (0, u.c)("GuildPowerupCardFooterActive");
    return (0, r.jsxs)("div", {
        className: g.mG,
        children: [
            (0, r.jsx)(n.y, { size: "xs", color: o.A.colors.STATUS_POSITIVE }),
            (0, r.jsx)(l.E, {
                color: "text-feedback-positive",
                variant: t ? "text-sm/semibold" : "text-sm/bold",
                children: i,
            }),
        ],
    });
}
function b(e) {
    let { dateString: i } = e,
        t = (0, u.c)("GuildPowerupCardFooterExpiring");
    return (0, r.jsxs)("div", {
        className: g.mG,
        children: [
            (0, r.jsx)(d.E, { size: "xs", color: o.A.colors.STATUS_WARNING }),
            (0, r.jsx)(l.E, {
                color: "text-feedback-warning",
                variant: t ? "text-sm/semibold" : "text-sm/bold",
                children: f.intl.formatToMarkdownString(p.default["ol/ao/"], {
                    dateString: new Date(i).toLocaleDateString(j.default.locale, { month: "2-digit", day: "2-digit" }),
                }),
            }),
        ],
    });
}
function A(e) {
    let { removingAt: i } = e,
        t = (0, u.c)("GuildPowerupCardFooterRemoving");
    return (0, r.jsxs)("div", {
        className: g.wL,
        children: [
            (0, r.jsx)(d.E, { size: "xs", color: o.A.colors.STATUS_WARNING }),
            (0, r.jsx)(l.E, {
                color: "text-feedback-warning",
                variant: t ? "text-sm/semibold" : "text-sm/bold",
                children: f.intl.formatToPlainString(p.default["6e2ry1"], { dateString: (0, h.A)(i) }),
            }),
        ],
    });
}
function S(e) {
    let { cost: i, costDecorator: t, status: s, className: n } = e,
        d = void 0 !== i ? g._A : g.$3;
    return (0, r.jsxs)("div", {
        className: a()(d, n),
        children: [
            void 0 !== i &&
                (0, r.jsxs)("div", {
                    className: a()(g.mG, g.pT),
                    children: [
                        (0, r.jsx)(c._, { size: "sm", color: o.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                        (0, r.jsx)(l.E, {
                            className: g.q9,
                            tag: "div",
                            variant: "heading-md/semibold",
                            color: "text-subtle",
                            children: f.intl.formatToPlainString(f.t.t2Wbo1, { required: i, decorator: t ?? "" }),
                        }),
                    ],
                }),
            s?.type === "expiring" && (0, r.jsx)(b, { dateString: s.expiringAt }),
            s?.type === "removing" && (0, r.jsx)(A, { removingAt: s.removingAt }),
            s?.type === "active" && (0, r.jsx)(N, { text: s.statusText }),
        ],
    });
}
function T(e) {
    let { children: i } = e;
    return (0, r.jsx)("div", { className: g.UD, children: i });
}
function w(e) {
    let { title: i, textColor: t, children: s, footer: a } = e;
    return (0, r.jsxs)("div", {
        className: g.hQ,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)("div", {
                        className: g.N1,
                        children: (0, r.jsx)(x.D, { color: t, variant: "heading-md/bold", children: i }),
                    }),
                    s,
                ],
            }),
            a,
        ],
    });
}
function k(e) {
    let { ref: i, ...t } = e,
        {
            className: s,
            label: n,
            isActive: o,
            isWarning: l,
            badge: d,
            canRollback: c,
            onClick: x,
            onMouseOver: u,
            onMouseLeave: j,
            children: h,
        } = t;
    return (0, r.jsx)("div", {
        className: a()(g.gp, { [g.Wq]: c && !o }),
        ref: i,
        children: (0, r.jsxs)(m.s, {
            "aria-label": n,
            onClick: x,
            onMouseOver: u,
            onMouseLeave: j,
            className: a()(g.kL, { [g.vu]: o, [g.$e]: l || (c && o) }, s),
            children: [
                h,
                "new" === d &&
                    (0, r.jsx)("div", {
                        className: g.Oj,
                        children: (0, r.jsx)(v.E, { type: "new", variant: "primary" }),
                    }),
                "beta" === d &&
                    (0, r.jsx)("div", {
                        className: g.Oj,
                        children: (0, r.jsx)(v.E, { type: "beta", variant: "primary" }),
                    }),
            ],
        }),
    });
}

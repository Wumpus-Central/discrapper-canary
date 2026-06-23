"use strict";
n.d(t, { Mx: () => C, kj: () => E, iH: () => x, KF: () => g, ri: () => A, $K: () => I });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    r = n(534514),
    a = n(138869),
    o = n(834730),
    u = n(565645),
    c = n(3432),
    d = n(595506);
function m(e) {
    let t,
        { applicationId: n, storeListingBenefits: i, skuBenefits: s, className: r } = e;
    return (
        null != i
            ? (t = i.map((e) => (0, l.jsx)(p, { applicationId: n, benefit: e, className: r }, e.id)))
            : null != s && (t = s.map((e, t) => (0, l.jsx)(h, { benefit: e, className: r }, t))),
        t
    );
}
function h(e) {
    let {
        benefit: t,
        className: n,
        emojiContainerClassName: i,
        showsDescription: r = !0,
        nameTextVariant: a = "text-md/medium",
        nameTextColor: c = "text-strong",
    } = e;
    return (0, l.jsxs)("div", {
        className: s()(d.kL, n),
        children: [
            null != t.emoji &&
                (0, l.jsx)("div", {
                    className: s()(d.qq, i),
                    children: (0, l.jsx)(u.A, {
                        emojiId: t.emoji.id,
                        emojiName: t.emoji.name,
                        animated: t.emoji.animated,
                    }),
                }),
            (0, l.jsxs)("div", {
                className: d.op,
                children: [
                    (0, l.jsx)(o.E, { variant: a, color: c, className: d.UU, children: t.name }),
                    r &&
                        (0, l.jsx)(o.E, {
                            color: "interactive-text-default",
                            variant: "text-sm/normal",
                            children: t.description,
                        }),
                ],
            }),
        ],
    });
}
function p(e) {
    let {
        applicationId: t,
        benefit: n,
        className: i,
        emojiContainerClassName: r,
        showsDescription: a = !0,
        nameTextVariant: u = "text-md/medium",
        nameTextColor: m = "text-strong",
    } = e;
    return (0, l.jsxs)("div", {
        className: s()(d.kL, i),
        children: [
            (0, l.jsx)("div", { className: s()(d.qq, r), children: (0, c.N)(t, n.icon) }),
            (0, l.jsxs)("div", {
                className: d.op,
                children: [
                    (0, l.jsx)(o.E, { variant: u, color: m, className: d.UU, children: n.name }),
                    a &&
                        (0, l.jsx)(o.E, {
                            color: "interactive-text-default",
                            variant: "text-sm/normal",
                            children: n.description,
                        }),
                ],
            }),
        ],
    });
}
var f = n(137089);
function g(e) {
    let { application: t, asset: n, className: i, ...s } = e;
    return (0, l.jsx)(a.A, { application: t, size: a.V.MEDIUM, asset: n, className: i, ...s });
}
function E(e) {
    let { children: t, className: n, id: i, ...a } = e;
    return (0, l.jsx)(r.D, { className: s()(f.wx, n), variant: "heading-xl/extrabold", id: i, ...a, children: t });
}
function A() {
    return (0, l.jsx)("hr", { className: f.yF });
}
function C(e) {
    let { className: t, title: n, description: i, ...s } = e;
    return (0, l.jsxs)("div", {
        className: t,
        ...s,
        children: [
            (0, l.jsx)(r.D, { variant: "heading-md/bold", color: "text-strong", children: n }),
            (0, l.jsx)(r.D, { variant: "heading-sm/normal", color: "text-default", children: i }),
        ],
    });
}
function x(e) {
    let { applicationId: t, storeListingBenefits: n, skuBenefits: i, className: r, ...a } = e;
    return (0, l.jsx)("div", {
        className: s()(f.iq, r),
        ...a,
        children: (0, l.jsx)(m, { applicationId: t, storeListingBenefits: n, skuBenefits: i, className: f.gX }),
    });
}
function I(e) {
    let { children: t, className: n, ...i } = e;
    return (0, l.jsx)("div", { className: s()(f.kL, n), ...i, children: t });
}

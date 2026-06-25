"use strict";
n.d(t, { Mx: () => A, kj: () => m, iH: () => I, KF: () => E, ri: () => g, $K: () => T });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(534514),
    o = n(138869),
    l = n(834730),
    u = n(565645),
    c = n(473545),
    d = n(924850);
function _(e) {
    let t,
        { applicationId: n, storeListingBenefits: r, skuBenefits: s, className: a } = e;
    return (
        null != r
            ? (t = r.map((e) => (0, i.jsx)(f, { applicationId: n, benefit: e, className: a }, e.id)))
            : null != s && (t = s.map((e, t) => (0, i.jsx)(h, { benefit: e, className: a }, t))),
        t
    );
}
function h(e) {
    let {
        benefit: t,
        className: n,
        emojiContainerClassName: r,
        showsDescription: a = !0,
        nameTextVariant: o = "text-md/medium",
        nameTextColor: c = "text-strong",
    } = e;
    return (0, i.jsxs)("div", {
        className: s()(d.kL, n),
        children: [
            null != t.emoji &&
                (0, i.jsx)("div", {
                    className: s()(d.qq, r),
                    children: (0, i.jsx)(u.A, {
                        emojiId: t.emoji.id,
                        emojiName: t.emoji.name,
                        animated: t.emoji.animated,
                    }),
                }),
            (0, i.jsxs)("div", {
                className: d.op,
                children: [
                    (0, i.jsx)(l.E, { variant: o, color: c, className: d.UU, children: t.name }),
                    a &&
                        (0, i.jsx)(l.E, {
                            color: "interactive-text-default",
                            variant: "text-sm/normal",
                            children: t.description,
                        }),
                ],
            }),
        ],
    });
}
function f(e) {
    let {
        applicationId: t,
        benefit: n,
        className: r,
        emojiContainerClassName: a,
        showsDescription: o = !0,
        nameTextVariant: u = "text-md/medium",
        nameTextColor: _ = "text-strong",
    } = e;
    return (0, i.jsxs)("div", {
        className: s()(d.kL, r),
        children: [
            (0, i.jsx)("div", { className: s()(d.qq, a), children: (0, c.N)(t, n.icon) }),
            (0, i.jsxs)("div", {
                className: d.op,
                children: [
                    (0, i.jsx)(l.E, { variant: u, color: _, className: d.UU, children: n.name }),
                    o &&
                        (0, i.jsx)(l.E, {
                            color: "interactive-text-default",
                            variant: "text-sm/normal",
                            children: n.description,
                        }),
                ],
            }),
        ],
    });
}
var p = n(313857);
function E(e) {
    let { application: t, asset: n, className: r, ...s } = e;
    return (0, i.jsx)(o.A, { application: t, size: o.V.MEDIUM, asset: n, className: r, ...s });
}
function m(e) {
    let { children: t, className: n, id: r, ...o } = e;
    return (0, i.jsx)(a.D, { className: s()(p.wx, n), variant: "heading-xl/extrabold", id: r, ...o, children: t });
}
function g() {
    return (0, i.jsx)("hr", { className: p.yF });
}
function A(e) {
    let { className: t, title: n, description: r, ...s } = e;
    return (0, i.jsxs)("div", {
        className: t,
        ...s,
        children: [
            (0, i.jsx)(a.D, { variant: "heading-md/bold", color: "text-strong", children: n }),
            (0, i.jsx)(a.D, { variant: "heading-sm/normal", color: "text-default", children: r }),
        ],
    });
}
function I(e) {
    let { applicationId: t, storeListingBenefits: n, skuBenefits: r, className: a, ...o } = e;
    return (0, i.jsx)("div", {
        className: s()(p.iq, a),
        ...o,
        children: (0, i.jsx)(_, { applicationId: t, storeListingBenefits: n, skuBenefits: r, className: p.gX }),
    });
}
function T(e) {
    let { children: t, className: n, ...r } = e;
    return (0, i.jsx)("div", { className: s()(p.kL, n), ...r, children: t });
}

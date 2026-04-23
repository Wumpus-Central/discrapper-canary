"use strict";
n.d(t, { Mx: () => A, kj: () => g, iH: () => I, KF: () => f, ri: () => p, $K: () => T });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(534514),
    o = n(138869),
    l = n(834730),
    d = n(565645),
    _ = n(3432),
    u = n(595506);
function c(e) {
    let t,
        { applicationId: n, storeListingBenefits: r, skuBenefits: s, className: a } = e;
    return (
        null != r
            ? (t = r.map((e) => (0, i.jsx)(h, { applicationId: n, benefit: e, className: a }, e.id)))
            : null != s && (t = s.map((e, t) => (0, i.jsx)(E, { benefit: e, className: a }, t))),
        t
    );
}
function E(e) {
    let {
        benefit: t,
        className: n,
        emojiContainerClassName: r,
        showsDescription: a = !0,
        nameTextVariant: o = "text-md/medium",
        nameTextColor: _ = "text-strong",
    } = e;
    return (0, i.jsxs)("div", {
        className: s()(u.kL, n),
        children: [
            null != t.emoji &&
                (0, i.jsx)("div", {
                    className: s()(u.qq, r),
                    children: (0, i.jsx)(d.A, {
                        emojiId: t.emoji.id,
                        emojiName: t.emoji.name,
                        animated: t.emoji.animated,
                    }),
                }),
            (0, i.jsxs)("div", {
                className: u.op,
                children: [
                    (0, i.jsx)(l.E, { variant: o, color: _, className: u.UU, children: t.name }),
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
function h(e) {
    let {
        applicationId: t,
        benefit: n,
        className: r,
        emojiContainerClassName: a,
        showsDescription: o = !0,
        nameTextVariant: d = "text-md/medium",
        nameTextColor: c = "text-strong",
    } = e;
    return (0, i.jsxs)("div", {
        className: s()(u.kL, r),
        children: [
            (0, i.jsx)("div", { className: s()(u.qq, a), children: (0, _.N)(t, n.icon) }),
            (0, i.jsxs)("div", {
                className: u.op,
                children: [
                    (0, i.jsx)(l.E, { variant: d, color: c, className: u.UU, children: n.name }),
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
var m = n(137089);
let f = (e) => {
        let { application: t, asset: n, className: r, ...s } = e;
        return (0, i.jsx)(o.A, { application: t, size: o.V.MEDIUM, asset: n, className: r, ...s });
    },
    g = (e) => {
        let { children: t, className: n, id: r, ...o } = e;
        return (0, i.jsx)(a.D, { className: s()(m.wx, n), variant: "heading-xl/extrabold", id: r, ...o, children: t });
    };
function p() {
    return (0, i.jsx)("hr", { className: m.yF });
}
let A = (e) => {
        let { className: t, title: n, description: r, ...s } = e;
        return (0, i.jsxs)("div", {
            className: t,
            ...s,
            children: [
                (0, i.jsx)(a.D, { variant: "heading-md/bold", color: "text-strong", children: n }),
                (0, i.jsx)(a.D, { variant: "heading-sm/normal", color: "text-default", children: r }),
            ],
        });
    },
    I = (e) => {
        let { applicationId: t, storeListingBenefits: n, skuBenefits: r, className: a, ...o } = e;
        return (0, i.jsx)("div", {
            className: s()(m.iq, a),
            ...o,
            children: (0, i.jsx)(c, { applicationId: t, storeListingBenefits: n, skuBenefits: r, className: m.gX }),
        });
    },
    T = (e) => {
        let { children: t, className: n, ...r } = e;
        return (0, i.jsx)("div", { className: s()(m.kL, n), ...r, children: t });
    };

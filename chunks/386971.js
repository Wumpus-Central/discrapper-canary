"use strict";
n.d(t, { mc: () => c });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(834730),
    o = n(565645),
    l = n(3432),
    u = n(595506);
function c(e) {
    let t,
        { applicationId: n, storeListingBenefits: i, skuBenefits: s, className: a } = e;
    return (
        null != i
            ? (t = i.map((e) => (0, r.jsx)(_, { applicationId: n, benefit: e, className: a }, e.id)))
            : null != s && (t = s.map((e, t) => (0, r.jsx)(d, { benefit: e, className: a }, t))),
        t
    );
}
function d(e) {
    let {
        benefit: t,
        className: n,
        emojiContainerClassName: i,
        showsDescription: l = !0,
        nameTextVariant: c = "text-md/medium",
        nameTextColor: d = "text-strong",
    } = e;
    return (0, r.jsxs)("div", {
        className: s()(u.kL, n),
        children: [
            null != t.emoji &&
                (0, r.jsx)("div", {
                    className: s()(u.qq, i),
                    children: (0, r.jsx)(o.A, {
                        emojiId: t.emoji.id,
                        emojiName: t.emoji.name,
                        animated: t.emoji.animated,
                    }),
                }),
            (0, r.jsxs)("div", {
                className: u.op,
                children: [
                    (0, r.jsx)(a.E, { variant: c, color: d, className: u.UU, children: t.name }),
                    l &&
                        (0, r.jsx)(a.E, {
                            color: "interactive-text-default",
                            variant: "text-sm/normal",
                            children: t.description,
                        }),
                ],
            }),
        ],
    });
}
function _(e) {
    let {
        applicationId: t,
        benefit: n,
        className: i,
        emojiContainerClassName: o,
        showsDescription: c = !0,
        nameTextVariant: d = "text-md/medium",
        nameTextColor: _ = "text-strong",
    } = e;
    return (0, r.jsxs)("div", {
        className: s()(u.kL, i),
        children: [
            (0, r.jsx)("div", { className: s()(u.qq, o), children: (0, l.N)(t, n.icon) }),
            (0, r.jsxs)("div", {
                className: u.op,
                children: [
                    (0, r.jsx)(a.E, { variant: d, color: _, className: u.UU, children: n.name }),
                    c &&
                        (0, r.jsx)(a.E, {
                            color: "interactive-text-default",
                            variant: "text-sm/normal",
                            children: n.description,
                        }),
                ],
            }),
        ],
    });
}

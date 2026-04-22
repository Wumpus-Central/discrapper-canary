n.d(t, { mc: () => c });
var l = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    r = n(834730),
    s = n(565645),
    o = n(3432),
    u = n(595506);
function c(e) {
    let t,
        { applicationId: n, storeListingBenefits: i, skuBenefits: a, className: r } = e;
    return (
        null != i
            ? (t = i.map((e) => (0, l.jsx)(p, { applicationId: n, benefit: e, className: r }, e.id)))
            : null != a && (t = a.map((e, t) => (0, l.jsx)(d, { benefit: e, className: r }, t))),
        t
    );
}
function d(e) {
    let {
        benefit: t,
        className: n,
        emojiContainerClassName: i,
        showsDescription: o = !0,
        nameTextVariant: c = "text-md/medium",
        nameTextColor: d = "text-strong",
    } = e;
    return (0, l.jsxs)("div", {
        className: a()(u.kL, n),
        children: [
            null != t.emoji &&
                (0, l.jsx)("div", {
                    className: a()(u.qq, i),
                    children: (0, l.jsx)(s.A, {
                        emojiId: t.emoji.id,
                        emojiName: t.emoji.name,
                        animated: t.emoji.animated,
                    }),
                }),
            (0, l.jsxs)("div", {
                className: u.op,
                children: [
                    (0, l.jsx)(r.E, { variant: c, color: d, className: u.UU, children: t.name }),
                    o &&
                        (0, l.jsx)(r.E, {
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
        emojiContainerClassName: s,
        showsDescription: c = !0,
        nameTextVariant: d = "text-md/medium",
        nameTextColor: p = "text-strong",
    } = e;
    return (0, l.jsxs)("div", {
        className: a()(u.kL, i),
        children: [
            (0, l.jsx)("div", { className: a()(u.qq, s), children: (0, o.N)(t, n.icon) }),
            (0, l.jsxs)("div", {
                className: u.op,
                children: [
                    (0, l.jsx)(r.E, { variant: d, color: p, className: u.UU, children: n.name }),
                    c &&
                        (0, l.jsx)(r.E, {
                            color: "interactive-text-default",
                            variant: "text-sm/normal",
                            children: n.description,
                        }),
                ],
            }),
        ],
    });
}

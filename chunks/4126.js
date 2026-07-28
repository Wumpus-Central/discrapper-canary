n.d(t, { Mx: () => S, kj: () => f, iH: () => y, KF: () => E, ri: () => A, $K: () => P });
var l = n(477900);
n(582128);
var i = n(503698),
    r = n.n(i),
    a = n(297264),
    s = n(138869),
    o = n(834730),
    u = n(565645),
    c = n(3432),
    d = n(612506);
function p(e) {
    let t,
        { applicationId: n, storeListingBenefits: i, skuBenefits: r, className: a } = e;
    return (
        null != i
            ? (t = i.map((e) => (0, l.jsx)(C, { applicationId: n, benefit: e, className: a }, e.id)))
            : null != r && (t = r.map((e, t) => (0, l.jsx)(m, { benefit: e, className: a }, t))),
        t
    );
}
function m(e) {
    let {
        benefit: t,
        className: n,
        emojiContainerClassName: i,
        showsDescription: a = !0,
        nameTextVariant: s = "text-md/medium",
        nameTextColor: c = "text-strong",
    } = e;
    return (0, l.jsxs)("div", {
        className: r()(d.kL, n),
        children: [
            null != t.emoji &&
                (0, l.jsx)("div", {
                    className: r()(d.qq, i),
                    children: (0, l.jsx)(u.A, {
                        emojiId: t.emoji.id,
                        emojiName: t.emoji.name,
                        animated: t.emoji.animated,
                    }),
                }),
            (0, l.jsxs)("div", {
                className: d.op,
                children: [
                    (0, l.jsx)(o.E, { variant: s, color: c, className: d.UU, children: t.name }),
                    a &&
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
function C(e) {
    let {
        applicationId: t,
        benefit: n,
        className: i,
        emojiContainerClassName: a,
        showsDescription: s = !0,
        nameTextVariant: u = "text-md/medium",
        nameTextColor: p = "text-strong",
    } = e;
    return (0, l.jsxs)("div", {
        className: r()(d.kL, i),
        children: [
            (0, l.jsx)("div", { className: r()(d.qq, a), children: (0, c.N)(t, n.icon) }),
            (0, l.jsxs)("div", {
                className: d.op,
                children: [
                    (0, l.jsx)(o.E, { variant: u, color: p, className: d.UU, children: n.name }),
                    s &&
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
var h = n(799449);
function E(e) {
    let { application: t, asset: n, className: i, ...r } = e;
    return (0, l.jsx)(s.A, { application: t, size: s.V.MEDIUM, asset: n, className: i, ...r });
}
function f(e) {
    let { children: t, className: n, id: i, ...s } = e;
    return (0, l.jsx)(a.D, { className: r()(h.wx, n), variant: "heading-xl/extrabold", id: i, ...s, children: t });
}
function A() {
    return (0, l.jsx)("hr", { className: h.yF });
}
function S(e) {
    let { className: t, title: n, description: i, ...r } = e;
    return (0, l.jsxs)("div", {
        className: t,
        ...r,
        children: [
            (0, l.jsx)(a.D, { variant: "heading-md/bold", color: "text-strong", children: n }),
            (0, l.jsx)(a.D, { variant: "heading-sm/normal", color: "text-default", children: i }),
        ],
    });
}
function y(e) {
    let { applicationId: t, storeListingBenefits: n, skuBenefits: i, className: a, ...s } = e;
    return (0, l.jsx)("div", {
        className: r()(h.iq, a),
        ...s,
        children: (0, l.jsx)(p, { applicationId: t, storeListingBenefits: n, skuBenefits: i, className: h.gX }),
    });
}
function P(e) {
    let { children: t, className: n, ...i } = e;
    return (0, l.jsx)("div", { className: r()(h.kL, n), ...i, children: t });
}

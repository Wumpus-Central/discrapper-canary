n.d(t, { Mx: () => _, kj: () => C, iH: () => S, KF: () => E, ri: () => y, $K: () => P });
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    a = n(534514),
    s = n(138869),
    o = n(834730),
    u = n(565645),
    c = n(3432),
    d = n(595506);
function p(e) {
    let t,
        { applicationId: n, storeListingBenefits: r, skuBenefits: i, className: a } = e;
    return (
        null != r
            ? (t = r.map((e) => (0, l.jsx)(h, { applicationId: n, benefit: e, className: a }, e.id)))
            : null != i && (t = i.map((e, t) => (0, l.jsx)(m, { benefit: e, className: a }, t))),
        t
    );
}
function m(e) {
    let {
        benefit: t,
        className: n,
        emojiContainerClassName: r,
        showsDescription: a = !0,
        nameTextVariant: s = "text-md/medium",
        nameTextColor: c = "text-strong",
    } = e;
    return (0, l.jsxs)("div", {
        className: i()(d.kL, n),
        children: [
            null != t.emoji &&
                (0, l.jsx)("div", {
                    className: i()(d.qq, r),
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
function h(e) {
    let {
        applicationId: t,
        benefit: n,
        className: r,
        emojiContainerClassName: a,
        showsDescription: s = !0,
        nameTextVariant: u = "text-md/medium",
        nameTextColor: p = "text-strong",
    } = e;
    return (0, l.jsxs)("div", {
        className: i()(d.kL, r),
        children: [
            (0, l.jsx)("div", { className: i()(d.qq, a), children: (0, c.N)(t, n.icon) }),
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
var A = n(137089);
let E = (e) => {
        let { application: t, asset: n, className: r, ...i } = e;
        return (0, l.jsx)(s.A, { application: t, size: s.V.MEDIUM, asset: n, className: r, ...i });
    },
    C = (e) => {
        let { children: t, className: n, id: r, ...s } = e;
        return (0, l.jsx)(a.D, { className: i()(A.wx, n), variant: "heading-xl/extrabold", id: r, ...s, children: t });
    };
function y() {
    return (0, l.jsx)("hr", { className: A.yF });
}
let _ = (e) => {
        let { className: t, title: n, description: r, ...i } = e;
        return (0, l.jsxs)("div", {
            className: t,
            ...i,
            children: [
                (0, l.jsx)(a.D, { variant: "heading-md/bold", color: "text-strong", children: n }),
                (0, l.jsx)(a.D, { variant: "heading-sm/normal", color: "text-default", children: r }),
            ],
        });
    },
    S = (e) => {
        let { applicationId: t, storeListingBenefits: n, skuBenefits: r, className: a, ...s } = e;
        return (0, l.jsx)("div", {
            className: i()(A.iq, a),
            ...s,
            children: (0, l.jsx)(p, { applicationId: t, storeListingBenefits: n, skuBenefits: r, className: A.gX }),
        });
    },
    P = (e) => {
        let { children: t, className: n, ...r } = e;
        return (0, l.jsx)("div", { className: i()(A.kL, n), ...r, children: t });
    };

n.d(t, { Mx: () => y, kj: () => _, iH: () => f, KF: () => C, ri: () => E, $K: () => P });
var l = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    r = n(534514),
    s = n(138869),
    o = n(834730),
    u = n(565645),
    c = n(3432),
    d = n(595506);
function p(e) {
    let t,
        { applicationId: n, storeListingBenefits: a, skuBenefits: i, className: r } = e;
    return (
        null != a
            ? (t = a.map((e) => (0, l.jsx)(h, { applicationId: n, benefit: e, className: r }, e.id)))
            : null != i && (t = i.map((e, t) => (0, l.jsx)(m, { benefit: e, className: r }, t))),
        t
    );
}
function m(e) {
    let {
        benefit: t,
        className: n,
        emojiContainerClassName: a,
        showsDescription: r = !0,
        nameTextVariant: s = "text-md/medium",
        nameTextColor: c = "text-strong",
    } = e;
    return (0, l.jsxs)("div", {
        className: i()(d.kL, n),
        children: [
            null != t.emoji &&
                (0, l.jsx)("div", {
                    className: i()(d.qq, a),
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
function h(e) {
    let {
        applicationId: t,
        benefit: n,
        className: a,
        emojiContainerClassName: r,
        showsDescription: s = !0,
        nameTextVariant: u = "text-md/medium",
        nameTextColor: p = "text-strong",
    } = e;
    return (0, l.jsxs)("div", {
        className: i()(d.kL, a),
        children: [
            (0, l.jsx)("div", { className: i()(d.qq, r), children: (0, c.N)(t, n.icon) }),
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
let C = (e) => {
        let { application: t, asset: n, className: a, ...i } = e;
        return (0, l.jsx)(s.A, { application: t, size: s.V.MEDIUM, asset: n, className: a, ...i });
    },
    _ = (e) => {
        let { children: t, className: n, id: a, ...s } = e;
        return (0, l.jsx)(r.D, { className: i()(A.wx, n), variant: "heading-xl/extrabold", id: a, ...s, children: t });
    };
function E() {
    return (0, l.jsx)("hr", { className: A.yF });
}
let y = (e) => {
        let { className: t, title: n, description: a, ...i } = e;
        return (0, l.jsxs)("div", {
            className: t,
            ...i,
            children: [
                (0, l.jsx)(r.D, { variant: "heading-md/bold", color: "text-strong", children: n }),
                (0, l.jsx)(r.D, { variant: "heading-sm/normal", color: "text-default", children: a }),
            ],
        });
    },
    f = (e) => {
        let { applicationId: t, storeListingBenefits: n, skuBenefits: a, className: r, ...s } = e;
        return (0, l.jsx)("div", {
            className: i()(A.iq, r),
            ...s,
            children: (0, l.jsx)(p, { applicationId: t, storeListingBenefits: n, skuBenefits: a, className: A.gX }),
        });
    },
    P = (e) => {
        let { children: t, className: n, ...a } = e;
        return (0, l.jsx)("div", { className: i()(A.kL, n), ...a, children: t });
    };

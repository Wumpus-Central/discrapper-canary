i.d(t, { A: () => N });
var n = i(627968),
    s = i(64700),
    a = i(503698),
    l = i.n(a),
    r = i(735438),
    o = i.n(r),
    d = i(643612),
    u = i(448381),
    m = i(96782),
    h = i(838541),
    c = i(347178);
let x = Math.round((h.Rk - 4) / 2);
function g(e) {
    let { visualMediaItems: t, maxWidth: i } = e,
        s = t.length;
    if (1 === s) return (0, n.jsx)(p, { itemsForLayout: t, isSingleImage: !0, maxWidth: i });
    if (2 === s) return (0, n.jsx)(j, { itemsForLayout: t, maxWidth: i });
    if (3 === s) return (0, n.jsx)(C, { itemsForLayout: t, maxWidth: i });
    if (4 === s) return (0, n.jsx)(y, { itemsForLayout: t, maxWidth: i });
    let a = s % 3;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            1 === a && (0, n.jsx)(p, { itemsForLayout: t.slice(0, a), maxWidth: i }),
            2 === a && (0, n.jsx)(j, { itemsForLayout: t.slice(0, a), maxWidth: i }),
            0 === a
                ? (0, n.jsx)(f, { itemsForLayout: t, maxWidth: i })
                : (0, n.jsx)(f, { itemsForLayout: t.slice(a), maxWidth: i }),
        ],
    });
}
function p(e) {
    let { itemsForLayout: t, maxWidth: i, isSingleImage: s } = e,
        a = t[0];
    return (0, n.jsx)("div", {
        className: l()(c.EO, { [c.Gj]: s, [c.Kv]: !s }),
        children: (0, n.jsx)(I, { props: a, useFullWidth: !s, isSingleItem: !0, maxWidth: i }),
    });
}
function j(e) {
    let { itemsForLayout: t, maxWidth: i } = e,
        s = Math.round((i - 4) / 2);
    return (0, n.jsx)("div", {
        className: c.SQ,
        children: t.map((e) =>
            (0, n.jsx)(
                "div",
                { className: c.XE, children: (0, n.jsx)(I, { props: e, maxWidth: s, maxHeight: s }) },
                e.item.uniqueId,
            ),
        ),
    });
}
function C(e) {
    let { itemsForLayout: t, maxWidth: i } = e,
        s = Math.round((2 * (i - 4)) / 3),
        a = s / 2;
    return (0, n.jsxs)("div", {
        className: l()(c.SQ, c.o_),
        children: [
            (0, n.jsx)("div", { className: c.es, children: (0, n.jsx)(I, { props: t[0], maxWidth: s }) }),
            (0, n.jsx)("div", {
                className: c.N$,
                children: (0, n.jsx)("div", {
                    className: c._i,
                    children: t
                        .splice(1)
                        .map((e) =>
                            (0, n.jsx)(
                                "div",
                                { className: c.$w, children: (0, n.jsx)(I, { props: e, maxWidth: a, maxHeight: x }) },
                                e.item.uniqueId,
                            ),
                        ),
                }),
            }),
        ],
    });
}
function y(e) {
    let { itemsForLayout: t, maxWidth: i } = e,
        s = Math.round((i - 4) / 2);
    return (0, n.jsx)("div", {
        className: c.av,
        children: t.map((e) =>
            (0, n.jsx)(I, { props: e, maxWidth: s, maxHeight: x, displayGridItem: !0 }, e.item.uniqueId),
        ),
    });
}
function f(e) {
    let { itemsForLayout: t, maxWidth: i } = e,
        s = Math.round((i - 8) / 3);
    return (0, n.jsx)("div", {
        className: c._f,
        children: t.map((e) =>
            (0, n.jsx)(I, { props: e, maxWidth: s, maxHeight: s, displayGridItem: !0 }, e.item.uniqueId),
        ),
    });
}
function I(e) {
    var t, i;
    let {
            props: s,
            maxWidth: a = h.k6,
            maxHeight: r = h.Rk,
            useFullWidth: o = !0,
            isSingleItem: u = !1,
            displayGridItem: x,
        } = e,
        g = s.item.type,
        p = {
            ...s,
            ...("IMAGE" === g &&
                ((t = s.className), { className: l()(t, c.s_), imgContainerClassName: c.nh, imgClassName: c.g2 })),
            ...(("VIDEO" === g || "CLIP" === g) && ((i = s.className), { className: l()(i, c.g2) })),
            displayGridItem: x,
            mediaLayoutType: h.dG.MOSAIC,
            maxWidth: a,
            maxHeight: r,
            useFullWidth: o,
            isSingleMosaicItem: u,
        };
    return (0, n.jsx)(d.G.Provider, { value: s.gifFavoriteButton, children: (0, n.jsx)(m.Ay, { ...p }) });
}
let N = function (e) {
    var t;
    let { items: i, isInAppComponentsV2: a = !1 } = e,
        { visualMediaItems: r, nonVisualMediaItems: d } =
            ((t = i),
            s.useMemo(() => {
                let [e, i] = o().partition(t, (e) => (0, u.Xg)(e.item.type));
                return { visualMediaItems: e, nonVisualMediaItems: i };
            }, [t])),
        m = a ? h.ww : h.k6;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            r.length > 0 &&
                (0, n.jsx)("div", {
                    className: l()(c.XU, { [c.dM]: a, [c.eO]: 1 === r.length && "CLIP" === r[0].item.type }),
                    children: (0, n.jsx)(g, { visualMediaItems: r, maxWidth: m }),
                }),
            d.length > 0 &&
                (0, n.jsx)("div", {
                    className: c.s,
                    children: d.map((e) =>
                        (0, n.jsx)("div", { className: c.Br, children: (0, n.jsx)(I, { props: e }) }, e.item.uniqueId),
                    ),
                }),
        ],
    });
};

i.d(t, { A: () => N });
var s = i(627968),
    n = i(64700),
    l = i(503698),
    a = i.n(l),
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
        n = t.length;
    if (1 === n) return (0, s.jsx)(p, { itemsForLayout: t, isSingleImage: !0, maxWidth: i });
    if (2 === n) return (0, s.jsx)(j, { itemsForLayout: t, maxWidth: i });
    if (3 === n) return (0, s.jsx)(C, { itemsForLayout: t, maxWidth: i });
    if (4 === n) return (0, s.jsx)(y, { itemsForLayout: t, maxWidth: i });
    let l = n % 3;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            1 === l && (0, s.jsx)(p, { itemsForLayout: t.slice(0, l), maxWidth: i }),
            2 === l && (0, s.jsx)(j, { itemsForLayout: t.slice(0, l), maxWidth: i }),
            0 === l
                ? (0, s.jsx)(I, { itemsForLayout: t, maxWidth: i })
                : (0, s.jsx)(I, { itemsForLayout: t.slice(l), maxWidth: i }),
        ],
    });
}
function p(e) {
    let { itemsForLayout: t, maxWidth: i, isSingleImage: n } = e,
        l = t[0];
    return (0, s.jsx)("div", {
        className: a()(c.EO, { [c.Gj]: n, [c.Kv]: !n }),
        children: (0, s.jsx)(f, { props: l, useFullWidth: !n, isSingleItem: !0, maxWidth: i }),
    });
}
function j(e) {
    let { itemsForLayout: t, maxWidth: i } = e,
        n = Math.round((i - 4) / 2);
    return (0, s.jsx)("div", {
        className: c.SQ,
        children: t.map((e) =>
            (0, s.jsx)(
                "div",
                { className: c.XE, children: (0, s.jsx)(f, { props: e, maxWidth: n, maxHeight: n }) },
                e.item.uniqueId,
            ),
        ),
    });
}
function C(e) {
    let { itemsForLayout: t, maxWidth: i } = e,
        n = Math.round((2 * (i - 4)) / 3),
        l = n / 2;
    return (0, s.jsxs)("div", {
        className: a()(c.SQ, c.o_),
        children: [
            (0, s.jsx)("div", { className: c.es, children: (0, s.jsx)(f, { props: t[0], maxWidth: n }) }),
            (0, s.jsx)("div", {
                className: c.N$,
                children: (0, s.jsx)("div", {
                    className: c._i,
                    children: t
                        .splice(1)
                        .map((e) =>
                            (0, s.jsx)(
                                "div",
                                { className: c.$w, children: (0, s.jsx)(f, { props: e, maxWidth: l, maxHeight: x }) },
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
        n = Math.round((i - 4) / 2);
    return (0, s.jsx)("div", {
        className: c.av,
        children: t.map((e) =>
            (0, s.jsx)(f, { props: e, maxWidth: n, maxHeight: x, displayGridItem: !0 }, e.item.uniqueId),
        ),
    });
}
function I(e) {
    let { itemsForLayout: t, maxWidth: i } = e,
        n = Math.round((i - 8) / 3);
    return (0, s.jsx)("div", {
        className: c._f,
        children: t.map((e) =>
            (0, s.jsx)(f, { props: e, maxWidth: n, maxHeight: n, displayGridItem: !0 }, e.item.uniqueId),
        ),
    });
}
function f(e) {
    let t,
        i,
        {
            props: n,
            maxWidth: l = h.k6,
            maxHeight: r = h.Rk,
            useFullWidth: o = !0,
            isSingleItem: u = !1,
            displayGridItem: x,
        } = e,
        g = n.item.type,
        p = {
            ...n,
            ...("IMAGE" === g &&
                ((t = n.className), { className: a()(t, c.s_), imgContainerClassName: c.nh, imgClassName: c.g2 })),
            ...(("VIDEO" === g || "CLIP" === g) && ((i = n.className), { className: a()(i, c.g2) })),
            displayGridItem: x,
            mediaLayoutType: h.dG.MOSAIC,
            maxWidth: l,
            maxHeight: r,
            useFullWidth: o,
            isSingleMosaicItem: u,
        };
    return (0, s.jsx)(d.G.Provider, { value: n.gifFavoriteButton, children: (0, s.jsx)(m.Ay, { ...p }) });
}
let N = function (e) {
    var t;
    let { items: i, isInAppComponentsV2: l = !1 } = e,
        { visualMediaItems: r, nonVisualMediaItems: d } =
            ((t = i),
            n.useMemo(() => {
                let [e, i] = o().partition(t, (e) => (0, u.Xg)(e.item.type));
                return { visualMediaItems: e, nonVisualMediaItems: i };
            }, [t])),
        m = l ? h.ww : h.k6;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            r.length > 0 &&
                (0, s.jsx)("div", {
                    className: a()(c.XU, { [c.dM]: l, [c.eO]: 1 === r.length && "CLIP" === r[0].item.type }),
                    children: (0, s.jsx)(g, { visualMediaItems: r, maxWidth: m }),
                }),
            d.length > 0 &&
                (0, s.jsx)("div", {
                    className: c.s,
                    children: d.map((e) =>
                        (0, s.jsx)("div", { className: c.Br, children: (0, s.jsx)(f, { props: e }) }, e.item.uniqueId),
                    ),
                }),
        ],
    });
};

n.d(t, { A: () => N });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(284009),
    o = n.n(r),
    u = n(735438),
    d = n.n(u),
    m = n(643612),
    h = n(448381),
    c = n(96782),
    x = n(838541),
    g = n(907423);
let p = Math.round((x.Rk - 4) / 2);
function I(e) {
    let { visualMediaItems: t, maxWidth: n, footer: s } = e;
    null != s && o()(1 === t.length, "footer only gets applied to single items");
    let l = t.length;
    if (1 === l) return (0, i.jsx)(f, { itemsForLayout: t, isSingleImage: !0, footer: s, maxWidth: n });
    if (2 === l) return (0, i.jsx)(A, { itemsForLayout: t, maxWidth: n });
    if (3 === l) return (0, i.jsx)(j, { itemsForLayout: t, maxWidth: n });
    if (4 === l) return (0, i.jsx)(C, { itemsForLayout: t, maxWidth: n });
    let a = l % 3;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            1 === a && (0, i.jsx)(f, { itemsForLayout: t.slice(0, a), maxWidth: n }),
            2 === a && (0, i.jsx)(A, { itemsForLayout: t.slice(0, a), maxWidth: n }),
            0 === a
                ? (0, i.jsx)(y, { itemsForLayout: t, maxWidth: n })
                : (0, i.jsx)(y, { itemsForLayout: t.slice(a), maxWidth: n }),
        ],
    });
}
function f(e) {
    let { itemsForLayout: t, maxWidth: n, isSingleImage: s, footer: l } = e,
        r = t[0];
    return (0, i.jsx)("div", {
        className: a()(g.EO, { [g.Gj]: s, [g.Kv]: !s, [g.yq]: null != l }),
        children: (0, i.jsx)(E, { props: r, useFullWidth: !s, isSingleItem: !0, maxWidth: n, footer: l }),
    });
}
function A(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        s = Math.round((n - 4) / 2);
    return (0, i.jsx)("div", {
        className: g.SQ,
        children: t.map((e) =>
            (0, i.jsx)(
                "div",
                { className: g.XE, children: (0, i.jsx)(E, { props: e, maxWidth: s, maxHeight: s }) },
                e.item.uniqueId,
            ),
        ),
    });
}
function j(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        s = Math.round((2 * (n - 4)) / 3),
        l = s / 2;
    return (0, i.jsxs)("div", {
        className: a()(g.SQ, g.o_),
        children: [
            (0, i.jsx)("div", { className: g.es, children: (0, i.jsx)(E, { props: t[0], maxWidth: s }) }),
            (0, i.jsx)("div", {
                className: g.N$,
                children: (0, i.jsx)("div", {
                    className: g._i,
                    children: t
                        .splice(1)
                        .map((e) =>
                            (0, i.jsx)(
                                "div",
                                { className: g.$w, children: (0, i.jsx)(E, { props: e, maxWidth: l, maxHeight: p }) },
                                e.item.uniqueId,
                            ),
                        ),
                }),
            }),
        ],
    });
}
function C(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        s = Math.round((n - 4) / 2);
    return (0, i.jsx)("div", {
        className: g.av,
        children: t.map((e) =>
            (0, i.jsx)(E, { props: e, maxWidth: s, maxHeight: p, displayGridItem: !0 }, e.item.uniqueId),
        ),
    });
}
function y(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        s = Math.round((n - 8) / 3);
    return (0, i.jsx)("div", {
        className: g._f,
        children: t.map((e) =>
            (0, i.jsx)(E, { props: e, maxWidth: s, maxHeight: s, displayGridItem: !0 }, e.item.uniqueId),
        ),
    });
}
function E(e) {
    let t,
        n,
        {
            props: s,
            maxWidth: l = x.k6,
            maxHeight: r = x.Rk,
            useFullWidth: o = !0,
            isSingleItem: u = !1,
            footer: d,
            displayGridItem: h,
        } = e,
        p = s.item.type,
        I = {
            ...s,
            ...("IMAGE" === p &&
                ((t = s.className), { className: a()(t, g.s_), imgContainerClassName: g.nh, imgClassName: g.g2 })),
            ...("VIDEO" === p && ((n = s.className), { className: a()(n, g.g2) })),
            displayGridItem: h,
            mediaLayoutType: x.dG.MOSAIC,
            maxWidth: l,
            maxHeight: r,
            useFullWidth: o,
            isSingleMosaicItem: u,
        };
    return (0, i.jsx)(m.G.Provider, { value: s.gifFavoriteButton, children: (0, i.jsx)(c.Ay, { ...I, footer: d }) });
}
let N = function (e) {
    var t;
    let { items: n, isInAppComponentsV2: l = !1 } = e,
        {
            groupableVisualMediaItems: r,
            nonGroupableVisualMediaItems: o,
            nonVisualMediaItems: u,
        } = ((t = n),
        s.useMemo(() => {
            let [e, n] = d().partition(t, (e) => (0, h.Xg)(e.item.type)),
                [i, s] = d().partition(e, (e) => (0, h.EF)(e.item.type));
            return { groupableVisualMediaItems: i, nonGroupableVisualMediaItems: s, nonVisualMediaItems: n };
        }, [t])),
        m = l ? x.ww : x.k6;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r.length > 0 &&
                (0, i.jsx)("div", {
                    className: a()(g.XU, { [g.dM]: l }),
                    children: (0, i.jsx)(I, { visualMediaItems: r, maxWidth: m }),
                }),
            o.length > 0 &&
                o.map((e) => {
                    let t = e.renderMosaicItemFooter({ item: e.item, message: e.message });
                    return (0, i.jsx)(
                        "div",
                        {
                            className: a()(g.XU, { [g.dM]: l }),
                            children: (0, i.jsx)(I, { visualMediaItems: [e], footer: t, maxWidth: m }),
                        },
                        e.item.uniqueId,
                    );
                }),
            u.length > 0 &&
                (0, i.jsx)("div", {
                    className: g.s,
                    children: u.map((e) =>
                        (0, i.jsx)("div", { className: g.Br, children: (0, i.jsx)(E, { props: e }) }, e.item.uniqueId),
                    ),
                }),
        ],
    });
};

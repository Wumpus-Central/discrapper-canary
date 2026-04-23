n.d(t, { A: () => N });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(284009),
    o = n.n(r),
    u = n(735438),
    d = n.n(u),
    m = n(672477),
    c = n(643612),
    h = n(448381),
    x = n(96782),
    g = n(838541),
    p = n(347178);
let I = Math.round((g.Rk - 4) / 2);
function f(e) {
    let { visualMediaItems: t, maxWidth: n, footer: s } = e;
    null != s && o()(1 === t.length, "footer only gets applied to single items");
    let l = t.length;
    if (1 === l) return (0, i.jsx)(C, { itemsForLayout: t, isSingleImage: !0, footer: s, maxWidth: n });
    if (2 === l) return (0, i.jsx)(A, { itemsForLayout: t, maxWidth: n });
    if (3 === l) return (0, i.jsx)(j, { itemsForLayout: t, maxWidth: n });
    if (4 === l) return (0, i.jsx)(y, { itemsForLayout: t, maxWidth: n });
    let a = l % 3;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            1 === a && (0, i.jsx)(C, { itemsForLayout: t.slice(0, a), maxWidth: n }),
            2 === a && (0, i.jsx)(A, { itemsForLayout: t.slice(0, a), maxWidth: n }),
            0 === a
                ? (0, i.jsx)(E, { itemsForLayout: t, maxWidth: n })
                : (0, i.jsx)(E, { itemsForLayout: t.slice(a), maxWidth: n }),
        ],
    });
}
function C(e) {
    let { itemsForLayout: t, maxWidth: n, isSingleImage: s, footer: l } = e,
        r = t[0];
    return (0, i.jsx)("div", {
        className: a()(p.EO, { [p.Gj]: s, [p.Kv]: !s, [p.yq]: null != l }),
        children: (0, i.jsx)(M, { props: r, useFullWidth: !s, isSingleItem: !0, maxWidth: n, footer: l }),
    });
}
function A(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        s = Math.round((n - 4) / 2);
    return (0, i.jsx)("div", {
        className: p.SQ,
        children: t.map((e) =>
            (0, i.jsx)(
                "div",
                { className: p.XE, children: (0, i.jsx)(M, { props: e, maxWidth: s, maxHeight: s }) },
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
        className: a()(p.SQ, p.o_),
        children: [
            (0, i.jsx)("div", { className: p.es, children: (0, i.jsx)(M, { props: t[0], maxWidth: s }) }),
            (0, i.jsx)("div", {
                className: p.N$,
                children: (0, i.jsx)("div", {
                    className: p._i,
                    children: t
                        .splice(1)
                        .map((e) =>
                            (0, i.jsx)(
                                "div",
                                { className: p.$w, children: (0, i.jsx)(M, { props: e, maxWidth: l, maxHeight: I }) },
                                e.item.uniqueId,
                            ),
                        ),
                }),
            }),
        ],
    });
}
function y(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        s = Math.round((n - 4) / 2);
    return (0, i.jsx)("div", {
        className: p.av,
        children: t.map((e) =>
            (0, i.jsx)(M, { props: e, maxWidth: s, maxHeight: I, displayGridItem: !0 }, e.item.uniqueId),
        ),
    });
}
function E(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        s = Math.round((n - 8) / 3);
    return (0, i.jsx)("div", {
        className: p._f,
        children: t.map((e) =>
            (0, i.jsx)(M, { props: e, maxWidth: s, maxHeight: s, displayGridItem: !0 }, e.item.uniqueId),
        ),
    });
}
function M(e) {
    let t,
        n,
        {
            props: s,
            maxWidth: l = g.k6,
            maxHeight: r = g.Rk,
            useFullWidth: o = !0,
            isSingleItem: u = !1,
            footer: d,
            displayGridItem: h,
        } = e,
        { newEmbedUi: I } = m.Q.useConfig({ location: "MediaMosaicItemWrapper" }),
        f = s.item.type,
        C = {
            ...s,
            ...("IMAGE" === f &&
                ((t = s.className), { className: a()(t, p.s_), imgContainerClassName: p.nh, imgClassName: p.g2 })),
            ...(("VIDEO" === f || (I && "CLIP" === f)) && ((n = s.className), { className: a()(n, p.g2) })),
            displayGridItem: h,
            mediaLayoutType: g.dG.MOSAIC,
            maxWidth: l,
            maxHeight: r,
            useFullWidth: o,
            isSingleMosaicItem: u,
        };
    return (0, i.jsx)(c.G.Provider, { value: s.gifFavoriteButton, children: (0, i.jsx)(x.Ay, { ...C, footer: d }) });
}
let N = function (e) {
    let { items: t, isInAppComponentsV2: n = !1 } = e,
        { newEmbedUi: l } = m.Q.useConfig({ location: "MessageMediaMosaic" }),
        {
            groupableVisualMediaItems: r,
            nonGroupableVisualMediaItems: o,
            nonVisualMediaItems: u,
        } = (function (e) {
            let { enableClipsNewEmbedUi: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return s.useMemo(() => {
                let [n, i] = d().partition(e, (e) => (0, h.Xg)(e.item.type)),
                    [s, l] = d().partition(n, (e) => (0, h.EF)(e.item.type, { enableClipsNewEmbedUi: t }));
                return { groupableVisualMediaItems: s, nonGroupableVisualMediaItems: l, nonVisualMediaItems: i };
            }, [e, t]);
        })(t, { enableClipsNewEmbedUi: l }),
        c = n ? g.ww : g.k6;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r.length > 0 &&
                (0, i.jsx)("div", {
                    className: a()(p.XU, { [p.dM]: n, [p.eO]: l && 1 === r.length && "CLIP" === r[0].item.type }),
                    children: (0, i.jsx)(f, { visualMediaItems: r, maxWidth: c }),
                }),
            o.length > 0 &&
                o.map((e) => {
                    let t = e.renderMosaicItemFooter;
                    return (0, i.jsx)(
                        "div",
                        {
                            className: a()(p.XU, { [p.dM]: n }),
                            children: (0, i.jsx)(f, {
                                visualMediaItems: [e],
                                footer: null != t ? (0, i.jsx)(t, { item: e.item, message: e.message }) : void 0,
                                maxWidth: c,
                            }),
                        },
                        e.item.uniqueId,
                    );
                }),
            u.length > 0 &&
                (0, i.jsx)("div", {
                    className: p.s,
                    children: u.map((e) =>
                        (0, i.jsx)("div", { className: p.Br, children: (0, i.jsx)(M, { props: e }) }, e.item.uniqueId),
                    ),
                }),
        ],
    });
};

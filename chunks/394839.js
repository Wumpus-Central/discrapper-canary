n.d(t, {
    A: () => I,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    o = n(284009),
    a = n.n(o),
    u = n(735438),
    c = n.n(u),
    d = n(643612),
    m = n(448381),
    h = n(96782),
    p = n(838541),
    y = n(907423);

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = Math.round((p.Rk - 4) / 2);

function x(e) {
    let { visualMediaItems: t, maxWidth: n, footer: i } = e;
    null != i && a()(1 === t.length, "footer only gets applied to single items");
    let l = t.length;
    if (1 === l)
        return (0, r.jsx)(O, {
            itemsForLayout: t,
            isSingleImage: !0,
            footer: i,
            maxWidth: n,
        });
    if (2 === l)
        return (0, r.jsx)(b, {
            itemsForLayout: t,
            maxWidth: n,
        });
    if (3 === l)
        return (0, r.jsx)(v, {
            itemsForLayout: t,
            maxWidth: n,
        });
    if (4 === l)
        return (0, r.jsx)(w, {
            itemsForLayout: t,
            maxWidth: n,
        });
    let s = l % 3;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            1 === s &&
                (0, r.jsx)(O, {
                    itemsForLayout: t.slice(0, s),
                    maxWidth: n,
                }),
            2 === s &&
                (0, r.jsx)(b, {
                    itemsForLayout: t.slice(0, s),
                    maxWidth: n,
                }),
            0 === s
                ? (0, r.jsx)(P, {
                      itemsForLayout: t,
                      maxWidth: n,
                  })
                : (0, r.jsx)(P, {
                      itemsForLayout: t.slice(s),
                      maxWidth: n,
                  }),
        ],
    });
}

function O(e) {
    let { itemsForLayout: t, maxWidth: n, isSingleImage: i, footer: l } = e,
        o = t[0];
    return (0, r.jsx)("div", {
        className: s()(y.EO, {
            [y.Gj]: i,
            [y.Kv]: !i,
            [y.yq]: null != l,
        }),
        children: (0, r.jsx)(C, {
            props: o,
            useFullWidth: !i,
            isSingleItem: !0,
            maxWidth: n,
            footer: l,
        }),
    });
}

function b(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        i = Math.round((n - 4) / 2);
    return (0, r.jsx)("div", {
        className: y.SQ,
        children: t.map((e) =>
            (0, r.jsx)(
                "div",
                {
                    className: y.XE,
                    children: (0, r.jsx)(C, {
                        props: e,
                        maxWidth: i,
                        maxHeight: i,
                    }),
                },
                e.item.uniqueId,
            ),
        ),
    });
}

function v(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        i = Math.round((2 * (n - 4)) / 3),
        l = i / 2;
    return (0, r.jsxs)("div", {
        className: s()(y.SQ, y.o_),
        children: [
            (0, r.jsx)("div", {
                className: y.es,
                children: (0, r.jsx)(C, {
                    props: t[0],
                    maxWidth: i,
                }),
            }),
            (0, r.jsx)("div", {
                className: y.N$,
                children: (0, r.jsx)("div", {
                    className: y._i,
                    children: t.splice(1).map((e) =>
                        (0, r.jsx)(
                            "div",
                            {
                                className: y.$w,
                                children: (0, r.jsx)(C, {
                                    props: e,
                                    maxWidth: l,
                                    maxHeight: j,
                                }),
                            },
                            e.item.uniqueId,
                        ),
                    ),
                }),
            }),
        ],
    });
}

function w(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        i = Math.round((n - 4) / 2);
    return (0, r.jsx)("div", {
        className: y.av,
        children: t.map((e) =>
            (0, r.jsx)(
                C,
                {
                    props: e,
                    maxWidth: i,
                    maxHeight: j,
                    displayGridItem: !0,
                },
                e.item.uniqueId,
            ),
        ),
    });
}

function P(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        i = Math.round((n - 8) / 3);
    return (0, r.jsx)("div", {
        className: y._f,
        children: t.map((e) =>
            (0, r.jsx)(
                C,
                {
                    props: e,
                    maxWidth: i,
                    maxHeight: i,
                    displayGridItem: !0,
                },
                e.item.uniqueId,
            ),
        ),
    });
}

function C(e) {
    let t,
        n,
        {
            props: i,
            maxWidth: l = p.k6,
            maxHeight: o = p.Rk,
            useFullWidth: a = !0,
            isSingleItem: u = !1,
            footer: c,
            displayGridItem: m,
        } = e,
        j = i.item.type,
        x = g(
            f(
                {},
                i,
                "IMAGE" === j &&
                    ((t = i.className),
                    {
                        className: s()(t, y.s_),
                        imgContainerClassName: y.nh,
                        imgClassName: y.g2,
                    }),
                "VIDEO" === j &&
                    ((n = i.className),
                    {
                        className: s()(n, y.g2),
                    }),
            ),
            {
                displayGridItem: m,
                mediaLayoutType: p.dG.MOSAIC,
                maxWidth: l,
                maxHeight: o,
                useFullWidth: a,
                isSingleMosaicItem: u,
            },
        );
    return (0, r.jsx)(d.G.Provider, {
        value: i.gifFavoriteButton,
        children: (0, r.jsx)(
            h.Ay,
            g(f({}, x), {
                footer: c,
            }),
        ),
    });
}
let I = function (e) {
    var t;
    let { items: n, isInAppComponentsV2: l = !1 } = e,
        {
            groupableVisualMediaItems: o,
            nonGroupableVisualMediaItems: a,
            nonVisualMediaItems: u,
        } = ((t = n),
        i.useMemo(() => {
            let [e, n] = c().partition(t, (e) => (0, m.Xg)(e.item.type)),
                [r, i] = c().partition(e, (e) => (0, m.EF)(e.item.type));
            return {
                groupableVisualMediaItems: r,
                nonGroupableVisualMediaItems: i,
                nonVisualMediaItems: n,
            };
        }, [t])),
        d = l ? p.ww : p.k6;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            o.length > 0 &&
                (0, r.jsx)("div", {
                    className: s()(y.XU, {
                        [y.dM]: l,
                    }),
                    children: (0, r.jsx)(x, {
                        visualMediaItems: o,
                        maxWidth: d,
                    }),
                }),
            a.length > 0 &&
                a.map((e) => {
                    let t = e.renderMosaicItemFooter({
                        item: e.item,
                        message: e.message,
                    });
                    return (0, r.jsx)(
                        "div",
                        {
                            className: s()(y.XU, {
                                [y.dM]: l,
                            }),
                            children: (0, r.jsx)(x, {
                                visualMediaItems: [e],
                                footer: t,
                                maxWidth: d,
                            }),
                        },
                        e.item.uniqueId,
                    );
                }),
            u.length > 0 &&
                (0, r.jsx)("div", {
                    className: y.s,
                    children: u.map((e) =>
                        (0, r.jsx)(
                            "div",
                            {
                                className: y.Br,
                                children: (0, r.jsx)(C, {
                                    props: e,
                                }),
                            },
                            e.item.uniqueId,
                        ),
                    ),
                }),
        ],
    });
};

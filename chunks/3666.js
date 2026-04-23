a.d(t, { Ae: () => h, Wv: () => c, ZV: () => A, g2: () => u });
var n = a(627968),
    r = a(64700),
    i = a(503698),
    l = a.n(i),
    s = a(990078),
    _ = a(765671),
    o = a(985018),
    d = a(197669);
function c(e) {
    let { itemGapPx: t, items: a, maxLines: n, containerWidth: i } = e,
        [l, s] = r.useState(0),
        _ = r.useRef([]),
        o = r.useRef(0),
        d = r.useRef(0),
        c = r.useRef(null),
        u = r.useCallback((e, t) => {
            _.current[e] = t;
        }, []);
    return (
        r.useLayoutEffect(() => {
            if (null == c.current) return;
            (_.current.length = a.length), (o.current = c.current.getBoundingClientRect().width ?? 0);
            let e = (function (e) {
                let { items: t, maxLines: a, itemWidths: n, itemGapPx: r, containerWidth: i, overflowWidth: l } = e,
                    s = 0,
                    _ = 0,
                    o = 0;
                for (let e = 0; e < t.length; e++) {
                    let d = n[e];
                    if (isNaN(d) || d > i) continue;
                    let c = s === a - 1,
                        u = e === t.length - 1;
                    if (!(Math.round(_ + d + (c && !u ? l + r : 0)) < Math.round(i))) {
                        if (c) break;
                        s++, (_ = 0);
                    }
                    (o = e), (_ += d + r);
                }
                return o;
            })({
                items: a,
                maxLines: n,
                itemGapPx: t,
                containerWidth: i,
                itemWidths: _.current,
                overflowWidth: o.current,
            });
            e !== d.current && ((d.current = e), s((e) => e + 1));
        }, [i, t, a, n]),
        r.useMemo(
            () => ({ lastVisibleIndex: d.current, onItemLayout: u, overflowItemsRef: c, itemWidthsRef: _, version: l }),
            [u, l],
        )
    );
}
function u(e) {
    let { items: t, renderItem: a } = e;
    return (0, n.jsx)(s.m, {
        __unsupportedReactNodeAsText: (0, n.jsx)("div", { className: d.YL, children: t.map(a) }),
        "aria-label": "overflow",
        children: (0, n.jsx)("div", { children: a(o.intl.formatToPlainString(o.t.vGclWm, { count: t.length })) }),
    });
}
function h(e) {
    let { onItemLayout: t, index: a, children: i } = e,
        l = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            null == l.current || t(a, l.current.getBoundingClientRect().width);
        }),
        (0, n.jsx)("div", { ref: l, children: i })
    );
}
function A(e) {
    let { className: t, items: a, renderItem: i, itemGapPx: s = 0, maxLines: A, renderOverflow: m } = e,
        { ref: p, width: I = 0 } = (0, _.Ay)(),
        {
            lastVisibleIndex: b,
            onItemLayout: E,
            overflowItemsRef: f,
        } = c({ items: a, itemGapPx: s, maxLines: A, containerWidth: I }),
        C = r.useCallback((e) => (0, n.jsx)(u, { items: e, renderItem: i }), [i]),
        g = r.useMemo(() => a.slice(0, b + 1), [a, b]),
        L = r.useMemo(() => a.slice(b + 1), [a, b]);
    return (0, n.jsxs)("div", {
        className: l()(t, d.ld),
        ref: p,
        children: [
            (0, n.jsxs)("div", {
                "aria-hidden": !0,
                className: d.Kk,
                children: [
                    (0, n.jsx)("div", {
                        className: d.R5,
                        children: a.map((e, t) =>
                            (0, n.jsx)(
                                h,
                                { index: t, onItemLayout: E, children: i(e) },
                                "string" == typeof e ? e : e.key,
                            ),
                        ),
                    }),
                    (0, n.jsx)("div", {
                        className: d.zd,
                        ref: f,
                        children: i(o.intl.formatToPlainString(o.t.vGclWm, { count: Number(`1${a.length}`) })),
                    }),
                ],
            }),
            g.map(i),
            L.length > 0 && (m ?? C)(L),
        ],
    });
}

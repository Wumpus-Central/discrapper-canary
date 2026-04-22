"use strict";
a.d(t, { Ae: () => h, Wv: () => _, ZV: () => b, g2: () => u });
var r = a(627968),
    i = a(64700),
    n = a(503698),
    s = a.n(n),
    l = a(990078),
    o = a(765671),
    d = a(985018),
    c = a(197669);
function _(e) {
    let { itemGapPx: t, items: a, maxLines: r, containerWidth: n } = e,
        [s, l] = i.useState(0),
        o = i.useRef([]),
        d = i.useRef(0),
        c = i.useRef(0),
        _ = i.useRef(null),
        u = i.useCallback((e, t) => {
            o.current[e] = t;
        }, []);
    return (
        i.useLayoutEffect(() => {
            if (null == _.current) return;
            (o.current.length = a.length), (d.current = _.current.getBoundingClientRect().width ?? 0);
            let e = (function (e) {
                let { items: t, maxLines: a, itemWidths: r, itemGapPx: i, containerWidth: n, overflowWidth: s } = e,
                    l = 0,
                    o = 0,
                    d = 0;
                for (let e = 0; e < t.length; e++) {
                    let c = r[e];
                    if (isNaN(c) || c > n) continue;
                    let _ = l === a - 1,
                        u = e === t.length - 1;
                    if (!(Math.round(o + c + (_ && !u ? s + i : 0)) < Math.round(n))) {
                        if (_) break;
                        l++, (o = 0);
                    }
                    (d = e), (o += c + i);
                }
                return d;
            })({
                items: a,
                maxLines: r,
                itemGapPx: t,
                containerWidth: n,
                itemWidths: o.current,
                overflowWidth: d.current,
            });
            e !== c.current && ((c.current = e), l((e) => e + 1));
        }, [n, t, a, r]),
        i.useMemo(
            () => ({ lastVisibleIndex: c.current, onItemLayout: u, overflowItemsRef: _, itemWidthsRef: o, version: s }),
            [u, s],
        )
    );
}
function u(e) {
    let { items: t, renderItem: a } = e;
    return (0, r.jsx)(l.m, {
        __unsupportedReactNodeAsText: (0, r.jsx)("div", { className: c.YL, children: t.map(a) }),
        "aria-label": "overflow",
        children: (0, r.jsx)("div", { children: a(d.intl.formatToPlainString(d.t.vGclWm, { count: t.length })) }),
    });
}
function h(e) {
    let { onItemLayout: t, index: a, children: n } = e,
        s = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            null == s.current || t(a, s.current.getBoundingClientRect().width);
        }),
        (0, r.jsx)("div", { ref: s, children: n })
    );
}
function b(e) {
    let { className: t, items: a, renderItem: n, itemGapPx: l = 0, maxLines: b, renderOverflow: m } = e,
        { ref: p, width: f = 0 } = (0, o.Ay)(),
        {
            lastVisibleIndex: A,
            onItemLayout: g,
            overflowItemsRef: E,
        } = _({ items: a, itemGapPx: l, maxLines: b, containerWidth: f }),
        I = i.useCallback((e) => (0, r.jsx)(u, { items: e, renderItem: n }), [n]),
        T = i.useMemo(() => a.slice(0, A + 1), [a, A]),
        x = i.useMemo(() => a.slice(A + 1), [a, A]);
    return (0, r.jsxs)("div", {
        className: s()(t, c.ld),
        ref: p,
        children: [
            (0, r.jsxs)("div", {
                "aria-hidden": !0,
                className: c.Kk,
                children: [
                    (0, r.jsx)("div", {
                        className: c.R5,
                        children: a.map((e, t) =>
                            (0, r.jsx)(
                                h,
                                { index: t, onItemLayout: g, children: n(e) },
                                "string" == typeof e ? e : e.key,
                            ),
                        ),
                    }),
                    (0, r.jsx)("div", {
                        className: c.zd,
                        ref: E,
                        children: n(d.intl.formatToPlainString(d.t.vGclWm, { count: Number(`1${a.length}`) })),
                    }),
                ],
            }),
            T.map(n),
            x.length > 0 && (m ?? I)(x),
        ],
    });
}

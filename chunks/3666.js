"use strict";
n.d(t, { Ae: () => p, Wv: () => _, ZV: () => m, g2: () => f });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(765671),
    u = n(985018),
    c = n(862320);
function d(e) {
    let { items: t, maxLines: n, itemWidths: r, itemGapPx: i, containerWidth: s, overflowWidth: a } = e,
        o = 0,
        l = 0,
        u = 0;
    for (let e = 0; e < t.length; e++) {
        let c = r[e];
        if (isNaN(c) || c > s) continue;
        let d = o === n - 1,
            _ = e === t.length - 1;
        if (!(Math.round(l + c + (d && !_ ? a + i : 0)) < Math.round(s))) {
            if (d) break;
            o++, (l = 0);
        }
        (u = e), (l += c + i);
    }
    return u;
}
function _(e) {
    let { itemGapPx: t, items: n, maxLines: r, containerWidth: s } = e,
        [a, o] = i.useState(0),
        l = i.useRef([]),
        u = i.useRef(0),
        c = i.useRef(0),
        _ = i.useRef(null),
        f = i.useCallback((e, t) => {
            l.current[e] = t;
        }, []);
    return (
        i.useLayoutEffect(() => {
            if (null == _.current) return;
            (l.current.length = n.length), (u.current = _.current.getBoundingClientRect().width ?? 0);
            let e = d({
                items: n,
                maxLines: r,
                itemGapPx: t,
                containerWidth: s,
                itemWidths: l.current,
                overflowWidth: u.current,
            });
            e !== c.current && ((c.current = e), o((e) => e + 1));
        }, [s, t, n, r]),
        i.useMemo(
            () => ({ lastVisibleIndex: c.current, onItemLayout: f, overflowItemsRef: _, itemWidthsRef: l, version: a }),
            [f, a],
        )
    );
}
function f(e) {
    let { items: t, renderItem: n } = e;
    return (0, r.jsx)(o.m, {
        __unsupportedReactNodeAsText: (0, r.jsx)("div", { className: c.YL, children: t.map(n) }),
        "aria-label": "overflow",
        children: (0, r.jsx)("div", { children: n(u.intl.formatToPlainString(u.t.vGclWm, { count: t.length })) }),
    });
}
function p(e) {
    let { onItemLayout: t, index: n, children: s } = e,
        a = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            null == a.current || t(n, a.current.getBoundingClientRect().width);
        }),
        (0, r.jsx)("div", { ref: a, children: s })
    );
}
function h(e) {
    return "string" == typeof e ? e : e.key;
}
function m(e) {
    let { className: t, items: n, renderItem: s, itemGapPx: o = 0, maxLines: d, renderOverflow: m } = e,
        { ref: E, width: g = 0 } = (0, l.Ay)(),
        {
            lastVisibleIndex: A,
            onItemLayout: I,
            overflowItemsRef: T,
        } = _({ items: n, itemGapPx: o, maxLines: d, containerWidth: g }),
        S = i.useCallback((e) => (0, r.jsx)(f, { items: e, renderItem: s }), [s]),
        y = m ?? S,
        v = i.useMemo(() => n.slice(0, A + 1), [n, A]),
        N = i.useMemo(() => n.slice(A + 1), [n, A]);
    return (0, r.jsxs)("div", {
        className: a()(t, c.ld),
        ref: E,
        children: [
            (0, r.jsxs)("div", {
                "aria-hidden": !0,
                className: c.Kk,
                children: [
                    (0, r.jsx)("div", {
                        className: c.R5,
                        children: n.map((e, t) => (0, r.jsx)(p, { index: t, onItemLayout: I, children: s(e) }, h(e))),
                    }),
                    (0, r.jsx)("div", {
                        className: c.zd,
                        ref: T,
                        children: s(u.intl.formatToPlainString(u.t.vGclWm, { count: Number(`1${n.length}`) })),
                    }),
                ],
            }),
            v.map(s),
            N.length > 0 && y(N),
        ],
    });
}

"use strict";
n.d(t, { Ae: () => h, Wv: () => _, ZV: () => g, g2: () => f });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(765671),
    u = n(985018),
    c = n(862320);
function d(e) {
    let { items: t, maxLines: n, itemWidths: r, itemGapPx: i, containerWidth: a, overflowWidth: s } = e,
        o = 0,
        l = 0,
        u = 0;
    for (let e = 0; e < t.length; e++) {
        let c = r[e];
        if (isNaN(c) || c > a) continue;
        let d = o === n - 1,
            _ = e === t.length - 1;
        if (!(Math.round(l + c + (d && !_ ? s + i : 0)) < Math.round(a))) {
            if (d) break;
            o++, (l = 0);
        }
        (u = e), (l += c + i);
    }
    return u;
}
function _(e) {
    let { itemGapPx: t, items: n, maxLines: r, containerWidth: a } = e,
        [s, o] = i.useState(0),
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
                containerWidth: a,
                itemWidths: l.current,
                overflowWidth: u.current,
            });
            e !== c.current && ((c.current = e), o((e) => e + 1));
        }, [a, t, n, r]),
        i.useMemo(
            () => ({ lastVisibleIndex: c.current, onItemLayout: f, overflowItemsRef: _, itemWidthsRef: l, version: s }),
            [f, s],
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
function h(e) {
    let { onItemLayout: t, index: n, children: a } = e,
        s = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            null == s.current || t(n, s.current.getBoundingClientRect().width);
        }),
        (0, r.jsx)("div", { ref: s, children: a })
    );
}
function p(e) {
    return "string" == typeof e ? e : e.key;
}
function g(e) {
    let { className: t, items: n, renderItem: a, itemGapPx: o = 0, maxLines: d, renderOverflow: g } = e,
        { ref: E, width: A = 0 } = (0, l.Ay)(),
        {
            lastVisibleIndex: I,
            onItemLayout: T,
            overflowItemsRef: y,
        } = _({ items: n, itemGapPx: o, maxLines: d, containerWidth: A }),
        S = i.useCallback((e) => (0, r.jsx)(f, { items: e, renderItem: a }), [a]),
        v = g ?? S,
        C = i.useMemo(() => n.slice(0, I + 1), [n, I]),
        b = i.useMemo(() => n.slice(I + 1), [n, I]);
    return (0, r.jsxs)("div", {
        className: s()(t, c.ld),
        ref: E,
        children: [
            (0, r.jsxs)("div", {
                "aria-hidden": !0,
                className: c.Kk,
                children: [
                    (0, r.jsx)("div", {
                        className: c.R5,
                        children: n.map((e, t) => (0, r.jsx)(h, { index: t, onItemLayout: T, children: a(e) }, p(e))),
                    }),
                    (0, r.jsx)("div", {
                        className: c.zd,
                        ref: y,
                        children: a(u.intl.formatToPlainString(u.t.vGclWm, { count: Number(`1${n.length}`) })),
                    }),
                ],
            }),
            C.map(a),
            b.length > 0 && v(b),
        ],
    });
}

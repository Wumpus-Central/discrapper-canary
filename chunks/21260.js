n.d(t, {
    AJ: () => p,
    Ep: () => m,
    te: () => _,
    zP: () => f,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(28664),
    l = n(393238),
    c = n(388032),
    u = n(384934);
function d(e) {
    let { items: t, maxLines: n, itemWidths: r, itemGapPx: i, containerWidth: a, overflowWidth: o } = e,
        s = 0,
        l = 0,
        c = 0;
    for (let e = 0; e < t.length; e++) {
        let u = r[e];
        if (isNaN(u) || u > a) continue;
        let d = s === n - 1,
            f = e === t.length - 1;
        if (!(Math.round(l + u + (d && !f ? o + i : 0)) < Math.round(a))) {
            if (d) break;
            s++, (l = 0);
        }
        (c = e), (l += u + i);
    }
    return c;
}
function f(e) {
    let { itemGapPx: t, items: n, maxLines: r, containerWidth: a } = e,
        [o, s] = i.useState(0),
        l = i.useRef([]),
        c = i.useRef(0),
        u = i.useRef(0),
        f = i.useRef(null),
        _ = i.useCallback((e, t) => {
            l.current[e] = t;
        }, []);
    return (
        i.useLayoutEffect(() => {
            var e;
            if (null == f.current) return;
            (l.current.length = n.length), (c.current = null != (e = f.current.getBoundingClientRect().width) ? e : 0);
            let i = d({
                items: n,
                maxLines: r,
                itemGapPx: t,
                containerWidth: a,
                itemWidths: l.current,
                overflowWidth: c.current,
            });
            i !== u.current && ((u.current = i), s((e) => e + 1));
        }, [a, t, n, r]),
        i.useMemo(
            () => ({
                lastVisibleIndex: u.current,
                onItemLayout: _,
                overflowItemsRef: f,
                itemWidthsRef: l,
                version: o,
            }),
            [_, o],
        )
    );
}
function _(e) {
    let { items: t, renderItem: n } = e;
    return (0, r.jsx)(s.u, {
        __unsupportedReactNodeAsText: (0, r.jsx)("div", {
            className: u.tooltip,
            children: t.map(n),
        }),
        "aria-label": "overflow",
        children: (0, r.jsx)("div", { children: n(c.intl.formatToPlainString(c.t.vGclWm, { count: t.length })) }),
    });
}
function p(e) {
    let { onItemLayout: t, index: n, children: a } = e,
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            null != o.current && t(n, o.current.getBoundingClientRect().width);
        }),
        (0, r.jsx)("div", {
            ref: o,
            children: a,
        })
    );
}
function h(e) {
    return "string" == typeof e ? e : e.key;
}
function m(e) {
    let { className: t, items: n, renderItem: a, itemGapPx: s = 0, maxLines: d, renderOverflow: m } = e,
        { ref: g, width: E = 0 } = (0, l.ZP)(),
        {
            lastVisibleIndex: b,
            onItemLayout: y,
            overflowItemsRef: O,
        } = f({
            items: n,
            itemGapPx: s,
            maxLines: d,
            containerWidth: E,
        }),
        v = i.useCallback(
            (e) =>
                (0, r.jsx)(_, {
                    items: e,
                    renderItem: a,
                }),
            [a],
        ),
        I = null != m ? m : v,
        T = i.useMemo(() => n.slice(0, b + 1), [n, b]),
        S = i.useMemo(() => n.slice(b + 1), [n, b]);
    return (0, r.jsxs)("div", {
        className: o()(t, u.items),
        ref: g,
        children: [
            (0, r.jsxs)("div", {
                "aria-hidden": !0,
                className: u.measurements,
                children: [
                    (0, r.jsx)("div", {
                        className: u.itemMeasurements,
                        children: n.map((e, t) =>
                            (0, r.jsx)(
                                p,
                                {
                                    index: t,
                                    onItemLayout: y,
                                    children: a(e),
                                },
                                h(e),
                            ),
                        ),
                    }),
                    (0, r.jsx)("div", {
                        className: u.overflowMeasurement,
                        ref: O,
                        children: a(c.intl.formatToPlainString(c.t.vGclWm, { count: Number("1".concat(n.length)) })),
                    }),
                ],
            }),
            T.map(a),
            S.length > 0 && I(S),
        ],
    });
}

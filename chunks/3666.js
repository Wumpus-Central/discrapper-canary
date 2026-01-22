n.d(t, {
    Ae: () => _,
    Wv: () => f,
    ZV: () => m,
    g2: () => p,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(765671),
    c = n(985018),
    u = n(862320);

function d(e) {
    let { items: t, maxLines: n, itemWidths: r, itemGapPx: i, containerWidth: a, overflowWidth: s } = e,
        o = 0,
        l = 0,
        c = 0;
    for (let e = 0; e < t.length; e++) {
        let u = r[e];
        if (isNaN(u) || u > a) continue;
        let d = o === n - 1,
            f = e === t.length - 1;
        if (!(Math.round(l + u + (d && !f ? s + i : 0)) < Math.round(a))) {
            if (d) break;
            o++, (l = 0);
        }
        (c = e), (l += u + i);
    }
    return c;
}

function f(e) {
    let { itemGapPx: t, items: n, maxLines: r, containerWidth: a } = e,
        [s, o] = i.useState(0),
        l = i.useRef([]),
        c = i.useRef(0),
        u = i.useRef(0),
        f = i.useRef(null),
        p = i.useCallback((e, t) => {
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
            i !== u.current && ((u.current = i), o((e) => e + 1));
        }, [a, t, n, r]),
        i.useMemo(
            () => ({
                lastVisibleIndex: u.current,
                onItemLayout: p,
                overflowItemsRef: f,
                itemWidthsRef: l,
                version: s,
            }),
            [p, s],
        )
    );
}

function p(e) {
    let { items: t, renderItem: n } = e;
    return (0, r.jsx)(o.m, {
        __unsupportedReactNodeAsText: (0, r.jsx)("div", {
            className: u.YL,
            children: t.map(n),
        }),
        "aria-label": "overflow",
        children: (0, r.jsx)("div", {
            children: n(
                c.intl.formatToPlainString(c.t.vGclWm, {
                    count: t.length,
                }),
            ),
        }),
    });
}

function _(e) {
    let { onItemLayout: t, index: n, children: a } = e,
        s = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            null == s.current || t(n, s.current.getBoundingClientRect().width);
        }),
        (0, r.jsx)("div", {
            ref: s,
            children: a,
        })
    );
}

function h(e) {
    return "string" == typeof e ? e : e.key;
}

function m(e) {
    let { className: t, items: n, renderItem: a, itemGapPx: o = 0, maxLines: d, renderOverflow: m } = e,
        { ref: g, width: E = 0 } = (0, l.Ay)(),
        {
            lastVisibleIndex: b,
            onItemLayout: y,
            overflowItemsRef: O,
        } = f({
            items: n,
            itemGapPx: o,
            maxLines: d,
            containerWidth: E,
        }),
        A = i.useCallback(
            (e) =>
                (0, r.jsx)(p, {
                    items: e,
                    renderItem: a,
                }),
            [a],
        ),
        v = null != m ? m : A,
        S = i.useMemo(() => n.slice(0, b + 1), [n, b]),
        I = i.useMemo(() => n.slice(b + 1), [n, b]);
    return (0, r.jsxs)("div", {
        className: s()(t, u.ld),
        ref: g,
        children: [
            (0, r.jsxs)("div", {
                "aria-hidden": !0,
                className: u.Kk,
                children: [
                    (0, r.jsx)("div", {
                        className: u.R5,
                        children: n.map((e, t) =>
                            (0, r.jsx)(
                                _,
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
                        className: u.zd,
                        ref: O,
                        children: a(
                            c.intl.formatToPlainString(c.t.vGclWm, {
                                count: Number("1".concat(n.length)),
                            }),
                        ),
                    }),
                ],
            }),
            S.map(a),
            I.length > 0 && v(I),
        ],
    });
}

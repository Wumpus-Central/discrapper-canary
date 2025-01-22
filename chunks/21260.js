r.d(n, {
    AJ: function () {
        return m;
    },
    Ep: function () {
        return g;
    },
    te: function () {
        return _;
    },
    zP: function () {
        return h;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(481060),
    c = r(388032),
    d = r(799489);
function f(e) {
    let { items: n, maxLines: r, itemWidths: i, itemGapPx: a, containerWidth: o, overflowWidth: s } = e,
        l = 0,
        u = 0,
        c = 0;
    for (let e = 0; e < n.length; e++) {
        let d = i[e];
        if (isNaN(d) || d > o) continue;
        let f = l === r - 1,
            p = e === n.length - 1;
        if (!(Math.round(u + d + (f && !p ? s + a : 0)) < Math.round(o))) {
            if (f) break;
            l++, (u = 0);
        }
        (c = e), (u += d + a);
    }
    return c;
}
function p() {
    let [e, n] = o.useState(0),
        r = o.useRef(null),
        i = new Map(),
        a = new ResizeObserver((e) => {
            e.forEach((e) => {
                var n;
                let { target: r } = e;
                null === (n = i.get(r)) || void 0 === n || n(e);
            });
        });
    return (
        (0, u.useResizeObserverSubscription)({
            ref: r,
            key: 'horizontal-overflow-list',
            onUpdate: (e) => {
                var r;
                let i = null === (r = e.target) || void 0 === r ? void 0 : r.getBoundingClientRect();
                null != i && n(i.width);
            },
            resizeObserver: a,
            listenerMap: i
        }),
        {
            ref: r,
            width: e
        }
    );
}
function h(e) {
    let { itemGapPx: n, items: r, maxLines: i, containerWidth: a } = e,
        [s, l] = o.useState(0),
        u = o.useRef([]),
        c = o.useRef(0),
        d = o.useRef(0),
        p = o.useRef(null),
        h = o.useCallback((e, n) => {
            u.current[e] = n;
        }, []);
    return (
        o.useLayoutEffect(() => {
            var e;
            if (null == p.current) return;
            (u.current.length = r.length), (c.current = null !== (e = p.current.getBoundingClientRect().width) && void 0 !== e ? e : 0);
            let o = f({
                items: r,
                maxLines: i,
                itemGapPx: n,
                containerWidth: a,
                itemWidths: u.current,
                overflowWidth: c.current
            });
            o !== d.current && ((d.current = o), l((e) => e + 1));
        }, [a, n, r, i]),
        o.useMemo(
            () => ({
                lastVisibleIndex: d.current,
                onItemLayout: h,
                overflowItemsRef: p,
                itemWidthsRef: u,
                version: s
            }),
            [h, s]
        )
    );
}
function _(e) {
    let { items: n, renderItem: r, ...i } = e;
    return (0, a.jsx)(u.Tooltip, {
        ...i,
        text: (0, a.jsx)('div', {
            className: d.tooltip,
            children: n.map(r)
        }),
        'aria-label': 'overflow',
        children: (e) =>
            (0, a.jsx)('div', {
                ...e,
                children: r(c.intl.formatToPlainString(c.t.vGclWl, { count: n.length }))
            })
    });
}
function m(e) {
    let { onItemLayout: n, index: r, children: i } = e,
        s = o.useRef(null);
    return (
        o.useLayoutEffect(() => {
            if (null != s.current) n(r, s.current.getBoundingClientRect().width);
        }),
        (0, a.jsx)('div', {
            ref: s,
            children: i
        })
    );
}
function g(e) {
    let { className: n, items: r, renderItem: i, itemGapPx: s = 0, maxLines: u, renderOverflow: f } = e,
        { ref: g, width: E } = p(),
        {
            lastVisibleIndex: v,
            onItemLayout: y,
            overflowItemsRef: b
        } = h({
            items: r,
            itemGapPx: s,
            maxLines: u,
            containerWidth: E
        }),
        I = o.useCallback(
            (e) =>
                (0, a.jsx)(_, {
                    items: e,
                    renderItem: i
                }),
            [i]
        ),
        T = null != f ? f : I,
        S = o.useMemo(() => r.slice(0, v + 1), [r, v]),
        A = o.useMemo(() => r.slice(v + 1), [r, v]);
    return (0, a.jsxs)('div', {
        className: l()(n, d.items),
        ref: g,
        children: [
            (0, a.jsxs)('div', {
                'aria-hidden': !0,
                className: d.measurements,
                children: [
                    (0, a.jsx)('div', {
                        className: d.itemMeasurements,
                        children: r.map((e, n) =>
                            (0, a.jsx)(
                                m,
                                {
                                    index: n,
                                    onItemLayout: y,
                                    children: i(e)
                                },
                                e
                            )
                        )
                    }),
                    (0, a.jsx)('div', {
                        className: d.overflowMeasurement,
                        ref: b,
                        children: i(c.intl.formatToPlainString(c.t.vGclWl, { count: Number('1'.concat(r.length)) }))
                    })
                ]
            }),
            S.map(i),
            A.length > 0 && T(A)
        ]
    });
}

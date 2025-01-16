r.d(n, {
    AJ: function () {
        return m;
    },
    Ep: function () {
        return g;
    },
    te: function () {
        return p;
    },
    zP: function () {
        return h;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(481060),
    c = r(388032),
    d = r(799489);
function f(e) {
    let { items: n, maxLines: r, itemWidths: i, itemGapPx: a, containerWidth: s, overflowWidth: o } = e,
        l = 0,
        u = 0,
        c = 0;
    for (let e = 0; e < n.length; e++) {
        let d = i[e];
        if (isNaN(d) || d > s) continue;
        let f = l === r - 1,
            _ = e === n.length - 1;
        if (!(Math.round(u + d + (f && !_ ? o + a : 0)) < Math.round(s))) {
            if (f) break;
            l++, (u = 0);
        }
        (c = e), (u += d + a);
    }
    return c;
}
function _() {
    let [e, n] = s.useState(0),
        r = s.useRef(null),
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
        [o, l] = s.useState(0),
        u = s.useRef([]),
        c = s.useRef(0),
        d = s.useRef(0),
        _ = s.useRef(null),
        h = s.useCallback((e, n) => {
            u.current[e] = n;
        }, []);
    return (
        s.useLayoutEffect(() => {
            var e;
            if (null == _.current) return;
            (u.current.length = r.length), (c.current = null !== (e = _.current.getBoundingClientRect().width) && void 0 !== e ? e : 0);
            let s = f({
                items: r,
                maxLines: i,
                itemGapPx: n,
                containerWidth: a,
                itemWidths: u.current,
                overflowWidth: c.current
            });
            s !== d.current && ((d.current = s), l((e) => e + 1));
        }, [a, n, r, i]),
        s.useMemo(
            () => ({
                lastVisibleIndex: d.current,
                onItemLayout: h,
                overflowItemsRef: _,
                itemWidthsRef: u,
                version: o
            }),
            [h, o]
        )
    );
}
function p(e) {
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
        o = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            if (null != o.current) n(r, o.current.getBoundingClientRect().width);
        }),
        (0, a.jsx)('div', {
            ref: o,
            children: i
        })
    );
}
function g(e) {
    let { className: n, items: r, renderItem: i, itemGapPx: o = 0, maxLines: u, renderOverflow: f } = e,
        { ref: g, width: E } = _(),
        {
            lastVisibleIndex: v,
            onItemLayout: I,
            overflowItemsRef: T
        } = h({
            items: r,
            itemGapPx: o,
            maxLines: u,
            containerWidth: E
        }),
        b = s.useCallback(
            (e) =>
                (0, a.jsx)(p, {
                    items: e,
                    renderItem: i
                }),
            [i]
        ),
        y = null != f ? f : b,
        S = s.useMemo(() => r.slice(0, v + 1), [r, v]),
        A = s.useMemo(() => r.slice(v + 1), [r, v]);
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
                                    onItemLayout: I,
                                    children: i(e)
                                },
                                e
                            )
                        )
                    }),
                    (0, a.jsx)('div', {
                        className: d.overflowMeasurement,
                        ref: T,
                        children: i(c.intl.formatToPlainString(c.t.vGclWl, { count: Number('1'.concat(r.length)) }))
                    })
                ]
            }),
            S.map(i),
            A.length > 0 && y(A)
        ]
    });
}

n.d(t, {
    AJ: () => p,
    Ep: () => m,
    te: () => _,
    zP: () => f
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(388032),
    u = n(997118);
function c(e) {
    let { items: t, maxLines: n, itemWidths: i, itemGapPx: r, containerWidth: a, overflowWidth: s } = e,
        o = 0,
        l = 0,
        u = 0;
    for (let e = 0; e < t.length; e++) {
        let c = i[e];
        if (isNaN(c) || c > a) continue;
        let d = o === n - 1,
            f = e === t.length - 1;
        if (!(Math.round(l + c + (d && !f ? s + r : 0)) < Math.round(a))) {
            if (d) break;
            o++, (l = 0);
        }
        (u = e), (l += c + r);
    }
    return u;
}
function d() {
    let [e, t] = r.useState(0),
        n = r.useRef(null),
        i = new Map(),
        a = new ResizeObserver((e) => {
            e.forEach((e) => {
                var t;
                let { target: n } = e;
                null === (t = i.get(n)) || void 0 === t || t(e);
            });
        });
    return (
        (0, o.znF)({
            ref: n,
            key: 'horizontal-overflow-list',
            onUpdate: (e) => {
                var n;
                let i = null === (n = e.target) || void 0 === n ? void 0 : n.getBoundingClientRect();
                null != i && t(i.width);
            },
            resizeObserver: a,
            listenerMap: i
        }),
        {
            ref: n,
            width: e
        }
    );
}
function f(e) {
    let { itemGapPx: t, items: n, maxLines: i, containerWidth: a } = e,
        [s, o] = r.useState(0),
        l = r.useRef([]),
        u = r.useRef(0),
        d = r.useRef(0),
        f = r.useRef(null),
        _ = r.useCallback((e, t) => {
            l.current[e] = t;
        }, []);
    return (
        r.useLayoutEffect(() => {
            var e;
            if (null == f.current) return;
            (l.current.length = n.length), (u.current = null !== (e = f.current.getBoundingClientRect().width) && void 0 !== e ? e : 0);
            let r = c({
                items: n,
                maxLines: i,
                itemGapPx: t,
                containerWidth: a,
                itemWidths: l.current,
                overflowWidth: u.current
            });
            r !== d.current && ((d.current = r), o((e) => e + 1));
        }, [a, t, n, i]),
        r.useMemo(
            () => ({
                lastVisibleIndex: d.current,
                onItemLayout: _,
                overflowItemsRef: f,
                itemWidthsRef: l,
                version: s
            }),
            [_, s]
        )
    );
}
function _(e) {
    let { items: t, renderItem: n, ...r } = e;
    return (0, i.jsx)(o.ua7, {
        ...r,
        text: (0, i.jsx)('div', {
            className: u.tooltip,
            children: t.map(n)
        }),
        'aria-label': 'overflow',
        children: (e) =>
            (0, i.jsx)('div', {
                ...e,
                children: n(l.intl.formatToPlainString(l.t.vGclWl, { count: t.length }))
            })
    });
}
function p(e) {
    let { onItemLayout: t, index: n, children: a } = e,
        s = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            null != s.current && t(n, s.current.getBoundingClientRect().width);
        }),
        (0, i.jsx)('div', {
            ref: s,
            children: a
        })
    );
}
function h(e) {
    return 'string' == typeof e ? e : e.key;
}
function m(e) {
    let { className: t, items: n, renderItem: a, itemGapPx: o = 0, maxLines: c, renderOverflow: m } = e,
        { ref: g, width: E } = d(),
        {
            lastVisibleIndex: v,
            onItemLayout: y,
            overflowItemsRef: I
        } = f({
            items: n,
            itemGapPx: o,
            maxLines: c,
            containerWidth: E
        }),
        T = r.useCallback(
            (e) =>
                (0, i.jsx)(_, {
                    items: e,
                    renderItem: a
                }),
            [a]
        ),
        b = null != m ? m : T,
        S = r.useMemo(() => n.slice(0, v + 1), [n, v]),
        A = r.useMemo(() => n.slice(v + 1), [n, v]);
    return (0, i.jsxs)('div', {
        className: s()(t, u.items),
        ref: g,
        children: [
            (0, i.jsxs)('div', {
                'aria-hidden': !0,
                className: u.measurements,
                children: [
                    (0, i.jsx)('div', {
                        className: u.itemMeasurements,
                        children: n.map((e, t) =>
                            (0, i.jsx)(
                                p,
                                {
                                    index: t,
                                    onItemLayout: y,
                                    children: a(e)
                                },
                                h(e)
                            )
                        )
                    }),
                    (0, i.jsx)('div', {
                        className: u.overflowMeasurement,
                        ref: I,
                        children: a(l.intl.formatToPlainString(l.t.vGclWl, { count: Number('1'.concat(n.length)) }))
                    })
                ]
            }),
            S.map(a),
            A.length > 0 && b(A)
        ]
    });
}

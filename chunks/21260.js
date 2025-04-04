n.d(t, {
    AJ: () => y,
    Ep: () => O,
    te: () => b,
    zP: () => E
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(388032),
    c = n(831704);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function m(e) {
    let { items: t, maxLines: n, itemWidths: r, itemGapPx: i, containerWidth: o, overflowWidth: a } = e,
        s = 0,
        l = 0,
        c = 0;
    for (let e = 0; e < t.length; e++) {
        let u = r[e];
        if (isNaN(u) || u > o) continue;
        let d = s === n - 1,
            f = e === t.length - 1;
        if (!(Math.round(l + u + (d && !f ? a + i : 0)) < Math.round(o))) {
            if (d) break;
            s++, (l = 0);
        }
        (c = e), (l += u + i);
    }
    return c;
}
function g() {
    let [e, t] = i.useState(0),
        n = i.useRef(null),
        r = new Map(),
        o = new ResizeObserver((e) => {
            e.forEach((e) => {
                var t;
                let { target: n } = e;
                null == (t = r.get(n)) || t(e);
            });
        });
    return (
        (0, s.znF)({
            ref: n,
            key: 'horizontal-overflow-list',
            onUpdate: (e) => {
                var n;
                let r = null == (n = e.target) ? void 0 : n.getBoundingClientRect();
                null != r && t(r.width);
            },
            resizeObserver: o,
            listenerMap: r
        }),
        {
            ref: n,
            width: e
        }
    );
}
function E(e) {
    let { itemGapPx: t, items: n, maxLines: r, containerWidth: o } = e,
        [a, s] = i.useState(0),
        l = i.useRef([]),
        c = i.useRef(0),
        u = i.useRef(0),
        d = i.useRef(null),
        f = i.useCallback((e, t) => {
            l.current[e] = t;
        }, []);
    return (
        i.useLayoutEffect(() => {
            var e;
            if (null == d.current) return;
            (l.current.length = n.length), (c.current = null != (e = d.current.getBoundingClientRect().width) ? e : 0);
            let i = m({
                items: n,
                maxLines: r,
                itemGapPx: t,
                containerWidth: o,
                itemWidths: l.current,
                overflowWidth: c.current
            });
            i !== u.current && ((u.current = i), s((e) => e + 1));
        }, [o, t, n, r]),
        i.useMemo(
            () => ({
                lastVisibleIndex: u.current,
                onItemLayout: f,
                overflowItemsRef: d,
                itemWidthsRef: l,
                version: a
            }),
            [f, a]
        )
    );
}
function b(e) {
    var { items: t, renderItem: n } = e,
        i = p(e, ['items', 'renderItem']);
    return (0, r.jsx)(
        s.ua7,
        _(d({}, i), {
            text: (0, r.jsx)('div', {
                className: c.tooltip,
                children: t.map(n)
            }),
            'aria-label': 'overflow',
            children: (e) => (0, r.jsx)('div', _(d({}, e), { children: n(l.NW.formatToPlainString(l.t.vGclWl, { count: t.length })) }))
        })
    );
}
function y(e) {
    let { onItemLayout: t, index: n, children: o } = e,
        a = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            null != a.current && t(n, a.current.getBoundingClientRect().width);
        }),
        (0, r.jsx)('div', {
            ref: a,
            children: o
        })
    );
}
function v(e) {
    return 'string' == typeof e ? e : e.key;
}
function O(e) {
    let { className: t, items: n, renderItem: o, itemGapPx: s = 0, maxLines: u, renderOverflow: d } = e,
        { ref: f, width: _ } = g(),
        {
            lastVisibleIndex: p,
            onItemLayout: h,
            overflowItemsRef: m
        } = E({
            items: n,
            itemGapPx: s,
            maxLines: u,
            containerWidth: _
        }),
        O = i.useCallback(
            (e) =>
                (0, r.jsx)(b, {
                    items: e,
                    renderItem: o
                }),
            [o]
        ),
        I = null != d ? d : O,
        S = i.useMemo(() => n.slice(0, p + 1), [n, p]),
        T = i.useMemo(() => n.slice(p + 1), [n, p]);
    return (0, r.jsxs)('div', {
        className: a()(t, c.items),
        ref: f,
        children: [
            (0, r.jsxs)('div', {
                'aria-hidden': !0,
                className: c.measurements,
                children: [
                    (0, r.jsx)('div', {
                        className: c.itemMeasurements,
                        children: n.map((e, t) =>
                            (0, r.jsx)(
                                y,
                                {
                                    index: t,
                                    onItemLayout: h,
                                    children: o(e)
                                },
                                v(e)
                            )
                        )
                    }),
                    (0, r.jsx)('div', {
                        className: c.overflowMeasurement,
                        ref: m,
                        children: o(l.NW.formatToPlainString(l.t.vGclWl, { count: Number('1'.concat(n.length)) }))
                    })
                ]
            }),
            S.map(o),
            T.length > 0 && I(T)
        ]
    });
}

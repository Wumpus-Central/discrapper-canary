n.d(t, {
    AJ: () => y,
    Ep: () => v,
    te: () => b,
    zP: () => E
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(393238),
    c = n(388032),
    u = n(831704);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function g(e) {
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
function E(e) {
    let { itemGapPx: t, items: n, maxLines: r, containerWidth: a } = e,
        [o, s] = i.useState(0),
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
            let i = g({
                items: n,
                maxLines: r,
                itemGapPx: t,
                containerWidth: a,
                itemWidths: l.current,
                overflowWidth: c.current
            });
            i !== u.current && ((u.current = i), s((e) => e + 1));
        }, [a, t, n, r]),
        i.useMemo(
            () => ({
                lastVisibleIndex: u.current,
                onItemLayout: f,
                overflowItemsRef: d,
                itemWidthsRef: l,
                version: o
            }),
            [f, o]
        )
    );
}
function b(e) {
    var { items: t, renderItem: n } = e,
        i = h(e, ['items', 'renderItem']);
    return (0, r.jsx)(
        s.ua7,
        p(f({}, i), {
            text: (0, r.jsx)('div', {
                className: u.tooltip,
                children: t.map(n)
            }),
            'aria-label': 'overflow',
            children: (e) => (0, r.jsx)('div', p(f({}, e), { children: n(c.intl.formatToPlainString(c.t.vGclWl, { count: t.length })) }))
        })
    );
}
function y(e) {
    let { onItemLayout: t, index: n, children: a } = e,
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            null != o.current && t(n, o.current.getBoundingClientRect().width);
        }),
        (0, r.jsx)('div', {
            ref: o,
            children: a
        })
    );
}
function O(e) {
    return 'string' == typeof e ? e : e.key;
}
function v(e) {
    let { className: t, items: n, renderItem: a, itemGapPx: s = 0, maxLines: d, renderOverflow: f } = e,
        { ref: _, width: p = 0 } = (0, l.ZP)(),
        {
            lastVisibleIndex: h,
            onItemLayout: m,
            overflowItemsRef: g
        } = E({
            items: n,
            itemGapPx: s,
            maxLines: d,
            containerWidth: p
        }),
        v = i.useCallback(
            (e) =>
                (0, r.jsx)(b, {
                    items: e,
                    renderItem: a
                }),
            [a]
        ),
        I = null != f ? f : v,
        S = i.useMemo(() => n.slice(0, h + 1), [n, h]),
        T = i.useMemo(() => n.slice(h + 1), [n, h]);
    return (0, r.jsxs)('div', {
        className: o()(t, u.items),
        ref: _,
        children: [
            (0, r.jsxs)('div', {
                'aria-hidden': !0,
                className: u.measurements,
                children: [
                    (0, r.jsx)('div', {
                        className: u.itemMeasurements,
                        children: n.map((e, t) =>
                            (0, r.jsx)(
                                y,
                                {
                                    index: t,
                                    onItemLayout: m,
                                    children: a(e)
                                },
                                O(e)
                            )
                        )
                    }),
                    (0, r.jsx)('div', {
                        className: u.overflowMeasurement,
                        ref: g,
                        children: a(c.intl.formatToPlainString(c.t.vGclWl, { count: Number('1'.concat(n.length)) }))
                    })
                ]
            }),
            S.map(a),
            T.length > 0 && I(T)
        ]
    });
}

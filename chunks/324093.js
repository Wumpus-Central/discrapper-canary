n.d(t, { K2: () => C, OL: () => b, Ub: () => g, k1: () => T });
var i = n(64700),
    r = n(311907),
    a = n(391973),
    s = n(765671),
    l = n(964486),
    o = n(475743),
    d = n(531685),
    c = n(365971),
    u = n(129537),
    h = n(916494),
    m = n(897720),
    p = n(545807);
let g = 256,
    f = (e, t) => 2 * e + 2 * t,
    _ = (e) => {
        let { width: t, height: n } = e;
        return { fixed: !0, width: t, height: n };
    };
function x(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : g,
        a = { width: r, height: (0, h.uc)(r) },
        s = Math.max(1, e),
        l = (0, h.kz)(e, t),
        o = f(n, t);
    return i
        ? { width: a.width + o, height: a.height * s + l + o }
        : { width: a.width * s + l + o, height: a.height + o };
}
function A(e, t, n, i) {
    let r = f(e, t);
    return i ? n.width - r : (0, h.Um)(n.height - r);
}
function E(e) {
    return e.height > e.width;
}
let S = 180 / 1080;
function I(e) {
    let { layout: t, tileCount: n, borderWidth: i, padding: r, previousContainerSize: a, widgetMinMaxSizes: s } = e,
        l = t === m.IV.VERTICAL,
        o = A(i, r, a, l),
        d = x(n, r, i, l, o);
    return (0, h.UM)(
        d,
        { containerOffset: f(i, r), gapSize: r, tileCount: n, isVertical: l },
        { maxWidth: s.maxSize.width, maxHeight: s.maxSize.height },
    );
}
function v(e) {
    let { widgetId: t, size: n, borderWidth: i, padding: r, minSize: s, containerSpecs: l, defaultSize: o, ...d } = e,
        c = (e) =>
            b({
                operation: u.P.RESIZE_NORTH,
                computedSize: e,
                originSize: e,
                borderWidth: i,
                padding: r,
                containerSpecs: l,
                ...d,
            }),
        h = { widgetId: t, size: { fixed: n.fixed, ...c(n) }, minSize: { ...c(s) } };
    null != o && (h.defaultSize = { ...c(o) }), (0, a.Ju)({ ...h });
}
let b = (e) => {
    let t,
        n,
        i,
        { operation: r, computedSize: a, originSize: s, borderWidth: l, padding: o, containerSpecs: d } = e,
        c = f(l, o),
        m = Math.max(1, s.width),
        p = Math.max(1, s.height),
        g = { width: m, height: p },
        _ = E(g),
        x =
            ((t = E(g)),
            (n = A(l, o, g, t)),
            (i = (0, h.uc)(n)),
            t ? Math.floor(g.height / i) : Math.floor(g.width / n)),
        S = (0, h.eu)({ width: m, height: p, containerOffset: c, gapSize: o, tileCount: x, isVertical: _ }),
        I = (0, h.kz)(x, o),
        v = (() => {
            var e, t;
            switch (r) {
                case u.P.RESIZE_NORTH:
                case u.P.RESIZE_SOUTH:
                    let n, i;
                    return {
                        height: a.height,
                        width:
                            ((e = a.height),
                            (n = _ ? e - I : e),
                            (i = (0, h.Mw)(n - c, S.horizontalRatio)),
                            _ || (i += I),
                            i + c),
                    };
                default:
                    let s, l;
                    return {
                        width: a.width,
                        height:
                            ((t = a.width),
                            (s = _ ? t : t - I),
                            (l = (0, h.cP)(s - c, S.verticalRatio)),
                            _ && (l += I),
                            l + c),
                    };
            }
        })();
    return (0, h.UM)(
        v,
        { containerOffset: c, gapSize: o, tileCount: x, isVertical: _ },
        { maxWidth: 0.75 * d.maxX, maxHeight: 0.75 * d.maxY },
    );
};
function C(e) {
    let { tileCount: t, padding: n, borderWidth: i, isVertical: a, widgetSize: l } = e,
        { width: o, height: u } = {
            width: "number" == typeof l.width ? l.width : g,
            height: "number" == typeof l.height ? l.height : (0, h.uc)(g),
        },
        { width: m = o, height: _ = u, ref: E } = (0, s.Ay)(),
        I = (0, p.A)(),
        v = (0, c.Q2)(I),
        b = (0, r.bG)([d.A], () => d.A.windowSize(v), [v]),
        C = (function (e) {
            let { tileCount: t, padding: n, borderWidth: i, windowWidth: r, windowHeight: a, isVertical: s } = e,
                l = x(t, n, i, s),
                o = { maxX: r ?? (2 * l.width) / 0.75, maxY: a ?? (2 * l.height) / 0.75, minX: 0, minY: 0 },
                d = { width: 0.75 * o.maxX, height: 0.75 * o.maxY },
                c = (a ?? 0) * S;
            return (
                (c = Math.max(l.height, c)),
                (c = Math.min(d.height, c)),
                { minSize: l, defaultSize: x(t, n, i, s, (0, h.Um)(c)), maxSize: d, containerSpecs: o }
            );
        })({ tileCount: t, padding: n, borderWidth: i, windowWidth: b.width, windowHeight: b.height, isVertical: a }),
        T = f(i, n),
        j = A(i, n, { width: m + T, height: _ + T }, a),
        y = (0, h.uc)(j);
    return { tileWidth: j, tileHeight: y, widgetWidth: o, widgetHeight: u, containerRef: E, containerMinMaxSizes: C };
}
function T(e) {
    let { streamParticipants: t, layout: n, widgetLayoutSpecs: r } = e,
        a = i.useRef(r);
    a.current = r;
    let s = (0, o.A)(n),
        d = t.length,
        c = r.widgetMinMaxSizes.maxSize.width * r.widgetMinMaxSizes.maxSize.height;
    (0, l.u5)(() => {
        let {
            id: e,
            widgetMinMaxSizes: t,
            containerSize: n,
            layout: i,
            padding: r,
            widget: s,
            borderWidth: l,
            locked: o,
            ...c
        } = a.current;
        null == s ||
            v({
                widgetId: e,
                size: _(
                    I({
                        layout: i,
                        tileCount: Math.max(1, d),
                        borderWidth: l,
                        padding: r,
                        previousContainerSize: t.defaultSize,
                        widgetMinMaxSizes: t,
                    }),
                ),
                defaultSize: t.defaultSize,
                minSize: _(t.minSize),
                containerSpecs: t.containerSpecs,
                padding: r,
                borderWidth: l,
                widget: s,
                ...c,
            });
    }),
        i.useLayoutEffect(() => {
            let {
                id: e,
                widgetMinMaxSizes: t,
                containerSize: n,
                layout: i,
                padding: r,
                widget: s,
                borderWidth: l,
                locked: o,
                ...c
            } = a.current;
            if (null != s) {
                if (0 === d) {
                    if (o) return;
                    v({
                        widgetId: e,
                        size: _(t.defaultSize),
                        defaultSize: t.defaultSize,
                        minSize: _(t.minSize),
                        padding: r,
                        borderWidth: l,
                        widget: s,
                        containerSpecs: t.containerSpecs,
                        ...c,
                    });
                    return;
                }
                v({
                    widgetId: e,
                    size: _(
                        I({
                            layout: i,
                            tileCount: d,
                            borderWidth: l,
                            padding: r,
                            previousContainerSize: n,
                            widgetMinMaxSizes: t,
                        }),
                    ),
                    minSize: _(t.minSize),
                    containerSpecs: t.containerSpecs,
                    padding: r,
                    borderWidth: l,
                    widget: s,
                    ...c,
                });
            }
        }, [d, c]),
        i.useLayoutEffect(() => {
            if (a.current.participants <= 1) return;
            let {
                id: e,
                widgetMinMaxSizes: t,
                containerSize: i,
                padding: r,
                borderWidth: l,
                participants: o,
                widget: d,
                ...c
            } = a.current;
            if (null == d || s === n) return;
            let u = (function (e) {
                let {
                        oldLayout: t,
                        newLayout: n,
                        tileCount: i,
                        borderWidth: r,
                        padding: a,
                        previousContainerSize: s,
                        widgetMinMaxSizes: l,
                    } = e,
                    o = A(r, a, s, t === m.IV.VERTICAL),
                    d = x(i, a, r, n === m.IV.VERTICAL, o);
                return (0, h.UM)(
                    d,
                    { containerOffset: f(r, a), gapSize: a, tileCount: i, isVertical: n === m.IV.VERTICAL },
                    { maxWidth: l.maxSize.width, maxHeight: l.maxSize.height },
                );
            })({
                oldLayout: s ?? n,
                newLayout: n,
                tileCount: o,
                borderWidth: l,
                padding: r,
                previousContainerSize: i,
                widgetMinMaxSizes: t,
            });
            v({
                widgetId: e,
                size: _(u),
                minSize: _(t.minSize),
                containerSpecs: t.containerSpecs,
                padding: r,
                borderWidth: l,
                widget: d,
                ...c,
            });
        }, [n, s]),
        (0, l.l0)(() => {
            let { id: e, widgetMinMaxSizes: t, widget: n, padding: i, ...r } = a.current;
            null != n &&
                v({
                    widgetId: e,
                    size: _(t.defaultSize),
                    defaultSize: t.defaultSize,
                    minSize: _(t.minSize),
                    containerSpecs: t.containerSpecs,
                    padding: i,
                    widget: n,
                    ...r,
                });
        });
}

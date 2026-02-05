n.d(t, { K2: () => v, OL: () => C, Ub: () => g, k1: () => y });
var i = n(64700),
    l = n(311907),
    a = n(391973),
    s = n(765671),
    r = n(964486),
    o = n(475743),
    d = n(531685),
    u = n(365971),
    c = n(129537),
    h = n(916494),
    A = n(897720),
    m = n(545807);
let g = 256,
    p = (e, t) => 2 * e + 2 * t,
    f = (e) => {
        let { width: t, height: n } = e;
        return { fixed: !0, width: t, height: n };
    };
function _(e, t, n, i) {
    let l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : g,
        a = { width: l, height: (0, h.uc)(l) },
        s = Math.max(1, e),
        r = (0, h.kz)(e, t),
        o = p(n, t);
    return i
        ? { width: a.width + o, height: a.height * s + r + o }
        : { width: a.width * s + r + o, height: a.height + o };
}
function E(e, t, n, i) {
    let l = p(e, t);
    return i ? n.width - l : (0, h.Um)(n.height - l);
}
function x(e) {
    return e.height > e.width;
}
let S = 180 / 1080;
function I(e) {
    let { layout: t, tileCount: n, borderWidth: i, padding: l, previousContainerSize: a, widgetMinMaxSizes: s } = e,
        r = t === A.IV.VERTICAL,
        o = E(i, l, a, r),
        d = _(n, l, i, r, o);
    return (0, h.UM)(
        d,
        { containerOffset: p(i, l), gapSize: l, tileCount: n, isVertical: r },
        { maxWidth: s.maxSize.width, maxHeight: s.maxSize.height },
    );
}
function T(e) {
    let { widgetId: t, size: n, borderWidth: i, padding: l, minSize: s, containerSpecs: r, defaultSize: o, ...d } = e,
        u = (e) =>
            C({
                operation: c.P.RESIZE_NORTH,
                computedSize: e,
                originSize: e,
                borderWidth: i,
                padding: l,
                containerSpecs: r,
                ...d,
            }),
        h = { widgetId: t, size: { fixed: n.fixed, ...u(n) }, minSize: { ...u(s) } };
    null != o && (h.defaultSize = { ...u(o) }), (0, a.Ju)({ ...h });
}
let C = (e) => {
    let t,
        n,
        i,
        { operation: l, computedSize: a, originSize: s, borderWidth: r, padding: o, containerSpecs: d } = e,
        u = p(r, o),
        A = Math.max(1, s.width),
        m = Math.max(1, s.height),
        g = { width: A, height: m },
        f = x(g),
        _ =
            ((t = x(g)),
            (n = E(r, o, g, t)),
            (i = (0, h.uc)(n)),
            t ? Math.floor(g.height / i) : Math.floor(g.width / n)),
        S = (0, h.eu)({ width: A, height: m, containerOffset: u, gapSize: o, tileCount: _, isVertical: f }),
        I = (0, h.kz)(_, o),
        T = (() => {
            var e, t;
            switch (l) {
                case c.P.RESIZE_NORTH:
                case c.P.RESIZE_SOUTH:
                    let n, i;
                    return {
                        height: a.height,
                        width:
                            ((e = a.height),
                            (n = f ? e - I : e),
                            (i = (0, h.Mw)(n - u, S.horizontalRatio)),
                            f || (i += I),
                            i + u),
                    };
                default:
                    let s, r;
                    return {
                        width: a.width,
                        height:
                            ((t = a.width),
                            (s = f ? t : t - I),
                            (r = (0, h.cP)(s - u, S.verticalRatio)),
                            f && (r += I),
                            r + u),
                    };
            }
        })();
    return (0, h.UM)(
        T,
        { containerOffset: u, gapSize: o, tileCount: _, isVertical: f },
        { maxWidth: 0.75 * d.maxX, maxHeight: 0.75 * d.maxY },
    );
};
function v(e) {
    let { tileCount: t, padding: n, borderWidth: i, isVertical: a, widgetSize: r } = e,
        { width: o, height: c } = {
            width: "number" == typeof r.width ? r.width : g,
            height: "number" == typeof r.height ? r.height : (0, h.uc)(g),
        },
        { width: A = o, height: f = c, ref: x } = (0, s.Ay)(),
        I = (0, m.A)(),
        T = (0, u.Q2)(I),
        C = (0, l.bG)([d.A], () => d.A.windowSize(T), [T]),
        v = (function (e) {
            let { tileCount: t, padding: n, borderWidth: i, windowWidth: l, windowHeight: a, isVertical: s } = e,
                r = _(t, n, i, s),
                o = { maxX: l ?? (2 * r.width) / 0.75, maxY: a ?? (2 * r.height) / 0.75, minX: 0, minY: 0 },
                d = { width: 0.75 * o.maxX, height: 0.75 * o.maxY },
                u = (a ?? 0) * S;
            return (
                (u = Math.max(r.height, u)),
                (u = Math.min(d.height, u)),
                { minSize: r, defaultSize: _(t, n, i, s, (0, h.Um)(u)), maxSize: d, containerSpecs: o }
            );
        })({ tileCount: t, padding: n, borderWidth: i, windowWidth: C.width, windowHeight: C.height, isVertical: a }),
        y = p(i, n),
        N = E(i, n, { width: A + y, height: f + y }, a),
        O = (0, h.uc)(N);
    return { tileWidth: N, tileHeight: O, widgetWidth: o, widgetHeight: c, containerRef: x, containerMinMaxSizes: v };
}
function y(e) {
    let { streamParticipants: t, layout: n, widgetLayoutSpecs: l } = e,
        a = i.useRef(l);
    a.current = l;
    let s = (0, o.A)(n),
        d = t.length,
        u = l.widgetMinMaxSizes.maxSize.width * l.widgetMinMaxSizes.maxSize.height;
    (0, r.u5)(() => {
        let {
            id: e,
            widgetMinMaxSizes: t,
            containerSize: n,
            layout: i,
            padding: l,
            widget: s,
            borderWidth: r,
            locked: o,
            ...u
        } = a.current;
        null == s ||
            T({
                widgetId: e,
                size: f(
                    I({
                        layout: i,
                        tileCount: Math.max(1, d),
                        borderWidth: r,
                        padding: l,
                        previousContainerSize: t.defaultSize,
                        widgetMinMaxSizes: t,
                    }),
                ),
                defaultSize: t.defaultSize,
                minSize: f(t.minSize),
                containerSpecs: t.containerSpecs,
                padding: l,
                borderWidth: r,
                widget: s,
                ...u,
            });
    }),
        i.useLayoutEffect(() => {
            let {
                id: e,
                widgetMinMaxSizes: t,
                containerSize: n,
                layout: i,
                padding: l,
                widget: s,
                borderWidth: r,
                locked: o,
                ...u
            } = a.current;
            if (null != s) {
                if (0 === d) {
                    if (o) return;
                    T({
                        widgetId: e,
                        size: f(t.defaultSize),
                        defaultSize: t.defaultSize,
                        minSize: f(t.minSize),
                        padding: l,
                        borderWidth: r,
                        widget: s,
                        containerSpecs: t.containerSpecs,
                        ...u,
                    });
                    return;
                }
                T({
                    widgetId: e,
                    size: f(
                        I({
                            layout: i,
                            tileCount: d,
                            borderWidth: r,
                            padding: l,
                            previousContainerSize: n,
                            widgetMinMaxSizes: t,
                        }),
                    ),
                    minSize: f(t.minSize),
                    containerSpecs: t.containerSpecs,
                    padding: l,
                    borderWidth: r,
                    widget: s,
                    ...u,
                });
            }
        }, [d, u]),
        i.useLayoutEffect(() => {
            if (a.current.participants <= 1) return;
            let {
                id: e,
                widgetMinMaxSizes: t,
                containerSize: i,
                padding: l,
                borderWidth: r,
                participants: o,
                widget: d,
                ...u
            } = a.current;
            if (null == d || s === n) return;
            let c = (function (e) {
                let {
                        oldLayout: t,
                        newLayout: n,
                        tileCount: i,
                        borderWidth: l,
                        padding: a,
                        previousContainerSize: s,
                        widgetMinMaxSizes: r,
                    } = e,
                    o = E(l, a, s, t === A.IV.VERTICAL),
                    d = _(i, a, l, n === A.IV.VERTICAL, o);
                return (0, h.UM)(
                    d,
                    { containerOffset: p(l, a), gapSize: a, tileCount: i, isVertical: n === A.IV.VERTICAL },
                    { maxWidth: r.maxSize.width, maxHeight: r.maxSize.height },
                );
            })({
                oldLayout: s ?? n,
                newLayout: n,
                tileCount: o,
                borderWidth: r,
                padding: l,
                previousContainerSize: i,
                widgetMinMaxSizes: t,
            });
            T({
                widgetId: e,
                size: f(c),
                minSize: f(t.minSize),
                containerSpecs: t.containerSpecs,
                padding: l,
                borderWidth: r,
                widget: d,
                ...u,
            });
        }, [n, s]),
        (0, r.l0)(() => {
            let { id: e, widgetMinMaxSizes: t, widget: n, padding: i, ...l } = a.current;
            null != n &&
                T({
                    widgetId: e,
                    size: f(t.defaultSize),
                    defaultSize: t.defaultSize,
                    minSize: f(t.minSize),
                    containerSpecs: t.containerSpecs,
                    padding: i,
                    widget: n,
                    ...l,
                });
        });
}

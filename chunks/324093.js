n.d(t, {
    K2: () => N,
    OL: () => I,
    Ub: () => y,
    k1: () => w,
});
var i = n(64700),
    r = n(311907),
    l = n(391973),
    a = n(765671),
    o = n(964486),
    s = n(475743),
    c = n(531685),
    u = n(365971),
    d = n(129537),
    p = n(916494),
    h = n(897720),
    f = n(545807);

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}

function g(e, t) {
    if (null == e) return {};
    var n,
        i,
        r,
        l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
            (i = n[r]), !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
        return l;
    }
    if (
        ((l = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = {},
                l = Object.getOwnPropertyNames(e);
            for (i = 0; i < l.length; i++)
                (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            return r;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            (i = n[r]), !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
    return l;
}
let y = 256,
    A = (e, t) => 2 * e + 2 * t,
    O = (e) => {
        let { width: t, height: n } = e;
        return {
            fixed: !0,
            width: t,
            height: n,
        };
    };

function E(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : y,
        l = {
            width: r,
            height: (0, p.uc)(r),
        },
        a = Math.max(1, e),
        o = (0, p.kz)(e, t),
        s = A(n, t);
    return i
        ? {
              width: l.width + s,
              height: l.height * a + o + s,
          }
        : {
              width: l.width * a + o + s,
              height: l.height + s,
          };
}

function v(e, t, n, i) {
    let r = A(e, t);
    return i ? n.width - r : (0, p.Um)(n.height - r);
}

function b(e) {
    return e.height > e.width;
}
let S = 180 / 1080;

function x(e) {
    let { layout: t, tileCount: n, borderWidth: i, padding: r, previousContainerSize: l, widgetMinMaxSizes: a } = e,
        o = t === h.IV.VERTICAL,
        s = v(i, r, l, o),
        c = E(n, r, i, o, s);
    return (0, p.UM)(
        c,
        {
            containerOffset: A(i, r),
            gapSize: r,
            tileCount: n,
            isVertical: o,
        },
        {
            maxWidth: a.maxSize.width,
            maxHeight: a.maxSize.height,
        },
    );
}

function j(e) {
    let { widgetId: t, size: n, borderWidth: i, padding: r, minSize: a, containerSpecs: o, defaultSize: s } = e,
        c = g(e, ["widgetId", "size", "borderWidth", "padding", "minSize", "containerSpecs", "defaultSize"]),
        u = (e) =>
            I(
                m(
                    {
                        operation: d.P.RESIZE_NORTH,
                        computedSize: e,
                        originSize: e,
                        borderWidth: i,
                        padding: r,
                        containerSpecs: o,
                    },
                    c,
                ),
            ),
        p = {
            widgetId: t,
            size: m(
                {
                    fixed: n.fixed,
                },
                u(n),
            ),
            minSize: m({}, u(a)),
        };
    null != s && (p.defaultSize = m({}, u(s))), (0, l.Ju)(m({}, p));
}
let I = (e) => {
    let t,
        n,
        i,
        { operation: r, computedSize: l, originSize: a, borderWidth: o, padding: s, containerSpecs: c } = e,
        u = A(o, s),
        h = Math.max(1, a.width),
        f = Math.max(1, a.height),
        m = {
            width: h,
            height: f,
        },
        g = b(m),
        y =
            ((t = b(m)),
            (n = v(o, s, m, t)),
            (i = (0, p.uc)(n)),
            t ? Math.floor(m.height / i) : Math.floor(m.width / n)),
        O = (0, p.eu)({
            width: h,
            height: f,
            containerOffset: u,
            gapSize: s,
            tileCount: y,
            isVertical: g,
        }),
        E = (0, p.kz)(y, s),
        S = (() => {
            var e, t;
            switch (r) {
                case d.P.RESIZE_NORTH:
                case d.P.RESIZE_SOUTH:
                    let n, i;
                    return {
                        height: l.height,
                        width:
                            ((e = l.height),
                            (n = g ? e - E : e),
                            (i = (0, p.Mw)(n - u, O.horizontalRatio)),
                            g || (i += E),
                            i + u),
                    };
                default:
                    let a, o;
                    return {
                        width: l.width,
                        height:
                            ((t = l.width),
                            (a = g ? t : t - E),
                            (o = (0, p.cP)(a - u, O.verticalRatio)),
                            g && (o += E),
                            o + u),
                    };
            }
        })();
    return (0, p.UM)(
        S,
        {
            containerOffset: u,
            gapSize: s,
            tileCount: y,
            isVertical: g,
        },
        {
            maxWidth: 0.75 * c.maxX,
            maxHeight: 0.75 * c.maxY,
        },
    );
};

function N(e) {
    let { tileCount: t, padding: n, borderWidth: i, isVertical: l, widgetSize: o } = e,
        { width: s, height: d } = {
            width: "number" == typeof o.width ? o.width : y,
            height: "number" == typeof o.height ? o.height : (0, p.uc)(y),
        },
        { width: h = s, height: m = d, ref: g } = (0, a.Ay)(),
        O = (0, f.A)(),
        b = (0, u.Q2)(O),
        x = (0, r.bG)([c.A], () => c.A.windowSize(b), [b]),
        j = (function (e) {
            let { tileCount: t, padding: n, borderWidth: i, windowWidth: r, windowHeight: l, isVertical: a } = e,
                o = E(t, n, i, a),
                s = {
                    maxX: null != r ? r : (2 * o.width) / 0.75,
                    maxY: null != l ? l : (2 * o.height) / 0.75,
                    minX: 0,
                    minY: 0,
                },
                c = {
                    width: 0.75 * s.maxX,
                    height: 0.75 * s.maxY,
                },
                u = (null != l ? l : 0) * S;
            return (
                (u = Math.max(o.height, u)),
                (u = Math.min(c.height, u)),
                {
                    minSize: o,
                    defaultSize: E(t, n, i, a, (0, p.Um)(u)),
                    maxSize: c,
                    containerSpecs: s,
                }
            );
        })({
            tileCount: t,
            padding: n,
            borderWidth: i,
            windowWidth: x.width,
            windowHeight: x.height,
            isVertical: l,
        }),
        I = A(i, n),
        N = v(
            i,
            n,
            {
                width: h + I,
                height: m + I,
            },
            l,
        ),
        w = (0, p.uc)(N);
    return {
        tileWidth: N,
        tileHeight: w,
        widgetWidth: s,
        widgetHeight: d,
        containerRef: g,
        containerMinMaxSizes: j,
    };
}

function w(e) {
    let { streamParticipants: t, layout: n, widgetLayoutSpecs: r } = e,
        l = i.useRef(r);
    l.current = r;
    let a = (0, s.A)(n),
        c = t.length,
        u = r.widgetMinMaxSizes.maxSize.width * r.widgetMinMaxSizes.maxSize.height;
    (0, o.u5)(() => {
        let e = l.current,
            {
                id: t,
                widgetMinMaxSizes: n,
                containerSize: i,
                layout: r,
                padding: a,
                widget: o,
                borderWidth: s,
                locked: u,
            } = e,
            d = g(e, [
                "id",
                "widgetMinMaxSizes",
                "containerSize",
                "layout",
                "padding",
                "widget",
                "borderWidth",
                "locked",
            ]);
        null == o ||
            j(
                m(
                    {
                        widgetId: t,
                        size: O(
                            x({
                                layout: r,
                                tileCount: Math.max(1, c),
                                borderWidth: s,
                                padding: a,
                                previousContainerSize: n.defaultSize,
                                widgetMinMaxSizes: n,
                            }),
                        ),
                        defaultSize: n.defaultSize,
                        minSize: O(n.minSize),
                        containerSpecs: n.containerSpecs,
                        padding: a,
                        borderWidth: s,
                        widget: o,
                    },
                    d,
                ),
            );
    }),
        i.useLayoutEffect(() => {
            let e = l.current,
                {
                    id: t,
                    widgetMinMaxSizes: n,
                    containerSize: i,
                    layout: r,
                    padding: a,
                    widget: o,
                    borderWidth: s,
                    locked: u,
                } = e,
                d = g(e, [
                    "id",
                    "widgetMinMaxSizes",
                    "containerSize",
                    "layout",
                    "padding",
                    "widget",
                    "borderWidth",
                    "locked",
                ]);
            if (null != o) {
                if (0 === c) {
                    if (u) return;
                    j(
                        m(
                            {
                                widgetId: t,
                                size: O(n.defaultSize),
                                defaultSize: n.defaultSize,
                                minSize: O(n.minSize),
                                padding: a,
                                borderWidth: s,
                                widget: o,
                                containerSpecs: n.containerSpecs,
                            },
                            d,
                        ),
                    );
                    return;
                }
                j(
                    m(
                        {
                            widgetId: t,
                            size: O(
                                x({
                                    layout: r,
                                    tileCount: c,
                                    borderWidth: s,
                                    padding: a,
                                    previousContainerSize: i,
                                    widgetMinMaxSizes: n,
                                }),
                            ),
                            minSize: O(n.minSize),
                            containerSpecs: n.containerSpecs,
                            padding: a,
                            borderWidth: s,
                            widget: o,
                        },
                        d,
                    ),
                );
            }
        }, [c, u]),
        i.useLayoutEffect(() => {
            if (l.current.participants <= 1) return;
            let e = l.current,
                {
                    id: t,
                    widgetMinMaxSizes: i,
                    containerSize: r,
                    padding: o,
                    borderWidth: s,
                    participants: c,
                    widget: u,
                } = e,
                d = g(e, [
                    "id",
                    "widgetMinMaxSizes",
                    "containerSize",
                    "padding",
                    "borderWidth",
                    "participants",
                    "widget",
                ]);
            if (null == u || a === n) return;
            let f = (function (e) {
                let {
                        oldLayout: t,
                        newLayout: n,
                        tileCount: i,
                        borderWidth: r,
                        padding: l,
                        previousContainerSize: a,
                        widgetMinMaxSizes: o,
                    } = e,
                    s = v(r, l, a, t === h.IV.VERTICAL),
                    c = E(i, l, r, n === h.IV.VERTICAL, s);
                return (0, p.UM)(
                    c,
                    {
                        containerOffset: A(r, l),
                        gapSize: l,
                        tileCount: i,
                        isVertical: n === h.IV.VERTICAL,
                    },
                    {
                        maxWidth: o.maxSize.width,
                        maxHeight: o.maxSize.height,
                    },
                );
            })({
                oldLayout: null != a ? a : n,
                newLayout: n,
                tileCount: c,
                borderWidth: s,
                padding: o,
                previousContainerSize: r,
                widgetMinMaxSizes: i,
            });
            j(
                m(
                    {
                        widgetId: t,
                        size: O(f),
                        minSize: O(i.minSize),
                        containerSpecs: i.containerSpecs,
                        padding: o,
                        borderWidth: s,
                        widget: u,
                    },
                    d,
                ),
            );
        }, [n, a]),
        (0, o.l0)(() => {
            let e = l.current,
                { id: t, widgetMinMaxSizes: n, widget: i, padding: r } = e,
                a = g(e, ["id", "widgetMinMaxSizes", "widget", "padding"]);
            null != i &&
                j(
                    m(
                        {
                            widgetId: t,
                            size: O(n.defaultSize),
                            defaultSize: n.defaultSize,
                            minSize: O(n.minSize),
                            containerSpecs: n.containerSpecs,
                            padding: r,
                            widget: i,
                        },
                        a,
                    ),
                );
        });
}

n.d(t, {
    Bz: () => E,
    Dl: () => _,
    bt: () => h,
    wD: () => b,
});
var i = n(647438),
    r = n(765250),
    o = n(393238),
    l = n(493773),
    a = n(110924),
    s = n(353038),
    c = n(461393),
    u = n(340101);
function d(e) {
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
function p(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = {},
                o = Object.keys(e);
            for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++)
            (n = o[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
let h = 256,
    f = (e, t) => 2 * e + 2 * t,
    m = (e) => {
        let { width: t, height: n } = e;
        return {
            fixed: !0,
            width: t,
            height: n,
        };
    };
function g(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : h,
        o = {
            width: r,
            height: (0, c.MH)(r),
        },
        l = Math.max(1, e),
        a = (0, c.bj)(e, t),
        s = f(n, t);
    return i
        ? {
              width: o.width + s,
              height: o.height * l + a + s,
          }
        : {
              width: o.width * l + a + s,
              height: o.height + s,
          };
}
function y(e, t, n, i) {
    let r = f(e, t);
    return i ? n.width - r : (0, c.eJ)(n.height - r);
}
function O(e) {
    return e.height > e.width;
}
function v(e) {
    var { widgetId: t, size: n, borderWidth: i, padding: o, minSize: l, containerSpecs: a } = e,
        c = p(e, ["widgetId", "size", "borderWidth", "padding", "minSize", "containerSpecs"]);
    let { width: u, height: h } = b(
            d(
                {
                    operation: s.B.RESIZE_NORTH,
                    computedSize: {
                        width: n.width,
                        height: n.height,
                    },
                    originSize: {
                        width: n.width,
                        height: n.height,
                    },
                    borderWidth: i,
                    padding: o,
                    containerSpecs: a,
                },
                c,
            ),
        ),
        { width: f, height: m } = b(
            d(
                {
                    operation: s.B.RESIZE_NORTH,
                    computedSize: {
                        width: l.width,
                        height: l.height,
                    },
                    originSize: {
                        width: l.width,
                        height: l.height,
                    },
                    borderWidth: i,
                    padding: o,
                    containerSpecs: a,
                },
                c,
            ),
        );
    (0, r.nv)({
        widgetId: t,
        size: {
            fixed: n.fixed,
            width: u,
            height: h,
        },
        minSize: {
            width: f,
            height: m,
        },
    });
}
let b = (e) => {
    let { operation: t, computedSize: n, originSize: i, borderWidth: r, padding: o, containerSpecs: l } = e,
        a = f(r, o),
        u = Math.max(1, i.width),
        d = Math.max(1, i.height),
        p = {
            width: u,
            height: d,
        },
        h = O(p),
        m = (function (e, t, n) {
            let i = O(n),
                r = y(e, t, n, i),
                o = (0, c.MH)(r);
            return i ? Math.floor(n.height / o) : Math.floor(n.width / r);
        })(r, o, p),
        g = (0, c.f8)({
            width: u,
            height: d,
            containerOffset: a,
            gapSize: o,
            tileCount: m,
            isVertical: h,
        }),
        v = (0, c.bj)(m, o),
        b = (() => {
            switch (t) {
                case s.B.RESIZE_NORTH:
                case s.B.RESIZE_SOUTH:
                    return {
                        height: n.height,
                        width: ((e) => {
                            let t = h ? e - v : e,
                                n = (0, c.GB)(t - a, g.horizontalRatio);
                            return h || (n += v), n + a;
                        })(n.height),
                    };
                default:
                    return {
                        width: n.width,
                        height: ((e) => {
                            let t = h ? e : e - v,
                                n = (0, c.E5)(t - a, g.verticalRatio);
                            return h && (n += v), n + a;
                        })(n.width),
                    };
            }
        })();
    return (0, c.Se)(
        b,
        {
            containerOffset: a,
            gapSize: o,
            tileCount: m,
            isVertical: h,
        },
        {
            maxWidth: 0.75 * l.maxX,
            maxHeight: 0.75 * l.maxY,
        },
    );
};
function E(e) {
    let { tileCount: t, padding: n, borderWidth: i, windowWidth: r, windowHeight: l, isVertical: a, widgetSize: s } = e,
        { width: u, height: d } = {
            width: "number" == typeof s.width ? s.width : h,
            height: "number" == typeof s.height ? s.height : (0, c.MH)(h),
        },
        { width: p = u, height: m = d, ref: O } = (0, o.ZP)(),
        v = (function (e) {
            let { tileCount: t, padding: n, borderWidth: i, windowWidth: r, windowHeight: o, isVertical: l } = e,
                a = g(t, n, i, l),
                s = {
                    maxX: null != r ? r : (2 * a.width) / 0.75,
                    maxY: null != o ? o : (2 * a.height) / 0.75,
                    minX: 0,
                    minY: 0,
                };
            return {
                minSize: a,
                maxSize: {
                    width: 0.75 * s.maxX,
                    height: 0.75 * s.maxY,
                },
                containerSpecs: s,
            };
        })({
            tileCount: t,
            padding: n,
            borderWidth: i,
            windowWidth: r,
            windowHeight: l,
            isVertical: a,
        }),
        b = f(i, n),
        E = y(
            i,
            n,
            {
                width: p + b,
                height: m + b,
            },
            a,
        ),
        _ = (0, c.MH)(E);
    return {
        tileWidth: E,
        tileHeight: _,
        widgetWidth: u,
        widgetHeight: d,
        containerRef: O,
        containerMinMaxSizes: v,
    };
}
function _(e) {
    let { streamParticipants: t, layout: n, widgetLayoutSpecs: r } = e,
        o = i.useRef(r);
    o.current = r;
    let s = (0, a.Z)(n),
        h = t.length;
    i.useLayoutEffect(() => {
        let e = o.current,
            {
                id: t,
                widgetMinMaxSizes: n,
                containerSize: i,
                layout: r,
                padding: l,
                widget: a,
                borderWidth: s,
                locked: O,
            } = e,
            b = p(e, [
                "id",
                "widgetMinMaxSizes",
                "containerSize",
                "layout",
                "padding",
                "widget",
                "borderWidth",
                "locked",
            ]);
        if (null == a) return;
        if (0 === h) {
            if (O) return;
            v(
                d(
                    {
                        widgetId: t,
                        size: m(n.minSize),
                        minSize: m(n.minSize),
                        padding: l,
                        borderWidth: s,
                        widget: a,
                        containerSpecs: n.containerSpecs,
                    },
                    b,
                ),
            );
            return;
        }
        let E = (function (e) {
            let {
                    layout: t,
                    tileCount: n,
                    borderWidth: i,
                    padding: r,
                    previousContainerSize: o,
                    widgetMinMaxSizes: l,
                } = e,
                a = t === u.C5.VERTICAL,
                s = y(i, r, o, a),
                d = g(n, r, i, a, s);
            return (0, c.Se)(
                d,
                {
                    containerOffset: f(i, r),
                    gapSize: r,
                    tileCount: n,
                    isVertical: a,
                },
                {
                    maxWidth: l.maxSize.width,
                    maxHeight: l.maxSize.height,
                },
            );
        })({
            layout: r,
            tileCount: h,
            borderWidth: s,
            padding: l,
            previousContainerSize: i,
            widgetMinMaxSizes: n,
        });
        v(
            d(
                {
                    widgetId: t,
                    size: m(E),
                    minSize: m(n.minSize),
                    containerSpecs: n.containerSpecs,
                    padding: l,
                    borderWidth: s,
                    widget: a,
                },
                b,
            ),
        );
    }, [h]),
        i.useLayoutEffect(() => {
            if (o.current.participants <= 1) return;
            let e = o.current,
                {
                    id: t,
                    widgetMinMaxSizes: i,
                    containerSize: r,
                    padding: l,
                    borderWidth: a,
                    participants: h,
                    widget: O,
                } = e,
                b = p(e, [
                    "id",
                    "widgetMinMaxSizes",
                    "containerSize",
                    "padding",
                    "borderWidth",
                    "participants",
                    "widget",
                ]);
            if (null == O || s === n) return;
            let E = (function (e) {
                let {
                        oldLayout: t,
                        newLayout: n,
                        tileCount: i,
                        borderWidth: r,
                        padding: o,
                        previousContainerSize: l,
                        widgetMinMaxSizes: a,
                    } = e,
                    s = y(r, o, l, t === u.C5.VERTICAL),
                    d = g(i, o, r, n === u.C5.VERTICAL, s);
                return (0, c.Se)(
                    d,
                    {
                        containerOffset: f(r, o),
                        gapSize: o,
                        tileCount: i,
                        isVertical: n === u.C5.VERTICAL,
                    },
                    {
                        maxWidth: a.maxSize.width,
                        maxHeight: a.maxSize.height,
                    },
                );
            })({
                oldLayout: null != s ? s : n,
                newLayout: n,
                tileCount: h,
                borderWidth: a,
                padding: l,
                previousContainerSize: r,
                widgetMinMaxSizes: i,
            });
            v(
                d(
                    {
                        widgetId: t,
                        size: m(E),
                        minSize: m(i.minSize),
                        containerSpecs: i.containerSpecs,
                        padding: l,
                        borderWidth: a,
                        widget: O,
                    },
                    b,
                ),
            );
        }, [n, s]),
        (0, l.zq)(() => {
            let e = o.current,
                { id: t, widgetMinMaxSizes: n, widget: i, padding: r } = e,
                l = p(e, ["id", "widgetMinMaxSizes", "widget", "padding"]);
            null != i &&
                v(
                    d(
                        {
                            widgetId: t,
                            size: m(n.minSize),
                            minSize: m(n.minSize),
                            containerSpecs: n.containerSpecs,
                            padding: r,
                            widget: i,
                        },
                        l,
                    ),
                );
        });
}

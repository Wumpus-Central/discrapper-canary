n.d(t, {
    Bz: () => Z,
    Dl: () => N,
    bt: () => O,
    wD: () => C,
});
var i = n(473749),
    r = n(442837),
    l = n(765250),
    o = n(393238),
    a = n(493773),
    s = n(110924),
    u = n(451478),
    c = n(830917),
    d = n(353038),
    h = n(461393),
    p = n(340101),
    f = n(561064);
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
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = {},
                l = Object.keys(e);
            for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (i = 0; i < l.length; i++)
            (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
let O = 256,
    y = (e, t) => 2 * e + 2 * t,
    E = (e) => {
        let { width: t, height: n } = e;
        return {
            fixed: !0,
            width: t,
            height: n,
        };
    };
function v(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : O,
        l = {
            width: r,
            height: (0, h.MH)(r),
        },
        o = Math.max(1, e),
        a = (0, h.bj)(e, t),
        s = y(n, t);
    return i
        ? {
              width: l.width + s,
              height: l.height * o + a + s,
          }
        : {
              width: l.width * o + a + s,
              height: l.height + s,
          };
}
function b(e, t, n, i) {
    let r = y(e, t);
    return i ? n.width - r : (0, h.eJ)(n.height - r);
}
function S(e) {
    return e.height > e.width;
}
let x = 180 / 1080;
function j(e) {
    let { layout: t, tileCount: n, borderWidth: i, padding: r, previousContainerSize: l, widgetMinMaxSizes: o } = e,
        a = t === p.C5.VERTICAL,
        s = b(i, r, l, a),
        u = v(n, r, i, a, s);
    return (0, h.Se)(
        u,
        {
            containerOffset: y(i, r),
            gapSize: r,
            tileCount: n,
            isVertical: a,
        },
        {
            maxWidth: o.maxSize.width,
            maxHeight: o.maxSize.height,
        },
    );
}
function I(e) {
    var { widgetId: t, size: n, borderWidth: i, padding: r, minSize: o, containerSpecs: a, defaultSize: s } = e,
        u = g(e, ["widgetId", "size", "borderWidth", "padding", "minSize", "containerSpecs", "defaultSize"]);
    let c = (e) =>
            C(
                m(
                    {
                        operation: d.B.RESIZE_NORTH,
                        computedSize: e,
                        originSize: e,
                        borderWidth: i,
                        padding: r,
                        containerSpecs: a,
                    },
                    u,
                ),
            ),
        h = {
            widgetId: t,
            size: m({ fixed: n.fixed }, c(n)),
            minSize: m({}, c(o)),
        };
    null != s && (h.defaultSize = m({}, c(s))), (0, l.nv)(m({}, h));
}
let C = (e) => {
    let { operation: t, computedSize: n, originSize: i, borderWidth: r, padding: l, containerSpecs: o } = e,
        a = y(r, l),
        s = Math.max(1, i.width),
        u = Math.max(1, i.height),
        c = {
            width: s,
            height: u,
        },
        p = S(c),
        f = (function (e, t, n) {
            let i = S(n),
                r = b(e, t, n, i),
                l = (0, h.MH)(r);
            return i ? Math.floor(n.height / l) : Math.floor(n.width / r);
        })(r, l, c),
        m = (0, h.f8)({
            width: s,
            height: u,
            containerOffset: a,
            gapSize: l,
            tileCount: f,
            isVertical: p,
        }),
        g = (0, h.bj)(f, l),
        O = (() => {
            switch (t) {
                case d.B.RESIZE_NORTH:
                case d.B.RESIZE_SOUTH:
                    return {
                        height: n.height,
                        width: ((e) => {
                            let t = p ? e - g : e,
                                n = (0, h.GB)(t - a, m.horizontalRatio);
                            return p || (n += g), n + a;
                        })(n.height),
                    };
                default:
                    return {
                        width: n.width,
                        height: ((e) => {
                            let t = p ? e : e - g,
                                n = (0, h.E5)(t - a, m.verticalRatio);
                            return p && (n += g), n + a;
                        })(n.width),
                    };
            }
        })();
    return (0, h.Se)(
        O,
        {
            containerOffset: a,
            gapSize: l,
            tileCount: f,
            isVertical: p,
        },
        {
            maxWidth: 0.75 * o.maxX,
            maxHeight: 0.75 * o.maxY,
        },
    );
};
function Z(e) {
    let { tileCount: t, padding: n, borderWidth: i, isVertical: l, widgetSize: a } = e,
        { width: s, height: d } = {
            width: "number" == typeof a.width ? a.width : O,
            height: "number" == typeof a.height ? a.height : (0, h.MH)(O),
        },
        { width: p = s, height: m = d, ref: g } = (0, o.ZP)(),
        E = (0, f.Z)(),
        S = (0, c.ZY)(E),
        j = (0, r.e7)([u.Z], () => u.Z.windowSize(S), [S]),
        I = (function (e) {
            let { tileCount: t, padding: n, borderWidth: i, windowWidth: r, windowHeight: l, isVertical: o } = e,
                a = v(t, n, i, o),
                s = {
                    maxX: null != r ? r : (2 * a.width) / 0.75,
                    maxY: null != l ? l : (2 * a.height) / 0.75,
                    minX: 0,
                    minY: 0,
                },
                u = {
                    width: 0.75 * s.maxX,
                    height: 0.75 * s.maxY,
                },
                c = (null != l ? l : 0) * x;
            return (
                (c = Math.max(a.height, c)),
                (c = Math.min(u.height, c)),
                {
                    minSize: a,
                    defaultSize: v(t, n, i, o, (0, h.eJ)(c)),
                    maxSize: u,
                    containerSpecs: s,
                }
            );
        })({
            tileCount: t,
            padding: n,
            borderWidth: i,
            windowWidth: j.width,
            windowHeight: j.height,
            isVertical: l,
        }),
        C = y(i, n),
        Z = b(
            i,
            n,
            {
                width: p + C,
                height: m + C,
            },
            l,
        ),
        N = (0, h.MH)(Z);
    return {
        tileWidth: Z,
        tileHeight: N,
        widgetWidth: s,
        widgetHeight: d,
        containerRef: g,
        containerMinMaxSizes: I,
    };
}
function N(e) {
    let { streamParticipants: t, layout: n, widgetLayoutSpecs: r } = e,
        l = i.useRef(r);
    l.current = r;
    let o = (0, s.Z)(n),
        u = t.length,
        c = r.widgetMinMaxSizes.maxSize.width * r.widgetMinMaxSizes.maxSize.height;
    (0, a.Ng)(() => {
        let e = l.current,
            {
                id: t,
                widgetMinMaxSizes: n,
                containerSize: i,
                layout: r,
                padding: o,
                widget: a,
                borderWidth: s,
                locked: c,
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
        null != a &&
            I(
                m(
                    {
                        widgetId: t,
                        size: E(
                            j({
                                layout: r,
                                tileCount: Math.max(1, u),
                                borderWidth: s,
                                padding: o,
                                previousContainerSize: n.defaultSize,
                                widgetMinMaxSizes: n,
                            }),
                        ),
                        defaultSize: n.defaultSize,
                        minSize: E(n.minSize),
                        containerSpecs: n.containerSpecs,
                        padding: o,
                        borderWidth: s,
                        widget: a,
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
                    padding: o,
                    widget: a,
                    borderWidth: s,
                    locked: c,
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
            if (null != a) {
                if (0 === u) {
                    if (c) return;
                    I(
                        m(
                            {
                                widgetId: t,
                                size: E(n.defaultSize),
                                defaultSize: n.defaultSize,
                                minSize: E(n.minSize),
                                padding: o,
                                borderWidth: s,
                                widget: a,
                                containerSpecs: n.containerSpecs,
                            },
                            d,
                        ),
                    );
                    return;
                }
                I(
                    m(
                        {
                            widgetId: t,
                            size: E(
                                j({
                                    layout: r,
                                    tileCount: u,
                                    borderWidth: s,
                                    padding: o,
                                    previousContainerSize: i,
                                    widgetMinMaxSizes: n,
                                }),
                            ),
                            minSize: E(n.minSize),
                            containerSpecs: n.containerSpecs,
                            padding: o,
                            borderWidth: s,
                            widget: a,
                        },
                        d,
                    ),
                );
            }
        }, [u, c]),
        i.useLayoutEffect(() => {
            if (l.current.participants <= 1) return;
            let e = l.current,
                {
                    id: t,
                    widgetMinMaxSizes: i,
                    containerSize: r,
                    padding: a,
                    borderWidth: s,
                    participants: u,
                    widget: c,
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
            if (null == c || o === n) return;
            let f = (function (e) {
                let {
                        oldLayout: t,
                        newLayout: n,
                        tileCount: i,
                        borderWidth: r,
                        padding: l,
                        previousContainerSize: o,
                        widgetMinMaxSizes: a,
                    } = e,
                    s = b(r, l, o, t === p.C5.VERTICAL),
                    u = v(i, l, r, n === p.C5.VERTICAL, s);
                return (0, h.Se)(
                    u,
                    {
                        containerOffset: y(r, l),
                        gapSize: l,
                        tileCount: i,
                        isVertical: n === p.C5.VERTICAL,
                    },
                    {
                        maxWidth: a.maxSize.width,
                        maxHeight: a.maxSize.height,
                    },
                );
            })({
                oldLayout: null != o ? o : n,
                newLayout: n,
                tileCount: u,
                borderWidth: s,
                padding: a,
                previousContainerSize: r,
                widgetMinMaxSizes: i,
            });
            I(
                m(
                    {
                        widgetId: t,
                        size: E(f),
                        minSize: E(i.minSize),
                        containerSpecs: i.containerSpecs,
                        padding: a,
                        borderWidth: s,
                        widget: c,
                    },
                    d,
                ),
            );
        }, [n, o]),
        (0, a.zq)(() => {
            let e = l.current,
                { id: t, widgetMinMaxSizes: n, widget: i, padding: r } = e,
                o = g(e, ["id", "widgetMinMaxSizes", "widget", "padding"]);
            null != i &&
                I(
                    m(
                        {
                            widgetId: t,
                            size: E(n.defaultSize),
                            defaultSize: n.defaultSize,
                            minSize: E(n.minSize),
                            containerSpecs: n.containerSpecs,
                            padding: r,
                            widget: i,
                        },
                        o,
                    ),
                );
        });
}

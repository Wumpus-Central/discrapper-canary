n.d(t, {
    Bz: () => Z,
    Dl: () => N,
    bt: () => y,
    wD: () => C,
});
var i = n(473749),
    r = n(442837),
    l = n(765250),
    a = n(393238),
    o = n(493773),
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
let y = 256,
    O = (e, t) => 2 * e + 2 * t,
    E = (e) => {
        let { width: t, height: n } = e;
        return {
            fixed: !0,
            width: t,
            height: n,
        };
    };
function v(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : y,
        l = {
            width: r,
            height: (0, h.MH)(r),
        },
        a = Math.max(1, e),
        o = (0, h.bj)(e, t),
        s = O(n, t);
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
function S(e, t, n, i) {
    let r = O(e, t);
    return i ? n.width - r : (0, h.eJ)(n.height - r);
}
function b(e) {
    return e.height > e.width;
}
let x = 180 / 1080;
function j(e) {
    let { layout: t, tileCount: n, borderWidth: i, padding: r, previousContainerSize: l, widgetMinMaxSizes: a } = e,
        o = t === p.C5.VERTICAL,
        s = S(i, r, l, o),
        u = v(n, r, i, o, s);
    return (0, h.Se)(
        u,
        {
            containerOffset: O(i, r),
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
function I(e) {
    var { widgetId: t, size: n, borderWidth: i, padding: r, minSize: a, containerSpecs: o, defaultSize: s } = e,
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
                        containerSpecs: o,
                    },
                    u,
                ),
            ),
        h = {
            widgetId: t,
            size: m({ fixed: n.fixed }, c(n)),
            minSize: m({}, c(a)),
        };
    null != s && (h.defaultSize = m({}, c(s))), (0, l.nv)(m({}, h));
}
let C = (e) => {
    let { operation: t, computedSize: n, originSize: i, borderWidth: r, padding: l, containerSpecs: a } = e,
        o = O(r, l),
        s = Math.max(1, i.width),
        u = Math.max(1, i.height),
        c = {
            width: s,
            height: u,
        },
        p = b(c),
        f = (function (e, t, n) {
            let i = b(n),
                r = S(e, t, n, i),
                l = (0, h.MH)(r);
            return i ? Math.floor(n.height / l) : Math.floor(n.width / r);
        })(r, l, c),
        m = (0, h.f8)({
            width: s,
            height: u,
            containerOffset: o,
            gapSize: l,
            tileCount: f,
            isVertical: p,
        }),
        g = (0, h.bj)(f, l),
        y = (() => {
            switch (t) {
                case d.B.RESIZE_NORTH:
                case d.B.RESIZE_SOUTH:
                    return {
                        height: n.height,
                        width: ((e) => {
                            let t = p ? e - g : e,
                                n = (0, h.GB)(t - o, m.horizontalRatio);
                            return p || (n += g), n + o;
                        })(n.height),
                    };
                default:
                    return {
                        width: n.width,
                        height: ((e) => {
                            let t = p ? e : e - g,
                                n = (0, h.E5)(t - o, m.verticalRatio);
                            return p && (n += g), n + o;
                        })(n.width),
                    };
            }
        })();
    return (0, h.Se)(
        y,
        {
            containerOffset: o,
            gapSize: l,
            tileCount: f,
            isVertical: p,
        },
        {
            maxWidth: 0.75 * a.maxX,
            maxHeight: 0.75 * a.maxY,
        },
    );
};
function Z(e) {
    let { tileCount: t, padding: n, borderWidth: i, isVertical: l, widgetSize: o } = e,
        { width: s, height: d } = {
            width: "number" == typeof o.width ? o.width : y,
            height: "number" == typeof o.height ? o.height : (0, h.MH)(y),
        },
        { width: p = s, height: m = d, ref: g } = (0, a.ZP)(),
        E = (0, f.Z)(),
        b = (0, c.ZY)(E),
        j = (0, r.e7)([u.Z], () => u.Z.windowSize(b), [b]),
        I = (function (e) {
            let { tileCount: t, padding: n, borderWidth: i, windowWidth: r, windowHeight: l, isVertical: a } = e,
                o = v(t, n, i, a),
                s = {
                    maxX: null != r ? r : (2 * o.width) / 0.75,
                    maxY: null != l ? l : (2 * o.height) / 0.75,
                    minX: 0,
                    minY: 0,
                },
                u = {
                    width: 0.75 * s.maxX,
                    height: 0.75 * s.maxY,
                },
                c = (null != l ? l : 0) * x;
            return (
                (c = Math.max(o.height, c)),
                (c = Math.min(u.height, c)),
                {
                    minSize: o,
                    defaultSize: v(t, n, i, a, (0, h.eJ)(c)),
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
        C = O(i, n),
        Z = S(
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
    let a = (0, s.Z)(n),
        u = t.length,
        c = r.widgetMinMaxSizes.maxSize.width * r.widgetMinMaxSizes.maxSize.height;
    (0, o.Ng)(() => {
        let e = l.current,
            {
                id: t,
                widgetMinMaxSizes: n,
                containerSize: i,
                layout: r,
                padding: a,
                widget: o,
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
        null != o &&
            I(
                m(
                    {
                        widgetId: t,
                        size: E(
                            j({
                                layout: r,
                                tileCount: Math.max(1, u),
                                borderWidth: s,
                                padding: a,
                                previousContainerSize: n.defaultSize,
                                widgetMinMaxSizes: n,
                            }),
                        ),
                        defaultSize: n.defaultSize,
                        minSize: E(n.minSize),
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
            if (null != o) {
                if (0 === u) {
                    if (c) return;
                    I(
                        m(
                            {
                                widgetId: t,
                                size: E(n.defaultSize),
                                defaultSize: n.defaultSize,
                                minSize: E(n.minSize),
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
                I(
                    m(
                        {
                            widgetId: t,
                            size: E(
                                j({
                                    layout: r,
                                    tileCount: u,
                                    borderWidth: s,
                                    padding: a,
                                    previousContainerSize: i,
                                    widgetMinMaxSizes: n,
                                }),
                            ),
                            minSize: E(n.minSize),
                            containerSpecs: n.containerSpecs,
                            padding: a,
                            borderWidth: s,
                            widget: o,
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
                    padding: o,
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
            if (null == c || a === n) return;
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
                    s = S(r, l, a, t === p.C5.VERTICAL),
                    u = v(i, l, r, n === p.C5.VERTICAL, s);
                return (0, h.Se)(
                    u,
                    {
                        containerOffset: O(r, l),
                        gapSize: l,
                        tileCount: i,
                        isVertical: n === p.C5.VERTICAL,
                    },
                    {
                        maxWidth: o.maxSize.width,
                        maxHeight: o.maxSize.height,
                    },
                );
            })({
                oldLayout: null != a ? a : n,
                newLayout: n,
                tileCount: u,
                borderWidth: s,
                padding: o,
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
                        padding: o,
                        borderWidth: s,
                        widget: c,
                    },
                    d,
                ),
            );
        }, [n, a]),
        (0, o.zq)(() => {
            let e = l.current,
                { id: t, widgetMinMaxSizes: n, widget: i, padding: r } = e,
                a = g(e, ["id", "widgetMinMaxSizes", "widget", "padding"]);
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
                        a,
                    ),
                );
        });
}

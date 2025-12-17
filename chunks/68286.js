n.d(t, {
    Bz: () => _,
    Dl: () => Z,
    bt: () => b,
    wD: () => j,
});
var i = n(473749),
    r = n(442837),
    a = n(765250),
    l = n(393238),
    o = n(493773),
    s = n(110924),
    c = n(451478),
    u = n(830917),
    d = n(353038),
    f = n(461393),
    h = n(340101),
    p = n(561064);
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
                a = Object.keys(e);
            for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
let b = 256,
    y = (e, t) => 2 * e + 2 * t,
    O = (e) => {
        let { width: t, height: n } = e;
        return {
            fixed: !0,
            width: t,
            height: n,
        };
    };
function v(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : b,
        a = {
            width: r,
            height: (0, f.MH)(r),
        },
        l = Math.max(1, e),
        o = (0, f.bj)(e, t),
        s = y(n, t);
    return i
        ? {
              width: a.width + s,
              height: a.height * l + o + s,
          }
        : {
              width: a.width * l + o + s,
              height: a.height + s,
          };
}
function E(e, t, n, i) {
    let r = y(e, t);
    return i ? n.width - r : (0, f.eJ)(n.height - r);
}
function S(e) {
    return e.height > e.width;
}
let x = 180 / 1080;
function I(e) {
    let { layout: t, tileCount: n, borderWidth: i, padding: r, previousContainerSize: a, widgetMinMaxSizes: l } = e,
        o = t === h.C5.VERTICAL,
        s = E(i, r, a, o),
        c = v(n, r, i, o, s);
    return (0, f.Se)(
        c,
        {
            containerOffset: y(i, r),
            gapSize: r,
            tileCount: n,
            isVertical: o,
        },
        {
            maxWidth: l.maxSize.width,
            maxHeight: l.maxSize.height,
        },
    );
}
function C(e) {
    var { widgetId: t, size: n, borderWidth: i, padding: r, minSize: l, containerSpecs: o, defaultSize: s } = e,
        c = g(e, ["widgetId", "size", "borderWidth", "padding", "minSize", "containerSpecs", "defaultSize"]);
    let u = (e) =>
            j(
                m(
                    {
                        operation: d.B.RESIZE_NORTH,
                        computedSize: e,
                        originSize: e,
                        borderWidth: i,
                        padding: r,
                        containerSpecs: o,
                    },
                    c,
                ),
            ),
        f = {
            widgetId: t,
            size: m({ fixed: n.fixed }, u(n)),
            minSize: m({}, u(l)),
        };
    null != s && (f.defaultSize = m({}, u(s))), (0, a.nv)(m({}, f));
}
let j = (e) => {
    let { operation: t, computedSize: n, originSize: i, borderWidth: r, padding: a, containerSpecs: l } = e,
        o = y(r, a),
        s = Math.max(1, i.width),
        c = Math.max(1, i.height),
        u = {
            width: s,
            height: c,
        },
        h = S(u),
        p = (function (e, t, n) {
            let i = S(n),
                r = E(e, t, n, i),
                a = (0, f.MH)(r);
            return i ? Math.floor(n.height / a) : Math.floor(n.width / r);
        })(r, a, u),
        m = (0, f.f8)({
            width: s,
            height: c,
            containerOffset: o,
            gapSize: a,
            tileCount: p,
            isVertical: h,
        }),
        g = (0, f.bj)(p, a),
        b = (() => {
            switch (t) {
                case d.B.RESIZE_NORTH:
                case d.B.RESIZE_SOUTH:
                    return {
                        height: n.height,
                        width: ((e) => {
                            let t = h ? e - g : e,
                                n = (0, f.GB)(t - o, m.horizontalRatio);
                            return h || (n += g), n + o;
                        })(n.height),
                    };
                default:
                    return {
                        width: n.width,
                        height: ((e) => {
                            let t = h ? e : e - g,
                                n = (0, f.E5)(t - o, m.verticalRatio);
                            return h && (n += g), n + o;
                        })(n.width),
                    };
            }
        })();
    return (0, f.Se)(
        b,
        {
            containerOffset: o,
            gapSize: a,
            tileCount: p,
            isVertical: h,
        },
        {
            maxWidth: 0.75 * l.maxX,
            maxHeight: 0.75 * l.maxY,
        },
    );
};
function _(e) {
    let { tileCount: t, padding: n, borderWidth: i, isVertical: a, widgetSize: o } = e,
        { width: s, height: d } = {
            width: "number" == typeof o.width ? o.width : b,
            height: "number" == typeof o.height ? o.height : (0, f.MH)(b),
        },
        { width: h = s, height: m = d, ref: g } = (0, l.ZP)(),
        O = (0, p.Z)(),
        S = (0, u.ZY)(O),
        I = (0, r.e7)([c.Z], () => c.Z.windowSize(S), [S]),
        C = (function (e) {
            let { tileCount: t, padding: n, borderWidth: i, windowWidth: r, windowHeight: a, isVertical: l } = e,
                o = v(t, n, i, l),
                s = {
                    maxX: null != r ? r : (2 * o.width) / 0.75,
                    maxY: null != a ? a : (2 * o.height) / 0.75,
                    minX: 0,
                    minY: 0,
                },
                c = {
                    width: 0.75 * s.maxX,
                    height: 0.75 * s.maxY,
                },
                u = (null != a ? a : 0) * x;
            return (
                (u = Math.max(o.height, u)),
                (u = Math.min(c.height, u)),
                {
                    minSize: o,
                    defaultSize: v(t, n, i, l, (0, f.eJ)(u)),
                    maxSize: c,
                    containerSpecs: s,
                }
            );
        })({
            tileCount: t,
            padding: n,
            borderWidth: i,
            windowWidth: I.width,
            windowHeight: I.height,
            isVertical: a,
        }),
        j = y(i, n),
        _ = E(
            i,
            n,
            {
                width: h + j,
                height: m + j,
            },
            a,
        ),
        Z = (0, f.MH)(_);
    return {
        tileWidth: _,
        tileHeight: Z,
        widgetWidth: s,
        widgetHeight: d,
        containerRef: g,
        containerMinMaxSizes: C,
    };
}
function Z(e) {
    let { streamParticipants: t, layout: n, widgetLayoutSpecs: r } = e,
        a = i.useRef(r);
    a.current = r;
    let l = (0, s.Z)(n),
        c = t.length,
        u = r.widgetMinMaxSizes.maxSize.width * r.widgetMinMaxSizes.maxSize.height;
    (0, o.Ng)(() => {
        let e = a.current,
            {
                id: t,
                widgetMinMaxSizes: n,
                containerSize: i,
                layout: r,
                padding: l,
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
        null != o &&
            C(
                m(
                    {
                        widgetId: t,
                        size: O(
                            I({
                                layout: r,
                                tileCount: Math.max(1, c),
                                borderWidth: s,
                                padding: l,
                                previousContainerSize: n.defaultSize,
                                widgetMinMaxSizes: n,
                            }),
                        ),
                        defaultSize: n.defaultSize,
                        minSize: O(n.minSize),
                        containerSpecs: n.containerSpecs,
                        padding: l,
                        borderWidth: s,
                        widget: o,
                    },
                    d,
                ),
            );
    }),
        i.useLayoutEffect(() => {
            let e = a.current,
                {
                    id: t,
                    widgetMinMaxSizes: n,
                    containerSize: i,
                    layout: r,
                    padding: l,
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
                    C(
                        m(
                            {
                                widgetId: t,
                                size: O(n.defaultSize),
                                defaultSize: n.defaultSize,
                                minSize: O(n.minSize),
                                padding: l,
                                borderWidth: s,
                                widget: o,
                                containerSpecs: n.containerSpecs,
                            },
                            d,
                        ),
                    );
                    return;
                }
                C(
                    m(
                        {
                            widgetId: t,
                            size: O(
                                I({
                                    layout: r,
                                    tileCount: c,
                                    borderWidth: s,
                                    padding: l,
                                    previousContainerSize: i,
                                    widgetMinMaxSizes: n,
                                }),
                            ),
                            minSize: O(n.minSize),
                            containerSpecs: n.containerSpecs,
                            padding: l,
                            borderWidth: s,
                            widget: o,
                        },
                        d,
                    ),
                );
            }
        }, [c, u]),
        i.useLayoutEffect(() => {
            if (a.current.participants <= 1) return;
            let e = a.current,
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
            if (null == u || l === n) return;
            let p = (function (e) {
                let {
                        oldLayout: t,
                        newLayout: n,
                        tileCount: i,
                        borderWidth: r,
                        padding: a,
                        previousContainerSize: l,
                        widgetMinMaxSizes: o,
                    } = e,
                    s = E(r, a, l, t === h.C5.VERTICAL),
                    c = v(i, a, r, n === h.C5.VERTICAL, s);
                return (0, f.Se)(
                    c,
                    {
                        containerOffset: y(r, a),
                        gapSize: a,
                        tileCount: i,
                        isVertical: n === h.C5.VERTICAL,
                    },
                    {
                        maxWidth: o.maxSize.width,
                        maxHeight: o.maxSize.height,
                    },
                );
            })({
                oldLayout: null != l ? l : n,
                newLayout: n,
                tileCount: c,
                borderWidth: s,
                padding: o,
                previousContainerSize: r,
                widgetMinMaxSizes: i,
            });
            C(
                m(
                    {
                        widgetId: t,
                        size: O(p),
                        minSize: O(i.minSize),
                        containerSpecs: i.containerSpecs,
                        padding: o,
                        borderWidth: s,
                        widget: u,
                    },
                    d,
                ),
            );
        }, [n, l]),
        (0, o.zq)(() => {
            let e = a.current,
                { id: t, widgetMinMaxSizes: n, widget: i, padding: r } = e,
                l = g(e, ["id", "widgetMinMaxSizes", "widget", "padding"]);
            null != i &&
                C(
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
                        l,
                    ),
                );
        });
}

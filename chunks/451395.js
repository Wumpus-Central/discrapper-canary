n.d(t, {
    gY: () => g,
    jV: () => y,
    mG: () => m,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(131346),
    o = n(744818),
    c = n(352944),
    u = n(435371),
    d = n(397927),
    f = n(985018);

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        l,
        i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i;
    }
    if (
        ((i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                i = Object.getOwnPropertyNames(e);
            for (r = 0; r < i.length; r++)
                (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i;
}

function g(e) {
    let {
            dragRef: t,
            dropRef: n,
            index: r,
            listType: i,
            itemId: a,
            itemType: u,
            itemPreviewProps: d,
            onReorder: f,
            onEnd: p,
            disableDefaultPreview: b = !0,
        } = e,
        g = "".concat(u, "_").concat(i),
        m = l.useCallback(
            (e, t) => {
                null == f || f(e, t);
            },
            [f],
        ),
        y = l.useMemo(
            () => ({
                id: a,
                index: r,
                itemType: u,
                itemPreviewProps: d,
            }),
            [a, r, u, d],
        ),
        [{ isDragging: O }, j, x] = (0, s.i)({
            type: g,
            item: y,
            collect: (e) => ({
                isDragging: e.isDragging(),
            }),
            end: p,
        });
    l.useEffect(() => {
        b &&
            x((0, c.n)(), {
                captureDraggingState: !0,
            });
    }, [x, b]);
    let [{ dragSourcePosition: h }, v] = (0, o.H)({
        accept: g,
        drop: (e) => {
            let t = e.index;
            t !== r && (m(t, r), (e.index = r));
        },
        collect: (e) => {
            let t = e.getItem(),
                n = null;
            return (
                null != t &&
                    e.isOver({
                        shallow: !0,
                    }) &&
                    e.canDrop() &&
                    (n = t.index),
                {
                    dragSourcePosition: n,
                }
            );
        },
    });
    return (
        l.useLayoutEffect(
            () => (
                j(t),
                v(n),
                () => {
                    v(null), j(null);
                }
            ),
            [j, t, v, n],
        ),
        {
            isDragging: O,
            dragSourcePosition: h,
        }
    );
}
let m = l.memo(function (e) {
    let {
            index: t,
            className: n,
            draggingClassName: i,
            dropBeforeClassName: s,
            dropAfterClassName: o,
            "aria-label": c,
            children: u,
        } = e,
        d = b(e, [
            "index",
            "className",
            "draggingClassName",
            "dropBeforeClassName",
            "dropAfterClassName",
            "aria-label",
            "children",
        ]),
        f = l.useRef(null),
        { isDragging: m, dragSourcePosition: y } = g(
            p(
                {
                    dragRef: f,
                    dropRef: f,
                    index: t,
                },
                d,
            ),
        ),
        O = null != y,
        j = O && t < y,
        x = O && t > y;
    return (0, r.jsx)("div", {
        ref: f,
        className: a()(n, m && i, j && s, x && o),
        "aria-label": c,
        children: u,
    });
});

function y(e) {
    var t, n;
    let { buttonRef: l, "aria-label": i, iconSize: a = "sm" } = e,
        s = b(e, ["buttonRef", "aria-label", "iconSize"]);
    return (0, r.jsx)(u.un, {
        body: f.intl.format(f.t["zvln/l"], {
            emphasizeHook: (e) =>
                (0, r.jsx)("strong", {
                    children: e,
                }),
        }),
        ariaHidden: !0,
        children: (0, r.jsx)(
            d.DUT,
            ((t = p(
                {
                    innerRef: l,
                    "aria-label": null != i ? i : f.intl.string(f.t.n9T3Hi),
                    "aria-keyshortcuts": "Control+D, Meta+D",
                },
                s,
            )),
            (n = n =
                {
                    children: (0, r.jsx)(d.WP0, {
                        size: a,
                        color: "currentColor",
                    }),
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t),
        ),
    });
}

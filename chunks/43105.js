n.d(t, {
    A: () => y,
    h: () => O,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(964892),
    c = n(208756),
    u = n(135564),
    d = n(916845),
    f = n(627330),
    p = n(248789);

function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function h(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}

function m(e, t) {
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

function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = b(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function y(e) {
    var t;
    let {
            title: n,
            body: a,
            badge: _,
            graphic: m,
            size: b = "md",
            actions: y,
            textLink: O,
            gradientColor: A,
            onRequestClose: v,
            popoverRef: S,
            position: I,
            caretConfig: T,
            scrollBehavior: C,
        } = e,
        N = E(e, [
            "title",
            "body",
            "badge",
            "graphic",
            "size",
            "actions",
            "textLink",
            "gradientColor",
            "onRequestClose",
            "popoverRef",
            "position",
            "caretConfig",
            "scrollBehavior",
        ]),
        R = i.useCallback(
            (e, t) => {
                null == v || v(t);
            },
            [v],
        ),
        w = i.useCallback(() => {
            null == v || v("user:explicit");
        }, [v]),
        P = h(
            {
                targetElementRef: N.targetElementRef,
                shouldShow: N.shouldShow,
                hasVideo: N.hasVideo,
                position: I,
                caretConfig: T,
                onRequestClose: R,
                gradientColor: A,
                scrollBehavior: C,
            },
            "edge" === N.alignmentStrategy
                ? {
                      alignmentStrategy: "edge",
                      align: N.align,
                  }
                : {
                      alignmentStrategy: "trigger-center",
                  },
        );
    return (0, r.jsx)(
        l.x,
        g(h({}, P), {
            children: (0, r.jsxs)("div", {
                ref: S,
                "data-mana-component": "popover",
                children: [
                    (0, r.jsx)(d.q, {
                        onClick: w,
                        variant: null != A ? "color-mix" : void 0,
                    }),
                    null != m &&
                        (0, r.jsx)("div", {
                            className: s()(p.graphic, {
                                [p["graphic--".concat(b)]]: null != b,
                            }),
                            children: (0, r.jsx)(
                                o.vYh,
                                g(h({}, m), {
                                    aspectRatio: null != (t = m.aspectRatio) ? t : "sm" === b ? "2/1" : "16/9",
                                }),
                            ),
                        }),
                    (0, r.jsx)(f.D, {
                        title: n,
                        body: a,
                        badge: _,
                        textLink: O,
                    }),
                    null != y && y.length > 0
                        ? (0, r.jsx)(c.Z, {
                              actions: y,
                          })
                        : null,
                    (0, r.jsx)(u.F, {}),
                ],
            }),
        }),
    );
}
let O = y;

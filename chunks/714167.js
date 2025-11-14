n.d(t, { Z: () => b }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(120356),
    l = n.n(i),
    o = n(793030),
    s = n(920155),
    c = n(744399),
    d = n(966902),
    u = n(237872),
    m = n(945909),
    p = n(481060),
    h = n(158235);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    let { title: t, body: n } = e;
    return (0, a.jsxs)("div", {
        className: h.header,
        children: [
            (0, a.jsx)(p.Heading, {
                variant: "heading-md/semibold",
                className: h.title,
                children: t,
            }),
            (0, a.jsx)("div", {
                className: h.headerBody,
                children: (0, a.jsx)(p.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    children: n,
                }),
            }),
        ],
    });
}
let b = function (e) {
    var t,
        n,
        {
            title: i,
            body: p,
            graphic: b,
            size: v = "md",
            actions: j,
            gradientColor: _,
            onRequestClose: y,
            popoverRef: C,
            position: S,
            caretConfig: E,
            scrollBehavior: O,
        } = e,
        T = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        r = {},
                        i = Object.keys(e);
                    for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (a = 0; a < i.length; a++)
                    (n = i[a]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, [
            "title",
            "body",
            "graphic",
            "size",
            "actions",
            "gradientColor",
            "onRequestClose",
            "popoverRef",
            "position",
            "caretConfig",
            "scrollBehavior",
        ]);
    let [N, P] = r.useState(null != S ? S : "top"),
        [I, w] = r.useState({
            position: (0, m.z)(N),
            align: null != (t = null == E ? void 0 : E.align) ? t : "center",
            customOffset: null == E ? void 0 : E.customOffset,
        }),
        k = r.useCallback(
            (e, t) => {
                null == y || y(t);
            },
            [y],
        ),
        R = r.useCallback(() => {
            null == y || y("user:explicit");
        }, [y]),
        A = r.useCallback((e) => {
            P(e), w((t) => g(x({}, t), { position: (0, m.z)(e) }));
        }, []);
    return (0, a.jsx)(
        s.m,
        g(x({}, T), {
            position: N,
            onRequestClose: k,
            gradientColor: _,
            onPositionChange: A,
            scrollBehavior: O,
            children: (0, a.jsxs)("div", {
                ref: C,
                "data-mana-component": "popover",
                children: [
                    (0, a.jsx)(u.u, {
                        onClick: R,
                        variant: null != _ ? "color-mix" : void 0,
                    }),
                    null != b &&
                        (0, a.jsx)("div", {
                            className: l()(h.graphic, { [h["graphic--".concat(v)]]: null != v }),
                            children: (0, a.jsx)(
                                o.zsu,
                                g(x({}, b), {
                                    aspectRatio: null != (n = b.aspectRatio) ? n : "sm" === v ? "2/1" : "16/9",
                                }),
                            ),
                        }),
                    (0, a.jsx)(f, {
                        title: i,
                        body: p,
                    }),
                    null != j && j.length > 0 ? (0, a.jsx)(c.k, { actions: j }) : null,
                    (0, a.jsx)(d.$, { caretConfig: I }),
                ],
            }),
        }),
    );
};

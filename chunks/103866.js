n.d(t, { f: () => m }), n(388685), n(415506);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(793030),
    c = n(747127),
    u = n(456208);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    return "string" == typeof e
        ? (0, r.jsx)(l.xvT, {
              variant: "text-md/normal",
              color: "text-secondary",
              children: e,
          })
        : e;
}
function m(e) {
    let { controls: t, children: n, listProps: i } = e;
    if (null == n && null == t && null == i) return null;
    let a = h(n);
    return (0, r.jsx)(g, {
        controls: t,
        children: a,
        listProps: i,
    });
}
function g(e) {
    var t, n;
    let { controls: a, children: d, listProps: _ } = e,
        [h, m] = i.useState(!1),
        [g, E] = i.useState(null != _),
        b = i.useRef(null),
        y = (0, c.Z)(b, null == _ ? void 0 : _.ref),
        O = i.useRef(null),
        v = (0, s.throttle)(() => {
            var e;
            (null == b ? void 0 : b.current) != null &&
                null != a &&
                m((null == (e = b.current) ? void 0 : e.getDistanceFromTop()) > 12);
        }, 200),
        I = null != _;
    return (
        i.useLayoutEffect(() => {
            var e, t;
            let n = new ResizeObserver(() => {
                    var e, t;
                    if (I) return void E(!0);
                    let n =
                        null != (t = null == b || null == (e = b.current) ? void 0 : e.getScrollerNode()) ? t : null;
                    if (null == n || (null == O ? void 0 : O.current) == null) return;
                    let r = n.getBoundingClientRect();
                    E(O.current.getBoundingClientRect().height > r.height);
                }),
                r = null != (t = null == b || null == (e = b.current) ? void 0 : e.getScrollerNode()) ? t : null;
            return (
                null != r && n.observe(r),
                (null == O ? void 0 : O.current) != null && n.observe(O.current),
                () => n.disconnect()
            );
        }, [I]),
        (0, r.jsxs)(l.y5t, {
            children: [
                (0, r.jsx)("div", { className: o()(u.bodySpacerTop, { [u.bodySpacerTopBorder]: g && null == a }) }),
                null != a &&
                    (0, r.jsx)("header", {
                        className: o()(u.bodyControls, { [u.bodyControlsWithFade]: h }),
                        children: a,
                    }),
                null != _
                    ? (0, r.jsx)(
                          l._2F,
                          p(f({}, _), {
                              className: u.bodyList,
                              innerAriaOrientation: null != (t = _.innerAriaOrientation) ? t : "vertical",
                              innerRole: null != (n = _.innerRole) ? n : "listbox",
                              ref: y,
                              onScroll: (e) => {
                                  var t;
                                  v(), null == (t = _.onScroll) || t.call(_, e);
                              },
                          }),
                      )
                    : (0, r.jsx)(l.yWw, {
                          ref: b,
                          className: u.body,
                          onScroll: v,
                          children: (0, r.jsx)("main", {
                              ref: O,
                              className: o()(u.bodyInner, { [u.bodyInnerShouldScroll]: g }),
                              children: d,
                          }),
                      }),
                (0, r.jsx)("div", { className: o()(u.bodySpacerBottom, { [u.bodySpacerBottomBorder]: g }) }),
            ],
        })
    );
}

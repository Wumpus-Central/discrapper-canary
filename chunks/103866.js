n.d(t, { f: () => E }), n(388685), n(415506);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(793030),
    c = n(742746),
    u = n(993365),
    d = n(747127),
    f = n(525751);
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    return "string" == typeof e
        ? (0, r.jsx)(u.x, {
              variant: "text-md/normal",
              color: "text-secondary",
              children: e,
          })
        : e;
}
function E(e) {
    let { controls: t, children: n, listProps: i } = e;
    if (null == n && null == t && null == i) return null;
    let a = g(n);
    return (0, r.jsx)(b, {
        controls: t,
        children: a,
        listProps: i,
    });
}
function b(e) {
    var t, n;
    let { controls: a, children: u, listProps: _ } = e,
        [h, g] = i.useState(!1),
        [E, b] = i.useState(null != _),
        y = i.useRef(null),
        O = (0, d.Z)(y, null == _ ? void 0 : _.ref),
        v = i.useRef(null),
        I = (0, s.throttle)(() => {
            var e;
            (null == y ? void 0 : y.current) != null &&
                null != a &&
                g((null == (e = y.current) ? void 0 : e.getDistanceFromTop()) > 12);
        }, 200),
        T = null != _;
    return (
        i.useLayoutEffect(() => {
            var e, t;
            let n = new ResizeObserver(() => {
                    var e, t;
                    if (T) return void b(!0);
                    let n =
                        null != (t = null == y || null == (e = y.current) ? void 0 : e.getScrollerNode()) ? t : null;
                    if (null == n || (null == v ? void 0 : v.current) == null) return;
                    let r = n.getBoundingClientRect();
                    b(v.current.getBoundingClientRect().height > r.height);
                }),
                r = null != (t = null == y || null == (e = y.current) ? void 0 : e.getScrollerNode()) ? t : null;
            return (
                null != r && n.observe(r),
                (null == v ? void 0 : v.current) != null && n.observe(v.current),
                () => n.disconnect()
            );
        }, [T]),
        (0, r.jsxs)(l.y5t, {
            children: [
                (0, r.jsx)("div", { className: o()(f.bodySpacerTop, { [f.bodySpacerTopBorder]: E && null == a }) }),
                null != a &&
                    (0, r.jsx)("header", {
                        className: o()(f.bodyControls, { [f.bodyControlsWithFade]: h }),
                        children: a,
                    }),
                null != _
                    ? (0, r.jsx)(
                          c._2,
                          m(p({}, _), {
                              className: f.bodyList,
                              innerAriaOrientation: null != (t = _.innerAriaOrientation) ? t : "vertical",
                              innerRole: null != (n = _.innerRole) ? n : "listbox",
                              ref: O,
                              onScroll: (e) => {
                                  var t;
                                  I(), null == (t = _.onScroll) || t.call(_, e);
                              },
                          }),
                      )
                    : (0, r.jsx)(l.yWw, {
                          ref: y,
                          className: f.body,
                          onScroll: I,
                          children: (0, r.jsx)("main", {
                              ref: v,
                              className: o()(f.bodyInner, { [f.bodyInnerShouldScroll]: E }),
                              children: u,
                          }),
                      }),
                (0, r.jsx)("div", { className: o()(f.bodySpacerBottom, { [f.bodySpacerBottomBorder]: E }) }),
            ],
        })
    );
}

n.d(t, { f: () => y }), n(388685), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(123763),
    l = n.n(s),
    c = n(61247),
    u = n(200269),
    d = n(715644),
    f = n(349361),
    _ = n(777207),
    p = n(815847);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    return "string" == typeof e
        ? (0, r.jsx)(_.x, {
              variant: "text-md/normal",
              color: "text-secondary",
              children: e,
          })
        : e;
}
function y(e) {
    let { controls: t, children: n, listProps: i } = e;
    if (null == n && null == t && null == i) return null;
    let a = b(n);
    return (0, r.jsx)(O, {
        controls: t,
        children: a,
        listProps: i,
    });
}
function O(e) {
    var t, n;
    let { controls: a, children: s, listProps: _ } = e,
        [h, g] = i.useState(!1),
        [b, y] = i.useState(null != _),
        O = i.useRef(null),
        v = (0, c.Z)(O, null == _ ? void 0 : _.ref),
        I = i.useRef(null),
        T = l()(() => {
            var e;
            (null == O ? void 0 : O.current) != null &&
                null != a &&
                g((null == (e = O.current) ? void 0 : e.getDistanceFromTop()) > 12);
        }, 200),
        S = null != _;
    return (
        i.useLayoutEffect(() => {
            var e, t;
            let n = new ResizeObserver(() => {
                    var e, t;
                    if (S) return void y(!0);
                    let n =
                        null != (t = null == O || null == (e = O.current) ? void 0 : e.getScrollerNode()) ? t : null;
                    if (null == n || (null == I ? void 0 : I.current) == null) return;
                    let r = n.getBoundingClientRect();
                    y(I.current.getBoundingClientRect().height > r.height);
                }),
                r = null != (t = null == O || null == (e = O.current) ? void 0 : e.getScrollerNode()) ? t : null;
            return (
                null != r && n.observe(r),
                (null == I ? void 0 : I.current) != null && n.observe(I.current),
                () => n.disconnect()
            );
        }, [S]),
        (0, r.jsxs)(u.y, {
            children: [
                (0, r.jsx)("div", { className: o()(p.bodySpacerTop, { [p.bodySpacerTopBorder]: b && null == a }) }),
                null != a &&
                    (0, r.jsx)("header", {
                        className: o()(p.bodyControls, { [p.bodyControlsWithFade]: h }),
                        children: a,
                    }),
                null != _
                    ? (0, r.jsx)(
                          d._2,
                          E(m({}, _), {
                              className: p.bodyList,
                              innerAriaOrientation: null != (t = _.innerAriaOrientation) ? t : "vertical",
                              innerRole: null != (n = _.innerRole) ? n : "listbox",
                              ref: v,
                              onScroll: (e) => {
                                  var t;
                                  T(), null == (t = _.onScroll) || t.call(_, e);
                              },
                          }),
                      )
                    : (0, r.jsx)(f.yW, {
                          ref: O,
                          className: p.body,
                          onScroll: T,
                          children: (0, r.jsx)("main", {
                              ref: I,
                              className: o()(p.bodyInner, { [p.bodyInnerShouldScroll]: b }),
                              children: s,
                          }),
                      }),
                (0, r.jsx)("div", { className: o()(p.bodySpacerBottom, { [p.bodySpacerBottomBorder]: b }) }),
            ],
        })
    );
}

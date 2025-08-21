n.d(t, { f: () => b }), n(388685), n(415506);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(793030),
    c = n(742746),
    u = n(147479),
    d = n(993365),
    f = n(747127),
    _ = n(525751);
function p(e, t, n) {
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
                p(e, t, n[t]);
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
function E(e) {
    return "string" == typeof e
        ? (0, r.jsx)(d.x, {
              variant: "text-md/normal",
              color: "text-secondary",
              children: e,
          })
        : e;
}
function b(e) {
    let { controls: t, children: n, listProps: i } = e;
    if (null == n && null == t && null == i) return null;
    let a = E(n);
    return (0, r.jsx)(y, {
        controls: t,
        children: a,
        listProps: i,
    });
}
function y(e) {
    var t, n;
    let { controls: a, children: d, listProps: p } = e,
        [m, E] = i.useState(!1),
        [b, y] = i.useState(null != p),
        O = i.useRef(null),
        v = (0, f.Z)(O, null == p ? void 0 : p.ref),
        I = i.useRef(null),
        T = (0, s.throttle)(() => {
            var e;
            (null == O ? void 0 : O.current) != null &&
                null != a &&
                E((null == (e = O.current) ? void 0 : e.getDistanceFromTop()) > 12);
        }, 200),
        S = null != p;
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
        (0, r.jsxs)(l.y5, {
            children: [
                (0, r.jsx)("div", { className: o()(_.bodySpacerTop, { [_.bodySpacerTopBorder]: b && null == a }) }),
                null != a &&
                    (0, r.jsx)("header", {
                        className: o()(_.bodyControls, { [_.bodyControlsWithFade]: m }),
                        children: a,
                    }),
                null != p
                    ? (0, r.jsx)(
                          c._2,
                          g(h({}, p), {
                              className: _.bodyList,
                              innerAriaOrientation: null != (t = p.innerAriaOrientation) ? t : "vertical",
                              innerRole: null != (n = p.innerRole) ? n : "listbox",
                              ref: v,
                              onScroll: (e) => {
                                  var t;
                                  T(), null == (t = p.onScroll) || t.call(p, e);
                              },
                          }),
                      )
                    : (0, r.jsx)(u.yW, {
                          ref: O,
                          className: _.body,
                          onScroll: T,
                          children: (0, r.jsx)("main", {
                              ref: I,
                              className: o()(_.bodyInner, { [_.bodyInnerShouldScroll]: b }),
                              children: d,
                          }),
                      }),
                (0, r.jsx)("div", { className: o()(_.bodySpacerBottom, { [_.bodySpacerBottomBorder]: b }) }),
            ],
        })
    );
}

n.d(t, {
    G: () => b,
    f: () => O,
}),
    n(388685),
    n(415506);
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
    p = n(777207),
    _ = n(51766);
function m(e, t, n) {
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
                m(e, t, n[t]);
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
    return i.Children.toArray(e).filter(Boolean).length > 0;
}
function y(e) {
    return "string" == typeof e
        ? (0, r.jsx)(p.x, {
              variant: "text-md/normal",
              color: "text-subtle",
              children: e,
          })
        : e;
}
function O(e) {
    let { controls: t, children: n, listProps: i } = e;
    if (!b(n) && null == t && null == i) return null;
    let a = y(n);
    return (0, r.jsx)(v, {
        controls: t,
        children: a,
        listProps: i,
    });
}
function v(e) {
    var t, n;
    let { controls: a, children: s, listProps: p } = e,
        [m, g] = i.useState(!1),
        [b, y] = i.useState(null != p),
        O = i.useRef(null),
        v = (0, c.Z)(O, null == p ? void 0 : p.ref),
        S = i.useRef(null),
        I = i.useRef(void 0);
    i.useEffect(
        () => (
            (I.current = l()(() => {
                var e;
                (null == O ? void 0 : O.current) != null &&
                    null != a &&
                    g((null == (e = O.current) ? void 0 : e.getDistanceFromTop()) > 12);
            }, 200)),
            () => {
                var e;
                null == (e = I.current) || e.cancel();
            }
        ),
        [a],
    );
    let T = i.useCallback(() => {
            null != I.current && I.current();
        }, [I]),
        C = null != p;
    return (
        i.useLayoutEffect(() => {
            var e, t;
            let n = new ResizeObserver(() => {
                    var e, t;
                    if (C) return void y(!0);
                    let n =
                        null != (t = null == O || null == (e = O.current) ? void 0 : e.getScrollerNode()) ? t : null;
                    if (null == n || (null == S ? void 0 : S.current) == null) return;
                    let r = n.getBoundingClientRect();
                    y(S.current.getBoundingClientRect().height > r.height);
                }),
                r = null != (t = null == O || null == (e = O.current) ? void 0 : e.getScrollerNode()) ? t : null;
            return (
                null != r && n.observe(r),
                (null == S ? void 0 : S.current) != null && n.observe(S.current),
                () => n.disconnect()
            );
        }, [C]),
        (0, r.jsxs)(u.y, {
            children: [
                (0, r.jsx)("div", { className: o()(_.bodySpacerTop, { [_.bodySpacerTopBorder]: b && null == a }) }),
                null != a &&
                    (0, r.jsx)("header", {
                        className: o()(_.bodyControls, { [_.bodyControlsWithFade]: m }),
                        children: a,
                    }),
                null != p
                    ? (0, r.jsx)(
                          d._2,
                          E(h({}, p), {
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
                    : (0, r.jsx)(f.yW, {
                          ref: O,
                          className: _.body,
                          onScroll: T,
                          disableFocusRingScope: !0,
                          children: (0, r.jsx)("main", {
                              ref: S,
                              className: o()(_.bodyInner, { [_.bodyInnerShouldScroll]: b }),
                              children: s,
                          }),
                      }),
                (0, r.jsx)("div", { className: o()(_.bodySpacerBottom, { [_.bodySpacerBottomBorder]: b }) }),
            ],
        })
    );
}

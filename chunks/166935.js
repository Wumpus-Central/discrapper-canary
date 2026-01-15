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
    let { controls: t, children: n, listProps: i, onScroll: a, scrollerRef: o } = e;
    if (!b(n) && null == t && null == i) return null;
    let s = y(n);
    return (0, r.jsx)(v, {
        controls: t,
        children: s,
        listProps: i,
        onScroll: a,
        scrollerRef: o,
    });
}
function v(e) {
    var t, n;
    let { controls: a, children: s, listProps: p, onScroll: h, scrollerRef: g } = e,
        [b, y] = i.useState(!1),
        [O, v] = i.useState(null != p),
        S = i.useRef(null),
        I = (0, c.Z)(S, null == p ? void 0 : p.ref, g),
        T = i.useRef(null),
        C = i.useRef(void 0);
    i.useEffect(
        () => (
            (C.current = l()(() => {
                var e;
                (null == S ? void 0 : S.current) != null &&
                    null != a &&
                    y((null == (e = S.current) ? void 0 : e.getDistanceFromTop()) > 12);
            }, 200)),
            () => {
                var e;
                null == (e = C.current) || e.cancel();
            }
        ),
        [a],
    );
    let A = i.useCallback(() => {
            null != C.current && C.current(), null != h && h();
        }, [C, h]),
        N = null != p;
    return (
        i.useLayoutEffect(() => {
            var e, t;
            let n = new ResizeObserver(() => {
                    var e, t;
                    if (N) return void v(!0);
                    let n =
                        null != (t = null == S || null == (e = S.current) ? void 0 : e.getScrollerNode()) ? t : null;
                    if (null == n || (null == T ? void 0 : T.current) == null) return;
                    let r = n.getBoundingClientRect();
                    v(T.current.getBoundingClientRect().height > r.height);
                }),
                r = null != (t = null == S || null == (e = S.current) ? void 0 : e.getScrollerNode()) ? t : null;
            return (
                null != r && n.observe(r),
                (null == T ? void 0 : T.current) != null && n.observe(T.current),
                () => n.disconnect()
            );
        }, [N]),
        (0, r.jsxs)(u.y, {
            children: [
                (0, r.jsx)("div", { className: o()(_.bodySpacerTop, { [_.bodySpacerTopBorder]: O && null == a }) }),
                null != a &&
                    (0, r.jsx)("header", {
                        className: o()(_.bodyControls, { [_.bodyControlsWithFade]: b }),
                        children: a,
                    }),
                null != p
                    ? (0, r.jsx)(
                          d._2,
                          E(m({}, p), {
                              className: _.bodyList,
                              innerAriaOrientation: null != (t = p.innerAriaOrientation) ? t : "vertical",
                              innerRole: null != (n = p.innerRole) ? n : "listbox",
                              ref: I,
                              onScroll: (e) => {
                                  var t;
                                  A(), null == (t = p.onScroll) || t.call(p, e);
                              },
                          }),
                      )
                    : (0, r.jsx)(f.yW, {
                          ref: I,
                          className: _.body,
                          onScroll: A,
                          disableFocusRingScope: !0,
                          children: (0, r.jsx)("main", {
                              ref: T,
                              className: o()(_.bodyInner, { [_.bodyInnerShouldScroll]: O }),
                              children: s,
                          }),
                      }),
                (0, r.jsx)("div", { className: o()(_.bodySpacerBottom, { [_.bodySpacerBottomBorder]: O }) }),
            ],
        })
    );
}

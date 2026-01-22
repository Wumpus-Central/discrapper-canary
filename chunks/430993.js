n.d(t, {
    c: () => O,
    y: () => b,
}),
    n(896048),
    n(65821);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(879378),
    l = n.n(o),
    c = n(612324),
    u = n(707554),
    d = n(475825),
    f = n(599319),
    p = n(834730),
    _ = n(22789);
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
        ? (0, r.jsx)(p.E, {
              variant: "text-md/normal",
              color: "text-subtle",
              children: e,
          })
        : e;
}
function O(e) {
    let { controls: t, children: n, listProps: i, onScroll: a, scrollerRef: s } = e;
    if (!b(n) && null == t && null == i) return null;
    let o = y(n);
    return (0, r.jsx)(A, {
        controls: t,
        children: o,
        listProps: i,
        onScroll: a,
        scrollerRef: s,
    });
}
function A(e) {
    var t, n;
    let { controls: a, children: o, listProps: p, onScroll: h, scrollerRef: g } = e,
        [b, y] = i.useState(!1),
        [O, A] = i.useState(null != p),
        v = i.useRef(null),
        S = (0, c.A)(v, null == p ? void 0 : p.ref, g),
        I = i.useRef(null),
        T = i.useRef(void 0);
    i.useEffect(
        () => (
            (T.current = l()(() => {
                var e;
                (null == v ? void 0 : v.current) != null &&
                    null != a &&
                    y((null == (e = v.current) ? void 0 : e.getDistanceFromTop()) > 12);
            }, 200)),
            () => {
                var e;
                null == (e = T.current) || e.cancel();
            }
        ),
        [a],
    );
    let C = i.useCallback(() => {
            null != T.current && T.current(), null != h && h();
        }, [T, h]),
        N = null != p;
    return (
        i.useLayoutEffect(() => {
            var e, t;
            let n = new ResizeObserver(() => {
                    var e, t;
                    if (N) return void A(!0);
                    let n =
                        null != (e = null == v || null == (t = v.current) ? void 0 : t.getScrollerNode()) ? e : null;
                    if (null == n || (null == I ? void 0 : I.current) == null) return;
                    let r = n.getBoundingClientRect();
                    A(I.current.getBoundingClientRect().height > r.height);
                }),
                r = null != (e = null == v || null == (t = v.current) ? void 0 : t.getScrollerNode()) ? e : null;
            return (
                null != r && n.observe(r),
                (null == I ? void 0 : I.current) != null && n.observe(I.current),
                () => n.disconnect()
            );
        }, [N]),
        (0, r.jsxs)(u.F, {
            children: [
                (0, r.jsx)("div", { className: s()(_.bodySpacerTop, { [_.bodySpacerTopBorder]: O && null == a }) }),
                null != a &&
                    (0, r.jsx)("header", {
                        className: s()(_.bodyControls, { [_.bodyControlsWithFade]: b }),
                        children: a,
                    }),
                null != p
                    ? (0, r.jsx)(
                          d.Ei,
                          E(m({}, p), {
                              className: _.bodyList,
                              innerAriaOrientation: null != (t = p.innerAriaOrientation) ? t : "vertical",
                              innerRole: null != (n = p.innerRole) ? n : "listbox",
                              ref: S,
                              onScroll: (e) => {
                                  var t;
                                  C(), null == (t = p.onScroll) || t.call(p, e);
                              },
                          }),
                      )
                    : (0, r.jsx)(f.Gt, {
                          ref: S,
                          className: _.body,
                          onScroll: C,
                          disableFocusRingScope: !0,
                          children: (0, r.jsx)("main", {
                              ref: I,
                              className: s()(_.bodyInner, { [_.bodyInnerShouldScroll]: O }),
                              children: o,
                          }),
                      }),
                (0, r.jsx)("div", { className: s()(_.bodySpacerBottom, { [_.bodySpacerBottomBorder]: O }) }),
            ],
        })
    );
}

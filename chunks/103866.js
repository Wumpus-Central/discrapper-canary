n.d(t, { f: () => E }), n(388685), n(415506);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n(793030),
    c = n(742746),
    u = n(147479),
    d = n(993365),
    f = n(946598);
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
        ? (0, r.jsx)(d.x, {
              variant: "text-md/normal",
              color: "text-secondary",
              children: e,
          })
        : e;
}
function E(e) {
    let { controls: t, children: n, listProps: i } = e;
    if (null == n && null == t && null == i) return null;
    let o = g(n);
    return (0, r.jsx)(b, {
        controls: t,
        children: o,
        listProps: i,
    });
}
function b(e) {
    var t, n, o;
    let { controls: d, children: _, listProps: h } = e,
        [g, E] = i.useState(!1),
        [b, y] = i.useState(null != h),
        O = i.useRef(null != (t = null == h ? void 0 : h.ref) ? t : null),
        v = i.useRef(null),
        I = (0, s.throttle)(() => {
            var e;
            (null == O ? void 0 : O.current) != null &&
                null != d &&
                E((null == (e = O.current) ? void 0 : e.getDistanceFromTop()) > 12);
        }, 200),
        T = null != h;
    return (
        i.useLayoutEffect(() => {
            var e, t;
            let n = new ResizeObserver(() => {
                    var e, t;
                    if (T) return void y(!0);
                    let n =
                        null != (t = null == O || null == (e = O.current) ? void 0 : e.getScrollerNode()) ? t : null;
                    if (null == n || (null == v ? void 0 : v.current) == null) return;
                    let r = n.getBoundingClientRect();
                    y(v.current.getBoundingClientRect().height > r.height);
                }),
                r = null != (t = null == O || null == (e = O.current) ? void 0 : e.getScrollerNode()) ? t : null;
            return (
                null != r && n.observe(r),
                (null == v ? void 0 : v.current) != null && n.observe(v.current),
                () => n.disconnect()
            );
        }, [T]),
        (0, r.jsxs)(l.y5, {
            children: [
                (0, r.jsx)("div", { className: a()(f.bodySpacerTop, { [f.bodySpacerTopBorder]: b && null == d }) }),
                null != d &&
                    (0, r.jsx)("header", {
                        className: a()(f.bodyControls, { [f.bodyControlsWithFade]: g }),
                        children: d,
                    }),
                null != h
                    ? (0, r.jsx)(
                          c._2,
                          m(p({}, h), {
                              className: f.bodyList,
                              innerAriaOrientation: null != (n = h.innerAriaOrientation) ? n : "vertical",
                              innerRole: null != (o = h.innerRole) ? o : "listbox",
                              ref: O,
                              onScroll: (e) => {
                                  var t;
                                  I(), null == (t = h.onScroll) || t.call(h, e);
                              },
                          }),
                      )
                    : (0, r.jsx)(u.yW, {
                          ref: O,
                          className: f.body,
                          onScroll: I,
                          children: (0, r.jsx)("main", {
                              ref: v,
                              className: a()(f.bodyInner, { [f.bodyInnerShouldScroll]: b }),
                              children: _,
                          }),
                      }),
                (0, r.jsx)("div", { className: a()(f.bodySpacerBottom, { [f.bodySpacerBottomBorder]: b }) }),
            ],
        })
    );
}

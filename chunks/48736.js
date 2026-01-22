r.r(t), r.d(t, { default: () => g }), r(896048);
var n = r(627968),
    a = r(64700),
    l = r(503698),
    s = r.n(l),
    c = r(317097),
    i = r(990078),
    o = r(397927),
    d = r(652215),
    u = r(985018),
    b = r(333354),
    f = r(873790);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let j = (e) => {
        let { position: t, color: r, disabled: a } = e,
            l = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    a,
                    l = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (a = 0, r = Reflect.ownKeys(e); a < r.length; a++)
                        (n = r[a]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                }
                if (
                    ((l = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            a = {},
                            l = Object.getOwnPropertyNames(e);
                        for (n = 0; n < l.length; n++)
                            (r = l[n]),
                                !(t.indexOf(r) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                                    (a[r] = e[r]);
                        return a;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                        (n = r[a]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l;
            })(e, ["position", "color", "disabled"]),
            i = (0, c.OK)(null != r ? r : d.TGz) > 0.1;
        return (0, n.jsx)(
            "div",
            m(p({}, l), {
                className: s()("left" === t ? f.Zv : f.Un, i ? f.xA : f.fQ, { [f.r9]: a }),
                children: (0, n.jsx)("div", {
                    className: f.Ol,
                    style: { background: (0, c.Hl)(r) },
                    children: (0, n.jsx)(o.dDg, {
                        size: "custom",
                        colorClass: i ? f.wW : f.yD,
                        width: 14,
                        height: 14,
                    }),
                }),
            }),
        );
    },
    x = (e) => {
        let {
            isStart: t,
            buttonRef: r,
            color: a,
            showPopout: l,
            position: s,
            onRequestClose: c,
            onShowPopout: d,
            onColorChange: x,
            disabled: g,
        } = e;
        return (0, n.jsx)(o.vN3, {
            children: (0, n.jsx)(o.YNO, {
                targetElementRef: r,
                renderPopout: () =>
                    (0, n.jsx)(o.VNw, {
                        onChange: (e) => x(e, t),
                        value: a,
                    }),
                position: s,
                shouldShow: l,
                onRequestClose: c,
                children: (e) =>
                    (0, n.jsx)("div", {
                        ref: r,
                        children: (0, n.jsx)(
                            o.DUT,
                            m(p({}, e), {
                                className: f.tj,
                                onClick: d,
                                "data-position": t ? "left" : "right",
                                "aria-label": u.intl.string(t ? b.default.apbXbH : b.default.JaVq1b),
                                children: (0, n.jsx)(i.m, {
                                    text: u.intl.string(t ? b.default.apbXbH : b.default.JaVq1b),
                                    position: "bottom",
                                    children: (0, n.jsx)(j, {
                                        position: t ? "left" : "right",
                                        color: null != a ? a : 0,
                                        disabled: g,
                                    }),
                                }),
                            }),
                        ),
                    }),
            }),
        });
    };
function g(e) {
    let {
            defaultColor: t,
            colors: r,
            value: l,
            onChange: b,
            disabled: g = !1,
            customPickerPosition: h = "bottom",
            secondaryValue: O,
            onChangeGradientColors: y,
            isGradient: v = !1,
            gradientButtonClassName: _,
            allowBlackCustomColor: N = !1,
        } = e,
        w = a.useCallback((e) => (0 !== e || N) && e !== t && !r.some((t) => t === e) && (N || 0 !== e), [r, t, N]),
        k = a.useRef(null),
        S = a.useRef(null),
        P = a.useRef(null),
        [C, A] = a.useState(() => (w(l) ? l : null)),
        [E, D] = a.useState({
            start: l,
            end: null != O ? O : d.TGz,
        }),
        [I, T] = a.useState({
            showStart: !1,
            showEnd: !1,
        });
    a.useEffect(() => {
        A(w(l) ? l : null),
            D({
                start: l,
                end: null != O ? O : d.TGz,
            });
    }, [l, w, O]);
    let R = a.useCallback(
            (e) => {
                null == b || b(e), A(null);
            },
            [b, A],
        ),
        G = a.useCallback(
            (e) => {
                null == b || b(e), A(e);
            },
            [b, A],
        ),
        L = a.useCallback(
            (e, t) => {
                D({
                    start: e,
                    end: t,
                }),
                    null == y || y([e, t]);
            },
            [y],
        ),
        z = a.useCallback((e, t) => {
            T((r) => m(p({}, r), { [e]: t }));
        }, []),
        B = a.useCallback(() => {
            var e, t, r, a, l;
            let i = {
                    background: "linear-gradient(90deg, "
                        .concat((0, c.Hl)(null != (e = E.start) ? e : d.TGz), " 0%, ")
                        .concat((0, c.Hl)(E.end), " 100%)"),
                },
                o = (0, n.jsxs)("div", {
                    className: f.em,
                    children: [
                        (0, n.jsx)("div", {
                            className: f.Ri,
                            style: i,
                        }),
                        (0, n.jsx)(j, {
                            position: "left",
                            color: null != (t = E.start) ? t : d.TGz,
                            disabled: g,
                        }),
                        (0, n.jsx)(j, {
                            position: "right",
                            color: null != (r = E.end) ? r : 0,
                            disabled: g,
                        }),
                    ],
                });
            return g
                ? o
                : (0, n.jsxs)("div", {
                      className: s()(f.em, _),
                      children: [
                          (0, n.jsx)("div", {
                              className: f.Ri,
                              style: i,
                          }),
                          (0, n.jsx)(x, {
                              isStart: !0,
                              buttonRef: S,
                              color: null != (a = E.start) ? a : d.TGz,
                              showPopout: I.showStart,
                              position: h,
                              onRequestClose: () => z("showStart", !1),
                              onShowPopout: () => z("showStart", !0),
                              onColorChange: (e) => L(e, E.end),
                              disabled: g,
                          }),
                          (0, n.jsx)(x, {
                              isStart: !1,
                              buttonRef: P,
                              color: null != (l = E.end) ? l : 0,
                              showPopout: I.showEnd,
                              position: h,
                              onRequestClose: () => z("showEnd", !1),
                              onShowPopout: () => z("showEnd", !0),
                              onColorChange: (e) => {
                                  var t;
                                  return L(null != (t = E.start) ? t : d.TGz, e);
                              },
                              disabled: g,
                          }),
                      ],
                  });
        }, [h, g, E, I, L, z, _]),
        M = a.useCallback(
            () =>
                (0, n.jsx)(o.VNw, {
                    onChange: G,
                    value: l,
                }),
            [G, l],
        ),
        U = a.useCallback(
            (e) => {
                var r;
                let a = l !== t && (0 !== l || N),
                    s = (0, n.jsx)(
                        o.nJu,
                        m(p({}, e), {
                            customColor: null != (r = e.customColor) ? r : a ? l : null,
                            "aria-label": u.intl.string(u.t["FHBa/1"]),
                        }),
                    );
                return g
                    ? s
                    : (0, n.jsx)(o.YNO, {
                          targetElementRef: k,
                          renderPopout: M,
                          position: h,
                          children: (e) =>
                              (0, n.jsx)(i.m, {
                                  targetElementRef: k,
                                  text: u.intl.string(u.t["FHBa/1"]),
                                  position: "bottom",
                                  children: (0, n.jsx)(
                                      "div",
                                      m(p({}, e), {
                                          ref: k,
                                          children: s,
                                      }),
                                  ),
                              }),
                      });
            },
            [h, g, M, l, t, N],
        ),
        H = a.useCallback(
            (e) => {
                let t = (0, n.jsx)(o.fyo, p({}, e));
                return g
                    ? t
                    : (0, n.jsx)(i.m, {
                          text: u.intl.string(u.t.bBvAEH),
                          position: "bottom",
                          children: (0, n.jsx)("div", { children: t }),
                      });
            },
            [g],
        );
    return (0, n.jsx)(
        o.skP,
        m(p({}, e), {
            renderDefaultButton: H,
            renderCustomButton: U,
            renderGradientCustomButton: B,
            isGradient: v,
            customColor: C,
            onChange: v ? L : R,
        }),
    );
}

n.d(t, {
    GY: () => D,
    PI: () => S,
    RT: () => x,
    XM: () => P,
    ls: () => w,
    xZ: () => N,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(692547),
    c = n(481060),
    u = n(765250),
    d = n(13245),
    f = n(355863),
    _ = n(237997),
    p = n(145597),
    h = n(444295),
    m = n(333031),
    g = n(618373),
    E = n(620954),
    b = n(388032),
    y = n(962967);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: y.titleWrapper,
        children: (0, r.jsx)(c.Text, {
            variant: "text-xs/semibold",
            color: "header-primary",
            children: t,
        }),
    });
}
function A() {
    let e = (0, s.e7)([_.default], () => _.default.isLocked((0, p.getPID)())),
        [t, n] = i.useState(!1 === e);
    return (
        i.useEffect(() => {
            !1 === e && n(!0);
        }, [e]),
        t
    );
}
let C = 6000;
function N(e) {
    let t = (0, s.e7)([f.Z], () => f.Z.getWidget(e), [e]),
        n = i.useRef(null == t ? void 0 : t.showExtrasHintTimestamp),
        [r, a] = i.useState(!1),
        o = (0, s.e7)([_.default], () => _.default.isLocked((0, p.getPID)())),
        l = A();
    return (
        i.useEffect(() => {
            let e = null == t ? void 0 : t.showExtrasHintTimestamp;
            if (null != e && e !== n.current) {
                (n.current = e), a(!0);
                let t = setTimeout(() => {
                    a(!1);
                }, C);
                return () => clearTimeout(t);
            }
            a(!1);
        }, [null == t ? void 0 : t.showExtrasHintTimestamp]),
        r && o && !l
    );
}
function R(e) {
    let t = i.useRef(null == e ? void 0 : e.showExtrasHintTimestamp),
        n = (null == e ? void 0 : e.showExtrasHintTimestamp) !== t.current,
        r = (0, s.e7)([_.default], () => _.default.isLocked((0, p.getPID)())),
        a = A();
    return n && r && !a;
}
function P(e) {
    let { children: t, widgetId: n } = e,
        i = (0, s.e7)([f.Z], () => f.Z.getWidget(n), [n]),
        a = R(i),
        o = () => (0, g.Q)((0, E.P)(), b.t["1XA04e"], b.intl.string(b.t.uZZGzc), !1);
    return a
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(m.Z, {
                      className: y.titleWrapper,
                      children: (0, r.jsx)(c.P3F, {
                          className: y.titleWrapperClickable,
                          onClick: () => {
                              null != i &&
                                  (d.Z.setInputLocked(!1, (0, p.getPID)()),
                                  (0, h.Ws)(i.type, {
                                      type: h.Qu.KEYBIND_HINT,
                                      value: h.bk.OVERLAY_UNLOCKED,
                                  }));
                          },
                          children: (0, r.jsx)(c.Text, {
                              variant: "text-xs/semibold",
                              color: "header-primary",
                              children: o(),
                          }),
                      }),
                  }),
                  (0, r.jsx)("div", { className: y.extrasEmptySpace }),
              ],
          })
        : (0, r.jsx)("div", {
              className: y.titleWrapper,
              children: (0, r.jsx)(c.Text, {
                  variant: "text-xs/semibold",
                  color: "header-primary",
                  children: t,
              }),
          });
}
function w(e) {
    let { onClick: t } = e;
    if ((0, s.e7)([_.default], () => _.default.isLocked((0, p.getPID)()))) return null;
    let n = b.intl.string(b.t["3D5yo6"]);
    return (0, r.jsx)(c.ua7, {
        text: n,
        "aria-label": n,
        children: (e) =>
            (0, r.jsx)(
                c.P3F,
                T(v({}, e), {
                    className: y.button,
                    onClick: t,
                    children: (0, r.jsx)(c.ewm, {
                        size: "xxs",
                        color: l.Z.colors.INTERACTIVE_ACTIVE,
                    }),
                }),
            ),
    });
}
function D(e) {
    let { widgetId: t, showAllStreams: n } = e,
        i = n ? b.intl.string(b.t.q2B3rq) : b.intl.string(b.t.JKGi6u),
        a = () => {
            (0, u.zG)(t, { showAllStreams: !n });
        };
    return (0, s.e7)([_.default], () => _.default.isLocked((0, p.getPID)()))
        ? null
        : (0, r.jsx)(c.ua7, {
              text: i,
              "aria-label": i,
              children: (e) =>
                  (0, r.jsx)(
                      c.P3F,
                      T(v({}, e), {
                          className: o()(y.button, n && y.active),
                          onClick: a,
                          children: (0, r.jsx)(c.pzj, {
                              size: "xxs",
                              color: n ? l.Z.colors.BG_BRAND : l.Z.colors.INTERACTIVE_ACTIVE,
                          }),
                      }),
                  ),
          });
}
function x(e) {
    let { id: t, pinned: n } = e,
        i = n ? b.intl.string(b.t.cSu80t) : b.intl.string(b.t.cM8Vnp),
        a = (0, s.e7)([_.default], () => _.default.isLocked((0, p.getPID)()));
    return (0, r.jsx)(c.ua7, {
        text: i,
        "aria-label": i,
        children: (e) =>
            (0, r.jsx)(
                c.P3F,
                T(v({}, e), {
                    className: o()(y.button, n && y.active),
                    onClick: () => {
                        a || (0, u.xh)(t);
                    },
                    children: (0, r.jsx)(c.k5M, {
                        size: "xxs",
                        color: n ? l.Z.colors.BG_BRAND : l.Z.colors.INTERACTIVE_ACTIVE,
                    }),
                }),
            ),
    });
}

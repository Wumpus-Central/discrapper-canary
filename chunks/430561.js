n.d(t, {
    GY: () => x,
    PI: () => A,
    RT: () => M,
    XM: () => D,
    bc: () => C,
    ls: () => L,
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
    f = n(493773),
    _ = n(355863),
    p = n(237997),
    h = n(145597),
    m = n(444295),
    g = n(333031),
    E = n(618373),
    b = n(620954),
    y = n(388032),
    O = n(962967);
function v(e, t, n) {
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
function I(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: O.titleWrapper,
        children: (0, r.jsx)(c.Text, {
            variant: "text-xs/semibold",
            color: "header-primary",
            children: t,
        }),
    });
}
let C = 7000;
function N(e, t) {
    return P(
        (0, s.e7)([_.Z], () => _.Z.getWidget(e), [e]),
        t,
    );
}
let R = (e, t) => Date.now() - e < t;
function P(e, t) {
    let n = i.useRef(null == e ? void 0 : e.showExtrasHintTimestamp),
        [r, a] = i.useState(!1),
        o = (0, s.e7)([p.default], () => p.default.isLocked((0, h.getPID)())),
        l = i.useRef(void 0);
    return (
        i.useEffect(() => {
            let r = null == e ? void 0 : e.showExtrasHintTimestamp;
            r !== n.current &&
                ((n.current = r),
                a(!0),
                (l.current = setTimeout(() => {
                    a(!1);
                }, t)));
        }, [t, null == e ? void 0 : e.showExtrasHintTimestamp]),
        (0, f.ZP)(() => {
            let n = null == e ? void 0 : e.showExtrasHintTimestamp;
            return (
                null != n &&
                    R(n, t) &&
                    (a(!0),
                    (l.current = setTimeout(() => {
                        a(!1);
                    }, t))),
                () => {
                    null != l.current && clearTimeout(l.current);
                }
            );
        }),
        r && o
    );
}
let w = 8000;
function D(e) {
    let { children: t, widgetId: n } = e,
        i = (0, s.e7)([_.Z], () => _.Z.getWidget(n), [n]),
        a = P(i, w),
        o = () =>
            (0, E.Q)((0, b.P)(), y.t["1XA04e"], y.intl.string(y.t.uZZGzc), {
                useFlexboxLayout: !0,
                highlightAdminWarningIfElevated: !1,
                keybindClassName: O.keybind,
            });
    return a
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(g.Z, {
                      className: O.titleWrapperWithHint,
                      children: (0, r.jsx)(c.P3F, {
                          className: O.titleWrapperClickable,
                          onClick: () => {
                              null != i &&
                                  (d.Z.setInputLocked(!1, (0, h.getPID)()),
                                  (0, m.Ws)(i.type, {
                                      type: m.Qu.KEYBIND_HINT,
                                      value: m.bk.OVERLAY_UNLOCKED,
                                  }));
                          },
                          children: (0, r.jsx)(c.Text, {
                              variant: "text-xs/semibold",
                              color: "header-primary",
                              children: o(),
                          }),
                      }),
                  }),
                  (0, r.jsx)("div", { className: O.extrasEmptySpace }),
              ],
          })
        : (0, r.jsx)("div", {
              className: O.titleWrapper,
              children: (0, r.jsx)(c.Text, {
                  variant: "text-xs/semibold",
                  color: "header-primary",
                  children: t,
              }),
          });
}
function L(e) {
    let { onClick: t } = e;
    if ((0, s.e7)([p.default], () => p.default.isLocked((0, h.getPID)()))) return null;
    let n = y.intl.string(y.t["3D5yo6"]);
    return (0, r.jsx)(c.ua7, {
        text: n,
        "aria-label": n,
        children: (e) =>
            (0, r.jsx)(
                c.P3F,
                S(I({}, e), {
                    className: O.button,
                    onClick: t,
                    children: (0, r.jsx)(c.ewm, {
                        size: "xxs",
                        color: l.Z.colors.INTERACTIVE_ACTIVE,
                    }),
                }),
            ),
    });
}
function x(e) {
    let { widgetId: t, showAllStreams: n } = e,
        i = n ? y.intl.string(y.t.q2B3rq) : y.intl.string(y.t.JKGi6u),
        a = () => {
            (0, u.zG)(t, { showAllStreams: !n });
        };
    return (0, s.e7)([p.default], () => p.default.isLocked((0, h.getPID)()))
        ? null
        : (0, r.jsx)(c.ua7, {
              text: i,
              "aria-label": i,
              children: (e) =>
                  (0, r.jsx)(
                      c.P3F,
                      S(I({}, e), {
                          className: o()(O.button, n && O.active),
                          onClick: a,
                          children: (0, r.jsx)(c.pzj, {
                              size: "xxs",
                              color: n ? l.Z.colors.BG_BRAND : l.Z.colors.INTERACTIVE_ACTIVE,
                          }),
                      }),
                  ),
          });
}
function M(e) {
    let { id: t, pinned: n } = e,
        i = n ? y.intl.string(y.t.cSu80t) : y.intl.string(y.t.cM8Vnp),
        a = (0, s.e7)([p.default], () => p.default.isLocked((0, h.getPID)()));
    return (0, r.jsx)(c.ua7, {
        text: i,
        "aria-label": i,
        children: (e) =>
            (0, r.jsx)(
                "div",
                S(I({}, e), {
                    children: (0, r.jsx)(c.P3F, {
                        className: o()(O.button, n && O.active),
                        onClick: () => {
                            a || (0, u.xh)(t);
                        },
                        children: (0, r.jsx)(c.k5M, {
                            size: "xxs",
                            color: n ? l.Z.colors.BG_BRAND : l.Z.colors.INTERACTIVE_ACTIVE,
                        }),
                    }),
                }),
            ),
    });
}

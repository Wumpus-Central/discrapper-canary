n.d(t, {
    GY: () => D,
    PI: () => I,
    RT: () => w,
    XM: () => R,
    bc: () => T,
    ls: () => P,
    xZ: () => S,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(692547),
    c = n(28664),
    u = n(481060),
    d = n(765250),
    f = n(13245),
    _ = n(493773),
    p = n(355863),
    h = n(444295),
    m = n(333031),
    g = n(610394),
    E = n(618373),
    b = n(620954),
    y = n(985149),
    O = n(388032),
    v = n(962967);
function I(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: v.titleWrapper,
        children: (0, r.jsx)(u.Text, {
            variant: "text-xs/semibold",
            color: "header-primary",
            children: t,
        }),
    });
}
let T = 7000;
function S(e, t) {
    return C(
        (0, s.e7)([p.Z], () => p.Z.getWidget(e), [e]),
        t,
    );
}
let A = (e, t) => Date.now() - e < t;
function C(e, t) {
    let n = i.useRef(null == e ? void 0 : e.showExtrasHintTimestamp),
        [r, a] = i.useState(!1),
        o = (0, y.Z)(),
        s = i.useRef(void 0);
    return (
        i.useEffect(() => {
            let r = null == e ? void 0 : e.showExtrasHintTimestamp;
            r !== n.current &&
                ((n.current = r),
                a(!0),
                (s.current = setTimeout(() => {
                    a(!1);
                }, t)));
        }, [t, null == e ? void 0 : e.showExtrasHintTimestamp]),
        (0, _.ZP)(() => {
            let n = null == e ? void 0 : e.showExtrasHintTimestamp;
            return (
                null != n &&
                    A(n, t) &&
                    (a(!0),
                    (s.current = setTimeout(() => {
                        a(!1);
                    }, t))),
                () => {
                    null != s.current && clearTimeout(s.current);
                }
            );
        }),
        r && o
    );
}
let N = 8000;
function R(e) {
    let { children: t, widgetId: n } = e,
        i = (0, s.e7)([p.Z], () => p.Z.getWidget(n), [n]),
        a = C(i, N),
        o = () =>
            (0, E.Q)((0, b.P)(), O.t["1XA04X"], O.intl.string(O.t.uZZGzf), {
                useFlexboxLayout: !0,
                highlightAdminWarningIfElevated: !1,
                keybindClassName: v.keybind,
            });
    return a
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(m.Z, {
                      className: v.titleWrapperWithHint,
                      children: (0, r.jsx)(u.P3F, {
                          className: v.titleWrapperClickable,
                          onClick: () => {
                              null != i &&
                                  (f.Z.setInputLocked(!1, g.Z.getTargetPID()),
                                  (0, h.Ws)(i.type, {
                                      type: h.Qu.KEYBIND_HINT,
                                      value: h.bk.OVERLAY_UNLOCKED,
                                  }));
                          },
                          children: (0, r.jsx)(u.Text, {
                              variant: "text-xs/semibold",
                              color: "header-primary",
                              children: o(),
                          }),
                      }),
                  }),
                  (0, r.jsx)("div", { className: v.extrasEmptySpace }),
              ],
          })
        : (0, r.jsx)("div", {
              className: v.titleWrapper,
              children: (0, r.jsx)(u.Text, {
                  variant: "text-xs/semibold",
                  color: "header-primary",
                  children: t,
              }),
          });
}
function P(e) {
    let { onClick: t } = e;
    if ((0, y.Z)()) return null;
    let n = O.intl.string(O.t["3D5yo/"]);
    return (0, r.jsx)(c.u, {
        text: n,
        "aria-label": n,
        children: (0, r.jsx)(u.P3F, {
            className: v.button,
            onClick: t,
            children: (0, r.jsx)(u.ewm, {
                size: "xxs",
                color: l.Z.colors.INTERACTIVE_ACTIVE,
            }),
        }),
    });
}
function D(e) {
    let { widgetId: t, showAllStreams: n } = e,
        i = n ? O.intl.string(O.t.q2B3rh) : O.intl.string(O.t.JKGi6o),
        a = () => {
            (0, d.zG)(t, { showAllStreams: !n });
        };
    return (0, y.Z)()
        ? null
        : (0, r.jsx)(c.u, {
              text: i,
              "aria-label": i,
              children: (0, r.jsx)(u.P3F, {
                  className: o()(v.button, n && v.active),
                  onClick: a,
                  children: (0, r.jsx)(u.pzj, {
                      size: "xxs",
                      color: n ? l.Z.colors.BG_BRAND : l.Z.colors.INTERACTIVE_ACTIVE,
                  }),
              }),
          });
}
function w(e) {
    let { id: t, pinned: n } = e,
        i = n ? O.intl.string(O.t.cSu80j) : O.intl.string(O.t.cM8Vnm),
        a = (0, y.Z)();
    return (0, r.jsx)(c.u, {
        text: i,
        "aria-label": i,
        asContainer: !0,
        children: (0, r.jsx)(u.P3F, {
            className: o()(v.button, n && v.active),
            onClick: () => {
                a || (0, d.xh)(t);
            },
            children: (0, r.jsx)(u.k5M, {
                size: "xxs",
                color: n ? l.Z.colors.BG_BRAND : l.Z.colors.INTERACTIVE_ACTIVE,
            }),
        }),
    });
}

n.d(t, { Z: () => v }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(574583),
    l = n(532772),
    c = n(681715),
    u = n(400332),
    d = n(28546),
    f = n(713913),
    _ = n(443603),
    p = n(957825),
    h = n(388032),
    m = n(744114);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    let { disabled: n, type: a } = e,
        [g, b] = (0, d.Iu)((e) => [e.activeView, e.pickerId], s.X),
        O = !1,
        v = g === p.X1.STICKER,
        I = !1,
        S = i.useCallback(() => {
            (0, d.RO)(p.X1.STICKER, a);
        }, [a]),
        { Component: T, events: A, play: C } = (0, l.z)(),
        N = (0, f.v)(u.U);
    return n
        ? null
        : (0, r.jsx)("div", {
              className: o()(p.CT, m.buttonContainer),
              ref: t,
              children: (0, r.jsx)(c.u, {
                  shouldShow: null != N,
                  text: h.intl.string(h.t.oOJ7KU),
                  keyboardShortcut: N,
                  children: (0, r.jsx)(
                      _.Z,
                      y(E({ className: o()(m.button, m.stickerButton) }, A), {
                          onClick: () => {
                              S(), C();
                          },
                          isActive: v,
                          "aria-label": h.intl.string(h.t.rZpidU),
                          "aria-expanded": v,
                          "aria-haspopup": "dialog",
                          "aria-controls": b,
                          sparkle: O,
                          notification: I ? _.j.UPDATE : null,
                          children: (0, r.jsx)(T, {
                              size: "refresh_sm",
                              color: "currentColor",
                          }),
                      }),
                  ),
              }),
          });
}
let v = i.memo(i.forwardRef(O));

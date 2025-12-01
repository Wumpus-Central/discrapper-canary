n.d(t, { Z: () => v }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(55160),
    l = n(532772),
    c = n(681715),
    u = n(400332),
    d = n(28546),
    f = n(713913),
    p = n(443603),
    _ = n(957825),
    m = n(388032),
    h = n(564355);
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
        v = g === _.X1.STICKER,
        S = !1,
        I = i.useCallback(() => {
            (0, d.RO)(_.X1.STICKER, a);
        }, [a]),
        { Component: T, events: A, play: C } = (0, l.z)(),
        N = (0, f.v)(u.U);
    return n
        ? null
        : (0, r.jsx)("div", {
              className: o()(_.CT, h.buttonContainer),
              ref: t,
              children: (0, r.jsx)(c.u, {
                  shouldShow: null != N,
                  text: m.intl.string(m.t.oOJ7KU),
                  keyboardShortcut: N,
                  children: (0, r.jsx)(
                      p.Z,
                      y(E({ className: o()(h.button, h.stickerButton) }, A), {
                          onClick: () => {
                              I(), C();
                          },
                          isActive: v,
                          "aria-label": m.intl.string(m.t.rZpidU),
                          "aria-expanded": v,
                          "aria-haspopup": "dialog",
                          "aria-controls": b,
                          sparkle: O,
                          notification: S ? p.j.UPDATE : null,
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

n.d(t, { A: () => A }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(942381),
    l = n(541952),
    c = n(435371),
    u = n(568765),
    d = n(151271),
    f = n(184761),
    p = n(545428),
    _ = n(698279),
    h = n(985018),
    m = n(111314);
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
    let { disabled: n, type: a, channel: g } = e,
        [b, O, A, v] = (0, d.RQ)((e) => [e.activeView, e.pickerId, e.activeChannelId, e.activeViewType], o.x),
        S = !1,
        I = b === _.kx.STICKER && v === a && A === g.id,
        T = !1,
        C = i.useCallback(() => {
            (0, d.r$)(_.kx.STICKER, a, g.id);
        }, [a, g.id]),
        { Component: N, events: R, play: w } = (0, l.g)(),
        P = (0, f.p)(u.w);
    return n
        ? null
        : (0, r.jsx)("div", {
              className: s()(_.VQ, m.UD),
              ref: t,
              children: (0, r.jsx)(c.m_, {
                  shouldShow: null != P,
                  text: h.intl.string(h.t.oOJ7KU),
                  keyboardShortcut: P,
                  children: (0, r.jsx)(
                      p.A,
                      y(E({ className: s()(m.x6, m.KE) }, R), {
                          onClick: () => {
                              C(), w();
                          },
                          isActive: I,
                          "aria-label": h.intl.string(h.t.rZpidU),
                          "aria-expanded": I,
                          "aria-haspopup": "dialog",
                          "aria-controls": O,
                          sparkle: S,
                          notification: T ? p.V.UPDATE : null,
                          children: (0, r.jsx)(N, {
                              size: "refresh_sm",
                              color: "currentColor",
                          }),
                      }),
                  ),
              }),
          });
}
let A = i.memo(i.forwardRef(O));

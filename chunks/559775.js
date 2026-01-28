n.d(t, {
    A: () => y,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(942381),
    l = n(541952),
    c = n(151271),
    u = n(545428),
    d = n(698279),
    f = n(985018),
    p = n(111314);

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

function h(e) {
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

function m(e, t) {
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

function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function E(e, t) {
    let { disabled: n, type: a, channel: _ } = e,
        [m, E, y, b] = (0, c.RQ)((e) => [e.activeView, e.pickerId, e.activeChannelId, e.activeViewType], s.x),
        O = !1,
        v = m === d.kx.STICKER && b === a && y === _.id,
        A = !1,
        I = i.useCallback(() => {
            (0, c.r$)(d.kx.STICKER, a, _.id);
        }, [a, _.id]),
        { Component: S, events: T, play: C } = (0, l.g)();
    return n
        ? null
        : (0, r.jsx)("div", {
              className: o()(d.VQ, p.UD),
              ref: t,
              children: (0, r.jsx)(
                  u.A,
                  g(
                      h(
                          {
                              className: o()(p.x6, p.KE),
                          },
                          T,
                      ),
                      {
                          onClick: () => {
                              I(), C();
                          },
                          isActive: v,
                          "aria-label": f.intl.string(f.t.rZpidU),
                          "aria-expanded": v,
                          "aria-haspopup": "dialog",
                          "aria-controls": E,
                          sparkle: O,
                          notification: A ? u.V.UPDATE : null,
                          children: (0, r.jsx)(S, {
                              size: "refresh_sm",
                              color: "currentColor",
                          }),
                      },
                  ),
              ),
          });
}
let y = i.memo(i.forwardRef(E));

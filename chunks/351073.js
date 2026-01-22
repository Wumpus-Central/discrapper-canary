n.d(t, { A: () => g });
var l = n(627968),
    r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(417597),
    o = n(447404),
    c = n(287809),
    u = n(502633),
    d = n(909417),
    f = n(427160),
    p = n(304713);
function b(e) {
    let { focused: t, channelId: n, streamerId: i, stream: u } = e,
        b = r.useRef(null),
        g = (0, s.bG)([c.default], () => c.default.getCurrentUser());
    a()(null != g, "user cannot be null"), (0, f.A)(b, g, i, n);
    let {
        handleClick: m,
        handleMouseDown: h,
        handleMouseEnter: A,
        handleMouseMove: y,
        handleMouseUp: _,
    } = (0, d.A)({
        user: g,
        channelId: n,
        streamerId: i,
        stream: u,
        focused: t,
        canvas: b.current,
    });
    return (0, l.jsx)(o.A, {
        children: (0, l.jsx)("canvas", {
            ref: b,
            onClick: m,
            onMouseDown: h,
            onMouseEnter: A,
            onMouseMove: y,
            onMouseUp: _,
            className: p.s,
        }),
    });
}
function g(e) {
    let { isSharedCanvasEnabled: t } = u.A.useExperiment(
        {
            guildId: e.guildId,
            location: "d0de1c_1",
        },
        { autoTrackExposure: !0 },
    );
    return !t || e.hasScreenMessage
        ? null
        : (0, l.jsx)(
              b,
              (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                          l = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols &&
                          (l = l.concat(
                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                              }),
                          )),
                          l.forEach(function (t) {
                              var l;
                              (l = n[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: l,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (e[t] = l);
                          });
                  }
                  return e;
              })({}, e),
          );
}

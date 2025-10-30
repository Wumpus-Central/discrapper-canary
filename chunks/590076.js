n.d(t, { Z: () => m });
var r = n(951288),
    i = n(647438),
    l = n(512722),
    a = n.n(l),
    o = n(399606),
    s = n(618158),
    c = n(594174),
    u = n(822183),
    d = n(364125),
    p = n(90753),
    f = n(9589);
function h(e) {
    let { focused: t, channelId: n, streamerId: l, stream: u } = e,
        h = i.useRef(null),
        m = (0, o.e7)([c.default], () => c.default.getCurrentUser());
    a()(null != m, "user cannot be null"), (0, p.Z)(h, m, l, n);
    let {
        handleClick: g,
        handleMouseDown: b,
        handleMouseEnter: _,
        handleMouseMove: y,
        handleMouseUp: C,
    } = (0, d.Z)({
        user: m,
        channelId: n,
        streamerId: l,
        stream: u,
        focused: t,
        canvas: h.current,
    });
    return (0, r.jsx)(s.Z, {
        children: (0, r.jsx)("canvas", {
            ref: h,
            onClick: g,
            onMouseDown: b,
            onMouseEnter: _,
            onMouseMove: y,
            onMouseUp: C,
            className: f.sharedCanvas,
        }),
    });
}
function m(e) {
    let { isSharedCanvasEnabled: t } = u.Z.useExperiment(
        {
            guildId: e.guildId,
            location: "d0de1c_1",
        },
        { autoTrackExposure: !0 },
    );
    return !t || e.hasScreenMessage
        ? null
        : (0, r.jsx)(
              h,
              (function (e) {
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
                              var r;
                              (r = n[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (e[t] = r);
                          });
                  }
                  return e;
              })({}, e),
          );
}

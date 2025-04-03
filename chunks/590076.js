n.d(t, { Z: () => g });
var r = n(200651),
    l = n(192379),
    i = n(512722),
    a = n.n(i),
    o = n(399606),
    s = n(618158),
    u = n(594174),
    c = n(822183),
    d = n(364125),
    f = n(90753),
    m = n(613050);
function p(e) {
    let { focused: t, channelId: n, streamerId: i, stream: c } = e,
        p = l.useRef(null),
        g = (0, o.e7)([u.default], () => u.default.getCurrentUser());
    a()(null != g, 'user cannot be null'), (0, f.Z)(p, g, i, n);
    let {
        handleClick: E,
        handleMouseDown: h,
        handleMouseEnter: v,
        handleMouseMove: b,
        handleMouseUp: S
    } = (0, d.Z)({
        user: g,
        channelId: n,
        streamerId: i,
        stream: c,
        focused: t,
        canvas: p.current
    });
    return (0, r.jsx)(s.Z, {
        children: (0, r.jsx)('canvas', {
            ref: p,
            onClick: E,
            onMouseDown: h,
            onMouseEnter: v,
            onMouseMove: b,
            onMouseUp: S,
            className: m.sharedCanvas
        })
    });
}
function g(e) {
    let { isSharedCanvasEnabled: t } = c.Z.useExperiment(
        {
            guildId: e.guildId,
            location: 'd0de1c_1'
        },
        { autoTrackExposure: !0 }
    );
    return !t || e.hasScreenMessage
        ? null
        : (0, r.jsx)(
              p,
              (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                          r = Object.keys(n);
                      'function' == typeof Object.getOwnPropertySymbols &&
                          (r = r.concat(
                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                              })
                          )),
                          r.forEach(function (t) {
                              var r;
                              (r = n[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        })
                                      : (e[t] = r);
                          });
                  }
                  return e;
              })({}, e)
          );
}

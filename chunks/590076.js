n.d(t, { Z: () => E });
var r = n(255367),
    l = n(73800),
    i = n(512722),
    a = n.n(i),
    o = n(399606),
    u = n(618158),
    s = n(594174),
    c = n(822183),
    d = n(364125),
    f = n(90753),
    p = n(613050);
function m(e) {
    let { focused: t, channelId: n, streamerId: i, stream: c } = e,
        m = l.useRef(null),
        E = (0, o.e7)([s.default], () => s.default.getCurrentUser());
    (a()(null != E, 'user cannot be null'), (0, f.Z)(m, E, i, n));
    let {
        handleClick: g,
        handleMouseDown: v,
        handleMouseEnter: h,
        handleMouseMove: S,
        handleMouseUp: b
    } = (0, d.Z)({
        user: E,
        channelId: n,
        streamerId: i,
        stream: c,
        focused: t,
        canvas: m.current
    });
    return (0, r.jsx)(u.Z, {
        children: (0, r.jsx)('canvas', {
            ref: m,
            onClick: g,
            onMouseDown: v,
            onMouseEnter: h,
            onMouseMove: S,
            onMouseUp: b,
            className: p.sharedCanvas
        })
    });
}
function E(e) {
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
              m,
              (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                          r = Object.keys(n);
                      ('function' == typeof Object.getOwnPropertySymbols &&
                          (r = r.concat(
                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                              })
                          )),
                          r.forEach(function (t) {
                              var r;
                              ((r = n[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        })
                                      : (e[t] = r));
                          }));
                  }
                  return e;
              })({}, e)
          );
}

n.d(t, { Z: () => h });
var r = n(200651),
    i = n(192379),
    l = n(512722),
    a = n.n(l),
    o = n(399606),
    s = n(618158),
    c = n(594174),
    u = n(822183),
    d = n(364125),
    f = n(90753),
    m = n(89943);
function p(e) {
    let { focused: t, channelId: n, streamerId: l, stream: u } = e,
        p = i.useRef(null),
        h = (0, o.e7)([c.default], () => c.default.getCurrentUser());
    a()(null != h, 'user cannot be null'), (0, f.Z)(p, h, l, n);
    let {
        handleClick: v,
        handleMouseDown: g,
        handleMouseEnter: b,
        handleMouseMove: y,
        handleMouseUp: E
    } = (0, d.Z)({
        user: h,
        channelId: n,
        streamerId: l,
        stream: u,
        focused: t,
        canvas: p.current
    });
    return (0, r.jsx)(s.Z, {
        children: (0, r.jsx)('canvas', {
            ref: p,
            onClick: v,
            onMouseDown: g,
            onMouseEnter: b,
            onMouseMove: y,
            onMouseUp: E,
            className: m.sharedCanvas
        })
    });
}
function h(e) {
    let { isSharedCanvasEnabled: t } = u.Z.useExperiment(
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

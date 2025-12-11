n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    l = n(512722),
    a = n.n(l),
    o = n(399606),
    c = n(618158),
    s = n(594174),
    u = n(822183),
    d = n(364125),
    f = n(90753),
    p = n(80109);
function b(e) {
    let { focused: t, channelId: n, streamerId: l, stream: u } = e,
        b = i.useRef(null),
        m = (0, o.e7)([s.default], () => s.default.getCurrentUser());
    a()(null != m, "user cannot be null"), (0, f.Z)(b, m, l, n);
    let {
        handleClick: g,
        handleMouseDown: v,
        handleMouseEnter: h,
        handleMouseMove: E,
        handleMouseUp: _,
    } = (0, d.Z)({
        user: m,
        channelId: n,
        streamerId: l,
        stream: u,
        focused: t,
        canvas: b.current,
    });
    return (0, r.jsx)(c.Z, {
        children: (0, r.jsx)("canvas", {
            ref: b,
            onClick: g,
            onMouseDown: v,
            onMouseEnter: h,
            onMouseMove: E,
            onMouseUp: _,
            className: p.sharedCanvas,
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
              b,
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

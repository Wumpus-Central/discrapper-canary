n.d(t, { Z: () => _ });
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
    p = n(806777);
function m(e) {
    let { focused: t, channelId: n, streamerId: l, stream: u } = e,
        m = i.useRef(null),
        _ = (0, o.e7)([s.default], () => s.default.getCurrentUser());
    a()(null != _, "user cannot be null"), (0, f.Z)(m, _, l, n);
    let {
        handleClick: g,
        handleMouseDown: b,
        handleMouseEnter: v,
        handleMouseMove: E,
        handleMouseUp: h,
    } = (0, d.Z)({
        user: _,
        channelId: n,
        streamerId: l,
        stream: u,
        focused: t,
        canvas: m.current,
    });
    return (0, r.jsx)(c.Z, {
        children: (0, r.jsx)("canvas", {
            ref: m,
            onClick: g,
            onMouseDown: b,
            onMouseEnter: v,
            onMouseMove: E,
            onMouseUp: h,
            className: p.sharedCanvas,
        }),
    });
}
function _(e) {
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
              m,
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

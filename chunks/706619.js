n.d(t, { Z: () => o }), n(388685);
var r = n(951288),
    l = n(647438),
    s = n(311308),
    i = n(692547),
    a = n(481060);
function o(e) {
    let t = (0, l.useRef)(null),
        [n, o] = (0, l.useState)(null),
        [c] = (0, l.useState)(() => new s.TimelineDataSeries()),
        u = (0, a.dQu)(i.Z.colors.BACKGROUND_BASE_LOW).hsl(),
        d = (0, a.dQu)(i.Z.colors.TEXT_DEFAULT).hsl(),
        h = (0, a.dQu)(i.Z.colors.BACKGROUND_ACCENT).hsl(),
        f = (0, a.dQu)(i.Z.unsafe_rawColors.BRAND_500).hsl();
    (0, l.useEffect)(() => {
        var e;
        let n = t.current;
        if (null == n) return;
        let r = new s.TimelineGraphView(n, null != (e = window.devicePixelRatio) ? e : 1);
        (r.backgroundColor = u),
            (r.textColor = d),
            (r.gridColor = h),
            (r.timeOptions = { timeStyle: "short" }),
            (r.fontFamily = "gg sans"),
            (r.fontSize = 11),
            c.setColor(f),
            r.addDataSeries(c),
            r.updateEndDate(),
            o(r);
    }, [t, u, f, h, d, c]);
    let g = e.converter,
        p =
            null != g
                ? e.dataPoints.map((e) => {
                      var t, n;
                      return (
                          (t = (function (e) {
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
                          })({}, e)),
                          (n = n = { value: g(e.value) }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r);
                                    }
                                    return n;
                                })(Object(n)).forEach(function (e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                }),
                          t
                      );
                  })
                : e.dataPoints;
    c.setPoints(p), null == n || n.updateEndDate();
    let O = {
        width: e.width,
        height: e.height,
    };
    return (0, r.jsx)(
        "canvas",
        {
            style: O,
            width: e.width,
            height: e.height,
            ref: t,
        },
        "canvas",
    );
}

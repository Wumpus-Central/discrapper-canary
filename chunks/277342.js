r.d(t, {
    q: () => s,
});
var n = r(64700),
    o = r(523875),
    u = r(270737),
    i = r(397927),
    l = r(267102),
    a = r(494783),
    c = r(652215);

function s(e) {
    let t = (0, l.Us)(),
        { activeVoice: r } = (0, a.f)(),
        s = null != r,
        b = e ? "unmute" : "mute",
        p = (0, u.V)(b),
        O = (0, o.L)(b),
        f = s ? p : O,
        y = t === c.BRT.POPOUT ? (s ? (e ? i.Ts3 : i.A4$) : e ? i.z0P : i.cNw) : f.Component;
    return n.useMemo(() => {
        var e, t;
        return (
            (e = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            }),
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = r[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = n);
                        });
                }
                return e;
            })({}, f)),
            (t = t =
                {
                    Component: y,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(t)).forEach(function (r) {
                      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                  }),
            e
        );
    }, [f, y]);
}

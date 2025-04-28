n.d(t, { a: () => o });
var r = n(818083),
    i = n(809362);
let l = (0, r.B)({
    kind: 'user',
    id: '2025-04_gdm_born_this_named',
    label: 'GDM Born This Named',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function o(e, t) {
    var n, r, o, a;
    let s = (0, i.I)(e),
        { enabled: c } = l.useExperiment(
            { location: e },
            ((o = (function (e) {
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
            })({}, t)),
            (a = a =
                {
                    disable: s || (null != (n = null == t ? void 0 : t.disable) && n),
                    autoTrackExposure: null == (r = null == t ? void 0 : t.autoTrackExposure) || r
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(a)).forEach(function (e) {
                      Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e));
                  }),
            o)
        );
    return c;
}

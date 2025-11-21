n.d(t, { Z: () => o }), n(65234), n(111804), n(490233), n(97749), n(388685);
var r = n(948789),
    i = n(972959),
    l = n(313481),
    a = n(981631);
let s = Object.freeze({ tab: l.e5.ALL }),
    o = (0, i.H)((e) => {
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
            })({}, s)),
            (n = n =
                {
                    initializeFromUrl: (t, n) => {
                        let r = new URLSearchParams(t).get(l.tR.TAB);
                        if (r === l.e5.PREVIEW_TOOL && !n) return void e({ tab: l.e5.ALL });
                        null != r && Object.values(l.e5).includes(r) ? e({ tab: r }) : e({ tab: l.e5.ALL });
                    },
                    setTab: (t) => {
                        e({ tab: t });
                        let n = new URLSearchParams();
                        n.set(l.tR.TAB, t);
                        let i = "".concat(a.Z5c.QUEST_HOME_V2, "?").concat(n.toString());
                        (0, r.uL)(i.toString());
                    },
                }),
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
    });

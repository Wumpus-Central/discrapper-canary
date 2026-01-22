n.d(t, { A: () => o }), n(896048), n(680155), n(323874), n(14289), n(35956);
var r = n(877227),
    i = n(839214),
    l = n(890687),
    a = n(652215);
let s = Object.freeze({ tab: l.NC.ALL }),
    o = (0, i.D)((e) => {
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
                        let r = new URLSearchParams(t).get(l.L1.TAB);
                        (r !== l.NC.PREVIEW_TOOL || n) && null != r && Object.values(l.NC).includes(r)
                            ? e({ tab: r })
                            : e({ tab: l.NC.ALL });
                    },
                    setTab: (t) => {
                        e({ tab: t });
                        let n = new URLSearchParams();
                        n.set(l.L1.TAB, t);
                        let i = "".concat(a.BVt.QUEST_HOME_V2, "?").concat(n.toString());
                        (0, r.pX)(i.toString());
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

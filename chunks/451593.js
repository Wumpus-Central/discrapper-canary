n.d(t, { E: () => u });
var r,
    i = n(15729),
    s = n(731965),
    a = n(433517);
function l(e) {
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
}
let o = '__DEBUG_PROFILE_EFFECTS_STORE',
    c = { profileEffects: null !== (r = a.K.get(o)) && void 0 !== r ? r : {} },
    d = (e) => {
        a.K.set(o, e.profileEffects);
    },
    u = (0, i.U)((e) => {
        var t, n;
        return (
            (t = l({}, c)),
            (n = n =
                {
                    upsertConfig: (t) =>
                        (0, s.j)(() => {
                            e((e) => {
                                let n = l({}, e);
                                return (n.profileEffects[t.id] = t), d(n), n;
                            });
                        }),
                    deleteConfig: (t) =>
                        (0, s.j)(() => {
                            e((e) => {
                                let n = l({}, e);
                                return delete n.profileEffects[t], d(n), n;
                            });
                        })
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

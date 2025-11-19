n.d(t, { Z: () => o }), n(388685);
var r = n(473749),
    i = n(442837),
    l = n(594174),
    a = n(149694),
    s = n(268350);
function o(e) {
    let [t, n] = r.useState("loading"),
        o = (0, i.e7)([a.Z], () => a.Z.getStickersByGuildId(e));
    return (r.useEffect(() => {
        let t = new AbortController(),
            r = t.signal;
        return (
            (async () => {
                try {
                    await (0, s.SV)(e, r), n("success"), (t = null);
                } catch (e) {
                    n("error"), (t = null);
                }
            })(),
            () => {
                n("loading"), null == t || t.abort();
            }
        );
    }, [e]),
    "success" === t)
        ? {
              status: t,
              stickers: o.map((e) => {
                  let t = l.default.getUser(e.user_id);
                  if (null != t) {
                      var n, r;
                      return (
                          (n = (function (e) {
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
                          (r = r = { user: t }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r);
                                    }
                                    return n;
                                })(Object(r)).forEach(function (e) {
                                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                }),
                          n
                      );
                  }
                  return e;
              }),
          }
        : { status: t };
}

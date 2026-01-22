n.d(t, { A: () => c }), n(896048);
var r = n(64700),
    i = n(311907),
    l = n(287809),
    s = n(41237),
    a = n(631576);
function c(e) {
    let [t, n] = r.useState("loading"),
        c = (0, i.bG)([s.A], () => s.A.getStickersByGuildId(e));
    return (r.useEffect(() => {
        let t = new AbortController(),
            r = t.signal;
        return (
            (async () => {
                try {
                    await (0, a.oI)(e, r), n("success"), (t = null);
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
              stickers: c.map((e) => {
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

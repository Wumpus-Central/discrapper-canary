n.d(e, { A: () => o });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(430452),
    c = n(985018);
function o(t) {
    return (0, i.bG)([a.A], () => a.A.hasContext(t.id), [t.id])
        ? (0, r.jsx)(l.Drp, {
              id: "ingame-voice",
              label: c.intl.string(c.t["pOul5/"]),
              action: () =>
                  (0, l.mMO)(async () => {
                      let { default: e } = await n.e("96531").then(n.bind(n, 880510));
                      return (n) => {
                          var i, l;
                          return (0, r.jsx)(
                              e,
                              ((i = (function (t) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var n = null != arguments[e] ? arguments[e] : {},
                                          r = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (t) {
                                                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                              }),
                                          )),
                                          r.forEach(function (e) {
                                              var r;
                                              (r = n[e]),
                                                  e in t
                                                      ? Object.defineProperty(t, e, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (t[e] = r);
                                          });
                                  }
                                  return t;
                              })({}, n)),
                              (l = l =
                                  {
                                      mediaEngineContext: t.id,
                                      subtitle: t.name,
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                  : (function (t, e) {
                                        var n = Object.keys(t);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(t);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (t) {
                                        Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(l, t));
                                    }),
                              i),
                          );
                      };
                  }),
          })
        : null;
}

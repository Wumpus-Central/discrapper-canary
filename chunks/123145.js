n.d(t, { Z: () => c });
var a = n(255367);
n(73800);
var r = n(739566),
    i = n(421399),
    o = n(47930);
function c(e) {
    var t, n, c, l;
    let s = (0, r.ZP)(e.message),
        u = (0, o.x)({
            message: e.message,
            channel: e.channel,
            user: null != (n = null == (t = e.message) ? void 0 : t.author) ? n : e.userOverride,
            compact: !!e.compact,
            isRepliedMessage: !!e.isRepliedMessage
        }),
        d = {};
    return (
        null != u && (d[i.a.SYSTEM_TAG] = u),
        (0, a.jsx)(
            i.Z,
            ((c = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (a = a.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        a.forEach(function (t) {
                            var a;
                            ((a = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: a,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = a));
                        }));
                }
                return e;
            })({}, e)),
            (l = l =
                {
                    author: s,
                    decorations: d
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(l))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var a = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, a);
                      }
                      return n;
                  })(Object(l)).forEach(function (e) {
                      Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(l, e));
                  }),
            c)
        )
    );
}

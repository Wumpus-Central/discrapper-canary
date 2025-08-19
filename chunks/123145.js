n.d(t, { Z: () => i });
var s = n(951288);
n(647438);
var a = n(739566),
    r = n(421399),
    l = n(47930);
function i(e) {
    var t, n, i, o;
    let c = (0, a.ZP)(e.message),
        u = (0, l.x)({
            message: e.message,
            channel: e.channel,
            user: null != (n = null == (t = e.message) ? void 0 : t.author) ? n : e.userOverride,
            compact: !!e.compact,
            isRepliedMessage: !!e.isRepliedMessage,
        }),
        m = {};
    return (
        null != u && (m[r.a.SYSTEM_TAG] = u),
        (0, s.jsx)(
            r.Z,
            ((i = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        s = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (s = s.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        s.forEach(function (t) {
                            var s;
                            (s = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: s,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = s);
                        });
                }
                return e;
            })({}, e)),
            (o = o =
                {
                    author: c,
                    decorations: m,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var s = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, s);
                      }
                      return n;
                  })(Object(o)).forEach(function (e) {
                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                  }),
            i),
        )
    );
}

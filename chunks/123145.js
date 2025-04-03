t.d(s, { Z: () => i });
var n = t(200651);
t(192379);
var l = t(739566),
    a = t(421399),
    r = t(47930);
function i(e) {
    var s, t, i, o;
    let c = (0, l.ZP)(e.message),
        u = (0, r.x)({
            message: e.message,
            channel: e.channel,
            user: null != (t = null == (s = e.message) ? void 0 : s.author) ? t : e.userOverride,
            compact: !!e.compact,
            isRepliedMessage: !!e.isRepliedMessage
        }),
        d = {};
    return (
        null != u && (d[a.a.SYSTEM_TAG] = u),
        (0, n.jsx)(
            a.Z,
            ((i = (function (e) {
                for (var s = 1; s < arguments.length; s++) {
                    var t = null != arguments[s] ? arguments[s] : {},
                        n = Object.keys(t);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            })
                        )),
                        n.forEach(function (s) {
                            var n;
                            (n = t[s]),
                                s in e
                                    ? Object.defineProperty(e, s, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[s] = n);
                        });
                }
                return e;
            })({}, e)),
            (o = o =
                {
                    author: c,
                    decorations: d
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                : (function (e, s) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, n);
                      }
                      return t;
                  })(Object(o)).forEach(function (e) {
                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                  }),
            i)
        )
    );
}

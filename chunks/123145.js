s.d(t, { Z: () => r });
var n = s(255367);
s(73800);
var l = s(739566),
    a = s(421399),
    i = s(47930);
function r(e) {
    var t, s, r, o;
    let c = (0, l.ZP)(e.message),
        u = (0, i.x)({
            message: e.message,
            channel: e.channel,
            user: null != (s = null == (t = e.message) ? void 0 : t.author) ? s : e.userOverride,
            compact: !!e.compact,
            isRepliedMessage: !!e.isRepliedMessage
        }),
        d = {};
    return (
        null != u && (d[a.a.SYSTEM_TAG] = u),
        (0, n.jsx)(
            a.Z,
            ((r = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(s);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(s).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(s, e).enumerable;
                            })
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = s[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = n);
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
                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
                : (function (e, t) {
                      var s = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          s.push.apply(s, n);
                      }
                      return s;
                  })(Object(o)).forEach(function (e) {
                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
                  }),
            r)
        )
    );
}

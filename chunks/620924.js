n.d(t, { c: () => s }), n(913527);
var r = n(442837),
    i = n(91159),
    l = n(306680),
    a = n(709054),
    o = n(868807);
function s(e) {
    let t = (0, o.a)(e),
        n = (function (e) {
            let { lastMessageId: t, message: n, loaded: r } = e;
            return r && null != n ? a.default.extractTimestamp(n.id) : null != t ? a.default.extractTimestamp(t) : null;
        })(
            (function (e) {
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
            })({ lastMessageId: (0, r.e7)([l.ZP], () => l.ZP.lastMessageId(e.id)) }, t)
        );
    return null == n ? '' : (0, i.Ye)(n);
}

n.d(e, { Z: () => i });
var r = n(200651);
n(192379);
var a = n(481060),
    o = n(406877);
function i(t) {
    var e,
        n,
        { guildId: i, productId: l, attachmentId: c } = t,
        s = (function (t, e) {
            if (null == t) return {};
            var n,
                r,
                a = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        r,
                        a = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) (n = o[r]), e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                for (r = 0; r < o.length; r++) (n = o[r]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n]);
            }
            return a;
        })(t, ['guildId', 'productId', 'attachmentId']);
    let { isLoading: u, downloadAttachment: d } = (0, o.Z)(i, l);
    return (0, r.jsx)(
        a.zxk,
        ((e = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                        })
                    )),
                    r.forEach(function (e) {
                        var r;
                        (r = n[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (t[e] = r);
                    });
            }
            return t;
        })({}, s)),
        (n = n =
            {
                submitting: u,
                onClick: function () {
                    d(c);
                }
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e)
    );
}

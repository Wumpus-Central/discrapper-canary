function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function i(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function r(e, t) {
    var n, r, s, a, o, u, d;
    let c = i(
        l(
            i(
                l(
                    {
                        max_uses: null != (s = e.maxUses) ? s : null,
                        max_age: null != (a = e.maxAge) ? a : null,
                        temporary: null != (o = e.temporary) ? o : null
                    },
                    (null == (n = e.targetUser) ? void 0 : n.id) == null ? {} : { target_user_id: e.targetUser.id }
                ),
                { target_type: null != (u = e.targetType) ? u : null }
            ),
            (null == (r = e.targetApplication) ? void 0 : r.id) == null ? {} : { target_application_id: e.targetApplication.id }
        ),
        { flags: null != (d = e.flags) ? d : null }
    );
    for (let e of Object.keys(t)) if (t[e] !== c[e]) return !1;
    return !0;
}
n.d(t, { m: () => r }), n(997841), n(388685);

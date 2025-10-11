function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
function a(e, t) {
    var n, a, r, s, o, u, c;
    let d = i(
        l(
            i(
                l(
                    {
                        max_uses: null != (r = e.maxUses) ? r : null,
                        max_age: null != (s = e.maxAge) ? s : null,
                        temporary: null != (o = e.temporary) ? o : null,
                    },
                    (null == (n = e.targetUser) ? void 0 : n.id) == null ? {} : { target_user_id: e.targetUser.id },
                ),
                { target_type: null != (u = e.targetType) ? u : null },
            ),
            (null == (a = e.targetApplication) ? void 0 : a.id) == null
                ? {}
                : { target_application_id: e.targetApplication.id },
        ),
        { flags: null != (c = e.flags) ? c : null },
    );
    for (let e of Object.keys(t)) if (t[e] !== d[e]) return !1;
    return !0;
}
n.d(t, { m: () => a }), n(997841), n(388685);

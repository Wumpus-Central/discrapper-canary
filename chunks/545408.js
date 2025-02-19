n.d(t, { q: () => u }), n(192379);
var r = n(100527),
    i = n(367907),
    o = n(626135),
    a = n(50493),
    s = n(981631);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.Z.MEMBER_SAFETY_PAGE,
        u = c(
            {
                guild_id: e,
                target_user_id: t,
                subpanel_name: a.Y[n],
                location: l
            },
            (0, i.hH)(e)
        );
    return o.default.track(s.rMx.GUILD_MOD_VIEW_OPENED, u);
}

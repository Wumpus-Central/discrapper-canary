n.d(t, { Z: () => f });
var r = n(200651),
    i = n(192379),
    o = n(481060),
    a = n(372900);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = u(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function d(e, t, n, r) {
    return e.getAvatarURL(r, t, n);
}
let f = i.memo(function (e) {
    var { user: t, guildId: n, size: s = o.EFr.SIZE_32, animate: u = !1, 'aria-hidden': f = !1 } = e,
        _ = c(e, ['user', 'guildId', 'size', 'animate', 'aria-hidden']);
    let p = i.useContext(a.Z);
    return (0, r.jsx)(
        o.qEK,
        l(
            {
                src: d(t, (0, o.pxk)(s), u, null != n ? n : p),
                size: s,
                'aria-label': f ? void 0 : t.username,
                'aria-hidden': f
            },
            _
        )
    );
});

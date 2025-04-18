n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var l = n(153867),
    i = n(468026),
    o = n(394059),
    u = n(388032);
function a(e) {
    var { type: t, onConfirm: n } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['type', 'onConfirm']);
    let c = t === o.K.STREAM ? u.NW.string(u.t['/lFMWl']) : u.NW.string(u.t.xzxhZW),
        d = t === o.K.STREAM ? u.NW.string(u.t.xaOX7e) : u.NW.string(u.t.oU1p9P);
    return (0, r.jsx)(
        i.default,
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
        })(
            {
                confirmText: u.NW.string(u.t['cY+Ooa']),
                secondaryConfirmText: u.NW.string(u.t['JdIQ/f']),
                title: c,
                cancelText: u.NW.string(u.t['ETE/oK']),
                onConfirm: n,
                onConfirmSecondary: () => {
                    l.ZP.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 }), n();
                },
                body: d
            },
            a
        )
    );
}

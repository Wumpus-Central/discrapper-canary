n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(153867),
    o = n(468026),
    l = n(394059),
    c = n(388032);
function a(e) {
    var { type: t, onConfirm: n } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['type', 'onConfirm']);
    let u = t === l.K.STREAM ? c.NW.string(c.t['/lFMWl']) : c.NW.string(c.t.xzxhZW),
        s = t === l.K.STREAM ? c.NW.string(c.t.xaOX7e) : c.NW.string(c.t.oU1p9P);
    return (0, r.jsx)(
        o.default,
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
                confirmText: c.NW.string(c.t['cY+Ooa']),
                secondaryConfirmText: c.NW.string(c.t['JdIQ/f']),
                title: u,
                cancelText: c.NW.string(c.t['ETE/oK']),
                onConfirm: n,
                onConfirmSecondary: () => {
                    i.ZP.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 }), n();
                },
                body: s
            },
            a
        )
    );
}

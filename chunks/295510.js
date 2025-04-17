n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(153867),
    l = n(468026),
    o = n(394059),
    a = n(388032);
function u(e) {
    var { type: t, onConfirm: n } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['type', 'onConfirm']);
    let c = t === o.K.STREAM ? a.NW.string(a.t['/lFMWl']) : a.NW.string(a.t.xzxhZW),
        s = t === o.K.STREAM ? a.NW.string(a.t.xaOX7e) : a.NW.string(a.t.oU1p9P);
    return (0, r.jsx)(
        l.default,
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
                confirmText: a.NW.string(a.t['cY+Ooa']),
                secondaryConfirmText: a.NW.string(a.t['JdIQ/f']),
                title: c,
                cancelText: a.NW.string(a.t['ETE/oK']),
                onConfirm: n,
                onConfirmSecondary: () => {
                    i.ZP.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 }), n();
                },
                body: s
            },
            u
        )
    );
}

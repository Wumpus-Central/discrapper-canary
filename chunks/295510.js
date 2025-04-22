n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(153867),
    l = n(468026),
    a = n(394059),
    o = n(388032);
function u(e) {
    var { type: t, onConfirm: n } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++) (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['type', 'onConfirm']);
    let d = t === a.K.STREAM ? o.intl.string(o.t['/lFMWl']) : o.intl.string(o.t.xzxhZW),
        s = t === a.K.STREAM ? o.intl.string(o.t.xaOX7e) : o.intl.string(o.t.oU1p9P);
    return (0, i.jsx)(
        l.default,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    i.forEach(function (t) {
                        var i;
                        (i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = i);
                    });
            }
            return e;
        })(
            {
                confirmText: o.intl.string(o.t['cY+Ooa']),
                secondaryConfirmText: o.intl.string(o.t['JdIQ/f']),
                title: d,
                cancelText: o.intl.string(o.t['ETE/oK']),
                onConfirm: n,
                onConfirmSecondary: () => {
                    r.ZP.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 }), n();
                },
                body: s
            },
            u
        )
    );
}

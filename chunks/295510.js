t.d(n, { Z: () => s });
var r = t(200651);
t(192379);
var i = t(153867),
    l = t(468026),
    o = t(394059),
    a = t(388032);
function s(e) {
    var { type: n, onConfirm: t } = e,
        s = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                i = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (t = l[r]), n.indexOf(t) >= 0 || (i[t] = e[t]);
                    return i;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (t = l[r]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
            }
            return i;
        })(e, ['type', 'onConfirm']);
    let c = n === o.K.STREAM ? a.NW.string(a.t['/lFMWl']) : a.NW.string(a.t.xzxhZW),
        u = n === o.K.STREAM ? a.NW.string(a.t.xaOX7e) : a.NW.string(a.t.oU1p9P);
    return (0, r.jsx)(
        l.default,
        (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    r = Object.keys(t);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })
                    )),
                    r.forEach(function (n) {
                        var r;
                        (r = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[n] = r);
                    });
            }
            return e;
        })(
            {
                confirmText: a.NW.string(a.t['cY+Ooa']),
                secondaryConfirmText: a.NW.string(a.t['JdIQ/f']),
                title: c,
                cancelText: a.NW.string(a.t['ETE/oK']),
                onConfirm: t,
                onConfirmSecondary: () => {
                    i.ZP.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 }), t();
                },
                body: u
            },
            s
        )
    );
}

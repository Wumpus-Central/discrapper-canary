n.d(t, { Z: () => f });
var r = n(255367);
n(73800);
var i = n(153867),
    o = n(468026),
    a = n(394059),
    s = n(388032);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = d(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function f(e) {
    var { type: t, onConfirm: n } = e,
        l = u(e, ["type", "onConfirm"]);
    let d = () => {
            i.ZP.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 });
        },
        f = t === a.K.STREAM ? s.intl.string(s.t["/lFMWl"]) : s.intl.string(s.t.xzxhZW),
        _ = t === a.K.STREAM ? s.intl.string(s.t.xaOX7e) : s.intl.string(s.t.oU1p9P);
    return (0, r.jsx)(
        o.default,
        c(
            {
                confirmText: s.intl.string(s.t["cY+Ooa"]),
                secondaryConfirmText: s.intl.string(s.t["JdIQ/f"]),
                title: f,
                cancelText: s.intl.string(s.t["ETE/oK"]),
                onConfirm: n,
                onConfirmSecondary: d,
                body: _,
            },
            l,
        ),
    );
}

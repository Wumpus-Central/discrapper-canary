n.d(t, { Z: () => _ });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(922482),
    s = n(979651),
    l = n(388032);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = f(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let _ = (e) => {
    var { guildId: t, channelId: n, variant: c = "active", size: f = "sm", onAction: _ } = e,
        p = d(e, ["guildId", "channelId", "variant", "size", "onAction"]);
    let h = (0, i.e7)([s.Z], () => s.Z.isInChannel(n), [n]),
        m = () => {
            null == _ || _(), o.AC(t, n);
        };
    return (0, r.jsx)(
        a.Button,
        u(
            {
                variant: c,
                size: f,
                text: l.intl.string(l.t.ZYO5OK),
                disabled: h,
                onClick: m,
                fullWidth: !0,
            },
            p,
        ),
    );
};

n.d(t, { Z: () => _ });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(710845),
    o = n(620662),
    s = n(981631),
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
function _(e) {
    var { activity: t, user: n, variant: c = "secondary", onAction: f } = e,
        _ = d(e, ["activity", "user", "variant", "onAction"]);
    if (!(0, o.Z)(t, s.xjy.INSTANCE)) return null;
    let p = () => {
        null == f || f(), new a.Z("UserActivityActions").log("notify", n.id, t);
    };
    return (0, r.jsx)(
        i.Button,
        u(
            {
                text: l.intl.string(l.t.vwl1PK),
                variant: c,
                size: "sm",
                onClick: p,
                fullWidth: !0,
            },
            _,
        ),
    );
}

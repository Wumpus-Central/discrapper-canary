n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(655922),
    o = n(420660),
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function f(e) {
    var { activity: t, onAction: n, variant: l = "secondary", size: d = "sm" } = e,
        f = u(e, ["activity", "onAction", "variant", "size"]);
    if (!(0, o.Z)(t)) return null;
    let p = () => {
        null == n || n();
        let e = (0, a.Z)(t);
        return window.open(null != e ? e : void 0);
    };
    return (0, r.jsx)(
        i.Button,
        c(
            {
                variant: l,
                size: d,
                text: s.intl.string(s.t.I6JG46),
                onClick: p,
                fullWidth: !0,
            },
            f,
        ),
    );
}

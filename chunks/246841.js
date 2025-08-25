n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(829820);
function o(e, t, n) {
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
function s(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = c(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function u(e) {
    var { activity: t, user: n, source: o, size: c = "sm", variant: u = "secondary", fullWidth: d, onAction: f } = e,
        _ = l(e, ["activity", "user", "source", "size", "variant", "fullWidth", "onAction"]);
    let { label: p, tooltip: h, loading: m, disabled: g, onClick: E } = (0, a.Ih)(t, n, o),
        b = () => {
            null == f || f(), E();
        };
    return (0, r.jsx)(i.ua7, {
        text: h,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n } = e;
            return (0, r.jsx)(
                i.zxk,
                s(
                    {
                        variant: u,
                        size: c,
                        icon: i.bb,
                        text: p,
                        fullWidth: d,
                        onClick: b,
                        onMouseEnter: t,
                        onMouseLeave: n,
                        disabled: g,
                        loading: m,
                    },
                    _,
                ),
            );
        },
    });
}

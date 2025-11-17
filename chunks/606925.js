n.d(t, { Z: () => _ });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(231757),
    s = n(553795),
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
    var { platform: t, variant: n = "secondary", size: c = "sm", onAction: f, icon: _ } = e,
        p = d(e, ["platform", "variant", "size", "onAction", "icon"]);
    if ((0, i.e7)([s.Z], () => s.Z.getAccounts().some((e) => e.type === t.type))) return null;
    let h = () => {
        null == f || f(),
            (0, o.Z)({
                platformType: t.type,
                location: "Activity Action",
            });
    };
    return (0, r.jsx)(
        a.Button,
        u(
            {
                onClick: h,
                variant: n,
                size: c,
                icon: _,
                text: l.intl.format(l.t.XWSHTb, { platform: t.name }),
                fullWidth: !0,
            },
            p,
        ),
    );
}

n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(28664),
    a = n(481060),
    o = n(103450);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = u(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function d(e) {
    var {
            activity: t,
            embeddedActivity: n,
            user: s,
            onAction: u,
            location: d,
            variant: f = "secondary",
            size: p = "sm",
        } = e,
        _ = c(e, ["activity", "embeddedActivity", "user", "onAction", "location", "variant", "size"]);
    let m = (0, o.e)({
        activity: null != t ? t : void 0,
        embeddedActivity: n,
        user: s,
        onGameJoin: u,
        location: d,
    });
    if (null == m) return null;
    let { isJoining: h, handleJoinRequest: g, buttonCTA: E, tooltip: b, isEnabled: y } = m;
    return (0, r.jsx)(
        i.u,
        {
            text: b,
            children: (0, r.jsx)(
                a.Button,
                l(
                    {
                        variant: f,
                        size: p,
                        text: E,
                        onClick: g,
                        disabled: !y,
                        loading: h,
                        fullWidth: !0,
                    },
                    _,
                ),
            ),
        },
        "join",
    );
}

n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(990078),
    a = n(397927),
    s = n(594262);

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
                o(e, t, n[t]);
            });
    }
    return e;
}

function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = u(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function d(e) {
    let {
            activity: t,
            embeddedActivity: n,
            user: o,
            onAction: u,
            location: d,
            variant: f = "secondary",
            size: p = "sm",
        } = e,
        _ = c(e, ["activity", "embeddedActivity", "user", "onAction", "location", "variant", "size"]),
        h = (0, s.l)({
            activity: null != t ? t : void 0,
            embeddedActivity: n,
            user: o,
            onGameJoin: u,
            location: d,
        });
    if (null == h) return null;
    let { isJoining: m, handleJoinRequest: g, buttonCTA: E, tooltip: b, isEnabled: y } = h;
    return (0, r.jsx)(
        i.m,
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
                        loading: m,
                        fullWidth: !0,
                    },
                    _,
                ),
            ),
        },
        "join",
    );
}

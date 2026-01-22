n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var i = n(990078),
    a = n(397927),
    s = n(562153),
    o = n(353411);

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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = d(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function f(e) {
    let {
            activity: t,
            user: n,
            channelId: l,
            guildId: d,
            source: f,
            size: p = "sm",
            variant: _ = "secondary",
            onAction: h,
        } = e,
        m = u(e, ["activity", "user", "channelId", "guildId", "source", "size", "variant", "onAction"]),
        { tooltip: g, loading: E, disabled: b, onClick: y } = (0, o.J$)(t, n, f, s.Ay.getNickname(d, l, n)),
        O = () => {
            null == h || h(), y();
        };
    return (0, r.jsx)(i.m, {
        text: g,
        children: (0, r.jsx)(
            a.K0,
            c(
                {
                    icon: a.J2m,
                    size: p,
                    variant: _,
                    onClick: O,
                    disabled: b,
                    loading: E,
                    "aria-label": null != g ? g : t.name,
                },
                m,
            ),
        ),
    });
}

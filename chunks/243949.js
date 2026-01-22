n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(688810),
    s = n(267102),
    o = n(183555),
    l = n(657331),
    c = n(652215),
    u = n(985018);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
    if (((a = _(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function h(e) {
    let { label: t, onAction: n, icon: d } = e,
        _ = p(e, ["label", "onAction", "icon"]),
        { analyticsLocations: h } = (0, a.Ay)(),
        { context: m } = (0, o.NJ)(),
        g = (0, s.aL)(),
        E = (0, s.Us)();
    return (0, r.jsx)(i.Drp, {
        id: "user-profile",
        label: null != t ? t : u.intl.string(u.t.LYju5J),
        action: () => {
            null == n || n(),
                (0, l.openUserProfileModal)(
                    f(
                        {
                            sourceAnalyticsLocations: h,
                            appContext: E,
                        },
                        m,
                        _,
                    ),
                ),
                g.dispatch(c.jej.POPOUT_CLOSE);
        },
        icon: d,
    });
}

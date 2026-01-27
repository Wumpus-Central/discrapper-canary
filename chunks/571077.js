n.d(t, {
    A: () => m,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    o = n(658575),
    s = n(123791),
    l = n(622543),
    c = n(993401),
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
    let { user: t, onClick: n } = e,
        i = p(e, ["user", "onClick"]);
    return (
        (0, s.C)(t.id),
        (0, r.jsx)(
            c.FD,
            f(
                {
                    action: "PRESS_APP_STOREFRONT",
                    icon: a.U1X,
                    text: u.intl.string(u.t.V7j5aZ),
                    onClick: n,
                    variant: "primary",
                },
                i,
            ),
        )
    );
}

function m(e) {
    var t;
    let { user: s, guildId: c } = e,
        u = p(e, ["user", "guildId"]),
        d = (0, i.bG)([l.A], () => {
            var e;
            return null == (e = l.A.getUserProfile(s.id)) ? void 0 : e.application;
        }),
        _ = (0, o.G)(null != (t = null == d ? void 0 : d.id) ? t : "");
    if (null == d || !_) return null;
    let m = () => {
        (0, a.mMO)(async () => {
            let { default: e } = await Promise.all([n.e("13088"), n.e("33563"), n.e("92201")]).then(n.bind(n, 719847));
            return (t) =>
                (0, r.jsx)(
                    e,
                    f(
                        {
                            appId: d.id,
                            guildId: c,
                        },
                        t,
                    ),
                );
        });
    };
    return (0, r.jsx)(
        h,
        f(
            {
                user: s,
                guildId: c,
                onClick: m,
            },
            u,
        ),
    );
}

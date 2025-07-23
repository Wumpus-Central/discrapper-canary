n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(755721),
    o = n(481060),
    s = n(970321),
    l = n(283836),
    c = n(621853),
    u = n(475413),
    d = n(388032);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            }));
    }
    return e;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function m(e) {
    var { user: t, onClick: n } = e,
        i = p(e, ['user', 'onClick']);
    return (
        (0, l.q)(t.id),
        (0, r.jsx)(
            u.tG,
            f(
                {
                    action: 'PRESS_APP_STOREFRONT',
                    icon: o.EOn,
                    text: d.intl.string(d.t.V7j5aW),
                    color: a.Tt.BRAND,
                    themeColor: 'none',
                    onClick: n
                },
                i
            )
        )
    );
}
function g(e) {
    var t,
        { user: a, guildId: l } = e,
        u = p(e, ['user', 'guildId']);
    let d = (0, i.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getUserProfile(a.id)) ? void 0 : e.application;
        }),
        _ = (0, s.R)(null != (t = null == d ? void 0 : d.id) ? t : '');
    if (null == d || !_) return null;
    let h = () => {
        (0, o.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e('74891'), n.e('77803'), n.e('17883')]).then(n.bind(n, 7225));
            return (t) =>
                (0, r.jsx)(
                    e,
                    f(
                        {
                            appId: d.id,
                            guildId: l
                        },
                        t
                    )
                );
        });
    };
    return (0, r.jsx)(
        m,
        f(
            {
                user: a,
                guildId: l,
                onClick: h
            },
            u
        )
    );
}

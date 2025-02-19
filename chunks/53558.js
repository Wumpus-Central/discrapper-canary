n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(970321),
    s = n(283836),
    l = n(621853),
    c = n(475413),
    u = n(388032);
function d(e, t, n) {
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function h(e) {
    var { user: t, onClick: n } = e,
        i = p(e, ['user', 'onClick']);
    return (
        (0, s.q)(t.id),
        (0, r.jsx)(
            c.tG,
            f(
                {
                    action: 'PRESS_APP_STOREFRONT',
                    icon: o.EOn,
                    text: u.NW.string(u.t.V7j5aW),
                    color: o.Ttl.BRAND,
                    themeColor: 'none',
                    onClick: n
                },
                i
            )
        )
    );
}
function m(e) {
    var t,
        { user: s, guildId: c } = e,
        u = p(e, ['user', 'guildId']);
    let d = (0, i.e7)([l.Z], () => {
            var e;
            return null === (e = l.Z.getUserProfile(s.id)) || void 0 === e ? void 0 : e.application;
        }),
        _ = (0, a.R)(null !== (t = null == d ? void 0 : d.id) && void 0 !== t ? t : '');
    if (null == d || !_) return null;
    let m = () => {
        (0, o.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e('66711'), n.e('77803'), n.e('17079')]).then(n.bind(n, 7225));
            return (t) =>
                (0, r.jsx)(
                    e,
                    f(
                        {
                            appId: d.id,
                            guildId: c
                        },
                        t
                    )
                );
        });
    };
    return (0, r.jsx)(
        h,
        f(
            {
                user: s,
                guildId: c,
                onClick: m
            },
            u
        )
    );
}

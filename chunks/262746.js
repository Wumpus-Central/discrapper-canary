n.d(t, { Z: () => y }), n(388685), n(457542);
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(755721),
    s = n(481060),
    l = n(749210),
    c = n(493773),
    u = n(946273),
    d = n(496675),
    f = n(993706),
    _ = n(796263),
    p = n(130883),
    h = n(388032);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    let { channel: t, user: m, guild: E } = e,
        y = (0, o.e7)([f.Z], () => null != m && f.Z.isUserBanned(m.id)),
        O = null != m && null == y,
        [v, I] = i.useState(O),
        T = (0, o.e7)([d.Z], () => null != m && null != E && (0, u.lD)(m, E, [d.Z]));
    if (
        ((0, c.ZP)(() => {
            O && l.Z.searchGuildBans(t.guild_id, void 0, [null == m ? void 0 : m.id]).finally(() => I(!1));
        }),
        !T)
    )
        return null;
    let S = () => {
            null != m &&
                (0, s.ZDy)(async () => {
                    let { default: e } = await n.e("4114").then(n.bind(n, 98746));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            b(g({}, n), {
                                guildId: t.guild_id,
                                user: m,
                                modReportId: t.id,
                            }),
                        );
                });
        },
        A = !0 === y ? h.intl.string(p.default.dpfwQ0) : h.intl.string(p.default.ASv23d),
        N = "ban-user-".concat(null == m ? void 0 : m.id);
    return (0, r.jsx)(
        _.Z,
        {
            text: A,
            icon: s.pgN,
            onClick: S,
            disabled: !0 === y || v,
            submitting: v,
            color: a.zx.Colors.RED,
        },
        N,
    );
}

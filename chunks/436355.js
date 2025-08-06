n.d(t, { Z: () => m });
var r = n(255367),
    i = n(442837),
    o = n(481060),
    a = n(946273),
    s = n(271383),
    l = n(496675),
    c = n(796263),
    u = n(130883),
    d = n(388032);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            }));
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    let { channel: t, user: f, guild: p } = e,
        m = (0, i.e7)([l.Z], () => null != f && null != p && (0, a.nX)(f, p, [l.Z])),
        g = (0, i.e7)([s.ZP], () => null == f || null == s.ZP.getMember(t.guild_id, f.id));
    if (!m) return null;
    let E = () => {
            null != f &&
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('36760').then(n.bind(n, 854360));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            h(_({}, n), {
                                guildId: t.guild_id,
                                user: f,
                                modReportId: t.id
                            })
                        );
                });
        },
        b = g ? d.intl.string(u.default.Ux67nZ) : d.intl.string(u.default['snp/lJ']),
        y = 'kick-user-'.concat(null == f ? void 0 : f.id);
    return (0, r.jsx)(
        c.Z,
        {
            text: b,
            icon: o.I9k,
            onClick: E,
            disabled: g
        },
        y
    );
}

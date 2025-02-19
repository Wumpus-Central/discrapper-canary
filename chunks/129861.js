n.d(t, { Z: () => O });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(385499),
    c = n(813549),
    u = n(246946),
    d = n(51144),
    f = n(388032),
    p = n(987596);
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
function h(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function b(e) {
    return e.isSystemUser() ? c.J.SYSTEM_DM : e.isClyde() ? c.J.AI : e.bot ? c.J.BOT : null;
}
let y = (e) => {
        let { primary: t, secondary: n, botType: i, botVerified: a, discriminatorClass: c, className: u, usernameClass: d, color: _, botClass: m, showStreamerModeTooltip: E } = e;
        return (0, r.jsxs)('div', {
            className: o()(p.info, u),
            children: [
                (0, r.jsx)(s.ua7, {
                    text: f.NW.string(f.t.Br1ls7),
                    shouldShow: E,
                    'aria-label': !!E && void 0,
                    children: (e) =>
                        (0, r.jsx)(
                            'span',
                            g(h({}, e), {
                                className: o()(p.__invalid_username, d),
                                style: null != _ ? { color: _ } : void 0,
                                children: t
                            })
                        )
                }),
                null != n
                    ? (0, r.jsx)('span', {
                          className: o()(p.infoSpacing, c),
                          children: n
                      })
                    : void 0,
                null != i &&
                    (0, r.jsx)(l.Z, {
                        type: i,
                        className: o()(p.infoSpacing, m),
                        verified: a
                    })
            ]
        });
    },
    O = (e) => {
        var { user: t, nick: n, forceUsername: i, showAccountIdentifier: o, overrideDiscriminator: s, forcePomelo: l, hideBotTag: f = !1, hideDiscriminator: p = !1 } = e,
            _ = E(e, ['user', 'nick', 'forceUsername', 'showAccountIdentifier', 'overrideDiscriminator', 'forcePomelo', 'hideBotTag', 'hideDiscriminator']);
        let m = (0, a.e7)([u.Z], () => u.Z.hidePersonalInformation),
            g = m || p || t.isNonUserBot(),
            v = t.toString(),
            O = f ? null : b(t),
            S = t.isVerifiedBot(),
            I = d.ZP.getName(t),
            T = i ? v : null != n ? n : I,
            N = t.isPomelo() || l;
        if (N || T !== v) {
            let e = T === v && N && i ? d.ZP.getUserTag(t, { forcePomelo: l }) : T,
                n = o && e !== '@'.concat(v) ? d.ZP.getUserTag(t) : void 0;
            return (0, r.jsx)(
                y,
                h(
                    {
                        primary: e,
                        secondary: n,
                        botType: O,
                        botVerified: S,
                        showStreamerModeTooltip: m && d.ZP.isNameConcealed(e)
                    },
                    _
                )
            );
        }
        return (0, r.jsx)(
            c.Z,
            h(
                {
                    name: T,
                    botType: O,
                    botVerified: S,
                    discriminator: g || T !== v ? null : null != s ? s : t.discriminator
                },
                _
            )
        );
    };

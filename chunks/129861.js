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
    _ = n(350651);
function p(e, t, n) {
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
                p(e, t, n[t]);
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
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function y(e) {
    return e.isSystemUser() ? c.J.SYSTEM_DM : e.isClyde() ? c.J.AI : e.bot ? c.J.BOT : null;
}
let v = (e) => {
        let { primary: t, secondary: n, botType: i, botVerified: a, discriminatorClass: c, className: u, usernameClass: d, color: p, botClass: m, showStreamerModeTooltip: E } = e;
        return (0, r.jsxs)('div', {
            className: o()(_.info, u),
            children: [
                (0, r.jsx)(s.ua7, {
                    text: f.NW.string(f.t.Br1ls7),
                    shouldShow: E,
                    'aria-label': !!E && void 0,
                    children: (e) =>
                        (0, r.jsx)(
                            'span',
                            g(h({}, e), {
                                className: o()(_.__invalid_username, d),
                                style: null != p ? { color: p } : void 0,
                                children: t
                            })
                        )
                }),
                null != n
                    ? (0, r.jsx)('span', {
                          className: o()(_.infoSpacing, c),
                          children: n
                      })
                    : void 0,
                null != i &&
                    (0, r.jsx)(l.Z, {
                        type: i,
                        className: o()(_.infoSpacing, m),
                        verified: a
                    })
            ]
        });
    },
    O = (e) => {
        var { user: t, nick: n, forceUsername: i, showAccountIdentifier: o, overrideDiscriminator: s, forcePomelo: l, hideBotTag: f = !1, hideDiscriminator: _ = !1 } = e,
            p = E(e, ['user', 'nick', 'forceUsername', 'showAccountIdentifier', 'overrideDiscriminator', 'forcePomelo', 'hideBotTag', 'hideDiscriminator']);
        let m = (0, a.e7)([u.Z], () => u.Z.hidePersonalInformation),
            g = m || _ || t.isNonUserBot(),
            b = t.toString(),
            O = f ? null : y(t),
            I = t.isVerifiedBot(),
            S = d.ZP.getName(t),
            T = i ? b : null != n ? n : S,
            N = t.isPomelo() || l;
        if (N || T !== b) {
            let e = T === b && N && i ? d.ZP.getUserTag(t, { forcePomelo: l }) : T,
                n = o && e !== '@'.concat(b) ? d.ZP.getUserTag(t) : void 0;
            return (0, r.jsx)(
                v,
                h(
                    {
                        primary: e,
                        secondary: n,
                        botType: O,
                        botVerified: I,
                        showStreamerModeTooltip: m && d.ZP.isNameConcealed(e)
                    },
                    p
                )
            );
        }
        return (0, r.jsx)(
            c.Z,
            h(
                {
                    name: T,
                    botType: O,
                    botVerified: I,
                    discriminator: g || T !== b ? null : null != s ? s : t.discriminator
                },
                p
            )
        );
    };

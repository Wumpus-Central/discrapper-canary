n.d(t, { Z: () => I });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(385499),
    c = n(892567),
    u = n(813549),
    d = n(246946),
    _ = n(51144),
    f = n(388032),
    p = n(350651);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            }));
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function O(e) {
    return e.isSystemUser() ? u.J.SYSTEM_DM : e.bot ? u.J.BOT : null;
}
let v = (e) => {
        let { primary: t, secondary: n, botType: i, botVerified: o, discriminatorClass: u, className: d, usernameClass: _, botClass: h, showStreamerModeTooltip: g, displayNameStyles: b } = e;
        return (0, r.jsxs)('div', {
            className: a()(p.info, d),
            children: [
                (0, r.jsx)(s.ua7, {
                    text: f.intl.string(f.t.Br1ls7),
                    shouldShow: g,
                    'aria-label': !!g && void 0,
                    children: (e) =>
                        (0, r.jsx)(
                            'span',
                            E(m({}, e), {
                                className: a()(p.__invalid_username, _),
                                children:
                                    null != b
                                        ? (0, r.jsx)(c.Z, {
                                              userName: t,
                                              displayNameStyles: b
                                          })
                                        : t
                            })
                        )
                }),
                null != n
                    ? (0, r.jsx)('span', {
                          className: a()(p.infoSpacing, u),
                          children: n
                      })
                    : void 0,
                null != i &&
                    (0, r.jsx)(l.Z, {
                        type: i,
                        className: a()(p.infoSpacing, h),
                        verified: o
                    })
            ]
        });
    },
    I = (e) => {
        var { user: t, nick: n, forceUsername: i, showAccountIdentifier: a, overrideDiscriminator: s, forcePomelo: l, hideBotTag: c = !1, hideDiscriminator: f = !1 } = e,
            p = b(e, ['user', 'nick', 'forceUsername', 'showAccountIdentifier', 'overrideDiscriminator', 'forcePomelo', 'hideBotTag', 'hideDiscriminator']);
        let h = (0, o.e7)([d.Z], () => d.Z.hidePersonalInformation),
            g = h || f || t.isNonUserBot(),
            E = t.toString(),
            y = c ? null : O(t),
            I = t.isVerifiedBot(),
            T = _.ZP.getName(t),
            S = i ? E : null != n ? n : T,
            A = t.hasUniqueUsername() || l;
        if (A || S !== E) {
            let e = S === E && A && i ? _.ZP.getUserTag(t, { forcePomelo: l }) : S,
                n = a && e !== '@'.concat(E) ? _.ZP.getUserTag(t) : void 0;
            return (0, r.jsx)(
                v,
                m(
                    {
                        primary: e,
                        secondary: n,
                        botType: y,
                        botVerified: I,
                        showStreamerModeTooltip: h && _.ZP.isNameConcealed(e),
                        displayNameStyles: S !== E ? t.displayNameStyles : null
                    },
                    p
                )
            );
        }
        return (0, r.jsx)(
            u.Z,
            m(
                {
                    name: S,
                    botType: y,
                    botVerified: I,
                    discriminator: g || S !== E ? null : null != s ? s : t.discriminator
                },
                p
            )
        );
    };

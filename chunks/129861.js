n.d(t, { Z: () => S });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(385499),
    c = n(181430),
    u = n(821795),
    d = n(892567),
    f = n(813549),
    _ = n(246946),
    p = n(51144),
    h = n(388032),
    m = n(739406);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function I(e) {
    return e.isSystemUser() ? f.J.SYSTEM_DM : e.bot ? f.J.BOT : null;
}
let T = (e) => {
        let {
                primary: t,
                secondary: n,
                botType: i,
                botVerified: o,
                discriminatorClass: u,
                className: f,
                usernameClass: _,
                botClass: p,
                showStreamerModeTooltip: g,
                displayNameStyles: b,
                displayNameStylesType: O,
            } = e,
            v = (0, c.Y)({ location: "DiscordTag" });
        return (0, r.jsxs)("div", {
            className: a()(m.info, { [m.withDisplayNameStyles]: v && null != b }, f),
            children: [
                (0, r.jsx)(s.ua7, {
                    text: h.intl.string(h.t.Br1ls7),
                    shouldShow: g,
                    "aria-label": !!g && void 0,
                    children: (e) =>
                        (0, r.jsx)(
                            "span",
                            y(E({}, e), {
                                className: a()(m.__invalid_username, _),
                                children:
                                    null != b
                                        ? (0, r.jsx)(d.Z, {
                                              userName: t,
                                              displayNameStyles: b,
                                              effectDisplayType: O,
                                          })
                                        : t,
                            }),
                        ),
                }),
                null != n
                    ? (0, r.jsx)("span", {
                          className: a()(m.infoSpacing, u),
                          children: n,
                      })
                    : void 0,
                null != i &&
                    (0, r.jsx)(l.Z, {
                        type: i,
                        className: a()(m.infoSpacing, p),
                        verified: o,
                    }),
            ],
        });
    },
    S = (e) => {
        var {
                user: t,
                nick: n,
                forceUsername: i,
                showAccountIdentifier: a,
                overrideDiscriminator: s,
                forcePomelo: l,
                hideBotTag: c = !1,
                hideDiscriminator: d = !1,
                displayNameStylesType: h = u.F.PLAIN,
            } = e,
            m = O(e, [
                "user",
                "nick",
                "forceUsername",
                "showAccountIdentifier",
                "overrideDiscriminator",
                "forcePomelo",
                "hideBotTag",
                "hideDiscriminator",
                "displayNameStylesType",
            ]);
        let g = (0, o.e7)([_.Z], () => _.Z.hidePersonalInformation),
            b = g || d || t.isNonUserBot(),
            y = t.toString(),
            v = c ? null : I(t),
            S = t.isVerifiedBot(),
            A = p.ZP.getName(t),
            C = i ? y : null != n ? n : A,
            N = t.hasUniqueUsername() || l;
        if (N || C !== y) {
            let e = C === y && N && i ? p.ZP.getUserTag(t, { forcePomelo: l }) : C,
                n = a && e !== "@".concat(y) ? p.ZP.getUserTag(t) : void 0;
            return (0, r.jsx)(
                T,
                E(
                    {
                        primary: e,
                        secondary: n,
                        botType: v,
                        botVerified: S,
                        showStreamerModeTooltip: g && p.ZP.isNameConcealed(e),
                        displayNameStyles: C !== y ? t.displayNameStyles : null,
                        displayNameStylesType: h,
                    },
                    m,
                ),
            );
        }
        return (0, r.jsx)(
            f.Z,
            E(
                {
                    name: C,
                    botType: v,
                    botVerified: S,
                    discriminator: b || C !== y ? null : null != s ? s : t.discriminator,
                },
                m,
            ),
        );
    };

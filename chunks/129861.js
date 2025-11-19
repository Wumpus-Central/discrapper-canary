n.d(t, { Z: () => I });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(28664),
    l = n(385499),
    c = n(181430),
    u = n(821795),
    d = n(892567),
    f = n(813549),
    _ = n(246946),
    p = n(51144),
    h = n(388032),
    m = n(497238);
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
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function O(e) {
    return e.isSystemUser() ? f.J.SYSTEM_DM : e.bot ? f.J.BOT : null;
}
let v = (e) => {
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
                displayNameStyles: E,
                displayNameStylesType: b,
            } = e,
            y = (0, c.Y)({ location: "DiscordTag" });
        return (0, r.jsxs)("div", {
            className: a()(m.info, { [m.withDisplayNameStyles]: y && null != E }, f),
            children: [
                (0, r.jsx)(s.u, {
                    text: h.intl.string(h.t.Br1ls3),
                    shouldShow: g,
                    "aria-label": !!g && void 0,
                    children: (0, r.jsx)("span", {
                        className: a()(m.__invalid_username, _),
                        children:
                            null != E
                                ? (0, r.jsx)(d.Z, {
                                      userName: t,
                                      displayNameStyles: E,
                                      effectDisplayType: b,
                                  })
                                : t,
                    }),
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
    I = (e) => {
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
            m = b(e, [
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
            y = g || d || t.isNonUserBot(),
            I = t.toString(),
            T = c ? null : O(t),
            S = t.isVerifiedBot(),
            A = p.ZP.getName(t),
            C = i ? I : null != n ? n : A,
            N = t.hasUniqueUsername() || l;
        if (N || C !== I) {
            let e = C === I && N && i ? p.ZP.getUserTag(t, { forcePomelo: l }) : C,
                n = a && e !== "@".concat(I) ? p.ZP.getUserTag(t) : void 0;
            return (0, r.jsx)(
                v,
                E(
                    {
                        primary: e,
                        secondary: n,
                        botType: T,
                        botVerified: S,
                        showStreamerModeTooltip: g && p.ZP.isNameConcealed(e),
                        displayNameStyles: C !== I ? t.displayNameStyles : null,
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
                    botType: T,
                    botVerified: S,
                    discriminator: y || C !== I ? null : null != s ? s : t.discriminator,
                },
                m,
            ),
        );
    };

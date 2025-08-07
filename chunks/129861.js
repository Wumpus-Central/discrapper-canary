n.d(t, { Z: () => T });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(385499),
    c = n(181430),
    u = n(892567),
    d = n(813549),
    f = n(246946),
    _ = n(51144),
    p = n(388032),
    h = n(350651);
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
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function v(e) {
    return e.isSystemUser() ? d.J.SYSTEM_DM : e.bot ? d.J.BOT : null;
}
let I = (e) => {
        let {
                primary: t,
                secondary: n,
                botType: i,
                botVerified: a,
                discriminatorClass: d,
                className: f,
                usernameClass: _,
                botClass: m,
                showStreamerModeTooltip: E,
                displayNameStyles: y,
            } = e,
            O = (0, c.Y)({ location: "DiscordTag" });
        return (0, r.jsxs)("div", {
            className: o()(h.info, { [h.withDisplayNameStyles]: O && null != y }, f),
            children: [
                (0, r.jsx)(s.ua7, {
                    text: p.intl.string(p.t.Br1ls7),
                    shouldShow: E,
                    "aria-label": !!E && void 0,
                    children: (e) =>
                        (0, r.jsx)(
                            "span",
                            b(g({}, e), {
                                className: o()(h.__invalid_username, _),
                                children:
                                    null != y
                                        ? (0, r.jsx)(u.Z, {
                                              userName: t,
                                              displayNameStyles: y,
                                          })
                                        : t,
                            }),
                        ),
                }),
                null != n
                    ? (0, r.jsx)("span", {
                          className: o()(h.infoSpacing, d),
                          children: n,
                      })
                    : void 0,
                null != i &&
                    (0, r.jsx)(l.Z, {
                        type: i,
                        className: o()(h.infoSpacing, m),
                        verified: a,
                    }),
            ],
        });
    },
    T = (e) => {
        var {
                user: t,
                nick: n,
                forceUsername: i,
                showAccountIdentifier: o,
                overrideDiscriminator: s,
                forcePomelo: l,
                hideBotTag: c = !1,
                hideDiscriminator: u = !1,
            } = e,
            p = y(e, [
                "user",
                "nick",
                "forceUsername",
                "showAccountIdentifier",
                "overrideDiscriminator",
                "forcePomelo",
                "hideBotTag",
                "hideDiscriminator",
            ]);
        let h = (0, a.e7)([f.Z], () => f.Z.hidePersonalInformation),
            m = h || u || t.isNonUserBot(),
            E = t.toString(),
            b = c ? null : v(t),
            O = t.isVerifiedBot(),
            T = _.ZP.getName(t),
            S = i ? E : null != n ? n : T,
            A = t.hasUniqueUsername() || l;
        if (A || S !== E) {
            let e = S === E && A && i ? _.ZP.getUserTag(t, { forcePomelo: l }) : S,
                n = o && e !== "@".concat(E) ? _.ZP.getUserTag(t) : void 0;
            return (0, r.jsx)(
                I,
                g(
                    {
                        primary: e,
                        secondary: n,
                        botType: b,
                        botVerified: O,
                        showStreamerModeTooltip: h && _.ZP.isNameConcealed(e),
                        displayNameStyles: S !== E ? t.displayNameStyles : null,
                    },
                    p,
                ),
            );
        }
        return (0, r.jsx)(
            d.Z,
            g(
                {
                    name: S,
                    botType: b,
                    botVerified: O,
                    discriminator: m || S !== E ? null : null != s ? s : t.discriminator,
                },
                p,
            ),
        );
    };

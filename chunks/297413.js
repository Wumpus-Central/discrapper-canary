n.d(t, {
    A: () => A,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(311907),
    s = n(990078),
    l = n(709066),
    c = n(824994),
    u = n(922301),
    d = n(750112),
    f = n(270574),
    p = n(351906),
    _ = n(427262),
    h = n(985018),
    m = n(479117);

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

function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = b(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function O(e) {
    return e.isSystemUser() ? f.v.SYSTEM_DM : e.bot ? f.v.BOT : null;
}
let v = (e) => {
        let {
                primary: t,
                secondary: n,
                botType: i,
                botVerified: o,
                discriminatorClass: u,
                className: f,
                usernameClass: p,
                botClass: _,
                showStreamerModeTooltip: g,
                displayNameStyles: E,
                displayNameStylesType: y,
            } = e,
            b = (0, c.W)({
                location: "DiscordTag",
            });
        return (0, r.jsxs)("div", {
            className: a()(
                m.pq,
                {
                    [m.e8]: b && null != E,
                },
                f,
            ),
            children: [
                (0, r.jsx)(s.m, {
                    text: h.intl.string(h.t.Br1ls3),
                    shouldShow: g,
                    ariaHidden: !g,
                    children: (0, r.jsx)("span", {
                        className: a()(m.__invalid_username, p),
                        children:
                            null != E
                                ? (0, r.jsx)(d.A, {
                                      userName: t,
                                      displayNameStyles: E,
                                      effectDisplayType: y,
                                  })
                                : t,
                    }),
                }),
                null != n
                    ? (0, r.jsx)("span", {
                          className: a()(m.ok, u),
                          children: n,
                      })
                    : void 0,
                null != i &&
                    (0, r.jsx)(l.A, {
                        type: i,
                        className: a()(m.ok, _),
                        verified: o,
                    }),
            ],
        });
    },
    A = (e) => {
        let {
                user: t,
                nick: n,
                forceUsername: i,
                showAccountIdentifier: a,
                overrideDiscriminator: s,
                forcePomelo: l,
                hideBotTag: c = !1,
                hideDiscriminator: d = !1,
                displayNameStylesType: h = u.G.PLAIN,
            } = e,
            m = y(e, [
                "user",
                "nick",
                "forceUsername",
                "showAccountIdentifier",
                "overrideDiscriminator",
                "forcePomelo",
                "hideBotTag",
                "hideDiscriminator",
                "displayNameStylesType",
            ]),
            g = (0, o.bG)([p.A], () => p.A.hidePersonalInformation),
            b = g || d || t.isNonUserBot(),
            A = t.toString(),
            I = c ? null : O(t),
            S = t.isVerifiedBot(),
            T = _.Ay.getName(t),
            C = i ? A : null != n ? n : T,
            N = t.hasUniqueUsername() || l;
        if (N || C !== A) {
            let e =
                    C === A && N && i
                        ? _.Ay.getUserTag(t, {
                              forcePomelo: l,
                          })
                        : C,
                n = a && e !== "@".concat(A) ? _.Ay.getUserTag(t) : void 0;
            return (0, r.jsx)(
                v,
                E(
                    {
                        primary: e,
                        secondary: n,
                        botType: I,
                        botVerified: S,
                        showStreamerModeTooltip: g && _.Ay.isNameConcealed(e),
                        displayNameStyles: C !== A ? t.displayNameStyles : null,
                        displayNameStylesType: h,
                    },
                    m,
                ),
            );
        }
        return (0, r.jsx)(
            f.A,
            E(
                {
                    name: C,
                    botType: I,
                    botVerified: S,
                    discriminator: b || C !== A ? null : null != s ? s : t.discriminator,
                },
                m,
            ),
        );
    };

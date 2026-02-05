"use strict";
n.d(t, { A: () => A });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(990078),
    l = n(709066),
    u = n(824994),
    c = n(922301),
    d = n(750112),
    _ = n(270574),
    f = n(351906),
    p = n(427262),
    h = n(985018),
    m = n(479117);
function g(e) {
    return e.isSystemUser() ? _.v.SYSTEM_DM : e.bot ? _.v.BOT : null;
}
let E = (e) => {
        let {
                primary: t,
                secondary: n,
                botType: i,
                botVerified: s,
                discriminatorClass: c,
                className: _,
                usernameClass: f,
                botClass: p,
                showStreamerModeTooltip: g,
                displayNameStyles: E,
                displayNameStylesType: A,
            } = e,
            I = (0, u.W)({ location: "DiscordTag" });
        return (0, r.jsxs)("div", {
            className: a()(m.pq, { [m.e8]: I && null != E }, _),
            children: [
                (0, r.jsx)(o.m, {
                    text: h.intl.string(h.t.Br1ls3),
                    shouldShow: g,
                    ariaHidden: !g,
                    children: (0, r.jsx)("span", {
                        className: a()(m.__invalid_username, f),
                        children:
                            null != E
                                ? (0, r.jsx)(d.A, { userName: t, displayNameStyles: E, effectDisplayType: A })
                                : t,
                    }),
                }),
                null != n ? (0, r.jsx)("span", { className: a()(m.ok, c), children: n }) : void 0,
                null != i && (0, r.jsx)(l.A, { type: i, className: a()(m.ok, p), verified: s }),
            ],
        });
    },
    A = (e) => {
        let {
                user: t,
                nick: n,
                forceUsername: i,
                showAccountIdentifier: a,
                overrideDiscriminator: o,
                forcePomelo: l,
                hideBotTag: u = !1,
                hideDiscriminator: d = !1,
                displayNameStylesType: h = c.G.PLAIN,
                ...m
            } = e,
            A = (0, s.bG)([f.A], () => f.A.hidePersonalInformation),
            I = A || d || t.isNonUserBot(),
            T = t.toString(),
            y = u ? null : g(t),
            S = t.isVerifiedBot(),
            v = p.Ay.getName(t),
            C = i ? T : (n ?? v),
            b = t.hasUniqueUsername() || l;
        if (b || C !== T) {
            let e = C === T && b && i ? p.Ay.getUserTag(t, { forcePomelo: l }) : C,
                n = a && e !== `@${T}` ? p.Ay.getUserTag(t) : void 0;
            return (0, r.jsx)(E, {
                primary: e,
                secondary: n,
                botType: y,
                botVerified: S,
                showStreamerModeTooltip: A && p.Ay.isNameConcealed(e),
                displayNameStyles: C !== T ? t.displayNameStyles : null,
                displayNameStylesType: h,
                ...m,
            });
        }
        return (0, r.jsx)(_.A, {
            name: C,
            botType: y,
            botVerified: S,
            discriminator: I || C !== T ? null : (o ?? t.discriminator),
            ...m,
        });
    };

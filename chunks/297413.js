"use strict";
n.d(t, { A: () => I });
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
    h = n(427262),
    p = n(985018),
    g = n(479117);
function E(e) {
    return e.isSystemUser() ? _.v.SYSTEM_DM : e.bot ? _.v.BOT : null;
}
let A = (e) => {
        let {
                primary: t,
                secondary: n,
                botType: i,
                botVerified: s,
                discriminatorClass: c,
                className: _,
                usernameClass: f,
                botClass: h,
                showStreamerModeTooltip: E,
                displayNameStyles: A,
                displayNameStylesType: I,
            } = e,
            T = (0, u.W)({ location: "DiscordTag" });
        return (0, r.jsxs)("div", {
            className: a()(g.pq, { [g.e8]: T && null != A }, _),
            children: [
                (0, r.jsx)(o.m, {
                    text: p.intl.string(p.t.Br1ls3),
                    shouldShow: E,
                    ariaHidden: !E,
                    children: (0, r.jsx)("span", {
                        className: a()(g.__invalid_username, f),
                        children:
                            null != A
                                ? (0, r.jsx)(d.A, { userName: t, displayNameStyles: A, effectDisplayType: I })
                                : t,
                    }),
                }),
                null != n ? (0, r.jsx)("span", { className: a()(g.ok, c), children: n }) : void 0,
                null != i && (0, r.jsx)(l.A, { type: i, className: a()(g.ok, h), verified: s }),
            ],
        });
    },
    I = (e) => {
        let {
                user: t,
                nick: n,
                forceUsername: i,
                showAccountIdentifier: a,
                overrideDiscriminator: o,
                hideBotTag: l = !1,
                hideDiscriminator: u = !1,
                displayNameStylesType: d = c.G.PLAIN,
                ...p
            } = e,
            g = (0, s.bG)([f.A], () => f.A.hidePersonalInformation),
            I = g || u || t.isNonUserBot(),
            T = t.toString(),
            y = l ? null : E(t),
            S = t.isVerifiedBot(),
            v = h.Ay.getName(t),
            C = i ? T : (n ?? v),
            b = t.hasUniqueUsername();
        if (b || C !== T) {
            let e = C === T && b && i ? h.Ay.getUserTag(t) : C,
                n = a && e !== `@${T}` ? h.Ay.getUserTag(t) : void 0;
            return (0, r.jsx)(A, {
                primary: e,
                secondary: n,
                botType: y,
                botVerified: S,
                showStreamerModeTooltip: g && h.Ay.isNameConcealed(e),
                displayNameStyles: C !== T ? t.displayNameStyles : null,
                displayNameStylesType: d,
                ...p,
            });
        }
        return (0, r.jsx)(_.A, {
            name: C,
            botType: y,
            botVerified: S,
            discriminator: I || C !== T ? null : (o ?? t.discriminator),
            ...p,
        });
    };

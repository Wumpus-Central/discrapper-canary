"use strict";
n.d(t, { A: () => A });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
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
function E(e) {
    return e.isSystemUser() ? _.v.SYSTEM_DM : e.bot ? _.v.BOT : null;
}
let g = (e) => {
        let {
                primary: t,
                secondary: n,
                botType: i,
                botVerified: a,
                discriminatorClass: c,
                className: _,
                usernameClass: f,
                botClass: p,
                showStreamerModeTooltip: E,
                displayNameStyles: g,
                displayNameStylesType: A,
            } = e,
            I = (0, u.W)({ location: "DiscordTag" });
        return (0, r.jsxs)("div", {
            className: s()(m.pq, { [m.e8]: I && null != g }, _),
            children: [
                (0, r.jsx)(o.m, {
                    text: h.intl.string(h.t.Br1ls3),
                    shouldShow: E,
                    ariaHidden: !E,
                    children: (0, r.jsx)("span", {
                        className: s()(m.__invalid_username, f),
                        children:
                            null != g
                                ? (0, r.jsx)(d.A, { userName: t, displayNameStyles: g, effectDisplayType: A })
                                : t,
                    }),
                }),
                null != n ? (0, r.jsx)("span", { className: s()(m.ok, c), children: n }) : void 0,
                null != i && (0, r.jsx)(l.A, { type: i, className: s()(m.ok, p), verified: a }),
            ],
        });
    },
    A = (e) => {
        let {
                user: t,
                nick: n,
                forceUsername: i,
                showAccountIdentifier: s,
                overrideDiscriminator: o,
                hideBotTag: l = !1,
                hideDiscriminator: u = !1,
                displayNameStylesType: d = c.G.PLAIN,
                ...h
            } = e,
            m = (0, a.bG)([f.A], () => f.A.hidePersonalInformation),
            A = m || u || t.isNonUserBot(),
            I = t.toString(),
            T = l ? null : E(t),
            S = t.isVerifiedBot(),
            y = p.Ay.getName(t),
            v = i ? I : (n ?? y),
            N = t.hasUniqueUsername();
        if (N || v !== I) {
            let e = v === I && N && i ? p.Ay.getUserTag(t) : v,
                n = s && e !== `@${I}` ? p.Ay.getUserTag(t) : void 0;
            return (0, r.jsx)(g, {
                primary: e,
                secondary: n,
                botType: T,
                botVerified: S,
                showStreamerModeTooltip: m && p.Ay.isNameConcealed(e),
                displayNameStyles: v !== I ? t.displayNameStyles : null,
                displayNameStylesType: d,
                ...h,
            });
        }
        return (0, r.jsx)(_.A, {
            name: v,
            botType: T,
            botVerified: S,
            discriminator: A || v !== I ? null : (o ?? t.discriminator),
            ...h,
        });
    };

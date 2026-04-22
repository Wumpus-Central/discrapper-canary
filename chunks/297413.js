"use strict";
n.d(t, { A: () => g });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(990078),
    l = n(709066),
    u = n(824994),
    d = n(922301),
    c = n(750112),
    _ = n(270574),
    f = n(351906),
    E = n(427262),
    h = n(985018),
    p = n(375930);
let m = (e) => {
        let {
                primary: t,
                secondary: n,
                botType: i,
                botVerified: a,
                discriminatorClass: d,
                className: _,
                usernameClass: f,
                botClass: E,
                showStreamerModeTooltip: m,
                displayNameStyles: g,
                displayNameStylesType: A,
            } = e,
            I = (0, u.W)({ location: "DiscordTag" });
        return (0, r.jsxs)("div", {
            className: s()(p.pq, { [p.e8]: I && null != g }, _),
            children: [
                (0, r.jsx)(o.m, {
                    text: h.intl.string(h.t.Br1ls3),
                    shouldShow: m,
                    ariaHidden: !m,
                    children: (0, r.jsx)("span", {
                        className: s()(p.__invalid_username, f),
                        children:
                            null != g
                                ? (0, r.jsx)(c.A, { userName: t, displayNameStyles: g, effectDisplayType: A })
                                : t,
                    }),
                }),
                null != n ? (0, r.jsx)("span", { className: s()(p.ok, d), children: n }) : void 0,
                null != i && (0, r.jsx)(l.A, { type: i, className: s()(p.ok, E), verified: a }),
            ],
        });
    },
    g = (e) => {
        let {
                user: t,
                nick: n,
                forceUsername: i,
                showAccountIdentifier: s,
                overrideDiscriminator: o,
                hideBotTag: l = !1,
                hideDiscriminator: u = !1,
                displayNameStylesType: c = d.G.PLAIN,
                ...h
            } = e,
            p = (0, a.bG)([f.A], () => f.A.hidePersonalInformation),
            g = p || u || t.isNonUserBot(),
            A = t.toString(),
            I = l ? null : t.isSystemUser() ? _.v.SYSTEM_DM : t.bot ? _.v.BOT : null,
            T = t.isVerifiedBot(),
            S = E.Ay.getName(t),
            y = i ? A : (n ?? S),
            N = t.hasUniqueUsername();
        if (N || y !== A) {
            let e = y === A && N && i ? E.Ay.getUserTag(t) : y,
                n = s && e !== `@${A}` ? E.Ay.getUserTag(t) : void 0;
            return (0, r.jsx)(m, {
                primary: e,
                secondary: n,
                botType: I,
                botVerified: T,
                showStreamerModeTooltip: p && E.Ay.isNameConcealed(e),
                displayNameStyles: y !== A ? t.displayNameStyles : null,
                displayNameStylesType: c,
                ...h,
            });
        }
        return (0, r.jsx)(_.A, {
            name: y,
            botType: I,
            botVerified: T,
            discriminator: g || y !== A ? null : (o ?? t.discriminator),
            ...h,
        });
    };

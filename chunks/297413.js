"use strict";
n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(17928),
    o = n(990078),
    l = n(709066),
    d = n(824994),
    _ = n(922301),
    u = n(368919),
    c = n(270574),
    E = n(351906),
    h = n(427262),
    m = n(985018),
    f = n(375930);
let g = (e) => {
        let {
                primary: t,
                secondary: n,
                botType: r,
                botVerified: a,
                discriminatorClass: _,
                className: c,
                usernameClass: E,
                botClass: h,
                showStreamerModeTooltip: g,
                displayNameStyles: p,
                displayNameStylesType: A,
            } = e,
            I = (0, d.W)({ location: "DiscordTag" });
        return (0, i.jsxs)("div", {
            className: s()(f.pq, { [f.e8]: I && null != p }, c),
            children: [
                (0, i.jsx)(o.m, {
                    text: m.intl.string(m.t.Br1ls3),
                    shouldShow: g,
                    ariaHidden: !g,
                    children: (0, i.jsx)("span", {
                        className: s()(f.__invalid_username, E),
                        children:
                            null != p
                                ? (0, i.jsx)(u.A, { userName: t, displayNameStyles: p, effectDisplayType: A })
                                : t,
                    }),
                }),
                null != n ? (0, i.jsx)("span", { className: s()(f.ok, _), children: n }) : void 0,
                null != r && (0, i.jsx)(l.A, { type: r, className: s()(f.ok, h), verified: a }),
            ],
        });
    },
    p = (e) => {
        let {
                user: t,
                nick: n,
                forceUsername: r,
                showAccountIdentifier: s,
                overrideDiscriminator: o,
                hideBotTag: l = !1,
                hideDiscriminator: d = !1,
                displayNameStylesType: u = _.G.PLAIN,
                ...m
            } = e,
            f = (0, a.bG)([E.A], () => E.A.hidePersonalInformation),
            p = f || d || t.isNonUserBot(),
            A = t.toString(),
            I = l ? null : t.isSystemUser() ? c.v.SYSTEM_DM : t.bot ? c.v.BOT : null,
            T = t.isVerifiedBot(),
            S = h.Ay.getName(t),
            N = r ? A : (n ?? S),
            C = t.hasUniqueUsername();
        if (C || N !== A) {
            let e = N === A && C && r ? h.Ay.getUserTag(t) : N,
                n = s && e !== `@${A}` ? h.Ay.getUserTag(t) : void 0;
            return (0, i.jsx)(g, {
                primary: e,
                secondary: n,
                botType: I,
                botVerified: T,
                showStreamerModeTooltip: f && h.Ay.isNameConcealed(e),
                displayNameStyles: N !== A ? t.displayNameStyles : null,
                displayNameStylesType: u,
                ...m,
            });
        }
        return (0, i.jsx)(c.A, {
            name: N,
            botType: I,
            botVerified: T,
            discriminator: p || N !== A ? null : (o ?? t.discriminator),
            ...m,
        });
    };

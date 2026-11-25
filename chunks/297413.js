var i = l(477900);
l(582128);
var n = l(503698),
    a = l.n(n),
    r = l(855986),
    t = l(866665),
    o = l(709066),
    d = l(824994),
    u = l(922301),
    c = l(16371),
    m = l(534400),
    p = l(270574),
    y = l(351906),
    h = l(427262),
    v = l(792996),
    x = l(386151);
function N(e) {
    let { user: s } = e;
    return (0, i.jsx)(m.Ay, {
        primaryGuild: s.primaryGuild,
        userId: s.id,
        inline: !1,
        disableGuildProfile: !0,
        className: x.Mp,
    });
}
function f(e) {
    let {
            primary: s,
            secondary: l,
            guildTag: n,
            botType: r,
            botVerified: u,
            discriminatorClass: m,
            className: p,
            usernameClass: y,
            botClass: h,
            showStreamerModeTooltip: N,
            displayNameStyles: f,
            displayNameStylesType: j,
        } = e,
        A = (0, d.W)({ location: "DiscordTag" }),
        g = (0, i.jsx)("span", {
            className: a()(x.__invalid_username, y),
            children: null != f ? (0, i.jsx)(c.A, { userName: s, displayNameStyles: f, effectDisplayType: j }) : s,
        });
    return (0, i.jsxs)("div", {
        className: a()(x.pq, { [x.e8]: A && null != f }, p),
        children: [
            N ? (0, i.jsx)(t.m, { text: v.intl.string(v.t.Br1ls3), children: g }) : g,
            n,
            null != l ? (0, i.jsx)("span", { className: a()(x.ok, m), children: l }) : void 0,
            null != r && (0, i.jsx)(o.A, { type: r, className: a()(x.ok, h), verified: u }),
        ],
    });
}
l.d(
    s,
    {},
    {
        A: function (e) {
            let {
                    user: s,
                    nick: l,
                    forceUsername: n,
                    showGuildTag: a = !1,
                    showAccountIdentifier: t,
                    overrideDiscriminator: o,
                    hideBotTag: d = !1,
                    hideDiscriminator: c = !1,
                    displayNameStylesType: m = u.G.PLAIN,
                    ...v
                } = e,
                x = (0, r.bG)([y.A], () => y.A.hidePersonalInformation),
                j = x || c || s.isNonUserBot(),
                A = s.toString(),
                g = d ? null : s.isSystemUser() ? p.v.SYSTEM_DM : s.bot ? p.v.BOT : null,
                S = s.isVerifiedBot(),
                T = h.Ay.getName(s),
                b = n ? A : (l ?? T),
                C = s.hasUniqueUsername(),
                k = a ? (0, i.jsx)(N, { user: s }) : null;
            if (C || b !== A) {
                let e = b === A && C && n ? h.Ay.getUserTag(s) : b,
                    l = t && e !== `@${A}` ? h.Ay.getUserTag(s) : void 0;
                return (0, i.jsx)(f, {
                    primary: e,
                    secondary: l,
                    guildTag: k,
                    botType: g,
                    botVerified: S,
                    showStreamerModeTooltip: x && h.Ay.isNameConcealed(e),
                    displayNameStyles: b !== A ? s.displayNameStyles : null,
                    displayNameStylesType: m,
                    ...v,
                });
            }
            return (0, i.jsx)(p.A, {
                name: b,
                guildTag: k,
                botType: g,
                botVerified: S,
                discriminator: j || b !== A ? null : (o ?? s.discriminator),
                ...v,
            });
        },
    },
);

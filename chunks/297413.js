l.d(s, { A: () => j });
var i = l(477900);
l(582128);
var a = l(503698),
    n = l.n(a),
    r = l(17928),
    t = l(866665),
    d = l(709066),
    o = l(824994),
    u = l(922301),
    c = l(660184),
    m = l(534400),
    p = l(270574),
    y = l(351906),
    N = l(427262),
    v = l(105292),
    h = l(386151);
function x(e) {
    let { user: s } = e;
    return (0, i.jsx)(m.Ay, {
        primaryGuild: s.primaryGuild,
        userId: s.id,
        inline: !1,
        disableGuildProfile: !0,
        className: h.Mp,
    });
}
function f(e) {
    let {
            primary: s,
            secondary: l,
            guildTag: a,
            botType: r,
            botVerified: u,
            discriminatorClass: m,
            className: p,
            usernameClass: y,
            botClass: N,
            showStreamerModeTooltip: x,
            displayNameStyles: f,
            displayNameStylesType: j,
        } = e,
        A = (0, o.W)({ location: "DiscordTag" }),
        g = (0, i.jsx)("span", {
            className: n()(h.__invalid_username, y),
            children: null != f ? (0, i.jsx)(c.A, { userName: s, displayNameStyles: f, effectDisplayType: j }) : s,
        });
    return (0, i.jsxs)("div", {
        className: n()(h.pq, { [h.e8]: A && null != f }, p),
        children: [
            x ? (0, i.jsx)(t.m, { text: v.intl.string(v.t.Br1ls3), children: g }) : g,
            a,
            null != l ? (0, i.jsx)("span", { className: n()(h.ok, m), children: l }) : void 0,
            null != r && (0, i.jsx)(d.A, { type: r, className: n()(h.ok, N), verified: u }),
        ],
    });
}
let j = function (e) {
    let {
            user: s,
            nick: l,
            forceUsername: a,
            showGuildTag: n = !1,
            showAccountIdentifier: t,
            overrideDiscriminator: d,
            hideBotTag: o = !1,
            hideDiscriminator: c = !1,
            displayNameStylesType: m = u.G.PLAIN,
            ...v
        } = e,
        h = (0, r.bG)([y.A], () => y.A.hidePersonalInformation),
        j = h || c || s.isNonUserBot(),
        A = s.toString(),
        g = o ? null : s.isSystemUser() ? p.v.SYSTEM_DM : s.bot ? p.v.BOT : null,
        T = s.isVerifiedBot(),
        S = N.Ay.getName(s),
        b = a ? A : (l ?? S),
        k = s.hasUniqueUsername(),
        U = n ? (0, i.jsx)(x, { user: s }) : null;
    if (k || b !== A) {
        let e = b === A && k && a ? N.Ay.getUserTag(s) : b,
            l = t && e !== `@${A}` ? N.Ay.getUserTag(s) : void 0;
        return (0, i.jsx)(f, {
            primary: e,
            secondary: l,
            guildTag: U,
            botType: g,
            botVerified: T,
            showStreamerModeTooltip: h && N.Ay.isNameConcealed(e),
            displayNameStyles: b !== A ? s.displayNameStyles : null,
            displayNameStylesType: m,
            ...v,
        });
    }
    return (0, i.jsx)(p.A, {
        name: b,
        guildTag: U,
        botType: g,
        botVerified: T,
        discriminator: j || b !== A ? null : (d ?? s.discriminator),
        ...v,
    });
};

l.d(s, { A: () => x });
var i = l(477900);
l(582128);
var n = l(503698),
    a = l.n(n),
    r = l(17928),
    t = l(866665),
    d = l(709066),
    o = l(824994),
    u = l(922301),
    c = l(660184),
    m = l(534400),
    p = l(436921),
    y = l(270574),
    f = l(351906),
    v = l(427262),
    N = l(375708),
    j = l(386151);
function g(e) {
    let { user: s } = e,
        l = (0, p.j)({ location: "DiscordTag" });
    return (0, i.jsx)(m.Ay, {
        primaryGuild: s.primaryGuild,
        userId: s.id,
        inline: !1,
        disableGuildProfile: !0,
        className: a()(j.Mp, !l && j.iP),
    });
}
function h(e) {
    let {
            primary: s,
            secondary: l,
            guildTag: n,
            botType: r,
            botVerified: u,
            discriminatorClass: m,
            className: p,
            usernameClass: y,
            botClass: f,
            showStreamerModeTooltip: v,
            displayNameStyles: g,
            displayNameStylesType: h,
        } = e,
        x = (0, o.W)({ location: "DiscordTag" }),
        A = (0, i.jsx)("span", {
            className: a()(j.__invalid_username, y),
            children: null != g ? (0, i.jsx)(c.A, { userName: s, displayNameStyles: g, effectDisplayType: h }) : s,
        });
    return (0, i.jsxs)("div", {
        className: a()(j.pq, { [j.e8]: x && null != g }, p),
        children: [
            v ? (0, i.jsx)(t.m, { text: N.intl.string(N.t.Br1ls3), children: A }) : A,
            n,
            null != l ? (0, i.jsx)("span", { className: a()(j.ok, m), children: l }) : void 0,
            null != r && (0, i.jsx)(d.A, { type: r, className: a()(j.ok, f), verified: u }),
        ],
    });
}
let x = function (e) {
    let {
            user: s,
            nick: l,
            forceUsername: n,
            showGuildTag: a = !1,
            showAccountIdentifier: t,
            overrideDiscriminator: d,
            hideBotTag: o = !1,
            hideDiscriminator: c = !1,
            displayNameStylesType: m = u.G.PLAIN,
            ...p
        } = e,
        N = (0, r.bG)([f.A], () => f.A.hidePersonalInformation),
        j = N || c || s.isNonUserBot(),
        x = s.toString(),
        A = o ? null : s.isSystemUser() ? y.v.SYSTEM_DM : s.bot ? y.v.BOT : null,
        T = s.isVerifiedBot(),
        b = v.Ay.getName(s),
        S = n ? x : (l ?? b),
        k = s.hasUniqueUsername(),
        C = a ? (0, i.jsx)(g, { user: s }) : null;
    if (k || S !== x) {
        let e = S === x && k && n ? v.Ay.getUserTag(s) : S,
            l = t && e !== `@${x}` ? v.Ay.getUserTag(s) : void 0;
        return (0, i.jsx)(h, {
            primary: e,
            secondary: l,
            guildTag: C,
            botType: A,
            botVerified: T,
            showStreamerModeTooltip: N && v.Ay.isNameConcealed(e),
            displayNameStyles: S !== x ? s.displayNameStyles : null,
            displayNameStylesType: m,
            ...p,
        });
    }
    return (0, i.jsx)(y.A, {
        name: S,
        guildTag: C,
        botType: A,
        botVerified: T,
        discriminator: j || S !== x ? null : (d ?? s.discriminator),
        ...p,
    });
};

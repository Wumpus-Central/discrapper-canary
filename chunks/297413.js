l.d(s, { A: () => g });
var n = l(477900);
l(582128);
var i = l(503698),
    a = l.n(i),
    r = l(17928),
    t = l(866665),
    o = l(709066),
    d = l(824994),
    u = l(922301),
    c = l(660184),
    m = l(534400),
    p = l(436921),
    y = l(270574),
    f = l(351906),
    h = l(427262),
    v = l(375708),
    j = l(386151);
function x(e) {
    let { user: s } = e,
        l = (0, p.j)({ location: "DiscordTag" });
    return (0, n.jsx)(m.Ay, {
        primaryGuild: s.primaryGuild,
        userId: s.id,
        inline: !1,
        disableGuildProfile: !0,
        className: a()(j.Mp, !l && j.iP),
    });
}
function N(e) {
    let {
            primary: s,
            secondary: l,
            guildTag: i,
            botType: r,
            botVerified: u,
            discriminatorClass: m,
            className: p,
            usernameClass: y,
            botClass: f,
            showStreamerModeTooltip: h,
            displayNameStyles: x,
            displayNameStylesType: N,
        } = e,
        g = (0, d.W)({ location: "DiscordTag" }),
        A = (0, n.jsx)("span", {
            className: a()(j.__invalid_username, y),
            children: null != x ? (0, n.jsx)(c.A, { userName: s, displayNameStyles: x, effectDisplayType: N }) : s,
        });
    return (0, n.jsxs)("div", {
        className: a()(j.pq, { [j.e8]: g && null != x }, p),
        children: [
            h ? (0, n.jsx)(t.m, { text: v.intl.string(v.t.Br1ls3), children: A }) : A,
            i,
            null != l ? (0, n.jsx)("span", { className: a()(j.ok, m), children: l }) : void 0,
            null != r && (0, n.jsx)(o.A, { type: r, className: a()(j.ok, f), verified: u }),
        ],
    });
}
let g = function (e) {
    let {
            user: s,
            nick: l,
            forceUsername: i,
            showGuildTag: a = !1,
            showAccountIdentifier: t,
            overrideDiscriminator: o,
            hideBotTag: d = !1,
            hideDiscriminator: c = !1,
            displayNameStylesType: m = u.G.PLAIN,
            ...p
        } = e,
        v = (0, r.bG)([f.A], () => f.A.hidePersonalInformation),
        j = v || c || s.isNonUserBot(),
        g = s.toString(),
        A = d ? null : s.isSystemUser() ? y.v.SYSTEM_DM : s.bot ? y.v.BOT : null,
        T = s.isVerifiedBot(),
        b = h.Ay.getName(s),
        C = i ? g : (l ?? b),
        S = s.hasUniqueUsername(),
        k = a ? (0, n.jsx)(x, { user: s }) : null;
    if (S || C !== g) {
        let e = C === g && S && i ? h.Ay.getUserTag(s) : C,
            l = t && e !== `@${g}` ? h.Ay.getUserTag(s) : void 0;
        return (0, n.jsx)(N, {
            primary: e,
            secondary: l,
            guildTag: k,
            botType: A,
            botVerified: T,
            showStreamerModeTooltip: v && h.Ay.isNameConcealed(e),
            displayNameStyles: C !== g ? s.displayNameStyles : null,
            displayNameStylesType: m,
            ...p,
        });
    }
    return (0, n.jsx)(y.A, {
        name: C,
        guildTag: k,
        botType: A,
        botVerified: T,
        discriminator: j || C !== g ? null : (o ?? s.discriminator),
        ...p,
    });
};

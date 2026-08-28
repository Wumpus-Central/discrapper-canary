i.d(t, { A: () => p });
var s = i(477900);
i(582128);
var n = i(503698),
    r = i.n(n),
    l = i(17928),
    a = i(866665),
    c = i(709066),
    o = i(824994),
    d = i(922301),
    u = i(660184),
    h = i(534400),
    j = i(436921),
    x = i(270574),
    v = i(351906),
    m = i(427262),
    f = i(375708),
    N = i(386151);
function A(e) {
    let { user: t } = e,
        i = (0, j.j)({ location: "DiscordTag" });
    return (0, s.jsx)(h.Ay, {
        primaryGuild: t.primaryGuild,
        userId: t.id,
        inline: !1,
        disableGuildProfile: !0,
        className: r()(N.Mp, !i && N.iP),
    });
}
function g(e) {
    let {
            primary: t,
            secondary: i,
            guildTag: n,
            botType: l,
            botVerified: d,
            discriminatorClass: h,
            className: j,
            usernameClass: x,
            botClass: v,
            showStreamerModeTooltip: m,
            displayNameStyles: A,
            displayNameStylesType: g,
        } = e,
        p = (0, o.W)({ location: "DiscordTag" }),
        C = (0, s.jsx)("span", {
            className: r()(N.__invalid_username, x),
            children: null != A ? (0, s.jsx)(u.A, { userName: t, displayNameStyles: A, effectDisplayType: g }) : t,
        });
    return (0, s.jsxs)("div", {
        className: r()(N.pq, { [N.e8]: p && null != A }, j),
        children: [
            m ? (0, s.jsx)(a.m, { text: f.intl.string(f.t.Br1ls3), children: C }) : C,
            n,
            null != i ? (0, s.jsx)("span", { className: r()(N.ok, h), children: i }) : void 0,
            null != l && (0, s.jsx)(c.A, { type: l, className: r()(N.ok, v), verified: d }),
        ],
    });
}
let p = function (e) {
    let {
            user: t,
            nick: i,
            forceUsername: n,
            showGuildTag: r = !1,
            showAccountIdentifier: a,
            overrideDiscriminator: c,
            hideBotTag: o = !1,
            hideDiscriminator: u = !1,
            displayNameStylesType: h = d.G.PLAIN,
            ...j
        } = e,
        f = (0, l.bG)([v.A], () => v.A.hidePersonalInformation),
        N = f || u || t.isNonUserBot(),
        p = t.toString(),
        C = o ? null : t.isSystemUser() ? x.v.SYSTEM_DM : t.bot ? x.v.BOT : null,
        S = t.isVerifiedBot(),
        I = m.Ay.getName(t),
        E = n ? p : (i ?? I),
        T = t.hasUniqueUsername(),
        _ = r ? (0, s.jsx)(A, { user: t }) : null;
    if (T || E !== p) {
        let e = E === p && T && n ? m.Ay.getUserTag(t) : E,
            i = a && e !== `@${p}` ? m.Ay.getUserTag(t) : void 0;
        return (0, s.jsx)(g, {
            primary: e,
            secondary: i,
            guildTag: _,
            botType: C,
            botVerified: S,
            showStreamerModeTooltip: f && m.Ay.isNameConcealed(e),
            displayNameStyles: E !== p ? t.displayNameStyles : null,
            displayNameStylesType: h,
            ...j,
        });
    }
    return (0, s.jsx)(x.A, {
        name: E,
        guildTag: _,
        botType: C,
        botVerified: S,
        discriminator: N || E !== p ? null : (c ?? t.discriminator),
        ...j,
    });
};

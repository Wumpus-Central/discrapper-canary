i.d(t, { A: () => h });
var E = i(477900);
i(582128);
var s = i(503698),
    n = i.n(s),
    r = i(17928),
    l = i(866665),
    a = i(709066),
    _ = i(824994),
    S = i(922301),
    A = i(660184),
    c = i(534400),
    o = i(436921),
    I = i(270574),
    d = i(351906),
    T = i(427262),
    R = i(375708),
    N = i(386151);
function u(e) {
    let { user: t } = e,
        i = (0, o.j)({ location: "DiscordTag" });
    return (0, E.jsx)(c.Ay, {
        primaryGuild: t.primaryGuild,
        userId: t.id,
        inline: !1,
        disableGuildProfile: !0,
        className: n()(N.Mp, !i && N.iP),
    });
}
function P(e) {
    let {
            primary: t,
            secondary: i,
            guildTag: s,
            botType: r,
            botVerified: S,
            discriminatorClass: c,
            className: o,
            usernameClass: I,
            botClass: d,
            showStreamerModeTooltip: T,
            displayNameStyles: u,
            displayNameStylesType: P,
        } = e,
        h = (0, _.W)({ location: "DiscordTag" }),
        O = (0, E.jsx)("span", {
            className: n()(N.__invalid_username, I),
            children: null != u ? (0, E.jsx)(A.A, { userName: t, displayNameStyles: u, effectDisplayType: P }) : t,
        });
    return (0, E.jsxs)("div", {
        className: n()(N.pq, { [N.e8]: h && null != u }, o),
        children: [
            T ? (0, E.jsx)(l.m, { text: R.intl.string(R.t.Br1ls3), children: O }) : O,
            s,
            null != i ? (0, E.jsx)("span", { className: n()(N.ok, c), children: i }) : void 0,
            null != r && (0, E.jsx)(a.A, { type: r, className: n()(N.ok, d), verified: S }),
        ],
    });
}
let h = function (e) {
    let {
            user: t,
            nick: i,
            forceUsername: s,
            showGuildTag: n = !1,
            showAccountIdentifier: l,
            overrideDiscriminator: a,
            hideBotTag: _ = !1,
            hideDiscriminator: A = !1,
            displayNameStylesType: c = S.G.PLAIN,
            ...o
        } = e,
        R = (0, r.bG)([d.A], () => d.A.hidePersonalInformation),
        N = R || A || t.isNonUserBot(),
        h = t.toString(),
        O = _ ? null : t.isSystemUser() ? I.v.SYSTEM_DM : t.bot ? I.v.BOT : null,
        C = t.isVerifiedBot(),
        D = T.Ay.getName(t),
        j = s ? h : (i ?? D),
        L = t.hasUniqueUsername(),
        v = n ? (0, E.jsx)(u, { user: t }) : null;
    if (L || j !== h) {
        let e = j === h && L && s ? T.Ay.getUserTag(t) : j,
            i = l && e !== `@${h}` ? T.Ay.getUserTag(t) : void 0;
        return (0, E.jsx)(P, {
            primary: e,
            secondary: i,
            guildTag: v,
            botType: O,
            botVerified: C,
            showStreamerModeTooltip: R && T.Ay.isNameConcealed(e),
            displayNameStyles: j !== h ? t.displayNameStyles : null,
            displayNameStylesType: c,
            ...o,
        });
    }
    return (0, E.jsx)(I.A, {
        name: j,
        guildTag: v,
        botType: O,
        botVerified: C,
        discriminator: N || j !== h ? null : (a ?? t.discriminator),
        ...o,
    });
};

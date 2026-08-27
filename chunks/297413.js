i.d(t, { A: () => O });
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
    T = i(270574),
    I = i(351906),
    d = i(427262),
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
            usernameClass: T,
            botClass: I,
            showStreamerModeTooltip: d,
            displayNameStyles: u,
            displayNameStylesType: P,
        } = e,
        O = (0, _.W)({ location: "DiscordTag" }),
        h = (0, E.jsx)("span", {
            className: n()(N.__invalid_username, T),
            children: null != u ? (0, E.jsx)(A.A, { userName: t, displayNameStyles: u, effectDisplayType: P }) : t,
        });
    return (0, E.jsxs)("div", {
        className: n()(N.pq, { [N.e8]: O && null != u }, o),
        children: [
            d ? (0, E.jsx)(l.m, { text: R.intl.string(R.t.Br1ls3), children: h }) : h,
            s,
            null != i ? (0, E.jsx)("span", { className: n()(N.ok, c), children: i }) : void 0,
            null != r && (0, E.jsx)(a.A, { type: r, className: n()(N.ok, I), verified: S }),
        ],
    });
}
let O = function (e) {
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
        R = (0, r.bG)([I.A], () => I.A.hidePersonalInformation),
        N = R || A || t.isNonUserBot(),
        O = t.toString(),
        h = _ ? null : t.isSystemUser() ? T.v.SYSTEM_DM : t.bot ? T.v.BOT : null,
        C = t.isVerifiedBot(),
        D = d.Ay.getName(t),
        j = s ? O : (i ?? D),
        L = t.hasUniqueUsername(),
        U = n ? (0, E.jsx)(u, { user: t }) : null;
    if (L || j !== O) {
        let e = j === O && L && s ? d.Ay.getUserTag(t) : j,
            i = l && e !== `@${O}` ? d.Ay.getUserTag(t) : void 0;
        return (0, E.jsx)(P, {
            primary: e,
            secondary: i,
            guildTag: U,
            botType: h,
            botVerified: C,
            showStreamerModeTooltip: R && d.Ay.isNameConcealed(e),
            displayNameStyles: j !== O ? t.displayNameStyles : null,
            displayNameStylesType: c,
            ...o,
        });
    }
    return (0, E.jsx)(T.A, {
        name: j,
        guildTag: U,
        botType: h,
        botVerified: C,
        discriminator: N || j !== O ? null : (a ?? t.discriminator),
        ...o,
    });
};

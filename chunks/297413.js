i.d(t, { A: () => u });
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
    o = i(270574),
    I = i(351906),
    T = i(427262),
    d = i(375708),
    R = i(386151);
function N(e) {
    let {
            primary: t,
            secondary: i,
            guildTag: s,
            botType: r,
            botVerified: S,
            discriminatorClass: c,
            className: o,
            usernameClass: I,
            botClass: T,
            showStreamerModeTooltip: N,
            displayNameStyles: u,
            displayNameStylesType: P,
        } = e,
        h = (0, _.W)({ location: "DiscordTag" }),
        O = (0, E.jsx)("span", {
            className: n()(R.__invalid_username, I),
            children: null != u ? (0, E.jsx)(A.A, { userName: t, displayNameStyles: u, effectDisplayType: P }) : t,
        });
    return (0, E.jsxs)("div", {
        className: n()(R.pq, { [R.e8]: h && null != u }, o),
        children: [
            N ? (0, E.jsx)(l.m, { text: d.intl.string(d.t.Br1ls3), children: O }) : O,
            s,
            null != i ? (0, E.jsx)("span", { className: n()(R.ok, c), children: i }) : void 0,
            null != r && (0, E.jsx)(a.A, { type: r, className: n()(R.ok, T), verified: S }),
        ],
    });
}
let u = function (e) {
    let {
            user: t,
            nick: i,
            forceUsername: s,
            showGuildTag: n = !1,
            showAccountIdentifier: l,
            overrideDiscriminator: a,
            hideBotTag: _ = !1,
            hideDiscriminator: A = !1,
            displayNameStylesType: d = S.G.PLAIN,
            ...u
        } = e,
        P = (0, r.bG)([I.A], () => I.A.hidePersonalInformation),
        h = P || A || t.isNonUserBot(),
        O = t.toString(),
        C = _ ? null : t.isSystemUser() ? o.v.SYSTEM_DM : t.bot ? o.v.BOT : null,
        D = t.isVerifiedBot(),
        j = T.Ay.getName(t),
        L = s ? O : (i ?? j),
        v = t.hasUniqueUsername(),
        x = n
            ? (0, E.jsx)(c.Ay, {
                  primaryGuild: t.primaryGuild,
                  userId: t.id,
                  inline: !1,
                  disableGuildProfile: !0,
                  className: R.Mp,
              })
            : null;
    if (v || L !== O) {
        let e = L === O && v && s ? T.Ay.getUserTag(t) : L,
            i = l && e !== `@${O}` ? T.Ay.getUserTag(t) : void 0;
        return (0, E.jsx)(N, {
            primary: e,
            secondary: i,
            guildTag: x,
            botType: C,
            botVerified: D,
            showStreamerModeTooltip: P && T.Ay.isNameConcealed(e),
            displayNameStyles: L !== O ? t.displayNameStyles : null,
            displayNameStylesType: d,
            ...u,
        });
    }
    return (0, E.jsx)(o.A, {
        name: L,
        guildTag: x,
        botType: C,
        botVerified: D,
        discriminator: h || L !== O ? null : (a ?? t.discriminator),
        ...u,
    });
};

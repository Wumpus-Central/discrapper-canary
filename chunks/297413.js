n.d(t, { A: () => R });
var i = n(477900);
n(582128);
var s = n(503698),
    a = n.n(s),
    l = n(17928),
    r = n(866665),
    E = n(709066),
    o = n(824994),
    c = n(922301),
    d = n(660184),
    _ = n(534400),
    S = n(270574),
    u = n(351906),
    A = n(427262),
    I = n(375708),
    h = n(250658);
function T(e) {
    let {
            primary: t,
            secondary: n,
            guildTag: s,
            botType: l,
            botVerified: c,
            discriminatorClass: _,
            className: S,
            usernameClass: u,
            botClass: A,
            showStreamerModeTooltip: T,
            displayNameStyles: R,
            displayNameStylesType: N,
        } = e,
        m = (0, o.W)({ location: "DiscordTag" }),
        C = (0, i.jsx)("span", {
            className: a()(h.__invalid_username, u),
            children: null != R ? (0, i.jsx)(d.A, { userName: t, displayNameStyles: R, effectDisplayType: N }) : t,
        });
    return (0, i.jsxs)("div", {
        className: a()(h.pq, { [h.e8]: m && null != R }, S),
        children: [
            T ? (0, i.jsx)(r.m, { text: I.intl.string(I.t.Br1ls3), children: C }) : C,
            s,
            null != n ? (0, i.jsx)("span", { className: a()(h.ok, _), children: n }) : void 0,
            null != l && (0, i.jsx)(E.A, { type: l, className: a()(h.ok, A), verified: c }),
        ],
    });
}
let R = function (e) {
    let {
            user: t,
            nick: n,
            forceUsername: s,
            showGuildTag: a = !1,
            showAccountIdentifier: r,
            overrideDiscriminator: E,
            hideBotTag: o = !1,
            hideDiscriminator: d = !1,
            displayNameStylesType: I = c.G.PLAIN,
            ...R
        } = e,
        N = (0, l.bG)([u.A], () => u.A.hidePersonalInformation),
        m = N || d || t.isNonUserBot(),
        C = t.toString(),
        P = o ? null : t.isSystemUser() ? S.v.SYSTEM_DM : t.bot ? S.v.BOT : null,
        O = t.isVerifiedBot(),
        x = A.Ay.getName(t),
        f = s ? C : (n ?? x),
        v = t.hasUniqueUsername(),
        g = a
            ? (0, i.jsx)(_.Ay, {
                  primaryGuild: t.primaryGuild,
                  userId: t.id,
                  inline: !1,
                  disableGuildProfile: !0,
                  className: h.Mp,
              })
            : null;
    if (v || f !== C) {
        let e = f === C && v && s ? A.Ay.getUserTag(t) : f,
            n = r && e !== `@${C}` ? A.Ay.getUserTag(t) : void 0;
        return (0, i.jsx)(T, {
            primary: e,
            secondary: n,
            guildTag: g,
            botType: P,
            botVerified: O,
            showStreamerModeTooltip: N && A.Ay.isNameConcealed(e),
            displayNameStyles: f !== C ? t.displayNameStyles : null,
            displayNameStylesType: I,
            ...R,
        });
    }
    return (0, i.jsx)(S.A, {
        name: f,
        guildTag: g,
        botType: P,
        botVerified: O,
        discriminator: m || f !== C ? null : (E ?? t.discriminator),
        ...R,
    });
};

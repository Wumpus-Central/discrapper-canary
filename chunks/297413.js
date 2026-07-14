"use strict";
n.d(t, { A: () => T });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(17928),
    l = n(990078),
    o = n(709066),
    d = n(824994),
    c = n(922301),
    u = n(660184),
    _ = n(534400),
    E = n(270574),
    A = n(351906),
    h = n(427262),
    I = n(375708),
    f = n(375930);
function p(e) {
    let {
            primary: t,
            secondary: n,
            guildTag: r,
            botType: s,
            botVerified: c,
            discriminatorClass: _,
            className: E,
            usernameClass: A,
            botClass: h,
            showStreamerModeTooltip: p,
            displayNameStyles: T,
            displayNameStylesType: m,
        } = e,
        g = (0, d.W)({ location: "DiscordTag" });
    return (0, i.jsxs)("div", {
        className: a()(f.pq, { [f.e8]: g && null != T }, E),
        children: [
            (0, i.jsx)(l.m, {
                text: I.intl.string(I.t.Br1ls3),
                shouldShow: p,
                ariaHidden: !p,
                children: (0, i.jsx)("span", {
                    className: a()(f.__invalid_username, A),
                    children:
                        null != T ? (0, i.jsx)(u.A, { userName: t, displayNameStyles: T, effectDisplayType: m }) : t,
                }),
            }),
            r,
            null != n ? (0, i.jsx)("span", { className: a()(f.ok, _), children: n }) : void 0,
            null != s && (0, i.jsx)(o.A, { type: s, className: a()(f.ok, h), verified: c }),
        ],
    });
}
let T = function (e) {
    let {
            user: t,
            nick: n,
            forceUsername: r,
            showGuildTag: a = !1,
            showAccountIdentifier: l,
            overrideDiscriminator: o,
            hideBotTag: d = !1,
            hideDiscriminator: u = !1,
            displayNameStylesType: I = c.G.PLAIN,
            ...T
        } = e,
        m = (0, s.bG)([A.A], () => A.A.hidePersonalInformation),
        g = m || u || t.isNonUserBot(),
        S = t.toString(),
        N = d ? null : t.isSystemUser() ? E.v.SYSTEM_DM : t.bot ? E.v.BOT : null,
        C = t.isVerifiedBot(),
        O = h.Ay.getName(t),
        R = r ? S : (n ?? O),
        L = t.hasUniqueUsername(),
        D = a
            ? (0, i.jsx)(_.Ay, {
                  primaryGuild: t.primaryGuild,
                  userId: t.id,
                  inline: !0,
                  disableGuildProfile: !0,
                  className: f.Mp,
              })
            : null;
    if (L || R !== S) {
        let e = R === S && L && r ? h.Ay.getUserTag(t) : R,
            n = l && e !== `@${S}` ? h.Ay.getUserTag(t) : void 0;
        return (0, i.jsx)(p, {
            primary: e,
            secondary: n,
            guildTag: D,
            botType: N,
            botVerified: C,
            showStreamerModeTooltip: m && h.Ay.isNameConcealed(e),
            displayNameStyles: R !== S ? t.displayNameStyles : null,
            displayNameStylesType: I,
            ...T,
        });
    }
    return (0, i.jsx)(E.A, {
        name: R,
        guildTag: D,
        botType: N,
        botVerified: C,
        discriminator: g || R !== S ? null : (o ?? t.discriminator),
        ...T,
    });
};

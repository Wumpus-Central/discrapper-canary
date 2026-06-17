"use strict";
n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(17928),
    o = n(990078),
    l = n(709066),
    u = n(824994),
    c = n(922301),
    d = n(660184),
    _ = n(270574),
    h = n(351906),
    f = n(427262),
    p = n(375708),
    E = n(375930);
function m(e) {
    let {
            primary: t,
            secondary: n,
            botType: r,
            botVerified: a,
            discriminatorClass: c,
            className: _,
            usernameClass: h,
            botClass: f,
            showStreamerModeTooltip: m,
            displayNameStyles: g,
            displayNameStylesType: A,
        } = e,
        I = (0, u.W)({ location: "DiscordTag" });
    return (0, i.jsxs)("div", {
        className: s()(E.pq, { [E.e8]: I && null != g }, _),
        children: [
            (0, i.jsx)(o.m, {
                text: p.intl.string(p.t.Br1ls3),
                shouldShow: m,
                ariaHidden: !m,
                children: (0, i.jsx)("span", {
                    className: s()(E.__invalid_username, h),
                    children:
                        null != g ? (0, i.jsx)(d.A, { userName: t, displayNameStyles: g, effectDisplayType: A }) : t,
                }),
            }),
            null != n ? (0, i.jsx)("span", { className: s()(E.ok, c), children: n }) : void 0,
            null != r && (0, i.jsx)(l.A, { type: r, className: s()(E.ok, f), verified: a }),
        ],
    });
}
let g = function (e) {
    let {
            user: t,
            nick: n,
            forceUsername: r,
            showAccountIdentifier: s,
            overrideDiscriminator: o,
            hideBotTag: l = !1,
            hideDiscriminator: u = !1,
            displayNameStylesType: d = c.G.PLAIN,
            ...p
        } = e,
        E = (0, a.bG)([h.A], () => h.A.hidePersonalInformation),
        g = E || u || t.isNonUserBot(),
        A = t.toString(),
        I = l ? null : t.isSystemUser() ? _.v.SYSTEM_DM : t.bot ? _.v.BOT : null,
        T = t.isVerifiedBot(),
        S = f.Ay.getName(t),
        y = r ? A : (n ?? S),
        C = t.hasUniqueUsername();
    if (C || y !== A) {
        let e = y === A && C && r ? f.Ay.getUserTag(t) : y,
            n = s && e !== `@${A}` ? f.Ay.getUserTag(t) : void 0;
        return (0, i.jsx)(m, {
            primary: e,
            secondary: n,
            botType: I,
            botVerified: T,
            showStreamerModeTooltip: E && f.Ay.isNameConcealed(e),
            displayNameStyles: y !== A ? t.displayNameStyles : null,
            displayNameStylesType: d,
            ...p,
        });
    }
    return (0, i.jsx)(_.A, {
        name: y,
        botType: I,
        botVerified: T,
        discriminator: g || y !== A ? null : (o ?? t.discriminator),
        ...p,
    });
};

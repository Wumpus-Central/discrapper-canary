"use strict";
n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(688810),
    s = n(702211),
    o = n(915614),
    l = n(385612),
    u = n(339984),
    c = n(996988),
    d = n(985018),
    _ = n(560754);
function f(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: f,
            canUsePremiumCustomization: p,
            pendingBanner: h,
            pendingAccentColor: m,
            isTryItOut: g,
            disabledInputs: E,
            onUpsellClick: A,
        } = e,
        { newestAnalyticsLocation: I } = (0, a.Ay)(),
        T = p || n?.canUsePremiumProfileCustomization || !1,
        y = T ? i.R2l : i.tvc,
        S = (0, s.b)(T),
        v = () => {
            T || S ? (0, l.XD)({ uploadType: u.HL.BANNER, analyticsSource: I, guildId: f, isTryItOut: g }) : A?.();
        };
    return (0, r.jsx)(o.A, {
        user: t,
        displayProfile: n,
        guildId: f,
        themeType: c.d.POPOUT,
        pendingBanner: h,
        pendingAccentColor: m,
        canUsePremiumProfileCustomization: p,
        children:
            !E &&
            (0, r.jsxs)(i.DUT, {
                onClick: v,
                className: _.v,
                children: [
                    (0, r.jsx)(y, { size: "xs", color: "white" }),
                    (0, r.jsx)(i.Heading, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: T || S ? d.intl.string(d.t.N0bC3P) : d.intl.string(d.t.O1sT5v),
                    }),
                ],
            }),
    });
}

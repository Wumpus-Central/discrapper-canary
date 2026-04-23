"use strict";
n.d(t, { A: () => E });
var r = n(627968);
n(64700);
var i = n(22231),
    s = n(403581),
    a = n(939249),
    o = n(534514),
    l = n(688810),
    u = n(702211),
    c = n(915614),
    d = n(385612),
    _ = n(339984),
    f = n(996988),
    p = n(985018),
    h = n(662177);
function E(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: E,
            canUsePremiumCustomization: m,
            pendingBanner: g,
            pendingAccentColor: A,
            isTryItOut: I,
            disabledInputs: T,
            onUpsellClick: S,
        } = e,
        { newestAnalyticsLocation: y } = (0, l.Ay)(),
        N = m || n?.canUsePremiumProfileCustomization || !1,
        v = N ? i.R : s.t,
        C = (0, u.b)(N);
    return (0, r.jsx)(c.A, {
        user: t,
        displayProfile: n,
        guildId: E,
        themeType: f.d.POPOUT,
        pendingBanner: g,
        pendingAccentColor: A,
        canUsePremiumProfileCustomization: m,
        children:
            !T &&
            (0, r.jsxs)(a.D, {
                onClick: () => {
                    N || C
                        ? (0, d.XD)({ uploadType: _.HL.BANNER, analyticsSource: y, guildId: E, isTryItOut: I })
                        : S?.();
                },
                className: h.v,
                children: [
                    (0, r.jsx)(v, { size: "xs", color: "white" }),
                    (0, r.jsx)(o.D, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: N || C ? p.intl.string(p.t.N0bC3P) : p.intl.string(p.t.O1sT5v),
                    }),
                ],
            }),
    });
}

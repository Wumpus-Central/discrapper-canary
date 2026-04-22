a.d(i, { A: () => h });
var r = a(627968);
a(64700);
var n = a(22231),
    l = a(403581),
    s = a(939249),
    t = a(534514),
    d = a(688810),
    o = a(702211),
    u = a(915614),
    c = a(385612),
    m = a(339984),
    g = a(996988),
    p = a(985018),
    v = a(87393);
function h(e) {
    let {
            user: i,
            displayProfile: a,
            guildId: h,
            canUsePremiumCustomization: A,
            pendingBanner: y,
            pendingAccentColor: x,
            isTryItOut: P,
            disabledInputs: f,
            onUpsellClick: j,
        } = e,
        { newestAnalyticsLocation: b } = (0, d.Ay)(),
        C = A || a?.canUsePremiumProfileCustomization || !1,
        I = C ? n.R : l.t,
        w = (0, o.b)(C);
    return (0, r.jsx)(u.A, {
        user: i,
        displayProfile: a,
        guildId: h,
        themeType: g.d.POPOUT,
        pendingBanner: y,
        pendingAccentColor: x,
        canUsePremiumProfileCustomization: A,
        children:
            !f &&
            (0, r.jsxs)(s.D, {
                onClick: () => {
                    C || w
                        ? (0, c.XD)({ uploadType: m.HL.BANNER, analyticsSource: b, guildId: h, isTryItOut: P })
                        : j?.();
                },
                className: v.v,
                children: [
                    (0, r.jsx)(I, { size: "xs", color: "white" }),
                    (0, r.jsx)(t.D, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: C || w ? p.intl.string(p.t.N0bC3P) : p.intl.string(p.t.O1sT5v),
                    }),
                ],
            }),
    });
}

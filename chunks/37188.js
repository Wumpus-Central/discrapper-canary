n.d(t, {
    A: () => p,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(688810),
    s = n(702211),
    o = n(915614),
    l = n(385612),
    c = n(339984),
    u = n(996988),
    d = n(985018),
    f = n(560754);

function p(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: p,
            canUsePremiumCustomization: _,
            pendingBanner: h,
            pendingAccentColor: m,
            isTryItOut: g,
            disabledInputs: E,
            onUpsellClick: b,
        } = e,
        { newestAnalyticsLocation: y } = (0, a.Ay)(),
        O = _ || (null == n ? void 0 : n.canUsePremiumProfileCustomization) || !1,
        A = O ? i.R2l : i.tvc,
        v = (0, s.b)(O),
        S = () => {
            if (!O && !v) {
                null == b || b();
                return;
            }
            (0, l.XD)({
                uploadType: c.HL.BANNER,
                analyticsSource: y,
                guildId: p,
                isTryItOut: g,
            });
        };
    return (0, r.jsx)(o.A, {
        user: t,
        displayProfile: n,
        guildId: p,
        themeType: u.d.POPOUT,
        pendingBanner: h,
        pendingAccentColor: m,
        canUsePremiumProfileCustomization: _,
        children:
            !E &&
            (0, r.jsxs)(i.DUT, {
                onClick: S,
                className: f.v,
                children: [
                    (0, r.jsx)(A, {
                        size: "xs",
                        color: "white",
                    }),
                    (0, r.jsx)(i.Heading, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: O || v ? d.intl.string(d.t.N0bC3P) : d.intl.string(d.t.O1sT5v),
                    }),
                ],
            }),
    });
}

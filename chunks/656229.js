n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(906732),
    o = n(222062),
    s = n(867176),
    l = n(654904),
    c = n(486324),
    u = n(671955),
    d = n(388032),
    f = n(579534);
function p(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: p,
            canUsePremiumCustomization: _,
            pendingBanner: m,
            pendingAccentColor: h,
            isTryItOut: g,
            disabledInputs: E,
            onUpsellClick: b,
        } = e,
        { newestAnalyticsLocation: y } = (0, a.ZP)(),
        O = _ || (null == n ? void 0 : n.canUsePremiumProfileCustomization) || !1,
        v = O ? i.vdY : i.SrA,
        S = (0, o.M)(O),
        I = () => {
            if (!O && !S) {
                null == b || b();
                return;
            }
            (0, l.$r)({
                uploadType: c.pC.BANNER,
                analyticsSource: y,
                guildId: p,
                isTryItOut: g,
            });
        };
    return (0, r.jsx)(s.Z, {
        user: t,
        displayProfile: n,
        guildId: p,
        themeType: u.l.POPOUT,
        pendingBanner: m,
        pendingAccentColor: h,
        canUsePremiumProfileCustomization: _,
        children:
            !E &&
            (0, r.jsxs)(i.P3F, {
                onClick: I,
                className: f.clickable,
                children: [
                    (0, r.jsx)(v, {
                        size: "xs",
                        color: "white",
                    }),
                    (0, r.jsx)(i.Heading, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: O || S ? d.intl.string(d.t.N0bC3P) : d.intl.string(d.t.O1sT5v),
                    }),
                ],
            }),
    });
}

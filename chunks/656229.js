n.d(t, { Z: () => _ });
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
function _(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: _,
            canUsePremiumCustomization: p,
            pendingBanner: h,
            pendingAccentColor: m,
            isTryItOut: g,
            disabledInputs: E,
            onUpsellClick: b,
        } = e,
        { newestAnalyticsLocation: y } = (0, a.ZP)(),
        O = p || (null == n ? void 0 : n.canUsePremiumProfileCustomization) || !1,
        v = O ? i.vdY : i.SrA,
        I = (0, o.M)(O),
        T = () => {
            if (!O && !I) {
                null == b || b();
                return;
            }
            (0, l.$r)({
                uploadType: c.pC.BANNER,
                analyticsSource: y,
                guildId: _,
                isTryItOut: g,
            });
        };
    return (0, r.jsx)(s.Z, {
        user: t,
        displayProfile: n,
        guildId: _,
        themeType: u.l.POPOUT,
        pendingBanner: h,
        pendingAccentColor: m,
        canUsePremiumProfileCustomization: p,
        children:
            !E &&
            (0, r.jsxs)(i.P3F, {
                onClick: T,
                className: f.clickable,
                children: [
                    (0, r.jsx)(v, {
                        size: "xs",
                        color: "white",
                    }),
                    (0, r.jsx)(i.Heading, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: O || I ? d.intl.string(d.t.N0bC3P) : d.intl.string(d.t.O1sT5v),
                    }),
                ],
            }),
    });
}

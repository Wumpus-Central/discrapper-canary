n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(906732),
    a = n(222062),
    s = n(867176),
    l = n(654904),
    c = n(486324),
    u = n(228168),
    d = n(388032),
    f = n(83561);
function _(e) {
    let { user: t, displayProfile: n, guildId: _, canUsePremiumCustomization: p, pendingBanner: h, pendingAccentColor: m, isTryItOutFlow: g, disabledInputs: E, onUpsellClick: b } = e,
        { newestAnalyticsLocation: y } = (0, o.ZP)(),
        O = p || (null == n ? void 0 : n.canUsePremiumProfileCustomization) || !1,
        v = O ? i.vdY : i.SrA,
        I = (0, a.M)(O),
        S = () => {
            if (!O && !I) {
                null == b || b();
                return;
            }
            (0, l.$r)({
                uploadType: c.pC.BANNER,
                analyticsSource: y,
                guildId: _,
                isTryItOutFlow: g
            });
        };
    return (0, r.jsx)(s.Z, {
        user: t,
        displayProfile: n,
        guildId: _,
        themeType: u.lY.POPOUT,
        pendingBanner: h,
        pendingAccentColor: m,
        canUsePremiumProfileCustomization: p,
        children:
            !E &&
            (0, r.jsxs)(i.P3F, {
                onClick: S,
                className: f.clickable,
                children: [
                    (0, r.jsx)(v, {
                        size: 'xs',
                        color: 'white'
                    }),
                    (0, r.jsx)(i.X6q, {
                        variant: 'text-sm/medium',
                        color: 'always-white',
                        children: O || I ? d.intl.string(d.t.N0bC3N) : d.intl.string(d.t.O1sT5u)
                    })
                ]
            })
    });
}

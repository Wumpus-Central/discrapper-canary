n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(222062),
    a = n(867176),
    s = n(654904),
    l = n(486324),
    c = n(228168),
    u = n(388032),
    d = n(179168);
function f(e) {
    let { user: t, displayProfile: n, guildId: f, canUsePremiumCustomization: _, pendingBanner: p, pendingAccentColor: h, isTryItOutFlow: m, disabledInputs: g, onUpsellClick: E } = e,
        b = _ || (null == n ? void 0 : n.canUsePremiumProfileCustomization) || !1,
        y = b ? i.vdY : i.SrA,
        v = (0, o.M)(b),
        O = () => {
            if (!b && !v) {
                null == E || E();
                return;
            }
            (0, s.$r)(l.pC.BANNER, f, m);
        };
    return (0, r.jsx)(a.Z, {
        user: t,
        displayProfile: n,
        guildId: f,
        profileType: c.y0.BITE_SIZE,
        pendingBanner: p,
        pendingAccentColor: h,
        canUsePremiumProfileCustomization: _,
        children:
            !g &&
            (0, r.jsxs)(i.P3F, {
                onClick: O,
                className: d.clickable,
                children: [
                    (0, r.jsx)(y, {
                        size: 'xs',
                        color: 'white'
                    }),
                    (0, r.jsx)(i.X6q, {
                        variant: 'text-sm/medium',
                        color: 'always-white',
                        children: b || v ? u.NW.string(u.t.N0bC3N) : u.NW.string(u.t.O1sT5u)
                    })
                ]
            })
    });
}

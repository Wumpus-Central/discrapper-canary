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
    d = n(921700);
function f(e) {
    let { user: t, displayProfile: n, guildId: f, canUsePremiumCustomization: p, pendingBanner: _, isTryItOutFlow: h, disabledInputs: m, onUpsellClick: g } = e,
        E = p || (null == n ? void 0 : n.canUsePremiumProfileCustomization) || !1,
        v = E ? i.vdY : i.SrA,
        b = (0, o.M)(E),
        y = () => {
            if (!E && !b) {
                null == g || g();
                return;
            }
            (0, s.$r)(l.pC.BANNER, f, h);
        };
    return (0, r.jsx)(a.Z, {
        user: t,
        displayProfile: n,
        guildId: f,
        profileType: c.y0.BITE_SIZE,
        pendingBanner: _,
        canUsePremiumProfileCustomization: p,
        children:
            !m &&
            (0, r.jsxs)(i.P3F, {
                onClick: y,
                className: d.clickable,
                children: [
                    (0, r.jsx)(v, {
                        size: 'xs',
                        color: 'white'
                    }),
                    (0, r.jsx)(i.X6q, {
                        variant: 'text-sm/medium',
                        color: 'always-white',
                        children: E || b ? u.NW.string(u.t.N0bC3N) : u.NW.string(u.t.O1sT5u)
                    })
                ]
            })
    });
}

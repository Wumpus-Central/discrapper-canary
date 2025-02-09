n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(222062),
    s = n(867176),
    o = n(654904),
    l = n(486324),
    u = n(228168),
    c = n(388032),
    d = n(174363);
function f(e) {
    let { user: t, displayProfile: n, guildId: f, canUsePremiumCustomization: _, pendingBanner: p, isTryItOutFlow: h, disabledInputs: m, onUpsellClick: g } = e,
        E = _ || (null == n ? void 0 : n.canUsePremiumProfileCustomization) || !1,
        v = E ? r.vdY : r.SrA,
        y = (0, a.M)(E),
        I = () => {
            if (!E && !y) {
                null == g || g();
                return;
            }
            (0, o.$r)(l.pC.BANNER, f, h);
        };
    return (0, i.jsx)(s.Z, {
        user: t,
        displayProfile: n,
        guildId: f,
        profileType: u.y0.BITE_SIZE,
        pendingBanner: p,
        canUsePremiumProfileCustomization: _,
        children:
            !m &&
            (0, i.jsxs)(r.P3F, {
                onClick: I,
                className: d.clickable,
                children: [
                    (0, i.jsx)(v, {
                        size: 'xs',
                        color: 'white'
                    }),
                    (0, i.jsx)(r.X6q, {
                        variant: 'text-sm/medium',
                        color: 'always-white',
                        children: E || y ? c.intl.string(c.t.N0bC3N) : c.intl.string(c.t.O1sT5u)
                    })
                ]
            })
    });
}

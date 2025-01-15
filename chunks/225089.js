t.d(n, {
    Z: function () {
        return f;
    }
});
var a = t(200651);
t(192379);
var i = t(481060),
    c = t(222062),
    o = t(867176),
    s = t(654904),
    r = t(486324),
    d = t(228168),
    l = t(388032),
    u = t(757340);
function f(e) {
    let { user: n, displayProfile: t, guildId: f, canUsePremiumCustomization: p, pendingBanner: A, isTryItOutFlow: b, disabledInputs: m, onUpsellClick: v } = e,
        Z = p || (null == t ? void 0 : t.canUsePremiumProfileCustomization) || !1,
        h = Z ? i.PencilIcon : i.NitroWheelIcon,
        g = (0, c.M)(Z);
    return (0, a.jsx)(o.Z, {
        user: n,
        displayProfile: t,
        guildId: f,
        profileType: d.y0.BITE_SIZE,
        pendingBanner: A,
        canUsePremiumProfileCustomization: p,
        children:
            !m &&
            (0, a.jsxs)(i.Clickable, {
                onClick: () => {
                    if (!Z && !g) {
                        null == v || v();
                        return;
                    }
                    (0, s.$r)(r.pC.BANNER, f, b);
                },
                className: u.clickable,
                children: [
                    (0, a.jsx)(h, {
                        size: 'xs',
                        color: 'white'
                    }),
                    (0, a.jsx)(i.Heading, {
                        variant: 'text-sm/medium',
                        color: 'always-white',
                        children: Z || g ? l.intl.string(l.t.N0bC3N) : l.intl.string(l.t.O1sT5u)
                    })
                ]
            })
    });
}

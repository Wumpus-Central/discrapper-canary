t.d(i, {
    Z: function () {
        return f;
    }
});
var n = t(200651);
t(192379);
var a = t(481060),
    r = t(222062),
    o = t(867176),
    s = t(654904),
    l = t(486324),
    c = t(228168),
    d = t(388032),
    u = t(93428);
function f(e) {
    let { user: i, displayProfile: t, guildId: f, canUsePremiumCustomization: p, pendingBanner: _, isTryItOutFlow: b, disabledInputs: m, onUpsellClick: g } = e,
        x = p || (null == t ? void 0 : t.canUsePremiumProfileCustomization) || !1,
        h = x ? a.PencilIcon : a.NitroWheelIcon,
        v = (0, r.M)(x);
    return (0, n.jsx)(o.Z, {
        user: i,
        displayProfile: t,
        guildId: f,
        profileType: c.y0.BITE_SIZE,
        pendingBanner: _,
        canUsePremiumProfileCustomization: p,
        children:
            !m &&
            (0, n.jsxs)(a.Clickable, {
                onClick: () => {
                    if (!x && !v) {
                        null == g || g();
                        return;
                    }
                    (0, s.$r)(l.pC.BANNER, f, b);
                },
                className: u.clickable,
                children: [
                    (0, n.jsx)(h, {
                        size: 'xs',
                        color: 'white'
                    }),
                    (0, n.jsx)(a.Heading, {
                        variant: 'text-sm/medium',
                        color: 'always-white',
                        children: x || v ? d.intl.string(d.t.N0bC3N) : d.intl.string(d.t.O1sT5u)
                    })
                ]
            })
    });
}

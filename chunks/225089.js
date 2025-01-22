r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(222062),
    s = r(867176),
    l = r(654904),
    u = r(486324),
    c = r(228168),
    d = r(388032),
    f = r(93428);
function p(e) {
    let { user: n, displayProfile: r, guildId: p, canUsePremiumCustomization: h, pendingBanner: _, isTryItOutFlow: m, disabledInputs: g, onUpsellClick: E } = e,
        v = h || (null == r ? void 0 : r.canUsePremiumProfileCustomization) || !1,
        y = v ? a.PencilIcon : a.NitroWheelIcon,
        b = (0, o.M)(v),
        I = () => {
            if (!v && !b) {
                null == E || E();
                return;
            }
            (0, l.$r)(u.pC.BANNER, p, m);
        };
    return (0, i.jsx)(s.Z, {
        user: n,
        displayProfile: r,
        guildId: p,
        profileType: c.y0.BITE_SIZE,
        pendingBanner: _,
        canUsePremiumProfileCustomization: h,
        children:
            !g &&
            (0, i.jsxs)(a.Clickable, {
                onClick: I,
                className: f.clickable,
                children: [
                    (0, i.jsx)(y, {
                        size: 'xs',
                        color: 'white'
                    }),
                    (0, i.jsx)(a.Heading, {
                        variant: 'text-sm/medium',
                        color: 'always-white',
                        children: v || b ? d.intl.string(d.t.N0bC3N) : d.intl.string(d.t.O1sT5u)
                    })
                ]
            })
    });
}

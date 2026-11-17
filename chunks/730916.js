var n = l(696292),
    a = l(793574),
    s = l(969935),
    i = l(778705),
    r = l(87719),
    o = l(576761),
    c = l(321538),
    h = l(758836),
    d = l(682901),
    u = l(312653),
    m = l(792996);
function C(e) {
    let { analyticsLocations: t = [], shopTab: l = h.G2.ORBS } = e;
    (0, s.Cz)({ tab: l, analyticsLocations: t, analyticsSource: a.A.ORBS_BALANCE_MENU });
}
function _(e) {
    let { analyticsLocations: t = [] } = e;
    (0, i.A)({ subscriptionTier: d.pe.TIER_2, analyticsLocations: t });
}
l.d(
    t,
    {},
    {
        Ks: function (e) {
            let { nitroGatedOrbMultiplier: t, userIsPremiumTier2: l } = e;
            if (null == t) return void (0, r.x)();
            let n = l ? o.MA.NITRO : o.MA.UPSELL,
                a = l ? { customSubtitle: m.intl.format(u.default["wE4a/r"], { bonusOrbMultiplier: t }) } : void 0;
            (0, c.gC)(t, n, a);
        },
        P9: C,
        Wp: _,
        Ww: function () {
            (0, c.mA)({ fromContent: n.u.ORBS_BALANCE_MENU });
        },
        nS: {
            "1531422538125676707": (e) => {
                let { analyticsLocations: t } = e;
                C({ analyticsLocations: t, shopTab: h.G2.HOME });
            },
            "1531422538125676708": (e) => {
                let { analyticsLocations: t } = e;
                C({ analyticsLocations: t, shopTab: h.G2.HOME });
            },
            "1531422538125676709": (e) => {
                let { analyticsLocations: t } = e;
                _({ analyticsLocations: t });
            },
        },
    },
);

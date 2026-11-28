var a = l(696292),
    n = l(793574),
    s = l(969935),
    i = l(778705),
    r = l(87719),
    o = l(576761),
    c = l(321538),
    d = l(758836),
    u = l(682901),
    h = l(628595),
    m = l(792996);
function C(e) {
    let { analyticsLocations: t = [], shopTab: l = d.G2.ORBS } = e;
    (0, s.Cz)({ tab: l, analyticsLocations: t, analyticsSource: n.A.ORBS_BALANCE_MENU });
}
function _(e) {
    let { analyticsLocations: t = [] } = e;
    (0, i.A)({ subscriptionTier: u.pe.TIER_2, analyticsLocations: t });
}
l.d(
    t,
    {},
    {
        Ks: function (e) {
            let { nitroGatedOrbMultiplier: t, userIsPremiumTier2: l } = e;
            if (null == t) return void (0, r.x)();
            let a = l ? o.MA.NITRO : o.MA.UPSELL,
                n = l ? { customSubtitle: m.intl.format(h.default["wE4a/r"], { bonusOrbMultiplier: t }) } : void 0;
            (0, c.gC)(t, a, n);
        },
        P9: C,
        Wp: _,
        Ww: function () {
            (0, c.mA)({ fromContent: a.u.ORBS_BALANCE_MENU });
        },
        nS: {
            "1531422538125676707": (e) => {
                let { analyticsLocations: t } = e;
                C({ analyticsLocations: t, shopTab: d.G2.HOME });
            },
            "1531422538125676708": (e) => {
                let { analyticsLocations: t } = e;
                C({ analyticsLocations: t, shopTab: d.G2.HOME });
            },
            "1531422538125676709": (e) => {
                let { analyticsLocations: t } = e;
                _({ analyticsLocations: t });
            },
        },
    },
);

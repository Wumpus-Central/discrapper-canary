n.d(t, { Z: () => m });
var r = n(951288),
    i = n(647438),
    l = n(907862),
    a = n(26323),
    o = n(434404),
    s = n(626135),
    c = n(267642),
    u = n(981631),
    d = n(921944),
    p = n(30513),
    f = n(474936),
    h = n(388032),
    g = n(869305);
function m(e) {
    let { elementRef: t, guild: n, markAsDismissed: m, analyticsLocations: b } = e,
        _ = (0, c.f2)(n, u.Eu4.TIER_1)
            ? h.intl.string(h.t["57kzen"])
            : h.intl.formatToPlainString(h.t.pMftkJ, { boostCount: (0, c.KK)(n, u.Eu4.TIER_1) }),
        O = (0, c.f2)(n, u.Eu4.TIER_1) ? h.intl.string(h.t.rOFcBg) : h.intl.string(h.t.hvVgAQ);
    return (
        i.useEffect(() => {
            s.default.track(u.rMx.PREMIUM_UPSELL_VIEWED, {
                type: f.cd.INVITE_SPLASH_UPSELL,
                location: { page: u.ZY5.GUILD_CHANNEL },
                location_stack: b,
            });
        }, [b]),
        (0, r.jsx)(l.J2, {
            targetElementRef: t,
            graphic: {
                type: "image",
                src: g,
            },
            size: "lg",
            title: h.intl.string(h.t["36wK8/"]),
            body: _,
            onRequestClose: () => m(d.L.DISMISS),
            caretConfig: {
                position: "top",
                align: "center",
            },
            actions: [
                {
                    text: O,
                    onClick: () => {
                        (0, c.f2)(n, u.Eu4.TIER_1)
                            ? o.Z.open(n.id, u.pNK.BOOST_PERKS, { section: u.jXE.PREMIUM_GUILD_INVITE_SPLASH })
                            : (0, a.Z)({
                                  analyticsLocations: b,
                                  analyticsSourceLocation: u.jXE.PREMIUM_GUILD_INVITE_SPLASH,
                                  guild: n,
                                  perks: (0, p.o9)(),
                              }),
                            m(d.L.PRIMARY);
                    },
                },
            ],
        })
    );
}

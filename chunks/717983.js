n.d(a, { NitroOrbsBonusDefaultModal: () => p, NitroOrbsBonusGiftingModal: () => k });
var i = n(477900),
    s = n(582128),
    c = n(772707),
    o = n(192308),
    r = n(793574),
    e = n(110676),
    l = n(149256),
    u = n(758836),
    b = n(792996);
function d(t) {
    let { orbsAmount: a, ...n } = t;
    return (0, i.jsx)(c.k, {
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/d10c8e811697992fc3186c034d2767ec2c93ab49f8c742eb640f4bd1b10a0c8e.svg",
            aspectRatio: "16/9",
        },
        gradientColor: "nitro-pink",
        title: b.intl.formatToPlainString(b.t["O2/Bj8"], { orbAmount: a }),
        subtitle: b.intl.format(b.t.qiZPb6, { orbAmount: a }),
        ...n,
    });
}
function p(t) {
    let a = s.useCallback(() => {
            ((0, o.s7)(), (0, l.I)());
        }, []),
        n = s.useCallback(() => {
            ((0, o.s7)(),
                (0, e.Cz)({ tab: u.G2.ORBS, analyticsLocations: [], analyticsSource: r.A.PREMIUM_MARKETING }));
        }, []);
    return (0, i.jsx)(d, {
        ...t,
        actions: [
            { text: b.intl.string(b.t.AnlV9W), variant: "secondary", onClick: a },
            { text: b.intl.string(b.t.OhOWfI), variant: "primary", onClick: n },
        ],
    });
}
function k(t) {
    let { onClose: a, openGiftingBadgePostPurchaseModal: n, ...c } = t,
        l = s.useCallback(async () => {
            (await a(), n());
        }, [a, n]),
        p = s.useCallback(() => {
            ((0, o.s7)(),
                (0, e.Cz)({ tab: u.G2.ORBS, analyticsLocations: [], analyticsSource: r.A.PREMIUM_MARKETING }));
        }, []);
    return (0, i.jsx)(d, {
        ...c,
        onClose: l,
        actions: [
            { text: b.intl.string(b.t.OhOWfI), variant: "secondary", onClick: p },
            { text: b.intl.string(b.t.PDTjLN), variant: "primary", onClick: l },
        ],
    });
}

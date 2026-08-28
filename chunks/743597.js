n.d(a, { NitroOrbsBonusDefaultModal: () => p, NitroOrbsBonusGiftingModal: () => k });
var i = n(477900),
    s = n(582128),
    o = n(772707),
    c = n(192308),
    l = n(793574),
    r = n(839534),
    e = n(149256),
    u = n(758836),
    d = n(375708);
function b(t) {
    let { orbsAmount: a, ...n } = t;
    return (0, i.jsx)(o.k, {
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/d10c8e811697992fc3186c034d2767ec2c93ab49f8c742eb640f4bd1b10a0c8e.svg",
            aspectRatio: "16/9",
        },
        gradientColor: "nitro-pink",
        title: d.intl.formatToPlainString(d.t["O2/Bj8"], { orbAmount: a }),
        subtitle: d.intl.format(d.t.qiZPb6, { orbAmount: a }),
        ...n,
    });
}
function p(t) {
    let a = s.useCallback(() => {
            (0, c.closeAllModals)(), (0, e.I)();
        }, []),
        n = s.useCallback(() => {
            (0, c.closeAllModals)(),
                (0, r.Cz)({ tab: u.G2.ORBS, analyticsLocations: [], analyticsSource: l.A.PREMIUM_MARKETING });
        }, []);
    return (0, i.jsx)(b, {
        ...t,
        actions: [
            { text: d.intl.string(d.t.AnlV9W), variant: "secondary", onClick: a },
            { text: d.intl.string(d.t.OhOWfI), variant: "primary", onClick: n },
        ],
    });
}
function k(t) {
    let { onClose: a, openGiftingBadgePostPurchaseModal: n, ...o } = t,
        e = s.useCallback(async () => {
            await a(), n();
        }, [a, n]),
        p = s.useCallback(() => {
            (0, c.closeAllModals)(),
                (0, r.Cz)({ tab: u.G2.ORBS, analyticsLocations: [], analyticsSource: l.A.PREMIUM_MARKETING });
        }, []);
    return (0, i.jsx)(b, {
        ...o,
        onClose: e,
        actions: [
            { text: d.intl.string(d.t.OhOWfI), variant: "secondary", onClick: p },
            { text: d.intl.string(d.t.PDTjLN), variant: "primary", onClick: e },
        ],
    });
}

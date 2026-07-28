i.d(a, { default: () => b });
var n = i(477900),
    c = i(582128),
    s = i(192308),
    o = i(772707),
    e = i(793574),
    l = i(34332),
    r = i(149256),
    d = i(758836),
    p = i(375708);
function b(t) {
    let { transitionState: a, onClose: i, orbsAmount: b } = t,
        u = c.useCallback(() => {
            (0, s.closeAllModals)(), (0, r.I)();
        }, []),
        k = c.useCallback(() => {
            (0, s.closeAllModals)(),
                (0, l.Cz)({ tab: d.G2.ORBS, analyticsLocations: [], analyticsSource: e.A.PREMIUM_MARKETING });
        }, []);
    return (0, n.jsx)(o.k, {
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/d10c8e811697992fc3186c034d2767ec2c93ab49f8c742eb640f4bd1b10a0c8e.svg",
            aspectRatio: "16/9",
        },
        gradientColor: "nitro-pink",
        title: p.intl.formatToPlainString(p.t["O2/Bj8"], { orbAmount: b }),
        subtitle: p.intl.format(p.t.qiZPb6, { orbAmount: b }),
        onClose: i,
        transitionState: a,
        actions: [
            { text: p.intl.string(p.t.AnlV9W), variant: "secondary", onClick: u },
            { text: p.intl.string(p.t.OhOWfI), variant: "primary", onClick: k },
        ],
    });
}

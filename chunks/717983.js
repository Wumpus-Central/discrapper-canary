a.d(n, { NitroOrbsBonusDefaultModal: () => O, NitroOrbsBonusGiftingModal: () => h });
var i = a(477900),
    o = a(582128),
    r = a(517352),
    s = a(772707),
    c = a(192308),
    e = a(793574),
    l = a(969935),
    u = a(149256),
    d = a(641436),
    p = a(807098),
    b = a(788883),
    f = a(758836),
    C = a(792996);
function k(t, n) {
    return null != t && "" !== t ? t : n;
}
function m(t) {
    let { orbsAmount: n, ...a } = t,
        o = (0, d.uF)(r.oW.ORBS_CONFIRMATION_MODAL),
        c = (0, p.T)(o?.surface.art),
        e = C.intl.formatToPlainString(C.t["O2/Bj8"], { orbAmount: n }),
        l = C.intl.format(C.t.qiZPb6, { orbAmount: n }),
        u = k(
            c,
            "https://cdn.discordapp.com/assets/content/d10c8e811697992fc3186c034d2767ec2c93ab49f8c742eb640f4bd1b10a0c8e.svg",
        ),
        f = k(o?.surface.header, e),
        m = k(o?.surface.subheader, l);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != o &&
                (0, i.jsx)(b.A, { componentType: o.componentType, componentId: o.id, promotionId: o.promotionId }),
            (0, i.jsx)(s.k, {
                graphic: { type: "image", src: u, aspectRatio: "16/9" },
                gradientColor: "nitro-pink",
                title: f,
                subtitle: m,
                ...a,
            }),
        ],
    });
}
function O(t) {
    let n = o.useCallback(() => {
            ((0, c.s7)(), (0, u.I)());
        }, []),
        a = o.useCallback(() => {
            ((0, c.s7)(),
                (0, l.Cz)({ tab: f.G2.ORBS, analyticsLocations: [], analyticsSource: e.A.PREMIUM_MARKETING }));
        }, []);
    return (0, i.jsx)(m, {
        ...t,
        actions: [
            { text: C.intl.string(C.t.AnlV9W), variant: "secondary", onClick: n },
            { text: C.intl.string(C.t.OhOWfI), variant: "primary", onClick: a },
        ],
    });
}
function h(t) {
    let { onClose: n, openGiftingBadgePostPurchaseModal: a, ...r } = t,
        s = o.useCallback(async () => {
            (await n(), a());
        }, [n, a]),
        u = o.useCallback(() => {
            ((0, c.s7)(),
                (0, l.Cz)({ tab: f.G2.ORBS, analyticsLocations: [], analyticsSource: e.A.PREMIUM_MARKETING }));
        }, []);
    return (0, i.jsx)(m, {
        ...r,
        onClose: s,
        actions: [
            { text: C.intl.string(C.t.OhOWfI), variant: "secondary", onClick: u },
            { text: C.intl.string(C.t.PDTjLN), variant: "primary", onClick: s },
        ],
    });
}

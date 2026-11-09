i.d(a, { default: () => k });
var n = i(477900),
    e = i(582128),
    s = i(192308),
    c = i(772707),
    o = i(34188),
    r = i(793574),
    l = i(429811),
    p = i(149256),
    d = i(758836),
    u = i(792996);
let b = new Date(2026, 8, 11);
function k(t) {
    let { transitionState: a, onClose: i } = t,
        k = e.useCallback(() => {
            ((0, s.s7)(), (0, p.I)());
        }, []),
        h = e.useCallback(() => {
            ((0, s.s7)(),
                (0, l.Cz)({ tab: d.G2.HOME, analyticsLocations: [], analyticsSource: r.A.PREMIUM_MARKETING }));
        }, []);
    return (0, n.jsx)(c.k, {
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/d4a35e70f4690b501fc8daa265f8b10d78b4fd705e6e48477e30e03ab92a2e19.png",
            aspectRatio: "16/9",
        },
        gradientColor: "nitro-pink",
        title: u.intl.string(u.t.qIVU1h),
        subtitle: u.intl.format(u.t.SlS71X, { date: b }),
        onClose: i,
        transitionState: a,
        actions: [
            { text: u.intl.string(u.t.UvLTEv), variant: "secondary", onClick: k },
            { text: u.intl.string(u.t.F7Swt9), variant: "primary", icon: o.ShopIcon, onClick: h },
        ],
    });
}

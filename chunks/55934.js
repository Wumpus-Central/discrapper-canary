e.d(a, { default: () => k });
var i = e(477900),
    s = e(582128),
    n = e(192308),
    l = e(772707),
    c = e(34188),
    o = e(793574),
    r = e(34332),
    d = e(149256),
    p = e(758836),
    u = e(375708);
let b = new Date(2026, 8, 9);
function k(t) {
    let { transitionState: a, onClose: e } = t,
        k = s.useCallback(() => {
            (0, n.closeAllModals)(), (0, d.I)();
        }, []),
        C = s.useCallback(() => {
            (0, n.closeAllModals)(),
                (0, r.Cz)({ tab: p.G2.HOME, analyticsLocations: [], analyticsSource: o.A.PREMIUM_MARKETING });
        }, []);
    return (0, i.jsx)(l.k, {
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/d4a35e70f4690b501fc8daa265f8b10d78b4fd705e6e48477e30e03ab92a2e19.png",
            aspectRatio: "16/9",
        },
        gradientColor: "purple",
        title: u.intl.string(u.t.qIVU1h),
        subtitle: u.intl.format(u.t.SlS71X, { date: b }),
        onClose: e,
        transitionState: a,
        actions: [
            { text: u.intl.string(u.t.UvLTEv), variant: "secondary", onClick: k },
            { text: u.intl.string(u.t.F7Swt9), variant: "primary", icon: c.U, onClick: C },
        ],
    });
}

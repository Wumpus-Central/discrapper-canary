n.d(t, { Z: () => p });
var a = n(54381),
    r = n(442837),
    i = n(907862),
    l = n(607070),
    s = n(100527),
    o = n(314897),
    c = n(892001),
    d = n(228168),
    u = n(921944),
    m = n(388032);
function p(e) {
    let { targetElementRef: t, markAsDismissed: n, children: p } = e,
        h = (0, r.e7)([o.default], () => o.default.getId()),
        f = (0, r.e7)([l.Z], () => l.Z.useReducedMotion);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            p,
            (0, a.jsx)(i.J2, {
                targetElementRef: t,
                title: m.intl.string(m.t.gxcsSq),
                body: m.intl.string(m.t["8L7E5l"]),
                caretConfig: { align: "start" },
                graphic: {
                    type: "image",
                    src: f
                        ? "https://cdn.discordapp.com/assets/content/1b55390a202dcca3843b6c9205af0379cfa072f34d8b9217bce04aba4d373e5b.png"
                        : "https://cdn.discordapp.com/assets/content/fdb6d4e8a2f01f917d2025a8ca58ebd55e4eada92df1d5386f73d91d6acad1f9.png",
                },
                position: "top",
                align: "left",
                gradientColor: "blue",
                size: "md",
                onRequestClose: () => {
                    n(u.L.USER_DISMISS);
                },
                actions: [
                    {
                        text: m.intl.string(m.t.RzWDqY),
                        variant: "primary",
                        onClick: () => {
                            n(u.L.TAKE_ACTION),
                                (0, c.openUserProfileModal)({
                                    userId: h,
                                    sourceAnalyticsLocations: [s.Z.ACCOUNT],
                                    hideRestrictedProfile: !0,
                                    tabSection: d.oh.WIDGETS,
                                });
                        },
                    },
                ],
            }),
        ],
    });
}

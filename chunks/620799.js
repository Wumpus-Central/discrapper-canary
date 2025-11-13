n.d(t, { Z: () => h });
var a = n(951288),
    i = n(442837),
    r = n(907862),
    l = n(607070),
    s = n(100527),
    o = n(314897),
    c = n(172416),
    d = n(892001),
    u = n(228168),
    m = n(921944),
    p = n(388032);
function h(e) {
    let { targetElementRef: t, markAsDismissed: n, children: h } = e,
        x = (0, i.e7)([o.default], () => o.default.getId()),
        g = (0, i.e7)([l.Z], () => l.Z.useReducedMotion),
        f = (0, c.bg)({ location: "GameWidgetsPopover" });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            h,
            (0, a.jsx)(r.J2, {
                targetElementRef: t,
                badge: f
                    ? {
                          type: "early_access",
                          variant: "expressive",
                      }
                    : void 0,
                title: p.intl.string(p.t.gxcsSq),
                body: p.intl.string(p.t["8L7E5l"]),
                caretConfig: { align: "start" },
                graphic: {
                    type: "image",
                    src: g
                        ? "https://cdn.discordapp.com/assets/content/1b55390a202dcca3843b6c9205af0379cfa072f34d8b9217bce04aba4d373e5b.png"
                        : "https://cdn.discordapp.com/assets/content/fdb6d4e8a2f01f917d2025a8ca58ebd55e4eada92df1d5386f73d91d6acad1f9.png",
                },
                position: "top",
                align: "left",
                gradientColor: "blue",
                size: "md",
                onRequestClose: () => {
                    n(m.L.USER_DISMISS);
                },
                actions: [
                    {
                        text: p.intl.string(p.t.RzWDqY),
                        variant: "primary",
                        onClick: () => {
                            n(m.L.TAKE_ACTION),
                                (0, d.openUserProfileModal)({
                                    userId: x,
                                    sourceAnalyticsLocations: [s.Z.ACCOUNT],
                                    hideRestrictedProfile: !0,
                                    section: u.oh.WIDGETS,
                                });
                        },
                    },
                ],
            }),
        ],
    });
}

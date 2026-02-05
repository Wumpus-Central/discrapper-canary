n.d(t, { A: () => h });
var a = n(627968),
    s = n(311907),
    i = n(342494),
    l = n(775602),
    r = n(793574),
    o = n(961350),
    d = n(657331),
    c = n(518477),
    u = n(49999),
    m = n(985018);
function h(e) {
    let { targetElementRef: t, markAsDismissed: n, children: h } = e,
        x = (0, s.bG)([o.default], () => o.default.getId()),
        p = (0, s.bG)([l.A], () => l.A.useReducedMotion);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            h,
            (0, a.jsx)(i.AM, {
                targetElementRef: t,
                title: m.intl.string(m.t.gxcsSq),
                body: m.intl.string(m.t["8L7E5l"]),
                caretConfig: { align: "start" },
                graphic: {
                    type: "image",
                    src: p
                        ? "https://cdn.discordapp.com/assets/content/1b55390a202dcca3843b6c9205af0379cfa072f34d8b9217bce04aba4d373e5b.png"
                        : "https://cdn.discordapp.com/assets/content/fdb6d4e8a2f01f917d2025a8ca58ebd55e4eada92df1d5386f73d91d6acad1f9.png",
                },
                position: "top",
                align: "left",
                gradientColor: "blue",
                size: "md",
                onRequestClose: () => {
                    n(u.i.USER_DISMISS);
                },
                actions: [
                    {
                        text: m.intl.string(m.t.RzWDqY),
                        variant: "primary",
                        onClick: () => {
                            n(u.i.TAKE_ACTION),
                                (0, d.openUserProfileModal)({
                                    userId: x,
                                    sourceAnalyticsLocations: [r.A.ACCOUNT],
                                    hideRestrictedProfile: !0,
                                    tabSection: c.RP.WIDGETS,
                                });
                        },
                    },
                ],
            }),
        ],
    });
}

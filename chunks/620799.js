n.d(t, { Z: () => h });
var r = n(951288),
    i = n(442837),
    a = n(907862),
    o = n(607070),
    s = n(100527),
    l = n(314897),
    c = n(892001),
    u = n(228168),
    d = n(921944),
    f = n(388032);
let _ =
        "https://cdn.discordapp.com/assets/content/1b55390a202dcca3843b6c9205af0379cfa072f34d8b9217bce04aba4d373e5b.png",
    p =
        "https://cdn.discordapp.com/assets/content/fdb6d4e8a2f01f917d2025a8ca58ebd55e4eada92df1d5386f73d91d6acad1f9.png";
function h(e) {
    let { targetElementRef: t, markAsDismissed: n, children: h } = e,
        m = (0, i.e7)([l.default], () => l.default.getId()),
        g = (0, i.e7)([o.Z], () => o.Z.useReducedMotion);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            h,
            (0, r.jsx)(a.J2, {
                targetElementRef: t,
                title: f.intl.string(f.t.gxcsSk),
                body: f.intl.string(f.t["8L7E5u"]),
                caretConfig: { align: "start" },
                graphic: {
                    type: "image",
                    src: g ? _ : p,
                },
                position: "top",
                align: "left",
                gradientColor: "blue",
                size: "md",
                onRequestClose: () => {
                    n(d.L.USER_DISMISS);
                },
                actions: [
                    {
                        text: f.intl.string(f.t.RzWDqa),
                        variant: "primary",
                        onClick: () => {
                            n(d.L.TAKE_ACTION),
                                (0, c.openUserProfileModal)({
                                    userId: m,
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

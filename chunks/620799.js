n.d(t, { Z: () => _ });
var r = n(951288),
    i = n(442837),
    a = n(907862),
    o = n(100527),
    s = n(314897),
    l = n(892001),
    c = n(228168),
    u = n(921944),
    d = n(388032);
let f =
    "https://cdn.discordapp.com/assets/content/1b55390a202dcca3843b6c9205af0379cfa072f34d8b9217bce04aba4d373e5b.png";
function _(e) {
    let { targetElementRef: t, markAsDismissed: n, children: _ } = e,
        p = (0, i.e7)([s.default], () => s.default.getId());
    return (0, r.jsxs)(r.Fragment, {
        children: [
            _,
            (0, r.jsx)(a.J2, {
                targetElementRef: t,
                title: d.intl.string(d.t.gxcsSk),
                body: d.intl.string(d.t["8L7E5u"]),
                caretConfig: {
                    position: "bottom",
                    align: "start",
                },
                graphic: {
                    type: "image",
                    src: f,
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
                        text: d.intl.string(d.t.RzWDqa),
                        variant: "primary",
                        onClick: () => {
                            n(u.L.TAKE_ACTION),
                                (0, l.openUserProfileModal)({
                                    userId: p,
                                    sourceAnalyticsLocations: [o.Z.ACCOUNT],
                                    hideRestrictedProfile: !0,
                                    section: c.oh.WIDGETS,
                                });
                        },
                    },
                ],
            }),
        ],
    });
}

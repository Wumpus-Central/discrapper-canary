n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    l = n(481060),
    o = n(434479),
    a = n(703656),
    s = n(981631),
    c = n(176505),
    u = n(401561),
    d = n(388032);
let p = i.memo(function (e) {
    let { guildId: t, selected: n } = e,
        p = i.useCallback(() => {
            (0, a.uL)(s.Z5c.CHANNEL(t, c.oC.PORTKEY));
        }, [t]);
    return (0, r.jsx)(o.m, {
        id: "portkey-".concat(t),
        renderIcon: (e) =>
            (0, r.jsx)(l.iWm, {
                size: "md",
                className: e,
                color: "currentColor",
            }),
        text: d.intl.string(u.default.lH9Dio),
        selected: n,
        onClick: p,
    });
});

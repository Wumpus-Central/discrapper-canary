n.d(t, { z: () => c });
var r = n(951288);
n(647438);
var i = n(793030),
    l = n(481060),
    a = n(640175),
    s = n(388032),
    o = n(489550);
function c(e) {
    let { guildId: t, defaultSettings: n, canManageGuild: c } = e;
    return (0, r.jsxs)(l.hjN, {
        className: o.settings,
        children: [
            (0, r.jsxs)("div", {
                className: o.halfWidth,
                children: [
                    (0, r.jsx)(l.vwX, { children: s.intl.string(s.t["23TVho"]) }),
                    (0, r.jsxs)(i.xvT, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: [s.intl.string(s.t.U4LwWF), " ", s.intl.string(s.t.xdY0pK)],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: o.halfWidth,
                children: (0, r.jsx)(a.z, {
                    guildId: t,
                    defaultSettings: n,
                    canManageGuild: c,
                }),
            }),
        ],
    });
}

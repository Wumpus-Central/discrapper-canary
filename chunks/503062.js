"use strict";
n.d(t, { A: () => v });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(442433),
    o = n(297413),
    d = n(439547),
    c = n(714114),
    u = n(729551),
    h = n(178418),
    p = n(87664),
    f = n(290863),
    A = n(939496),
    _ = n(652215),
    g = n(996988),
    m = n(794904);
let E = a._3J.SIZE_40,
    x = (0, a.FT9)(E);
function v(e) {
    let { user: t, status: v, guildId: y, channelId: S, onSelect: C } = e,
        { theme: I, themeType: N } = (0, A.E)(),
        T = s.useMemo(() => t.isNonUserBot() || (0, h.c)(t, S), [t, S]),
        { activities: O, isMobileOnline: b } = (0, l.cf)([f.A], () => ({
            activities: f.A.getActivities(t.id),
            isMobileOnline: f.A.isMobileOnline(t.id),
        })),
        j = (0, p.A)(t.id),
        { voiceActivityStatusEnabled: D } = (0, d.g)({ location: "UserProfileMutualFriendRow" }),
        { voiceChannel: R } = (0, c.A)({ userId: D ? t.id : void 0, guildId: y });
    return (0, i.jsxs)(a.DUT, {
        focusProps: N === g.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: m.nM,
        onClick: C,
        onContextMenu: (e) => {
            (0, r.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("3795"), n.e("32418"), n.e("57600")]).then(
                    n.bind(n, 668569),
                );
                return (n) => (0, i.jsx)(e, { ...n, user: t });
            });
        },
        children: [
            (0, i.jsx)(a.euF, {
                src: t.getAvatarURL(y, x),
                "aria-label": t.username,
                size: E,
                status: T ? _.clD.UNKNOWN : v,
                statusBackdropColor: T ? void 0 : (0, a.C$5)(I),
                isMobile: b,
                className: m.my,
            }),
            (0, i.jsxs)("div", {
                className: m.zH,
                children: [
                    (0, i.jsx)(o.A, { user: t, className: m.Tc, discriminatorClass: m.D2 }),
                    (0, i.jsx)(u.A, { user: t, activities: O, applicationStream: j, voiceChannel: R }),
                ],
            }),
        ],
    });
}

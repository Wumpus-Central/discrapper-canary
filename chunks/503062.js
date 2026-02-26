"use strict";
n.d(t, { A: () => y });
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
    A = n(290863),
    f = n(939496),
    g = n(652215),
    _ = n(996988),
    m = n(565702);
let E = a._3J.SIZE_40,
    x = (0, a.FT9)(E);
function y(e) {
    let { user: t, status: y, guildId: v, channelId: S, onSelect: C } = e,
        { theme: I, themeType: N } = (0, f.E)(),
        T = s.useMemo(() => t.isNonUserBot() || (0, h.c)(t, S), [t, S]),
        { activities: O, isMobileOnline: b } = (0, l.cf)([A.A], () => ({
            activities: A.A.getActivities(t.id),
            isMobileOnline: A.A.isMobileOnline(t.id),
        })),
        j = (0, p.A)(t.id),
        { voiceActivityStatusEnabled: D } = (0, d.g)({ location: "UserProfileMutualFriendRow" }),
        { voiceChannel: R } = (0, c.A)({ userId: D ? t.id : void 0, guildId: v });
    return (0, i.jsxs)(a.DUT, {
        focusProps: N === _.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: m.nM,
        onClick: C,
        onContextMenu: (e) => {
            (0, r.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("3795"), n.e("32418"), n.e("98438")]).then(
                    n.bind(n, 668569),
                );
                return (n) => (0, i.jsx)(e, { ...n, user: t });
            });
        },
        children: [
            (0, i.jsx)(a.euF, {
                src: t.getAvatarURL(v, x),
                "aria-label": t.username,
                size: E,
                status: T ? g.clD.UNKNOWN : y,
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

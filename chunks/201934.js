i.d(s, { A: () => _ });
var t = i(627968),
    a = i(64700),
    n = i(17928),
    l = i(778712),
    r = i(97808),
    o = i(939249),
    d = i(133171),
    u = i(442433),
    c = i(297413),
    f = i(714114),
    A = i(394871),
    h = i(178418),
    m = i(87664),
    v = i(290863),
    x = i(19575);
let g = (0, i(945810).mj)({
    name: "2026-04-consistent-profiles",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var M = i(854627),
    C = i(939496),
    j = i(652215),
    p = i(996988),
    I = i(921519);
let b = l._3.SIZE_40,
    N = x.Ay.getEnableHardwareAcceleration();
function _(e) {
    let { user: s, status: l, guildId: x, channelId: _, onSelect: k } = e,
        { theme: E, themeType: y } = (0, C.E)(),
        F = a.useMemo(() => s.isNonUserBot() || (0, h.c)(s, _), [s, _]),
        { activities: S, isMobileOnline: w } = (0, n.cf)([v.A], () => ({
            activities: v.A.getActivities(s.id),
            isMobileOnline: v.A.isMobileOnline(s.id),
        })),
        D = (0, m.A)(s.id),
        { voiceChannel: L } = (0, f.A)({ userId: s.id, guildId: x }),
        U = (function (e) {
            let { enabled: s } = g.useConfig({ location: e });
            return s;
        })("UserProfileMutualFriendRow"),
        {
            avatarSrc: P,
            avatarDecorationSrc: z,
            eventHandlers: R,
        } = (0, M.A)({ userId: s.id, guildId: x, size: b, animateOnHover: !0 }),
        H = N && U ? r.Js : r.eu;
    return (0, t.jsxs)(o.D, {
        ...(U ? R : {}),
        focusProps: y === p.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: I.nM,
        onClick: k,
        onContextMenu: (e) => {
            (0, u.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    i.e("25719"),
                    i.e("26132"),
                    i.e("46652"),
                    i.e("93190"),
                    i.e("34552"),
                    i.e("8757"),
                    i.e("89673"),
                    i.e("85968"),
                    i.e("60195"),
                    i.e("68403"),
                    i.e("29787"),
                    i.e("97558"),
                    i.e("94000"),
                    i.e("91994"),
                    i.e("76665"),
                    i.e("76273"),
                    i.e("24198"),
                    i.e("56753"),
                    i.e("72883"),
                    i.e("49644"),
                    i.e("42204"),
                    i.e("83972"),
                    i.e("32418"),
                ]).then(i.bind(i, 668569));
                return (i) => (0, t.jsx)(e, { ...i, user: s });
            });
        },
        children: [
            (0, t.jsx)(H, {
                src: P,
                avatarDecoration: U ? z : void 0,
                "aria-label": s.username,
                size: b,
                status: F ? j.clD.UNKNOWN : l,
                statusBackdropColor: F ? void 0 : (0, d.C$)(E),
                isMobile: w,
                className: I.my,
            }),
            (0, t.jsxs)("div", {
                className: I.zH,
                children: [
                    (0, t.jsx)(c.A, { user: s, className: I.Tc, discriminatorClass: I.D2 }),
                    (0, t.jsx)(A.A, { user: s, activities: S, applicationStream: D, voiceChannel: L }),
                ],
            }),
        ],
    });
}

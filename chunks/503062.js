i.d(s, { A: () => N });
var n = i(627968),
    t = i(64700),
    a = i(17928),
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
    x = i(19575),
    g = i(956705),
    C = i(854627),
    M = i(939496),
    b = i(652215),
    j = i(996988),
    p = i(921519);
let I = l._3.SIZE_40,
    E = x.Ay.getEnableHardwareAcceleration();
function N(e) {
    let { user: s, status: l, guildId: x, channelId: N, onSelect: _ } = e,
        { theme: k, themeType: y } = (0, M.E)(),
        F = t.useMemo(() => s.isNonUserBot() || (0, h.c)(s, N), [s, N]),
        { activities: S, isMobileOnline: w } = (0, a.cf)([v.A], () => ({
            activities: v.A.getActivities(s.id),
            isMobileOnline: v.A.isMobileOnline(s.id),
        })),
        D = (0, m.A)(s.id),
        { voiceChannel: L } = (0, f.Ay)({ userId: s.id, guildId: x }),
        U = (0, g.r)("UserProfileMutualFriendRow"),
        {
            avatarSrc: P,
            avatarDecorationSrc: z,
            eventHandlers: R,
        } = (0, C.A)({ userId: s.id, guildId: x, size: I, animateOnHover: !0 }),
        H = E && U ? r.Js : r.eu;
    return (0, n.jsxs)(o.D, {
        ...(U ? R : {}),
        focusProps: y === j.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: p.nM,
        onClick: _,
        onContextMenu: function (e) {
            (0, u.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    i.e("71406"),
                    i.e("94881"),
                    i.e("26132"),
                    i.e("46652"),
                    i.e("93190"),
                    i.e("34552"),
                    i.e("8757"),
                    i.e("85968"),
                    i.e("89673"),
                    i.e("68403"),
                    i.e("29787"),
                    i.e("82073"),
                    i.e("97558"),
                    i.e("91994"),
                    i.e("76665"),
                    i.e("76273"),
                    i.e("24198"),
                    i.e("56753"),
                    i.e("72883"),
                    i.e("49644"),
                    i.e("42204"),
                    i.e("42191"),
                    i.e("32418"),
                ]).then(i.bind(i, 668569));
                return (i) => (0, n.jsx)(e, { ...i, user: s });
            });
        },
        children: [
            (0, n.jsx)(H, {
                src: P,
                avatarDecoration: U ? z : void 0,
                "aria-label": s.username,
                size: I,
                status: F ? b.clD.UNKNOWN : l,
                statusBackdropColor: F ? void 0 : (0, d.C$)(k),
                isMobile: w,
                className: p.my,
            }),
            (0, n.jsxs)("div", {
                className: p.zH,
                children: [
                    (0, n.jsx)(c.A, { user: s, className: p.Tc, usernameClass: p.QC, discriminatorClass: p.D2 }),
                    (0, n.jsx)(A.A, { user: s, activities: S, applicationStream: D, voiceChannel: L }),
                ],
            }),
        ],
    });
}

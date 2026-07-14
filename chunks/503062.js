i.d(s, { A: () => N });
var a = i(627968),
    n = i(64700),
    t = i(17928),
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
    g = i(19575),
    x = i(956705),
    C = i(854627),
    M = i(939496),
    b = i(652215),
    j = i(996988),
    p = i(921519);
let I = l._3.SIZE_40,
    E = g.Ay.getEnableHardwareAcceleration();
function N(e) {
    let { user: s, status: l, guildId: g, channelId: N, onSelect: _ } = e,
        { theme: k, themeType: y } = (0, M.E)(),
        w = n.useMemo(() => s.isNonUserBot() || (0, h.c)(s, N), [s, N]),
        { activities: F, isMobileOnline: S } = (0, t.cf)([v.A], () => ({
            activities: v.A.getActivities(s.id),
            isMobileOnline: v.A.isMobileOnline(s.id),
        })),
        D = (0, m.A)(s.id),
        { voiceChannel: L } = (0, f.Ay)({ userId: s.id, guildId: g }),
        U = (0, x.r)("UserProfileMutualFriendRow"),
        {
            avatarSrc: P,
            avatarDecorationSrc: z,
            eventHandlers: R,
        } = (0, C.A)({ userId: s.id, guildId: g, size: I, animateOnHover: !0 }),
        T = E && U ? r.Js : r.eu;
    return (0, a.jsxs)(o.D, {
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
                return (i) => (0, a.jsx)(e, { ...i, user: s });
            });
        },
        children: [
            (0, a.jsx)(T, {
                src: P,
                avatarDecoration: U ? z : void 0,
                "aria-label": s.username,
                size: I,
                status: w ? b.clD.UNKNOWN : l,
                statusBackdropColor: w ? void 0 : (0, d.C$)(k),
                isMobile: S,
                className: p.my,
            }),
            (0, a.jsxs)("div", {
                className: p.zH,
                children: [
                    (0, a.jsx)(c.A, {
                        user: s,
                        className: p.Tc,
                        usernameClass: p.QC,
                        discriminatorClass: p.D2,
                        showGuildTag: U,
                    }),
                    (0, a.jsx)(A.A, { user: s, activities: F, applicationStream: D, voiceChannel: L }),
                ],
            }),
        ],
    });
}

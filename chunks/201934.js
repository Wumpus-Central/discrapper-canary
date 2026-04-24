n.d(t, { A: () => N });
var i = n(627968),
    s = n(64700),
    l = n(17928),
    a = n(778712),
    o = n(97808),
    r = n(939249),
    d = n(133171),
    c = n(442433),
    u = n(297413),
    h = n(714114),
    p = n(729551),
    _ = n(178418),
    f = n(87664),
    A = n(290863),
    g = n(19575);
let m = (0, n(945810).mj)({
    name: "2026-04-consistent-profiles",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var E = n(854627),
    y = n(939496),
    x = n(652215),
    v = n(996988),
    S = n(921519);
let C = a._3.SIZE_40,
    I = g.Ay.getEnableHardwareAcceleration();
function N(e) {
    let { user: t, status: a, guildId: g, channelId: N, onSelect: T } = e,
        { theme: O, themeType: b } = (0, y.E)(),
        D = s.useMemo(() => t.isNonUserBot() || (0, _.c)(t, N), [t, N]),
        { activities: j, isMobileOnline: L } = (0, l.cf)([A.A], () => ({
            activities: A.A.getActivities(t.id),
            isMobileOnline: A.A.isMobileOnline(t.id),
        })),
        w = (0, f.A)(t.id),
        { voiceChannel: R } = (0, h.A)({ userId: t.id, guildId: g }),
        k = (function (e) {
            let { enabled: t } = m.useConfig({ location: e });
            return t;
        })("UserProfileMutualFriendRow"),
        {
            avatarSrc: M,
            avatarDecorationSrc: P,
            eventHandlers: G,
        } = (0, E.A)({ userId: t.id, guildId: g, size: C, animateOnHover: !0 }),
        V = I && k ? o.Js : o.eu;
    return (0, i.jsxs)(r.D, {
        ...(k ? G : {}),
        focusProps: b === v.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: S.nM,
        onClick: T,
        onContextMenu: (e) => {
            (0, c.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("97262"),
                    n.e("24170"),
                    n.e("53635"),
                    n.e("32418"),
                    n.e("97790"),
                ]).then(n.bind(n, 668569));
                return (n) => (0, i.jsx)(e, { ...n, user: t });
            });
        },
        children: [
            (0, i.jsx)(V, {
                src: M,
                avatarDecoration: k ? P : void 0,
                "aria-label": t.username,
                size: C,
                status: D ? x.clD.UNKNOWN : a,
                statusBackdropColor: D ? void 0 : (0, d.C$)(O),
                isMobile: L,
                className: S.my,
            }),
            (0, i.jsxs)("div", {
                className: S.zH,
                children: [
                    (0, i.jsx)(u.A, { user: t, className: S.Tc, discriminatorClass: S.D2 }),
                    (0, i.jsx)(p.A, { user: t, activities: j, applicationStream: w, voiceChannel: R }),
                ],
            }),
        ],
    });
}

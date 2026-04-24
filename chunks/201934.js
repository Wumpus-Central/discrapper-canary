n.d(t, { A: () => y });
var i = n(627968),
    l = n(64700),
    a = n(17928),
    s = n(778712),
    r = n(97808),
    o = n(939249),
    d = n(133171),
    c = n(442433),
    u = n(297413),
    h = n(714114),
    _ = n(729551),
    m = n(178418),
    g = n(87664),
    p = n(290863),
    A = n(19575);
let x = (0, n(945810).mj)({
    name: "2026-04-consistent-profiles",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var f = n(854627),
    b = n(939496),
    I = n(652215),
    C = n(996988),
    E = n(921519);
let j = s._3.SIZE_40,
    v = A.Ay.getEnableHardwareAcceleration();
function y(e) {
    let { user: t, status: s, guildId: A, channelId: y, onSelect: S } = e,
        { theme: T, themeType: N } = (0, b.E)(),
        R = l.useMemo(() => t.isNonUserBot() || (0, m.c)(t, y), [t, y]),
        { activities: O, isMobileOnline: L } = (0, a.cf)([p.A], () => ({
            activities: p.A.getActivities(t.id),
            isMobileOnline: p.A.isMobileOnline(t.id),
        })),
        M = (0, g.A)(t.id),
        { voiceChannel: D } = (0, h.A)({ userId: t.id, guildId: A }),
        P = (function (e) {
            let { enabled: t } = x.useConfig({ location: e });
            return t;
        })("UserProfileMutualFriendRow"),
        {
            avatarSrc: w,
            avatarDecorationSrc: k,
            eventHandlers: U,
        } = (0, f.A)({ userId: t.id, guildId: A, size: j, animateOnHover: !0 }),
        G = v && P ? r.Js : r.eu;
    return (0, i.jsxs)(o.D, {
        ...(P ? U : {}),
        focusProps: N === C.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: E.nM,
        onClick: S,
        onContextMenu: (e) => {
            (0, c.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("24170"), n.e("32418"), n.e("93316")]).then(
                    n.bind(n, 668569),
                );
                return (n) => (0, i.jsx)(e, { ...n, user: t });
            });
        },
        children: [
            (0, i.jsx)(G, {
                src: w,
                avatarDecoration: P ? k : void 0,
                "aria-label": t.username,
                size: j,
                status: R ? I.clD.UNKNOWN : s,
                statusBackdropColor: R ? void 0 : (0, d.C$)(T),
                isMobile: L,
                className: E.my,
            }),
            (0, i.jsxs)("div", {
                className: E.zH,
                children: [
                    (0, i.jsx)(u.A, { user: t, className: E.Tc, discriminatorClass: E.D2 }),
                    (0, i.jsx)(_.A, { user: t, activities: O, applicationStream: M, voiceChannel: D }),
                ],
            }),
        ],
    });
}

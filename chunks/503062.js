n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(442433),
    o = n(297413),
    d = n(439547),
    c = n(714114),
    u = n(729551),
    h = n(178418),
    A = n(87664),
    g = n(290863),
    m = n(939496),
    p = n(652215),
    _ = n(996988),
    x = n(794904);
let f = a._3J.SIZE_40,
    E = (0, a.FT9)(f);
function C(e) {
    let { user: t, status: C, guildId: I, channelId: S, onSelect: b } = e,
        { theme: N, themeType: T } = (0, m.E)(),
        j = l.useMemo(() => t.isNonUserBot() || (0, h.c)(t, S), [t, S]),
        { activities: v, isMobileOnline: y } = (0, s.cf)([g.A], () => ({
            activities: g.A.getActivities(t.id),
            isMobileOnline: g.A.isMobileOnline(t.id),
        })),
        R = (0, A.A)(t.id),
        { voiceActivityStatusEnabled: O } = (0, d.g)({ location: "UserProfileMutualFriendRow" }),
        { voiceChannel: L } = (0, c.A)({ userId: O ? t.id : void 0, guildId: I });
    return (0, i.jsxs)(a.DUT, {
        focusProps: T === _.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: x.nM,
        onClick: b,
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
                src: t.getAvatarURL(I, E),
                "aria-label": t.username,
                size: f,
                status: j ? p.clD.UNKNOWN : C,
                statusBackdropColor: j ? void 0 : (0, a.C$5)(N),
                isMobile: y,
                className: x.my,
            }),
            (0, i.jsxs)("div", {
                className: x.zH,
                children: [
                    (0, i.jsx)(o.A, { user: t, className: x.Tc, discriminatorClass: x.D2 }),
                    (0, i.jsx)(u.A, { user: t, activities: v, applicationStream: R, voiceChannel: L }),
                ],
            }),
        ],
    });
}

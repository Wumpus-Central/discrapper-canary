n.d(t, { A: () => j });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(397927),
    r = n(442433),
    o = n(297413),
    c = n(439547),
    d = n(714114),
    u = n(729551),
    g = n(178418),
    m = n(87664),
    x = n(290863),
    f = n(939496),
    p = n(652215),
    h = n(996988),
    _ = n(565702);
let A = s._3J.SIZE_40,
    I = (0, s.FT9)(A);
function j(e) {
    let { user: t, status: j, guildId: v, channelId: E, onSelect: T } = e,
        { theme: b, themeType: y } = (0, f.E)(),
        N = l.useMemo(() => t.isNonUserBot() || (0, g.c)(t, E), [t, E]),
        { activities: S, isMobileOnline: C } = (0, a.cf)([x.A], () => ({
            activities: x.A.getActivities(t.id),
            isMobileOnline: x.A.isMobileOnline(t.id),
        })),
        k = (0, m.A)(t.id),
        { voiceActivityStatusEnabled: R } = (0, c.g)({ location: "UserProfileMutualFriendRow" }),
        { voiceChannel: w } = (0, d.A)({ userId: R ? t.id : void 0, guildId: v });
    return (0, i.jsxs)(s.DUT, {
        focusProps: y === h.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: _.nM,
        onClick: T,
        onContextMenu: (e) => {
            (0, r.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("3795"), n.e("32418"), n.e("98438")]).then(
                    n.bind(n, 668569),
                );
                return (n) => (0, i.jsx)(e, { ...n, user: t });
            });
        },
        children: [
            (0, i.jsx)(s.euF, {
                src: t.getAvatarURL(v, I),
                "aria-label": t.username,
                size: A,
                status: N ? p.clD.UNKNOWN : j,
                statusBackdropColor: N ? void 0 : (0, s.C$5)(b),
                isMobile: C,
                className: _.my,
            }),
            (0, i.jsxs)("div", {
                className: _.zH,
                children: [
                    (0, i.jsx)(o.A, { user: t, className: _.Tc, discriminatorClass: _.D2 }),
                    (0, i.jsx)(u.A, { user: t, activities: S, applicationStream: k, voiceChannel: w }),
                ],
            }),
        ],
    });
}

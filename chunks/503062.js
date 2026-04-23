n.d(t, { A: () => S });
var i = n(627968),
    s = n(64700),
    l = n(17928),
    a = n(778712),
    o = n(939249),
    r = n(97808),
    d = n(133171),
    c = n(442433),
    u = n(297413),
    h = n(714114),
    p = n(729551),
    _ = n(178418),
    f = n(87664),
    A = n(290863),
    g = n(939496),
    m = n(652215),
    E = n(996988),
    y = n(921519);
let x = a._3.SIZE_40,
    v = (0, a.FT)(x);
function S(e) {
    let { user: t, status: a, guildId: S, channelId: C, onSelect: I } = e,
        { theme: N, themeType: T } = (0, g.E)(),
        O = s.useMemo(() => t.isNonUserBot() || (0, _.c)(t, C), [t, C]),
        { activities: b, isMobileOnline: D } = (0, l.cf)([A.A], () => ({
            activities: A.A.getActivities(t.id),
            isMobileOnline: A.A.isMobileOnline(t.id),
        })),
        j = (0, f.A)(t.id),
        { voiceChannel: L } = (0, h.A)({ userId: t.id, guildId: S });
    return (0, i.jsxs)(o.D, {
        focusProps: T === E.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: y.nM,
        onClick: I,
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
            (0, i.jsx)(r.eu, {
                src: t.getAvatarURL(S, v),
                "aria-label": t.username,
                size: x,
                status: O ? m.clD.UNKNOWN : a,
                statusBackdropColor: O ? void 0 : (0, d.C$)(N),
                isMobile: D,
                className: y.my,
            }),
            (0, i.jsxs)("div", {
                className: y.zH,
                children: [
                    (0, i.jsx)(u.A, { user: t, className: y.Tc, discriminatorClass: y.D2 }),
                    (0, i.jsx)(p.A, { user: t, activities: b, applicationStream: j, voiceChannel: L }),
                ],
            }),
        ],
    });
}

n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(397927),
    r = n(442433),
    o = n(297413),
    d = n(714114),
    c = n(729551),
    u = n(178418),
    m = n(87664),
    g = n(290863),
    x = n(939496),
    f = n(652215),
    p = n(996988),
    h = n(794904);
let _ = s._3J.SIZE_40,
    A = (0, s.FT9)(_);
function I(e) {
    let { user: t, status: I, guildId: j, channelId: v, onSelect: E } = e,
        { theme: T, themeType: b } = (0, x.E)(),
        N = l.useMemo(() => t.isNonUserBot() || (0, u.c)(t, v), [t, v]),
        { activities: S, isMobileOnline: y } = (0, a.cf)([g.A], () => ({
            activities: g.A.getActivities(t.id),
            isMobileOnline: g.A.isMobileOnline(t.id),
        })),
        C = (0, m.A)(t.id),
        { voiceChannel: R } = (0, d.A)({ userId: t.id, guildId: j });
    return (0, i.jsxs)(s.DUT, {
        focusProps: b === p.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: h.nM,
        onClick: E,
        onContextMenu: (e) => {
            (0, r.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("3795"), n.e("32418"), n.e("57600")]).then(
                    n.bind(n, 668569),
                );
                return (n) => (0, i.jsx)(e, { ...n, user: t });
            });
        },
        children: [
            (0, i.jsx)(s.euF, {
                src: t.getAvatarURL(j, A),
                "aria-label": t.username,
                size: _,
                status: N ? f.clD.UNKNOWN : I,
                statusBackdropColor: N ? void 0 : (0, s.C$5)(T),
                isMobile: y,
                className: h.my,
            }),
            (0, i.jsxs)("div", {
                className: h.zH,
                children: [
                    (0, i.jsx)(o.A, { user: t, className: h.Tc, discriminatorClass: h.D2 }),
                    (0, i.jsx)(c.A, { user: t, activities: S, applicationStream: C, voiceChannel: R }),
                ],
            }),
        ],
    });
}

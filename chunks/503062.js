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
    g = n(87664),
    m = n(290863),
    x = n(939496),
    p = n(652215),
    f = n(996988),
    h = n(871670);
let _ = s._3J.SIZE_40,
    A = (0, s.FT9)(_);
function I(e) {
    let { user: t, status: I, guildId: j, channelId: v, onSelect: T } = e,
        { theme: E, themeType: b } = (0, x.E)(),
        N = l.useMemo(() => t.isNonUserBot() || (0, u.c)(t, v), [t, v]),
        { activities: S, isMobileOnline: y } = (0, a.cf)([m.A], () => ({
            activities: m.A.getActivities(t.id),
            isMobileOnline: m.A.isMobileOnline(t.id),
        })),
        C = (0, g.A)(t.id),
        { voiceChannel: R } = (0, d.A)({ userId: t.id, guildId: j });
    return (0, i.jsxs)(s.DUT, {
        focusProps: b === f.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: h.nM,
        onClick: T,
        onContextMenu: (e) => {
            (0, r.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("3795"), n.e("32418"), n.e("22755")]).then(
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
                status: N ? p.clD.UNKNOWN : I,
                statusBackdropColor: N ? void 0 : (0, s.C$5)(E),
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

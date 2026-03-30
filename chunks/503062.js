"use strict";
i.d(t, { A: () => v });
var n = i(627968),
    s = i(64700),
    a = i(311907),
    l = i(397927),
    r = i(442433),
    o = i(297413),
    d = i(714114),
    c = i(729551),
    u = i(178418),
    h = i(87664),
    _ = i(290863),
    p = i(939496),
    f = i(652215),
    m = i(996988),
    g = i(816223);
let A = l._3J.SIZE_40,
    x = (0, l.FT9)(A);
function v(e) {
    let { user: t, status: v, guildId: y, channelId: E, onSelect: I } = e,
        { theme: S, themeType: C } = (0, p.E)(),
        N = s.useMemo(() => t.isNonUserBot() || (0, u.c)(t, E), [t, E]),
        { activities: b, isMobileOnline: T } = (0, a.cf)([_.A], () => ({
            activities: _.A.getActivities(t.id),
            isMobileOnline: _.A.isMobileOnline(t.id),
        })),
        O = (0, h.A)(t.id),
        { voiceChannel: L } = (0, d.A)({ userId: t.id, guildId: y });
    return (0, n.jsxs)(l.DUT, {
        focusProps: C === m.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: g.nM,
        onClick: I,
        onContextMenu: (e) => {
            (0, r.L3)(e, async () => {
                let { default: e } = await Promise.all([i.e("97262"), i.e("3795"), i.e("32418"), i.e("73417")]).then(
                    i.bind(i, 668569),
                );
                return (i) => (0, n.jsx)(e, { ...i, user: t });
            });
        },
        children: [
            (0, n.jsx)(l.euF, {
                src: t.getAvatarURL(y, x),
                "aria-label": t.username,
                size: A,
                status: N ? f.clD.UNKNOWN : v,
                statusBackdropColor: N ? void 0 : (0, l.C$5)(S),
                isMobile: T,
                className: g.my,
            }),
            (0, n.jsxs)("div", {
                className: g.zH,
                children: [
                    (0, n.jsx)(o.A, { user: t, className: g.Tc, discriminatorClass: g.D2 }),
                    (0, n.jsx)(c.A, { user: t, activities: b, applicationStream: O, voiceChannel: L }),
                ],
            }),
        ],
    });
}

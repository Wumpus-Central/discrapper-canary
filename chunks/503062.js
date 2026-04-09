"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    a = n(311907),
    l = n(397927),
    r = n(442433),
    o = n(297413),
    d = n(714114),
    c = n(729551),
    u = n(178418),
    h = n(87664),
    p = n(290863),
    f = n(939496),
    A = n(652215),
    _ = n(996988),
    g = n(871670);
let m = l._3J.SIZE_40,
    x = (0, l.FT9)(m);
function E(e) {
    let { user: t, status: E, guildId: y, channelId: v, onSelect: S } = e,
        { theme: C, themeType: I } = (0, f.E)(),
        N = s.useMemo(() => t.isNonUserBot() || (0, u.c)(t, v), [t, v]),
        { activities: T, isMobileOnline: b } = (0, a.cf)([p.A], () => ({
            activities: p.A.getActivities(t.id),
            isMobileOnline: p.A.isMobileOnline(t.id),
        })),
        O = (0, h.A)(t.id),
        { voiceChannel: j } = (0, d.A)({ userId: t.id, guildId: y });
    return (0, i.jsxs)(l.DUT, {
        focusProps: I === _.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: g.nM,
        onClick: S,
        onContextMenu: (e) => {
            (0, r.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("11478"), n.e("32418"), n.e("22755")]).then(
                    n.bind(n, 668569),
                );
                return (n) => (0, i.jsx)(e, { ...n, user: t });
            });
        },
        children: [
            (0, i.jsx)(l.euF, {
                src: t.getAvatarURL(y, x),
                "aria-label": t.username,
                size: m,
                status: N ? A.clD.UNKNOWN : E,
                statusBackdropColor: N ? void 0 : (0, l.C$5)(C),
                isMobile: b,
                className: g.my,
            }),
            (0, i.jsxs)("div", {
                className: g.zH,
                children: [
                    (0, i.jsx)(o.A, { user: t, className: g.Tc, discriminatorClass: g.D2 }),
                    (0, i.jsx)(c.A, { user: t, activities: T, applicationStream: O, voiceChannel: j }),
                ],
            }),
        ],
    });
}

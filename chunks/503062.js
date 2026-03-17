"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(442433),
    o = n(297413),
    d = n(714114),
    c = n(729551),
    u = n(178418),
    h = n(87664),
    p = n(290863),
    A = n(939496),
    f = n(652215),
    g = n(996988),
    _ = n(794904);
let m = a._3J.SIZE_40,
    x = (0, a.FT9)(m);
function E(e) {
    let { user: t, status: E, guildId: v, channelId: y, onSelect: S } = e,
        { theme: C, themeType: I } = (0, A.E)(),
        N = s.useMemo(() => t.isNonUserBot() || (0, u.c)(t, y), [t, y]),
        { activities: T, isMobileOnline: O } = (0, l.cf)([p.A], () => ({
            activities: p.A.getActivities(t.id),
            isMobileOnline: p.A.isMobileOnline(t.id),
        })),
        j = (0, h.A)(t.id),
        { voiceChannel: b } = (0, d.A)({ userId: t.id, guildId: v });
    return (0, i.jsxs)(a.DUT, {
        focusProps: I === g.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: _.nM,
        onClick: S,
        onContextMenu: (e) => {
            (0, r.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("3795"), n.e("32418"), n.e("75351")]).then(
                    n.bind(n, 668569),
                );
                return (n) => (0, i.jsx)(e, { ...n, user: t });
            });
        },
        children: [
            (0, i.jsx)(a.euF, {
                src: t.getAvatarURL(v, x),
                "aria-label": t.username,
                size: m,
                status: N ? f.clD.UNKNOWN : E,
                statusBackdropColor: N ? void 0 : (0, a.C$5)(C),
                isMobile: O,
                className: _.my,
            }),
            (0, i.jsxs)("div", {
                className: _.zH,
                children: [
                    (0, i.jsx)(o.A, { user: t, className: _.Tc, discriminatorClass: _.D2 }),
                    (0, i.jsx)(c.A, { user: t, activities: T, applicationStream: j, voiceChannel: b }),
                ],
            }),
        ],
    });
}

"use strict";
n.d(t, { A: () => S });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(778712),
    r = n(939249),
    o = n(97808),
    d = n(935154),
    c = n(442433),
    u = n(297413),
    h = n(714114),
    p = n(729551),
    A = n(178418),
    f = n(87664),
    _ = n(290863),
    g = n(939496),
    m = n(652215),
    E = n(996988),
    x = n(921519);
let y = a._3.SIZE_40,
    v = (0, a.FT)(y);
function S(e) {
    let { user: t, status: a, guildId: S, channelId: C, onSelect: I } = e,
        { theme: N, themeType: T } = (0, g.E)(),
        b = s.useMemo(() => t.isNonUserBot() || (0, A.c)(t, C), [t, C]),
        { activities: O, isMobileOnline: D } = (0, l.cf)([_.A], () => ({
            activities: _.A.getActivities(t.id),
            isMobileOnline: _.A.isMobileOnline(t.id),
        })),
        j = (0, f.A)(t.id),
        { voiceChannel: L } = (0, h.A)({ userId: t.id, guildId: S });
    return (0, i.jsxs)(r.D, {
        focusProps: T === E.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: x.nM,
        onClick: I,
        onContextMenu: (e) => {
            (0, c.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("97262"),
                    n.e("92493"),
                    n.e("53635"),
                    n.e("32418"),
                    n.e("13171"),
                ]).then(n.bind(n, 668569));
                return (n) => (0, i.jsx)(e, { ...n, user: t });
            });
        },
        children: [
            (0, i.jsx)(o.eu, {
                src: t.getAvatarURL(S, v),
                "aria-label": t.username,
                size: y,
                status: b ? m.clD.UNKNOWN : a,
                statusBackdropColor: b ? void 0 : (0, d.C$)(N),
                isMobile: D,
                className: x.my,
            }),
            (0, i.jsxs)("div", {
                className: x.zH,
                children: [
                    (0, i.jsx)(u.A, { user: t, className: x.Tc, discriminatorClass: x.D2 }),
                    (0, i.jsx)(p.A, { user: t, activities: O, applicationStream: j, voiceChannel: L }),
                ],
            }),
        ],
    });
}

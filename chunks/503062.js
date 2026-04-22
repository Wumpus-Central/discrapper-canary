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
    f = n(178418),
    A = n(87664),
    _ = n(290863),
    g = n(939496),
    m = n(652215),
    x = n(996988),
    E = n(921519);
let y = a._3.SIZE_40,
    v = (0, a.FT)(y);
function S(e) {
    let { user: t, status: a, guildId: S, channelId: C, onSelect: I } = e,
        { theme: N, themeType: T } = (0, g.E)(),
        b = s.useMemo(() => t.isNonUserBot() || (0, f.c)(t, C), [t, C]),
        { activities: O, isMobileOnline: j } = (0, l.cf)([_.A], () => ({
            activities: _.A.getActivities(t.id),
            isMobileOnline: _.A.isMobileOnline(t.id),
        })),
        D = (0, A.A)(t.id),
        { voiceChannel: R } = (0, h.A)({ userId: t.id, guildId: S });
    return (0, i.jsxs)(r.D, {
        focusProps: T === x.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: E.nM,
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
                isMobile: j,
                className: E.my,
            }),
            (0, i.jsxs)("div", {
                className: E.zH,
                children: [
                    (0, i.jsx)(u.A, { user: t, className: E.Tc, discriminatorClass: E.D2 }),
                    (0, i.jsx)(p.A, { user: t, activities: O, applicationStream: D, voiceChannel: R }),
                ],
            }),
        ],
    });
}

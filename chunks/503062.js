i.d(s, { A: () => y });
var a = i(477900),
    n = i(582128),
    t = i(503698),
    l = i.n(t),
    r = i(17928),
    u = i(778712),
    o = i(97808),
    c = i(939249),
    d = i(935154),
    A = i(442433),
    f = i(297413),
    h = i(714114),
    m = i(394871),
    v = i(178418),
    x = i(87664),
    M = i(449582),
    g = i(88686),
    C = i(174755),
    j = i(290863),
    p = i(19575),
    I = i(854627),
    N = i(939496),
    b = i(652215),
    _ = i(996988),
    E = i(135650);
let S = u._3.SIZE_40,
    k = p.Ay.getEnableHardwareAcceleration();
function y(e) {
    let { user: s, status: t, guildId: u, channelId: p, onSelect: y } = e,
        { theme: F, themeType: L } = (0, N.E)(),
        D = n.useMemo(() => s.isNonUserBot() || (0, v.c)(s, p), [s, p]),
        { activities: U, isMobileOnline: w } = (0, r.cf)([j.A], () => ({
            activities: j.A.getActivities(s.id),
            isMobileOnline: j.A.isMobileOnline(s.id),
        })),
        T = (0, x.A)(s.id),
        { voiceChannel: R } = (0, h.Ay)({ userId: s.id, guildId: u }),
        [z, P] = n.useState(!1),
        {
            avatarSrc: H,
            avatarDecorationSrc: O,
            eventHandlers: K,
        } = (0, I.A)({ userId: s.id, guildId: u, size: S, animateOnHover: !z }),
        W = k ? o.Js : o.eu,
        B = n.useRef(null),
        V = (0, M.r)({ user: s, guildId: u }),
        Y = n.useCallback(() => P(!0), []),
        Z = n.useCallback(() => P(!1), []);
    return (0, a.jsxs)(c.D, {
        onMouseEnter: Y,
        onMouseLeave: Z,
        focusProps: L === _.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: l()(E.nM, { [E.EY]: null != V }),
        onClick: y,
        onContextMenu: function (e) {
            (0, A.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    i.e("790484"),
                    i.e("866038"),
                    i.e("926132"),
                    i.e("146652"),
                    i.e("834552"),
                    i.e("708757"),
                    i.e("585968"),
                    i.e("776273"),
                    i.e("893190"),
                    i.e("189673"),
                    i.e("229787"),
                    i.e("882073"),
                    i.e("797558"),
                    i.e("691994"),
                    i.e("576665"),
                    i.e("624198"),
                    i.e("856753"),
                    i.e("172883"),
                    i.e("349644"),
                    i.e("442191"),
                    i.e("242204"),
                    i.e("532418"),
                ]).then(i.bind(i, 668569));
                return (i) => (0, a.jsx)(e, { ...i, user: s });
            });
        },
        children: [
            (0, a.jsx)(C.A, { nameplate: z ? V : null, hovered: z, content: B, placement: g.u.MUTUAL_FRIENDS_LIST }),
            (0, a.jsxs)("div", {
                ref: B,
                className: E.Qs,
                children: [
                    (0, a.jsx)(W, {
                        ...K,
                        src: H,
                        avatarDecoration: O,
                        "aria-label": s.username,
                        size: S,
                        status: D ? b.clD.UNKNOWN : t,
                        statusBackdropColor: D ? void 0 : (0, d.C$)(F),
                        isMobile: w,
                        className: E.my,
                    }),
                    (0, a.jsxs)("div", {
                        className: E.zH,
                        children: [
                            (0, a.jsx)(f.A, {
                                user: s,
                                className: E.Tc,
                                usernameClass: E.QC,
                                discriminatorClass: E.D2,
                                showGuildTag: !0,
                            }),
                            (0, a.jsx)(m.A, { user: s, activities: U, applicationStream: T, voiceChannel: R }),
                        ],
                    }),
                ],
            }),
        ],
    });
}

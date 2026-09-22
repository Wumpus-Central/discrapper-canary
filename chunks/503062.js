t.d(s, { A: () => y });
var n = t(477900),
    i = t(582128),
    l = t(503698),
    a = t.n(l),
    r = t(17928),
    u = t(778712),
    d = t(97808),
    c = t(939249),
    o = t(935154),
    f = t(442433),
    A = t(297413),
    h = t(714114),
    m = t(394871),
    v = t(178418),
    E = t(87664),
    I = t(449582),
    p = t(88686),
    g = t(214881),
    x = t(290863),
    M = t(19575),
    _ = t(854627),
    b = t(939496),
    C = t(652215),
    S = t(996988),
    j = t(135650);
let k = u._3.SIZE_40,
    N = M.Ay.getEnableHardwareAcceleration();
function y(e) {
    let { user: s, status: l, guildId: u, channelId: M, onSelect: y } = e,
        { theme: D, themeType: R } = (0, b.E)(),
        L = i.useMemo(() => s.isNonUserBot() || (0, v.c)(s, M), [s, M]),
        { activities: F, isMobileOnline: T } = (0, r.cf)([x.A], () => ({
            activities: x.A.getActivities(s.id),
            isMobileOnline: x.A.isMobileOnline(s.id),
        })),
        w = (0, E.A)(s.id),
        { voiceChannel: U } = (0, h.Ay)({ userId: s.id, guildId: u }),
        [O, P] = i.useState(!1),
        {
            avatarSrc: z,
            avatarDecorationSrc: W,
            eventHandlers: H,
        } = (0, _.A)({ userId: s.id, guildId: u, size: k, animateOnHover: !O }),
        K = N ? d.Js : d.eu,
        V = i.useRef(null),
        Z = (0, I.r)({ user: s, guildId: u }),
        G = i.useCallback(() => P(!0), []),
        B = i.useCallback(() => P(!1), []);
    return (0, n.jsxs)(c.D, {
        onMouseEnter: G,
        onMouseLeave: B,
        focusProps: R === S.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: a()(j.nM, { [j.EY]: null != Z }),
        onClick: y,
        onContextMenu: function (e) {
            (0, f.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e("790484"),
                    t.e("866038"),
                    t.e("926132"),
                    t.e("146652"),
                    t.e("834552"),
                    t.e("708757"),
                    t.e("585968"),
                    t.e("776273"),
                    t.e("893190"),
                    t.e("189673"),
                    t.e("229787"),
                    t.e("882073"),
                    t.e("797558"),
                    t.e("691994"),
                    t.e("576665"),
                    t.e("624198"),
                    t.e("856753"),
                    t.e("172883"),
                    t.e("349644"),
                    t.e("442191"),
                    t.e("242204"),
                    t.e("532418"),
                ]).then(t.bind(t, 668569));
                return (t) => (0, n.jsx)(e, { ...t, user: s });
            });
        },
        children: [
            (0, n.jsx)(g.A, { nameplate: O ? Z : null, hovered: O, content: V, placement: p.u.MUTUAL_FRIENDS_LIST }),
            (0, n.jsxs)("div", {
                ref: V,
                className: j.Qs,
                children: [
                    (0, n.jsx)(K, {
                        ...H,
                        src: z,
                        avatarDecoration: W,
                        "aria-label": s.username,
                        size: k,
                        status: L ? C.clD.UNKNOWN : l,
                        statusBackdropColor: L ? void 0 : (0, o.C$)(D),
                        isMobile: T,
                        className: j.my,
                    }),
                    (0, n.jsxs)("div", {
                        className: j.zH,
                        children: [
                            (0, n.jsx)(A.A, {
                                user: s,
                                className: j.Tc,
                                usernameClass: j.QC,
                                discriminatorClass: j.D2,
                                showGuildTag: !0,
                            }),
                            (0, n.jsx)(m.A, { user: s, activities: F, applicationStream: w, voiceChannel: U }),
                        ],
                    }),
                ],
            }),
        ],
    });
}

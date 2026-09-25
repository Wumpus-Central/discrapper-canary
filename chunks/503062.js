n.d(s, { A: () => y });
var t = n(477900),
    i = n(582128),
    l = n(503698),
    a = n.n(l),
    r = n(17928),
    u = n(778712),
    d = n(97808),
    c = n(939249),
    o = n(935154),
    f = n(442433),
    A = n(297413),
    h = n(714114),
    m = n(394871),
    v = n(178418),
    E = n(87664),
    I = n(449582),
    p = n(88686),
    g = n(214881),
    x = n(290863),
    M = n(19575),
    _ = n(854627),
    b = n(939496),
    C = n(652215),
    S = n(996988),
    j = n(135650);
let k = u._3.SIZE_40,
    N = M.Ay.getEnableHardwareAcceleration();
function y(e) {
    let { user: s, status: l, guildId: u, channelId: M, onSelect: y } = e,
        { theme: D, themeType: R } = (0, b.E)(),
        L = i.useMemo(() => s.isNonUserBot() || (0, v.c)(s, M), [s, M]),
        { activities: T, isMobileOnline: w } = (0, r.cf)([x.A], () => ({
            activities: x.A.getActivities(s.id),
            isMobileOnline: x.A.isMobileOnline(s.id),
        })),
        F = (0, E.A)(s.id),
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
    return (0, t.jsxs)(c.D, {
        onMouseEnter: G,
        onMouseLeave: B,
        focusProps: R === S.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: a()(j.nM, { [j.EY]: null != Z }),
        onClick: y,
        onContextMenu: function (e) {
            (0, f.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("790484"),
                    n.e("463317"),
                    n.e("926132"),
                    n.e("146652"),
                    n.e("834552"),
                    n.e("708757"),
                    n.e("585968"),
                    n.e("776273"),
                    n.e("893190"),
                    n.e("189673"),
                    n.e("229787"),
                    n.e("882073"),
                    n.e("797558"),
                    n.e("691994"),
                    n.e("576665"),
                    n.e("624198"),
                    n.e("856753"),
                    n.e("172883"),
                    n.e("349644"),
                    n.e("920628"),
                    n.e("242204"),
                    n.e("532418"),
                ]).then(n.bind(n, 668569));
                return (n) => (0, t.jsx)(e, { ...n, user: s });
            });
        },
        children: [
            (0, t.jsx)(g.A, { nameplate: O ? Z : null, hovered: O, content: V, placement: p.u.MUTUAL_FRIENDS_LIST }),
            (0, t.jsxs)("div", {
                ref: V,
                className: j.Qs,
                children: [
                    (0, t.jsx)(K, {
                        ...H,
                        src: z,
                        avatarDecoration: W,
                        "aria-label": s.username,
                        size: k,
                        status: L ? C.clD.UNKNOWN : l,
                        statusBackdropColor: L ? void 0 : (0, o.C$)(D),
                        isMobile: w,
                        className: j.my,
                    }),
                    (0, t.jsxs)("div", {
                        className: j.zH,
                        children: [
                            (0, t.jsx)(A.A, {
                                user: s,
                                className: j.Tc,
                                usernameClass: j.QC,
                                discriminatorClass: j.D2,
                                showGuildTag: !0,
                            }),
                            (0, t.jsx)(m.A, { user: s, activities: T, applicationStream: F, voiceChannel: U }),
                        ],
                    }),
                ],
            }),
        ],
    });
}

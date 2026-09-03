n.d(s, { A: () => w });
var l = n(477900),
    t = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(17928),
    u = n(778712),
    o = n(97808),
    c = n(939249),
    d = n(935154),
    f = n(442433),
    A = n(297413),
    h = n(714114),
    m = n(394871),
    v = n(178418),
    p = n(87664),
    x = n(449582),
    I = n(88686),
    g = n(174755),
    M = n(290863),
    C = n(19575),
    b = n(854627),
    j = n(939496),
    E = n(652215),
    k = n(996988),
    N = n(135650);
let S = u._3.SIZE_40,
    _ = C.Ay.getEnableHardwareAcceleration();
function w(e) {
    let { user: s, status: i, guildId: u, channelId: C, onSelect: w } = e,
        { theme: L, themeType: y } = (0, j.E)(),
        F = t.useMemo(() => s.isNonUserBot() || (0, v.c)(s, C), [s, C]),
        { activities: D, isMobileOnline: R } = (0, r.cf)([M.A], () => ({
            activities: M.A.getActivities(s.id),
            isMobileOnline: M.A.isMobileOnline(s.id),
        })),
        U = (0, p.A)(s.id),
        { voiceChannel: T } = (0, h.Ay)({ userId: s.id, guildId: u }),
        [O, P] = t.useState(!1),
        {
            avatarSrc: z,
            avatarDecorationSrc: H,
            eventHandlers: K,
        } = (0, b.A)({ userId: s.id, guildId: u, size: S, animateOnHover: !O }),
        W = _ ? o.Js : o.eu,
        Z = t.useRef(null),
        B = (0, x.r)({ user: s, guildId: u }),
        G = t.useCallback(() => P(!0), []),
        V = t.useCallback(() => P(!1), []);
    return (0, l.jsxs)(c.D, {
        onMouseEnter: G,
        onMouseLeave: V,
        focusProps: y === k.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: a()(N.nM, { [N.EY]: null != B }),
        onClick: w,
        onContextMenu: function (e) {
            (0, f.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("790484"),
                    n.e("866038"),
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
                    n.e("442191"),
                    n.e("242204"),
                    n.e("532418"),
                ]).then(n.bind(n, 668569));
                return (n) => (0, l.jsx)(e, { ...n, user: s });
            });
        },
        children: [
            (0, l.jsx)(g.A, { nameplate: O ? B : null, hovered: O, content: Z, placement: I.u.MUTUAL_FRIENDS_LIST }),
            (0, l.jsxs)("div", {
                ref: Z,
                className: N.Qs,
                children: [
                    (0, l.jsx)(W, {
                        ...K,
                        src: z,
                        avatarDecoration: H,
                        "aria-label": s.username,
                        size: S,
                        status: F ? E.clD.UNKNOWN : i,
                        statusBackdropColor: F ? void 0 : (0, d.C$)(L),
                        isMobile: R,
                        className: N.my,
                    }),
                    (0, l.jsxs)("div", {
                        className: N.zH,
                        children: [
                            (0, l.jsx)(A.A, {
                                user: s,
                                className: N.Tc,
                                usernameClass: N.QC,
                                discriminatorClass: N.D2,
                                showGuildTag: !0,
                            }),
                            (0, l.jsx)(m.A, { user: s, activities: D, applicationStream: U, voiceChannel: T }),
                        ],
                    }),
                ],
            }),
        ],
    });
}

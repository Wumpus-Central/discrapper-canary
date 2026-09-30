t.d(l, { A: () => k });
var s = t(477900),
    n = t(582128),
    i = t(503698),
    a = t.n(i),
    r = t(17928),
    u = t(778712),
    d = t(97808),
    c = t(939249),
    o = t(935154),
    m = t(442433),
    A = t(297413),
    f = t(714114),
    h = t(394871),
    p = t(178418),
    x = t(87664),
    v = t(449582),
    g = t(88686),
    j = t(214881),
    E = t(290863),
    N = t(19575),
    I = t(854627),
    M = t(939496),
    b = t(652215),
    C = t(996988),
    _ = t(135650);
let y = u._3.SIZE_40,
    S = N.Ay.getEnableHardwareAcceleration();
function k(e) {
    let { user: l, status: i, guildId: u, channelId: N, onSelect: k } = e,
        { theme: R, themeType: w } = (0, M.E)(),
        L = n.useMemo(() => l.isNonUserBot() || (0, p.c)(l, N), [l, N]),
        { activities: D, isMobileOnline: F } = (0, r.cf)([E.A], () => ({
            activities: E.A.getActivities(l.id),
            isMobileOnline: E.A.isMobileOnline(l.id),
        })),
        T = (0, x.A)(l.id),
        { voiceChannel: U } = (0, f.Ay)({ userId: l.id, guildId: u }),
        [O, P] = n.useState(!1),
        {
            avatarSrc: z,
            avatarDecorationSrc: G,
            eventHandlers: W,
        } = (0, I.A)({ userId: l.id, guildId: u, size: y, animateOnHover: !O }),
        H = S ? d.Js : d.eu,
        K = n.useRef(null),
        V = (0, v.r)({ user: l, guildId: u }),
        Z = n.useCallback(() => P(!0), []),
        q = n.useCallback(() => P(!1), []);
    return (0, s.jsxs)(c.D, {
        onMouseEnter: Z,
        onMouseLeave: q,
        focusProps: w === C.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: a()(_.nM, { [_.EY]: null != V }),
        onClick: k,
        onContextMenu: function (e) {
            (0, m.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e("463317"),
                    t.e("926132"),
                    t.e("146652"),
                    t.e("893190"),
                    t.e("189673"),
                    t.e("882073"),
                    t.e("797558"),
                    t.e("691994"),
                    t.e("576665"),
                    t.e("624198"),
                    t.e("856753"),
                    t.e("242204"),
                    t.e("532418"),
                ]).then(t.bind(t, 668569));
                return (t) => (0, s.jsx)(e, { ...t, user: l });
            });
        },
        children: [
            (0, s.jsx)(j.A, { nameplate: O ? V : null, hovered: O, content: K, placement: g.u.MUTUAL_FRIENDS_LIST }),
            (0, s.jsxs)("div", {
                ref: K,
                className: _.Qs,
                children: [
                    (0, s.jsx)(H, {
                        ...W,
                        src: z,
                        avatarDecoration: G,
                        "aria-label": l.username,
                        size: y,
                        status: L ? b.clD.UNKNOWN : i,
                        statusBackdropColor: L ? void 0 : (0, o.C$)(R),
                        isMobile: F,
                        className: _.my,
                    }),
                    (0, s.jsxs)("div", {
                        className: _.zH,
                        children: [
                            (0, s.jsx)(A.A, {
                                user: l,
                                className: _.Tc,
                                usernameClass: _.QC,
                                discriminatorClass: _.D2,
                                showGuildTag: !0,
                            }),
                            (0, s.jsx)(h.A, { user: l, activities: D, applicationStream: T, voiceChannel: U }),
                        ],
                    }),
                ],
            }),
        ],
    });
}

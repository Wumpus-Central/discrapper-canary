var n = l(477900),
    i = l(582128),
    a = l(503698),
    r = l.n(a),
    s = l(855986),
    u = l(778712),
    o = l(97808),
    d = l(939249),
    c = l(935154),
    f = l(442433),
    m = l(297413),
    h = l(714114),
    A = l(342312),
    p = l(178418),
    g = l(87664),
    v = l(449582),
    b = l(88686),
    x = l(214881),
    E = l(290863),
    j = l(427262),
    y = l(253400),
    M = l(854627),
    C = l(939496),
    I = l(652215),
    S = l(996988),
    N = l(792996),
    T = l(135650);
let w = u._3.SIZE_40,
    _ = y.Ay.getEnableHardwareAcceleration();
l.d(
    t,
    {},
    {
        A: function (e) {
            let { user: t, status: a, guildId: u, channelId: y, onSelect: k } = e,
                { theme: L, themeType: R } = (0, C.E)(),
                P = i.useMemo(() => t.isNonUserBot() || (0, p.c)(t, y), [t, y]),
                { activities: U, isMobileOnline: D } = (0, s.cf)([E.A], () => ({
                    activities: E.A.getActivities(t.id),
                    isMobileOnline: E.A.isMobileOnline(t.id),
                })),
                F = (0, g.A)(t.id),
                { voiceChannel: G } = (0, h.Ay)({ userId: t.id, guildId: u }),
                [O, z] = i.useState(!1),
                {
                    avatarSrc: W,
                    avatarDecorationSrc: Z,
                    eventHandlers: H,
                } = (0, M.A)({ userId: t.id, guildId: u, size: w, animateOnHover: !O }),
                B = _ ? o.Js : o.eu,
                K = i.useRef(null),
                Y = i.useId(),
                $ = (0, v.r)({ user: t, guildId: u }),
                q = (0, j.tx)(t),
                J = P ? null : (0, j.MU)(a, { isMobile: D }),
                Q =
                    null != J
                        ? N.intl.formatToPlainString(N.t["9Gofqp"], { name: q, presence: J })
                        : N.intl.formatToPlainString(N.t.fGlxFS, { name: q }),
                V = i.useCallback(() => z(!0), []),
                X = i.useCallback(() => z(!1), []);
            return (0, n.jsxs)(d.D, {
                onMouseEnter: V,
                onMouseLeave: X,
                focusProps: R === S.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
                className: r()(T.nM, { [T.EY]: null != $ }),
                "aria-label": Q,
                "aria-describedby": Y,
                onClick: k,
                onContextMenu: function (e) {
                    (0, f.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            l.e(463317),
                            l.e(893190),
                            l.e(189673),
                            l.e(576432),
                            l.e(797558),
                            l.e(451162),
                            l.e(576665),
                            l.e(624198),
                            l.e(60086),
                            l.e(242204),
                            l.e(856753),
                            l.e(532418),
                        ]).then(l.bind(l, 668569));
                        return (l) => (0, n.jsx)(e, { ...l, user: t });
                    });
                },
                children: [
                    (0, n.jsx)(x.A, {
                        nameplate: O ? $ : null,
                        hovered: O,
                        content: K,
                        placement: b.u.MUTUAL_FRIENDS_LIST,
                    }),
                    (0, n.jsxs)("div", {
                        ref: K,
                        className: T.Qs,
                        children: [
                            (0, n.jsx)(B, {
                                ...H,
                                src: W,
                                avatarDecoration: Z,
                                "aria-hidden": !0,
                                size: w,
                                status: P ? I.clD.UNKNOWN : a,
                                statusBackdropColor: P ? void 0 : (0, c.C$)(L),
                                isMobile: D,
                                className: T.my,
                            }),
                            (0, n.jsxs)("div", {
                                className: T.zH,
                                children: [
                                    (0, n.jsx)(m.A, {
                                        user: t,
                                        className: T.Tc,
                                        usernameClass: T.QC,
                                        discriminatorClass: T.D2,
                                        showGuildTag: !0,
                                    }),
                                    (0, n.jsx)("div", {
                                        id: Y,
                                        children: (0, n.jsx)(A.A, {
                                            user: t,
                                            activities: U,
                                            applicationStream: F,
                                            voiceChannel: G,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            });
        },
    },
);

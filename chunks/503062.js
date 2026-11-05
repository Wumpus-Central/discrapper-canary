var i = l(477900),
    a = l(582128),
    s = l(503698),
    n = l.n(s),
    r = l(855986),
    d = l(778712),
    u = l(97808),
    o = l(939249),
    c = l(935154),
    f = l(442433),
    A = l(297413),
    m = l(714114),
    h = l(342312),
    p = l(178418),
    g = l(87664),
    v = l(449582),
    x = l(88686),
    j = l(214881),
    b = l(290863),
    y = l(427262),
    C = l(253400),
    E = l(854627),
    I = l(939496),
    N = l(652215),
    S = l(996988),
    M = l(792996),
    _ = l(135650);
let w = d._3.SIZE_40,
    R = C.Ay.getEnableHardwareAcceleration();
l.d(
    t,
    {},
    {
        A: function (e) {
            let { user: t, status: s, guildId: d, channelId: C, onSelect: T } = e,
                { theme: k, themeType: F } = (0, I.E)(),
                L = a.useMemo(() => t.isNonUserBot() || (0, p.c)(t, C), [t, C]),
                { activities: U, isMobileOnline: P } = (0, r.cf)([b.A], () => ({
                    activities: b.A.getActivities(t.id),
                    isMobileOnline: b.A.isMobileOnline(t.id),
                })),
                D = (0, g.A)(t.id),
                { voiceChannel: O } = (0, m.Ay)({ userId: t.id, guildId: d }),
                [z, G] = a.useState(!1),
                {
                    avatarSrc: W,
                    avatarDecorationSrc: H,
                    eventHandlers: K,
                } = (0, E.A)({ userId: t.id, guildId: d, size: w, animateOnHover: !z }),
                $ = R ? u.Js : u.eu,
                B = a.useRef(null),
                Y = a.useId(),
                Z = (0, v.r)({ user: t, guildId: d }),
                q = (0, y.tx)(t),
                Q = L ? null : (0, y.MU)(s, { isMobile: P }),
                V =
                    null != Q
                        ? M.intl.formatToPlainString(M.t["9Gofqp"], { name: q, presence: Q })
                        : M.intl.formatToPlainString(M.t.fGlxFS, { name: q }),
                J = a.useCallback(() => G(!0), []),
                X = a.useCallback(() => G(!1), []);
            return (0, i.jsxs)(o.D, {
                onMouseEnter: J,
                onMouseLeave: X,
                focusProps: F === S.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
                className: n()(_.nM, { [_.EY]: null != Z }),
                "aria-label": V,
                "aria-describedby": Y,
                onClick: T,
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
                        return (l) => (0, i.jsx)(e, { ...l, user: t });
                    });
                },
                children: [
                    (0, i.jsx)(j.A, {
                        nameplate: z ? Z : null,
                        hovered: z,
                        content: B,
                        placement: x.u.MUTUAL_FRIENDS_LIST,
                    }),
                    (0, i.jsxs)("div", {
                        ref: B,
                        className: _.Qs,
                        children: [
                            (0, i.jsx)($, {
                                ...K,
                                src: W,
                                avatarDecoration: H,
                                "aria-hidden": !0,
                                size: w,
                                status: L ? N.clD.UNKNOWN : s,
                                statusBackdropColor: L ? void 0 : (0, c.C$)(k),
                                isMobile: P,
                                className: _.my,
                            }),
                            (0, i.jsxs)("div", {
                                className: _.zH,
                                children: [
                                    (0, i.jsx)(A.A, {
                                        user: t,
                                        className: _.Tc,
                                        usernameClass: _.QC,
                                        discriminatorClass: _.D2,
                                        showGuildTag: !0,
                                    }),
                                    (0, i.jsx)("div", {
                                        id: Y,
                                        children: (0, i.jsx)(h.A, {
                                            user: t,
                                            activities: U,
                                            applicationStream: D,
                                            voiceChannel: O,
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

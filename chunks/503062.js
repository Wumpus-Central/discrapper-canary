var i = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(855986),
    o = n(778712),
    u = n(97808),
    d = n(939249),
    c = n(935154),
    g = n(442433),
    f = n(297413),
    m = n(714114),
    p = n(342312),
    h = n(178418),
    x = n(87664),
    A = n(449582),
    I = n(88686),
    v = n(214881),
    j = n(290863),
    b = n(427262),
    y = n(253400),
    C = n(854627),
    E = n(939496),
    S = n(652215),
    N = n(996988),
    k = n(792996),
    T = n(135650);
let P = o._3.SIZE_40,
    O = y.Ay.getEnableHardwareAcceleration();
n.d(
    t,
    {},
    {
        A: function (e) {
            let { user: t, status: r, guildId: o, channelId: y, onSelect: R } = e,
                { theme: L, themeType: _ } = (0, E.E)(),
                w = l.useMemo(() => t.isNonUserBot() || (0, h.c)(t, y), [t, y]),
                { activities: M, isMobileOnline: D } = (0, a.cf)([j.A], () => ({
                    activities: j.A.getActivities(t.id),
                    isMobileOnline: j.A.isMobileOnline(t.id),
                })),
                G = (0, x.A)(t.id),
                { voiceChannel: U } = (0, m.Ay)({ userId: t.id, guildId: o }),
                [F, B] = l.useState(!1),
                {
                    avatarSrc: W,
                    avatarDecorationSrc: V,
                    eventHandlers: H,
                } = (0, C.A)({ userId: t.id, guildId: o, size: P, animateOnHover: !F }),
                z = O ? u.Js : u.eu,
                Y = l.useRef(null),
                K = l.useId(),
                q = (0, A.r)({ user: t, guildId: o }),
                X = (0, b.tx)(t),
                Z = w ? null : (0, b.MU)(r, { isMobile: D }),
                $ =
                    null != Z
                        ? k.intl.formatToPlainString(k.t["9Gofqp"], { name: X, presence: Z })
                        : k.intl.formatToPlainString(k.t.fGlxFS, { name: X }),
                J = l.useCallback(() => B(!0), []),
                Q = l.useCallback(() => B(!1), []);
            return (0, i.jsxs)(d.D, {
                onMouseEnter: J,
                onMouseLeave: Q,
                focusProps: _ === N.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
                className: s()(T.nM, { [T.EY]: null != q }),
                "aria-label": $,
                "aria-describedby": K,
                onClick: R,
                onContextMenu: function (e) {
                    (0, g.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e(463317),
                            n.e(893190),
                            n.e(189673),
                            n.e(576432),
                            n.e(797558),
                            n.e(451162),
                            n.e(576665),
                            n.e(624198),
                            n.e(60086),
                            n.e(242204),
                            n.e(856753),
                            n.e(532418),
                        ]).then(n.bind(n, 668569));
                        return (n) => (0, i.jsx)(e, { ...n, user: t });
                    });
                },
                children: [
                    (0, i.jsx)(v.A, {
                        nameplate: F ? q : null,
                        hovered: F,
                        content: Y,
                        placement: I.u.MUTUAL_FRIENDS_LIST,
                    }),
                    (0, i.jsxs)("div", {
                        ref: Y,
                        className: T.Qs,
                        children: [
                            (0, i.jsx)(z, {
                                ...H,
                                src: W,
                                avatarDecoration: V,
                                "aria-hidden": !0,
                                size: P,
                                status: w ? S.clD.UNKNOWN : r,
                                statusBackdropColor: w ? void 0 : (0, c.C$)(L),
                                isMobile: D,
                                className: T.my,
                            }),
                            (0, i.jsxs)("div", {
                                className: T.zH,
                                children: [
                                    (0, i.jsx)(f.A, {
                                        user: t,
                                        className: T.Tc,
                                        usernameClass: T.QC,
                                        discriminatorClass: T.D2,
                                        showGuildTag: !0,
                                    }),
                                    (0, i.jsx)("div", {
                                        id: K,
                                        children: (0, i.jsx)(p.A, {
                                            user: t,
                                            activities: M,
                                            applicationStream: G,
                                            voiceChannel: U,
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

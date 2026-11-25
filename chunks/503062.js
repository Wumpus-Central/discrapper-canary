var i = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(855986),
    o = n(778712),
    d = n(97808),
    u = n(939249),
    c = n(442433),
    g = n(297413),
    m = n(714114),
    f = n(342312),
    h = n(178418),
    p = n(87664),
    x = n(449582),
    A = n(88686),
    I = n(214881),
    v = n(290863),
    j = n(427262),
    y = n(253400),
    b = n(854627),
    C = n(939496),
    E = n(652215),
    S = n(996988),
    N = n(792996),
    k = n(135650);
let T = o._3.SIZE_40,
    P = y.Ay.getEnableHardwareAcceleration();
n.d(
    t,
    {},
    {
        A: function (e) {
            let { user: t, status: r, guildId: o, channelId: y, onSelect: O } = e,
                { themeType: R } = (0, C.E)(),
                _ = l.useMemo(() => t.isNonUserBot() || (0, h.c)(t, y), [t, y]),
                { activities: L, isMobileOnline: w } = (0, a.cf)([v.A], () => ({
                    activities: v.A.getActivities(t.id),
                    isMobileOnline: v.A.isMobileOnline(t.id),
                })),
                M = (0, p.A)(t.id),
                { voiceChannel: D } = (0, m.Ay)({ userId: t.id, guildId: o }),
                [G, U] = l.useState(!1),
                {
                    avatarSrc: F,
                    avatarDecorationSrc: B,
                    eventHandlers: W,
                } = (0, b.A)({ userId: t.id, guildId: o, size: T, animateOnHover: !G }),
                H = P ? d.Js : d.eu,
                V = l.useRef(null),
                z = l.useId(),
                Y = (0, x.r)({ user: t, guildId: o }),
                K = (0, j.tx)(t),
                q = _ ? null : (0, j.MU)(r, { isMobile: w }),
                X =
                    null != q
                        ? N.intl.formatToPlainString(N.t["9Gofqp"], { name: K, presence: q })
                        : N.intl.formatToPlainString(N.t.fGlxFS, { name: K }),
                Z = l.useCallback(() => U(!0), []),
                $ = l.useCallback(() => U(!1), []);
            return (0, i.jsxs)(u.D, {
                onMouseEnter: Z,
                onMouseLeave: $,
                focusProps: R === S.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
                className: s()(k.nM, { [k.EY]: null != Y }),
                "aria-label": X,
                "aria-describedby": z,
                onClick: O,
                onContextMenu: function (e) {
                    (0, c.L3)(e, async () => {
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
                    (0, i.jsx)(I.A, {
                        nameplate: G ? Y : null,
                        hovered: G,
                        content: V,
                        placement: A.u.MUTUAL_FRIENDS_LIST,
                    }),
                    (0, i.jsxs)("div", {
                        ref: V,
                        className: k.Qs,
                        children: [
                            (0, i.jsx)(H, {
                                ...W,
                                src: F,
                                avatarDecoration: B,
                                "aria-hidden": !0,
                                size: T,
                                status: _ ? E.clD.UNKNOWN : r,
                                isMobile: w,
                                className: k.my,
                            }),
                            (0, i.jsxs)("div", {
                                className: k.zH,
                                children: [
                                    (0, i.jsx)(g.A, {
                                        user: t,
                                        className: k.Tc,
                                        usernameClass: k.QC,
                                        discriminatorClass: k.D2,
                                        showGuildTag: !0,
                                    }),
                                    (0, i.jsx)("div", {
                                        id: z,
                                        children: (0, i.jsx)(f.A, {
                                            user: t,
                                            activities: L,
                                            applicationStream: M,
                                            voiceChannel: D,
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

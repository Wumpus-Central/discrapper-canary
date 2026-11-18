var i = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(855986),
    o = n(778712),
    u = n(97808),
    d = n(939249),
    c = n(442433),
    g = n(297413),
    f = n(714114),
    m = n(342312),
    h = n(178418),
    p = n(87664),
    x = n(449582),
    A = n(88686),
    I = n(214881),
    v = n(290863),
    j = n(427262),
    b = n(253400),
    y = n(854627),
    C = n(939496),
    E = n(652215),
    S = n(996988),
    N = n(792996),
    k = n(135650);
let T = o._3.SIZE_40,
    P = b.Ay.getEnableHardwareAcceleration();
n.d(
    t,
    {},
    {
        A: function (e) {
            let { user: t, status: r, guildId: o, channelId: b, onSelect: R } = e,
                { themeType: O } = (0, C.E)(),
                L = l.useMemo(() => t.isNonUserBot() || (0, h.c)(t, b), [t, b]),
                { activities: _, isMobileOnline: w } = (0, a.cf)([v.A], () => ({
                    activities: v.A.getActivities(t.id),
                    isMobileOnline: v.A.isMobileOnline(t.id),
                })),
                M = (0, p.A)(t.id),
                { voiceChannel: D } = (0, f.Ay)({ userId: t.id, guildId: o }),
                [G, U] = l.useState(!1),
                {
                    avatarSrc: F,
                    avatarDecorationSrc: B,
                    eventHandlers: W,
                } = (0, y.A)({ userId: t.id, guildId: o, size: T, animateOnHover: !G }),
                V = P ? u.Js : u.eu,
                H = l.useRef(null),
                z = l.useId(),
                Y = (0, x.r)({ user: t, guildId: o }),
                K = (0, j.tx)(t),
                q = L ? null : (0, j.MU)(r, { isMobile: w }),
                X =
                    null != q
                        ? N.intl.formatToPlainString(N.t["9Gofqp"], { name: K, presence: q })
                        : N.intl.formatToPlainString(N.t.fGlxFS, { name: K }),
                Z = l.useCallback(() => U(!0), []),
                $ = l.useCallback(() => U(!1), []);
            return (0, i.jsxs)(d.D, {
                onMouseEnter: Z,
                onMouseLeave: $,
                focusProps: O === S.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
                className: s()(k.nM, { [k.EY]: null != Y }),
                "aria-label": X,
                "aria-describedby": z,
                onClick: R,
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
                        content: H,
                        placement: A.u.MUTUAL_FRIENDS_LIST,
                    }),
                    (0, i.jsxs)("div", {
                        ref: H,
                        className: k.Qs,
                        children: [
                            (0, i.jsx)(V, {
                                ...W,
                                src: F,
                                avatarDecoration: B,
                                "aria-hidden": !0,
                                size: T,
                                status: L ? E.clD.UNKNOWN : r,
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
                                        children: (0, i.jsx)(m.A, {
                                            user: t,
                                            activities: _,
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

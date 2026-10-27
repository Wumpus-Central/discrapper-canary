i.d(l, { A: () => L });
var a = i(477900),
    s = i(582128),
    t = i(503698),
    n = i.n(t),
    r = i(17928),
    d = i(778712),
    u = i(97808),
    o = i(939249),
    c = i(935154),
    m = i(442433),
    f = i(297413),
    A = i(714114),
    x = i(394871),
    h = i(178418),
    p = i(87664),
    v = i(449582),
    g = i(88686),
    j = i(214881),
    N = i(290863),
    b = i(427262),
    M = i(19575),
    I = i(854627),
    C = i(939496),
    S = i(652215),
    y = i(996988),
    E = i(105292),
    k = i(135650);
let w = d._3.SIZE_40,
    _ = M.Ay.getEnableHardwareAcceleration();
function L(e) {
    let { user: l, status: t, guildId: d, channelId: M, onSelect: L } = e,
        { theme: F, themeType: T } = (0, C.E)(),
        U = s.useMemo(() => l.isNonUserBot() || (0, h.c)(l, M), [l, M]),
        { activities: R, isMobileOnline: P } = (0, r.cf)([N.A], () => ({
            activities: N.A.getActivities(l.id),
            isMobileOnline: N.A.isMobileOnline(l.id),
        })),
        D = (0, p.A)(l.id),
        { voiceChannel: G } = (0, A.Ay)({ userId: l.id, guildId: d }),
        [z, O] = s.useState(!1),
        {
            avatarSrc: H,
            avatarDecorationSrc: K,
            eventHandlers: W,
        } = (0, I.A)({ userId: l.id, guildId: d, size: w, animateOnHover: !z }),
        Z = _ ? u.Js : u.eu,
        q = s.useRef(null),
        B = s.useId(),
        Q = (0, v.r)({ user: l, guildId: d }),
        V = (0, b.tx)(l),
        Y = U ? null : (0, b.MU)(t, { isMobile: P }),
        $ =
            null != Y
                ? E.intl.formatToPlainString(E.t["9Gofqp"], { name: V, presence: Y })
                : E.intl.formatToPlainString(E.t.fGlxFS, { name: V }),
        J = s.useCallback(() => O(!0), []),
        X = s.useCallback(() => O(!1), []);
    return (0, a.jsxs)(o.D, {
        onMouseEnter: J,
        onMouseLeave: X,
        focusProps: T === y.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: n()(k.nM, { [k.EY]: null != Q }),
        "aria-label": $,
        "aria-describedby": B,
        onClick: L,
        onContextMenu: function (e) {
            (0, m.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    i.e("463317"),
                    i.e("893190"),
                    i.e("189673"),
                    i.e("882073"),
                    i.e("797558"),
                    i.e("691994"),
                    i.e("576665"),
                    i.e("624198"),
                    i.e("33611"),
                    i.e("242204"),
                    i.e("856753"),
                    i.e("532418"),
                ]).then(i.bind(i, 668569));
                return (i) => (0, a.jsx)(e, { ...i, user: l });
            });
        },
        children: [
            (0, a.jsx)(j.A, { nameplate: z ? Q : null, hovered: z, content: q, placement: g.u.MUTUAL_FRIENDS_LIST }),
            (0, a.jsxs)("div", {
                ref: q,
                className: k.Qs,
                children: [
                    (0, a.jsx)(Z, {
                        ...W,
                        src: H,
                        avatarDecoration: K,
                        "aria-hidden": !0,
                        size: w,
                        status: U ? S.clD.UNKNOWN : t,
                        statusBackdropColor: U ? void 0 : (0, c.C$)(F),
                        isMobile: P,
                        className: k.my,
                    }),
                    (0, a.jsxs)("div", {
                        className: k.zH,
                        children: [
                            (0, a.jsx)(f.A, {
                                user: l,
                                className: k.Tc,
                                usernameClass: k.QC,
                                discriminatorClass: k.D2,
                                showGuildTag: !0,
                            }),
                            (0, a.jsx)("div", {
                                id: B,
                                children: (0, a.jsx)(x.A, {
                                    user: l,
                                    activities: R,
                                    applicationStream: D,
                                    voiceChannel: G,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}

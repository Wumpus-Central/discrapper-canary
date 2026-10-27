i.d(l, { A: () => T });
var t = i(477900),
    n = i(582128),
    a = i(503698),
    s = i.n(a),
    r = i(17928),
    d = i(778712),
    u = i(97808),
    c = i(939249),
    o = i(935154),
    m = i(442433),
    f = i(297413),
    A = i(714114),
    h = i(394871),
    p = i(178418),
    x = i(87664),
    v = i(449582),
    g = i(88686),
    j = i(214881),
    E = i(290863),
    b = i(427262),
    I = i(19575),
    N = i(854627),
    M = i(939496),
    C = i(652215),
    S = i(996988),
    y = i(105292),
    _ = i(135650);
let k = d._3.SIZE_40,
    R = I.Ay.getEnableHardwareAcceleration();
function T(e) {
    let { user: l, status: a, guildId: d, channelId: I, onSelect: T } = e,
        { theme: w, themeType: L } = (0, M.E)(),
        D = n.useMemo(() => l.isNonUserBot() || (0, p.c)(l, I), [l, I]),
        { activities: F, isMobileOnline: U } = (0, r.cf)([E.A], () => ({
            activities: E.A.getActivities(l.id),
            isMobileOnline: E.A.isMobileOnline(l.id),
        })),
        P = (0, x.A)(l.id),
        { voiceChannel: G } = (0, A.Ay)({ userId: l.id, guildId: d }),
        [O, z] = n.useState(!1),
        {
            avatarSrc: W,
            avatarDecorationSrc: H,
            eventHandlers: K,
        } = (0, N.A)({ userId: l.id, guildId: d, size: k, animateOnHover: !O }),
        V = R ? u.Js : u.eu,
        Z = n.useRef(null),
        q = n.useId(),
        B = (0, v.r)({ user: l, guildId: d }),
        Q = (0, b.tx)(l),
        Y = D ? null : (0, b.MU)(a, { isMobile: U }),
        $ =
            null != Y
                ? y.intl.formatToPlainString(y.t["9Gofqp"], { name: Q, presence: Y })
                : y.intl.formatToPlainString(y.t.fGlxFS, { name: Q }),
        J = n.useCallback(() => z(!0), []),
        X = n.useCallback(() => z(!1), []);
    return (0, t.jsxs)(c.D, {
        onMouseEnter: J,
        onMouseLeave: X,
        focusProps: L === S.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: s()(_.nM, { [_.EY]: null != B }),
        "aria-label": $,
        "aria-describedby": q,
        onClick: T,
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
                return (i) => (0, t.jsx)(e, { ...i, user: l });
            });
        },
        children: [
            (0, t.jsx)(j.A, { nameplate: O ? B : null, hovered: O, content: Z, placement: g.u.MUTUAL_FRIENDS_LIST }),
            (0, t.jsxs)("div", {
                ref: Z,
                className: _.Qs,
                children: [
                    (0, t.jsx)(V, {
                        ...K,
                        src: W,
                        avatarDecoration: H,
                        "aria-hidden": !0,
                        size: k,
                        status: D ? C.clD.UNKNOWN : a,
                        statusBackdropColor: D ? void 0 : (0, o.C$)(w),
                        isMobile: U,
                        className: _.my,
                    }),
                    (0, t.jsxs)("div", {
                        className: _.zH,
                        children: [
                            (0, t.jsx)(f.A, {
                                user: l,
                                className: _.Tc,
                                usernameClass: _.QC,
                                discriminatorClass: _.D2,
                                showGuildTag: !0,
                            }),
                            (0, t.jsx)("div", {
                                id: q,
                                children: (0, t.jsx)(h.A, {
                                    user: l,
                                    activities: F,
                                    applicationStream: P,
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

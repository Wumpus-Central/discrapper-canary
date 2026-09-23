n.d(t, { G: () => ed });
var i = n(477900),
    l = n(582128),
    s = n(612324),
    a = n(17928),
    r = n(778712),
    o = n(775602),
    c = n(793574),
    d = n(688810),
    u = n(480335),
    m = n(372320),
    h = n(744808),
    g = n(713517),
    p = n(885386),
    A = n(287809),
    x = n(562153),
    f = n(183555),
    E = n(999291),
    I = n(732188),
    C = n(391210),
    _ = n(402860),
    v = n(718019),
    N = n(365607),
    j = n(559506),
    T = n(791556),
    S = n(312381),
    y = n(501193),
    b = n(946356),
    R = n(465829),
    M = n(983495),
    k = n(317097),
    L = n(661531),
    O = n(602853),
    P = n(654107),
    D = n(450373),
    U = n(531685),
    G = n(486020),
    w = n(837529),
    H = n(686189),
    B = n(714719),
    F = n(859161);
function V(e) {
    let { user: t, displayProfile: n, guildId: s, bannerHeight: o, avatarSize: c, avatarInsetStart: d } = e,
        [u, m] = l.useState(!1),
        h = (0, a.bG)([U.A], () => U.A.isFocused()),
        g = p.kt.getSetting(),
        A = (0, w.Nx)(),
        { bannerSrc: x, status: f } = (0, H.A)({ displayProfile: n ?? null, size: 480, canAnimate: g ? h : u }),
        E = A ? null : (x ?? null),
        I = (0, O.r)(L.A.unsafe_rawColors.PRIMARY_800).hex(),
        C = null != n ? n.guildId : s,
        _ = t.getAvatarURL(C ?? void 0, (0, r.FT)(c)),
        v = (0, k.LX)((0, P.Ay)(_, I, !1)),
        N = (0, D.A)(n?.primaryColor ?? v).hex,
        { size: j, stroke: T } = (0, r.Kj)(c),
        S = (0, F.A)(c);
    return (0, i.jsx)(B.A, {
        bannerSrc: E,
        backgroundColor: f === H.D.COMPLETE || A ? N : L.A.unsafe_rawColors.PRIMARY_800.css,
        showGifTag: !g && (0, G.o4)(E),
        height: o,
        cutout: { align: "start", insetStart: d + j / 2 - S, insetBottom: T / 2, radius: S },
        onInteractionStart: () => m(!0),
        onInteractionEnd: () => m(!1),
    });
}
var z = n(280450),
    J = n(984545),
    K = n(35241),
    Y = n(587168),
    W = n(193738),
    X = n(133385),
    Z = n(996988);
function q(e) {
    let { user: t, guildId: n } = e;
    return t.isNonUserBot()
        ? (0, i.jsx)(K.A, { user: t })
        : t.bot
          ? (0, i.jsx)(J.A, { user: t, guildId: n })
          : (0, i.jsx)(X.yo, { user: t, guildId: n });
}
function Q(e) {
    let { user: t, guildId: n } = e;
    return (0, a.bG)([z.default], () => z.default.getId() === t.id)
        ? null
        : (0, i.jsxs)(Y.A, {
              children: [
                  !t.isNonUserBot() && (0, i.jsx)(W.A, { user: t, themeType: Z.d.EMBED }),
                  (0, i.jsx)(q, { user: t, guildId: n ?? void 0 }),
              ],
          });
}
var $ = n(213994),
    ee = n(821609),
    et = n(375708),
    en = n(820555);
function ei(e) {
    let { onOpenProfile: t } = e;
    return (0, i.jsx)("div", {
        className: en.k,
        children: (0, i.jsx)(ee.$, {
            variant: "primary",
            size: "md",
            fullWidth: !0,
            text: et.intl.string(et.t.iXAna6),
            onClick: t,
        }),
    });
}
var el = n(332757);
let es = r._3.SIZE_96,
    ea = {
        "--custom-user-profile-banner-height": "120px",
        "--custom-user-profile-avatar-size": `${(0, r.Kj)(es).size}px`,
        "--custom-user-profile-avatar-stroke": `${(0, r.Kj)(es).stroke}px`,
        "--custom-user-profile-content-inset": "16px",
        "--custom-user-profile-private-banner-height": "0px",
    },
    er = { ...ea, "--custom-user-profile-private-banner-height": "32px" };
function eo(e) {
    let { user: t, guildId: n, channelId: l } = e;
    return (0, I.A)(t)
        ? (0, i.jsx)(T.A, {
              user: t,
              className: el.I0,
              onOpenProfile: (e) =>
                  (0, _.openUserProfileModal)({
                      userId: t.id,
                      guildId: n,
                      channelId: l,
                      tabSection: e,
                      hideRestrictedProfile: !0,
                  }),
          })
        : null;
}
function ec(e) {
    let { user: t, guildId: n, channelId: r, messageId: A, headingRef: I } = e,
        T = (0, E.Ay)(t.id, n),
        k = null != T ? T.guildId : n,
        L = x.Ay.useName(k, r, t),
        { analyticsLocations: O } = (0, d.Ay)(c.A.USER_PROFILE_EMBED),
        P = (0, f.pb)({ layout: "EMBED", userId: t.id, guildId: n, channelId: r, messageId: A }),
        D = (0, m.A)(T?.profileFrame?.skuId),
        U = T?.private === !0,
        G = (0, l.useRef)(null),
        [w, H] = (0, C.A)(),
        B = (0, s.A)(G, H),
        { isHovering: F } = (0, g.A)(G),
        z = p.kt.useSetting(),
        J = (0, a.bG)([o.Ay], () => o.Ay.useReducedMotion),
        K = T?.profileEffect?.skuId,
        Y = !z && !J;
    function W() {
        (0, _.openUserProfileModal)({
            userId: t.id,
            guildId: n,
            channelId: r,
            sourceAnalyticsLocations: O,
            hideRestrictedProfile: !0,
        });
    }
    return (0, i.jsx)(d.f5, {
        value: O,
        children: (0, i.jsx)(f.of, {
            value: P,
            fetchStartedAt: T?.fetchStartedAt,
            fetchEndedAt: T?.fetchEndedAt,
            isLoaded: T?.isLoaded === !0 && w,
            children: (0, i.jsxs)($.A, {
                user: t,
                displayProfile: T,
                size: "sm",
                style: U ? er : ea,
                containerRef: B,
                headingRef: I,
                headingText: et.intl.formatToPlainString(et.t["8yRya1"], { name: L }),
                profileEffect:
                    null != K ? (0, i.jsx)(u.A, { skuId: K, autoPlay: z, isHovering: F, useOpacityOnHover: !Y }) : null,
                profileFrame: null != D ? (0, i.jsx)(h.A, { frame: D, fadeIn: !1 }) : null,
                children: [
                    U && (0, i.jsx)(S.A, { className: el.i9 }),
                    (0, i.jsx)(V, {
                        user: t,
                        displayProfile: T,
                        guildId: n,
                        bannerHeight: 120,
                        avatarSize: es,
                        avatarInsetStart: 16,
                    }),
                    (0, i.jsx)(Q, { user: t, guildId: n }),
                    (0, i.jsx)(v.A, {
                        user: t,
                        displayProfile: T,
                        guildId: n,
                        channelId: r,
                        avatarSize: es,
                        className: el.H,
                        onOpenProfile: W,
                    }),
                    (0, i.jsx)(M.A, {
                        user: t,
                        guildId: k ?? void 0,
                        channelId: r ?? void 0,
                        themeType: Z.d.EMBED,
                        className: el.WO,
                        referenceClassName: el.RQ,
                        disableToolbar: !0,
                    }),
                    (0, i.jsx)(j.A, { userId: t.id, className: el.Fd }),
                    (0, i.jsx)(R.Ay, {
                        user: t,
                        guildId: k ?? void 0,
                        contextGuildId: n ?? void 0,
                        displayName: L,
                        onClickName: W,
                        pronouns: T?.pronouns,
                        className: el.eF,
                        trailing: (0, i.jsx)(N.A, { displayProfile: T, themeType: Z.d.EMBED }),
                    }),
                    (0, i.jsx)(eo, { user: t, guildId: n, channelId: r }),
                    U && (0, i.jsx)(b.A.Overlay, { className: el.In, children: (0, i.jsx)(y.A, { username: L }) }),
                    (0, i.jsx)(ei, { onOpenProfile: W }),
                ],
            }),
        }),
    });
}
function ed(e) {
    let { userId: t, guildId: n, channelId: l, messageId: s, headingRef: r } = e,
        o = (0, a.bG)([A.default], () => A.default.getUser(t));
    return null == o ? null : (0, i.jsx)(ec, { user: o, guildId: n, channelId: l, messageId: s, headingRef: r });
}

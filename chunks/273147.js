n.d(t, { G: () => es });
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
    A = n(885386),
    p = n(287809),
    x = n(562153),
    f = n(183555),
    E = n(999291),
    I = n(732188),
    C = n(391210),
    _ = n(402860),
    v = n(718019),
    N = n(365607),
    j = n(791556),
    T = n(465829),
    S = n(983495),
    y = n(317097),
    b = n(661531),
    R = n(602853),
    M = n(654107),
    L = n(450373),
    k = n(531685),
    O = n(486020),
    P = n(837529),
    D = n(686189),
    U = n(714719),
    G = n(859161);
function w(e) {
    let { user: t, displayProfile: n, guildId: s, bannerHeight: o, avatarSize: c, avatarInsetStart: d } = e,
        [u, m] = l.useState(!1),
        h = (0, a.bG)([k.A], () => k.A.isFocused()),
        g = A.kt.getSetting(),
        p = (0, P.Nx)(),
        { bannerSrc: x, status: f } = (0, D.A)({ displayProfile: n ?? null, size: 480, canAnimate: g ? h : u }),
        E = p ? null : (x ?? null),
        I = (0, R.r)(b.A.unsafe_rawColors.PRIMARY_800).hex(),
        C = null != n ? n.guildId : s,
        _ = t.getAvatarURL(C ?? void 0, (0, r.FT)(c)),
        v = (0, y.LX)((0, M.Ay)(_, I, !1)),
        N = (0, L.A)(n?.primaryColor ?? v).hex,
        { size: j, stroke: T } = (0, r.Kj)(c),
        S = (0, G.A)(c);
    return (0, i.jsx)(U.A, {
        bannerSrc: E,
        backgroundColor: f === D.D.COMPLETE || p ? N : b.A.unsafe_rawColors.PRIMARY_800.css,
        showGifTag: !g && (0, O.o4)(E),
        height: o,
        cutout: { align: "start", insetStart: d + j / 2 - S, insetBottom: T / 2, radius: S },
        onInteractionStart: () => m(!0),
        onInteractionEnd: () => m(!1),
    });
}
var H = n(280450),
    B = n(984545),
    F = n(35241),
    V = n(587168),
    z = n(193738),
    J = n(133385),
    K = n(996988);
function Y(e) {
    let { user: t, guildId: n } = e;
    return t.isNonUserBot()
        ? (0, i.jsx)(F.A, { user: t })
        : t.bot
          ? (0, i.jsx)(B.A, { user: t, guildId: n })
          : (0, i.jsx)(J.yo, { user: t, guildId: n });
}
function W(e) {
    let { user: t, guildId: n } = e;
    return (0, a.bG)([H.default], () => H.default.getId() === t.id)
        ? null
        : (0, i.jsxs)(V.A, {
              children: [
                  !t.isNonUserBot() && (0, i.jsx)(z.A, { user: t, themeType: K.d.EMBED }),
                  (0, i.jsx)(Y, { user: t, guildId: n ?? void 0 }),
              ],
          });
}
var X = n(213994),
    Z = n(821609),
    q = n(375708),
    Q = n(820555);
function $(e) {
    let { onOpenProfile: t } = e;
    return (0, i.jsx)("div", {
        className: Q.k,
        children: (0, i.jsx)(Z.$, {
            variant: "primary",
            size: "md",
            fullWidth: !0,
            text: q.intl.string(q.t.iXAna6),
            onClick: t,
        }),
    });
}
var ee = n(332757);
let et = r._3.SIZE_96,
    en = {
        "--custom-user-profile-banner-height": "120px",
        "--custom-user-profile-avatar-size": `${(0, r.Kj)(et).size}px`,
        "--custom-user-profile-avatar-stroke": `${(0, r.Kj)(et).stroke}px`,
        "--custom-user-profile-content-inset": "16px",
    };
function ei(e) {
    let { user: t, guildId: n, channelId: l } = e;
    return (0, I.A)(t)
        ? (0, i.jsx)(j.A, {
              user: t,
              className: ee.I0,
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
function el(e) {
    let { user: t, guildId: n, channelId: r, messageId: p, headingRef: I } = e,
        j = (0, E.Ay)(t.id, n),
        y = null != j ? j.guildId : n,
        b = x.Ay.useName(y, r, t),
        { analyticsLocations: R } = (0, d.Ay)(c.A.USER_PROFILE_EMBED),
        M = (0, f.pb)({ layout: "EMBED", userId: t.id, guildId: n, channelId: r, messageId: p }),
        L = (0, m.A)(j?.profileFrame?.skuId),
        k = (0, l.useRef)(null),
        [O, P] = (0, C.A)(),
        D = (0, s.A)(k, P),
        { isHovering: U } = (0, g.A)(k),
        G = A.kt.useSetting(),
        H = (0, a.bG)([o.Ay], () => o.Ay.useReducedMotion),
        B = j?.profileEffect?.skuId,
        F = !G && !H;
    function V() {
        (0, _.openUserProfileModal)({
            userId: t.id,
            guildId: n,
            channelId: r,
            sourceAnalyticsLocations: R,
            hideRestrictedProfile: !0,
        });
    }
    return (0, i.jsx)(d.f5, {
        value: R,
        children: (0, i.jsx)(f.of, {
            value: M,
            fetchStartedAt: j?.fetchStartedAt,
            fetchEndedAt: j?.fetchEndedAt,
            isLoaded: j?.isLoaded === !0 && O,
            children: (0, i.jsxs)(X.A, {
                user: t,
                displayProfile: j,
                size: "sm",
                style: en,
                containerRef: D,
                headingRef: I,
                headingText: q.intl.formatToPlainString(q.t["8yRya1"], { name: b }),
                profileEffect:
                    null != B ? (0, i.jsx)(u.A, { skuId: B, autoPlay: G, isHovering: U, useOpacityOnHover: !F }) : null,
                profileFrame: null != L ? (0, i.jsx)(h.A, { frame: L, fadeIn: !1 }) : null,
                children: [
                    (0, i.jsx)(w, {
                        user: t,
                        displayProfile: j,
                        guildId: n,
                        bannerHeight: 120,
                        avatarSize: et,
                        avatarInsetStart: 16,
                    }),
                    (0, i.jsx)(W, { user: t, guildId: n }),
                    (0, i.jsx)(v.A, {
                        user: t,
                        displayProfile: j,
                        guildId: n,
                        channelId: r,
                        avatarSize: et,
                        className: ee.H,
                        onOpenProfile: V,
                    }),
                    (0, i.jsx)(S.A, {
                        user: t,
                        guildId: y ?? void 0,
                        channelId: r ?? void 0,
                        themeType: K.d.EMBED,
                        className: ee.WO,
                        referenceClassName: ee.RQ,
                        disableToolbar: !0,
                    }),
                    (0, i.jsx)(T.Ay, {
                        user: t,
                        guildId: y ?? void 0,
                        contextGuildId: n ?? void 0,
                        displayName: b,
                        pronouns: j?.pronouns,
                        className: ee.eF,
                        trailing: (0, i.jsx)(N.A, { displayProfile: j, themeType: K.d.EMBED }),
                    }),
                    (0, i.jsx)(ei, { user: t, guildId: n, channelId: r }),
                    (0, i.jsx)($, { onOpenProfile: V }),
                ],
            }),
        }),
    });
}
function es(e) {
    let { userId: t, guildId: n, channelId: l, messageId: s, headingRef: r } = e,
        o = (0, a.bG)([p.default], () => p.default.getUser(t));
    return null == o ? null : (0, i.jsx)(el, { user: o, guildId: n, channelId: l, messageId: s, headingRef: r });
}

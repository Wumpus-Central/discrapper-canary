n.d(t, { G: () => ec });
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
    j = n(791556),
    T = n(312381),
    S = n(501193),
    y = n(946356),
    b = n(465829),
    R = n(983495),
    M = n(317097),
    k = n(661531),
    L = n(602853),
    O = n(654107),
    P = n(450373),
    D = n(531685),
    U = n(486020),
    G = n(837529),
    w = n(686189),
    H = n(714719),
    B = n(859161);
function F(e) {
    let { user: t, displayProfile: n, guildId: s, bannerHeight: o, avatarSize: c, avatarInsetStart: d } = e,
        [u, m] = l.useState(!1),
        h = (0, a.bG)([D.A], () => D.A.isFocused()),
        g = p.kt.getSetting(),
        A = (0, G.Nx)(),
        { bannerSrc: x, status: f } = (0, w.A)({ displayProfile: n ?? null, size: 480, canAnimate: g ? h : u }),
        E = A ? null : (x ?? null),
        I = (0, L.r)(k.A.unsafe_rawColors.PRIMARY_800).hex(),
        C = null != n ? n.guildId : s,
        _ = t.getAvatarURL(C ?? void 0, (0, r.FT)(c)),
        v = (0, M.LX)((0, O.Ay)(_, I, !1)),
        N = (0, P.A)(n?.primaryColor ?? v).hex,
        { size: j, stroke: T } = (0, r.Kj)(c),
        S = (0, B.A)(c);
    return (0, i.jsx)(H.A, {
        bannerSrc: E,
        backgroundColor: f === w.D.COMPLETE || A ? N : k.A.unsafe_rawColors.PRIMARY_800.css,
        showGifTag: !g && (0, U.o4)(E),
        height: o,
        cutout: { align: "start", insetStart: d + j / 2 - S, insetBottom: T / 2, radius: S },
        onInteractionStart: () => m(!0),
        onInteractionEnd: () => m(!1),
    });
}
var V = n(280450),
    z = n(984545),
    J = n(35241),
    K = n(587168),
    Y = n(193738),
    W = n(133385),
    X = n(996988);
function Z(e) {
    let { user: t, guildId: n } = e;
    return t.isNonUserBot()
        ? (0, i.jsx)(J.A, { user: t })
        : t.bot
          ? (0, i.jsx)(z.A, { user: t, guildId: n })
          : (0, i.jsx)(W.yo, { user: t, guildId: n });
}
function q(e) {
    let { user: t, guildId: n } = e;
    return (0, a.bG)([V.default], () => V.default.getId() === t.id)
        ? null
        : (0, i.jsxs)(K.A, {
              children: [
                  !t.isNonUserBot() && (0, i.jsx)(Y.A, { user: t, themeType: X.d.EMBED }),
                  (0, i.jsx)(Z, { user: t, guildId: n ?? void 0 }),
              ],
          });
}
var Q = n(213994),
    $ = n(821609),
    ee = n(375708),
    et = n(820555);
function en(e) {
    let { onOpenProfile: t } = e;
    return (0, i.jsx)("div", {
        className: et.k,
        children: (0, i.jsx)($.$, {
            variant: "primary",
            size: "md",
            fullWidth: !0,
            text: ee.intl.string(ee.t.iXAna6),
            onClick: t,
        }),
    });
}
var ei = n(332757);
let el = r._3.SIZE_96,
    es = {
        "--custom-user-profile-banner-height": "120px",
        "--custom-user-profile-avatar-size": `${(0, r.Kj)(el).size}px`,
        "--custom-user-profile-avatar-stroke": `${(0, r.Kj)(el).stroke}px`,
        "--custom-user-profile-content-inset": "16px",
        "--custom-user-profile-private-banner-height": "0px",
    },
    ea = { ...es, "--custom-user-profile-private-banner-height": "32px" };
function er(e) {
    let { user: t, guildId: n, channelId: l } = e;
    return (0, I.A)(t)
        ? (0, i.jsx)(j.A, {
              user: t,
              className: ei.I0,
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
function eo(e) {
    let { user: t, guildId: n, channelId: r, messageId: A, headingRef: I } = e,
        j = (0, E.Ay)(t.id, n),
        M = null != j ? j.guildId : n,
        k = x.Ay.useName(M, r, t),
        { analyticsLocations: L } = (0, d.Ay)(c.A.USER_PROFILE_EMBED),
        O = (0, f.pb)({ layout: "EMBED", userId: t.id, guildId: n, channelId: r, messageId: A }),
        P = (0, m.A)(j?.profileFrame?.skuId),
        D = j?.private === !0,
        U = (0, l.useRef)(null),
        [G, w] = (0, C.A)(),
        H = (0, s.A)(U, w),
        { isHovering: B } = (0, g.A)(U),
        V = p.kt.useSetting(),
        z = (0, a.bG)([o.Ay], () => o.Ay.useReducedMotion),
        J = j?.profileEffect?.skuId,
        K = !V && !z;
    function Y() {
        (0, _.openUserProfileModal)({
            userId: t.id,
            guildId: n,
            channelId: r,
            sourceAnalyticsLocations: L,
            hideRestrictedProfile: !0,
        });
    }
    return (0, i.jsx)(d.f5, {
        value: L,
        children: (0, i.jsx)(f.of, {
            value: O,
            fetchStartedAt: j?.fetchStartedAt,
            fetchEndedAt: j?.fetchEndedAt,
            isLoaded: j?.isLoaded === !0 && G,
            children: (0, i.jsxs)(Q.A, {
                user: t,
                displayProfile: j,
                size: "sm",
                style: D ? ea : es,
                containerRef: H,
                headingRef: I,
                headingText: ee.intl.formatToPlainString(ee.t["8yRya1"], { name: k }),
                profileEffect:
                    null != J ? (0, i.jsx)(u.A, { skuId: J, autoPlay: V, isHovering: B, useOpacityOnHover: !K }) : null,
                profileFrame: null != P ? (0, i.jsx)(h.A, { frame: P, fadeIn: !1 }) : null,
                children: [
                    D && (0, i.jsx)(T.A, { className: ei.i9 }),
                    (0, i.jsx)(F, {
                        user: t,
                        displayProfile: j,
                        guildId: n,
                        bannerHeight: 120,
                        avatarSize: el,
                        avatarInsetStart: 16,
                    }),
                    (0, i.jsx)(q, { user: t, guildId: n }),
                    (0, i.jsx)(v.A, {
                        user: t,
                        displayProfile: j,
                        guildId: n,
                        channelId: r,
                        avatarSize: el,
                        className: ei.H,
                        onOpenProfile: Y,
                    }),
                    (0, i.jsx)(R.A, {
                        user: t,
                        guildId: M ?? void 0,
                        channelId: r ?? void 0,
                        themeType: X.d.EMBED,
                        className: ei.WO,
                        referenceClassName: ei.RQ,
                        disableToolbar: !0,
                    }),
                    (0, i.jsx)(b.Ay, {
                        user: t,
                        guildId: M ?? void 0,
                        contextGuildId: n ?? void 0,
                        displayName: k,
                        onClickName: Y,
                        pronouns: j?.pronouns,
                        className: ei.eF,
                        trailing: (0, i.jsx)(N.A, { displayProfile: j, themeType: X.d.EMBED }),
                    }),
                    (0, i.jsx)(er, { user: t, guildId: n, channelId: r }),
                    D && (0, i.jsx)(y.A.Overlay, { className: ei.In, children: (0, i.jsx)(S.A, { username: k }) }),
                    (0, i.jsx)(en, { onOpenProfile: Y }),
                ],
            }),
        }),
    });
}
function ec(e) {
    let { userId: t, guildId: n, channelId: l, messageId: s, headingRef: r } = e,
        o = (0, a.bG)([A.default], () => A.default.getUser(t));
    return null == o ? null : (0, i.jsx)(eo, { user: o, guildId: n, channelId: l, messageId: s, headingRef: r });
}

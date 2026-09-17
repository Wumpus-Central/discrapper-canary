n.d(t, { G: () => ec });
var i = n(477900),
    l = n(582128),
    s = n(612324),
    a = n(17928),
    r = n(97808),
    o = n(778712),
    c = n(775602),
    d = n(793574),
    u = n(688810),
    m = n(480335),
    h = n(372320),
    g = n(744808),
    A = n(713517),
    p = n(885386),
    x = n(287809),
    f = n(562153),
    E = n(19575),
    I = n(183555),
    C = n(999291),
    _ = n(732188),
    v = n(391210),
    N = n(402860),
    j = n(718019),
    T = n(365607),
    S = n(791556),
    y = n(465829),
    b = n(983495),
    R = n(317097),
    M = n(661531),
    L = n(602853),
    k = n(654107),
    O = n(450373),
    P = n(531685),
    D = n(486020),
    U = n(837529),
    G = n(686189),
    w = n(714719),
    H = n(859161);
function B(e) {
    let { user: t, displayProfile: n, guildId: s, bannerHeight: r, avatarSize: c, avatarInsetStart: d } = e,
        [u, m] = l.useState(!1),
        h = (0, a.bG)([P.A], () => P.A.isFocused()),
        g = p.kt.getSetting(),
        A = (0, U.Nx)(),
        { bannerSrc: x, status: f } = (0, G.A)({ displayProfile: n ?? null, size: 480, canAnimate: g ? h : u }),
        E = A ? null : (x ?? null),
        I = (0, L.r)(M.A.unsafe_rawColors.PRIMARY_800).hex(),
        C = null != n ? n.guildId : s,
        _ = t.getAvatarURL(C ?? void 0, (0, o.FT)(c)),
        v = (0, R.LX)((0, k.Ay)(_, I, !1)),
        N = (0, O.A)(n?.primaryColor ?? v).hex,
        { size: j, stroke: T } = (0, o.Kj)(c),
        S = (0, H.A)(c);
    return (0, i.jsx)(w.A, {
        bannerSrc: E,
        backgroundColor: f === G.D.COMPLETE || A ? N : M.A.unsafe_rawColors.PRIMARY_800.css,
        showGifTag: !g && (0, D.o4)(E),
        height: r,
        cutout: { align: "start", insetStart: d + j / 2 - S, insetBottom: T / 2, radius: S },
        onInteractionStart: () => m(!0),
        onInteractionEnd: () => m(!1),
    });
}
var F = n(280450),
    V = n(984545),
    z = n(35241),
    J = n(587168),
    K = n(193738),
    Y = n(133385),
    W = n(996988);
function X(e) {
    let { user: t, guildId: n } = e;
    return t.isNonUserBot()
        ? (0, i.jsx)(z.A, { user: t })
        : t.bot
          ? (0, i.jsx)(V.A, { user: t, guildId: n })
          : (0, i.jsx)(Y.yo, { user: t, guildId: n });
}
function Z(e) {
    let { user: t, guildId: n } = e;
    return (0, a.bG)([F.default], () => F.default.getId() === t.id)
        ? null
        : (0, i.jsxs)(J.A, {
              children: [
                  !t.isNonUserBot() && (0, i.jsx)(K.A, { user: t, themeType: W.d.EMBED }),
                  (0, i.jsx)(X, { user: t, guildId: n ?? void 0 }),
              ],
          });
}
var q = n(213994),
    Q = n(821609),
    $ = n(375708),
    ee = n(820555);
function et(e) {
    let { userId: t, guildId: n, channelId: l } = e;
    return (0, i.jsx)("div", {
        className: ee.k,
        children: (0, i.jsx)(Q.$, {
            variant: "primary",
            size: "md",
            fullWidth: !0,
            text: $.intl.string($.t.iXAna6),
            onClick: function () {
                (0, N.openUserProfileModal)({ userId: t, guildId: n, channelId: l, hideRestrictedProfile: !0 });
            },
        }),
    });
}
var en = n(332757);
let ei = E.Ay.getEnableHardwareAcceleration() ? r.Js : r.eu,
    el = o._3.SIZE_96,
    es = {
        "--custom-user-profile-banner-height": "120px",
        "--custom-user-profile-avatar-size": `${(0, o.Kj)(el).size}px`,
        "--custom-user-profile-avatar-stroke": `${(0, o.Kj)(el).stroke}px`,
        "--custom-user-profile-content-inset": "16px",
    };
function ea(e) {
    let { user: t, displayProfile: n, guildId: l, channelId: s } = e,
        { avatarProps: a, eventHandlers: r } = (0, j.V)({
            user: t,
            displayProfile: n,
            guildId: l,
            channelId: s,
            avatarSize: el,
        });
    return (0, i.jsx)("div", { className: en.H, children: (0, i.jsx)(ei, { ...a, ...r }) });
}
function er(e) {
    let { user: t, guildId: n, channelId: l } = e;
    return (0, _.A)(t)
        ? (0, i.jsx)(S.A, {
              user: t,
              className: en.I0,
              onOpenProfile: (e) =>
                  (0, N.openUserProfileModal)({
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
    let { user: t, guildId: n, channelId: r, messageId: o, headingRef: x } = e,
        E = (0, C.Ay)(t.id, n),
        _ = null != E ? E.guildId : n,
        N = f.Ay.useName(_, r, t),
        { analyticsLocations: j } = (0, u.Ay)(d.A.USER_PROFILE_EMBED),
        S = (0, I.pb)({ layout: "EMBED", userId: t.id, guildId: n, channelId: r, messageId: o }),
        R = (0, h.A)(E?.profileFrame?.skuId),
        M = (0, l.useRef)(null),
        [L, k] = (0, v.A)(),
        O = (0, s.A)(M, k),
        { isHovering: P } = (0, A.A)(M),
        D = p.kt.useSetting(),
        U = (0, a.bG)([c.Ay], () => c.Ay.useReducedMotion),
        G = E?.profileEffect?.skuId,
        w = !D && !U;
    return (0, i.jsx)(u.f5, {
        value: j,
        children: (0, i.jsx)(I.of, {
            value: S,
            fetchStartedAt: E?.fetchStartedAt,
            fetchEndedAt: E?.fetchEndedAt,
            isLoaded: E?.isLoaded === !0 && L,
            children: (0, i.jsxs)(q.A, {
                user: t,
                displayProfile: E,
                size: "sm",
                style: es,
                containerRef: O,
                headingRef: x,
                headingText: $.intl.formatToPlainString($.t["8yRya1"], { name: N }),
                profileEffect:
                    null != G ? (0, i.jsx)(m.A, { skuId: G, autoPlay: D, isHovering: P, useOpacityOnHover: !w }) : null,
                profileFrame: null != R ? (0, i.jsx)(g.A, { frame: R, fadeIn: !1 }) : null,
                children: [
                    (0, i.jsx)(B, {
                        user: t,
                        displayProfile: E,
                        guildId: n,
                        bannerHeight: 120,
                        avatarSize: el,
                        avatarInsetStart: 16,
                    }),
                    (0, i.jsx)(Z, { user: t, guildId: n }),
                    (0, i.jsx)(ea, { user: t, displayProfile: E, guildId: n, channelId: r }),
                    (0, i.jsx)(b.A, {
                        user: t,
                        guildId: _ ?? void 0,
                        channelId: r ?? void 0,
                        themeType: W.d.EMBED,
                        className: en.WO,
                        referenceClassName: en.RQ,
                        disableToolbar: !0,
                    }),
                    (0, i.jsx)(y.Ay, {
                        user: t,
                        guildId: _ ?? void 0,
                        contextGuildId: n ?? void 0,
                        displayName: N,
                        pronouns: E?.pronouns,
                        className: en.eF,
                        trailing: (0, i.jsx)(T.A, { displayProfile: E, themeType: W.d.EMBED }),
                    }),
                    (0, i.jsx)(er, { user: t, guildId: n, channelId: r }),
                    (0, i.jsx)(et, { userId: t.id, guildId: n, channelId: r }),
                ],
            }),
        }),
    });
}
function ec(e) {
    let { userId: t, guildId: n, channelId: l, messageId: s, headingRef: r } = e,
        o = (0, a.bG)([x.default], () => x.default.getUser(t));
    return null == o ? null : (0, i.jsx)(eo, { user: o, guildId: n, channelId: l, messageId: s, headingRef: r });
}

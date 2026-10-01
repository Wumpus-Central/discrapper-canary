n.d(t, { G: () => ec });
var i = n(477900),
    l = n(582128),
    s = n(612324),
    r = n(17928),
    a = n(778712),
    o = n(775602),
    d = n(793574),
    c = n(688810),
    u = n(480335),
    m = n(372320),
    h = n(744808),
    g = n(713517),
    p = n(885386),
    A = n(287809),
    x = n(562153),
    f = n(183555),
    I = n(999291),
    E = n(732188),
    v = n(391210),
    C = n(402860),
    _ = n(718019),
    j = n(365607),
    N = n(559506),
    y = n(791556),
    T = n(312381),
    S = n(501193),
    b = n(946356),
    k = n(465829),
    R = n(394816),
    L = n(317097),
    M = n(661531),
    P = n(602853),
    D = n(654107),
    O = n(450373),
    U = n(531685),
    G = n(486020),
    w = n(837529),
    B = n(686189),
    V = n(714719),
    H = n(859161);
function F(e) {
    let { user: t, displayProfile: n, guildId: s, bannerHeight: o, avatarSize: d, avatarInsetStart: c } = e,
        [u, m] = l.useState(!1),
        h = (0, r.bG)([U.A], () => U.A.isFocused()),
        g = p.kt.getSetting(),
        A = (0, w.Nx)(),
        { bannerSrc: x, status: f } = (0, B.A)({ displayProfile: n ?? null, size: 480, canAnimate: g ? h : u }),
        I = A ? null : (x ?? null),
        E = (0, P.r)(M.A.unsafe_rawColors.PRIMARY_800).hex(),
        v = null != n ? n.guildId : s,
        C = t.getAvatarURL(v ?? void 0, (0, a.FT)(d)),
        _ = (0, L.LX)((0, D.Ay)(C, E, !1)),
        j = (0, O.A)(n?.primaryColor ?? _).hex,
        { size: N, stroke: y } = (0, a.Kj)(d),
        T = (0, H.A)(d);
    return (0, i.jsx)(V.A, {
        bannerSrc: I,
        backgroundColor: f === B.D.COMPLETE || A ? j : M.A.unsafe_rawColors.PRIMARY_800.css,
        showGifTag: !g && (0, G.o4)(I),
        height: o,
        cutout: { align: "start", insetStart: c + N / 2 - T, insetBottom: y / 2, radius: T },
        onInteractionStart: () => m(!0),
        onInteractionEnd: () => m(!1),
    });
}
var z = n(280450),
    Y = n(984545),
    K = n(35241),
    W = n(587168),
    J = n(193738),
    X = n(211031),
    q = n(996988);
function Z(e) {
    let { user: t, guildId: n } = e;
    return t.isNonUserBot()
        ? (0, i.jsx)(K.A, { user: t })
        : t.bot
          ? (0, i.jsx)(Y.A, { user: t, guildId: n })
          : (0, i.jsx)(X.yo, { user: t, guildId: n });
}
function $(e) {
    let { user: t, guildId: n } = e;
    return (0, r.bG)([z.default], () => z.default.getId() === t.id)
        ? null
        : (0, i.jsxs)(W.A, {
              children: [
                  !t.isNonUserBot() && (0, i.jsx)(J.A, { user: t, themeType: q.d.EMBED }),
                  (0, i.jsx)(Z, { user: t, guildId: n ?? void 0 }),
              ],
          });
}
var Q = n(213994),
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
let es = a._3.SIZE_96,
    er = {
        "--custom-user-profile-banner-height": "120px",
        "--custom-user-profile-avatar-size": `${(0, a.Kj)(es).size}px`,
        "--custom-user-profile-avatar-stroke": `${(0, a.Kj)(es).stroke}px`,
        "--custom-user-profile-content-inset": "16px",
        "--custom-user-profile-private-banner-height": "0px",
    },
    ea = { ...er, "--custom-user-profile-private-banner-height": "32px" };
function eo(e) {
    let { user: t, guildId: n, channelId: l } = e;
    return !(0, E.A)(t) || t.isNonUserBot()
        ? null
        : (0, i.jsx)(y.A, {
              user: t,
              className: el.I0,
              onOpenProfile: (e) =>
                  (0, C.openUserProfileModal)({
                      userId: t.id,
                      guildId: n,
                      channelId: l,
                      tabSection: e,
                      hideRestrictedProfile: !0,
                  }),
          });
}
function ed(e) {
    let { user: t, guildId: n, channelId: a, messageId: A, headingRef: E } = e,
        y = (0, I.Ay)(t.id, n),
        L = null != y ? y.guildId : n,
        M = x.Ay.useName(L, a, t),
        { analyticsLocations: P } = (0, c.Ay)(d.A.USER_PROFILE_EMBED),
        D = (0, f.pb)({ layout: "EMBED", userId: t.id, guildId: n, channelId: a, messageId: A }),
        O = (0, m.A)(y?.profileFrame?.skuId),
        U = y?.private === !0,
        G = (0, l.useRef)(null),
        [w, B] = (0, v.A)(),
        V = (0, s.A)(G, B),
        { isHovering: H } = (0, g.A)(G),
        z = p.kt.useSetting(),
        Y = (0, r.bG)([o.Ay], () => o.Ay.useReducedMotion),
        K = y?.profileEffect?.skuId,
        W = !z && !Y;
    function J() {
        (0, C.openUserProfileModal)({
            userId: t.id,
            guildId: n,
            channelId: a,
            sourceAnalyticsLocations: P,
            hideRestrictedProfile: !0,
        });
    }
    return (0, i.jsx)(c.f5, {
        value: P,
        children: (0, i.jsx)(f.of, {
            value: D,
            fetchStartedAt: y?.fetchStartedAt,
            fetchEndedAt: y?.fetchEndedAt,
            isLoaded: y?.isLoaded === !0 && w,
            children: (0, i.jsxs)(Q.A, {
                user: t,
                displayProfile: y,
                size: "sm",
                style: U ? ea : er,
                containerRef: V,
                headingRef: E,
                headingText: et.intl.formatToPlainString(et.t["8yRya1"], { name: M }),
                profileEffect:
                    null != K ? (0, i.jsx)(u.A, { skuId: K, autoPlay: z, isHovering: H, useOpacityOnHover: !W }) : null,
                profileFrame: null != O ? (0, i.jsx)(h.A, { frame: O, fadeIn: !1 }) : null,
                children: [
                    U && (0, i.jsx)(T.A, { className: el.i9 }),
                    (0, i.jsx)(F, {
                        user: t,
                        displayProfile: y,
                        guildId: n,
                        bannerHeight: 120,
                        avatarSize: es,
                        avatarInsetStart: 16,
                    }),
                    (0, i.jsx)($, { user: t, guildId: n }),
                    (0, i.jsx)(_.A, {
                        user: t,
                        displayProfile: y,
                        guildId: n,
                        channelId: a,
                        avatarSize: es,
                        className: el.H,
                        onOpenProfile: J,
                    }),
                    (0, i.jsx)(R.A, {
                        user: t,
                        guildId: L ?? void 0,
                        channelId: a ?? void 0,
                        themeType: q.d.EMBED,
                        className: el.WO,
                        referenceClassName: el.RQ,
                        disableToolbar: !0,
                    }),
                    (0, i.jsx)(N.A, { userId: t.id, className: el.Fd }),
                    (0, i.jsx)(k.Ay, {
                        user: t,
                        guildId: L ?? void 0,
                        contextGuildId: n ?? void 0,
                        displayName: M,
                        onClickName: J,
                        pronouns: y?.pronouns,
                        className: el.eF,
                        trailing: (0, i.jsx)(j.A, { displayProfile: y, themeType: q.d.EMBED }),
                    }),
                    (0, i.jsx)(eo, { user: t, guildId: n, channelId: a }),
                    U && (0, i.jsx)(b.A.Overlay, { className: el.In, children: (0, i.jsx)(S.A, { username: M }) }),
                    (0, i.jsx)(ei, { onOpenProfile: J }),
                ],
            }),
        }),
    });
}
function ec(e) {
    let { userId: t, guildId: n, channelId: l, messageId: s, headingRef: a } = e,
        o = (0, r.bG)([A.default], () => A.default.getUser(t));
    return null == o ? null : (0, i.jsx)(ed, { user: o, guildId: n, channelId: l, messageId: s, headingRef: a });
}

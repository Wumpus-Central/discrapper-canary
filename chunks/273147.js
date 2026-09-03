n.d(t, { G: () => q });
var i = n(477900),
    l = n(17928),
    s = n(97808),
    a = n(778712),
    r = n(287809),
    o = n(562153),
    c = n(19575),
    d = n(999291),
    u = n(732188),
    m = n(402860),
    h = n(718019),
    g = n(461116),
    A = n(791556),
    p = n(465829),
    x = n(582128),
    f = n(317097),
    E = n(661531),
    I = n(602853),
    C = n(654107),
    _ = n(450373),
    v = n(885386),
    N = n(531685),
    j = n(486020),
    T = n(837529),
    S = n(686189),
    y = n(714719),
    b = n(859161);
function R(e) {
    let { user: t, displayProfile: n, guildId: s, bannerHeight: r, avatarSize: o, avatarInsetStart: c } = e,
        [d, u] = x.useState(!1),
        m = (0, l.bG)([N.A], () => N.A.isFocused()),
        h = v.kt.getSetting(),
        g = (0, T.Nx)(),
        { bannerSrc: A, status: p } = (0, S.A)({ displayProfile: n ?? null, size: 480, canAnimate: h ? m : d }),
        R = g ? null : (A ?? null),
        M = (0, I.r)(E.A.unsafe_rawColors.PRIMARY_800).hex(),
        L = null != n ? n.guildId : s,
        k = t.getAvatarURL(L ?? void 0, (0, a.FT)(o)),
        O = (0, f.LX)((0, C.Ay)(k, M, !1)),
        P = (0, _.A)(n?.primaryColor ?? O).hex,
        D = (0, b.A)(o),
        U = c + (0, a.Kj)(o).size / 2;
    return (0, i.jsx)(y.A, {
        bannerSrc: R,
        backgroundColor: p === S.D.COMPLETE || g ? P : E.A.unsafe_rawColors.PRIMARY_800.css,
        showGifTag: !h && (0, j.o4)(R),
        height: r,
        cutout: { align: "start", insetStart: U - D, insetBottom: 0, radius: D },
        onInteractionStart: () => u(!0),
        onInteractionEnd: () => u(!1),
    });
}
var M = n(280450),
    L = n(984545),
    k = n(35241),
    O = n(587168),
    P = n(193738),
    D = n(133385),
    U = n(996988);
function G(e) {
    let { user: t, guildId: n } = e;
    return t.isNonUserBot()
        ? (0, i.jsx)(k.A, { user: t })
        : t.bot
          ? (0, i.jsx)(L.A, { user: t, guildId: n })
          : (0, i.jsx)(D.yo, { user: t, guildId: n });
}
function w(e) {
    let { user: t, guildId: n } = e;
    return (0, l.bG)([M.default], () => M.default.getId() === t.id)
        ? null
        : (0, i.jsxs)(O.A, {
              children: [
                  !t.isNonUserBot() && (0, i.jsx)(P.A, { user: t, themeType: U.d.EMBED }),
                  (0, i.jsx)(G, { user: t, guildId: n ?? void 0 }),
              ],
          });
}
var H = n(213994),
    V = n(821609),
    F = n(375708),
    B = n(820555);
function z(e) {
    let { userId: t, guildId: n, channelId: l } = e;
    return (0, i.jsx)("div", {
        className: B.k,
        children: (0, i.jsx)(V.$, {
            variant: "primary",
            size: "md",
            fullWidth: !0,
            text: F.intl.string(F.t.iXAna6),
            onClick: function () {
                (0, m.openUserProfileModal)({ userId: t, guildId: n, channelId: l, hideRestrictedProfile: !0 });
            },
        }),
    });
}
var J = n(332757);
let K = c.Ay.getEnableHardwareAcceleration() ? s.Js : s.eu,
    Y = a._3.SIZE_96,
    W = {
        "--custom-user-profile-banner-height": "120px",
        "--custom-user-profile-avatar-size": `${((0, a.Kj))(Y).size}px`,
        "--custom-user-profile-content-inset": "16px",
    };
function X(e) {
    let { user: t, displayProfile: n, guildId: l, channelId: s } = e,
        { avatarProps: a, eventHandlers: r } = (0, h.V)({
            user: t,
            displayProfile: n,
            guildId: l,
            channelId: s,
            avatarSize: Y,
        });
    return (0, i.jsx)("div", { className: J.H, children: (0, i.jsx)(K, { ...a, ...r }) });
}
function Z(e) {
    let { user: t, guildId: n, channelId: l } = e;
    return (0, u.A)(t)
        ? (0, i.jsx)(A.A, {
              user: t,
              className: J.I0,
              onOpenProfile: (e) =>
                  (0, m.openUserProfileModal)({
                      userId: t.id,
                      guildId: n,
                      channelId: l,
                      tabSection: e,
                      hideRestrictedProfile: !0,
                  }),
          })
        : null;
}
function q(e) {
    let { userId: t, guildId: n, channelId: s, headingRef: a } = e,
        c = (0, l.bG)([r.default], () => r.default.getUser(t)),
        u = (0, d.Ay)(t, n),
        m = null != u ? u.guildId : n,
        h = o.Ay.useName(m, s, c);
    return null == c
        ? null
        : (0, i.jsxs)(H.A, {
              user: c,
              displayProfile: u,
              size: "sm",
              style: W,
              headingRef: a,
              headingText: F.intl.formatToPlainString(F.t["8yRya1"], { name: h }),
              children: [
                  (0, i.jsx)(R, {
                      user: c,
                      displayProfile: u,
                      guildId: n,
                      bannerHeight: 120,
                      avatarSize: Y,
                      avatarInsetStart: 16,
                  }),
                  (0, i.jsx)(w, { user: c, guildId: n }),
                  (0, i.jsx)(X, { user: c, displayProfile: u, guildId: n, channelId: s }),
                  (0, i.jsx)(p.Ay, {
                      user: c,
                      guildId: m ?? void 0,
                      contextGuildId: n ?? void 0,
                      displayName: h,
                      pronouns: u?.pronouns,
                      className: J.eF,
                      trailing: (0, i.jsx)(g.A, { displayProfile: u, themeType: U.d.EMBED }),
                  }),
                  (0, i.jsx)(Z, { user: c, guildId: n, channelId: s }),
                  (0, i.jsx)(z, { userId: t, guildId: n, channelId: s }),
              ],
          });
}

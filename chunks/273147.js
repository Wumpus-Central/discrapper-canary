n.d(t, { G: () => ee });
var i = n(477900),
    l = n(17928),
    s = n(97808),
    a = n(778712),
    r = n(372320),
    o = n(744808),
    c = n(287809),
    d = n(562153),
    u = n(19575),
    m = n(999291),
    h = n(732188),
    g = n(402860),
    p = n(718019),
    A = n(365607),
    x = n(791556),
    f = n(465829),
    E = n(983495),
    I = n(582128),
    C = n(317097),
    _ = n(661531),
    v = n(602853),
    N = n(654107),
    j = n(450373),
    T = n(885386),
    S = n(531685),
    y = n(486020),
    b = n(837529),
    R = n(686189),
    M = n(714719),
    k = n(859161);
function L(e) {
    let { user: t, displayProfile: n, guildId: s, bannerHeight: r, avatarSize: o, avatarInsetStart: c } = e,
        [d, u] = I.useState(!1),
        m = (0, l.bG)([S.A], () => S.A.isFocused()),
        h = T.kt.getSetting(),
        g = (0, b.Nx)(),
        { bannerSrc: p, status: A } = (0, R.A)({ displayProfile: n ?? null, size: 480, canAnimate: h ? m : d }),
        x = g ? null : (p ?? null),
        f = (0, v.r)(_.A.unsafe_rawColors.PRIMARY_800).hex(),
        E = null != n ? n.guildId : s,
        L = t.getAvatarURL(E ?? void 0, (0, a.FT)(o)),
        O = (0, C.LX)((0, N.Ay)(L, f, !1)),
        P = (0, j.A)(n?.primaryColor ?? O).hex,
        { size: D, stroke: U } = (0, a.Kj)(o),
        G = (0, k.A)(o);
    return (0, i.jsx)(M.A, {
        bannerSrc: x,
        backgroundColor: A === R.D.COMPLETE || g ? P : _.A.unsafe_rawColors.PRIMARY_800.css,
        showGifTag: !h && (0, y.o4)(x),
        height: r,
        cutout: { align: "start", insetStart: c + D / 2 - G, insetBottom: U / 2, radius: G },
        onInteractionStart: () => u(!0),
        onInteractionEnd: () => u(!1),
    });
}
var O = n(280450),
    P = n(984545),
    D = n(35241),
    U = n(587168),
    G = n(193738),
    w = n(133385),
    H = n(996988);
function F(e) {
    let { user: t, guildId: n } = e;
    return t.isNonUserBot()
        ? (0, i.jsx)(D.A, { user: t })
        : t.bot
          ? (0, i.jsx)(P.A, { user: t, guildId: n })
          : (0, i.jsx)(w.yo, { user: t, guildId: n });
}
function B(e) {
    let { user: t, guildId: n } = e;
    return (0, l.bG)([O.default], () => O.default.getId() === t.id)
        ? null
        : (0, i.jsxs)(U.A, {
              children: [
                  !t.isNonUserBot() && (0, i.jsx)(G.A, { user: t, themeType: H.d.EMBED }),
                  (0, i.jsx)(F, { user: t, guildId: n ?? void 0 }),
              ],
          });
}
var V = n(213994),
    z = n(821609),
    J = n(375708),
    K = n(820555);
function Y(e) {
    let { userId: t, guildId: n, channelId: l } = e;
    return (0, i.jsx)("div", {
        className: K.k,
        children: (0, i.jsx)(z.$, {
            variant: "primary",
            size: "md",
            fullWidth: !0,
            text: J.intl.string(J.t.iXAna6),
            onClick: function () {
                (0, g.openUserProfileModal)({ userId: t, guildId: n, channelId: l, hideRestrictedProfile: !0 });
            },
        }),
    });
}
var W = n(332757);
let X = u.Ay.getEnableHardwareAcceleration() ? s.Js : s.eu,
    Z = a._3.SIZE_96,
    q = {
        "--custom-user-profile-banner-height": "120px",
        "--custom-user-profile-avatar-size": `${(0, a.Kj)(Z).size}px`,
        "--custom-user-profile-avatar-stroke": `${(0, a.Kj)(Z).stroke}px`,
        "--custom-user-profile-content-inset": "16px",
    };
function Q(e) {
    let { user: t, displayProfile: n, guildId: l, channelId: s } = e,
        { avatarProps: a, eventHandlers: r } = (0, p.V)({
            user: t,
            displayProfile: n,
            guildId: l,
            channelId: s,
            avatarSize: Z,
        });
    return (0, i.jsx)("div", { className: W.H, children: (0, i.jsx)(X, { ...a, ...r }) });
}
function $(e) {
    let { user: t, guildId: n, channelId: l } = e;
    return (0, h.A)(t)
        ? (0, i.jsx)(x.A, {
              user: t,
              className: W.I0,
              onOpenProfile: (e) =>
                  (0, g.openUserProfileModal)({
                      userId: t.id,
                      guildId: n,
                      channelId: l,
                      tabSection: e,
                      hideRestrictedProfile: !0,
                  }),
          })
        : null;
}
function ee(e) {
    let { userId: t, guildId: n, channelId: s, headingRef: a } = e,
        u = (0, l.bG)([c.default], () => c.default.getUser(t)),
        h = (0, m.Ay)(t, n),
        g = null != h ? h.guildId : n,
        p = d.Ay.useName(g, s, u),
        x = (0, r.A)(h?.profileFrame?.skuId);
    return null == u
        ? null
        : (0, i.jsxs)(V.A, {
              user: u,
              displayProfile: h,
              size: "sm",
              style: q,
              headingRef: a,
              headingText: J.intl.formatToPlainString(J.t["8yRya1"], { name: p }),
              profileFrame: null != x ? (0, i.jsx)(o.A, { frame: x, fadeIn: !1 }) : null,
              children: [
                  (0, i.jsx)(L, {
                      user: u,
                      displayProfile: h,
                      guildId: n,
                      bannerHeight: 120,
                      avatarSize: Z,
                      avatarInsetStart: 16,
                  }),
                  (0, i.jsx)(B, { user: u, guildId: n }),
                  (0, i.jsx)(Q, { user: u, displayProfile: h, guildId: n, channelId: s }),
                  (0, i.jsx)(E.A, {
                      user: u,
                      guildId: g ?? void 0,
                      channelId: s ?? void 0,
                      themeType: H.d.EMBED,
                      className: W.WO,
                      referenceClassName: W.RQ,
                      disableToolbar: !0,
                  }),
                  (0, i.jsx)(f.Ay, {
                      user: u,
                      guildId: g ?? void 0,
                      contextGuildId: n ?? void 0,
                      displayName: p,
                      pronouns: h?.pronouns,
                      className: W.eF,
                      trailing: (0, i.jsx)(A.A, { displayProfile: h, themeType: H.d.EMBED }),
                  }),
                  (0, i.jsx)($, { user: u, guildId: n, channelId: s }),
                  (0, i.jsx)(Y, { userId: t, guildId: n, channelId: s }),
              ],
          });
}

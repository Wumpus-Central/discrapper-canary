n.d(t, { G: () => Q });
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
    g = n(365607),
    p = n(791556),
    A = n(465829),
    x = n(983495),
    f = n(582128),
    E = n(317097),
    I = n(661531),
    C = n(602853),
    _ = n(654107),
    v = n(450373),
    N = n(885386),
    j = n(531685),
    T = n(486020),
    S = n(837529),
    y = n(686189),
    b = n(714719),
    R = n(859161);
function M(e) {
    let { user: t, displayProfile: n, guildId: s, bannerHeight: r, avatarSize: o, avatarInsetStart: c } = e,
        [d, u] = f.useState(!1),
        m = (0, l.bG)([j.A], () => j.A.isFocused()),
        h = N.kt.getSetting(),
        g = (0, S.Nx)(),
        { bannerSrc: p, status: A } = (0, y.A)({ displayProfile: n ?? null, size: 480, canAnimate: h ? m : d }),
        x = g ? null : (p ?? null),
        M = (0, C.r)(I.A.unsafe_rawColors.PRIMARY_800).hex(),
        k = null != n ? n.guildId : s,
        L = t.getAvatarURL(k ?? void 0, (0, a.FT)(o)),
        O = (0, E.LX)((0, _.Ay)(L, M, !1)),
        P = (0, v.A)(n?.primaryColor ?? O).hex,
        { size: D, stroke: U } = (0, a.Kj)(o),
        G = (0, R.A)(o);
    return (0, i.jsx)(b.A, {
        bannerSrc: x,
        backgroundColor: A === y.D.COMPLETE || g ? P : I.A.unsafe_rawColors.PRIMARY_800.css,
        showGifTag: !h && (0, T.o4)(x),
        height: r,
        cutout: { align: "start", insetStart: c + D / 2 - G, insetBottom: U / 2, radius: G },
        onInteractionStart: () => u(!0),
        onInteractionEnd: () => u(!1),
    });
}
var k = n(280450),
    L = n(984545),
    O = n(35241),
    P = n(587168),
    D = n(193738),
    U = n(133385),
    G = n(996988);
function w(e) {
    let { user: t, guildId: n } = e;
    return t.isNonUserBot()
        ? (0, i.jsx)(O.A, { user: t })
        : t.bot
          ? (0, i.jsx)(L.A, { user: t, guildId: n })
          : (0, i.jsx)(U.yo, { user: t, guildId: n });
}
function H(e) {
    let { user: t, guildId: n } = e;
    return (0, l.bG)([k.default], () => k.default.getId() === t.id)
        ? null
        : (0, i.jsxs)(P.A, {
              children: [
                  !t.isNonUserBot() && (0, i.jsx)(D.A, { user: t, themeType: G.d.EMBED }),
                  (0, i.jsx)(w, { user: t, guildId: n ?? void 0 }),
              ],
          });
}
var F = n(213994),
    B = n(821609),
    V = n(375708),
    z = n(820555);
function J(e) {
    let { userId: t, guildId: n, channelId: l } = e;
    return (0, i.jsx)("div", {
        className: z.k,
        children: (0, i.jsx)(B.$, {
            variant: "primary",
            size: "md",
            fullWidth: !0,
            text: V.intl.string(V.t.iXAna6),
            onClick: function () {
                (0, m.openUserProfileModal)({ userId: t, guildId: n, channelId: l, hideRestrictedProfile: !0 });
            },
        }),
    });
}
var K = n(332757);
let Y = c.Ay.getEnableHardwareAcceleration() ? s.Js : s.eu,
    W = a._3.SIZE_96,
    X = {
        "--custom-user-profile-banner-height": "120px",
        "--custom-user-profile-avatar-size": `${(0, a.Kj)(W).size}px`,
        "--custom-user-profile-avatar-stroke": `${(0, a.Kj)(W).stroke}px`,
        "--custom-user-profile-content-inset": "16px",
    };
function Z(e) {
    let { user: t, displayProfile: n, guildId: l, channelId: s } = e,
        { avatarProps: a, eventHandlers: r } = (0, h.V)({
            user: t,
            displayProfile: n,
            guildId: l,
            channelId: s,
            avatarSize: W,
        });
    return (0, i.jsx)("div", { className: K.H, children: (0, i.jsx)(Y, { ...a, ...r }) });
}
function q(e) {
    let { user: t, guildId: n, channelId: l } = e;
    return (0, u.A)(t)
        ? (0, i.jsx)(p.A, {
              user: t,
              className: K.I0,
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
function Q(e) {
    let { userId: t, guildId: n, channelId: s, headingRef: a } = e,
        c = (0, l.bG)([r.default], () => r.default.getUser(t)),
        u = (0, d.Ay)(t, n),
        m = null != u ? u.guildId : n,
        h = o.Ay.useName(m, s, c);
    return null == c
        ? null
        : (0, i.jsxs)(F.A, {
              user: c,
              displayProfile: u,
              size: "sm",
              style: X,
              headingRef: a,
              headingText: V.intl.formatToPlainString(V.t["8yRya1"], { name: h }),
              children: [
                  (0, i.jsx)(M, {
                      user: c,
                      displayProfile: u,
                      guildId: n,
                      bannerHeight: 120,
                      avatarSize: W,
                      avatarInsetStart: 16,
                  }),
                  (0, i.jsx)(H, { user: c, guildId: n }),
                  (0, i.jsx)(Z, { user: c, displayProfile: u, guildId: n, channelId: s }),
                  (0, i.jsx)(x.A, {
                      user: c,
                      guildId: m ?? void 0,
                      channelId: s ?? void 0,
                      themeType: G.d.EMBED,
                      className: K.WO,
                      referenceClassName: K.RQ,
                      disableToolbar: !0,
                  }),
                  (0, i.jsx)(A.Ay, {
                      user: c,
                      guildId: m ?? void 0,
                      contextGuildId: n ?? void 0,
                      displayName: h,
                      pronouns: u?.pronouns,
                      className: K.eF,
                      trailing: (0, i.jsx)(g.A, { displayProfile: u, themeType: G.d.EMBED }),
                  }),
                  (0, i.jsx)(q, { user: c, guildId: n, channelId: s }),
                  (0, i.jsx)(J, { userId: t, guildId: n, channelId: s }),
              ],
          });
}

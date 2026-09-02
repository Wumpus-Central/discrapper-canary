n.d(t, { G: () => W });
var i = n(477900),
    l = n(17928),
    s = n(97808),
    a = n(778712),
    r = n(287809),
    o = n(562153),
    c = n(19575),
    d = n(999291),
    u = n(718019),
    m = n(461116),
    h = n(465829),
    g = n(582128),
    A = n(317097),
    p = n(661531),
    x = n(602853),
    f = n(654107),
    E = n(450373),
    I = n(885386),
    C = n(531685),
    _ = n(486020),
    v = n(837529),
    N = n(686189),
    j = n(714719),
    T = n(859161);
function S(e) {
    let { user: t, displayProfile: n, guildId: s, bannerHeight: r, avatarSize: o } = e,
        [c, d] = g.useState(!1),
        u = (0, l.bG)([C.A], () => C.A.isFocused()),
        m = I.kt.getSetting(),
        h = (0, v.Nx)(),
        { bannerSrc: S, status: y } = (0, N.A)({ displayProfile: n ?? null, size: 480, canAnimate: m ? u : c }),
        b = h ? null : (S ?? null),
        R = (0, x.r)(p.A.unsafe_rawColors.PRIMARY_800).hex(),
        M = null != n ? n.guildId : s,
        L = t.getAvatarURL(M ?? void 0, (0, a.FT)(o)),
        k = (0, A.LX)((0, f.Ay)(L, R, !1)),
        O = (0, E.A)(n?.primaryColor ?? k).hex,
        P = { align: "center", insetBottom: 0, radius: (0, T.A)(o) };
    return (0, i.jsx)(j.A, {
        bannerSrc: b,
        backgroundColor: y === N.D.COMPLETE || h ? O : p.A.unsafe_rawColors.PRIMARY_800.css,
        showGifTag: !m && (0, _.o4)(b),
        height: r,
        cutout: P,
        onInteractionStart: () => d(!0),
        onInteractionEnd: () => d(!1),
    });
}
var y = n(280450),
    b = n(984545),
    R = n(35241),
    M = n(587168),
    L = n(193738),
    k = n(133385),
    O = n(996988);
function P(e) {
    let { user: t, guildId: n } = e;
    return t.isNonUserBot()
        ? (0, i.jsx)(R.A, { user: t })
        : t.bot
          ? (0, i.jsx)(b.A, { user: t, guildId: n })
          : (0, i.jsx)(k.yo, { user: t, guildId: n });
}
function D(e) {
    let { user: t, guildId: n } = e;
    return (0, l.bG)([y.default], () => y.default.getId() === t.id)
        ? null
        : (0, i.jsxs)(M.A, {
              children: [
                  !t.isNonUserBot() && (0, i.jsx)(L.A, { user: t, themeType: O.d.EMBED }),
                  (0, i.jsx)(P, { user: t, guildId: n ?? void 0 }),
              ],
          });
}
var U = n(213994),
    G = n(821609),
    w = n(402860),
    H = n(375708),
    V = n(820555);
function B(e) {
    let { userId: t, guildId: n, channelId: l } = e;
    return (0, i.jsx)("div", {
        className: V.k,
        children: (0, i.jsx)(G.$, {
            variant: "primary",
            size: "md",
            fullWidth: !0,
            text: H.intl.string(H.t.iXAna6),
            onClick: function () {
                (0, w.openUserProfileModal)({ userId: t, guildId: n, channelId: l, hideRestrictedProfile: !0 });
            },
        }),
    });
}
var F = n(332757);
let z = c.Ay.getEnableHardwareAcceleration() ? s.Js : s.eu,
    J = a._3.SIZE_96,
    K = {
        "--custom-user-profile-banner-height": "120px",
        "--custom-user-profile-avatar-size": `${((0, a.Kj))(J).size}px`,
    };
function Y(e) {
    let { user: t, displayProfile: n, guildId: l, channelId: s } = e,
        { avatarProps: a, eventHandlers: r } = (0, u.V)({
            user: t,
            displayProfile: n,
            guildId: l,
            channelId: s,
            avatarSize: J,
        });
    return (0, i.jsx)("div", { className: F.H, children: (0, i.jsx)(z, { ...a, ...r }) });
}
function W(e) {
    let { userId: t, guildId: n, channelId: s, headingRef: a } = e,
        c = (0, l.bG)([r.default], () => r.default.getUser(t)),
        u = (0, d.Ay)(t, n),
        g = null != u ? u.guildId : n,
        A = o.Ay.useName(g, s, c);
    return null == c
        ? null
        : (0, i.jsxs)(U.A, {
              user: c,
              displayProfile: u,
              size: "sm",
              style: K,
              headingRef: a,
              headingText: H.intl.formatToPlainString(H.t["8yRya1"], { name: A }),
              children: [
                  (0, i.jsx)(S, { user: c, displayProfile: u, guildId: n, bannerHeight: 120, avatarSize: J }),
                  (0, i.jsx)(D, { user: c, guildId: n }),
                  (0, i.jsx)(Y, { user: c, displayProfile: u, guildId: n, channelId: s }),
                  (0, i.jsx)(h.Ay, {
                      user: c,
                      guildId: g ?? void 0,
                      contextGuildId: n ?? void 0,
                      displayName: A,
                      pronouns: u?.pronouns,
                      className: F.e,
                      trailing: (0, i.jsx)(m.A, { displayProfile: u, themeType: O.d.EMBED }),
                  }),
                  (0, i.jsx)(B, { userId: t, guildId: n, channelId: s }),
              ],
          });
}

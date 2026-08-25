n.d(t, { G: () => et });
var i = n(477900),
    l = n(17928),
    s = n(97808),
    a = n(778712),
    r = n(287809),
    o = n(562153),
    c = n(19575),
    d = n(999291),
    u = n(718019),
    m = n(681331),
    h = n(465829),
    g = n(582128),
    p = n(317097),
    A = n(661531),
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
        R = (0, x.r)(A.A.unsafe_rawColors.PRIMARY_800).hex(),
        L = null != n ? n.guildId : s,
        k = t.getAvatarURL(L ?? void 0, (0, a.FT)(o)),
        M = (0, p.LX)((0, f.Ay)(k, R, !1)),
        O = (0, E.A)(n?.primaryColor ?? M).hex,
        P = { align: "center", insetBottom: 0, radius: (0, T.A)(o) };
    return (0, i.jsx)(j.A, {
        bannerSrc: b,
        backgroundColor: y === N.D.COMPLETE || h ? O : A.A.unsafe_rawColors.PRIMARY_800.css,
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
    L = n(587168),
    k = n(193738),
    M = n(133385),
    O = n(996988);
function P(e) {
    let { user: t, guildId: n } = e;
    return t.isNonUserBot()
        ? (0, i.jsx)(R.A, { user: t })
        : t.bot
          ? (0, i.jsx)(b.A, { user: t, guildId: n })
          : (0, i.jsx)(M.yo, { user: t, guildId: n });
}
function D(e) {
    let { user: t, guildId: n } = e;
    return (0, l.bG)([y.default], () => y.default.getId() === t.id)
        ? null
        : (0, i.jsxs)(L.A, {
              children: [
                  !t.isNonUserBot() && (0, i.jsx)(k.A, { user: t, themeType: O.d.EMBED }),
                  (0, i.jsx)(P, { user: t, guildId: n ?? void 0 }),
              ],
          });
}
var U = n(503698),
    G = n.n(U),
    w = n(140735),
    H = n(707554),
    V = n(915089),
    B = n(946356),
    F = n(768590);
function z(e) {
    let { user: t, displayProfile: n, size: l, headingText: s, className: a, style: r, children: o } = e,
        c = (0, V.GV)();
    return (0, i.jsx)(B.A, {
        user: t,
        displayProfile: n,
        themeType: O.d.EMBED,
        className: F[l],
        style: r,
        children: (0, i.jsxs)("article", {
            "aria-labelledby": c,
            className: G()(F.article, a),
            children: [
                (0, i.jsx)(w.A, { children: (0, i.jsx)(H.H, { id: c, children: s }) }),
                (0, i.jsx)(H.F, { children: o }),
            ],
        }),
    });
}
var J = n(821609),
    Y = n(975732),
    K = n(375708),
    W = n(820555);
function X(e) {
    let { userId: t, guildId: n, channelId: l } = e;
    return (0, i.jsx)("div", {
        className: W.k,
        children: (0, i.jsx)(J.$, {
            variant: "primary",
            size: "md",
            fullWidth: !0,
            text: K.intl.string(K.t.iXAna6),
            onClick: function () {
                (0, Y.openUserProfileModal)({ userId: t, guildId: n, channelId: l, hideRestrictedProfile: !0 });
            },
        }),
    });
}
var Z = n(332757);
let q = c.Ay.getEnableHardwareAcceleration() ? s.Js : s.eu,
    Q = a._3.SIZE_96,
    $ = {
        "--custom-user-profile-banner-height": "120px",
        "--custom-user-profile-avatar-size": `${((0, a.Kj))(Q).size}px`,
    };
function ee(e) {
    let { user: t, displayProfile: n, guildId: l, channelId: s } = e,
        { avatarProps: a, eventHandlers: r } = (0, u.V)({
            user: t,
            displayProfile: n,
            guildId: l,
            channelId: s,
            avatarSize: Q,
        });
    return (0, i.jsx)("div", { className: Z.H, children: (0, i.jsx)(q, { ...a, ...r }) });
}
function et(e) {
    let { userId: t, guildId: n, channelId: s } = e,
        a = (0, l.bG)([r.default], () => r.default.getUser(t)),
        c = (0, d._c)(t, n),
        u = null != c ? c.guildId : n,
        g = o.Ay.useName(u, s, a);
    return null == a
        ? null
        : (0, i.jsxs)(z, {
              user: a,
              displayProfile: c,
              size: "sm",
              style: $,
              headingText: K.intl.formatToPlainString(K.t["8yRya1"], { name: g }),
              children: [
                  (0, i.jsx)(S, { user: a, displayProfile: c, guildId: n, bannerHeight: 120, avatarSize: Q }),
                  (0, i.jsx)(D, { user: a, guildId: n }),
                  (0, i.jsx)(ee, { user: a, displayProfile: c, guildId: n, channelId: s }),
                  (0, i.jsx)(h.Ay, {
                      user: a,
                      guildId: u ?? void 0,
                      contextGuildId: n ?? void 0,
                      displayName: g,
                      pronouns: c?.pronouns,
                      className: Z.eF,
                  }),
                  (0, i.jsx)("div", {
                      className: Z.jp,
                      children: (0, i.jsx)(m.A, { displayProfile: c, themeType: O.d.EMBED }),
                  }),
                  (0, i.jsx)(X, { userId: t, guildId: n, channelId: s }),
              ],
          });
}

n.d(t, { G: () => K });
var i = n(477900),
    l = n(17928),
    s = n(97808),
    a = n(778712),
    r = n(287809),
    o = n(562153),
    c = n(19575),
    d = n(999291),
    u = n(718019),
    m = n(398062),
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
        M = t.getAvatarURL(L ?? void 0, (0, a.FT)(o)),
        k = (0, p.LX)((0, f.Ay)(M, R, !1)),
        O = (0, E.A)(n?.primaryColor ?? k).hex,
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
var y = n(503698),
    b = n.n(y),
    R = n(140735),
    L = n(707554),
    M = n(915089),
    k = n(946356),
    O = n(996988),
    P = n(768590);
function D(e) {
    let { user: t, displayProfile: n, size: l, headingText: s, className: a, style: r, children: o } = e,
        c = (0, M.GV)();
    return (0, i.jsx)(k.A, {
        user: t,
        displayProfile: n,
        themeType: O.d.EMBED,
        className: P[l],
        style: r,
        children: (0, i.jsxs)("article", {
            "aria-labelledby": c,
            className: b()(P.article, a),
            children: [
                (0, i.jsx)(R.A, { children: (0, i.jsx)(L.H, { id: c, children: s }) }),
                (0, i.jsx)(L.F, { children: o }),
            ],
        }),
    });
}
var U = n(821609),
    G = n(975732),
    w = n(375708),
    H = n(820555);
function V(e) {
    let { userId: t, guildId: n, channelId: l } = e;
    return (0, i.jsx)("div", {
        className: H.k,
        children: (0, i.jsx)(U.$, {
            variant: "primary",
            size: "md",
            fullWidth: !0,
            text: w.intl.string(w.t.iXAna6),
            onClick: function () {
                (0, G.openUserProfileModal)({ userId: t, guildId: n, channelId: l, hideRestrictedProfile: !0 });
            },
        }),
    });
}
var B = n(332757);
let F = c.Ay.getEnableHardwareAcceleration() ? s.Js : s.eu,
    z = a._3.SIZE_96,
    J = {
        "--custom-user-profile-banner-height": "120px",
        "--custom-user-profile-avatar-size": `${((0, a.Kj))(z).size}px`,
    };
function Y(e) {
    let { user: t, displayProfile: n, guildId: l, channelId: s } = e,
        { avatarProps: a, eventHandlers: r } = (0, u.V)({
            user: t,
            displayProfile: n,
            guildId: l,
            channelId: s,
            avatarSize: z,
        });
    return (0, i.jsx)("div", { className: B.H, children: (0, i.jsx)(F, { ...a, ...r }) });
}
function K(e) {
    let { userId: t, guildId: n, channelId: s } = e,
        a = (0, l.bG)([r.default], () => r.default.getUser(t)),
        c = (0, d._c)(t, n),
        u = null != c ? c.guildId : n,
        g = o.Ay.useName(u, s, a);
    return null == a
        ? null
        : (0, i.jsxs)(D, {
              user: a,
              displayProfile: c,
              size: "sm",
              style: J,
              headingText: w.intl.formatToPlainString(w.t["8yRya1"], { name: g }),
              children: [
                  (0, i.jsx)(S, { user: a, displayProfile: c, guildId: n, bannerHeight: 120, avatarSize: z }),
                  (0, i.jsx)(Y, { user: a, displayProfile: c, guildId: n, channelId: s }),
                  (0, i.jsx)(h.Ay, {
                      user: a,
                      guildId: u ?? void 0,
                      contextGuildId: n ?? void 0,
                      displayName: g,
                      pronouns: c?.pronouns,
                      className: B.eF,
                  }),
                  (0, i.jsx)("div", {
                      className: B.jp,
                      children: (0, i.jsx)(m.A, { displayProfile: c, themeType: O.d.EMBED }),
                  }),
                  (0, i.jsx)(V, { userId: t, guildId: n, channelId: s }),
              ],
          });
}

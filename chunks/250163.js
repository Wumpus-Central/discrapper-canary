n.d(t, { G: () => Y });
var i = n(477900),
    l = n(17928),
    s = n(97808),
    a = n(778712),
    r = n(287809),
    o = n(562153),
    c = n(19575),
    d = n(999291),
    u = n(718019),
    m = n(465829),
    h = n(582128),
    g = n(317097),
    p = n(661531),
    A = n(602853),
    x = n(654107),
    f = n(450373),
    E = n(885386),
    _ = n(531685),
    I = n(486020),
    C = n(837529),
    v = n(686189),
    N = n(714719),
    j = n(859161);
function T(e) {
    let { user: t, displayProfile: n, guildId: s, bannerHeight: r, avatarSize: o } = e,
        [c, d] = h.useState(!1),
        u = (0, l.bG)([_.A], () => _.A.isFocused()),
        m = E.kt.getSetting(),
        T = (0, C.Nx)(),
        { bannerSrc: S, status: y } = (0, v.A)({ displayProfile: n ?? null, size: 480, canAnimate: m ? u : c }),
        b = T ? null : (S ?? null),
        R = (0, A.r)(p.A.unsafe_rawColors.PRIMARY_800).hex(),
        L = null != n ? n.guildId : s,
        M = t.getAvatarURL(L ?? void 0, (0, a.FT)(o)),
        k = (0, g.LX)((0, x.Ay)(M, R, !1)),
        O = (0, f.A)(n?.primaryColor ?? k).hex,
        P = { align: "center", insetBottom: 0, radius: (0, j.A)(o) };
    return (0, i.jsx)(N.A, {
        bannerSrc: b,
        backgroundColor: y === v.D.COMPLETE || T ? O : p.A.unsafe_rawColors.PRIMARY_800.css,
        showGifTag: !m && (0, I.o4)(b),
        height: r,
        cutout: P,
        onInteractionStart: () => d(!0),
        onInteractionEnd: () => d(!1),
    });
}
var S = n(503698),
    y = n.n(S),
    b = n(140735),
    R = n(707554),
    L = n(915089),
    M = n(946356),
    k = n(996988),
    O = n(990585);
function P(e) {
    let { user: t, displayProfile: n, size: l, headingText: s, className: a, style: r, children: o } = e,
        c = (0, L.GV)();
    return (0, i.jsx)(M.A, {
        user: t,
        displayProfile: n,
        themeType: k.d.EMBED,
        className: O[l],
        style: r,
        children: (0, i.jsxs)("article", {
            "aria-labelledby": c,
            className: y()(O.article, a),
            children: [
                (0, i.jsx)(b.A, { children: (0, i.jsx)(R.H, { id: c, children: s }) }),
                (0, i.jsx)(R.F, { children: o }),
            ],
        }),
    });
}
var D = n(821609),
    U = n(975732),
    G = n(375708),
    w = n(899248);
function H(e) {
    let { userId: t, guildId: n, channelId: l } = e;
    return (0, i.jsx)("div", {
        className: w.k,
        children: (0, i.jsx)(D.$, {
            variant: "primary",
            size: "md",
            fullWidth: !0,
            text: G.intl.string(G.t.iXAna6),
            onClick: function () {
                (0, U.openUserProfileModal)({ userId: t, guildId: n, channelId: l, hideRestrictedProfile: !0 });
            },
        }),
    });
}
var V = n(21280);
let F = c.Ay.getEnableHardwareAcceleration() ? s.Js : s.eu,
    B = a._3.SIZE_96,
    z = {
        "--custom-user-profile-banner-height": "120px",
        "--custom-user-profile-avatar-size": `${((0, a.Kj))(B).size}px`,
    };
function J(e) {
    let { user: t, displayProfile: n, guildId: l, channelId: s } = e,
        { avatarProps: a, eventHandlers: r } = (0, u.V)({
            user: t,
            displayProfile: n,
            guildId: l,
            channelId: s,
            avatarSize: B,
        });
    return (0, i.jsx)("div", { className: V.H, children: (0, i.jsx)(F, { ...a, ...r }) });
}
function Y(e) {
    let { userId: t, guildId: n, channelId: s } = e,
        a = (0, l.bG)([r.default], () => r.default.getUser(t)),
        c = (0, d._c)(t, n),
        u = null != c ? c.guildId : n,
        h = o.Ay.useName(u, s, a);
    return null == a
        ? null
        : (0, i.jsxs)(P, {
              user: a,
              displayProfile: c,
              size: "sm",
              style: z,
              headingText: G.intl.formatToPlainString(G.t["8yRya1"], { name: h }),
              children: [
                  (0, i.jsx)(T, { user: a, displayProfile: c, guildId: n, bannerHeight: 120, avatarSize: B }),
                  (0, i.jsx)(J, { user: a, displayProfile: c, guildId: n, channelId: s }),
                  (0, i.jsx)(m.Ay, {
                      user: a,
                      guildId: u ?? void 0,
                      contextGuildId: n ?? void 0,
                      displayName: h,
                      pronouns: c?.pronouns,
                      className: V.e,
                  }),
                  (0, i.jsx)(H, { userId: t, guildId: n, channelId: s }),
              ],
          });
}

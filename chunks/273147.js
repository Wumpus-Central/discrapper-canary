n.d(t, { G: () => el });
var i = n(477900),
    l = n(582128),
    s = n(17928),
    a = n(97808),
    r = n(778712),
    o = n(775602),
    c = n(480335),
    d = n(372320),
    u = n(744808),
    m = n(713517),
    h = n(885386),
    g = n(287809),
    p = n(562153),
    A = n(19575),
    x = n(999291),
    f = n(732188),
    E = n(402860),
    I = n(718019),
    C = n(365607),
    _ = n(791556),
    v = n(465829),
    N = n(983495),
    j = n(317097),
    T = n(661531),
    S = n(602853),
    y = n(654107),
    b = n(450373),
    R = n(531685),
    M = n(486020),
    k = n(837529),
    L = n(686189),
    O = n(714719),
    P = n(859161);
function D(e) {
    let { user: t, displayProfile: n, guildId: a, bannerHeight: o, avatarSize: c, avatarInsetStart: d } = e,
        [u, m] = l.useState(!1),
        g = (0, s.bG)([R.A], () => R.A.isFocused()),
        p = h.kt.getSetting(),
        A = (0, k.Nx)(),
        { bannerSrc: x, status: f } = (0, L.A)({ displayProfile: n ?? null, size: 480, canAnimate: p ? g : u }),
        E = A ? null : (x ?? null),
        I = (0, S.r)(T.A.unsafe_rawColors.PRIMARY_800).hex(),
        C = null != n ? n.guildId : a,
        _ = t.getAvatarURL(C ?? void 0, (0, r.FT)(c)),
        v = (0, j.LX)((0, y.Ay)(_, I, !1)),
        N = (0, b.A)(n?.primaryColor ?? v).hex,
        { size: D, stroke: U } = (0, r.Kj)(c),
        G = (0, P.A)(c);
    return (0, i.jsx)(O.A, {
        bannerSrc: E,
        backgroundColor: f === L.D.COMPLETE || A ? N : T.A.unsafe_rawColors.PRIMARY_800.css,
        showGifTag: !p && (0, M.o4)(E),
        height: o,
        cutout: { align: "start", insetStart: d + D / 2 - G, insetBottom: U / 2, radius: G },
        onInteractionStart: () => m(!0),
        onInteractionEnd: () => m(!1),
    });
}
var U = n(280450),
    G = n(984545),
    w = n(35241),
    H = n(587168),
    F = n(193738),
    B = n(133385),
    V = n(996988);
function z(e) {
    let { user: t, guildId: n } = e;
    return t.isNonUserBot()
        ? (0, i.jsx)(w.A, { user: t })
        : t.bot
          ? (0, i.jsx)(G.A, { user: t, guildId: n })
          : (0, i.jsx)(B.yo, { user: t, guildId: n });
}
function J(e) {
    let { user: t, guildId: n } = e;
    return (0, s.bG)([U.default], () => U.default.getId() === t.id)
        ? null
        : (0, i.jsxs)(H.A, {
              children: [
                  !t.isNonUserBot() && (0, i.jsx)(F.A, { user: t, themeType: V.d.EMBED }),
                  (0, i.jsx)(z, { user: t, guildId: n ?? void 0 }),
              ],
          });
}
var K = n(213994),
    Y = n(821609),
    W = n(375708),
    X = n(820555);
function Z(e) {
    let { userId: t, guildId: n, channelId: l } = e;
    return (0, i.jsx)("div", {
        className: X.k,
        children: (0, i.jsx)(Y.$, {
            variant: "primary",
            size: "md",
            fullWidth: !0,
            text: W.intl.string(W.t.iXAna6),
            onClick: function () {
                (0, E.openUserProfileModal)({ userId: t, guildId: n, channelId: l, hideRestrictedProfile: !0 });
            },
        }),
    });
}
var q = n(332757);
let Q = A.Ay.getEnableHardwareAcceleration() ? a.Js : a.eu,
    $ = r._3.SIZE_96,
    ee = {
        "--custom-user-profile-banner-height": "120px",
        "--custom-user-profile-avatar-size": `${(0, r.Kj)($).size}px`,
        "--custom-user-profile-avatar-stroke": `${(0, r.Kj)($).stroke}px`,
        "--custom-user-profile-content-inset": "16px",
    };
function et(e) {
    let { user: t, displayProfile: n, guildId: l, channelId: s } = e,
        { avatarProps: a, eventHandlers: r } = (0, I.V)({
            user: t,
            displayProfile: n,
            guildId: l,
            channelId: s,
            avatarSize: $,
        });
    return (0, i.jsx)("div", { className: q.H, children: (0, i.jsx)(Q, { ...a, ...r }) });
}
function en(e) {
    let { user: t, guildId: n, channelId: l } = e;
    return (0, f.A)(t)
        ? (0, i.jsx)(_.A, {
              user: t,
              className: q.I0,
              onOpenProfile: (e) =>
                  (0, E.openUserProfileModal)({
                      userId: t.id,
                      guildId: n,
                      channelId: l,
                      tabSection: e,
                      hideRestrictedProfile: !0,
                  }),
          })
        : null;
}
function ei(e) {
    let { user: t, guildId: n, channelId: a, headingRef: r } = e,
        g = (0, x.Ay)(t.id, n),
        A = null != g ? g.guildId : n,
        f = p.Ay.useName(A, a, t),
        E = (0, d.A)(g?.profileFrame?.skuId),
        I = (0, l.useRef)(null),
        { isHovering: _ } = (0, m.A)(I),
        j = h.kt.useSetting(),
        T = (0, s.bG)([o.Ay], () => o.Ay.useReducedMotion),
        S = g?.profileEffect?.skuId,
        y = !j && !T;
    return (0, i.jsxs)(K.A, {
        user: t,
        displayProfile: g,
        size: "sm",
        style: ee,
        containerRef: I,
        headingRef: r,
        headingText: W.intl.formatToPlainString(W.t["8yRya1"], { name: f }),
        profileEffect:
            null != S ? (0, i.jsx)(c.A, { skuId: S, autoPlay: j, isHovering: _, useOpacityOnHover: !y }) : null,
        profileFrame: null != E ? (0, i.jsx)(u.A, { frame: E, fadeIn: !1 }) : null,
        children: [
            (0, i.jsx)(D, {
                user: t,
                displayProfile: g,
                guildId: n,
                bannerHeight: 120,
                avatarSize: $,
                avatarInsetStart: 16,
            }),
            (0, i.jsx)(J, { user: t, guildId: n }),
            (0, i.jsx)(et, { user: t, displayProfile: g, guildId: n, channelId: a }),
            (0, i.jsx)(N.A, {
                user: t,
                guildId: A ?? void 0,
                channelId: a ?? void 0,
                themeType: V.d.EMBED,
                className: q.WO,
                referenceClassName: q.RQ,
                disableToolbar: !0,
            }),
            (0, i.jsx)(v.Ay, {
                user: t,
                guildId: A ?? void 0,
                contextGuildId: n ?? void 0,
                displayName: f,
                pronouns: g?.pronouns,
                className: q.eF,
                trailing: (0, i.jsx)(C.A, { displayProfile: g, themeType: V.d.EMBED }),
            }),
            (0, i.jsx)(en, { user: t, guildId: n, channelId: a }),
            (0, i.jsx)(Z, { userId: t.id, guildId: n, channelId: a }),
        ],
    });
}
function el(e) {
    let { userId: t, guildId: n, channelId: l, headingRef: a } = e,
        r = (0, s.bG)([g.default], () => g.default.getUser(t));
    return null == r ? null : (0, i.jsx)(ei, { user: r, guildId: n, channelId: l, headingRef: a });
}

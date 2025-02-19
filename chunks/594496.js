n.d(t, { Z: () => P });
var r = n(200651);
n(192379);
var i = n(512722),
    s = n.n(i),
    a = n(442837),
    l = n(481060),
    o = n(295474),
    c = n(150039),
    d = n(126631),
    u = n(433411),
    m = n(532432),
    g = n(134795),
    p = n(513901),
    h = n(451392),
    f = n(906364),
    N = n(621853),
    x = n(271383),
    b = n(594174),
    _ = n(74538),
    E = n(51144),
    j = n(18438),
    C = n(778825),
    O = n(52597),
    v = n(430131),
    S = n(133484),
    T = n(388032),
    I = n(130872);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e) {
    var t, n, i, P;
    let { guild: R } = e,
        D = (0, a.e7)([b.default], () => {
            let e = b.default.getCurrentUser();
            return s()(null != e, 'GuildIdentitySettingsPage: user cannot be undefined'), e;
        }),
        {
            pendingAvatar: Z,
            pendingNickname: w,
            pendingBanner: k,
            pendingBio: W,
            pendingPronouns: L,
            pendingThemeColors: B,
            errors: M,
            guild: U
        } = (0, a.cj)([C.Z], () => {
            let { pendingAvatar: e, pendingNickname: t, pendingBio: n, pendingPronouns: r, pendingBanner: i, pendingThemeColors: s } = C.Z.getAllPending();
            return {
                pendingAvatar: e,
                pendingNickname: t,
                pendingBanner: i,
                pendingBio: n,
                pendingPronouns: r,
                pendingThemeColors: s,
                errors: C.Z.getErrors(),
                guild: C.Z.getGuild()
            };
        }),
        V = null != R ? R : U;
    s()(null != V, 'guild should not be null');
    let G = (0, o.gS)(V.id),
        F = (0, a.e7)([x.ZP], () => (null == V.id ? null : x.ZP.getMember(V.id, D.id))),
        H = (0, a.e7)([N.Z], () => N.Z.getGuildMemberProfile(D.id, V.id)),
        z = _.ZP.canUsePremiumProfileCustomization(D),
        Y = (0, c.gd)(Z, null == F ? void 0 : F.avatar),
        K = (0, c.f$)(k, null == H ? void 0 : H.banner),
        q = (0, O.p)(B, null == H ? void 0 : H.themeColors),
        X = null !== (t = null == H ? void 0 : H.bio) && void 0 !== t ? t : '',
        J = null !== (n = null == H ? void 0 : H.pronouns) && void 0 !== n ? n : '',
        Q = (e, t, n) => {
            n(null != e ? e : null != t ? null : void 0);
        };
    return (0, r.jsxs)('div', {
        className: I.sectionsContainer,
        children: [
            (0, r.jsx)(
                v.Z,
                {
                    errors: null !== (i = null == M ? void 0 : M.nick) && void 0 !== i ? i : null == G ? void 0 : G.nick,
                    username: E.ZP.getName(D),
                    pendingNick: w,
                    currentNick: null == F ? void 0 : F.nick,
                    guild: V
                },
                'nick'
            ),
            (0, r.jsx)(
                f.Z,
                {
                    sectionTitle: T.NW.string(T.t['+T3RIy']),
                    errors: null == M ? void 0 : M.pronouns,
                    onPronounsChange: (e) => {
                        (0, O.xs)(e, J);
                    },
                    pendingPronouns: L,
                    currentPronouns: J
                },
                'pronouns'
            ),
            (0, r.jsxs)(S.Z, {
                user: D,
                showOverlay: !z,
                children: [
                    (0, r.jsx)(
                        m.Z,
                        {
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    T.NW.string(T.t.lqaIxM),
                                    (0, r.jsx)(l.ua7, {
                                        text: T.NW.string(T.t['5AFxuL']),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                l.SrA,
                                                A(
                                                    y(
                                                        {
                                                            size: 'md',
                                                            color: 'currentColor'
                                                        },
                                                        e
                                                    ),
                                                    { className: I.nitroWheel }
                                                )
                                            )
                                    })
                                ]
                            }),
                            showRemoveAvatarButton: Y,
                            onAvatarChange: (e) => Q(e, null == F ? void 0 : F.avatar, j.I5),
                            errors: null == M ? void 0 : M.avatar,
                            guildId: V.id,
                            disabled: !z
                        },
                        'avatar'
                    ),
                    (0, r.jsx)(
                        u.Z,
                        {
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    T.NW.string(T.t['7v0T9P']),
                                    (0, r.jsx)(l.ua7, {
                                        text: T.NW.string(T.t['5AFxuL']),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                l.SrA,
                                                A(
                                                    y(
                                                        {
                                                            size: 'md',
                                                            color: 'currentColor'
                                                        },
                                                        e
                                                    ),
                                                    { className: I.nitroWheel }
                                                )
                                            )
                                    })
                                ]
                            }),
                            user: D,
                            guild: V
                        },
                        'decoration'
                    ),
                    (0, r.jsx)(
                        p.Z,
                        {
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    T.NW.string(T.t.wR5wOj),
                                    (0, r.jsx)(l.ua7, {
                                        text: T.NW.string(T.t['5AFxuL']),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                l.SrA,
                                                A(
                                                    y(
                                                        {
                                                            size: 'md',
                                                            color: 'currentColor'
                                                        },
                                                        e
                                                    ),
                                                    { className: I.nitroWheel }
                                                )
                                            )
                                    })
                                ]
                            }),
                            user: D,
                            guild: V
                        },
                        'effect'
                    ),
                    (0, r.jsx)(
                        g.Z,
                        {
                            showRemoveBannerButton: K,
                            errors: null == M ? void 0 : M.banner,
                            onBannerChange: (e) => Q(e, null == H ? void 0 : H.banner, j.g_),
                            guildId: null == V ? void 0 : V.id,
                            disabled: !z
                        },
                        'banner'
                    ),
                    (0, r.jsx)(h.Z, {
                        user: D,
                        pendingAvatar: Z,
                        pendingColors: B,
                        onThemeColorsChange: (e) => {
                            (0, O.ce)(e, null == H ? void 0 : H.themeColors);
                        },
                        guildId: null == V ? void 0 : V.id,
                        showResetThemeButton: q
                    }),
                    (0, r.jsx)(
                        d.Z,
                        {
                            placeholder: T.NW.string(T.t['/7NKgo']),
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    T.NW.string(T.t.jGoPJS),
                                    (0, r.jsx)(l.ua7, {
                                        text: T.NW.string(T.t['5AFxuL']),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                l.SrA,
                                                A(
                                                    y(
                                                        {
                                                            size: 'md',
                                                            color: 'currentColor'
                                                        },
                                                        e
                                                    ),
                                                    { className: I.nitroWheel }
                                                )
                                            )
                                    })
                                ]
                            }),
                            onBioChange: (e) => (0, O.qN)(e, X),
                            errors: null !== (P = null == M ? void 0 : M.bio) && void 0 !== P ? P : null == G ? void 0 : G.bio,
                            pendingBio: W,
                            currentBio: X,
                            disabled: !z
                        },
                        'about'
                    )
                ]
            })
        ]
    });
}

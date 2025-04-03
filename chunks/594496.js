n.d(t, { Z: () => R });
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
    b = n(643879),
    N = n(621853),
    x = n(271383),
    _ = n(594174),
    E = n(74538),
    j = n(51144),
    O = n(18438),
    C = n(778825),
    S = n(52597),
    v = n(430131),
    T = n(133484),
    I = n(388032),
    y = n(565872);
function A(e) {
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
function P(e, t) {
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
function R(e) {
    var t, n, i, R;
    let { guild: D } = e,
        Z = (0, a.e7)([_.default], () => {
            let e = _.default.getCurrentUser();
            return s()(null != e, 'GuildIdentitySettingsPage: user cannot be undefined'), e;
        }),
        {
            pendingAvatar: w,
            pendingNickname: k,
            pendingBanner: W,
            pendingBio: L,
            pendingPronouns: B,
            pendingThemeColors: M,
            errors: U,
            guild: V
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
        G = (0, b.SD)({
            userId: Z.id,
            image: w
        }),
        F = null != D ? D : V;
    s()(null != F, 'guild should not be null');
    let H = (0, o.gS)(F.id),
        z = (0, a.e7)([x.ZP], () => (null == F.id ? null : x.ZP.getMember(F.id, Z.id))),
        Y = (0, a.e7)([N.Z], () => N.Z.getGuildMemberProfile(Z.id, F.id)),
        K = E.ZP.canUsePremiumProfileCustomization(Z),
        q = (0, c.gd)(w, null == z ? void 0 : z.avatar),
        X = (0, c.f$)(W, null == Y ? void 0 : Y.banner),
        J = (0, S.p)(M, null == Y ? void 0 : Y.themeColors),
        Q = null != (t = null == Y ? void 0 : Y.bio) ? t : '',
        $ = null != (n = null == Y ? void 0 : Y.pronouns) ? n : '',
        ee = (e, t, n) => {
            n(null != e ? e : null != t ? null : void 0);
        };
    return (0, r.jsxs)('div', {
        className: y.sectionsContainer,
        children: [
            (0, r.jsx)(
                v.Z,
                {
                    errors: null != (i = null == U ? void 0 : U.nick) ? i : null == H ? void 0 : H.nick,
                    username: j.ZP.getName(Z),
                    pendingNick: k,
                    currentNick: null == z ? void 0 : z.nick,
                    guild: F
                },
                'nick'
            ),
            (0, r.jsx)(
                f.Z,
                {
                    sectionTitle: I.NW.string(I.t['+T3RIy']),
                    errors: null == U ? void 0 : U.pronouns,
                    onPronounsChange: (e) => {
                        (0, S.xs)(e, $);
                    },
                    pendingPronouns: B,
                    currentPronouns: $
                },
                'pronouns'
            ),
            (0, r.jsxs)(T.Z, {
                user: Z,
                showOverlay: !K,
                children: [
                    (0, r.jsx)(
                        m.Z,
                        {
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    I.NW.string(I.t.lqaIxM),
                                    (0, r.jsx)(l.ua7, {
                                        text: I.NW.string(I.t['5AFxuL']),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                l.SrA,
                                                P(
                                                    A(
                                                        {
                                                            size: 'md',
                                                            color: 'currentColor'
                                                        },
                                                        e
                                                    ),
                                                    { className: y.nitroWheel }
                                                )
                                            )
                                    })
                                ]
                            }),
                            showRemoveAvatarButton: q,
                            onAvatarChange: (e) => ee(e, null == z ? void 0 : z.avatar, O.I5),
                            errors: null == U ? void 0 : U.avatar,
                            guildId: F.id,
                            disabled: !K
                        },
                        'avatar'
                    ),
                    (0, r.jsx)(
                        u.Z,
                        {
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    I.NW.string(I.t['7v0T9P']),
                                    (0, r.jsx)(l.ua7, {
                                        text: I.NW.string(I.t['5AFxuL']),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                l.SrA,
                                                P(
                                                    A(
                                                        {
                                                            size: 'md',
                                                            color: 'currentColor'
                                                        },
                                                        e
                                                    ),
                                                    { className: y.nitroWheel }
                                                )
                                            )
                                    })
                                ]
                            }),
                            user: Z,
                            guild: F
                        },
                        'decoration'
                    ),
                    (0, r.jsx)(
                        p.Z,
                        {
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    I.NW.string(I.t.wR5wOj),
                                    (0, r.jsx)(l.ua7, {
                                        text: I.NW.string(I.t['5AFxuL']),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                l.SrA,
                                                P(
                                                    A(
                                                        {
                                                            size: 'md',
                                                            color: 'currentColor'
                                                        },
                                                        e
                                                    ),
                                                    { className: y.nitroWheel }
                                                )
                                            )
                                    })
                                ]
                            }),
                            user: Z,
                            guild: F
                        },
                        'effect'
                    ),
                    (0, r.jsx)(
                        g.Z,
                        {
                            showRemoveBannerButton: X,
                            errors: null == U ? void 0 : U.banner,
                            onBannerChange: (e) => ee(e, null == Y ? void 0 : Y.banner, O.g_),
                            guildId: null == F ? void 0 : F.id,
                            disabled: !K
                        },
                        'banner'
                    ),
                    (0, r.jsx)(h.Z, {
                        user: Z,
                        pendingAvatarSrc: G,
                        pendingColors: M,
                        onThemeColorsChange: (e) => {
                            (0, S.ce)(e, null == Y ? void 0 : Y.themeColors);
                        },
                        guildId: null == F ? void 0 : F.id,
                        showResetThemeButton: J
                    }),
                    (0, r.jsx)(
                        d.Z,
                        {
                            placeholder: I.NW.string(I.t['/7NKgo']),
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    I.NW.string(I.t.jGoPJS),
                                    (0, r.jsx)(l.ua7, {
                                        text: I.NW.string(I.t['5AFxuL']),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                l.SrA,
                                                P(
                                                    A(
                                                        {
                                                            size: 'md',
                                                            color: 'currentColor'
                                                        },
                                                        e
                                                    ),
                                                    { className: y.nitroWheel }
                                                )
                                            )
                                    })
                                ]
                            }),
                            onBioChange: (e) => (0, S.qN)(e, Q),
                            errors: null != (R = null == U ? void 0 : U.bio) ? R : null == H ? void 0 : H.bio,
                            pendingBio: L,
                            currentBio: Q,
                            disabled: !K
                        },
                        'about'
                    )
                ]
            })
        ]
    });
}

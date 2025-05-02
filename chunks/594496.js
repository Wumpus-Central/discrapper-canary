n.d(t, { Z: () => R });
var i = n(200651);
n(192379);
var r = n(512722),
    s = n.n(r),
    l = n(442837),
    a = n(481060),
    o = n(295474),
    c = n(150039),
    d = n(126631),
    u = n(433411),
    m = n(532432),
    p = n(134795),
    g = n(513901),
    h = n(451392),
    f = n(906364),
    b = n(643879),
    _ = n(621853),
    x = n(271383),
    E = n(594174),
    j = n(74538),
    C = n(51144),
    O = n(18438),
    S = n(778825),
    v = n(52597),
    T = n(430131),
    I = n(133484),
    N = n(388032),
    y = n(565872);
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R(e) {
    var t, n, r, R;
    let { guild: D } = e,
        Z = (0, l.e7)([E.default], () => {
            let e = E.default.getCurrentUser();
            return s()(null != e, 'GuildIdentitySettingsPage: user cannot be undefined'), e;
        }),
        {
            pendingAvatar: w,
            pendingNickname: k,
            pendingBanner: L,
            pendingBio: B,
            pendingPronouns: M,
            pendingThemeColors: U,
            errors: V,
            guild: G
        } = (0, l.cj)([S.Z], () => {
            let { pendingAvatar: e, pendingNickname: t, pendingBio: n, pendingPronouns: i, pendingBanner: r, pendingThemeColors: s } = S.Z.getAllPending();
            return {
                pendingAvatar: e,
                pendingNickname: t,
                pendingBanner: r,
                pendingBio: n,
                pendingPronouns: i,
                pendingThemeColors: s,
                errors: S.Z.getErrors(),
                guild: S.Z.getGuild()
            };
        }),
        F = (0, b.SD)({
            userId: Z.id,
            image: w
        }),
        H = null != D ? D : G;
    s()(null != H, 'guild should not be null');
    let z = (0, o.gS)(H.id),
        W = (0, l.e7)([x.ZP], () => (null == H.id ? null : x.ZP.getMember(H.id, Z.id))),
        Y = (0, l.e7)([_.Z], () => _.Z.getGuildMemberProfile(Z.id, H.id)),
        K = j.ZP.canUsePremiumProfileCustomization(Z),
        q = (0, c.gd)(w, null == W ? void 0 : W.avatar),
        X = (0, c.f$)(L, null == Y ? void 0 : Y.banner),
        Q = (0, v.p)(U, null == Y ? void 0 : Y.themeColors),
        J = null != (t = null == Y ? void 0 : Y.bio) ? t : '',
        $ = null != (n = null == Y ? void 0 : Y.pronouns) ? n : '',
        ee = (e, t, n) => {
            n(null != e ? e : null != t ? null : void 0);
        };
    return (0, i.jsxs)('div', {
        className: y.sectionsContainer,
        children: [
            (0, i.jsx)(
                T.Z,
                {
                    errors: null != (r = null == V ? void 0 : V.nick) ? r : null == z ? void 0 : z.nick,
                    username: C.ZP.getName(Z),
                    pendingNick: k,
                    currentNick: null == W ? void 0 : W.nick,
                    guild: H
                },
                'nick'
            ),
            (0, i.jsx)(
                f.Z,
                {
                    sectionTitle: N.intl.string(N.t['+T3RIy']),
                    errors: null == V ? void 0 : V.pronouns,
                    onPronounsChange: (e) => {
                        (0, v.xs)(e, $);
                    },
                    pendingPronouns: M,
                    currentPronouns: $
                },
                'pronouns'
            ),
            (0, i.jsxs)(I.Z, {
                user: Z,
                showOverlay: !K,
                children: [
                    (0, i.jsx)(
                        m.Z,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    N.intl.string(N.t.lqaIxM),
                                    (0, i.jsx)(a.ua7, {
                                        text: N.intl.string(N.t['5AFxuL']),
                                        children: (e) =>
                                            (0, i.jsx)(
                                                a.SrA,
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
                            onAvatarChange: (e) => ee(e, null == W ? void 0 : W.avatar, O.I5),
                            errors: null == V ? void 0 : V.avatar,
                            guildId: H.id,
                            disabled: !K
                        },
                        'avatar'
                    ),
                    (0, i.jsx)(
                        u.Z,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    N.intl.string(N.t['7v0T9P']),
                                    (0, i.jsx)(a.ua7, {
                                        text: N.intl.string(N.t['5AFxuL']),
                                        children: (e) =>
                                            (0, i.jsx)(
                                                a.SrA,
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
                            guild: H
                        },
                        'decoration'
                    ),
                    (0, i.jsx)(
                        g.Z,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    N.intl.string(N.t.wR5wOj),
                                    (0, i.jsx)(a.ua7, {
                                        text: N.intl.string(N.t['5AFxuL']),
                                        children: (e) =>
                                            (0, i.jsx)(
                                                a.SrA,
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
                            guild: H
                        },
                        'effect'
                    ),
                    (0, i.jsx)(
                        p.Z,
                        {
                            showRemoveBannerButton: X,
                            errors: null == V ? void 0 : V.banner,
                            onBannerChange: (e) => ee(e, null == Y ? void 0 : Y.banner, O.g_),
                            guildId: null == H ? void 0 : H.id,
                            disabled: !K
                        },
                        'banner'
                    ),
                    (0, i.jsx)(h.Z, {
                        user: Z,
                        pendingAvatarSrc: F,
                        pendingColors: U,
                        onThemeColorsChange: (e) => {
                            (0, v.ce)(e, null == Y ? void 0 : Y.themeColors);
                        },
                        guildId: null == H ? void 0 : H.id,
                        showResetThemeButton: Q
                    }),
                    (0, i.jsx)(
                        d.Z,
                        {
                            placeholder: N.intl.string(N.t['/7NKgo']),
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    N.intl.string(N.t.jGoPJS),
                                    (0, i.jsx)(a.ua7, {
                                        text: N.intl.string(N.t['5AFxuL']),
                                        children: (e) =>
                                            (0, i.jsx)(
                                                a.SrA,
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
                            onBioChange: (e) => (0, v.qN)(e, J),
                            errors: null != (R = null == V ? void 0 : V.bio) ? R : null == z ? void 0 : z.bio,
                            pendingBio: B,
                            currentBio: J,
                            disabled: !K
                        },
                        'about'
                    )
                ]
            })
        ]
    });
}

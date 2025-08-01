n.d(t, { Z: () => D });
var i = n(255367);
n(73800);
var r = n(512722),
    s = n.n(r),
    a = n(442837),
    l = n(481060),
    o = n(295474),
    c = n(150039),
    d = n(126631),
    u = n(433411),
    m = n(532432),
    p = n(818420),
    g = n(134795),
    h = n(513901),
    f = n(451392),
    b = n(906364),
    x = n(643879),
    _ = n(621853),
    j = n(271383),
    C = n(594174),
    O = n(74538),
    E = n(51144),
    v = n(18438),
    S = n(778825),
    T = n(52597),
    N = n(430131),
    I = n(291334),
    y = n(388032),
    A = n(565872);
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function R(e, t) {
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
function D(e) {
    var t, n, r, D;
    let { guild: Z, nameplateEnabled: w } = e,
        k = (0, a.e7)([C.default], () => {
            let e = C.default.getCurrentUser();
            return (s()(null != e, 'GuildIdentitySettingsPage: user cannot be undefined'), e);
        }),
        {
            pendingAvatar: L,
            pendingNickname: B,
            pendingBanner: M,
            pendingBio: U,
            pendingPronouns: V,
            pendingThemeColors: G,
            errors: F,
            guild: H
        } = (0, a.cj)([S.Z], () => {
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
        W = (0, x.SD)({
            userId: k.id,
            image: L
        }),
        z = null != Z ? Z : H;
    s()(null != z, 'guild should not be null');
    let Y = (0, o.gS)(z.id),
        K = (0, a.e7)([j.ZP], () => (null == z.id ? null : j.ZP.getMember(z.id, k.id))),
        q = (0, a.e7)([_.Z], () => _.Z.getGuildMemberProfile(k.id, z.id)),
        X = O.ZP.canUsePremiumProfileCustomization(k),
        J = (0, c.gd)(L, null == K ? void 0 : K.avatar),
        Q = (0, c.f$)(M, null == q ? void 0 : q.banner),
        $ = (0, T.p)(G, null == q ? void 0 : q.themeColors),
        ee = null != (t = null == q ? void 0 : q.bio) ? t : '',
        et = null != (n = null == q ? void 0 : q.pronouns) ? n : '',
        en = (e, t, n) => {
            n(null != e ? e : null != t ? null : void 0);
        };
    return (0, i.jsxs)('div', {
        className: A.sectionsContainer,
        children: [
            (0, i.jsx)(
                N.Z,
                {
                    errors: null != (r = null == F ? void 0 : F.nick) ? r : null == Y ? void 0 : Y.nick,
                    username: E.ZP.getName(k),
                    pendingNick: B,
                    currentNick: null == K ? void 0 : K.nick,
                    guild: z
                },
                'nick'
            ),
            (0, i.jsx)(
                b.Z,
                {
                    sectionTitle: y.intl.string(y.t['+T3RIy']),
                    errors: null == F ? void 0 : F.pronouns,
                    onPronounsChange: (e) => {
                        (0, T.xs)(e, et);
                    },
                    pendingPronouns: V,
                    currentPronouns: et
                },
                'pronouns'
            ),
            (0, i.jsxs)(I.Z, {
                user: k,
                showOverlay: !X,
                children: [
                    (0, i.jsx)(
                        m.Z,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    y.intl.string(y.t.lqaIxM),
                                    (0, i.jsx)(l.ua7, {
                                        text: y.intl.string(y.t['5AFxuL']),
                                        children: (e) =>
                                            (0, i.jsx)(
                                                l.SrA,
                                                R(
                                                    P(
                                                        {
                                                            size: 'md',
                                                            color: 'currentColor'
                                                        },
                                                        e
                                                    ),
                                                    { className: A.nitroWheel }
                                                )
                                            )
                                    })
                                ]
                            }),
                            showRemoveAvatarButton: J,
                            onAvatarChange: (e) => en(e, null == K ? void 0 : K.avatar, v.I5),
                            errors: null == F ? void 0 : F.avatar,
                            guildId: z.id,
                            disabled: !X
                        },
                        'avatar'
                    ),
                    (0, i.jsx)(
                        u.Z,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    y.intl.string(y.t['7v0T9P']),
                                    (0, i.jsx)(l.ua7, {
                                        text: y.intl.string(y.t['5AFxuL']),
                                        children: (e) =>
                                            (0, i.jsx)(
                                                l.SrA,
                                                R(
                                                    P(
                                                        {
                                                            size: 'md',
                                                            color: 'currentColor'
                                                        },
                                                        e
                                                    ),
                                                    { className: A.nitroWheel }
                                                )
                                            )
                                    })
                                ]
                            }),
                            user: k,
                            guild: z
                        },
                        'decoration'
                    ),
                    w &&
                        (0, i.jsx)(
                            p.Z,
                            {
                                user: k,
                                guild: z
                            },
                            'nameplate'
                        ),
                    (0, i.jsx)(
                        h.Z,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    y.intl.string(y.t.wR5wOj),
                                    (0, i.jsx)(l.ua7, {
                                        text: y.intl.string(y.t['5AFxuL']),
                                        children: (e) =>
                                            (0, i.jsx)(
                                                l.SrA,
                                                R(
                                                    P(
                                                        {
                                                            size: 'md',
                                                            color: 'currentColor'
                                                        },
                                                        e
                                                    ),
                                                    { className: A.nitroWheel }
                                                )
                                            )
                                    })
                                ]
                            }),
                            user: k,
                            guild: z
                        },
                        'effect'
                    ),
                    (0, i.jsx)(
                        g.Z,
                        {
                            showRemoveBannerButton: Q,
                            errors: null == F ? void 0 : F.banner,
                            onBannerChange: (e) => en(e, null == q ? void 0 : q.banner, v.g_),
                            guildId: null == z ? void 0 : z.id,
                            disabled: !X
                        },
                        'banner'
                    ),
                    (0, i.jsx)(f.Z, {
                        user: k,
                        pendingAvatarSrc: W,
                        pendingColors: G,
                        onThemeColorsChange: (e) => {
                            (0, T.ce)(e, null == q ? void 0 : q.themeColors);
                        },
                        guildId: null == z ? void 0 : z.id,
                        showResetThemeButton: $
                    }),
                    (0, i.jsx)(
                        d.Z,
                        {
                            placeholder: y.intl.string(y.t['/7NKgo']),
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    y.intl.string(y.t.jGoPJS),
                                    (0, i.jsx)(l.ua7, {
                                        text: y.intl.string(y.t['5AFxuL']),
                                        children: (e) =>
                                            (0, i.jsx)(
                                                l.SrA,
                                                R(
                                                    P(
                                                        {
                                                            size: 'md',
                                                            color: 'currentColor'
                                                        },
                                                        e
                                                    ),
                                                    { className: A.nitroWheel }
                                                )
                                            )
                                    })
                                ]
                            }),
                            onBioChange: (e) => (0, T.qN)(e, ee),
                            errors: null != (D = null == F ? void 0 : F.bio) ? D : null == Y ? void 0 : Y.bio,
                            pendingBio: U,
                            currentBio: ee,
                            disabled: !X
                        },
                        'about'
                    )
                ]
            })
        ]
    });
}

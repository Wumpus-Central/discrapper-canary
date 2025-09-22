n.d(t, { Z: () => j });
var r = n(951288);
n(647438);
var i = n(512722),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(295474),
    c = n(150039),
    u = n(126631),
    d = n(433411),
    f = n(532432),
    _ = n(818420),
    p = n(134795),
    h = n(513901),
    m = n(451392),
    g = n(906364),
    E = n(643879),
    b = n(621853),
    y = n(271383),
    O = n(594174),
    v = n(74538),
    I = n(51144),
    T = n(18438),
    S = n(778825),
    A = n(52597),
    C = n(430131),
    N = n(291334),
    R = n(388032),
    P = n(737788);
function w(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                w(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e) {
    var t, n, i, w;
    let { guild: x, nameplateEnabled: j } = e,
        M = (0, o.e7)([O.default], () => {
            let e = O.default.getCurrentUser();
            return a()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        {
            pendingAvatar: k,
            pendingNickname: U,
            pendingBanner: G,
            pendingBio: B,
            pendingPronouns: Z,
            pendingThemeColors: F,
            errors: V,
            guild: H,
        } = (0, o.cj)([S.Z], () => {
            let {
                pendingAvatar: e,
                pendingNickname: t,
                pendingBio: n,
                pendingPronouns: r,
                pendingBanner: i,
                pendingThemeColors: a,
            } = S.Z.getAllPending();
            return {
                pendingAvatar: e,
                pendingNickname: t,
                pendingBanner: i,
                pendingBio: n,
                pendingPronouns: r,
                pendingThemeColors: a,
                errors: S.Z.getErrors(),
                guild: S.Z.getGuild(),
            };
        }),
        Y = (0, E.SD)({
            userId: M.id,
            image: k,
        }),
        W = null != x ? x : H;
    a()(null != W, "guild should not be null");
    let K = (0, l.gS)(W.id),
        z = (0, o.e7)([y.ZP], () => (null == W.id ? null : y.ZP.getMember(W.id, M.id))),
        q = (0, o.e7)([b.Z], () => b.Z.getGuildMemberProfile(M.id, W.id)),
        X = v.ZP.canUsePremiumProfileCustomization(M),
        Q = (0, c.gd)(k, null == z ? void 0 : z.avatar),
        J = (0, c.f$)(G, null == q ? void 0 : q.banner),
        $ = (0, A.p)(F, null == q ? void 0 : q.themeColors),
        ee = null != (t = null == q ? void 0 : q.bio) ? t : "",
        et = null != (n = null == q ? void 0 : q.pronouns) ? n : "",
        en = (e, t, n) => {
            let r = null != t ? null : void 0;
            n(null != e ? e : r);
        },
        er = (e) => en(e, null == q ? void 0 : q.banner, T.g_),
        ei = (e) => en(e, null == z ? void 0 : z.avatar, T.I5);
    return (0, r.jsxs)("div", {
        className: P.sectionsContainer,
        children: [
            (0, r.jsx)(
                C.Z,
                {
                    errors: null != (i = null == V ? void 0 : V.nick) ? i : null == K ? void 0 : K.nick,
                    username: I.ZP.getName(M),
                    pendingNick: U,
                    currentNick: null == z ? void 0 : z.nick,
                    user: M,
                    guild: W,
                },
                "nick",
            ),
            (0, r.jsx)(
                g.Z,
                {
                    sectionTitle: R.intl.string(R.t["+T3RIy"]),
                    errors: null == V ? void 0 : V.pronouns,
                    onPronounsChange: (e) => {
                        (0, A.xs)(e, et);
                    },
                    pendingPronouns: Z,
                    currentPronouns: et,
                },
                "pronouns",
            ),
            (0, r.jsxs)(N.Z, {
                user: M,
                showOverlay: !X,
                children: [
                    (0, r.jsx)(
                        f.Z,
                        {
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    R.intl.string(R.t.lqaIxM),
                                    (0, r.jsx)(s.ua7, {
                                        text: R.intl.string(R.t["5AFxuL"]),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                s.SrA,
                                                L(
                                                    D(
                                                        {
                                                            size: "md",
                                                            color: "currentColor",
                                                        },
                                                        e,
                                                    ),
                                                    { className: P.nitroWheel },
                                                ),
                                            ),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: Q,
                            onAvatarChange: ei,
                            errors: null == V ? void 0 : V.avatar,
                            guildId: W.id,
                            disabled: !X,
                        },
                        "avatar",
                    ),
                    (0, r.jsx)(
                        d.Z,
                        {
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    R.intl.string(R.t["7v0T9P"]),
                                    (0, r.jsx)(s.ua7, {
                                        text: R.intl.string(R.t["5AFxuL"]),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                s.SrA,
                                                L(
                                                    D(
                                                        {
                                                            size: "md",
                                                            color: "currentColor",
                                                        },
                                                        e,
                                                    ),
                                                    { className: P.nitroWheel },
                                                ),
                                            ),
                                    }),
                                ],
                            }),
                            user: M,
                            guild: W,
                        },
                        "decoration",
                    ),
                    j &&
                        (0, r.jsx)(
                            _.Z,
                            {
                                user: M,
                                guild: W,
                                titleIcon: (0, r.jsx)(s.ua7, {
                                    text: R.intl.string(R.t["5AFxuL"]),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            s.SrA,
                                            L(
                                                D(
                                                    {
                                                        size: "md",
                                                        color: "currentColor",
                                                    },
                                                    e,
                                                ),
                                                { className: P.nitroWheel },
                                            ),
                                        ),
                                }),
                            },
                            "nameplate",
                        ),
                    (0, r.jsx)(
                        h.Z,
                        {
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    R.intl.string(R.t.wR5wOj),
                                    (0, r.jsx)(s.ua7, {
                                        text: R.intl.string(R.t["5AFxuL"]),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                s.SrA,
                                                L(
                                                    D(
                                                        {
                                                            size: "md",
                                                            color: "currentColor",
                                                        },
                                                        e,
                                                    ),
                                                    { className: P.nitroWheel },
                                                ),
                                            ),
                                    }),
                                ],
                            }),
                            user: M,
                            guild: W,
                        },
                        "effect",
                    ),
                    (0, r.jsx)(
                        p.Z,
                        {
                            showRemoveBannerButton: J,
                            errors: null == V ? void 0 : V.banner,
                            onBannerChange: er,
                            guildId: null == W ? void 0 : W.id,
                            disabled: !X,
                        },
                        "banner",
                    ),
                    (0, r.jsx)(m.Z, {
                        user: M,
                        pendingAvatarSrc: Y,
                        pendingColors: F,
                        onThemeColorsChange: (e) => {
                            (0, A.ce)(e, null == q ? void 0 : q.themeColors);
                        },
                        guildId: null == W ? void 0 : W.id,
                        showResetThemeButton: $,
                    }),
                    (0, r.jsx)(
                        u.Z,
                        {
                            placeholder: R.intl.string(R.t["/7NKgo"]),
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    R.intl.string(R.t.jGoPJS),
                                    (0, r.jsx)(s.ua7, {
                                        text: R.intl.string(R.t["5AFxuL"]),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                s.SrA,
                                                L(
                                                    D(
                                                        {
                                                            size: "md",
                                                            color: "currentColor",
                                                        },
                                                        e,
                                                    ),
                                                    { className: P.nitroWheel },
                                                ),
                                            ),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, A.qN)(e, ee),
                            errors: null != (w = null == V ? void 0 : V.bio) ? w : null == K ? void 0 : K.bio,
                            pendingBio: B,
                            currentBio: ee,
                            disabled: !X,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}

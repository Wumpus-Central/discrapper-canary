var a = t(477900),
    i = t(582128),
    r = t(503698),
    l = t.n(r),
    s = t(855986),
    d = t(366010),
    o = t(43990),
    c = t(834730),
    u = t(629584),
    m = t(943255),
    p = t(575181),
    g = t(736653),
    A = t(780898),
    N = t(872200),
    h = t(432005),
    y = t(963852),
    S = t(763754),
    I = t(20851),
    f = t(919395),
    v = t(641318),
    T = t(101058),
    _ = t(836602),
    E = t(527212),
    L = t(686189),
    D = t(946356),
    C = t(129230),
    P = t(975571),
    k = t(652215),
    Y = t(996988),
    x = t(842671),
    b = t(792996),
    G = t(228839);
function M(e) {
    let { darkPreview: n, onToggleTheme: t } = e,
        i = n ? k.NJ8.DARK : k.NJ8.LIGHT;
    return (0, a.jsx)(u.I, {
        className: G.xr,
        optionClassName: G.$C,
        options: [
            {
                name: "",
                tooltip: b.intl.string(b.t.b8Cei3),
                value: k.NJ8.DARK,
                icon: m.ThemeDarkIcon,
                className: i === k.NJ8.DARK ? G.iB : void 0,
            },
            {
                name: "",
                tooltip: b.intl.string(b.t.K2sFfo),
                value: k.NJ8.LIGHT,
                icon: p.ThemeLightIcon,
                className: i === k.NJ8.LIGHT ? G.iB : void 0,
            },
        ],
        value: i,
        onChange: (e) => {
            let { value: n } = e;
            return t(n);
        },
        look: "pill",
    });
}
t.d(
    n,
    {},
    {
        A: function (e) {
            let {
                    user: n,
                    guild: t,
                    displayName: r,
                    selectedFontId: u,
                    selectedEffectId: m,
                    selectedColors: p,
                    isPremiumTryItOut: R = !1,
                    compact: j = !1,
                } = e,
                B = (0, g.Ay)(),
                O = (0, d.M)(B),
                [J, w] = (0, i.useState)(O),
                H = (0, E.Ay)(n.id, null),
                { pendingChanges: F, tryItOutChanges: K } = (0, s.cf)([_.A], () => ({
                    pendingChanges: _.A.getPendingChanges(t?.id),
                    tryItOutChanges: _.A.getTryItOutChanges(),
                })),
                {
                    pendingAvatar: U,
                    pendingAvatarDecoration: z,
                    pendingPrimaryGuildId: V,
                    pendingBanner: W,
                    pendingThemeColors: q,
                    pendingNickname: $,
                    pendingPronouns: Q,
                    pendingProfileEffect: X,
                    pendingProfileFrame: Z,
                    pendingAccentColor: ee,
                    pendingBio: en,
                    pendingLegacyUsernameDisabled: et,
                } = F,
                ea = null == t ? r : void 0,
                ei = R ? K.tryItOutAvatar : U,
                er = (0, T.V7)({ userId: n.id, image: ei }),
                el = R ? void 0 : z,
                es = R ? K.tryItOutBanner : W,
                ed = R ? K.tryItOutThemeColors : q,
                { bannerSrc: eo } = (0, L.A)({ displayProfile: H, size: 413, canAnimate: !1, pendingBanner: es }),
                { userNameplate: ec, guildNameplate: eu, pendingNameplate: em } = (0, f.rv)(n, t?.id),
                ep = (0, A.WK)(eu);
            J && !O ? (B = k.NJ8.DARK) : !J && O && (B = k.NJ8.LIGHT);
            let eg = (0, i.useCallback)((e) => {
                    (w(e === k.NJ8.DARK),
                        C.default.track(k.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === k.NJ8.DARK }));
                }, []),
                eA = (0, i.useMemo)(
                    () => ({
                        ...(0, S.FT)(n, null),
                        nick: r,
                        displayNameStyles: { fontId: u, effectId: m, colors: p },
                    }),
                    [n, u, m, p, r],
                );
            return (0, a.jsxs)("div", {
                className: l()(G._l, { [G.oE]: j }),
                children: [
                    !j &&
                        null != eo &&
                        (0, a.jsx)(D.A, {
                            user: n,
                            displayProfile: H,
                            themeType: Y.d.MODAL_V2,
                            className: G.LX,
                            pendingThemeColors: ed,
                            forceUserTheme: !0,
                            children: (0, a.jsx)("div", { className: G.b8, style: { backgroundImage: `url(${eo})` } }),
                        }),
                    (0, a.jsx)(o.N, {
                        theme: B,
                        children: (e) =>
                            (0, a.jsxs)("div", {
                                className: l()(G.cq, e),
                                inert: !0,
                                children: [
                                    (0, a.jsx)(v.A, {
                                        user: n,
                                        guild: t,
                                        pendingGlobalName: ea,
                                        pendingNickname: $,
                                        pendingPronouns: Q,
                                        pendingAvatar: er,
                                        pendingAvatarDecoration: el,
                                        pendingPrimaryGuildId: V,
                                        pendingBanner: es,
                                        pendingThemeColors: ed,
                                        pendingAccentColor: ee,
                                        pendingBio: en,
                                        pendingProfileEffect: X,
                                        pendingProfileFrame: Z,
                                        pendingLegacyUsernameDisabled: et,
                                        pendingDisplayNameStyles: eA.displayNameStyles,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideCustomStatus: !0,
                                        hideBioSection: !0,
                                        containerClassName: G.ME,
                                        interactive: !1,
                                        hideExampleButton: !0,
                                        hideProfileFrame: !0,
                                    }),
                                    (0, a.jsx)(I.A, {
                                        author: eA,
                                        message: (0, h.rh)({
                                            ...(0, y.Ay)({
                                                channelId: "1337",
                                                content: b.intl.string(x.default.h5Cuej),
                                            }),
                                            state: k.cmJ.SENT,
                                            id: "0",
                                        }),
                                        isGroupStart: !0,
                                        hideSimpleEmbedContent: !0,
                                        hideGuildTag: !0,
                                        className: G.OT,
                                        previewGuildId: t?.id,
                                        avatarDecorationOverride: el,
                                        avatarOverride: er,
                                    }),
                                    (0, a.jsx)(N.A, {
                                        user: n,
                                        guildId: t?.id,
                                        nameplate: em,
                                        nameplateData: null == em ? (ep ?? ec) : void 0,
                                        pendingGlobalName: ea,
                                        pendingNickname: $,
                                        pendingAvatarDecoration: el,
                                        pendingPrimaryGuildId: V,
                                        pendingDisplayNameStyles: eA.displayNameStyles,
                                        pendingAvatar: ei,
                                        isHighlighted: !0,
                                        className: G.qF,
                                    }),
                                ],
                            }),
                    }),
                    !j &&
                        (0, a.jsxs)("div", {
                            className: G.dI,
                            children: [
                                (0, a.jsx)(c.E, {
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    children: b.intl.format(x.default.prQba8, {
                                        helpArticleLink: P.A.getArticleURL(k.MVz.DISPLAY_NAME_STYLES),
                                    }),
                                }),
                                (0, a.jsx)(M, { darkPreview: J, onToggleTheme: eg }),
                            ],
                        }),
                ],
            });
        },
    },
);

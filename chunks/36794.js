"use strict";
n.d(t, { default: () => ew });
var i = n(627968),
    a = n(64700),
    r = n(110259),
    l = n(508425),
    s = n(559949),
    o = n(17928),
    c = n(52133),
    d = n(935462),
    u = n(534514),
    p = n(793574),
    _ = n(688810),
    f = n(139286),
    m = n(919395),
    h = n(71393),
    g = n(287809),
    A = n(954571),
    b = n(871162),
    v = n(945096),
    y = n(383197),
    x = n(207803),
    E = n(84540),
    I = n(652215),
    C = n(836602),
    S = n(696451),
    N = n(427262),
    T = n(403581),
    w = n(661531),
    L = n(48736),
    R = n(750656),
    j = n(864386),
    k = n(985018),
    D = n(250229),
    P = n(257170);
function M(e) {
    let { selectedColors: t, setSelectedColors: n, defaultColor: r, selectedEffectId: s, className: o } = e,
        c = s === l.z.GRADIENT,
        d = (0, a.useCallback)(
            (e) => {
                n([e]), A.default.track(I.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: e === r, colors: [e] });
            },
            [n, r],
        ),
        p = (0, a.useCallback)(
            (e) => {
                n(e), A.default.track(I.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: !1, colors: e });
            },
            [n],
        );
    return (0, i.jsxs)("div", {
        className: o,
        children: [
            (0, i.jsxs)(u.D, {
                variant: "heading-md/semibold",
                className: P.s,
                children: [
                    k.intl.string(j.default.JOpi7z),
                    (0, i.jsx)(T.t, { size: "xs", color: w.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, i.jsx)(L.default, {
                className: D.Ei,
                colorContainerClassName: D.rx,
                defaultColor: r,
                colors: c ? R.Wf : R.Jl,
                value: t[0],
                secondaryValue: t[1] ?? void 0,
                onChange: d,
                onChangeGradientColors: p,
                isGradient: c,
                gradientButtonClassName: D.xr,
                gradientDegrees: 90,
                allowBlackCustomColor: !0,
                customPickerPosition: "top",
            }),
        ],
    });
}
var O = n(503698),
    F = n.n(O),
    U = n(331322),
    G = n(939249),
    B = n(922301),
    H = n(368919),
    V = n(700090);
function z(e) {
    let { selectedEffectId: t, setSelectedEffectId: n, className: a } = e;
    return (0, i.jsxs)("div", {
        className: a,
        children: [
            (0, i.jsxs)(u.D, {
                variant: "heading-md/semibold",
                className: P.s,
                children: [
                    k.intl.string(j.default["1wilM1"]),
                    (0, i.jsx)(T.t, { size: "xs", color: w.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, i.jsx)(U.B, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                gap: 8,
                children: R.re.map((e) => (0, i.jsx)(W, { effectId: e, selected: e === t, onClick: () => n(e) }, e)),
            }),
        ],
    });
}
function W(e) {
    let { effectId: t, selected: n, onClick: a } = e,
        r = (0, y._)(t);
    return (0, i.jsx)(
        G.D,
        {
            className: F()(V.Tw, { [V.wH]: n }),
            onClick: a,
            children: (0, i.jsx)(H.A, {
                userName: r.name,
                effectDisplayType: B.G.STATIC,
                displayNameStyles: r.previewStyles,
                textClassName: V.tr,
                inProfile: !0,
            }),
        },
        t,
    );
}
var Y = n(834730),
    Z = n(885574),
    $ = n(990078),
    J = n(73392),
    X = n(699006);
function K(e) {
    let { selectedFontId: t, setSelectedFontId: n, displayName: a, className: r } = e,
        l = t !== s.x.DEFAULT,
        o = (0, v.Xr)(a);
    return (0, i.jsxs)("div", {
        className: r,
        children: [
            (0, i.jsxs)(u.D, {
                variant: "heading-md/semibold",
                className: P.s,
                children: [
                    k.intl.string(j.default.nP0ngb),
                    (0, i.jsx)(T.t, { size: "xs", color: w.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, i.jsx)(U.B, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                children: R.rA.map((e) => {
                    let a = (0, J.p)(e),
                        r = e === t;
                    return (0, i.jsx)(
                        $.m,
                        {
                            text: k.intl.string(a.name),
                            asContainer: !0,
                            children: (0, i.jsx)(G.D, {
                                className: F()(X.SO, { [X.wH]: r }),
                                onClick: () => n(e),
                                "aria-label": k.intl.string(a.name),
                                children: (0, i.jsx)(Y.E, {
                                    variant: "text-lg/semibold",
                                    color: r ? "text-strong" : "text-default",
                                    className: F()(X.FH, a.className),
                                    children: "Gg",
                                }),
                            }),
                        },
                        e,
                    );
                }),
            }),
            l &&
                o &&
                (0, i.jsxs)("div", {
                    className: X.Lb,
                    children: [
                        (0, i.jsx)(Z.m, { size: "lg" }),
                        (0, i.jsx)(Y.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: k.intl.string(j.default["+O1xL2"]),
                        }),
                    ],
                }),
        ],
    });
}
var q = n(821609),
    Q = n(908803),
    ee = n(87719),
    et = n(465794),
    en = n(757036),
    ei = n(788868),
    ea = n(277041);
function er(e) {
    let { onApply: t, onSurpriseMe: n, onClose: a, canApply: r } = e,
        l = (0, en.L)(ei.PremiumTypes.TIER_2),
        s = (0, i.jsx)(q.$, {
            variant: "secondary",
            size: "md",
            onClick: n,
            icon: { type: "rive", asset: Q.m, riveProps: { dataBinding: { fill: w.A.colors.ICON_STRONG } } },
            text: k.intl.string(j.default.NOGFds),
        }),
        o = (0, i.jsxs)("div", {
            className: ea.k0,
            children: [
                s,
                (0, i.jsx)($.m, {
                    text: k.intl.string(j.default.cVTpnj),
                    shouldShow: !r,
                    children: (0, i.jsx)(q.$, {
                        onClick: t,
                        disabled: !r,
                        text: k.intl.string(k.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        c = (0, i.jsxs)("div", {
            className: ea.UX,
            children: [
                (0, i.jsxs)("div", {
                    className: ea.iQ,
                    children: [
                        (0, i.jsx)($.m, {
                            text: k.intl.string(k.t["5AFxuK"]),
                            children: (0, i.jsx)(T.t, { size: "md", color: w.A.colors.ICON_STRONG }),
                        }),
                        (0, i.jsx)(Y.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: ea.h_,
                            children: k.intl.format(j.default.PWf0xS, {
                                onClickNitro: () => {
                                    A.default.track(I.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, ee.x)(a);
                                },
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: ea.UD,
                    children: [
                        s,
                        (0, i.jsx)(et.A, {
                            premiumModalAnalyticsLocation: {
                                section: I.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: I.ZSU.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: ei.pe.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, i.jsx)(d.jl, { "data-migration-pending": !0, className: ea.qr, children: l ? o : c });
}
var el = n(366010),
    es = n(43990),
    eo = n(629584),
    ec = n(943255),
    ed = n(575181),
    eu = n(736653),
    ep = n(780898),
    e_ = n(344346),
    ef = n(320095),
    em = n(963852),
    eh = n(763754),
    eg = n(20851),
    eA = n(986687),
    eb = n(101058),
    ev = n(999291),
    ey = n(686189),
    ex = n(946356),
    eE = n(975571),
    eI = n(996988),
    eC = n(471260);
function eS(e) {
    let {
            user: t,
            guild: n,
            displayName: r,
            selectedFontId: l,
            selectedEffectId: s,
            selectedColors: c,
            onClose: u,
        } = e,
        p = (0, eu.Ay)(),
        _ = (0, el.M)(p),
        [f, h] = (0, a.useState)(_),
        g = (0, ev.Ay)(t.id, null),
        { bannerSrc: b } = (0, ey.A)({ displayProfile: g, size: 413, canAnimate: !1 }),
        v = (0, o.cf)([C.A], () => C.A.getPendingChanges(n?.id)),
        y = (0, eb.V7)({ userId: t.id, image: v.pendingAvatar }),
        { userNameplate: x, guildNameplate: E, pendingNameplate: S } = (0, m.rv)(t, n?.id),
        N = (0, ep.WK)(E);
    f && !_ ? (p = I.NJ8.DARK) : !f && _ && (p = I.NJ8.LIGHT);
    let T = (0, a.useCallback)(() => {
            A.default.track(I.HAw.DISPLAY_NAME_STYLES_CLOSED), u();
        }, [u]),
        w = (0, a.useCallback)((e) => {
            h(e === I.NJ8.DARK), A.default.track(I.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === I.NJ8.DARK });
        }, []),
        L = (0, a.useMemo)(
            () => ({ ...(0, eh.FT)(t, null), nick: r, displayNameStyles: { fontId: l, effectId: s, colors: c } }),
            [t, l, s, c, r],
        );
    return (0, i.jsxs)("div", {
        className: eC._l,
        children: [
            (0, i.jsx)(d.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: eC.bV,
                children: (0, i.jsx)(d.s_, { "data-migration-pending": !0, onClick: T, innerClassName: eC.b }),
            }),
            null != b &&
                (0, i.jsx)(ex.A, {
                    user: t,
                    displayProfile: g,
                    themeType: eI.d.MODAL_V2,
                    className: eC.LX,
                    forceUserTheme: !0,
                    children: (0, i.jsx)("div", { className: eC.b8, style: { backgroundImage: `url(${b})` } }),
                }),
            (0, i.jsx)(es.N, {
                theme: p,
                children: (e) =>
                    (0, i.jsxs)("div", {
                        className: F()(eC.cq, e),
                        inert: !0,
                        children: [
                            (0, i.jsx)(eA.A, {
                                user: t,
                                guild: n,
                                ...v,
                                pendingAvatar: y,
                                pendingGlobalName: r,
                                pendingDisplayNameStyles: L.displayNameStyles,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: eC.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                            }),
                            (0, i.jsx)(eg.A, {
                                author: L,
                                message: (0, ef.rh)({
                                    ...(0, em.Ay)({ channelId: "1337", content: k.intl.string(j.default.h5Cuej) }),
                                    state: I.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: eC.OT,
                                previewGuildId: n?.id,
                            }),
                            (0, i.jsx)(e_.A, {
                                user: t,
                                guildId: n?.id,
                                nameplate: S,
                                nameplateData: null == S ? (N ?? x) : void 0,
                                pendingGlobalName: r,
                                pendingDisplayNameStyles: L.displayNameStyles,
                                isHighlighted: !0,
                                className: eC.qF,
                            }),
                        ],
                    }),
            }),
            (0, i.jsxs)("div", {
                className: eC.dI,
                children: [
                    (0, i.jsx)(Y.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: k.intl.format(j.default.prQba8, {
                            helpArticleLink: eE.A.getArticleURL(I.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, i.jsx)(eN, { darkPreview: f, onToggleTheme: w }),
                ],
            }),
        ],
    });
}
function eN(e) {
    let { darkPreview: t, onToggleTheme: n } = e,
        a = t ? I.NJ8.DARK : I.NJ8.LIGHT;
    return (0, i.jsx)(eo.I, {
        className: eC.xr,
        optionClassName: eC.$C,
        options: [
            {
                name: "",
                tooltip: k.intl.string(k.t.b8Cei3),
                value: I.NJ8.DARK,
                icon: ec.Z,
                className: a === I.NJ8.DARK ? eC.iB : void 0,
            },
            {
                name: "",
                tooltip: k.intl.string(k.t.K2sFfo),
                value: I.NJ8.LIGHT,
                icon: ed.F,
                className: a === I.NJ8.LIGHT ? eC.iB : void 0,
            },
        ],
        value: a,
        onChange: (e) => {
            let { value: t } = e;
            return n(t);
        },
        look: "pill",
    });
}
var eT = n(511698);
function ew(e) {
    let t,
        { transitionState: n, analyticsLocations: T, guildId: w, onClose: L, returnRef: R } = e,
        D = (0, o.bG)([g.default], () => g.default.getCurrentUser()),
        P =
            ((t = N.Ay.useName(D)),
            (0, o.bG)([C.A, S.Ay], () => {
                let e = C.A.getPendingChanges(w);
                return null != w ? (e.pendingNickname ?? S.Ay.getNick(w, D?.id)) : e.pendingGlobalName;
            }, [w, D]) ??
                t ??
                ""),
        O = (0, o.bG)([h.A], () => h.A.getGuild(w)),
        { userDisplayNameStyles: F, guildDisplayNameStyles: U, pendingDisplayNameStyles: G } = (0, m.B0)(D, w),
        B = void 0 !== G ? G : (U ?? F),
        [H, V] = a.useState(B?.fontId ?? s.x.DEFAULT),
        [W, Y] = a.useState(B?.effectId ?? l.z.SOLID),
        Z = (0, y._)(W),
        $ = (0, y._)(l.z.GRADIENT),
        J = B?.colors ?? [],
        [X, q] = a.useState(J.length > 0 && W !== l.z.GRADIENT ? J[0] : Z.defaultColors[0]),
        [Q, ee] = a.useState(J.length > 0 && W === l.z.GRADIENT ? J : $.defaultColors);
    (0, f.A)(
        { type: r.ImpressionTypes.POPOUT, name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: et } = (0, _.Ay)(T, p.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        en = a.useMemo(() => (W === l.z.GRADIENT ? Q : [X]), [W, Q, X]),
        ei = a.useMemo(() => H !== B?.fontId || W !== B?.effectId || !(0, c.v)(en, B?.colors ?? []), [B, H, W, en]),
        ea = (function (e) {
            let {
                hasChanges: t,
                selectedFontId: n,
                selectedEffectId: i,
                selectedColors: r,
                defaultColor: o,
                guildId: c,
                isTryItOut: d,
                onClose: u,
            } = e;
            return a.useCallback(() => {
                if (t) {
                    let e = r;
                    i === l.z.SOLID && r.length > 0 && r[0] === o && (e = []);
                    let t = { fontId: n, effectId: i, colors: e };
                    d ? (0, x.EW)(t) : (0, E.p)({ guildId: c, displayNameStyles: t }),
                        A.default.track(I.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                            font_name: s.x[n],
                            effect_name: l.z[i],
                            colors: r,
                        }),
                        u?.();
                }
            }, [t, n, i, r, o, u, c, d]);
        })({
            hasChanges: ei,
            selectedFontId: H,
            selectedEffectId: W,
            selectedColors: en,
            defaultColor: Z.defaultColors[0],
            guildId: w,
            onClose: L,
        }),
        el = a.useCallback(() => {
            let { fontId: e, effectId: t, colors: n } = (0, v.gN)();
            V(e), Y(t), t === l.z.GRADIENT ? ee(n) : q(n[0]), A.default.track(I.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [ee, q]),
        es = a.useCallback(
            (e) => {
                Y(e);
            },
            [Y],
        ),
        eo = a.useCallback(
            (e) => {
                W === l.z.GRADIENT ? ee(e) : q(e[0]);
            },
            [W, ee, q],
        );
    return null == D
        ? null
        : (0, i.jsx)(_.f5, {
              value: et,
              children: (0, i.jsx)(b.l.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, i.jsxs)(d.EO, {
                      "data-migration-pending": !0,
                      transitionState: n,
                      size: d.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: eT.CR,
                      returnRef: R,
                      children: [
                          (0, i.jsxs)(d.$m, {
                              "data-migration-pending": !0,
                              className: eT.jE,
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: eT.w1,
                                      children: [
                                          (0, i.jsx)(d.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: eT.bV,
                                              children: (0, i.jsx)(u.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: k.intl.string(j.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, i.jsx)(K, {
                                              selectedFontId: H,
                                              setSelectedFontId: V,
                                              displayName: P,
                                              className: eT._,
                                          }),
                                          (0, i.jsx)(z, {
                                              selectedEffectId: W,
                                              setSelectedEffectId: es,
                                              className: eT._,
                                          }),
                                          (0, i.jsx)(M, {
                                              selectedColors: en,
                                              setSelectedColors: eo,
                                              selectedEffectId: W,
                                              className: eT._,
                                              defaultColor: Z.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(eS, {
                                      user: D,
                                      guild: O,
                                      displayName: P,
                                      selectedFontId: H,
                                      selectedEffectId: W,
                                      selectedColors: W === l.z.SOLID && (0, c.v)(en, Z.defaultColors) ? [] : en,
                                      onClose: L,
                                  }),
                              ],
                          }),
                          (0, i.jsx)(er, {
                              onApply: ea,
                              onSurpriseMe: el,
                              onClose: L,
                              canApply: ei,
                              analyticsLocations: et,
                          }),
                      ],
                  }),
              }),
          });
}

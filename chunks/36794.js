a.d(s, { default: () => ev });
var l = a(627968),
    t = a(64700),
    i = a(562708),
    n = a(508425),
    r = a(559949),
    d = a(17928),
    o = a(52133),
    c = a(935462),
    m = a(534514),
    u = a(793574),
    N = a(688810),
    A = a(139286),
    x = a(919395),
    f = a(71393),
    g = a(287809),
    p = a(174459),
    h = a(871162),
    E = a(945096),
    S = a(383197),
    C = a(207803),
    j = a(84540),
    I = a(652215),
    T = a(836602),
    _ = a(696451),
    L = a(427262),
    D = a(403581),
    v = a(661531),
    y = a(48736),
    k = a(750656),
    b = a(864386),
    P = a(375708),
    G = a(250229),
    M = a(257170);
function O(e) {
    let { selectedColors: s, setSelectedColors: a, defaultColor: i, selectedEffectId: r, className: d } = e,
        o = r === n.z.GRADIENT,
        c = (0, t.useCallback)(
            (e) => {
                a([e]), p.default.track(I.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: e === i, colors: [e] });
            },
            [a, i],
        ),
        u = (0, t.useCallback)(
            (e) => {
                a(e), p.default.track(I.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: !1, colors: e });
            },
            [a],
        );
    return (0, l.jsxs)("div", {
        className: d,
        children: [
            (0, l.jsxs)(m.D, {
                variant: "heading-md/semibold",
                className: M.s,
                children: [
                    P.intl.string(b.default.JOpi7z),
                    (0, l.jsx)(D.t, { size: "xs", color: v.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(y.default, {
                className: G.Ei,
                colorContainerClassName: G.rx,
                defaultColor: i,
                colors: o ? k.Wf : k.Jl,
                value: s[0],
                secondaryValue: s[1] ?? void 0,
                onChange: c,
                onChangeGradientColors: u,
                isGradient: o,
                gradientButtonClassName: G.xr,
                gradientDegrees: 90,
                allowBlackCustomColor: !0,
                customPickerPosition: "top",
            }),
        ],
    });
}
var R = a(503698),
    z = a.n(R),
    w = a(331322),
    Y = a(939249),
    F = a(922301),
    U = a(368919),
    H = a(700090);
function J(e) {
    let { selectedEffectId: s, setSelectedEffectId: a, className: t } = e;
    return (0, l.jsxs)("div", {
        className: t,
        children: [
            (0, l.jsxs)(m.D, {
                variant: "heading-md/semibold",
                className: M.s,
                children: [
                    P.intl.string(b.default["1wilM1"]),
                    (0, l.jsx)(D.t, { size: "xs", color: v.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(w.B, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                gap: 8,
                children: k.re.map((e) => (0, l.jsx)(B, { effectId: e, selected: e === s, onClick: () => a(e) }, e)),
            }),
        ],
    });
}
function B(e) {
    let { effectId: s, selected: a, onClick: t } = e,
        i = (0, S._)(s);
    return (0, l.jsx)(
        Y.D,
        {
            className: z()(H.Tw, { [H.wH]: a }),
            onClick: t,
            children: (0, l.jsx)(U.A, {
                userName: i.name,
                effectDisplayType: F.G.STATIC,
                displayNameStyles: i.previewStyles,
                textClassName: H.tr,
                inProfile: !0,
            }),
        },
        s,
    );
}
var K = a(834730),
    V = a(885574),
    X = a(990078),
    Q = a(252545),
    W = a(699006);
function $(e) {
    let { selectedFontId: s, setSelectedFontId: a, displayName: t, className: i } = e,
        n = s !== r.x.DEFAULT,
        d = (0, E.Xr)(t);
    return (0, l.jsxs)("div", {
        className: i,
        children: [
            (0, l.jsxs)(m.D, {
                variant: "heading-md/semibold",
                className: M.s,
                children: [
                    P.intl.string(b.default.nP0ngb),
                    (0, l.jsx)(D.t, { size: "xs", color: v.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(w.B, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                children: k.rA.map((e) => {
                    let t = (0, Q.p)(e),
                        i = e === s;
                    return (0, l.jsx)(
                        X.m,
                        {
                            text: P.intl.string(t.name),
                            asContainer: !0,
                            children: (0, l.jsx)(Y.D, {
                                className: z()(W.SO, { [W.wH]: i }),
                                onClick: () => a(e),
                                "aria-label": P.intl.string(t.name),
                                children: (0, l.jsx)(K.E, {
                                    variant: "text-lg/semibold",
                                    color: i ? "text-strong" : "text-default",
                                    className: z()(W.FH, t.className),
                                    children: "Gg",
                                }),
                            }),
                        },
                        e,
                    );
                }),
            }),
            n &&
                d &&
                (0, l.jsxs)("div", {
                    className: W.Lb,
                    children: [
                        (0, l.jsx)(V.m, { size: "lg" }),
                        (0, l.jsx)(K.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: P.intl.string(b.default["+O1xL2"]),
                        }),
                    ],
                }),
        ],
    });
}
var q = a(821609),
    Z = a(908803),
    ee = a(87719),
    es = a(465794),
    ea = a(757036),
    el = a(788868),
    et = a(277041);
function ei(e) {
    let { onApply: s, onSurpriseMe: a, onClose: t, canApply: i } = e,
        n = (0, ea.L)(el.PremiumTypes.TIER_2),
        r = (0, l.jsx)(q.$, {
            variant: "secondary",
            size: "md",
            onClick: a,
            icon: { type: "rive", asset: Z.m, riveProps: { dataBinding: { fill: v.A.colors.ICON_STRONG } } },
            text: P.intl.string(b.default.NOGFds),
        }),
        d = (0, l.jsxs)("div", {
            className: et.k0,
            children: [
                r,
                (0, l.jsx)(X.m, {
                    text: P.intl.string(b.default.cVTpnj),
                    shouldShow: !i,
                    children: (0, l.jsx)(q.$, {
                        onClick: s,
                        disabled: !i,
                        text: P.intl.string(P.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        o = (0, l.jsxs)("div", {
            className: et.UX,
            children: [
                (0, l.jsxs)("div", {
                    className: et.iQ,
                    children: [
                        (0, l.jsx)(X.m, {
                            text: P.intl.string(P.t["5AFxuK"]),
                            children: (0, l.jsx)(D.t, { size: "md", color: v.A.colors.ICON_STRONG }),
                        }),
                        (0, l.jsx)(K.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: et.h_,
                            children: P.intl.format(b.default.PWf0xS, {
                                onClickNitro: () => {
                                    p.default.track(I.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, ee.x)(t);
                                },
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: et.UD,
                    children: [
                        r,
                        (0, l.jsx)(es.A, {
                            premiumModalAnalyticsLocation: {
                                section: I.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: I.ZSU.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: el.pe.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, l.jsx)(c.jl, { "data-migration-pending": !0, className: et.qr, children: n ? d : o });
}
var en = a(366010),
    er = a(43990),
    ed = a(629584),
    eo = a(943255),
    ec = a(575181),
    em = a(736653),
    eu = a(780898),
    eN = a(344346),
    eA = a(320095),
    ex = a(963852),
    ef = a(763754),
    eg = a(20851),
    ep = a(986687),
    eh = a(101058),
    eE = a(999291),
    eS = a(686189),
    eC = a(946356),
    ej = a(975571),
    eI = a(996988),
    eT = a(471260);
function e_(e) {
    let {
            user: s,
            guild: a,
            displayName: i,
            selectedFontId: n,
            selectedEffectId: r,
            selectedColors: o,
            onClose: m,
        } = e,
        u = (0, em.Ay)(),
        N = (0, en.M)(u),
        [A, f] = (0, t.useState)(N),
        g = (0, eE.Ay)(s.id, null),
        { bannerSrc: h } = (0, eS.A)({ displayProfile: g, size: 413, canAnimate: !1 }),
        E = (0, d.cf)([T.A], () => T.A.getPendingChanges(a?.id)),
        S = (0, eh.V7)({ userId: s.id, image: E.pendingAvatar }),
        { userNameplate: C, guildNameplate: j, pendingNameplate: _ } = (0, x.rv)(s, a?.id),
        L = (0, eu.WK)(j);
    A && !N ? (u = I.NJ8.DARK) : !A && N && (u = I.NJ8.LIGHT);
    let D = (0, t.useCallback)(() => {
            p.default.track(I.HAw.DISPLAY_NAME_STYLES_CLOSED), m();
        }, [m]),
        v = (0, t.useCallback)((e) => {
            f(e === I.NJ8.DARK), p.default.track(I.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === I.NJ8.DARK });
        }, []),
        y = (0, t.useMemo)(
            () => ({ ...(0, ef.FT)(s, null), nick: i, displayNameStyles: { fontId: n, effectId: r, colors: o } }),
            [s, n, r, o, i],
        );
    return (0, l.jsxs)("div", {
        className: eT._l,
        children: [
            (0, l.jsx)(c.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: eT.bV,
                children: (0, l.jsx)(c.s_, { "data-migration-pending": !0, onClick: D, innerClassName: eT.b }),
            }),
            null != h &&
                (0, l.jsx)(eC.A, {
                    user: s,
                    displayProfile: g,
                    themeType: eI.d.MODAL_V2,
                    className: eT.LX,
                    forceUserTheme: !0,
                    children: (0, l.jsx)("div", { className: eT.b8, style: { backgroundImage: `url(${h})` } }),
                }),
            (0, l.jsx)(er.N, {
                theme: u,
                children: (e) =>
                    (0, l.jsxs)("div", {
                        className: z()(eT.cq, e),
                        inert: !0,
                        children: [
                            (0, l.jsx)(ep.A, {
                                user: s,
                                guild: a,
                                ...E,
                                pendingAvatar: S,
                                pendingGlobalName: i,
                                pendingDisplayNameStyles: y.displayNameStyles,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: eT.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                                hideProfileFrame: !0,
                            }),
                            (0, l.jsx)(eg.A, {
                                author: y,
                                message: (0, eA.rh)({
                                    ...(0, ex.Ay)({ channelId: "1337", content: P.intl.string(b.default.h5Cuej) }),
                                    state: I.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: eT.OT,
                                previewGuildId: a?.id,
                            }),
                            (0, l.jsx)(eN.A, {
                                user: s,
                                guildId: a?.id,
                                nameplate: _,
                                nameplateData: null == _ ? (L ?? C) : void 0,
                                pendingGlobalName: i,
                                pendingDisplayNameStyles: y.displayNameStyles,
                                isHighlighted: !0,
                                className: eT.qF,
                            }),
                        ],
                    }),
            }),
            (0, l.jsxs)("div", {
                className: eT.dI,
                children: [
                    (0, l.jsx)(K.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: P.intl.format(b.default.prQba8, {
                            helpArticleLink: ej.A.getArticleURL(I.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, l.jsx)(eL, { darkPreview: A, onToggleTheme: v }),
                ],
            }),
        ],
    });
}
function eL(e) {
    let { darkPreview: s, onToggleTheme: a } = e,
        t = s ? I.NJ8.DARK : I.NJ8.LIGHT;
    return (0, l.jsx)(ed.I, {
        className: eT.xr,
        optionClassName: eT.$C,
        options: [
            {
                name: "",
                tooltip: P.intl.string(P.t.b8Cei3),
                value: I.NJ8.DARK,
                icon: eo.Z,
                className: t === I.NJ8.DARK ? eT.iB : void 0,
            },
            {
                name: "",
                tooltip: P.intl.string(P.t.K2sFfo),
                value: I.NJ8.LIGHT,
                icon: ec.F,
                className: t === I.NJ8.LIGHT ? eT.iB : void 0,
            },
        ],
        value: t,
        onChange: (e) => {
            let { value: s } = e;
            return a(s);
        },
        look: "pill",
    });
}
var eD = a(511698);
function ev(e) {
    let s,
        { transitionState: a, analyticsLocations: D, guildId: v, onClose: y, returnRef: k } = e,
        G = (0, d.bG)([g.default], () => g.default.getCurrentUser()),
        M =
            ((s = L.Ay.useName(G)),
            (0, d.bG)([T.A, _.Ay], () => {
                let e = T.A.getPendingChanges(v);
                return null != v ? (e.pendingNickname ?? _.Ay.getNick(v, G?.id)) : e.pendingGlobalName;
            }, [v, G]) ??
                s ??
                ""),
        R = (0, d.bG)([f.A], () => f.A.getGuild(v)),
        { userDisplayNameStyles: z, guildDisplayNameStyles: w, pendingDisplayNameStyles: Y } = (0, x.B0)(G, v),
        F = void 0 !== Y ? Y : (w ?? z),
        [U, H] = t.useState(F?.fontId ?? r.x.DEFAULT),
        [B, K] = t.useState(F?.effectId ?? n.z.SOLID),
        V = (0, S._)(B),
        X = (0, S._)(n.z.GRADIENT),
        Q = F?.colors ?? [],
        [W, q] = t.useState(Q.length > 0 && B !== n.z.GRADIENT ? Q[0] : V.defaultColors[0]),
        [Z, ee] = t.useState(Q.length > 0 && B === n.z.GRADIENT ? Q : X.defaultColors);
    (0, A.A)(
        { type: i.ImpressionTypes.POPOUT, name: i.ImpressionNames.DISPLAY_NAME_STYLES_MODAL },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: es } = (0, N.Ay)(D, u.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        ea = t.useMemo(() => (B === n.z.GRADIENT ? Z : [W]), [B, Z, W]),
        el = t.useMemo(() => U !== F?.fontId || B !== F?.effectId || !(0, o.v)(ea, F?.colors ?? []), [F, U, B, ea]),
        et = (function (e) {
            let {
                hasChanges: s,
                selectedFontId: a,
                selectedEffectId: l,
                selectedColors: i,
                defaultColor: d,
                guildId: o,
                isTryItOut: c,
                onClose: m,
            } = e;
            return t.useCallback(() => {
                if (s) {
                    let e = i;
                    l === n.z.SOLID && i.length > 0 && i[0] === d && (e = []);
                    let s = { fontId: a, effectId: l, colors: e };
                    c ? (0, C.EW)(s) : (0, j.p)({ guildId: o, displayNameStyles: s }),
                        p.default.track(I.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                            font_name: r.x[a],
                            effect_name: n.z[l],
                            colors: i,
                        }),
                        m?.();
                }
            }, [s, a, l, i, d, m, o, c]);
        })({
            hasChanges: el,
            selectedFontId: U,
            selectedEffectId: B,
            selectedColors: ea,
            defaultColor: V.defaultColors[0],
            guildId: v,
            onClose: y,
        }),
        en = t.useCallback(() => {
            let { fontId: e, effectId: s, colors: a } = (0, E.gN)();
            H(e), K(s), s === n.z.GRADIENT ? ee(a) : q(a[0]), p.default.track(I.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [ee, q]),
        er = t.useCallback(
            (e) => {
                K(e);
            },
            [K],
        ),
        ed = t.useCallback(
            (e) => {
                B === n.z.GRADIENT ? ee(e) : q(e[0]);
            },
            [B, ee, q],
        );
    return null == G
        ? null
        : (0, l.jsx)(N.f5, {
              value: es,
              children: (0, l.jsx)(h.l.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, l.jsxs)(c.EO, {
                      "data-migration-pending": !0,
                      transitionState: a,
                      size: c.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: eD.CR,
                      returnRef: k,
                      children: [
                          (0, l.jsxs)(c.$m, {
                              "data-migration-pending": !0,
                              className: eD.jE,
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: eD.w1,
                                      children: [
                                          (0, l.jsx)(c.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: eD.bV,
                                              children: (0, l.jsx)(m.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: P.intl.string(b.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, l.jsx)($, {
                                              selectedFontId: U,
                                              setSelectedFontId: H,
                                              displayName: M,
                                              className: eD._,
                                          }),
                                          (0, l.jsx)(J, {
                                              selectedEffectId: B,
                                              setSelectedEffectId: er,
                                              className: eD._,
                                          }),
                                          (0, l.jsx)(O, {
                                              selectedColors: ea,
                                              setSelectedColors: ed,
                                              selectedEffectId: B,
                                              className: eD._,
                                              defaultColor: V.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(e_, {
                                      user: G,
                                      guild: R,
                                      displayName: M,
                                      selectedFontId: U,
                                      selectedEffectId: B,
                                      selectedColors: B === n.z.SOLID && (0, o.v)(ea, V.defaultColors) ? [] : ea,
                                      onClose: y,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(ei, {
                              onApply: et,
                              onSurpriseMe: en,
                              onClose: y,
                              canApply: el,
                              analyticsLocations: es,
                          }),
                      ],
                  }),
              }),
          });
}

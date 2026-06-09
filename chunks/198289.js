s.d(a, { default: () => ey });
var l = s(627968),
    t = s(64700),
    i = s(562708),
    n = s(508425),
    r = s(559949),
    d = s(17928),
    o = s(52133),
    c = s(935462),
    m = s(534514),
    u = s(793574),
    N = s(688810),
    A = s(139286),
    x = s(919395),
    f = s(71393),
    g = s(287809),
    p = s(174459),
    h = s(871162),
    S = s(945096);
let E = (0, s(945810).mj)({
    name: "2026-05-dns-surprise-me-weighted-randomizer",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var C = s(383197),
    j = s(207803),
    I = s(84540),
    T = s(652215),
    _ = s(836602),
    L = s(696451),
    v = s(427262),
    D = s(403581),
    y = s(661531),
    b = s(48736),
    k = s(750656),
    P = s(864386),
    G = s(375708),
    M = s(250229),
    O = s(257170);
function R(e) {
    let { selectedColors: a, setSelectedColors: s, defaultColor: i, selectedEffectId: r, className: d } = e,
        o = r === n.z.GRADIENT,
        c = (0, t.useCallback)(
            (e) => {
                s([e]), p.default.track(T.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: e === i, colors: [e] });
            },
            [s, i],
        ),
        u = (0, t.useCallback)(
            (e) => {
                s(e), p.default.track(T.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: !1, colors: e });
            },
            [s],
        );
    return (0, l.jsxs)("div", {
        className: d,
        children: [
            (0, l.jsxs)(m.D, {
                variant: "heading-md/semibold",
                className: O.s,
                children: [
                    G.intl.string(P.default.JOpi7z),
                    (0, l.jsx)(D.t, { size: "xs", color: y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(b.default, {
                className: M.Ei,
                colorContainerClassName: M.rx,
                defaultColor: i,
                colors: o ? k.Wf : k.Jl,
                value: a[0],
                secondaryValue: a[1] ?? void 0,
                onChange: c,
                onChangeGradientColors: u,
                isGradient: o,
                gradientButtonClassName: M.xr,
                gradientDegrees: 90,
                allowBlackCustomColor: !0,
                customPickerPosition: "top",
            }),
        ],
    });
}
var z = s(503698),
    w = s.n(z),
    Y = s(331322),
    F = s(939249),
    U = s(922301),
    H = s(368919),
    J = s(700090);
function B(e) {
    let { selectedEffectId: a, setSelectedEffectId: s, className: t } = e;
    return (0, l.jsxs)("div", {
        className: t,
        children: [
            (0, l.jsxs)(m.D, {
                variant: "heading-md/semibold",
                className: O.s,
                children: [
                    G.intl.string(P.default["1wilM1"]),
                    (0, l.jsx)(D.t, { size: "xs", color: y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(Y.B, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                gap: 8,
                children: k.re.map((e) => (0, l.jsx)(K, { effectId: e, selected: e === a, onClick: () => s(e) }, e)),
            }),
        ],
    });
}
function K(e) {
    let { effectId: a, selected: s, onClick: t } = e,
        i = (0, C._)(a);
    return (0, l.jsx)(
        F.D,
        {
            className: w()(J.Tw, { [J.wH]: s }),
            onClick: t,
            children: (0, l.jsx)(H.A, {
                userName: i.name,
                effectDisplayType: U.G.STATIC,
                displayNameStyles: i.previewStyles,
                textClassName: J.tr,
                inProfile: !0,
            }),
        },
        a,
    );
}
var V = s(834730),
    X = s(885574),
    Q = s(990078),
    W = s(73392),
    $ = s(699006);
function q(e) {
    let { selectedFontId: a, setSelectedFontId: s, displayName: t, className: i } = e,
        n = a !== r.x.DEFAULT,
        d = (0, S.Xr)(t);
    return (0, l.jsxs)("div", {
        className: i,
        children: [
            (0, l.jsxs)(m.D, {
                variant: "heading-md/semibold",
                className: O.s,
                children: [
                    G.intl.string(P.default.nP0ngb),
                    (0, l.jsx)(D.t, { size: "xs", color: y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(Y.B, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                children: k.rA.map((e) => {
                    let t = (0, W.p)(e),
                        i = e === a;
                    return (0, l.jsx)(
                        Q.m,
                        {
                            text: G.intl.string(t.name),
                            asContainer: !0,
                            children: (0, l.jsx)(F.D, {
                                className: w()($.SO, { [$.wH]: i }),
                                onClick: () => s(e),
                                "aria-label": G.intl.string(t.name),
                                children: (0, l.jsx)(V.E, {
                                    variant: "text-lg/semibold",
                                    color: i ? "text-strong" : "text-default",
                                    className: w()($.FH, t.className),
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
                    className: $.Lb,
                    children: [
                        (0, l.jsx)(X.m, { size: "lg" }),
                        (0, l.jsx)(V.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: G.intl.string(P.default["+O1xL2"]),
                        }),
                    ],
                }),
        ],
    });
}
var Z = s(821609),
    ee = s(908803),
    ea = s(87719),
    es = s(465794),
    el = s(757036),
    et = s(788868),
    ei = s(277041);
function en(e) {
    let { onApply: a, onSurpriseMe: s, onClose: t, canApply: i } = e,
        n = (0, el.L)(et.PremiumTypes.TIER_2),
        r = (0, l.jsx)(Z.$, {
            variant: "secondary",
            size: "md",
            onClick: s,
            icon: { type: "rive", asset: ee.m, riveProps: { dataBinding: { fill: y.A.colors.ICON_STRONG } } },
            text: G.intl.string(P.default.NOGFds),
        }),
        d = (0, l.jsxs)("div", {
            className: ei.k0,
            children: [
                r,
                (0, l.jsx)(Q.m, {
                    text: G.intl.string(P.default.cVTpnj),
                    shouldShow: !i,
                    children: (0, l.jsx)(Z.$, {
                        onClick: a,
                        disabled: !i,
                        text: G.intl.string(G.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        o = (0, l.jsxs)("div", {
            className: ei.UX,
            children: [
                (0, l.jsxs)("div", {
                    className: ei.iQ,
                    children: [
                        (0, l.jsx)(Q.m, {
                            text: G.intl.string(G.t["5AFxuK"]),
                            children: (0, l.jsx)(D.t, { size: "md", color: y.A.colors.ICON_STRONG }),
                        }),
                        (0, l.jsx)(V.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: ei.h_,
                            children: G.intl.format(P.default.PWf0xS, {
                                onClickNitro: () => {
                                    p.default.track(T.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, ea.x)(t);
                                },
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: ei.UD,
                    children: [
                        r,
                        (0, l.jsx)(es.A, {
                            premiumModalAnalyticsLocation: {
                                section: T.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: T.ZSU.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: et.pe.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, l.jsx)(c.jl, { "data-migration-pending": !0, className: ei.qr, children: n ? d : o });
}
var er = s(366010),
    ed = s(43990),
    eo = s(629584),
    ec = s(943255),
    em = s(575181),
    eu = s(736653),
    eN = s(780898),
    eA = s(344346),
    ex = s(320095),
    ef = s(963852),
    eg = s(763754),
    ep = s(20851),
    eh = s(986687),
    eS = s(101058),
    eE = s(999291),
    eC = s(686189),
    ej = s(946356),
    eI = s(975571),
    eT = s(996988),
    e_ = s(471260);
function eL(e) {
    let {
            user: a,
            guild: s,
            displayName: i,
            selectedFontId: n,
            selectedEffectId: r,
            selectedColors: o,
            onClose: m,
        } = e,
        u = (0, eu.Ay)(),
        N = (0, er.M)(u),
        [A, f] = (0, t.useState)(N),
        g = (0, eE.Ay)(a.id, null),
        { bannerSrc: h } = (0, eC.A)({ displayProfile: g, size: 413, canAnimate: !1 }),
        S = (0, d.cf)([_.A], () => _.A.getPendingChanges(s?.id)),
        E = (0, eS.V7)({ userId: a.id, image: S.pendingAvatar }),
        { userNameplate: C, guildNameplate: j, pendingNameplate: I } = (0, x.rv)(a, s?.id),
        L = (0, eN.WK)(j);
    A && !N ? (u = T.NJ8.DARK) : !A && N && (u = T.NJ8.LIGHT);
    let v = (0, t.useCallback)(() => {
            p.default.track(T.HAw.DISPLAY_NAME_STYLES_CLOSED), m();
        }, [m]),
        D = (0, t.useCallback)((e) => {
            f(e === T.NJ8.DARK), p.default.track(T.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === T.NJ8.DARK });
        }, []),
        y = (0, t.useMemo)(
            () => ({ ...(0, eg.FT)(a, null), nick: i, displayNameStyles: { fontId: n, effectId: r, colors: o } }),
            [a, n, r, o, i],
        );
    return (0, l.jsxs)("div", {
        className: e_._l,
        children: [
            (0, l.jsx)(c.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: e_.bV,
                children: (0, l.jsx)(c.s_, { "data-migration-pending": !0, onClick: v, innerClassName: e_.b }),
            }),
            null != h &&
                (0, l.jsx)(ej.A, {
                    user: a,
                    displayProfile: g,
                    themeType: eT.d.MODAL_V2,
                    className: e_.LX,
                    forceUserTheme: !0,
                    children: (0, l.jsx)("div", { className: e_.b8, style: { backgroundImage: `url(${h})` } }),
                }),
            (0, l.jsx)(ed.N, {
                theme: u,
                children: (e) =>
                    (0, l.jsxs)("div", {
                        className: w()(e_.cq, e),
                        inert: !0,
                        children: [
                            (0, l.jsx)(eh.A, {
                                user: a,
                                guild: s,
                                ...S,
                                pendingAvatar: E,
                                pendingGlobalName: i,
                                pendingDisplayNameStyles: y.displayNameStyles,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: e_.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                                hideProfileFrame: !0,
                            }),
                            (0, l.jsx)(ep.A, {
                                author: y,
                                message: (0, ex.rh)({
                                    ...(0, ef.Ay)({ channelId: "1337", content: G.intl.string(P.default.h5Cuej) }),
                                    state: T.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: e_.OT,
                                previewGuildId: s?.id,
                            }),
                            (0, l.jsx)(eA.A, {
                                user: a,
                                guildId: s?.id,
                                nameplate: I,
                                nameplateData: null == I ? (L ?? C) : void 0,
                                pendingGlobalName: i,
                                pendingDisplayNameStyles: y.displayNameStyles,
                                isHighlighted: !0,
                                className: e_.qF,
                            }),
                        ],
                    }),
            }),
            (0, l.jsxs)("div", {
                className: e_.dI,
                children: [
                    (0, l.jsx)(V.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: G.intl.format(P.default.prQba8, {
                            helpArticleLink: eI.A.getArticleURL(T.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, l.jsx)(ev, { darkPreview: A, onToggleTheme: D }),
                ],
            }),
        ],
    });
}
function ev(e) {
    let { darkPreview: a, onToggleTheme: s } = e,
        t = a ? T.NJ8.DARK : T.NJ8.LIGHT;
    return (0, l.jsx)(eo.I, {
        className: e_.xr,
        optionClassName: e_.$C,
        options: [
            {
                name: "",
                tooltip: G.intl.string(G.t.b8Cei3),
                value: T.NJ8.DARK,
                icon: ec.Z,
                className: t === T.NJ8.DARK ? e_.iB : void 0,
            },
            {
                name: "",
                tooltip: G.intl.string(G.t.K2sFfo),
                value: T.NJ8.LIGHT,
                icon: em.F,
                className: t === T.NJ8.LIGHT ? e_.iB : void 0,
            },
        ],
        value: t,
        onChange: (e) => {
            let { value: a } = e;
            return s(a);
        },
        look: "pill",
    });
}
var eD = s(511698);
function ey(e) {
    let a,
        { transitionState: s, analyticsLocations: D, guildId: y, onClose: b, returnRef: k } = e,
        M = (0, d.bG)([g.default], () => g.default.getCurrentUser()),
        O =
            ((a = v.Ay.useName(M)),
            (0, d.bG)([_.A, L.Ay], () => {
                let e = _.A.getPendingChanges(y);
                return null != y ? (e.pendingNickname ?? L.Ay.getNick(y, M?.id)) : e.pendingGlobalName;
            }, [y, M]) ??
                a ??
                ""),
        z = (0, d.bG)([f.A], () => f.A.getGuild(y)),
        { userDisplayNameStyles: w, guildDisplayNameStyles: Y, pendingDisplayNameStyles: F } = (0, x.B0)(M, y),
        U = void 0 !== F ? F : (Y ?? w),
        [H, J] = t.useState(U?.fontId ?? r.x.DEFAULT),
        [K, V] = t.useState(U?.effectId ?? n.z.SOLID),
        X = (0, C._)(K),
        Q = (0, C._)(n.z.GRADIENT),
        W = U?.colors ?? [],
        [$, Z] = t.useState(W.length > 0 && K !== n.z.GRADIENT ? W[0] : X.defaultColors[0]),
        [ee, ea] = t.useState(W.length > 0 && K === n.z.GRADIENT ? W : Q.defaultColors);
    (0, A.A)(
        { type: i.ImpressionTypes.POPOUT, name: i.ImpressionNames.DISPLAY_NAME_STYLES_MODAL },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: es } = (0, N.Ay)(D, u.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        el = t.useMemo(() => (K === n.z.GRADIENT ? ee : [$]), [K, ee, $]),
        et = t.useMemo(() => H !== U?.fontId || K !== U?.effectId || !(0, o.v)(el, U?.colors ?? []), [U, H, K, el]),
        { enabled: ei } = E.useConfig({ location: "DisplayNameStylesModal" }),
        er = (function (e) {
            let {
                hasChanges: a,
                selectedFontId: s,
                selectedEffectId: l,
                selectedColors: i,
                defaultColor: d,
                guildId: o,
                isTryItOut: c,
                onClose: m,
            } = e;
            return t.useCallback(() => {
                if (a) {
                    let e = i;
                    l === n.z.SOLID && i.length > 0 && i[0] === d && (e = []);
                    let a = { fontId: s, effectId: l, colors: e };
                    c ? (0, j.EW)(a) : (0, I.p)({ guildId: o, displayNameStyles: a }),
                        p.default.track(T.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                            font_name: r.x[s],
                            effect_name: n.z[l],
                            colors: i,
                        }),
                        m?.();
                }
            }, [a, s, l, i, d, m, o, c]);
        })({
            hasChanges: et,
            selectedFontId: H,
            selectedEffectId: K,
            selectedColors: el,
            defaultColor: X.defaultColors[0],
            guildId: y,
            onClose: b,
        }),
        ed = t.useCallback(() => {
            let { fontId: e, effectId: a, colors: s } = (0, S.gN)(ei);
            J(e), V(a), a === n.z.GRADIENT ? ea(s) : Z(s[0]), p.default.track(T.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [ei, ea, Z]),
        eo = t.useCallback(
            (e) => {
                V(e);
            },
            [V],
        ),
        ec = t.useCallback(
            (e) => {
                K === n.z.GRADIENT ? ea(e) : Z(e[0]);
            },
            [K, ea, Z],
        );
    return null == M
        ? null
        : (0, l.jsx)(N.f5, {
              value: es,
              children: (0, l.jsx)(h.l.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, l.jsxs)(c.EO, {
                      "data-migration-pending": !0,
                      transitionState: s,
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
                                                  children: G.intl.string(P.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, l.jsx)(q, {
                                              selectedFontId: H,
                                              setSelectedFontId: J,
                                              displayName: O,
                                              className: eD._,
                                          }),
                                          (0, l.jsx)(B, {
                                              selectedEffectId: K,
                                              setSelectedEffectId: eo,
                                              className: eD._,
                                          }),
                                          (0, l.jsx)(R, {
                                              selectedColors: el,
                                              setSelectedColors: ec,
                                              selectedEffectId: K,
                                              className: eD._,
                                              defaultColor: X.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(eL, {
                                      user: M,
                                      guild: z,
                                      displayName: O,
                                      selectedFontId: H,
                                      selectedEffectId: K,
                                      selectedColors: K === n.z.SOLID && (0, o.v)(el, X.defaultColors) ? [] : el,
                                      onClose: b,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(en, {
                              onApply: er,
                              onSurpriseMe: ed,
                              onClose: b,
                              canApply: et,
                              analyticsLocations: es,
                          }),
                      ],
                  }),
              }),
          });
}

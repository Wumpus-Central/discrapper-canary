l.d(s, { default: () => eP });
var a = l(627968),
    t = l(64700),
    i = l(503698),
    n = l.n(i),
    r = l(562708),
    d = l(508425),
    o = l(559949),
    c = l(17928),
    m = l(52133),
    u = l(935462),
    x = l(534514),
    N = l(793574),
    f = l(688810),
    A = l(139286),
    p = l(919395),
    S = l(71393),
    g = l(287809),
    h = l(174459),
    E = l(871162),
    C = l(248778),
    L = l(750656);
let _ = [
        o.x.DEFAULT,
        o.x.ZILLA_SLAB,
        o.x.CHERRY_BOMB,
        o.x.CHICLE,
        o.x.MUSEO_MODERNO,
        o.x.NEO_CASTEL,
        o.x.PIXELIFY,
        o.x.SINISTRE,
    ],
    j = [..._, ...L._k];
function I() {
    let e = (0, C.ux)("font-order");
    return t.useMemo(() => (e ? j : _), [e]);
}
var T = l(945096);
let v = (0, l(945810).mj)({
    name: "2026-05-dns-surprise-me-weighted-randomizer",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var D = l(898985),
    y = l(430571),
    M = l(207803),
    b = l(84540),
    k = l(652215),
    P = l(836602),
    O = l(696451),
    R = l(427262),
    G = l(403581),
    Y = l(661531),
    w = l(48736),
    z = l(864386),
    U = l(375708),
    F = l(250229),
    H = l(257170);
function J(e) {
    let { selectedColors: s, setSelectedColors: l, defaultColor: i, selectedEffectId: n, className: r } = e,
        o = (0, T.as)(n) > 1,
        c = n === d.z.PRISM ? "210px" : n === d.z.GUMMY ? "168px" : "104px",
        m = (0, t.useMemo)(() => (0, L.ii)(n).map((e) => ({ colors: e, name: "" })), [n]),
        u = (0, t.useCallback)(
            (e) => {
                l([e]), h.default.track(k.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: e === i, colors: [e] });
            },
            [l, i],
        ),
        N = (0, t.useCallback)(
            (e) => {
                l(e), h.default.track(k.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: !1, colors: e });
            },
            [l],
        );
    return (0, a.jsxs)("div", {
        className: r,
        children: [
            (0, a.jsxs)(x.D, {
                variant: "heading-md/semibold",
                className: H.s,
                children: [
                    U.intl.string(z.default.JOpi7z),
                    (0, a.jsx)(G.t, { size: "xs", color: Y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, a.jsx)(w.default, {
                className: F.Ei,
                colorContainerClassName: F.rx,
                defaultColor: i,
                colors: o ? m : L.Jl,
                value: s[0],
                gradientColors: s,
                onChange: u,
                onChangeGradientColors: N,
                isGradient: o,
                gradientWidth: c,
                gradientDegrees: 90,
                allowBlackCustomColor: !0,
                customPickerPosition: "top",
            }),
        ],
    });
}
var B = l(939249),
    K = l(922301),
    X = l(660184),
    V = l(700090);
function Q(e) {
    let { selectedEffectId: s, setSelectedEffectId: l, className: t } = e,
        i = (0, C.ux)("DisplayNameStylesEffectSelection") ? [...L.re, d.z.PRISM, d.z.GUMMY] : L.re,
        n = Math.ceil(i.length / 2);
    return (0, a.jsxs)("div", {
        className: t,
        children: [
            (0, a.jsxs)(x.D, {
                variant: "heading-md/semibold",
                className: H.s,
                children: [
                    U.intl.string(z.default["1wilM1"]),
                    (0, a.jsx)(G.t, { size: "xs", color: Y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, a.jsx)("div", {
                className: H.f,
                style: { "--custom-dns-tile-columns": n },
                children: i.map((e) => (0, a.jsx)(W, { effectId: e, selected: e === s, onClick: () => l(e) }, e)),
            }),
        ],
    });
}
function W(e) {
    let { effectId: s, selected: l, onClick: t } = e,
        i = (0, D._)(s);
    return (0, a.jsx)(
        B.D,
        {
            className: n()(V.Tw, { [V.wH]: l }),
            onClick: t,
            children: (0, a.jsx)(X.A, {
                userName: i.name,
                effectDisplayType: K.G.STATIC,
                displayNameStyles: i.previewStyles,
                textClassName: V.tr,
                inProfile: !0,
            }),
        },
        s,
    );
}
var $ = l(834730),
    Z = l(885574),
    q = l(990078),
    ee = l(73392),
    es = l(699006);
function el(e) {
    let { selectedFontId: s, setSelectedFontId: l, displayName: t, className: i } = e,
        r = I(),
        d = s !== o.x.DEFAULT,
        c = (0, T.Xr)(t),
        m = Math.ceil(r.length / 2);
    return (0, a.jsxs)("div", {
        className: i,
        children: [
            (0, a.jsxs)(x.D, {
                variant: "heading-md/semibold",
                className: H.s,
                children: [
                    U.intl.string(z.default.nP0ngb),
                    (0, a.jsx)(G.t, { size: "xs", color: Y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, a.jsx)("div", {
                className: H.f,
                style: { "--custom-dns-tile-columns": m },
                children: r.map((e) => {
                    let t = (0, ee.p)(e),
                        i = e === s;
                    return (0, a.jsx)(
                        q.m,
                        {
                            text: U.intl.string(t.name),
                            asContainer: !0,
                            children: (0, a.jsx)(B.D, {
                                className: n()(es.SO, { [es.wH]: i }),
                                onClick: () => l(e),
                                "aria-label": U.intl.string(t.name),
                                children: (0, a.jsx)($.E, {
                                    variant: "text-lg/semibold",
                                    color: i ? "text-strong" : "text-default",
                                    className: n()(es.FH, t.className),
                                    children: "Gg",
                                }),
                            }),
                        },
                        e,
                    );
                }),
            }),
            d &&
                c &&
                (0, a.jsxs)("div", {
                    className: es.Lb,
                    children: [
                        (0, a.jsx)(Z.m, { size: "lg" }),
                        (0, a.jsx)($.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: U.intl.string(z.default["+O1xL2"]),
                        }),
                    ],
                }),
        ],
    });
}
var ea = l(821609),
    et = l(908803),
    ei = l(87719),
    en = l(465794),
    er = l(757036),
    ed = l(788868),
    eo = l(277041);
function ec(e) {
    let { onApply: s, onSurpriseMe: l, onClose: t, canApply: i } = e,
        n = (0, er.L)(ed.PremiumTypes.TIER_2),
        r = (0, a.jsx)(ea.$, {
            variant: "secondary",
            size: "md",
            onClick: l,
            icon: { type: "rive", asset: et.m, riveProps: { dataBinding: { fill: Y.A.colors.ICON_STRONG } } },
            text: U.intl.string(z.default.NOGFds),
        }),
        d = (0, a.jsxs)("div", {
            className: eo.k0,
            children: [
                r,
                (0, a.jsx)(q.m, {
                    text: U.intl.string(z.default.cVTpnj),
                    shouldShow: !i,
                    children: (0, a.jsx)(ea.$, {
                        onClick: s,
                        disabled: !i,
                        text: U.intl.string(U.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        o = (0, a.jsxs)("div", {
            className: eo.UX,
            children: [
                (0, a.jsxs)("div", {
                    className: eo.iQ,
                    children: [
                        (0, a.jsx)(q.m, {
                            text: U.intl.string(U.t["5AFxuK"]),
                            children: (0, a.jsx)(G.t, { size: "md", color: Y.A.colors.ICON_STRONG }),
                        }),
                        (0, a.jsx)($.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: eo.h_,
                            children: U.intl.format(z.default.PWf0xS, {
                                onClickNitro: () => {
                                    h.default.track(k.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, ei.x)(t);
                                },
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: eo.UD,
                    children: [
                        r,
                        (0, a.jsx)(en.A, {
                            premiumModalAnalyticsLocation: {
                                section: k.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: k.ZSU.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: ed.pe.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, a.jsx)(u.jl, { "data-migration-pending": !0, className: eo.qr, children: n ? d : o });
}
var em = l(366010),
    eu = l(43990),
    ex = l(629584),
    eN = l(943255),
    ef = l(575181),
    eA = l(736653),
    ep = l(780898),
    eS = l(344346),
    eg = l(320095),
    eh = l(963852),
    eE = l(763754),
    eC = l(20851),
    eL = l(986687),
    e_ = l(101058),
    ej = l(999291),
    eI = l(686189),
    eT = l(946356),
    ev = l(975571),
    eD = l(996988),
    ey = l(471260);
function eM(e) {
    let {
            user: s,
            guild: l,
            displayName: i,
            selectedFontId: r,
            selectedEffectId: d,
            selectedColors: o,
            onClose: m,
        } = e,
        x = (0, eA.Ay)(),
        N = (0, em.M)(x),
        [f, A] = (0, t.useState)(N),
        S = (0, ej.Ay)(s.id, null),
        { bannerSrc: g } = (0, eI.A)({ displayProfile: S, size: 413, canAnimate: !1 }),
        E = (0, c.cf)([P.A], () => P.A.getPendingChanges(l?.id)),
        C = (0, e_.V7)({ userId: s.id, image: E.pendingAvatar }),
        { userNameplate: L, guildNameplate: _, pendingNameplate: j } = (0, p.rv)(s, l?.id),
        I = (0, ep.WK)(_);
    f && !N ? (x = k.NJ8.DARK) : !f && N && (x = k.NJ8.LIGHT);
    let T = (0, t.useCallback)(() => {
            h.default.track(k.HAw.DISPLAY_NAME_STYLES_CLOSED), m();
        }, [m]),
        v = (0, t.useCallback)((e) => {
            A(e === k.NJ8.DARK), h.default.track(k.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === k.NJ8.DARK });
        }, []),
        D = (0, t.useMemo)(
            () => ({ ...(0, eE.FT)(s, null), nick: i, displayNameStyles: { fontId: r, effectId: d, colors: o } }),
            [s, r, d, o, i],
        );
    return (0, a.jsxs)("div", {
        className: ey._l,
        children: [
            (0, a.jsx)(u.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: ey.bV,
                children: (0, a.jsx)(u.s_, { "data-migration-pending": !0, onClick: T, innerClassName: ey.b }),
            }),
            null != g &&
                (0, a.jsx)(eT.A, {
                    user: s,
                    displayProfile: S,
                    themeType: eD.d.MODAL_V2,
                    className: ey.LX,
                    forceUserTheme: !0,
                    children: (0, a.jsx)("div", { className: ey.b8, style: { backgroundImage: `url(${g})` } }),
                }),
            (0, a.jsx)(eu.N, {
                theme: x,
                children: (e) =>
                    (0, a.jsxs)("div", {
                        className: n()(ey.cq, e),
                        inert: !0,
                        children: [
                            (0, a.jsx)(eL.A, {
                                user: s,
                                guild: l,
                                ...E,
                                pendingAvatar: C,
                                pendingGlobalName: i,
                                pendingDisplayNameStyles: D.displayNameStyles,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: ey.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                                hideProfileFrame: !0,
                            }),
                            (0, a.jsx)(eC.A, {
                                author: D,
                                message: (0, eg.rh)({
                                    ...(0, eh.Ay)({ channelId: "1337", content: U.intl.string(z.default.h5Cuej) }),
                                    state: k.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: ey.OT,
                                previewGuildId: l?.id,
                            }),
                            (0, a.jsx)(eS.A, {
                                user: s,
                                guildId: l?.id,
                                nameplate: j,
                                nameplateData: null == j ? (I ?? L) : void 0,
                                pendingGlobalName: i,
                                pendingDisplayNameStyles: D.displayNameStyles,
                                isHighlighted: !0,
                                className: ey.qF,
                            }),
                        ],
                    }),
            }),
            (0, a.jsxs)("div", {
                className: ey.dI,
                children: [
                    (0, a.jsx)($.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: U.intl.format(z.default.prQba8, {
                            helpArticleLink: ev.A.getArticleURL(k.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, a.jsx)(eb, { darkPreview: f, onToggleTheme: v }),
                ],
            }),
        ],
    });
}
function eb(e) {
    let { darkPreview: s, onToggleTheme: l } = e,
        t = s ? k.NJ8.DARK : k.NJ8.LIGHT;
    return (0, a.jsx)(ex.I, {
        className: ey.xr,
        optionClassName: ey.$C,
        options: [
            {
                name: "",
                tooltip: U.intl.string(U.t.b8Cei3),
                value: k.NJ8.DARK,
                icon: eN.Z,
                className: t === k.NJ8.DARK ? ey.iB : void 0,
            },
            {
                name: "",
                tooltip: U.intl.string(U.t.K2sFfo),
                value: k.NJ8.LIGHT,
                icon: ef.F,
                className: t === k.NJ8.LIGHT ? ey.iB : void 0,
            },
        ],
        value: t,
        onChange: (e) => {
            let { value: s } = e;
            return l(s);
        },
        look: "pill",
    });
}
var ek = l(511698);
function eP(e) {
    let s,
        { transitionState: l, analyticsLocations: i, guildId: L, onClose: _, returnRef: j } = e,
        G = (0, c.bG)([g.default], () => g.default.getCurrentUser()),
        Y =
            ((s = R.Ay.useName(G)),
            (0, c.bG)([P.A, O.Ay], () => {
                let e = P.A.getPendingChanges(L);
                return null != L ? (e.pendingNickname ?? O.Ay.getNick(L, G?.id)) : e.pendingGlobalName;
            }, [L, G]) ??
                s ??
                ""),
        w = (0, c.bG)([S.A], () => S.A.getGuild(L)),
        { userDisplayNameStyles: F, guildDisplayNameStyles: H, pendingDisplayNameStyles: B } = (0, p.B0)(G, L),
        K = void 0 !== B ? B : (H ?? F),
        [X, V] = t.useState(K?.fontId ?? o.x.DEFAULT),
        [W, $] = t.useState(K?.effectId ?? d.z.SOLID),
        Z = (0, T.as)(W) > 1,
        q = (0, D._)(W),
        ee = (0, y.A)(),
        es = K?.colors ?? [],
        [ea, et] = t.useState(es.length > 0 && !Z ? es[0] : q.defaultColors[0]),
        [ei, en] = t.useState(() => (es.length > 0 && Z ? { [W]: es } : {})),
        er = t.useMemo(() => ei[W] ?? ee[W], [ei, W, ee]);
    (0, A.A)(
        { type: r.ImpressionTypes.POPOUT, name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: ed } = (0, f.Ay)(i, N.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        eo = t.useMemo(() => (Z ? er : [ea]), [Z, er, ea]),
        em = t.useMemo(() => X !== K?.fontId || W !== K?.effectId || !(0, m.v)(eo, K?.colors ?? []), [K, X, W, eo]),
        { enabled: eu } = v.useConfig({ location: "DisplayNameStylesModal" }),
        ex = (0, C.ux)("DisplayNameStylesModal"),
        eN = I(),
        ef = (function (e) {
            let {
                hasChanges: s,
                selectedFontId: l,
                selectedEffectId: a,
                selectedColors: i,
                defaultColor: n,
                guildId: r,
                isTryItOut: c,
                onClose: m,
            } = e;
            return t.useCallback(() => {
                if (s) {
                    let e = i;
                    a === d.z.SOLID && i.length > 0 && i[0] === n && (e = []);
                    let s = { fontId: l, effectId: a, colors: e };
                    c ? (0, M.EW)(s) : (0, b.p)({ guildId: r, displayNameStyles: s }),
                        h.default.track(k.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                            font_name: o.x[l],
                            effect_name: d.z[a],
                            colors: i,
                        }),
                        m?.();
                }
            }, [s, l, a, i, n, m, r, c]);
        })({
            hasChanges: em,
            selectedFontId: X,
            selectedEffectId: W,
            selectedColors: eo,
            defaultColor: q.defaultColors[0],
            guildId: L,
            onClose: _,
        }),
        eA = t.useCallback(() => {
            let { fontId: e, effectId: s, colors: l } = (0, T.gN)(eN, eu);
            V(e),
                $(s),
                (0, T.as)(s) > 1 ? en((e) => ({ ...e, [s]: l })) : et(l[0]),
                h.default.track(k.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [eN, eu, en, et]),
        ep = t.useCallback(
            (e) => {
                Z ? en((s) => ({ ...s, [W]: e })) : et(e[0]);
            },
            [Z, W, en, et],
        );
    return null == G
        ? null
        : (0, a.jsx)(f.f5, {
              value: ed,
              children: (0, a.jsx)(E.l.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, a.jsxs)(u.EO, {
                      "data-migration-pending": !0,
                      transitionState: l,
                      size: u.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: n()(ek.CR, { [ek.st]: ex }),
                      returnRef: j,
                      children: [
                          (0, a.jsxs)(u.$m, {
                              "data-migration-pending": !0,
                              className: n()(ek.jE, { [ek.st]: ex }),
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: ek.w1,
                                      children: [
                                          (0, a.jsx)(u.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: ek.bV,
                                              children: (0, a.jsx)(x.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: U.intl.string(z.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, a.jsx)(el, {
                                              selectedFontId: X,
                                              setSelectedFontId: V,
                                              displayName: Y,
                                              className: ek._,
                                          }),
                                          (0, a.jsx)(Q, {
                                              selectedEffectId: W,
                                              setSelectedEffectId: $,
                                              className: ek._,
                                          }),
                                          (0, a.jsx)(J, {
                                              selectedColors: eo,
                                              setSelectedColors: ep,
                                              selectedEffectId: W,
                                              className: ek._,
                                              defaultColor: q.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, a.jsx)(eM, {
                                      user: G,
                                      guild: w,
                                      displayName: Y,
                                      selectedFontId: X,
                                      selectedEffectId: W,
                                      selectedColors: W === d.z.SOLID && (0, m.v)(eo, q.defaultColors) ? [] : eo,
                                      onClose: _,
                                  }),
                              ],
                          }),
                          (0, a.jsx)(ec, {
                              onApply: ef,
                              onSurpriseMe: eA,
                              onClose: _,
                              canApply: em,
                              analyticsLocations: ed,
                          }),
                      ],
                  }),
              }),
          });
}

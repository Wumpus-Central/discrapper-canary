s.d(a, { default: () => eO });
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
    x = s(688810),
    N = s(139286),
    f = s(919395),
    A = s(71393),
    g = s(287809),
    p = s(174459),
    S = s(871162),
    h = s(248778),
    E = s(750656);
let C = [
        r.x.DEFAULT,
        r.x.ZILLA_SLAB,
        r.x.CHERRY_BOMB,
        r.x.CHICLE,
        r.x.MUSEO_MODERNO,
        r.x.NEO_CASTEL,
        r.x.PIXELIFY,
        r.x.SINISTRE,
    ],
    _ = [...C, ...E._k];
function L() {
    let e = (0, h.ux)("font-order");
    return t.useMemo(() => (e ? _ : C), [e]);
}
var j = s(945096);
let I = (0, s(945810).mj)({
    name: "2026-05-dns-surprise-me-weighted-randomizer",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var T = s(383197),
    v = s(207803),
    D = s(84540),
    y = s(652215),
    b = s(836602),
    k = s(696451),
    M = s(427262),
    O = s(403581),
    P = s(661531),
    R = s(48736),
    G = s(864386),
    Y = s(375708),
    w = s(250229),
    z = s(257170);
function U(e) {
    let { selectedColors: a, setSelectedColors: s, defaultColor: i, selectedEffectId: n, className: r } = e,
        d = (0, j.as)(n) > 1,
        o = (0, t.useMemo)(() => (0, E.ii)(n).map((e) => ({ start: e[0], end: e[e.length - 1], name: "" })), [n]),
        c = (0, t.useCallback)(
            (e) => {
                s([e]), p.default.track(y.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: e === i, colors: [e] });
            },
            [s, i],
        ),
        u = (0, t.useCallback)(
            (e) => {
                s(e), p.default.track(y.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: !1, colors: e });
            },
            [s],
        );
    return (0, l.jsxs)("div", {
        className: r,
        children: [
            (0, l.jsxs)(m.D, {
                variant: "heading-md/semibold",
                className: z.s,
                children: [
                    Y.intl.string(G.default.JOpi7z),
                    (0, l.jsx)(O.t, { size: "xs", color: P.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(R.default, {
                className: w.Ei,
                colorContainerClassName: w.rx,
                defaultColor: i,
                colors: d ? o : E.Jl,
                value: a[0],
                secondaryValue: a[1] ?? void 0,
                onChange: c,
                onChangeGradientColors: u,
                isGradient: d,
                gradientButtonClassName: w.xr,
                gradientDegrees: 90,
                allowBlackCustomColor: !0,
                customPickerPosition: "top",
            }),
        ],
    });
}
var F = s(503698),
    H = s.n(F),
    J = s(331322),
    B = s(939249),
    K = s(922301),
    X = s(660184),
    V = s(700090);
function Q(e) {
    let { selectedEffectId: a, setSelectedEffectId: s, className: t } = e,
        i = (0, h.ux)("DisplayNameStylesEffectSelection") ? [...E.re, n.z.PRISM, n.z.GUMMY] : E.re;
    return (0, l.jsxs)("div", {
        className: t,
        children: [
            (0, l.jsxs)(m.D, {
                variant: "heading-md/semibold",
                className: z.s,
                children: [
                    Y.intl.string(G.default["1wilM1"]),
                    (0, l.jsx)(O.t, { size: "xs", color: P.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(J.B, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                gap: 8,
                children: i.map((e) => (0, l.jsx)($, { effectId: e, selected: e === a, onClick: () => s(e) }, e)),
            }),
        ],
    });
}
function $(e) {
    let { effectId: a, selected: s, onClick: t } = e,
        i = (0, T._)(a);
    return (0, l.jsx)(
        B.D,
        {
            className: H()(V.Tw, { [V.wH]: s }),
            onClick: t,
            children: (0, l.jsx)(X.A, {
                userName: i.name,
                effectDisplayType: K.G.STATIC,
                displayNameStyles: i.previewStyles,
                textClassName: V.tr,
                inProfile: !0,
            }),
        },
        a,
    );
}
var W = s(834730),
    Z = s(885574),
    q = s(990078),
    ee = s(73392),
    ea = s(699006);
function es(e) {
    let { selectedFontId: a, setSelectedFontId: s, displayName: t, className: i } = e,
        n = L(),
        d = a !== r.x.DEFAULT,
        o = (0, j.Xr)(t);
    return (0, l.jsxs)("div", {
        className: i,
        children: [
            (0, l.jsxs)(m.D, {
                variant: "heading-md/semibold",
                className: z.s,
                children: [
                    Y.intl.string(G.default.nP0ngb),
                    (0, l.jsx)(O.t, { size: "xs", color: P.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(J.B, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                children: n.map((e) => {
                    let t = (0, ee.p)(e),
                        i = e === a;
                    return (0, l.jsx)(
                        q.m,
                        {
                            text: Y.intl.string(t.name),
                            asContainer: !0,
                            children: (0, l.jsx)(B.D, {
                                className: H()(ea.SO, { [ea.wH]: i }),
                                onClick: () => s(e),
                                "aria-label": Y.intl.string(t.name),
                                children: (0, l.jsx)(W.E, {
                                    variant: "text-lg/semibold",
                                    color: i ? "text-strong" : "text-default",
                                    className: H()(ea.FH, t.className),
                                    children: "Gg",
                                }),
                            }),
                        },
                        e,
                    );
                }),
            }),
            d &&
                o &&
                (0, l.jsxs)("div", {
                    className: ea.Lb,
                    children: [
                        (0, l.jsx)(Z.m, { size: "lg" }),
                        (0, l.jsx)(W.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: Y.intl.string(G.default["+O1xL2"]),
                        }),
                    ],
                }),
        ],
    });
}
var el = s(821609),
    et = s(908803),
    ei = s(87719),
    en = s(465794),
    er = s(757036),
    ed = s(788868),
    eo = s(277041);
function ec(e) {
    let { onApply: a, onSurpriseMe: s, onClose: t, canApply: i } = e,
        n = (0, er.L)(ed.PremiumTypes.TIER_2),
        r = (0, l.jsx)(el.$, {
            variant: "secondary",
            size: "md",
            onClick: s,
            icon: { type: "rive", asset: et.m, riveProps: { dataBinding: { fill: P.A.colors.ICON_STRONG } } },
            text: Y.intl.string(G.default.NOGFds),
        }),
        d = (0, l.jsxs)("div", {
            className: eo.k0,
            children: [
                r,
                (0, l.jsx)(q.m, {
                    text: Y.intl.string(G.default.cVTpnj),
                    shouldShow: !i,
                    children: (0, l.jsx)(el.$, {
                        onClick: a,
                        disabled: !i,
                        text: Y.intl.string(Y.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        o = (0, l.jsxs)("div", {
            className: eo.UX,
            children: [
                (0, l.jsxs)("div", {
                    className: eo.iQ,
                    children: [
                        (0, l.jsx)(q.m, {
                            text: Y.intl.string(Y.t["5AFxuK"]),
                            children: (0, l.jsx)(O.t, { size: "md", color: P.A.colors.ICON_STRONG }),
                        }),
                        (0, l.jsx)(W.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: eo.h_,
                            children: Y.intl.format(G.default.PWf0xS, {
                                onClickNitro: () => {
                                    p.default.track(y.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, ei.x)(t);
                                },
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: eo.UD,
                    children: [
                        r,
                        (0, l.jsx)(en.A, {
                            premiumModalAnalyticsLocation: {
                                section: y.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: y.ZSU.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: ed.pe.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, l.jsx)(c.jl, { "data-migration-pending": !0, className: eo.qr, children: n ? d : o });
}
var em = s(366010),
    eu = s(43990),
    ex = s(629584),
    eN = s(943255),
    ef = s(575181),
    eA = s(736653),
    eg = s(780898),
    ep = s(344346),
    eS = s(320095),
    eh = s(963852),
    eE = s(763754),
    eC = s(20851),
    e_ = s(986687),
    eL = s(101058),
    ej = s(999291),
    eI = s(686189),
    eT = s(946356),
    ev = s(975571),
    eD = s(996988),
    ey = s(471260);
function eb(e) {
    let {
            user: a,
            guild: s,
            displayName: i,
            selectedFontId: n,
            selectedEffectId: r,
            selectedColors: o,
            onClose: m,
        } = e,
        u = (0, eA.Ay)(),
        x = (0, em.M)(u),
        [N, A] = (0, t.useState)(x),
        g = (0, ej.Ay)(a.id, null),
        { bannerSrc: S } = (0, eI.A)({ displayProfile: g, size: 413, canAnimate: !1 }),
        h = (0, d.cf)([b.A], () => b.A.getPendingChanges(s?.id)),
        E = (0, eL.V7)({ userId: a.id, image: h.pendingAvatar }),
        { userNameplate: C, guildNameplate: _, pendingNameplate: L } = (0, f.rv)(a, s?.id),
        j = (0, eg.WK)(_);
    N && !x ? (u = y.NJ8.DARK) : !N && x && (u = y.NJ8.LIGHT);
    let I = (0, t.useCallback)(() => {
            p.default.track(y.HAw.DISPLAY_NAME_STYLES_CLOSED), m();
        }, [m]),
        T = (0, t.useCallback)((e) => {
            A(e === y.NJ8.DARK), p.default.track(y.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === y.NJ8.DARK });
        }, []),
        v = (0, t.useMemo)(
            () => ({ ...(0, eE.FT)(a, null), nick: i, displayNameStyles: { fontId: n, effectId: r, colors: o } }),
            [a, n, r, o, i],
        );
    return (0, l.jsxs)("div", {
        className: ey._l,
        children: [
            (0, l.jsx)(c.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: ey.bV,
                children: (0, l.jsx)(c.s_, { "data-migration-pending": !0, onClick: I, innerClassName: ey.b }),
            }),
            null != S &&
                (0, l.jsx)(eT.A, {
                    user: a,
                    displayProfile: g,
                    themeType: eD.d.MODAL_V2,
                    className: ey.LX,
                    forceUserTheme: !0,
                    children: (0, l.jsx)("div", { className: ey.b8, style: { backgroundImage: `url(${S})` } }),
                }),
            (0, l.jsx)(eu.N, {
                theme: u,
                children: (e) =>
                    (0, l.jsxs)("div", {
                        className: H()(ey.cq, e),
                        inert: !0,
                        children: [
                            (0, l.jsx)(e_.A, {
                                user: a,
                                guild: s,
                                ...h,
                                pendingAvatar: E,
                                pendingGlobalName: i,
                                pendingDisplayNameStyles: v.displayNameStyles,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: ey.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                                hideProfileFrame: !0,
                            }),
                            (0, l.jsx)(eC.A, {
                                author: v,
                                message: (0, eS.rh)({
                                    ...(0, eh.Ay)({ channelId: "1337", content: Y.intl.string(G.default.h5Cuej) }),
                                    state: y.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: ey.OT,
                                previewGuildId: s?.id,
                            }),
                            (0, l.jsx)(ep.A, {
                                user: a,
                                guildId: s?.id,
                                nameplate: L,
                                nameplateData: null == L ? (j ?? C) : void 0,
                                pendingGlobalName: i,
                                pendingDisplayNameStyles: v.displayNameStyles,
                                isHighlighted: !0,
                                className: ey.qF,
                            }),
                        ],
                    }),
            }),
            (0, l.jsxs)("div", {
                className: ey.dI,
                children: [
                    (0, l.jsx)(W.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: Y.intl.format(G.default.prQba8, {
                            helpArticleLink: ev.A.getArticleURL(y.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, l.jsx)(ek, { darkPreview: N, onToggleTheme: T }),
                ],
            }),
        ],
    });
}
function ek(e) {
    let { darkPreview: a, onToggleTheme: s } = e,
        t = a ? y.NJ8.DARK : y.NJ8.LIGHT;
    return (0, l.jsx)(ex.I, {
        className: ey.xr,
        optionClassName: ey.$C,
        options: [
            {
                name: "",
                tooltip: Y.intl.string(Y.t.b8Cei3),
                value: y.NJ8.DARK,
                icon: eN.Z,
                className: t === y.NJ8.DARK ? ey.iB : void 0,
            },
            {
                name: "",
                tooltip: Y.intl.string(Y.t.K2sFfo),
                value: y.NJ8.LIGHT,
                icon: ef.F,
                className: t === y.NJ8.LIGHT ? ey.iB : void 0,
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
var eM = s(511698);
function eO(e) {
    let a,
        { transitionState: s, analyticsLocations: h, guildId: E, onClose: C, returnRef: _ } = e,
        O = (0, d.bG)([g.default], () => g.default.getCurrentUser()),
        P =
            ((a = M.Ay.useName(O)),
            (0, d.bG)([b.A, k.Ay], () => {
                let e = b.A.getPendingChanges(E);
                return null != E ? (e.pendingNickname ?? k.Ay.getNick(E, O?.id)) : e.pendingGlobalName;
            }, [E, O]) ??
                a ??
                ""),
        R = (0, d.bG)([A.A], () => A.A.getGuild(E)),
        { userDisplayNameStyles: w, guildDisplayNameStyles: z, pendingDisplayNameStyles: F } = (0, f.B0)(O, E),
        H = void 0 !== F ? F : (z ?? w),
        [J, B] = t.useState(H?.fontId ?? r.x.DEFAULT),
        [K, X] = t.useState(H?.effectId ?? n.z.SOLID),
        V = (0, j.as)(K) > 1,
        $ = (0, T._)(K),
        W = (0, T._)(n.z.GRADIENT),
        Z = H?.colors ?? [],
        [q, ee] = t.useState(Z.length > 0 && !V ? Z[0] : $.defaultColors[0]),
        [ea, el] = t.useState(Z.length > 0 && V ? Z : W.defaultColors);
    (0, N.A)(
        { type: i.ImpressionTypes.POPOUT, name: i.ImpressionNames.DISPLAY_NAME_STYLES_MODAL },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: et } = (0, x.Ay)(h, u.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        ei = t.useMemo(() => (V ? ea : [q]), [V, ea, q]),
        en = t.useMemo(() => J !== H?.fontId || K !== H?.effectId || !(0, o.v)(ei, H?.colors ?? []), [H, J, K, ei]),
        { enabled: er } = I.useConfig({ location: "DisplayNameStylesModal" }),
        ed = L(),
        eo = (function (e) {
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
                    c ? (0, v.EW)(a) : (0, D.p)({ guildId: o, displayNameStyles: a }),
                        p.default.track(y.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                            font_name: r.x[s],
                            effect_name: n.z[l],
                            colors: i,
                        }),
                        m?.();
                }
            }, [a, s, l, i, d, m, o, c]);
        })({
            hasChanges: en,
            selectedFontId: J,
            selectedEffectId: K,
            selectedColors: ei,
            defaultColor: $.defaultColors[0],
            guildId: E,
            onClose: C,
        }),
        em = t.useCallback(() => {
            let { fontId: e, effectId: a, colors: s } = (0, j.gN)(ed, er);
            B(e), X(a), (0, j.as)(a) > 1 ? el(s) : ee(s[0]), p.default.track(y.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [ed, er, el, ee]),
        eu = t.useCallback(
            (e) => {
                X(e);
            },
            [X],
        ),
        ex = t.useCallback(
            (e) => {
                V ? el(e) : ee(e[0]);
            },
            [V, el, ee],
        );
    return null == O
        ? null
        : (0, l.jsx)(x.f5, {
              value: et,
              children: (0, l.jsx)(S.l.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, l.jsxs)(c.EO, {
                      "data-migration-pending": !0,
                      transitionState: s,
                      size: c.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: eM.CR,
                      returnRef: _,
                      children: [
                          (0, l.jsxs)(c.$m, {
                              "data-migration-pending": !0,
                              className: eM.jE,
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: eM.w1,
                                      children: [
                                          (0, l.jsx)(c.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: eM.bV,
                                              children: (0, l.jsx)(m.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: Y.intl.string(G.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, l.jsx)(es, {
                                              selectedFontId: J,
                                              setSelectedFontId: B,
                                              displayName: P,
                                              className: eM._,
                                          }),
                                          (0, l.jsx)(Q, {
                                              selectedEffectId: K,
                                              setSelectedEffectId: eu,
                                              className: eM._,
                                          }),
                                          (0, l.jsx)(U, {
                                              selectedColors: ei,
                                              setSelectedColors: ex,
                                              selectedEffectId: K,
                                              className: eM._,
                                              defaultColor: $.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(eb, {
                                      user: O,
                                      guild: R,
                                      displayName: P,
                                      selectedFontId: J,
                                      selectedEffectId: K,
                                      selectedColors: K === n.z.SOLID && (0, o.v)(ei, $.defaultColors) ? [] : ei,
                                      onClose: C,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(ec, {
                              onApply: eo,
                              onSurpriseMe: em,
                              onClose: C,
                              canApply: en,
                              analyticsLocations: et,
                          }),
                      ],
                  }),
              }),
          });
}

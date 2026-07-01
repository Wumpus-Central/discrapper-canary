l.d(s, { default: () => eP });
var t = l(627968),
    a = l(64700),
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
    g = l(919395),
    p = l(71393),
    S = l(287809),
    h = l(174459),
    E = l(871162),
    C = l(248778),
    L = l(750656);
let _ = [...L.re, ...L.gz];
function j() {
    let e = (0, C.ux)("effect-order");
    return a.useMemo(() => (e ? _ : L.re), [e]);
}
let I = [
        o.x.DEFAULT,
        o.x.ZILLA_SLAB,
        o.x.CHERRY_BOMB,
        o.x.CHICLE,
        o.x.MUSEO_MODERNO,
        o.x.NEO_CASTEL,
        o.x.PIXELIFY,
        o.x.SINISTRE,
    ],
    T = [...I, ...L._k];
function v() {
    let e = (0, C.ux)("font-order");
    return a.useMemo(() => (e ? T : I), [e]);
}
var D = l(945096),
    y = l(898985),
    M = l(430571),
    k = l(207803),
    b = l(84540),
    O = l(652215),
    P = l(836602),
    R = l(696451),
    G = l(427262),
    Y = l(403581),
    w = l(661531),
    U = l(48736),
    z = l(864386),
    F = l(375708),
    H = l(250229),
    J = l(257170);
function B(e) {
    let { selectedColors: s, setSelectedColors: l, defaultColor: i, selectedEffectId: n, className: r } = e,
        o = (0, D.as)(n) > 1,
        c = n === d.z.PRISM ? "210px" : n === d.z.GUMMY ? "168px" : "104px",
        m = (0, a.useMemo)(() => (0, L.ii)(n).map((e) => ({ colors: e, name: "" })), [n]),
        u = (0, a.useCallback)(
            (e) => {
                l([e]), h.default.track(O.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: e === i, colors: [e] });
            },
            [l, i],
        ),
        N = (0, a.useCallback)(
            (e) => {
                l(e), h.default.track(O.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: !1, colors: e });
            },
            [l],
        );
    return (0, t.jsxs)("div", {
        className: r,
        children: [
            (0, t.jsxs)(x.D, {
                variant: "heading-md/semibold",
                className: J.s,
                children: [
                    F.intl.string(z.default.JOpi7z),
                    (0, t.jsx)(Y.t, { size: "xs", color: w.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, t.jsx)(U.default, {
                className: H.Ei,
                colorContainerClassName: H.rx,
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
var K = l(939249),
    X = l(922301),
    V = l(660184),
    Q = l(700090);
function W(e) {
    let { selectedEffectId: s, setSelectedEffectId: l, className: a } = e,
        i = j(),
        n = Math.ceil(i.length / 2);
    return (0, t.jsxs)("div", {
        className: a,
        children: [
            (0, t.jsxs)(x.D, {
                variant: "heading-md/semibold",
                className: J.s,
                children: [
                    F.intl.string(z.default["1wilM1"]),
                    (0, t.jsx)(Y.t, { size: "xs", color: w.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, t.jsx)("div", {
                className: J.f,
                style: { "--custom-dns-tile-columns": n },
                children: i.map((e) => (0, t.jsx)($, { effectId: e, selected: e === s, onClick: () => l(e) }, e)),
            }),
        ],
    });
}
function $(e) {
    let { effectId: s, selected: l, onClick: a } = e,
        i = (0, y._)(s);
    return (0, t.jsx)(
        K.D,
        {
            className: n()(Q.Tw, { [Q.wH]: l }),
            onClick: a,
            children: (0, t.jsx)(V.A, {
                userName: i.name,
                effectDisplayType: X.G.STATIC,
                displayNameStyles: i.previewStyles,
                textClassName: Q.tr,
                inProfile: !0,
            }),
        },
        s,
    );
}
var Z = l(834730),
    q = l(885574),
    ee = l(990078),
    es = l(73392),
    el = l(699006);
function et(e) {
    let { selectedFontId: s, setSelectedFontId: l, displayName: a, className: i } = e,
        r = v(),
        d = s !== o.x.DEFAULT,
        c = (0, D.Xr)(a),
        m = Math.ceil(r.length / 2);
    return (0, t.jsxs)("div", {
        className: i,
        children: [
            (0, t.jsxs)(x.D, {
                variant: "heading-md/semibold",
                className: J.s,
                children: [
                    F.intl.string(z.default.nP0ngb),
                    (0, t.jsx)(Y.t, { size: "xs", color: w.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, t.jsx)("div", {
                className: J.f,
                style: { "--custom-dns-tile-columns": m },
                children: r.map((e) => {
                    let a = (0, es.p)(e),
                        i = e === s;
                    return (0, t.jsx)(
                        ee.m,
                        {
                            text: F.intl.string(a.name),
                            asContainer: !0,
                            children: (0, t.jsx)(K.D, {
                                className: n()(el.SO, { [el.wH]: i }),
                                onClick: () => l(e),
                                "aria-label": F.intl.string(a.name),
                                children: (0, t.jsx)(Z.E, {
                                    variant: "text-lg/semibold",
                                    color: i ? "text-strong" : "text-default",
                                    className: n()(el.FH, a.className),
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
                (0, t.jsxs)("div", {
                    className: el.Lb,
                    children: [
                        (0, t.jsx)(q.m, { size: "lg" }),
                        (0, t.jsx)(Z.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: F.intl.string(z.default["+O1xL2"]),
                        }),
                    ],
                }),
        ],
    });
}
var ea = l(821609),
    ei = l(908803),
    en = l(87719),
    er = l(465794),
    ed = l(757036),
    eo = l(788868),
    ec = l(277041);
function em(e) {
    let { onApply: s, onSurpriseMe: l, onClose: a, canApply: i } = e,
        n = (0, ed.L)(eo.PremiumTypes.TIER_2),
        r = (0, t.jsx)(ea.$, {
            variant: "secondary",
            size: "md",
            onClick: l,
            icon: { type: "rive", asset: ei.m, riveProps: { dataBinding: { fill: w.A.colors.ICON_STRONG } } },
            text: F.intl.string(z.default.NOGFds),
        }),
        d = (0, t.jsxs)("div", {
            className: ec.k0,
            children: [
                r,
                (0, t.jsx)(ee.m, {
                    text: F.intl.string(z.default.cVTpnj),
                    shouldShow: !i,
                    children: (0, t.jsx)(ea.$, {
                        onClick: s,
                        disabled: !i,
                        text: F.intl.string(F.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        o = (0, t.jsxs)("div", {
            className: ec.UX,
            children: [
                (0, t.jsxs)("div", {
                    className: ec.iQ,
                    children: [
                        (0, t.jsx)(ee.m, {
                            text: F.intl.string(F.t["5AFxuK"]),
                            children: (0, t.jsx)(Y.t, { size: "md", color: w.A.colors.ICON_STRONG }),
                        }),
                        (0, t.jsx)(Z.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: ec.h_,
                            children: F.intl.format(z.default.PWf0xS, {
                                onClickNitro: () => {
                                    h.default.track(O.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, en.x)(a);
                                },
                            }),
                        }),
                    ],
                }),
                (0, t.jsxs)("div", {
                    className: ec.UD,
                    children: [
                        r,
                        (0, t.jsx)(er.A, {
                            premiumModalAnalyticsLocation: {
                                section: O.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: O.ZSU.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: eo.pe.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, t.jsx)(u.jl, { "data-migration-pending": !0, className: ec.qr, children: n ? d : o });
}
var eu = l(366010),
    ex = l(43990),
    eN = l(629584),
    ef = l(943255),
    eA = l(575181),
    eg = l(736653),
    ep = l(780898),
    eS = l(344346),
    eh = l(320095),
    eE = l(963852),
    eC = l(763754),
    eL = l(20851),
    e_ = l(986687),
    ej = l(101058),
    eI = l(999291),
    eT = l(686189),
    ev = l(946356),
    eD = l(975571),
    ey = l(996988),
    eM = l(471260);
function ek(e) {
    let {
            user: s,
            guild: l,
            displayName: i,
            selectedFontId: r,
            selectedEffectId: d,
            selectedColors: o,
            onClose: m,
        } = e,
        x = (0, eg.Ay)(),
        N = (0, eu.M)(x),
        [f, A] = (0, a.useState)(N),
        p = (0, eI.Ay)(s.id, null),
        { bannerSrc: S } = (0, eT.A)({ displayProfile: p, size: 413, canAnimate: !1 }),
        E = (0, c.cf)([P.A], () => P.A.getPendingChanges(l?.id)),
        C = (0, ej.V7)({ userId: s.id, image: E.pendingAvatar }),
        { userNameplate: L, guildNameplate: _, pendingNameplate: j } = (0, g.rv)(s, l?.id),
        I = (0, ep.WK)(_);
    f && !N ? (x = O.NJ8.DARK) : !f && N && (x = O.NJ8.LIGHT);
    let T = (0, a.useCallback)(() => {
            h.default.track(O.HAw.DISPLAY_NAME_STYLES_CLOSED), m();
        }, [m]),
        v = (0, a.useCallback)((e) => {
            A(e === O.NJ8.DARK), h.default.track(O.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === O.NJ8.DARK });
        }, []),
        D = (0, a.useMemo)(
            () => ({ ...(0, eC.FT)(s, null), nick: i, displayNameStyles: { fontId: r, effectId: d, colors: o } }),
            [s, r, d, o, i],
        );
    return (0, t.jsxs)("div", {
        className: eM._l,
        children: [
            (0, t.jsx)(u.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: eM.bV,
                children: (0, t.jsx)(u.s_, { "data-migration-pending": !0, onClick: T, innerClassName: eM.b }),
            }),
            null != S &&
                (0, t.jsx)(ev.A, {
                    user: s,
                    displayProfile: p,
                    themeType: ey.d.MODAL_V2,
                    className: eM.LX,
                    forceUserTheme: !0,
                    children: (0, t.jsx)("div", { className: eM.b8, style: { backgroundImage: `url(${S})` } }),
                }),
            (0, t.jsx)(ex.N, {
                theme: x,
                children: (e) =>
                    (0, t.jsxs)("div", {
                        className: n()(eM.cq, e),
                        inert: !0,
                        children: [
                            (0, t.jsx)(e_.A, {
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
                                containerClassName: eM.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                                hideProfileFrame: !0,
                            }),
                            (0, t.jsx)(eL.A, {
                                author: D,
                                message: (0, eh.rh)({
                                    ...(0, eE.Ay)({ channelId: "1337", content: F.intl.string(z.default.h5Cuej) }),
                                    state: O.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: eM.OT,
                                previewGuildId: l?.id,
                            }),
                            (0, t.jsx)(eS.A, {
                                user: s,
                                guildId: l?.id,
                                nameplate: j,
                                nameplateData: null == j ? (I ?? L) : void 0,
                                pendingGlobalName: i,
                                pendingDisplayNameStyles: D.displayNameStyles,
                                isHighlighted: !0,
                                className: eM.qF,
                            }),
                        ],
                    }),
            }),
            (0, t.jsxs)("div", {
                className: eM.dI,
                children: [
                    (0, t.jsx)(Z.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: F.intl.format(z.default.prQba8, {
                            helpArticleLink: eD.A.getArticleURL(O.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, t.jsx)(eb, { darkPreview: f, onToggleTheme: v }),
                ],
            }),
        ],
    });
}
function eb(e) {
    let { darkPreview: s, onToggleTheme: l } = e,
        a = s ? O.NJ8.DARK : O.NJ8.LIGHT;
    return (0, t.jsx)(eN.I, {
        className: eM.xr,
        optionClassName: eM.$C,
        options: [
            {
                name: "",
                tooltip: F.intl.string(F.t.b8Cei3),
                value: O.NJ8.DARK,
                icon: ef.Z,
                className: a === O.NJ8.DARK ? eM.iB : void 0,
            },
            {
                name: "",
                tooltip: F.intl.string(F.t.K2sFfo),
                value: O.NJ8.LIGHT,
                icon: eA.F,
                className: a === O.NJ8.LIGHT ? eM.iB : void 0,
            },
        ],
        value: a,
        onChange: (e) => {
            let { value: s } = e;
            return l(s);
        },
        look: "pill",
    });
}
var eO = l(511698);
function eP(e) {
    let s,
        { transitionState: l, analyticsLocations: i, guildId: L, onClose: _, returnRef: I } = e,
        T = (0, c.bG)([S.default], () => S.default.getCurrentUser()),
        Y =
            ((s = G.Ay.useName(T)),
            (0, c.bG)([P.A, R.Ay], () => {
                let e = P.A.getPendingChanges(L);
                return null != L ? (e.pendingNickname ?? R.Ay.getNick(L, T?.id)) : e.pendingGlobalName;
            }, [L, T]) ??
                s ??
                ""),
        w = (0, c.bG)([p.A], () => p.A.getGuild(L)),
        { userDisplayNameStyles: U, guildDisplayNameStyles: H, pendingDisplayNameStyles: J } = (0, g.B0)(T, L),
        K = void 0 !== J ? J : (H ?? U),
        [X, V] = a.useState(K?.fontId ?? o.x.DEFAULT),
        [Q, $] = a.useState(K?.effectId ?? d.z.SOLID),
        Z = (0, D.as)(Q) > 1,
        q = (0, y._)(Q),
        ee = (0, M.A)(),
        es = K?.colors ?? [],
        [el, ea] = a.useState(es.length > 0 && !Z ? es[0] : q.defaultColors[0]),
        [ei, en] = a.useState(() => (es.length > 0 && Z ? { [Q]: es } : {})),
        er = a.useMemo(() => ei[Q] ?? ee[Q], [ei, Q, ee]);
    (0, A.A)(
        { type: r.ImpressionTypes.POPOUT, name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: ed } = (0, f.Ay)(i, N.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        eo = a.useMemo(() => (Z ? er : [el]), [Z, er, el]),
        ec = a.useMemo(() => X !== K?.fontId || Q !== K?.effectId || !(0, m.v)(eo, K?.colors ?? []), [K, X, Q, eo]),
        eu = (0, C.ux)("DisplayNameStylesModal"),
        ex = v(),
        eN = j(),
        ef = (function (e) {
            let {
                hasChanges: s,
                selectedFontId: l,
                selectedEffectId: t,
                selectedColors: i,
                defaultColor: n,
                guildId: r,
                isTryItOut: c,
                onClose: m,
            } = e;
            return a.useCallback(() => {
                if (s) {
                    let e = i;
                    t === d.z.SOLID && i.length > 0 && i[0] === n && (e = []);
                    let s = { fontId: l, effectId: t, colors: e };
                    c ? (0, k.EW)(s) : (0, b.p)({ guildId: r, displayNameStyles: s }),
                        h.default.track(O.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                            font_name: o.x[l],
                            effect_name: d.z[t],
                            colors: i,
                        }),
                        m?.();
                }
            }, [s, l, t, i, n, m, r, c]);
        })({
            hasChanges: ec,
            selectedFontId: X,
            selectedEffectId: Q,
            selectedColors: eo,
            defaultColor: q.defaultColors[0],
            guildId: L,
            onClose: _,
        }),
        eA = a.useCallback(() => {
            let { fontId: e, effectId: s, colors: l } = (0, D.gN)(ex, eN);
            V(e),
                $(s),
                (0, D.as)(s) > 1 ? en((e) => ({ ...e, [s]: l })) : ea(l[0]),
                h.default.track(O.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [ex, eN, en, ea]),
        eg = a.useCallback(
            (e) => {
                Z ? en((s) => ({ ...s, [Q]: e })) : ea(e[0]);
            },
            [Z, Q, en, ea],
        );
    return null == T
        ? null
        : (0, t.jsx)(f.f5, {
              value: ed,
              children: (0, t.jsx)(E.l.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, t.jsxs)(u.EO, {
                      "data-migration-pending": !0,
                      transitionState: l,
                      size: u.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: n()(eO.CR, { [eO.st]: eu }),
                      returnRef: I,
                      children: [
                          (0, t.jsxs)(u.$m, {
                              "data-migration-pending": !0,
                              className: n()(eO.jE, { [eO.st]: eu }),
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, t.jsxs)("div", {
                                      className: eO.w1,
                                      children: [
                                          (0, t.jsx)(u.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: eO.bV,
                                              children: (0, t.jsx)(x.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: F.intl.string(z.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, t.jsx)(et, {
                                              selectedFontId: X,
                                              setSelectedFontId: V,
                                              displayName: Y,
                                              className: eO._,
                                          }),
                                          (0, t.jsx)(W, {
                                              selectedEffectId: Q,
                                              setSelectedEffectId: $,
                                              className: eO._,
                                          }),
                                          (0, t.jsx)(B, {
                                              selectedColors: eo,
                                              setSelectedColors: eg,
                                              selectedEffectId: Q,
                                              className: eO._,
                                              defaultColor: q.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, t.jsx)(ek, {
                                      user: T,
                                      guild: w,
                                      displayName: Y,
                                      selectedFontId: X,
                                      selectedEffectId: Q,
                                      selectedColors: Q === d.z.SOLID && (0, m.v)(eo, q.defaultColors) ? [] : eo,
                                      onClose: _,
                                  }),
                              ],
                          }),
                          (0, t.jsx)(em, {
                              onApply: ef,
                              onSurpriseMe: eA,
                              onClose: _,
                              canApply: ec,
                              analyticsLocations: ed,
                          }),
                      ],
                  }),
              }),
          });
}

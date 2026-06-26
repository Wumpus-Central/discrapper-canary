l.d(s, { default: () => eR });
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
    return t.useMemo(() => (e ? _ : L.re), [e]);
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
    return t.useMemo(() => (e ? T : I), [e]);
}
var D = l(945096);
let y = (0, l(945810).mj)({
    name: "2026-05-dns-surprise-me-weighted-randomizer",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var M = l(898985),
    b = l(430571),
    k = l(207803),
    O = l(84540),
    P = l(652215),
    R = l(836602),
    G = l(696451),
    Y = l(427262),
    w = l(403581),
    z = l(661531),
    U = l(48736),
    F = l(745699),
    H = l(375708),
    J = l(477365),
    B = l(960530);
function K(e) {
    let { selectedColors: s, setSelectedColors: l, defaultColor: i, selectedEffectId: n, className: r } = e,
        o = (0, D.as)(n) > 1,
        c = n === d.z.PRISM ? "210px" : n === d.z.GUMMY ? "168px" : "104px",
        m = (0, t.useMemo)(() => (0, L.ii)(n).map((e) => ({ colors: e, name: "" })), [n]),
        u = (0, t.useCallback)(
            (e) => {
                l([e]), h.default.track(P.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: e === i, colors: [e] });
            },
            [l, i],
        ),
        N = (0, t.useCallback)(
            (e) => {
                l(e), h.default.track(P.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: !1, colors: e });
            },
            [l],
        );
    return (0, a.jsxs)("div", {
        className: r,
        children: [
            (0, a.jsxs)(x.D, {
                variant: "heading-md/semibold",
                className: B.s,
                children: [
                    H.intl.string(F.default.JOpi7z),
                    (0, a.jsx)(w.t, { size: "xs", color: z.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, a.jsx)(U.default, {
                className: J.Ei,
                colorContainerClassName: J.rx,
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
var X = l(939249),
    V = l(922301),
    Q = l(660184),
    W = l(927226);
function $(e) {
    let { selectedEffectId: s, setSelectedEffectId: l, className: t } = e,
        i = j(),
        n = Math.ceil(i.length / 2);
    return (0, a.jsxs)("div", {
        className: t,
        children: [
            (0, a.jsxs)(x.D, {
                variant: "heading-md/semibold",
                className: B.s,
                children: [
                    H.intl.string(F.default["1wilM1"]),
                    (0, a.jsx)(w.t, { size: "xs", color: z.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, a.jsx)("div", {
                className: B.f,
                style: { "--custom-dns-tile-columns": n },
                children: i.map((e) => (0, a.jsx)(Z, { effectId: e, selected: e === s, onClick: () => l(e) }, e)),
            }),
        ],
    });
}
function Z(e) {
    let { effectId: s, selected: l, onClick: t } = e,
        i = (0, M._)(s);
    return (0, a.jsx)(
        X.D,
        {
            className: n()(W.Tw, { [W.wH]: l }),
            onClick: t,
            children: (0, a.jsx)(Q.A, {
                userName: i.name,
                effectDisplayType: V.G.STATIC,
                displayNameStyles: i.previewStyles,
                textClassName: W.tr,
                inProfile: !0,
            }),
        },
        s,
    );
}
var q = l(834730),
    ee = l(885574),
    es = l(990078),
    el = l(73392),
    ea = l(984958);
function et(e) {
    let { selectedFontId: s, setSelectedFontId: l, displayName: t, className: i } = e,
        r = v(),
        d = s !== o.x.DEFAULT,
        c = (0, D.Xr)(t),
        m = Math.ceil(r.length / 2);
    return (0, a.jsxs)("div", {
        className: i,
        children: [
            (0, a.jsxs)(x.D, {
                variant: "heading-md/semibold",
                className: B.s,
                children: [
                    H.intl.string(F.default.nP0ngb),
                    (0, a.jsx)(w.t, { size: "xs", color: z.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, a.jsx)("div", {
                className: B.f,
                style: { "--custom-dns-tile-columns": m },
                children: r.map((e) => {
                    let t = (0, el.p)(e),
                        i = e === s;
                    return (0, a.jsx)(
                        es.m,
                        {
                            text: H.intl.string(t.name),
                            asContainer: !0,
                            children: (0, a.jsx)(X.D, {
                                className: n()(ea.SO, { [ea.wH]: i }),
                                onClick: () => l(e),
                                "aria-label": H.intl.string(t.name),
                                children: (0, a.jsx)(q.E, {
                                    variant: "text-lg/semibold",
                                    color: i ? "text-strong" : "text-default",
                                    className: n()(ea.FH, t.className),
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
                    className: ea.Lb,
                    children: [
                        (0, a.jsx)(ee.m, { size: "lg" }),
                        (0, a.jsx)(q.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: H.intl.string(F.default["+O1xL2"]),
                        }),
                    ],
                }),
        ],
    });
}
var ei = l(821609),
    en = l(908803),
    er = l(87719),
    ed = l(465794),
    eo = l(757036),
    ec = l(788868),
    em = l(419377);
function eu(e) {
    let { onApply: s, onSurpriseMe: l, onClose: t, canApply: i } = e,
        n = (0, eo.L)(ec.PremiumTypes.TIER_2),
        r = (0, a.jsx)(ei.$, {
            variant: "secondary",
            size: "md",
            onClick: l,
            icon: { type: "rive", asset: en.m, riveProps: { dataBinding: { fill: z.A.colors.ICON_STRONG } } },
            text: H.intl.string(F.default.NOGFds),
        }),
        d = (0, a.jsxs)("div", {
            className: em.k0,
            children: [
                r,
                (0, a.jsx)(es.m, {
                    text: H.intl.string(F.default.cVTpnj),
                    shouldShow: !i,
                    children: (0, a.jsx)(ei.$, {
                        onClick: s,
                        disabled: !i,
                        text: H.intl.string(H.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        o = (0, a.jsxs)("div", {
            className: em.UX,
            children: [
                (0, a.jsxs)("div", {
                    className: em.iQ,
                    children: [
                        (0, a.jsx)(es.m, {
                            text: H.intl.string(H.t["5AFxuK"]),
                            children: (0, a.jsx)(w.t, { size: "md", color: z.A.colors.ICON_STRONG }),
                        }),
                        (0, a.jsx)(q.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: em.h_,
                            children: H.intl.format(F.default.PWf0xS, {
                                onClickNitro: () => {
                                    h.default.track(P.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, er.x)(t);
                                },
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: em.UD,
                    children: [
                        r,
                        (0, a.jsx)(ed.A, {
                            premiumModalAnalyticsLocation: {
                                section: P.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: P.ZSU.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: ec.pe.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, a.jsx)(u.jl, { "data-migration-pending": !0, className: em.qr, children: n ? d : o });
}
var ex = l(366010),
    eN = l(43990),
    ef = l(629584),
    eA = l(943255),
    eg = l(575181),
    ep = l(736653),
    eS = l(780898),
    eh = l(344346),
    eE = l(320095),
    eC = l(963852),
    eL = l(763754),
    e_ = l(20851),
    ej = l(986687),
    eI = l(101058),
    eT = l(999291),
    ev = l(686189),
    eD = l(946356),
    ey = l(975571),
    eM = l(996988),
    eb = l(772316);
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
        x = (0, ep.Ay)(),
        N = (0, ex.M)(x),
        [f, A] = (0, t.useState)(N),
        p = (0, eT.Ay)(s.id, null),
        { bannerSrc: S } = (0, ev.A)({ displayProfile: p, size: 413, canAnimate: !1 }),
        E = (0, c.cf)([R.A], () => R.A.getPendingChanges(l?.id)),
        C = (0, eI.V7)({ userId: s.id, image: E.pendingAvatar }),
        { userNameplate: L, guildNameplate: _, pendingNameplate: j } = (0, g.rv)(s, l?.id),
        I = (0, eS.WK)(_);
    f && !N ? (x = P.NJ8.DARK) : !f && N && (x = P.NJ8.LIGHT);
    let T = (0, t.useCallback)(() => {
            h.default.track(P.HAw.DISPLAY_NAME_STYLES_CLOSED), m();
        }, [m]),
        v = (0, t.useCallback)((e) => {
            A(e === P.NJ8.DARK), h.default.track(P.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === P.NJ8.DARK });
        }, []),
        D = (0, t.useMemo)(
            () => ({ ...(0, eL.FT)(s, null), nick: i, displayNameStyles: { fontId: r, effectId: d, colors: o } }),
            [s, r, d, o, i],
        );
    return (0, a.jsxs)("div", {
        className: eb._l,
        children: [
            (0, a.jsx)(u.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: eb.bV,
                children: (0, a.jsx)(u.s_, { "data-migration-pending": !0, onClick: T, innerClassName: eb.b }),
            }),
            null != S &&
                (0, a.jsx)(eD.A, {
                    user: s,
                    displayProfile: p,
                    themeType: eM.d.MODAL_V2,
                    className: eb.LX,
                    forceUserTheme: !0,
                    children: (0, a.jsx)("div", { className: eb.b8, style: { backgroundImage: `url(${S})` } }),
                }),
            (0, a.jsx)(eN.N, {
                theme: x,
                children: (e) =>
                    (0, a.jsxs)("div", {
                        className: n()(eb.cq, e),
                        inert: !0,
                        children: [
                            (0, a.jsx)(ej.A, {
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
                                containerClassName: eb.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                                hideProfileFrame: !0,
                            }),
                            (0, a.jsx)(e_.A, {
                                author: D,
                                message: (0, eE.rh)({
                                    ...(0, eC.Ay)({ channelId: "1337", content: H.intl.string(F.default.h5Cuej) }),
                                    state: P.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: eb.OT,
                                previewGuildId: l?.id,
                            }),
                            (0, a.jsx)(eh.A, {
                                user: s,
                                guildId: l?.id,
                                nameplate: j,
                                nameplateData: null == j ? (I ?? L) : void 0,
                                pendingGlobalName: i,
                                pendingDisplayNameStyles: D.displayNameStyles,
                                isHighlighted: !0,
                                className: eb.qF,
                            }),
                        ],
                    }),
            }),
            (0, a.jsxs)("div", {
                className: eb.dI,
                children: [
                    (0, a.jsx)(q.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: H.intl.format(F.default.prQba8, {
                            helpArticleLink: ey.A.getArticleURL(P.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, a.jsx)(eO, { darkPreview: f, onToggleTheme: v }),
                ],
            }),
        ],
    });
}
function eO(e) {
    let { darkPreview: s, onToggleTheme: l } = e,
        t = s ? P.NJ8.DARK : P.NJ8.LIGHT;
    return (0, a.jsx)(ef.I, {
        className: eb.xr,
        optionClassName: eb.$C,
        options: [
            {
                name: "",
                tooltip: H.intl.string(H.t.b8Cei3),
                value: P.NJ8.DARK,
                icon: eA.Z,
                className: t === P.NJ8.DARK ? eb.iB : void 0,
            },
            {
                name: "",
                tooltip: H.intl.string(H.t.K2sFfo),
                value: P.NJ8.LIGHT,
                icon: eg.F,
                className: t === P.NJ8.LIGHT ? eb.iB : void 0,
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
var eP = l(914002);
function eR(e) {
    let s,
        { transitionState: l, analyticsLocations: i, guildId: L, onClose: _, returnRef: I } = e,
        T = (0, c.bG)([S.default], () => S.default.getCurrentUser()),
        w =
            ((s = Y.Ay.useName(T)),
            (0, c.bG)([R.A, G.Ay], () => {
                let e = R.A.getPendingChanges(L);
                return null != L ? (e.pendingNickname ?? G.Ay.getNick(L, T?.id)) : e.pendingGlobalName;
            }, [L, T]) ??
                s ??
                ""),
        z = (0, c.bG)([p.A], () => p.A.getGuild(L)),
        { userDisplayNameStyles: U, guildDisplayNameStyles: J, pendingDisplayNameStyles: B } = (0, g.B0)(T, L),
        X = void 0 !== B ? B : (J ?? U),
        [V, Q] = t.useState(X?.fontId ?? o.x.DEFAULT),
        [W, Z] = t.useState(X?.effectId ?? d.z.SOLID),
        q = (0, D.as)(W) > 1,
        ee = (0, M._)(W),
        es = (0, b.A)(),
        el = X?.colors ?? [],
        [ea, ei] = t.useState(el.length > 0 && !q ? el[0] : ee.defaultColors[0]),
        [en, er] = t.useState(() => (el.length > 0 && q ? { [W]: el } : {})),
        ed = t.useMemo(() => en[W] ?? es[W], [en, W, es]);
    (0, A.A)(
        { type: r.ImpressionTypes.POPOUT, name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: eo } = (0, f.Ay)(i, N.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        ec = t.useMemo(() => (q ? ed : [ea]), [q, ed, ea]),
        em = t.useMemo(() => V !== X?.fontId || W !== X?.effectId || !(0, m.v)(ec, X?.colors ?? []), [X, V, W, ec]),
        { enabled: ex } = y.useConfig({ location: "DisplayNameStylesModal" }),
        eN = (0, C.ux)("DisplayNameStylesModal"),
        ef = v(),
        eA = j(),
        eg = (function (e) {
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
                    c ? (0, k.EW)(s) : (0, O.p)({ guildId: r, displayNameStyles: s }),
                        h.default.track(P.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                            font_name: o.x[l],
                            effect_name: d.z[a],
                            colors: i,
                        }),
                        m?.();
                }
            }, [s, l, a, i, n, m, r, c]);
        })({
            hasChanges: em,
            selectedFontId: V,
            selectedEffectId: W,
            selectedColors: ec,
            defaultColor: ee.defaultColors[0],
            guildId: L,
            onClose: _,
        }),
        ep = t.useCallback(() => {
            let { fontId: e, effectId: s, colors: l } = (0, D.gN)(ef, eA, ex);
            Q(e),
                Z(s),
                (0, D.as)(s) > 1 ? er((e) => ({ ...e, [s]: l })) : ei(l[0]),
                h.default.track(P.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [ef, eA, ex, er, ei]),
        eS = t.useCallback(
            (e) => {
                q ? er((s) => ({ ...s, [W]: e })) : ei(e[0]);
            },
            [q, W, er, ei],
        );
    return null == T
        ? null
        : (0, a.jsx)(f.f5, {
              value: eo,
              children: (0, a.jsx)(E.l.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, a.jsxs)(u.EO, {
                      "data-migration-pending": !0,
                      transitionState: l,
                      size: u.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: n()(eP.CR, { [eP.st]: eN }),
                      returnRef: I,
                      children: [
                          (0, a.jsxs)(u.$m, {
                              "data-migration-pending": !0,
                              className: n()(eP.jE, { [eP.st]: eN }),
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: eP.w1,
                                      children: [
                                          (0, a.jsx)(u.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: eP.bV,
                                              children: (0, a.jsx)(x.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: H.intl.string(F.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, a.jsx)(et, {
                                              selectedFontId: V,
                                              setSelectedFontId: Q,
                                              displayName: w,
                                              className: eP._,
                                          }),
                                          (0, a.jsx)($, {
                                              selectedEffectId: W,
                                              setSelectedEffectId: Z,
                                              className: eP._,
                                          }),
                                          (0, a.jsx)(K, {
                                              selectedColors: ec,
                                              setSelectedColors: eS,
                                              selectedEffectId: W,
                                              className: eP._,
                                              defaultColor: ee.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, a.jsx)(ek, {
                                      user: T,
                                      guild: z,
                                      displayName: w,
                                      selectedFontId: V,
                                      selectedEffectId: W,
                                      selectedColors: W === d.z.SOLID && (0, m.v)(ec, ee.defaultColors) ? [] : ec,
                                      onClose: _,
                                  }),
                              ],
                          }),
                          (0, a.jsx)(eu, {
                              onApply: eg,
                              onSurpriseMe: ep,
                              onClose: _,
                              canApply: em,
                              analyticsLocations: eo,
                          }),
                      ],
                  }),
              }),
          });
}

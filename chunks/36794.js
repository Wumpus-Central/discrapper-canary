a.d(t, { default: () => ey });
var l = a(627968),
    n = a(64700),
    r = a(110259),
    s = a(508425),
    i = a(559949),
    o = a(17928),
    d = a(52133),
    c = a(935462),
    u = a(534514),
    _ = a(793574),
    m = a(688810),
    f = a(139286),
    p = a(919395),
    h = a(71393),
    g = a(287809),
    x = a(954571),
    b = a(871162),
    A = a(945096),
    C = a(383197),
    v = a(207803),
    N = a(84540),
    S = a(652215),
    E = a(836602),
    j = a(696451),
    I = a(427262),
    T = a(403581),
    y = a(661531),
    w = a(48736),
    k = a(750656),
    D = a(864386),
    L = a(985018),
    M = a(250229),
    R = a(257170);
function P(e) {
    let { selectedColors: t, setSelectedColors: a, defaultColor: r, selectedEffectId: i, className: o } = e,
        d = i === s.z.GRADIENT,
        c = (0, n.useCallback)(
            (e) => {
                a([e]), x.default.track(S.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: e === r, colors: [e] });
            },
            [a, r],
        ),
        _ = (0, n.useCallback)(
            (e) => {
                a(e), x.default.track(S.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: !1, colors: e });
            },
            [a],
        );
    return (0, l.jsxs)("div", {
        className: o,
        children: [
            (0, l.jsxs)(u.D, {
                variant: "heading-md/semibold",
                className: R.s,
                children: [
                    L.intl.string(D.default.JOpi7z),
                    (0, l.jsx)(T.t, { size: "xs", color: y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(w.default, {
                className: M.Ei,
                colorContainerClassName: M.rx,
                defaultColor: r,
                colors: d ? k.Wf : k.Jl,
                value: t[0],
                secondaryValue: t[1] ?? void 0,
                onChange: c,
                onChangeGradientColors: _,
                isGradient: d,
                gradientButtonClassName: M.xr,
                gradientDegrees: 90,
                allowBlackCustomColor: !0,
                customPickerPosition: "top",
            }),
        ],
    });
}
var U = a(503698),
    G = a.n(U),
    H = a(331322),
    B = a(939249),
    Y = a(922301),
    O = a(368919),
    z = a(700090);
function V(e) {
    let { selectedEffectId: t, setSelectedEffectId: a, className: n } = e;
    return (0, l.jsxs)("div", {
        className: n,
        children: [
            (0, l.jsxs)(u.D, {
                variant: "heading-md/semibold",
                className: R.s,
                children: [
                    L.intl.string(D.default["1wilM1"]),
                    (0, l.jsx)(T.t, { size: "xs", color: y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(H.B, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                gap: 8,
                children: k.re.map((e) => (0, l.jsx)(Z, { effectId: e, selected: e === t, onClick: () => a(e) }, e)),
            }),
        ],
    });
}
function Z(e) {
    let { effectId: t, selected: a, onClick: n } = e,
        r = (0, C._)(t);
    return (0, l.jsx)(
        B.D,
        {
            className: G()(z.Tw, { [z.wH]: a }),
            onClick: n,
            children: (0, l.jsx)(O.A, {
                userName: r.name,
                effectDisplayType: Y.G.STATIC,
                displayNameStyles: r.previewStyles,
                textClassName: z.tr,
                inProfile: !0,
            }),
        },
        t,
    );
}
var F = a(834730),
    J = a(885574),
    Q = a(990078),
    W = a(73392),
    $ = a(699006);
function q(e) {
    let { selectedFontId: t, setSelectedFontId: a, displayName: n, className: r } = e,
        s = t !== i.x.DEFAULT,
        o = (0, A.Xr)(n);
    return (0, l.jsxs)("div", {
        className: r,
        children: [
            (0, l.jsxs)(u.D, {
                variant: "heading-md/semibold",
                className: R.s,
                children: [
                    L.intl.string(D.default.nP0ngb),
                    (0, l.jsx)(T.t, { size: "xs", color: y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(H.B, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                children: k.rA.map((e) => {
                    let n = (0, W.p)(e),
                        r = e === t;
                    return (0, l.jsx)(
                        Q.m,
                        {
                            text: L.intl.string(n.name),
                            asContainer: !0,
                            children: (0, l.jsx)(B.D, {
                                className: G()($.SO, { [$.wH]: r }),
                                onClick: () => a(e),
                                "aria-label": L.intl.string(n.name),
                                children: (0, l.jsx)(F.E, {
                                    variant: "text-lg/semibold",
                                    color: r ? "text-strong" : "text-default",
                                    className: G()($.FH, n.className),
                                    children: "Gg",
                                }),
                            }),
                        },
                        e,
                    );
                }),
            }),
            s &&
                o &&
                (0, l.jsxs)("div", {
                    className: $.Lb,
                    children: [
                        (0, l.jsx)(J.m, { size: "lg" }),
                        (0, l.jsx)(F.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: L.intl.string(D.default["+O1xL2"]),
                        }),
                    ],
                }),
        ],
    });
}
var K = a(821609),
    X = a(908803),
    ee = a(87719),
    et = a(465794),
    ea = a(757036),
    el = a(788868),
    en = a(277041);
function er(e) {
    let { onApply: t, onSurpriseMe: a, onClose: n, canApply: r } = e,
        s = (0, ea.L)(el.PremiumTypes.TIER_2),
        i = (0, l.jsx)(K.$, {
            variant: "secondary",
            size: "md",
            onClick: a,
            icon: { type: "rive", asset: X.m, riveProps: { dataBinding: { fill: y.A.colors.ICON_STRONG } } },
            text: L.intl.string(D.default.NOGFds),
        }),
        o = (0, l.jsxs)("div", {
            className: en.k0,
            children: [
                i,
                (0, l.jsx)(Q.m, {
                    text: L.intl.string(D.default.cVTpnj),
                    shouldShow: !r,
                    children: (0, l.jsx)(K.$, {
                        onClick: t,
                        disabled: !r,
                        text: L.intl.string(L.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        d = (0, l.jsxs)("div", {
            className: en.UX,
            children: [
                (0, l.jsxs)("div", {
                    className: en.iQ,
                    children: [
                        (0, l.jsx)(Q.m, {
                            text: L.intl.string(L.t["5AFxuK"]),
                            children: (0, l.jsx)(T.t, { size: "md", color: y.A.colors.ICON_STRONG }),
                        }),
                        (0, l.jsx)(F.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: en.h_,
                            children: L.intl.format(D.default.PWf0xS, {
                                onClickNitro: () => {
                                    x.default.track(S.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, ee.x)(n);
                                },
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: en.UD,
                    children: [
                        i,
                        (0, l.jsx)(et.A, {
                            premiumModalAnalyticsLocation: {
                                section: S.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: S.ZSU.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: el.pe.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, l.jsx)(c.jl, { "data-migration-pending": !0, className: en.qr, children: s ? o : d });
}
var es = a(366010),
    ei = a(43990),
    eo = a(629584),
    ed = a(943255),
    ec = a(575181),
    eu = a(736653),
    e_ = a(780898),
    em = a(344346),
    ef = a(320095),
    ep = a(963852),
    eh = a(763754),
    eg = a(20851),
    ex = a(986687),
    eb = a(101058),
    eA = a(999291),
    eC = a(686189),
    ev = a(946356),
    eN = a(975571),
    eS = a(996988),
    eE = a(471260);
function ej(e) {
    let {
            user: t,
            guild: a,
            displayName: r,
            selectedFontId: s,
            selectedEffectId: i,
            selectedColors: d,
            onClose: u,
        } = e,
        _ = (0, eu.Ay)(),
        m = (0, es.M)(_),
        [f, h] = (0, n.useState)(m),
        g = (0, eA.Ay)(t.id, null),
        { bannerSrc: b } = (0, eC.A)({ displayProfile: g, size: 413, canAnimate: !1 }),
        A = (0, o.cf)([E.A], () => E.A.getPendingChanges(a?.id)),
        C = (0, eb.V7)({ userId: t.id, image: A.pendingAvatar }),
        { userNameplate: v, guildNameplate: N, pendingNameplate: j } = (0, p.rv)(t, a?.id),
        I = (0, e_.WK)(N);
    f && !m ? (_ = S.NJ8.DARK) : !f && m && (_ = S.NJ8.LIGHT);
    let T = (0, n.useCallback)(() => {
            x.default.track(S.HAw.DISPLAY_NAME_STYLES_CLOSED), u();
        }, [u]),
        y = (0, n.useCallback)((e) => {
            h(e === S.NJ8.DARK), x.default.track(S.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === S.NJ8.DARK });
        }, []),
        w = (0, n.useMemo)(
            () => ({ ...(0, eh.FT)(t, null), nick: r, displayNameStyles: { fontId: s, effectId: i, colors: d } }),
            [t, s, i, d, r],
        );
    return (0, l.jsxs)("div", {
        className: eE._l,
        children: [
            (0, l.jsx)(c.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: eE.bV,
                children: (0, l.jsx)(c.s_, { "data-migration-pending": !0, onClick: T, innerClassName: eE.b }),
            }),
            null != b &&
                (0, l.jsx)(ev.A, {
                    user: t,
                    displayProfile: g,
                    themeType: eS.d.MODAL_V2,
                    className: eE.LX,
                    forceUserTheme: !0,
                    children: (0, l.jsx)("div", { className: eE.b8, style: { backgroundImage: `url(${b})` } }),
                }),
            (0, l.jsx)(ei.N, {
                theme: _,
                children: (e) =>
                    (0, l.jsxs)("div", {
                        className: G()(eE.cq, e),
                        inert: !0,
                        children: [
                            (0, l.jsx)(ex.A, {
                                user: t,
                                guild: a,
                                ...A,
                                pendingAvatar: C,
                                pendingGlobalName: r,
                                pendingDisplayNameStyles: w.displayNameStyles,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: eE.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                            }),
                            (0, l.jsx)(eg.A, {
                                author: w,
                                message: (0, ef.rh)({
                                    ...(0, ep.Ay)({ channelId: "1337", content: L.intl.string(D.default.h5Cuej) }),
                                    state: S.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: eE.OT,
                                previewGuildId: a?.id,
                            }),
                            (0, l.jsx)(em.A, {
                                user: t,
                                guildId: a?.id,
                                nameplate: j,
                                nameplateData: null == j ? (I ?? v) : void 0,
                                pendingGlobalName: r,
                                pendingDisplayNameStyles: w.displayNameStyles,
                                isHighlighted: !0,
                                className: eE.qF,
                            }),
                        ],
                    }),
            }),
            (0, l.jsxs)("div", {
                className: eE.dI,
                children: [
                    (0, l.jsx)(F.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: L.intl.format(D.default.prQba8, {
                            helpArticleLink: eN.A.getArticleURL(S.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, l.jsx)(eI, { darkPreview: f, onToggleTheme: y }),
                ],
            }),
        ],
    });
}
function eI(e) {
    let { darkPreview: t, onToggleTheme: a } = e,
        n = t ? S.NJ8.DARK : S.NJ8.LIGHT;
    return (0, l.jsx)(eo.I, {
        className: eE.xr,
        optionClassName: eE.$C,
        options: [
            {
                name: "",
                tooltip: L.intl.string(L.t.b8Cei3),
                value: S.NJ8.DARK,
                icon: ed.Z,
                className: n === S.NJ8.DARK ? eE.iB : void 0,
            },
            {
                name: "",
                tooltip: L.intl.string(L.t.K2sFfo),
                value: S.NJ8.LIGHT,
                icon: ec.F,
                className: n === S.NJ8.LIGHT ? eE.iB : void 0,
            },
        ],
        value: n,
        onChange: (e) => {
            let { value: t } = e;
            return a(t);
        },
        look: "pill",
    });
}
var eT = a(511698);
function ey(e) {
    let t,
        { transitionState: a, analyticsLocations: T, guildId: y, onClose: w } = e,
        k = (0, o.bG)([g.default], () => g.default.getCurrentUser()),
        M =
            ((t = I.Ay.useName(k)),
            (0, o.bG)([E.A, j.Ay], () => {
                let e = E.A.getPendingChanges(y);
                return null != y ? (e.pendingNickname ?? j.Ay.getNick(y, k?.id)) : e.pendingGlobalName;
            }, [y, k]) ??
                t ??
                ""),
        R = (0, o.bG)([h.A], () => h.A.getGuild(y)),
        { userDisplayNameStyles: U, guildDisplayNameStyles: G, pendingDisplayNameStyles: H } = (0, p.B0)(k, y),
        B = void 0 !== H ? H : (G ?? U),
        [Y, O] = n.useState(B?.fontId ?? i.x.DEFAULT),
        [z, Z] = n.useState(B?.effectId ?? s.z.SOLID),
        F = (0, C._)(z),
        J = (0, C._)(s.z.GRADIENT),
        Q = B?.colors ?? [],
        [W, $] = n.useState(Q.length > 0 && z !== s.z.GRADIENT ? Q[0] : F.defaultColors[0]),
        [K, X] = n.useState(Q.length > 0 && z === s.z.GRADIENT ? Q : J.defaultColors);
    (0, f.A)(
        { type: r.ImpressionTypes.POPOUT, name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: ee } = (0, m.Ay)(T, _.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        et = n.useMemo(() => (z === s.z.GRADIENT ? K : [W]), [z, K, W]),
        ea = n.useMemo(() => Y !== B?.fontId || z !== B?.effectId || !(0, d.v)(et, B?.colors ?? []), [B, Y, z, et]),
        el = (function (e) {
            let {
                hasChanges: t,
                selectedFontId: a,
                selectedEffectId: l,
                selectedColors: r,
                defaultColor: o,
                guildId: d,
                isTryItOut: c,
                onClose: u,
            } = e;
            return n.useCallback(() => {
                if (t) {
                    let e = r;
                    l === s.z.SOLID && r.length > 0 && r[0] === o && (e = []);
                    let t = { fontId: a, effectId: l, colors: e };
                    c ? (0, v.EW)(t) : (0, N.p)({ guildId: d, displayNameStyles: t }),
                        x.default.track(S.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                            font_name: i.x[a],
                            effect_name: s.z[l],
                            colors: r,
                        }),
                        u?.();
                }
            }, [t, a, l, r, o, u, d, c]);
        })({
            hasChanges: ea,
            selectedFontId: Y,
            selectedEffectId: z,
            selectedColors: et,
            defaultColor: F.defaultColors[0],
            guildId: y,
            onClose: w,
        }),
        en = n.useCallback(() => {
            let { fontId: e, effectId: t, colors: a } = (0, A.gN)();
            O(e), Z(t), t === s.z.GRADIENT ? X(a) : $(a[0]), x.default.track(S.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [X, $]),
        es = n.useCallback(
            (e) => {
                Z(e);
            },
            [Z],
        ),
        ei = n.useCallback(
            (e) => {
                z === s.z.GRADIENT ? X(e) : $(e[0]);
            },
            [z, X, $],
        );
    return null == k
        ? null
        : (0, l.jsx)(m.f5, {
              value: ee,
              children: (0, l.jsx)(b.l.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, l.jsxs)(c.EO, {
                      "data-migration-pending": !0,
                      transitionState: a,
                      size: c.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: eT.CR,
                      children: [
                          (0, l.jsxs)(c.$m, {
                              "data-migration-pending": !0,
                              className: eT.jE,
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: eT.w1,
                                      children: [
                                          (0, l.jsx)(c.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: eT.bV,
                                              children: (0, l.jsx)(u.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: L.intl.string(D.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, l.jsx)(q, {
                                              selectedFontId: Y,
                                              setSelectedFontId: O,
                                              displayName: M,
                                              className: eT._,
                                          }),
                                          (0, l.jsx)(V, {
                                              selectedEffectId: z,
                                              setSelectedEffectId: es,
                                              className: eT._,
                                          }),
                                          (0, l.jsx)(P, {
                                              selectedColors: et,
                                              setSelectedColors: ei,
                                              selectedEffectId: z,
                                              className: eT._,
                                              defaultColor: F.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(ej, {
                                      user: k,
                                      guild: R,
                                      displayName: M,
                                      selectedFontId: Y,
                                      selectedEffectId: z,
                                      selectedColors: z === s.z.SOLID && (0, d.v)(et, F.defaultColors) ? [] : et,
                                      onClose: w,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(er, {
                              onApply: el,
                              onSurpriseMe: en,
                              onClose: w,
                              canApply: ea,
                              analyticsLocations: ee,
                          }),
                      ],
                  }),
              }),
          });
}

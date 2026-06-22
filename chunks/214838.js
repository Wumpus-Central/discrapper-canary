s.d(a, { default: () => eP });
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
    L = [...C, ...E._k];
function _() {
    let e = (0, h.ux)("font-order");
    return t.useMemo(() => (e ? L : C), [e]);
}
var j = s(945096);
let I = (0, s(945810).mj)({
    name: "2026-05-dns-surprise-me-weighted-randomizer",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var T = s(898985),
    v = s(430571),
    D = s(207803),
    y = s(84540),
    M = s(652215),
    b = s(836602),
    k = s(696451),
    O = s(427262),
    P = s(403581),
    R = s(661531),
    G = s(48736),
    Y = s(864386),
    w = s(375708),
    z = s(250229),
    U = s(257170);
function F(e) {
    let { selectedColors: a, setSelectedColors: s, defaultColor: i, selectedEffectId: n, className: r } = e,
        d = (0, j.as)(n),
        o = d > 1,
        c = (0, t.useMemo)(() => (0, E.ii)(n).map((e) => ({ colors: e, name: "" })), [n]),
        u = (0, t.useCallback)(
            (e) => {
                s([e]), p.default.track(M.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: e === i, colors: [e] });
            },
            [s, i],
        ),
        x = (0, t.useCallback)(
            (e) => {
                s(e), p.default.track(M.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: !1, colors: e });
            },
            [s],
        );
    return (0, l.jsxs)("div", {
        className: r,
        children: [
            (0, l.jsxs)(m.D, {
                variant: "heading-md/semibold",
                className: U.s,
                children: [
                    w.intl.string(Y.default.JOpi7z),
                    (0, l.jsx)(P.t, { size: "xs", color: R.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(G.default, {
                className: z.Ei,
                colorContainerClassName: z.rx,
                defaultColor: i,
                colors: o ? c : E.Jl,
                value: a[0],
                gradientColors: a,
                onChange: u,
                onChangeGradientColors: x,
                isGradient: o,
                gradientWidth: d > 2 ? "100%" : "104px",
                gradientDegrees: 90,
                allowBlackCustomColor: !0,
                customPickerPosition: "top",
            }),
        ],
    });
}
var H = s(503698),
    J = s.n(H),
    B = s(331322),
    K = s(939249),
    X = s(922301),
    V = s(660184),
    Q = s(700090);
function W(e) {
    let { selectedEffectId: a, setSelectedEffectId: s, className: t } = e,
        i = (0, h.ux)("DisplayNameStylesEffectSelection") ? [...E.re, n.z.PRISM, n.z.GUMMY] : E.re;
    return (0, l.jsxs)("div", {
        className: t,
        children: [
            (0, l.jsxs)(m.D, {
                variant: "heading-md/semibold",
                className: U.s,
                children: [
                    w.intl.string(Y.default["1wilM1"]),
                    (0, l.jsx)(P.t, { size: "xs", color: R.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(B.B, {
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
        K.D,
        {
            className: J()(Q.Tw, { [Q.wH]: s }),
            onClick: t,
            children: (0, l.jsx)(V.A, {
                userName: i.name,
                effectDisplayType: X.G.STATIC,
                displayNameStyles: i.previewStyles,
                textClassName: Q.tr,
                inProfile: !0,
            }),
        },
        a,
    );
}
var Z = s(834730),
    q = s(885574),
    ee = s(990078),
    ea = s(73392),
    es = s(699006);
function el(e) {
    let { selectedFontId: a, setSelectedFontId: s, displayName: t, className: i } = e,
        n = _(),
        d = a !== r.x.DEFAULT,
        o = (0, j.Xr)(t);
    return (0, l.jsxs)("div", {
        className: i,
        children: [
            (0, l.jsxs)(m.D, {
                variant: "heading-md/semibold",
                className: U.s,
                children: [
                    w.intl.string(Y.default.nP0ngb),
                    (0, l.jsx)(P.t, { size: "xs", color: R.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(B.B, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                children: n.map((e) => {
                    let t = (0, ea.p)(e),
                        i = e === a;
                    return (0, l.jsx)(
                        ee.m,
                        {
                            text: w.intl.string(t.name),
                            asContainer: !0,
                            children: (0, l.jsx)(K.D, {
                                className: J()(es.SO, { [es.wH]: i }),
                                onClick: () => s(e),
                                "aria-label": w.intl.string(t.name),
                                children: (0, l.jsx)(Z.E, {
                                    variant: "text-lg/semibold",
                                    color: i ? "text-strong" : "text-default",
                                    className: J()(es.FH, t.className),
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
                    className: es.Lb,
                    children: [
                        (0, l.jsx)(q.m, { size: "lg" }),
                        (0, l.jsx)(Z.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: w.intl.string(Y.default["+O1xL2"]),
                        }),
                    ],
                }),
        ],
    });
}
var et = s(821609),
    ei = s(908803),
    en = s(87719),
    er = s(465794),
    ed = s(757036),
    eo = s(788868),
    ec = s(277041);
function em(e) {
    let { onApply: a, onSurpriseMe: s, onClose: t, canApply: i } = e,
        n = (0, ed.L)(eo.PremiumTypes.TIER_2),
        r = (0, l.jsx)(et.$, {
            variant: "secondary",
            size: "md",
            onClick: s,
            icon: { type: "rive", asset: ei.m, riveProps: { dataBinding: { fill: R.A.colors.ICON_STRONG } } },
            text: w.intl.string(Y.default.NOGFds),
        }),
        d = (0, l.jsxs)("div", {
            className: ec.k0,
            children: [
                r,
                (0, l.jsx)(ee.m, {
                    text: w.intl.string(Y.default.cVTpnj),
                    shouldShow: !i,
                    children: (0, l.jsx)(et.$, {
                        onClick: a,
                        disabled: !i,
                        text: w.intl.string(w.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        o = (0, l.jsxs)("div", {
            className: ec.UX,
            children: [
                (0, l.jsxs)("div", {
                    className: ec.iQ,
                    children: [
                        (0, l.jsx)(ee.m, {
                            text: w.intl.string(w.t["5AFxuK"]),
                            children: (0, l.jsx)(P.t, { size: "md", color: R.A.colors.ICON_STRONG }),
                        }),
                        (0, l.jsx)(Z.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: ec.h_,
                            children: w.intl.format(Y.default.PWf0xS, {
                                onClickNitro: () => {
                                    p.default.track(M.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, en.x)(t);
                                },
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: ec.UD,
                    children: [
                        r,
                        (0, l.jsx)(er.A, {
                            premiumModalAnalyticsLocation: {
                                section: M.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: M.ZSU.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: eo.pe.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, l.jsx)(c.jl, { "data-migration-pending": !0, className: ec.qr, children: n ? d : o });
}
var eu = s(366010),
    ex = s(43990),
    eN = s(629584),
    ef = s(943255),
    eA = s(575181),
    eg = s(736653),
    ep = s(780898),
    eS = s(344346),
    eh = s(320095),
    eE = s(963852),
    eC = s(763754),
    eL = s(20851),
    e_ = s(986687),
    ej = s(101058),
    eI = s(999291),
    eT = s(686189),
    ev = s(946356),
    eD = s(975571),
    ey = s(996988),
    eM = s(471260);
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
        u = (0, eg.Ay)(),
        x = (0, eu.M)(u),
        [N, A] = (0, t.useState)(x),
        g = (0, eI.Ay)(a.id, null),
        { bannerSrc: S } = (0, eT.A)({ displayProfile: g, size: 413, canAnimate: !1 }),
        h = (0, d.cf)([b.A], () => b.A.getPendingChanges(s?.id)),
        E = (0, ej.V7)({ userId: a.id, image: h.pendingAvatar }),
        { userNameplate: C, guildNameplate: L, pendingNameplate: _ } = (0, f.rv)(a, s?.id),
        j = (0, ep.WK)(L);
    N && !x ? (u = M.NJ8.DARK) : !N && x && (u = M.NJ8.LIGHT);
    let I = (0, t.useCallback)(() => {
            p.default.track(M.HAw.DISPLAY_NAME_STYLES_CLOSED), m();
        }, [m]),
        T = (0, t.useCallback)((e) => {
            A(e === M.NJ8.DARK), p.default.track(M.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === M.NJ8.DARK });
        }, []),
        v = (0, t.useMemo)(
            () => ({ ...(0, eC.FT)(a, null), nick: i, displayNameStyles: { fontId: n, effectId: r, colors: o } }),
            [a, n, r, o, i],
        );
    return (0, l.jsxs)("div", {
        className: eM._l,
        children: [
            (0, l.jsx)(c.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: eM.bV,
                children: (0, l.jsx)(c.s_, { "data-migration-pending": !0, onClick: I, innerClassName: eM.b }),
            }),
            null != S &&
                (0, l.jsx)(ev.A, {
                    user: a,
                    displayProfile: g,
                    themeType: ey.d.MODAL_V2,
                    className: eM.LX,
                    forceUserTheme: !0,
                    children: (0, l.jsx)("div", { className: eM.b8, style: { backgroundImage: `url(${S})` } }),
                }),
            (0, l.jsx)(ex.N, {
                theme: u,
                children: (e) =>
                    (0, l.jsxs)("div", {
                        className: J()(eM.cq, e),
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
                                containerClassName: eM.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                                hideProfileFrame: !0,
                            }),
                            (0, l.jsx)(eL.A, {
                                author: v,
                                message: (0, eh.rh)({
                                    ...(0, eE.Ay)({ channelId: "1337", content: w.intl.string(Y.default.h5Cuej) }),
                                    state: M.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: eM.OT,
                                previewGuildId: s?.id,
                            }),
                            (0, l.jsx)(eS.A, {
                                user: a,
                                guildId: s?.id,
                                nameplate: _,
                                nameplateData: null == _ ? (j ?? C) : void 0,
                                pendingGlobalName: i,
                                pendingDisplayNameStyles: v.displayNameStyles,
                                isHighlighted: !0,
                                className: eM.qF,
                            }),
                        ],
                    }),
            }),
            (0, l.jsxs)("div", {
                className: eM.dI,
                children: [
                    (0, l.jsx)(Z.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: w.intl.format(Y.default.prQba8, {
                            helpArticleLink: eD.A.getArticleURL(M.MVz.DISPLAY_NAME_STYLES),
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
        t = a ? M.NJ8.DARK : M.NJ8.LIGHT;
    return (0, l.jsx)(eN.I, {
        className: eM.xr,
        optionClassName: eM.$C,
        options: [
            {
                name: "",
                tooltip: w.intl.string(w.t.b8Cei3),
                value: M.NJ8.DARK,
                icon: ef.Z,
                className: t === M.NJ8.DARK ? eM.iB : void 0,
            },
            {
                name: "",
                tooltip: w.intl.string(w.t.K2sFfo),
                value: M.NJ8.LIGHT,
                icon: eA.F,
                className: t === M.NJ8.LIGHT ? eM.iB : void 0,
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
var eO = s(511698);
function eP(e) {
    let a,
        { transitionState: s, analyticsLocations: h, guildId: E, onClose: C, returnRef: L } = e,
        P = (0, d.bG)([g.default], () => g.default.getCurrentUser()),
        R =
            ((a = O.Ay.useName(P)),
            (0, d.bG)([b.A, k.Ay], () => {
                let e = b.A.getPendingChanges(E);
                return null != E ? (e.pendingNickname ?? k.Ay.getNick(E, P?.id)) : e.pendingGlobalName;
            }, [E, P]) ??
                a ??
                ""),
        G = (0, d.bG)([A.A], () => A.A.getGuild(E)),
        { userDisplayNameStyles: z, guildDisplayNameStyles: U, pendingDisplayNameStyles: H } = (0, f.B0)(P, E),
        J = void 0 !== H ? H : (U ?? z),
        [B, K] = t.useState(J?.fontId ?? r.x.DEFAULT),
        [X, V] = t.useState(J?.effectId ?? n.z.SOLID),
        Q = (0, j.as)(X) > 1,
        $ = (0, T._)(X),
        Z = (0, v.A)(),
        q = J?.colors ?? [],
        [ee, ea] = t.useState(q.length > 0 && !Q ? q[0] : $.defaultColors[0]),
        [es, et] = t.useState(() => (q.length > 0 && Q ? { [X]: q } : {})),
        ei = t.useMemo(() => es[X] ?? Z[X], [es, X, Z]);
    (0, N.A)(
        { type: i.ImpressionTypes.POPOUT, name: i.ImpressionNames.DISPLAY_NAME_STYLES_MODAL },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: en } = (0, x.Ay)(h, u.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        er = t.useMemo(() => (Q ? ei : [ee]), [Q, ei, ee]),
        ed = t.useMemo(() => B !== J?.fontId || X !== J?.effectId || !(0, o.v)(er, J?.colors ?? []), [J, B, X, er]),
        { enabled: eo } = I.useConfig({ location: "DisplayNameStylesModal" }),
        ec = _(),
        eu = (function (e) {
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
                    c ? (0, D.EW)(a) : (0, y.p)({ guildId: o, displayNameStyles: a }),
                        p.default.track(M.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                            font_name: r.x[s],
                            effect_name: n.z[l],
                            colors: i,
                        }),
                        m?.();
                }
            }, [a, s, l, i, d, m, o, c]);
        })({
            hasChanges: ed,
            selectedFontId: B,
            selectedEffectId: X,
            selectedColors: er,
            defaultColor: $.defaultColors[0],
            guildId: E,
            onClose: C,
        }),
        ex = t.useCallback(() => {
            let { fontId: e, effectId: a, colors: s } = (0, j.gN)(ec, eo);
            K(e),
                V(a),
                (0, j.as)(a) > 1 ? et((e) => ({ ...e, [a]: s })) : ea(s[0]),
                p.default.track(M.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [ec, eo, et, ea]),
        eN = t.useCallback(
            (e) => {
                Q ? et((a) => ({ ...a, [X]: e })) : ea(e[0]);
            },
            [Q, X, et, ea],
        );
    return null == P
        ? null
        : (0, l.jsx)(x.f5, {
              value: en,
              children: (0, l.jsx)(S.l.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, l.jsxs)(c.EO, {
                      "data-migration-pending": !0,
                      transitionState: s,
                      size: c.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: eO.CR,
                      returnRef: L,
                      children: [
                          (0, l.jsxs)(c.$m, {
                              "data-migration-pending": !0,
                              className: eO.jE,
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: eO.w1,
                                      children: [
                                          (0, l.jsx)(c.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: eO.bV,
                                              children: (0, l.jsx)(m.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: w.intl.string(Y.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, l.jsx)(el, {
                                              selectedFontId: B,
                                              setSelectedFontId: K,
                                              displayName: R,
                                              className: eO._,
                                          }),
                                          (0, l.jsx)(W, {
                                              selectedEffectId: X,
                                              setSelectedEffectId: V,
                                              className: eO._,
                                          }),
                                          (0, l.jsx)(F, {
                                              selectedColors: er,
                                              setSelectedColors: eN,
                                              selectedEffectId: X,
                                              className: eO._,
                                              defaultColor: $.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(eb, {
                                      user: P,
                                      guild: G,
                                      displayName: R,
                                      selectedFontId: B,
                                      selectedEffectId: X,
                                      selectedColors: X === n.z.SOLID && (0, o.v)(er, $.defaultColors) ? [] : er,
                                      onClose: C,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(em, {
                              onApply: eu,
                              onSurpriseMe: ex,
                              onClose: C,
                              canApply: ed,
                              analyticsLocations: en,
                          }),
                      ],
                  }),
              }),
          });
}

s.d(l, { default: () => eQ });
var a = s(627968),
    t = s(64700),
    i = s(503698),
    n = s.n(i),
    r = s(562708),
    o = s(508425),
    d = s(559949),
    c = s(17928),
    u = s(52133),
    m = s(935462),
    x = s(534514),
    h = s(793574),
    N = s(688810),
    f = s(139286),
    g = s(919395),
    A = s(71393),
    p = s(287809),
    j = s(174459),
    S = s(871162),
    E = s(248778),
    C = s(750656);
let v = [...C.re, ...C.gz];
function I() {
    let e = (0, E.ux)("effect-order");
    return t.useMemo(() => (e ? v : C.re), [e]);
}
let _ = [
        d.x.DEFAULT,
        d.x.ZILLA_SLAB,
        d.x.CHERRY_BOMB,
        d.x.CHICLE,
        d.x.MUSEO_MODERNO,
        d.x.NEO_CASTEL,
        d.x.PIXELIFY,
        d.x.SINISTRE,
    ],
    L = [..._, ...C._k];
function T() {
    let e = (0, E.ux)("font-order");
    return t.useMemo(() => (e ? L : _), [e]);
}
var b = s(945096),
    y = s(898985),
    D = s(430571),
    k = s(207803),
    M = s(84540),
    O = s(652215),
    R = s(836602),
    P = s(696451),
    G = s(427262),
    H = s(403581),
    z = s(661531),
    Y = s(48736),
    w = s(887129),
    U = s(837381),
    F = s(741918),
    J = s(317097),
    B = s(990078),
    K = s(922016),
    W = s(939249),
    $ = s(22231),
    X = s(933832),
    V = s(13759);
function Z(e) {
    let { colors: l, selected: s, onSelect: t, listItemId: i, "aria-label": n } = e,
        r = (0, U.rm)(i);
    return (0, a.jsxs)("button", {
        type: "button",
        className: V.nf,
        onClick: t,
        "aria-label": n,
        ...r,
        children: [
            l.map((e, l) => (0, a.jsx)("div", { className: V._4, style: { background: (0, J.Hl)(e) } }, l)),
            s && (0, a.jsx)(X.A, { className: V.z6, size: "md", color: "currentColor" }),
        ],
    });
}
var q = s(247366),
    Q = s(315710),
    ee = s(650583),
    el = s(25597);
let es = [0, 60, 120, 180, 240, 300, 360];
function ea(e) {
    let { value: l, onChange: s, hueToColor: i, onConfirm: r, "aria-label": o, className: d } = e,
        c = (0, b.xo)((0, J.tf)(l).h),
        u = t.useRef(null);
    (0, Q.tj)(u);
    let m = t.useCallback((e) => s(i((0, b.xo)(e))), [s, i]),
        x = t.useCallback((e) => m(e.h), [m]),
        h = t.useMemo(() => `linear-gradient(to right, ${es.map((e) => (0, J.Hl)(i(e))).join(", ")})`, [i]),
        N = t.useMemo(
            () =>
                function (e) {
                    let { hsl: l } = e;
                    return (0, a.jsx)("div", { className: el.Wn, style: { background: (0, J.Hl)(i(l.h)) } });
                },
            [i],
        ),
        f = t.useCallback(
            (e) => {
                switch (e.key) {
                    case ee.dh.ARROW_LEFT:
                    case ee.dh.ARROW_DOWN:
                        m(c - 5);
                        break;
                    case ee.dh.ARROW_RIGHT:
                    case ee.dh.ARROW_UP:
                        m(c + 5);
                        break;
                    case ee.dh.HOME:
                        m(0);
                        break;
                    case ee.dh.END:
                        m(359);
                        break;
                    case ee.dh.ENTER:
                    case ee.dh.SPACE:
                        if (null == r) return;
                        r();
                        break;
                    default:
                        return;
                }
                e.preventDefault();
            },
            [c, m, r],
        );
    return (0, a.jsx)("div", {
        ref: u,
        className: n()(el.kL, d),
        children: (0, a.jsx)("div", {
            className: el.SP,
            style: { "--custom-hue-track": h },
            role: "slider",
            tabIndex: 0,
            "aria-label": o,
            "aria-valuemin": 0,
            "aria-valuemax": 360,
            "aria-valuenow": Math.round(c),
            onKeyDown: f,
            children: (0, a.jsx)(q.Hue, {
                hsl: { h: c, s: 1, l: 0.5 },
                direction: "horizontal",
                pointer: N,
                onChange: x,
            }),
        }),
    });
}
var et = s(864386),
    ei = s(375708),
    en = s(637495);
let er = () => Promise.resolve();
function eo(e) {
    let { selectedColors: l, setSelectedColors: s, className: i } = e,
        [r, o] = t.useState(!1),
        d = t.useRef(null),
        c = l[0] ?? O.TGz,
        m = t.useCallback((e) => s((0, b.cf)(e)), [s]),
        x = C.lU.findIndex((e) => (0, u.v)(e, l)),
        h = x >= 0,
        N = l.length > 0 ? l : (0, b.cf)(c),
        f = ei.intl.string(et.default["6OxgN7"]),
        g = ei.intl.string(ei.t["FHBa/1"]),
        A = (0, w.Ay)({
            id: "gummy-color-picker",
            isEnabled: !0,
            orientation: F.Gl.HORIZONTAL,
            scrollToStart: er,
            scrollToEnd: er,
        });
    return (0, a.jsx)(U.hD, {
        navigator: A,
        children: (0, a.jsx)(U.PR, {
            children: (e) => {
                let { ref: l, ...t } = e;
                return (0, a.jsxs)("div", {
                    className: n()(en.kL, i),
                    ref: l,
                    ...t,
                    children: [
                        (0, a.jsxs)("div", {
                            className: en.Ix,
                            children: [
                                (0, a.jsx)("div", {
                                    className: n()(en.yB, { [en.EI]: h }),
                                    children:
                                        !h &&
                                        N.map((e, l) =>
                                            (0, a.jsx)(
                                                "div",
                                                { className: en._4, style: { background: (0, J.Hl)(e) } },
                                                l,
                                            ),
                                        ),
                                }),
                                (0, a.jsx)("div", {
                                    className: en.fX,
                                    children: (0, a.jsx)(K.Y, {
                                        targetElementRef: d,
                                        position: "top",
                                        align: "left",
                                        shouldShow: r,
                                        onRequestOpen: () => o(!0),
                                        onRequestClose: () => o(!1),
                                        renderPopout: () =>
                                            (0, a.jsx)(ea, {
                                                value: h ? O.TGz : c,
                                                onChange: m,
                                                hueToColor: b.j0,
                                                onConfirm: () => o(!1),
                                                "aria-label": g,
                                            }),
                                        children: (e) =>
                                            (0, a.jsx)(B.m, {
                                                text: g,
                                                position: "top",
                                                ariaHidden: !0,
                                                children: (0, a.jsx)("div", {
                                                    ...e,
                                                    ref: d,
                                                    className: en.r9,
                                                    children: (0, a.jsx)(U.tG, {
                                                        id: "custom",
                                                        children: (e) =>
                                                            (0, a.jsx)(W.D, {
                                                                ...e,
                                                                className: en.Vz,
                                                                "aria-label": g,
                                                                children: (0, a.jsx)($.R, {
                                                                    size: "custom",
                                                                    width: 18,
                                                                    height: 18,
                                                                    color: "currentColor",
                                                                    className: en.IZ,
                                                                }),
                                                            }),
                                                    }),
                                                }),
                                            }),
                                    }),
                                }),
                            ],
                        }),
                        C.lU.map((e, l) =>
                            (0, a.jsx)(
                                Z,
                                {
                                    listItemId: `gummy-preset-${l}`,
                                    colors: e,
                                    selected: x === l,
                                    onSelect: () => s([...e]),
                                    "aria-label": `${f} ${l + 1}`,
                                },
                                l,
                            ),
                        ),
                    ],
                });
            },
        }),
    });
}
var ed = s(250229),
    ec = s(257170);
function eu(e) {
    let { selectedColors: l, setSelectedColors: s, defaultColor: i, selectedEffectId: n, className: r } = e,
        d = (0, b.as)(n) > 1,
        c = n === o.z.PRISM ? 210 : 104,
        u = (0, t.useMemo)(() => (0, C.ii)(n).map((e) => ({ colors: e, name: "" })), [n]),
        m = (0, t.useCallback)(
            (e) => {
                s([e]), j.default.track(O.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: e === i, colors: [e] });
            },
            [s, i],
        ),
        h = (0, t.useCallback)(
            (e) => {
                s(e), j.default.track(O.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: !1, colors: e });
            },
            [s],
        );
    return (0, a.jsxs)("div", {
        className: r,
        children: [
            (0, a.jsxs)(x.D, {
                variant: "heading-md/semibold",
                className: ec.s,
                children: [
                    ei.intl.string(et.default.JOpi7z),
                    (0, a.jsx)(H.t, { size: "xs", color: z.A.colors.TEXT_DEFAULT }),
                ],
            }),
            n === o.z.GUMMY
                ? (0, a.jsx)(eo, { selectedColors: l, setSelectedColors: h })
                : (0, a.jsx)(Y.default, {
                      className: ed.Ei,
                      colorContainerClassName: ed.rx,
                      defaultColor: i,
                      colors: d ? u : C.Jl,
                      value: l[0],
                      gradientColors: l,
                      onChange: m,
                      onChangeGradientColors: h,
                      isGradient: d,
                      gradientWidth: `${c}px`,
                      gradientDegrees: 90,
                      allowBlackCustomColor: !0,
                      customPickerPosition: "top",
                  }),
        ],
    });
}
var em = s(922301),
    ex = s(660184),
    eh = s(700090);
function eN(e) {
    let { selectedEffectId: l, setSelectedEffectId: s, className: t } = e,
        i = I(),
        n = Math.ceil(i.length / 2);
    return (0, a.jsxs)("div", {
        className: t,
        children: [
            (0, a.jsxs)(x.D, {
                variant: "heading-md/semibold",
                className: ec.s,
                children: [
                    ei.intl.string(et.default["1wilM1"]),
                    (0, a.jsx)(H.t, { size: "xs", color: z.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ec.f,
                style: { "--custom-dns-tile-columns": n },
                children: i.map((e) => (0, a.jsx)(ef, { effectId: e, selected: e === l, onClick: () => s(e) }, e)),
            }),
        ],
    });
}
function ef(e) {
    let { effectId: l, selected: s, onClick: t } = e,
        i = (0, y._)(l);
    return (0, a.jsx)(
        W.D,
        {
            className: n()(eh.Tw, { [eh.wH]: s }),
            onClick: t,
            children: (0, a.jsx)(ex.A, {
                userName: i.name,
                effectDisplayType: em.G.STATIC,
                displayNameStyles: i.previewStyles,
                textClassName: eh.tr,
                inProfile: !0,
            }),
        },
        l,
    );
}
var eg = s(834730),
    eA = s(885574),
    ep = s(73392),
    ej = s(699006);
function eS(e) {
    let { selectedFontId: l, setSelectedFontId: s, displayName: t, className: i } = e,
        r = T(),
        o = l !== d.x.DEFAULT,
        c = (0, b.Xr)(t),
        u = Math.ceil(r.length / 2);
    return (0, a.jsxs)("div", {
        className: i,
        children: [
            (0, a.jsxs)(x.D, {
                variant: "heading-md/semibold",
                className: ec.s,
                children: [
                    ei.intl.string(et.default.nP0ngb),
                    (0, a.jsx)(H.t, { size: "xs", color: z.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ec.f,
                style: { "--custom-dns-tile-columns": u },
                children: r.map((e) => {
                    let t = (0, ep.p)(e),
                        i = e === l;
                    return (0, a.jsx)(
                        B.m,
                        {
                            text: ei.intl.string(t.name),
                            asContainer: !0,
                            children: (0, a.jsx)(W.D, {
                                className: n()(ej.SO, { [ej.wH]: i }),
                                onClick: () => s(e),
                                "aria-label": ei.intl.string(t.name),
                                children: (0, a.jsx)(eg.E, {
                                    variant: "text-lg/semibold",
                                    color: i ? "text-strong" : "text-default",
                                    className: n()(ej.FH, t.className),
                                    children: "Gg",
                                }),
                            }),
                        },
                        e,
                    );
                }),
            }),
            o &&
                c &&
                (0, a.jsxs)("div", {
                    className: ej.Lb,
                    children: [
                        (0, a.jsx)(eA.m, { size: "lg" }),
                        (0, a.jsx)(eg.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ei.intl.string(et.default["+O1xL2"]),
                        }),
                    ],
                }),
        ],
    });
}
var eE = s(821609),
    eC = s(908803),
    ev = s(87719),
    eI = s(465794),
    e_ = s(757036),
    eL = s(788868),
    eT = s(277041);
function eb(e) {
    let { onApply: l, onSurpriseMe: s, onClose: t, canApply: i } = e,
        n = (0, e_.L)(eL.PremiumTypes.TIER_2),
        r = (0, a.jsx)(eE.$, {
            variant: "secondary",
            size: "md",
            onClick: s,
            icon: { type: "rive", asset: eC.m, riveProps: { dataBinding: { fill: z.A.colors.ICON_STRONG } } },
            text: ei.intl.string(et.default.NOGFds),
        }),
        o = (0, a.jsxs)("div", {
            className: eT.k0,
            children: [
                r,
                (0, a.jsx)(B.m, {
                    text: ei.intl.string(et.default.cVTpnj),
                    shouldShow: !i,
                    children: (0, a.jsx)(eE.$, {
                        onClick: l,
                        disabled: !i,
                        text: ei.intl.string(ei.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        d = (0, a.jsxs)("div", {
            className: eT.UX,
            children: [
                (0, a.jsxs)("div", {
                    className: eT.iQ,
                    children: [
                        (0, a.jsx)(B.m, {
                            text: ei.intl.string(ei.t["5AFxuK"]),
                            children: (0, a.jsx)(H.t, { size: "md", color: z.A.colors.ICON_STRONG }),
                        }),
                        (0, a.jsx)(eg.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: eT.h_,
                            children: ei.intl.format(et.default.PWf0xS, {
                                onClickNitro: () => {
                                    j.default.track(O.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, ev.x)(t);
                                },
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: eT.UD,
                    children: [
                        r,
                        (0, a.jsx)(eI.A, {
                            premiumModalAnalyticsLocation: {
                                section: O.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: O.ZSU.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: eL.pe.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, a.jsx)(m.jl, { "data-migration-pending": !0, className: eT.qr, children: n ? o : d });
}
var ey = s(366010),
    eD = s(43990),
    ek = s(629584),
    eM = s(943255),
    eO = s(575181),
    eR = s(736653),
    eP = s(780898),
    eG = s(344346),
    eH = s(320095),
    ez = s(963852),
    eY = s(763754),
    ew = s(20851),
    eU = s(986687),
    eF = s(101058),
    eJ = s(999291),
    eB = s(686189),
    eK = s(946356),
    eW = s(975571),
    e$ = s(996988),
    eX = s(471260);
function eV(e) {
    let {
            user: l,
            guild: s,
            displayName: i,
            selectedFontId: r,
            selectedEffectId: o,
            selectedColors: d,
            onClose: u,
        } = e,
        x = (0, eR.Ay)(),
        h = (0, ey.M)(x),
        [N, f] = (0, t.useState)(h),
        A = (0, eJ.Ay)(l.id, null),
        { bannerSrc: p } = (0, eB.A)({ displayProfile: A, size: 413, canAnimate: !1 }),
        S = (0, c.cf)([R.A], () => R.A.getPendingChanges(s?.id)),
        E = (0, eF.V7)({ userId: l.id, image: S.pendingAvatar }),
        { userNameplate: C, guildNameplate: v, pendingNameplate: I } = (0, g.rv)(l, s?.id),
        _ = (0, eP.WK)(v);
    N && !h ? (x = O.NJ8.DARK) : !N && h && (x = O.NJ8.LIGHT);
    let L = (0, t.useCallback)(() => {
            j.default.track(O.HAw.DISPLAY_NAME_STYLES_CLOSED), u();
        }, [u]),
        T = (0, t.useCallback)((e) => {
            f(e === O.NJ8.DARK), j.default.track(O.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === O.NJ8.DARK });
        }, []),
        b = (0, t.useMemo)(
            () => ({ ...(0, eY.FT)(l, null), nick: i, displayNameStyles: { fontId: r, effectId: o, colors: d } }),
            [l, r, o, d, i],
        );
    return (0, a.jsxs)("div", {
        className: eX._l,
        children: [
            (0, a.jsx)(m.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: eX.bV,
                children: (0, a.jsx)(m.s_, { "data-migration-pending": !0, onClick: L, innerClassName: eX.b }),
            }),
            null != p &&
                (0, a.jsx)(eK.A, {
                    user: l,
                    displayProfile: A,
                    themeType: e$.d.MODAL_V2,
                    className: eX.LX,
                    forceUserTheme: !0,
                    children: (0, a.jsx)("div", { className: eX.b8, style: { backgroundImage: `url(${p})` } }),
                }),
            (0, a.jsx)(eD.N, {
                theme: x,
                children: (e) =>
                    (0, a.jsxs)("div", {
                        className: n()(eX.cq, e),
                        inert: !0,
                        children: [
                            (0, a.jsx)(eU.A, {
                                user: l,
                                guild: s,
                                ...S,
                                pendingAvatar: E,
                                pendingGlobalName: i,
                                pendingDisplayNameStyles: b.displayNameStyles,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: eX.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                                hideProfileFrame: !0,
                            }),
                            (0, a.jsx)(ew.A, {
                                author: b,
                                message: (0, eH.rh)({
                                    ...(0, ez.Ay)({ channelId: "1337", content: ei.intl.string(et.default.h5Cuej) }),
                                    state: O.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: eX.OT,
                                previewGuildId: s?.id,
                            }),
                            (0, a.jsx)(eG.A, {
                                user: l,
                                guildId: s?.id,
                                nameplate: I,
                                nameplateData: null == I ? (_ ?? C) : void 0,
                                pendingGlobalName: i,
                                pendingDisplayNameStyles: b.displayNameStyles,
                                isHighlighted: !0,
                                className: eX.qF,
                            }),
                        ],
                    }),
            }),
            (0, a.jsxs)("div", {
                className: eX.dI,
                children: [
                    (0, a.jsx)(eg.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: ei.intl.format(et.default.prQba8, {
                            helpArticleLink: eW.A.getArticleURL(O.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, a.jsx)(eZ, { darkPreview: N, onToggleTheme: T }),
                ],
            }),
        ],
    });
}
function eZ(e) {
    let { darkPreview: l, onToggleTheme: s } = e,
        t = l ? O.NJ8.DARK : O.NJ8.LIGHT;
    return (0, a.jsx)(ek.I, {
        className: eX.xr,
        optionClassName: eX.$C,
        options: [
            {
                name: "",
                tooltip: ei.intl.string(ei.t.b8Cei3),
                value: O.NJ8.DARK,
                icon: eM.Z,
                className: t === O.NJ8.DARK ? eX.iB : void 0,
            },
            {
                name: "",
                tooltip: ei.intl.string(ei.t.K2sFfo),
                value: O.NJ8.LIGHT,
                icon: eO.F,
                className: t === O.NJ8.LIGHT ? eX.iB : void 0,
            },
        ],
        value: t,
        onChange: (e) => {
            let { value: l } = e;
            return s(l);
        },
        look: "pill",
    });
}
var eq = s(511698);
function eQ(e) {
    let l,
        { transitionState: s, analyticsLocations: i, guildId: C, onClose: v, returnRef: _ } = e,
        L = (0, c.bG)([p.default], () => p.default.getCurrentUser()),
        H =
            ((l = G.Ay.useName(L)),
            (0, c.bG)([R.A, P.Ay], () => {
                let e = R.A.getPendingChanges(C);
                return null != C ? (e.pendingNickname ?? P.Ay.getNick(C, L?.id)) : e.pendingGlobalName;
            }, [C, L]) ??
                l ??
                ""),
        z = (0, c.bG)([A.A], () => A.A.getGuild(C)),
        { userDisplayNameStyles: Y, guildDisplayNameStyles: w, pendingDisplayNameStyles: U } = (0, g.B0)(L, C),
        F = void 0 !== U ? U : (w ?? Y),
        [J, B] = t.useState(F?.fontId ?? d.x.DEFAULT),
        [K, W] = t.useState(F?.effectId ?? o.z.SOLID),
        $ = (0, b.as)(K) > 1,
        X = (0, y._)(K),
        V = (0, D.A)(),
        Z = F?.colors ?? [],
        [q, Q] = t.useState(Z.length > 0 && !$ ? Z[0] : X.defaultColors[0]),
        [ee, el] = t.useState(() => (Z.length > 0 && $ ? { [K]: Z } : {})),
        es = t.useMemo(() => ee[K] ?? V[K], [ee, K, V]);
    (0, f.A)(
        { type: r.ImpressionTypes.POPOUT, name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: ea } = (0, N.Ay)(i, h.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        en = t.useMemo(() => ($ ? es : [q]), [$, es, q]),
        er = t.useMemo(() => J !== F?.fontId || K !== F?.effectId || !(0, u.v)(en, F?.colors ?? []), [F, J, K, en]),
        eo = (0, E.ux)("DisplayNameStylesModal"),
        ed = T(),
        ec = I(),
        em = (function (e) {
            let {
                hasChanges: l,
                selectedFontId: s,
                selectedEffectId: a,
                selectedColors: i,
                defaultColor: n,
                guildId: r,
                isTryItOut: c,
                onClose: u,
            } = e;
            return t.useCallback(() => {
                if (l) {
                    let e = i;
                    a === o.z.SOLID && i.length > 0 && i[0] === n && (e = []);
                    let l = { fontId: s, effectId: a, colors: e };
                    c ? (0, k.EW)(l) : (0, M.p)({ guildId: r, displayNameStyles: l }),
                        j.default.track(O.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                            font_name: d.x[s],
                            effect_name: o.z[a],
                            colors: i,
                        }),
                        u?.();
                }
            }, [l, s, a, i, n, u, r, c]);
        })({
            hasChanges: er,
            selectedFontId: J,
            selectedEffectId: K,
            selectedColors: en,
            defaultColor: X.defaultColors[0],
            guildId: C,
            onClose: v,
        }),
        ex = t.useCallback(() => {
            let { fontId: e, effectId: l, colors: s } = (0, b.gN)(ed, ec);
            B(e),
                W(l),
                (0, b.as)(l) > 1 ? el((e) => ({ ...e, [l]: s })) : Q(s[0]),
                j.default.track(O.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [ed, ec, el, Q]),
        eh = t.useCallback(
            (e) => {
                $ ? el((l) => ({ ...l, [K]: e })) : Q(e[0]);
            },
            [$, K, el, Q],
        );
    return null == L
        ? null
        : (0, a.jsx)(N.f5, {
              value: ea,
              children: (0, a.jsx)(S.l.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, a.jsxs)(m.EO, {
                      "data-migration-pending": !0,
                      transitionState: s,
                      size: m.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: n()(eq.CR, { [eq.st]: eo }),
                      returnRef: _,
                      children: [
                          (0, a.jsxs)(m.$m, {
                              "data-migration-pending": !0,
                              className: n()(eq.jE, { [eq.st]: eo }),
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: eq.w1,
                                      children: [
                                          (0, a.jsx)(m.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: eq.bV,
                                              children: (0, a.jsx)(x.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: ei.intl.string(et.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, a.jsx)(eS, {
                                              selectedFontId: J,
                                              setSelectedFontId: B,
                                              displayName: H,
                                              className: eq._,
                                          }),
                                          (0, a.jsx)(eN, {
                                              selectedEffectId: K,
                                              setSelectedEffectId: W,
                                              className: eq._,
                                          }),
                                          (0, a.jsx)(eu, {
                                              selectedColors: en,
                                              setSelectedColors: eh,
                                              selectedEffectId: K,
                                              className: eq._,
                                              defaultColor: X.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, a.jsx)(eV, {
                                      user: L,
                                      guild: z,
                                      displayName: H,
                                      selectedFontId: J,
                                      selectedEffectId: K,
                                      selectedColors: K === o.z.SOLID && (0, u.v)(en, X.defaultColors) ? [] : en,
                                      onClose: v,
                                  }),
                              ],
                          }),
                          (0, a.jsx)(eb, {
                              onApply: em,
                              onSurpriseMe: ex,
                              onClose: v,
                              canApply: er,
                              analyticsLocations: ea,
                          }),
                      ],
                  }),
              }),
          });
}

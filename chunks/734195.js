t.d(s, { default: () => e9 });
var l = t(627968),
    a = t(64700),
    n = t(503698),
    i = t.n(n),
    r = t(562708),
    d = t(508425),
    o = t(559949),
    c = t(17928),
    u = t(52133),
    m = t(935462),
    f = t(534514),
    x = t(793574),
    h = t(688810),
    N = t(139286),
    S = t(919395),
    E = t(71393),
    A = t(287809),
    g = t(174459),
    p = t(871162),
    I = t(248778),
    j = t(750656);
let _ = [...j.re, ...j.gz];
function C() {
    let e = (0, I.ux)("effect-order");
    return a.useMemo(() => (e ? _ : j.re), [e]);
}
let v = [
        o.x.DEFAULT,
        o.x.ZILLA_SLAB,
        o.x.CHERRY_BOMB,
        o.x.CHICLE,
        o.x.MUSEO_MODERNO,
        o.x.NEO_CASTEL,
        o.x.PIXELIFY,
        o.x.SINISTRE,
    ],
    L = [...v, ...j._k];
function T() {
    let e = (0, I.ux)("font-order");
    return a.useMemo(() => (e ? L : v), [e]);
}
var y = t(945096),
    D = t(898985),
    b = t(430571),
    k = t(207803),
    M = t(84540),
    R = t(652215),
    O = t(836602),
    P = t(696451),
    F = t(427262),
    w = t(403581),
    Y = t(661531),
    G = t(48736),
    U = t(887129),
    z = t(837381),
    H = t(741918),
    K = t(317097),
    J = t(990078),
    W = t(922016),
    B = t(939249),
    $ = t(22231),
    X = t(933832),
    V = t(13759);
function Z(e) {
    let { colors: s, selected: t, onSelect: a, listItemId: n, "aria-label": i } = e,
        r = (0, z.rm)(n);
    return (0, l.jsxs)("button", {
        type: "button",
        className: V.nf,
        onClick: a,
        "aria-label": i,
        ...r,
        children: [
            s.map((e, s) => (0, l.jsx)("div", { className: V._4, style: { background: (0, K.Hl)(e) } }, s)),
            t && (0, l.jsx)(X.A, { className: V.z6, size: "md", color: "currentColor" }),
        ],
    });
}
var q = t(247366),
    Q = t(315710),
    ee = t(650583),
    es = t(25597);
let et = [0, 60, 120, 180, 240, 300, 360];
function el(e) {
    let { value: s, onChange: t, hueToColor: n, onConfirm: r, "aria-label": d, className: o } = e,
        c = (0, y.xo)((0, K.tf)(s).h),
        u = a.useRef(null);
    (0, Q.tj)(u);
    let m = a.useCallback((e) => t(n((0, y.xo)(e))), [t, n]),
        f = a.useCallback((e) => m(e.h), [m]),
        x = a.useMemo(() => `linear-gradient(to right, ${et.map((e) => (0, K.Hl)(n(e))).join(", ")})`, [n]),
        h = a.useMemo(
            () =>
                function (e) {
                    let { hsl: s } = e;
                    return (0, l.jsx)("div", { className: es.Wn, style: { background: (0, K.Hl)(n(s.h)) } });
                },
            [n],
        ),
        N = a.useCallback(
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
    return (0, l.jsx)("div", {
        ref: u,
        className: i()(es.kL, o),
        children: (0, l.jsx)("div", {
            className: es.SP,
            style: { "--custom-hue-track": x },
            role: "slider",
            tabIndex: 0,
            "aria-label": d,
            "aria-valuemin": 0,
            "aria-valuemax": 360,
            "aria-valuenow": Math.round(c),
            onKeyDown: N,
            children: (0, l.jsx)(q.Hue, {
                hsl: { h: c, s: 1, l: 0.5 },
                direction: "horizontal",
                pointer: h,
                onChange: f,
            }),
        }),
    });
}
var ea = t(864386),
    en = t(375708),
    ei = t(637495);
let er = () => Promise.resolve();
function ed(e) {
    let { selectedColors: s, setSelectedColors: t, className: n } = e,
        [r, d] = a.useState(!1),
        o = a.useRef(null),
        c = s[0] ?? R.TGz,
        m = a.useCallback((e) => t((0, y.cf)(e)), [t]),
        f = j.lU.findIndex((e) => (0, u.v)(e, s)),
        x = f >= 0,
        h = s.length > 0 ? s : (0, y.cf)(c),
        N = en.intl.string(ea.default["6OxgN7"]),
        S = en.intl.string(en.t["FHBa/1"]),
        E = (0, U.Ay)({
            id: "gummy-color-picker",
            isEnabled: !0,
            orientation: H.Gl.HORIZONTAL,
            scrollToStart: er,
            scrollToEnd: er,
        });
    return (0, l.jsx)(z.hD, {
        navigator: E,
        children: (0, l.jsx)(z.PR, {
            children: (e) => {
                let { ref: s, ...a } = e;
                return (0, l.jsxs)("div", {
                    className: i()(ei.kL, n),
                    ref: s,
                    ...a,
                    children: [
                        (0, l.jsxs)("div", {
                            className: ei.Ix,
                            children: [
                                (0, l.jsx)("div", {
                                    className: i()(ei.yB, { [ei.EI]: x }),
                                    children:
                                        !x &&
                                        h.map((e, s) =>
                                            (0, l.jsx)(
                                                "div",
                                                { className: ei._4, style: { background: (0, K.Hl)(e) } },
                                                s,
                                            ),
                                        ),
                                }),
                                (0, l.jsx)("div", {
                                    className: ei.fX,
                                    children: (0, l.jsx)(W.Y, {
                                        targetElementRef: o,
                                        position: "top",
                                        align: "left",
                                        shouldShow: r,
                                        onRequestOpen: () => d(!0),
                                        onRequestClose: () => d(!1),
                                        renderPopout: () =>
                                            (0, l.jsx)(el, {
                                                value: x ? R.TGz : c,
                                                onChange: m,
                                                hueToColor: y.UZ,
                                                onConfirm: () => d(!1),
                                                "aria-label": S,
                                            }),
                                        children: (e) =>
                                            (0, l.jsx)(J.m, {
                                                text: S,
                                                position: "top",
                                                ariaHidden: !0,
                                                children: (0, l.jsx)("div", {
                                                    ...e,
                                                    ref: o,
                                                    className: ei.r9,
                                                    children: (0, l.jsx)(z.tG, {
                                                        id: "custom",
                                                        children: (e) =>
                                                            (0, l.jsx)(B.D, {
                                                                ...e,
                                                                className: ei.Vz,
                                                                "aria-label": S,
                                                                children: (0, l.jsx)($.R, {
                                                                    size: "custom",
                                                                    width: 18,
                                                                    height: 18,
                                                                    color: "currentColor",
                                                                    className: ei.IZ,
                                                                }),
                                                            }),
                                                    }),
                                                }),
                                            }),
                                    }),
                                }),
                            ],
                        }),
                        j.lU.map((e, s) =>
                            (0, l.jsx)(
                                Z,
                                {
                                    listItemId: `gummy-preset-${s}`,
                                    colors: e,
                                    selected: f === s,
                                    onSelect: () => t([...e]),
                                    "aria-label": `${N} ${s + 1}`,
                                },
                                s,
                            ),
                        ),
                    ],
                });
            },
        }),
    });
}
var eo = t(250229),
    ec = t(257170);
function eu(e) {
    let { selectedColors: s, setSelectedColors: t, defaultColor: n, selectedEffectId: i, className: r } = e,
        o = (0, y.as)(i) > 1,
        c = i === d.z.PRISM ? 210 : 104,
        u = (0, a.useMemo)(() => (0, j.ii)(i).map((e) => ({ colors: e, name: "" })), [i]),
        m = (0, a.useCallback)(
            (e) => {
                t([e]), g.default.track(R.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: e === n, colors: [e] });
            },
            [t, n],
        ),
        x = (0, a.useCallback)(
            (e) => {
                t(e), g.default.track(R.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: !1, colors: e });
            },
            [t],
        );
    return (0, l.jsxs)("div", {
        className: r,
        children: [
            (0, l.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: ec.sU,
                children: [
                    en.intl.string(ea.default.JOpi7z),
                    (0, l.jsx)(w.t, { size: "xs", color: Y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            i === d.z.GUMMY
                ? (0, l.jsx)(ed, { selectedColors: s, setSelectedColors: x })
                : (0, l.jsx)(G.default, {
                      className: eo.Ei,
                      colorContainerClassName: eo.rx,
                      defaultColor: n,
                      colors: o ? u : j.Jl,
                      value: s[0],
                      gradientColors: s,
                      onChange: m,
                      onChangeGradientColors: x,
                      isGradient: o,
                      gradientWidth: `${c}px`,
                      gradientDegrees: 90,
                      allowBlackCustomColor: !0,
                      customPickerPosition: "top",
                  }),
        ],
    });
}
var em = t(834730),
    ef = t(228366);
let ex = { seenFontIds: new Set(), seenEffectIds: new Set() };
class eh extends c.Ay.PersistedStore {
    static displayName = "DisplayNameStylesSeenStore";
    static persistKey = "DisplayNameStylesSeenStore";
    initialize(e) {
        ex = { seenFontIds: new Set(e?.seenFontIds ?? []), seenEffectIds: new Set(e?.seenEffectIds ?? []) };
    }
    getState() {
        return { seenFontIds: Array.from(ex.seenFontIds), seenEffectIds: Array.from(ex.seenEffectIds) };
    }
    getSeenFonts() {
        return ex.seenFontIds;
    }
    getSeenEffects() {
        return ex.seenEffectIds;
    }
}
let eN = new eh(ef.h, {
    DISPLAY_NAME_STYLES_MARK_FONT_SEEN: function (e) {
        let { fontId: s } = e;
        if (ex.seenFontIds.has(s)) return !1;
        ex = { ...ex, seenFontIds: new Set([...ex.seenFontIds, s]) };
    },
    DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN: function (e) {
        let { effectId: s } = e;
        if (ex.seenEffectIds.has(s)) return !1;
        ex = { ...ex, seenEffectIds: new Set([...ex.seenEffectIds, s]) };
    },
});
var eS = t(922301),
    eE = t(660184),
    eA = t(700090);
function eg(e) {
    let s,
        { selectedEffectId: t, setSelectedEffectId: n, className: r } = e,
        d = C(),
        { dotEffectIds: o, dismissEffectDot: u } =
            ((s = (0, c.bG)([eN], () => eN.getSeenEffects())),
            {
                dotEffectIds: a.useMemo(() => new Set(d.filter((e) => j.gz.includes(e) && !s.has(e))), [d, s]),
                dismissEffectDot: a.useCallback((e) => {
                    ef.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN", effectId: e });
                }, []),
            }),
        m = (0, I.ux)("DisplayNameStylesEffectSelection"),
        x = Math.ceil(d.length / 2);
    return (0, l.jsxs)("div", {
        className: r,
        children: [
            (0, l.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: ec.sU,
                children: [
                    en.intl.string(ea.default["1wilM1"]),
                    (0, l.jsx)(w.t, { size: "xs", color: Y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)("div", {
                className: i()(ec.fh, { [eA.KS]: m }),
                style: { "--custom-dns-tile-columns": x },
                children: d.map((e) => {
                    let s = o.has(e);
                    return (0, l.jsx)(
                        ep,
                        {
                            effectId: e,
                            selected: e === t,
                            showNewDot: s,
                            isFlywheelEnabled: m,
                            onClick: () => {
                                n(e), s && u(e);
                            },
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
function ep(e) {
    let { effectId: s, selected: t, showNewDot: a, isFlywheelEnabled: n, onClick: r } = e,
        d = (0, D._)(s),
        o = j.gz.includes(s);
    return (0, l.jsxs)(B.D, {
        className: i()(eA.Tw, { [eA.wH]: t, [eA.uT]: n }),
        onClick: r,
        children: [
            (0, l.jsx)(eE.A, {
                userName: d.name,
                effectDisplayType: eS.G.STATIC,
                displayNameStyles: d.previewStyles,
                textClassName: eA.tr,
                inProfile: !0,
            }),
            a && (0, l.jsx)("div", { className: ec.s1, "aria-hidden": !0 }),
            o &&
                (0, l.jsx)(em.E, {
                    variant: "text-xxs/normal",
                    color: "text-subtle",
                    className: ec.hn,
                    children: en.intl.string(en.t.oW0eUd),
                }),
        ],
    });
}
var eI = t(885574),
    ej = t(73392),
    e_ = t(699006);
function eC(e) {
    let s,
        { selectedFontId: t, setSelectedFontId: n, displayName: r, className: d } = e,
        u = T(),
        { dotFontIds: m, dismissFontDot: x } =
            ((s = (0, c.bG)([eN], () => eN.getSeenFonts())),
            {
                dotFontIds: a.useMemo(() => new Set(u.filter((e) => j._k.includes(e) && !s.has(e))), [u, s]),
                dismissFontDot: a.useCallback((e) => {
                    ef.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_FONT_SEEN", fontId: e });
                }, []),
            }),
        h = t !== o.x.DEFAULT,
        N = (0, y.Xr)(r),
        S = (0, I.ux)("DisplayNameStylesFontSelection"),
        E = Math.ceil(u.length / (S ? 3 : 2));
    return (0, l.jsxs)("div", {
        className: d,
        children: [
            (0, l.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: ec.sU,
                children: [
                    en.intl.string(ea.default.nP0ngb),
                    (0, l.jsx)(w.t, { size: "xs", color: Y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)("div", {
                className: i()(ec.fh, { [e_.qW]: S }),
                style: { "--custom-dns-tile-columns": E },
                children: u.map((e) => {
                    let s = (0, ej.p)(e),
                        a = e === t,
                        r = m.has(e),
                        d = j._k.includes(e),
                        o = en.intl.string(s.name);
                    return (0, l.jsx)(
                        J.m,
                        {
                            text: o,
                            asContainer: !0,
                            children: (0, l.jsxs)(B.D, {
                                className: i()(e_.SO, { [e_.wH]: a, [e_.j4]: S }),
                                onClick: () => {
                                    n(e), r && x(e);
                                },
                                "aria-label": d ? `${o}, ${en.intl.string(en.t.oW0eUd)}` : o,
                                children: [
                                    (0, l.jsx)(em.E, {
                                        variant: "text-lg/semibold",
                                        color: a ? "text-strong" : "text-default",
                                        className: i()(e_.FH, s.className),
                                        children: "Gg",
                                    }),
                                    r && (0, l.jsx)("div", { className: ec.s1, "aria-hidden": !0 }),
                                    d &&
                                        (0, l.jsx)(em.E, {
                                            variant: "text-xxs/normal",
                                            color: "text-subtle",
                                            className: ec.hn,
                                            children: en.intl.string(en.t.oW0eUd),
                                        }),
                                ],
                            }),
                        },
                        e,
                    );
                }),
            }),
            h &&
                N &&
                (0, l.jsxs)("div", {
                    className: e_.Lb,
                    children: [
                        (0, l.jsx)(eI.m, { size: "lg" }),
                        (0, l.jsx)(em.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: en.intl.string(ea.default["+O1xL2"]),
                        }),
                    ],
                }),
        ],
    });
}
var ev = t(821609),
    eL = t(908803),
    eT = t(87719),
    ey = t(465794),
    eD = t(757036),
    eb = t(202541),
    ek = t(277041);
function eM(e) {
    let { onApply: s, onSurpriseMe: t, onClose: a, canApply: n } = e,
        i = (0, eD.L)(eb.PremiumTypes.TIER_2),
        r = (0, l.jsx)(ev.$, {
            variant: "secondary",
            size: "md",
            onClick: t,
            icon: { type: "rive", asset: eL.m, riveProps: { dataBinding: { fill: Y.A.colors.ICON_STRONG } } },
            text: en.intl.string(ea.default.NOGFds),
        }),
        d = (0, l.jsxs)("div", {
            className: ek.k0,
            children: [
                r,
                (0, l.jsx)(J.m, {
                    text: en.intl.string(ea.default.cVTpnj),
                    shouldShow: !n,
                    children: (0, l.jsx)(ev.$, {
                        onClick: s,
                        disabled: !n,
                        text: en.intl.string(en.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        o = (0, l.jsxs)("div", {
            className: ek.UX,
            children: [
                (0, l.jsxs)("div", {
                    className: ek.iQ,
                    children: [
                        (0, l.jsx)(J.m, {
                            text: en.intl.string(en.t["5AFxuK"]),
                            children: (0, l.jsx)(w.t, { size: "md", color: Y.A.colors.ICON_STRONG }),
                        }),
                        (0, l.jsx)(em.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: ek.h_,
                            children: en.intl.format(ea.default.PWf0xS, {
                                onClickNitro: () => {
                                    g.default.track(R.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, eT.x)(a);
                                },
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: ek.UD,
                    children: [
                        r,
                        (0, l.jsx)(ey.A, {
                            premiumModalAnalyticsLocation: {
                                section: R.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: R.ZSU.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: eb.pe.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, l.jsx)(m.jl, { "data-migration-pending": !0, className: ek.qr, children: i ? d : o });
}
var eR = t(366010),
    eO = t(43990),
    eP = t(629584),
    eF = t(943255),
    ew = t(575181),
    eY = t(736653),
    eG = t(780898),
    eU = t(344346),
    ez = t(320095),
    eH = t(963852),
    eK = t(763754),
    eJ = t(20851),
    eW = t(986687),
    eB = t(101058),
    e$ = t(999291),
    eX = t(686189),
    eV = t(946356),
    eZ = t(975571),
    eq = t(996988),
    eQ = t(471260);
function e0(e) {
    let {
            user: s,
            guild: t,
            displayName: n,
            selectedFontId: r,
            selectedEffectId: d,
            selectedColors: o,
            onClose: u,
        } = e,
        f = (0, eY.Ay)(),
        x = (0, eR.M)(f),
        [h, N] = (0, a.useState)(x),
        E = (0, e$.Ay)(s.id, null),
        { bannerSrc: A } = (0, eX.A)({ displayProfile: E, size: 413, canAnimate: !1 }),
        p = (0, c.cf)([O.A], () => O.A.getPendingChanges(t?.id)),
        I = (0, eB.V7)({ userId: s.id, image: p.pendingAvatar }),
        { userNameplate: j, guildNameplate: _, pendingNameplate: C } = (0, S.rv)(s, t?.id),
        v = (0, eG.WK)(_);
    h && !x ? (f = R.NJ8.DARK) : !h && x && (f = R.NJ8.LIGHT);
    let L = (0, a.useCallback)(() => {
            g.default.track(R.HAw.DISPLAY_NAME_STYLES_CLOSED), u();
        }, [u]),
        T = (0, a.useCallback)((e) => {
            N(e === R.NJ8.DARK), g.default.track(R.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === R.NJ8.DARK });
        }, []),
        y = (0, a.useMemo)(
            () => ({ ...(0, eK.FT)(s, null), nick: n, displayNameStyles: { fontId: r, effectId: d, colors: o } }),
            [s, r, d, o, n],
        );
    return (0, l.jsxs)("div", {
        className: eQ._l,
        children: [
            (0, l.jsx)(m.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: eQ.bV,
                children: (0, l.jsx)(m.s_, { "data-migration-pending": !0, onClick: L, innerClassName: eQ.b }),
            }),
            null != A &&
                (0, l.jsx)(eV.A, {
                    user: s,
                    displayProfile: E,
                    themeType: eq.d.MODAL_V2,
                    className: eQ.LX,
                    forceUserTheme: !0,
                    children: (0, l.jsx)("div", { className: eQ.b8, style: { backgroundImage: `url(${A})` } }),
                }),
            (0, l.jsx)(eO.N, {
                theme: f,
                children: (e) =>
                    (0, l.jsxs)("div", {
                        className: i()(eQ.cq, e),
                        inert: !0,
                        children: [
                            (0, l.jsx)(eW.A, {
                                user: s,
                                guild: t,
                                ...p,
                                pendingAvatar: I,
                                pendingGlobalName: n,
                                pendingDisplayNameStyles: y.displayNameStyles,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: eQ.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                                hideProfileFrame: !0,
                            }),
                            (0, l.jsx)(eJ.A, {
                                author: y,
                                message: (0, ez.rh)({
                                    ...(0, eH.Ay)({ channelId: "1337", content: en.intl.string(ea.default.h5Cuej) }),
                                    state: R.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: eQ.OT,
                                previewGuildId: t?.id,
                            }),
                            (0, l.jsx)(eU.A, {
                                user: s,
                                guildId: t?.id,
                                nameplate: C,
                                nameplateData: null == C ? (v ?? j) : void 0,
                                pendingGlobalName: n,
                                pendingDisplayNameStyles: y.displayNameStyles,
                                isHighlighted: !0,
                                className: eQ.qF,
                            }),
                        ],
                    }),
            }),
            (0, l.jsxs)("div", {
                className: eQ.dI,
                children: [
                    (0, l.jsx)(em.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: en.intl.format(ea.default.prQba8, {
                            helpArticleLink: eZ.A.getArticleURL(R.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, l.jsx)(e1, { darkPreview: h, onToggleTheme: T }),
                ],
            }),
        ],
    });
}
function e1(e) {
    let { darkPreview: s, onToggleTheme: t } = e,
        a = s ? R.NJ8.DARK : R.NJ8.LIGHT;
    return (0, l.jsx)(eP.I, {
        className: eQ.xr,
        optionClassName: eQ.$C,
        options: [
            {
                name: "",
                tooltip: en.intl.string(en.t.b8Cei3),
                value: R.NJ8.DARK,
                icon: eF.Z,
                className: a === R.NJ8.DARK ? eQ.iB : void 0,
            },
            {
                name: "",
                tooltip: en.intl.string(en.t.K2sFfo),
                value: R.NJ8.LIGHT,
                icon: ew.F,
                className: a === R.NJ8.LIGHT ? eQ.iB : void 0,
            },
        ],
        value: a,
        onChange: (e) => {
            let { value: s } = e;
            return t(s);
        },
        look: "pill",
    });
}
var e8 = t(511698);
function e9(e) {
    let s,
        { transitionState: t, analyticsLocations: n, guildId: j, onClose: _, returnRef: v } = e,
        L = (0, c.bG)([A.default], () => A.default.getCurrentUser()),
        w =
            ((s = F.Ay.useName(L)),
            (0, c.bG)([O.A, P.Ay], () => {
                let e = O.A.getPendingChanges(j);
                return null != j ? (e.pendingNickname ?? P.Ay.getNick(j, L?.id)) : e.pendingGlobalName;
            }, [j, L]) ??
                s ??
                ""),
        Y = (0, c.bG)([E.A], () => E.A.getGuild(j)),
        { userDisplayNameStyles: G, guildDisplayNameStyles: U, pendingDisplayNameStyles: z } = (0, S.B0)(L, j),
        H = void 0 !== z ? z : (U ?? G),
        [K, J] = a.useState(H?.fontId ?? o.x.DEFAULT),
        [W, B] = a.useState(H?.effectId ?? d.z.SOLID),
        $ = (0, y.as)(W) > 1,
        X = (0, D._)(W),
        V = (0, b.A)(),
        Z = H?.colors ?? [],
        [q, Q] = a.useState(Z.length > 0 && !$ ? Z[0] : X.defaultColors[0]),
        [ee, es] = a.useState(() => (Z.length > 0 && $ ? { [W]: Z } : {})),
        et = a.useMemo(() => ee[W] ?? V[W], [ee, W, V]);
    (0, N.A)(
        { type: r.ImpressionTypes.POPOUT, name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: el } = (0, h.Ay)(n, x.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        ei = a.useMemo(() => ($ ? et : [q]), [$, et, q]),
        er = a.useMemo(() => K !== H?.fontId || W !== H?.effectId || !(0, u.v)(ei, H?.colors ?? []), [H, K, W, ei]),
        ed = (0, I.ux)("DisplayNameStylesModal"),
        eo = T(),
        ec = C(),
        em = (function (e) {
            let {
                hasChanges: s,
                selectedFontId: t,
                selectedEffectId: l,
                selectedColors: n,
                defaultColor: i,
                guildId: r,
                isTryItOut: c,
                onClose: u,
            } = e;
            return a.useCallback(() => {
                if (s) {
                    let e = n;
                    l === d.z.SOLID && n.length > 0 && n[0] === i && (e = []);
                    let s = { fontId: t, effectId: l, colors: e };
                    c ? (0, k.EW)(s) : (0, M.p)({ guildId: r, displayNameStyles: s }),
                        g.default.track(R.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                            font_name: o.x[t],
                            effect_name: d.z[l],
                            colors: n,
                        }),
                        u?.();
                }
            }, [s, t, l, n, i, u, r, c]);
        })({
            hasChanges: er,
            selectedFontId: K,
            selectedEffectId: W,
            selectedColors: ei,
            defaultColor: X.defaultColors[0],
            guildId: j,
            onClose: _,
        }),
        ef = a.useCallback(() => {
            let { fontId: e, effectId: s, colors: t } = (0, y.gN)(eo, ec);
            J(e),
                B(s),
                (0, y.as)(s) > 1 ? es((e) => ({ ...e, [s]: t })) : Q(t[0]),
                g.default.track(R.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [eo, ec, es, Q]),
        ex = a.useCallback(
            (e) => {
                $ ? es((s) => ({ ...s, [W]: e })) : Q(e[0]);
            },
            [$, W, es, Q],
        );
    return null == L
        ? null
        : (0, l.jsx)(h.f5, {
              value: el,
              children: (0, l.jsx)(p.l.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, l.jsxs)(m.EO, {
                      "data-migration-pending": !0,
                      transitionState: t,
                      size: m.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: i()(e8.CR, { [e8.st]: ed }),
                      returnRef: v,
                      children: [
                          (0, l.jsxs)(m.$m, {
                              "data-migration-pending": !0,
                              className: i()(e8.jE, { [e8.st]: ed }),
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: e8.w1,
                                      children: [
                                          (0, l.jsx)(m.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: e8.bV,
                                              children: (0, l.jsx)(f.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: en.intl.string(ea.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, l.jsx)(eC, {
                                              selectedFontId: K,
                                              setSelectedFontId: J,
                                              displayName: w,
                                              className: e8._,
                                          }),
                                          (0, l.jsx)(eg, {
                                              selectedEffectId: W,
                                              setSelectedEffectId: B,
                                              className: e8._,
                                          }),
                                          (0, l.jsx)(eu, {
                                              selectedColors: ei,
                                              setSelectedColors: ex,
                                              selectedEffectId: W,
                                              className: e8._,
                                              defaultColor: X.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(e0, {
                                      user: L,
                                      guild: Y,
                                      displayName: w,
                                      selectedFontId: K,
                                      selectedEffectId: W,
                                      selectedColors: W === d.z.SOLID && (0, u.v)(ei, X.defaultColors) ? [] : ei,
                                      onClose: _,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(eM, {
                              onApply: em,
                              onSurpriseMe: ef,
                              onClose: _,
                              canApply: er,
                              analyticsLocations: el,
                          }),
                      ],
                  }),
              }),
          });
}

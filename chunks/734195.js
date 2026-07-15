t.d(s, { default: () => e9 });
var a = t(627968),
    l = t(64700),
    n = t(503698),
    i = t.n(n),
    r = t(562708),
    d = t(508425),
    o = t(559949),
    c = t(17928),
    m = t(52133),
    u = t(935462),
    f = t(297264),
    x = t(793574),
    E = t(688810),
    h = t(139286),
    N = t(919395),
    S = t(71393),
    g = t(287809),
    A = t(174459),
    p = t(871162),
    _ = t(248778),
    I = t(750656);
let D = [...I.re, ...I.gz];
function j() {
    let e = (0, _.ux)("effect-order");
    return l.useMemo(() => (e ? D : I.re), [e]);
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
    C = [...v, ...I._k];
function L() {
    let e = (0, _.ux)("font-order");
    return l.useMemo(() => (e ? C : v), [e]);
}
var T = t(945096),
    y = t(898985),
    b = t(430571),
    M = t(207803),
    k = t(84540),
    w = t(652215),
    F = t(836602),
    O = t(696451),
    R = t(427262),
    P = t(403581),
    Y = t(661531),
    B = t(48736),
    G = t(887129),
    U = t(837381),
    z = t(741918),
    H = t(317097),
    K = t(990078),
    W = t(922016),
    J = t(939249),
    $ = t(22231),
    X = t(933832),
    V = t(13759);
function Z(e) {
    let { colors: s, selected: t, onSelect: l, listItemId: n, "aria-label": i } = e,
        r = (0, U.rm)(n);
    return (0, a.jsxs)("button", {
        type: "button",
        className: V.nf,
        onClick: l,
        "aria-label": i,
        ...r,
        children: [
            s.map((e, s) => (0, a.jsx)("div", { className: V._4, style: { background: (0, H.Hl)(e) } }, s)),
            t && (0, a.jsx)(X.A, { className: V.z6, size: "md", color: "currentColor" }),
        ],
    });
}
var q = t(247366),
    Q = t(315710),
    ee = t(650583),
    es = t(25597);
let et = [0, 60, 120, 180, 240, 300, 360];
function ea(e) {
    let { value: s, onChange: t, hueToColor: n, onConfirm: r, "aria-label": d, className: o } = e,
        c = (0, T.xo)((0, H.tf)(s).h),
        m = l.useRef(null);
    (0, Q.tj)(m);
    let u = l.useCallback((e) => t(n((0, T.xo)(e))), [t, n]),
        f = l.useCallback((e) => u(e.h), [u]),
        x = l.useMemo(() => `linear-gradient(to right, ${et.map((e) => (0, H.Hl)(n(e))).join(", ")})`, [n]),
        E = l.useMemo(
            () =>
                function (e) {
                    let { hsl: s } = e;
                    return (0, a.jsx)("div", { className: es.Wn, style: { background: (0, H.Hl)(n(s.h)) } });
                },
            [n],
        ),
        h = l.useCallback(
            (e) => {
                switch (e.key) {
                    case ee.dh.ARROW_LEFT:
                    case ee.dh.ARROW_DOWN:
                        u(c - 5);
                        break;
                    case ee.dh.ARROW_RIGHT:
                    case ee.dh.ARROW_UP:
                        u(c + 5);
                        break;
                    case ee.dh.HOME:
                        u(0);
                        break;
                    case ee.dh.END:
                        u(359);
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
            [c, u, r],
        );
    return (0, a.jsx)("div", {
        ref: m,
        className: i()(es.kL, o),
        children: (0, a.jsx)("div", {
            className: es.SP,
            style: { "--custom-hue-track": x },
            role: "slider",
            tabIndex: 0,
            "aria-label": d,
            "aria-valuemin": 0,
            "aria-valuemax": 360,
            "aria-valuenow": Math.round(c),
            onKeyDown: h,
            children: (0, a.jsx)(q.Hue, {
                hsl: { h: c, s: 1, l: 0.5 },
                direction: "horizontal",
                pointer: E,
                onChange: f,
            }),
        }),
    });
}
var el = t(864386),
    en = t(375708),
    ei = t(637495);
let er = () => Promise.resolve();
function ed(e) {
    let { selectedColors: s, setSelectedColors: t, className: n } = e,
        [r, d] = l.useState(!1),
        o = l.useRef(null),
        c = s.length > 0 ? (0, T.nO)(s) : w.TGz,
        u = l.useCallback((e) => t((0, T.cf)(e)), [t]),
        f = I.lU.findIndex((e) => (0, m.v)(e, s)),
        x = f >= 0,
        E = s.length > 0 ? s : (0, T.cf)(c),
        h = en.intl.string(el.default["6OxgN7"]),
        N = en.intl.string(en.t["FHBa/1"]),
        S = (0, G.Ay)({
            id: "gummy-color-picker",
            isEnabled: !0,
            orientation: z.Gl.HORIZONTAL,
            scrollToStart: er,
            scrollToEnd: er,
        });
    return (0, a.jsx)(U.hD, {
        navigator: S,
        children: (0, a.jsx)(U.PR, {
            children: (e) => {
                let { ref: s, ...l } = e;
                return (0, a.jsxs)("div", {
                    className: i()(ei.kL, n),
                    ref: s,
                    ...l,
                    children: [
                        (0, a.jsxs)("div", {
                            className: ei.Ix,
                            children: [
                                (0, a.jsx)("div", {
                                    className: i()(ei.yB, { [ei.EI]: x }),
                                    children:
                                        !x &&
                                        E.map((e, s) =>
                                            (0, a.jsx)(
                                                "div",
                                                { className: ei._4, style: { background: (0, H.Hl)(e) } },
                                                s,
                                            ),
                                        ),
                                }),
                                (0, a.jsx)("div", {
                                    className: ei.fX,
                                    children: (0, a.jsx)(W.Y, {
                                        targetElementRef: o,
                                        position: "top",
                                        align: "left",
                                        shouldShow: r,
                                        onRequestOpen: () => d(!0),
                                        onRequestClose: () => d(!1),
                                        renderPopout: () =>
                                            (0, a.jsx)(ea, {
                                                value: x ? w.TGz : c,
                                                onChange: u,
                                                hueToColor: T.UZ,
                                                onConfirm: () => d(!1),
                                                "aria-label": N,
                                            }),
                                        children: (e) =>
                                            (0, a.jsx)(K.m, {
                                                text: N,
                                                position: "top",
                                                ariaHidden: !0,
                                                children: (0, a.jsx)("div", {
                                                    ...e,
                                                    ref: o,
                                                    className: ei.r9,
                                                    children: (0, a.jsx)(U.tG, {
                                                        id: "custom",
                                                        children: (e) =>
                                                            (0, a.jsx)(J.D, {
                                                                ...e,
                                                                className: ei.Vz,
                                                                "aria-label": N,
                                                                children: (0, a.jsx)($.R, {
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
                        I.lU.map((e, s) =>
                            (0, a.jsx)(
                                Z,
                                {
                                    listItemId: `gummy-preset-${s}`,
                                    colors: e,
                                    selected: f === s,
                                    onSelect: () => t([...e]),
                                    "aria-label": `${h} ${s + 1}`,
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
function em(e) {
    let { selectedColors: s, setSelectedColors: t, defaultColor: n, selectedEffectId: i, className: r } = e,
        o = (0, T.as)(i) > 1,
        c = i === d.z.PRISM ? 231 : 104,
        m = (0, l.useMemo)(() => (0, I.ii)(i).map((e) => ({ colors: e, name: "" })), [i]),
        u = (0, l.useCallback)(
            (e) => {
                t([e]), A.default.track(w.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: e === n, colors: [e] });
            },
            [t, n],
        ),
        x = (0, l.useCallback)(
            (e) => {
                t(e), A.default.track(w.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: !1, colors: e });
            },
            [t],
        );
    return (0, a.jsxs)("div", {
        className: r,
        children: [
            (0, a.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: ec.sU,
                children: [
                    en.intl.string(el.default.JOpi7z),
                    (0, a.jsx)(P.t, { size: "xs", color: Y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            i === d.z.GUMMY
                ? (0, a.jsx)(ed, { selectedColors: s, setSelectedColors: x })
                : (0, a.jsx)(B.default, {
                      className: eo.Ei,
                      colorContainerClassName: eo.rx,
                      defaultColor: n,
                      colors: o ? m : I.Jl,
                      value: s[0],
                      gradientColors: s,
                      onChange: u,
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
var eu = t(834730),
    ef = t(228366);
let ex = { seenFontIds: new Set(), seenEffectIds: new Set(), newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 };
class eE extends c.Ay.PersistedStore {
    static displayName = "DisplayNameStylesSeenStore";
    static persistKey = "DisplayNameStylesSeenStore";
    static migrations = [(e) => ({ ...e, newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 })];
    initialize(e) {
        ex = {
            seenFontIds: new Set(e?.seenFontIds ?? []),
            seenEffectIds: new Set(e?.seenEffectIds ?? []),
            newFontsBadgeDismissed: e?.newFontsBadgeDismissed ?? !1,
            newEffectsBadgeDismissed: e?.newEffectsBadgeDismissed ?? !1,
        };
    }
    getState() {
        return {
            seenFontIds: Array.from(ex.seenFontIds),
            seenEffectIds: Array.from(ex.seenEffectIds),
            newFontsBadgeDismissed: ex.newFontsBadgeDismissed,
            newEffectsBadgeDismissed: ex.newEffectsBadgeDismissed,
        };
    }
    getSeenFonts() {
        return ex.seenFontIds;
    }
    getSeenEffects() {
        return ex.seenEffectIds;
    }
    getNewFontsBadgeDismissed() {
        return ex.newFontsBadgeDismissed;
    }
    getNewEffectsBadgeDismissed() {
        return ex.newEffectsBadgeDismissed;
    }
}
let eh = new eE(ef.h, {
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
    DISPLAY_NAME_STYLES_MARK_NEW_FONTS_BADGE_DISMISSED: function () {
        if (ex.newFontsBadgeDismissed) return !1;
        ex = { ...ex, newFontsBadgeDismissed: !0 };
    },
    DISPLAY_NAME_STYLES_MARK_NEW_EFFECTS_BADGE_DISMISSED: function () {
        if (ex.newEffectsBadgeDismissed) return !1;
        ex = { ...ex, newEffectsBadgeDismissed: !0 };
    },
});
var eN = t(922301),
    eS = t(660184),
    eg = t(700090);
function eA(e) {
    let s,
        { selectedEffectId: t, setSelectedEffectId: n, className: r } = e,
        d = j(),
        { dotEffectIds: o, dismissEffectDot: m } =
            ((s = (0, c.bG)([eh], () => eh.getSeenEffects())),
            {
                dotEffectIds: l.useMemo(() => new Set(d.filter((e) => I.gz.includes(e) && !s.has(e))), [d, s]),
                dismissEffectDot: l.useCallback((e) => {
                    ef.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN", effectId: e });
                }, []),
            }),
        u = (0, _.ux)("DisplayNameStylesEffectSelection"),
        x = Math.ceil(d.length / 2);
    return (0, a.jsxs)("div", {
        className: r,
        children: [
            (0, a.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: ec.sU,
                children: [
                    en.intl.string(el.default["1wilM1"]),
                    (0, a.jsx)(P.t, { size: "xs", color: Y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, a.jsx)("div", {
                className: i()(ec.fh, { [eg.KS]: u }),
                style: { "--custom-dns-tile-columns": x },
                children: d.map((e) => {
                    let s = o.has(e);
                    return (0, a.jsx)(
                        ep,
                        {
                            effectId: e,
                            selected: e === t,
                            showNewDot: s,
                            isFlywheelEnabled: u,
                            onClick: () => {
                                n(e), s && m(e);
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
    let { effectId: s, selected: t, showNewDot: l, isFlywheelEnabled: n, onClick: r } = e,
        d = (0, y._)(s),
        o = I.gz.includes(s);
    return (0, a.jsxs)(J.D, {
        className: i()(eg.Tw, { [eg.wH]: t, [eg.uT]: n }),
        onClick: r,
        children: [
            (0, a.jsx)(eS.A, {
                userName: d.name,
                effectDisplayType: eN.G.STATIC,
                displayNameStyles: d.previewStyles,
                textClassName: eg.tr,
                inProfile: !0,
            }),
            l && (0, a.jsx)("div", { className: ec.s1, "aria-hidden": !0 }),
            o &&
                (0, a.jsx)(eu.E, {
                    variant: "text-xxs/normal",
                    color: "text-subtle",
                    className: ec.hn,
                    children: en.intl.string(en.t.oW0eUd),
                }),
        ],
    });
}
var e_ = t(885574),
    eI = t(73392),
    eD = t(699006);
function ej(e) {
    let s,
        { selectedFontId: t, setSelectedFontId: n, displayName: r, className: d } = e,
        m = L(),
        { dotFontIds: u, dismissFontDot: x } =
            ((s = (0, c.bG)([eh], () => eh.getSeenFonts())),
            {
                dotFontIds: l.useMemo(() => new Set(m.filter((e) => I._k.includes(e) && !s.has(e))), [m, s]),
                dismissFontDot: l.useCallback((e) => {
                    ef.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_FONT_SEEN", fontId: e });
                }, []),
            }),
        E = t !== o.x.DEFAULT,
        h = (0, T.Xr)(r),
        N = (0, _.ux)("DisplayNameStylesFontSelection"),
        S = Math.ceil(m.length / (N ? 3 : 2));
    return (0, a.jsxs)("div", {
        className: d,
        children: [
            (0, a.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: ec.sU,
                children: [
                    en.intl.string(el.default.nP0ngb),
                    (0, a.jsx)(P.t, { size: "xs", color: Y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, a.jsx)("div", {
                className: i()(ec.fh, { [eD.qW]: N }),
                style: { "--custom-dns-tile-columns": S },
                children: m.map((e) => {
                    let s = (0, eI.p)(e),
                        l = e === t,
                        r = u.has(e),
                        d = I._k.includes(e),
                        o = en.intl.string(s.name);
                    return (0, a.jsx)(
                        K.m,
                        {
                            text: o,
                            asContainer: !0,
                            children: (0, a.jsxs)(J.D, {
                                className: i()(eD.SO, { [eD.wH]: l, [eD.j4]: N }),
                                onClick: () => {
                                    n(e), r && x(e);
                                },
                                "aria-label": d ? `${o}, ${en.intl.string(en.t.oW0eUd)}` : o,
                                children: [
                                    (0, a.jsx)(eu.E, {
                                        variant: "text-lg/semibold",
                                        color: l ? "text-strong" : "text-default",
                                        className: i()(eD.FH, s.className),
                                        children: "Gg",
                                    }),
                                    r && (0, a.jsx)("div", { className: ec.s1, "aria-hidden": !0 }),
                                    d &&
                                        (0, a.jsx)(eu.E, {
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
            E &&
                h &&
                (0, a.jsxs)("div", {
                    className: eD.Lb,
                    children: [
                        (0, a.jsx)(e_.m, { size: "lg" }),
                        (0, a.jsx)(eu.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: en.intl.string(el.default["+O1xL2"]),
                        }),
                    ],
                }),
        ],
    });
}
var ev = t(821609),
    eC = t(908803),
    eL = t(87719),
    eT = t(465794),
    ey = t(757036),
    eb = t(202541),
    eM = t(277041);
function ek(e) {
    let { onApply: s, onSurpriseMe: t, onClose: l, canApply: n } = e,
        i = (0, ey.L)(eb.PremiumTypes.TIER_2),
        r = (0, a.jsx)(ev.$, {
            variant: "secondary",
            size: "md",
            onClick: t,
            icon: { type: "rive", asset: eC.m, riveProps: { dataBinding: { fill: Y.A.colors.ICON_STRONG } } },
            text: en.intl.string(el.default.NOGFds),
        }),
        d = (0, a.jsxs)("div", {
            className: eM.k0,
            children: [
                r,
                (0, a.jsx)(K.m, {
                    text: en.intl.string(el.default.cVTpnj),
                    shouldShow: !n,
                    children: (0, a.jsx)(ev.$, {
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
        o = (0, a.jsxs)("div", {
            className: eM.UX,
            children: [
                (0, a.jsxs)("div", {
                    className: eM.iQ,
                    children: [
                        (0, a.jsx)(K.m, {
                            text: en.intl.string(en.t["5AFxuK"]),
                            children: (0, a.jsx)(P.t, { size: "md", color: Y.A.colors.ICON_STRONG }),
                        }),
                        (0, a.jsx)(eu.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: eM.h_,
                            children: en.intl.format(el.default.PWf0xS, {
                                onClickNitro: () => {
                                    A.default.track(w.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, eL.x)(l);
                                },
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: eM.UD,
                    children: [
                        r,
                        (0, a.jsx)(eT.A, {
                            premiumModalAnalyticsLocation: {
                                section: w.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: w.ZSU.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: eb.pe.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, a.jsx)(u.jl, { "data-migration-pending": !0, className: eM.qr, children: i ? d : o });
}
var ew = t(366010),
    eF = t(43990),
    eO = t(629584),
    eR = t(943255),
    eP = t(575181),
    eY = t(736653),
    eB = t(780898),
    eG = t(344346),
    eU = t(320095),
    ez = t(963852),
    eH = t(763754),
    eK = t(20851),
    eW = t(986687),
    eJ = t(101058),
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
            onClose: m,
        } = e,
        f = (0, eY.Ay)(),
        x = (0, ew.M)(f),
        [E, h] = (0, l.useState)(x),
        S = (0, e$.Ay)(s.id, null),
        { bannerSrc: g } = (0, eX.A)({ displayProfile: S, size: 413, canAnimate: !1 }),
        p = (0, c.cf)([F.A], () => F.A.getPendingChanges(t?.id)),
        _ = (0, eJ.V7)({ userId: s.id, image: p.pendingAvatar }),
        { userNameplate: I, guildNameplate: D, pendingNameplate: j } = (0, N.rv)(s, t?.id),
        v = (0, eB.WK)(D);
    E && !x ? (f = w.NJ8.DARK) : !E && x && (f = w.NJ8.LIGHT);
    let C = (0, l.useCallback)(() => {
            A.default.track(w.HAw.DISPLAY_NAME_STYLES_CLOSED), m();
        }, [m]),
        L = (0, l.useCallback)((e) => {
            h(e === w.NJ8.DARK), A.default.track(w.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === w.NJ8.DARK });
        }, []),
        T = (0, l.useMemo)(
            () => ({ ...(0, eH.FT)(s, null), nick: n, displayNameStyles: { fontId: r, effectId: d, colors: o } }),
            [s, r, d, o, n],
        );
    return (0, a.jsxs)("div", {
        className: eQ._l,
        children: [
            (0, a.jsx)(u.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: eQ.bV,
                children: (0, a.jsx)(u.s_, { "data-migration-pending": !0, onClick: C, innerClassName: eQ.b }),
            }),
            null != g &&
                (0, a.jsx)(eV.A, {
                    user: s,
                    displayProfile: S,
                    themeType: eq.d.MODAL_V2,
                    className: eQ.LX,
                    forceUserTheme: !0,
                    children: (0, a.jsx)("div", { className: eQ.b8, style: { backgroundImage: `url(${g})` } }),
                }),
            (0, a.jsx)(eF.N, {
                theme: f,
                children: (e) =>
                    (0, a.jsxs)("div", {
                        className: i()(eQ.cq, e),
                        inert: !0,
                        children: [
                            (0, a.jsx)(eW.A, {
                                user: s,
                                guild: t,
                                ...p,
                                pendingAvatar: _,
                                pendingGlobalName: n,
                                pendingDisplayNameStyles: T.displayNameStyles,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: eQ.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                                hideProfileFrame: !0,
                            }),
                            (0, a.jsx)(eK.A, {
                                author: T,
                                message: (0, eU.rh)({
                                    ...(0, ez.Ay)({ channelId: "1337", content: en.intl.string(el.default.h5Cuej) }),
                                    state: w.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: eQ.OT,
                                previewGuildId: t?.id,
                                avatarDecorationOverride: p.pendingAvatarDecoration,
                                avatarOverride: _,
                            }),
                            (0, a.jsx)(eG.A, {
                                user: s,
                                guildId: t?.id,
                                nameplate: j,
                                nameplateData: null == j ? (v ?? I) : void 0,
                                pendingGlobalName: n,
                                pendingAvatarDecoration: p.pendingAvatarDecoration,
                                pendingDisplayNameStyles: T.displayNameStyles,
                                isHighlighted: !0,
                                className: eQ.qF,
                            }),
                        ],
                    }),
            }),
            (0, a.jsxs)("div", {
                className: eQ.dI,
                children: [
                    (0, a.jsx)(eu.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: en.intl.format(el.default.prQba8, {
                            helpArticleLink: eZ.A.getArticleURL(w.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, a.jsx)(e1, { darkPreview: E, onToggleTheme: L }),
                ],
            }),
        ],
    });
}
function e1(e) {
    let { darkPreview: s, onToggleTheme: t } = e,
        l = s ? w.NJ8.DARK : w.NJ8.LIGHT;
    return (0, a.jsx)(eO.I, {
        className: eQ.xr,
        optionClassName: eQ.$C,
        options: [
            {
                name: "",
                tooltip: en.intl.string(en.t.b8Cei3),
                value: w.NJ8.DARK,
                icon: eR.Z,
                className: l === w.NJ8.DARK ? eQ.iB : void 0,
            },
            {
                name: "",
                tooltip: en.intl.string(en.t.K2sFfo),
                value: w.NJ8.LIGHT,
                icon: eP.F,
                className: l === w.NJ8.LIGHT ? eQ.iB : void 0,
            },
        ],
        value: l,
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
        { transitionState: t, analyticsLocations: n, guildId: I, onClose: D, returnRef: v } = e,
        C = (0, c.bG)([g.default], () => g.default.getCurrentUser()),
        P =
            ((s = R.Ay.useName(C)),
            (0, c.bG)([F.A, O.Ay], () => {
                let e = F.A.getPendingChanges(I);
                return null != I ? (e.pendingNickname ?? O.Ay.getNick(I, C?.id)) : e.pendingGlobalName;
            }, [I, C]) ??
                s ??
                ""),
        Y = (0, c.bG)([S.A], () => S.A.getGuild(I)),
        { userDisplayNameStyles: B, guildDisplayNameStyles: G, pendingDisplayNameStyles: U } = (0, N.B0)(C, I),
        z = void 0 !== U ? U : (G ?? B),
        [H, K] = l.useState(z?.fontId ?? o.x.DEFAULT),
        [W, J] = l.useState(z?.effectId ?? d.z.SOLID),
        $ = (0, T.as)(W) > 1,
        X = (0, y._)(W),
        V = (0, b.A)(),
        Z = z?.colors ?? [],
        [q, Q] = l.useState(Z.length > 0 && !$ ? Z[0] : X.defaultColors[0]),
        [ee, es] = l.useState(() => (Z.length > 0 && $ ? { [W]: Z } : {})),
        et = l.useMemo(() => ee[W] ?? V[W], [ee, W, V]);
    (0, h.A)(
        { type: r.ImpressionTypes.POPOUT, name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: ea } = (0, E.Ay)(n, x.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        ei = l.useMemo(() => ($ ? et : [q]), [$, et, q]),
        er = l.useMemo(() => H !== z?.fontId || W !== z?.effectId || !(0, m.v)(ei, z?.colors ?? []), [z, H, W, ei]),
        ed = (0, _.ux)("DisplayNameStylesModal"),
        eo = L(),
        ec = j(),
        eu = (function (e) {
            let {
                hasChanges: s,
                selectedFontId: t,
                selectedEffectId: a,
                selectedColors: n,
                defaultColor: i,
                guildId: r,
                isTryItOut: c,
                onClose: m,
            } = e;
            return l.useCallback(() => {
                if (s) {
                    let e = n;
                    a === d.z.SOLID && n.length > 0 && n[0] === i && (e = []);
                    let s = { fontId: t, effectId: a, colors: e };
                    c ? (0, M.EW)(s) : (0, k.p)({ guildId: r, displayNameStyles: s }),
                        A.default.track(w.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                            font_name: o.x[t],
                            effect_name: d.z[a],
                            colors: n,
                        }),
                        m?.();
                }
            }, [s, t, a, n, i, m, r, c]);
        })({
            hasChanges: er,
            selectedFontId: H,
            selectedEffectId: W,
            selectedColors: ei,
            defaultColor: X.defaultColors[0],
            guildId: I,
            onClose: D,
        }),
        ef = l.useCallback(() => {
            let { fontId: e, effectId: s, colors: t } = (0, T.gN)(eo, ec);
            K(e),
                J(s),
                (0, T.as)(s) > 1 ? es((e) => ({ ...e, [s]: t })) : Q(t[0]),
                A.default.track(w.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [eo, ec, es, Q]),
        ex = l.useCallback(
            (e) => {
                $ ? es((s) => ({ ...s, [W]: e })) : Q(e[0]);
            },
            [$, W, es, Q],
        );
    return null == C
        ? null
        : (0, a.jsx)(E.f5, {
              value: ea,
              children: (0, a.jsx)(p.l.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, a.jsxs)(u.EO, {
                      "data-migration-pending": !0,
                      transitionState: t,
                      size: u.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: i()(e8.CR, { [e8.st]: ed }),
                      returnRef: v,
                      children: [
                          (0, a.jsxs)(u.$m, {
                              "data-migration-pending": !0,
                              className: i()(e8.jE, { [e8.st]: ed }),
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: e8.w1,
                                      children: [
                                          (0, a.jsx)(u.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: e8.bV,
                                              children: (0, a.jsx)(f.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: en.intl.string(el.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, a.jsx)(ej, {
                                              selectedFontId: H,
                                              setSelectedFontId: K,
                                              displayName: P,
                                              className: e8._,
                                          }),
                                          (0, a.jsx)(eA, {
                                              selectedEffectId: W,
                                              setSelectedEffectId: J,
                                              className: e8._,
                                          }),
                                          (0, a.jsx)(em, {
                                              selectedColors: ei,
                                              setSelectedColors: ex,
                                              selectedEffectId: W,
                                              className: e8._,
                                              defaultColor: X.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, a.jsx)(e0, {
                                      user: C,
                                      guild: Y,
                                      displayName: P,
                                      selectedFontId: H,
                                      selectedEffectId: W,
                                      selectedColors: W === d.z.SOLID && (0, m.v)(ei, X.defaultColors) ? [] : ei,
                                      onClose: D,
                                  }),
                              ],
                          }),
                          (0, a.jsx)(ek, {
                              onApply: eu,
                              onSurpriseMe: ef,
                              onClose: D,
                              canApply: er,
                              analyticsLocations: ea,
                          }),
                      ],
                  }),
              }),
          });
}

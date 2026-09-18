t.d(s, { default: () => e9 });
var a = t(477900),
    n = t(582128),
    l = t(503698),
    i = t.n(l),
    r = t(562708),
    d = t(508425),
    o = t(559949),
    c = t(17928),
    u = t(52133),
    m = t(935462),
    f = t(297264),
    g = t(793574),
    h = t(688810),
    E = t(139286),
    S = t(919395),
    N = t(71393),
    x = t(287809),
    A = t(174459),
    p = t(871162),
    I = t(248778),
    _ = t(750656);
let D = [..._.re, ..._.gz];
function C() {
    let e = (0, I.ux)("effect-order");
    return n.useMemo(() => (e ? D : _.re), [e]);
}
let j = [
        o.x.DEFAULT,
        o.x.ZILLA_SLAB,
        o.x.CHERRY_BOMB,
        o.x.CHICLE,
        o.x.MUSEO_MODERNO,
        o.x.NEO_CASTEL,
        o.x.PIXELIFY,
        o.x.SINISTRE,
    ],
    v = [...j, ..._._k];
function T() {
    let e = (0, I.ux)("font-order");
    return n.useMemo(() => (e ? v : j), [e]);
}
var y = t(945096),
    L = t(898985),
    b = t(430571),
    M = t(207803),
    k = t(84540),
    O = t(652215),
    w = t(836602),
    F = t(696451),
    P = t(427262),
    R = t(403581),
    B = t(661531),
    Y = t(48736),
    G = t(317097),
    H = t(701974),
    z = t(375708);
function U(e) {
    return n.useMemo(
        () =>
            (0, _.ii)(e).map((e, s) => ({
                colors: e,
                a11yLabel: z.intl.formatToPlainString(H.default.FHfTsV, {
                    number: s + 1,
                    hexList: e.map(G.Hl).join(", "),
                }),
            })),
        [e],
    );
}
var K = t(887129),
    J = t(837381),
    W = t(741918),
    X = t(922016),
    $ = t(866665),
    V = t(939249),
    Z = t(22231),
    q = t(933832),
    Q = t(818168);
function ee(e) {
    let { colors: s, selected: t, onSelect: n, listItemId: l, "aria-label": i } = e,
        r = (0, J.rm)(l);
    return (0, a.jsxs)("button", {
        type: "button",
        className: Q.nf,
        onClick: n,
        "aria-label": i,
        ...r,
        children: [
            s.map((e, s) => (0, a.jsx)("div", { className: Q._4, style: { background: (0, G.Hl)(e) } }, s)),
            t && (0, a.jsx)(q.CheckmarkLargeIcon, { className: Q.z6, size: "md", color: "currentColor" }),
        ],
    });
}
var es = t(1986),
    et = t(315710),
    ea = t(650583),
    en = t(607570);
let el = [0, 60, 120, 180, 240, 300, 360];
function ei(e) {
    let { value: s, onChange: t, hueToColor: l, onConfirm: r, "aria-label": d, className: o } = e,
        c = (0, y.xo)((0, G.tf)(s).h),
        u = n.useRef(null);
    (0, et.tj)(u);
    let m = n.useCallback((e) => t(l((0, y.xo)(e))), [t, l]),
        f = n.useCallback((e) => m(e.h), [m]),
        g = n.useMemo(() => `linear-gradient(to right, ${el.map((e) => (0, G.Hl)(l(e))).join(", ")})`, [l]),
        h = n.useMemo(
            () =>
                function (e) {
                    let { hsl: s } = e;
                    return (0, a.jsx)("div", { className: en.Wn, style: { background: (0, G.Hl)(l(s.h)) } });
                },
            [l],
        ),
        E = n.useCallback(
            (e) => {
                switch (e.key) {
                    case ea.dh.ARROW_LEFT:
                    case ea.dh.ARROW_DOWN:
                        m(c - 5);
                        break;
                    case ea.dh.ARROW_RIGHT:
                    case ea.dh.ARROW_UP:
                        m(c + 5);
                        break;
                    case ea.dh.HOME:
                        m(0);
                        break;
                    case ea.dh.END:
                        m(359);
                        break;
                    case ea.dh.ENTER:
                    case ea.dh.SPACE:
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
        className: i()(en.kL, o),
        children: (0, a.jsx)("div", {
            className: en.SP,
            style: { "--custom-hue-track": g },
            role: "slider",
            tabIndex: 0,
            "aria-label": d,
            "aria-valuemin": 0,
            "aria-valuemax": 360,
            "aria-valuenow": Math.round(c),
            onKeyDown: E,
            children: (0, a.jsx)(es.Hue, {
                hsl: { h: c, s: 1, l: 0.5 },
                direction: "horizontal",
                pointer: h,
                onChange: f,
            }),
        }),
    });
}
var er = t(420080);
let ed = () => Promise.resolve();
function eo(e) {
    let { selectedColors: s, setSelectedColors: t, className: l } = e,
        [r, o] = n.useState(!1),
        c = n.useRef(null),
        m = s.length > 0 ? (0, y.nO)(s) : O.TGz,
        f = n.useCallback((e) => t((0, y.cf)(e)), [t]),
        g = U(d.z.GUMMY),
        h = g.findIndex((e) => {
            let { colors: t } = e;
            return (0, u.v)(t, s);
        }),
        E = h >= 0,
        S = s.length > 0 ? s : (0, y.cf)(m),
        N = z.intl.string(z.t["FHBa/1"]),
        x = (0, K.Ay)({
            id: "gummy-color-picker",
            isEnabled: !0,
            orientation: W.Gl.HORIZONTAL,
            scrollToStart: ed,
            scrollToEnd: ed,
        });
    return (0, a.jsx)(J.hD, {
        navigator: x,
        children: (0, a.jsx)(J.PR, {
            children: (e) => {
                let { ref: s, ...n } = e;
                return (0, a.jsxs)("div", {
                    className: i()(er.kL, l),
                    ref: s,
                    ...n,
                    children: [
                        (0, a.jsxs)("div", {
                            className: er.Ix,
                            children: [
                                (0, a.jsx)("div", {
                                    className: i()(er.yB, { [er.EI]: E }),
                                    children:
                                        !E &&
                                        S.map((e, s) =>
                                            (0, a.jsx)(
                                                "div",
                                                { className: er._4, style: { background: (0, G.Hl)(e) } },
                                                s,
                                            ),
                                        ),
                                }),
                                (0, a.jsx)("div", {
                                    className: er.fX,
                                    children: (0, a.jsx)(X.Y, {
                                        targetElementRef: c,
                                        position: "top",
                                        align: "left",
                                        shouldShow: r,
                                        onRequestOpen: () => o(!0),
                                        onRequestClose: () => o(!1),
                                        renderPopout: () =>
                                            (0, a.jsx)(ei, {
                                                value: E ? O.TGz : m,
                                                onChange: f,
                                                hueToColor: y.UZ,
                                                onConfirm: () => o(!1),
                                                "aria-label": N,
                                            }),
                                        children: (e) =>
                                            (0, a.jsx)($.m, {
                                                text: N,
                                                position: "top",
                                                ariaHidden: !0,
                                                children: (0, a.jsx)("div", {
                                                    ...e,
                                                    ref: c,
                                                    className: er.r9,
                                                    children: (0, a.jsx)(J.tG, {
                                                        id: "custom",
                                                        children: (e) =>
                                                            (0, a.jsx)(V.D, {
                                                                ...e,
                                                                className: er.Vz,
                                                                "aria-label": N,
                                                                children: (0, a.jsx)(Z.PencilIcon, {
                                                                    size: "custom",
                                                                    width: 18,
                                                                    height: 18,
                                                                    color: "currentColor",
                                                                    className: er.IZ,
                                                                }),
                                                            }),
                                                    }),
                                                }),
                                            }),
                                    }),
                                }),
                            ],
                        }),
                        g.map((e, s) => {
                            let { colors: n, a11yLabel: l } = e;
                            return (0, a.jsx)(
                                ee,
                                {
                                    listItemId: `gummy-preset-${s}`,
                                    colors: n,
                                    selected: h === s,
                                    onSelect: () => t([...n]),
                                    "aria-label": l,
                                },
                                s,
                            );
                        }),
                    ],
                });
            },
        }),
    });
}
var ec = t(143660),
    eu = t(454137);
function em(e) {
    let { selectedColors: s, setSelectedColors: t, defaultColor: l, selectedEffectId: i, className: r } = e,
        o = (0, y.as)(i) > 1,
        c = i === d.z.PRISM ? 231 : 104,
        u = U(i).map((e) => {
            let { colors: s, a11yLabel: t } = e;
            return { colors: s, name: t };
        }),
        m = (0, n.useCallback)(
            (e) => {
                (t([e]), A.default.track(O.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: e === l, colors: [e] }));
            },
            [t, l],
        ),
        g = (0, n.useCallback)(
            (e) => {
                (t(e), A.default.track(O.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: !1, colors: e }));
            },
            [t],
        );
    return (0, a.jsxs)("div", {
        className: r,
        children: [
            (0, a.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: eu.sU,
                children: [
                    z.intl.string(H.default.JOpi7z),
                    (0, a.jsx)(R.t, { size: "xs", color: B.A.colors.TEXT_DEFAULT }),
                ],
            }),
            i === d.z.GUMMY
                ? (0, a.jsx)(eo, { selectedColors: s, setSelectedColors: g })
                : (0, a.jsx)(Y.default, {
                      className: ec.Ei,
                      colorContainerClassName: ec.rx,
                      defaultColor: l,
                      colors: o ? u : _.Jl,
                      value: s[0],
                      gradientColors: s,
                      onChange: m,
                      onChangeGradientColors: g,
                      isGradient: o,
                      gradientWidth: `${c}px`,
                      gradientDegrees: 90,
                      allowBlackCustomColor: !0,
                      customPickerPosition: "top",
                  }),
        ],
    });
}
var ef = t(228366);
let eg = { seenFontIds: new Set(), seenEffectIds: new Set(), newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 };
class eh extends c.Ay.PersistedStore {
    static displayName = "DisplayNameStylesSeenStore";
    static persistKey = "DisplayNameStylesSeenStore";
    static migrations = [(e) => ({ ...e, newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 })];
    initialize(e) {
        eg = {
            seenFontIds: new Set(e?.seenFontIds ?? []),
            seenEffectIds: new Set(e?.seenEffectIds ?? []),
            newFontsBadgeDismissed: e?.newFontsBadgeDismissed ?? !1,
            newEffectsBadgeDismissed: e?.newEffectsBadgeDismissed ?? !1,
        };
    }
    getState() {
        return {
            seenFontIds: Array.from(eg.seenFontIds),
            seenEffectIds: Array.from(eg.seenEffectIds),
            newFontsBadgeDismissed: eg.newFontsBadgeDismissed,
            newEffectsBadgeDismissed: eg.newEffectsBadgeDismissed,
        };
    }
    getSeenFonts() {
        return eg.seenFontIds;
    }
    getSeenEffects() {
        return eg.seenEffectIds;
    }
    getNewFontsBadgeDismissed() {
        return eg.newFontsBadgeDismissed;
    }
    getNewEffectsBadgeDismissed() {
        return eg.newEffectsBadgeDismissed;
    }
}
let eE = new eh(ef.h, {
    DISPLAY_NAME_STYLES_MARK_FONT_SEEN: function (e) {
        let { fontId: s } = e;
        if (eg.seenFontIds.has(s)) return !1;
        eg = { ...eg, seenFontIds: new Set([...eg.seenFontIds, s]) };
    },
    DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN: function (e) {
        let { effectId: s } = e;
        if (eg.seenEffectIds.has(s)) return !1;
        eg = { ...eg, seenEffectIds: new Set([...eg.seenEffectIds, s]) };
    },
    DISPLAY_NAME_STYLES_MARK_NEW_FONTS_BADGE_DISMISSED: function () {
        if (eg.newFontsBadgeDismissed) return !1;
        eg = { ...eg, newFontsBadgeDismissed: !0 };
    },
    DISPLAY_NAME_STYLES_MARK_NEW_EFFECTS_BADGE_DISMISSED: function () {
        if (eg.newEffectsBadgeDismissed) return !1;
        eg = { ...eg, newEffectsBadgeDismissed: !0 };
    },
});
var eS = t(922301),
    eN = t(660184),
    ex = t(742191);
function eA(e) {
    let s,
        { selectedEffectId: t, setSelectedEffectId: l, className: r } = e,
        d = C(),
        { dotEffectIds: o, dismissEffectDot: u } =
            ((s = (0, c.bG)([eE], () => eE.getSeenEffects())),
            {
                dotEffectIds: n.useMemo(() => new Set(d.filter((e) => _.gz.includes(e) && !s.has(e))), [d, s]),
                dismissEffectDot: n.useCallback((e) => {
                    ef.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN", effectId: e });
                }, []),
            }),
        m = (0, I.ux)("DisplayNameStylesEffectSelection"),
        g = Math.ceil(d.length / 2);
    return (0, a.jsxs)("div", {
        className: r,
        children: [
            (0, a.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: eu.sU,
                children: [
                    z.intl.string(H.default["1wilM1"]),
                    (0, a.jsx)(R.t, { size: "xs", color: B.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, a.jsx)("div", {
                className: i()(eu.fh, { [ex.KS]: m }),
                style: { "--custom-dns-tile-columns": g },
                children: d.map((e) => {
                    let s = o.has(e);
                    return (0, a.jsx)(
                        ep,
                        {
                            effectId: e,
                            selected: e === t,
                            showNewDot: s,
                            isFlywheelEnabled: m,
                            onClick: () => {
                                (l(e), s && u(e));
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
    let { effectId: s, selected: t, showNewDot: n, isFlywheelEnabled: l, onClick: r } = e,
        d = (0, L._)(s);
    return (0, a.jsxs)(V.D, {
        className: i()(ex.Tw, { [ex.wH]: t, [ex.uT]: l }),
        onClick: r,
        children: [
            (0, a.jsx)(eN.A, {
                userName: d.name,
                effectDisplayType: eS.G.ANIMATED,
                displayNameStyles: d.previewStyles,
                textClassName: ex.tr,
                loop: !0,
                inProfile: !0,
            }),
            n && (0, a.jsx)("div", { className: eu.s1, "aria-hidden": !0 }),
        ],
    });
}
var eI = t(834730),
    e_ = t(885574),
    eD = t(73392),
    eC = t(599715);
function ej(e) {
    let s,
        { selectedFontId: t, setSelectedFontId: l, displayName: r, className: d } = e,
        u = T(),
        { dotFontIds: m, dismissFontDot: g } =
            ((s = (0, c.bG)([eE], () => eE.getSeenFonts())),
            {
                dotFontIds: n.useMemo(() => new Set(u.filter((e) => _._k.includes(e) && !s.has(e))), [u, s]),
                dismissFontDot: n.useCallback((e) => {
                    ef.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_FONT_SEEN", fontId: e });
                }, []),
            }),
        h = t !== o.x.DEFAULT,
        E = (0, y.Xr)(r),
        S = (0, I.ux)("DisplayNameStylesFontSelection"),
        N = Math.ceil(u.length / (S ? 3 : 2));
    return (0, a.jsxs)("div", {
        className: d,
        children: [
            (0, a.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: eu.sU,
                children: [
                    z.intl.string(H.default.nP0ngb),
                    (0, a.jsx)(R.t, { size: "xs", color: B.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: i()(eu.fh, { [eC.qW]: S }),
                style: { "--custom-dns-tile-columns": N },
                children: [
                    u.map((e) => {
                        let s = (0, eD.p)(e),
                            n = e === t,
                            r = m.has(e),
                            d = z.intl.string(s.name);
                        return (0, a.jsx)(
                            $.m,
                            {
                                text: d,
                                asContainer: !0,
                                children: (0, a.jsxs)(V.D, {
                                    className: i()(eC.SO, { [eC.wH]: n, [eC.j4]: S }),
                                    onClick: () => {
                                        (l(e), r && g(e));
                                    },
                                    "aria-label": d,
                                    children: [
                                        (0, a.jsx)(eI.E, {
                                            variant: "text-lg/semibold",
                                            color: n ? "text-strong" : "text-default",
                                            className: i()(eC.FH, s.className),
                                            children: "Gg",
                                        }),
                                        r && (0, a.jsx)("div", { className: eu.s1, "aria-hidden": !0 }),
                                    ],
                                }),
                            },
                            e,
                        );
                    }),
                    h &&
                        E &&
                        (0, a.jsxs)("div", {
                            className: eC.Lb,
                            children: [
                                (0, a.jsx)(e_.CircleInformationIcon, { size: "lg" }),
                                (0, a.jsx)(eI.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: z.intl.string(H.default["+O1xL2"]),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
var ev = t(821609),
    eT = t(908803),
    ey = t(87719),
    eL = t(465794),
    eb = t(757036),
    eM = t(202541),
    ek = t(7212);
function eO(e) {
    let { onApply: s, onSurpriseMe: t, onClose: n, canApply: l, isPremiumTryItOut: i = !1 } = e,
        r = (0, eb.L)(eM.PremiumTypes.TIER_2),
        d = (0, a.jsx)(ev.$, {
            variant: "secondary",
            size: "md",
            onClick: t,
            icon: { type: "rive", asset: eT.m, riveProps: { dataBinding: { fill: B.A.colors.ICON_STRONG } } },
            text: z.intl.string(H.default.NOGFds),
        }),
        o = (0, a.jsxs)("div", {
            className: ek.k0,
            children: [
                d,
                (0, a.jsx)($.m, {
                    text: z.intl.string(H.default.cVTpnj),
                    shouldShow: !l,
                    children: (0, a.jsx)(ev.$, {
                        onClick: s,
                        disabled: !l,
                        text: z.intl.string(z.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        c = (0, a.jsxs)("div", {
            className: ek.UX,
            children: [
                (0, a.jsxs)("div", {
                    className: ek.iQ,
                    children: [
                        (0, a.jsx)($.m, {
                            text: z.intl.string(z.t["5AFxuK"]),
                            children: (0, a.jsx)(R.t, { size: "md", color: B.A.colors.ICON_STRONG }),
                        }),
                        (0, a.jsx)(eI.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: ek.h_,
                            children: z.intl.format(H.default.PWf0xS, {
                                onClickNitro: () => {
                                    (A.default.track(O.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, ey.x)(n));
                                },
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: ek.UD,
                    children: [
                        d,
                        (0, a.jsx)(eL.A, {
                            premiumModalAnalyticsLocation: {
                                section: O.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: O.ZSU.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: eM.pe.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, a.jsx)(m.jl, { "data-migration-pending": !0, className: ek.qr, children: i || r ? o : c });
}
var ew = t(366010),
    eF = t(43990),
    eP = t(629584),
    eR = t(943255),
    eB = t(575181),
    eY = t(736653),
    eG = t(780898),
    eH = t(344346),
    ez = t(320095),
    eU = t(963852),
    eK = t(763754),
    eJ = t(20851),
    eW = t(986687),
    eX = t(101058),
    e$ = t(999291),
    eV = t(686189),
    eZ = t(946356),
    eq = t(975571),
    eQ = t(996988),
    e0 = t(228839);
function e1(e) {
    let {
            user: s,
            guild: t,
            displayName: l,
            selectedFontId: r,
            selectedEffectId: d,
            selectedColors: o,
            isPremiumTryItOut: u = !1,
        } = e,
        m = (0, eY.Ay)(),
        f = (0, ew.M)(m),
        [g, h] = (0, n.useState)(f),
        E = (0, e$.Ay)(s.id, null),
        { pendingChanges: N, tryItOutChanges: x } = (0, c.cf)([w.A], () => ({
            pendingChanges: w.A.getPendingChanges(t?.id),
            tryItOutChanges: w.A.getTryItOutChanges(),
        })),
        {
            pendingAvatar: p,
            pendingAvatarDecoration: I,
            pendingPrimaryGuildId: _,
            pendingBanner: D,
            pendingThemeColors: C,
            pendingNickname: j,
            pendingPronouns: v,
            pendingProfileEffect: T,
            pendingProfileFrame: y,
            pendingAccentColor: L,
            pendingBio: b,
            pendingLegacyUsernameDisabled: M,
        } = N,
        k = u ? x.tryItOutAvatar : p,
        F = (0, eX.V7)({ userId: s.id, image: k }),
        P = u ? void 0 : I,
        R = u ? x.tryItOutBanner : D,
        B = u ? x.tryItOutThemeColors : C,
        { bannerSrc: Y } = (0, eV.A)({ displayProfile: E, size: 413, canAnimate: !1, pendingBanner: R }),
        { userNameplate: G, guildNameplate: U, pendingNameplate: K } = (0, S.rv)(s, t?.id),
        J = (0, eG.WK)(U);
    g && !f ? (m = O.NJ8.DARK) : !g && f && (m = O.NJ8.LIGHT);
    let W = (0, n.useCallback)((e) => {
            (h(e === O.NJ8.DARK), A.default.track(O.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === O.NJ8.DARK }));
        }, []),
        X = (0, n.useMemo)(
            () => ({ ...(0, eK.FT)(s, null), nick: l, displayNameStyles: { fontId: r, effectId: d, colors: o } }),
            [s, r, d, o, l],
        );
    return (0, a.jsxs)("div", {
        className: e0._l,
        children: [
            null != Y &&
                (0, a.jsx)(eZ.A, {
                    user: s,
                    displayProfile: E,
                    themeType: eQ.d.MODAL_V2,
                    className: e0.LX,
                    pendingThemeColors: B,
                    forceUserTheme: !0,
                    children: (0, a.jsx)("div", { className: e0.b8, style: { backgroundImage: `url(${Y})` } }),
                }),
            (0, a.jsx)(eF.N, {
                theme: m,
                children: (e) =>
                    (0, a.jsxs)("div", {
                        className: i()(e0.cq, e),
                        inert: !0,
                        children: [
                            (0, a.jsx)(eW.A, {
                                user: s,
                                guild: t,
                                pendingGlobalName: l,
                                pendingNickname: j,
                                pendingPronouns: v,
                                pendingAvatar: F,
                                pendingAvatarDecoration: P,
                                pendingPrimaryGuildId: _,
                                pendingBanner: R,
                                pendingThemeColors: B,
                                pendingAccentColor: L,
                                pendingBio: b,
                                pendingProfileEffect: T,
                                pendingProfileFrame: y,
                                pendingLegacyUsernameDisabled: M,
                                pendingDisplayNameStyles: X.displayNameStyles,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: e0.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                                hideProfileFrame: !0,
                            }),
                            (0, a.jsx)(eJ.A, {
                                author: X,
                                message: (0, ez.rh)({
                                    ...(0, eU.Ay)({ channelId: "1337", content: z.intl.string(H.default.h5Cuej) }),
                                    state: O.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: e0.OT,
                                previewGuildId: t?.id,
                                avatarDecorationOverride: P,
                                avatarOverride: F,
                            }),
                            (0, a.jsx)(eH.A, {
                                user: s,
                                guildId: t?.id,
                                nameplate: K,
                                nameplateData: null == K ? (J ?? G) : void 0,
                                pendingGlobalName: l,
                                pendingAvatarDecoration: P,
                                pendingPrimaryGuildId: _,
                                pendingDisplayNameStyles: X.displayNameStyles,
                                pendingAvatar: k,
                                isHighlighted: !0,
                                className: e0.qF,
                            }),
                        ],
                    }),
            }),
            (0, a.jsxs)("div", {
                className: e0.dI,
                children: [
                    (0, a.jsx)(eI.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: z.intl.format(H.default.prQba8, {
                            helpArticleLink: eq.A.getArticleURL(O.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, a.jsx)(e8, { darkPreview: g, onToggleTheme: W }),
                ],
            }),
        ],
    });
}
function e8(e) {
    let { darkPreview: s, onToggleTheme: t } = e,
        n = s ? O.NJ8.DARK : O.NJ8.LIGHT;
    return (0, a.jsx)(eP.I, {
        className: e0.xr,
        optionClassName: e0.$C,
        options: [
            {
                name: "",
                tooltip: z.intl.string(z.t.b8Cei3),
                value: O.NJ8.DARK,
                icon: eR.Z,
                className: n === O.NJ8.DARK ? e0.iB : void 0,
            },
            {
                name: "",
                tooltip: z.intl.string(z.t.K2sFfo),
                value: O.NJ8.LIGHT,
                icon: eB.F,
                className: n === O.NJ8.LIGHT ? e0.iB : void 0,
            },
        ],
        value: n,
        onChange: (e) => {
            let { value: s } = e;
            return t(s);
        },
        look: "pill",
    });
}
var e2 = t(226451);
function e9(e) {
    let s,
        {
            transitionState: t,
            analyticsLocations: l,
            guildId: _,
            isPremiumTryItOut: D = !1,
            onClose: j,
            returnRef: v,
        } = e,
        R = (0, c.bG)([x.default], () => x.default.getCurrentUser()),
        B =
            ((s = P.Ay.useName(R)),
            (0, c.bG)(
                [w.A, F.Ay],
                () => {
                    let e = w.A.getPendingChanges(_);
                    return null != _ ? (e.pendingNickname ?? F.Ay.getNick(_, R?.id)) : e.pendingGlobalName;
                },
                [_, R],
            ) ??
                s ??
                ""),
        Y = (0, c.bG)([N.A], () => N.A.getGuild(_)),
        {
            userDisplayNameStyles: G,
            guildDisplayNameStyles: U,
            pendingDisplayNameStyles: K,
            tryItOutDisplayNameStyles: J,
        } = (0, S.B0)(R, _),
        W = D ? J : K,
        X = void 0 !== W ? W : (U ?? G),
        [$, V] = n.useState(X?.fontId ?? o.x.DEFAULT),
        [Z, q] = n.useState(X?.effectId ?? d.z.SOLID),
        Q = (0, y.as)(Z) > 1,
        ee = (0, L._)(Z),
        es = (0, b.A)(),
        et = X?.colors ?? [],
        [ea, en] = n.useState(et.length > 0 && !Q ? et[0] : ee.defaultColors[0]),
        [el, ei] = n.useState(() => (et.length > 0 && Q ? { [Z]: et } : {})),
        er = n.useMemo(() => el[Z] ?? es[Z], [el, Z, es]);
    (0, E.A)(
        { type: r.ImpressionTypes.POPOUT, name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: ed } = (0, h.Ay)(l, g.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        eo = n.useMemo(() => (Q ? er : [ea]), [Q, er, ea]),
        ec = n.useMemo(() => $ !== X?.fontId || Z !== X?.effectId || !(0, u.v)(eo, X?.colors ?? []), [X, $, Z, eo]),
        eu = (0, I.ux)("DisplayNameStylesModal"),
        ef = T(),
        eg = C(),
        eh = (function (e) {
            let {
                hasChanges: s,
                selectedFontId: t,
                selectedEffectId: a,
                selectedColors: l,
                defaultColor: i,
                guildId: r,
                isTryItOut: c,
                onClose: u,
            } = e;
            return n.useCallback(() => {
                if (s) {
                    let e = l;
                    a === d.z.SOLID && l.length > 0 && l[0] === i && (e = []);
                    let s = { fontId: t, effectId: a, colors: e };
                    (c ? (0, M.EW)(s) : (0, k.p)({ guildId: r, displayNameStyles: s }),
                        A.default.track(O.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                            font_name: o.x[t],
                            effect_name: d.z[a],
                            colors: l,
                        }),
                        u?.());
                }
            }, [s, t, a, l, i, u, r, c]);
        })({
            hasChanges: ec,
            selectedFontId: $,
            selectedEffectId: Z,
            selectedColors: eo,
            defaultColor: ee.defaultColors[0],
            guildId: _,
            isTryItOut: D,
            onClose: j,
        }),
        eE = n.useCallback(() => {
            (A.default.track(O.HAw.DISPLAY_NAME_STYLES_CLOSED), j());
        }, [j]),
        eS = n.useCallback(() => {
            let { fontId: e, effectId: s, colors: t } = (0, y.gN)(ef, eg);
            (V(e),
                q(s),
                (0, y.as)(s) > 1 ? ei((e) => ({ ...e, [s]: t })) : en(t[0]),
                A.default.track(O.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME));
        }, [ef, eg, ei, en]),
        eN = n.useCallback(
            (e) => {
                Q ? ei((s) => ({ ...s, [Z]: e })) : en(e[0]);
            },
            [Q, Z, ei, en],
        );
    return null == R
        ? null
        : (0, a.jsx)(h.f5, {
              value: ed,
              children: (0, a.jsx)(p.l.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, a.jsxs)(m.EO, {
                      "data-migration-pending": !0,
                      transitionState: t,
                      size: m.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: i()(e2.CR, { [e2.st]: eu }),
                      returnRef: v,
                      children: [
                          (0, a.jsx)(m.s_, { "data-migration-pending": !0, onClick: eE, className: e2.b }),
                          (0, a.jsxs)(m.$m, {
                              "data-migration-pending": !0,
                              className: i()(e2.jE, { [e2.st]: eu }),
                              style: { overflow: "hidden auto" },
                              scrollbarGutter: !1,
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: e2.w1,
                                      children: [
                                          (0, a.jsx)(m.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: e2.bV,
                                              children: (0, a.jsx)(f.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: z.intl.string(H.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, a.jsx)(ej, {
                                              selectedFontId: $,
                                              setSelectedFontId: V,
                                              displayName: B,
                                              className: e2._,
                                          }),
                                          (0, a.jsx)(eA, {
                                              selectedEffectId: Z,
                                              setSelectedEffectId: q,
                                              className: e2._,
                                          }),
                                          (0, a.jsx)(em, {
                                              selectedColors: eo,
                                              setSelectedColors: eN,
                                              selectedEffectId: Z,
                                              className: e2._,
                                              defaultColor: ee.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, a.jsx)(e1, {
                                      user: R,
                                      guild: Y,
                                      displayName: B,
                                      selectedFontId: $,
                                      selectedEffectId: Z,
                                      selectedColors: Z === d.z.SOLID && (0, u.v)(eo, ee.defaultColors) ? [] : eo,
                                      isPremiumTryItOut: D,
                                  }),
                              ],
                          }),
                          (0, a.jsx)(eO, {
                              onApply: eh,
                              onSurpriseMe: eS,
                              onClose: j,
                              canApply: ec,
                              analyticsLocations: ed,
                              isPremiumTryItOut: D,
                          }),
                      ],
                  }),
              }),
          });
}

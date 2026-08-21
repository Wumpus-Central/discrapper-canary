t.d(s, { default: () => e6 });
var a = t(477900),
    l = t(582128),
    n = t(503698),
    i = t.n(n),
    r = t(562708),
    d = t(508425),
    o = t(559949),
    c = t(17928),
    m = t(52133),
    u = t(935462),
    f = t(297264),
    E = t(793574),
    S = t(688810),
    h = t(139286),
    N = t(919395),
    x = t(71393),
    g = t(287809),
    A = t(174459),
    p = t(871162),
    I = t(248778),
    _ = t(750656);
let D = [..._.re, ..._.gz];
function j() {
    let e = (0, I.ux)("effect-order");
    return l.useMemo(() => (e ? D : _.re), [e]);
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
    C = [...v, ..._._k];
function L() {
    let e = (0, I.ux)("font-order");
    return l.useMemo(() => (e ? C : v), [e]);
}
var T = t(945096),
    y = t(898985),
    b = t(430571),
    M = t(207803),
    k = t(84540),
    w = t(652215),
    F = t(836602),
    P = t(696451),
    O = t(427262),
    R = t(403581),
    Y = t(661531),
    G = t(48736),
    B = t(317097),
    H = t(618235),
    z = t(375708);
function U(e) {
    return l.useMemo(
        () =>
            (0, _.ii)(e).map((e, s) => ({
                colors: e,
                a11yLabel: z.intl.formatToPlainString(H.default.FHfTsV, {
                    number: s + 1,
                    hexList: e.map(B.Hl).join(", "),
                }),
            })),
        [e],
    );
}
var K = t(887129),
    J = t(837381),
    W = t(741918),
    X = t(922016),
    V = t(866665),
    $ = t(939249),
    Z = t(22231),
    q = t(933832),
    Q = t(818168);
function ee(e) {
    let { colors: s, selected: t, onSelect: l, listItemId: n, "aria-label": i } = e,
        r = (0, J.rm)(n);
    return (0, a.jsxs)("button", {
        type: "button",
        className: Q.nf,
        onClick: l,
        "aria-label": i,
        ...r,
        children: [
            s.map((e, s) => (0, a.jsx)("div", { className: Q._4, style: { background: (0, B.Hl)(e) } }, s)),
            t && (0, a.jsx)(q.CheckmarkLargeIcon, { className: Q.z6, size: "md", color: "currentColor" }),
        ],
    });
}
var es = t(1986),
    et = t(315710),
    ea = t(650583),
    el = t(607570);
let en = [0, 60, 120, 180, 240, 300, 360];
function ei(e) {
    let { value: s, onChange: t, hueToColor: n, onConfirm: r, "aria-label": d, className: o } = e,
        c = (0, T.xo)((0, B.tf)(s).h),
        m = l.useRef(null);
    (0, et.tj)(m);
    let u = l.useCallback((e) => t(n((0, T.xo)(e))), [t, n]),
        f = l.useCallback((e) => u(e.h), [u]),
        E = l.useMemo(() => `linear-gradient(to right, ${en.map((e) => (0, B.Hl)(n(e))).join(", ")})`, [n]),
        S = l.useMemo(
            () =>
                function (e) {
                    let { hsl: s } = e;
                    return (0, a.jsx)("div", { className: el.Wn, style: { background: (0, B.Hl)(n(s.h)) } });
                },
            [n],
        ),
        h = l.useCallback(
            (e) => {
                switch (e.key) {
                    case ea.dh.ARROW_LEFT:
                    case ea.dh.ARROW_DOWN:
                        u(c - 5);
                        break;
                    case ea.dh.ARROW_RIGHT:
                    case ea.dh.ARROW_UP:
                        u(c + 5);
                        break;
                    case ea.dh.HOME:
                        u(0);
                        break;
                    case ea.dh.END:
                        u(359);
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
            [c, u, r],
        );
    return (0, a.jsx)("div", {
        ref: m,
        className: i()(el.kL, o),
        children: (0, a.jsx)("div", {
            className: el.SP,
            style: { "--custom-hue-track": E },
            role: "slider",
            tabIndex: 0,
            "aria-label": d,
            "aria-valuemin": 0,
            "aria-valuemax": 360,
            "aria-valuenow": Math.round(c),
            onKeyDown: h,
            children: (0, a.jsx)(es.Hue, {
                hsl: { h: c, s: 1, l: 0.5 },
                direction: "horizontal",
                pointer: S,
                onChange: f,
            }),
        }),
    });
}
var er = t(420080);
let ed = () => Promise.resolve();
function eo(e) {
    let { selectedColors: s, setSelectedColors: t, className: n } = e,
        [r, o] = l.useState(!1),
        c = l.useRef(null),
        u = s.length > 0 ? (0, T.nO)(s) : w.TGz,
        f = l.useCallback((e) => t((0, T.cf)(e)), [t]),
        E = U(d.z.GUMMY),
        S = E.findIndex((e) => {
            let { colors: t } = e;
            return (0, m.v)(t, s);
        }),
        h = S >= 0,
        N = s.length > 0 ? s : (0, T.cf)(u),
        x = z.intl.string(z.t["FHBa/1"]),
        g = (0, K.Ay)({
            id: "gummy-color-picker",
            isEnabled: !0,
            orientation: W.Gl.HORIZONTAL,
            scrollToStart: ed,
            scrollToEnd: ed,
        });
    return (0, a.jsx)(J.hD, {
        navigator: g,
        children: (0, a.jsx)(J.PR, {
            children: (e) => {
                let { ref: s, ...l } = e;
                return (0, a.jsxs)("div", {
                    className: i()(er.kL, n),
                    ref: s,
                    ...l,
                    children: [
                        (0, a.jsxs)("div", {
                            className: er.Ix,
                            children: [
                                (0, a.jsx)("div", {
                                    className: i()(er.yB, { [er.EI]: h }),
                                    children:
                                        !h &&
                                        N.map((e, s) =>
                                            (0, a.jsx)(
                                                "div",
                                                { className: er._4, style: { background: (0, B.Hl)(e) } },
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
                                                value: h ? w.TGz : u,
                                                onChange: f,
                                                hueToColor: T.UZ,
                                                onConfirm: () => o(!1),
                                                "aria-label": x,
                                            }),
                                        children: (e) =>
                                            (0, a.jsx)(V.m, {
                                                text: x,
                                                position: "top",
                                                ariaHidden: !0,
                                                children: (0, a.jsx)("div", {
                                                    ...e,
                                                    ref: c,
                                                    className: er.r9,
                                                    children: (0, a.jsx)(J.tG, {
                                                        id: "custom",
                                                        children: (e) =>
                                                            (0, a.jsx)($.D, {
                                                                ...e,
                                                                className: er.Vz,
                                                                "aria-label": x,
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
                        E.map((e, s) => {
                            let { colors: l, a11yLabel: n } = e;
                            return (0, a.jsx)(
                                ee,
                                {
                                    listItemId: `gummy-preset-${s}`,
                                    colors: l,
                                    selected: S === s,
                                    onSelect: () => t([...l]),
                                    "aria-label": n,
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
    em = t(454137);
function eu(e) {
    let { selectedColors: s, setSelectedColors: t, defaultColor: n, selectedEffectId: i, className: r } = e,
        o = (0, T.as)(i) > 1,
        c = i === d.z.PRISM ? 231 : 104,
        m = U(i).map((e) => {
            let { colors: s, a11yLabel: t } = e;
            return { colors: s, name: t };
        }),
        u = (0, l.useCallback)(
            (e) => {
                t([e]), A.default.track(w.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: e === n, colors: [e] });
            },
            [t, n],
        ),
        E = (0, l.useCallback)(
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
                className: em.sU,
                children: [
                    z.intl.string(H.default.JOpi7z),
                    (0, a.jsx)(R.t, { size: "xs", color: Y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            i === d.z.GUMMY
                ? (0, a.jsx)(eo, { selectedColors: s, setSelectedColors: E })
                : (0, a.jsx)(G.default, {
                      className: ec.Ei,
                      colorContainerClassName: ec.rx,
                      defaultColor: n,
                      colors: o ? m : _.Jl,
                      value: s[0],
                      gradientColors: s,
                      onChange: u,
                      onChangeGradientColors: E,
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
let eE = { seenFontIds: new Set(), seenEffectIds: new Set(), newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 };
class eS extends c.Ay.PersistedStore {
    static displayName = "DisplayNameStylesSeenStore";
    static persistKey = "DisplayNameStylesSeenStore";
    static migrations = [(e) => ({ ...e, newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 })];
    initialize(e) {
        eE = {
            seenFontIds: new Set(e?.seenFontIds ?? []),
            seenEffectIds: new Set(e?.seenEffectIds ?? []),
            newFontsBadgeDismissed: e?.newFontsBadgeDismissed ?? !1,
            newEffectsBadgeDismissed: e?.newEffectsBadgeDismissed ?? !1,
        };
    }
    getState() {
        return {
            seenFontIds: Array.from(eE.seenFontIds),
            seenEffectIds: Array.from(eE.seenEffectIds),
            newFontsBadgeDismissed: eE.newFontsBadgeDismissed,
            newEffectsBadgeDismissed: eE.newEffectsBadgeDismissed,
        };
    }
    getSeenFonts() {
        return eE.seenFontIds;
    }
    getSeenEffects() {
        return eE.seenEffectIds;
    }
    getNewFontsBadgeDismissed() {
        return eE.newFontsBadgeDismissed;
    }
    getNewEffectsBadgeDismissed() {
        return eE.newEffectsBadgeDismissed;
    }
}
let eh = new eS(ef.h, {
    DISPLAY_NAME_STYLES_MARK_FONT_SEEN: function (e) {
        let { fontId: s } = e;
        if (eE.seenFontIds.has(s)) return !1;
        eE = { ...eE, seenFontIds: new Set([...eE.seenFontIds, s]) };
    },
    DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN: function (e) {
        let { effectId: s } = e;
        if (eE.seenEffectIds.has(s)) return !1;
        eE = { ...eE, seenEffectIds: new Set([...eE.seenEffectIds, s]) };
    },
    DISPLAY_NAME_STYLES_MARK_NEW_FONTS_BADGE_DISMISSED: function () {
        if (eE.newFontsBadgeDismissed) return !1;
        eE = { ...eE, newFontsBadgeDismissed: !0 };
    },
    DISPLAY_NAME_STYLES_MARK_NEW_EFFECTS_BADGE_DISMISSED: function () {
        if (eE.newEffectsBadgeDismissed) return !1;
        eE = { ...eE, newEffectsBadgeDismissed: !0 };
    },
});
var eN = t(922301),
    ex = t(660184),
    eg = t(742191);
function eA(e) {
    let s,
        { selectedEffectId: t, setSelectedEffectId: n, className: r } = e,
        d = j(),
        { dotEffectIds: o, dismissEffectDot: m } =
            ((s = (0, c.bG)([eh], () => eh.getSeenEffects())),
            {
                dotEffectIds: l.useMemo(() => new Set(d.filter((e) => _.gz.includes(e) && !s.has(e))), [d, s]),
                dismissEffectDot: l.useCallback((e) => {
                    ef.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN", effectId: e });
                }, []),
            }),
        u = (0, I.ux)("DisplayNameStylesEffectSelection"),
        E = Math.ceil(d.length / 2);
    return (0, a.jsxs)("div", {
        className: r,
        children: [
            (0, a.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: em.sU,
                children: [
                    z.intl.string(H.default["1wilM1"]),
                    (0, a.jsx)(R.t, { size: "xs", color: Y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, a.jsx)("div", {
                className: i()(em.fh, { [eg.KS]: u }),
                style: { "--custom-dns-tile-columns": E },
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
        d = (0, y._)(s);
    return (0, a.jsxs)($.D, {
        className: i()(eg.Tw, { [eg.wH]: t, [eg.uT]: n }),
        onClick: r,
        children: [
            (0, a.jsx)(ex.A, {
                userName: d.name,
                effectDisplayType: eN.G.ANIMATED,
                displayNameStyles: d.previewStyles,
                textClassName: eg.tr,
                loop: !0,
                inProfile: !0,
            }),
            l && (0, a.jsx)("div", { className: em.s1, "aria-hidden": !0 }),
        ],
    });
}
var eI = t(834730),
    e_ = t(885574),
    eD = t(73392),
    ej = t(599715);
function ev(e) {
    let s,
        { selectedFontId: t, setSelectedFontId: n, displayName: r, className: d } = e,
        m = L(),
        { dotFontIds: u, dismissFontDot: E } =
            ((s = (0, c.bG)([eh], () => eh.getSeenFonts())),
            {
                dotFontIds: l.useMemo(() => new Set(m.filter((e) => _._k.includes(e) && !s.has(e))), [m, s]),
                dismissFontDot: l.useCallback((e) => {
                    ef.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_FONT_SEEN", fontId: e });
                }, []),
            }),
        S = t !== o.x.DEFAULT,
        h = (0, T.Xr)(r),
        N = (0, I.ux)("DisplayNameStylesFontSelection"),
        x = Math.ceil(m.length / (N ? 3 : 2));
    return (0, a.jsxs)("div", {
        className: d,
        children: [
            (0, a.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: em.sU,
                children: [
                    z.intl.string(H.default.nP0ngb),
                    (0, a.jsx)(R.t, { size: "xs", color: Y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: i()(em.fh, { [ej.qW]: N }),
                style: { "--custom-dns-tile-columns": x },
                children: [
                    m.map((e) => {
                        let s = (0, eD.p)(e),
                            l = e === t,
                            r = u.has(e),
                            d = z.intl.string(s.name);
                        return (0, a.jsx)(
                            V.m,
                            {
                                text: d,
                                asContainer: !0,
                                children: (0, a.jsxs)($.D, {
                                    className: i()(ej.SO, { [ej.wH]: l, [ej.j4]: N }),
                                    onClick: () => {
                                        n(e), r && E(e);
                                    },
                                    "aria-label": d,
                                    children: [
                                        (0, a.jsx)(eI.E, {
                                            variant: "text-lg/semibold",
                                            color: l ? "text-strong" : "text-default",
                                            className: i()(ej.FH, s.className),
                                            children: "Gg",
                                        }),
                                        r && (0, a.jsx)("div", { className: em.s1, "aria-hidden": !0 }),
                                    ],
                                }),
                            },
                            e,
                        );
                    }),
                    S &&
                        h &&
                        (0, a.jsxs)("div", {
                            className: ej.Lb,
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
var eC = t(821609),
    eL = t(908803),
    eT = t(87719),
    ey = t(465794),
    eb = t(757036),
    eM = t(202541),
    ek = t(7212);
function ew(e) {
    let { onApply: s, onSurpriseMe: t, onClose: l, canApply: n, isPremiumTryItOut: i = !1 } = e,
        r = (0, eb.L)(eM.PremiumTypes.TIER_2),
        d = (0, a.jsx)(eC.$, {
            variant: "secondary",
            size: "md",
            onClick: t,
            icon: { type: "rive", asset: eL.m, riveProps: { dataBinding: { fill: Y.A.colors.ICON_STRONG } } },
            text: z.intl.string(H.default.NOGFds),
        }),
        o = (0, a.jsxs)("div", {
            className: ek.k0,
            children: [
                d,
                (0, a.jsx)(V.m, {
                    text: z.intl.string(H.default.cVTpnj),
                    shouldShow: !n,
                    children: (0, a.jsx)(eC.$, {
                        onClick: s,
                        disabled: !n,
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
                        (0, a.jsx)(V.m, {
                            text: z.intl.string(z.t["5AFxuK"]),
                            children: (0, a.jsx)(R.t, { size: "md", color: Y.A.colors.ICON_STRONG }),
                        }),
                        (0, a.jsx)(eI.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: ek.h_,
                            children: z.intl.format(H.default.PWf0xS, {
                                onClickNitro: () => {
                                    A.default.track(w.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, eT.x)(l);
                                },
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: ek.UD,
                    children: [
                        d,
                        (0, a.jsx)(ey.A, {
                            premiumModalAnalyticsLocation: {
                                section: w.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: w.ZSU.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: eM.pe.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, a.jsx)(u.jl, { "data-migration-pending": !0, className: ek.qr, children: i || r ? o : c });
}
var eF = t(366010),
    eP = t(43990),
    eO = t(629584),
    eR = t(943255),
    eY = t(575181),
    eG = t(736653),
    eB = t(780898),
    eH = t(344346),
    ez = t(320095),
    eU = t(963852),
    eK = t(763754),
    eJ = t(20851),
    eW = t(986687),
    eX = t(101058),
    eV = t(999291),
    e$ = t(686189),
    eZ = t(946356),
    eq = t(975571),
    eQ = t(996988),
    e0 = t(228839);
function e1(e) {
    let {
            user: s,
            guild: t,
            displayName: n,
            selectedFontId: r,
            selectedEffectId: d,
            selectedColors: o,
            onClose: m,
        } = e,
        f = (0, eG.Ay)(),
        E = (0, eF.M)(f),
        [S, h] = (0, l.useState)(E),
        x = (0, eV.Ay)(s.id, null),
        { bannerSrc: g } = (0, e$.A)({ displayProfile: x, size: 413, canAnimate: !1 }),
        p = (0, c.cf)([F.A], () => F.A.getPendingChanges(t?.id)),
        I = (0, eX.V7)({ userId: s.id, image: p.pendingAvatar }),
        { userNameplate: _, guildNameplate: D, pendingNameplate: j } = (0, N.rv)(s, t?.id),
        v = (0, eB.WK)(D);
    S && !E ? (f = w.NJ8.DARK) : !S && E && (f = w.NJ8.LIGHT);
    let C = (0, l.useCallback)(() => {
            A.default.track(w.HAw.DISPLAY_NAME_STYLES_CLOSED), m();
        }, [m]),
        L = (0, l.useCallback)((e) => {
            h(e === w.NJ8.DARK), A.default.track(w.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === w.NJ8.DARK });
        }, []),
        T = (0, l.useMemo)(
            () => ({ ...(0, eK.FT)(s, null), nick: n, displayNameStyles: { fontId: r, effectId: d, colors: o } }),
            [s, r, d, o, n],
        );
    return (0, a.jsxs)("div", {
        className: e0._l,
        children: [
            (0, a.jsx)(u.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: e0.bV,
                children: (0, a.jsx)(u.s_, { "data-migration-pending": !0, onClick: C, innerClassName: e0.b }),
            }),
            null != g &&
                (0, a.jsx)(eZ.A, {
                    user: s,
                    displayProfile: x,
                    themeType: eQ.d.MODAL_V2,
                    className: e0.LX,
                    forceUserTheme: !0,
                    children: (0, a.jsx)("div", { className: e0.b8, style: { backgroundImage: `url(${g})` } }),
                }),
            (0, a.jsx)(eP.N, {
                theme: f,
                children: (e) =>
                    (0, a.jsxs)("div", {
                        className: i()(e0.cq, e),
                        inert: !0,
                        children: [
                            (0, a.jsx)(eW.A, {
                                user: s,
                                guild: t,
                                ...p,
                                pendingAvatar: I,
                                pendingGlobalName: n,
                                pendingDisplayNameStyles: T.displayNameStyles,
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
                                author: T,
                                message: (0, ez.rh)({
                                    ...(0, eU.Ay)({ channelId: "1337", content: z.intl.string(H.default.h5Cuej) }),
                                    state: w.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: e0.OT,
                                previewGuildId: t?.id,
                                avatarDecorationOverride: p.pendingAvatarDecoration,
                                avatarOverride: I,
                            }),
                            (0, a.jsx)(eH.A, {
                                user: s,
                                guildId: t?.id,
                                nameplate: j,
                                nameplateData: null == j ? (v ?? _) : void 0,
                                pendingGlobalName: n,
                                pendingAvatarDecoration: p.pendingAvatarDecoration,
                                pendingPrimaryGuildId: p.pendingPrimaryGuildId,
                                pendingDisplayNameStyles: T.displayNameStyles,
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
                            helpArticleLink: eq.A.getArticleURL(w.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, a.jsx)(e8, { darkPreview: S, onToggleTheme: L }),
                ],
            }),
        ],
    });
}
function e8(e) {
    let { darkPreview: s, onToggleTheme: t } = e,
        l = s ? w.NJ8.DARK : w.NJ8.LIGHT;
    return (0, a.jsx)(eO.I, {
        className: e0.xr,
        optionClassName: e0.$C,
        options: [
            {
                name: "",
                tooltip: z.intl.string(z.t.b8Cei3),
                value: w.NJ8.DARK,
                icon: eR.Z,
                className: l === w.NJ8.DARK ? e0.iB : void 0,
            },
            {
                name: "",
                tooltip: z.intl.string(z.t.K2sFfo),
                value: w.NJ8.LIGHT,
                icon: eY.F,
                className: l === w.NJ8.LIGHT ? e0.iB : void 0,
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
var e2 = t(226451);
function e6(e) {
    let s,
        {
            transitionState: t,
            analyticsLocations: n,
            guildId: _,
            isPremiumTryItOut: D = !1,
            onClose: v,
            returnRef: C,
        } = e,
        R = (0, c.bG)([g.default], () => g.default.getCurrentUser()),
        Y =
            ((s = O.Ay.useName(R)),
            (0, c.bG)([F.A, P.Ay], () => {
                let e = F.A.getPendingChanges(_);
                return null != _ ? (e.pendingNickname ?? P.Ay.getNick(_, R?.id)) : e.pendingGlobalName;
            }, [_, R]) ??
                s ??
                ""),
        G = (0, c.bG)([x.A], () => x.A.getGuild(_)),
        {
            userDisplayNameStyles: B,
            guildDisplayNameStyles: U,
            pendingDisplayNameStyles: K,
            tryItOutDisplayNameStyles: J,
        } = (0, N.B0)(R, _),
        W = D ? J : K,
        X = void 0 !== W ? W : (U ?? B),
        [V, $] = l.useState(X?.fontId ?? o.x.DEFAULT),
        [Z, q] = l.useState(X?.effectId ?? d.z.SOLID),
        Q = (0, T.as)(Z) > 1,
        ee = (0, y._)(Z),
        es = (0, b.A)(),
        et = X?.colors ?? [],
        [ea, el] = l.useState(et.length > 0 && !Q ? et[0] : ee.defaultColors[0]),
        [en, ei] = l.useState(() => (et.length > 0 && Q ? { [Z]: et } : {})),
        er = l.useMemo(() => en[Z] ?? es[Z], [en, Z, es]);
    (0, h.A)(
        { type: r.ImpressionTypes.POPOUT, name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: ed } = (0, S.Ay)(n, E.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        eo = l.useMemo(() => (Q ? er : [ea]), [Q, er, ea]),
        ec = l.useMemo(() => V !== X?.fontId || Z !== X?.effectId || !(0, m.v)(eo, X?.colors ?? []), [X, V, Z, eo]),
        em = (0, I.ux)("DisplayNameStylesModal"),
        ef = L(),
        eE = j(),
        eS = (function (e) {
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
            hasChanges: ec,
            selectedFontId: V,
            selectedEffectId: Z,
            selectedColors: eo,
            defaultColor: ee.defaultColors[0],
            guildId: _,
            isTryItOut: D,
            onClose: v,
        }),
        eh = l.useCallback(() => {
            let { fontId: e, effectId: s, colors: t } = (0, T.gN)(ef, eE);
            $(e),
                q(s),
                (0, T.as)(s) > 1 ? ei((e) => ({ ...e, [s]: t })) : el(t[0]),
                A.default.track(w.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [ef, eE, ei, el]),
        eN = l.useCallback(
            (e) => {
                Q ? ei((s) => ({ ...s, [Z]: e })) : el(e[0]);
            },
            [Q, Z, ei, el],
        );
    return null == R
        ? null
        : (0, a.jsx)(S.f5, {
              value: ed,
              children: (0, a.jsx)(p.l.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, a.jsxs)(u.EO, {
                      "data-migration-pending": !0,
                      transitionState: t,
                      size: u.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: i()(e2.CR, { [e2.st]: em }),
                      returnRef: C,
                      children: [
                          (0, a.jsxs)(u.$m, {
                              "data-migration-pending": !0,
                              className: i()(e2.jE, { [e2.st]: em }),
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: e2.w1,
                                      children: [
                                          (0, a.jsx)(u.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: e2.bV,
                                              children: (0, a.jsx)(f.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: z.intl.string(H.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, a.jsx)(ev, {
                                              selectedFontId: V,
                                              setSelectedFontId: $,
                                              displayName: Y,
                                              className: e2._,
                                          }),
                                          (0, a.jsx)(eA, {
                                              selectedEffectId: Z,
                                              setSelectedEffectId: q,
                                              className: e2._,
                                          }),
                                          (0, a.jsx)(eu, {
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
                                      guild: G,
                                      displayName: Y,
                                      selectedFontId: V,
                                      selectedEffectId: Z,
                                      selectedColors: Z === d.z.SOLID && (0, m.v)(eo, ee.defaultColors) ? [] : eo,
                                      onClose: v,
                                  }),
                              ],
                          }),
                          (0, a.jsx)(ew, {
                              onApply: eS,
                              onSurpriseMe: eh,
                              onClose: v,
                              canApply: ec,
                              analyticsLocations: ed,
                              isPremiumTryItOut: D,
                          }),
                      ],
                  }),
              }),
          });
}

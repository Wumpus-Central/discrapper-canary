(t.r(s), t.d(s, { default: () => su }));
var a = t(477900),
    l = t(582128),
    n = t(503698),
    i = t.n(n),
    r = t(562708),
    o = t(508425),
    d = t(559949),
    c = t(17928),
    u = t(52133),
    m = t(935462),
    f = t(297264),
    h = t(793574),
    g = t(688810),
    x = t(139286),
    N = t(919395),
    E = t(71393),
    S = t(287809),
    p = t(174459),
    A = t(871162),
    I = t(248778),
    j = t(750656);
let v = [...j.re, ...j.gz];
function _() {
    let e = (0, I.u)("effect-order");
    return l.useMemo(() => (e ? v : j.re), [e]);
}
let y = [
        d.x.DEFAULT,
        d.x.ZILLA_SLAB,
        d.x.CHERRY_BOMB,
        d.x.CHICLE,
        d.x.MUSEO_MODERNO,
        d.x.NEO_CASTEL,
        d.x.PIXELIFY,
        d.x.SINISTRE,
    ],
    C = [...y, ...j._k];
function D() {
    let e = (0, I.u)("font-order");
    return l.useMemo(() => (e ? C : y), [e]);
}
var T = t(945096),
    L = t(898985),
    b = t(430571),
    k = t(631670),
    M = t(207803),
    O = t(84540),
    w = t(652215),
    P = t(836602),
    F = t(696451),
    R = t(427262),
    B = t(403581),
    Y = t(661531),
    G = t(48736),
    H = t(317097),
    z = t(701974),
    U = t(105292);
function K(e) {
    return l.useMemo(
        () =>
            (0, j.ii)(e).map((e, s) => ({
                colors: e,
                a11yLabel: U.intl.formatToPlainString(z.default.FHfTsV, {
                    number: s + 1,
                    hexList: e.map(H.Hl).join(", "),
                }),
            })),
        [e],
    );
}
var J = t(887129),
    W = t(837381),
    X = t(741918),
    q = t(922016),
    Z = t(866665),
    V = t(939249),
    $ = t(22231),
    Q = t(933832),
    ee = t(818168);
function es(e) {
    let { colors: s, selected: t, onSelect: l, listItemId: n, "aria-label": i } = e,
        r = (0, W.rm)(n);
    return (0, a.jsxs)("button", {
        type: "button",
        className: ee.nf,
        onClick: l,
        "aria-label": i,
        ...r,
        children: [
            s.map((e, s) => (0, a.jsx)("div", { className: ee._4, style: { background: (0, H.Hl)(e) } }, s)),
            t && (0, a.jsx)(Q.CheckmarkLargeIcon, { className: ee.z6, size: "md", color: "currentColor" }),
        ],
    });
}
var et = t(1986),
    ea = t(315710),
    el = t(650583),
    en = t(607570);
let ei = [0, 60, 120, 180, 240, 300, 360];
function er(e) {
    let { value: s, onChange: t, hueToColor: n, onConfirm: r, "aria-label": o, className: d } = e,
        c = (0, T.xo)((0, H.tf)(s).h),
        u = l.useRef(null);
    (0, ea.tj)(u);
    let m = l.useCallback((e) => t(n((0, T.xo)(e))), [t, n]),
        f = l.useCallback((e) => m(e.h), [m]),
        h = l.useMemo(() => `linear-gradient(to right, ${ei.map((e) => (0, H.Hl)(n(e))).join(", ")})`, [n]),
        g = l.useMemo(
            () =>
                function (e) {
                    let { hsl: s } = e;
                    return (0, a.jsx)("div", { className: en.Wn, style: { background: (0, H.Hl)(n(s.h)) } });
                },
            [n],
        ),
        x = l.useCallback(
            (e) => {
                switch (e.key) {
                    case el.dh.ARROW_LEFT:
                    case el.dh.ARROW_DOWN:
                        m(c - 5);
                        break;
                    case el.dh.ARROW_RIGHT:
                    case el.dh.ARROW_UP:
                        m(c + 5);
                        break;
                    case el.dh.HOME:
                        m(0);
                        break;
                    case el.dh.END:
                        m(359);
                        break;
                    case el.dh.ENTER:
                    case el.dh.SPACE:
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
        className: i()(en.kL, d),
        children: (0, a.jsx)("div", {
            className: en.SP,
            style: { "--custom-hue-track": h },
            role: "slider",
            tabIndex: 0,
            "aria-label": o,
            "aria-valuemin": 0,
            "aria-valuemax": 360,
            "aria-valuenow": Math.round(c),
            onKeyDown: x,
            children: (0, a.jsx)(et.Hue, {
                hsl: { h: c, s: 1, l: 0.5 },
                direction: "horizontal",
                pointer: g,
                onChange: f,
            }),
        }),
    });
}
var eo = t(420080);
let ed = () => Promise.resolve();
function ec(e) {
    let { selectedColors: s, setSelectedColors: t, className: n } = e,
        [r, d] = l.useState(!1),
        c = l.useRef(null),
        m = s.length > 0 ? (0, T.nO)(s) : w.TGz,
        f = l.useCallback((e) => t((0, T.cf)(e)), [t]),
        h = K(o.z.GUMMY),
        g = h.findIndex((e) => {
            let { colors: t } = e;
            return (0, u.v)(t, s);
        }),
        x = g >= 0,
        N = s.length > 0 ? s : (0, T.cf)(m),
        E = U.intl.string(U.t["FHBa/1"]),
        S = (0, J.Ay)({
            id: "gummy-color-picker",
            isEnabled: !0,
            orientation: X.Gl.HORIZONTAL,
            scrollToStart: ed,
            scrollToEnd: ed,
        });
    return (0, a.jsx)(W.hD, {
        navigator: S,
        children: (0, a.jsx)(W.PR, {
            children: (e) => {
                let { ref: s, ...l } = e;
                return (0, a.jsxs)("div", {
                    className: i()(eo.kL, n),
                    ref: s,
                    ...l,
                    children: [
                        (0, a.jsxs)("div", {
                            className: eo.Ix,
                            children: [
                                (0, a.jsx)("div", {
                                    className: i()(eo.yB, { [eo.EI]: x }),
                                    children:
                                        !x &&
                                        N.map((e, s) =>
                                            (0, a.jsx)(
                                                "div",
                                                { className: eo._4, style: { background: (0, H.Hl)(e) } },
                                                s,
                                            ),
                                        ),
                                }),
                                (0, a.jsx)("div", {
                                    className: eo.fX,
                                    children: (0, a.jsx)(q.Y, {
                                        targetElementRef: c,
                                        position: "top",
                                        align: "left",
                                        shouldShow: r,
                                        onRequestOpen: () => d(!0),
                                        onRequestClose: () => d(!1),
                                        renderPopout: () =>
                                            (0, a.jsx)(er, {
                                                value: x ? w.TGz : m,
                                                onChange: f,
                                                hueToColor: T.UZ,
                                                onConfirm: () => d(!1),
                                                "aria-label": E,
                                            }),
                                        children: (e) =>
                                            (0, a.jsx)(Z.m, {
                                                text: E,
                                                position: "top",
                                                ariaHidden: !0,
                                                children: (0, a.jsx)("div", {
                                                    ...e,
                                                    ref: c,
                                                    className: eo.r9,
                                                    children: (0, a.jsx)(W.tG, {
                                                        id: "custom",
                                                        children: (e) =>
                                                            (0, a.jsx)(V.D, {
                                                                ...e,
                                                                className: eo.Vz,
                                                                "aria-label": E,
                                                                children: (0, a.jsx)($.PencilIcon, {
                                                                    size: "custom",
                                                                    width: 18,
                                                                    height: 18,
                                                                    color: "currentColor",
                                                                    className: eo.IZ,
                                                                }),
                                                            }),
                                                    }),
                                                }),
                                            }),
                                    }),
                                }),
                            ],
                        }),
                        h.map((e, s) => {
                            let { colors: l, a11yLabel: n } = e;
                            return (0, a.jsx)(
                                es,
                                {
                                    listItemId: `gummy-preset-${s}`,
                                    colors: l,
                                    selected: g === s,
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
var eu = t(559106),
    em = t(508274),
    ef = t(300158);
let eh = () => Promise.resolve();
function eg() {
    return (0, a.jsx)(Q.CheckmarkLargeIcon, {
        className: ef.q3,
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
    });
}
function ex(e) {
    let { color: s, isSelected: t, onSelect: l, listItemId: n, "aria-label": r } = e,
        o = (0, W.rm)(n);
    return (0, a.jsx)(eu.vN, {
        offset: -2,
        children: (0, a.jsx)("button", {
            type: "button",
            className: i()(ef.nf, (0, H.OK)(s) > 0.2 ? ef.o7 : ef.eE, { [ef.wH]: t }),
            style: { backgroundColor: (0, H.Hl)(s) },
            onClick: l,
            "aria-label": r,
            ...o,
            "aria-current": !!t || void 0,
            children: t && (0, a.jsx)(eg, {}),
        }),
    });
}
function eN(e) {
    let { value: s, isSelected: t, onChange: n } = e,
        [r, o] = l.useState(!1),
        d = l.useRef(null),
        c = U.intl.string(U.t["FHBa/1"]);
    return (0, a.jsx)(q.Y, {
        targetElementRef: d,
        position: "top",
        align: "left",
        shouldShow: r,
        onRequestOpen: () => o(!0),
        onRequestClose: () => o(!1),
        renderPopout: () => (0, a.jsx)(em.VN, { onChange: n, value: s }),
        children: (e) =>
            (0, a.jsx)(Z.m, {
                text: c,
                position: "top",
                ariaHidden: !0,
                children: (0, a.jsx)("div", {
                    ...e,
                    ref: d,
                    className: i()(ef.OF, { [ef.wH]: t }),
                    children: (0, a.jsx)(W.tG, {
                        id: "custom",
                        children: (e) =>
                            (0, a.jsx)(V.D, {
                                ...e,
                                className: ef.Kd,
                                "aria-label": c,
                                "aria-current": !!t || void 0,
                                children: (0, a.jsx)($.PencilIcon, {
                                    className: ef.EY,
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: "currentColor",
                                }),
                            }),
                    }),
                }),
            }),
    });
}
function eE(e) {
    let { selectedColor: s, setSelectedColor: t, defaultColor: l, selectedEffectId: n, className: r } = e,
        o = K(n),
        d =
            null != s &&
            s !== l &&
            !o.some((e) => {
                let { colors: t } = e;
                return t[0] === s;
            }),
        c = (0, J.Ay)({
            id: "display-name-styles-solid-color-picker",
            isEnabled: !0,
            orientation: X.Gl.HORIZONTAL,
            scrollToStart: eh,
            scrollToEnd: eh,
        });
    return (0, a.jsx)(W.hD, {
        navigator: c,
        children: (0, a.jsx)(W.PR, {
            children: (e) => {
                let { ref: n, ...c } = e;
                return (0, a.jsxs)("div", {
                    className: i()(ef.kL, r),
                    ref: n,
                    ...c,
                    "aria-label": U.intl.string(z.default.JOpi7z),
                    children: [
                        (0, a.jsx)(eN, { value: s, isSelected: d, onChange: t }),
                        (0, a.jsx)(ex, {
                            color: l,
                            isSelected: s === l,
                            onSelect: () => t(l),
                            listItemId: "default",
                            "aria-label": U.intl.string(U.t.bBvAEH),
                        }),
                        o.map((e) => {
                            let { colors: l, a11yLabel: n } = e;
                            return (0, a.jsx)(
                                ex,
                                {
                                    color: l[0],
                                    isSelected: l[0] === s,
                                    onSelect: () => t(l[0]),
                                    listItemId: `preset-${l[0]}`,
                                    "aria-label": n,
                                },
                                l[0],
                            );
                        }),
                    ],
                });
            },
        }),
    });
}
var eS = t(143660),
    ep = t(454137);
function eA(e) {
    let { selectedColors: s, setSelectedColors: t, defaultColor: n, selectedEffectId: i, className: r } = e,
        d = (0, T.as)(i),
        c = K(i).map((e) => {
            let { colors: s, a11yLabel: t } = e;
            return { colors: s, name: t };
        }),
        u = (0, l.useCallback)(
            (e) => {
                (t([e]), p.default.track(w.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: e === n, colors: [e] }));
            },
            [t, n],
        ),
        m = (0, l.useCallback)(
            (e) => {
                (t(e), p.default.track(w.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: !1, colors: e }));
            },
            [t],
        );
    return (0, a.jsxs)("div", {
        className: r,
        children: [
            (0, a.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: ep.sU,
                children: [
                    U.intl.string(z.default.JOpi7z),
                    (0, a.jsx)(B.t, { size: "xs", color: Y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            i === o.z.GUMMY
                ? (0, a.jsx)(ec, { selectedColors: s, setSelectedColors: m })
                : d > 1
                  ? (0, a.jsx)(G.default, {
                        className: eS.Ei,
                        colorContainerClassName: eS.rx,
                        defaultColor: n,
                        colors: c,
                        value: s[0],
                        gradientColors: s,
                        onChange: u,
                        onChangeGradientColors: m,
                        isGradient: !0,
                        gradientWidth: "231px",
                        gradientDegrees: 90,
                        allowBlackCustomColor: !0,
                        customPickerPosition: "top",
                    })
                  : (0, a.jsx)(eE, {
                        className: eS.Ei,
                        selectedColor: s[0],
                        setSelectedColor: u,
                        defaultColor: n,
                        selectedEffectId: i,
                    }),
        ],
    });
}
var eI = t(73153);
let ej = { seenFontIds: new Set(), seenEffectIds: new Set(), newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 };
class ev extends c.Ay.PersistedStore {
    static displayName = "DisplayNameStylesSeenStore";
    static persistKey = "DisplayNameStylesSeenStore";
    static migrations = [(e) => ({ ...e, newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 })];
    initialize(e) {
        ej = {
            seenFontIds: new Set(e?.seenFontIds ?? []),
            seenEffectIds: new Set(e?.seenEffectIds ?? []),
            newFontsBadgeDismissed: e?.newFontsBadgeDismissed ?? !1,
            newEffectsBadgeDismissed: e?.newEffectsBadgeDismissed ?? !1,
        };
    }
    getState() {
        return {
            seenFontIds: Array.from(ej.seenFontIds),
            seenEffectIds: Array.from(ej.seenEffectIds),
            newFontsBadgeDismissed: ej.newFontsBadgeDismissed,
            newEffectsBadgeDismissed: ej.newEffectsBadgeDismissed,
        };
    }
    getSeenFonts() {
        return ej.seenFontIds;
    }
    getSeenEffects() {
        return ej.seenEffectIds;
    }
    getNewFontsBadgeDismissed() {
        return ej.newFontsBadgeDismissed;
    }
    getNewEffectsBadgeDismissed() {
        return ej.newEffectsBadgeDismissed;
    }
}
let e_ = new ev(eI.h, {
    DISPLAY_NAME_STYLES_MARK_FONT_SEEN: function (e) {
        let { fontId: s } = e;
        if (ej.seenFontIds.has(s)) return !1;
        ej = { ...ej, seenFontIds: new Set([...ej.seenFontIds, s]) };
    },
    DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN: function (e) {
        let { effectId: s } = e;
        if (ej.seenEffectIds.has(s)) return !1;
        ej = { ...ej, seenEffectIds: new Set([...ej.seenEffectIds, s]) };
    },
    DISPLAY_NAME_STYLES_MARK_NEW_FONTS_BADGE_DISMISSED: function () {
        if (ej.newFontsBadgeDismissed) return !1;
        ej = { ...ej, newFontsBadgeDismissed: !0 };
    },
    DISPLAY_NAME_STYLES_MARK_NEW_EFFECTS_BADGE_DISMISSED: function () {
        if (ej.newEffectsBadgeDismissed) return !1;
        ej = { ...ej, newEffectsBadgeDismissed: !0 };
    },
});
var ey = t(922301),
    eC = t(660184),
    eD = t(742191);
function eT(e) {
    let s,
        { selectedEffectId: t, setSelectedEffectId: n, className: r } = e,
        o = _(),
        { dotEffectIds: d, dismissEffectDot: u } =
            ((s = (0, c.bG)([e_], () => e_.getSeenEffects())),
            {
                dotEffectIds: l.useMemo(() => new Set(o.filter((e) => j.gz.includes(e) && !s.has(e))), [o, s]),
                dismissEffectDot: l.useCallback((e) => {
                    eI.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN", effectId: e });
                }, []),
            }),
        m = (0, I.u)("DisplayNameStylesEffectSelection"),
        h = Math.ceil(o.length / 2);
    return (0, a.jsxs)("div", {
        className: r,
        children: [
            (0, a.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: ep.sU,
                children: [
                    U.intl.string(z.default["1wilM1"]),
                    (0, a.jsx)(B.t, { size: "xs", color: Y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, a.jsx)("div", {
                className: i()(ep.fh, { [eD.KS]: m }),
                style: { "--custom-dns-tile-columns": h },
                children: o.map((e) => {
                    let s = d.has(e);
                    return (0, a.jsx)(
                        eL,
                        {
                            effectId: e,
                            selected: e === t,
                            showNewDot: s,
                            isFlywheelEnabled: m,
                            onClick: () => {
                                (n(e), s && u(e));
                            },
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
function eL(e) {
    let { effectId: s, selected: t, showNewDot: l, isFlywheelEnabled: n, onClick: r } = e,
        o = (0, L._)(s);
    return (0, a.jsxs)(V.D, {
        className: i()(eD.Tw, { [eD.wH]: t, [eD.uT]: n }),
        onClick: r,
        children: [
            (0, a.jsx)(eC.A, {
                userName: o.name,
                effectDisplayType: ey.G.ANIMATED,
                displayNameStyles: o.previewStyles,
                textClassName: eD.tr,
                loop: !0,
                inProfile: !0,
            }),
            l && (0, a.jsx)("div", { className: ep.s1, "aria-hidden": !0 }),
        ],
    });
}
var eb = t(834730),
    ek = t(885574),
    eM = t(73392),
    eO = t(599715);
function ew(e) {
    let s,
        { selectedFontId: t, setSelectedFontId: n, displayName: r, className: o } = e,
        u = D(),
        { dotFontIds: m, dismissFontDot: h } =
            ((s = (0, c.bG)([e_], () => e_.getSeenFonts())),
            {
                dotFontIds: l.useMemo(() => new Set(u.filter((e) => j._k.includes(e) && !s.has(e))), [u, s]),
                dismissFontDot: l.useCallback((e) => {
                    eI.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_FONT_SEEN", fontId: e });
                }, []),
            }),
        g = t !== d.x.DEFAULT,
        x = (0, T.Xr)(r),
        N = (0, I.u)("DisplayNameStylesFontSelection"),
        E = Math.ceil(u.length / (N ? 3 : 2));
    return (0, a.jsxs)("div", {
        className: o,
        children: [
            (0, a.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: ep.sU,
                children: [
                    U.intl.string(z.default.nP0ngb),
                    (0, a.jsx)(B.t, { size: "xs", color: Y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: i()(ep.fh, { [eO.qW]: N }),
                style: { "--custom-dns-tile-columns": E },
                children: [
                    u.map((e) => {
                        let s = (0, eM.p)(e),
                            l = e === t,
                            r = m.has(e),
                            o = U.intl.string(s.name);
                        return (0, a.jsx)(
                            Z.m,
                            {
                                text: o,
                                asContainer: !0,
                                children: (0, a.jsxs)(V.D, {
                                    className: i()(eO.SO, { [eO.wH]: l, [eO.j4]: N }),
                                    onClick: () => {
                                        (n(e), r && h(e));
                                    },
                                    "aria-label": o,
                                    children: [
                                        (0, a.jsx)(eb.E, {
                                            variant: "text-lg/semibold",
                                            color: l ? "text-strong" : "text-default",
                                            className: i()(eO.FH, s.className),
                                            children: "Gg",
                                        }),
                                        r && (0, a.jsx)("div", { className: ep.s1, "aria-hidden": !0 }),
                                    ],
                                }),
                            },
                            e,
                        );
                    }),
                    g &&
                        x &&
                        (0, a.jsxs)("div", {
                            className: eO.Lb,
                            children: [
                                (0, a.jsx)(ek.CircleInformationIcon, { size: "lg" }),
                                (0, a.jsx)(eb.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: U.intl.string(z.default["+O1xL2"]),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
var eP = t(821609),
    eF = t(908803),
    eR = t(87719),
    eB = t(465794),
    eY = t(757036),
    eG = t(202541),
    eH = t(7212);
function ez(e) {
    let { onApply: s, onSurpriseMe: t, onClose: l, canApply: n, isPremiumTryItOut: i = !1, banner: r } = e,
        o = (0, eY.L)(eG.PremiumTypes.TIER_2),
        d = (0, a.jsx)(eP.$, {
            variant: "secondary",
            size: "md",
            onClick: t,
            icon: { type: "rive", asset: eF.m, riveProps: { dataBinding: { fill: Y.A.colors.ICON_STRONG } } },
            text: U.intl.string(z.default.NOGFds),
        }),
        c = (0, a.jsxs)("div", {
            className: eH.k0,
            children: [
                d,
                (0, a.jsx)(Z.m, {
                    text: U.intl.string(z.default.cVTpnj),
                    shouldShow: !n,
                    children: (0, a.jsx)(eP.$, {
                        onClick: s,
                        disabled: !n,
                        text: U.intl.string(U.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        u = null != r ? (0, a.jsxs)("div", { className: eH.f4, children: [r, c] }) : c,
        f = (0, a.jsxs)("div", {
            className: eH.UD,
            children: [
                d,
                (0, a.jsx)(eB.A, {
                    premiumModalAnalyticsLocation: {
                        section: w.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                        object: w.ZSU.PREMIUM_UPSELL_BUTTON,
                    },
                    subscriptionTier: eG.pe.TIER_2,
                }),
            ],
        }),
        h = (0, a.jsxs)("div", {
            className: eH.UX,
            children: [
                (0, a.jsxs)("div", {
                    className: eH.iQ,
                    children: [
                        (0, a.jsx)(Z.m, {
                            text: U.intl.string(U.t["5AFxuK"]),
                            children: (0, a.jsx)(B.t, { size: "md", color: Y.A.colors.ICON_STRONG }),
                        }),
                        (0, a.jsx)(eb.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: eH.h_,
                            children: U.intl.format(z.default.PWf0xS, {
                                onClickNitro: () => {
                                    (p.default.track(w.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, eR.x)(l));
                                },
                            }),
                        }),
                    ],
                }),
                f,
            ],
        }),
        g = (0, a.jsxs)("div", { className: eH.UX, children: [r, f] }),
        x = null != r ? g : h;
    return (0, a.jsx)(m.jl, { "data-migration-pending": !0, className: eH.qr, children: i || o ? u : x });
}
var eU = t(366010),
    eK = t(43990),
    eJ = t(629584),
    eW = t(943255),
    eX = t(575181),
    eq = t(736653),
    eZ = t(780898),
    eV = t(344346),
    e$ = t(320095),
    eQ = t(963852),
    e0 = t(763754),
    e1 = t(20851),
    e8 = t(986687),
    e2 = t(101058),
    e5 = t(999291),
    e9 = t(686189),
    e3 = t(946356),
    e7 = t(975571),
    e6 = t(996988),
    e4 = t(228839);
function se(e) {
    let {
            user: s,
            guild: t,
            displayName: n,
            selectedFontId: r,
            selectedEffectId: o,
            selectedColors: d,
            isPremiumTryItOut: u = !1,
        } = e,
        m = (0, eq.Ay)(),
        f = (0, eU.M)(m),
        [h, g] = (0, l.useState)(f),
        x = (0, e5.Ay)(s.id, null),
        { pendingChanges: E, tryItOutChanges: S } = (0, c.cf)([P.A], () => ({
            pendingChanges: P.A.getPendingChanges(t?.id),
            tryItOutChanges: P.A.getTryItOutChanges(),
        })),
        {
            pendingAvatar: A,
            pendingAvatarDecoration: I,
            pendingPrimaryGuildId: j,
            pendingBanner: v,
            pendingThemeColors: _,
            pendingNickname: y,
            pendingPronouns: C,
            pendingProfileEffect: D,
            pendingProfileFrame: T,
            pendingAccentColor: L,
            pendingBio: b,
            pendingLegacyUsernameDisabled: k,
        } = E,
        M = u ? S.tryItOutAvatar : A,
        O = (0, e2.V7)({ userId: s.id, image: M }),
        F = u ? void 0 : I,
        R = u ? S.tryItOutBanner : v,
        B = u ? S.tryItOutThemeColors : _,
        { bannerSrc: Y } = (0, e9.A)({ displayProfile: x, size: 413, canAnimate: !1, pendingBanner: R }),
        { userNameplate: G, guildNameplate: H, pendingNameplate: K } = (0, N.rv)(s, t?.id),
        J = (0, eZ.WK)(H);
    h && !f ? (m = w.NJ8.DARK) : !h && f && (m = w.NJ8.LIGHT);
    let W = (0, l.useCallback)((e) => {
            (g(e === w.NJ8.DARK), p.default.track(w.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === w.NJ8.DARK }));
        }, []),
        X = (0, l.useMemo)(
            () => ({ ...(0, e0.FT)(s, null), nick: n, displayNameStyles: { fontId: r, effectId: o, colors: d } }),
            [s, r, o, d, n],
        );
    return (0, a.jsxs)("div", {
        className: e4._l,
        children: [
            null != Y &&
                (0, a.jsx)(e3.A, {
                    user: s,
                    displayProfile: x,
                    themeType: e6.d.MODAL_V2,
                    className: e4.LX,
                    pendingThemeColors: B,
                    forceUserTheme: !0,
                    children: (0, a.jsx)("div", { className: e4.b8, style: { backgroundImage: `url(${Y})` } }),
                }),
            (0, a.jsx)(eK.N, {
                theme: m,
                children: (e) =>
                    (0, a.jsxs)("div", {
                        className: i()(e4.cq, e),
                        inert: !0,
                        children: [
                            (0, a.jsx)(e8.A, {
                                user: s,
                                guild: t,
                                pendingGlobalName: n,
                                pendingNickname: y,
                                pendingPronouns: C,
                                pendingAvatar: O,
                                pendingAvatarDecoration: F,
                                pendingPrimaryGuildId: j,
                                pendingBanner: R,
                                pendingThemeColors: B,
                                pendingAccentColor: L,
                                pendingBio: b,
                                pendingProfileEffect: D,
                                pendingProfileFrame: T,
                                pendingLegacyUsernameDisabled: k,
                                pendingDisplayNameStyles: X.displayNameStyles,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: e4.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                                hideProfileFrame: !0,
                            }),
                            (0, a.jsx)(e1.A, {
                                author: X,
                                message: (0, e$.rh)({
                                    ...(0, eQ.Ay)({ channelId: "1337", content: U.intl.string(z.default.h5Cuej) }),
                                    state: w.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: e4.OT,
                                previewGuildId: t?.id,
                                avatarDecorationOverride: F,
                                avatarOverride: O,
                            }),
                            (0, a.jsx)(eV.A, {
                                user: s,
                                guildId: t?.id,
                                nameplate: K,
                                nameplateData: null == K ? (J ?? G) : void 0,
                                pendingGlobalName: n,
                                pendingAvatarDecoration: F,
                                pendingPrimaryGuildId: j,
                                pendingDisplayNameStyles: X.displayNameStyles,
                                pendingAvatar: M,
                                isHighlighted: !0,
                                className: e4.qF,
                            }),
                        ],
                    }),
            }),
            (0, a.jsxs)("div", {
                className: e4.dI,
                children: [
                    (0, a.jsx)(eb.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: U.intl.format(z.default.prQba8, {
                            helpArticleLink: e7.A.getArticleURL(w.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, a.jsx)(ss, { darkPreview: h, onToggleTheme: W }),
                ],
            }),
        ],
    });
}
function ss(e) {
    let { darkPreview: s, onToggleTheme: t } = e,
        l = s ? w.NJ8.DARK : w.NJ8.LIGHT;
    return (0, a.jsx)(eJ.I, {
        className: e4.xr,
        optionClassName: e4.$C,
        options: [
            {
                name: "",
                tooltip: U.intl.string(U.t.b8Cei3),
                value: w.NJ8.DARK,
                icon: eW.Z,
                className: l === w.NJ8.DARK ? e4.iB : void 0,
            },
            {
                name: "",
                tooltip: U.intl.string(U.t.K2sFfo),
                value: w.NJ8.LIGHT,
                icon: eX.F,
                className: l === w.NJ8.LIGHT ? e4.iB : void 0,
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
var st = t(97808),
    sa = t(778712),
    sl = t(913563),
    sn = t(497082);
function si(e) {
    let { owner: s, displayNameStyles: t } = e,
        l = U.intl.string((0, sl.A)(t.fontId)),
        { name: n } = (0, L._)(t.effectId),
        i = s.globalName ?? s.username;
    return (0, a.jsxs)("div", {
        className: sn.v,
        children: [
            (0, a.jsx)(st.eu, { size: sa._3.SIZE_32, src: s.getAvatarURL(void 0, 32), "aria-hidden": !0 }),
            (0, a.jsxs)("div", {
                className: sn.C,
                children: [
                    (0, a.jsx)(eb.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: U.intl.format(z.default.gYzaCr, {
                            displayNameHook: () =>
                                (0, a.jsx)(eC.A, {
                                    userName: i,
                                    displayNameStyles: t,
                                    effectDisplayType: ey.G.ANIMATED,
                                    loop: !0,
                                }),
                        }),
                    }),
                    (0, a.jsx)(eb.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        children: U.intl.format(z.default.DC7gJB, { fontName: l, effectName: n }),
                    }),
                ],
            }),
        ],
    });
}
var sr = t(858899),
    so = t(765178);
function sd() {
    let e = U.intl.string(U.t.iufib1);
    ((0, sr.P0)({ text: e, variant: "critical" }), so.O.announce(e));
}
var sc = t(226451);
function su(e) {
    let s,
        {
            transitionState: t,
            analyticsLocations: n,
            guildId: j,
            isPremiumTryItOut: v = !1,
            onClose: y,
            returnRef: C,
            tryOnDisplayNameStyles: B,
            tryOnStyleOwner: Y,
        } = e,
        G = (0, c.bG)([S.default], () => S.default.getCurrentUser()),
        H =
            ((s = R.Ay.useName(G)),
            (0, c.bG)(
                [P.A, F.Ay],
                () => {
                    let e = P.A.getPendingChanges(j);
                    return null != j ? (e.pendingNickname ?? F.Ay.getNick(j, G?.id)) : e.pendingGlobalName;
                },
                [j, G],
            ) ??
                s ??
                ""),
        K = (0, c.bG)([E.A], () => E.A.getGuild(j)),
        {
            userDisplayNameStyles: J,
            guildDisplayNameStyles: W,
            pendingDisplayNameStyles: X,
            tryItOutDisplayNameStyles: q,
        } = (0, N.B0)(G, j),
        Z = v ? q : X,
        V = void 0 !== Z ? Z : (W ?? J),
        $ = (0, b.A)(),
        Q = l.useMemo(() => (0, T.A5)(B, $), [B, $]),
        ee = null != Q,
        es = Q ?? V,
        et = ee ? "try_this_style" : "profile_editor",
        ea = l.useMemo(() => (0, T.A5)(J, $), [J, $]),
        [el, en] = l.useState(es?.fontId ?? d.x.DEFAULT),
        [ei, er] = l.useState(es?.effectId ?? o.z.SOLID),
        eo = (0, T.as)(ei) > 1,
        ed = (0, L._)(ei),
        ec = es?.colors ?? [],
        [eu, em] = l.useState(() => (ec.length > 0 && !eo ? { [ei]: ec[0] } : {})),
        [ef, eh] = l.useState(() => (ec.length > 0 && eo ? { [ei]: ec } : {})),
        eg = l.useMemo(() => ef[ei] ?? $[ei], [ef, ei, $]),
        ex = eu[ei] ?? $[ei][0];
    (0, x.A)(
        {
            type: r.ImpressionTypes.POPOUT,
            name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL,
            properties: { entry_point: et },
        },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: eN } = (0, g.Ay)(n, h.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        eE = l.useMemo(() => (eo ? eg : [ex]), [eo, eg, ex]),
        eS = l.useMemo(() => ({ fontId: el, effectId: ei, colors: eE }), [el, ei, eE]),
        ep = l.useMemo(() => el !== V?.fontId || ei !== V?.effectId || !(0, u.v)(eE, V?.colors ?? []), [el, ei, eE, V]),
        eI = l.useMemo(() => !(0, T.kv)(eS, ea), [eS, ea]),
        ej = ee ? eI : ep,
        ev = ee && (0, T.kv)(eS, Q) && null != Y && null != Q,
        e_ = (0, I.u)("DisplayNameStylesModal"),
        ey = D(),
        eC = _(),
        eD = (function (e) {
            let {
                    hasChanges: s,
                    entryPoint: t,
                    selectedFontId: a,
                    selectedEffectId: n,
                    selectedColors: i,
                    defaultColor: r,
                    guildId: c,
                    isTryItOut: u,
                    onClose: m,
                    shouldSaveWithoutPendingChanges: f = !1,
                    onSaveError: h,
                } = e,
                g = l.useRef(!1);
            return l.useCallback(async () => {
                if ((s || f) && !g.current) {
                    let e = i;
                    n === o.z.SOLID && i.length > 0 && i[0] === r && (e = []);
                    let s = { fontId: a, effectId: n, colors: e };
                    if (f) {
                        g.current = !0;
                        try {
                            let e = await (0, k._L)({ displayNameStyles: s });
                            if (e?.ok !== !0) return void h?.();
                        } catch {
                            h?.();
                            return;
                        } finally {
                            g.current = !1;
                        }
                    } else u ? (0, M.EW)(s) : (0, O.p)({ guildId: c, displayNameStyles: s });
                    (p.default.track(w.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                        font_name: d.x[a],
                        effect_name: o.z[n],
                        colors: i,
                        entry_point: t,
                    }),
                        m?.());
                }
            }, [s, t, a, n, i, r, m, c, u, f, h]);
        })({
            hasChanges: ej,
            entryPoint: et,
            selectedFontId: el,
            selectedEffectId: ei,
            selectedColors: eE,
            defaultColor: ed.defaultColors[0],
            guildId: j,
            isTryItOut: v,
            onClose: y,
            shouldSaveWithoutPendingChanges: ee,
            onSaveError: sd,
        }),
        eL = l.useCallback(() => (ej ? eD() : void y()), [ej, eD, y]),
        eb = l.useCallback(() => {
            (p.default.track(w.HAw.DISPLAY_NAME_STYLES_CLOSED), y());
        }, [y]),
        ek = l.useCallback(() => {
            let { fontId: e, effectId: s, colors: t } = (0, T.gN)(ey, eC);
            (en(e),
                er(s),
                (0, T.as)(s) > 1 ? eh((e) => ({ ...e, [s]: t })) : em((e) => ({ ...e, [s]: t[0] })),
                p.default.track(w.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME));
        }, [ey, eC, en, er, eh, em]),
        eM = l.useCallback(
            (e) => {
                eo ? eh((s) => ({ ...s, [ei]: e })) : em((s) => ({ ...s, [ei]: e[0] }));
            },
            [eo, ei, eh, em],
        );
    return null == G
        ? null
        : (0, a.jsx)(g.f5, {
              value: eN,
              children: (0, a.jsx)(A.l.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, a.jsxs)(m.EO, {
                      "data-migration-pending": !0,
                      transitionState: t,
                      size: m.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: i()(sc.CR, { [sc.st]: e_ }),
                      returnRef: C,
                      children: [
                          (0, a.jsx)(m.s_, { "data-migration-pending": !0, onClick: eb, className: sc.b }),
                          (0, a.jsxs)(m.$m, {
                              "data-migration-pending": !0,
                              className: i()(sc.jE, { [sc.st]: e_ }),
                              style: { overflow: "hidden auto" },
                              scrollbarGutter: !1,
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: sc.w1,
                                      children: [
                                          (0, a.jsx)(m.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: sc.bV,
                                              children: (0, a.jsx)(f.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: U.intl.string(z.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, a.jsx)(ew, {
                                              selectedFontId: el,
                                              setSelectedFontId: en,
                                              displayName: H,
                                              className: sc._,
                                          }),
                                          (0, a.jsx)(eT, {
                                              selectedEffectId: ei,
                                              setSelectedEffectId: er,
                                              className: sc._,
                                          }),
                                          (0, a.jsx)(eA, {
                                              selectedColors: eE,
                                              setSelectedColors: eM,
                                              selectedEffectId: ei,
                                              className: sc._,
                                              defaultColor: ed.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, a.jsx)(se, {
                                      user: G,
                                      guild: K,
                                      displayName: H,
                                      selectedFontId: el,
                                      selectedEffectId: ei,
                                      selectedColors: ei === o.z.SOLID && (0, u.v)(eE, ed.defaultColors) ? [] : eE,
                                      isPremiumTryItOut: v,
                                  }),
                              ],
                          }),
                          (0, a.jsx)(ez, {
                              onApply: ee ? eL : eD,
                              onSurpriseMe: ek,
                              onClose: y,
                              canApply: ej || ee,
                              analyticsLocations: eN,
                              isPremiumTryItOut: v,
                              banner: ev ? (0, a.jsx)(si, { owner: Y, displayNameStyles: Q }) : void 0,
                          }),
                      ],
                  }),
              }),
          });
}

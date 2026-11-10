t.d(s, { default: () => sm });
var l = t(477900),
    a = t(582128),
    n = t(503698),
    i = t.n(n),
    r = t(613412),
    o = t(508425),
    d = t(559949),
    c = t(855986),
    u = t(52133),
    m = t(935462),
    f = t(534514),
    h = t(793574),
    g = t(688810),
    N = t(139286),
    p = t(919395),
    S = t(71393),
    E = t(287809),
    x = t(129230),
    I = t(871162),
    A = t(576254),
    v = t(750656),
    C = t(211824);
function j() {
    let { includeCampaignFonts: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        s = (0, A.Lz)(C.vB.DISPLAY_NAME_STYLE, "font-order"),
        t = e && s !== C.S9.HIDDEN;
    return a.useMemo(() => (t ? [...v.rA, ...v.fY] : v.rA), [t]);
}
var _ = t(501803),
    y = t(898985),
    D = t(430571),
    b = t(631670),
    T = t(471865),
    k = t(773527),
    L = t(207803),
    M = t(84540),
    P = t(652215),
    w = t(836602),
    R = t(696451),
    O = t(427262),
    F = t(403581),
    Y = t(646514),
    B = t(48736),
    G = t(317097),
    H = t(842671),
    U = t(792996);
function z(e, s) {
    return a.useMemo(
        () =>
            (s ?? (0, _.Fj)(e, null)).map((e, s) => {
                let { colors: t } = e;
                return {
                    colors: t,
                    a11yLabel: U.intl.formatToPlainString(H.default.FHfTsV, {
                        number: s + 1,
                        hexList: t.map(G.Hl).join(", "),
                    }),
                };
            }),
        [e, s],
    );
}
var K = t(116903),
    W = t(837381),
    J = t(741918),
    V = t(265872),
    q = t(866665),
    X = t(939249),
    Q = t(714385);
function $(e) {
    let s,
        t,
        l,
        { selectedColors: n, hasCustomPalette: i, hasCustomSwatchSelected: r } = e,
        o = a.useId(),
        d = i
            ? ((s = Math.min(...n.map((e) => (0, G.bJ)(e, 0)))),
              {
                  useDarkIcon: (l = 3 > Math.max(s, (t = Math.min(...n.map((e) => (0, G.bJ)(e, 0xffffff)))))) || s >= t,
                  needsBacking: l,
              })
            : null;
    return {
        customColorDescriptionId: o,
        customColorDescription: r
            ? U.intl.formatToPlainString(U.t["7BFCRR"], { color: n.map(G.Hl).join(", ") })
            : void 0,
        iconContrast: d,
    };
}
var Z = t(559106),
    ee = t(236630);
function es(e) {
    let { selected: s, onSelect: t, listItemId: a, "aria-label": n, fillStyle: r, children: o } = e,
        d = (0, W.rm)(a);
    return (0, l.jsx)(Z.vN, {
        offset: -2,
        children: (0, l.jsx)("button", {
            type: "button",
            className: i()(ee.nf, { [ee.wH]: s }),
            onClick: t,
            "aria-label": n,
            ...d,
            role: "option",
            "aria-selected": s,
            children: (0, l.jsx)("span", { className: ee.GS, style: r, children: o }),
        }),
    });
}
var et = t(818168);
function el(e) {
    let { colors: s, selected: t, onSelect: a, listItemId: n, "aria-label": i } = e;
    return (0, l.jsx)(es, {
        selected: t,
        onSelect: a,
        listItemId: n,
        "aria-label": i,
        children: s.map((e, s) => (0, l.jsx)("div", { className: et._, style: { background: (0, G.Hl)(e) } }, s)),
    });
}
var ea = t(1986),
    en = t(315710),
    ei = t(650583),
    er = t(607570);
let eo = [0, 60, 120, 180, 240, 300, 360];
function ed(e) {
    let { value: s, onChange: t, hueToColor: n, onConfirm: r, "aria-label": o, className: d } = e,
        c = (0, _.xo)((0, G.tf)(s).h),
        u = a.useRef(null);
    (0, en.tj)(u);
    let m = a.useCallback((e) => t(n((0, _.xo)(e))), [t, n]),
        f = a.useCallback((e) => m(e.h), [m]),
        h = a.useMemo(() => `linear-gradient(to right, ${eo.map((e) => (0, G.Hl)(n(e))).join(", ")})`, [n]),
        g = a.useMemo(
            () =>
                function (e) {
                    let { hsl: s } = e;
                    return (0, l.jsx)("div", { className: er.Wn, style: { background: (0, G.Hl)(n(s.h)) } });
                },
            [n],
        ),
        N = a.useCallback(
            (e) => {
                switch (e.key) {
                    case ei.dh.ARROW_LEFT:
                    case ei.dh.ARROW_DOWN:
                        m(c - 5);
                        break;
                    case ei.dh.ARROW_RIGHT:
                    case ei.dh.ARROW_UP:
                        m(c + 5);
                        break;
                    case ei.dh.HOME:
                        m(0);
                        break;
                    case ei.dh.END:
                        m(359);
                        break;
                    case ei.dh.ENTER:
                    case ei.dh.SPACE:
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
        className: i()(er.kL, d),
        children: (0, l.jsx)("div", {
            className: er.SP,
            style: { "--custom-hue-track": h },
            role: "slider",
            tabIndex: 0,
            "aria-label": o,
            "aria-valuemin": 0,
            "aria-valuemax": 360,
            "aria-valuenow": Math.round(c),
            onKeyDown: N,
            children: (0, l.jsx)(ea.RG, {
                hsl: { h: c, s: 1, l: 0.5 },
                direction: "horizontal",
                pointer: g,
                onChange: f,
            }),
        }),
    });
}
var ec = t(420080);
let eu = () => Promise.resolve();
function em(e) {
    let { selectedColors: s, setSelectedColors: t, colorOptions: n, onCustomPalettePicked: r, className: d } = e,
        [c, m] = a.useState(!1),
        f = a.useRef(null),
        [h, g] = a.useState(P.TGz),
        N = a.useRef(null),
        p = a.useCallback(() => {
            (g(s.length > 0 ? (0, _.nO)(s) : P.TGz), m(!0));
        }, [s]),
        S = a.useCallback(
            (e) => {
                let s = (0, _.cf)(e);
                (g(e), (N.current = s), t(s, !0));
            },
            [t],
        ),
        E = a.useCallback(() => {
            let e = N.current;
            ((N.current = null), m(!1), null != e && r(e.slice()));
        }, [r]),
        x = z(o.z.GUMMY, n),
        I = x.findIndex((e) => {
            let { colors: t } = e;
            return (0, u.v)(t, s);
        }),
        A = s.length > 0 && !(I >= 0),
        v = A && !c,
        C = U.intl.string(U.t["FHBa/1"]),
        {
            customColorDescriptionId: j,
            customColorDescription: y,
            iconContrast: D,
        } = $({ selectedColors: s, hasCustomPalette: A, hasCustomSwatchSelected: v }),
        b = (0, K.Ay)({
            id: "gummy-color-picker",
            isEnabled: !0,
            orientation: J.Gl.HORIZONTAL,
            scrollToStart: eu,
            scrollToEnd: eu,
        });
    return (0, l.jsx)(W.hD, {
        navigator: b,
        children: (0, l.jsx)(W.PR, {
            children: (e) => {
                let { ref: a, ...n } = e;
                return (0, l.jsxs)("div", {
                    className: i()(ec.kL, d),
                    ref: a,
                    ...n,
                    role: "listbox",
                    "aria-label": U.intl.string(U.t.WTqQ5e),
                    children: [
                        (0, l.jsxs)("div", {
                            className: i()(ee.nf, ec.Ix, { [ee.wH]: v }),
                            children: [
                                (0, l.jsx)("div", {
                                    className: i()(ec.yB, { [ec.EI]: !A }),
                                    children:
                                        A &&
                                        s.map((e, s) =>
                                            (0, l.jsx)(
                                                "div",
                                                { className: ec._4, style: { background: (0, G.Hl)(e) } },
                                                s,
                                            ),
                                        ),
                                }),
                                (0, l.jsx)("div", {
                                    className: ec.fX,
                                    children: (0, l.jsx)(V.Y, {
                                        targetElementRef: f,
                                        position: "top",
                                        align: "left",
                                        shouldShow: c,
                                        onRequestOpen: p,
                                        onRequestClose: E,
                                        renderPopout: () =>
                                            (0, l.jsx)(ed, {
                                                value: h,
                                                onChange: S,
                                                hueToColor: _.UZ,
                                                onConfirm: E,
                                                "aria-label": C,
                                            }),
                                        children: (e) =>
                                            (0, l.jsx)(q.m, {
                                                text: C,
                                                position: "top",
                                                ariaHidden: !0,
                                                children: (0, l.jsx)("div", {
                                                    ...e,
                                                    ref: f,
                                                    className: ec.r9,
                                                    children: (0, l.jsx)(W.tG, {
                                                        id: "custom",
                                                        children: (e) =>
                                                            (0, l.jsx)(X.D, {
                                                                ...e,
                                                                className: ec.Vz,
                                                                "aria-label": C,
                                                                "aria-describedby": null != y ? j : void 0,
                                                                role: "option",
                                                                "aria-selected": v,
                                                                children: (0, l.jsx)(Q.EyeDropperIcon, {
                                                                    size: "custom",
                                                                    width: 14,
                                                                    height: 14,
                                                                    color: "currentColor",
                                                                    className: i()(ec.IZ, {
                                                                        [ee.eQ]: D?.useDarkIcon === !0,
                                                                        [ee.mT]: D?.useDarkIcon === !1,
                                                                        [ec.N]: D?.needsBacking,
                                                                    }),
                                                                }),
                                                            }),
                                                    }),
                                                }),
                                            }),
                                    }),
                                }),
                                null != y && (0, l.jsx)("span", { id: j, hidden: !0, children: y }),
                            ],
                        }),
                        x.map((e, s) => {
                            let { colors: a, a11yLabel: n } = e;
                            return (0, l.jsx)(
                                el,
                                {
                                    listItemId: `gummy-preset-${s}`,
                                    colors: a,
                                    selected: I === s,
                                    onSelect: () => t([...a]),
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
var ef = t(508274),
    eh = t(300158);
let eg = () => Promise.resolve(),
    eN = a.memo(function (e) {
        let { color: s, isSelected: t, onSelect: n, listItemId: i, "aria-label": r } = e,
            o = a.useCallback(() => n(s), [n, s]);
        return (0, l.jsx)(es, {
            selected: t,
            onSelect: o,
            listItemId: i,
            "aria-label": r,
            fillStyle: { backgroundColor: (0, G.Hl)(s) },
        });
    });
function ep(e) {
    let { value: s, isCustomColor: t, onChange: n, onCustomColorPicked: r } = e,
        [o, d] = a.useState(!1),
        c = t && !o,
        u = a.useRef(null),
        m = a.useRef(null),
        f = U.intl.string(U.t["FHBa/1"]),
        {
            customColorDescriptionId: h,
            customColorDescription: g,
            iconContrast: N,
        } = $({ selectedColors: null != s ? [s] : [], hasCustomPalette: t, hasCustomSwatchSelected: c }),
        p = a.useCallback(
            (e) => {
                ((m.current = e), n(e));
            },
            [n],
        ),
        S = a.useCallback(() => {
            let e = m.current;
            ((m.current = null), d(!1), null != e && r(e));
        }, [r]);
    return (0, l.jsx)(V.Y, {
        targetElementRef: u,
        position: "top",
        align: "left",
        shouldShow: o,
        onRequestOpen: () => d(!0),
        onRequestClose: S,
        renderPopout: () => (0, l.jsx)(ef.VN, { onChange: p, value: s, eagerUpdate: !0 }),
        children: (e) =>
            (0, l.jsx)(q.m, {
                text: f,
                position: "top",
                ariaHidden: !0,
                children: (0, l.jsxs)("div", {
                    ...e,
                    ref: u,
                    className: i()(ee.nf, eh.OF, { [ee.wH]: c }),
                    style: t && null != s ? { backgroundColor: (0, G.Hl)(s) } : void 0,
                    children: [
                        (0, l.jsx)(W.tG, {
                            id: "custom",
                            children: (e) =>
                                (0, l.jsx)(X.D, {
                                    ...e,
                                    className: eh.Kd,
                                    "aria-label": f,
                                    "aria-describedby": null != g ? h : void 0,
                                    role: "option",
                                    "aria-selected": c,
                                    children: (0, l.jsx)(Q.EyeDropperIcon, {
                                        className: i()(eh.EY, {
                                            [ee.eQ]: N?.useDarkIcon === !0,
                                            [ee.mT]: N?.useDarkIcon === !1,
                                        }),
                                        size: "custom",
                                        width: 14,
                                        height: 14,
                                        color: "currentColor",
                                    }),
                                }),
                        }),
                        null != g && (0, l.jsx)("span", { id: h, hidden: !0, children: g }),
                    ],
                }),
            }),
    });
}
function eS(e) {
    let {
            selectedColor: s,
            setSelectedColor: t,
            colorOptions: n,
            onCustomColorPicked: r,
            defaultColor: o,
            selectedEffectId: d,
            className: c,
        } = e,
        u = z(d, n),
        m = a.useCallback((e) => t(e), [t]),
        f = a.useCallback((e) => t(e, !0), [t]),
        h =
            null != s &&
            s !== o &&
            !u.some((e) => {
                let { colors: t } = e;
                return t[0] === s;
            });
    function g(e) {
        let { colors: t, a11yLabel: a } = e;
        return (0, l.jsx)(
            eN,
            { color: t[0], isSelected: t[0] === s, onSelect: m, listItemId: `preset-${t[0]}`, "aria-label": a },
            t[0],
        );
    }
    let N = (0, K.Ay)({
        id: "display-name-styles-solid-color-picker",
        isEnabled: !0,
        orientation: J.Gl.HORIZONTAL,
        scrollToStart: eg,
        scrollToEnd: eg,
    });
    return (0, l.jsx)(W.hD, {
        navigator: N,
        children: (0, l.jsx)(W.PR, {
            children: (e) => {
                let { ref: t, ...a } = e;
                return (0, l.jsxs)("div", {
                    className: i()(eh.kL, c),
                    ref: t,
                    ...a,
                    role: "listbox",
                    "aria-label": U.intl.string(H.default.JOpi7z),
                    children: [
                        (0, l.jsx)(ep, { value: s, isCustomColor: h, onChange: f, onCustomColorPicked: r }),
                        (0, l.jsx)(eN, {
                            color: o,
                            isSelected: s === o,
                            onSelect: m,
                            listItemId: "default",
                            "aria-label": U.intl.string(U.t.bBvAEH),
                        }),
                        u.map(g),
                    ],
                });
            },
        }),
    });
}
var eE = t(143660),
    ex = t(454137);
function eI(e) {
    var s;
    let t,
        { selectedColors: n, setSelectedColors: r, defaultColor: d, selectedEffectId: c, className: m } = e,
        h = (0, _.as)(c),
        g = (0, a.useMemo)(() => (0, v.ii)(c).map((e) => ({ colors: e, isCustom: !1 })), [c]),
        N =
            ((s = z(c, g)),
            a.useMemo(
                () =>
                    s.map((e) => {
                        let { colors: s, a11yLabel: t } = e;
                        return { colors: s, name: t };
                    }),
                [s],
            )),
        p =
            ((t = a.useRef(null)),
            a.useCallback(
                (e) => {
                    (null != t.current && (0, u.v)(t.current, e)) ||
                        ((t.current = e.slice()),
                        x.default.track(P.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
                            default: 1 === e.length && e[0] === d,
                            colors: e,
                        }));
                },
                [d],
            )),
        S = (0, a.useCallback)(
            (e, s) => {
                (r([e]), !0 !== s && p([e]));
            },
            [r, p],
        ),
        E = (0, a.useCallback)(
            (e, s) => {
                (r(e), !0 !== s && p(e));
            },
            [r, p],
        ),
        I = (0, a.useCallback)(
            (e) => {
                p([e]);
            },
            [p],
        );
    return (0, l.jsxs)("div", {
        className: i()(eE.EE, m),
        children: [
            (0, l.jsxs)(f.D, {
                variant: "heading-sm/semibold",
                className: ex.sU,
                children: [
                    U.intl.string(H.default.JOpi7z),
                    (0, l.jsx)(F.NitroWheelIcon, { size: "xs", color: Y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            c === o.z.GUMMY
                ? (0, l.jsx)(em, { selectedColors: n, setSelectedColors: E, colorOptions: g, onCustomPalettePicked: p })
                : h > 1
                  ? (0, l.jsx)(B.default, {
                        className: eE.kM,
                        gradientButtonClassName: eE.dy,
                        gradientSwatchClassName: eE.u_,
                        gradientPickerVariant: B.GradientPickerVariants.SQUARE,
                        shouldRenderSingleRow: !0,
                        swatchClassName: eE.Ay,
                        defaultColor: d,
                        colors: N,
                        value: n[0],
                        gradientColors: n,
                        onChange: S,
                        onChangeGradientColors: E,
                        isGradient: !0,
                        gradientWidth: c === o.z.PRISM ? "231px" : "calc(3 * var(--space-40) + 2 * var(--space-8))",
                        gradientDegrees: 90,
                        allowBlackCustomColor: !0,
                        customPickerPosition: "top",
                        onCustomPalettePicked: p,
                    })
                  : (0, l.jsx)(eS, {
                        className: eE.Ei,
                        selectedColor: n[0],
                        setSelectedColor: S,
                        colorOptions: g,
                        onCustomColorPicked: I,
                        defaultColor: d,
                        selectedEffectId: c,
                    }),
        ],
    });
}
var eA = t(73153);
let ev = { seenFontIds: new Set(), seenEffectIds: new Set(), newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 };
class eC extends c.Ay.PersistedStore {
    static displayName = "DisplayNameStylesSeenStore";
    static persistKey = "DisplayNameStylesSeenStore";
    static migrations = [(e) => ({ ...e, newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 })];
    initialize(e) {
        ev = {
            seenFontIds: new Set(e?.seenFontIds ?? []),
            seenEffectIds: new Set(e?.seenEffectIds ?? []),
            newFontsBadgeDismissed: e?.newFontsBadgeDismissed ?? !1,
            newEffectsBadgeDismissed: e?.newEffectsBadgeDismissed ?? !1,
        };
    }
    getState() {
        return {
            seenFontIds: Array.from(ev.seenFontIds),
            seenEffectIds: Array.from(ev.seenEffectIds),
            newFontsBadgeDismissed: ev.newFontsBadgeDismissed,
            newEffectsBadgeDismissed: ev.newEffectsBadgeDismissed,
        };
    }
    getSeenFonts() {
        return ev.seenFontIds;
    }
    getSeenEffects() {
        return ev.seenEffectIds;
    }
    getNewFontsBadgeDismissed() {
        return ev.newFontsBadgeDismissed;
    }
    getNewEffectsBadgeDismissed() {
        return ev.newEffectsBadgeDismissed;
    }
}
let ej = new eC(eA.h, {
    DISPLAY_NAME_STYLES_MARK_FONT_SEEN: function (e) {
        let { fontId: s } = e;
        if (ev.seenFontIds.has(s)) return !1;
        ev = { ...ev, seenFontIds: new Set([...ev.seenFontIds, s]) };
    },
    DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN: function (e) {
        let { effectId: s } = e;
        if (ev.seenEffectIds.has(s)) return !1;
        ev = { ...ev, seenEffectIds: new Set([...ev.seenEffectIds, s]) };
    },
    DISPLAY_NAME_STYLES_MARK_NEW_FONTS_BADGE_DISMISSED: function () {
        if (ev.newFontsBadgeDismissed) return !1;
        ev = { ...ev, newFontsBadgeDismissed: !0 };
    },
    DISPLAY_NAME_STYLES_MARK_NEW_EFFECTS_BADGE_DISMISSED: function () {
        if (ev.newEffectsBadgeDismissed) return !1;
        ev = { ...ev, newEffectsBadgeDismissed: !0 };
    },
});
var e_ = t(922301),
    ey = t(16371),
    eD = t(742191);
function eb(e) {
    let { effectId: s, selected: t, showNewDot: a, onClick: n } = e,
        r = (0, y._)(s);
    return (0, l.jsxs)(X.D, {
        className: i()(eD.Tw, eD.uT, { [eD.wH]: t }),
        onClick: n,
        children: [
            (0, l.jsx)(ey.A, {
                userName: r.name,
                effectDisplayType: e_.G.ANIMATED,
                displayNameStyles: r.previewStyles,
                textClassName: eD.tr,
                loop: !0,
                inProfile: !0,
            }),
            a && (0, l.jsx)("div", { className: ex.s1, "aria-hidden": !0 }),
        ],
    });
}
let eT = a.memo(function (e) {
    var s;
    let t,
        { selectedEffectId: n, setSelectedEffectId: r, className: o } = e,
        { dotEffectIds: d, dismissEffectDot: u } =
            ((s = v.re),
            (t = (0, c.bG)([ej], () => ej.getSeenEffects())),
            {
                dotEffectIds: a.useMemo(() => new Set(s.filter((e) => v.gz.includes(e) && !t.has(e))), [s, t]),
                dismissEffectDot: a.useCallback((e) => {
                    eA.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN", effectId: e });
                }, []),
            }),
        m = Math.ceil(v.re.length / 2);
    return (0, l.jsxs)("div", {
        className: o,
        children: [
            (0, l.jsxs)(f.D, {
                variant: "heading-sm/semibold",
                className: ex.sU,
                children: [
                    U.intl.string(H.default["1wilM1"]),
                    (0, l.jsx)(F.NitroWheelIcon, { size: "xs", color: Y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)("div", {
                className: i()(ex.fh, eD.KS),
                style: { "--custom-dns-tile-columns": m },
                children: v.re.map((e) => {
                    let s = d.has(e);
                    return (0, l.jsx)(
                        eb,
                        {
                            effectId: e,
                            selected: e === n,
                            showNewDot: s,
                            onClick: () => {
                                (r(e), s && u(e));
                            },
                        },
                        e,
                    );
                }),
            }),
        ],
    });
});
var ek = t(834730),
    eL = t(885574),
    eM = t(73392),
    eP = t(599715);
let ew = a.memo(function (e) {
    let s,
        { selectedFontId: t, setSelectedFontId: n, displayName: r, className: o } = e,
        u = j(),
        { dotFontIds: m, dismissFontDot: h } =
            ((s = (0, c.bG)([ej], () => ej.getSeenFonts())),
            {
                dotFontIds: a.useMemo(() => new Set(u.filter((e) => v._k.includes(e) && !s.has(e))), [u, s]),
                dismissFontDot: a.useCallback((e) => {
                    eA.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_FONT_SEEN", fontId: e });
                }, []),
            }),
        g = t !== d.x.DEFAULT,
        N = (0, _.Xr)(r),
        p = Math.ceil(u.length / 3);
    return (0, l.jsxs)("div", {
        className: o,
        children: [
            (0, l.jsxs)(f.D, {
                variant: "heading-sm/semibold",
                className: ex.sU,
                children: [
                    U.intl.string(H.default.nP0ngb),
                    (0, l.jsx)(F.NitroWheelIcon, { size: "xs", color: Y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: i()(ex.fh, eP.qW),
                style: { "--custom-dns-tile-columns": p },
                children: [
                    u.map((e) => {
                        let s = (0, eM.p)(e),
                            a = e === t,
                            r = m.has(e),
                            o = U.intl.string(s.name);
                        return (0, l.jsx)(
                            q.m,
                            {
                                text: o,
                                asContainer: !0,
                                children: (0, l.jsxs)(X.D, {
                                    className: i()(eP.SO, eP.j4, { [eP.wH]: a }),
                                    onClick: () => {
                                        (n(e), r && h(e));
                                    },
                                    "aria-label": o,
                                    children: [
                                        (0, l.jsx)(ek.E, {
                                            variant: "body-lg/semibold",
                                            color: a ? "text-strong" : "text-default",
                                            className: i()(eP.FH, s.className),
                                            children: "Gg",
                                        }),
                                        r && (0, l.jsx)("div", { className: ex.s1, "aria-hidden": !0 }),
                                    ],
                                }),
                            },
                            e,
                        );
                    }),
                    g &&
                        N &&
                        (0, l.jsxs)("div", {
                            className: eP.Lb,
                            children: [
                                (0, l.jsx)(eL.CircleInformationIcon, { size: "lg" }),
                                (0, l.jsx)(ek.E, {
                                    variant: "body-sm/normal",
                                    color: "text-subtle",
                                    children: U.intl.string(H.default["+O1xL2"]),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
});
var eR = t(821609),
    eO = t(90302),
    eF = t(87719),
    eY = t(465794),
    eB = t(757036),
    eG = t(682901),
    eH = t(7212);
function eU(e) {
    let {
            onApply: s,
            onSurpriseMe: t,
            onClose: n,
            canApply: i,
            entryPoint: r,
            isPremiumTryItOut: o = !1,
            banner: d,
        } = e,
        c = (0, eB.L)(eG.PremiumTypes.TIER_2),
        u = a.useCallback(() => {
            x.default.track(P.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED, { cta: v.vY.BUTTON, entry_point: r });
        }, [r]),
        f = a.useCallback(() => {
            (x.default.track(P.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED, { cta: v.vY.LINK, entry_point: r }),
                (0, eF.x)(n));
        }, [r, n]),
        h = (0, l.jsx)(eR.$, {
            variant: "secondary",
            size: "md",
            onClick: t,
            icon: { type: "rive", asset: eO.m, riveProps: { dataBinding: { fill: Y.A.colors.ICON_STRONG } } },
            text: U.intl.string(H.default.NOGFds),
        }),
        g = (0, l.jsxs)("div", {
            className: eH.k0,
            children: [
                h,
                (0, l.jsx)(q.m, {
                    text: U.intl.string(H.default.cVTpnj),
                    shouldShow: !i,
                    children: (0, l.jsx)(eR.$, {
                        onClick: s,
                        disabled: !i,
                        text: U.intl.string(U.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        N = null != d ? (0, l.jsxs)("div", { className: eH.f4, children: [d, g] }) : g,
        p = (0, l.jsxs)("div", {
            className: eH.UD,
            children: [
                h,
                (0, l.jsx)(eY.A, {
                    premiumModalAnalyticsLocation: {
                        section: P.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                        object: P.ZSU.PREMIUM_UPSELL_BUTTON,
                    },
                    subscriptionTier: eG.pe.TIER_2,
                    onClick: u,
                }),
            ],
        }),
        S = (0, l.jsxs)("div", {
            className: eH.UX,
            children: [
                (0, l.jsxs)("div", {
                    className: eH.iQ,
                    children: [
                        (0, l.jsx)(q.m, {
                            text: U.intl.string(U.t["5AFxuK"]),
                            children: (0, l.jsx)(F.NitroWheelIcon, { size: "md", color: Y.A.colors.ICON_STRONG }),
                        }),
                        (0, l.jsx)(ek.E, {
                            variant: "body-md/medium",
                            color: "text-default",
                            className: eH.h_,
                            children: U.intl.format(H.default.PWf0xS, { onClickNitro: f }),
                        }),
                    ],
                }),
                p,
            ],
        }),
        E = (0, l.jsxs)("div", { className: eH.UX, children: [d, p] }),
        I = null != d ? E : S;
    return (0, l.jsx)(m.jl, { "data-migration-pending": !0, className: eH.qr, children: o || c ? N : I });
}
var ez = t(366010),
    eK = t(43990),
    eW = t(629584),
    eJ = t(943255),
    eV = t(575181),
    eq = t(736653),
    eX = t(780898),
    eQ = t(872200),
    e$ = t(432005),
    eZ = t(963852),
    e0 = t(763754),
    e1 = t(20851),
    e8 = t(641318),
    e5 = t(101058),
    e3 = t(527212),
    e2 = t(686189),
    e7 = t(946356),
    e6 = t(975571),
    e9 = t(996988),
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
        f = (0, ez.M)(m),
        [h, g] = (0, a.useState)(f),
        N = (0, e3.Ay)(s.id, null),
        { pendingChanges: S, tryItOutChanges: E } = (0, c.cf)([w.A], () => ({
            pendingChanges: w.A.getPendingChanges(t?.id),
            tryItOutChanges: w.A.getTryItOutChanges(),
        })),
        {
            pendingAvatar: I,
            pendingAvatarDecoration: A,
            pendingPrimaryGuildId: v,
            pendingBanner: C,
            pendingThemeColors: j,
            pendingNickname: _,
            pendingPronouns: y,
            pendingProfileEffect: D,
            pendingProfileFrame: b,
            pendingAccentColor: T,
            pendingBio: k,
            pendingLegacyUsernameDisabled: L,
        } = S,
        M = null == t ? n : void 0,
        R = u ? E.tryItOutAvatar : I,
        O = (0, e5.V7)({ userId: s.id, image: R }),
        F = u ? void 0 : A,
        Y = u ? E.tryItOutBanner : C,
        B = u ? E.tryItOutThemeColors : j,
        { bannerSrc: G } = (0, e2.A)({ displayProfile: N, size: 413, canAnimate: !1, pendingBanner: Y }),
        { userNameplate: z, guildNameplate: K, pendingNameplate: W } = (0, p.rv)(s, t?.id),
        J = (0, eX.WK)(K);
    h && !f ? (m = P.NJ8.DARK) : !h && f && (m = P.NJ8.LIGHT);
    let V = (0, a.useCallback)((e) => {
            (g(e === P.NJ8.DARK), x.default.track(P.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === P.NJ8.DARK }));
        }, []),
        q = (0, a.useMemo)(
            () => ({ ...(0, e0.FT)(s, null), nick: n, displayNameStyles: { fontId: r, effectId: o, colors: d } }),
            [s, r, o, d, n],
        );
    return (0, l.jsxs)("div", {
        className: e4._l,
        children: [
            null != G &&
                (0, l.jsx)(e7.A, {
                    user: s,
                    displayProfile: N,
                    themeType: e9.d.MODAL_V2,
                    className: e4.LX,
                    pendingThemeColors: B,
                    forceUserTheme: !0,
                    children: (0, l.jsx)("div", { className: e4.b8, style: { backgroundImage: `url(${G})` } }),
                }),
            (0, l.jsx)(eK.N, {
                theme: m,
                children: (e) =>
                    (0, l.jsxs)("div", {
                        className: i()(e4.cq, e),
                        inert: !0,
                        children: [
                            (0, l.jsx)(e8.A, {
                                user: s,
                                guild: t,
                                pendingGlobalName: M,
                                pendingNickname: _,
                                pendingPronouns: y,
                                pendingAvatar: O,
                                pendingAvatarDecoration: F,
                                pendingPrimaryGuildId: v,
                                pendingBanner: Y,
                                pendingThemeColors: B,
                                pendingAccentColor: T,
                                pendingBio: k,
                                pendingProfileEffect: D,
                                pendingProfileFrame: b,
                                pendingLegacyUsernameDisabled: L,
                                pendingDisplayNameStyles: q.displayNameStyles,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: e4.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                                hideProfileFrame: !0,
                            }),
                            (0, l.jsx)(e1.A, {
                                author: q,
                                message: (0, e$.rh)({
                                    ...(0, eZ.Ay)({ channelId: "1337", content: U.intl.string(H.default.h5Cuej) }),
                                    state: P.cmJ.SENT,
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
                            (0, l.jsx)(eQ.A, {
                                user: s,
                                guildId: t?.id,
                                nameplate: W,
                                nameplateData: null == W ? (J ?? z) : void 0,
                                pendingGlobalName: M,
                                pendingNickname: _,
                                pendingAvatarDecoration: F,
                                pendingPrimaryGuildId: v,
                                pendingDisplayNameStyles: q.displayNameStyles,
                                pendingAvatar: R,
                                isHighlighted: !0,
                                className: e4.qF,
                            }),
                        ],
                    }),
            }),
            (0, l.jsxs)("div", {
                className: e4.dI,
                children: [
                    (0, l.jsx)(ek.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        children: U.intl.format(H.default.prQba8, {
                            helpArticleLink: e6.A.getArticleURL(P.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, l.jsx)(ss, { darkPreview: h, onToggleTheme: V }),
                ],
            }),
        ],
    });
}
function ss(e) {
    let { darkPreview: s, onToggleTheme: t } = e,
        a = s ? P.NJ8.DARK : P.NJ8.LIGHT;
    return (0, l.jsx)(eW.I, {
        className: e4.xr,
        optionClassName: e4.$C,
        options: [
            {
                name: "",
                tooltip: U.intl.string(U.t.b8Cei3),
                value: P.NJ8.DARK,
                icon: eJ.ThemeDarkIcon,
                className: a === P.NJ8.DARK ? e4.iB : void 0,
            },
            {
                name: "",
                tooltip: U.intl.string(U.t.K2sFfo),
                value: P.NJ8.LIGHT,
                icon: eV.ThemeLightIcon,
                className: a === P.NJ8.LIGHT ? e4.iB : void 0,
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
var st = t(97808),
    sl = t(778712),
    sa = t(913563),
    sn = t(497082);
function si(e) {
    let { owner: s, displayNameStyles: t } = e,
        a = U.intl.string((0, sa.A)(t.fontId)),
        { name: n } = (0, y._)(t.effectId),
        i = s.globalName ?? s.username;
    return (0, l.jsxs)("div", {
        className: sn.v,
        children: [
            (0, l.jsx)(st.eu, { size: sl._3.SIZE_32, src: s.getAvatarURL(void 0, 32), "aria-hidden": !0 }),
            (0, l.jsxs)("div", {
                className: sn.C,
                children: [
                    (0, l.jsx)(ek.E, {
                        variant: "body-md/medium",
                        color: "text-default",
                        children: U.intl.format(H.default.gYzaCr, {
                            displayNameHook: () =>
                                (0, l.jsx)(ey.A, {
                                    userName: i,
                                    displayNameStyles: t,
                                    effectDisplayType: e_.G.ANIMATED,
                                    loop: !0,
                                }),
                        }),
                    }),
                    (0, l.jsx)(ek.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        children: U.intl.format(H.default.DC7gJB, { fontName: a, effectName: n }),
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
let su = { overrideSettings: !0 };
function sm(e) {
    let s,
        {
            transitionState: t,
            analyticsLocations: n,
            guildId: A,
            isPremiumTryItOut: F = !1,
            onClose: Y,
            returnRef: B,
            tryOnDisplayNameStyles: G,
            tryOnStyleOwner: z,
        } = e,
        K = (0, c.bG)([E.default], () => E.default.getCurrentUser()),
        W =
            ((s = O.Ay.useName(K)),
            (0, c.bG)(
                [w.A, R.Ay],
                () => {
                    let e = w.A.getPendingChanges(A);
                    if (null == A) return e.pendingGlobalName;
                    let { pendingNickname: s } = e;
                    return "" === s ? null : (s ?? R.Ay.getNick(A, K?.id));
                },
                [A, K],
            ) ??
                s ??
                ""),
        J = (0, c.bG)([S.A], () => S.A.getGuild(A)),
        {
            userDisplayNameStyles: V,
            guildDisplayNameStyles: q,
            pendingDisplayNameStyles: X,
            tryItOutDisplayNameStyles: Q,
        } = (0, p.B0)(K, A),
        $ = F ? Q : X,
        Z = void 0 !== $ ? $ : (q ?? V),
        ee = (0, D.A)(),
        es = a.useMemo(() => (0, _.A5)(G, ee), [G, ee]),
        et = null != es,
        el = es ?? Z,
        ea = et ? "try_this_style" : "profile_editor",
        en = a.useMemo(() => (0, _.A5)(V, ee), [V, ee]),
        [ei, er] = a.useState(el?.fontId ?? d.x.DEFAULT),
        [eo, ed] = a.useState(el?.effectId ?? o.z.SOLID),
        ec = (0, _.as)(eo) > 1,
        eu = (0, y._)(eo),
        em = el?.colors ?? [],
        ef = em.length > 0 && !ec,
        eh = em.length > 0 && ec,
        [eg, eN] = a.useState(() => (ef ? { [eo]: em[0] } : {})),
        [ep, eS] = a.useState(() => (eh ? { [eo]: em } : {})),
        eE = a.useMemo(() => ep[eo] ?? ee[eo], [ep, eo, ee]),
        ex = eg[eo] ?? ee[eo][0];
    (0, N.A)(
        {
            type: r.ImpressionTypes.POPOUT,
            name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL,
            properties: { entry_point: ea },
        },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: eA } = (0, g.Ay)(n, h.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        ev = a.useMemo(() => (ec ? eE : [ex]), [ec, eE, ex]),
        eC = a.useMemo(() => ({ fontId: ei, effectId: eo, colors: ev }), [ei, eo, ev]),
        ej = a.useMemo(() => ei !== Z?.fontId || eo !== Z?.effectId || !(0, u.v)(ev, Z?.colors ?? []), [ei, eo, ev, Z]),
        e_ = a.useMemo(() => !(0, _.kv)(eC, en), [eC, en]),
        ey = et ? e_ : ej,
        eD = et && (0, _.kv)(eC, es) && null != z && null != es,
        eb = j(),
        { handleApply: ek } = (function (e) {
            let {
                    hasChanges: s,
                    entryPoint: t,
                    selectedFontId: l,
                    selectedEffectId: n,
                    selectedColors: i,
                    defaultColor: r,
                    guildId: c,
                    isTryItOut: u,
                    onClose: m,
                    onEnrollmentError: f,
                    shouldSaveWithoutPendingChanges: h = !1,
                    onSaveError: g,
                } = e,
                N = a.useRef(!1),
                [p, S] = a.useState(!1);
            return {
                handleApply: a.useCallback(async () => {
                    if (!(s || h) || N.current) return;
                    let e = (0, _.eT)({ fontId: l, effectId: n, colors: i }, r),
                        a = !0 !== u && e.fontId === C.vl;
                    async function p() {
                        if ((a && (0, T.WT)(), h)) {
                            N.current = !0;
                            try {
                                let s = await (0, b._L)({ displayNameStyles: e });
                                if (s?.ok !== !0) return void g?.();
                            } catch {
                                g?.();
                                return;
                            } finally {
                                N.current = !1;
                            }
                        } else u ? (0, L.EW)(e) : (0, M.p)({ guildId: c, displayNameStyles: e });
                        (x.default.track(P.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                            font_name: d.x[l],
                            effect_name: o.z[n],
                            colors: i,
                            entry_point: t,
                        }),
                            a && (0, T.VN)(C.vB.DISPLAY_NAME_STYLE),
                            m?.());
                    }
                    if (!a || (0, k.Rd)(E.default.getCurrentUser(), C.vB.DISPLAY_NAME_STYLE)) return void (await p());
                    ((N.current = !0), S(!0));
                    let I = !1;
                    try {
                        I = await (0, T.Br)(C.vB.DISPLAY_NAME_STYLE);
                    } catch {
                        I = !1;
                    }
                    ((N.current = !1), S(!1), I) ? await p() : f?.();
                }, [s, t, l, n, i, r, m, f, c, u, h, g]),
                isApplying: p,
            };
        })({
            hasChanges: ey,
            entryPoint: ea,
            selectedFontId: ei,
            selectedEffectId: eo,
            selectedColors: ev,
            defaultColor: eu.defaultColors[0],
            guildId: A,
            isTryItOut: F,
            onClose: Y,
            shouldSaveWithoutPendingChanges: et,
            onSaveError: sd,
        }),
        eL = a.useCallback(() => (ey ? ek() : void Y()), [ey, ek, Y]),
        eM = a.useCallback(() => {
            (x.default.track(P.HAw.DISPLAY_NAME_STYLES_CLOSED), Y());
        }, [Y]),
        eP = a.useCallback(() => {
            let { fontId: e, effectId: s, colors: t } = (0, _.gN)(eb, v.re);
            (er(e),
                ed(s),
                (0, _.as)(s) > 1 ? eS((e) => ({ ...e, [s]: t })) : eN((e) => ({ ...e, [s]: t[0] })),
                x.default.track(P.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME));
        }, [eb, er, ed, eS, eN]),
        eR = a.useCallback(
            (e) => {
                ec
                    ? eS((s) => {
                          let t = s[eo];
                          return null != t && (0, u.v)(t, e) ? s : { ...s, [eo]: e };
                      })
                    : eN((s) => (s[eo] === e[0] ? s : { ...s, [eo]: e[0] }));
            },
            [ec, eo, eS, eN],
        );
    return null == K
        ? null
        : (0, l.jsx)(g.f5, {
              value: eA,
              children: (0, l.jsx)(I.l.Provider, {
                  value: su,
                  children: (0, l.jsxs)(m.EO, {
                      "data-migration-pending": !0,
                      transitionState: t,
                      size: m.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: i()(sc.CR, sc.st),
                      returnRef: B,
                      children: [
                          (0, l.jsx)(m.s_, { "data-migration-pending": !0, onClick: eM, className: sc.b }),
                          (0, l.jsxs)(m.$m, {
                              "data-migration-pending": !0,
                              className: i()(sc.jE, sc.st),
                              style: { overflow: "hidden auto" },
                              scrollbarGutter: !1,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: sc.w1,
                                      children: [
                                          (0, l.jsx)(m.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: sc.bV,
                                              children: (0, l.jsx)(f.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: U.intl.string(H.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, l.jsx)(ew, {
                                              selectedFontId: ei,
                                              setSelectedFontId: er,
                                              displayName: W,
                                              className: sc._,
                                          }),
                                          (0, l.jsx)(eT, {
                                              selectedEffectId: eo,
                                              setSelectedEffectId: ed,
                                              className: sc._,
                                          }),
                                          (0, l.jsx)(
                                              eI,
                                              {
                                                  selectedColors: ev,
                                                  setSelectedColors: eR,
                                                  selectedEffectId: eo,
                                                  className: sc._,
                                                  defaultColor: eu.defaultColors[0],
                                              },
                                              eo,
                                          ),
                                      ],
                                  }),
                                  (0, l.jsx)(se, {
                                      user: K,
                                      guild: J,
                                      displayName: W,
                                      selectedFontId: ei,
                                      selectedEffectId: eo,
                                      selectedColors: eo === o.z.SOLID && (0, u.v)(ev, eu.defaultColors) ? [] : ev,
                                      isPremiumTryItOut: F,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(eU, {
                              onApply: et ? eL : ek,
                              onSurpriseMe: eP,
                              onClose: Y,
                              canApply: ey || et,
                              analyticsLocations: eA,
                              entryPoint: ea,
                              isPremiumTryItOut: F,
                              banner: eD ? (0, l.jsx)(si, { owner: z, displayNameStyles: es }) : void 0,
                          }),
                      ],
                  }),
              }),
          });
}

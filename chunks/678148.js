(s.r(t), s.d(t, { default: () => tI }));
var l = s(477900),
    a = s(582128),
    n = s(503698),
    i = s.n(n),
    r = s(562708),
    o = s(508425),
    d = s(559949),
    c = s(17928),
    u = s(52133),
    m = s(935462),
    f = s(297264),
    h = s(793574),
    g = s(688810),
    x = s(139286),
    p = s(919395),
    E = s(71393),
    N = s(287809),
    S = s(174459),
    A = s(871162),
    I = s(750656);
let v = [...I.re, ...I.gz];
var C = s(88858),
    _ = s(652329);
let j = [
    d.x.DEFAULT,
    d.x.ZILLA_SLAB,
    d.x.CHERRY_BOMB,
    d.x.CHICLE,
    d.x.MUSEO_MODERNO,
    d.x.NEO_CASTEL,
    d.x.PIXELIFY,
    d.x.SINISTRE,
    ...I._k,
];
function y() {
    let { includeCampaignFonts: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, C.Lz)(_.vB.DISPLAY_NAME_STYLE, "font-order"),
        s = e && t !== _.S9.HIDDEN;
    return a.useMemo(() => (s ? [...j, ...I.fY] : j), [s]);
}
var D = s(723694),
    T = s(898985),
    b = s(430571),
    L = s(631670),
    k = s(636537),
    P = s(73153),
    M = s(626584),
    w = s(927813),
    R = s(189916);
let O = new M.A("HexagonActionCreators"),
    F = 5 * w.A.Millis.SECOND;
async function B() {
    await k.Bo.post({ url: _.tK, rejectWithError: !0 });
}
let Y = null;
async function G(e) {
    try {
        await B();
    } catch (e) {
        return (O.warn(`Failed to enroll in the Hexagon campaign: ${e}`), !1);
    }
    return (
        (await (function (e) {
            function t() {
                return (0, R.Rd)(N.default.getCurrentUser(), e);
            }
            return t()
                ? Promise.resolve(!0)
                : new Promise((e) => {
                      function s() {
                          t() && (clearTimeout(l), N.default.removeChangeListener(s), e(!0));
                      }
                      let l = setTimeout(() => {
                          (N.default.removeChangeListener(s), e(!1));
                      }, F);
                      N.default.addChangeListener(s);
                  });
        })(e)) || O.warn(`Timed out waiting for the Hexagon campaign ${e} perk to sync`),
        !0
    );
}
async function H(e) {
    try {
        return await G(e);
    } finally {
        Y = null;
    }
}
var U = s(207803),
    z = s(84540),
    K = s(652215),
    J = s(836602),
    W = s(696451),
    V = s(427262),
    X = s(403581),
    $ = s(661531),
    q = s(48736),
    Z = s(317097),
    Q = s(872859),
    ee = s(105292);
function et(e, t) {
    return a.useMemo(
        () =>
            (t ?? (0, D.Fj)(e, null)).map((e, t) => {
                let { colors: s } = e;
                return {
                    colors: s,
                    a11yLabel: ee.intl.formatToPlainString(Q.default.FHfTsV, {
                        number: t + 1,
                        hexList: s.map(Z.Hl).join(", "),
                    }),
                };
            }),
        [e, t],
    );
}
var es = s(887129),
    el = s(837381),
    ea = s(741918),
    en = s(265872),
    ei = s(866665),
    er = s(939249),
    eo = s(714385);
function ed(e) {
    let t,
        s,
        l,
        { selectedColors: n, hasCustomPalette: i, hasCustomSwatchSelected: r } = e,
        o = a.useId(),
        d = i
            ? ((t = Math.min(...n.map((e) => (0, Z.bJ)(e, 0)))),
              {
                  useDarkIcon: (l = 3 > Math.max(t, (s = Math.min(...n.map((e) => (0, Z.bJ)(e, 0xffffff)))))) || t >= s,
                  needsBacking: l,
              })
            : null;
    return {
        customColorDescriptionId: o,
        customColorDescription: r
            ? ee.intl.formatToPlainString(ee.t["7BFCRR"], { color: n.map(Z.Hl).join(", ") })
            : void 0,
        iconContrast: d,
    };
}
var ec = s(559106),
    eu = s(236630);
function em(e) {
    let { selected: t, onSelect: s, listItemId: a, "aria-label": n, fillStyle: r, children: o } = e,
        d = (0, el.rm)(a);
    return (0, l.jsx)(ec.vN, {
        offset: -2,
        children: (0, l.jsx)("button", {
            type: "button",
            className: i()(eu.nf, { [eu.wH]: t }),
            onClick: s,
            "aria-label": n,
            ...d,
            role: "option",
            "aria-selected": t,
            children: (0, l.jsx)("span", { className: eu.GS, style: r, children: o }),
        }),
    });
}
var ef = s(818168);
function eh(e) {
    let { colors: t, selected: s, onSelect: a, listItemId: n, "aria-label": i } = e;
    return (0, l.jsx)(em, {
        selected: s,
        onSelect: a,
        listItemId: n,
        "aria-label": i,
        children: t.map((e, t) => (0, l.jsx)("div", { className: ef._, style: { background: (0, Z.Hl)(e) } }, t)),
    });
}
var eg = s(1986),
    ex = s(315710),
    ep = s(650583),
    eE = s(607570);
let eN = [0, 60, 120, 180, 240, 300, 360];
function eS(e) {
    let { value: t, onChange: s, hueToColor: n, onConfirm: r, "aria-label": o, className: d } = e,
        c = (0, D.xo)((0, Z.tf)(t).h),
        u = a.useRef(null);
    (0, ex.tj)(u);
    let m = a.useCallback((e) => s(n((0, D.xo)(e))), [s, n]),
        f = a.useCallback((e) => m(e.h), [m]),
        h = a.useMemo(() => `linear-gradient(to right, ${eN.map((e) => (0, Z.Hl)(n(e))).join(", ")})`, [n]),
        g = a.useMemo(
            () =>
                function (e) {
                    let { hsl: t } = e;
                    return (0, l.jsx)("div", { className: eE.Wn, style: { background: (0, Z.Hl)(n(t.h)) } });
                },
            [n],
        ),
        x = a.useCallback(
            (e) => {
                switch (e.key) {
                    case ep.dh.ARROW_LEFT:
                    case ep.dh.ARROW_DOWN:
                        m(c - 5);
                        break;
                    case ep.dh.ARROW_RIGHT:
                    case ep.dh.ARROW_UP:
                        m(c + 5);
                        break;
                    case ep.dh.HOME:
                        m(0);
                        break;
                    case ep.dh.END:
                        m(359);
                        break;
                    case ep.dh.ENTER:
                    case ep.dh.SPACE:
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
        className: i()(eE.kL, d),
        children: (0, l.jsx)("div", {
            className: eE.SP,
            style: { "--custom-hue-track": h },
            role: "slider",
            tabIndex: 0,
            "aria-label": o,
            "aria-valuemin": 0,
            "aria-valuemax": 360,
            "aria-valuenow": Math.round(c),
            onKeyDown: x,
            children: (0, l.jsx)(eg.Hue, {
                hsl: { h: c, s: 1, l: 0.5 },
                direction: "horizontal",
                pointer: g,
                onChange: f,
            }),
        }),
    });
}
var eA = s(420080);
let eI = () => Promise.resolve();
function ev(e) {
    let { selectedColors: t, setSelectedColors: s, colorOptions: n, onCustomPalettePicked: r, className: d } = e,
        [c, m] = a.useState(!1),
        f = a.useRef(null),
        [h, g] = a.useState(K.TGz),
        x = a.useRef(null),
        p = a.useCallback(() => {
            (g(t.length > 0 ? (0, D.nO)(t) : K.TGz), m(!0));
        }, [t]),
        E = a.useCallback(
            (e) => {
                let t = (0, D.cf)(e);
                (g(e), (x.current = t), s(t, !0));
            },
            [s],
        ),
        N = a.useCallback(() => {
            let e = x.current;
            ((x.current = null), m(!1), null != e && r(e.slice()));
        }, [r]),
        S = et(o.z.GUMMY, n),
        A = S.findIndex((e) => {
            let { colors: s } = e;
            return (0, u.v)(s, t);
        }),
        I = t.length > 0 && !(A >= 0),
        v = I && !c,
        C = ee.intl.string(ee.t["FHBa/1"]),
        {
            customColorDescriptionId: _,
            customColorDescription: j,
            iconContrast: y,
        } = ed({ selectedColors: t, hasCustomPalette: I, hasCustomSwatchSelected: v }),
        T = (0, es.Ay)({
            id: "gummy-color-picker",
            isEnabled: !0,
            orientation: ea.Gl.HORIZONTAL,
            scrollToStart: eI,
            scrollToEnd: eI,
        });
    return (0, l.jsx)(el.hD, {
        navigator: T,
        children: (0, l.jsx)(el.PR, {
            children: (e) => {
                let { ref: a, ...n } = e;
                return (0, l.jsxs)("div", {
                    className: i()(eA.kL, d),
                    ref: a,
                    ...n,
                    role: "listbox",
                    "aria-label": ee.intl.string(ee.t.WTqQ5e),
                    children: [
                        (0, l.jsxs)("div", {
                            className: i()(eu.nf, eA.Ix, { [eu.wH]: v }),
                            children: [
                                (0, l.jsx)("div", {
                                    className: i()(eA.yB, { [eA.EI]: !I }),
                                    children:
                                        I &&
                                        t.map((e, t) =>
                                            (0, l.jsx)(
                                                "div",
                                                { className: eA._4, style: { background: (0, Z.Hl)(e) } },
                                                t,
                                            ),
                                        ),
                                }),
                                (0, l.jsx)("div", {
                                    className: eA.fX,
                                    children: (0, l.jsx)(en.Y, {
                                        targetElementRef: f,
                                        position: "top",
                                        align: "left",
                                        shouldShow: c,
                                        onRequestOpen: p,
                                        onRequestClose: N,
                                        renderPopout: () =>
                                            (0, l.jsx)(eS, {
                                                value: h,
                                                onChange: E,
                                                hueToColor: D.UZ,
                                                onConfirm: N,
                                                "aria-label": C,
                                            }),
                                        children: (e) =>
                                            (0, l.jsx)(ei.m, {
                                                text: C,
                                                position: "top",
                                                ariaHidden: !0,
                                                children: (0, l.jsx)("div", {
                                                    ...e,
                                                    ref: f,
                                                    className: eA.r9,
                                                    children: (0, l.jsx)(el.tG, {
                                                        id: "custom",
                                                        children: (e) =>
                                                            (0, l.jsx)(er.D, {
                                                                ...e,
                                                                className: eA.Vz,
                                                                "aria-label": C,
                                                                "aria-describedby": null != j ? _ : void 0,
                                                                role: "option",
                                                                "aria-selected": v,
                                                                children: (0, l.jsx)(eo.d, {
                                                                    size: "custom",
                                                                    width: 14,
                                                                    height: 14,
                                                                    color: "currentColor",
                                                                    className: i()(eA.IZ, {
                                                                        [eu.eQ]: y?.useDarkIcon === !0,
                                                                        [eu.mT]: y?.useDarkIcon === !1,
                                                                        [eA.N]: y?.needsBacking,
                                                                    }),
                                                                }),
                                                            }),
                                                    }),
                                                }),
                                            }),
                                    }),
                                }),
                                null != j && (0, l.jsx)("span", { id: _, hidden: !0, children: j }),
                            ],
                        }),
                        S.map((e, t) => {
                            let { colors: a, a11yLabel: n } = e;
                            return (0, l.jsx)(
                                eh,
                                {
                                    listItemId: `gummy-preset-${t}`,
                                    colors: a,
                                    selected: A === t,
                                    onSelect: () => s([...a]),
                                    "aria-label": n,
                                },
                                t,
                            );
                        }),
                    ],
                });
            },
        }),
    });
}
var eC = s(508274),
    e_ = s(300158);
let ej = () => Promise.resolve(),
    ey = a.memo(function (e) {
        let { color: t, isSelected: s, onSelect: n, listItemId: i, "aria-label": r } = e,
            o = a.useCallback(() => n(t), [n, t]);
        return (0, l.jsx)(em, {
            selected: s,
            onSelect: o,
            listItemId: i,
            "aria-label": r,
            fillStyle: { backgroundColor: (0, Z.Hl)(t) },
        });
    });
function eD(e) {
    let { value: t, isCustomColor: s, onChange: n, onCustomColorPicked: r } = e,
        [o, d] = a.useState(!1),
        c = s && !o,
        u = a.useRef(null),
        m = a.useRef(null),
        f = ee.intl.string(ee.t["FHBa/1"]),
        {
            customColorDescriptionId: h,
            customColorDescription: g,
            iconContrast: x,
        } = ed({ selectedColors: null != t ? [t] : [], hasCustomPalette: s, hasCustomSwatchSelected: c }),
        p = a.useCallback(
            (e) => {
                ((m.current = e), n(e));
            },
            [n],
        ),
        E = a.useCallback(() => {
            let e = m.current;
            ((m.current = null), d(!1), null != e && r(e));
        }, [r]);
    return (0, l.jsx)(en.Y, {
        targetElementRef: u,
        position: "top",
        align: "left",
        shouldShow: o,
        onRequestOpen: () => d(!0),
        onRequestClose: E,
        renderPopout: () => (0, l.jsx)(eC.VN, { onChange: p, value: t, eagerUpdate: !0 }),
        children: (e) =>
            (0, l.jsx)(ei.m, {
                text: f,
                position: "top",
                ariaHidden: !0,
                children: (0, l.jsxs)("div", {
                    ...e,
                    ref: u,
                    className: i()(eu.nf, e_.OF, { [eu.wH]: c }),
                    style: s && null != t ? { backgroundColor: (0, Z.Hl)(t) } : void 0,
                    children: [
                        (0, l.jsx)(el.tG, {
                            id: "custom",
                            children: (e) =>
                                (0, l.jsx)(er.D, {
                                    ...e,
                                    className: e_.Kd,
                                    "aria-label": f,
                                    "aria-describedby": null != g ? h : void 0,
                                    role: "option",
                                    "aria-selected": c,
                                    children: (0, l.jsx)(eo.d, {
                                        className: i()(e_.EY, {
                                            [eu.eQ]: x?.useDarkIcon === !0,
                                            [eu.mT]: x?.useDarkIcon === !1,
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
function eT(e) {
    let {
            selectedColor: t,
            setSelectedColor: s,
            colorOptions: n,
            onCustomColorPicked: r,
            defaultColor: o,
            selectedEffectId: d,
            className: c,
        } = e,
        u = et(d, n),
        m = a.useCallback((e) => s(e), [s]),
        f = a.useCallback((e) => s(e, !0), [s]),
        h =
            null != t &&
            t !== o &&
            !u.some((e) => {
                let { colors: s } = e;
                return s[0] === t;
            });
    function g(e) {
        let { colors: s, a11yLabel: a } = e;
        return (0, l.jsx)(
            ey,
            { color: s[0], isSelected: s[0] === t, onSelect: m, listItemId: `preset-${s[0]}`, "aria-label": a },
            s[0],
        );
    }
    let x = (0, es.Ay)({
        id: "display-name-styles-solid-color-picker",
        isEnabled: !0,
        orientation: ea.Gl.HORIZONTAL,
        scrollToStart: ej,
        scrollToEnd: ej,
    });
    return (0, l.jsx)(el.hD, {
        navigator: x,
        children: (0, l.jsx)(el.PR, {
            children: (e) => {
                let { ref: s, ...a } = e;
                return (0, l.jsxs)("div", {
                    className: i()(e_.kL, c),
                    ref: s,
                    ...a,
                    role: "listbox",
                    "aria-label": ee.intl.string(Q.default.JOpi7z),
                    children: [
                        (0, l.jsx)(eD, { value: t, isCustomColor: h, onChange: f, onCustomColorPicked: r }),
                        (0, l.jsx)(ey, {
                            color: o,
                            isSelected: t === o,
                            onSelect: m,
                            listItemId: "default",
                            "aria-label": ee.intl.string(ee.t.bBvAEH),
                        }),
                        u.map(g),
                    ],
                });
            },
        }),
    });
}
var eb = s(143660),
    eL = s(676518);
function ek(e) {
    var t;
    let s,
        { selectedColors: n, setSelectedColors: r, defaultColor: d, selectedEffectId: c, className: m } = e,
        h = (0, D.as)(c),
        g = (0, a.useMemo)(() => (0, I.ii)(c).map((e) => ({ colors: e, isCustom: !1 })), [c]),
        x =
            ((t = et(c, g)),
            a.useMemo(
                () =>
                    t.map((e) => {
                        let { colors: t, a11yLabel: s } = e;
                        return { colors: t, name: s };
                    }),
                [t],
            )),
        p =
            ((s = a.useRef(null)),
            a.useCallback(
                (e) => {
                    (null != s.current && (0, u.v)(s.current, e)) ||
                        ((s.current = e.slice()),
                        S.default.track(K.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
                            default: 1 === e.length && e[0] === d,
                            colors: e,
                        }));
                },
                [d],
            )),
        E = (0, a.useCallback)(
            (e, t) => {
                (r([e]), !0 !== t && p([e]));
            },
            [r, p],
        ),
        N = (0, a.useCallback)(
            (e, t) => {
                (r(e), !0 !== t && p(e));
            },
            [r, p],
        ),
        A = (0, a.useCallback)(
            (e) => {
                p([e]);
            },
            [p],
        );
    return (0, l.jsxs)("div", {
        className: i()(eb.EE, m),
        children: [
            (0, l.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: eL.sU,
                children: [
                    ee.intl.string(Q.default.JOpi7z),
                    (0, l.jsx)(X.t, { size: "xs", color: $.A.colors.TEXT_DEFAULT }),
                ],
            }),
            c === o.z.GUMMY
                ? (0, l.jsx)(ev, { selectedColors: n, setSelectedColors: N, colorOptions: g, onCustomPalettePicked: p })
                : h > 1
                  ? (0, l.jsx)(q.default, {
                        className: eb.kM,
                        gradientButtonClassName: eb.dy,
                        gradientSwatchClassName: eb.u_,
                        shouldRenderSingleRow: !0,
                        swatchClassName: eb.Ay,
                        defaultColor: d,
                        colors: x,
                        value: n[0],
                        gradientColors: n,
                        onChange: E,
                        onChangeGradientColors: N,
                        isGradient: !0,
                        gradientWidth: c === o.z.PRISM ? "231px" : "calc(3 * var(--space-40) + 2 * var(--space-8))",
                        gradientDegrees: 90,
                        allowBlackCustomColor: !0,
                        customPickerPosition: "top",
                        onCustomPalettePicked: p,
                    })
                  : (0, l.jsx)(eT, {
                        className: eb.Ei,
                        selectedColor: n[0],
                        setSelectedColor: E,
                        colorOptions: g,
                        onCustomColorPicked: A,
                        defaultColor: d,
                        selectedEffectId: c,
                    }),
        ],
    });
}
let eP = { seenFontIds: new Set(), seenEffectIds: new Set(), newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 };
class eM extends c.Ay.PersistedStore {
    static displayName = "DisplayNameStylesSeenStore";
    static persistKey = "DisplayNameStylesSeenStore";
    static migrations = [(e) => ({ ...e, newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 })];
    initialize(e) {
        eP = {
            seenFontIds: new Set(e?.seenFontIds ?? []),
            seenEffectIds: new Set(e?.seenEffectIds ?? []),
            newFontsBadgeDismissed: e?.newFontsBadgeDismissed ?? !1,
            newEffectsBadgeDismissed: e?.newEffectsBadgeDismissed ?? !1,
        };
    }
    getState() {
        return {
            seenFontIds: Array.from(eP.seenFontIds),
            seenEffectIds: Array.from(eP.seenEffectIds),
            newFontsBadgeDismissed: eP.newFontsBadgeDismissed,
            newEffectsBadgeDismissed: eP.newEffectsBadgeDismissed,
        };
    }
    getSeenFonts() {
        return eP.seenFontIds;
    }
    getSeenEffects() {
        return eP.seenEffectIds;
    }
    getNewFontsBadgeDismissed() {
        return eP.newFontsBadgeDismissed;
    }
    getNewEffectsBadgeDismissed() {
        return eP.newEffectsBadgeDismissed;
    }
}
let ew = new eM(P.h, {
    DISPLAY_NAME_STYLES_MARK_FONT_SEEN: function (e) {
        let { fontId: t } = e;
        if (eP.seenFontIds.has(t)) return !1;
        eP = { ...eP, seenFontIds: new Set([...eP.seenFontIds, t]) };
    },
    DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN: function (e) {
        let { effectId: t } = e;
        if (eP.seenEffectIds.has(t)) return !1;
        eP = { ...eP, seenEffectIds: new Set([...eP.seenEffectIds, t]) };
    },
    DISPLAY_NAME_STYLES_MARK_NEW_FONTS_BADGE_DISMISSED: function () {
        if (eP.newFontsBadgeDismissed) return !1;
        eP = { ...eP, newFontsBadgeDismissed: !0 };
    },
    DISPLAY_NAME_STYLES_MARK_NEW_EFFECTS_BADGE_DISMISSED: function () {
        if (eP.newEffectsBadgeDismissed) return !1;
        eP = { ...eP, newEffectsBadgeDismissed: !0 };
    },
});
var eR = s(922301),
    eO = s(660184),
    eF = s(742191);
function eB(e) {
    let { effectId: t, selected: s, showNewDot: a, onClick: n } = e,
        r = (0, T._)(t);
    return (0, l.jsxs)(er.D, {
        className: i()(eF.Tw, eF.uT, { [eF.wH]: s }),
        onClick: n,
        children: [
            (0, l.jsx)(eO.A, {
                userName: r.name,
                effectDisplayType: eR.G.ANIMATED,
                displayNameStyles: r.previewStyles,
                textClassName: eF.tr,
                loop: !0,
                inProfile: !0,
            }),
            a && (0, l.jsx)("div", { className: eL.s1, "aria-hidden": !0 }),
        ],
    });
}
let eY = a.memo(function (e) {
    let t,
        { selectedEffectId: s, setSelectedEffectId: n, className: r } = e,
        { dotEffectIds: o, dismissEffectDot: d } =
            ((t = (0, c.bG)([ew], () => ew.getSeenEffects())),
            {
                dotEffectIds: a.useMemo(() => new Set(v.filter((e) => I.gz.includes(e) && !t.has(e))), [v, t]),
                dismissEffectDot: a.useCallback((e) => {
                    P.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN", effectId: e });
                }, []),
            }),
        u = Math.ceil(v.length / 2);
    return (0, l.jsxs)("div", {
        className: r,
        children: [
            (0, l.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: eL.sU,
                children: [
                    ee.intl.string(Q.default["1wilM1"]),
                    (0, l.jsx)(X.t, { size: "xs", color: $.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)("div", {
                className: i()(eL.fh, eF.KS),
                style: { "--custom-dns-tile-columns": u },
                children: v.map((e) => {
                    let t = o.has(e);
                    return (0, l.jsx)(
                        eB,
                        {
                            effectId: e,
                            selected: e === s,
                            showNewDot: t,
                            onClick: () => {
                                (n(e), t && d(e));
                            },
                        },
                        e,
                    );
                }),
            }),
        ],
    });
});
var eG = s(834730),
    eH = s(885574),
    eU = s(73392),
    ez = s(599715);
let eK = a.memo(function (e) {
    let t,
        { selectedFontId: s, setSelectedFontId: n, displayName: r, className: o } = e,
        u = y(),
        { dotFontIds: m, dismissFontDot: h } =
            ((t = (0, c.bG)([ew], () => ew.getSeenFonts())),
            {
                dotFontIds: a.useMemo(() => new Set(u.filter((e) => I._k.includes(e) && !t.has(e))), [u, t]),
                dismissFontDot: a.useCallback((e) => {
                    P.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_FONT_SEEN", fontId: e });
                }, []),
            }),
        g = s !== d.x.DEFAULT,
        x = (0, D.Xr)(r),
        p = Math.ceil(u.length / 3);
    return (0, l.jsxs)("div", {
        className: o,
        children: [
            (0, l.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: eL.sU,
                children: [
                    ee.intl.string(Q.default.nP0ngb),
                    (0, l.jsx)(X.t, { size: "xs", color: $.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: i()(eL.fh, ez.qW),
                style: { "--custom-dns-tile-columns": p },
                children: [
                    u.map((e) => {
                        let t = (0, eU.p)(e),
                            a = e === s,
                            r = m.has(e),
                            o = ee.intl.string(t.name);
                        return (0, l.jsx)(
                            ei.m,
                            {
                                text: o,
                                asContainer: !0,
                                children: (0, l.jsxs)(er.D, {
                                    className: i()(ez.SO, ez.j4, { [ez.wH]: a }),
                                    onClick: () => {
                                        (n(e), r && h(e));
                                    },
                                    "aria-label": o,
                                    children: [
                                        (0, l.jsx)(eG.E, {
                                            variant: "text-lg/semibold",
                                            color: a ? "text-strong" : "text-default",
                                            className: i()(ez.FH, t.className),
                                            children: "Gg",
                                        }),
                                        r && (0, l.jsx)("div", { className: eL.s1, "aria-hidden": !0 }),
                                    ],
                                }),
                            },
                            e,
                        );
                    }),
                    g &&
                        x &&
                        (0, l.jsxs)("div", {
                            className: ez.Lb,
                            children: [
                                (0, l.jsx)(eH.CircleInformationIcon, { size: "lg" }),
                                (0, l.jsx)(eG.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: ee.intl.string(Q.default["+O1xL2"]),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
});
var eJ = s(821609),
    eW = s(908803),
    eV = s(87719),
    eX = s(465794),
    e$ = s(757036),
    eq = s(202541),
    eZ = s(7212);
function eQ(e) {
    let { onApply: t, onSurpriseMe: s, onClose: a, canApply: n, isPremiumTryItOut: i = !1, banner: r } = e,
        o = (0, e$.L)(eq.PremiumTypes.TIER_2),
        d = (0, l.jsx)(eJ.$, {
            variant: "secondary",
            size: "md",
            onClick: s,
            icon: { type: "rive", asset: eW.m, riveProps: { dataBinding: { fill: $.A.colors.ICON_STRONG } } },
            text: ee.intl.string(Q.default.NOGFds),
        }),
        c = (0, l.jsxs)("div", {
            className: eZ.k0,
            children: [
                d,
                (0, l.jsx)(ei.m, {
                    text: ee.intl.string(Q.default.cVTpnj),
                    shouldShow: !n,
                    children: (0, l.jsx)(eJ.$, {
                        onClick: t,
                        disabled: !n,
                        text: ee.intl.string(ee.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        u = null != r ? (0, l.jsxs)("div", { className: eZ.f4, children: [r, c] }) : c,
        f = (0, l.jsxs)("div", {
            className: eZ.UD,
            children: [
                d,
                (0, l.jsx)(eX.A, {
                    premiumModalAnalyticsLocation: {
                        section: K.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                        object: K.ZSU.PREMIUM_UPSELL_BUTTON,
                    },
                    subscriptionTier: eq.pe.TIER_2,
                }),
            ],
        }),
        h = (0, l.jsxs)("div", {
            className: eZ.UX,
            children: [
                (0, l.jsxs)("div", {
                    className: eZ.iQ,
                    children: [
                        (0, l.jsx)(ei.m, {
                            text: ee.intl.string(ee.t["5AFxuK"]),
                            children: (0, l.jsx)(X.t, { size: "md", color: $.A.colors.ICON_STRONG }),
                        }),
                        (0, l.jsx)(eG.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: eZ.h_,
                            children: ee.intl.format(Q.default.PWf0xS, {
                                onClickNitro: () => {
                                    (S.default.track(K.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, eV.x)(a));
                                },
                            }),
                        }),
                    ],
                }),
                f,
            ],
        }),
        g = (0, l.jsxs)("div", { className: eZ.UX, children: [r, f] }),
        x = null != r ? g : h;
    return (0, l.jsx)(m.jl, { "data-migration-pending": !0, className: eZ.qr, children: i || o ? u : x });
}
var e0 = s(366010),
    e1 = s(43990),
    e8 = s(629584),
    e5 = s(943255),
    e9 = s(575181),
    e2 = s(736653),
    e3 = s(780898),
    e6 = s(344346),
    e7 = s(320095),
    e4 = s(963852),
    te = s(763754),
    tt = s(20851),
    ts = s(986687),
    tl = s(101058),
    ta = s(999291),
    tn = s(686189),
    ti = s(946356),
    tr = s(975571),
    to = s(996988),
    td = s(228839);
function tc(e) {
    let {
            user: t,
            guild: s,
            displayName: n,
            selectedFontId: r,
            selectedEffectId: o,
            selectedColors: d,
            isPremiumTryItOut: u = !1,
        } = e,
        m = (0, e2.Ay)(),
        f = (0, e0.M)(m),
        [h, g] = (0, a.useState)(f),
        x = (0, ta.Ay)(t.id, null),
        { pendingChanges: E, tryItOutChanges: N } = (0, c.cf)([J.A], () => ({
            pendingChanges: J.A.getPendingChanges(s?.id),
            tryItOutChanges: J.A.getTryItOutChanges(),
        })),
        {
            pendingAvatar: A,
            pendingAvatarDecoration: I,
            pendingPrimaryGuildId: v,
            pendingBanner: C,
            pendingThemeColors: _,
            pendingNickname: j,
            pendingPronouns: y,
            pendingProfileEffect: D,
            pendingProfileFrame: T,
            pendingAccentColor: b,
            pendingBio: L,
            pendingLegacyUsernameDisabled: k,
        } = E,
        P = null == s ? n : void 0,
        M = u ? N.tryItOutAvatar : A,
        w = (0, tl.V7)({ userId: t.id, image: M }),
        R = u ? void 0 : I,
        O = u ? N.tryItOutBanner : C,
        F = u ? N.tryItOutThemeColors : _,
        { bannerSrc: B } = (0, tn.A)({ displayProfile: x, size: 413, canAnimate: !1, pendingBanner: O }),
        { userNameplate: Y, guildNameplate: G, pendingNameplate: H } = (0, p.rv)(t, s?.id),
        U = (0, e3.WK)(G);
    h && !f ? (m = K.NJ8.DARK) : !h && f && (m = K.NJ8.LIGHT);
    let z = (0, a.useCallback)((e) => {
            (g(e === K.NJ8.DARK), S.default.track(K.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === K.NJ8.DARK }));
        }, []),
        W = (0, a.useMemo)(
            () => ({ ...(0, te.FT)(t, null), nick: n, displayNameStyles: { fontId: r, effectId: o, colors: d } }),
            [t, r, o, d, n],
        );
    return (0, l.jsxs)("div", {
        className: td._l,
        children: [
            null != B &&
                (0, l.jsx)(ti.A, {
                    user: t,
                    displayProfile: x,
                    themeType: to.d.MODAL_V2,
                    className: td.LX,
                    pendingThemeColors: F,
                    forceUserTheme: !0,
                    children: (0, l.jsx)("div", { className: td.b8, style: { backgroundImage: `url(${B})` } }),
                }),
            (0, l.jsx)(e1.N, {
                theme: m,
                children: (e) =>
                    (0, l.jsxs)("div", {
                        className: i()(td.cq, e),
                        inert: !0,
                        children: [
                            (0, l.jsx)(ts.A, {
                                user: t,
                                guild: s,
                                pendingGlobalName: P,
                                pendingNickname: j,
                                pendingPronouns: y,
                                pendingAvatar: w,
                                pendingAvatarDecoration: R,
                                pendingPrimaryGuildId: v,
                                pendingBanner: O,
                                pendingThemeColors: F,
                                pendingAccentColor: b,
                                pendingBio: L,
                                pendingProfileEffect: D,
                                pendingProfileFrame: T,
                                pendingLegacyUsernameDisabled: k,
                                pendingDisplayNameStyles: W.displayNameStyles,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: td.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                                hideProfileFrame: !0,
                            }),
                            (0, l.jsx)(tt.A, {
                                author: W,
                                message: (0, e7.rh)({
                                    ...(0, e4.Ay)({ channelId: "1337", content: ee.intl.string(Q.default.h5Cuej) }),
                                    state: K.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: td.OT,
                                previewGuildId: s?.id,
                                avatarDecorationOverride: R,
                                avatarOverride: w,
                            }),
                            (0, l.jsx)(e6.A, {
                                user: t,
                                guildId: s?.id,
                                nameplate: H,
                                nameplateData: null == H ? (U ?? Y) : void 0,
                                pendingGlobalName: P,
                                pendingNickname: j,
                                pendingAvatarDecoration: R,
                                pendingPrimaryGuildId: v,
                                pendingDisplayNameStyles: W.displayNameStyles,
                                pendingAvatar: M,
                                isHighlighted: !0,
                                className: td.qF,
                            }),
                        ],
                    }),
            }),
            (0, l.jsxs)("div", {
                className: td.dI,
                children: [
                    (0, l.jsx)(eG.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: ee.intl.format(Q.default.prQba8, {
                            helpArticleLink: tr.A.getArticleURL(K.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, l.jsx)(tu, { darkPreview: h, onToggleTheme: z }),
                ],
            }),
        ],
    });
}
function tu(e) {
    let { darkPreview: t, onToggleTheme: s } = e,
        a = t ? K.NJ8.DARK : K.NJ8.LIGHT;
    return (0, l.jsx)(e8.I, {
        className: td.xr,
        optionClassName: td.$C,
        options: [
            {
                name: "",
                tooltip: ee.intl.string(ee.t.b8Cei3),
                value: K.NJ8.DARK,
                icon: e5.Z,
                className: a === K.NJ8.DARK ? td.iB : void 0,
            },
            {
                name: "",
                tooltip: ee.intl.string(ee.t.K2sFfo),
                value: K.NJ8.LIGHT,
                icon: e9.F,
                className: a === K.NJ8.LIGHT ? td.iB : void 0,
            },
        ],
        value: a,
        onChange: (e) => {
            let { value: t } = e;
            return s(t);
        },
        look: "pill",
    });
}
var tm = s(97808),
    tf = s(778712),
    th = s(913563),
    tg = s(497082);
function tx(e) {
    let { owner: t, displayNameStyles: s } = e,
        a = ee.intl.string((0, th.A)(s.fontId)),
        { name: n } = (0, T._)(s.effectId),
        i = t.globalName ?? t.username;
    return (0, l.jsxs)("div", {
        className: tg.v,
        children: [
            (0, l.jsx)(tm.eu, { size: tf._3.SIZE_32, src: t.getAvatarURL(void 0, 32), "aria-hidden": !0 }),
            (0, l.jsxs)("div", {
                className: tg.C,
                children: [
                    (0, l.jsx)(eG.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: ee.intl.format(Q.default.gYzaCr, {
                            displayNameHook: () =>
                                (0, l.jsx)(eO.A, {
                                    userName: i,
                                    displayNameStyles: s,
                                    effectDisplayType: eR.G.ANIMATED,
                                    loop: !0,
                                }),
                        }),
                    }),
                    (0, l.jsx)(eG.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        children: ee.intl.format(Q.default.DC7gJB, { fontName: a, effectName: n }),
                    }),
                ],
            }),
        ],
    });
}
var tp = s(858899),
    tE = s(765178);
function tN() {
    let e = ee.intl.string(ee.t.iufib1);
    ((0, tp.P0)({ text: e, variant: "critical" }), tE.O.announce(e));
}
var tS = s(226451);
let tA = { overrideSettings: !0 };
function tI(e) {
    let t,
        {
            transitionState: s,
            analyticsLocations: n,
            guildId: I,
            isPremiumTryItOut: C = !1,
            onClose: j,
            returnRef: k,
            tryOnDisplayNameStyles: M,
            tryOnStyleOwner: w,
        } = e,
        O = (0, c.bG)([N.default], () => N.default.getCurrentUser()),
        F =
            ((t = V.Ay.useName(O)),
            (0, c.bG)(
                [J.A, W.Ay],
                () => {
                    let e = J.A.getPendingChanges(I);
                    if (null == I) return e.pendingGlobalName;
                    let { pendingNickname: t } = e;
                    return "" === t ? null : (t ?? W.Ay.getNick(I, O?.id));
                },
                [I, O],
            ) ??
                t ??
                ""),
        B = (0, c.bG)([E.A], () => E.A.getGuild(I)),
        {
            userDisplayNameStyles: G,
            guildDisplayNameStyles: X,
            pendingDisplayNameStyles: $,
            tryItOutDisplayNameStyles: q,
        } = (0, p.B0)(O, I),
        Z = C ? q : $,
        et = void 0 !== Z ? Z : (X ?? G),
        es = (0, b.A)(),
        el = a.useMemo(() => (0, D.A5)(M, es), [M, es]),
        ea = null != el,
        en = el ?? et,
        ei = ea ? "try_this_style" : "profile_editor",
        er = a.useMemo(() => (0, D.A5)(G, es), [G, es]),
        [eo, ed] = a.useState(en?.fontId ?? d.x.DEFAULT),
        [ec, eu] = a.useState(en?.effectId ?? o.z.SOLID),
        em = (0, D.as)(ec) > 1,
        ef = (0, T._)(ec),
        eh = en?.colors ?? [],
        eg = eh.length > 0 && !em,
        ex = eh.length > 0 && em,
        [ep, eE] = a.useState(() => (eg ? { [ec]: eh[0] } : {})),
        [eN, eS] = a.useState(() => (ex ? { [ec]: eh } : {})),
        eA = a.useMemo(() => eN[ec] ?? es[ec], [eN, ec, es]),
        eI = ep[ec] ?? es[ec][0];
    (0, x.A)(
        {
            type: r.ImpressionTypes.POPOUT,
            name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL,
            properties: { entry_point: ei },
        },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: ev } = (0, g.Ay)(n, h.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        eC = a.useMemo(() => (em ? eA : [eI]), [em, eA, eI]),
        e_ = a.useMemo(() => ({ fontId: eo, effectId: ec, colors: eC }), [eo, ec, eC]),
        ej = a.useMemo(
            () => eo !== et?.fontId || ec !== et?.effectId || !(0, u.v)(eC, et?.colors ?? []),
            [eo, ec, eC, et],
        ),
        ey = a.useMemo(() => !(0, D.kv)(e_, er), [e_, er]),
        eD = ea ? ey : ej,
        eT = ea && (0, D.kv)(e_, el) && null != w && null != el,
        eb = y(),
        { handleApply: eL } = (function (e) {
            let {
                    hasChanges: t,
                    entryPoint: s,
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
                x = a.useRef(!1),
                [p, E] = a.useState(!1);
            return {
                handleApply: a.useCallback(async () => {
                    if (!(t || h) || x.current) return;
                    let e = (0, D.eT)({ fontId: l, effectId: n, colors: i }, r),
                        a = !0 !== u && e.fontId === _.vl;
                    async function p() {
                        var t;
                        if (
                            (a &&
                                (function () {
                                    let e = N.default.getCurrentUser()?.displayNameStyles ?? null;
                                    !(0, R.Jy)(e) &&
                                        P.h.dispatch({
                                            type: "HEXAGON_CAMPAIGN_PREVIOUS_PERK_VALUES_SAVED",
                                            previousPerkValues: { displayNameStyles: e },
                                        });
                                })(),
                            h)
                        ) {
                            x.current = !0;
                            try {
                                let t = await (0, L._L)({ displayNameStyles: e });
                                if (t?.ok !== !0) return void g?.();
                            } catch {
                                g?.();
                                return;
                            } finally {
                                x.current = !1;
                            }
                        } else u ? (0, U.EW)(e) : (0, z.p)({ guildId: c, displayNameStyles: e });
                        (S.default.track(K.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                            font_name: d.x[l],
                            effect_name: o.z[n],
                            colors: i,
                            entry_point: s,
                        }),
                            a &&
                                ((t = _.vB.DISPLAY_NAME_STYLE),
                                P.h.dispatch({ type: "HEXAGON_CAMPAIGN_PERK_APPLIED", perk: t })),
                            m?.());
                    }
                    if (!a || (0, R.Rd)(N.default.getCurrentUser(), _.vB.DISPLAY_NAME_STYLE)) return void (await p());
                    ((x.current = !0), E(!0));
                    let A = !1;
                    try {
                        var I;
                        A = await ((I = _.vB.DISPLAY_NAME_STYLE),
                        (0, R.Rd)(N.default.getCurrentUser(), I) ? Promise.resolve(!0) : (null == Y && (Y = H(I)), Y));
                    } catch {
                        A = !1;
                    }
                    ((x.current = !1), E(!1), A) ? await p() : f?.();
                }, [t, s, l, n, i, r, m, f, c, u, h, g]),
                isApplying: p,
            };
        })({
            hasChanges: eD,
            entryPoint: ei,
            selectedFontId: eo,
            selectedEffectId: ec,
            selectedColors: eC,
            defaultColor: ef.defaultColors[0],
            guildId: I,
            isTryItOut: C,
            onClose: j,
            shouldSaveWithoutPendingChanges: ea,
            onSaveError: tN,
        }),
        eP = a.useCallback(() => (eD ? eL() : void j()), [eD, eL, j]),
        eM = a.useCallback(() => {
            (S.default.track(K.HAw.DISPLAY_NAME_STYLES_CLOSED), j());
        }, [j]),
        ew = a.useCallback(() => {
            let { fontId: e, effectId: t, colors: s } = (0, D.gN)(eb, v);
            (ed(e),
                eu(t),
                (0, D.as)(t) > 1 ? eS((e) => ({ ...e, [t]: s })) : eE((e) => ({ ...e, [t]: s[0] })),
                S.default.track(K.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME));
        }, [eb, v, ed, eu, eS, eE]),
        eR = a.useCallback(
            (e) => {
                em
                    ? eS((t) => {
                          let s = t[ec];
                          return null != s && (0, u.v)(s, e) ? t : { ...t, [ec]: e };
                      })
                    : eE((t) => (t[ec] === e[0] ? t : { ...t, [ec]: e[0] }));
            },
            [em, ec, eS, eE],
        );
    return null == O
        ? null
        : (0, l.jsx)(g.f5, {
              value: ev,
              children: (0, l.jsx)(A.l.Provider, {
                  value: tA,
                  children: (0, l.jsxs)(m.EO, {
                      "data-migration-pending": !0,
                      transitionState: s,
                      size: m.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: i()(tS.CR, tS.st),
                      returnRef: k,
                      children: [
                          (0, l.jsx)(m.s_, { "data-migration-pending": !0, onClick: eM, className: tS.b }),
                          (0, l.jsxs)(m.$m, {
                              "data-migration-pending": !0,
                              className: i()(tS.jE, tS.st),
                              style: { overflow: "hidden auto" },
                              scrollbarGutter: !1,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: tS.w1,
                                      children: [
                                          (0, l.jsx)(m.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: tS.bV,
                                              children: (0, l.jsx)(f.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: ee.intl.string(Q.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, l.jsx)(eK, {
                                              selectedFontId: eo,
                                              setSelectedFontId: ed,
                                              displayName: F,
                                              className: tS._,
                                          }),
                                          (0, l.jsx)(eY, {
                                              selectedEffectId: ec,
                                              setSelectedEffectId: eu,
                                              className: tS._,
                                          }),
                                          (0, l.jsx)(
                                              ek,
                                              {
                                                  selectedColors: eC,
                                                  setSelectedColors: eR,
                                                  selectedEffectId: ec,
                                                  className: tS._,
                                                  defaultColor: ef.defaultColors[0],
                                              },
                                              ec,
                                          ),
                                      ],
                                  }),
                                  (0, l.jsx)(tc, {
                                      user: O,
                                      guild: B,
                                      displayName: F,
                                      selectedFontId: eo,
                                      selectedEffectId: ec,
                                      selectedColors: ec === o.z.SOLID && (0, u.v)(eC, ef.defaultColors) ? [] : eC,
                                      isPremiumTryItOut: C,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(eQ, {
                              onApply: ea ? eP : eL,
                              onSurpriseMe: ew,
                              onClose: j,
                              canApply: eD || ea,
                              analyticsLocations: ev,
                              isPremiumTryItOut: C,
                              banner: eT ? (0, l.jsx)(tx, { owner: w, displayNameStyles: el }) : void 0,
                          }),
                      ],
                  }),
              }),
          });
}

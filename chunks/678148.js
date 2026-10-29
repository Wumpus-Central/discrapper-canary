(s.r(t), s.d(t, { default: () => t_ }));
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
    S = s(139286),
    p = s(919395),
    N = s(71393),
    E = s(287809),
    x = s(174459),
    A = s(871162),
    I = s(248778),
    v = s(750656);
let C = [...v.re, ...v.gz];
function _() {
    let e = (0, I.u)("effect-order");
    return a.useMemo(() => (e ? C : v.re), [e]);
}
var y = s(88858),
    j = s(652329);
let D = [
        d.x.DEFAULT,
        d.x.ZILLA_SLAB,
        d.x.CHERRY_BOMB,
        d.x.CHICLE,
        d.x.MUSEO_MODERNO,
        d.x.NEO_CASTEL,
        d.x.PIXELIFY,
        d.x.SINISTRE,
    ],
    T = [...D, ...v._k];
function b() {
    let { includeCampaignFonts: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, I.u)("font-order"),
        s = (0, y.Lz)(j.vB.DISPLAY_NAME_STYLE, "font-order"),
        l = e && s !== j.S9.HIDDEN;
    return a.useMemo(() => {
        let e = t ? T : D;
        return l ? [...e, ...v.fY] : e;
    }, [t, l]);
}
var L = s(723694),
    k = s(898985),
    M = s(430571),
    P = s(631670),
    w = s(636537),
    R = s(73153),
    O = s(626584),
    F = s(927813),
    B = s(189916);
let Y = new O.A("HexagonActionCreators"),
    G = 5 * F.A.Millis.SECOND;
async function H() {
    await w.Bo.post({ url: j.tK, rejectWithError: !0 });
}
let U = null;
async function z(e) {
    try {
        await H();
    } catch (e) {
        return (Y.warn(`Failed to enroll in the Hexagon campaign: ${e}`), !1);
    }
    return (
        (await (function (e) {
            function t() {
                return (0, B.Rd)(E.default.getCurrentUser(), e);
            }
            return t()
                ? Promise.resolve(!0)
                : new Promise((e) => {
                      function s() {
                          t() && (clearTimeout(l), E.default.removeChangeListener(s), e(!0));
                      }
                      let l = setTimeout(() => {
                          (E.default.removeChangeListener(s), e(!1));
                      }, G);
                      E.default.addChangeListener(s);
                  });
        })(e)) || Y.warn(`Timed out waiting for the Hexagon campaign ${e} perk to sync`),
        !0
    );
}
async function K(e) {
    try {
        return await z(e);
    } finally {
        U = null;
    }
}
var J = s(207803),
    W = s(84540),
    V = s(652215),
    X = s(836602),
    $ = s(696451),
    q = s(427262),
    Z = s(403581),
    Q = s(661531),
    ee = s(48736),
    et = s(317097),
    es = s(701974),
    el = s(105292);
function ea(e, t) {
    return a.useMemo(
        () =>
            (t ?? (0, L.Fj)(e, null)).map((e, t) => {
                let { colors: s } = e;
                return {
                    colors: s,
                    a11yLabel: el.intl.formatToPlainString(es.default.FHfTsV, {
                        number: t + 1,
                        hexList: s.map(et.Hl).join(", "),
                    }),
                };
            }),
        [e, t],
    );
}
var en = s(887129),
    ei = s(837381),
    er = s(741918),
    eo = s(265872),
    ed = s(866665),
    ec = s(939249),
    eu = s(714385);
function em(e) {
    let t,
        s,
        l,
        { selectedColors: n, hasCustomPalette: i, hasCustomSwatchSelected: r } = e,
        o = a.useId(),
        d = i
            ? ((t = Math.min(...n.map((e) => (0, et.bJ)(e, 0)))),
              {
                  useDarkIcon:
                      (l = 3 > Math.max(t, (s = Math.min(...n.map((e) => (0, et.bJ)(e, 0xffffff)))))) || t >= s,
                  needsBacking: l,
              })
            : null;
    return {
        customColorDescriptionId: o,
        customColorDescription: r
            ? el.intl.formatToPlainString(el.t["7BFCRR"], { color: n.map(et.Hl).join(", ") })
            : void 0,
        iconContrast: d,
    };
}
var ef = s(559106),
    eh = s(236630);
function eg(e) {
    let { selected: t, onSelect: s, listItemId: a, "aria-label": n, fillStyle: r, children: o } = e,
        d = (0, ei.rm)(a);
    return (0, l.jsx)(ef.vN, {
        offset: -2,
        children: (0, l.jsx)("button", {
            type: "button",
            className: i()(eh.nf, { [eh.wH]: t }),
            onClick: s,
            "aria-label": n,
            ...d,
            role: "option",
            "aria-selected": t,
            children: (0, l.jsx)("span", { className: eh.GS, style: r, children: o }),
        }),
    });
}
var eS = s(818168);
function ep(e) {
    let { colors: t, selected: s, onSelect: a, listItemId: n, "aria-label": i } = e;
    return (0, l.jsx)(eg, {
        selected: s,
        onSelect: a,
        listItemId: n,
        "aria-label": i,
        children: t.map((e, t) => (0, l.jsx)("div", { className: eS._, style: { background: (0, et.Hl)(e) } }, t)),
    });
}
var eN = s(1986),
    eE = s(315710),
    ex = s(650583),
    eA = s(607570);
let eI = [0, 60, 120, 180, 240, 300, 360];
function ev(e) {
    let { value: t, onChange: s, hueToColor: n, onConfirm: r, "aria-label": o, className: d } = e,
        c = (0, L.xo)((0, et.tf)(t).h),
        u = a.useRef(null);
    (0, eE.tj)(u);
    let m = a.useCallback((e) => s(n((0, L.xo)(e))), [s, n]),
        f = a.useCallback((e) => m(e.h), [m]),
        h = a.useMemo(() => `linear-gradient(to right, ${eI.map((e) => (0, et.Hl)(n(e))).join(", ")})`, [n]),
        g = a.useMemo(
            () =>
                function (e) {
                    let { hsl: t } = e;
                    return (0, l.jsx)("div", { className: eA.Wn, style: { background: (0, et.Hl)(n(t.h)) } });
                },
            [n],
        ),
        S = a.useCallback(
            (e) => {
                switch (e.key) {
                    case ex.dh.ARROW_LEFT:
                    case ex.dh.ARROW_DOWN:
                        m(c - 5);
                        break;
                    case ex.dh.ARROW_RIGHT:
                    case ex.dh.ARROW_UP:
                        m(c + 5);
                        break;
                    case ex.dh.HOME:
                        m(0);
                        break;
                    case ex.dh.END:
                        m(359);
                        break;
                    case ex.dh.ENTER:
                    case ex.dh.SPACE:
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
        className: i()(eA.kL, d),
        children: (0, l.jsx)("div", {
            className: eA.SP,
            style: { "--custom-hue-track": h },
            role: "slider",
            tabIndex: 0,
            "aria-label": o,
            "aria-valuemin": 0,
            "aria-valuemax": 360,
            "aria-valuenow": Math.round(c),
            onKeyDown: S,
            children: (0, l.jsx)(eN.Hue, {
                hsl: { h: c, s: 1, l: 0.5 },
                direction: "horizontal",
                pointer: g,
                onChange: f,
            }),
        }),
    });
}
var eC = s(420080);
let e_ = () => Promise.resolve();
function ey(e) {
    let { selectedColors: t, setSelectedColors: s, colorOptions: n, onCustomPalettePicked: r, className: d } = e,
        [c, m] = a.useState(!1),
        f = a.useRef(null),
        [h, g] = a.useState(V.TGz),
        S = a.useRef(null),
        p = a.useCallback(() => {
            (g(t.length > 0 ? (0, L.nO)(t) : V.TGz), m(!0));
        }, [t]),
        N = a.useCallback(
            (e) => {
                let t = (0, L.cf)(e);
                (g(e), (S.current = t), s(t, !0));
            },
            [s],
        ),
        E = a.useCallback(() => {
            let e = S.current;
            ((S.current = null), m(!1), null != e && r(e.slice()));
        }, [r]),
        x = ea(o.z.GUMMY, n),
        A = x.findIndex((e) => {
            let { colors: s } = e;
            return (0, u.v)(s, t);
        }),
        I = t.length > 0 && !(A >= 0),
        v = I && !c,
        C = el.intl.string(el.t["FHBa/1"]),
        {
            customColorDescriptionId: _,
            customColorDescription: y,
            iconContrast: j,
        } = em({ selectedColors: t, hasCustomPalette: I, hasCustomSwatchSelected: v }),
        D = (0, en.Ay)({
            id: "gummy-color-picker",
            isEnabled: !0,
            orientation: er.Gl.HORIZONTAL,
            scrollToStart: e_,
            scrollToEnd: e_,
        });
    return (0, l.jsx)(ei.hD, {
        navigator: D,
        children: (0, l.jsx)(ei.PR, {
            children: (e) => {
                let { ref: a, ...n } = e;
                return (0, l.jsxs)("div", {
                    className: i()(eC.kL, d),
                    ref: a,
                    ...n,
                    role: "listbox",
                    "aria-label": el.intl.string(el.t.WTqQ5e),
                    children: [
                        (0, l.jsxs)("div", {
                            className: i()(eh.nf, eC.Ix, { [eh.wH]: v }),
                            children: [
                                (0, l.jsx)("div", {
                                    className: i()(eC.yB, { [eC.EI]: !I }),
                                    children:
                                        I &&
                                        t.map((e, t) =>
                                            (0, l.jsx)(
                                                "div",
                                                { className: eC._4, style: { background: (0, et.Hl)(e) } },
                                                t,
                                            ),
                                        ),
                                }),
                                (0, l.jsx)("div", {
                                    className: eC.fX,
                                    children: (0, l.jsx)(eo.Y, {
                                        targetElementRef: f,
                                        position: "top",
                                        align: "left",
                                        shouldShow: c,
                                        onRequestOpen: p,
                                        onRequestClose: E,
                                        renderPopout: () =>
                                            (0, l.jsx)(ev, {
                                                value: h,
                                                onChange: N,
                                                hueToColor: L.UZ,
                                                onConfirm: E,
                                                "aria-label": C,
                                            }),
                                        children: (e) =>
                                            (0, l.jsx)(ed.m, {
                                                text: C,
                                                position: "top",
                                                ariaHidden: !0,
                                                children: (0, l.jsx)("div", {
                                                    ...e,
                                                    ref: f,
                                                    className: eC.r9,
                                                    children: (0, l.jsx)(ei.tG, {
                                                        id: "custom",
                                                        children: (e) =>
                                                            (0, l.jsx)(ec.D, {
                                                                ...e,
                                                                className: eC.Vz,
                                                                "aria-label": C,
                                                                "aria-describedby": null != y ? _ : void 0,
                                                                role: "option",
                                                                "aria-selected": v,
                                                                children: (0, l.jsx)(eu.d, {
                                                                    size: "custom",
                                                                    width: 14,
                                                                    height: 14,
                                                                    color: "currentColor",
                                                                    className: i()(eC.IZ, {
                                                                        [eh.eQ]: j?.useDarkIcon === !0,
                                                                        [eh.mT]: j?.useDarkIcon === !1,
                                                                        [eC.N]: j?.needsBacking,
                                                                    }),
                                                                }),
                                                            }),
                                                    }),
                                                }),
                                            }),
                                    }),
                                }),
                                null != y && (0, l.jsx)("span", { id: _, hidden: !0, children: y }),
                            ],
                        }),
                        x.map((e, t) => {
                            let { colors: a, a11yLabel: n } = e;
                            return (0, l.jsx)(
                                ep,
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
var ej = s(508274),
    eD = s(300158);
let eT = () => Promise.resolve(),
    eb = a.memo(function (e) {
        let { color: t, isSelected: s, onSelect: n, listItemId: i, "aria-label": r } = e,
            o = a.useCallback(() => n(t), [n, t]);
        return (0, l.jsx)(eg, {
            selected: s,
            onSelect: o,
            listItemId: i,
            "aria-label": r,
            fillStyle: { backgroundColor: (0, et.Hl)(t) },
        });
    });
function eL(e) {
    let { value: t, isCustomColor: s, onChange: n, onCustomColorPicked: r } = e,
        [o, d] = a.useState(!1),
        c = s && !o,
        u = a.useRef(null),
        m = a.useRef(null),
        f = el.intl.string(el.t["FHBa/1"]),
        {
            customColorDescriptionId: h,
            customColorDescription: g,
            iconContrast: S,
        } = em({ selectedColors: null != t ? [t] : [], hasCustomPalette: s, hasCustomSwatchSelected: c }),
        p = a.useCallback(
            (e) => {
                ((m.current = e), n(e));
            },
            [n],
        ),
        N = a.useCallback(() => {
            let e = m.current;
            ((m.current = null), d(!1), null != e && r(e));
        }, [r]);
    return (0, l.jsx)(eo.Y, {
        targetElementRef: u,
        position: "top",
        align: "left",
        shouldShow: o,
        onRequestOpen: () => d(!0),
        onRequestClose: N,
        renderPopout: () => (0, l.jsx)(ej.VN, { onChange: p, value: t, eagerUpdate: !0 }),
        children: (e) =>
            (0, l.jsx)(ed.m, {
                text: f,
                position: "top",
                ariaHidden: !0,
                children: (0, l.jsxs)("div", {
                    ...e,
                    ref: u,
                    className: i()(eh.nf, eD.OF, { [eh.wH]: c }),
                    style: s && null != t ? { backgroundColor: (0, et.Hl)(t) } : void 0,
                    children: [
                        (0, l.jsx)(ei.tG, {
                            id: "custom",
                            children: (e) =>
                                (0, l.jsx)(ec.D, {
                                    ...e,
                                    className: eD.Kd,
                                    "aria-label": f,
                                    "aria-describedby": null != g ? h : void 0,
                                    role: "option",
                                    "aria-selected": c,
                                    children: (0, l.jsx)(eu.d, {
                                        className: i()(eD.EY, {
                                            [eh.eQ]: S?.useDarkIcon === !0,
                                            [eh.mT]: S?.useDarkIcon === !1,
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
function ek(e) {
    let {
            selectedColor: t,
            setSelectedColor: s,
            colorOptions: n,
            onCustomColorPicked: r,
            defaultColor: o,
            selectedEffectId: d,
            className: c,
        } = e,
        u = ea(d, n),
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
            eb,
            { color: s[0], isSelected: s[0] === t, onSelect: m, listItemId: `preset-${s[0]}`, "aria-label": a },
            s[0],
        );
    }
    let S = (0, en.Ay)({
        id: "display-name-styles-solid-color-picker",
        isEnabled: !0,
        orientation: er.Gl.HORIZONTAL,
        scrollToStart: eT,
        scrollToEnd: eT,
    });
    return (0, l.jsx)(ei.hD, {
        navigator: S,
        children: (0, l.jsx)(ei.PR, {
            children: (e) => {
                let { ref: s, ...a } = e;
                return (0, l.jsxs)("div", {
                    className: i()(eD.kL, c),
                    ref: s,
                    ...a,
                    role: "listbox",
                    "aria-label": el.intl.string(es.default.JOpi7z),
                    children: [
                        (0, l.jsx)(eL, { value: t, isCustomColor: h, onChange: f, onCustomColorPicked: r }),
                        (0, l.jsx)(eb, {
                            color: o,
                            isSelected: t === o,
                            onSelect: m,
                            listItemId: "default",
                            "aria-label": el.intl.string(el.t.bBvAEH),
                        }),
                        u.map(g),
                    ],
                });
            },
        }),
    });
}
var eM = s(143660),
    eP = s(454137);
function ew(e) {
    var t;
    let s,
        { selectedColors: n, setSelectedColors: r, defaultColor: d, selectedEffectId: c, className: m } = e,
        h = (0, L.as)(c),
        g = (0, a.useMemo)(() => (0, v.ii)(c).map((e) => ({ colors: e, isCustom: !1 })), [c]),
        S =
            ((t = ea(c, g)),
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
                        x.default.track(V.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
                            default: 1 === e.length && e[0] === d,
                            colors: e,
                        }));
                },
                [d],
            )),
        N = (0, a.useCallback)(
            (e, t) => {
                (r([e]), !0 !== t && p([e]));
            },
            [r, p],
        ),
        E = (0, a.useCallback)(
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
        className: i()(eM.EE, m),
        children: [
            (0, l.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: eP.sU,
                children: [
                    el.intl.string(es.default.JOpi7z),
                    (0, l.jsx)(Z.t, { size: "xs", color: Q.A.colors.TEXT_DEFAULT }),
                ],
            }),
            c === o.z.GUMMY
                ? (0, l.jsx)(ey, { selectedColors: n, setSelectedColors: E, colorOptions: g, onCustomPalettePicked: p })
                : h > 1
                  ? (0, l.jsx)(ee.default, {
                        className: eM.kM,
                        gradientButtonClassName: eM.dy,
                        gradientSwatchClassName: eM.u_,
                        shouldRenderSingleRow: !0,
                        swatchClassName: eM.Ay,
                        defaultColor: d,
                        colors: S,
                        value: n[0],
                        gradientColors: n,
                        onChange: N,
                        onChangeGradientColors: E,
                        isGradient: !0,
                        gradientWidth: c === o.z.PRISM ? "231px" : "calc(3 * var(--space-40) + 2 * var(--space-8))",
                        gradientDegrees: 90,
                        allowBlackCustomColor: !0,
                        customPickerPosition: "top",
                        onCustomPalettePicked: p,
                    })
                  : (0, l.jsx)(ek, {
                        className: eM.Ei,
                        selectedColor: n[0],
                        setSelectedColor: N,
                        colorOptions: g,
                        onCustomColorPicked: A,
                        defaultColor: d,
                        selectedEffectId: c,
                    }),
        ],
    });
}
let eR = { seenFontIds: new Set(), seenEffectIds: new Set(), newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 };
class eO extends c.Ay.PersistedStore {
    static displayName = "DisplayNameStylesSeenStore";
    static persistKey = "DisplayNameStylesSeenStore";
    static migrations = [(e) => ({ ...e, newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 })];
    initialize(e) {
        eR = {
            seenFontIds: new Set(e?.seenFontIds ?? []),
            seenEffectIds: new Set(e?.seenEffectIds ?? []),
            newFontsBadgeDismissed: e?.newFontsBadgeDismissed ?? !1,
            newEffectsBadgeDismissed: e?.newEffectsBadgeDismissed ?? !1,
        };
    }
    getState() {
        return {
            seenFontIds: Array.from(eR.seenFontIds),
            seenEffectIds: Array.from(eR.seenEffectIds),
            newFontsBadgeDismissed: eR.newFontsBadgeDismissed,
            newEffectsBadgeDismissed: eR.newEffectsBadgeDismissed,
        };
    }
    getSeenFonts() {
        return eR.seenFontIds;
    }
    getSeenEffects() {
        return eR.seenEffectIds;
    }
    getNewFontsBadgeDismissed() {
        return eR.newFontsBadgeDismissed;
    }
    getNewEffectsBadgeDismissed() {
        return eR.newEffectsBadgeDismissed;
    }
}
let eF = new eO(R.h, {
    DISPLAY_NAME_STYLES_MARK_FONT_SEEN: function (e) {
        let { fontId: t } = e;
        if (eR.seenFontIds.has(t)) return !1;
        eR = { ...eR, seenFontIds: new Set([...eR.seenFontIds, t]) };
    },
    DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN: function (e) {
        let { effectId: t } = e;
        if (eR.seenEffectIds.has(t)) return !1;
        eR = { ...eR, seenEffectIds: new Set([...eR.seenEffectIds, t]) };
    },
    DISPLAY_NAME_STYLES_MARK_NEW_FONTS_BADGE_DISMISSED: function () {
        if (eR.newFontsBadgeDismissed) return !1;
        eR = { ...eR, newFontsBadgeDismissed: !0 };
    },
    DISPLAY_NAME_STYLES_MARK_NEW_EFFECTS_BADGE_DISMISSED: function () {
        if (eR.newEffectsBadgeDismissed) return !1;
        eR = { ...eR, newEffectsBadgeDismissed: !0 };
    },
});
var eB = s(922301),
    eY = s(660184),
    eG = s(742191);
function eH(e) {
    let { effectId: t, selected: s, showNewDot: a, isFlywheelEnabled: n, onClick: r } = e,
        o = (0, k._)(t);
    return (0, l.jsxs)(ec.D, {
        className: i()(eG.Tw, { [eG.wH]: s, [eG.uT]: n }),
        onClick: r,
        children: [
            (0, l.jsx)(eY.A, {
                userName: o.name,
                effectDisplayType: eB.G.ANIMATED,
                displayNameStyles: o.previewStyles,
                textClassName: eG.tr,
                loop: !0,
                inProfile: !0,
            }),
            a && (0, l.jsx)("div", { className: eP.s1, "aria-hidden": !0 }),
        ],
    });
}
let eU = a.memo(function (e) {
    let t,
        { selectedEffectId: s, setSelectedEffectId: n, className: r } = e,
        o = _(),
        { dotEffectIds: d, dismissEffectDot: u } =
            ((t = (0, c.bG)([eF], () => eF.getSeenEffects())),
            {
                dotEffectIds: a.useMemo(() => new Set(o.filter((e) => v.gz.includes(e) && !t.has(e))), [o, t]),
                dismissEffectDot: a.useCallback((e) => {
                    R.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN", effectId: e });
                }, []),
            }),
        m = (0, I.u)("DisplayNameStylesEffectSelection"),
        h = Math.ceil(o.length / 2);
    return (0, l.jsxs)("div", {
        className: r,
        children: [
            (0, l.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: eP.sU,
                children: [
                    el.intl.string(es.default["1wilM1"]),
                    (0, l.jsx)(Z.t, { size: "xs", color: Q.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)("div", {
                className: i()(eP.fh, { [eG.KS]: m }),
                style: { "--custom-dns-tile-columns": h },
                children: o.map((e) => {
                    let t = d.has(e);
                    return (0, l.jsx)(
                        eH,
                        {
                            effectId: e,
                            selected: e === s,
                            showNewDot: t,
                            isFlywheelEnabled: m,
                            onClick: () => {
                                (n(e), t && u(e));
                            },
                        },
                        e,
                    );
                }),
            }),
        ],
    });
});
var ez = s(834730),
    eK = s(885574),
    eJ = s(73392),
    eW = s(599715);
let eV = a.memo(function (e) {
    let t,
        { selectedFontId: s, setSelectedFontId: n, displayName: r, className: o } = e,
        u = b(),
        { dotFontIds: m, dismissFontDot: h } =
            ((t = (0, c.bG)([eF], () => eF.getSeenFonts())),
            {
                dotFontIds: a.useMemo(() => new Set(u.filter((e) => v._k.includes(e) && !t.has(e))), [u, t]),
                dismissFontDot: a.useCallback((e) => {
                    R.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_FONT_SEEN", fontId: e });
                }, []),
            }),
        g = s !== d.x.DEFAULT,
        S = (0, L.Xr)(r),
        p = (0, I.u)("DisplayNameStylesFontSelection"),
        N = Math.ceil(u.length / (p ? 3 : 2));
    return (0, l.jsxs)("div", {
        className: o,
        children: [
            (0, l.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: eP.sU,
                children: [
                    el.intl.string(es.default.nP0ngb),
                    (0, l.jsx)(Z.t, { size: "xs", color: Q.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: i()(eP.fh, { [eW.qW]: p }),
                style: { "--custom-dns-tile-columns": N },
                children: [
                    u.map((e) => {
                        let t = (0, eJ.p)(e),
                            a = e === s,
                            r = m.has(e),
                            o = el.intl.string(t.name);
                        return (0, l.jsx)(
                            ed.m,
                            {
                                text: o,
                                asContainer: !0,
                                children: (0, l.jsxs)(ec.D, {
                                    className: i()(eW.SO, { [eW.wH]: a, [eW.j4]: p }),
                                    onClick: () => {
                                        (n(e), r && h(e));
                                    },
                                    "aria-label": o,
                                    children: [
                                        (0, l.jsx)(ez.E, {
                                            variant: "text-lg/semibold",
                                            color: a ? "text-strong" : "text-default",
                                            className: i()(eW.FH, t.className),
                                            children: "Gg",
                                        }),
                                        r && (0, l.jsx)("div", { className: eP.s1, "aria-hidden": !0 }),
                                    ],
                                }),
                            },
                            e,
                        );
                    }),
                    g &&
                        S &&
                        (0, l.jsxs)("div", {
                            className: eW.Lb,
                            children: [
                                (0, l.jsx)(eK.CircleInformationIcon, { size: "lg" }),
                                (0, l.jsx)(ez.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: el.intl.string(es.default["+O1xL2"]),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
});
var eX = s(821609),
    e$ = s(908803),
    eq = s(87719),
    eZ = s(465794),
    eQ = s(757036),
    e0 = s(202541),
    e1 = s(7212);
function e8(e) {
    let { onApply: t, onSurpriseMe: s, onClose: a, canApply: n, isPremiumTryItOut: i = !1, banner: r } = e,
        o = (0, eQ.L)(e0.PremiumTypes.TIER_2),
        d = (0, l.jsx)(eX.$, {
            variant: "secondary",
            size: "md",
            onClick: s,
            icon: { type: "rive", asset: e$.m, riveProps: { dataBinding: { fill: Q.A.colors.ICON_STRONG } } },
            text: el.intl.string(es.default.NOGFds),
        }),
        c = (0, l.jsxs)("div", {
            className: e1.k0,
            children: [
                d,
                (0, l.jsx)(ed.m, {
                    text: el.intl.string(es.default.cVTpnj),
                    shouldShow: !n,
                    children: (0, l.jsx)(eX.$, {
                        onClick: t,
                        disabled: !n,
                        text: el.intl.string(el.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        u = null != r ? (0, l.jsxs)("div", { className: e1.f4, children: [r, c] }) : c,
        f = (0, l.jsxs)("div", {
            className: e1.UD,
            children: [
                d,
                (0, l.jsx)(eZ.A, {
                    premiumModalAnalyticsLocation: {
                        section: V.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                        object: V.ZSU.PREMIUM_UPSELL_BUTTON,
                    },
                    subscriptionTier: e0.pe.TIER_2,
                }),
            ],
        }),
        h = (0, l.jsxs)("div", {
            className: e1.UX,
            children: [
                (0, l.jsxs)("div", {
                    className: e1.iQ,
                    children: [
                        (0, l.jsx)(ed.m, {
                            text: el.intl.string(el.t["5AFxuK"]),
                            children: (0, l.jsx)(Z.t, { size: "md", color: Q.A.colors.ICON_STRONG }),
                        }),
                        (0, l.jsx)(ez.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: e1.h_,
                            children: el.intl.format(es.default.PWf0xS, {
                                onClickNitro: () => {
                                    (x.default.track(V.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, eq.x)(a));
                                },
                            }),
                        }),
                    ],
                }),
                f,
            ],
        }),
        g = (0, l.jsxs)("div", { className: e1.UX, children: [r, f] }),
        S = null != r ? g : h;
    return (0, l.jsx)(m.jl, { "data-migration-pending": !0, className: e1.qr, children: i || o ? u : S });
}
var e5 = s(366010),
    e9 = s(43990),
    e2 = s(629584),
    e3 = s(943255),
    e7 = s(575181),
    e6 = s(736653),
    e4 = s(780898),
    te = s(344346),
    tt = s(320095),
    ts = s(963852),
    tl = s(763754),
    ta = s(20851),
    tn = s(986687),
    ti = s(101058),
    tr = s(999291),
    to = s(686189),
    td = s(946356),
    tc = s(975571),
    tu = s(996988),
    tm = s(228839);
function tf(e) {
    let {
            user: t,
            guild: s,
            displayName: n,
            selectedFontId: r,
            selectedEffectId: o,
            selectedColors: d,
            isPremiumTryItOut: u = !1,
        } = e,
        m = (0, e6.Ay)(),
        f = (0, e5.M)(m),
        [h, g] = (0, a.useState)(f),
        S = (0, tr.Ay)(t.id, null),
        { pendingChanges: N, tryItOutChanges: E } = (0, c.cf)([X.A], () => ({
            pendingChanges: X.A.getPendingChanges(s?.id),
            tryItOutChanges: X.A.getTryItOutChanges(),
        })),
        {
            pendingAvatar: A,
            pendingAvatarDecoration: I,
            pendingPrimaryGuildId: v,
            pendingBanner: C,
            pendingThemeColors: _,
            pendingNickname: y,
            pendingPronouns: j,
            pendingProfileEffect: D,
            pendingProfileFrame: T,
            pendingAccentColor: b,
            pendingBio: L,
            pendingLegacyUsernameDisabled: k,
        } = N,
        M = u ? E.tryItOutAvatar : A,
        P = (0, ti.V7)({ userId: t.id, image: M }),
        w = u ? void 0 : I,
        R = u ? E.tryItOutBanner : C,
        O = u ? E.tryItOutThemeColors : _,
        { bannerSrc: F } = (0, to.A)({ displayProfile: S, size: 413, canAnimate: !1, pendingBanner: R }),
        { userNameplate: B, guildNameplate: Y, pendingNameplate: G } = (0, p.rv)(t, s?.id),
        H = (0, e4.WK)(Y);
    h && !f ? (m = V.NJ8.DARK) : !h && f && (m = V.NJ8.LIGHT);
    let U = (0, a.useCallback)((e) => {
            (g(e === V.NJ8.DARK), x.default.track(V.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === V.NJ8.DARK }));
        }, []),
        z = (0, a.useMemo)(
            () => ({ ...(0, tl.FT)(t, null), nick: n, displayNameStyles: { fontId: r, effectId: o, colors: d } }),
            [t, r, o, d, n],
        );
    return (0, l.jsxs)("div", {
        className: tm._l,
        children: [
            null != F &&
                (0, l.jsx)(td.A, {
                    user: t,
                    displayProfile: S,
                    themeType: tu.d.MODAL_V2,
                    className: tm.LX,
                    pendingThemeColors: O,
                    forceUserTheme: !0,
                    children: (0, l.jsx)("div", { className: tm.b8, style: { backgroundImage: `url(${F})` } }),
                }),
            (0, l.jsx)(e9.N, {
                theme: m,
                children: (e) =>
                    (0, l.jsxs)("div", {
                        className: i()(tm.cq, e),
                        inert: !0,
                        children: [
                            (0, l.jsx)(tn.A, {
                                user: t,
                                guild: s,
                                pendingGlobalName: n,
                                pendingNickname: y,
                                pendingPronouns: j,
                                pendingAvatar: P,
                                pendingAvatarDecoration: w,
                                pendingPrimaryGuildId: v,
                                pendingBanner: R,
                                pendingThemeColors: O,
                                pendingAccentColor: b,
                                pendingBio: L,
                                pendingProfileEffect: D,
                                pendingProfileFrame: T,
                                pendingLegacyUsernameDisabled: k,
                                pendingDisplayNameStyles: z.displayNameStyles,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: tm.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                                hideProfileFrame: !0,
                            }),
                            (0, l.jsx)(ta.A, {
                                author: z,
                                message: (0, tt.rh)({
                                    ...(0, ts.Ay)({ channelId: "1337", content: el.intl.string(es.default.h5Cuej) }),
                                    state: V.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: tm.OT,
                                previewGuildId: s?.id,
                                avatarDecorationOverride: w,
                                avatarOverride: P,
                            }),
                            (0, l.jsx)(te.A, {
                                user: t,
                                guildId: s?.id,
                                nameplate: G,
                                nameplateData: null == G ? (H ?? B) : void 0,
                                pendingGlobalName: n,
                                pendingAvatarDecoration: w,
                                pendingPrimaryGuildId: v,
                                pendingDisplayNameStyles: z.displayNameStyles,
                                pendingAvatar: M,
                                isHighlighted: !0,
                                className: tm.qF,
                            }),
                        ],
                    }),
            }),
            (0, l.jsxs)("div", {
                className: tm.dI,
                children: [
                    (0, l.jsx)(ez.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: el.intl.format(es.default.prQba8, {
                            helpArticleLink: tc.A.getArticleURL(V.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, l.jsx)(th, { darkPreview: h, onToggleTheme: U }),
                ],
            }),
        ],
    });
}
function th(e) {
    let { darkPreview: t, onToggleTheme: s } = e,
        a = t ? V.NJ8.DARK : V.NJ8.LIGHT;
    return (0, l.jsx)(e2.I, {
        className: tm.xr,
        optionClassName: tm.$C,
        options: [
            {
                name: "",
                tooltip: el.intl.string(el.t.b8Cei3),
                value: V.NJ8.DARK,
                icon: e3.Z,
                className: a === V.NJ8.DARK ? tm.iB : void 0,
            },
            {
                name: "",
                tooltip: el.intl.string(el.t.K2sFfo),
                value: V.NJ8.LIGHT,
                icon: e7.F,
                className: a === V.NJ8.LIGHT ? tm.iB : void 0,
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
var tg = s(97808),
    tS = s(778712),
    tp = s(913563),
    tN = s(497082);
function tE(e) {
    let { owner: t, displayNameStyles: s } = e,
        a = el.intl.string((0, tp.A)(s.fontId)),
        { name: n } = (0, k._)(s.effectId),
        i = t.globalName ?? t.username;
    return (0, l.jsxs)("div", {
        className: tN.v,
        children: [
            (0, l.jsx)(tg.eu, { size: tS._3.SIZE_32, src: t.getAvatarURL(void 0, 32), "aria-hidden": !0 }),
            (0, l.jsxs)("div", {
                className: tN.C,
                children: [
                    (0, l.jsx)(ez.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: el.intl.format(es.default.gYzaCr, {
                            displayNameHook: () =>
                                (0, l.jsx)(eY.A, {
                                    userName: i,
                                    displayNameStyles: s,
                                    effectDisplayType: eB.G.ANIMATED,
                                    loop: !0,
                                }),
                        }),
                    }),
                    (0, l.jsx)(ez.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        children: el.intl.format(es.default.DC7gJB, { fontName: a, effectName: n }),
                    }),
                ],
            }),
        ],
    });
}
var tx = s(858899),
    tA = s(765178);
function tI() {
    let e = el.intl.string(el.t.iufib1);
    ((0, tx.P0)({ text: e, variant: "critical" }), tA.O.announce(e));
}
var tv = s(226451);
let tC = { overrideSettings: !0 };
function t_(e) {
    let t,
        {
            transitionState: s,
            analyticsLocations: n,
            guildId: v,
            isPremiumTryItOut: C = !1,
            onClose: y,
            returnRef: D,
            tryOnDisplayNameStyles: T,
            tryOnStyleOwner: w,
        } = e,
        O = (0, c.bG)([E.default], () => E.default.getCurrentUser()),
        F =
            ((t = q.Ay.useName(O)),
            (0, c.bG)(
                [X.A, $.Ay],
                () => {
                    let e = X.A.getPendingChanges(v);
                    return null != v ? (e.pendingNickname ?? $.Ay.getNick(v, O?.id)) : e.pendingGlobalName;
                },
                [v, O],
            ) ??
                t ??
                ""),
        Y = (0, c.bG)([N.A], () => N.A.getGuild(v)),
        {
            userDisplayNameStyles: G,
            guildDisplayNameStyles: H,
            pendingDisplayNameStyles: z,
            tryItOutDisplayNameStyles: Z,
        } = (0, p.B0)(O, v),
        Q = C ? Z : z,
        ee = void 0 !== Q ? Q : (H ?? G),
        et = (0, M.A)(),
        ea = a.useMemo(() => (0, L.A5)(T, et), [T, et]),
        en = null != ea,
        ei = ea ?? ee,
        er = en ? "try_this_style" : "profile_editor",
        eo = a.useMemo(() => (0, L.A5)(G, et), [G, et]),
        [ed, ec] = a.useState(ei?.fontId ?? d.x.DEFAULT),
        [eu, em] = a.useState(ei?.effectId ?? o.z.SOLID),
        ef = (0, L.as)(eu) > 1,
        eh = (0, k._)(eu),
        eg = ei?.colors ?? [],
        eS = eg.length > 0 && !ef,
        ep = eg.length > 0 && ef,
        [eN, eE] = a.useState(() => (eS ? { [eu]: eg[0] } : {})),
        [ex, eA] = a.useState(() => (ep ? { [eu]: eg } : {})),
        eI = a.useMemo(() => ex[eu] ?? et[eu], [ex, eu, et]),
        ev = eN[eu] ?? et[eu][0];
    (0, S.A)(
        {
            type: r.ImpressionTypes.POPOUT,
            name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL,
            properties: { entry_point: er },
        },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: eC } = (0, g.Ay)(n, h.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        e_ = a.useMemo(() => (ef ? eI : [ev]), [ef, eI, ev]),
        ey = a.useMemo(() => ({ fontId: ed, effectId: eu, colors: e_ }), [ed, eu, e_]),
        ej = a.useMemo(
            () => ed !== ee?.fontId || eu !== ee?.effectId || !(0, u.v)(e_, ee?.colors ?? []),
            [ed, eu, e_, ee],
        ),
        eD = a.useMemo(() => !(0, L.kv)(ey, eo), [ey, eo]),
        eT = en ? eD : ej,
        eb = en && (0, L.kv)(ey, ea) && null != w && null != ea,
        eL = (0, I.u)("DisplayNameStylesModal"),
        ek = b(),
        eM = _(),
        { handleApply: eP } = (function (e) {
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
                S = a.useRef(!1),
                [p, N] = a.useState(!1);
            return {
                handleApply: a.useCallback(async () => {
                    if (!(t || h) || S.current) return;
                    let e = (0, L.eT)({ fontId: l, effectId: n, colors: i }, r),
                        a = !0 !== u && e.fontId === j.vl;
                    async function p() {
                        var t;
                        if (
                            (a &&
                                (function () {
                                    let e = E.default.getCurrentUser()?.displayNameStyles ?? null;
                                    !(0, B.Jy)(e) &&
                                        R.h.dispatch({
                                            type: "HEXAGON_CAMPAIGN_PREVIOUS_PERK_VALUES_SAVED",
                                            previousPerkValues: { displayNameStyles: e },
                                        });
                                })(),
                            h)
                        ) {
                            S.current = !0;
                            try {
                                let t = await (0, P._L)({ displayNameStyles: e });
                                if (t?.ok !== !0) return void g?.();
                            } catch {
                                g?.();
                                return;
                            } finally {
                                S.current = !1;
                            }
                        } else u ? (0, J.EW)(e) : (0, W.p)({ guildId: c, displayNameStyles: e });
                        (x.default.track(V.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                            font_name: d.x[l],
                            effect_name: o.z[n],
                            colors: i,
                            entry_point: s,
                        }),
                            a &&
                                ((t = j.vB.DISPLAY_NAME_STYLE),
                                R.h.dispatch({ type: "HEXAGON_CAMPAIGN_PERK_APPLIED", perk: t })),
                            m?.());
                    }
                    if (!a || (0, B.Rd)(E.default.getCurrentUser(), j.vB.DISPLAY_NAME_STYLE)) return void (await p());
                    ((S.current = !0), N(!0));
                    let A = !1;
                    try {
                        var I;
                        A = await ((I = j.vB.DISPLAY_NAME_STYLE),
                        (0, B.Rd)(E.default.getCurrentUser(), I) ? Promise.resolve(!0) : (null == U && (U = K(I)), U));
                    } catch {
                        A = !1;
                    }
                    ((S.current = !1), N(!1), A) ? await p() : f?.();
                }, [t, s, l, n, i, r, m, f, c, u, h, g]),
                isApplying: p,
            };
        })({
            hasChanges: eT,
            entryPoint: er,
            selectedFontId: ed,
            selectedEffectId: eu,
            selectedColors: e_,
            defaultColor: eh.defaultColors[0],
            guildId: v,
            isTryItOut: C,
            onClose: y,
            shouldSaveWithoutPendingChanges: en,
            onSaveError: tI,
        }),
        eR = a.useCallback(() => (eT ? eP() : void y()), [eT, eP, y]),
        eO = a.useCallback(() => {
            (x.default.track(V.HAw.DISPLAY_NAME_STYLES_CLOSED), y());
        }, [y]),
        eF = a.useCallback(() => {
            let { fontId: e, effectId: t, colors: s } = (0, L.gN)(ek, eM);
            (ec(e),
                em(t),
                (0, L.as)(t) > 1 ? eA((e) => ({ ...e, [t]: s })) : eE((e) => ({ ...e, [t]: s[0] })),
                x.default.track(V.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME));
        }, [ek, eM, ec, em, eA, eE]),
        eB = a.useCallback(
            (e) => {
                ef
                    ? eA((t) => {
                          let s = t[eu];
                          return null != s && (0, u.v)(s, e) ? t : { ...t, [eu]: e };
                      })
                    : eE((t) => (t[eu] === e[0] ? t : { ...t, [eu]: e[0] }));
            },
            [ef, eu, eA, eE],
        );
    return null == O
        ? null
        : (0, l.jsx)(g.f5, {
              value: eC,
              children: (0, l.jsx)(A.l.Provider, {
                  value: tC,
                  children: (0, l.jsxs)(m.EO, {
                      "data-migration-pending": !0,
                      transitionState: s,
                      size: m.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: i()(tv.CR, { [tv.st]: eL }),
                      returnRef: D,
                      children: [
                          (0, l.jsx)(m.s_, { "data-migration-pending": !0, onClick: eO, className: tv.b }),
                          (0, l.jsxs)(m.$m, {
                              "data-migration-pending": !0,
                              className: i()(tv.jE, { [tv.st]: eL }),
                              style: { overflow: "hidden auto" },
                              scrollbarGutter: !1,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: tv.w1,
                                      children: [
                                          (0, l.jsx)(m.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: tv.bV,
                                              children: (0, l.jsx)(f.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: el.intl.string(es.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, l.jsx)(eV, {
                                              selectedFontId: ed,
                                              setSelectedFontId: ec,
                                              displayName: F,
                                              className: tv._,
                                          }),
                                          (0, l.jsx)(eU, {
                                              selectedEffectId: eu,
                                              setSelectedEffectId: em,
                                              className: tv._,
                                          }),
                                          (0, l.jsx)(
                                              ew,
                                              {
                                                  selectedColors: e_,
                                                  setSelectedColors: eB,
                                                  selectedEffectId: eu,
                                                  className: tv._,
                                                  defaultColor: eh.defaultColors[0],
                                              },
                                              eu,
                                          ),
                                      ],
                                  }),
                                  (0, l.jsx)(tf, {
                                      user: O,
                                      guild: Y,
                                      displayName: F,
                                      selectedFontId: ed,
                                      selectedEffectId: eu,
                                      selectedColors: eu === o.z.SOLID && (0, u.v)(e_, eh.defaultColors) ? [] : e_,
                                      isPremiumTryItOut: C,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(e8, {
                              onApply: en ? eR : eP,
                              onSurpriseMe: eF,
                              onClose: y,
                              canApply: eT || en,
                              analyticsLocations: eC,
                              isPremiumTryItOut: C,
                              banner: eb ? (0, l.jsx)(tE, { owner: w, displayNameStyles: ea }) : void 0,
                          }),
                      ],
                  }),
              }),
          });
}

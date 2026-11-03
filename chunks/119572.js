(s.r(t), s.d(t, { default: () => tx }));
var l = s(477900),
    a = s(582128),
    n = s(503698),
    i = s.n(n),
    r = s(131937),
    o = s(508425),
    d = s(559949),
    c = s(17928),
    u = s(52133),
    m = s(935462),
    f = s(534514),
    h = s(793574),
    g = s(688810),
    p = s(139286),
    N = s(919395),
    S = s(71393),
    E = s(287809),
    x = s(174459),
    A = s(871162),
    v = s(88858),
    I = s(750656),
    C = s(652329);
function y() {
    let { includeCampaignFonts: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, v.Lz)(C.vB.DISPLAY_NAME_STYLE, "font-order"),
        s = e && t !== C.S9.HIDDEN;
    return a.useMemo(() => (s ? [...I.rA, ...I.fY] : I.rA), [s]);
}
var _ = s(723694),
    j = s(898985),
    D = s(430571),
    b = s(631670),
    T = s(636537),
    k = s(73153),
    L = s(626584),
    P = s(927813),
    M = s(189916);
let w = new L.A("HexagonActionCreators"),
    R = 5 * P.A.Millis.SECOND;
async function O() {
    await T.Bo.post({ url: C.tK, rejectWithError: !0 });
}
let F = null;
async function B(e) {
    try {
        await O();
    } catch (e) {
        return (w.warn(`Failed to enroll in the Hexagon campaign: ${e}`), !1);
    }
    return (
        (await (function (e) {
            function t() {
                return (0, M.Rd)(E.default.getCurrentUser(), e);
            }
            return t()
                ? Promise.resolve(!0)
                : new Promise((e) => {
                      function s() {
                          t() && (clearTimeout(l), E.default.removeChangeListener(s), e(!0));
                      }
                      let l = setTimeout(() => {
                          (E.default.removeChangeListener(s), e(!1));
                      }, R);
                      E.default.addChangeListener(s);
                  });
        })(e)) || w.warn(`Timed out waiting for the Hexagon campaign ${e} perk to sync`),
        !0
    );
}
async function G(e) {
    try {
        return await B(e);
    } finally {
        F = null;
    }
}
var Y = s(207803),
    H = s(84540),
    U = s(652215),
    z = s(836602),
    K = s(696451),
    J = s(427262),
    W = s(403581),
    V = s(661531),
    X = s(48736),
    $ = s(317097),
    q = s(872859),
    Q = s(105292);
function Z(e, t) {
    return a.useMemo(
        () =>
            (t ?? (0, _.Fj)(e, null)).map((e, t) => {
                let { colors: s } = e;
                return {
                    colors: s,
                    a11yLabel: Q.intl.formatToPlainString(q.default.FHfTsV, {
                        number: t + 1,
                        hexList: s.map($.Hl).join(", "),
                    }),
                };
            }),
        [e, t],
    );
}
var ee = s(887129),
    et = s(837381),
    es = s(741918),
    el = s(265872),
    ea = s(866665),
    en = s(939249),
    ei = s(714385);
function er(e) {
    let t,
        s,
        l,
        { selectedColors: n, hasCustomPalette: i, hasCustomSwatchSelected: r } = e,
        o = a.useId(),
        d = i
            ? ((t = Math.min(...n.map((e) => (0, $.bJ)(e, 0)))),
              {
                  useDarkIcon: (l = 3 > Math.max(t, (s = Math.min(...n.map((e) => (0, $.bJ)(e, 0xffffff)))))) || t >= s,
                  needsBacking: l,
              })
            : null;
    return {
        customColorDescriptionId: o,
        customColorDescription: r
            ? Q.intl.formatToPlainString(Q.t["7BFCRR"], { color: n.map($.Hl).join(", ") })
            : void 0,
        iconContrast: d,
    };
}
var eo = s(559106),
    ed = s(236630);
function ec(e) {
    let { selected: t, onSelect: s, listItemId: a, "aria-label": n, fillStyle: r, children: o } = e,
        d = (0, et.rm)(a);
    return (0, l.jsx)(eo.vN, {
        offset: -2,
        children: (0, l.jsx)("button", {
            type: "button",
            className: i()(ed.nf, { [ed.wH]: t }),
            onClick: s,
            "aria-label": n,
            ...d,
            role: "option",
            "aria-selected": t,
            children: (0, l.jsx)("span", { className: ed.GS, style: r, children: o }),
        }),
    });
}
var eu = s(818168);
function em(e) {
    let { colors: t, selected: s, onSelect: a, listItemId: n, "aria-label": i } = e;
    return (0, l.jsx)(ec, {
        selected: s,
        onSelect: a,
        listItemId: n,
        "aria-label": i,
        children: t.map((e, t) => (0, l.jsx)("div", { className: eu._, style: { background: (0, $.Hl)(e) } }, t)),
    });
}
var ef = s(1986),
    eh = s(315710),
    eg = s(650583),
    ep = s(607570);
let eN = [0, 60, 120, 180, 240, 300, 360];
function eS(e) {
    let { value: t, onChange: s, hueToColor: n, onConfirm: r, "aria-label": o, className: d } = e,
        c = (0, _.xo)((0, $.tf)(t).h),
        u = a.useRef(null);
    (0, eh.tj)(u);
    let m = a.useCallback((e) => s(n((0, _.xo)(e))), [s, n]),
        f = a.useCallback((e) => m(e.h), [m]),
        h = a.useMemo(() => `linear-gradient(to right, ${eN.map((e) => (0, $.Hl)(n(e))).join(", ")})`, [n]),
        g = a.useMemo(
            () =>
                function (e) {
                    let { hsl: t } = e;
                    return (0, l.jsx)("div", { className: ep.Wn, style: { background: (0, $.Hl)(n(t.h)) } });
                },
            [n],
        ),
        p = a.useCallback(
            (e) => {
                switch (e.key) {
                    case eg.dh.ARROW_LEFT:
                    case eg.dh.ARROW_DOWN:
                        m(c - 5);
                        break;
                    case eg.dh.ARROW_RIGHT:
                    case eg.dh.ARROW_UP:
                        m(c + 5);
                        break;
                    case eg.dh.HOME:
                        m(0);
                        break;
                    case eg.dh.END:
                        m(359);
                        break;
                    case eg.dh.ENTER:
                    case eg.dh.SPACE:
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
        className: i()(ep.kL, d),
        children: (0, l.jsx)("div", {
            className: ep.SP,
            style: { "--custom-hue-track": h },
            role: "slider",
            tabIndex: 0,
            "aria-label": o,
            "aria-valuemin": 0,
            "aria-valuemax": 360,
            "aria-valuenow": Math.round(c),
            onKeyDown: p,
            children: (0, l.jsx)(ef.Hue, {
                hsl: { h: c, s: 1, l: 0.5 },
                direction: "horizontal",
                pointer: g,
                onChange: f,
            }),
        }),
    });
}
var eE = s(420080);
let ex = () => Promise.resolve();
function eA(e) {
    let { selectedColors: t, setSelectedColors: s, colorOptions: n, onCustomPalettePicked: r, className: d } = e,
        [c, m] = a.useState(!1),
        f = a.useRef(null),
        [h, g] = a.useState(U.TGz),
        p = a.useRef(null),
        N = a.useCallback(() => {
            (g(t.length > 0 ? (0, _.nO)(t) : U.TGz), m(!0));
        }, [t]),
        S = a.useCallback(
            (e) => {
                let t = (0, _.cf)(e);
                (g(e), (p.current = t), s(t, !0));
            },
            [s],
        ),
        E = a.useCallback(() => {
            let e = p.current;
            ((p.current = null), m(!1), null != e && r(e.slice()));
        }, [r]),
        x = Z(o.z.GUMMY, n),
        A = x.findIndex((e) => {
            let { colors: s } = e;
            return (0, u.v)(s, t);
        }),
        v = t.length > 0 && !(A >= 0),
        I = v && !c,
        C = Q.intl.string(Q.t["FHBa/1"]),
        {
            customColorDescriptionId: y,
            customColorDescription: j,
            iconContrast: D,
        } = er({ selectedColors: t, hasCustomPalette: v, hasCustomSwatchSelected: I }),
        b = (0, ee.Ay)({
            id: "gummy-color-picker",
            isEnabled: !0,
            orientation: es.Gl.HORIZONTAL,
            scrollToStart: ex,
            scrollToEnd: ex,
        });
    return (0, l.jsx)(et.hD, {
        navigator: b,
        children: (0, l.jsx)(et.PR, {
            children: (e) => {
                let { ref: a, ...n } = e;
                return (0, l.jsxs)("div", {
                    className: i()(eE.kL, d),
                    ref: a,
                    ...n,
                    role: "listbox",
                    "aria-label": Q.intl.string(Q.t.WTqQ5e),
                    children: [
                        (0, l.jsxs)("div", {
                            className: i()(ed.nf, eE.Ix, { [ed.wH]: I }),
                            children: [
                                (0, l.jsx)("div", {
                                    className: i()(eE.yB, { [eE.EI]: !v }),
                                    children:
                                        v &&
                                        t.map((e, t) =>
                                            (0, l.jsx)(
                                                "div",
                                                { className: eE._4, style: { background: (0, $.Hl)(e) } },
                                                t,
                                            ),
                                        ),
                                }),
                                (0, l.jsx)("div", {
                                    className: eE.fX,
                                    children: (0, l.jsx)(el.Y, {
                                        targetElementRef: f,
                                        position: "top",
                                        align: "left",
                                        shouldShow: c,
                                        onRequestOpen: N,
                                        onRequestClose: E,
                                        renderPopout: () =>
                                            (0, l.jsx)(eS, {
                                                value: h,
                                                onChange: S,
                                                hueToColor: _.UZ,
                                                onConfirm: E,
                                                "aria-label": C,
                                            }),
                                        children: (e) =>
                                            (0, l.jsx)(ea.m, {
                                                text: C,
                                                position: "top",
                                                ariaHidden: !0,
                                                children: (0, l.jsx)("div", {
                                                    ...e,
                                                    ref: f,
                                                    className: eE.r9,
                                                    children: (0, l.jsx)(et.tG, {
                                                        id: "custom",
                                                        children: (e) =>
                                                            (0, l.jsx)(en.D, {
                                                                ...e,
                                                                className: eE.Vz,
                                                                "aria-label": C,
                                                                "aria-describedby": null != j ? y : void 0,
                                                                role: "option",
                                                                "aria-selected": I,
                                                                children: (0, l.jsx)(ei.d, {
                                                                    size: "custom",
                                                                    width: 14,
                                                                    height: 14,
                                                                    color: "currentColor",
                                                                    className: i()(eE.IZ, {
                                                                        [ed.eQ]: D?.useDarkIcon === !0,
                                                                        [ed.mT]: D?.useDarkIcon === !1,
                                                                        [eE.N]: D?.needsBacking,
                                                                    }),
                                                                }),
                                                            }),
                                                    }),
                                                }),
                                            }),
                                    }),
                                }),
                                null != j && (0, l.jsx)("span", { id: y, hidden: !0, children: j }),
                            ],
                        }),
                        x.map((e, t) => {
                            let { colors: a, a11yLabel: n } = e;
                            return (0, l.jsx)(
                                em,
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
var ev = s(508274),
    eI = s(300158);
let eC = () => Promise.resolve(),
    ey = a.memo(function (e) {
        let { color: t, isSelected: s, onSelect: n, listItemId: i, "aria-label": r } = e,
            o = a.useCallback(() => n(t), [n, t]);
        return (0, l.jsx)(ec, {
            selected: s,
            onSelect: o,
            listItemId: i,
            "aria-label": r,
            fillStyle: { backgroundColor: (0, $.Hl)(t) },
        });
    });
function e_(e) {
    let { value: t, isCustomColor: s, onChange: n, onCustomColorPicked: r } = e,
        [o, d] = a.useState(!1),
        c = s && !o,
        u = a.useRef(null),
        m = a.useRef(null),
        f = Q.intl.string(Q.t["FHBa/1"]),
        {
            customColorDescriptionId: h,
            customColorDescription: g,
            iconContrast: p,
        } = er({ selectedColors: null != t ? [t] : [], hasCustomPalette: s, hasCustomSwatchSelected: c }),
        N = a.useCallback(
            (e) => {
                ((m.current = e), n(e));
            },
            [n],
        ),
        S = a.useCallback(() => {
            let e = m.current;
            ((m.current = null), d(!1), null != e && r(e));
        }, [r]);
    return (0, l.jsx)(el.Y, {
        targetElementRef: u,
        position: "top",
        align: "left",
        shouldShow: o,
        onRequestOpen: () => d(!0),
        onRequestClose: S,
        renderPopout: () => (0, l.jsx)(ev.VN, { onChange: N, value: t, eagerUpdate: !0 }),
        children: (e) =>
            (0, l.jsx)(ea.m, {
                text: f,
                position: "top",
                ariaHidden: !0,
                children: (0, l.jsxs)("div", {
                    ...e,
                    ref: u,
                    className: i()(ed.nf, eI.OF, { [ed.wH]: c }),
                    style: s && null != t ? { backgroundColor: (0, $.Hl)(t) } : void 0,
                    children: [
                        (0, l.jsx)(et.tG, {
                            id: "custom",
                            children: (e) =>
                                (0, l.jsx)(en.D, {
                                    ...e,
                                    className: eI.Kd,
                                    "aria-label": f,
                                    "aria-describedby": null != g ? h : void 0,
                                    role: "option",
                                    "aria-selected": c,
                                    children: (0, l.jsx)(ei.d, {
                                        className: i()(eI.EY, {
                                            [ed.eQ]: p?.useDarkIcon === !0,
                                            [ed.mT]: p?.useDarkIcon === !1,
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
function ej(e) {
    let {
            selectedColor: t,
            setSelectedColor: s,
            colorOptions: n,
            onCustomColorPicked: r,
            defaultColor: o,
            selectedEffectId: d,
            className: c,
        } = e,
        u = Z(d, n),
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
    let p = (0, ee.Ay)({
        id: "display-name-styles-solid-color-picker",
        isEnabled: !0,
        orientation: es.Gl.HORIZONTAL,
        scrollToStart: eC,
        scrollToEnd: eC,
    });
    return (0, l.jsx)(et.hD, {
        navigator: p,
        children: (0, l.jsx)(et.PR, {
            children: (e) => {
                let { ref: s, ...a } = e;
                return (0, l.jsxs)("div", {
                    className: i()(eI.kL, c),
                    ref: s,
                    ...a,
                    role: "listbox",
                    "aria-label": Q.intl.string(q.default.JOpi7z),
                    children: [
                        (0, l.jsx)(e_, { value: t, isCustomColor: h, onChange: f, onCustomColorPicked: r }),
                        (0, l.jsx)(ey, {
                            color: o,
                            isSelected: t === o,
                            onSelect: m,
                            listItemId: "default",
                            "aria-label": Q.intl.string(Q.t.bBvAEH),
                        }),
                        u.map(g),
                    ],
                });
            },
        }),
    });
}
var eD = s(143660),
    eb = s(676518);
function eT(e) {
    var t;
    let s,
        { selectedColors: n, setSelectedColors: r, defaultColor: d, selectedEffectId: c, className: m } = e,
        h = (0, _.as)(c),
        g = (0, a.useMemo)(() => (0, I.ii)(c).map((e) => ({ colors: e, isCustom: !1 })), [c]),
        p =
            ((t = Z(c, g)),
            a.useMemo(
                () =>
                    t.map((e) => {
                        let { colors: t, a11yLabel: s } = e;
                        return { colors: t, name: s };
                    }),
                [t],
            )),
        N =
            ((s = a.useRef(null)),
            a.useCallback(
                (e) => {
                    (null != s.current && (0, u.v)(s.current, e)) ||
                        ((s.current = e.slice()),
                        x.default.track(U.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
                            default: 1 === e.length && e[0] === d,
                            colors: e,
                        }));
                },
                [d],
            )),
        S = (0, a.useCallback)(
            (e, t) => {
                (r([e]), !0 !== t && N([e]));
            },
            [r, N],
        ),
        E = (0, a.useCallback)(
            (e, t) => {
                (r(e), !0 !== t && N(e));
            },
            [r, N],
        ),
        A = (0, a.useCallback)(
            (e) => {
                N([e]);
            },
            [N],
        );
    return (0, l.jsxs)("div", {
        className: i()(eD.EE, m),
        children: [
            (0, l.jsxs)(f.D, {
                variant: "heading-sm/semibold",
                className: eb.sU,
                children: [
                    Q.intl.string(q.default.JOpi7z),
                    (0, l.jsx)(W.t, { size: "xs", color: V.A.colors.TEXT_DEFAULT }),
                ],
            }),
            c === o.z.GUMMY
                ? (0, l.jsx)(eA, { selectedColors: n, setSelectedColors: E, colorOptions: g, onCustomPalettePicked: N })
                : h > 1
                  ? (0, l.jsx)(X.default, {
                        className: eD.kM,
                        gradientButtonClassName: eD.dy,
                        gradientSwatchClassName: eD.u_,
                        gradientPickerVariant: X.GradientPickerVariants.SQUARE,
                        shouldRenderSingleRow: !0,
                        swatchClassName: eD.Ay,
                        defaultColor: d,
                        colors: p,
                        value: n[0],
                        gradientColors: n,
                        onChange: S,
                        onChangeGradientColors: E,
                        isGradient: !0,
                        gradientWidth: c === o.z.PRISM ? "231px" : "calc(3 * var(--space-40) + 2 * var(--space-8))",
                        gradientDegrees: 90,
                        allowBlackCustomColor: !0,
                        customPickerPosition: "top",
                        onCustomPalettePicked: N,
                    })
                  : (0, l.jsx)(ej, {
                        className: eD.Ei,
                        selectedColor: n[0],
                        setSelectedColor: S,
                        colorOptions: g,
                        onCustomColorPicked: A,
                        defaultColor: d,
                        selectedEffectId: c,
                    }),
        ],
    });
}
let ek = { seenFontIds: new Set(), seenEffectIds: new Set(), newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 };
class eL extends c.Ay.PersistedStore {
    static displayName = "DisplayNameStylesSeenStore";
    static persistKey = "DisplayNameStylesSeenStore";
    static migrations = [(e) => ({ ...e, newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 })];
    initialize(e) {
        ek = {
            seenFontIds: new Set(e?.seenFontIds ?? []),
            seenEffectIds: new Set(e?.seenEffectIds ?? []),
            newFontsBadgeDismissed: e?.newFontsBadgeDismissed ?? !1,
            newEffectsBadgeDismissed: e?.newEffectsBadgeDismissed ?? !1,
        };
    }
    getState() {
        return {
            seenFontIds: Array.from(ek.seenFontIds),
            seenEffectIds: Array.from(ek.seenEffectIds),
            newFontsBadgeDismissed: ek.newFontsBadgeDismissed,
            newEffectsBadgeDismissed: ek.newEffectsBadgeDismissed,
        };
    }
    getSeenFonts() {
        return ek.seenFontIds;
    }
    getSeenEffects() {
        return ek.seenEffectIds;
    }
    getNewFontsBadgeDismissed() {
        return ek.newFontsBadgeDismissed;
    }
    getNewEffectsBadgeDismissed() {
        return ek.newEffectsBadgeDismissed;
    }
}
let eP = new eL(k.h, {
    DISPLAY_NAME_STYLES_MARK_FONT_SEEN: function (e) {
        let { fontId: t } = e;
        if (ek.seenFontIds.has(t)) return !1;
        ek = { ...ek, seenFontIds: new Set([...ek.seenFontIds, t]) };
    },
    DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN: function (e) {
        let { effectId: t } = e;
        if (ek.seenEffectIds.has(t)) return !1;
        ek = { ...ek, seenEffectIds: new Set([...ek.seenEffectIds, t]) };
    },
    DISPLAY_NAME_STYLES_MARK_NEW_FONTS_BADGE_DISMISSED: function () {
        if (ek.newFontsBadgeDismissed) return !1;
        ek = { ...ek, newFontsBadgeDismissed: !0 };
    },
    DISPLAY_NAME_STYLES_MARK_NEW_EFFECTS_BADGE_DISMISSED: function () {
        if (ek.newEffectsBadgeDismissed) return !1;
        ek = { ...ek, newEffectsBadgeDismissed: !0 };
    },
});
var eM = s(922301),
    ew = s(660184),
    eR = s(742191);
function eO(e) {
    let { effectId: t, selected: s, showNewDot: a, onClick: n } = e,
        r = (0, j._)(t);
    return (0, l.jsxs)(en.D, {
        className: i()(eR.Tw, eR.uT, { [eR.wH]: s }),
        onClick: n,
        children: [
            (0, l.jsx)(ew.A, {
                userName: r.name,
                effectDisplayType: eM.G.ANIMATED,
                displayNameStyles: r.previewStyles,
                textClassName: eR.tr,
                loop: !0,
                inProfile: !0,
            }),
            a && (0, l.jsx)("div", { className: eb.s1, "aria-hidden": !0 }),
        ],
    });
}
let eF = a.memo(function (e) {
    var t;
    let s,
        { selectedEffectId: n, setSelectedEffectId: r, className: o } = e,
        { dotEffectIds: d, dismissEffectDot: u } =
            ((t = I.re),
            (s = (0, c.bG)([eP], () => eP.getSeenEffects())),
            {
                dotEffectIds: a.useMemo(() => new Set(t.filter((e) => I.gz.includes(e) && !s.has(e))), [t, s]),
                dismissEffectDot: a.useCallback((e) => {
                    k.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN", effectId: e });
                }, []),
            }),
        m = Math.ceil(I.re.length / 2);
    return (0, l.jsxs)("div", {
        className: o,
        children: [
            (0, l.jsxs)(f.D, {
                variant: "heading-sm/semibold",
                className: eb.sU,
                children: [
                    Q.intl.string(q.default["1wilM1"]),
                    (0, l.jsx)(W.t, { size: "xs", color: V.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)("div", {
                className: i()(eb.fh, eR.KS),
                style: { "--custom-dns-tile-columns": m },
                children: I.re.map((e) => {
                    let t = d.has(e);
                    return (0, l.jsx)(
                        eO,
                        {
                            effectId: e,
                            selected: e === n,
                            showNewDot: t,
                            onClick: () => {
                                (r(e), t && u(e));
                            },
                        },
                        e,
                    );
                }),
            }),
        ],
    });
});
var eB = s(834730),
    eG = s(885574),
    eY = s(73392),
    eH = s(599715);
let eU = a.memo(function (e) {
    let t,
        { selectedFontId: s, setSelectedFontId: n, displayName: r, className: o } = e,
        u = y(),
        { dotFontIds: m, dismissFontDot: h } =
            ((t = (0, c.bG)([eP], () => eP.getSeenFonts())),
            {
                dotFontIds: a.useMemo(() => new Set(u.filter((e) => I._k.includes(e) && !t.has(e))), [u, t]),
                dismissFontDot: a.useCallback((e) => {
                    k.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_FONT_SEEN", fontId: e });
                }, []),
            }),
        g = s !== d.x.DEFAULT,
        p = (0, _.Xr)(r),
        N = Math.ceil(u.length / 3);
    return (0, l.jsxs)("div", {
        className: o,
        children: [
            (0, l.jsxs)(f.D, {
                variant: "heading-sm/semibold",
                className: eb.sU,
                children: [
                    Q.intl.string(q.default.nP0ngb),
                    (0, l.jsx)(W.t, { size: "xs", color: V.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: i()(eb.fh, eH.qW),
                style: { "--custom-dns-tile-columns": N },
                children: [
                    u.map((e) => {
                        let t = (0, eY.p)(e),
                            a = e === s,
                            r = m.has(e),
                            o = Q.intl.string(t.name);
                        return (0, l.jsx)(
                            ea.m,
                            {
                                text: o,
                                asContainer: !0,
                                children: (0, l.jsxs)(en.D, {
                                    className: i()(eH.SO, eH.j4, { [eH.wH]: a }),
                                    onClick: () => {
                                        (n(e), r && h(e));
                                    },
                                    "aria-label": o,
                                    children: [
                                        (0, l.jsx)(eB.E, {
                                            variant: "body-lg/semibold",
                                            color: a ? "text-strong" : "text-default",
                                            className: i()(eH.FH, t.className),
                                            children: "Gg",
                                        }),
                                        r && (0, l.jsx)("div", { className: eb.s1, "aria-hidden": !0 }),
                                    ],
                                }),
                            },
                            e,
                        );
                    }),
                    g &&
                        p &&
                        (0, l.jsxs)("div", {
                            className: eH.Lb,
                            children: [
                                (0, l.jsx)(eG.CircleInformationIcon, { size: "lg" }),
                                (0, l.jsx)(eB.E, {
                                    variant: "body-sm/normal",
                                    color: "text-subtle",
                                    children: Q.intl.string(q.default["+O1xL2"]),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
});
var ez = s(821609),
    eK = s(908803),
    eJ = s(87719),
    eW = s(465794),
    eV = s(757036),
    eX = s(202541),
    e$ = s(7212);
function eq(e) {
    let { onApply: t, onSurpriseMe: s, onClose: a, canApply: n, isPremiumTryItOut: i = !1, banner: r } = e,
        o = (0, eV.L)(eX.PremiumTypes.TIER_2),
        d = (0, l.jsx)(ez.$, {
            variant: "secondary",
            size: "md",
            onClick: s,
            icon: { type: "rive", asset: eK.m, riveProps: { dataBinding: { fill: V.A.colors.ICON_STRONG } } },
            text: Q.intl.string(q.default.NOGFds),
        }),
        c = (0, l.jsxs)("div", {
            className: e$.k0,
            children: [
                d,
                (0, l.jsx)(ea.m, {
                    text: Q.intl.string(q.default.cVTpnj),
                    shouldShow: !n,
                    children: (0, l.jsx)(ez.$, {
                        onClick: t,
                        disabled: !n,
                        text: Q.intl.string(Q.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        u = null != r ? (0, l.jsxs)("div", { className: e$.f4, children: [r, c] }) : c,
        f = (0, l.jsxs)("div", {
            className: e$.UD,
            children: [
                d,
                (0, l.jsx)(eW.A, {
                    premiumModalAnalyticsLocation: {
                        section: U.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                        object: U.ZSU.PREMIUM_UPSELL_BUTTON,
                    },
                    subscriptionTier: eX.pe.TIER_2,
                }),
            ],
        }),
        h = (0, l.jsxs)("div", {
            className: e$.UX,
            children: [
                (0, l.jsxs)("div", {
                    className: e$.iQ,
                    children: [
                        (0, l.jsx)(ea.m, {
                            text: Q.intl.string(Q.t["5AFxuK"]),
                            children: (0, l.jsx)(W.t, { size: "md", color: V.A.colors.ICON_STRONG }),
                        }),
                        (0, l.jsx)(eB.E, {
                            variant: "body-md/medium",
                            color: "text-default",
                            className: e$.h_,
                            children: Q.intl.format(q.default.PWf0xS, {
                                onClickNitro: () => {
                                    (x.default.track(U.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, eJ.x)(a));
                                },
                            }),
                        }),
                    ],
                }),
                f,
            ],
        }),
        g = (0, l.jsxs)("div", { className: e$.UX, children: [r, f] }),
        p = null != r ? g : h;
    return (0, l.jsx)(m.jl, { "data-migration-pending": !0, className: e$.qr, children: i || o ? u : p });
}
var eQ = s(366010),
    eZ = s(43990),
    e0 = s(629584),
    e1 = s(943255),
    e8 = s(575181),
    e5 = s(736653),
    e3 = s(780898),
    e9 = s(344346),
    e2 = s(320095),
    e6 = s(963852),
    e7 = s(763754),
    e4 = s(20851),
    te = s(986687),
    tt = s(101058),
    ts = s(999291),
    tl = s(686189),
    ta = s(946356),
    tn = s(975571),
    ti = s(996988),
    tr = s(228839);
function to(e) {
    let {
            user: t,
            guild: s,
            displayName: n,
            selectedFontId: r,
            selectedEffectId: o,
            selectedColors: d,
            isPremiumTryItOut: u = !1,
        } = e,
        m = (0, e5.Ay)(),
        f = (0, eQ.M)(m),
        [h, g] = (0, a.useState)(f),
        p = (0, ts.Ay)(t.id, null),
        { pendingChanges: S, tryItOutChanges: E } = (0, c.cf)([z.A], () => ({
            pendingChanges: z.A.getPendingChanges(s?.id),
            tryItOutChanges: z.A.getTryItOutChanges(),
        })),
        {
            pendingAvatar: A,
            pendingAvatarDecoration: v,
            pendingPrimaryGuildId: I,
            pendingBanner: C,
            pendingThemeColors: y,
            pendingNickname: _,
            pendingPronouns: j,
            pendingProfileEffect: D,
            pendingProfileFrame: b,
            pendingAccentColor: T,
            pendingBio: k,
            pendingLegacyUsernameDisabled: L,
        } = S,
        P = null == s ? n : void 0,
        M = u ? E.tryItOutAvatar : A,
        w = (0, tt.V7)({ userId: t.id, image: M }),
        R = u ? void 0 : v,
        O = u ? E.tryItOutBanner : C,
        F = u ? E.tryItOutThemeColors : y,
        { bannerSrc: B } = (0, tl.A)({ displayProfile: p, size: 413, canAnimate: !1, pendingBanner: O }),
        { userNameplate: G, guildNameplate: Y, pendingNameplate: H } = (0, N.rv)(t, s?.id),
        K = (0, e3.WK)(Y);
    h && !f ? (m = U.NJ8.DARK) : !h && f && (m = U.NJ8.LIGHT);
    let J = (0, a.useCallback)((e) => {
            (g(e === U.NJ8.DARK), x.default.track(U.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === U.NJ8.DARK }));
        }, []),
        W = (0, a.useMemo)(
            () => ({ ...(0, e7.FT)(t, null), nick: n, displayNameStyles: { fontId: r, effectId: o, colors: d } }),
            [t, r, o, d, n],
        );
    return (0, l.jsxs)("div", {
        className: tr._l,
        children: [
            null != B &&
                (0, l.jsx)(ta.A, {
                    user: t,
                    displayProfile: p,
                    themeType: ti.d.MODAL_V2,
                    className: tr.LX,
                    pendingThemeColors: F,
                    forceUserTheme: !0,
                    children: (0, l.jsx)("div", { className: tr.b8, style: { backgroundImage: `url(${B})` } }),
                }),
            (0, l.jsx)(eZ.N, {
                theme: m,
                children: (e) =>
                    (0, l.jsxs)("div", {
                        className: i()(tr.cq, e),
                        inert: !0,
                        children: [
                            (0, l.jsx)(te.A, {
                                user: t,
                                guild: s,
                                pendingGlobalName: P,
                                pendingNickname: _,
                                pendingPronouns: j,
                                pendingAvatar: w,
                                pendingAvatarDecoration: R,
                                pendingPrimaryGuildId: I,
                                pendingBanner: O,
                                pendingThemeColors: F,
                                pendingAccentColor: T,
                                pendingBio: k,
                                pendingProfileEffect: D,
                                pendingProfileFrame: b,
                                pendingLegacyUsernameDisabled: L,
                                pendingDisplayNameStyles: W.displayNameStyles,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: tr.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                                hideProfileFrame: !0,
                            }),
                            (0, l.jsx)(e4.A, {
                                author: W,
                                message: (0, e2.rh)({
                                    ...(0, e6.Ay)({ channelId: "1337", content: Q.intl.string(q.default.h5Cuej) }),
                                    state: U.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: tr.OT,
                                previewGuildId: s?.id,
                                avatarDecorationOverride: R,
                                avatarOverride: w,
                            }),
                            (0, l.jsx)(e9.A, {
                                user: t,
                                guildId: s?.id,
                                nameplate: H,
                                nameplateData: null == H ? (K ?? G) : void 0,
                                pendingGlobalName: P,
                                pendingNickname: _,
                                pendingAvatarDecoration: R,
                                pendingPrimaryGuildId: I,
                                pendingDisplayNameStyles: W.displayNameStyles,
                                pendingAvatar: M,
                                isHighlighted: !0,
                                className: tr.qF,
                            }),
                        ],
                    }),
            }),
            (0, l.jsxs)("div", {
                className: tr.dI,
                children: [
                    (0, l.jsx)(eB.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        children: Q.intl.format(q.default.prQba8, {
                            helpArticleLink: tn.A.getArticleURL(U.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, l.jsx)(td, { darkPreview: h, onToggleTheme: J }),
                ],
            }),
        ],
    });
}
function td(e) {
    let { darkPreview: t, onToggleTheme: s } = e,
        a = t ? U.NJ8.DARK : U.NJ8.LIGHT;
    return (0, l.jsx)(e0.I, {
        className: tr.xr,
        optionClassName: tr.$C,
        options: [
            {
                name: "",
                tooltip: Q.intl.string(Q.t.b8Cei3),
                value: U.NJ8.DARK,
                icon: e1.Z,
                className: a === U.NJ8.DARK ? tr.iB : void 0,
            },
            {
                name: "",
                tooltip: Q.intl.string(Q.t.K2sFfo),
                value: U.NJ8.LIGHT,
                icon: e8.F,
                className: a === U.NJ8.LIGHT ? tr.iB : void 0,
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
var tc = s(97808),
    tu = s(778712),
    tm = s(913563),
    tf = s(497082);
function th(e) {
    let { owner: t, displayNameStyles: s } = e,
        a = Q.intl.string((0, tm.A)(s.fontId)),
        { name: n } = (0, j._)(s.effectId),
        i = t.globalName ?? t.username;
    return (0, l.jsxs)("div", {
        className: tf.v,
        children: [
            (0, l.jsx)(tc.eu, { size: tu._3.SIZE_32, src: t.getAvatarURL(void 0, 32), "aria-hidden": !0 }),
            (0, l.jsxs)("div", {
                className: tf.C,
                children: [
                    (0, l.jsx)(eB.E, {
                        variant: "body-md/medium",
                        color: "text-default",
                        children: Q.intl.format(q.default.gYzaCr, {
                            displayNameHook: () =>
                                (0, l.jsx)(ew.A, {
                                    userName: i,
                                    displayNameStyles: s,
                                    effectDisplayType: eM.G.ANIMATED,
                                    loop: !0,
                                }),
                        }),
                    }),
                    (0, l.jsx)(eB.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        children: Q.intl.format(q.default.DC7gJB, { fontName: a, effectName: n }),
                    }),
                ],
            }),
        ],
    });
}
var tg = s(858899),
    tp = s(765178);
function tN() {
    let e = Q.intl.string(Q.t.iufib1);
    ((0, tg.P0)({ text: e, variant: "critical" }), tp.O.announce(e));
}
var tS = s(226451);
let tE = { overrideSettings: !0 };
function tx(e) {
    let t,
        {
            transitionState: s,
            analyticsLocations: n,
            guildId: v,
            isPremiumTryItOut: T = !1,
            onClose: L,
            returnRef: P,
            tryOnDisplayNameStyles: w,
            tryOnStyleOwner: R,
        } = e,
        O = (0, c.bG)([E.default], () => E.default.getCurrentUser()),
        B =
            ((t = J.Ay.useName(O)),
            (0, c.bG)(
                [z.A, K.Ay],
                () => {
                    let e = z.A.getPendingChanges(v);
                    if (null == v) return e.pendingGlobalName;
                    let { pendingNickname: t } = e;
                    return "" === t ? null : (t ?? K.Ay.getNick(v, O?.id));
                },
                [v, O],
            ) ??
                t ??
                ""),
        W = (0, c.bG)([S.A], () => S.A.getGuild(v)),
        {
            userDisplayNameStyles: V,
            guildDisplayNameStyles: X,
            pendingDisplayNameStyles: $,
            tryItOutDisplayNameStyles: Z,
        } = (0, N.B0)(O, v),
        ee = T ? Z : $,
        et = void 0 !== ee ? ee : (X ?? V),
        es = (0, D.A)(),
        el = a.useMemo(() => (0, _.A5)(w, es), [w, es]),
        ea = null != el,
        en = el ?? et,
        ei = ea ? "try_this_style" : "profile_editor",
        er = a.useMemo(() => (0, _.A5)(V, es), [V, es]),
        [eo, ed] = a.useState(en?.fontId ?? d.x.DEFAULT),
        [ec, eu] = a.useState(en?.effectId ?? o.z.SOLID),
        em = (0, _.as)(ec) > 1,
        ef = (0, j._)(ec),
        eh = en?.colors ?? [],
        eg = eh.length > 0 && !em,
        ep = eh.length > 0 && em,
        [eN, eS] = a.useState(() => (eg ? { [ec]: eh[0] } : {})),
        [eE, ex] = a.useState(() => (ep ? { [ec]: eh } : {})),
        eA = a.useMemo(() => eE[ec] ?? es[ec], [eE, ec, es]),
        ev = eN[ec] ?? es[ec][0];
    (0, p.A)(
        {
            type: r.ImpressionTypes.POPOUT,
            name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL,
            properties: { entry_point: ei },
        },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: eI } = (0, g.Ay)(n, h.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        eC = a.useMemo(() => (em ? eA : [ev]), [em, eA, ev]),
        ey = a.useMemo(() => ({ fontId: eo, effectId: ec, colors: eC }), [eo, ec, eC]),
        e_ = a.useMemo(
            () => eo !== et?.fontId || ec !== et?.effectId || !(0, u.v)(eC, et?.colors ?? []),
            [eo, ec, eC, et],
        ),
        ej = a.useMemo(() => !(0, _.kv)(ey, er), [ey, er]),
        eD = ea ? ej : e_,
        eb = ea && (0, _.kv)(ey, el) && null != R && null != el,
        ek = y(),
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
                p = a.useRef(!1),
                [N, S] = a.useState(!1);
            return {
                handleApply: a.useCallback(async () => {
                    if (!(t || h) || p.current) return;
                    let e = (0, _.eT)({ fontId: l, effectId: n, colors: i }, r),
                        a = !0 !== u && e.fontId === C.vl;
                    async function N() {
                        var t;
                        if (
                            (a &&
                                (function () {
                                    let e = E.default.getCurrentUser()?.displayNameStyles ?? null;
                                    !(0, M.Jy)(e) &&
                                        k.h.dispatch({
                                            type: "HEXAGON_CAMPAIGN_PREVIOUS_PERK_VALUES_SAVED",
                                            previousPerkValues: { displayNameStyles: e },
                                        });
                                })(),
                            h)
                        ) {
                            p.current = !0;
                            try {
                                let t = await (0, b._L)({ displayNameStyles: e });
                                if (t?.ok !== !0) return void g?.();
                            } catch {
                                g?.();
                                return;
                            } finally {
                                p.current = !1;
                            }
                        } else u ? (0, Y.EW)(e) : (0, H.p)({ guildId: c, displayNameStyles: e });
                        (x.default.track(U.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                            font_name: d.x[l],
                            effect_name: o.z[n],
                            colors: i,
                            entry_point: s,
                        }),
                            a &&
                                ((t = C.vB.DISPLAY_NAME_STYLE),
                                k.h.dispatch({ type: "HEXAGON_CAMPAIGN_PERK_APPLIED", perk: t })),
                            m?.());
                    }
                    if (!a || (0, M.Rd)(E.default.getCurrentUser(), C.vB.DISPLAY_NAME_STYLE)) return void (await N());
                    ((p.current = !0), S(!0));
                    let A = !1;
                    try {
                        var v;
                        A = await ((v = C.vB.DISPLAY_NAME_STYLE),
                        (0, M.Rd)(E.default.getCurrentUser(), v) ? Promise.resolve(!0) : (null == F && (F = G(v)), F));
                    } catch {
                        A = !1;
                    }
                    ((p.current = !1), S(!1), A) ? await N() : f?.();
                }, [t, s, l, n, i, r, m, f, c, u, h, g]),
                isApplying: N,
            };
        })({
            hasChanges: eD,
            entryPoint: ei,
            selectedFontId: eo,
            selectedEffectId: ec,
            selectedColors: eC,
            defaultColor: ef.defaultColors[0],
            guildId: v,
            isTryItOut: T,
            onClose: L,
            shouldSaveWithoutPendingChanges: ea,
            onSaveError: tN,
        }),
        eP = a.useCallback(() => (eD ? eL() : void L()), [eD, eL, L]),
        eM = a.useCallback(() => {
            (x.default.track(U.HAw.DISPLAY_NAME_STYLES_CLOSED), L());
        }, [L]),
        ew = a.useCallback(() => {
            let { fontId: e, effectId: t, colors: s } = (0, _.gN)(ek, I.re);
            (ed(e),
                eu(t),
                (0, _.as)(t) > 1 ? ex((e) => ({ ...e, [t]: s })) : eS((e) => ({ ...e, [t]: s[0] })),
                x.default.track(U.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME));
        }, [ek, ed, eu, ex, eS]),
        eR = a.useCallback(
            (e) => {
                em
                    ? ex((t) => {
                          let s = t[ec];
                          return null != s && (0, u.v)(s, e) ? t : { ...t, [ec]: e };
                      })
                    : eS((t) => (t[ec] === e[0] ? t : { ...t, [ec]: e[0] }));
            },
            [em, ec, ex, eS],
        );
    return null == O
        ? null
        : (0, l.jsx)(g.f5, {
              value: eI,
              children: (0, l.jsx)(A.l.Provider, {
                  value: tE,
                  children: (0, l.jsxs)(m.EO, {
                      "data-migration-pending": !0,
                      transitionState: s,
                      size: m.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: i()(tS.CR, tS.st),
                      returnRef: P,
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
                                                  children: Q.intl.string(q.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, l.jsx)(eU, {
                                              selectedFontId: eo,
                                              setSelectedFontId: ed,
                                              displayName: B,
                                              className: tS._,
                                          }),
                                          (0, l.jsx)(eF, {
                                              selectedEffectId: ec,
                                              setSelectedEffectId: eu,
                                              className: tS._,
                                          }),
                                          (0, l.jsx)(
                                              eT,
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
                                  (0, l.jsx)(to, {
                                      user: O,
                                      guild: W,
                                      displayName: B,
                                      selectedFontId: eo,
                                      selectedEffectId: ec,
                                      selectedColors: ec === o.z.SOLID && (0, u.v)(eC, ef.defaultColors) ? [] : eC,
                                      isPremiumTryItOut: T,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(eq, {
                              onApply: ea ? eP : eL,
                              onSurpriseMe: ew,
                              onClose: L,
                              canApply: eD || ea,
                              analyticsLocations: eI,
                              isPremiumTryItOut: T,
                              banner: eb ? (0, l.jsx)(th, { owner: R, displayNameStyles: el }) : void 0,
                          }),
                      ],
                  }),
              }),
          });
}

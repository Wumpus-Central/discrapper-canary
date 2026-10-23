(s.r(t), s.d(t, { default: () => t_ }));
var a = s(477900),
    n = s(582128),
    l = s(503698),
    i = s.n(l),
    r = s(562708),
    o = s(508425),
    d = s(559949),
    c = s(17928),
    u = s(52133),
    m = s(935462),
    f = s(297264),
    h = s(793574),
    g = s(688810),
    E = s(139286),
    N = s(919395),
    S = s(71393),
    x = s(287809),
    p = s(174459),
    A = s(871162),
    I = s(248778),
    v = s(750656);
let _ = [...v.re, ...v.gz];
function y() {
    let e = (0, I.u)("effect-order");
    return n.useMemo(() => (e ? _ : v.re), [e]);
}
var j = s(88858),
    C = s(652329);
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
    L = [...D, ...v._k];
function T() {
    let { includeCampaignFonts: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, I.u)("font-order"),
        s = (0, j.Lz)(C.vB.DISPLAY_NAME_STYLE, "font-order"),
        a = e && s !== C.S9.HIDDEN;
    return n.useMemo(() => {
        let e = t ? L : D;
        return a ? [...e, ...v.fY] : e;
    }, [t, a]);
}
var b = s(945096),
    M = s(898985),
    P = s(430571),
    w = s(631670),
    k = s(636537),
    O = s(73153),
    R = s(626584),
    F = s(927813),
    Y = s(189916);
let B = new R.A("HexagonActionCreators"),
    G = 5 * F.A.Millis.SECOND;
async function H() {
    await k.Bo.post({ url: C.tK, rejectWithError: !0 });
}
let U = null;
async function z(e) {
    try {
        await H();
    } catch (e) {
        return (B.warn(`Failed to enroll in the Hexagon campaign: ${e}`), !1);
    }
    return (
        (await (function (e) {
            function t() {
                return (0, Y.Rd)(x.default.getCurrentUser(), e);
            }
            return t()
                ? Promise.resolve(!0)
                : new Promise((e) => {
                      function s() {
                          t() && (clearTimeout(a), x.default.removeChangeListener(s), e(!0));
                      }
                      let a = setTimeout(() => {
                          (x.default.removeChangeListener(s), e(!1));
                      }, G);
                      x.default.addChangeListener(s);
                  });
        })(e)) || B.warn(`Timed out waiting for the Hexagon campaign ${e} perk to sync`),
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
    ea = s(105292);
function en(e) {
    return n.useMemo(
        () =>
            (0, v.ii)(e).map((e, t) => ({
                colors: e,
                a11yLabel: ea.intl.formatToPlainString(es.default.FHfTsV, {
                    number: t + 1,
                    hexList: e.map(et.Hl).join(", "),
                }),
            })),
        [e],
    );
}
var el = s(887129),
    ei = s(837381),
    er = s(741918),
    eo = s(265872),
    ed = s(866665),
    ec = s(939249),
    eu = s(22231),
    em = s(933832),
    ef = s(818168);
function eh(e) {
    let { colors: t, selected: s, onSelect: n, listItemId: l, "aria-label": i } = e,
        r = (0, ei.rm)(l);
    return (0, a.jsxs)("button", {
        type: "button",
        className: ef.nf,
        onClick: n,
        "aria-label": i,
        ...r,
        children: [
            t.map((e, t) => (0, a.jsx)("div", { className: ef._4, style: { background: (0, et.Hl)(e) } }, t)),
            s && (0, a.jsx)(em.CheckmarkLargeIcon, { className: ef.z6, size: "md", color: "currentColor" }),
        ],
    });
}
var eg = s(1986),
    eE = s(315710),
    eN = s(650583),
    eS = s(607570);
let ex = [0, 60, 120, 180, 240, 300, 360];
function ep(e) {
    let { value: t, onChange: s, hueToColor: l, onConfirm: r, "aria-label": o, className: d } = e,
        c = (0, b.xo)((0, et.tf)(t).h),
        u = n.useRef(null);
    (0, eE.tj)(u);
    let m = n.useCallback((e) => s(l((0, b.xo)(e))), [s, l]),
        f = n.useCallback((e) => m(e.h), [m]),
        h = n.useMemo(() => `linear-gradient(to right, ${ex.map((e) => (0, et.Hl)(l(e))).join(", ")})`, [l]),
        g = n.useMemo(
            () =>
                function (e) {
                    let { hsl: t } = e;
                    return (0, a.jsx)("div", { className: eS.Wn, style: { background: (0, et.Hl)(l(t.h)) } });
                },
            [l],
        ),
        E = n.useCallback(
            (e) => {
                switch (e.key) {
                    case eN.dh.ARROW_LEFT:
                    case eN.dh.ARROW_DOWN:
                        m(c - 5);
                        break;
                    case eN.dh.ARROW_RIGHT:
                    case eN.dh.ARROW_UP:
                        m(c + 5);
                        break;
                    case eN.dh.HOME:
                        m(0);
                        break;
                    case eN.dh.END:
                        m(359);
                        break;
                    case eN.dh.ENTER:
                    case eN.dh.SPACE:
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
        className: i()(eS.kL, d),
        children: (0, a.jsx)("div", {
            className: eS.SP,
            style: { "--custom-hue-track": h },
            role: "slider",
            tabIndex: 0,
            "aria-label": o,
            "aria-valuemin": 0,
            "aria-valuemax": 360,
            "aria-valuenow": Math.round(c),
            onKeyDown: E,
            children: (0, a.jsx)(eg.Hue, {
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
    let { selectedColors: t, setSelectedColors: s, className: l } = e,
        [r, d] = n.useState(!1),
        c = n.useRef(null),
        m = t.length > 0 ? (0, b.nO)(t) : V.TGz,
        f = n.useCallback((e) => s((0, b.cf)(e)), [s]),
        h = en(o.z.GUMMY),
        g = h.findIndex((e) => {
            let { colors: s } = e;
            return (0, u.v)(s, t);
        }),
        E = g >= 0,
        N = t.length > 0 ? t : (0, b.cf)(m),
        S = ea.intl.string(ea.t["FHBa/1"]),
        x = (0, el.Ay)({
            id: "gummy-color-picker",
            isEnabled: !0,
            orientation: er.Gl.HORIZONTAL,
            scrollToStart: eI,
            scrollToEnd: eI,
        });
    return (0, a.jsx)(ei.hD, {
        navigator: x,
        children: (0, a.jsx)(ei.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, a.jsxs)("div", {
                    className: i()(eA.kL, l),
                    ref: t,
                    ...n,
                    children: [
                        (0, a.jsxs)("div", {
                            className: eA.Ix,
                            children: [
                                (0, a.jsx)("div", {
                                    className: i()(eA.yB, { [eA.EI]: E }),
                                    children:
                                        !E &&
                                        N.map((e, t) =>
                                            (0, a.jsx)(
                                                "div",
                                                { className: eA._4, style: { background: (0, et.Hl)(e) } },
                                                t,
                                            ),
                                        ),
                                }),
                                (0, a.jsx)("div", {
                                    className: eA.fX,
                                    children: (0, a.jsx)(eo.Y, {
                                        targetElementRef: c,
                                        position: "top",
                                        align: "left",
                                        shouldShow: r,
                                        onRequestOpen: () => d(!0),
                                        onRequestClose: () => d(!1),
                                        renderPopout: () =>
                                            (0, a.jsx)(ep, {
                                                value: E ? V.TGz : m,
                                                onChange: f,
                                                hueToColor: b.UZ,
                                                onConfirm: () => d(!1),
                                                "aria-label": S,
                                            }),
                                        children: (e) =>
                                            (0, a.jsx)(ed.m, {
                                                text: S,
                                                position: "top",
                                                ariaHidden: !0,
                                                children: (0, a.jsx)("div", {
                                                    ...e,
                                                    ref: c,
                                                    className: eA.r9,
                                                    children: (0, a.jsx)(ei.tG, {
                                                        id: "custom",
                                                        children: (e) =>
                                                            (0, a.jsx)(ec.D, {
                                                                ...e,
                                                                className: eA.Vz,
                                                                "aria-label": S,
                                                                children: (0, a.jsx)(eu.PencilIcon, {
                                                                    size: "custom",
                                                                    width: 18,
                                                                    height: 18,
                                                                    color: "currentColor",
                                                                    className: eA.IZ,
                                                                }),
                                                            }),
                                                    }),
                                                }),
                                            }),
                                    }),
                                }),
                            ],
                        }),
                        h.map((e, t) => {
                            let { colors: n, a11yLabel: l } = e;
                            return (0, a.jsx)(
                                eh,
                                {
                                    listItemId: `gummy-preset-${t}`,
                                    colors: n,
                                    selected: g === t,
                                    onSelect: () => s([...n]),
                                    "aria-label": l,
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
var e_ = s(559106),
    ey = s(508274),
    ej = s(300158);
let eC = () => Promise.resolve();
function eD() {
    return (0, a.jsx)(em.CheckmarkLargeIcon, {
        className: ej.q3,
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
    });
}
function eL(e) {
    let { color: t, isSelected: s, onSelect: n, listItemId: l, "aria-label": r } = e,
        o = (0, ei.rm)(l);
    return (0, a.jsx)(e_.vN, {
        offset: -2,
        children: (0, a.jsx)("button", {
            type: "button",
            className: i()(ej.nf, (0, et.OK)(t) > 0.2 ? ej.o7 : ej.eE, { [ej.wH]: s }),
            style: { backgroundColor: (0, et.Hl)(t) },
            onClick: n,
            "aria-label": r,
            ...o,
            "aria-current": !!s || void 0,
            children: s && (0, a.jsx)(eD, {}),
        }),
    });
}
function eT(e) {
    let { value: t, isSelected: s, onChange: l } = e,
        [r, o] = n.useState(!1),
        d = n.useRef(null),
        c = ea.intl.string(ea.t["FHBa/1"]);
    return (0, a.jsx)(eo.Y, {
        targetElementRef: d,
        position: "top",
        align: "left",
        shouldShow: r,
        onRequestOpen: () => o(!0),
        onRequestClose: () => o(!1),
        renderPopout: () => (0, a.jsx)(ey.VN, { onChange: l, value: t }),
        children: (e) =>
            (0, a.jsx)(ed.m, {
                text: c,
                position: "top",
                ariaHidden: !0,
                children: (0, a.jsx)("div", {
                    ...e,
                    ref: d,
                    className: i()(ej.OF, { [ej.wH]: s }),
                    children: (0, a.jsx)(ei.tG, {
                        id: "custom",
                        children: (e) =>
                            (0, a.jsx)(ec.D, {
                                ...e,
                                className: ej.Kd,
                                "aria-label": c,
                                "aria-current": !!s || void 0,
                                children: (0, a.jsx)(eu.PencilIcon, {
                                    className: ej.EY,
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
function eb(e) {
    let { selectedColor: t, setSelectedColor: s, defaultColor: n, selectedEffectId: l, className: r } = e,
        o = en(l),
        d =
            null != t &&
            t !== n &&
            !o.some((e) => {
                let { colors: s } = e;
                return s[0] === t;
            }),
        c = (0, el.Ay)({
            id: "display-name-styles-solid-color-picker",
            isEnabled: !0,
            orientation: er.Gl.HORIZONTAL,
            scrollToStart: eC,
            scrollToEnd: eC,
        });
    return (0, a.jsx)(ei.hD, {
        navigator: c,
        children: (0, a.jsx)(ei.PR, {
            children: (e) => {
                let { ref: l, ...c } = e;
                return (0, a.jsxs)("div", {
                    className: i()(ej.kL, r),
                    ref: l,
                    ...c,
                    "aria-label": ea.intl.string(es.default.JOpi7z),
                    children: [
                        (0, a.jsx)(eT, { value: t, isSelected: d, onChange: s }),
                        (0, a.jsx)(eL, {
                            color: n,
                            isSelected: t === n,
                            onSelect: () => s(n),
                            listItemId: "default",
                            "aria-label": ea.intl.string(ea.t.bBvAEH),
                        }),
                        o.map((e) => {
                            let { colors: n, a11yLabel: l } = e;
                            return (0, a.jsx)(
                                eL,
                                {
                                    color: n[0],
                                    isSelected: n[0] === t,
                                    onSelect: () => s(n[0]),
                                    listItemId: `preset-${n[0]}`,
                                    "aria-label": l,
                                },
                                n[0],
                            );
                        }),
                    ],
                });
            },
        }),
    });
}
var eM = s(143660),
    eP = s(454137);
function ew(e) {
    let { selectedColors: t, setSelectedColors: s, defaultColor: l, selectedEffectId: i, className: r } = e,
        d = (0, b.as)(i),
        c = en(i).map((e) => {
            let { colors: t, a11yLabel: s } = e;
            return { colors: t, name: s };
        }),
        u = (0, n.useCallback)(
            (e) => {
                (s([e]), p.default.track(V.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: e === l, colors: [e] }));
            },
            [s, l],
        ),
        m = (0, n.useCallback)(
            (e) => {
                (s(e), p.default.track(V.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: !1, colors: e }));
            },
            [s],
        );
    return (0, a.jsxs)("div", {
        className: r,
        children: [
            (0, a.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: eP.sU,
                children: [
                    ea.intl.string(es.default.JOpi7z),
                    (0, a.jsx)(Z.t, { size: "xs", color: Q.A.colors.TEXT_DEFAULT }),
                ],
            }),
            i === o.z.GUMMY
                ? (0, a.jsx)(ev, { selectedColors: t, setSelectedColors: m })
                : d > 1
                  ? (0, a.jsx)(ee.default, {
                        className: eM.Ei,
                        colorContainerClassName: eM.rx,
                        defaultColor: l,
                        colors: c,
                        value: t[0],
                        gradientColors: t,
                        onChange: u,
                        onChangeGradientColors: m,
                        isGradient: !0,
                        gradientWidth: "231px",
                        gradientDegrees: 90,
                        allowBlackCustomColor: !0,
                        customPickerPosition: "top",
                    })
                  : (0, a.jsx)(eb, {
                        className: eM.Ei,
                        selectedColor: t[0],
                        setSelectedColor: u,
                        defaultColor: l,
                        selectedEffectId: i,
                    }),
        ],
    });
}
let ek = { seenFontIds: new Set(), seenEffectIds: new Set(), newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 };
class eO extends c.Ay.PersistedStore {
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
let eR = new eO(O.h, {
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
var eF = s(922301),
    eY = s(660184),
    eB = s(742191);
function eG(e) {
    let t,
        { selectedEffectId: s, setSelectedEffectId: l, className: r } = e,
        o = y(),
        { dotEffectIds: d, dismissEffectDot: u } =
            ((t = (0, c.bG)([eR], () => eR.getSeenEffects())),
            {
                dotEffectIds: n.useMemo(() => new Set(o.filter((e) => v.gz.includes(e) && !t.has(e))), [o, t]),
                dismissEffectDot: n.useCallback((e) => {
                    O.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN", effectId: e });
                }, []),
            }),
        m = (0, I.u)("DisplayNameStylesEffectSelection"),
        h = Math.ceil(o.length / 2);
    return (0, a.jsxs)("div", {
        className: r,
        children: [
            (0, a.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: eP.sU,
                children: [
                    ea.intl.string(es.default["1wilM1"]),
                    (0, a.jsx)(Z.t, { size: "xs", color: Q.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, a.jsx)("div", {
                className: i()(eP.fh, { [eB.KS]: m }),
                style: { "--custom-dns-tile-columns": h },
                children: o.map((e) => {
                    let t = d.has(e);
                    return (0, a.jsx)(
                        eH,
                        {
                            effectId: e,
                            selected: e === s,
                            showNewDot: t,
                            isFlywheelEnabled: m,
                            onClick: () => {
                                (l(e), t && u(e));
                            },
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
function eH(e) {
    let { effectId: t, selected: s, showNewDot: n, isFlywheelEnabled: l, onClick: r } = e,
        o = (0, M._)(t);
    return (0, a.jsxs)(ec.D, {
        className: i()(eB.Tw, { [eB.wH]: s, [eB.uT]: l }),
        onClick: r,
        children: [
            (0, a.jsx)(eY.A, {
                userName: o.name,
                effectDisplayType: eF.G.ANIMATED,
                displayNameStyles: o.previewStyles,
                textClassName: eB.tr,
                loop: !0,
                inProfile: !0,
            }),
            n && (0, a.jsx)("div", { className: eP.s1, "aria-hidden": !0 }),
        ],
    });
}
var eU = s(834730),
    ez = s(885574),
    eK = s(73392),
    eJ = s(599715);
function eW(e) {
    let t,
        { selectedFontId: s, setSelectedFontId: l, displayName: r, className: o } = e,
        u = T(),
        { dotFontIds: m, dismissFontDot: h } =
            ((t = (0, c.bG)([eR], () => eR.getSeenFonts())),
            {
                dotFontIds: n.useMemo(() => new Set(u.filter((e) => v._k.includes(e) && !t.has(e))), [u, t]),
                dismissFontDot: n.useCallback((e) => {
                    O.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_FONT_SEEN", fontId: e });
                }, []),
            }),
        g = s !== d.x.DEFAULT,
        E = (0, b.Xr)(r),
        N = (0, I.u)("DisplayNameStylesFontSelection"),
        S = Math.ceil(u.length / (N ? 3 : 2));
    return (0, a.jsxs)("div", {
        className: o,
        children: [
            (0, a.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: eP.sU,
                children: [
                    ea.intl.string(es.default.nP0ngb),
                    (0, a.jsx)(Z.t, { size: "xs", color: Q.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: i()(eP.fh, { [eJ.qW]: N }),
                style: { "--custom-dns-tile-columns": S },
                children: [
                    u.map((e) => {
                        let t = (0, eK.p)(e),
                            n = e === s,
                            r = m.has(e),
                            o = ea.intl.string(t.name);
                        return (0, a.jsx)(
                            ed.m,
                            {
                                text: o,
                                asContainer: !0,
                                children: (0, a.jsxs)(ec.D, {
                                    className: i()(eJ.SO, { [eJ.wH]: n, [eJ.j4]: N }),
                                    onClick: () => {
                                        (l(e), r && h(e));
                                    },
                                    "aria-label": o,
                                    children: [
                                        (0, a.jsx)(eU.E, {
                                            variant: "text-lg/semibold",
                                            color: n ? "text-strong" : "text-default",
                                            className: i()(eJ.FH, t.className),
                                            children: "Gg",
                                        }),
                                        r && (0, a.jsx)("div", { className: eP.s1, "aria-hidden": !0 }),
                                    ],
                                }),
                            },
                            e,
                        );
                    }),
                    g &&
                        E &&
                        (0, a.jsxs)("div", {
                            className: eJ.Lb,
                            children: [
                                (0, a.jsx)(ez.CircleInformationIcon, { size: "lg" }),
                                (0, a.jsx)(eU.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: ea.intl.string(es.default["+O1xL2"]),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
var eV = s(821609),
    eX = s(908803),
    e$ = s(87719),
    eq = s(465794),
    eZ = s(757036),
    eQ = s(202541),
    e0 = s(7212);
function e1(e) {
    let { onApply: t, onSurpriseMe: s, onClose: n, canApply: l, isPremiumTryItOut: i = !1, banner: r } = e,
        o = (0, eZ.L)(eQ.PremiumTypes.TIER_2),
        d = (0, a.jsx)(eV.$, {
            variant: "secondary",
            size: "md",
            onClick: s,
            icon: { type: "rive", asset: eX.m, riveProps: { dataBinding: { fill: Q.A.colors.ICON_STRONG } } },
            text: ea.intl.string(es.default.NOGFds),
        }),
        c = (0, a.jsxs)("div", {
            className: e0.k0,
            children: [
                d,
                (0, a.jsx)(ed.m, {
                    text: ea.intl.string(es.default.cVTpnj),
                    shouldShow: !l,
                    children: (0, a.jsx)(eV.$, {
                        onClick: t,
                        disabled: !l,
                        text: ea.intl.string(ea.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        u = null != r ? (0, a.jsxs)("div", { className: e0.f4, children: [r, c] }) : c,
        f = (0, a.jsxs)("div", {
            className: e0.UD,
            children: [
                d,
                (0, a.jsx)(eq.A, {
                    premiumModalAnalyticsLocation: {
                        section: V.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                        object: V.ZSU.PREMIUM_UPSELL_BUTTON,
                    },
                    subscriptionTier: eQ.pe.TIER_2,
                }),
            ],
        }),
        h = (0, a.jsxs)("div", {
            className: e0.UX,
            children: [
                (0, a.jsxs)("div", {
                    className: e0.iQ,
                    children: [
                        (0, a.jsx)(ed.m, {
                            text: ea.intl.string(ea.t["5AFxuK"]),
                            children: (0, a.jsx)(Z.t, { size: "md", color: Q.A.colors.ICON_STRONG }),
                        }),
                        (0, a.jsx)(eU.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: e0.h_,
                            children: ea.intl.format(es.default.PWf0xS, {
                                onClickNitro: () => {
                                    (p.default.track(V.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, e$.x)(n));
                                },
                            }),
                        }),
                    ],
                }),
                f,
            ],
        }),
        g = (0, a.jsxs)("div", { className: e0.UX, children: [r, f] }),
        E = null != r ? g : h;
    return (0, a.jsx)(m.jl, { "data-migration-pending": !0, className: e0.qr, children: i || o ? u : E });
}
var e8 = s(366010),
    e2 = s(43990),
    e5 = s(629584),
    e9 = s(943255),
    e3 = s(575181),
    e7 = s(736653),
    e6 = s(780898),
    e4 = s(344346),
    te = s(320095),
    tt = s(963852),
    ts = s(763754),
    ta = s(20851),
    tn = s(986687),
    tl = s(101058),
    ti = s(999291),
    tr = s(686189),
    to = s(946356),
    td = s(975571),
    tc = s(996988),
    tu = s(228839);
function tm(e) {
    let {
            user: t,
            guild: s,
            displayName: l,
            selectedFontId: r,
            selectedEffectId: o,
            selectedColors: d,
            isPremiumTryItOut: u = !1,
        } = e,
        m = (0, e7.Ay)(),
        f = (0, e8.M)(m),
        [h, g] = (0, n.useState)(f),
        E = (0, ti.Ay)(t.id, null),
        { pendingChanges: S, tryItOutChanges: x } = (0, c.cf)([X.A], () => ({
            pendingChanges: X.A.getPendingChanges(s?.id),
            tryItOutChanges: X.A.getTryItOutChanges(),
        })),
        {
            pendingAvatar: A,
            pendingAvatarDecoration: I,
            pendingPrimaryGuildId: v,
            pendingBanner: _,
            pendingThemeColors: y,
            pendingNickname: j,
            pendingPronouns: C,
            pendingProfileEffect: D,
            pendingProfileFrame: L,
            pendingAccentColor: T,
            pendingBio: b,
            pendingLegacyUsernameDisabled: M,
        } = S,
        P = u ? x.tryItOutAvatar : A,
        w = (0, tl.V7)({ userId: t.id, image: P }),
        k = u ? void 0 : I,
        O = u ? x.tryItOutBanner : _,
        R = u ? x.tryItOutThemeColors : y,
        { bannerSrc: F } = (0, tr.A)({ displayProfile: E, size: 413, canAnimate: !1, pendingBanner: O }),
        { userNameplate: Y, guildNameplate: B, pendingNameplate: G } = (0, N.rv)(t, s?.id),
        H = (0, e6.WK)(B);
    h && !f ? (m = V.NJ8.DARK) : !h && f && (m = V.NJ8.LIGHT);
    let U = (0, n.useCallback)((e) => {
            (g(e === V.NJ8.DARK), p.default.track(V.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === V.NJ8.DARK }));
        }, []),
        z = (0, n.useMemo)(
            () => ({ ...(0, ts.FT)(t, null), nick: l, displayNameStyles: { fontId: r, effectId: o, colors: d } }),
            [t, r, o, d, l],
        );
    return (0, a.jsxs)("div", {
        className: tu._l,
        children: [
            null != F &&
                (0, a.jsx)(to.A, {
                    user: t,
                    displayProfile: E,
                    themeType: tc.d.MODAL_V2,
                    className: tu.LX,
                    pendingThemeColors: R,
                    forceUserTheme: !0,
                    children: (0, a.jsx)("div", { className: tu.b8, style: { backgroundImage: `url(${F})` } }),
                }),
            (0, a.jsx)(e2.N, {
                theme: m,
                children: (e) =>
                    (0, a.jsxs)("div", {
                        className: i()(tu.cq, e),
                        inert: !0,
                        children: [
                            (0, a.jsx)(tn.A, {
                                user: t,
                                guild: s,
                                pendingGlobalName: l,
                                pendingNickname: j,
                                pendingPronouns: C,
                                pendingAvatar: w,
                                pendingAvatarDecoration: k,
                                pendingPrimaryGuildId: v,
                                pendingBanner: O,
                                pendingThemeColors: R,
                                pendingAccentColor: T,
                                pendingBio: b,
                                pendingProfileEffect: D,
                                pendingProfileFrame: L,
                                pendingLegacyUsernameDisabled: M,
                                pendingDisplayNameStyles: z.displayNameStyles,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: tu.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                                hideProfileFrame: !0,
                            }),
                            (0, a.jsx)(ta.A, {
                                author: z,
                                message: (0, te.rh)({
                                    ...(0, tt.Ay)({ channelId: "1337", content: ea.intl.string(es.default.h5Cuej) }),
                                    state: V.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: tu.OT,
                                previewGuildId: s?.id,
                                avatarDecorationOverride: k,
                                avatarOverride: w,
                            }),
                            (0, a.jsx)(e4.A, {
                                user: t,
                                guildId: s?.id,
                                nameplate: G,
                                nameplateData: null == G ? (H ?? Y) : void 0,
                                pendingGlobalName: l,
                                pendingAvatarDecoration: k,
                                pendingPrimaryGuildId: v,
                                pendingDisplayNameStyles: z.displayNameStyles,
                                pendingAvatar: P,
                                isHighlighted: !0,
                                className: tu.qF,
                            }),
                        ],
                    }),
            }),
            (0, a.jsxs)("div", {
                className: tu.dI,
                children: [
                    (0, a.jsx)(eU.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: ea.intl.format(es.default.prQba8, {
                            helpArticleLink: td.A.getArticleURL(V.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, a.jsx)(tf, { darkPreview: h, onToggleTheme: U }),
                ],
            }),
        ],
    });
}
function tf(e) {
    let { darkPreview: t, onToggleTheme: s } = e,
        n = t ? V.NJ8.DARK : V.NJ8.LIGHT;
    return (0, a.jsx)(e5.I, {
        className: tu.xr,
        optionClassName: tu.$C,
        options: [
            {
                name: "",
                tooltip: ea.intl.string(ea.t.b8Cei3),
                value: V.NJ8.DARK,
                icon: e9.Z,
                className: n === V.NJ8.DARK ? tu.iB : void 0,
            },
            {
                name: "",
                tooltip: ea.intl.string(ea.t.K2sFfo),
                value: V.NJ8.LIGHT,
                icon: e3.F,
                className: n === V.NJ8.LIGHT ? tu.iB : void 0,
            },
        ],
        value: n,
        onChange: (e) => {
            let { value: t } = e;
            return s(t);
        },
        look: "pill",
    });
}
var th = s(97808),
    tg = s(778712),
    tE = s(913563),
    tN = s(497082);
function tS(e) {
    let { owner: t, displayNameStyles: s } = e,
        n = ea.intl.string((0, tE.A)(s.fontId)),
        { name: l } = (0, M._)(s.effectId),
        i = t.globalName ?? t.username;
    return (0, a.jsxs)("div", {
        className: tN.v,
        children: [
            (0, a.jsx)(th.eu, { size: tg._3.SIZE_32, src: t.getAvatarURL(void 0, 32), "aria-hidden": !0 }),
            (0, a.jsxs)("div", {
                className: tN.C,
                children: [
                    (0, a.jsx)(eU.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: ea.intl.format(es.default.gYzaCr, {
                            displayNameHook: () =>
                                (0, a.jsx)(eY.A, {
                                    userName: i,
                                    displayNameStyles: s,
                                    effectDisplayType: eF.G.ANIMATED,
                                    loop: !0,
                                }),
                        }),
                    }),
                    (0, a.jsx)(eU.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        children: ea.intl.format(es.default.DC7gJB, { fontName: n, effectName: l }),
                    }),
                ],
            }),
        ],
    });
}
var tx = s(858899),
    tp = s(765178);
function tA() {
    let e = ea.intl.string(ea.t.iufib1);
    ((0, tx.P0)({ text: e, variant: "critical" }), tp.O.announce(e));
}
var tI = s(226451);
let tv = { overrideSettings: !0 };
function t_(e) {
    let t,
        {
            transitionState: s,
            analyticsLocations: l,
            guildId: v,
            isPremiumTryItOut: _ = !1,
            onClose: j,
            returnRef: D,
            tryOnDisplayNameStyles: L,
            tryOnStyleOwner: k,
        } = e,
        R = (0, c.bG)([x.default], () => x.default.getCurrentUser()),
        F =
            ((t = q.Ay.useName(R)),
            (0, c.bG)(
                [X.A, $.Ay],
                () => {
                    let e = X.A.getPendingChanges(v);
                    return null != v ? (e.pendingNickname ?? $.Ay.getNick(v, R?.id)) : e.pendingGlobalName;
                },
                [v, R],
            ) ??
                t ??
                ""),
        B = (0, c.bG)([S.A], () => S.A.getGuild(v)),
        {
            userDisplayNameStyles: G,
            guildDisplayNameStyles: H,
            pendingDisplayNameStyles: z,
            tryItOutDisplayNameStyles: Z,
        } = (0, N.B0)(R, v),
        Q = _ ? Z : z,
        ee = void 0 !== Q ? Q : (H ?? G),
        et = (0, P.A)(),
        en = n.useMemo(() => (0, b.A5)(L, et), [L, et]),
        el = null != en,
        ei = en ?? ee,
        er = el ? "try_this_style" : "profile_editor",
        eo = n.useMemo(() => (0, b.A5)(G, et), [G, et]),
        [ed, ec] = n.useState(ei?.fontId ?? d.x.DEFAULT),
        [eu, em] = n.useState(ei?.effectId ?? o.z.SOLID),
        ef = (0, b.as)(eu) > 1,
        eh = (0, M._)(eu),
        eg = ei?.colors ?? [],
        [eE, eN] = n.useState(() => (eg.length > 0 && !ef ? { [eu]: eg[0] } : {})),
        [eS, ex] = n.useState(() => (eg.length > 0 && ef ? { [eu]: eg } : {})),
        ep = n.useMemo(() => eS[eu] ?? et[eu], [eS, eu, et]),
        eA = eE[eu] ?? et[eu][0];
    (0, E.A)(
        {
            type: r.ImpressionTypes.POPOUT,
            name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL,
            properties: { entry_point: er },
        },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: eI } = (0, g.Ay)(l, h.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        ev = n.useMemo(() => (ef ? ep : [eA]), [ef, ep, eA]),
        e_ = n.useMemo(() => ({ fontId: ed, effectId: eu, colors: ev }), [ed, eu, ev]),
        ey = n.useMemo(
            () => ed !== ee?.fontId || eu !== ee?.effectId || !(0, u.v)(ev, ee?.colors ?? []),
            [ed, eu, ev, ee],
        ),
        ej = n.useMemo(() => !(0, b.kv)(e_, eo), [e_, eo]),
        eC = el ? ej : ey,
        eD = el && (0, b.kv)(e_, en) && null != k && null != en,
        eL = (0, I.u)("DisplayNameStylesModal"),
        eT = T(),
        eb = y(),
        { handleApply: eM } = (function (e) {
            let {
                    hasChanges: t,
                    entryPoint: s,
                    selectedFontId: a,
                    selectedEffectId: l,
                    selectedColors: i,
                    defaultColor: r,
                    guildId: c,
                    isTryItOut: u,
                    onClose: m,
                    onEnrollmentError: f,
                    shouldSaveWithoutPendingChanges: h = !1,
                    onSaveError: g,
                } = e,
                E = n.useRef(!1),
                [N, S] = n.useState(!1);
            return {
                handleApply: n.useCallback(async () => {
                    if (!(t || h) || E.current) return;
                    let e = (0, b.eT)({ fontId: a, effectId: l, colors: i }, r),
                        n = !0 !== u && e.fontId === C.vl;
                    async function N() {
                        var t;
                        if (
                            (n &&
                                (function () {
                                    let e = x.default.getCurrentUser()?.displayNameStyles ?? null;
                                    !(0, Y.Jy)(e) &&
                                        O.h.dispatch({
                                            type: "HEXAGON_CAMPAIGN_PREVIOUS_PERK_VALUES_SAVED",
                                            previousPerkValues: { displayNameStyles: e },
                                        });
                                })(),
                            h)
                        ) {
                            E.current = !0;
                            try {
                                let t = await (0, w._L)({ displayNameStyles: e });
                                if (t?.ok !== !0) return void g?.();
                            } catch {
                                g?.();
                                return;
                            } finally {
                                E.current = !1;
                            }
                        } else u ? (0, J.EW)(e) : (0, W.p)({ guildId: c, displayNameStyles: e });
                        (p.default.track(V.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                            font_name: d.x[a],
                            effect_name: o.z[l],
                            colors: i,
                            entry_point: s,
                        }),
                            n &&
                                ((t = C.vB.DISPLAY_NAME_STYLE),
                                O.h.dispatch({ type: "HEXAGON_CAMPAIGN_PERK_APPLIED", perk: t })),
                            m?.());
                    }
                    if (!n || (0, Y.Rd)(x.default.getCurrentUser(), C.vB.DISPLAY_NAME_STYLE)) return void (await N());
                    ((E.current = !0), S(!0));
                    let A = !1;
                    try {
                        var I;
                        A = await ((I = C.vB.DISPLAY_NAME_STYLE),
                        (0, Y.Rd)(x.default.getCurrentUser(), I) ? Promise.resolve(!0) : (null == U && (U = K(I)), U));
                    } catch {
                        A = !1;
                    }
                    ((E.current = !1), S(!1), A) ? await N() : f?.();
                }, [t, s, a, l, i, r, m, f, c, u, h, g]),
                isApplying: N,
            };
        })({
            hasChanges: eC,
            entryPoint: er,
            selectedFontId: ed,
            selectedEffectId: eu,
            selectedColors: ev,
            defaultColor: eh.defaultColors[0],
            guildId: v,
            isTryItOut: _,
            onClose: j,
            shouldSaveWithoutPendingChanges: el,
            onSaveError: tA,
        }),
        eP = n.useCallback(() => (eC ? eM() : void j()), [eC, eM, j]),
        ek = n.useCallback(() => {
            (p.default.track(V.HAw.DISPLAY_NAME_STYLES_CLOSED), j());
        }, [j]),
        eO = n.useCallback(() => {
            let { fontId: e, effectId: t, colors: s } = (0, b.gN)(eT, eb);
            (ec(e),
                em(t),
                (0, b.as)(t) > 1 ? ex((e) => ({ ...e, [t]: s })) : eN((e) => ({ ...e, [t]: s[0] })),
                p.default.track(V.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME));
        }, [eT, eb, ec, em, ex, eN]),
        eR = n.useCallback(
            (e) => {
                ef ? ex((t) => ({ ...t, [eu]: e })) : eN((t) => ({ ...t, [eu]: e[0] }));
            },
            [ef, eu, ex, eN],
        );
    return null == R
        ? null
        : (0, a.jsx)(g.f5, {
              value: eI,
              children: (0, a.jsx)(A.l.Provider, {
                  value: tv,
                  children: (0, a.jsxs)(m.EO, {
                      "data-migration-pending": !0,
                      transitionState: s,
                      size: m.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: i()(tI.CR, { [tI.st]: eL }),
                      returnRef: D,
                      children: [
                          (0, a.jsx)(m.s_, { "data-migration-pending": !0, onClick: ek, className: tI.b }),
                          (0, a.jsxs)(m.$m, {
                              "data-migration-pending": !0,
                              className: i()(tI.jE, { [tI.st]: eL }),
                              style: { overflow: "hidden auto" },
                              scrollbarGutter: !1,
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: tI.w1,
                                      children: [
                                          (0, a.jsx)(m.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: tI.bV,
                                              children: (0, a.jsx)(f.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: ea.intl.string(es.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, a.jsx)(eW, {
                                              selectedFontId: ed,
                                              setSelectedFontId: ec,
                                              displayName: F,
                                              className: tI._,
                                          }),
                                          (0, a.jsx)(eG, {
                                              selectedEffectId: eu,
                                              setSelectedEffectId: em,
                                              className: tI._,
                                          }),
                                          (0, a.jsx)(ew, {
                                              selectedColors: ev,
                                              setSelectedColors: eR,
                                              selectedEffectId: eu,
                                              className: tI._,
                                              defaultColor: eh.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, a.jsx)(tm, {
                                      user: R,
                                      guild: B,
                                      displayName: F,
                                      selectedFontId: ed,
                                      selectedEffectId: eu,
                                      selectedColors: eu === o.z.SOLID && (0, u.v)(ev, eh.defaultColors) ? [] : ev,
                                      isPremiumTryItOut: _,
                                  }),
                              ],
                          }),
                          (0, a.jsx)(e1, {
                              onApply: el ? eP : eM,
                              onSurpriseMe: eO,
                              onClose: j,
                              canApply: eC || el,
                              analyticsLocations: eI,
                              isPremiumTryItOut: _,
                              banner: eD ? (0, a.jsx)(tS, { owner: k, displayNameStyles: en }) : void 0,
                          }),
                      ],
                  }),
              }),
          });
}

s.d(l, { default: () => e5 });
var a = s(477900),
    t = s(582128),
    n = s(503698),
    i = s.n(n),
    r = s(613412),
    o = s(508425),
    c = s(559949),
    d = s(855986),
    u = s(52133),
    m = s(935462),
    h = s(858899),
    x = s(534514),
    f = s(793574),
    v = s(688810),
    N = s(139286),
    j = s(804661),
    p = s(919395),
    C = s(71393),
    g = s(287809),
    S = s(129230),
    b = s(871162),
    E = s(145359),
    I = s(750656),
    A = s(211824);
function k() {
    let { includeCampaignFonts: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        l = (0, E.Lz)(A.vB.DISPLAY_NAME_STYLE, "font-order"),
        s = e && l !== A.S9.HIDDEN;
    return t.useMemo(() => (s ? [...I.rA, ...I.fY] : I.rA), [s]);
}
var y = s(501803),
    T = s(898985),
    _ = s(430571),
    L = s(415299),
    D = s(897661),
    P = s(403581),
    M = s(646514),
    O = s(48736),
    R = s(317097),
    w = s(842671),
    Y = s(792996);
function F(e, l) {
    return t.useMemo(
        () =>
            (l ?? (0, y.Fj)(e, null)).map((e, l) => {
                let { colors: s } = e;
                return {
                    colors: s,
                    a11yLabel: Y.intl.formatToPlainString(w.default.FHfTsV, {
                        number: l + 1,
                        hexList: s.map(R.Hl).join(", "),
                    }),
                };
            }),
        [e, l],
    );
}
var H = s(652215),
    U = s(116903),
    G = s(837381),
    z = s(741918),
    B = s(265872),
    W = s(866665),
    K = s(939249),
    X = s(714385);
function Z(e) {
    let l,
        s,
        a,
        { selectedColors: n, hasCustomPalette: i, hasCustomSwatchSelected: r } = e,
        o = t.useId(),
        c = i
            ? ((l = Math.min(...n.map((e) => (0, R.bJ)(e, 0)))),
              {
                  useDarkIcon: (a = 3 > Math.max(l, (s = Math.min(...n.map((e) => (0, R.bJ)(e, 0xffffff)))))) || l >= s,
                  needsBacking: a,
              })
            : null;
    return {
        customColorDescriptionId: o,
        customColorDescription: r
            ? Y.intl.formatToPlainString(Y.t["7BFCRR"], { color: n.map(R.Hl).join(", ") })
            : void 0,
        iconContrast: c,
    };
}
var q = s(559106),
    J = s(236630);
function Q(e) {
    let { selected: l, onSelect: s, listItemId: t, "aria-label": n, fillStyle: r, children: o } = e,
        c = (0, G.rm)(t);
    return (0, a.jsx)(q.vN, {
        offset: -2,
        children: (0, a.jsx)("button", {
            type: "button",
            className: i()(J.nf, { [J.wH]: l }),
            onClick: s,
            "aria-label": n,
            ...c,
            role: "option",
            "aria-selected": l,
            children: (0, a.jsx)("span", { className: J.GS, style: r, children: o }),
        }),
    });
}
var V = s(818168);
function $(e) {
    let { colors: l, selected: s, onSelect: t, listItemId: n, "aria-label": i } = e;
    return (0, a.jsx)(Q, {
        selected: s,
        onSelect: t,
        listItemId: n,
        "aria-label": i,
        children: l.map((e, l) => (0, a.jsx)("div", { className: V._, style: { background: (0, R.Hl)(e) } }, l)),
    });
}
var ee = s(1986),
    el = s(315710),
    es = s(650583),
    ea = s(607570);
let et = [0, 60, 120, 180, 240, 300, 360];
function en(e) {
    let { value: l, onChange: s, hueToColor: n, onConfirm: r, "aria-label": o, className: c } = e,
        d = (0, y.xo)((0, R.tf)(l).h),
        u = t.useRef(null);
    (0, el.tj)(u);
    let m = t.useCallback((e) => s(n((0, y.xo)(e))), [s, n]),
        h = t.useCallback((e) => m(e.h), [m]),
        x = t.useMemo(() => `linear-gradient(to right, ${et.map((e) => (0, R.Hl)(n(e))).join(", ")})`, [n]),
        f = t.useMemo(
            () =>
                function (e) {
                    let { hsl: l } = e;
                    return (0, a.jsx)("div", { className: ea.Wn, style: { background: (0, R.Hl)(n(l.h)) } });
                },
            [n],
        ),
        v = t.useCallback(
            (e) => {
                switch (e.key) {
                    case es.dh.ARROW_LEFT:
                    case es.dh.ARROW_DOWN:
                        m(d - 5);
                        break;
                    case es.dh.ARROW_RIGHT:
                    case es.dh.ARROW_UP:
                        m(d + 5);
                        break;
                    case es.dh.HOME:
                        m(0);
                        break;
                    case es.dh.END:
                        m(359);
                        break;
                    case es.dh.ENTER:
                    case es.dh.SPACE:
                        if (null == r) return;
                        r();
                        break;
                    default:
                        return;
                }
                e.preventDefault();
            },
            [d, m, r],
        );
    return (0, a.jsx)("div", {
        ref: u,
        className: i()(ea.kL, c),
        children: (0, a.jsx)("div", {
            className: ea.SP,
            style: { "--custom-hue-track": x },
            role: "slider",
            tabIndex: 0,
            "aria-label": o,
            "aria-valuemin": 0,
            "aria-valuemax": 360,
            "aria-valuenow": Math.round(d),
            onKeyDown: v,
            children: (0, a.jsx)(ee.RG, {
                hsl: { h: d, s: 1, l: 0.5 },
                direction: "horizontal",
                pointer: f,
                onChange: h,
            }),
        }),
    });
}
var ei = s(420080);
let er = () => Promise.resolve();
function eo(e) {
    let { selectedColors: l, setSelectedColors: s, colorOptions: n, onCustomPalettePicked: r, className: c } = e,
        [d, m] = t.useState(!1),
        h = t.useRef(null),
        [x, f] = t.useState(H.TGz),
        v = t.useRef(null),
        N = t.useCallback(() => {
            (f(l.length > 0 ? (0, y.nO)(l) : H.TGz), m(!0));
        }, [l]),
        j = t.useCallback(
            (e) => {
                let l = (0, y.cf)(e);
                (f(e), (v.current = l), s(l, !0));
            },
            [s],
        ),
        p = t.useCallback(() => {
            let e = v.current;
            ((v.current = null), m(!1), null != e && r(e.slice()));
        }, [r]),
        C = F(o.z.GUMMY, n),
        g = C.findIndex((e) => {
            let { colors: s } = e;
            return (0, u.v)(s, l);
        }),
        S = l.length > 0 && !(g >= 0),
        b = S && !d,
        E = Y.intl.string(Y.t["FHBa/1"]),
        {
            customColorDescriptionId: I,
            customColorDescription: A,
            iconContrast: k,
        } = Z({ selectedColors: l, hasCustomPalette: S, hasCustomSwatchSelected: b }),
        T = (0, U.Ay)({
            id: "gummy-color-picker",
            isEnabled: !0,
            orientation: z.Gl.HORIZONTAL,
            scrollToStart: er,
            scrollToEnd: er,
        });
    return (0, a.jsx)(G.hD, {
        navigator: T,
        children: (0, a.jsx)(G.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, a.jsxs)("div", {
                    className: i()(ei.kL, c),
                    ref: t,
                    ...n,
                    role: "listbox",
                    "aria-label": Y.intl.string(Y.t.WTqQ5e),
                    children: [
                        (0, a.jsxs)("div", {
                            className: i()(J.nf, ei.Ix, { [J.wH]: b }),
                            children: [
                                (0, a.jsx)("div", {
                                    className: i()(ei.yB, { [ei.EI]: !S }),
                                    children:
                                        S &&
                                        l.map((e, l) =>
                                            (0, a.jsx)(
                                                "div",
                                                { className: ei._4, style: { background: (0, R.Hl)(e) } },
                                                l,
                                            ),
                                        ),
                                }),
                                (0, a.jsx)("div", {
                                    className: ei.fX,
                                    children: (0, a.jsx)(B.Y, {
                                        targetElementRef: h,
                                        position: "top",
                                        align: "left",
                                        shouldShow: d,
                                        onRequestOpen: N,
                                        onRequestClose: p,
                                        renderPopout: () =>
                                            (0, a.jsx)(en, {
                                                value: x,
                                                onChange: j,
                                                hueToColor: y.UZ,
                                                onConfirm: p,
                                                "aria-label": E,
                                            }),
                                        children: (e) =>
                                            (0, a.jsx)(W.m, {
                                                text: E,
                                                position: "top",
                                                ariaHidden: !0,
                                                children: (0, a.jsx)("div", {
                                                    ...e,
                                                    ref: h,
                                                    className: ei.r9,
                                                    children: (0, a.jsx)(G.tG, {
                                                        id: "custom",
                                                        children: (e) =>
                                                            (0, a.jsx)(K.D, {
                                                                ...e,
                                                                className: ei.Vz,
                                                                "aria-label": E,
                                                                "aria-describedby": null != A ? I : void 0,
                                                                role: "option",
                                                                "aria-selected": b,
                                                                children: (0, a.jsx)(X.EyeDropperIcon, {
                                                                    size: "custom",
                                                                    width: 14,
                                                                    height: 14,
                                                                    color: "currentColor",
                                                                    className: i()(ei.IZ, {
                                                                        [J.eQ]: k?.useDarkIcon === !0,
                                                                        [J.mT]: k?.useDarkIcon === !1,
                                                                        [ei.N]: k?.needsBacking,
                                                                    }),
                                                                }),
                                                            }),
                                                    }),
                                                }),
                                            }),
                                    }),
                                }),
                                null != A && (0, a.jsx)("span", { id: I, hidden: !0, children: A }),
                            ],
                        }),
                        C.map((e, l) => {
                            let { colors: t, a11yLabel: n } = e;
                            return (0, a.jsx)(
                                $,
                                {
                                    listItemId: `gummy-preset-${l}`,
                                    colors: t,
                                    selected: g === l,
                                    onSelect: () => s([...t]),
                                    "aria-label": n,
                                },
                                l,
                            );
                        }),
                    ],
                });
            },
        }),
    });
}
var ec = s(508274),
    ed = s(300158);
let eu = () => Promise.resolve(),
    em = t.memo(function (e) {
        let { color: l, isSelected: s, onSelect: n, listItemId: i, "aria-label": r } = e,
            o = t.useCallback(() => n(l), [n, l]);
        return (0, a.jsx)(Q, {
            selected: s,
            onSelect: o,
            listItemId: i,
            "aria-label": r,
            fillStyle: { backgroundColor: (0, R.Hl)(l) },
        });
    });
function eh(e) {
    let { value: l, isCustomColor: s, onChange: n, onCustomColorPicked: r } = e,
        [o, c] = t.useState(!1),
        d = s && !o,
        u = t.useRef(null),
        m = t.useRef(null),
        h = Y.intl.string(Y.t["FHBa/1"]),
        {
            customColorDescriptionId: x,
            customColorDescription: f,
            iconContrast: v,
        } = Z({ selectedColors: null != l ? [l] : [], hasCustomPalette: s, hasCustomSwatchSelected: d }),
        N = t.useCallback(
            (e) => {
                ((m.current = e), n(e));
            },
            [n],
        ),
        j = t.useCallback(() => {
            let e = m.current;
            ((m.current = null), c(!1), null != e && r(e));
        }, [r]);
    return (0, a.jsx)(B.Y, {
        targetElementRef: u,
        position: "top",
        align: "left",
        shouldShow: o,
        onRequestOpen: () => c(!0),
        onRequestClose: j,
        renderPopout: () => (0, a.jsx)(ec.VN, { onChange: N, value: l, eagerUpdate: !0 }),
        children: (e) =>
            (0, a.jsx)(W.m, {
                text: h,
                position: "top",
                ariaHidden: !0,
                children: (0, a.jsxs)("div", {
                    ...e,
                    ref: u,
                    className: i()(J.nf, ed.OF, { [J.wH]: d }),
                    style: s && null != l ? { backgroundColor: (0, R.Hl)(l) } : void 0,
                    children: [
                        (0, a.jsx)(G.tG, {
                            id: "custom",
                            children: (e) =>
                                (0, a.jsx)(K.D, {
                                    ...e,
                                    className: ed.Kd,
                                    "aria-label": h,
                                    "aria-describedby": null != f ? x : void 0,
                                    role: "option",
                                    "aria-selected": d,
                                    children: (0, a.jsx)(X.EyeDropperIcon, {
                                        className: i()(ed.EY, {
                                            [J.eQ]: v?.useDarkIcon === !0,
                                            [J.mT]: v?.useDarkIcon === !1,
                                        }),
                                        size: "custom",
                                        width: 14,
                                        height: 14,
                                        color: "currentColor",
                                    }),
                                }),
                        }),
                        null != f && (0, a.jsx)("span", { id: x, hidden: !0, children: f }),
                    ],
                }),
            }),
    });
}
function ex(e) {
    let {
            selectedColor: l,
            setSelectedColor: s,
            colorOptions: n,
            onCustomColorPicked: r,
            defaultColor: o,
            selectedEffectId: c,
            className: d,
        } = e,
        u = F(c, n),
        m = t.useCallback((e) => s(e), [s]),
        h = t.useCallback((e) => s(e, !0), [s]),
        x =
            null != l &&
            l !== o &&
            !u.some((e) => {
                let { colors: s } = e;
                return s[0] === l;
            });
    function f(e) {
        let { colors: s, a11yLabel: t } = e;
        return (0, a.jsx)(
            em,
            { color: s[0], isSelected: s[0] === l, onSelect: m, listItemId: `preset-${s[0]}`, "aria-label": t },
            s[0],
        );
    }
    let v = (0, U.Ay)({
        id: "display-name-styles-solid-color-picker",
        isEnabled: !0,
        orientation: z.Gl.HORIZONTAL,
        scrollToStart: eu,
        scrollToEnd: eu,
    });
    return (0, a.jsx)(G.hD, {
        navigator: v,
        children: (0, a.jsx)(G.PR, {
            children: (e) => {
                let { ref: s, ...t } = e;
                return (0, a.jsxs)("div", {
                    className: i()(ed.kL, d),
                    ref: s,
                    ...t,
                    role: "listbox",
                    "aria-label": Y.intl.string(w.default.JOpi7z),
                    children: [
                        (0, a.jsx)(eh, { value: l, isCustomColor: x, onChange: h, onCustomColorPicked: r }),
                        (0, a.jsx)(em, {
                            color: o,
                            isSelected: l === o,
                            onSelect: m,
                            listItemId: "default",
                            "aria-label": Y.intl.string(Y.t.bBvAEH),
                        }),
                        u.map(f),
                    ],
                });
            },
        }),
    });
}
var ef = s(143660),
    ev = s(454137);
function eN(e) {
    var l;
    let s,
        { selectedColors: n, setSelectedColors: r, defaultColor: c, selectedEffectId: d, className: m } = e,
        h = (0, y.as)(d),
        f = (0, t.useMemo)(() => (0, I.ii)(d).map((e) => ({ colors: e, isCustom: !1 })), [d]),
        v =
            ((l = F(d, f)),
            t.useMemo(
                () =>
                    l.map((e) => {
                        let { colors: l, a11yLabel: s } = e;
                        return { colors: l, name: s };
                    }),
                [l],
            )),
        N =
            ((s = t.useRef(null)),
            t.useCallback(
                (e) => {
                    (null != s.current && (0, u.v)(s.current, e)) ||
                        ((s.current = e.slice()),
                        S.default.track(H.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
                            default: 1 === e.length && e[0] === c,
                            colors: e,
                        }));
                },
                [c],
            )),
        j = (0, t.useCallback)(
            (e, l) => {
                (r([e]), !0 !== l && N([e]));
            },
            [r, N],
        ),
        p = (0, t.useCallback)(
            (e, l) => {
                (r(e), !0 !== l && N(e));
            },
            [r, N],
        ),
        C = (0, t.useCallback)(
            (e) => {
                N([e]);
            },
            [N],
        );
    return (0, a.jsxs)("div", {
        className: i()(ef.EE, m),
        children: [
            (0, a.jsxs)(x.D, {
                variant: "heading-sm/semibold",
                className: ev.sU,
                children: [
                    Y.intl.string(w.default.JOpi7z),
                    (0, a.jsx)(P.NitroWheelIcon, { size: "xs", color: M.A.colors.TEXT_DEFAULT }),
                ],
            }),
            d === o.z.GUMMY
                ? (0, a.jsx)(eo, { selectedColors: n, setSelectedColors: p, colorOptions: f, onCustomPalettePicked: N })
                : h > 1
                  ? (0, a.jsx)(O.default, {
                        className: ef.kM,
                        gradientButtonClassName: ef.dy,
                        gradientSwatchClassName: ef.u_,
                        gradientPickerVariant: O.GradientPickerVariants.SQUARE,
                        shouldRenderSingleRow: !0,
                        swatchClassName: ef.Ay,
                        defaultColor: c,
                        colors: v,
                        value: n[0],
                        gradientColors: n,
                        onChange: j,
                        onChangeGradientColors: p,
                        isGradient: !0,
                        gradientWidth: d === o.z.PRISM ? "231px" : "calc(3 * var(--space-40) + 2 * var(--space-8))",
                        gradientDegrees: 90,
                        allowBlackCustomColor: !0,
                        customPickerPosition: "top",
                        onCustomPalettePicked: N,
                    })
                  : (0, a.jsx)(ex, {
                        className: ef.Ei,
                        selectedColor: n[0],
                        setSelectedColor: j,
                        colorOptions: f,
                        onCustomColorPicked: C,
                        defaultColor: c,
                        selectedEffectId: d,
                    }),
        ],
    });
}
var ej = s(475470),
    ep = s(516855),
    eC = s(922301),
    eg = s(16371),
    eS = s(742191);
function eb(e) {
    let { effectId: l, selected: s, showNewDot: t, onClick: n } = e,
        r = (0, T._)(l);
    return (0, a.jsxs)(K.D, {
        className: i()(eS.Tw, eS.uT, { [eS.wH]: s }),
        onClick: n,
        children: [
            (0, a.jsx)(eg.A, {
                userName: r.name,
                effectDisplayType: eC.G.ANIMATED,
                displayNameStyles: r.previewStyles,
                textClassName: eS.tr,
                loop: !0,
                inProfile: !0,
            }),
            t && (0, a.jsx)("div", { className: ev.s1, "aria-hidden": !0 }),
        ],
    });
}
let eE = t.memo(function (e) {
    var l;
    let s,
        { selectedEffectId: n, setSelectedEffectId: r, className: o } = e,
        { dotEffectIds: c, dismissEffectDot: u } =
            ((l = I.re),
            (s = (0, d.bG)([ep.A], () => ep.A.getSeenEffects())),
            {
                dotEffectIds: t.useMemo(() => new Set(l.filter((e) => I.gz.includes(e) && !s.has(e))), [l, s]),
                dismissEffectDot: t.useCallback((e) => {
                    (0, ej.gx)(e);
                }, []),
            }),
        m = Math.ceil(I.re.length / 2);
    return (0, a.jsxs)("div", {
        className: o,
        children: [
            (0, a.jsxs)(x.D, {
                variant: "heading-sm/semibold",
                className: ev.sU,
                children: [
                    Y.intl.string(w.default["1wilM1"]),
                    (0, a.jsx)(P.NitroWheelIcon, { size: "xs", color: M.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, a.jsx)("div", {
                className: i()(ev.fh, eS.KS),
                style: { "--custom-dns-tile-columns": m },
                children: I.re.map((e) => {
                    let l = c.has(e);
                    return (0, a.jsx)(
                        eb,
                        {
                            effectId: e,
                            selected: e === n,
                            showNewDot: l,
                            onClick: () => {
                                (r(e), l && u(e));
                            },
                        },
                        e,
                    );
                }),
            }),
        ],
    });
});
var eI = s(834730),
    eA = s(885574),
    ek = s(506988),
    ey = s(332560),
    eT = s(73392),
    e_ = s(262560),
    eL = s(455207),
    eD = s(701256),
    eP = s(850250);
function eM(e) {
    let { selectedFontId: l, setSelectedFontId: s, displayName: n } = e,
        { showCampaignFontBadge: r, dismissCampaignFontBadge: o } = (0, j.wP)("HexagonCampaignFontSelection"),
        c = (0, E.Lz)(A.vB.DISPLAY_NAME_STYLE, "HexagonCampaignFontSelection") === A.S9.LOCKED,
        d = (0, eT.p)(A.vl),
        u = Y.intl.string(d.name),
        m = l === A.vl,
        h = t.useCallback(() => {
            (s(A.vl), r && o());
        }, [s, r, o]);
    return (0, a.jsxs)("div", {
        className: eP.uW,
        children: [
            (0, a.jsxs)("div", {
                className: eP.wx,
                children: [
                    (0, a.jsx)(eI.E, {
                        variant: "body-sm/semibold",
                        color: "text-subtle",
                        children: Y.intl.string(eD.default.nFKiXA),
                    }),
                    !c && (0, a.jsx)(e_.A, { perk: A.vB.DISPLAY_NAME_STYLE }),
                ],
            }),
            (0, a.jsx)(W.m, {
                text: u,
                asContainer: !0,
                children: (0, a.jsxs)(K.D, {
                    className: i()(eP.Nr, { [eP.wH]: m }),
                    onClick: h,
                    "aria-label": u,
                    children: [
                        (0, a.jsx)("div", { className: eP.l9, "aria-hidden": !0 }),
                        (0, a.jsx)("div", {
                            className: eP.Zf,
                            children: (0, a.jsx)("img", {
                                src: "/assets/579afd38d2216da6.png",
                                alt: "",
                                className: eP.wm,
                            }),
                        }),
                        (0, a.jsx)(eI.E, {
                            tag: "span",
                            variant: "heading-xl/semibold",
                            color: m ? "text-strong" : "text-default",
                            className: i()(eP.UU, d.className),
                            lineClamp: 1,
                            children: n,
                        }),
                        r && (0, a.jsx)("div", { className: ev.s1, "aria-hidden": !0 }),
                    ],
                }),
            }),
            (0, a.jsx)("div", { className: eP.aL, children: (0, a.jsx)(eL.A, { variant: "body-xs/medium" }) }),
        ],
    });
}
var eO = s(599715);
let eR = t.memo(function (e) {
    let l,
        { selectedFontId: s, setSelectedFontId: n, displayName: r, isTryItOut: o = !1, className: u } = e,
        { gridFontOrder: m, showCampaignSection: h } = (function (e, l) {
            let { includeLockedInTryItOut: s = !1 } =
                    arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = k({ includeCampaignFonts: !0 }),
                n = (0, E.Lz)(A.vB.DISPLAY_NAME_STYLE, e),
                i = (n === A.S9.SELECTABLE || (s && l && n === A.S9.LOCKED)) && a.includes(A.vl);
            (0, ey.UF)(ek.uF.DISPLAY_NAME_STYLES_SETTINGS, ey.rl.FONT_PICKER, i && !l);
            let r = t.useMemo(() => a.filter((e) => !I.fY.includes(e)), [a]);
            return { visibleFontOrder: a, gridFontOrder: r, showCampaignSection: i };
        })("DisplayNameStylesFontSelection", o, { includeLockedInTryItOut: !0 }),
        { dotFontIds: f, dismissFontDot: v } =
            ((l = (0, d.bG)([ep.A], () => ep.A.getSeenFonts())),
            {
                dotFontIds: t.useMemo(() => new Set(m.filter((e) => I._k.includes(e) && !l.has(e))), [m, l]),
                dismissFontDot: t.useCallback((e) => {
                    (0, ej.Gs)(e);
                }, []),
            }),
        N = s !== c.x.DEFAULT,
        j = (0, y.Xr)(r),
        p = Math.ceil(m.length / 3);
    return (0, a.jsxs)("div", {
        className: u,
        children: [
            (0, a.jsxs)(x.D, {
                variant: "heading-sm/semibold",
                className: ev.sU,
                children: [
                    Y.intl.string(w.default.nP0ngb),
                    (0, a.jsx)(P.NitroWheelIcon, { size: "xs", color: M.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: i()(ev.fh, eO.qW),
                style: { "--custom-dns-tile-columns": p },
                children: [
                    m.map((e) => {
                        let l = (0, eT.p)(e),
                            t = e === s,
                            r = f.has(e),
                            o = Y.intl.string(l.name);
                        return (0, a.jsx)(
                            W.m,
                            {
                                text: o,
                                asContainer: !0,
                                children: (0, a.jsxs)(K.D, {
                                    className: i()(eO.SO, eO.j4, { [eO.wH]: t }),
                                    onClick: () => {
                                        (n(e), r && v(e));
                                    },
                                    "aria-label": o,
                                    children: [
                                        (0, a.jsx)(eI.E, {
                                            variant: "body-lg/semibold",
                                            color: t ? "text-strong" : "text-default",
                                            className: i()(eO.FH, l.className),
                                            children: "Gg",
                                        }),
                                        r && (0, a.jsx)("div", { className: ev.s1, "aria-hidden": !0 }),
                                    ],
                                }),
                            },
                            e,
                        );
                    }),
                    N &&
                        j &&
                        (0, a.jsxs)("div", {
                            className: eO.Lb,
                            children: [
                                (0, a.jsx)(eA.CircleInformationIcon, { size: "lg" }),
                                (0, a.jsx)(eI.E, {
                                    variant: "body-sm/normal",
                                    color: "text-subtle",
                                    children: Y.intl.string(w.default["+O1xL2"]),
                                }),
                            ],
                        }),
                ],
            }),
            h && (0, a.jsx)(eM, { selectedFontId: s, setSelectedFontId: n, displayName: r }),
        ],
    });
});
var ew = s(821609),
    eY = s(90302),
    eF = s(87719),
    eH = s(465794),
    eU = s(757036),
    eG = s(682901),
    ez = s(7212);
function eB(e) {
    let {
            onApply: l,
            onSurpriseMe: s,
            onClose: n,
            canApply: i,
            isApplying: r = !1,
            entryPoint: o,
            isPremiumTryItOut: c = !1,
            banner: d,
        } = e,
        u = (0, eU.L)(eG.PremiumTypes.TIER_2),
        h = t.useCallback(() => {
            S.default.track(H.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED, { cta: I.vY.BUTTON, entry_point: o });
        }, [o]),
        x = t.useCallback(() => {
            (S.default.track(H.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED, { cta: I.vY.LINK, entry_point: o }),
                (0, eF.x)(n));
        }, [o, n]),
        f = (0, a.jsx)(ew.$, {
            variant: "secondary",
            size: "md",
            onClick: s,
            icon: { type: "rive", asset: eY.m, riveProps: { dataBinding: { fill: M.A.colors.ICON_STRONG } } },
            text: Y.intl.string(w.default.NOGFds),
        }),
        v = (0, a.jsxs)("div", {
            className: ez.k0,
            children: [
                f,
                (0, a.jsx)(W.m, {
                    text: Y.intl.string(w.default.cVTpnj),
                    shouldShow: !i,
                    children: (0, a.jsx)(ew.$, {
                        onClick: l,
                        disabled: !i,
                        loading: r,
                        text: Y.intl.string(Y.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        N = null != d ? (0, a.jsxs)("div", { className: ez.f4, children: [d, v] }) : v,
        j = (0, a.jsxs)("div", {
            className: ez.UD,
            children: [
                f,
                (0, a.jsx)(eH.A, {
                    premiumModalAnalyticsLocation: {
                        section: H.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                        object: H.ZSU.PREMIUM_UPSELL_BUTTON,
                    },
                    subscriptionTier: eG.pe.TIER_2,
                    onClick: h,
                }),
            ],
        }),
        p = (0, a.jsxs)("div", {
            className: ez.UX,
            children: [
                (0, a.jsxs)("div", {
                    className: ez.iQ,
                    children: [
                        (0, a.jsx)(W.m, {
                            text: Y.intl.string(Y.t["5AFxuK"]),
                            children: (0, a.jsx)(P.NitroWheelIcon, { size: "md", color: M.A.colors.ICON_STRONG }),
                        }),
                        (0, a.jsx)(eI.E, {
                            variant: "body-md/medium",
                            color: "text-default",
                            className: ez.h_,
                            children: Y.intl.format(w.default.PWf0xS, { onClickNitro: x }),
                        }),
                    ],
                }),
                j,
            ],
        }),
        C = (0, a.jsxs)("div", { className: ez.UX, children: [d, j] }),
        g = null != d ? C : p;
    return (0, a.jsx)(m.jl, { "data-migration-pending": !0, className: ez.qr, children: c || u ? N : g });
}
var eW = s(30925),
    eK = s(97808),
    eX = s(778712),
    eZ = s(913563),
    eq = s(497082);
function eJ(e) {
    let { owner: l, displayNameStyles: s } = e,
        t = Y.intl.string((0, eZ.A)(s.fontId)),
        { name: n } = (0, T._)(s.effectId),
        i = l.globalName ?? l.username;
    return (0, a.jsxs)("div", {
        className: eq.v,
        children: [
            (0, a.jsx)(eK.eu, { size: eX._3.SIZE_32, src: l.getAvatarURL(void 0, 32), "aria-hidden": !0 }),
            (0, a.jsxs)("div", {
                className: eq.C,
                children: [
                    (0, a.jsx)(eI.E, {
                        variant: "body-md/medium",
                        color: "text-default",
                        children: Y.intl.format(w.default.gYzaCr, {
                            displayNameHook: () =>
                                (0, a.jsx)(eg.A, {
                                    userName: i,
                                    displayNameStyles: s,
                                    effectDisplayType: eC.G.ANIMATED,
                                    loop: !0,
                                }),
                        }),
                    }),
                    (0, a.jsx)(eI.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        children: Y.intl.format(w.default.DC7gJB, { fontName: t, effectName: n }),
                    }),
                ],
            }),
        ],
    });
}
var eQ = s(765178);
function eV() {
    let e = Y.intl.string(Y.t.iufib1);
    ((0, h.P0)({ text: e, variant: "critical" }), eQ.O.announce(e));
}
var e$ = s(226451);
let e0 = { overrideSettings: !0 };
function e1() {
    (0, h.P0)({ text: Y.intl.string(Y.t.F8FvUy), variant: "critical" });
}
function e5(e) {
    let {
            transitionState: l,
            analyticsLocations: s,
            guildId: n,
            isPremiumTryItOut: h = !1,
            onClose: E,
            returnRef: A,
            tryOnDisplayNameStyles: P,
            tryOnStyleOwner: M,
        } = e,
        O = (0, d.bG)([g.default], () => g.default.getCurrentUser()),
        R = (0, D.b)(O, n),
        F = (0, d.bG)([C.A], () => C.A.getGuild(n)),
        {
            userDisplayNameStyles: U,
            guildDisplayNameStyles: G,
            pendingDisplayNameStyles: z,
            tryItOutDisplayNameStyles: B,
        } = (0, p.B0)(O, n),
        W = h ? B : z,
        K = void 0 !== W ? W : (G ?? U),
        X = (0, _.A)(),
        Z = t.useMemo(() => (0, y.A5)(P, X), [P, X]),
        q = null != Z,
        J = Z ?? K,
        Q = q ? L.b.TRY_THIS_STYLE : L.b.PROFILE_EDITOR,
        V = t.useMemo(() => (0, y.A5)(U, X), [U, X]),
        [$, ee] = t.useState(J?.fontId ?? c.x.DEFAULT),
        [el, es] = t.useState(J?.effectId ?? o.z.SOLID),
        ea = (0, y.as)(el) > 1,
        et = (0, T._)(el),
        en = J?.colors ?? [],
        ei = en.length > 0 && !ea,
        er = en.length > 0 && ea,
        [eo, ec] = t.useState(() => (ei ? { [el]: en[0] } : {})),
        [ed, eu] = t.useState(() => (er ? { [el]: en } : {})),
        em = t.useMemo(() => ed[el] ?? X[el], [ed, el, X]),
        eh = eo[el] ?? X[el][0];
    (0, N.A)(
        {
            type: r.ImpressionTypes.POPOUT,
            name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL,
            properties: { entry_point: Q },
        },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: ex } = (0, v.Ay)(s, f.A.EDIT_DISPLAY_NAME_STYLES_MODAL);
    (0, j.EW)("DisplayNameStylesModal");
    let ef = t.useMemo(() => (ea ? em : [eh]), [ea, em, eh]),
        ev = t.useMemo(() => ({ fontId: $, effectId: el, colors: ef }), [$, el, ef]),
        ej = t.useMemo(() => $ !== K?.fontId || el !== K?.effectId || !(0, u.v)(ef, K?.colors ?? []), [$, el, ef, K]),
        ep = t.useMemo(() => !(0, y.kv)(ev, V), [ev, V]),
        eC = q ? ep : ej,
        eg = q && (0, y.kv)(ev, Z) && null != M && null != Z,
        eS = k({ includeCampaignFonts: !0 }),
        { handleApply: eb, isApplying: eI } = (0, L.v)({
            hasChanges: eC,
            entryPoint: Q,
            selectedFontId: $,
            selectedEffectId: el,
            selectedColors: ef,
            defaultColor: et.defaultColors[0],
            guildId: n,
            isTryItOut: h,
            onClose: E,
            shouldSaveWithoutPendingChanges: q,
            onSaveError: eV,
            onEnrollmentError: e1,
        }),
        eA = t.useCallback(() => (eC ? eb() : void E()), [eC, eb, E]),
        ek = t.useCallback(() => {
            (S.default.track(H.HAw.DISPLAY_NAME_STYLES_CLOSED), E());
        }, [E]),
        ey = t.useCallback(() => {
            let { fontId: e, effectId: l, colors: s } = (0, y.gN)(eS, I.re);
            (ee(e),
                es(l),
                (0, y.as)(l) > 1 ? eu((e) => ({ ...e, [l]: s })) : ec((e) => ({ ...e, [l]: s[0] })),
                S.default.track(H.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME));
        }, [eS, ee, es, eu, ec]),
        eT = t.useCallback(
            (e) => {
                ea
                    ? eu((l) => {
                          let s = l[el];
                          return null != s && (0, u.v)(s, e) ? l : { ...l, [el]: e };
                      })
                    : ec((l) => (l[el] === e[0] ? l : { ...l, [el]: e[0] }));
            },
            [ea, el, eu, ec],
        );
    return null == O
        ? null
        : (0, a.jsx)(v.f5, {
              value: ex,
              children: (0, a.jsx)(b.l.Provider, {
                  value: e0,
                  children: (0, a.jsxs)(m.EO, {
                      "data-migration-pending": !0,
                      transitionState: l,
                      size: m.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: i()(e$.CR, e$.st),
                      returnRef: A,
                      children: [
                          (0, a.jsx)(m.s_, { "data-migration-pending": !0, onClick: ek, className: e$.b }),
                          (0, a.jsxs)(m.$m, {
                              "data-migration-pending": !0,
                              className: i()(e$.jE, e$.st),
                              style: { overflow: "hidden auto" },
                              scrollbarGutter: !1,
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: e$.w1,
                                      children: [
                                          (0, a.jsx)(m.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: e$.bV,
                                              children: (0, a.jsx)(x.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: Y.intl.string(w.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, a.jsx)(eR, {
                                              selectedFontId: $,
                                              setSelectedFontId: ee,
                                              displayName: R,
                                              isTryItOut: h,
                                              className: e$._,
                                          }),
                                          (0, a.jsx)(eE, {
                                              selectedEffectId: el,
                                              setSelectedEffectId: es,
                                              className: e$._,
                                          }),
                                          (0, a.jsx)(
                                              eN,
                                              {
                                                  selectedColors: ef,
                                                  setSelectedColors: eT,
                                                  selectedEffectId: el,
                                                  className: e$._,
                                                  defaultColor: et.defaultColors[0],
                                              },
                                              el,
                                          ),
                                      ],
                                  }),
                                  (0, a.jsx)(eW.A, {
                                      user: O,
                                      guild: F,
                                      displayName: R,
                                      selectedFontId: $,
                                      selectedEffectId: el,
                                      selectedColors: el === o.z.SOLID && (0, u.v)(ef, et.defaultColors) ? [] : ef,
                                      isPremiumTryItOut: h,
                                  }),
                              ],
                          }),
                          (0, a.jsx)(eB, {
                              onApply: q ? eA : eb,
                              onSurpriseMe: ey,
                              onClose: E,
                              canApply: eC || q,
                              isApplying: eI,
                              analyticsLocations: ex,
                              entryPoint: Q,
                              isPremiumTryItOut: h,
                              banner: eg ? (0, a.jsx)(eJ, { owner: M, displayNameStyles: Z }) : void 0,
                          }),
                      ],
                  }),
              }),
          });
}

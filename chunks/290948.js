l.r(t), l.d(t, { default: () => eK });
var n,
    s = l(627968),
    a = l(64700),
    i = l(503698),
    r = l.n(i),
    o = l(17928),
    c = l(554146),
    d = l(459192),
    u = l(990078),
    h = l(815021),
    m = l(821609),
    x = l(834730),
    g = l(403581),
    f = l(534514),
    E = l(106236),
    p = l(926321),
    T = l(908803),
    A = l(661531),
    j = l(364522),
    M = l(817281),
    v = l(964486),
    C = l(793574),
    S = l(688810),
    N = l(793943),
    _ = l(826673),
    b = l(792656),
    k = l(757036),
    y = l(400669),
    R = l(973654),
    O = l(363195),
    I = l(780964),
    H = l(766075),
    D = l(909536),
    J = l(174459),
    L = l(467135),
    U = l(310784),
    P = l.n(U);
let F = [
        "#94E0CF",
        "#9AF0B1",
        "#9A90FF",
        "#9A53FF",
        "#FDA6E4",
        "#FFE6C0",
        "#EFB4AA",
        "#56B69F",
        "#29C566",
        "#5348CA",
        "#6D24D4",
        "#CA48C8",
        "#F0AE29",
        "#DF4232",
    ],
    w = [0, 45, 90, 135, 180, 225, 270, 315],
    G = [20, 40, 60, 80],
    V = ["analogous", "complementary", "split-complementary", "triadic"];
var $ = l(462887),
    K = l(885386),
    W = l(823459),
    Z = l(74396),
    z = l(385803),
    Q = l(818348),
    X = (((n = {}).RESET_BUTTON = "reset_button"), (n.EDITOR_CLOSE = "editor_close"), n);
function B(e) {
    return (0, $.M)(e) ? Q.NJ.DARK : Q.NJ.LIGHT;
}
function Y(e) {
    let t = K.eh.getSetting(),
        l =
            null != t.backgroundGradientPresetId &&
            t.backgroundGradientPresetId in z.ag &&
            z.ag[t.backgroundGradientPresetId].theme !== e;
    (0, R.GQ)(e), l && (0, W.S8)();
}
function q() {
    let e = B(O.A.theme);
    e !== O.A.theme && Y(e);
}
function ee(e, t, l) {
    0 === e.length && l([t]), q();
}
function et(e, t) {
    let l = K.eh.getSetting().customUserThemeSettings,
        n = Z.A.getSavedCustomTheme(),
        s = "reset_button" === e ? [L.OT] : [],
        a = 0,
        i = L.kJ,
        r = t;
    return (
        l?.colors != null
            ? ((s = l.colors), (a = l.gradientAngle ?? 0), (i = l.baseMix ?? L.kJ))
            : "reset_button" === e &&
              null != n &&
              ((s = n.colors), (a = n.gradient_angle ?? 0), (i = n.base_mix ?? L.kJ), (r = n.base_theme)),
        { resetColors: s, resetGradientAngle: a, resetChassisMixAmount: i, resetBaseTheme: r }
    );
}
var el = l(738419),
    en = l(156828),
    es = l(317097),
    ea = l(714385),
    ei = l(408278),
    er = l(289873),
    eo = l(939249),
    ec = l(834040),
    ed = l(499373),
    eu = l(971745),
    eh = l(693227),
    em = l(375708),
    ex = l(253499);
let eg = (0, en.Fe)({
    createPromise: () => Promise.all([l.e("60216"), l.e("22687"), l.e("20038"), l.e("86537")]).then(l.bind(l, 33136)),
    webpackId: 33136,
    name: "CustomThemeColorPickerControlV2",
    renderLoader: function () {
        return (0, s.jsx)("div", { className: ex.wG, children: (0, s.jsx)(er.y, {}) });
    },
});
function ef(e) {
    let { colors: t, selectedIndex: l, onColorSelect: n } = e,
        [i, o] = a.useMemo(() => {
            let e = t.map((e, l) => (t.length < 1 ? 0 : (l / (t.length - 1)) * 80 + 10)),
                l = t.map((t, l) => `${t} ${e[l]}%`).join(", ");
            return [e, { background: `linear-gradient(to right, ${l})` }];
        }, [t]);
    return (0, s.jsx)("div", {
        className: ex.wS,
        style: o,
        children: t.map((e, t) => {
            let o = i[t],
                c = t === l;
            return (0, s.jsxs)(
                a.Fragment,
                {
                    children: [
                        (0, s.jsx)(eo.D, {
                            className: r()(ex.pX, { [ex.wH]: c }),
                            style: { left: `${o}%`, backgroundColor: e },
                            onClick: () => n(t),
                            children: (0, s.jsx)("div", { className: ex.Px }),
                        }),
                        c && (0, s.jsx)("div", { className: ex.gQ, style: { left: `${o}%` } }),
                    ],
                },
                t,
            );
        }),
    });
}
function eE(e) {
    let { color: t } = e,
        l = a.useMemo(() => ({ backgroundColor: (0, es.qt)(t) ? t : "#000000" }), [t]);
    return (0, s.jsx)("div", { className: ex.ld, style: l, "aria-label": "Color preview" });
}
function ep(e) {
    let { value: t, onChange: l, className: n, colors: i, setColors: o } = e,
        c = (0, eu.A)(),
        [d, h] = a.useState(0),
        [x, g] = a.useState(t);
    a.useEffect(() => {
        if (i.length > 0 && d < i.length) {
            let e = i[d];
            (0, es.qt)(e) && (g(e), l(e));
        }
        d >= i.length && h(0);
    }, [d, i, l]);
    let f = (e) => {
            let t,
                n = (t = e.trim()).startsWith("#") ? t : t.length > 0 ? `#${t}` : t;
            if ((g(n), (0, es.qt)(n) && ((0, el.CE)(), l(n), i.length > 0))) {
                let e = [...i];
                (e[d] = n), o(e);
            }
        },
        E = a.useCallback((e) => {
            g(e.hex);
        }, []),
        p = async () => {
            if (null != c)
                try {
                    let { sRGBHex: e } = await c.open();
                    (0, el.AL)(), f(e);
                } catch {}
        },
        T = i.length > 1;
    return (0, s.jsxs)("div", {
        className: r()(ex.kL, n),
        children: [
            T &&
                (0, s.jsx)(ef, {
                    colors: i,
                    selectedIndex: d,
                    onColorSelect: (e) => {
                        h(e), (0, el.mx)();
                    },
                }),
            (0, s.jsx)(eg, {
                onChange: E,
                onChangeComplete: (e) => {
                    if (((0, el.VE)(), l(e.hex), i.length > 0)) {
                        let t = [...i];
                        (t[d] = e.hex), o(t);
                    }
                },
                color: x,
            }),
            (0, s.jsxs)("div", {
                className: ex.Xr,
                children: [
                    (0, s.jsx)(eE, { color: x }),
                    (0, s.jsx)("input", {
                        className: ex.Im,
                        value: x.toUpperCase(),
                        onChange: (e) => f(e.target.value),
                        maxLength: 7,
                        placeholder: L.OT,
                        type: "text",
                    }),
                    (0, s.jsxs)("div", {
                        className: ex.hE,
                        children: [
                            null != c &&
                                (0, s.jsx)(u.m, {
                                    text: em.intl.string(eh.default["NCFz+N"]),
                                    children: (0, s.jsx)(ei.K, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: p,
                                        icon: ea.d,
                                        "aria-label": em.intl.string(eh.default["NCFz+N"]),
                                    }),
                                }),
                            T &&
                                (0, s.jsx)(u.m, {
                                    text: em.intl.string(em.t.N86XcP),
                                    children: (0, s.jsx)(ei.K, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: () =>
                                            ((e) => {
                                                if (i.length > 1) {
                                                    (0, el.f1)();
                                                    let t = i.filter((t, l) => l !== e);
                                                    o(t), d >= t.length ? h(t.length - 1) : d > e && h(d - 1);
                                                }
                                            })(d),
                                        icon: ec.Q,
                                        "aria-label": em.intl.string(em.t.N86XcP),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            i.length < 5 &&
                (0, s.jsx)(m.$, {
                    variant: "secondary",
                    size: "md",
                    onClick: () => {
                        if (5 === i.length) return;
                        0 === i.length && q(), (0, el.HU)();
                        let e = i.length > 0 ? i[i.length - 1] : x,
                            t =
                                i.length > 0
                                    ? (function (e) {
                                          if (!(0, es.qt)(e)) return e;
                                          let t = P()(e);
                                          return t.set("hsl.h", (t.get("hsl.h") + 15) % 360).hex();
                                      })(e)
                                    : e,
                            l = [...i, t];
                        o(l), h(l.length - 1);
                    },
                    icon: ed.T,
                    text: em.intl.string(eh.default.JUQcdT),
                    fullWidth: !0,
                }),
        ],
    });
}
var eT = l(192308),
    eA = l(405433),
    ej = l(457417);
let eM = () =>
    (0, s.jsx)(u.m, {
        text: em.intl.string(em.t.RDE0Sc),
        children: (0, s.jsx)(ei.K, {
            "aria-label": em.intl.string(eh.default.zgFs8C),
            icon: eA.l,
            variant: "icon-only",
            onClick: () => {
                (0, eT.openModalLazy)(
                    async () => {
                        let { CustomThemesShareModalWrapper: e } = await Promise.all([
                            l.e("79924"),
                            l.e("24092"),
                            l.e("41285"),
                            l.e("54266"),
                            l.e("73953"),
                            l.e("93110"),
                            l.e("95664"),
                            l.e("40671"),
                            l.e("43778"),
                            l.e("74389"),
                            l.e("22513"),
                            l.e("13498"),
                            l.e("9023"),
                            l.e("32993"),
                            l.e("80203"),
                            l.e("48157"),
                            l.e("42971"),
                            l.e("96527"),
                            l.e("39995"),
                            l.e("25568"),
                            l.e("16254"),
                            l.e("28951"),
                            l.e("19360"),
                            l.e("18125"),
                            l.e("71934"),
                            l.e("29690"),
                            l.e("7053"),
                            l.e("13233"),
                            l.e("24199"),
                            l.e("89281"),
                            l.e("57036"),
                            l.e("98839"),
                            l.e("88941"),
                            l.e("62680"),
                            l.e("61379"),
                            l.e("21825"),
                            l.e("98125"),
                            l.e("18441"),
                            l.e("76640"),
                            l.e("25693"),
                            l.e("43039"),
                            l.e("28154"),
                            l.e("48804"),
                            l.e("32606"),
                            l.e("14879"),
                            l.e("13681"),
                            l.e("53729"),
                            l.e("10004"),
                            l.e("55314"),
                            l.e("89094"),
                            l.e("29177"),
                            l.e("32551"),
                            l.e("31658"),
                            l.e("4369"),
                            l.e("23353"),
                            l.e("53930"),
                            l.e("46270"),
                            l.e("86949"),
                            l.e("50015"),
                            l.e("11523"),
                            l.e("66900"),
                            l.e("1555"),
                            l.e("44695"),
                            l.e("21690"),
                            l.e("44376"),
                            l.e("31644"),
                            l.e("70653"),
                            l.e("45723"),
                            l.e("70697"),
                            l.e("18546"),
                            l.e("38835"),
                            l.e("37622"),
                            l.e("90244"),
                            l.e("18943"),
                            l.e("84103"),
                            l.e("9915"),
                            l.e("96123"),
                            l.e("31825"),
                            l.e("36320"),
                            l.e("20320"),
                            l.e("95387"),
                            l.e("31390"),
                            l.e("99657"),
                            l.e("47017"),
                            l.e("90889"),
                            l.e("51243"),
                            l.e("46248"),
                            l.e("44265"),
                            l.e("99141"),
                            l.e("98793"),
                            l.e("92731"),
                            l.e("25990"),
                            l.e("11527"),
                            l.e("63095"),
                            l.e("68647"),
                            l.e("66541"),
                            l.e("63070"),
                            l.e("64615"),
                            l.e("96443"),
                            l.e("87225"),
                            l.e("75134"),
                            l.e("93158"),
                            l.e("84967"),
                            l.e("55184"),
                            l.e("23216"),
                            l.e("87079"),
                            l.e("25637"),
                            l.e("78707"),
                            l.e("73547"),
                            l.e("84456"),
                            l.e("99593"),
                            l.e("61935"),
                            l.e("62168"),
                            l.e("55602"),
                            l.e("28128"),
                            l.e("58157"),
                            l.e("91381"),
                            l.e("10034"),
                            l.e("73500"),
                            l.e("25252"),
                            l.e("77084"),
                            l.e("44780"),
                            l.e("65617"),
                            l.e("36946"),
                            l.e("92639"),
                            l.e("44385"),
                            l.e("40963"),
                            l.e("90480"),
                            l.e("66031"),
                            l.e("94317"),
                            l.e("62128"),
                        ]).then(l.bind(l, 583955));
                        return (t) => (0, s.jsx)(e, { ...t });
                    },
                    { modalKey: ej.dJ },
                );
            },
        }),
    });
var ev = l(943255),
    eC = l(575181),
    eS = l(366010),
    eN = l(629584),
    e_ = l(893897);
let eb = (e, t) => (e === t ? e_.HE : void 0);
function ek() {
    let e = (0, o.bG)([O.A], () => O.A.theme),
        t = (0, eS.M)(e) ? Q.NJ.DARK : Q.NJ.LIGHT,
        l = [
            {
                name: "",
                value: Q.NJ.DARK,
                icon: ev.Z,
                className: eb(t, Q.NJ.DARK),
                tooltip: em.intl.string(eh.default["Dk+OWY"]),
                tooltipAriaLabel: em.intl.string(eh.default["Dk+OWY"]),
            },
            {
                name: "",
                value: Q.NJ.LIGHT,
                icon: eC.F,
                className: eb(t, Q.NJ.LIGHT),
                tooltip: em.intl.string(eh.default["5vlJkY"]),
                tooltipAriaLabel: em.intl.string(eh.default["5vlJkY"]),
            },
        ];
    return (0, s.jsx)(eN.I, {
        className: e_.t7,
        optionClassName: e_.aF,
        options: l,
        value: t,
        onChange: (e) => {
            let { value: t } = e;
            (0, el.dR)(), Y(t);
        },
        look: "pill",
    });
}
var ey = l(652215),
    eR = l(49999),
    eO = l(788868),
    eI = l(45945);
function eH(e) {
    let [t, l] = a.useState(0),
        [n, s] = a.useState(!1),
        i = a.useRef(e);
    return (
        a.useEffect(() => {
            e === i.current || n || l((e) => e + 1), (i.current = e), s(!1);
        }, [e, n]),
        { key: t, handleInternalChange: a.useCallback((e) => (s(!0), e), []) }
    );
}
function eD(e) {
    let { markAsDismissed: t } = e;
    return (0, s.jsx)("div", {
        className: eI.b,
        children: (0, s.jsx)(h.J, {
            size: "sm",
            onClick: () => {
                t?.(eR.i.USER_DISMISS), (0, N.Jp)();
            },
        }),
    });
}
function eJ() {
    return (0, s.jsxs)("div", {
        className: eI.N1,
        children: [
            (0, s.jsx)(x.E, { variant: "text-md/bold", children: em.intl.string(eh.default.AsmU85) }),
            (0, s.jsx)(u.m, {
                text: em.intl.string(em.t["5AFxuK"]),
                children: (0, s.jsx)(g.t, { size: "custom", height: 20, width: 20, colorClass: eI.oU }),
            }),
            (0, s.jsx)(eD, {}),
        ],
    });
}
function eL(e) {
    let { markAsDismissed: t, isCoachmark: l } = e;
    return (0, _.JZ)(c.M.CUSTOM_THEME_COACHMARK)
        ? l
            ? (0, s.jsx)(eU, { markAsDismissed: t })
            : (0, s.jsx)(eJ, {})
        : (0, s.jsx)(eU, { markAsDismissed: () => (0, _.Dr)(c.M.CUSTOM_THEME_COACHMARK) });
}
function eU(e) {
    let { markAsDismissed: t } = e,
        l = (0, k.L)(eO.PremiumTypes.TIER_2);
    return (0, s.jsxs)("div", {
        className: eI.CG,
        children: [
            (0, s.jsxs)("div", {
                className: eI.dI,
                children: [
                    (0, s.jsx)(f.D, {
                        variant: "heading-lg/extrabold",
                        children: em.intl.string(eh.default["23QUzv"]),
                    }),
                    (0, s.jsx)(eD, { markAsDismissed: t }),
                ],
            }),
            (0, s.jsx)(x.E, {
                className: eI.VA,
                variant: "text-sm/medium",
                color: "text-muted",
                children: em.intl.string(l ? eh.default.TRCE4g : eh.default["UV/Vtv"]),
            }),
        ],
    });
}
function eP(e) {
    let { gradientAngle: t, setGradientAngle: l } = e,
        { key: n, handleInternalChange: i } = eH(t),
        [o, c] = a.useState(`${Math.round(t)}\xb0`);
    return (
        a.useEffect(() => {
            c(`${Math.round(t)}\xb0`);
        }, [t]),
        (0, s.jsxs)("div", {
            className: r()(eI.xJ, eI.Gz),
            children: [
                (0, s.jsxs)("div", {
                    className: eI.Vt,
                    children: [
                        (0, s.jsx)(x.E, { variant: "text-md/medium", children: em.intl.string(eh.default.dZkwgx) }),
                        (0, s.jsx)("input", {
                            type: "text",
                            value: o,
                            onChange: (e) =>
                                ((e) => {
                                    let t = e.replace(/\xb0/g, "").trim();
                                    if ("" === t) return void c("");
                                    let n = parseInt(t, 10);
                                    if (isNaN(n)) return;
                                    let s = Math.max(0, Math.min(360, n));
                                    c(`${s}\xb0`), (0, el.l6)(), l(s);
                                })(e.target.value),
                            placeholder: "0\xb0",
                            className: eI.A9,
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: eI.Zp,
                    children: [
                        (0, s.jsxs)("div", {
                            className: eI.p1,
                            children: [
                                (0, s.jsx)("div", { className: eI.uu }),
                                (0, s.jsx)("div", { className: eI.uu }),
                                (0, s.jsx)("div", { className: eI.VD }),
                                (0, s.jsx)("div", { className: eI.uu }),
                                (0, s.jsx)("div", { className: eI.uu }),
                            ],
                        }),
                        (0, s.jsx)(
                            E.A,
                            {
                                initialValue: t,
                                defaultValue: 0,
                                minValue: 0,
                                maxValue: 360,
                                fillStyles: { display: "none" },
                                onValueChange: (e) => {
                                    (0, el.PT)();
                                    let t = (function (e) {
                                        for (let t of [90, 180, 270]) if (10 >= Math.abs(e - t)) return t;
                                        return e;
                                    })(e);
                                    t !== e || i(e), l(t);
                                },
                                onValueRender: () => null,
                                keyboardStep: 1,
                            },
                            n,
                        ),
                    ],
                }),
            ],
        })
    );
}
function eF(e) {
    let { chassisMixAmount: t, setChassisMixAmount: l } = e,
        { key: n, handleInternalChange: i } = eH(t),
        [r, o] = a.useState(`${Math.round(t)}%`);
    return (
        a.useEffect(() => {
            o(`${Math.round(t)}%`);
        }, [t]),
        (0, s.jsxs)("div", {
            className: eI.xJ,
            children: [
                (0, s.jsxs)("div", {
                    className: eI.Vt,
                    children: [
                        (0, s.jsx)(x.E, { variant: "text-md/medium", children: em.intl.string(eh.default.xlXkaL) }),
                        (0, s.jsx)("input", {
                            type: "text",
                            value: r,
                            onChange: (e) =>
                                ((e) => {
                                    let t = e.replace(/%/g, "").trim();
                                    if ("" === t) return void o("");
                                    let n = parseInt(t, 10);
                                    if (isNaN(n)) return;
                                    let s = Math.max(0, Math.min(100, n));
                                    o(`${s}%`), (0, el.Cq)(), l(s);
                                })(e.target.value),
                            placeholder: `${L.kJ}%`,
                            className: eI.A9,
                        }),
                    ],
                }),
                (0, s.jsx)(
                    E.A,
                    {
                        initialValue: t,
                        defaultValue: L.kJ,
                        minValue: 0,
                        maxValue: 100,
                        onValueChange: (e) => {
                            (0, el.QJ)(), i(e), l(e);
                        },
                        onValueRender: () => null,
                        keyboardStep: 1,
                    },
                    n,
                ),
            ],
        })
    );
}
function ew(e) {
    let { isCoachmark: t, isMobile: l } = e,
        [n, i] = a.useState(!1),
        r = a.useRef(!1),
        [o, c] = a.useState(!1),
        u = a.useRef(null),
        h = a.useRef(null),
        x = a.useCallback(() => {
            (0, el.y4)();
            let e = (function () {
                let e = G[Math.floor(Math.random() * G.length)],
                    t = w[Math.floor(Math.random() * w.length)];
                if ("path1" == (0.2 > Math.random() ? "path1" : "path2")) {
                    let l = Math.floor(Math.random() * F.length),
                        n = Math.floor(Math.random() * F.length);
                    for (; n === l; ) n = Math.floor(Math.random() * F.length);
                    return {
                        type: "gradient",
                        colors: [F[l], F[n]],
                        angle: t,
                        intensity: e,
                        gradientType: "two-color",
                    };
                }
                {
                    let l = F[Math.floor(Math.random() * F.length)],
                        n = V[Math.floor(Math.random() * V.length)];
                    return {
                        type: "gradient",
                        colors: (function (e, t) {
                            try {
                                let l = P()(e),
                                    n = l.get("hsl.h"),
                                    s = l.get("hsl.s"),
                                    a = l.get("hsl.l");
                                switch (t) {
                                    case "analogous":
                                        return [
                                            P()
                                                .hsl(n - 30, s, a)
                                                .hex(),
                                            e,
                                            P()
                                                .hsl(n + 30, s, a)
                                                .hex(),
                                        ];
                                    case "complementary":
                                        let i;
                                        return (
                                            (i = P()
                                                .hsl((n + 180) % 360, s, a)
                                                .hex()),
                                            [e, P().mix(e, i, 0.5).hex(), i]
                                        );
                                    case "split-complementary":
                                        return [
                                            e,
                                            P()
                                                .hsl((n + 150) % 360, s, a)
                                                .hex(),
                                            P()
                                                .hsl((n + 210) % 360, s, a)
                                                .hex(),
                                        ];
                                    case "triadic":
                                        return [
                                            e,
                                            P()
                                                .hsl((n + 120) % 360, s, a)
                                                .hex(),
                                            P()
                                                .hsl((n + 240) % 360, s, a)
                                                .hex(),
                                        ];
                                    default:
                                        return [e];
                                }
                            } catch {
                                return [e];
                            }
                        })(l, n),
                        angle: t,
                        intensity: e,
                        gradientType: n,
                    };
                }
            })();
            L.ko
                .getState()
                .setAll({
                    colors: e.colors,
                    gradientAngle: e.angle ?? L.ko.getState().gradientAngle,
                    chassisMixAmount: e.intensity,
                });
        }, []);
    a.useEffect(() => {
        if (t)
            return (
                (r.current = !1),
                (u.current = setTimeout(() => {
                    r.current || i(!0);
                }, 5e3)),
                () => {
                    null != u.current && clearTimeout(u.current);
                }
            );
    }, [t]);
    let g = a.useCallback(() => {
            r.current = !0;
        }, []),
        f = a.useCallback(() => {
            i(!1);
        }, []),
        E = n && !o,
        j = () =>
            (0, s.jsx)(m.$, {
                buttonRef: h,
                variant: "secondary",
                onClick: x,
                onMouseEnter: () => c(!0),
                onMouseLeave: () => c(!1),
                icon: l
                    ? { type: "icon", asset: p.j }
                    : {
                          type: "rive",
                          asset: T.m,
                          riveProps: { dataBinding: { fill: A.A.colors.ICON_STRONG }, eventTargetRef: h },
                      },
                text: em.intl.string(eh.default.c9MBEH),
                fullWidth: !0,
            });
    return l
        ? j()
        : (0, s.jsx)(d.u, {
              title: em.intl.string(eh.default.NJ9m8Y),
              body: em.intl.string(eh.default["6pabtR"]),
              position: "left",
              asset: E ? (0, s.jsx)(p.j, {}) : void 0,
              forceOpen: n,
              onTooltipShow: g,
              onTooltipHide: f,
              targetElementRef: h,
              children: j(),
          });
}
function eG(e) {
    let { onApply: t, disabled: l, fullWidth: n } = e;
    return (0, s.jsx)(u.m, {
        text: em.intl.string(eh.default.SFyHIP),
        shouldShow: l,
        children: (0, s.jsx)(m.$, {
            variant: "primary",
            onClick: t,
            disabled: l,
            text: em.intl.string(em.t["1Qm822"]),
            fullWidth: n,
        }),
    });
}
function eV(e) {
    let { onSaveTheme: t, canApply: l } = e,
        n = (0, k.L)(eO.PremiumTypes.TIER_2);
    return (
        (0, el.wb)(n, C.A.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, s.jsx)("div", {
            className: eI.M0,
            children: n
                ? (0, s.jsx)(eG, { disabled: !l, onApply: t, fullWidth: !0 })
                : (0, s.jsx)(b.A, {
                      subscriptionTier: eO.pe.TIER_2,
                      buttonTextOverride: em.intl.string(em.t.JST6jl),
                      premiumModalAnalyticsLocation: {
                          page: ey.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: ey.JJy.CUSTOM_THEMES_COACHMARK_FOOTER,
                      },
                      fullWidth: !0,
                  }),
        })
    );
}
function e$(e) {
    let { onSaveTheme: t, canApply: l, metadata: n } = e,
        a = (0, k.L)(eO.PremiumTypes.TIER_2),
        i = (0, D.St)("custom_themes_editor_footer"),
        o = n?.from === N.xv.SHARE_MESSAGE;
    (0, el.wb)(a, C.A.CUSTOM_THEMES_EDITOR);
    let d = () => {
            (0, el.uk)(),
                (0, _.Dr)(c.M.CUSTOM_THEME_COACHMARK),
                n?.from === N.xv.SETTING
                    ? ((0, H.openUserSettings)(I.X.APPEARANCE_THEME_CATEGORY), (0, N.Jp)())
                    : n?.from === N.xv.CLIENT_THEMES_EDITOR
                      ? (0, N.nf)(N.HP.CLIENT_THEMES)
                      : (0, N.Jp)();
        },
        u = r()(eI.xQ, { [eI.NI]: !a }),
        h = (0, s.jsx)(b.A, {
            subscriptionTier: eO.pe.TIER_2,
            defaultTextOverride: em.intl.string(em.t.pj0XBN),
            premiumModalAnalyticsLocation: {
                page: ey.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                section: ey.JJy.CUSTOM_THEMES_FOOTER,
            },
            fullWidth: !0,
        });
    return (0, s.jsx)("div", {
        className: u,
        children: a
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(eM, {}),
                      (0, s.jsx)(m.$, { variant: "secondary", onClick: d, text: em.intl.string(em.t["13/7kX"]) }),
                      (0, s.jsx)(eG, {
                          disabled: !l,
                          onApply: () => {
                              o && J.default.track(ey.HAw.CUSTOM_THEME_SHARE_APPLIED, {}), t();
                          },
                      }),
                  ],
              })
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      i
                          ? (0, s.jsxs)("div", {
                                className: eI.rV,
                                children: [
                                    (0, s.jsx)(y.l, {
                                        size: "md",
                                        className: eI.Tf,
                                        location: C.A.PREMIUM_WISHLIST_CUSTOM_THEMES_EDITOR,
                                    }),
                                    h,
                                ],
                            })
                          : h,
                      (0, s.jsx)(m.$, {
                          variant: "secondary",
                          onClick: d,
                          text: o ? em.intl.string(em.t["13/7kX"]) : em.intl.string(em.t.Olc2K3),
                          fullWidth: !0,
                      }),
                  ],
              }),
    });
}
function eK(e) {
    let { metadata: t, markAsDismissed: l, isCoachmark: n, isMobile: i } = e,
        r = (function () {
            let [e] = a.useState(() => O.A.theme);
            return a.useCallback(
                (t) => {
                    let {
                        resetColors: l,
                        resetGradientAngle: n,
                        resetChassisMixAmount: s,
                        resetBaseTheme: a,
                    } = et(t, e);
                    L.ko.getState().setAll({ colors: l, gradientAngle: n, chassisMixAmount: s }),
                        "reset_button" === t ? Y(B(a ?? O.A.theme)) : (0, R.XG)();
                    let i = K.eh.getSetting().backgroundGradientPresetId;
                    null != i && (0, W.bc)(i);
                },
                [e],
            );
        })(),
        d = (function () {
            let { colors: e, chassisMixAmount: t, gradientAngle: l } = (0, L.ko)(),
                n = (0, o.bG)([O.A], () => O.A.theme),
                [s] = a.useState(() => O.A.theme),
                {
                    resetColors: i,
                    resetGradientAngle: r,
                    resetChassisMixAmount: c,
                    resetBaseTheme: d,
                } = et("reset_button", s);
            return JSON.stringify(e) === JSON.stringify(i) && t === c && l === r && n === d;
        })(),
        u = a.useRef(!1),
        {
            colors: h,
            chassisMixAmount: g,
            gradientAngle: f,
            setColors: E,
            setChassisMixAmount: p,
            setGradientAngle: T,
        } = (0, L.ko)(),
        [A, b] = a.useState(h[0] ?? L.OT),
        k = (0, o.bG)([O.A], () => O.A.theme),
        y = (0, _.JZ)(c.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: I } = (0, S.Ay)(C.A.CUSTOM_THEMES_EDITOR),
        H = (0, o.bG)([Z.A], () => Z.A.getSavedCustomTheme()),
        D = async () => {
            (u.current = !0),
                await (0, M.u_)({
                    theme: k,
                    customUserThemeSettings: { colors: h, gradientColorStops: [], gradientAngle: f, baseMix: g },
                }),
                (0, el.Yl)(h, g, f, k, I),
                l?.(eR.i.TAKE_ACTION),
                y || (0, _.Dr)(c.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, N.Jp)(),
                (0, R.XG)();
        },
        J = h.length > 0;
    return (
        a.useEffect(
            () => () => {
                u.current || r(X.EDITOR_CLOSE);
            },
            [r],
        ),
        (0, v.Ay)(() => {
            if (!n) {
                let e = (h?.length ?? 0) > 0,
                    t = null != H;
                !e && t
                    ? (L.ko
                          .getState()
                          .setAll({ colors: H.colors, gradientAngle: H.gradient_angle, chassisMixAmount: H.base_mix }),
                      Y(H.base_theme))
                    : ee(h, A, E);
            }
        }),
        (0, s.jsxs)("div", {
            className: i ? eI.AA : eI.kL,
            "data-app-right-panel": !i,
            children: [
                (0, s.jsx)(j.Ip, {
                    children: (0, s.jsxs)("div", {
                        className: eI.sV,
                        children: [
                            (0, s.jsx)(eL, { markAsDismissed: l, isCoachmark: n }),
                            (0, s.jsxs)("div", {
                                className: eI.uW,
                                children: [
                                    (0, s.jsx)(x.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: em.intl.string(eh.default.o2NfLF),
                                    }),
                                    (0, s.jsx)(ek, {}),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: eI.uW,
                                children: [
                                    (0, s.jsx)(x.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: em.intl.string(eh.default.uSL2Gy),
                                    }),
                                    (0, s.jsx)(ep, {
                                        onChange: (e) => {
                                            b(e), 0 === h.length && ee(h, e, E);
                                        },
                                        value: A,
                                        colors: h,
                                        setColors: E,
                                    }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: eI.uW,
                                children: [
                                    (0, s.jsx)(x.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: em.intl.string(eh.default.F1t0c8),
                                    }),
                                    h.length > 1 && (0, s.jsx)(eP, { gradientAngle: f, setGradientAngle: T }),
                                    (0, s.jsx)(eF, {
                                        chassisMixAmount: g,
                                        setChassisMixAmount: (e) => {
                                            p(e), 0 === h.length && ee(h, A, E);
                                        },
                                    }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: eI.WA,
                                children: [
                                    (0, s.jsx)(ew, { isCoachmark: n, isMobile: i }),
                                    (0, s.jsx)(m.$, {
                                        variant: "secondary",
                                        onClick: () => {
                                            r(X.RESET_BUTTON), (0, el.G_)();
                                        },
                                        disabled: d,
                                        text: em.intl.string(em.t.yBZMsQ),
                                        fullWidth: !0,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                n
                    ? (0, s.jsx)(eV, { onSaveTheme: D, canApply: J })
                    : (0, s.jsx)(e$, { onSaveTheme: D, canApply: J, metadata: t }),
            ],
        })
    );
}

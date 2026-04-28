n.r(t), n.d(t, { default: () => eK });
var l,
    s = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    o = n(17928),
    c = n(554146),
    u = n(459192),
    d = n(990078),
    h = n(815021),
    m = n(821609),
    x = n(834730),
    g = n(403581),
    f = n(534514),
    E = n(106236),
    T = n(926321),
    p = n(908803),
    A = n(661531),
    j = n(364522),
    C = n(817281),
    M = n(964486),
    S = n(793574),
    v = n(688810),
    N = n(793943),
    _ = n(826673),
    b = n(792656),
    k = n(757036),
    y = n(400669),
    R = n(973654),
    O = n(363195),
    I = n(780964),
    H = n(858897),
    D = n(909536),
    J = n(954571),
    U = n(467135),
    L = n(310784),
    P = n.n(L);
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
    G = [0, 45, 90, 135, 180, 225, 270, 315],
    V = [20, 40, 60, 80],
    w = ["analogous", "complementary", "split-complementary", "triadic"];
var $ = n(462887),
    K = n(253932),
    W = n(823459),
    z = n(74396),
    Q = n(385803),
    X = n(818348),
    B = (((l = {}).RESET_BUTTON = "reset_button"), (l.EDITOR_CLOSE = "editor_close"), l);
function Y(e) {
    return (0, $.M)(e) ? X.NJ.DARK : X.NJ.LIGHT;
}
function Z(e) {
    let t = K.eh.getSetting(),
        n =
            null != t.backgroundGradientPresetId &&
            t.backgroundGradientPresetId in Q.ag &&
            Q.ag[t.backgroundGradientPresetId].theme !== e;
    (0, R.GQ)(e), n && (0, W.S8)();
}
function q() {
    let e = Y(O.A.theme);
    e !== O.A.theme && Z(e);
}
function ee(e, t, n) {
    0 === e.length && n([t]), q();
}
function et(e, t) {
    let n = K.eh.getSetting().customUserThemeSettings,
        l = z.A.getSavedCustomTheme(),
        s = "reset_button" === e ? [U.OT] : [],
        a = 0,
        i = U.kJ,
        r = t;
    return (
        n?.colors != null
            ? ((s = n.colors), (a = n.gradientAngle ?? 0), (i = n.baseMix ?? U.kJ))
            : "reset_button" === e &&
              null != l &&
              ((s = l.colors), (a = l.gradient_angle ?? 0), (i = l.base_mix ?? U.kJ), (r = l.base_theme)),
        { resetColors: s, resetGradientAngle: a, resetChassisMixAmount: i, resetBaseTheme: r }
    );
}
var en = n(738419),
    el = n(156828),
    es = n(317097),
    ea = n(714385),
    ei = n(408278),
    er = n(289873),
    eo = n(939249),
    ec = n(834040),
    eu = n(499373),
    ed = n(971745),
    eh = n(693227),
    em = n(985018),
    ex = n(253499);
let eg = (0, el.Fe)({
    createPromise: () => Promise.all([n.e("60216"), n.e("22687"), n.e("20038"), n.e("86537")]).then(n.bind(n, 33136)),
    webpackId: 33136,
    name: "CustomThemeColorPickerControlV2",
    renderLoader: function () {
        return (0, s.jsx)("div", { className: ex.wG, children: (0, s.jsx)(er.y, {}) });
    },
});
function ef(e) {
    let { colors: t, selectedIndex: n, onColorSelect: l } = e,
        [i, o] = a.useMemo(() => {
            let e = t.map((e, n) => (t.length < 1 ? 0 : (n / (t.length - 1)) * 80 + 10)),
                n = t.map((t, n) => `${t} ${e[n]}%`).join(", ");
            return [e, { background: `linear-gradient(to right, ${n})` }];
        }, [t]);
    return (0, s.jsx)("div", {
        className: ex.wS,
        style: o,
        children: t.map((e, t) => {
            let o = i[t],
                c = t === n;
            return (0, s.jsxs)(
                a.Fragment,
                {
                    children: [
                        (0, s.jsx)(eo.D, {
                            className: r()(ex.pX, { [ex.wH]: c }),
                            style: { left: `${o}%`, backgroundColor: e },
                            onClick: () => l(t),
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
        n = a.useMemo(() => ({ backgroundColor: (0, es.qt)(t) ? t : "#000000" }), [t]);
    return (0, s.jsx)("div", { className: ex.ld, style: n, "aria-label": "Color preview" });
}
function eT(e) {
    let { value: t, onChange: n, className: l, colors: i, setColors: o } = e,
        c = (0, ed.A)(),
        [u, h] = a.useState(0),
        [x, g] = a.useState(t);
    a.useEffect(() => {
        if (i.length > 0 && u < i.length) {
            let e = i[u];
            (0, es.qt)(e) && (g(e), n(e));
        }
        u >= i.length && h(0);
    }, [u, i, n]);
    let f = (e) => {
            let t,
                l = (t = e.trim()).startsWith("#") ? t : t.length > 0 ? `#${t}` : t;
            if ((g(l), (0, es.qt)(l) && ((0, en.CE)(), n(l), i.length > 0))) {
                let e = [...i];
                (e[u] = l), o(e);
            }
        },
        E = a.useCallback((e) => {
            g(e.hex);
        }, []),
        T = async () => {
            if (null != c)
                try {
                    let { sRGBHex: e } = await c.open();
                    (0, en.AL)(), f(e);
                } catch {}
        },
        p = i.length > 1;
    return (0, s.jsxs)("div", {
        className: r()(ex.kL, l),
        children: [
            p &&
                (0, s.jsx)(ef, {
                    colors: i,
                    selectedIndex: u,
                    onColorSelect: (e) => {
                        h(e), (0, en.mx)();
                    },
                }),
            (0, s.jsx)(eg, {
                onChange: E,
                onChangeComplete: (e) => {
                    if (((0, en.VE)(), n(e.hex), i.length > 0)) {
                        let t = [...i];
                        (t[u] = e.hex), o(t);
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
                        placeholder: U.OT,
                        type: "text",
                    }),
                    (0, s.jsxs)("div", {
                        className: ex.hE,
                        children: [
                            null != c &&
                                (0, s.jsx)(d.m, {
                                    text: em.intl.string(eh.default["NCFz+N"]),
                                    children: (0, s.jsx)(ei.K, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: T,
                                        icon: ea.d,
                                        "aria-label": em.intl.string(eh.default["NCFz+N"]),
                                    }),
                                }),
                            p &&
                                (0, s.jsx)(d.m, {
                                    text: em.intl.string(em.t.N86XcP),
                                    children: (0, s.jsx)(ei.K, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: () =>
                                            ((e) => {
                                                if (i.length > 1) {
                                                    (0, en.f1)();
                                                    let t = i.filter((t, n) => n !== e);
                                                    o(t), u >= t.length ? h(t.length - 1) : u > e && h(u - 1);
                                                }
                                            })(u),
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
                        0 === i.length && q(), (0, en.HU)();
                        let e = i.length > 0 ? i[i.length - 1] : x,
                            t =
                                i.length > 0
                                    ? (function (e) {
                                          if (!(0, es.qt)(e)) return e;
                                          let t = P()(e);
                                          return t.set("hsl.h", (t.get("hsl.h") + 15) % 360).hex();
                                      })(e)
                                    : e,
                            n = [...i, t];
                        o(n), h(n.length - 1);
                    },
                    icon: eu.T,
                    text: em.intl.string(eh.default.JUQcdT),
                    fullWidth: !0,
                }),
        ],
    });
}
var ep = n(192308),
    eA = n(405433),
    ej = n(457417);
let eC = () =>
    (0, s.jsx)(d.m, {
        text: em.intl.string(em.t.RDE0Sc),
        children: (0, s.jsx)(ei.K, {
            "aria-label": em.intl.string(eh.default.zgFs8C),
            icon: eA.l,
            variant: "icon-only",
            onClick: () => {
                (0, ep.openModalLazy)(
                    async () => {
                        let { CustomThemesShareModalWrapper: e } = await Promise.all([
                            n.e("61748"),
                            n.e("24092"),
                            n.e("41285"),
                            n.e("93816"),
                            n.e("48486"),
                            n.e("25385"),
                            n.e("42021"),
                            n.e("75903"),
                            n.e("47042"),
                            n.e("13498"),
                            n.e("28592"),
                            n.e("77598"),
                            n.e("57568"),
                            n.e("80813"),
                            n.e("31632"),
                            n.e("86821"),
                            n.e("25568"),
                            n.e("32260"),
                            n.e("40153"),
                            n.e("92165"),
                            n.e("19586"),
                            n.e("18125"),
                            n.e("89092"),
                            n.e("62924"),
                            n.e("58435"),
                            n.e("73432"),
                            n.e("19364"),
                            n.e("86483"),
                            n.e("2060"),
                            n.e("24199"),
                            n.e("57036"),
                            n.e("88394"),
                            n.e("15380"),
                            n.e("88941"),
                            n.e("61379"),
                            n.e("62680"),
                            n.e("43039"),
                            n.e("98125"),
                            n.e("18441"),
                            n.e("21825"),
                            n.e("69354"),
                            n.e("28154"),
                            n.e("48804"),
                            n.e("80527"),
                            n.e("85502"),
                            n.e("13681"),
                            n.e("53729"),
                            n.e("21690"),
                            n.e("32551"),
                            n.e("31644"),
                            n.e("52367"),
                            n.e("23353"),
                            n.e("36561"),
                            n.e("86949"),
                            n.e("50015"),
                            n.e("77998"),
                            n.e("31145"),
                            n.e("11523"),
                            n.e("66900"),
                            n.e("44695"),
                            n.e("10004"),
                            n.e("55314"),
                            n.e("29177"),
                            n.e("44376"),
                            n.e("9915"),
                            n.e("83429"),
                            n.e("96905"),
                            n.e("70653"),
                            n.e("31825"),
                            n.e("54527"),
                            n.e("72535"),
                            n.e("76195"),
                            n.e("51485"),
                            n.e("76170"),
                            n.e("1177"),
                            n.e("26490"),
                            n.e("32817"),
                            n.e("51243"),
                            n.e("18943"),
                            n.e("89094"),
                            n.e("84103"),
                            n.e("5501"),
                            n.e("96123"),
                            n.e("39038"),
                            n.e("36320"),
                            n.e("77245"),
                            n.e("31549"),
                            n.e("20320"),
                            n.e("43919"),
                            n.e("31390"),
                            n.e("57906"),
                            n.e("37622"),
                            n.e("22584"),
                            n.e("45421"),
                            n.e("44265"),
                            n.e("99141"),
                            n.e("21435"),
                            n.e("98793"),
                            n.e("92731"),
                            n.e("25990"),
                            n.e("33584"),
                            n.e("63095"),
                            n.e("68647"),
                            n.e("67657"),
                            n.e("64615"),
                            n.e("88017"),
                            n.e("87225"),
                            n.e("12373"),
                            n.e("75134"),
                            n.e("84967"),
                            n.e("23216"),
                            n.e("56212"),
                            n.e("47017"),
                            n.e("36498"),
                            n.e("3458"),
                            n.e("62827"),
                            n.e("1555"),
                            n.e("73547"),
                            n.e("32823"),
                            n.e("34691"),
                            n.e("99593"),
                            n.e("61935"),
                            n.e("62168"),
                            n.e("55602"),
                            n.e("52463"),
                            n.e("13499"),
                            n.e("993"),
                            n.e("91381"),
                            n.e("93158"),
                            n.e("10034"),
                            n.e("95183"),
                            n.e("73500"),
                            n.e("14879"),
                            n.e("35403"),
                            n.e("17286"),
                            n.e("34472"),
                            n.e("11527"),
                            n.e("45723"),
                            n.e("29375"),
                            n.e("6223"),
                            n.e("48778"),
                            n.e("5895"),
                            n.e("38835"),
                            n.e("90889"),
                            n.e("2537"),
                            n.e("78777"),
                            n.e("93708"),
                            n.e("71482"),
                            n.e("72727"),
                            n.e("36126"),
                            n.e("80565"),
                            n.e("58765"),
                            n.e("78707"),
                            n.e("19452"),
                            n.e("65881"),
                            n.e("10745"),
                            n.e("84113"),
                            n.e("51391"),
                            n.e("89465"),
                            n.e("51130"),
                            n.e("1827"),
                            n.e("77084"),
                            n.e("64480"),
                            n.e("78651"),
                            n.e("46568"),
                            n.e("39406"),
                            n.e("44780"),
                            n.e("65617"),
                            n.e("36946"),
                            n.e("44385"),
                            n.e("92639"),
                            n.e("40963"),
                            n.e("90480"),
                            n.e("66031"),
                            n.e("94317"),
                            n.e("62128"),
                        ]).then(n.bind(n, 583955));
                        return (t) => (0, s.jsx)(e, { ...t });
                    },
                    { modalKey: ej.dJ },
                );
            },
        }),
    });
var eM = n(943255),
    eS = n(575181),
    ev = n(366010),
    eN = n(629584),
    e_ = n(893897);
let eb = (e, t) => (e === t ? e_.HE : void 0);
function ek() {
    let e = (0, o.bG)([O.A], () => O.A.theme),
        t = (0, ev.M)(e) ? X.NJ.DARK : X.NJ.LIGHT,
        n = [
            {
                name: "",
                value: X.NJ.DARK,
                icon: eM.Z,
                className: eb(t, X.NJ.DARK),
                tooltip: em.intl.string(eh.default["Dk+OWY"]),
                tooltipAriaLabel: em.intl.string(eh.default["Dk+OWY"]),
            },
            {
                name: "",
                value: X.NJ.LIGHT,
                icon: eS.F,
                className: eb(t, X.NJ.LIGHT),
                tooltip: em.intl.string(eh.default["5vlJkY"]),
                tooltipAriaLabel: em.intl.string(eh.default["5vlJkY"]),
            },
        ];
    return (0, s.jsx)(eN.I, {
        className: e_.t7,
        optionClassName: e_.aF,
        options: n,
        value: t,
        onChange: (e) => {
            let { value: t } = e;
            (0, en.dR)(), Z(t);
        },
        look: "pill",
    });
}
var ey = n(652215),
    eR = n(49999),
    eO = n(788868),
    eI = n(45945);
function eH(e) {
    let [t, n] = a.useState(0),
        [l, s] = a.useState(!1),
        i = a.useRef(e);
    return (
        a.useEffect(() => {
            e === i.current || l || n((e) => e + 1), (i.current = e), s(!1);
        }, [e, l]),
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
            (0, s.jsx)(d.m, {
                text: em.intl.string(em.t["5AFxuK"]),
                children: (0, s.jsx)(g.t, { size: "custom", height: 20, width: 20, colorClass: eI.oU }),
            }),
            (0, s.jsx)(eD, {}),
        ],
    });
}
function eU(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, _.JZ)(c.M.CUSTOM_THEME_COACHMARK)
        ? n
            ? (0, s.jsx)(eL, { markAsDismissed: t })
            : (0, s.jsx)(eJ, {})
        : (0, s.jsx)(eL, { markAsDismissed: () => (0, _.Dr)(c.M.CUSTOM_THEME_COACHMARK) });
}
function eL(e) {
    let { markAsDismissed: t } = e,
        n = (0, k.L)(eO.PremiumTypes.TIER_2);
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
                children: em.intl.string(n ? eh.default.TRCE4g : eh.default["UV/Vtv"]),
            }),
        ],
    });
}
function eP(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: l, handleInternalChange: i } = eH(t),
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
                                    let t = e.replace(/°/g, "").trim();
                                    if ("" === t) return void c("");
                                    let l = parseInt(t, 10);
                                    if (isNaN(l)) return;
                                    let s = Math.max(0, Math.min(360, l));
                                    c(`${s}\xb0`), (0, en.l6)(), n(s);
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
                                    (0, en.PT)();
                                    let t = (function (e) {
                                        for (let t of [90, 180, 270]) if (10 >= Math.abs(e - t)) return t;
                                        return e;
                                    })(e);
                                    t !== e || i(e), n(t);
                                },
                                onValueRender: () => null,
                                keyboardStep: 1,
                            },
                            l,
                        ),
                    ],
                }),
            ],
        })
    );
}
function eF(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: l, handleInternalChange: i } = eH(t),
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
                                    let l = parseInt(t, 10);
                                    if (isNaN(l)) return;
                                    let s = Math.max(0, Math.min(100, l));
                                    o(`${s}%`), (0, en.Cq)(), n(s);
                                })(e.target.value),
                            placeholder: `${U.kJ}%`,
                            className: eI.A9,
                        }),
                    ],
                }),
                (0, s.jsx)(
                    E.A,
                    {
                        initialValue: t,
                        defaultValue: U.kJ,
                        minValue: 0,
                        maxValue: 100,
                        onValueChange: (e) => {
                            (0, en.QJ)(), i(e), n(e);
                        },
                        onValueRender: () => null,
                        keyboardStep: 1,
                    },
                    l,
                ),
            ],
        })
    );
}
function eG(e) {
    let { isCoachmark: t, isMobile: n } = e,
        [l, i] = a.useState(!1),
        r = a.useRef(!1),
        [o, c] = a.useState(!1),
        d = a.useRef(null),
        h = a.useRef(null),
        x = a.useCallback(() => {
            (0, en.y4)();
            let e = (function () {
                let e = V[Math.floor(Math.random() * V.length)],
                    t = G[Math.floor(Math.random() * G.length)];
                if ("path1" == (0.2 > Math.random() ? "path1" : "path2")) {
                    let n = Math.floor(Math.random() * F.length),
                        l = Math.floor(Math.random() * F.length);
                    for (; l === n; ) l = Math.floor(Math.random() * F.length);
                    return {
                        type: "gradient",
                        colors: [F[n], F[l]],
                        angle: t,
                        intensity: e,
                        gradientType: "two-color",
                    };
                }
                {
                    let n = F[Math.floor(Math.random() * F.length)],
                        l = w[Math.floor(Math.random() * w.length)];
                    return {
                        type: "gradient",
                        colors: (function (e, t) {
                            try {
                                let n = P()(e),
                                    l = n.get("hsl.h"),
                                    s = n.get("hsl.s"),
                                    a = n.get("hsl.l");
                                switch (t) {
                                    case "analogous":
                                        return [
                                            P()
                                                .hsl(l - 30, s, a)
                                                .hex(),
                                            e,
                                            P()
                                                .hsl(l + 30, s, a)
                                                .hex(),
                                        ];
                                    case "complementary":
                                        let i;
                                        return (
                                            (i = P()
                                                .hsl((l + 180) % 360, s, a)
                                                .hex()),
                                            [e, P().mix(e, i, 0.5).hex(), i]
                                        );
                                    case "split-complementary":
                                        return [
                                            e,
                                            P()
                                                .hsl((l + 150) % 360, s, a)
                                                .hex(),
                                            P()
                                                .hsl((l + 210) % 360, s, a)
                                                .hex(),
                                        ];
                                    case "triadic":
                                        return [
                                            e,
                                            P()
                                                .hsl((l + 120) % 360, s, a)
                                                .hex(),
                                            P()
                                                .hsl((l + 240) % 360, s, a)
                                                .hex(),
                                        ];
                                    default:
                                        return [e];
                                }
                            } catch {
                                return [e];
                            }
                        })(n, l),
                        angle: t,
                        intensity: e,
                        gradientType: l,
                    };
                }
            })();
            U.ko
                .getState()
                .setAll({
                    colors: e.colors,
                    gradientAngle: e.angle ?? U.ko.getState().gradientAngle,
                    chassisMixAmount: e.intensity,
                });
        }, []);
    a.useEffect(() => {
        if (t)
            return (
                (r.current = !1),
                (d.current = setTimeout(() => {
                    r.current || i(!0);
                }, 5e3)),
                () => {
                    null != d.current && clearTimeout(d.current);
                }
            );
    }, [t]);
    let g = a.useCallback(() => {
            r.current = !0;
        }, []),
        f = a.useCallback(() => {
            i(!1);
        }, []),
        E = l && !o,
        j = () =>
            (0, s.jsx)(m.$, {
                buttonRef: h,
                variant: "secondary",
                onClick: x,
                onMouseEnter: () => c(!0),
                onMouseLeave: () => c(!1),
                icon: n
                    ? { type: "icon", asset: T.j }
                    : {
                          type: "rive",
                          asset: p.m,
                          riveProps: { dataBinding: { fill: A.A.colors.ICON_STRONG }, eventTargetRef: h },
                      },
                text: em.intl.string(eh.default.c9MBEH),
                fullWidth: !0,
            });
    return n
        ? j()
        : (0, s.jsx)(u.u, {
              title: em.intl.string(eh.default.NJ9m8Y),
              body: em.intl.string(eh.default["6pabtR"]),
              position: "left",
              asset: E ? (0, s.jsx)(T.j, {}) : void 0,
              forceOpen: l,
              onTooltipShow: g,
              onTooltipHide: f,
              targetElementRef: h,
              children: j(),
          });
}
function eV(e) {
    let { onApply: t, disabled: n, fullWidth: l } = e;
    return (0, s.jsx)(d.m, {
        text: em.intl.string(eh.default.SFyHIP),
        shouldShow: n,
        children: (0, s.jsx)(m.$, {
            variant: "primary",
            onClick: t,
            disabled: n,
            text: em.intl.string(em.t["1Qm822"]),
            fullWidth: l,
        }),
    });
}
function ew(e) {
    let { onSaveTheme: t, canApply: n } = e,
        l = (0, k.L)(eO.PremiumTypes.TIER_2);
    return (
        (0, en.wb)(l, S.A.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, s.jsx)("div", {
            className: eI.M0,
            children: l
                ? (0, s.jsx)(eV, { disabled: !n, onApply: t, fullWidth: !0 })
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
    let { onSaveTheme: t, canApply: n, metadata: l } = e,
        a = (0, k.L)(eO.PremiumTypes.TIER_2),
        i = (0, D.St)("custom_themes_editor_footer"),
        o = l?.from === N.xv.SHARE_MESSAGE;
    (0, en.wb)(a, S.A.CUSTOM_THEMES_EDITOR);
    let u = () => {
            (0, en.uk)(),
                (0, _.Dr)(c.M.CUSTOM_THEME_COACHMARK),
                l?.from === N.xv.SETTING
                    ? ((0, H.openUserSettings)(I.X.APPEARANCE_THEME_CATEGORY), (0, N.Jp)())
                    : l?.from === N.xv.CLIENT_THEMES_EDITOR
                      ? (0, N.nf)(N.HP.CLIENT_THEMES)
                      : (0, N.Jp)();
        },
        d = r()(eI.xQ, { [eI.NI]: !a }),
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
        className: d,
        children: a
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(eC, {}),
                      (0, s.jsx)(m.$, { variant: "secondary", onClick: u, text: em.intl.string(em.t["13/7kX"]) }),
                      (0, s.jsx)(eV, {
                          disabled: !n,
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
                                        location: S.A.PREMIUM_WISHLIST_CUSTOM_THEMES_EDITOR,
                                    }),
                                    h,
                                ],
                            })
                          : h,
                      (0, s.jsx)(m.$, {
                          variant: "secondary",
                          onClick: u,
                          text: o ? em.intl.string(em.t["13/7kX"]) : em.intl.string(em.t.Olc2K3),
                          fullWidth: !0,
                      }),
                  ],
              }),
    });
}
function eK(e) {
    let { metadata: t, markAsDismissed: n, isCoachmark: l, isMobile: i } = e,
        r = (function () {
            let [e] = a.useState(() => O.A.theme);
            return a.useCallback(
                (t) => {
                    let {
                        resetColors: n,
                        resetGradientAngle: l,
                        resetChassisMixAmount: s,
                        resetBaseTheme: a,
                    } = et(t, e);
                    U.ko.getState().setAll({ colors: n, gradientAngle: l, chassisMixAmount: s }),
                        "reset_button" === t ? Z(Y(a ?? O.A.theme)) : (0, R.XG)();
                    let i = K.eh.getSetting().backgroundGradientPresetId;
                    null != i && (0, W.bc)(i);
                },
                [e],
            );
        })(),
        u = (function () {
            let { colors: e, chassisMixAmount: t, gradientAngle: n } = (0, U.ko)(),
                l = (0, o.bG)([O.A], () => O.A.theme),
                [s] = a.useState(() => O.A.theme),
                {
                    resetColors: i,
                    resetGradientAngle: r,
                    resetChassisMixAmount: c,
                    resetBaseTheme: u,
                } = et("reset_button", s);
            return JSON.stringify(e) === JSON.stringify(i) && t === c && n === r && l === u;
        })(),
        d = a.useRef(!1),
        {
            colors: h,
            chassisMixAmount: g,
            gradientAngle: f,
            setColors: E,
            setChassisMixAmount: T,
            setGradientAngle: p,
        } = (0, U.ko)(),
        [A, b] = a.useState(h[0] ?? U.OT),
        k = (0, o.bG)([O.A], () => O.A.theme),
        y = (0, _.JZ)(c.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: I } = (0, v.Ay)(S.A.CUSTOM_THEMES_EDITOR),
        H = (0, o.bG)([z.A], () => z.A.getSavedCustomTheme()),
        D = async () => {
            (d.current = !0),
                await (0, C.u_)({
                    theme: k,
                    customUserThemeSettings: { colors: h, gradientColorStops: [], gradientAngle: f, baseMix: g },
                }),
                (0, en.Yl)(h, g, f, k, I),
                n?.(eR.i.TAKE_ACTION),
                y || (0, _.Dr)(c.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, N.Jp)(),
                (0, R.XG)();
        },
        J = h.length > 0;
    return (
        a.useEffect(
            () => () => {
                d.current || r(B.EDITOR_CLOSE);
            },
            [r],
        ),
        (0, M.Ay)(() => {
            if (!l) {
                let e = (h?.length ?? 0) > 0,
                    t = null != H;
                !e && t
                    ? (U.ko
                          .getState()
                          .setAll({ colors: H.colors, gradientAngle: H.gradient_angle, chassisMixAmount: H.base_mix }),
                      Z(H.base_theme))
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
                            (0, s.jsx)(eU, { markAsDismissed: n, isCoachmark: l }),
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
                                    (0, s.jsx)(eT, {
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
                                    h.length > 1 && (0, s.jsx)(eP, { gradientAngle: f, setGradientAngle: p }),
                                    (0, s.jsx)(eF, {
                                        chassisMixAmount: g,
                                        setChassisMixAmount: (e) => {
                                            T(e), 0 === h.length && ee(h, A, E);
                                        },
                                    }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: eI.WA,
                                children: [
                                    (0, s.jsx)(eG, { isCoachmark: l, isMobile: i }),
                                    (0, s.jsx)(m.$, {
                                        variant: "secondary",
                                        onClick: () => {
                                            r(B.RESET_BUTTON), (0, en.G_)();
                                        },
                                        disabled: u,
                                        text: em.intl.string(em.t.yBZMsQ),
                                        fullWidth: !0,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                l
                    ? (0, s.jsx)(ew, { onSaveTheme: D, canApply: J })
                    : (0, s.jsx)(e$, { onSaveTheme: D, canApply: J, metadata: t }),
            ],
        })
    );
}

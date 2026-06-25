n.r(t), n.d(t, { default: () => e$ });
var s,
    l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(17928),
    u = n(554146),
    c = n(459192),
    d = n(990078),
    m = n(815021),
    h = n(821609),
    x = n(834730),
    g = n(403581),
    f = n(534514),
    T = n(106236),
    E = n(926321),
    j = n(908803),
    S = n(661531),
    A = n(364522),
    C = n(817281),
    p = n(964486),
    v = n(793574),
    N = n(688810),
    M = n(793943),
    _ = n(826673),
    b = n(792656),
    k = n(757036),
    y = n(400669),
    R = n(973654),
    O = n(363195),
    I = n(780964),
    H = n(766075),
    J = n(909536),
    D = n(174459),
    U = n(467135),
    L = n(823459),
    P = n(935444),
    G = n(462887),
    V = n(885386),
    $ = n(74396),
    w = n(385803),
    K = n(818348),
    W = (((s = {}).RESET_BUTTON = "reset_button"), (s.EDITOR_CLOSE = "editor_close"), s);
function F(e) {
    return (0, G.M)(e) ? K.NJ.DARK : K.NJ.LIGHT;
}
function z(e) {
    let t = V.eh.getSetting(),
        n =
            null != t.backgroundGradientPresetId &&
            t.backgroundGradientPresetId in w.ag &&
            w.ag[t.backgroundGradientPresetId].theme !== e;
    (0, R.GQ)(e), n && (0, L.S8)();
}
function Q() {
    let e = F(O.A.theme);
    e !== O.A.theme && z(e);
}
function X(e, t, n) {
    0 === e.length && n([t]), Q();
}
function Y(e, t) {
    let n = V.eh.getSetting().customUserThemeSettings,
        s = $.A.getSavedCustomTheme(),
        l = "reset_button" === e ? [U.OT] : [],
        i = 0,
        a = U.kJ,
        r = t;
    return (
        n?.colors != null
            ? ((l = n.colors), (i = n.gradientAngle ?? 0), (a = n.baseMix ?? U.kJ))
            : "reset_button" === e &&
              null != s &&
              ((l = s.colors), (i = s.gradient_angle ?? 0), (a = s.base_mix ?? U.kJ), (r = s.base_theme)),
        { resetColors: l, resetGradientAngle: i, resetChassisMixAmount: a, resetBaseTheme: r }
    );
}
var B = n(738419),
    Z = n(310784),
    q = n.n(Z),
    ee = n(156828),
    et = n(317097),
    en = n(714385),
    es = n(408278),
    el = n(289873),
    ei = n(939249),
    ea = n(834040),
    er = n(499373),
    eo = n(971745),
    eu = n(491404),
    ec = n(375708),
    ed = n(266235);
let em = (0, ee.Fe)({
    createPromise: () => Promise.all([n.e("66136"), n.e("22687"), n.e("20038"), n.e("86537")]).then(n.bind(n, 33136)),
    webpackId: 33136,
    name: "CustomThemeColorPickerControlV2",
    renderLoader: function () {
        return (0, l.jsx)("div", { className: ed.wG, children: (0, l.jsx)(el.y, {}) });
    },
});
function eh(e) {
    let { colors: t, selectedIndex: n, onColorSelect: s } = e,
        [a, o] = i.useMemo(() => {
            let e = t.map((e, n) => (t.length < 1 ? 0 : (n / (t.length - 1)) * 80 + 10)),
                n = t.map((t, n) => `${t} ${e[n]}%`).join(", ");
            return [e, { background: `linear-gradient(to right, ${n})` }];
        }, [t]);
    return (0, l.jsx)("div", {
        className: ed.wS,
        style: o,
        children: t.map((e, t) => {
            let o = a[t],
                u = t === n;
            return (0, l.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, l.jsx)(ei.D, {
                            className: r()(ed.pX, { [ed.wH]: u }),
                            style: { left: `${o}%`, backgroundColor: e },
                            onClick: () => s(t),
                            children: (0, l.jsx)("div", { className: ed.Px }),
                        }),
                        u && (0, l.jsx)("div", { className: ed.gQ, style: { left: `${o}%` } }),
                    ],
                },
                t,
            );
        }),
    });
}
function ex(e) {
    let { color: t } = e,
        n = i.useMemo(() => ({ backgroundColor: (0, et.qt)(t) ? t : "#000000" }), [t]);
    return (0, l.jsx)("div", { className: ed.ld, style: n, "aria-label": "Color preview" });
}
function eg(e) {
    let { value: t, onChange: n, className: s, colors: a, setColors: o } = e,
        u = (0, eo.A)(),
        [c, m] = i.useState(0),
        [x, g] = i.useState(t);
    function f(e) {
        let t,
            s = (t = e.trim()).startsWith("#") ? t : t.length > 0 ? `#${t}` : t;
        if ((g(s), (0, et.qt)(s) && ((0, B.CE)(), n(s), a.length > 0))) {
            let e = [...a];
            (e[c] = s), o(e);
        }
    }
    i.useEffect(() => {
        if (a.length > 0 && c < a.length) {
            let e = a[c];
            (0, et.qt)(e) && (g(e), n(e));
        }
        c >= a.length && m(0);
    }, [c, a, n]);
    let T = i.useCallback((e) => {
            g(e.hex);
        }, []),
        E = async () => {
            if (null != u)
                try {
                    let { sRGBHex: e } = await u.open();
                    (0, B.AL)(), f(e);
                } catch {}
        },
        j = a.length > 1;
    return (0, l.jsxs)("div", {
        className: r()(ed.kL, s),
        children: [
            j &&
                (0, l.jsx)(eh, {
                    colors: a,
                    selectedIndex: c,
                    onColorSelect: function (e) {
                        m(e), (0, B.mx)();
                    },
                }),
            (0, l.jsx)(em, {
                onChange: T,
                onChangeComplete: function (e) {
                    if (((0, B.VE)(), n(e.hex), a.length > 0)) {
                        let t = [...a];
                        (t[c] = e.hex), o(t);
                    }
                },
                color: x,
            }),
            (0, l.jsxs)("div", {
                className: ed.Xr,
                children: [
                    (0, l.jsx)(ex, { color: x }),
                    (0, l.jsx)("input", {
                        className: ed.Im,
                        value: x.toUpperCase(),
                        onChange: (e) => f(e.target.value),
                        maxLength: 7,
                        placeholder: U.OT,
                        type: "text",
                    }),
                    (0, l.jsxs)("div", {
                        className: ed.hE,
                        children: [
                            null != u &&
                                (0, l.jsx)(d.m, {
                                    text: ec.intl.string(eu.default["NCFz+N"]),
                                    children: (0, l.jsx)(es.K, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: E,
                                        icon: en.d,
                                        "aria-label": ec.intl.string(eu.default["NCFz+N"]),
                                    }),
                                }),
                            j &&
                                (0, l.jsx)(d.m, {
                                    text: ec.intl.string(ec.t.N86XcP),
                                    children: (0, l.jsx)(es.K, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: () =>
                                            (function (e) {
                                                if (a.length > 1) {
                                                    (0, B.f1)();
                                                    let t = a.filter((t, n) => n !== e);
                                                    o(t), c >= t.length ? m(t.length - 1) : c > e && m(c - 1);
                                                }
                                            })(c),
                                        icon: ea.Q,
                                        "aria-label": ec.intl.string(ec.t.N86XcP),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            a.length < 5 &&
                (0, l.jsx)(h.$, {
                    variant: "secondary",
                    size: "md",
                    onClick: () => {
                        if (5 === a.length) return;
                        0 === a.length && Q(), (0, B.HU)();
                        let e = a.length > 0 ? a[a.length - 1] : x,
                            t =
                                a.length > 0
                                    ? (function (e) {
                                          if (!(0, et.qt)(e)) return e;
                                          let t = q()(e);
                                          return t.set("hsl.h", (t.get("hsl.h") + 15) % 360).hex();
                                      })(e)
                                    : e,
                            n = [...a, t];
                        o(n), m(n.length - 1);
                    },
                    icon: er.T,
                    text: ec.intl.string(eu.default.JUQcdT),
                    fullWidth: !0,
                }),
        ],
    });
}
var ef = n(192308),
    eT = n(405433),
    eE = n(457417);
function ej() {
    return (0, l.jsx)(d.m, {
        text: ec.intl.string(ec.t.RDE0Sc),
        children: (0, l.jsx)(es.K, {
            "aria-label": ec.intl.string(eu.default.zgFs8C),
            icon: eT.l,
            variant: "icon-only",
            onClick: () => {
                (0, ef.openModalLazy)(
                    async () => {
                        let { CustomThemesShareModalWrapper: e } = await Promise.all([
                            n.e("48794"),
                            n.e("78775"),
                            n.e("41160"),
                            n.e("19983"),
                            n.e("86380"),
                            n.e("52564"),
                            n.e("11868"),
                            n.e("71696"),
                            n.e("44078"),
                            n.e("12126"),
                            n.e("64633"),
                            n.e("17665"),
                            n.e("8872"),
                            n.e("68006"),
                            n.e("61661"),
                            n.e("58247"),
                            n.e("38789"),
                            n.e("53915"),
                            n.e("46903"),
                            n.e("69738"),
                            n.e("93601"),
                            n.e("41842"),
                            n.e("61749"),
                            n.e("36027"),
                            n.e("84346"),
                            n.e("97106"),
                            n.e("10038"),
                            n.e("11586"),
                            n.e("64923"),
                            n.e("85414"),
                            n.e("87870"),
                            n.e("11006"),
                            n.e("40719"),
                            n.e("44384"),
                            n.e("41577"),
                            n.e("93514"),
                            n.e("30320"),
                            n.e("8289"),
                            n.e("24839"),
                            n.e("16614"),
                            n.e("36732"),
                            n.e("63661"),
                            n.e("80309"),
                            n.e("4693"),
                            n.e("50878"),
                            n.e("2912"),
                            n.e("16336"),
                            n.e("59539"),
                            n.e("75518"),
                            n.e("34041"),
                            n.e("44204"),
                            n.e("10849"),
                            n.e("51416"),
                            n.e("87751"),
                            n.e("76375"),
                            n.e("82372"),
                            n.e("12633"),
                            n.e("68880"),
                            n.e("74577"),
                            n.e("44613"),
                            n.e("6643"),
                            n.e("70369"),
                            n.e("12932"),
                            n.e("77573"),
                            n.e("65126"),
                            n.e("73990"),
                            n.e("50175"),
                            n.e("78071"),
                            n.e("41724"),
                            n.e("86744"),
                            n.e("3311"),
                            n.e("58865"),
                            n.e("22084"),
                            n.e("57801"),
                            n.e("79183"),
                            n.e("71455"),
                            n.e("51628"),
                            n.e("32911"),
                            n.e("84868"),
                            n.e("6919"),
                            n.e("37363"),
                            n.e("9466"),
                            n.e("84949"),
                            n.e("71334"),
                            n.e("10940"),
                            n.e("77015"),
                            n.e("61355"),
                            n.e("97101"),
                            n.e("45446"),
                            n.e("41117"),
                            n.e("33958"),
                            n.e("84411"),
                            n.e("15426"),
                            n.e("54377"),
                            n.e("10436"),
                            n.e("19353"),
                            n.e("73523"),
                            n.e("65485"),
                            n.e("69184"),
                            n.e("71436"),
                            n.e("66270"),
                            n.e("71716"),
                            n.e("27184"),
                            n.e("66238"),
                            n.e("78771"),
                            n.e("17640"),
                            n.e("7266"),
                            n.e("65438"),
                            n.e("38413"),
                            n.e("11152"),
                            n.e("74756"),
                            n.e("89969"),
                            n.e("97865"),
                            n.e("12030"),
                            n.e("75370"),
                            n.e("68463"),
                            n.e("37842"),
                            n.e("67962"),
                            n.e("39754"),
                            n.e("34689"),
                            n.e("49996"),
                            n.e("98515"),
                            n.e("45522"),
                            n.e("11411"),
                            n.e("8473"),
                            n.e("49279"),
                            n.e("85244"),
                            n.e("84059"),
                            n.e("16633"),
                            n.e("16058"),
                            n.e("64248"),
                            n.e("6712"),
                            n.e("1491"),
                            n.e("32394"),
                            n.e("79479"),
                            n.e("20939"),
                            n.e("23443"),
                            n.e("47336"),
                            n.e("48058"),
                            n.e("35837"),
                            n.e("89088"),
                            n.e("48902"),
                            n.e("38119"),
                            n.e("45914"),
                            n.e("22843"),
                            n.e("32577"),
                            n.e("2423"),
                            n.e("26729"),
                            n.e("76487"),
                            n.e("93247"),
                            n.e("43440"),
                            n.e("97867"),
                            n.e("54702"),
                            n.e("7364"),
                            n.e("46195"),
                            n.e("26736"),
                            n.e("58201"),
                            n.e("42977"),
                            n.e("5990"),
                            n.e("77388"),
                            n.e("47813"),
                            n.e("36810"),
                            n.e("840"),
                            n.e("16907"),
                            n.e("35422"),
                            n.e("2043"),
                            n.e("14148"),
                            n.e("57836"),
                            n.e("39367"),
                            n.e("9473"),
                            n.e("35186"),
                            n.e("66225"),
                            n.e("76084"),
                            n.e("22944"),
                            n.e("33365"),
                            n.e("51695"),
                            n.e("91628"),
                            n.e("91680"),
                            n.e("57036"),
                            n.e("57174"),
                            n.e("86847"),
                            n.e("48226"),
                            n.e("24199"),
                            n.e("54048"),
                            n.e("88941"),
                            n.e("61379"),
                            n.e("25693"),
                            n.e("32606"),
                            n.e("28154"),
                            n.e("4369"),
                            n.e("34236"),
                            n.e("11523"),
                            n.e("4361"),
                            n.e("77473"),
                            n.e("31549"),
                            n.e("23353"),
                            n.e("18943"),
                            n.e("7167"),
                            n.e("56048"),
                            n.e("25279"),
                            n.e("39810"),
                            n.e("87306"),
                            n.e("57598"),
                            n.e("92789"),
                            n.e("31390"),
                            n.e("37687"),
                            n.e("41043"),
                            n.e("43039"),
                            n.e("26780"),
                            n.e("44265"),
                            n.e("48804"),
                            n.e("95569"),
                            n.e("84103"),
                            n.e("17225"),
                            n.e("78179"),
                            n.e("65030"),
                            n.e("63095"),
                            n.e("70653"),
                            n.e("52266"),
                            n.e("53039"),
                            n.e("96123"),
                            n.e("76640"),
                            n.e("92583"),
                            n.e("64615"),
                            n.e("31825"),
                            n.e("36320"),
                            n.e("97526"),
                            n.e("79525"),
                            n.e("82069"),
                            n.e("75134"),
                            n.e("1462"),
                            n.e("99666"),
                            n.e("55184"),
                            n.e("74926"),
                            n.e("28866"),
                            n.e("50015"),
                            n.e("72442"),
                            n.e("54282"),
                            n.e("21574"),
                            n.e("90889"),
                            n.e("62931"),
                            n.e("18181"),
                            n.e("59880"),
                            n.e("14805"),
                            n.e("73547"),
                            n.e("24761"),
                            n.e("99593"),
                            n.e("45587"),
                            n.e("83057"),
                            n.e("50997"),
                            n.e("36845"),
                            n.e("2773"),
                            n.e("27582"),
                            n.e("18573"),
                            n.e("29177"),
                            n.e("21435"),
                            n.e("61935"),
                            n.e("21856"),
                            n.e("58038"),
                            n.e("24622"),
                            n.e("32551"),
                            n.e("62680"),
                            n.e("40218"),
                            n.e("43426"),
                            n.e("96443"),
                            n.e("65743"),
                            n.e("87079"),
                            n.e("88559"),
                            n.e("21825"),
                            n.e("60177"),
                            n.e("25637"),
                            n.e("75676"),
                            n.e("23532"),
                            n.e("18441"),
                            n.e("43549"),
                            n.e("31644"),
                            n.e("89790"),
                            n.e("86949"),
                            n.e("52574"),
                            n.e("27773"),
                            n.e("63618"),
                            n.e("53374"),
                            n.e("93158"),
                            n.e("56313"),
                            n.e("31445"),
                            n.e("71577"),
                            n.e("52073"),
                            n.e("9915"),
                            n.e("34691"),
                            n.e("92731"),
                            n.e("28152"),
                            n.e("36126"),
                            n.e("7962"),
                            n.e("64325"),
                            n.e("1555"),
                            n.e("32823"),
                            n.e("44780"),
                            n.e("65617"),
                            n.e("36946"),
                            n.e("92639"),
                            n.e("44385"),
                            n.e("40963"),
                            n.e("90480"),
                            n.e("66031"),
                            n.e("94317"),
                            n.e("62128"),
                        ]).then(n.bind(n, 583955));
                        return (t) => (0, l.jsx)(e, { ...t });
                    },
                    { modalKey: eE.dJ },
                );
            },
        }),
    });
}
var eS = n(943255),
    eA = n(575181),
    eC = n(366010),
    ep = n(629584),
    ev = n(319305);
function eN(e, t) {
    return e === t ? ev.HE : void 0;
}
function eM() {
    let e = (0, o.bG)([O.A], () => O.A.theme),
        t = (0, eC.M)(e) ? K.NJ.DARK : K.NJ.LIGHT,
        n = [
            {
                name: "",
                value: K.NJ.DARK,
                icon: eS.Z,
                className: eN(t, K.NJ.DARK),
                tooltip: ec.intl.string(eu.default["Dk+OWY"]),
                tooltipAriaLabel: ec.intl.string(eu.default["Dk+OWY"]),
            },
            {
                name: "",
                value: K.NJ.LIGHT,
                icon: eA.F,
                className: eN(t, K.NJ.LIGHT),
                tooltip: ec.intl.string(eu.default["5vlJkY"]),
                tooltipAriaLabel: ec.intl.string(eu.default["5vlJkY"]),
            },
        ];
    return (0, l.jsx)(ep.I, {
        className: ev.t7,
        optionClassName: ev.aF,
        options: n,
        value: t,
        onChange: (e) => {
            let { value: t } = e;
            (0, B.dR)(), z(t);
        },
        look: "pill",
    });
}
var e_ = n(652215),
    eb = n(49999),
    ek = n(788868),
    ey = n(277817);
function eR(e) {
    let [t, n] = i.useState(0),
        [s, l] = i.useState(!1),
        a = i.useRef(e);
    return (
        i.useEffect(() => {
            e === a.current || s || n((e) => e + 1), (a.current = e), l(!1);
        }, [e, s]),
        { key: t, handleInternalChange: i.useCallback((e) => (l(!0), e), []) }
    );
}
function eO(e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsx)("div", {
        className: ey.b,
        children: (0, l.jsx)(m.J, {
            size: "sm",
            onClick: () => {
                t?.(eb.i.USER_DISMISS), (0, M.Jp)(), (0, L.S8)();
            },
        }),
    });
}
function eI() {
    return (0, l.jsxs)("div", {
        className: ey.N1,
        children: [
            (0, l.jsx)(x.E, { variant: "text-md/bold", children: ec.intl.string(eu.default.AsmU85) }),
            (0, l.jsx)(d.m, {
                text: ec.intl.string(ec.t["5AFxuK"]),
                children: (0, l.jsx)(g.t, { size: "custom", height: 20, width: 20, colorClass: ey.oU }),
            }),
            (0, l.jsx)(eO, {}),
        ],
    });
}
function eH(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, _.JZ)(u.M.CUSTOM_THEME_COACHMARK)
        ? n
            ? (0, l.jsx)(eJ, { markAsDismissed: t })
            : (0, l.jsx)(eI, {})
        : (0, l.jsx)(eJ, { markAsDismissed: () => (0, _.Dr)(u.M.CUSTOM_THEME_COACHMARK) });
}
function eJ(e) {
    let { markAsDismissed: t } = e,
        n = (0, k.L)(ek.PremiumTypes.TIER_2);
    return (0, l.jsxs)("div", {
        className: ey.CG,
        children: [
            (0, l.jsxs)("div", {
                className: ey.dI,
                children: [
                    (0, l.jsx)(f.D, {
                        variant: "heading-lg/extrabold",
                        children: ec.intl.string(eu.default["23QUzv"]),
                    }),
                    (0, l.jsx)(eO, { markAsDismissed: t }),
                ],
            }),
            (0, l.jsx)(x.E, {
                className: ey.VA,
                variant: "text-sm/medium",
                color: "text-muted",
                children: ec.intl.string(n ? eu.default.TRCE4g : eu.default["UV/Vtv"]),
            }),
        ],
    });
}
function eD(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: s, handleInternalChange: a } = eR(t),
        [o, u] = i.useState(`${Math.round(t)}\xb0`);
    return (
        i.useEffect(() => {
            u(`${Math.round(t)}\xb0`);
        }, [t]),
        (0, l.jsxs)("div", {
            className: r()(ey.xJ, ey.Gz),
            children: [
                (0, l.jsxs)("div", {
                    className: ey.Vt,
                    children: [
                        (0, l.jsx)(x.E, { variant: "text-md/medium", children: ec.intl.string(eu.default.dZkwgx) }),
                        (0, l.jsx)("input", {
                            type: "text",
                            value: o,
                            onChange: (e) =>
                                (function (e) {
                                    let t = e.replace(/\xb0/g, "").trim();
                                    if ("" === t) return void u("");
                                    let s = parseInt(t, 10);
                                    if (isNaN(s)) return;
                                    let l = Math.max(0, Math.min(360, s));
                                    u(`${l}\xb0`), (0, B.l6)(), n(l);
                                })(e.target.value),
                            placeholder: "0\xb0",
                            className: ey.A9,
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: ey.Zp,
                    children: [
                        (0, l.jsxs)("div", {
                            className: ey.p1,
                            children: [
                                (0, l.jsx)("div", { className: ey.uu }),
                                (0, l.jsx)("div", { className: ey.uu }),
                                (0, l.jsx)("div", { className: ey.VD }),
                                (0, l.jsx)("div", { className: ey.uu }),
                                (0, l.jsx)("div", { className: ey.uu }),
                            ],
                        }),
                        (0, l.jsx)(
                            T.A,
                            {
                                initialValue: t,
                                defaultValue: 0,
                                minValue: 0,
                                maxValue: 360,
                                fillStyles: { display: "none" },
                                onValueChange: (e) => {
                                    (0, B.PT)();
                                    let t = (function (e) {
                                        for (let t of [90, 180, 270]) if (10 >= Math.abs(e - t)) return t;
                                        return e;
                                    })(e);
                                    t !== e || a(e), n(t);
                                },
                                onValueRender: () => null,
                                keyboardStep: 1,
                            },
                            s,
                        ),
                    ],
                }),
            ],
        })
    );
}
function eU(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: s, handleInternalChange: a } = eR(t),
        [r, o] = i.useState(`${Math.round(t)}%`);
    return (
        i.useEffect(() => {
            o(`${Math.round(t)}%`);
        }, [t]),
        (0, l.jsxs)("div", {
            className: ey.xJ,
            children: [
                (0, l.jsxs)("div", {
                    className: ey.Vt,
                    children: [
                        (0, l.jsx)(x.E, { variant: "text-md/medium", children: ec.intl.string(eu.default.xlXkaL) }),
                        (0, l.jsx)("input", {
                            type: "text",
                            value: r,
                            onChange: (e) =>
                                (function (e) {
                                    let t = e.replace(/%/g, "").trim();
                                    if ("" === t) return void o("");
                                    let s = parseInt(t, 10);
                                    if (isNaN(s)) return;
                                    let l = Math.max(0, Math.min(100, s));
                                    o(`${l}%`), (0, B.Cq)(), n(l);
                                })(e.target.value),
                            placeholder: `${U.kJ}%`,
                            className: ey.A9,
                        }),
                    ],
                }),
                (0, l.jsx)(
                    T.A,
                    {
                        initialValue: t,
                        defaultValue: U.kJ,
                        minValue: 0,
                        maxValue: 100,
                        onValueChange: (e) => {
                            (0, B.QJ)(), a(e), n(e);
                        },
                        onValueRender: () => null,
                        keyboardStep: 1,
                    },
                    s,
                ),
            ],
        })
    );
}
function eL(e) {
    let { isCoachmark: t, isMobile: n } = e,
        [s, a] = i.useState(!1),
        r = i.useRef(!1),
        [o, u] = i.useState(!1),
        d = i.useRef(null),
        m = i.useRef(null),
        x = i.useCallback(() => {
            (0, B.y4)();
            let e = (0, P.mf)();
            U.ko
                .getState()
                .setAll({
                    colors: e.colors,
                    gradientAngle: e.angle ?? U.ko.getState().gradientAngle,
                    chassisMixAmount: e.intensity,
                });
        }, []);
    i.useEffect(() => {
        if (t)
            return (
                (r.current = !1),
                (d.current = setTimeout(() => {
                    r.current || a(!0);
                }, 5e3)),
                () => {
                    null != d.current && clearTimeout(d.current);
                }
            );
    }, [t]);
    let g = i.useCallback(() => {
            r.current = !0;
        }, []),
        f = i.useCallback(() => {
            a(!1);
        }, []),
        T = s && !o;
    function A() {
        return (0, l.jsx)(h.$, {
            buttonRef: m,
            variant: "secondary",
            onClick: x,
            onMouseEnter: () => u(!0),
            onMouseLeave: () => u(!1),
            icon: n
                ? { type: "icon", asset: E.j }
                : {
                      type: "rive",
                      asset: j.m,
                      riveProps: { dataBinding: { fill: S.A.colors.ICON_STRONG }, eventTargetRef: m },
                  },
            text: ec.intl.string(eu.default.c9MBEH),
            fullWidth: !0,
        });
    }
    return n
        ? A()
        : (0, l.jsx)(c.u, {
              title: ec.intl.string(eu.default.NJ9m8Y),
              body: ec.intl.string(eu.default["6pabtR"]),
              position: "left",
              asset: T ? (0, l.jsx)(E.j, {}) : void 0,
              forceOpen: s,
              onTooltipShow: g,
              onTooltipHide: f,
              targetElementRef: m,
              children: A(),
          });
}
function eP(e) {
    let { onApply: t, disabled: n, fullWidth: s } = e;
    return (0, l.jsx)(d.m, {
        text: ec.intl.string(eu.default.SFyHIP),
        shouldShow: n,
        children: (0, l.jsx)(h.$, {
            variant: "primary",
            onClick: t,
            disabled: n,
            text: ec.intl.string(ec.t["1Qm822"]),
            fullWidth: s,
        }),
    });
}
function eG(e) {
    let { onSaveTheme: t, canApply: n } = e,
        s = (0, k.L)(ek.PremiumTypes.TIER_2);
    return (
        (0, B.wb)(s, v.A.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, l.jsx)("div", {
            className: ey.M0,
            children: s
                ? (0, l.jsx)(eP, { disabled: !n, onApply: t, fullWidth: !0 })
                : (0, l.jsx)(b.A, {
                      subscriptionTier: ek.pe.TIER_2,
                      buttonTextOverride: ec.intl.string(ec.t.JST6jl),
                      premiumModalAnalyticsLocation: {
                          page: e_.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: e_.JJy.CUSTOM_THEMES_COACHMARK_FOOTER,
                      },
                      fullWidth: !0,
                  }),
        })
    );
}
function eV(e) {
    let { onSaveTheme: t, canApply: n, metadata: s } = e,
        i = (0, k.L)(ek.PremiumTypes.TIER_2),
        a = (0, J.St)("custom_themes_editor_footer"),
        o = s?.from === M.xv.SHARE_MESSAGE;
    function c() {
        (0, L.S8)(),
            (0, B.uk)(),
            (0, _.Dr)(u.M.CUSTOM_THEME_COACHMARK),
            s?.from === M.xv.SETTING
                ? ((0, H.openUserSettings)(I.X.APPEARANCE_THEME_CATEGORY), (0, M.Jp)())
                : s?.from === M.xv.CLIENT_THEMES_EDITOR
                  ? (0, M.nf)(M.HP.CLIENT_THEMES)
                  : (0, M.Jp)();
    }
    (0, B.wb)(i, v.A.CUSTOM_THEMES_EDITOR);
    let d = r()(ey.xQ, { [ey.NI]: !i }),
        m = (0, l.jsx)(b.A, {
            subscriptionTier: ek.pe.TIER_2,
            defaultTextOverride: ec.intl.string(ec.t.pj0XBN),
            premiumModalAnalyticsLocation: {
                page: e_.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                section: e_.JJy.CUSTOM_THEMES_FOOTER,
            },
            fullWidth: !0,
        });
    return (0, l.jsx)("div", {
        className: d,
        children: i
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(ej, {}),
                      (0, l.jsx)(h.$, { variant: "secondary", onClick: c, text: ec.intl.string(ec.t["13/7kX"]) }),
                      (0, l.jsx)(eP, {
                          disabled: !n,
                          onApply: () => {
                              o && D.default.track(e_.HAw.CUSTOM_THEME_SHARE_APPLIED, {}), t();
                          },
                      }),
                  ],
              })
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      a
                          ? (0, l.jsxs)("div", {
                                className: ey.rV,
                                children: [
                                    (0, l.jsx)(y.l, {
                                        size: "md",
                                        className: ey.Tf,
                                        location: v.A.PREMIUM_WISHLIST_CUSTOM_THEMES_EDITOR,
                                    }),
                                    m,
                                ],
                            })
                          : m,
                      (0, l.jsx)(h.$, {
                          variant: "secondary",
                          onClick: c,
                          text: o ? ec.intl.string(ec.t["13/7kX"]) : ec.intl.string(ec.t.Olc2K3),
                          fullWidth: !0,
                      }),
                  ],
              }),
    });
}
function e$(e) {
    let { metadata: t, markAsDismissed: n, isCoachmark: s, isMobile: a } = e,
        r = (function () {
            let [e] = i.useState(() => O.A.theme);
            return i.useCallback(
                (t) => {
                    let {
                        resetColors: n,
                        resetGradientAngle: s,
                        resetChassisMixAmount: l,
                        resetBaseTheme: i,
                    } = Y(t, e);
                    U.ko.getState().setAll({ colors: n, gradientAngle: s, chassisMixAmount: l }),
                        "reset_button" === t ? z(F(i ?? O.A.theme)) : (0, R.XG)();
                    let a = V.eh.getSetting().backgroundGradientPresetId;
                    null != a && (0, L.bc)(a);
                },
                [e],
            );
        })(),
        c = (function () {
            let { colors: e, chassisMixAmount: t, gradientAngle: n } = (0, U.ko)(),
                s = (0, o.bG)([O.A], () => O.A.theme),
                [l] = i.useState(() => O.A.theme),
                {
                    resetColors: a,
                    resetGradientAngle: r,
                    resetChassisMixAmount: u,
                    resetBaseTheme: c,
                } = Y("reset_button", l);
            return JSON.stringify(e) === JSON.stringify(a) && t === u && n === r && s === c;
        })(),
        d = i.useRef(!1),
        {
            colors: m,
            chassisMixAmount: g,
            gradientAngle: f,
            setColors: T,
            setChassisMixAmount: E,
            setGradientAngle: j,
        } = (0, U.ko)(),
        [S, b] = i.useState(m[0] ?? U.OT),
        k = (0, o.bG)([O.A], () => O.A.theme),
        y = (0, _.JZ)(u.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: I } = (0, N.Ay)(v.A.CUSTOM_THEMES_EDITOR),
        H = (0, o.bG)([$.A], () => $.A.getSavedCustomTheme());
    async function J() {
        (d.current = !0),
            await (0, C.u_)({
                theme: k,
                customUserThemeSettings: { colors: m, gradientColorStops: [], gradientAngle: f, baseMix: g },
            }),
            (0, B.Yl)(m, g, f, k, I),
            n?.(eb.i.TAKE_ACTION),
            y || (0, _.Dr)(u.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
            (0, M.Jp)(),
            (0, R.XG)();
    }
    let D = m.length > 0;
    return (
        i.useEffect(
            () => () => {
                d.current || r(W.EDITOR_CLOSE);
            },
            [r],
        ),
        (0, p.Ay)(() => {
            if (!s) {
                let e = (m?.length ?? 0) > 0,
                    t = null != H;
                !e && t
                    ? (U.ko
                          .getState()
                          .setAll({ colors: H.colors, gradientAngle: H.gradient_angle, chassisMixAmount: H.base_mix }),
                      z(H.base_theme))
                    : X(m, S, T);
            }
        }),
        (0, l.jsxs)("div", {
            className: a ? ey.AA : ey.kL,
            "data-app-right-panel": !a,
            children: [
                (0, l.jsx)(A.Ip, {
                    children: (0, l.jsxs)("div", {
                        className: ey.sV,
                        children: [
                            (0, l.jsx)(eH, { markAsDismissed: n, isCoachmark: s }),
                            (0, l.jsxs)("div", {
                                className: ey.uW,
                                children: [
                                    (0, l.jsx)(x.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: ec.intl.string(eu.default.o2NfLF),
                                    }),
                                    (0, l.jsx)(eM, {}),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: ey.uW,
                                children: [
                                    (0, l.jsx)(x.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: ec.intl.string(eu.default.uSL2Gy),
                                    }),
                                    (0, l.jsx)(eg, {
                                        onChange: (e) => {
                                            b(e), 0 === m.length && X(m, e, T);
                                        },
                                        value: S,
                                        colors: m,
                                        setColors: T,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: ey.uW,
                                children: [
                                    (0, l.jsx)(x.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: ec.intl.string(eu.default.F1t0c8),
                                    }),
                                    m.length > 1 && (0, l.jsx)(eD, { gradientAngle: f, setGradientAngle: j }),
                                    (0, l.jsx)(eU, {
                                        chassisMixAmount: g,
                                        setChassisMixAmount: (e) => {
                                            E(e), 0 === m.length && X(m, S, T);
                                        },
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: ey.WA,
                                children: [
                                    (0, l.jsx)(eL, { isCoachmark: s, isMobile: a }),
                                    (0, l.jsx)(h.$, {
                                        variant: "secondary",
                                        onClick: function () {
                                            r(W.RESET_BUTTON), (0, B.G_)();
                                        },
                                        disabled: c,
                                        text: ec.intl.string(ec.t.yBZMsQ),
                                        fullWidth: !0,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                s
                    ? (0, l.jsx)(eG, { onSaveTheme: J, canApply: D })
                    : (0, l.jsx)(eV, { onSaveTheme: J, canApply: D, metadata: t }),
            ],
        })
    );
}

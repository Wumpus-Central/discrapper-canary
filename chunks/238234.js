n.r(t), n.d(t, { default: () => ew });
var s,
    l = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(17928),
    c = n(554146),
    u = n(459192),
    d = n(815021),
    m = n(821609),
    h = n(834730),
    x = n(866665),
    g = n(403581),
    f = n(297264),
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
    I = n(973654),
    R = n(363195),
    O = n(780964),
    H = n(843010),
    D = n(766075),
    J = n(909536),
    U = n(174459),
    L = n(467135),
    P = n(823459),
    G = n(935444),
    V = n(462887),
    $ = n(885386),
    w = n(74396),
    K = n(385803),
    W = n(818348),
    F = (((s = {}).RESET_BUTTON = "reset_button"), (s.EDITOR_CLOSE = "editor_close"), s);
function X(e) {
    return (0, V.M)(e) ? W.NJ.DARK : W.NJ.LIGHT;
}
function z(e) {
    let t = $.eh.getSetting(),
        n =
            null != t.backgroundGradientPresetId &&
            t.backgroundGradientPresetId in K.ag &&
            K.ag[t.backgroundGradientPresetId].theme !== e;
    (0, I.GQ)(e), n && (0, P.S8)();
}
function Q() {
    let e = X(R.A.theme);
    e !== R.A.theme && z(e);
}
function Y(e, t, n) {
    0 === e.length && n([t]), Q();
}
function B(e, t) {
    let n = $.eh.getSetting().customUserThemeSettings,
        s = w.A.getSavedCustomTheme(),
        l = "reset_button" === e ? [L.OT] : [],
        i = 0,
        a = L.kJ,
        r = t;
    return (
        n?.colors != null
            ? ((l = n.colors), (i = n.gradientAngle ?? 0), (a = n.baseMix ?? L.kJ))
            : "reset_button" === e &&
              null != s &&
              ((l = s.colors), (i = s.gradient_angle ?? 0), (a = s.base_mix ?? L.kJ), (r = s.base_theme)),
        { resetColors: l, resetGradientAngle: i, resetChassisMixAmount: a, resetBaseTheme: r }
    );
}
var q = n(738419),
    Z = n(310784),
    ee = n.n(Z),
    et = n(156828),
    en = n(317097),
    es = n(714385),
    el = n(408278),
    ei = n(289873),
    ea = n(939249),
    er = n(834040),
    eo = n(499373),
    ec = n(971745),
    eu = n(693227),
    ed = n(375708),
    em = n(946979);
let eh = (0, et.Fe)({
    createPromise: () =>
        Promise.all([n.e("884368"), n.e("869047"), n.e("593279"), n.e("936920"), n.e("486537")]).then(n.bind(n, 33136)),
    webpackId: 33136,
    name: "CustomThemeColorPickerControlV2",
    renderLoader: function () {
        return (0, l.jsx)("div", { className: em.wG, children: (0, l.jsx)(ei.y, {}) });
    },
});
function ex(e) {
    let { colors: t, selectedIndex: n, onColorSelect: s } = e,
        [a, o] = i.useMemo(() => {
            let e = t.map((e, n) => (t.length < 1 ? 0 : (n / (t.length - 1)) * 80 + 10)),
                n = t.map((t, n) => `${t} ${e[n]}%`).join(", ");
            return [e, { background: `linear-gradient(to right, ${n})` }];
        }, [t]);
    return (0, l.jsx)("div", {
        className: em.wS,
        style: o,
        children: t.map((e, t) => {
            let o = a[t],
                c = t === n;
            return (0, l.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, l.jsx)(ea.D, {
                            className: r()(em.pX, { [em.wH]: c }),
                            style: { left: `${o}%`, backgroundColor: e },
                            onClick: () => s(t),
                            children: (0, l.jsx)("div", { className: em.Px }),
                        }),
                        c && (0, l.jsx)("div", { className: em.gQ, style: { left: `${o}%` } }),
                    ],
                },
                t,
            );
        }),
    });
}
function eg(e) {
    let { color: t } = e,
        n = i.useMemo(() => ({ backgroundColor: (0, en.qt)(t) ? t : "#000000" }), [t]);
    return (0, l.jsx)("div", { className: em.ld, style: n, "aria-label": "Color preview" });
}
function ef(e) {
    let { value: t, onChange: n, className: s, colors: a, setColors: o } = e,
        c = (0, ec.A)(),
        [u, d] = i.useState(0),
        [h, g] = i.useState(t);
    function f(e) {
        let t,
            s = (t = e.trim()).startsWith("#") ? t : t.length > 0 ? `#${t}` : t;
        if ((g(s), (0, en.qt)(s) && ((0, q.CE)(), n(s), a.length > 0))) {
            let e = [...a];
            (e[u] = s), o(e);
        }
    }
    i.useEffect(() => {
        if (a.length > 0 && u < a.length) {
            let e = a[u];
            (0, en.qt)(e) && (g(e), n(e));
        }
        u >= a.length && d(0);
    }, [u, a, n]);
    let T = i.useCallback((e) => {
        g(e.hex);
    }, []);
    async function E() {
        if (null != c)
            try {
                let { sRGBHex: e } = await c.open();
                (0, q.AL)(), f(e);
            } catch {}
    }
    let j = a.length > 1;
    return (0, l.jsxs)("div", {
        className: r()(em.kL, s),
        children: [
            j &&
                (0, l.jsx)(ex, {
                    colors: a,
                    selectedIndex: u,
                    onColorSelect: function (e) {
                        d(e), (0, q.mx)();
                    },
                }),
            (0, l.jsx)(eh, {
                onChange: T,
                onChangeComplete: function (e) {
                    if (((0, q.VE)(), n(e.hex), a.length > 0)) {
                        let t = [...a];
                        (t[u] = e.hex), o(t);
                    }
                },
                color: h,
            }),
            (0, l.jsxs)("div", {
                className: em.Xr,
                children: [
                    (0, l.jsx)(eg, { color: h }),
                    (0, l.jsx)("input", {
                        className: em.Im,
                        value: h.toUpperCase(),
                        onChange: (e) => f(e.target.value),
                        maxLength: 7,
                        placeholder: L.OT,
                        type: "text",
                    }),
                    (0, l.jsxs)("div", {
                        className: em.hE,
                        children: [
                            null != c &&
                                (0, l.jsx)(x.m, {
                                    text: ed.intl.string(eu.default["NCFz+N"]),
                                    children: (0, l.jsx)(el.K, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: E,
                                        icon: es.d,
                                        "aria-label": ed.intl.string(eu.default["NCFz+N"]),
                                    }),
                                }),
                            j &&
                                (0, l.jsx)(x.m, {
                                    text: ed.intl.string(ed.t.N86XcP),
                                    children: (0, l.jsx)(el.K, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: () =>
                                            (function (e) {
                                                if (a.length > 1) {
                                                    (0, q.f1)();
                                                    let t = a.filter((t, n) => n !== e);
                                                    o(t), u >= t.length ? d(t.length - 1) : u > e && d(u - 1);
                                                }
                                            })(u),
                                        icon: er.MinusIcon,
                                        "aria-label": ed.intl.string(ed.t.N86XcP),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            a.length < 5 &&
                (0, l.jsx)(m.$, {
                    variant: "secondary",
                    size: "md",
                    onClick: function () {
                        if (5 === a.length) return;
                        0 === a.length && Q(), (0, q.HU)();
                        let e = a.length > 0 ? a[a.length - 1] : h,
                            t =
                                a.length > 0
                                    ? (function (e) {
                                          if (!(0, en.qt)(e)) return e;
                                          let t = ee()(e);
                                          return t.set("hsl.h", (t.get("hsl.h") + 15) % 360).hex();
                                      })(e)
                                    : e,
                            n = [...a, t];
                        o(n), d(n.length - 1);
                    },
                    icon: eo.T,
                    text: ed.intl.string(eu.default.JUQcdT),
                    fullWidth: !0,
                }),
        ],
    });
}
var eT = n(192308),
    eE = n(405433),
    ej = n(457417);
function eS() {
    return (0, l.jsx)(x.m, {
        text: ed.intl.string(ed.t.RDE0Sc),
        children: (0, l.jsx)(el.K, {
            "aria-label": ed.intl.string(eu.default.zgFs8C),
            icon: eE.ShareIcon,
            variant: "icon-only",
            onClick: () => {
                (0, eT.openModalLazy)(
                    async () => {
                        let { CustomThemesShareModalWrapper: e } = await Promise.all([
                            n.e("786798"),
                            n.e("773883"),
                            n.e("73216"),
                            n.e("471053"),
                            n.e("33444"),
                            n.e("771612"),
                            n.e("114508"),
                            n.e("239816"),
                            n.e("794246"),
                            n.e("361361"),
                            n.e("263177"),
                            n.e("292428"),
                            n.e("67482"),
                            n.e("578648"),
                            n.e("135085"),
                            n.e("800961"),
                            n.e("757638"),
                            n.e("821581"),
                            n.e("365110"),
                            n.e("130706"),
                            n.e("421223"),
                            n.e("98818"),
                            n.e("472866"),
                            n.e("799453"),
                            n.e("663369"),
                            n.e("886148"),
                            n.e("748968"),
                            n.e("182277"),
                            n.e("867477"),
                            n.e("267232"),
                            n.e("190914"),
                            n.e("597569"),
                            n.e("701348"),
                            n.e("478909"),
                            n.e("44153"),
                            n.e("225091"),
                            n.e("986760"),
                            n.e("68454"),
                            n.e("79998"),
                            n.e("290093"),
                            n.e("909403"),
                            n.e("259135"),
                            n.e("294128"),
                            n.e("517223"),
                            n.e("305689"),
                            n.e("167672"),
                            n.e("207117"),
                            n.e("727486"),
                            n.e("200010"),
                            n.e("503143"),
                            n.e("102523"),
                            n.e("930192"),
                            n.e("522128"),
                            n.e("502199"),
                            n.e("811245"),
                            n.e("693020"),
                            n.e("758186"),
                            n.e("79863"),
                            n.e("988744"),
                            n.e("46259"),
                            n.e("609023"),
                            n.e("982034"),
                            n.e("476984"),
                            n.e("574965"),
                            n.e("300450"),
                            n.e("161756"),
                            n.e("864031"),
                            n.e("495522"),
                            n.e("512157"),
                            n.e("352403"),
                            n.e("984137"),
                            n.e("918448"),
                            n.e("869729"),
                            n.e("433757"),
                            n.e("909852"),
                            n.e("78477"),
                            n.e("933439"),
                            n.e("508484"),
                            n.e("284169"),
                            n.e("243767"),
                            n.e("205528"),
                            n.e("4820"),
                            n.e("599467"),
                            n.e("580930"),
                            n.e("661238"),
                            n.e("912249"),
                            n.e("559804"),
                            n.e("841272"),
                            n.e("373243"),
                            n.e("325933"),
                            n.e("576921"),
                            n.e("130826"),
                            n.e("380906"),
                            n.e("200283"),
                            n.e("975412"),
                            n.e("424199"),
                            n.e("964367"),
                            n.e("819273"),
                            n.e("454048"),
                            n.e("188941"),
                            n.e("599666"),
                            n.e("300699"),
                            n.e("349619"),
                            n.e("543039"),
                            n.e("253729"),
                            n.e("161379"),
                            n.e("264236"),
                            n.e("740428"),
                            n.e("234236"),
                            n.e("398125"),
                            n.e("221825"),
                            n.e("721690"),
                            n.e("593600"),
                            n.e("276640"),
                            n.e("28154"),
                            n.e("948804"),
                            n.e("431011"),
                            n.e("295366"),
                            n.e("844695"),
                            n.e("155314"),
                            n.e("482815"),
                            n.e("170653"),
                            n.e("832817"),
                            n.e("338835"),
                            n.e("50015"),
                            n.e("60898"),
                            n.e("611523"),
                            n.e("901555"),
                            n.e("558724"),
                            n.e("829177"),
                            n.e("232551"),
                            n.e("631644"),
                            n.e("904723"),
                            n.e("936320"),
                            n.e("466322"),
                            n.e("190889"),
                            n.e("313681"),
                            n.e("418943"),
                            n.e("784103"),
                            n.e("958428"),
                            n.e("317225"),
                            n.e("444376"),
                            n.e("430920"),
                            n.e("809915"),
                            n.e("486726"),
                            n.e("53374"),
                            n.e("710638"),
                            n.e("570474"),
                            n.e("631825"),
                            n.e("770697"),
                            n.e("696443"),
                            n.e("318546"),
                            n.e("620320"),
                            n.e("916209"),
                            n.e("123216"),
                            n.e("799657"),
                            n.e("252574"),
                            n.e("747017"),
                            n.e("146248"),
                            n.e("790244"),
                            n.e("126780"),
                            n.e("847555"),
                            n.e("417286"),
                            n.e("499941"),
                            n.e("761935"),
                            n.e("592731"),
                            n.e("858821"),
                            n.e("34472"),
                            n.e("511527"),
                            n.e("515168"),
                            n.e("147786"),
                            n.e("763070"),
                            n.e("564615"),
                            n.e("193158"),
                            n.e("955184"),
                            n.e("502018"),
                            n.e("757598"),
                            n.e("787079"),
                            n.e("601469"),
                            n.e("61129"),
                            n.e("314805"),
                            n.e("851130"),
                            n.e("173547"),
                            n.e("599141"),
                            n.e("499593"),
                            n.e("962075"),
                            n.e("560658"),
                            n.e("809964"),
                            n.e("434691"),
                            n.e("225990"),
                            n.e("539620"),
                            n.e("764615"),
                            n.e("577084"),
                            n.e("636126"),
                            n.e("562168"),
                            n.e("463095"),
                            n.e("831219"),
                            n.e("437370"),
                            n.e("222380"),
                            n.e("632744"),
                            n.e("290191"),
                            n.e("844780"),
                            n.e("236946"),
                            n.e("692639"),
                            n.e("565617"),
                            n.e("890480"),
                            n.e("440963"),
                            n.e("766031"),
                            n.e("394317"),
                            n.e("744385"),
                            n.e("728633"),
                            n.e("87687"),
                            n.e("162128"),
                        ]).then(n.bind(n, 583955));
                        return (t) => (0, l.jsx)(e, { ...t });
                    },
                    { modalKey: ej.dJ },
                );
            },
        }),
    });
}
var eA = n(943255),
    eC = n(575181),
    ep = n(366010),
    ev = n(629584),
    eN = n(558849);
function eM(e, t) {
    return e === t ? eN.HE : void 0;
}
function e_() {
    let e = (0, o.bG)([R.A], () => R.A.theme),
        t = (0, ep.M)(e) ? W.NJ.DARK : W.NJ.LIGHT,
        n = [
            {
                name: "",
                value: W.NJ.DARK,
                icon: eA.Z,
                className: eM(t, W.NJ.DARK),
                tooltip: ed.intl.string(eu.default["Dk+OWY"]),
                tooltipAriaLabel: ed.intl.string(eu.default["Dk+OWY"]),
            },
            {
                name: "",
                value: W.NJ.LIGHT,
                icon: eC.F,
                className: eM(t, W.NJ.LIGHT),
                tooltip: ed.intl.string(eu.default["5vlJkY"]),
                tooltipAriaLabel: ed.intl.string(eu.default["5vlJkY"]),
            },
        ];
    return (0, l.jsx)(ev.I, {
        className: eN.t7,
        optionClassName: eN.aF,
        options: n,
        value: t,
        onChange: (e) => {
            let { value: t } = e;
            (0, q.dR)(), z(t);
        },
        look: "pill",
    });
}
var eb = n(652215),
    ek = n(49999),
    ey = n(202541),
    eI = n(487745);
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
        className: eI.b,
        children: (0, l.jsx)(d.J, {
            size: "sm",
            onClick: () => {
                t?.(ek.i.USER_DISMISS), (0, M.Jp)(), (0, P.S8)();
            },
        }),
    });
}
function eH() {
    return (0, l.jsxs)("div", {
        className: eI.N1,
        children: [
            (0, l.jsx)(h.E, { variant: "text-md/bold", children: ed.intl.string(eu.default.AsmU85) }),
            (0, l.jsx)(x.m, {
                text: ed.intl.string(ed.t["5AFxuK"]),
                children: (0, l.jsx)(g.t, { size: "custom", height: 20, width: 20, colorClass: eI.oU }),
            }),
            (0, l.jsx)(eO, {}),
        ],
    });
}
function eD(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, _.HX)(c.M.CUSTOM_THEME_COACHMARK)
        ? n
            ? (0, l.jsx)(eJ, { markAsDismissed: t })
            : (0, l.jsx)(eH, {})
        : (0, l.jsx)(eJ, { markAsDismissed: () => (0, _.Dr)(c.M.CUSTOM_THEME_COACHMARK) });
}
function eJ(e) {
    let { markAsDismissed: t } = e,
        n = (0, k.L)(ey.PremiumTypes.TIER_2);
    return (0, l.jsxs)("div", {
        className: eI.CG,
        children: [
            (0, l.jsxs)("div", {
                className: eI.dI,
                children: [
                    (0, l.jsx)(f.D, {
                        variant: "heading-lg/extrabold",
                        children: ed.intl.string(eu.default["23QUzv"]),
                    }),
                    (0, l.jsx)(eO, { markAsDismissed: t }),
                ],
            }),
            (0, l.jsx)(h.E, {
                className: eI.VA,
                variant: "text-sm/medium",
                color: "text-muted",
                children: ed.intl.string(n ? eu.default.TRCE4g : eu.default["UV/Vtv"]),
            }),
        ],
    });
}
function eU(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: s, handleInternalChange: a } = eR(t),
        [o, c] = i.useState(`${Math.round(t)}\xb0`);
    return (
        i.useEffect(() => {
            c(`${Math.round(t)}\xb0`);
        }, [t]),
        (0, l.jsxs)("div", {
            className: r()(eI.xJ, eI.Gz),
            children: [
                (0, l.jsxs)("div", {
                    className: eI.Vt,
                    children: [
                        (0, l.jsx)(h.E, { variant: "text-md/medium", children: ed.intl.string(eu.default.dZkwgx) }),
                        (0, l.jsx)("input", {
                            type: "text",
                            value: o,
                            onChange: (e) =>
                                (function (e) {
                                    let t = e.replace(/\xb0/g, "").trim();
                                    if ("" === t) return void c("");
                                    let s = parseInt(t, 10);
                                    if (isNaN(s)) return;
                                    let l = Math.max(0, Math.min(360, s));
                                    c(`${l}\xb0`), (0, q.l6)(), n(l);
                                })(e.target.value),
                            placeholder: "0\xb0",
                            className: eI.A9,
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: eI.Zp,
                    children: [
                        (0, l.jsxs)("div", {
                            className: eI.p1,
                            children: [
                                (0, l.jsx)("div", { className: eI.uu }),
                                (0, l.jsx)("div", { className: eI.uu }),
                                (0, l.jsx)("div", { className: eI.VD }),
                                (0, l.jsx)("div", { className: eI.uu }),
                                (0, l.jsx)("div", { className: eI.uu }),
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
                                    (0, q.PT)();
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
function eL(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: s, handleInternalChange: a } = eR(t),
        [r, o] = i.useState(`${Math.round(t)}%`);
    return (
        i.useEffect(() => {
            o(`${Math.round(t)}%`);
        }, [t]),
        (0, l.jsxs)("div", {
            className: eI.xJ,
            children: [
                (0, l.jsxs)("div", {
                    className: eI.Vt,
                    children: [
                        (0, l.jsx)(h.E, { variant: "text-md/medium", children: ed.intl.string(eu.default.xlXkaL) }),
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
                                    o(`${l}%`), (0, q.Cq)(), n(l);
                                })(e.target.value),
                            placeholder: `${L.kJ}%`,
                            className: eI.A9,
                        }),
                    ],
                }),
                (0, l.jsx)(
                    T.A,
                    {
                        initialValue: t,
                        defaultValue: L.kJ,
                        minValue: 0,
                        maxValue: 100,
                        onValueChange: (e) => {
                            (0, q.QJ)(), a(e), n(e);
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
function eP(e) {
    let { isCoachmark: t, isMobile: n } = e,
        [s, a] = i.useState(!1),
        r = i.useRef(!1),
        [o, c] = i.useState(!1),
        d = i.useRef(null),
        h = i.useRef(null),
        x = i.useCallback(() => {
            (0, q.y4)();
            let e = (0, G.mf)();
            L.ko
                .getState()
                .setAll({
                    colors: e.colors,
                    gradientAngle: e.angle ?? L.ko.getState().gradientAngle,
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
        return (0, l.jsx)(m.$, {
            buttonRef: h,
            variant: "secondary",
            onClick: x,
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            icon: n
                ? { type: "icon", asset: E.DiceIcon }
                : {
                      type: "rive",
                      asset: j.m,
                      riveProps: { dataBinding: { fill: S.A.colors.ICON_STRONG }, eventTargetRef: h },
                  },
            text: ed.intl.string(eu.default.c9MBEH),
            fullWidth: !0,
        });
    }
    return n
        ? A()
        : (0, l.jsx)(u.u, {
              title: ed.intl.string(eu.default.NJ9m8Y),
              body: ed.intl.string(eu.default["6pabtR"]),
              position: "left",
              asset: T ? (0, l.jsx)(E.DiceIcon, {}) : void 0,
              forceOpen: s,
              onTooltipShow: g,
              onTooltipHide: f,
              targetElementRef: h,
              children: A(),
          });
}
function eG(e) {
    let { onApply: t, disabled: n, fullWidth: s } = e;
    return (0, l.jsx)(x.m, {
        text: ed.intl.string(eu.default.SFyHIP),
        shouldShow: n,
        children: (0, l.jsx)(m.$, {
            variant: "primary",
            onClick: t,
            disabled: n,
            text: ed.intl.string(ed.t["1Qm822"]),
            fullWidth: s,
        }),
    });
}
function eV(e) {
    let { onSaveTheme: t, canApply: n } = e,
        s = (0, k.L)(ey.PremiumTypes.TIER_2);
    return (
        (0, q.wb)(s, v.A.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, l.jsx)("div", {
            className: eI.M0,
            children: s
                ? (0, l.jsx)(eG, { disabled: !n, onApply: t, fullWidth: !0 })
                : (0, l.jsx)(b.A, {
                      subscriptionTier: ey.pe.TIER_2,
                      buttonTextOverride: ed.intl.string(ed.t.JST6jl),
                      premiumModalAnalyticsLocation: {
                          page: eb.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: eb.JJy.CUSTOM_THEMES_COACHMARK_FOOTER,
                      },
                      fullWidth: !0,
                  }),
        })
    );
}
function e$(e) {
    let { onSaveTheme: t, canApply: n, metadata: s } = e,
        i = (0, k.L)(ey.PremiumTypes.TIER_2),
        a = (0, J.St)("custom_themes_editor_footer"),
        o = s?.from === M.xv.SHARE_MESSAGE;
    function u() {
        (0, P.S8)(),
            (0, q.uk)(),
            (0, _.Dr)(c.M.CUSTOM_THEME_COACHMARK),
            s?.from === M.xv.SETTING
                ? ((0, D.openUserSettings)(O.X.APPEARANCE_THEME_CATEGORY), (0, M.Jp)())
                : s?.from === M.xv.CLIENT_THEMES_EDITOR
                  ? (0, M.nf)(M.HP.CLIENT_THEMES)
                  : (0, M.Jp)();
    }
    (0, q.wb)(i, v.A.CUSTOM_THEMES_EDITOR);
    let d = r()(eI.xQ, { [eI.NI]: !i }),
        h = (0, l.jsx)(b.A, {
            subscriptionTier: ey.pe.TIER_2,
            defaultTextOverride: ed.intl.string(ed.t.pj0XBN),
            premiumModalAnalyticsLocation: {
                page: eb.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                section: eb.JJy.CUSTOM_THEMES_FOOTER,
            },
            fullWidth: !0,
        });
    return (0, l.jsx)("div", {
        className: d,
        children: i
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(eS, {}),
                      (0, l.jsx)(m.$, { variant: "secondary", onClick: u, text: ed.intl.string(ed.t["13/7kX"]) }),
                      (0, l.jsx)(eG, {
                          disabled: !n,
                          onApply: () => {
                              o && U.default.track(eb.HAw.CUSTOM_THEME_SHARE_APPLIED, {}), t();
                          },
                      }),
                  ],
              })
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      a
                          ? (0, l.jsxs)("div", {
                                className: eI.rV,
                                children: [
                                    (0, l.jsx)(y.l, {
                                        size: "md",
                                        className: eI.Tf,
                                        location: v.A.PREMIUM_WISHLIST_CUSTOM_THEMES_EDITOR,
                                    }),
                                    h,
                                ],
                            })
                          : h,
                      (0, l.jsx)(m.$, {
                          variant: "secondary",
                          onClick: u,
                          text: o ? ed.intl.string(ed.t["13/7kX"]) : ed.intl.string(ed.t.Olc2K3),
                          fullWidth: !0,
                      }),
                  ],
              }),
    });
}
function ew(e) {
    let { metadata: t, markAsDismissed: n, isCoachmark: s, isMobile: a } = e,
        r = (function () {
            let [e] = i.useState(() => R.A.theme);
            return i.useCallback(
                (t) => {
                    let {
                        resetColors: n,
                        resetGradientAngle: s,
                        resetChassisMixAmount: l,
                        resetBaseTheme: i,
                    } = B(t, e);
                    L.ko.getState().setAll({ colors: n, gradientAngle: s, chassisMixAmount: l }),
                        "reset_button" === t ? z(X(i ?? R.A.theme)) : (0, I.XG)();
                    let a = $.eh.getSetting().backgroundGradientPresetId;
                    null != a && (0, P.bc)(a);
                },
                [e],
            );
        })(),
        u = (function () {
            let { colors: e, chassisMixAmount: t, gradientAngle: n } = (0, L.ko)(),
                s = (0, o.bG)([R.A], () => R.A.theme),
                [l] = i.useState(() => R.A.theme),
                {
                    resetColors: a,
                    resetGradientAngle: r,
                    resetChassisMixAmount: c,
                    resetBaseTheme: u,
                } = B("reset_button", l);
            return JSON.stringify(e) === JSON.stringify(a) && t === c && n === r && s === u;
        })(),
        d = i.useRef(!1),
        {
            colors: x,
            chassisMixAmount: g,
            gradientAngle: f,
            setColors: T,
            setChassisMixAmount: E,
            setGradientAngle: j,
        } = (0, L.ko)(),
        [S, b] = i.useState(x[0] ?? L.OT),
        k = (0, o.bG)([R.A], () => R.A.theme),
        y = (0, _.HX)(c.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: O } = (0, N.Ay)(v.A.CUSTOM_THEMES_EDITOR),
        D = (0, o.bG)([w.A], () => w.A.getSavedCustomTheme());
    async function J() {
        (d.current = !0),
            await (0, C.u_)({
                theme: X(k),
                customUserThemeSettings: { colors: x, gradientColorStops: [], gradientAngle: f, baseMix: g },
            }),
            (0, q.Yl)(x, g, f, k, O),
            n?.(ek.i.TAKE_ACTION),
            y || (0, _.Dr)(c.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
            (0, M.Jp)(),
            (0, I.XG)();
    }
    let U = x.length > 0;
    i.useEffect(
        () => () => {
            d.current || r(F.EDITOR_CLOSE);
        },
        [r],
    );
    let G = (0, H.G)(),
        V = X(k);
    return (
        i.useEffect(() => {
            G ? (0, I.XG)() : k !== V && z(V);
        }, [G, k, V]),
        (0, p.Ay)(() => {
            if (!s) {
                let e = (x?.length ?? 0) > 0,
                    t = null != D;
                !e && t
                    ? (L.ko
                          .getState()
                          .setAll({ colors: D.colors, gradientAngle: D.gradient_angle, chassisMixAmount: D.base_mix }),
                      z(D.base_theme))
                    : Y(x, S, T);
            }
        }),
        (0, l.jsxs)("div", {
            className: a ? eI.AA : eI.kL,
            "data-app-right-panel": !a,
            children: [
                (0, l.jsx)(A.Ip, {
                    children: (0, l.jsxs)("div", {
                        className: eI.sV,
                        children: [
                            (0, l.jsx)(eD, { markAsDismissed: n, isCoachmark: s }),
                            (0, l.jsxs)("div", {
                                className: eI.uW,
                                children: [
                                    (0, l.jsx)(h.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: ed.intl.string(eu.default.o2NfLF),
                                    }),
                                    (0, l.jsx)(e_, {}),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: eI.uW,
                                children: [
                                    (0, l.jsx)(h.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: ed.intl.string(eu.default.uSL2Gy),
                                    }),
                                    (0, l.jsx)(ef, {
                                        onChange: (e) => {
                                            b(e), 0 === x.length && Y(x, e, T);
                                        },
                                        value: S,
                                        colors: x,
                                        setColors: T,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: eI.uW,
                                children: [
                                    (0, l.jsx)(h.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: ed.intl.string(eu.default.F1t0c8),
                                    }),
                                    x.length > 1 && (0, l.jsx)(eU, { gradientAngle: f, setGradientAngle: j }),
                                    (0, l.jsx)(eL, {
                                        chassisMixAmount: g,
                                        setChassisMixAmount: (e) => {
                                            E(e), 0 === x.length && Y(x, S, T);
                                        },
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: eI.WA,
                                children: [
                                    (0, l.jsx)(eP, { isCoachmark: s, isMobile: a }),
                                    (0, l.jsx)(m.$, {
                                        variant: "secondary",
                                        onClick: function () {
                                            r(F.RESET_BUTTON), (0, q.G_)();
                                        },
                                        disabled: u,
                                        text: ed.intl.string(ed.t.yBZMsQ),
                                        fullWidth: !0,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                s
                    ? (0, l.jsx)(eV, { onSaveTheme: J, canApply: U })
                    : (0, l.jsx)(e$, { onSaveTheme: J, canApply: U, metadata: t }),
            ],
        })
    );
}

n.r(t), n.d(t, { default: () => e$ });
var s,
    l = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(17928),
    c = n(554146),
    u = n(815021),
    d = n(821609),
    m = n(834730),
    h = n(297264),
    x = n(106236),
    g = n(926321),
    f = n(908803),
    T = n(661531),
    E = n(683063),
    j = n(866665),
    S = n(364522),
    A = n(817281),
    p = n(964486),
    C = n(793574),
    v = n(688810),
    N = n(793943),
    M = n(826673),
    _ = n(792656),
    b = n(757036),
    k = n(285373),
    y = n(450232),
    I = n(973654),
    R = n(363195),
    O = n(780964),
    H = n(843010),
    D = n(766075),
    J = n(174459),
    L = n(467135),
    U = n(823459),
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
function X(e) {
    let t = V.eh.getSetting(),
        n =
            null != t.backgroundGradientPresetId &&
            t.backgroundGradientPresetId in w.ag &&
            w.ag[t.backgroundGradientPresetId].theme !== e;
    (0, I.GQ)(e), n && (0, U.S8)();
}
function z() {
    let e = F(R.A.theme);
    e !== R.A.theme && X(e);
}
function Q(e, t, n) {
    0 === e.length && n([t]), z();
}
function Y(e, t) {
    let n = V.eh.getSetting().customUserThemeSettings,
        s = $.A.getSavedCustomTheme(),
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
var B = n(738419),
    q = n(310784),
    Z = n.n(q),
    ee = n(156828),
    et = n(317097),
    en = n(714385),
    es = n(408278),
    el = n(289873),
    ei = n(939249),
    ea = n(834040),
    er = n(499373),
    eo = n(971745),
    ec = n(72191),
    eu = n(375708),
    ed = n(480160);
let em = (0, ee.Fe)({
    createPromise: () =>
        Promise.all([n.e("721929"), n.e("869047"), n.e("593279"), n.e("936920"), n.e("486537")]).then(n.bind(n, 33136)),
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
                c = t === n;
            return (0, l.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, l.jsx)(ei.D, {
                            className: r()(ed.pX, { [ed.wH]: c }),
                            style: { left: `${o}%`, backgroundColor: e },
                            onClick: () => s(t),
                            children: (0, l.jsx)("div", { className: ed.Px }),
                        }),
                        c && (0, l.jsx)("div", { className: ed.gQ, style: { left: `${o}%` } }),
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
        c = (0, eo.A)(),
        [u, m] = i.useState(0),
        [h, x] = i.useState(t);
    function g(e) {
        let t,
            s = (t = e.trim()).startsWith("#") ? t : t.length > 0 ? `#${t}` : t;
        if ((x(s), (0, et.qt)(s) && ((0, B.CE)(), n(s), a.length > 0))) {
            let e = [...a];
            (e[u] = s), o(e);
        }
    }
    i.useEffect(() => {
        if (a.length > 0 && u < a.length) {
            let e = a[u];
            (0, et.qt)(e) && (x(e), n(e));
        }
        u >= a.length && m(0);
    }, [u, a, n]);
    let f = i.useCallback((e) => {
        x(e.hex);
    }, []);
    async function T() {
        if (null != c)
            try {
                let { sRGBHex: e } = await c.open();
                (0, B.AL)(), g(e);
            } catch {}
    }
    let E = a.length > 1;
    return (0, l.jsxs)("div", {
        className: r()(ed.kL, s),
        children: [
            E &&
                (0, l.jsx)(eh, {
                    colors: a,
                    selectedIndex: u,
                    onColorSelect: function (e) {
                        m(e), (0, B.mx)();
                    },
                }),
            (0, l.jsx)(em, {
                onChange: f,
                onChangeComplete: function (e) {
                    if (((0, B.VE)(), n(e.hex), a.length > 0)) {
                        let t = [...a];
                        (t[u] = e.hex), o(t);
                    }
                },
                color: h,
            }),
            (0, l.jsxs)("div", {
                className: ed.Xr,
                children: [
                    (0, l.jsx)(ex, { color: h }),
                    (0, l.jsx)("input", {
                        className: ed.Im,
                        value: h.toUpperCase(),
                        onChange: (e) => g(e.target.value),
                        maxLength: 7,
                        placeholder: L.OT,
                        type: "text",
                    }),
                    (0, l.jsxs)("div", {
                        className: ed.hE,
                        children: [
                            null != c &&
                                (0, l.jsx)(j.m, {
                                    text: eu.intl.string(ec.default["NCFz+N"]),
                                    children: (0, l.jsx)(es.K, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: T,
                                        icon: en.d,
                                        "aria-label": eu.intl.string(ec.default["NCFz+N"]),
                                    }),
                                }),
                            E &&
                                (0, l.jsx)(j.m, {
                                    text: eu.intl.string(eu.t.N86XcP),
                                    children: (0, l.jsx)(es.K, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: () =>
                                            (function (e) {
                                                if (a.length > 1) {
                                                    (0, B.f1)();
                                                    let t = a.filter((t, n) => n !== e);
                                                    o(t), u >= t.length ? m(t.length - 1) : u > e && m(u - 1);
                                                }
                                            })(u),
                                        icon: ea.MinusIcon,
                                        "aria-label": eu.intl.string(eu.t.N86XcP),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            a.length < 5 &&
                (0, l.jsx)(d.$, {
                    variant: "secondary",
                    size: "md",
                    onClick: function () {
                        if (5 === a.length) return;
                        0 === a.length && z(), (0, B.HU)();
                        let e = a.length > 0 ? a[a.length - 1] : h,
                            t =
                                a.length > 0
                                    ? (function (e) {
                                          if (!(0, et.qt)(e)) return e;
                                          let t = Z()(e);
                                          return t.set("hsl.h", (t.get("hsl.h") + 15) % 360).hex();
                                      })(e)
                                    : e,
                            n = [...a, t];
                        o(n), m(n.length - 1);
                    },
                    icon: er.T,
                    text: eu.intl.string(ec.default.JUQcdT),
                    fullWidth: !0,
                }),
        ],
    });
}
var ef = n(192308),
    eT = n(405433),
    eE = n(457417);
function ej() {
    return (0, l.jsx)(j.m, {
        text: eu.intl.string(eu.t.RDE0Sc),
        children: (0, l.jsx)(es.K, {
            "aria-label": eu.intl.string(ec.default.zgFs8C),
            icon: eT.ShareIcon,
            variant: "icon-only",
            onClick: () => {
                (0, ef.openModalLazy)(
                    async () => {
                        let { CustomThemesShareModalWrapper: e } = await Promise.all([
                            n.e("533158"),
                            n.e("721642"),
                            n.e("130891"),
                            n.e("267732"),
                            n.e("325522"),
                            n.e("401317"),
                            n.e("862735"),
                            n.e("606633"),
                            n.e("552653"),
                            n.e("311580"),
                            n.e("174554"),
                            n.e("116815"),
                            n.e("82389"),
                            n.e("812720"),
                            n.e("891089"),
                            n.e("196063"),
                            n.e("392028"),
                            n.e("124054"),
                            n.e("419656"),
                            n.e("67702"),
                            n.e("85427"),
                            n.e("51872"),
                            n.e("560570"),
                            n.e("334324"),
                            n.e("64769"),
                            n.e("992956"),
                            n.e("880150"),
                            n.e("7452"),
                            n.e("529787"),
                            n.e("60002"),
                            n.e("186856"),
                            n.e("189423"),
                            n.e("591114"),
                            n.e("691398"),
                            n.e("266201"),
                            n.e("752704"),
                            n.e("56606"),
                            n.e("629972"),
                            n.e("40791"),
                            n.e("358404"),
                            n.e("245758"),
                            n.e("561672"),
                            n.e("977306"),
                            n.e("722514"),
                            n.e("847980"),
                            n.e("957251"),
                            n.e("677624"),
                            n.e("879641"),
                            n.e("720210"),
                            n.e("98857"),
                            n.e("495628"),
                            n.e("390430"),
                            n.e("326605"),
                            n.e("644289"),
                            n.e("460915"),
                            n.e("675582"),
                            n.e("856943"),
                            n.e("192388"),
                            n.e("165994"),
                            n.e("652091"),
                            n.e("996907"),
                            n.e("960175"),
                            n.e("377989"),
                            n.e("797845"),
                            n.e("867721"),
                            n.e("567999"),
                            n.e("397244"),
                            n.e("441674"),
                            n.e("377265"),
                            n.e("400088"),
                            n.e("35328"),
                            n.e("291329"),
                            n.e("296956"),
                            n.e("334168"),
                            n.e("582012"),
                            n.e("781821"),
                            n.e("650387"),
                            n.e("195719"),
                            n.e("291847"),
                            n.e("678906"),
                            n.e("358931"),
                            n.e("684031"),
                            n.e("962953"),
                            n.e("434168"),
                            n.e("59565"),
                            n.e("238758"),
                            n.e("459086"),
                            n.e("61531"),
                            n.e("786749"),
                            n.e("319714"),
                            n.e("189281"),
                            n.e("205035"),
                            n.e("911680"),
                            n.e("194933"),
                            n.e("424199"),
                            n.e("726391"),
                            n.e("819273"),
                            n.e("454048"),
                            n.e("188941"),
                            n.e("300699"),
                            n.e("349619"),
                            n.e("599666"),
                            n.e("543039"),
                            n.e("253729"),
                            n.e("721690"),
                            n.e("136022"),
                            n.e("161379"),
                            n.e("264236"),
                            n.e("740428"),
                            n.e("234236"),
                            n.e("832817"),
                            n.e("398125"),
                            n.e("221825"),
                            n.e("416143"),
                            n.e("901555"),
                            n.e("593600"),
                            n.e("276640"),
                            n.e("295366"),
                            n.e("28154"),
                            n.e("844695"),
                            n.e("948804"),
                            n.e("431011"),
                            n.e("561216"),
                            n.e("50015"),
                            n.e("343550"),
                            n.e("552712"),
                            n.e("829177"),
                            n.e("106943"),
                            n.e("232551"),
                            n.e("482815"),
                            n.e("631644"),
                            n.e("170653"),
                            n.e("892340"),
                            n.e("611523"),
                            n.e("313681"),
                            n.e("417286"),
                            n.e("444376"),
                            n.e("147786"),
                            n.e("770697"),
                            n.e("318546"),
                            n.e("123216"),
                            n.e("466322"),
                            n.e("936320"),
                            n.e("190889"),
                            n.e("790244"),
                            n.e("672727"),
                            n.e("418943"),
                            n.e("556967"),
                            n.e("784103"),
                            n.e("958428"),
                            n.e("317225"),
                            n.e("643612"),
                            n.e("809915"),
                            n.e("34472"),
                            n.e("652898"),
                            n.e("53374"),
                            n.e("710638"),
                            n.e("956191"),
                            n.e("631825"),
                            n.e("696443"),
                            n.e("620320"),
                            n.e("731390"),
                            n.e("799657"),
                            n.e("252574"),
                            n.e("747017"),
                            n.e("146248"),
                            n.e("851130"),
                            n.e("126780"),
                            n.e("499941"),
                            n.e("761935"),
                            n.e("592731"),
                            n.e("858821"),
                            n.e("511527"),
                            n.e("515168"),
                            n.e("763070"),
                            n.e("564615"),
                            n.e("193158"),
                            n.e("502018"),
                            n.e("757598"),
                            n.e("955184"),
                            n.e("400954"),
                            n.e("787079"),
                            n.e("728633"),
                            n.e("61129"),
                            n.e("314805"),
                            n.e("173547"),
                            n.e("599141"),
                            n.e("278424"),
                            n.e("401827"),
                            n.e("434691"),
                            n.e("225990"),
                            n.e("539620"),
                            n.e("764615"),
                            n.e("636126"),
                            n.e("562168"),
                            n.e("463095"),
                            n.e("831219"),
                            n.e("405131"),
                            n.e("222380"),
                            n.e("577084"),
                            n.e("377766"),
                            n.e("632744"),
                            n.e("471955"),
                            n.e("844780"),
                            n.e("236946"),
                            n.e("692639"),
                            n.e("565617"),
                            n.e("890480"),
                            n.e("440963"),
                            n.e("766031"),
                            n.e("394317"),
                            n.e("744385"),
                            n.e("887946"),
                            n.e("162128"),
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
    ep = n(366010),
    eC = n(629584),
    ev = n(356110);
function eN(e, t) {
    return e === t ? ev.HE : void 0;
}
function eM() {
    let e = (0, o.bG)([R.A], () => R.A.theme),
        t = (0, ep.M)(e) ? K.NJ.DARK : K.NJ.LIGHT,
        n = [
            {
                name: "",
                value: K.NJ.DARK,
                icon: eS.Z,
                className: eN(t, K.NJ.DARK),
                tooltip: eu.intl.string(ec.default["Dk+OWY"]),
                tooltipAriaLabel: eu.intl.string(ec.default["Dk+OWY"]),
            },
            {
                name: "",
                value: K.NJ.LIGHT,
                icon: eA.F,
                className: eN(t, K.NJ.LIGHT),
                tooltip: eu.intl.string(ec.default["5vlJkY"]),
                tooltipAriaLabel: eu.intl.string(ec.default["5vlJkY"]),
            },
        ];
    return (0, l.jsx)(eC.I, {
        className: ev.t7,
        optionClassName: ev.aF,
        options: n,
        value: t,
        onChange: (e) => {
            let { value: t } = e;
            (0, B.dR)(), X(t);
        },
        look: "pill",
    });
}
var e_ = n(652215),
    eb = n(49999),
    ek = n(202541),
    ey = n(748284);
function eI(e) {
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
function eR(e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsx)("div", {
        className: ey.b,
        children: (0, l.jsx)(u.J, {
            size: "sm",
            onClick: () => {
                t?.(eb.i.USER_DISMISS), (0, N.Jp)(), (0, U.S8)();
            },
        }),
    });
}
function eO() {
    return (0, l.jsxs)("div", {
        className: ey.N1,
        children: [
            (0, l.jsx)(m.E, { variant: "text-md/bold", children: eu.intl.string(ec.default.AsmU85) }),
            (0, l.jsx)(y.A, { size: "refresh_sm", color: "strong" }),
            (0, l.jsx)(eR, {}),
        ],
    });
}
function eH(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, M.HX)(c.M.CUSTOM_THEME_COACHMARK)
        ? n
            ? (0, l.jsx)(eD, { markAsDismissed: t })
            : (0, l.jsx)(eO, {})
        : (0, l.jsx)(eD, { markAsDismissed: () => (0, M.Dr)(c.M.CUSTOM_THEME_COACHMARK) });
}
function eD(e) {
    let { markAsDismissed: t } = e,
        n = (0, b.L)(ek.PremiumTypes.TIER_2);
    return (0, l.jsxs)("div", {
        className: ey.CG,
        children: [
            (0, l.jsxs)("div", {
                className: ey.dI,
                children: [
                    (0, l.jsx)(h.D, {
                        variant: "heading-lg/extrabold",
                        children: eu.intl.string(ec.default["23QUzv"]),
                    }),
                    (0, l.jsx)(eR, { markAsDismissed: t }),
                ],
            }),
            (0, l.jsx)(m.E, {
                className: ey.VA,
                variant: "text-sm/medium",
                color: "text-muted",
                children: eu.intl.string(n ? ec.default.TRCE4g : ec.default["UV/Vtv"]),
            }),
        ],
    });
}
function eJ(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: s, handleInternalChange: a } = eI(t),
        [o, c] = i.useState(`${Math.round(t)}\xb0`);
    return (
        i.useEffect(() => {
            c(`${Math.round(t)}\xb0`);
        }, [t]),
        (0, l.jsxs)("div", {
            className: r()(ey.xJ, ey.Gz),
            children: [
                (0, l.jsxs)("div", {
                    className: ey.Vt,
                    children: [
                        (0, l.jsx)(m.E, { variant: "text-md/medium", children: eu.intl.string(ec.default.dZkwgx) }),
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
                                    c(`${l}\xb0`), (0, B.l6)(), n(l);
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
                            x.A,
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
function eL(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: s, handleInternalChange: a } = eI(t),
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
                        (0, l.jsx)(m.E, { variant: "text-md/medium", children: eu.intl.string(ec.default.xlXkaL) }),
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
                            placeholder: `${L.kJ}%`,
                            className: ey.A9,
                        }),
                    ],
                }),
                (0, l.jsx)(
                    x.A,
                    {
                        initialValue: t,
                        defaultValue: L.kJ,
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
function eU(e) {
    let { isCoachmark: t, isMobile: n } = e,
        [s, a] = i.useState(!1),
        r = i.useRef(!1),
        [o, c] = i.useState(!1),
        u = i.useRef(null),
        m = i.useRef(null),
        h = i.useCallback(() => {
            (0, B.y4)();
            let e = (0, P.mf)();
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
                (u.current = setTimeout(() => {
                    r.current || a(!0);
                }, 5e3)),
                () => {
                    null != u.current && clearTimeout(u.current);
                }
            );
    }, [t]);
    let x = i.useCallback(() => {
            r.current = !0;
        }, []),
        j = i.useCallback(() => {
            a(!1);
        }, []),
        S = s && !o;
    function A() {
        return (0, l.jsx)(d.$, {
            buttonRef: m,
            variant: "secondary",
            onClick: h,
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            icon: n
                ? { type: "icon", asset: g.DiceIcon }
                : {
                      type: "rive",
                      asset: f.m,
                      riveProps: { dataBinding: { fill: T.A.colors.ICON_STRONG }, eventTargetRef: m },
                  },
            text: eu.intl.string(ec.default.c9MBEH),
            fullWidth: !0,
        });
    }
    return n
        ? A()
        : (0, l.jsx)(E.u, {
              title: eu.intl.string(ec.default.NJ9m8Y),
              body: eu.intl.string(ec.default["6pabtR"]),
              position: "left",
              asset: S ? (0, l.jsx)(g.DiceIcon, {}) : void 0,
              forceOpen: s,
              onTooltipShow: x,
              onTooltipHide: j,
              targetElementRef: m,
              children: A(),
          });
}
function eP(e) {
    let { onApply: t, disabled: n, fullWidth: s } = e;
    return (0, l.jsx)(j.m, {
        text: eu.intl.string(ec.default.SFyHIP),
        shouldShow: n,
        children: (0, l.jsx)(d.$, {
            variant: "primary",
            onClick: t,
            disabled: n,
            text: eu.intl.string(eu.t["1Qm822"]),
            fullWidth: s,
        }),
    });
}
function eG(e) {
    let { onSaveTheme: t, canApply: n } = e,
        s = (0, b.L)(ek.PremiumTypes.TIER_2);
    return (
        (0, B.wb)(s, C.A.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, l.jsx)("div", {
            className: ey.M0,
            children: s
                ? (0, l.jsx)(eP, { disabled: !n, onApply: t, fullWidth: !0 })
                : (0, l.jsx)(_.A, {
                      subscriptionTier: ek.pe.TIER_2,
                      buttonTextOverride: eu.intl.string(eu.t.JST6jl),
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
        i = (0, b.L)(ek.PremiumTypes.TIER_2),
        a = s?.from === N.xv.SHARE_MESSAGE;
    function o() {
        (0, U.S8)(),
            (0, B.uk)(),
            (0, M.Dr)(c.M.CUSTOM_THEME_COACHMARK),
            s?.from === N.xv.SETTING
                ? ((0, D.openUserSettings)(O.X.APPEARANCE_THEME_CATEGORY), (0, N.Jp)())
                : s?.from === N.xv.CLIENT_THEMES_EDITOR
                  ? (0, N.nf)(N.HP.CLIENT_THEMES)
                  : (0, N.Jp)();
    }
    (0, B.wb)(i, C.A.CUSTOM_THEMES_EDITOR);
    let u = r()(ey.xQ, { [ey.NI]: !i }),
        m = (0, l.jsx)(_.A, {
            subscriptionTier: ek.pe.TIER_2,
            defaultTextOverride: eu.intl.string(eu.t.pj0XBN),
            premiumModalAnalyticsLocation: {
                page: e_.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                section: e_.JJy.CUSTOM_THEMES_FOOTER,
            },
            fullWidth: !0,
        });
    return (0, l.jsx)("div", {
        className: u,
        children: i
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(ej, {}),
                      (0, l.jsx)(d.$, { variant: "secondary", onClick: o, text: eu.intl.string(eu.t["13/7kX"]) }),
                      (0, l.jsx)(eP, {
                          disabled: !n,
                          onApply: () => {
                              a && J.default.track(e_.HAw.CUSTOM_THEME_SHARE_APPLIED, {}), t();
                          },
                      }),
                  ],
              })
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsxs)("div", {
                          className: ey.rV,
                          children: [
                              (0, l.jsx)(k.l, {
                                  size: "md",
                                  className: ey.Tf,
                                  location: C.A.PREMIUM_WISHLIST_CUSTOM_THEMES_EDITOR,
                              }),
                              m,
                          ],
                      }),
                      (0, l.jsx)(d.$, {
                          variant: "secondary",
                          onClick: o,
                          text: a ? eu.intl.string(eu.t["13/7kX"]) : eu.intl.string(eu.t.Olc2K3),
                          fullWidth: !0,
                      }),
                  ],
              }),
    });
}
function e$(e) {
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
                    } = Y(t, e);
                    L.ko.getState().setAll({ colors: n, gradientAngle: s, chassisMixAmount: l }),
                        "reset_button" === t ? X(F(i ?? R.A.theme)) : (0, I.XG)();
                    let a = V.eh.getSetting().backgroundGradientPresetId;
                    null != a && (0, U.bc)(a);
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
                } = Y("reset_button", l);
            return JSON.stringify(e) === JSON.stringify(a) && t === c && n === r && s === u;
        })(),
        h = i.useRef(!1),
        {
            colors: x,
            chassisMixAmount: g,
            gradientAngle: f,
            setColors: T,
            setChassisMixAmount: E,
            setGradientAngle: j,
        } = (0, L.ko)(),
        [_, b] = i.useState(x[0] ?? L.OT),
        k = (0, o.bG)([R.A], () => R.A.theme),
        y = (0, M.HX)(c.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: O } = (0, v.Ay)(C.A.CUSTOM_THEMES_EDITOR),
        D = (0, o.bG)([$.A], () => $.A.getSavedCustomTheme());
    async function J() {
        (h.current = !0),
            await (0, A.u_)({
                theme: F(k),
                customUserThemeSettings: { colors: x, gradientColorStops: [], gradientAngle: f, baseMix: g },
            }),
            (0, B.Yl)(x, g, f, k, O),
            n?.(eb.i.TAKE_ACTION),
            y || (0, M.Dr)(c.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
            (0, N.Jp)(),
            (0, I.XG)();
    }
    let P = x.length > 0;
    i.useEffect(
        () => () => {
            h.current || r(W.EDITOR_CLOSE);
        },
        [r],
    );
    let G = (0, H.G)(),
        w = F(k);
    return (
        i.useEffect(() => {
            G ? (0, I.XG)() : k !== w && X(w);
        }, [G, k, w]),
        (0, p.Ay)(() => {
            if (!s) {
                let e = (x?.length ?? 0) > 0,
                    t = null != D;
                !e && t
                    ? (L.ko
                          .getState()
                          .setAll({ colors: D.colors, gradientAngle: D.gradient_angle, chassisMixAmount: D.base_mix }),
                      X(D.base_theme))
                    : Q(x, _, T);
            }
        }),
        (0, l.jsxs)("div", {
            className: a ? ey.AA : ey.kL,
            "data-app-right-panel": !a,
            children: [
                (0, l.jsx)(S.Ip, {
                    children: (0, l.jsxs)("div", {
                        className: ey.sV,
                        children: [
                            (0, l.jsx)(eH, { markAsDismissed: n, isCoachmark: s }),
                            (0, l.jsxs)("div", {
                                className: ey.uW,
                                children: [
                                    (0, l.jsx)(m.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: eu.intl.string(ec.default.o2NfLF),
                                    }),
                                    (0, l.jsx)(eM, {}),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: ey.uW,
                                children: [
                                    (0, l.jsx)(m.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: eu.intl.string(ec.default.uSL2Gy),
                                    }),
                                    (0, l.jsx)(eg, {
                                        onChange: (e) => {
                                            b(e), 0 === x.length && Q(x, e, T);
                                        },
                                        value: _,
                                        colors: x,
                                        setColors: T,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: ey.uW,
                                children: [
                                    (0, l.jsx)(m.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: eu.intl.string(ec.default.F1t0c8),
                                    }),
                                    x.length > 1 && (0, l.jsx)(eJ, { gradientAngle: f, setGradientAngle: j }),
                                    (0, l.jsx)(eL, {
                                        chassisMixAmount: g,
                                        setChassisMixAmount: (e) => {
                                            E(e), 0 === x.length && Q(x, _, T);
                                        },
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: ey.WA,
                                children: [
                                    (0, l.jsx)(eU, { isCoachmark: s, isMobile: a }),
                                    (0, l.jsx)(d.$, {
                                        variant: "secondary",
                                        onClick: function () {
                                            r(W.RESET_BUTTON), (0, B.G_)();
                                        },
                                        disabled: u,
                                        text: eu.intl.string(eu.t.yBZMsQ),
                                        fullWidth: !0,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                s
                    ? (0, l.jsx)(eG, { onSaveTheme: J, canApply: P })
                    : (0, l.jsx)(eV, { onSaveTheme: J, canApply: P, metadata: t }),
            ],
        })
    );
}

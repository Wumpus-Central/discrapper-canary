(n.r(t), n.d(t, { default: () => ew }));
var s,
    l = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(855986),
    c = n(554146),
    u = n(815021),
    d = n(821609),
    m = n(834730),
    h = n(534514),
    x = n(205513),
    g = n(893007),
    f = n(926321),
    E = n(90302),
    T = n(646514),
    j = n(683063),
    S = n(866665),
    p = n(95362),
    A = n(817281),
    C = n(964486),
    v = n(793574),
    M = n(688810),
    N = n(793943),
    b = n(826673),
    _ = n(792656),
    y = n(757036),
    k = n(521440),
    I = n(450232),
    O = n(973654),
    R = n(413599),
    H = n(780964),
    D = n(843010),
    L = n(766075),
    P = n(129230),
    U = n(467135),
    G = n(823459),
    J = n(935444),
    V = n(462887),
    $ = n(253932),
    w = n(74396),
    W = n(385803),
    X = n(818348),
    F = (((s = {}).RESET_BUTTON = "reset_button"), (s.EDITOR_CLOSE = "editor_close"), s);
function K(e) {
    return (0, V.M)(e) ? X.NJ.DARK : X.NJ.LIGHT;
}
function z(e) {
    let t = $.eh.getSetting(),
        n =
            null != t.backgroundGradientPresetId &&
            t.backgroundGradientPresetId in W.ag &&
            W.ag[t.backgroundGradientPresetId].theme !== e;
    ((0, O.GQ)(e), n && (0, G.S8)());
}
function Q() {
    let e = K(R.A.theme);
    e !== R.A.theme && z(e);
}
function Y(e, t, n) {
    (0 === e.length && n([t]), Q());
}
function B(e, t) {
    let n = $.eh.getSetting().customUserThemeSettings,
        s = w.A.getSavedCustomTheme(),
        l = "reset_button" === e ? [U.O] : [],
        i = 0,
        a = 74,
        r = t;
    return (
        n?.colors != null
            ? ((l = n.colors), (i = n.gradientAngle ?? 0), (a = n.baseMix ?? 74))
            : "reset_button" === e &&
              null != s &&
              ((l = s.colors), (i = s.gradient_angle ?? 0), (a = s.base_mix ?? 74), (r = s.base_theme)),
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
    eu = n(958904),
    ed = n(792996),
    em = n(480160);
let eh = (0, et.Fe)({
    createPromise: () => Promise.all([n.e(721929), n.e(593279), n.e(573927), n.e(486537)]).then(n.bind(n, 33136)),
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
        [u, m] = i.useState(0),
        [h, x] = i.useState(t);
    function g(e) {
        let t,
            s = (t = e.trim()).startsWith("#") ? t : t.length > 0 ? `#${t}` : t;
        if ((x(s), (0, en.qt)(s) && ((0, q.CE)(), n(s), a.length > 0))) {
            let e = [...a];
            ((e[u] = s), o(e));
        }
    }
    i.useEffect(() => {
        if (a.length > 0 && u < a.length) {
            let e = a[u];
            (0, en.qt)(e) && (x(e), n(e));
        }
        u >= a.length && m(0);
    }, [u, a, n]);
    let f = i.useCallback((e) => {
            x(e.hex);
        }, []),
        E = a.length > 1;
    return (0, l.jsxs)("div", {
        className: r()(em.kL, s),
        children: [
            E &&
                (0, l.jsx)(ex, {
                    colors: a,
                    selectedIndex: u,
                    onColorSelect: function (e) {
                        (m(e), (0, q.mx)());
                    },
                }),
            (0, l.jsx)(eh, {
                onChange: f,
                onChangeComplete: function (e) {
                    if (((0, q.VE)(), n(e.hex), a.length > 0)) {
                        let t = [...a];
                        ((t[u] = e.hex), o(t));
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
                        onChange: (e) => g(e.target.value),
                        maxLength: 7,
                        placeholder: U.O,
                        type: "text",
                    }),
                    (0, l.jsxs)("div", {
                        className: em.hE,
                        children: [
                            null != c &&
                                (0, l.jsx)(S.m, {
                                    text: ed.intl.string(eu.default["NCFz+N"]),
                                    children: (0, l.jsx)(el.K, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: async function () {
                                            if (null != c)
                                                try {
                                                    let { sRGBHex: e } = await c.open();
                                                    ((0, q.AL)(), g(e));
                                                } catch {}
                                        },
                                        icon: es.EyeDropperIcon,
                                        "aria-label": ed.intl.string(eu.default["NCFz+N"]),
                                    }),
                                }),
                            E &&
                                (0, l.jsx)(S.m, {
                                    text: ed.intl.string(ed.t.N86XcP),
                                    children: (0, l.jsx)(el.K, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: () =>
                                            (function (e) {
                                                if (a.length > 1) {
                                                    (0, q.f1)();
                                                    let t = a.filter((t, n) => n !== e);
                                                    (o(t), u >= t.length ? m(t.length - 1) : u > e && m(u - 1));
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
                (0, l.jsx)(d.$, {
                    variant: "secondary",
                    size: "md",
                    onClick: function () {
                        if (5 === a.length) return;
                        (0 === a.length && Q(), (0, q.HU)());
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
                        (o(n), m(n.length - 1));
                    },
                    icon: eo.PlusMediumIcon,
                    text: ed.intl.string(eu.default.JUQcdT),
                    fullWidth: !0,
                }),
        ],
    });
}
var eE = n(192308),
    eT = n(405433),
    ej = n(457417);
function eS() {
    return (0, l.jsx)(S.m, {
        text: ed.intl.string(ed.t.RDE0Sc),
        children: (0, l.jsx)(el.K, {
            "aria-label": ed.intl.string(eu.default.zgFs8C),
            icon: eT.ShareIcon,
            variant: "icon-only",
            onClick: () => {
                (0, eE.mM)(
                    async () => {
                        let { CustomThemesShareModalWrapper: e } = await Promise.all([
                            n.e(701406),
                            n.e(866475),
                            n.e(335930),
                            n.e(325522),
                            n.e(401317),
                            n.e(790340),
                            n.e(147119),
                            n.e(668756),
                            n.e(425292),
                            n.e(209994),
                            n.e(44141),
                            n.e(552653),
                            n.e(311580),
                            n.e(174554),
                            n.e(116815),
                            n.e(62567),
                            n.e(991625),
                            n.e(230029),
                            n.e(891089),
                            n.e(585733),
                            n.e(569603),
                            n.e(196063),
                            n.e(392028),
                            n.e(124054),
                            n.e(441674),
                            n.e(152862),
                            n.e(357900),
                            n.e(148729),
                            n.e(650195),
                            n.e(144909),
                            n.e(67702),
                            n.e(31544),
                            n.e(629972),
                            n.e(334168),
                            n.e(582012),
                            n.e(166336),
                            n.e(113658),
                            n.e(162182),
                            n.e(860640),
                            n.e(681801),
                            n.e(85427),
                            n.e(66149),
                            n.e(281342),
                            n.e(967850),
                            n.e(67909),
                            n.e(916885),
                            n.e(272804),
                            n.e(505866),
                            n.e(291329),
                            n.e(449933),
                            n.e(985236),
                            n.e(728053),
                            n.e(678906),
                            n.e(799357),
                            n.e(889880),
                            n.e(375724),
                            n.e(999272),
                            n.e(216112),
                            n.e(490514),
                            n.e(962953),
                            n.e(550929),
                            n.e(415695),
                            n.e(64769),
                            n.e(644013),
                            n.e(971156),
                            n.e(60002),
                            n.e(260009),
                            n.e(715867),
                            n.e(249938),
                            n.e(266201),
                            n.e(752704),
                            n.e(56606),
                            n.e(520218),
                            n.e(738015),
                            n.e(40791),
                            n.e(358404),
                            n.e(996907),
                            n.e(831130),
                            n.e(377989),
                            n.e(358931),
                            n.e(880150),
                            n.e(168248),
                            n.e(490743),
                            n.e(533240),
                            n.e(734818),
                            n.e(936090),
                            n.e(841136),
                            n.e(560338),
                            n.e(459086),
                            n.e(720210),
                            n.e(601152),
                            n.e(319714),
                            n.e(331249),
                            n.e(194933),
                            n.e(650376),
                            n.e(587618),
                            n.e(424199),
                            n.e(194277),
                            n.e(125729),
                            n.e(888326),
                            n.e(695765),
                            n.e(100309),
                            n.e(454048),
                            n.e(188941),
                            n.e(300699),
                            n.e(264236),
                            n.e(543039),
                            n.e(976759),
                            n.e(398125),
                            n.e(221825),
                            n.e(143613),
                            n.e(44561),
                            n.e(930758),
                            n.e(776195),
                            n.e(901555),
                            n.e(253729),
                            n.e(593600),
                            n.e(266900),
                            n.e(707826),
                            n.e(948804),
                            n.e(638221),
                            n.e(809915),
                            n.e(161379),
                            n.e(463095),
                            n.e(851130),
                            n.e(672727),
                            n.e(417286),
                            n.e(927211),
                            n.e(361626),
                            n.e(646506),
                            n.e(445124),
                            n.e(76428),
                            n.e(445421),
                            n.e(783988),
                            n.e(721690),
                            n.e(832823),
                            n.e(302008),
                            n.e(761935),
                            n.e(511527),
                            n.e(763070),
                            n.e(502018),
                            n.e(276863),
                            n.e(955184),
                            n.e(441432),
                            n.e(728633),
                            n.e(628439),
                            n.e(35757),
                            n.e(570506),
                            n.e(539620),
                            n.e(225990),
                            n.e(951811),
                            n.e(883850),
                            n.e(787672),
                            n.e(522517),
                            n.e(996830),
                            n.e(234236),
                            n.e(832817),
                            n.e(893928),
                            n.e(416143),
                            n.e(401590),
                            n.e(844695),
                            n.e(844780),
                            n.e(592028),
                            n.e(466354),
                            n.e(425906),
                            n.e(92124),
                            n.e(123216),
                            n.e(50015),
                            n.e(263765),
                            n.e(232551),
                            n.e(631644),
                            n.e(182408),
                            n.e(561216),
                            n.e(692835),
                            n.e(21219),
                            n.e(829177),
                            n.e(106943),
                            n.e(348674),
                            n.e(526595),
                            n.e(786751),
                            n.e(422891),
                            n.e(790244),
                            n.e(121435),
                            n.e(491279),
                            n.e(398793),
                            n.e(592731),
                            n.e(723794),
                            n.e(958428),
                            n.e(317225),
                            n.e(53374),
                            n.e(482815),
                            n.e(56021),
                            n.e(530943),
                            n.e(124060),
                            n.e(240511),
                            n.e(146566),
                            n.e(32661),
                            n.e(466322),
                            n.e(377766),
                            n.e(696123),
                            n.e(799657),
                            n.e(810034),
                            n.e(817852),
                            n.e(133179),
                            n.e(784103),
                            n.e(614784),
                            n.e(8563),
                            n.e(444376),
                            n.e(499941),
                            n.e(187856),
                            n.e(555793),
                            n.e(960286),
                            n.e(610449),
                            n.e(271244),
                            n.e(32781),
                            n.e(996218),
                            n.e(959134),
                            n.e(577084),
                            n.e(729599),
                            n.e(924862),
                            n.e(73500),
                            n.e(371482),
                            n.e(912773),
                            n.e(35403),
                            n.e(68904),
                            n.e(796867),
                            n.e(919307),
                            n.e(565617),
                            n.e(488934),
                            n.e(41991),
                            n.e(872648),
                            n.e(409843),
                            n.e(565065),
                            n.e(834386),
                            n.e(482652),
                            n.e(130674),
                            n.e(959669),
                            n.e(220518),
                            n.e(875842),
                            n.e(126780),
                            n.e(360781),
                            n.e(368111),
                            n.e(851243),
                            n.e(748015),
                            n.e(952577),
                            n.e(807771),
                            n.e(751202),
                            n.e(496715),
                            n.e(474055),
                            n.e(744385),
                            n.e(29664),
                            n.e(471064),
                            n.e(282094),
                            n.e(90373),
                            n.e(236946),
                            n.e(692639),
                            n.e(593020),
                            n.e(890480),
                            n.e(440963),
                            n.e(766031),
                            n.e(394317),
                            n.e(299086),
                            n.e(805775),
                            n.e(615569),
                            n.e(349401),
                            n.e(390718),
                        ]).then(n.bind(n, 213453));
                        return (t) => (0, l.jsx)(e, { ...t });
                    },
                    { modalKey: ej.dJ },
                );
            },
        }),
    });
}
var ep = n(943255),
    eA = n(575181),
    eC = n(366010),
    ev = n(629584),
    eM = n(356110);
function eN(e, t) {
    return e === t ? eM.HE : void 0;
}
function eb() {
    let e = (0, o.bG)([R.A], () => R.A.theme),
        t = (0, eC.M)(e) ? X.NJ.ASH : X.NJ.LIGHT,
        n = [
            {
                name: "",
                value: X.NJ.ASH,
                icon: ep.ThemeDarkIcon,
                className: eN(t, X.NJ.ASH),
                tooltip: ed.intl.string(eu.default["Dk+OWY"]),
                tooltipAriaLabel: ed.intl.string(eu.default["Dk+OWY"]),
            },
            {
                name: "",
                value: X.NJ.LIGHT,
                icon: eA.ThemeLightIcon,
                className: eN(t, X.NJ.LIGHT),
                tooltip: ed.intl.string(eu.default["5vlJkY"]),
                tooltipAriaLabel: ed.intl.string(eu.default["5vlJkY"]),
            },
        ];
    return (0, l.jsx)(ev.I, {
        className: eM.t7,
        optionClassName: eM.aF,
        options: n,
        value: t,
        onChange: (e) => {
            let { value: t } = e;
            ((0, q.dR)(), z(t));
        },
        look: "pill",
    });
}
var e_ = n(652215),
    ey = n(49999),
    ek = n(682901),
    eI = n(748284);
function eO(e) {
    let [t, n] = i.useState(0),
        [s, l] = i.useState(!1),
        a = i.useRef(e);
    return (
        i.useEffect(() => {
            (e === a.current || s || n((e) => e + 1), (a.current = e), l(!1));
        }, [e, s]),
        { key: t, handleInternalChange: i.useCallback((e) => (l(!0), e), []) }
    );
}
function eR(e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsx)("div", {
        className: eI.b,
        children: (0, l.jsx)(u.J, {
            size: "sm",
            onClick: () => {
                (t?.(ey.i.USER_DISMISS), (0, N.Jp)(), (0, G.S8)());
            },
        }),
    });
}
function eH() {
    return (0, l.jsxs)("div", {
        className: eI.N1,
        children: [
            (0, l.jsx)(m.E, { variant: "body-md/semibold", children: ed.intl.string(eu.default.AsmU85) }),
            (0, l.jsx)(I.A, { size: "refresh_sm", color: "strong" }),
            (0, l.jsx)(eR, {}),
        ],
    });
}
function eD(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, b.HX)(c.M.CUSTOM_THEME_COACHMARK)
        ? n
            ? (0, l.jsx)(eL, { markAsDismissed: t })
            : (0, l.jsx)(eH, {})
        : (0, l.jsx)(eL, { markAsDismissed: () => (0, b.Dr)(c.M.CUSTOM_THEME_COACHMARK) });
}
function eL(e) {
    let { markAsDismissed: t } = e,
        n = (0, y.L)(ek.PremiumTypes.TIER_2);
    return (0, l.jsxs)("div", {
        className: eI.CG,
        children: [
            (0, l.jsxs)("div", {
                className: eI.dI,
                children: [
                    (0, l.jsx)(h.D, { variant: "heading-lg/semibold", children: ed.intl.string(eu.default["23QUzv"]) }),
                    (0, l.jsx)(eR, { markAsDismissed: t }),
                ],
            }),
            (0, l.jsx)(m.E, {
                className: eI.VA,
                variant: "body-sm/medium",
                color: "text-muted",
                children: ed.intl.string(n ? eu.default.TRCE4g : eu.default["UV/Vtv"]),
            }),
        ],
    });
}
function eP(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: s, handleInternalChange: a } = eO(t),
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
                        (0, l.jsx)(m.E, { variant: "body-md/medium", children: ed.intl.string(eu.default.dZkwgx) }),
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
                                    (c(`${l}\xb0`), (0, q.l6)(), n(l));
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
                            x.G,
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
                                    (t !== e || a(e), n(t));
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
        { key: s, handleInternalChange: a } = eO(t),
        r = i.useId(),
        [o, c] = i.useState(`${Math.round(t)}%`);
    return (
        i.useEffect(() => {
            c(`${Math.round(t)}%`);
        }, [t]),
        (0, l.jsxs)("div", {
            className: eI.xJ,
            children: [
                (0, l.jsxs)("div", {
                    className: eI.Vt,
                    children: [
                        (0, l.jsx)(m.E, {
                            id: r,
                            variant: "body-md/medium",
                            children: ed.intl.string(eu.default.xlXkaL),
                        }),
                        (0, l.jsx)("input", {
                            type: "text",
                            "aria-labelledby": r,
                            value: o,
                            onChange: (e) =>
                                (function (e) {
                                    let t = e.replace(/%/g, "").trim();
                                    if ("" === t) return void c("");
                                    let s = parseInt(t, 10);
                                    if (isNaN(s)) return;
                                    let l = Math.max(0, Math.min(100, s));
                                    (c(`${l}%`), (0, q.Cq)(), n(l));
                                })(e.target.value),
                            placeholder: "74%",
                            className: eI.A9,
                        }),
                    ],
                }),
                (0, l.jsx)(
                    g.A,
                    {
                        "aria-labelledby": r,
                        defaultValue: t,
                        minValue: 0,
                        maxValue: 100,
                        onChangeEnd: (e) => {
                            ((0, q.QJ)(), a(e), n(e));
                        },
                        formatValue: (e) => `${Math.round(e)}%`,
                        hideTooltip: !0,
                    },
                    s,
                ),
            ],
        })
    );
}
function eG(e) {
    let { isCoachmark: t, isMobile: n } = e,
        [s, a] = i.useState(!1),
        r = i.useRef(!1),
        [o, c] = i.useState(!1),
        u = i.useRef(null),
        m = i.useRef(null),
        h = i.useCallback(() => {
            (0, q.y4)();
            let e = (0, J.mf)();
            U.k
                .getState()
                .setAll({
                    colors: e.colors,
                    gradientAngle: e.angle ?? U.k.getState().gradientAngle,
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
        g = i.useCallback(() => {
            a(!1);
        }, []),
        S = s && !o;
    function p() {
        return (0, l.jsx)(d.$, {
            buttonRef: m,
            variant: "secondary",
            onClick: h,
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            icon: n
                ? { type: "icon", asset: f.DiceIcon }
                : {
                      type: "rive",
                      asset: E.m,
                      riveProps: { dataBinding: { fill: T.A.colors.ICON_STRONG }, eventTargetRef: m },
                  },
            text: ed.intl.string(eu.default.c9MBEH),
            fullWidth: !0,
        });
    }
    return n
        ? p()
        : (0, l.jsx)(j.u, {
              title: ed.intl.string(eu.default.NJ9m8Y),
              body: ed.intl.string(eu.default["6pabtR"]),
              position: "left",
              asset: S ? (0, l.jsx)(f.DiceIcon, {}) : void 0,
              forceOpen: s,
              onTooltipShow: x,
              onTooltipHide: g,
              targetElementRef: m,
              children: p(),
          });
}
function eJ(e) {
    let { onApply: t, disabled: n, fullWidth: s } = e;
    return (0, l.jsx)(S.m, {
        text: ed.intl.string(eu.default.SFyHIP),
        shouldShow: n,
        children: (0, l.jsx)(d.$, {
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
        s = (0, y.L)(ek.PremiumTypes.TIER_2);
    return (
        (0, q.wb)(s, v.A.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, l.jsx)("div", {
            className: eI.M0,
            children: s
                ? (0, l.jsx)(eJ, { disabled: !n, onApply: t, fullWidth: !0 })
                : (0, l.jsx)(_.A, {
                      subscriptionTier: ek.pe.TIER_2,
                      buttonTextOverride: ed.intl.string(ed.t.JST6jl),
                      premiumModalAnalyticsLocation: {
                          page: e_.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: e_.JJy.CUSTOM_THEMES_COACHMARK_FOOTER,
                      },
                      fullWidth: !0,
                  }),
        })
    );
}
function e$(e) {
    let { onSaveTheme: t, canApply: n, metadata: s } = e,
        i = (0, y.L)(ek.PremiumTypes.TIER_2),
        a = s?.from === N.xv.SHARE_MESSAGE;
    function o() {
        ((0, G.S8)(),
            (0, q.uk)(),
            (0, b.Dr)(c.M.CUSTOM_THEME_COACHMARK),
            s?.from === N.xv.SETTING
                ? ((0, L.openUserSettings)(H.X.APPEARANCE_THEME_CATEGORY), (0, N.Jp)())
                : s?.from === N.xv.CLIENT_THEMES_EDITOR
                  ? (0, N.nf)(N.HP.CLIENT_THEMES)
                  : (0, N.Jp)());
    }
    (0, q.wb)(i, v.A.CUSTOM_THEMES_EDITOR);
    let u = r()(eI.xQ, { [eI.NI]: !i }),
        m = (0, l.jsx)(_.A, {
            subscriptionTier: ek.pe.TIER_2,
            defaultTextOverride: ed.intl.string(ed.t.pj0XBN),
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
                      (0, l.jsx)(eS, {}),
                      (0, l.jsx)(d.$, { variant: "secondary", onClick: o, text: ed.intl.string(ed.t["13/7kX"]) }),
                      (0, l.jsx)(eJ, {
                          disabled: !n,
                          onApply: () => {
                              (a && P.default.track(e_.HAw.CUSTOM_THEME_SHARE_APPLIED, {}), t());
                          },
                      }),
                  ],
              })
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsxs)("div", {
                          className: eI.rV,
                          children: [
                              (0, l.jsx)(k.l, {
                                  size: "md",
                                  className: eI.Tf,
                                  location: v.A.PREMIUM_WISHLIST_CUSTOM_THEMES_EDITOR,
                              }),
                              m,
                          ],
                      }),
                      (0, l.jsx)(d.$, {
                          variant: "secondary",
                          onClick: o,
                          text: a ? ed.intl.string(ed.t["13/7kX"]) : ed.intl.string(ed.t.Olc2K3),
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
                    (U.k.getState().setAll({ colors: n, gradientAngle: s, chassisMixAmount: l }),
                        "reset_button" === t ? z(K(i ?? R.A.theme)) : (0, O.XG)());
                    let a = $.eh.getSetting().backgroundGradientPresetId;
                    null != a && (0, G.bc)(a);
                },
                [e],
            );
        })(),
        u = (function () {
            let { colors: e, chassisMixAmount: t, gradientAngle: n } = (0, U.k)(),
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
        h = i.useRef(!1),
        {
            colors: x,
            chassisMixAmount: g,
            gradientAngle: f,
            setColors: E,
            setChassisMixAmount: T,
            setGradientAngle: j,
        } = (0, U.k)(),
        [S, _] = i.useState(x[0] ?? U.O),
        y = (0, o.bG)([R.A], () => R.A.theme),
        k = (0, b.HX)(c.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: I } = (0, M.Ay)(v.A.CUSTOM_THEMES_EDITOR),
        H = (0, o.bG)([w.A], () => w.A.getSavedCustomTheme());
    async function L() {
        ((h.current = !0),
            await (0, A.u_)({
                theme: K(y),
                customUserThemeSettings: { colors: x, gradientColorStops: [], gradientAngle: f, baseMix: g },
            }),
            (0, q.Yl)(x, g, f, y, I),
            n?.(ey.i.TAKE_ACTION),
            k || (0, b.Dr)(c.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
            (0, N.Jp)(),
            (0, O.XG)());
    }
    let P = x.length > 0;
    i.useEffect(
        () => () => {
            h.current || r(F.EDITOR_CLOSE);
        },
        [r],
    );
    let J = (0, D.G)(),
        V = K(y);
    return (
        i.useEffect(() => {
            J ? (0, O.XG)() : y !== V && z(V);
        }, [J, y, V]),
        (0, C.Ay)(() => {
            if (!s) {
                let e = (x?.length ?? 0) > 0,
                    t = null != H;
                !e && t
                    ? (U.k
                          .getState()
                          .setAll({ colors: H.colors, gradientAngle: H.gradient_angle, chassisMixAmount: H.base_mix }),
                      z(H.base_theme))
                    : Y(x, S, E);
            }
        }),
        (0, l.jsxs)("div", {
            className: a ? eI.AA : eI.kL,
            "data-app-right-panel": !a,
            children: [
                (0, l.jsx)(p.Ip, {
                    children: (0, l.jsxs)("div", {
                        className: eI.sV,
                        children: [
                            (0, l.jsx)(eD, { markAsDismissed: n, isCoachmark: s }),
                            (0, l.jsxs)("div", {
                                className: eI.uW,
                                children: [
                                    (0, l.jsx)(m.E, {
                                        variant: "body-sm/semibold",
                                        color: "text-subtle",
                                        children: ed.intl.string(eu.default.o2NfLF),
                                    }),
                                    (0, l.jsx)(eb, {}),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: eI.uW,
                                children: [
                                    (0, l.jsx)(m.E, {
                                        variant: "body-sm/semibold",
                                        color: "text-subtle",
                                        children: ed.intl.string(eu.default.uSL2Gy),
                                    }),
                                    (0, l.jsx)(ef, {
                                        onChange: (e) => {
                                            (_(e), 0 === x.length && Y(x, e, E));
                                        },
                                        value: S,
                                        colors: x,
                                        setColors: E,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: eI.uW,
                                children: [
                                    (0, l.jsx)(m.E, {
                                        variant: "body-sm/semibold",
                                        color: "text-subtle",
                                        children: ed.intl.string(eu.default.F1t0c8),
                                    }),
                                    x.length > 1 && (0, l.jsx)(eP, { gradientAngle: f, setGradientAngle: j }),
                                    (0, l.jsx)(eU, {
                                        chassisMixAmount: g,
                                        setChassisMixAmount: (e) => {
                                            (T(e), 0 === x.length && Y(x, S, E));
                                        },
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: eI.WA,
                                children: [
                                    (0, l.jsx)(eG, { isCoachmark: s, isMobile: a }),
                                    (0, l.jsx)(d.$, {
                                        variant: "secondary",
                                        onClick: function () {
                                            (r(F.RESET_BUTTON), (0, q.G_)());
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
                    ? (0, l.jsx)(eV, { onSaveTheme: L, canApply: P })
                    : (0, l.jsx)(e$, { onSaveTheme: L, canApply: P, metadata: t }),
            ],
        })
    );
}

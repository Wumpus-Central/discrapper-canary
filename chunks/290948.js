l.r(t), l.d(t, { default: () => eB });
var a,
    n = l(627968),
    s = l(64700),
    i = l(503698),
    r = l.n(i),
    o = l(17928),
    c = l(554146),
    d = l(459192),
    u = l(990078),
    h = l(815021),
    m = l(821609),
    _ = l(834730),
    x = l(403581),
    g = l(534514),
    E = l(106236),
    f = l(926321),
    T = l(908803),
    p = l(661531),
    v = l(364522),
    C = l(817281),
    A = l(964486),
    S = l(793574),
    M = l(688810),
    N = l(793943),
    j = l(826673),
    b = l(792656),
    O = l(757036),
    I = l(400669),
    w = l(973654),
    R = l(363195),
    k = l(780964),
    y = l(858897),
    H = l(909536),
    D = l(954571),
    L = l(467135),
    U = l(310784),
    P = l.n(U);
let J = [
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
    V = [0, 45, 90, 135, 180, 225, 270, 315],
    G = [20, 40, 60, 80],
    F = ["analogous", "complementary", "split-complementary", "triadic"];
var Z = l(462887),
    B = l(253932),
    K = l(823459),
    $ = l(74396),
    W = l(385803),
    X = l(818348),
    Q = (((a = {}).RESET_BUTTON = "reset_button"), (a.EDITOR_CLOSE = "editor_close"), a);
function Y(e) {
    return (0, Z.M)(e) ? X.NJ.DARK : X.NJ.LIGHT;
}
function z(e) {
    let t = B.eh.getSetting(),
        l =
            null != t.backgroundGradientPresetId &&
            t.backgroundGradientPresetId in W.ag &&
            W.ag[t.backgroundGradientPresetId].theme !== e;
    (0, w.GQ)(e), l && (0, K.S8)();
}
function q() {
    let e = Y(R.A.theme);
    e !== R.A.theme && z(e);
}
function ee(e, t, l) {
    0 === e.length && l([t]), q();
}
function et(e, t) {
    let l = B.eh.getSetting().customUserThemeSettings,
        a = $.A.getSavedCustomTheme(),
        n = "reset_button" === e ? [L.OT] : [],
        s = 0,
        i = L.kJ,
        r = t;
    return (
        l?.colors != null
            ? ((n = l.colors), (s = l.gradientAngle ?? 0), (i = l.baseMix ?? L.kJ))
            : "reset_button" === e &&
              null != a &&
              ((n = a.colors), (s = a.gradient_angle ?? 0), (i = a.base_mix ?? L.kJ), (r = a.base_theme)),
        { resetColors: n, resetGradientAngle: s, resetChassisMixAmount: i, resetBaseTheme: r }
    );
}
var el = l(738419),
    ea = l(156828),
    en = l(317097),
    es = l(714385),
    ei = l(408278),
    er = l(289873),
    eo = l(939249),
    ec = l(834040),
    ed = l(499373),
    eu = l(971745),
    eh = l(693227),
    em = l(985018),
    e_ = l(253499);
let ex = (0, ea.Fe)({
    createPromise: () => Promise.all([l.e("20038"), l.e("86537")]).then(l.bind(l, 33136)),
    webpackId: 33136,
    name: "CustomThemeColorPickerControlV2",
    renderLoader: function () {
        return (0, n.jsx)("div", { className: e_.wG, children: (0, n.jsx)(er.y, {}) });
    },
});
function eg(e) {
    let { colors: t, selectedIndex: l, onColorSelect: a } = e,
        [i, o] = s.useMemo(() => {
            let e = t.map((e, l) => (t.length < 1 ? 0 : (l / (t.length - 1)) * 80 + 10)),
                l = t.map((t, l) => `${t} ${e[l]}%`).join(", ");
            return [e, { background: `linear-gradient(to right, ${l})` }];
        }, [t]);
    return (0, n.jsx)("div", {
        className: e_.wS,
        style: o,
        children: t.map((e, t) => {
            let o = i[t],
                c = t === l;
            return (0, n.jsxs)(
                s.Fragment,
                {
                    children: [
                        (0, n.jsx)(eo.D, {
                            className: r()(e_.pX, { [e_.wH]: c }),
                            style: { left: `${o}%`, backgroundColor: e },
                            onClick: () => a(t),
                            children: (0, n.jsx)("div", { className: e_.Px }),
                        }),
                        c && (0, n.jsx)("div", { className: e_.gQ, style: { left: `${o}%` } }),
                    ],
                },
                t,
            );
        }),
    });
}
function eE(e) {
    let { color: t } = e,
        l = s.useMemo(() => ({ backgroundColor: (0, en.qt)(t) ? t : "#000000" }), [t]);
    return (0, n.jsx)("div", { className: e_.ld, style: l, "aria-label": "Color preview" });
}
function ef(e) {
    let { value: t, onChange: l, className: a, colors: i, setColors: o } = e,
        c = (0, eu.A)(),
        [d, h] = s.useState(0),
        [_, x] = s.useState(t);
    s.useEffect(() => {
        if (i.length > 0 && d < i.length) {
            let e = i[d];
            (0, en.qt)(e) && (x(e), l(e));
        }
        d >= i.length && h(0);
    }, [d, i, l]);
    let g = (e) => {
            let t,
                a = (t = e.trim()).startsWith("#") ? t : t.length > 0 ? `#${t}` : t;
            if ((x(a), (0, en.qt)(a) && ((0, el.CE)(), l(a), i.length > 0))) {
                let e = [...i];
                (e[d] = a), o(e);
            }
        },
        E = s.useCallback((e) => {
            x(e.hex);
        }, []),
        f = async () => {
            if (null != c)
                try {
                    let { sRGBHex: e } = await c.open();
                    (0, el.AL)(), g(e);
                } catch {}
        },
        T = i.length > 1;
    return (0, n.jsxs)("div", {
        className: r()(e_.kL, a),
        children: [
            T &&
                (0, n.jsx)(eg, {
                    colors: i,
                    selectedIndex: d,
                    onColorSelect: (e) => {
                        h(e), (0, el.mx)();
                    },
                }),
            (0, n.jsx)(ex, {
                onChange: E,
                onChangeComplete: (e) => {
                    if (((0, el.VE)(), l(e.hex), i.length > 0)) {
                        let t = [...i];
                        (t[d] = e.hex), o(t);
                    }
                },
                color: _,
            }),
            (0, n.jsxs)("div", {
                className: e_.Xr,
                children: [
                    (0, n.jsx)(eE, { color: _ }),
                    (0, n.jsx)("input", {
                        className: e_.Im,
                        value: _.toUpperCase(),
                        onChange: (e) => g(e.target.value),
                        maxLength: 7,
                        placeholder: L.OT,
                        type: "text",
                    }),
                    (0, n.jsxs)("div", {
                        className: e_.hE,
                        children: [
                            null != c &&
                                (0, n.jsx)(u.m, {
                                    text: em.intl.string(eh.default["NCFz+N"]),
                                    children: (0, n.jsx)(ei.K, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: f,
                                        icon: es.d,
                                        "aria-label": em.intl.string(eh.default["NCFz+N"]),
                                    }),
                                }),
                            T &&
                                (0, n.jsx)(u.m, {
                                    text: em.intl.string(em.t.N86XcP),
                                    children: (0, n.jsx)(ei.K, {
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
                (0, n.jsx)(m.$, {
                    variant: "secondary",
                    size: "md",
                    onClick: () => {
                        if (5 === i.length) return;
                        0 === i.length && q(), (0, el.HU)();
                        let e = i.length > 0 ? i[i.length - 1] : _,
                            t =
                                i.length > 0
                                    ? (function (e) {
                                          if (!(0, en.qt)(e)) return e;
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
    ep = l(405433),
    ev = l(457417);
let eC = () =>
    (0, n.jsx)(u.m, {
        text: em.intl.string(em.t.RDE0Sc),
        children: (0, n.jsx)(ei.K, {
            "aria-label": em.intl.string(eh.default.zgFs8C),
            icon: ep.l,
            variant: "icon-only",
            onClick: () => {
                (0, eT.openModalLazy)(
                    async () => {
                        let { CustomThemesShareModalWrapper: e } = await Promise.all([
                            l.e("24199"),
                            l.e("57036"),
                            l.e("88394"),
                            l.e("80527"),
                            l.e("58710"),
                            l.e("31825"),
                            l.e("23353"),
                            l.e("7175"),
                            l.e("14138"),
                            l.e("8971"),
                            l.e("85071"),
                            l.e("88017"),
                            l.e("1040"),
                            l.e("64615"),
                            l.e("17239"),
                            l.e("66950"),
                            l.e("58164"),
                            l.e("38229"),
                            l.e("20861"),
                            l.e("36682"),
                            l.e("45723"),
                            l.e("56871"),
                            l.e("69601"),
                            l.e("47511"),
                            l.e("51444"),
                            l.e("80973"),
                            l.e("82731"),
                            l.e("96758"),
                            l.e("64429"),
                        ]).then(l.bind(l, 583955));
                        return (t) => (0, n.jsx)(e, { ...t });
                    },
                    { modalKey: ev.dJ },
                );
            },
        }),
    });
var eA = l(943255),
    eS = l(575181),
    eM = l(366010),
    eN = l(629584),
    ej = l(893897);
let eb = (e, t) => (e === t ? ej.HE : void 0);
function eO() {
    let e = (0, o.bG)([R.A], () => R.A.theme),
        t = (0, eM.M)(e) ? X.NJ.DARK : X.NJ.LIGHT,
        l = [
            {
                name: "",
                value: X.NJ.DARK,
                icon: eA.Z,
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
    return (0, n.jsx)(eN.I, {
        className: ej.t7,
        optionClassName: ej.aF,
        options: l,
        value: t,
        onChange: (e) => {
            let { value: t } = e;
            (0, el.dR)(), z(t);
        },
        look: "pill",
    });
}
var eI = l(652215),
    ew = l(49999),
    eR = l(788868),
    ek = l(45945);
function ey(e) {
    let [t, l] = s.useState(0),
        [a, n] = s.useState(!1),
        i = s.useRef(e);
    return (
        s.useEffect(() => {
            e === i.current || a || l((e) => e + 1), (i.current = e), n(!1);
        }, [e, a]),
        { key: t, handleInternalChange: s.useCallback((e) => (n(!0), e), []) }
    );
}
function eH(e) {
    let { markAsDismissed: t } = e;
    return (0, n.jsx)("div", {
        className: ek.b,
        children: (0, n.jsx)(h.J, {
            size: "sm",
            onClick: () => {
                t?.(ew.i.USER_DISMISS), (0, N.Jp)();
            },
        }),
    });
}
function eD() {
    return (0, n.jsxs)("div", {
        className: ek.N1,
        children: [
            (0, n.jsx)(_.E, { variant: "text-md/bold", children: em.intl.string(eh.default.AsmU85) }),
            (0, n.jsx)(u.m, {
                text: em.intl.string(em.t["5AFxuK"]),
                children: (0, n.jsx)(x.t, { size: "custom", height: 20, width: 20, colorClass: ek.oU }),
            }),
            (0, n.jsx)(eH, {}),
        ],
    });
}
function eL(e) {
    let { markAsDismissed: t, isCoachmark: l } = e;
    return (0, j.JZ)(c.M.CUSTOM_THEME_COACHMARK)
        ? l
            ? (0, n.jsx)(eU, { markAsDismissed: t })
            : (0, n.jsx)(eD, {})
        : (0, n.jsx)(eU, { markAsDismissed: () => (0, j.Dr)(c.M.CUSTOM_THEME_COACHMARK) });
}
function eU(e) {
    let { markAsDismissed: t } = e,
        l = (0, O.L)(eR.PremiumTypes.TIER_2);
    return (0, n.jsxs)("div", {
        className: ek.CG,
        children: [
            (0, n.jsxs)("div", {
                className: ek.dI,
                children: [
                    (0, n.jsx)(g.D, {
                        variant: "heading-lg/extrabold",
                        children: em.intl.string(eh.default["23QUzv"]),
                    }),
                    (0, n.jsx)(eH, { markAsDismissed: t }),
                ],
            }),
            (0, n.jsx)(_.E, {
                className: ek.VA,
                variant: "text-sm/medium",
                color: "text-muted",
                children: em.intl.string(l ? eh.default.TRCE4g : eh.default["UV/Vtv"]),
            }),
        ],
    });
}
function eP(e) {
    let { gradientAngle: t, setGradientAngle: l } = e,
        { key: a, handleInternalChange: i } = ey(t),
        [o, c] = s.useState(`${Math.round(t)}\xb0`);
    return (
        s.useEffect(() => {
            c(`${Math.round(t)}\xb0`);
        }, [t]),
        (0, n.jsxs)("div", {
            className: r()(ek.xJ, ek.Gz),
            children: [
                (0, n.jsxs)("div", {
                    className: ek.Vt,
                    children: [
                        (0, n.jsx)(_.E, { variant: "text-md/medium", children: em.intl.string(eh.default.dZkwgx) }),
                        (0, n.jsx)("input", {
                            type: "text",
                            value: o,
                            onChange: (e) =>
                                ((e) => {
                                    let t = e.replace(/°/g, "").trim();
                                    if ("" === t) return void c("");
                                    let a = parseInt(t, 10);
                                    if (isNaN(a)) return;
                                    let n = Math.max(0, Math.min(360, a));
                                    c(`${n}\xb0`), (0, el.l6)(), l(n);
                                })(e.target.value),
                            placeholder: "0\xb0",
                            className: ek.A9,
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: ek.Zp,
                    children: [
                        (0, n.jsxs)("div", {
                            className: ek.p1,
                            children: [
                                (0, n.jsx)("div", { className: ek.uu }),
                                (0, n.jsx)("div", { className: ek.uu }),
                                (0, n.jsx)("div", { className: ek.VD }),
                                (0, n.jsx)("div", { className: ek.uu }),
                                (0, n.jsx)("div", { className: ek.uu }),
                            ],
                        }),
                        (0, n.jsx)(
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
                            a,
                        ),
                    ],
                }),
            ],
        })
    );
}
function eJ(e) {
    let { chassisMixAmount: t, setChassisMixAmount: l } = e,
        { key: a, handleInternalChange: i } = ey(t),
        [r, o] = s.useState(`${Math.round(t)}%`);
    return (
        s.useEffect(() => {
            o(`${Math.round(t)}%`);
        }, [t]),
        (0, n.jsxs)("div", {
            className: ek.xJ,
            children: [
                (0, n.jsxs)("div", {
                    className: ek.Vt,
                    children: [
                        (0, n.jsx)(_.E, { variant: "text-md/medium", children: em.intl.string(eh.default.xlXkaL) }),
                        (0, n.jsx)("input", {
                            type: "text",
                            value: r,
                            onChange: (e) =>
                                ((e) => {
                                    let t = e.replace(/%/g, "").trim();
                                    if ("" === t) return void o("");
                                    let a = parseInt(t, 10);
                                    if (isNaN(a)) return;
                                    let n = Math.max(0, Math.min(100, a));
                                    o(`${n}%`), (0, el.Cq)(), l(n);
                                })(e.target.value),
                            placeholder: `${L.kJ}%`,
                            className: ek.A9,
                        }),
                    ],
                }),
                (0, n.jsx)(
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
                    a,
                ),
            ],
        })
    );
}
function eV(e) {
    let { isCoachmark: t, isMobile: l } = e,
        [a, i] = s.useState(!1),
        r = s.useRef(!1),
        [o, c] = s.useState(!1),
        u = s.useRef(null),
        h = s.useRef(null),
        _ = s.useCallback(() => {
            (0, el.y4)();
            let e = (function () {
                let e = G[Math.floor(Math.random() * G.length)],
                    t = V[Math.floor(Math.random() * V.length)];
                if ("path1" == (0.2 > Math.random() ? "path1" : "path2")) {
                    let l = Math.floor(Math.random() * J.length),
                        a = Math.floor(Math.random() * J.length);
                    for (; a === l; ) a = Math.floor(Math.random() * J.length);
                    return {
                        type: "gradient",
                        colors: [J[l], J[a]],
                        angle: t,
                        intensity: e,
                        gradientType: "two-color",
                    };
                }
                {
                    let l = J[Math.floor(Math.random() * J.length)],
                        a = F[Math.floor(Math.random() * F.length)];
                    return {
                        type: "gradient",
                        colors: (function (e, t) {
                            try {
                                let l = P()(e),
                                    a = l.get("hsl.h"),
                                    n = l.get("hsl.s"),
                                    s = l.get("hsl.l");
                                switch (t) {
                                    case "analogous":
                                        return [
                                            P()
                                                .hsl(a - 30, n, s)
                                                .hex(),
                                            e,
                                            P()
                                                .hsl(a + 30, n, s)
                                                .hex(),
                                        ];
                                    case "complementary":
                                        let i;
                                        return (
                                            (i = P()
                                                .hsl((a + 180) % 360, n, s)
                                                .hex()),
                                            [e, P().mix(e, i, 0.5).hex(), i]
                                        );
                                    case "split-complementary":
                                        return [
                                            e,
                                            P()
                                                .hsl((a + 150) % 360, n, s)
                                                .hex(),
                                            P()
                                                .hsl((a + 210) % 360, n, s)
                                                .hex(),
                                        ];
                                    case "triadic":
                                        return [
                                            e,
                                            P()
                                                .hsl((a + 120) % 360, n, s)
                                                .hex(),
                                            P()
                                                .hsl((a + 240) % 360, n, s)
                                                .hex(),
                                        ];
                                    default:
                                        return [e];
                                }
                            } catch {
                                return [e];
                            }
                        })(l, a),
                        angle: t,
                        intensity: e,
                        gradientType: a,
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
    s.useEffect(() => {
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
    let x = s.useCallback(() => {
            r.current = !0;
        }, []),
        g = s.useCallback(() => {
            i(!1);
        }, []),
        E = a && !o,
        v = () =>
            (0, n.jsx)(m.$, {
                buttonRef: h,
                variant: "secondary",
                onClick: _,
                onMouseEnter: () => c(!0),
                onMouseLeave: () => c(!1),
                icon: l
                    ? { type: "icon", asset: f.j }
                    : {
                          type: "rive",
                          asset: T.m,
                          riveProps: { dataBinding: { fill: p.A.colors.ICON_STRONG }, eventTargetRef: h },
                      },
                text: em.intl.string(eh.default.c9MBEH),
                fullWidth: !0,
            });
    return l
        ? v()
        : (0, n.jsx)(d.u, {
              title: em.intl.string(eh.default.NJ9m8Y),
              body: em.intl.string(eh.default["6pabtR"]),
              position: "left",
              asset: E ? (0, n.jsx)(f.j, {}) : void 0,
              forceOpen: a,
              onTooltipShow: x,
              onTooltipHide: g,
              targetElementRef: h,
              children: v(),
          });
}
function eG(e) {
    let { onApply: t, disabled: l, fullWidth: a } = e;
    return (0, n.jsx)(u.m, {
        text: em.intl.string(eh.default.SFyHIP),
        shouldShow: l,
        children: (0, n.jsx)(m.$, {
            variant: "primary",
            onClick: t,
            disabled: l,
            text: em.intl.string(em.t["1Qm822"]),
            fullWidth: a,
        }),
    });
}
function eF(e) {
    let { onSaveTheme: t, canApply: l } = e,
        a = (0, O.L)(eR.PremiumTypes.TIER_2);
    return (
        (0, el.wb)(a, S.A.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, n.jsx)("div", {
            className: ek.M0,
            children: a
                ? (0, n.jsx)(eG, { disabled: !l, onApply: t, fullWidth: !0 })
                : (0, n.jsx)(b.A, {
                      subscriptionTier: eR.pe.TIER_2,
                      buttonTextOverride: em.intl.string(em.t.JST6jl),
                      premiumModalAnalyticsLocation: {
                          page: eI.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: eI.JJy.CUSTOM_THEMES_COACHMARK_FOOTER,
                      },
                      fullWidth: !0,
                  }),
        })
    );
}
function eZ(e) {
    let { onSaveTheme: t, canApply: l, metadata: a } = e,
        s = (0, O.L)(eR.PremiumTypes.TIER_2),
        i = (0, H.St)("custom_themes_editor_footer"),
        o = a?.from === N.xv.SHARE_MESSAGE;
    (0, el.wb)(s, S.A.CUSTOM_THEMES_EDITOR);
    let d = () => {
            (0, el.uk)(),
                (0, j.Dr)(c.M.CUSTOM_THEME_COACHMARK),
                a?.from === N.xv.SETTING
                    ? ((0, y.openUserSettings)(k.X.APPEARANCE_THEME_CATEGORY), (0, N.Jp)())
                    : a?.from === N.xv.CLIENT_THEMES_EDITOR
                      ? (0, N.nf)(N.HP.CLIENT_THEMES)
                      : (0, N.Jp)();
        },
        u = r()(ek.xQ, { [ek.NI]: !s }),
        h = (0, n.jsx)(b.A, {
            subscriptionTier: eR.pe.TIER_2,
            defaultTextOverride: em.intl.string(em.t.pj0XBN),
            premiumModalAnalyticsLocation: {
                page: eI.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                section: eI.JJy.CUSTOM_THEMES_FOOTER,
            },
            fullWidth: !0,
        });
    return (0, n.jsx)("div", {
        className: u,
        children: s
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(eC, {}),
                      (0, n.jsx)(m.$, { variant: "secondary", onClick: d, text: em.intl.string(em.t["13/7kX"]) }),
                      (0, n.jsx)(eG, {
                          disabled: !l,
                          onApply: () => {
                              o && D.default.track(eI.HAw.CUSTOM_THEME_SHARE_APPLIED, {}), t();
                          },
                      }),
                  ],
              })
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      i
                          ? (0, n.jsxs)("div", {
                                className: ek.rV,
                                children: [
                                    (0, n.jsx)(I.l, {
                                        size: "md",
                                        className: ek.Tf,
                                        location: S.A.PREMIUM_WISHLIST_CUSTOM_THEMES_EDITOR,
                                    }),
                                    h,
                                ],
                            })
                          : h,
                      (0, n.jsx)(m.$, {
                          variant: "secondary",
                          onClick: d,
                          text: o ? em.intl.string(em.t["13/7kX"]) : em.intl.string(em.t.Olc2K3),
                          fullWidth: !0,
                      }),
                  ],
              }),
    });
}
function eB(e) {
    let { metadata: t, markAsDismissed: l, isCoachmark: a, isMobile: i } = e,
        r = (function () {
            let [e] = s.useState(() => R.A.theme);
            return s.useCallback(
                (t) => {
                    let {
                        resetColors: l,
                        resetGradientAngle: a,
                        resetChassisMixAmount: n,
                        resetBaseTheme: s,
                    } = et(t, e);
                    L.ko.getState().setAll({ colors: l, gradientAngle: a, chassisMixAmount: n }),
                        "reset_button" === t ? z(Y(s ?? R.A.theme)) : (0, w.XG)();
                    let i = B.eh.getSetting().backgroundGradientPresetId;
                    null != i && (0, K.bc)(i);
                },
                [e],
            );
        })(),
        d = (function () {
            let { colors: e, chassisMixAmount: t, gradientAngle: l } = (0, L.ko)(),
                a = (0, o.bG)([R.A], () => R.A.theme),
                [n] = s.useState(() => R.A.theme),
                {
                    resetColors: i,
                    resetGradientAngle: r,
                    resetChassisMixAmount: c,
                    resetBaseTheme: d,
                } = et("reset_button", n);
            return JSON.stringify(e) === JSON.stringify(i) && t === c && l === r && a === d;
        })(),
        u = s.useRef(!1),
        {
            colors: h,
            chassisMixAmount: x,
            gradientAngle: g,
            setColors: E,
            setChassisMixAmount: f,
            setGradientAngle: T,
        } = (0, L.ko)(),
        [p, b] = s.useState(h[0] ?? L.OT),
        O = (0, o.bG)([R.A], () => R.A.theme),
        I = (0, j.JZ)(c.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: k } = (0, M.Ay)(S.A.CUSTOM_THEMES_EDITOR),
        y = (0, o.bG)([$.A], () => $.A.getSavedCustomTheme()),
        H = async () => {
            (u.current = !0),
                await (0, C.u_)({
                    theme: O,
                    customUserThemeSettings: { colors: h, gradientColorStops: [], gradientAngle: g, baseMix: x },
                }),
                (0, el.Yl)(h, x, g, O, k),
                l?.(ew.i.TAKE_ACTION),
                I || (0, j.Dr)(c.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, N.Jp)(),
                (0, w.XG)();
        },
        D = h.length > 0;
    return (
        s.useEffect(
            () => () => {
                u.current || r(Q.EDITOR_CLOSE);
            },
            [r],
        ),
        (0, A.Ay)(() => {
            if (!a) {
                let e = (h?.length ?? 0) > 0,
                    t = null != y;
                !e && t
                    ? (L.ko
                          .getState()
                          .setAll({ colors: y.colors, gradientAngle: y.gradient_angle, chassisMixAmount: y.base_mix }),
                      z(y.base_theme))
                    : ee(h, p, E);
            }
        }),
        (0, n.jsxs)("div", {
            className: i ? ek.AA : ek.kL,
            "data-app-right-panel": !i,
            children: [
                (0, n.jsx)(v.Ip, {
                    children: (0, n.jsxs)("div", {
                        className: ek.sV,
                        children: [
                            (0, n.jsx)(eL, { markAsDismissed: l, isCoachmark: a }),
                            (0, n.jsxs)("div", {
                                className: ek.uW,
                                children: [
                                    (0, n.jsx)(_.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: em.intl.string(eh.default.o2NfLF),
                                    }),
                                    (0, n.jsx)(eO, {}),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: ek.uW,
                                children: [
                                    (0, n.jsx)(_.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: em.intl.string(eh.default.uSL2Gy),
                                    }),
                                    (0, n.jsx)(ef, {
                                        onChange: (e) => {
                                            b(e), 0 === h.length && ee(h, e, E);
                                        },
                                        value: p,
                                        colors: h,
                                        setColors: E,
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: ek.uW,
                                children: [
                                    (0, n.jsx)(_.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: em.intl.string(eh.default.F1t0c8),
                                    }),
                                    h.length > 1 && (0, n.jsx)(eP, { gradientAngle: g, setGradientAngle: T }),
                                    (0, n.jsx)(eJ, {
                                        chassisMixAmount: x,
                                        setChassisMixAmount: (e) => {
                                            f(e), 0 === h.length && ee(h, p, E);
                                        },
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: ek.WA,
                                children: [
                                    (0, n.jsx)(eV, { isCoachmark: a, isMobile: i }),
                                    (0, n.jsx)(m.$, {
                                        variant: "secondary",
                                        onClick: () => {
                                            r(Q.RESET_BUTTON), (0, el.G_)();
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
                a
                    ? (0, n.jsx)(eF, { onSaveTheme: H, canApply: D })
                    : (0, n.jsx)(eZ, { onSaveTheme: H, canApply: D, metadata: t }),
            ],
        })
    );
}

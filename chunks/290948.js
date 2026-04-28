l.r(t), l.d(t, { default: () => eB });
var a,
    n = l(627968),
    i = l(64700),
    s = l(503698),
    r = l.n(s),
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
    T = l(926321),
    f = l(908803),
    p = l(661531),
    v = l(364522),
    C = l(817281),
    A = l(964486),
    S = l(793574),
    M = l(688810),
    N = l(793943),
    b = l(826673),
    j = l(792656),
    O = l(757036),
    I = l(400669),
    k = l(973654),
    R = l(363195),
    w = l(780964),
    y = l(858897),
    H = l(909536),
    D = l(954571),
    U = l(467135),
    L = l(310784),
    P = l.n(L);
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
    G = [0, 45, 90, 135, 180, 225, 270, 315],
    V = [20, 40, 60, 80],
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
    (0, k.GQ)(e), l && (0, K.S8)();
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
        n = "reset_button" === e ? [U.OT] : [],
        i = 0,
        s = U.kJ,
        r = t;
    return (
        l?.colors != null
            ? ((n = l.colors), (i = l.gradientAngle ?? 0), (s = l.baseMix ?? U.kJ))
            : "reset_button" === e &&
              null != a &&
              ((n = a.colors), (i = a.gradient_angle ?? 0), (s = a.base_mix ?? U.kJ), (r = a.base_theme)),
        { resetColors: n, resetGradientAngle: i, resetChassisMixAmount: s, resetBaseTheme: r }
    );
}
var el = l(738419),
    ea = l(156828),
    en = l(317097),
    ei = l(714385),
    es = l(408278),
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
        [s, o] = i.useMemo(() => {
            let e = t.map((e, l) => (t.length < 1 ? 0 : (l / (t.length - 1)) * 80 + 10)),
                l = t.map((t, l) => `${t} ${e[l]}%`).join(", ");
            return [e, { background: `linear-gradient(to right, ${l})` }];
        }, [t]);
    return (0, n.jsx)("div", {
        className: e_.wS,
        style: o,
        children: t.map((e, t) => {
            let o = s[t],
                c = t === l;
            return (0, n.jsxs)(
                i.Fragment,
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
        l = i.useMemo(() => ({ backgroundColor: (0, en.qt)(t) ? t : "#000000" }), [t]);
    return (0, n.jsx)("div", { className: e_.ld, style: l, "aria-label": "Color preview" });
}
function eT(e) {
    let { value: t, onChange: l, className: a, colors: s, setColors: o } = e,
        c = (0, eu.A)(),
        [d, h] = i.useState(0),
        [_, x] = i.useState(t);
    i.useEffect(() => {
        if (s.length > 0 && d < s.length) {
            let e = s[d];
            (0, en.qt)(e) && (x(e), l(e));
        }
        d >= s.length && h(0);
    }, [d, s, l]);
    let g = (e) => {
            let t,
                a = (t = e.trim()).startsWith("#") ? t : t.length > 0 ? `#${t}` : t;
            if ((x(a), (0, en.qt)(a) && ((0, el.CE)(), l(a), s.length > 0))) {
                let e = [...s];
                (e[d] = a), o(e);
            }
        },
        E = i.useCallback((e) => {
            x(e.hex);
        }, []),
        T = async () => {
            if (null != c)
                try {
                    let { sRGBHex: e } = await c.open();
                    (0, el.AL)(), g(e);
                } catch {}
        },
        f = s.length > 1;
    return (0, n.jsxs)("div", {
        className: r()(e_.kL, a),
        children: [
            f &&
                (0, n.jsx)(eg, {
                    colors: s,
                    selectedIndex: d,
                    onColorSelect: (e) => {
                        h(e), (0, el.mx)();
                    },
                }),
            (0, n.jsx)(ex, {
                onChange: E,
                onChangeComplete: (e) => {
                    if (((0, el.VE)(), l(e.hex), s.length > 0)) {
                        let t = [...s];
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
                        placeholder: U.OT,
                        type: "text",
                    }),
                    (0, n.jsxs)("div", {
                        className: e_.hE,
                        children: [
                            null != c &&
                                (0, n.jsx)(u.m, {
                                    text: em.intl.string(eh.default["NCFz+N"]),
                                    children: (0, n.jsx)(es.K, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: T,
                                        icon: ei.d,
                                        "aria-label": em.intl.string(eh.default["NCFz+N"]),
                                    }),
                                }),
                            f &&
                                (0, n.jsx)(u.m, {
                                    text: em.intl.string(em.t.N86XcP),
                                    children: (0, n.jsx)(es.K, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: () =>
                                            ((e) => {
                                                if (s.length > 1) {
                                                    (0, el.f1)();
                                                    let t = s.filter((t, l) => l !== e);
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
            s.length < 5 &&
                (0, n.jsx)(m.$, {
                    variant: "secondary",
                    size: "md",
                    onClick: () => {
                        if (5 === s.length) return;
                        0 === s.length && q(), (0, el.HU)();
                        let e = s.length > 0 ? s[s.length - 1] : _,
                            t =
                                s.length > 0
                                    ? (function (e) {
                                          if (!(0, en.qt)(e)) return e;
                                          let t = P()(e);
                                          return t.set("hsl.h", (t.get("hsl.h") + 15) % 360).hex();
                                      })(e)
                                    : e,
                            l = [...s, t];
                        o(l), h(l.length - 1);
                    },
                    icon: ed.T,
                    text: em.intl.string(eh.default.JUQcdT),
                    fullWidth: !0,
                }),
        ],
    });
}
var ef = l(192308),
    ep = l(405433),
    ev = l(457417);
let eC = () =>
    (0, n.jsx)(u.m, {
        text: em.intl.string(em.t.RDE0Sc),
        children: (0, n.jsx)(es.K, {
            "aria-label": em.intl.string(eh.default.zgFs8C),
            icon: ep.l,
            variant: "icon-only",
            onClick: () => {
                (0, ef.openModalLazy)(
                    async () => {
                        let { CustomThemesShareModalWrapper: e } = await Promise.all([
                            l.e("24199"),
                            l.e("57036"),
                            l.e("88394"),
                            l.e("80527"),
                            l.e("21909"),
                            l.e("31825"),
                            l.e("23353"),
                            l.e("96123"),
                            l.e("7175"),
                            l.e("14138"),
                            l.e("8971"),
                            l.e("88017"),
                            l.e("77404"),
                            l.e("1040"),
                            l.e("64615"),
                            l.e("17239"),
                            l.e("7454"),
                            l.e("64492"),
                            l.e("20861"),
                            l.e("36682"),
                            l.e("45723"),
                            l.e("56871"),
                            l.e("69601"),
                            l.e("63191"),
                            l.e("51444"),
                            l.e("80973"),
                            l.e("96758"),
                            l.e("68372"),
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
    eb = l(893897);
let ej = (e, t) => (e === t ? eb.HE : void 0);
function eO() {
    let e = (0, o.bG)([R.A], () => R.A.theme),
        t = (0, eM.M)(e) ? X.NJ.DARK : X.NJ.LIGHT,
        l = [
            {
                name: "",
                value: X.NJ.DARK,
                icon: eA.Z,
                className: ej(t, X.NJ.DARK),
                tooltip: em.intl.string(eh.default["Dk+OWY"]),
                tooltipAriaLabel: em.intl.string(eh.default["Dk+OWY"]),
            },
            {
                name: "",
                value: X.NJ.LIGHT,
                icon: eS.F,
                className: ej(t, X.NJ.LIGHT),
                tooltip: em.intl.string(eh.default["5vlJkY"]),
                tooltipAriaLabel: em.intl.string(eh.default["5vlJkY"]),
            },
        ];
    return (0, n.jsx)(eN.I, {
        className: eb.t7,
        optionClassName: eb.aF,
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
    ek = l(49999),
    eR = l(788868),
    ew = l(45945);
function ey(e) {
    let [t, l] = i.useState(0),
        [a, n] = i.useState(!1),
        s = i.useRef(e);
    return (
        i.useEffect(() => {
            e === s.current || a || l((e) => e + 1), (s.current = e), n(!1);
        }, [e, a]),
        { key: t, handleInternalChange: i.useCallback((e) => (n(!0), e), []) }
    );
}
function eH(e) {
    let { markAsDismissed: t } = e;
    return (0, n.jsx)("div", {
        className: ew.b,
        children: (0, n.jsx)(h.J, {
            size: "sm",
            onClick: () => {
                t?.(ek.i.USER_DISMISS), (0, N.Jp)();
            },
        }),
    });
}
function eD() {
    return (0, n.jsxs)("div", {
        className: ew.N1,
        children: [
            (0, n.jsx)(_.E, { variant: "text-md/bold", children: em.intl.string(eh.default.AsmU85) }),
            (0, n.jsx)(u.m, {
                text: em.intl.string(em.t["5AFxuK"]),
                children: (0, n.jsx)(x.t, { size: "custom", height: 20, width: 20, colorClass: ew.oU }),
            }),
            (0, n.jsx)(eH, {}),
        ],
    });
}
function eU(e) {
    let { markAsDismissed: t, isCoachmark: l } = e;
    return (0, b.JZ)(c.M.CUSTOM_THEME_COACHMARK)
        ? l
            ? (0, n.jsx)(eL, { markAsDismissed: t })
            : (0, n.jsx)(eD, {})
        : (0, n.jsx)(eL, { markAsDismissed: () => (0, b.Dr)(c.M.CUSTOM_THEME_COACHMARK) });
}
function eL(e) {
    let { markAsDismissed: t } = e,
        l = (0, O.L)(eR.PremiumTypes.TIER_2);
    return (0, n.jsxs)("div", {
        className: ew.CG,
        children: [
            (0, n.jsxs)("div", {
                className: ew.dI,
                children: [
                    (0, n.jsx)(g.D, {
                        variant: "heading-lg/extrabold",
                        children: em.intl.string(eh.default["23QUzv"]),
                    }),
                    (0, n.jsx)(eH, { markAsDismissed: t }),
                ],
            }),
            (0, n.jsx)(_.E, {
                className: ew.VA,
                variant: "text-sm/medium",
                color: "text-muted",
                children: em.intl.string(l ? eh.default.TRCE4g : eh.default["UV/Vtv"]),
            }),
        ],
    });
}
function eP(e) {
    let { gradientAngle: t, setGradientAngle: l } = e,
        { key: a, handleInternalChange: s } = ey(t),
        [o, c] = i.useState(`${Math.round(t)}\xb0`);
    return (
        i.useEffect(() => {
            c(`${Math.round(t)}\xb0`);
        }, [t]),
        (0, n.jsxs)("div", {
            className: r()(ew.xJ, ew.Gz),
            children: [
                (0, n.jsxs)("div", {
                    className: ew.Vt,
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
                            className: ew.A9,
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: ew.Zp,
                    children: [
                        (0, n.jsxs)("div", {
                            className: ew.p1,
                            children: [
                                (0, n.jsx)("div", { className: ew.uu }),
                                (0, n.jsx)("div", { className: ew.uu }),
                                (0, n.jsx)("div", { className: ew.VD }),
                                (0, n.jsx)("div", { className: ew.uu }),
                                (0, n.jsx)("div", { className: ew.uu }),
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
                                    t !== e || s(e), l(t);
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
        { key: a, handleInternalChange: s } = ey(t),
        [r, o] = i.useState(`${Math.round(t)}%`);
    return (
        i.useEffect(() => {
            o(`${Math.round(t)}%`);
        }, [t]),
        (0, n.jsxs)("div", {
            className: ew.xJ,
            children: [
                (0, n.jsxs)("div", {
                    className: ew.Vt,
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
                            placeholder: `${U.kJ}%`,
                            className: ew.A9,
                        }),
                    ],
                }),
                (0, n.jsx)(
                    E.A,
                    {
                        initialValue: t,
                        defaultValue: U.kJ,
                        minValue: 0,
                        maxValue: 100,
                        onValueChange: (e) => {
                            (0, el.QJ)(), s(e), l(e);
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
function eG(e) {
    let { isCoachmark: t, isMobile: l } = e,
        [a, s] = i.useState(!1),
        r = i.useRef(!1),
        [o, c] = i.useState(!1),
        u = i.useRef(null),
        h = i.useRef(null),
        _ = i.useCallback(() => {
            (0, el.y4)();
            let e = (function () {
                let e = V[Math.floor(Math.random() * V.length)],
                    t = G[Math.floor(Math.random() * G.length)];
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
                                    i = l.get("hsl.l");
                                switch (t) {
                                    case "analogous":
                                        return [
                                            P()
                                                .hsl(a - 30, n, i)
                                                .hex(),
                                            e,
                                            P()
                                                .hsl(a + 30, n, i)
                                                .hex(),
                                        ];
                                    case "complementary":
                                        let s;
                                        return (
                                            (s = P()
                                                .hsl((a + 180) % 360, n, i)
                                                .hex()),
                                            [e, P().mix(e, s, 0.5).hex(), s]
                                        );
                                    case "split-complementary":
                                        return [
                                            e,
                                            P()
                                                .hsl((a + 150) % 360, n, i)
                                                .hex(),
                                            P()
                                                .hsl((a + 210) % 360, n, i)
                                                .hex(),
                                        ];
                                    case "triadic":
                                        return [
                                            e,
                                            P()
                                                .hsl((a + 120) % 360, n, i)
                                                .hex(),
                                            P()
                                                .hsl((a + 240) % 360, n, i)
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
                (u.current = setTimeout(() => {
                    r.current || s(!0);
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
            s(!1);
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
                    ? { type: "icon", asset: T.j }
                    : {
                          type: "rive",
                          asset: f.m,
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
              asset: E ? (0, n.jsx)(T.j, {}) : void 0,
              forceOpen: a,
              onTooltipShow: x,
              onTooltipHide: g,
              targetElementRef: h,
              children: v(),
          });
}
function eV(e) {
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
            className: ew.M0,
            children: a
                ? (0, n.jsx)(eV, { disabled: !l, onApply: t, fullWidth: !0 })
                : (0, n.jsx)(j.A, {
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
        i = (0, O.L)(eR.PremiumTypes.TIER_2),
        s = (0, H.St)("custom_themes_editor_footer"),
        o = a?.from === N.xv.SHARE_MESSAGE;
    (0, el.wb)(i, S.A.CUSTOM_THEMES_EDITOR);
    let d = () => {
            (0, el.uk)(),
                (0, b.Dr)(c.M.CUSTOM_THEME_COACHMARK),
                a?.from === N.xv.SETTING
                    ? ((0, y.openUserSettings)(w.X.APPEARANCE_THEME_CATEGORY), (0, N.Jp)())
                    : a?.from === N.xv.CLIENT_THEMES_EDITOR
                      ? (0, N.nf)(N.HP.CLIENT_THEMES)
                      : (0, N.Jp)();
        },
        u = r()(ew.xQ, { [ew.NI]: !i }),
        h = (0, n.jsx)(j.A, {
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
        children: i
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(eC, {}),
                      (0, n.jsx)(m.$, { variant: "secondary", onClick: d, text: em.intl.string(em.t["13/7kX"]) }),
                      (0, n.jsx)(eV, {
                          disabled: !l,
                          onApply: () => {
                              o && D.default.track(eI.HAw.CUSTOM_THEME_SHARE_APPLIED, {}), t();
                          },
                      }),
                  ],
              })
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      s
                          ? (0, n.jsxs)("div", {
                                className: ew.rV,
                                children: [
                                    (0, n.jsx)(I.l, {
                                        size: "md",
                                        className: ew.Tf,
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
    let { metadata: t, markAsDismissed: l, isCoachmark: a, isMobile: s } = e,
        r = (function () {
            let [e] = i.useState(() => R.A.theme);
            return i.useCallback(
                (t) => {
                    let {
                        resetColors: l,
                        resetGradientAngle: a,
                        resetChassisMixAmount: n,
                        resetBaseTheme: i,
                    } = et(t, e);
                    U.ko.getState().setAll({ colors: l, gradientAngle: a, chassisMixAmount: n }),
                        "reset_button" === t ? z(Y(i ?? R.A.theme)) : (0, k.XG)();
                    let s = B.eh.getSetting().backgroundGradientPresetId;
                    null != s && (0, K.bc)(s);
                },
                [e],
            );
        })(),
        d = (function () {
            let { colors: e, chassisMixAmount: t, gradientAngle: l } = (0, U.ko)(),
                a = (0, o.bG)([R.A], () => R.A.theme),
                [n] = i.useState(() => R.A.theme),
                {
                    resetColors: s,
                    resetGradientAngle: r,
                    resetChassisMixAmount: c,
                    resetBaseTheme: d,
                } = et("reset_button", n);
            return JSON.stringify(e) === JSON.stringify(s) && t === c && l === r && a === d;
        })(),
        u = i.useRef(!1),
        {
            colors: h,
            chassisMixAmount: x,
            gradientAngle: g,
            setColors: E,
            setChassisMixAmount: T,
            setGradientAngle: f,
        } = (0, U.ko)(),
        [p, j] = i.useState(h[0] ?? U.OT),
        O = (0, o.bG)([R.A], () => R.A.theme),
        I = (0, b.JZ)(c.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: w } = (0, M.Ay)(S.A.CUSTOM_THEMES_EDITOR),
        y = (0, o.bG)([$.A], () => $.A.getSavedCustomTheme()),
        H = async () => {
            (u.current = !0),
                await (0, C.u_)({
                    theme: O,
                    customUserThemeSettings: { colors: h, gradientColorStops: [], gradientAngle: g, baseMix: x },
                }),
                (0, el.Yl)(h, x, g, O, w),
                l?.(ek.i.TAKE_ACTION),
                I || (0, b.Dr)(c.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, N.Jp)(),
                (0, k.XG)();
        },
        D = h.length > 0;
    return (
        i.useEffect(
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
                    ? (U.ko
                          .getState()
                          .setAll({ colors: y.colors, gradientAngle: y.gradient_angle, chassisMixAmount: y.base_mix }),
                      z(y.base_theme))
                    : ee(h, p, E);
            }
        }),
        (0, n.jsxs)("div", {
            className: s ? ew.AA : ew.kL,
            "data-app-right-panel": !s,
            children: [
                (0, n.jsx)(v.Ip, {
                    children: (0, n.jsxs)("div", {
                        className: ew.sV,
                        children: [
                            (0, n.jsx)(eU, { markAsDismissed: l, isCoachmark: a }),
                            (0, n.jsxs)("div", {
                                className: ew.uW,
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
                                className: ew.uW,
                                children: [
                                    (0, n.jsx)(_.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: em.intl.string(eh.default.uSL2Gy),
                                    }),
                                    (0, n.jsx)(eT, {
                                        onChange: (e) => {
                                            j(e), 0 === h.length && ee(h, e, E);
                                        },
                                        value: p,
                                        colors: h,
                                        setColors: E,
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: ew.uW,
                                children: [
                                    (0, n.jsx)(_.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: em.intl.string(eh.default.F1t0c8),
                                    }),
                                    h.length > 1 && (0, n.jsx)(eP, { gradientAngle: g, setGradientAngle: f }),
                                    (0, n.jsx)(eJ, {
                                        chassisMixAmount: x,
                                        setChassisMixAmount: (e) => {
                                            T(e), 0 === h.length && ee(h, p, E);
                                        },
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: ew.WA,
                                children: [
                                    (0, n.jsx)(eG, { isCoachmark: a, isMobile: s }),
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

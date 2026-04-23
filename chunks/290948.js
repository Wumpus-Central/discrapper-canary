l.r(t), l.d(t, { default: () => eK });
var a,
    n = l(627968),
    s = l(64700),
    r = l(503698),
    i = l.n(r),
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
    C = l(364522),
    A = l(817281),
    v = l(964486),
    S = l(793574),
    M = l(688810),
    N = l(793943),
    j = l(826673),
    O = l(792656),
    I = l(757036),
    w = l(400669),
    b = l(973654),
    R = l(363195),
    k = l(780964),
    H = l(858897),
    y = l(909536),
    D = l(954571),
    U = l(467135),
    L = l(310784),
    J = l.n(L);
let P = [
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
    K = l(253932),
    B = l(823459),
    W = l(74396),
    $ = l(385803),
    Q = l(818348),
    X = (((a = {}).RESET_BUTTON = "reset_button"), (a.EDITOR_CLOSE = "editor_close"), a);
function z(e) {
    return (0, Z.M)(e) ? Q.NJ.DARK : Q.NJ.LIGHT;
}
function Y(e) {
    let t = K.eh.getSetting(),
        l =
            null != t.backgroundGradientPresetId &&
            t.backgroundGradientPresetId in $.ag &&
            $.ag[t.backgroundGradientPresetId].theme !== e;
    (0, b.GQ)(e), l && (0, B.S8)();
}
function q() {
    let e = z(R.A.theme);
    e !== R.A.theme && Y(e);
}
function ee(e, t, l) {
    0 === e.length && l([t]), q();
}
function et(e, t) {
    let l = K.eh.getSetting().customUserThemeSettings,
        a = W.A.getSavedCustomTheme(),
        n = "reset_button" === e ? [U.OT] : [],
        s = 0,
        r = U.kJ,
        i = t;
    return (
        l?.colors != null
            ? ((n = l.colors), (s = l.gradientAngle ?? 0), (r = l.baseMix ?? U.kJ))
            : "reset_button" === e &&
              null != a &&
              ((n = a.colors), (s = a.gradient_angle ?? 0), (r = a.base_mix ?? U.kJ), (i = a.base_theme)),
        { resetColors: n, resetGradientAngle: s, resetChassisMixAmount: r, resetBaseTheme: i }
    );
}
var el = l(738419),
    ea = l(156828),
    en = l(317097),
    es = l(714385),
    er = l(408278),
    ei = l(289873),
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
        return (0, n.jsx)("div", { className: e_.wG, children: (0, n.jsx)(ei.y, {}) });
    },
});
function eg(e) {
    let { colors: t, selectedIndex: l, onColorSelect: a } = e,
        [r, o] = s.useMemo(() => {
            let e = t.map((e, l) => (t.length < 1 ? 0 : (l / (t.length - 1)) * 80 + 10)),
                l = t.map((t, l) => `${t} ${e[l]}%`).join(", ");
            return [e, { background: `linear-gradient(to right, ${l})` }];
        }, [t]);
    return (0, n.jsx)("div", {
        className: e_.wS,
        style: o,
        children: t.map((e, t) => {
            let o = r[t],
                c = t === l;
            return (0, n.jsxs)(
                s.Fragment,
                {
                    children: [
                        (0, n.jsx)(eo.D, {
                            className: i()(e_.pX, { [e_.wH]: c }),
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
    let { value: t, onChange: l, className: a, colors: r, setColors: o } = e,
        c = (0, eu.A)(),
        [d, h] = s.useState(0),
        [_, x] = s.useState(t);
    s.useEffect(() => {
        if (r.length > 0 && d < r.length) {
            let e = r[d];
            (0, en.qt)(e) && (x(e), l(e));
        }
        d >= r.length && h(0);
    }, [d, r, l]);
    let g = (e) => {
            let t,
                a = (t = e.trim()).startsWith("#") ? t : t.length > 0 ? `#${t}` : t;
            if ((x(a), (0, en.qt)(a) && ((0, el.CE)(), l(a), r.length > 0))) {
                let e = [...r];
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
        T = r.length > 1;
    return (0, n.jsxs)("div", {
        className: i()(e_.kL, a),
        children: [
            T &&
                (0, n.jsx)(eg, {
                    colors: r,
                    selectedIndex: d,
                    onColorSelect: (e) => {
                        h(e), (0, el.mx)();
                    },
                }),
            (0, n.jsx)(ex, {
                onChange: E,
                onChangeComplete: (e) => {
                    if (((0, el.VE)(), l(e.hex), r.length > 0)) {
                        let t = [...r];
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
                                    children: (0, n.jsx)(er.K, {
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
                                    children: (0, n.jsx)(er.K, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: () =>
                                            ((e) => {
                                                if (r.length > 1) {
                                                    (0, el.f1)();
                                                    let t = r.filter((t, l) => l !== e);
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
            r.length < 5 &&
                (0, n.jsx)(m.$, {
                    variant: "secondary",
                    size: "md",
                    onClick: () => {
                        if (5 === r.length) return;
                        0 === r.length && q(), (0, el.HU)();
                        let e = r.length > 0 ? r[r.length - 1] : _,
                            t =
                                r.length > 0
                                    ? (function (e) {
                                          if (!(0, en.qt)(e)) return e;
                                          let t = J()(e);
                                          return t.set("hsl.h", (t.get("hsl.h") + 15) % 360).hex();
                                      })(e)
                                    : e,
                            l = [...r, t];
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
    eC = l(457417);
let eA = () =>
    (0, n.jsx)(u.m, {
        text: em.intl.string(em.t.RDE0Sc),
        children: (0, n.jsx)(er.K, {
            "aria-label": em.intl.string(eh.default.zgFs8C),
            icon: ep.l,
            variant: "icon-only",
            onClick: () => {
                (0, eT.openModalLazy)(
                    async () => {
                        let { CustomThemesShareModalWrapper: e } = await Promise.all([l.e("96758"), l.e("38442")]).then(
                            l.bind(l, 583955),
                        );
                        return (t) => (0, n.jsx)(e, { ...t });
                    },
                    { modalKey: eC.dJ },
                );
            },
        }),
    });
var ev = l(943255),
    eS = l(575181),
    eM = l(366010),
    eN = l(629584),
    ej = l(893897);
let eO = (e, t) => (e === t ? ej.HE : void 0);
function eI() {
    let e = (0, o.bG)([R.A], () => R.A.theme),
        t = (0, eM.M)(e) ? Q.NJ.DARK : Q.NJ.LIGHT,
        l = [
            {
                name: "",
                value: Q.NJ.DARK,
                icon: ev.Z,
                className: eO(t, Q.NJ.DARK),
                tooltip: em.intl.string(eh.default["Dk+OWY"]),
                tooltipAriaLabel: em.intl.string(eh.default["Dk+OWY"]),
            },
            {
                name: "",
                value: Q.NJ.LIGHT,
                icon: eS.F,
                className: eO(t, Q.NJ.LIGHT),
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
            (0, el.dR)(), Y(t);
        },
        look: "pill",
    });
}
var ew = l(652215),
    eb = l(49999),
    eR = l(788868),
    ek = l(45945);
function eH(e) {
    let [t, l] = s.useState(0),
        [a, n] = s.useState(!1),
        r = s.useRef(e);
    return (
        s.useEffect(() => {
            e === r.current || a || l((e) => e + 1), (r.current = e), n(!1);
        }, [e, a]),
        { key: t, handleInternalChange: s.useCallback((e) => (n(!0), e), []) }
    );
}
function ey(e) {
    let { markAsDismissed: t } = e;
    return (0, n.jsx)("div", {
        className: ek.b,
        children: (0, n.jsx)(h.J, {
            size: "sm",
            onClick: () => {
                t?.(eb.i.USER_DISMISS), (0, N.Jp)();
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
            (0, n.jsx)(ey, {}),
        ],
    });
}
function eU(e) {
    let { markAsDismissed: t, isCoachmark: l } = e;
    return (0, j.JZ)(c.M.CUSTOM_THEME_COACHMARK)
        ? l
            ? (0, n.jsx)(eL, { markAsDismissed: t })
            : (0, n.jsx)(eD, {})
        : (0, n.jsx)(eL, { markAsDismissed: () => (0, j.Dr)(c.M.CUSTOM_THEME_COACHMARK) });
}
function eL(e) {
    let { markAsDismissed: t } = e,
        l = (0, I.L)(eR.PremiumTypes.TIER_2);
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
                    (0, n.jsx)(ey, { markAsDismissed: t }),
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
function eJ(e) {
    let { gradientAngle: t, setGradientAngle: l } = e,
        { key: a, handleInternalChange: r } = eH(t),
        [o, c] = s.useState(`${Math.round(t)}\xb0`);
    return (
        s.useEffect(() => {
            c(`${Math.round(t)}\xb0`);
        }, [t]),
        (0, n.jsxs)("div", {
            className: i()(ek.xJ, ek.Gz),
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
                                    t !== e || r(e), l(t);
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
function eP(e) {
    let { chassisMixAmount: t, setChassisMixAmount: l } = e,
        { key: a, handleInternalChange: r } = eH(t),
        [i, o] = s.useState(`${Math.round(t)}%`);
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
                            value: i,
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
                            className: ek.A9,
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
                            (0, el.QJ)(), r(e), l(e);
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
        [a, r] = s.useState(!1),
        i = s.useRef(!1),
        [o, c] = s.useState(!1),
        u = s.useRef(null),
        h = s.useRef(null),
        _ = s.useCallback(() => {
            (0, el.y4)();
            let e = (function () {
                let e = V[Math.floor(Math.random() * V.length)],
                    t = G[Math.floor(Math.random() * G.length)];
                if ("path1" == (0.2 > Math.random() ? "path1" : "path2")) {
                    let l = Math.floor(Math.random() * P.length),
                        a = Math.floor(Math.random() * P.length);
                    for (; a === l; ) a = Math.floor(Math.random() * P.length);
                    return {
                        type: "gradient",
                        colors: [P[l], P[a]],
                        angle: t,
                        intensity: e,
                        gradientType: "two-color",
                    };
                }
                {
                    let l = P[Math.floor(Math.random() * P.length)],
                        a = F[Math.floor(Math.random() * F.length)];
                    return {
                        type: "gradient",
                        colors: (function (e, t) {
                            try {
                                let l = J()(e),
                                    a = l.get("hsl.h"),
                                    n = l.get("hsl.s"),
                                    s = l.get("hsl.l");
                                switch (t) {
                                    case "analogous":
                                        return [
                                            J()
                                                .hsl(a - 30, n, s)
                                                .hex(),
                                            e,
                                            J()
                                                .hsl(a + 30, n, s)
                                                .hex(),
                                        ];
                                    case "complementary":
                                        let r;
                                        return (
                                            (r = J()
                                                .hsl((a + 180) % 360, n, s)
                                                .hex()),
                                            [e, J().mix(e, r, 0.5).hex(), r]
                                        );
                                    case "split-complementary":
                                        return [
                                            e,
                                            J()
                                                .hsl((a + 150) % 360, n, s)
                                                .hex(),
                                            J()
                                                .hsl((a + 210) % 360, n, s)
                                                .hex(),
                                        ];
                                    case "triadic":
                                        return [
                                            e,
                                            J()
                                                .hsl((a + 120) % 360, n, s)
                                                .hex(),
                                            J()
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
            U.ko
                .getState()
                .setAll({
                    colors: e.colors,
                    gradientAngle: e.angle ?? U.ko.getState().gradientAngle,
                    chassisMixAmount: e.intensity,
                });
        }, []);
    s.useEffect(() => {
        if (t)
            return (
                (i.current = !1),
                (u.current = setTimeout(() => {
                    i.current || r(!0);
                }, 5e3)),
                () => {
                    null != u.current && clearTimeout(u.current);
                }
            );
    }, [t]);
    let x = s.useCallback(() => {
            i.current = !0;
        }, []),
        g = s.useCallback(() => {
            r(!1);
        }, []),
        E = a && !o,
        C = () =>
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
        ? C()
        : (0, n.jsx)(d.u, {
              title: em.intl.string(eh.default.NJ9m8Y),
              body: em.intl.string(eh.default["6pabtR"]),
              position: "left",
              asset: E ? (0, n.jsx)(f.j, {}) : void 0,
              forceOpen: a,
              onTooltipShow: x,
              onTooltipHide: g,
              targetElementRef: h,
              children: C(),
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
        a = (0, I.L)(eR.PremiumTypes.TIER_2);
    return (
        (0, el.wb)(a, S.A.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, n.jsx)("div", {
            className: ek.M0,
            children: a
                ? (0, n.jsx)(eV, { disabled: !l, onApply: t, fullWidth: !0 })
                : (0, n.jsx)(O.A, {
                      subscriptionTier: eR.pe.TIER_2,
                      buttonTextOverride: em.intl.string(em.t.JST6jl),
                      premiumModalAnalyticsLocation: {
                          page: ew.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: ew.JJy.CUSTOM_THEMES_COACHMARK_FOOTER,
                      },
                      fullWidth: !0,
                  }),
        })
    );
}
function eZ(e) {
    let { onSaveTheme: t, canApply: l, metadata: a } = e,
        s = (0, I.L)(eR.PremiumTypes.TIER_2),
        r = (0, y.St)("custom_themes_editor_footer"),
        o = a?.from === N.xv.SHARE_MESSAGE;
    (0, el.wb)(s, S.A.CUSTOM_THEMES_EDITOR);
    let d = () => {
            (0, el.uk)(),
                (0, j.Dr)(c.M.CUSTOM_THEME_COACHMARK),
                a?.from === N.xv.SETTING
                    ? ((0, H.openUserSettings)(k.X.APPEARANCE_THEME_CATEGORY), (0, N.Jp)())
                    : a?.from === N.xv.CLIENT_THEMES_EDITOR
                      ? (0, N.nf)(N.HP.CLIENT_THEMES)
                      : (0, N.Jp)();
        },
        u = i()(ek.xQ, { [ek.NI]: !s }),
        h = (0, n.jsx)(O.A, {
            subscriptionTier: eR.pe.TIER_2,
            defaultTextOverride: em.intl.string(em.t.pj0XBN),
            premiumModalAnalyticsLocation: {
                page: ew.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                section: ew.JJy.CUSTOM_THEMES_FOOTER,
            },
            fullWidth: !0,
        });
    return (0, n.jsx)("div", {
        className: u,
        children: s
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(eA, {}),
                      (0, n.jsx)(m.$, { variant: "secondary", onClick: d, text: em.intl.string(em.t["13/7kX"]) }),
                      (0, n.jsx)(eV, {
                          disabled: !l,
                          onApply: () => {
                              o && D.default.track(ew.HAw.CUSTOM_THEME_SHARE_APPLIED, {}), t();
                          },
                      }),
                  ],
              })
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      r
                          ? (0, n.jsxs)("div", {
                                className: ek.rV,
                                children: [
                                    (0, n.jsx)(w.l, {
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
function eK(e) {
    let { metadata: t, markAsDismissed: l, isCoachmark: a, isMobile: r } = e,
        i = (function () {
            let [e] = s.useState(() => R.A.theme);
            return s.useCallback(
                (t) => {
                    let {
                        resetColors: l,
                        resetGradientAngle: a,
                        resetChassisMixAmount: n,
                        resetBaseTheme: s,
                    } = et(t, e);
                    U.ko.getState().setAll({ colors: l, gradientAngle: a, chassisMixAmount: n }),
                        "reset_button" === t ? Y(z(s ?? R.A.theme)) : (0, b.XG)();
                    let r = K.eh.getSetting().backgroundGradientPresetId;
                    null != r && (0, B.bc)(r);
                },
                [e],
            );
        })(),
        d = (function () {
            let { colors: e, chassisMixAmount: t, gradientAngle: l } = (0, U.ko)(),
                a = (0, o.bG)([R.A], () => R.A.theme),
                [n] = s.useState(() => R.A.theme),
                {
                    resetColors: r,
                    resetGradientAngle: i,
                    resetChassisMixAmount: c,
                    resetBaseTheme: d,
                } = et("reset_button", n);
            return JSON.stringify(e) === JSON.stringify(r) && t === c && l === i && a === d;
        })(),
        u = s.useRef(!1),
        {
            colors: h,
            chassisMixAmount: x,
            gradientAngle: g,
            setColors: E,
            setChassisMixAmount: f,
            setGradientAngle: T,
        } = (0, U.ko)(),
        [p, O] = s.useState(h[0] ?? U.OT),
        I = (0, o.bG)([R.A], () => R.A.theme),
        w = (0, j.JZ)(c.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: k } = (0, M.Ay)(S.A.CUSTOM_THEMES_EDITOR),
        H = (0, o.bG)([W.A], () => W.A.getSavedCustomTheme()),
        y = async () => {
            (u.current = !0),
                await (0, A.u_)({
                    theme: I,
                    customUserThemeSettings: { colors: h, gradientColorStops: [], gradientAngle: g, baseMix: x },
                }),
                (0, el.Yl)(h, x, g, I, k),
                l?.(eb.i.TAKE_ACTION),
                w || (0, j.Dr)(c.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, N.Jp)(),
                (0, b.XG)();
        },
        D = h.length > 0;
    return (
        s.useEffect(
            () => () => {
                u.current || i(X.EDITOR_CLOSE);
            },
            [i],
        ),
        (0, v.Ay)(() => {
            if (!a) {
                let e = (h?.length ?? 0) > 0,
                    t = null != H;
                !e && t
                    ? (U.ko
                          .getState()
                          .setAll({ colors: H.colors, gradientAngle: H.gradient_angle, chassisMixAmount: H.base_mix }),
                      Y(H.base_theme))
                    : ee(h, p, E);
            }
        }),
        (0, n.jsxs)("div", {
            className: r ? ek.AA : ek.kL,
            "data-app-right-panel": !r,
            children: [
                (0, n.jsx)(C.Ip, {
                    children: (0, n.jsxs)("div", {
                        className: ek.sV,
                        children: [
                            (0, n.jsx)(eU, { markAsDismissed: l, isCoachmark: a }),
                            (0, n.jsxs)("div", {
                                className: ek.uW,
                                children: [
                                    (0, n.jsx)(_.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: em.intl.string(eh.default.o2NfLF),
                                    }),
                                    (0, n.jsx)(eI, {}),
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
                                            O(e), 0 === h.length && ee(h, e, E);
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
                                    h.length > 1 && (0, n.jsx)(eJ, { gradientAngle: g, setGradientAngle: T }),
                                    (0, n.jsx)(eP, {
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
                                    (0, n.jsx)(eG, { isCoachmark: a, isMobile: r }),
                                    (0, n.jsx)(m.$, {
                                        variant: "secondary",
                                        onClick: () => {
                                            i(X.RESET_BUTTON), (0, el.G_)();
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
                    ? (0, n.jsx)(eF, { onSaveTheme: y, canApply: D })
                    : (0, n.jsx)(eZ, { onSaveTheme: y, canApply: D, metadata: t }),
            ],
        })
    );
}

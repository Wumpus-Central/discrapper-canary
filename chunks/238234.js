n.r(t), n.d(t, { default: () => ew });
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
    H = n(843010),
    J = n(766075),
    D = n(909536),
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
function z(e) {
    return (0, V.M)(e) ? W.NJ.DARK : W.NJ.LIGHT;
}
function X(e) {
    let t = $.eh.getSetting(),
        n =
            null != t.backgroundGradientPresetId &&
            t.backgroundGradientPresetId in K.ag &&
            K.ag[t.backgroundGradientPresetId].theme !== e;
    (0, R.GQ)(e), n && (0, P.S8)();
}
function Q() {
    let e = z(O.A.theme);
    e !== O.A.theme && X(e);
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
var Z = n(738419),
    q = n(310784),
    ee = n.n(q),
    et = n(156828),
    en = n(317097),
    es = n(714385),
    el = n(408278),
    ei = n(289873),
    ea = n(939249),
    er = n(834040),
    eo = n(499373),
    eu = n(971745),
    ec = n(693227),
    ed = n(375708),
    em = n(253499);
let eh = (0, et.Fe)({
    createPromise: () =>
        Promise.all([n.e("60216"), n.e("22687"), n.e("46859"), n.e("85787"), n.e("86537")]).then(n.bind(n, 33136)),
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
                u = t === n;
            return (0, l.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, l.jsx)(ea.D, {
                            className: r()(em.pX, { [em.wH]: u }),
                            style: { left: `${o}%`, backgroundColor: e },
                            onClick: () => s(t),
                            children: (0, l.jsx)("div", { className: em.Px }),
                        }),
                        u && (0, l.jsx)("div", { className: em.gQ, style: { left: `${o}%` } }),
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
        u = (0, eu.A)(),
        [c, m] = i.useState(0),
        [x, g] = i.useState(t);
    function f(e) {
        let t,
            s = (t = e.trim()).startsWith("#") ? t : t.length > 0 ? `#${t}` : t;
        if ((g(s), (0, en.qt)(s) && ((0, Z.CE)(), n(s), a.length > 0))) {
            let e = [...a];
            (e[c] = s), o(e);
        }
    }
    i.useEffect(() => {
        if (a.length > 0 && c < a.length) {
            let e = a[c];
            (0, en.qt)(e) && (g(e), n(e));
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
                    (0, Z.AL)(), f(e);
                } catch {}
        },
        j = a.length > 1;
    return (0, l.jsxs)("div", {
        className: r()(em.kL, s),
        children: [
            j &&
                (0, l.jsx)(ex, {
                    colors: a,
                    selectedIndex: c,
                    onColorSelect: function (e) {
                        m(e), (0, Z.mx)();
                    },
                }),
            (0, l.jsx)(eh, {
                onChange: T,
                onChangeComplete: function (e) {
                    if (((0, Z.VE)(), n(e.hex), a.length > 0)) {
                        let t = [...a];
                        (t[c] = e.hex), o(t);
                    }
                },
                color: x,
            }),
            (0, l.jsxs)("div", {
                className: em.Xr,
                children: [
                    (0, l.jsx)(eg, { color: x }),
                    (0, l.jsx)("input", {
                        className: em.Im,
                        value: x.toUpperCase(),
                        onChange: (e) => f(e.target.value),
                        maxLength: 7,
                        placeholder: L.OT,
                        type: "text",
                    }),
                    (0, l.jsxs)("div", {
                        className: em.hE,
                        children: [
                            null != u &&
                                (0, l.jsx)(d.m, {
                                    text: ed.intl.string(ec.default["NCFz+N"]),
                                    children: (0, l.jsx)(el.K, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: E,
                                        icon: es.d,
                                        "aria-label": ed.intl.string(ec.default["NCFz+N"]),
                                    }),
                                }),
                            j &&
                                (0, l.jsx)(d.m, {
                                    text: ed.intl.string(ed.t.N86XcP),
                                    children: (0, l.jsx)(el.K, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: () =>
                                            (function (e) {
                                                if (a.length > 1) {
                                                    (0, Z.f1)();
                                                    let t = a.filter((t, n) => n !== e);
                                                    o(t), c >= t.length ? m(t.length - 1) : c > e && m(c - 1);
                                                }
                                            })(c),
                                        icon: er.Q,
                                        "aria-label": ed.intl.string(ed.t.N86XcP),
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
                        0 === a.length && Q(), (0, Z.HU)();
                        let e = a.length > 0 ? a[a.length - 1] : x,
                            t =
                                a.length > 0
                                    ? (function (e) {
                                          if (!(0, en.qt)(e)) return e;
                                          let t = ee()(e);
                                          return t.set("hsl.h", (t.get("hsl.h") + 15) % 360).hex();
                                      })(e)
                                    : e,
                            n = [...a, t];
                        o(n), m(n.length - 1);
                    },
                    icon: eo.T,
                    text: ed.intl.string(ec.default.JUQcdT),
                    fullWidth: !0,
                }),
        ],
    });
}
var eT = n(192308),
    eE = n(405433),
    ej = n(457417);
function eS() {
    return (0, l.jsx)(d.m, {
        text: ed.intl.string(ed.t.RDE0Sc),
        children: (0, l.jsx)(el.K, {
            "aria-label": ed.intl.string(ec.default.zgFs8C),
            icon: eE.l,
            variant: "icon-only",
            onClick: () => {
                (0, eT.openModalLazy)(
                    async () => {
                        let { CustomThemesShareModalWrapper: e } = await Promise.all([
                            n.e("16747"),
                            n.e("94635"),
                            n.e("43880"),
                            n.e("62279"),
                            n.e("27785"),
                            n.e("77084"),
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
    eN = n(893897);
function eM(e, t) {
    return e === t ? eN.HE : void 0;
}
function e_() {
    let e = (0, o.bG)([O.A], () => O.A.theme),
        t = (0, ep.M)(e) ? W.NJ.DARK : W.NJ.LIGHT,
        n = [
            {
                name: "",
                value: W.NJ.DARK,
                icon: eA.Z,
                className: eM(t, W.NJ.DARK),
                tooltip: ed.intl.string(ec.default["Dk+OWY"]),
                tooltipAriaLabel: ed.intl.string(ec.default["Dk+OWY"]),
            },
            {
                name: "",
                value: W.NJ.LIGHT,
                icon: eC.F,
                className: eM(t, W.NJ.LIGHT),
                tooltip: ed.intl.string(ec.default["5vlJkY"]),
                tooltipAriaLabel: ed.intl.string(ec.default["5vlJkY"]),
            },
        ];
    return (0, l.jsx)(ev.I, {
        className: eN.t7,
        optionClassName: eN.aF,
        options: n,
        value: t,
        onChange: (e) => {
            let { value: t } = e;
            (0, Z.dR)(), X(t);
        },
        look: "pill",
    });
}
var eb = n(652215),
    ek = n(49999),
    ey = n(202541),
    eR = n(45945);
function eO(e) {
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
function eI(e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsx)("div", {
        className: eR.b,
        children: (0, l.jsx)(m.J, {
            size: "sm",
            onClick: () => {
                t?.(ek.i.USER_DISMISS), (0, M.Jp)(), (0, P.S8)();
            },
        }),
    });
}
function eH() {
    return (0, l.jsxs)("div", {
        className: eR.N1,
        children: [
            (0, l.jsx)(x.E, { variant: "text-md/bold", children: ed.intl.string(ec.default.AsmU85) }),
            (0, l.jsx)(d.m, {
                text: ed.intl.string(ed.t["5AFxuK"]),
                children: (0, l.jsx)(g.t, { size: "custom", height: 20, width: 20, colorClass: eR.oU }),
            }),
            (0, l.jsx)(eI, {}),
        ],
    });
}
function eJ(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, _.JZ)(u.M.CUSTOM_THEME_COACHMARK)
        ? n
            ? (0, l.jsx)(eD, { markAsDismissed: t })
            : (0, l.jsx)(eH, {})
        : (0, l.jsx)(eD, { markAsDismissed: () => (0, _.Dr)(u.M.CUSTOM_THEME_COACHMARK) });
}
function eD(e) {
    let { markAsDismissed: t } = e,
        n = (0, k.L)(ey.PremiumTypes.TIER_2);
    return (0, l.jsxs)("div", {
        className: eR.CG,
        children: [
            (0, l.jsxs)("div", {
                className: eR.dI,
                children: [
                    (0, l.jsx)(f.D, {
                        variant: "heading-lg/extrabold",
                        children: ed.intl.string(ec.default["23QUzv"]),
                    }),
                    (0, l.jsx)(eI, { markAsDismissed: t }),
                ],
            }),
            (0, l.jsx)(x.E, {
                className: eR.VA,
                variant: "text-sm/medium",
                color: "text-muted",
                children: ed.intl.string(n ? ec.default.TRCE4g : ec.default["UV/Vtv"]),
            }),
        ],
    });
}
function eU(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: s, handleInternalChange: a } = eO(t),
        [o, u] = i.useState(`${Math.round(t)}\xb0`);
    return (
        i.useEffect(() => {
            u(`${Math.round(t)}\xb0`);
        }, [t]),
        (0, l.jsxs)("div", {
            className: r()(eR.xJ, eR.Gz),
            children: [
                (0, l.jsxs)("div", {
                    className: eR.Vt,
                    children: [
                        (0, l.jsx)(x.E, { variant: "text-md/medium", children: ed.intl.string(ec.default.dZkwgx) }),
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
                                    u(`${l}\xb0`), (0, Z.l6)(), n(l);
                                })(e.target.value),
                            placeholder: "0\xb0",
                            className: eR.A9,
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: eR.Zp,
                    children: [
                        (0, l.jsxs)("div", {
                            className: eR.p1,
                            children: [
                                (0, l.jsx)("div", { className: eR.uu }),
                                (0, l.jsx)("div", { className: eR.uu }),
                                (0, l.jsx)("div", { className: eR.VD }),
                                (0, l.jsx)("div", { className: eR.uu }),
                                (0, l.jsx)("div", { className: eR.uu }),
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
                                    (0, Z.PT)();
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
        { key: s, handleInternalChange: a } = eO(t),
        [r, o] = i.useState(`${Math.round(t)}%`);
    return (
        i.useEffect(() => {
            o(`${Math.round(t)}%`);
        }, [t]),
        (0, l.jsxs)("div", {
            className: eR.xJ,
            children: [
                (0, l.jsxs)("div", {
                    className: eR.Vt,
                    children: [
                        (0, l.jsx)(x.E, { variant: "text-md/medium", children: ed.intl.string(ec.default.xlXkaL) }),
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
                                    o(`${l}%`), (0, Z.Cq)(), n(l);
                                })(e.target.value),
                            placeholder: `${L.kJ}%`,
                            className: eR.A9,
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
                            (0, Z.QJ)(), a(e), n(e);
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
        [o, u] = i.useState(!1),
        d = i.useRef(null),
        m = i.useRef(null),
        x = i.useCallback(() => {
            (0, Z.y4)();
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
            text: ed.intl.string(ec.default.c9MBEH),
            fullWidth: !0,
        });
    }
    return n
        ? A()
        : (0, l.jsx)(c.u, {
              title: ed.intl.string(ec.default.NJ9m8Y),
              body: ed.intl.string(ec.default["6pabtR"]),
              position: "left",
              asset: T ? (0, l.jsx)(E.j, {}) : void 0,
              forceOpen: s,
              onTooltipShow: g,
              onTooltipHide: f,
              targetElementRef: m,
              children: A(),
          });
}
function eG(e) {
    let { onApply: t, disabled: n, fullWidth: s } = e;
    return (0, l.jsx)(d.m, {
        text: ed.intl.string(ec.default.SFyHIP),
        shouldShow: n,
        children: (0, l.jsx)(h.$, {
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
        (0, Z.wb)(s, v.A.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, l.jsx)("div", {
            className: eR.M0,
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
        a = (0, D.St)("custom_themes_editor_footer"),
        o = s?.from === M.xv.SHARE_MESSAGE;
    function c() {
        (0, P.S8)(),
            (0, Z.uk)(),
            (0, _.Dr)(u.M.CUSTOM_THEME_COACHMARK),
            s?.from === M.xv.SETTING
                ? ((0, J.openUserSettings)(I.X.APPEARANCE_THEME_CATEGORY), (0, M.Jp)())
                : s?.from === M.xv.CLIENT_THEMES_EDITOR
                  ? (0, M.nf)(M.HP.CLIENT_THEMES)
                  : (0, M.Jp)();
    }
    (0, Z.wb)(i, v.A.CUSTOM_THEMES_EDITOR);
    let d = r()(eR.xQ, { [eR.NI]: !i }),
        m = (0, l.jsx)(b.A, {
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
                      (0, l.jsx)(h.$, { variant: "secondary", onClick: c, text: ed.intl.string(ed.t["13/7kX"]) }),
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
                                className: eR.rV,
                                children: [
                                    (0, l.jsx)(y.l, {
                                        size: "md",
                                        className: eR.Tf,
                                        location: v.A.PREMIUM_WISHLIST_CUSTOM_THEMES_EDITOR,
                                    }),
                                    m,
                                ],
                            })
                          : m,
                      (0, l.jsx)(h.$, {
                          variant: "secondary",
                          onClick: c,
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
            let [e] = i.useState(() => O.A.theme);
            return i.useCallback(
                (t) => {
                    let {
                        resetColors: n,
                        resetGradientAngle: s,
                        resetChassisMixAmount: l,
                        resetBaseTheme: i,
                    } = B(t, e);
                    L.ko.getState().setAll({ colors: n, gradientAngle: s, chassisMixAmount: l }),
                        "reset_button" === t ? X(z(i ?? O.A.theme)) : (0, R.XG)();
                    let a = $.eh.getSetting().backgroundGradientPresetId;
                    null != a && (0, P.bc)(a);
                },
                [e],
            );
        })(),
        c = (function () {
            let { colors: e, chassisMixAmount: t, gradientAngle: n } = (0, L.ko)(),
                s = (0, o.bG)([O.A], () => O.A.theme),
                [l] = i.useState(() => O.A.theme),
                {
                    resetColors: a,
                    resetGradientAngle: r,
                    resetChassisMixAmount: u,
                    resetBaseTheme: c,
                } = B("reset_button", l);
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
        } = (0, L.ko)(),
        [S, b] = i.useState(m[0] ?? L.OT),
        k = (0, o.bG)([O.A], () => O.A.theme),
        y = (0, _.JZ)(u.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: I } = (0, N.Ay)(v.A.CUSTOM_THEMES_EDITOR),
        J = (0, o.bG)([w.A], () => w.A.getSavedCustomTheme());
    async function D() {
        (d.current = !0),
            await (0, C.u_)({
                theme: z(k),
                customUserThemeSettings: { colors: m, gradientColorStops: [], gradientAngle: f, baseMix: g },
            }),
            (0, Z.Yl)(m, g, f, k, I),
            n?.(ek.i.TAKE_ACTION),
            y || (0, _.Dr)(u.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
            (0, M.Jp)(),
            (0, R.XG)();
    }
    let U = m.length > 0;
    i.useEffect(
        () => () => {
            d.current || r(F.EDITOR_CLOSE);
        },
        [r],
    );
    let G = (0, H.G)(),
        V = z(k);
    return (
        i.useEffect(() => {
            G ? (0, R.XG)() : k !== V && X(V);
        }, [G, k, V]),
        (0, p.Ay)(() => {
            if (!s) {
                let e = (m?.length ?? 0) > 0,
                    t = null != J;
                !e && t
                    ? (L.ko
                          .getState()
                          .setAll({ colors: J.colors, gradientAngle: J.gradient_angle, chassisMixAmount: J.base_mix }),
                      X(J.base_theme))
                    : Y(m, S, T);
            }
        }),
        (0, l.jsxs)("div", {
            className: a ? eR.AA : eR.kL,
            "data-app-right-panel": !a,
            children: [
                (0, l.jsx)(A.Ip, {
                    children: (0, l.jsxs)("div", {
                        className: eR.sV,
                        children: [
                            (0, l.jsx)(eJ, { markAsDismissed: n, isCoachmark: s }),
                            (0, l.jsxs)("div", {
                                className: eR.uW,
                                children: [
                                    (0, l.jsx)(x.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: ed.intl.string(ec.default.o2NfLF),
                                    }),
                                    (0, l.jsx)(e_, {}),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: eR.uW,
                                children: [
                                    (0, l.jsx)(x.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: ed.intl.string(ec.default.uSL2Gy),
                                    }),
                                    (0, l.jsx)(ef, {
                                        onChange: (e) => {
                                            b(e), 0 === m.length && Y(m, e, T);
                                        },
                                        value: S,
                                        colors: m,
                                        setColors: T,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: eR.uW,
                                children: [
                                    (0, l.jsx)(x.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: ed.intl.string(ec.default.F1t0c8),
                                    }),
                                    m.length > 1 && (0, l.jsx)(eU, { gradientAngle: f, setGradientAngle: j }),
                                    (0, l.jsx)(eL, {
                                        chassisMixAmount: g,
                                        setChassisMixAmount: (e) => {
                                            E(e), 0 === m.length && Y(m, S, T);
                                        },
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: eR.WA,
                                children: [
                                    (0, l.jsx)(eP, { isCoachmark: s, isMobile: a }),
                                    (0, l.jsx)(h.$, {
                                        variant: "secondary",
                                        onClick: function () {
                                            r(F.RESET_BUTTON), (0, Z.G_)();
                                        },
                                        disabled: c,
                                        text: ed.intl.string(ed.t.yBZMsQ),
                                        fullWidth: !0,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                s
                    ? (0, l.jsx)(eV, { onSaveTheme: D, canApply: U })
                    : (0, l.jsx)(e$, { onSaveTheme: D, canApply: U, metadata: t }),
            ],
        })
    );
}

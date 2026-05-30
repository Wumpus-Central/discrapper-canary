l.r(t), l.d(t, { default: () => eh });
var r,
    a = l(627968),
    n = l(64700),
    i = l(310784),
    s = l.n(i),
    u = l(512750),
    d = l(943255),
    o = l(575181),
    c = l(17928),
    f = l(451988),
    h = l(314116),
    m = l(629584),
    g = l(364522),
    E = l(534514),
    x = l(834730),
    p = l(106236),
    b = l(821609),
    v = l(152367),
    I = l(793574),
    N = l(688810),
    A = l(793943),
    _ = l(987144),
    C = l(476931),
    T = l(412848),
    y = l(375708),
    G = l(868652),
    j = l(645619),
    R = l(864310),
    k = l(973654),
    P = l(363195),
    S = l(71393),
    w = l(967198),
    L = l(636537),
    U = l(228366),
    D = l(759532),
    W = l(679787),
    M = l(652215);
let O = /^#?[0-9a-fA-F]{6}$/;
function V(e) {
    if (!O.test(e)) throw Error("Invalid guild theme preview color.");
    let t = e.toUpperCase();
    return t.startsWith("#") ? t : `#${t}`;
}
function J(e) {
    U.h.dispatch({ type: "GUILD_THEME_PREVIEW_SELECT_PRESET", presetId: e });
}
function H() {
    U.h.dispatch({ type: "GUILD_THEME_PREVIEW_END" });
}
async function $() {
    let e = D.A.guildId,
        t = D.A.draft;
    if (null == e) return;
    let l = D.A.draftEnabled;
    U.h.dispatch({ type: "GUILD_THEME_PREVIEW_SAVE_START" });
    try {
        let r = await L.Bo.patch({
                url: M.Rsh.GUILD_THEME(e),
                body: { ...(0, W.QK)(t), enabled: l },
                rejectWithError: !0,
            }),
            a = { ...(0, W.QK)(t), enabled: l },
            n = r.body,
            i = n?.theme !== void 0 ? n.theme : a,
            s = (0, W.UW)(i);
        U.h.dispatch({ type: "GUILD_THEME_PREVIEW_SAVE_SUCCESS", guildId: e, guildTheme: s });
    } catch (l) {
        let t = l?.body?.message ?? l?.message ?? y.intl.string(y.t.fEptJP);
        throw (U.h.dispatch({ type: "GUILD_THEME_PREVIEW_SAVE_FAILURE", guildId: e, error: t }), l);
    }
}
var Z = l(875317),
    B = l(947641),
    F = l(990078);
function X(e) {
    let { preset: t, theme: l, className: r } = e,
        i = n.useId().replaceAll(":", "-"),
        s = (0, C.oE)(t, l);
    return (0, a.jsxs)("svg", {
        "aria-hidden": "true",
        className: r,
        viewBox: "0 0 46 46",
        children: [
            (0, a.jsx)("defs", {
                children: (0, a.jsx)("linearGradient", {
                    id: i,
                    gradientTransform: `rotate(${s.angle - 90} 0.5 0.5)`,
                    children: s.colors.map((e) => {
                        let { hex: l, stop: r } = e;
                        return (0, a.jsx)("stop", { offset: `${r}%`, stopColor: l }, `${t.id}-${l}-${r}`);
                    }),
                }),
            }),
            (0, a.jsx)("rect", {
                x: 0.5,
                y: 0.5,
                width: 45,
                height: 45,
                rx: 11.5,
                fill: `url(#${i})`,
                shapeRendering: "geometricPrecision",
                stroke: "rgba(151, 151, 159, 0.12)",
                strokeWidth: 1,
            }),
        ],
    });
}
function K(e) {
    let { className: t, testId: l } = e;
    return (0, a.jsx)("span", {
        "aria-hidden": "true",
        className: t,
        "data-testid": l,
        children: (0, a.jsx)(B.r, { size: "xxs", color: "var(--icon-default)" }),
    });
}
function q(e) {
    let {
        preset: t,
        selected: l,
        disabled: r,
        onClick: n,
        label: i,
        theme: s,
        buttonClassName: u,
        graphicClassName: d,
        selectedIndicatorClassName: o,
        selectedIndicatorTestId: c,
    } = e;
    return (0, a.jsx)(F.m, {
        text: i,
        children: (0, a.jsxs)("button", {
            type: "button",
            className: u,
            disabled: r,
            "aria-label": i,
            "aria-pressed": l,
            onClick: n,
            children: [
                (0, a.jsx)(X, { preset: t, theme: s, className: d }),
                l && (0, a.jsx)(K, { className: o, testId: c }),
            ],
        }),
    });
}
var Q =
        (((r = {}).CONFIRM = "confirm"),
        (r.WAIT_FOR_FEATURE = "wait_for_feature"),
        (r.ENABLE_POWERUP = "enable_powerup"),
        (r.BOOST = "boost"),
        (r.ERROR = "error"),
        r),
    Y = l(568065),
    z = l(818348),
    ee = l(693227),
    et = l(894284);
function el(e) {
    return S.A.getGuild(e)?.features.has(M.GuildFeatures.GUILD_THEME) === !0;
}
function er(e) {
    return el(e)
        ? Promise.resolve()
        : new Promise((t, l) => {
              let r = new f.Ep();
              function a() {
                  r.stop(), S.A.removeChangeListener(n);
              }
              function n() {
                  el(e) && (a(), t());
              }
              r.start(1e4, () => {
                  a(), l(Error("Timed out waiting for Guild Theme feature."));
              }),
                  S.A.addChangeListener(n),
                  n();
          });
}
function ea(e) {
    return D.A.guildId === e && w.A.getGuildId() === e;
}
function en(e) {
    return e.body?.message ?? e.message ?? y.intl.string(y.t.fEptJP);
}
async function ei(e) {
    await Promise.all([(0, G.AK)(e), (0, G.Xd)(e)]);
    let t = j.A.getStateForGuild(e);
    return {
        hasGuildThemeFeature: el(e),
        hasActiveGuildThemePowerup: t?.unlockedPowerups?.[u.d0] != null,
        guildThemePowerup: t?.allPowerups[u.d0],
        availableBoostCount: (0, R.Z)(e).available,
    };
}
function es(e) {
    let t = s()(e).get("hsl.h");
    return Number.isNaN(t) ? 0 : Math.round(t);
}
function eu(e) {
    return C.wS + C.iq - Math.round(100 * s()(e).get("hsl.l"));
}
function ed(e) {
    let [t, l] = n.useState(0),
        r = n.useRef(null),
        a = n.useRef(e);
    return (
        n.useEffect(() => {
            e !== a.current && (r.current === e ? (r.current = null) : l((e) => e + 1)), (a.current = e);
        }, [e]),
        { key: t, handleInternalChange: n.useCallback((e) => ((r.current = e), e), []) }
    );
}
function eo(e) {
    let {
            background: t,
            color: l,
            controlKey: r,
            min: i,
            max: s,
            defaultValue: u,
            ariaLabel: d,
            onValuePreview: o,
            onValueCommit: c,
        } = e,
        f = n.useRef(u);
    n.useEffect(() => {
        f.current = u;
    }, [u]);
    let h = n.useCallback(() => {
        c(f.current);
    }, [c]);
    return (0, a.jsxs)("div", {
        className: et.TH,
        children: [
            (0, a.jsx)("div", { className: et.uy, style: { background: t } }),
            (0, a.jsx)(
                "input",
                {
                    className: et.d7,
                    style: { color: l },
                    type: "range",
                    min: i,
                    max: s,
                    defaultValue: u,
                    "aria-label": d,
                    onBlur: h,
                    onChange: (e) => {
                        let t = Number(e.currentTarget.value);
                        (f.current = t), o(t);
                    },
                    onKeyUp: h,
                    onPointerUp: h,
                },
                r,
            ),
        ],
    });
}
function ec(e) {
    let { preset: t, selected: l, disabled: r, onSelect: n, theme: i } = e,
        s = (function (e) {
            switch (e.id) {
                case C.Z8.TWILIGHT:
                    return y.intl.string(T.default["+k8Q/o"]);
                case C.Z8.DENIM:
                    return y.intl.string(T.default.tXRcxU);
                case C.Z8.OCEAN:
                    return y.intl.string(T.default.qn90j5);
                case C.Z8.BLURPLE:
                    return y.intl.string(T.default.XyrxOp);
                case C.Z8.OBSIDIAN:
                    return y.intl.string(T.default["x3h/OV"]);
                case C.Z8.PLUM:
                    return y.intl.string(T.default.tTJY6S);
                case C.Z8.FIRE:
                    return y.intl.string(T.default["S8/OZA"]);
                case C.Z8.GOLD_DUST:
                    return y.intl.string(T.default.nCbxEN);
                case C.Z8.MOSS:
                    return y.intl.string(T.default.TiGQro);
                case C.Z8.JADE:
                    return y.intl.string(T.default["6ZeQDd"]);
                default:
                    return "";
            }
        })(t);
    return (0, a.jsx)(q, {
        preset: t,
        selected: l,
        disabled: r,
        onClick: n,
        label: s,
        theme: i,
        buttonClassName: et.u5,
        graphicClassName: et.kw,
        selectedIndicatorClassName: et.$R,
    });
}
function ef() {
    let e = (0, c.bG)([P.A], () => P.A.theme) === z.NJ.LIGHT ? z.NJ.LIGHT : z.NJ.DARK,
        t = [
            {
                name: "",
                value: z.NJ.DARK,
                icon: d.Z,
                className: e === z.NJ.DARK ? et.bx : void 0,
                tooltip: y.intl.string(ee.default["Dk+OWY"]),
                tooltipAriaLabel: y.intl.string(ee.default["Dk+OWY"]),
            },
            {
                name: "",
                value: z.NJ.LIGHT,
                icon: o.F,
                className: e === z.NJ.LIGHT ? et.bx : void 0,
                tooltip: y.intl.string(ee.default["5vlJkY"]),
                tooltipAriaLabel: y.intl.string(ee.default["5vlJkY"]),
            },
        ];
    return (0, a.jsx)(m.I, {
        className: et.q0,
        optionClassName: et.C_,
        options: t,
        value: e,
        onChange: (e) => {
            let { value: t } = e;
            return (0, k.GQ)(t);
        },
        look: "pill",
    });
}
function eh() {
    let e = n.useRef(!1),
        t = n.useRef(!1),
        l = n.useRef(!1),
        r = n.useId(),
        { analyticsLocations: i } = (0, N.Ay)(I.A.GUILD_POWERUPS_GUILD_SETTINGS_GUILD_THEME),
        [u, d] = n.useState(!1),
        [o, f] = n.useState(null),
        m = (0, c.bG)([P.A], () => P.A.theme),
        {
            draft: j,
            isSaving: R,
            hasChanges: L,
            saveError: W,
            previewGuildId: O,
        } = (0, c.cf)([D.A], () => ({
            draft: D.A.draft,
            isSaving: D.A.isSaving,
            hasChanges: D.A.hasChanges(),
            saveError: D.A.saveError,
            previewGuildId: D.A.guildId,
        })),
        B = (0, c.bG)([S.A], () => (null == O ? null : S.A.getGuild(O)), [O]),
        F = (function (e) {
            let t = e?.customUserThemeSettings?.colors?.[0];
            if (null != t) return t;
            let l = (0, C.Yt)(e?.presetId);
            return null != l ? (0, C.oE)(l).color : C.a0;
        })(j),
        X = (function (e) {
            let t = e?.customUserThemeSettings?.baseMix;
            if (null != t) return t;
            let l = (0, C.Yt)(e?.presetId);
            return null != l ? (0, C.oE)(l).baseMix : C.BC;
        })(j),
        K = es(F),
        q = eu(F),
        z = n.useMemo(() => {
            let e, t, l, r, a, n, i;
            return (
                (e = s()(F)),
                (t = es(F)),
                (r = Number.isNaN((l = e.get("hsl.s"))) ? 0.82 : l),
                (a = s()
                    .hsl(t, r, C.wS / 100)
                    .hex()),
                (n = s().hsl(t, r, 0.45).hex()),
                (i = s()
                    .hsl(t, r, C.iq / 100)
                    .hex()),
                `linear-gradient(90deg, ${i} 0%, ${n} 50%, ${a} 100%)`
            );
        }, [F]),
        { key: eh, handleInternalChange: em } = ed(K),
        { key: eg, handleInternalChange: eE } = ed(q),
        { key: ex, handleInternalChange: ep } = ed(X),
        eb = n.useCallback((e, t) => {
            var l;
            (l = { colors: [e], gradientAngle: 0, baseMix: t }),
                U.h.dispatch({ type: "GUILD_THEME_PREVIEW_UPDATE_CUSTOM", ...l, colors: l.colors.map(V) });
        }, []),
        ev = n.useCallback((e) => {
            J(e.id);
        }, []),
        eI = n.useCallback(() => {
            let e = (0, C.XY)();
            eb(e.color, e.baseMix);
        }, [eb]),
        eN = n.useCallback(() => {
            let { guildId: e, original: t, originalEnabled: l, origin: r } = D.A;
            null != e &&
                null != r &&
                U.h.dispatch({
                    type: "GUILD_THEME_PREVIEW_START",
                    guildId: e,
                    draft: t,
                    original: t,
                    draftEnabled: l,
                    originalEnabled: l,
                    origin: r,
                });
        }, []),
        eA = n.useCallback(() => {
            (e.current = !0), H(), (0, k.XG)(), (0, A.Jp)();
        }, []),
        e_ = n.useCallback(async () => {
            await $(), (e.current = !0), (0, k.XG)(), (0, A.Jp)();
        }, []),
        eC = n.useCallback(() => {
            (0, h.A)({
                title: y.intl.string(T.default.H8idcP),
                subtitle: y.intl.string(T.default["0LL6FX"]),
                confirmText: y.intl.string(y.t["cY+Oob"]),
                cancelText: y.intl.string(y.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async (e) => {
                    try {
                        await e_();
                    } catch (t) {
                        throw (e(en(t)), t);
                    }
                },
            });
        }, [e_]),
        eT = n.useCallback(
            async (e) => {
                if (!t.current && !l.current) {
                    if (null == O) return void f(y.intl.string(y.t.fEptJP));
                    if (ea(O)) {
                        (l.current = !0), (t.current = !0), d(!0), f(null);
                        try {
                            if ((await (0, G.Qh)(O, e.skuId), await er(O), !ea(O))) return;
                            eC();
                        } catch (e) {
                            (l.current = !1), f(en(e));
                        } finally {
                            (t.current = !1), d(!1);
                        }
                    }
                }
            },
            [eC, O],
        ),
        ey = n.useCallback(
            async (e, t) => {
                if (null == B) return void f(y.intl.string(y.t.fEptJP));
                let l = e.cost - t;
                l <= 0
                    ? await eT(e)
                    : await (0, _.g)({
                          analyticsLocation: {
                              page: M.liQ.GUILD_POWERUPS_OVERVIEW,
                              section: M.JJy.GUILD_POWERUPS_OVERVIEW_CARD,
                          },
                          analyticsLocations: i,
                          guild: B,
                          numberOfBoostsToAdd: l,
                          intent: Y.Pn.PERK,
                          onLoading: d,
                          handleSubscribeModalClose: (t) => {
                              if (t) return eT(e);
                          },
                      });
            },
            [i, B, eT],
        ),
        eG = n.useCallback(async () => {
            if ((f(null), null == O)) return void f(y.intl.string(y.t.fEptJP));
            if (el(O)) {
                if (!ea(O)) return;
                eC();
                return;
            }
            d(!0);
            try {
                let e = await ei(O);
                if (!ea(O)) return;
                let t = (function (e) {
                    let {
                        hasGuildThemeFeature: t,
                        hasActiveGuildThemePowerup: l,
                        guildThemePowerup: r,
                        availableBoostCount: a,
                    } = e;
                    return t
                        ? "confirm"
                        : l
                          ? "wait_for_feature"
                          : null == r
                            ? "error"
                            : a >= r.cost
                              ? "enable_powerup"
                              : "boost";
                })(e);
                if (t === Q.CONFIRM) return void eC();
                if (t === Q.WAIT_FOR_FEATURE) {
                    if ((await er(O), !ea(O))) return;
                    eC();
                    return;
                }
                if (null == e.guildThemePowerup) return void f(y.intl.string(y.t.fEptJP));
                if (t === Q.ENABLE_POWERUP) {
                    d(!1), await eT(e.guildThemePowerup);
                    return;
                }
                if (t === Q.BOOST) {
                    d(!1), await ey(e.guildThemePowerup, e.availableBoostCount);
                    return;
                }
                f(y.intl.string(y.t.fEptJP));
            } catch (e) {
                f(en(e));
            } finally {
                d(!1);
            }
        }, [eT, ey, eC, O]),
        ej = (0, c.bG)([w.A], () => w.A.getGuildId()),
        eR = null != O && ej !== O;
    n.useEffect(() => {
        eR && ((e.current = !0), H(), (0, k.XG)(), (0, A.Jp)());
    }, [eR]),
        n.useEffect(() => {
            if (null == O) return;
            let { draft: e, draftEnabled: t, origin: l } = D.A;
            (t && e?.presetId != null) || (l === D.v.GUILD_SETTINGS && (0, Z.Om)(e)) || J(C.Zq["0"].id);
        }, [O]),
        n.useEffect(() => {
            null == O && ((0, k.XG)(), (0, A.Jp)());
        }, [O]),
        n.useEffect(
            () => () => {
                (0, k.XG)(), e.current || D.A.isAwaitingGuildUpdate || H();
            },
            [],
        );
    let ek = R || u,
        eP = ek || !L || null == j || null == O,
        eS = o ?? W;
    return (0, a.jsxs)("div", {
        className: et.kL,
        "data-app-right-panel": !0,
        children: [
            (0, a.jsx)(g.Ip, {
                className: et.XG,
                children: (0, a.jsxs)("div", {
                    className: et.rf,
                    children: [
                        (0, a.jsx)(E.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: y.intl.string(T.default["/6NbRv"]),
                        }),
                        (0, a.jsxs)("div", {
                            className: et.uW,
                            children: [
                                (0, a.jsx)(x.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    className: et.a9,
                                    children: y.intl.string(T.default.zry4l5),
                                }),
                                (0, a.jsx)(x.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: et.yV,
                                    children: y.intl.string(T.default.HkvkHP),
                                }),
                                (0, a.jsx)(ef, {}),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: et.uW,
                            children: [
                                (0, a.jsx)(x.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    className: et.a9,
                                    children: y.intl.string(ee.default.uSL2Gy),
                                }),
                                (0, a.jsx)(eo, {
                                    background:
                                        "linear-gradient(90deg, rgb(255 0 0) 0%, rgb(255 255 0) 16.66%, rgb(0 255 0) 33.33%, rgb(0 255 255) 50%, rgb(0 0 255) 66.66%, rgb(255 0 255) 83.33%, rgb(255 0 0) 100%)",
                                    color: F,
                                    controlKey: eh,
                                    min: 0,
                                    max: 359,
                                    defaultValue: K,
                                    ariaLabel: y.intl.string(ee.default.uSL2Gy),
                                    onValuePreview: em,
                                    onValueCommit: (e) => {
                                        let t = (0, C.sR)(F, e);
                                        em(es(t)), eb(t, X);
                                    },
                                }),
                                (0, a.jsx)(eo, {
                                    background: z,
                                    color: F,
                                    controlKey: eg,
                                    min: C.wS,
                                    max: C.iq,
                                    defaultValue: q,
                                    ariaLabel: y.intl.string(ee.default.uSL2Gy),
                                    onValuePreview: eE,
                                    onValueCommit: (e) => {
                                        let t = (0, C._k)(F, C.wS + C.iq - e);
                                        eE(eu(t)), eb(t, X);
                                    },
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: et.uW,
                            children: (0, a.jsxs)("div", {
                                className: et.Ib,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: et.Gl,
                                        children: [
                                            (0, a.jsx)(x.E, {
                                                id: r,
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: et.KF,
                                                children: y.intl.string(ee.default.xlXkaL),
                                            }),
                                            (0, a.jsx)(x.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: et.rv,
                                                children: `${Math.round(X)}%`,
                                            }),
                                        ],
                                    }),
                                    (0, a.jsx)(
                                        p.A,
                                        {
                                            "aria-labelledby": r,
                                            minValue: 0,
                                            maxValue: 100,
                                            keyboardStep: 1,
                                            initialValue: X,
                                            defaultValue: X,
                                            onValueRender: (e) => `${Math.round(e)}%`,
                                            onValueChange: (e) => {
                                                let t = Math.round(e);
                                                ep(t), eb(F, t);
                                            },
                                        },
                                        ex,
                                    ),
                                ],
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: et.uW,
                            children: [
                                (0, a.jsx)(x.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    className: et.a9,
                                    children: y.intl.string(T.default.jSrqR2),
                                }),
                                (0, a.jsx)("div", {
                                    className: et.$k,
                                    children: C.Zq.map((e) =>
                                        (0, a.jsx)(
                                            ec,
                                            {
                                                preset: e,
                                                selected: j?.presetId === e.id,
                                                disabled: ek,
                                                onSelect: () => ev(e),
                                                theme: m,
                                            },
                                            e.id,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: et.uu,
                            children: [
                                (0, a.jsx)(b.$, {
                                    variant: "secondary",
                                    size: "md",
                                    fullWidth: !0,
                                    disabled: ek,
                                    onClick: eI,
                                    text: y.intl.string(ee.default.c9MBEH),
                                    icon: v.D,
                                }),
                                (0, a.jsx)(b.$, {
                                    variant: "secondary",
                                    size: "md",
                                    fullWidth: !0,
                                    disabled: ek || !L,
                                    onClick: eN,
                                    text: y.intl.string(y.t.yBZMsQ),
                                }),
                            ],
                        }),
                        null != eS &&
                            (0, a.jsx)(x.E, {
                                variant: "text-xs/semibold",
                                color: "text-feedback-critical",
                                className: et.z3,
                                children: eS,
                            }),
                    ],
                }),
            }),
            (0, a.jsx)("div", {
                className: et.qr,
                children: (0, a.jsxs)("div", {
                    className: et.zt,
                    children: [
                        (0, a.jsx)(b.$, {
                            variant: "secondary",
                            size: "md",
                            fullWidth: !0,
                            disabled: ek,
                            onClick: eA,
                            text: y.intl.string(y.t["13/7kX"]),
                        }),
                        (0, a.jsx)("span", {
                            className: et._l,
                            children: (0, a.jsx)(b.$, {
                                variant: "primary",
                                size: "md",
                                fullWidth: !0,
                                loading: ek,
                                disabled: eP,
                                onClick: eG,
                                text: y.intl.string(y.t["1Qm822"]),
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
}

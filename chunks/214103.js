t.r(l);
var a = t(477900),
    n = t(582128),
    s = t(310784),
    i = t.n(s),
    r = t(512750),
    u = t(943255),
    d = t(575181),
    o = t(855986),
    c = t(451988),
    m = t(314116),
    f = t(629584),
    h = t(821609),
    g = t(95362),
    b = t(534514),
    x = t(834730),
    v = t(893007),
    p = t(926321),
    A = t(90302),
    E = t(646514),
    N = t(793574),
    y = t(688810),
    G = t(793943),
    I = t(727419),
    C = t(378292),
    k = t(533993),
    j = t(645619),
    L = t(972829),
    S = t(828162),
    T = t(439156),
    _ = t(973654),
    P = t(413599),
    w = t(71393),
    U = t(967198),
    M = t(476931),
    R = t(673642),
    W = t(909289),
    V = t(875317),
    D = t(42119),
    H = t(652215),
    J = t(818348),
    O = t(792996),
    X = t(958904),
    $ = t(557441),
    z = t(438221);
function F(e) {
    return w.A.getGuild(e)?.features.has(H.GuildFeatures.GUILD_THEME) === !0;
}
function K(e) {
    return W.Ay.guildId === e && U.A.getGuildId() === e;
}
function Y(e) {
    return e.body?.message ?? e.message ?? O.intl.string(O.t.fEptJP);
}
function q(e) {
    let l = i()(e).get("hsl.h");
    return Number.isNaN(l) ? 0 : Math.round(l);
}
function B(e) {
    return Math.round(100 * i()(e).get("hsl.l"));
}
function Q(e) {
    let [l, t] = n.useState(0),
        a = n.useRef(null),
        s = n.useRef(e);
    return (
        n.useEffect(() => {
            (e !== s.current && (a.current === e ? (a.current = null) : t((e) => e + 1)), (s.current = e));
        }, [e]),
        { key: l, handleInternalChange: n.useCallback((e) => ((a.current = e), e), []) }
    );
}
function Z(e) {
    let {
            background: l,
            color: t,
            controlKey: s,
            min: i,
            max: r,
            defaultValue: u,
            ariaLabel: d,
            onValuePreview: o,
            onValueCommit: c,
        } = e,
        m = n.useRef(u);
    n.useEffect(() => {
        m.current = u;
    }, [u]);
    let f = n.useCallback(() => {
        c(m.current);
    }, [c]);
    return (0, a.jsxs)("div", {
        className: z.TH,
        children: [
            (0, a.jsx)("div", { className: z.uy, style: { background: l } }),
            (0, a.jsx)(
                "input",
                {
                    className: z.d7,
                    style: { color: t },
                    type: "range",
                    min: i,
                    max: r,
                    defaultValue: u,
                    "aria-label": d,
                    onBlur: f,
                    onChange: (e) => {
                        let l = Number(e.currentTarget.value);
                        ((m.current = l), o(l));
                    },
                    onKeyUp: f,
                    onPointerUp: f,
                },
                s,
            ),
        ],
    });
}
function ee(e) {
    let { preset: l, selected: t, disabled: n, onSelect: s, theme: i } = e,
        r = (0, C.A)(l);
    return (0, a.jsx)(D.IK, {
        preset: l,
        selected: t,
        disabled: n,
        onClick: s,
        label: r,
        theme: i,
        buttonClassName: z.u5,
        graphicClassName: z.kw,
        selectedIndicatorClassName: z.$R,
    });
}
function el() {
    let e = (0, o.bG)([P.A], () => P.A.theme) === J.NJ.LIGHT ? J.NJ.LIGHT : J.NJ.ASH,
        l = [
            {
                name: "",
                value: J.NJ.ASH,
                icon: u.ThemeDarkIcon,
                className: e === J.NJ.ASH ? z.bx : void 0,
                tooltip: O.intl.string(X.default["Dk+OWY"]),
                tooltipAriaLabel: O.intl.string(X.default["Dk+OWY"]),
            },
            {
                name: "",
                value: J.NJ.LIGHT,
                icon: d.ThemeLightIcon,
                className: e === J.NJ.LIGHT ? z.bx : void 0,
                tooltip: O.intl.string(X.default["5vlJkY"]),
                tooltipAriaLabel: O.intl.string(X.default["5vlJkY"]),
            },
        ];
    return (0, a.jsx)(f.I, {
        className: z.q0,
        optionClassName: z.C_,
        options: l,
        value: e,
        onChange: (e) => {
            let { value: l } = e;
            return (0, _.GQ)(l);
        },
        look: "pill",
    });
}
t.d(
    l,
    {},
    {
        default: function (e) {
            let { isMobile: l } = e,
                t = n.useRef(null),
                s = n.useRef(!1),
                u = n.useId(),
                [d, f] = n.useState(!1),
                [C, D] = n.useState(null),
                J = (0, o.bG)([P.A], () => P.A.theme),
                {
                    draft: et,
                    isSaving: ea,
                    hasChanges: en,
                    saveError: es,
                    previewGuildId: ei,
                    origin: er,
                } = (0, o.cf)([W.Ay], () => ({
                    draft: W.Ay.draft,
                    isSaving: W.Ay.isSaving,
                    hasChanges: W.Ay.hasChanges(),
                    saveError: W.Ay.saveError,
                    previewGuildId: W.Ay.guildId,
                    origin: W.Ay.origin,
                })),
                eu =
                    er === W.v5.PERK_MODAL
                        ? N.A.GUILD_POWERUPS_OVERVIEW
                        : N.A.GUILD_POWERUPS_GUILD_SETTINGS_GUILD_THEME,
                { analyticsLocations: ed } = (0, y.Ay)(eu),
                eo = (0, o.bG)([j.A], () => (null == ei ? void 0 : j.A.getStateForGuild(ei)?.allPowerups[r.d0]), [ei]),
                ec = (0, L.A)(ei),
                em = (0, o.bG)([j.A], () => null == ei || j.A.hasFetchedPowerupCatalog(ei), [ei]),
                ef = (function (e) {
                    let l = e?.customUserThemeSettings?.colors?.[0];
                    if (null != l) return l;
                    let t = (0, M.Yt)(e?.presetId),
                        a = null != t ? (0, M.oE)(t).color : M.a0;
                    return (0, M.w3)((0, M._k)(a, B(a)));
                })(et),
                eh = (function (e) {
                    let l = e?.customUserThemeSettings?.baseMix;
                    if (null != l) return l;
                    let t = (0, M.Yt)(e?.presetId);
                    return null != t ? (0, M.oE)(t).baseMix : 74;
                })(et),
                eg = q(ef),
                eb = 90 - B(ef),
                ex = n.useMemo(() => (0, M.z3)(ef, J), [ef, J]),
                ev = n.useMemo(
                    () =>
                        (function (e, l) {
                            let { minTone: t, maxTone: a } = (0, M.It)(l),
                                n = i()(e),
                                s = q(e),
                                r = n.get("hsl.s"),
                                u = Number.isNaN(r) ? 0.82 : r,
                                d = i()
                                    .hsl(s, u, t / 100)
                                    .hex(),
                                o = i()
                                    .hsl(s, u, (t + a) / 200)
                                    .hex(),
                                c = i()
                                    .hsl(s, u, a / 100)
                                    .hex();
                            return `linear-gradient(90deg, ${c} 0%, ${o} 50%, ${d} 100%)`;
                        })(ef, J),
                    [ef, J],
                ),
                { key: ep, handleInternalChange: eA } = Q(eg),
                { key: eE, handleInternalChange: eN } = Q(eb),
                { key: ey, handleInternalChange: eG } = Q(eh),
                eI = n.useCallback((e, l) => {
                    (0, R.t$)({ colors: [e], gradientAngle: 0, baseMix: l });
                }, []),
                eC = n.useCallback((e) => {
                    (0, R.GC)(e.id);
                }, []),
                ek = n.useCallback(() => {
                    let e = (0, M.XY)();
                    eI(e.color, e.baseMix);
                }, [eI]),
                ej = n.useCallback(() => {
                    let { guildId: e, original: l, originalEnabled: t, origin: a } = W.Ay;
                    null != e &&
                        null != a &&
                        (0, R.tA)({
                            guildId: e,
                            draft: l,
                            original: l,
                            draftEnabled: t,
                            originalEnabled: t,
                            origin: a,
                        });
                }, []),
                eL = n.useCallback(() => {
                    let { guildId: e, origin: l } = W.Ay;
                    ((s.current = !0),
                        (0, R.WV)(),
                        (0, _.XG)(),
                        (0, G.Jp)(),
                        null != e &&
                            (l === W.v5.GUILD_SETTINGS
                                ? I.A.open(e, H.BEX.GUILD_THEME, N.A.GUILD_POWERUPS_GUILD_SETTINGS_GUILD_THEME)
                                : l === W.v5.PERK_MODAL && (0, S.A)(e, N.A.GUILD_POWERUPS_OVERVIEW, r.d0)));
                }, []),
                eS = n.useCallback(async () => {
                    (await (0, R.HN)(), (s.current = !0), (0, _.XG)(), (0, G.Jp)());
                }, []),
                eT = n.useCallback(() => {
                    (0, m.A)({
                        title: O.intl.string($.default.H8idcP),
                        subtitle: O.intl.string($.default["0LL6FX"]),
                        confirmText: O.intl.string(O.t["cY+Oob"]),
                        cancelText: O.intl.string(O.t["ETE/oC"]),
                        variant: "primary",
                        onConfirm: async (e) => {
                            try {
                                await eS();
                            } catch (l) {
                                throw (e(Y(l)), l);
                            }
                        },
                    });
                }, [eS]),
                e_ = n.useCallback(async () => {
                    if ((D(null), null == ei)) return void D(O.intl.string(O.t.fEptJP));
                    if (K(ei)) {
                        if (F(ei)) return void eT();
                        f(!0);
                        try {
                            if (
                                (await (F(ei)
                                    ? Promise.resolve()
                                    : new Promise((e, l) => {
                                          let t = new c.Ep();
                                          function a() {
                                              (t.stop(), w.A.removeChangeListener(n));
                                          }
                                          function n() {
                                              F(ei) && (a(), e());
                                          }
                                          (t.start(1e4, () => {
                                              (a(), l(Error("Timed out waiting for Guild Theme feature.")));
                                          }),
                                              w.A.addChangeListener(n),
                                              n());
                                      })),
                                !K(ei))
                            )
                                return;
                            eT();
                        } catch (e) {
                            D(Y(e));
                        } finally {
                            f(!1);
                        }
                    }
                }, [eT, ei]),
                eP = n.useCallback((e) => {
                    D(e ?? null);
                }, []),
                ew = (0, o.bG)([U.A], () => U.A.getGuildId()),
                eU = null != ei && ew !== ei;
            (n.useEffect(() => {
                null != ei &&
                    (j.A.shouldFetchCatalogForGuild(ei) && (0, k.AK)(ei),
                    j.A.shouldFetchPowerupsForGuild(ei) && (0, k.Xd)(ei));
            }, [ei]),
                n.useEffect(() => {
                    eU && ((s.current = !0), (0, R.WV)(), (0, _.XG)(), (0, G.Jp)());
                }, [eU]),
                n.useEffect(() => {
                    if (null == ei) return;
                    let { draft: e, draftEnabled: l } = W.Ay;
                    (l && (0, V.Om)(e)) || (0, R.GC)(M.Zq["0"].id);
                }, [ei]),
                n.useEffect(() => {
                    null == ei && ((0, _.XG)(), (0, G.Jp)());
                }, [ei]),
                n.useEffect(
                    () => () => {
                        ((0, _.XG)(), s.current || W.Ay.isAwaitingGuildUpdate || (0, R.WV)());
                    },
                    [],
                ));
            let eM = ea || d,
                eR = !ec && null == eo,
                eW = eM || (!ec && !em),
                eV = null != ei && em && eR,
                eD = eM || !en || null == et || null == ei || eR,
                eH = C ?? es ?? (eV ? O.intl.string(O.t.fEptJP) : null),
                eJ = (0, a.jsx)(h.$, {
                    variant: "secondary",
                    size: "md",
                    fullWidth: !0,
                    disabled: eM,
                    onClick: eL,
                    text: O.intl.string(O.t["13/7kX"]),
                });
            return (0, a.jsxs)("div", {
                className: z.kL,
                "data-app-right-panel": !0,
                children: [
                    (0, a.jsx)(g.Ip, {
                        className: z.XG,
                        children: (0, a.jsxs)("div", {
                            className: z.rf,
                            children: [
                                (0, a.jsx)(b.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: O.intl.string($.default["/6NbRv"]),
                                }),
                                (0, a.jsxs)("div", {
                                    className: z.uW,
                                    children: [
                                        (0, a.jsx)(x.E, {
                                            variant: "body-sm/semibold",
                                            color: "text-default",
                                            className: z.a9,
                                            children: O.intl.string($.default.zry4l5),
                                        }),
                                        (0, a.jsx)(x.E, {
                                            variant: "body-xs/medium",
                                            color: "text-muted",
                                            className: z.yV,
                                            children: O.intl.string($.default.HkvkHP),
                                        }),
                                        (0, a.jsx)(el, {}),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: z.uW,
                                    children: [
                                        (0, a.jsx)(x.E, {
                                            variant: "body-sm/semibold",
                                            color: "text-default",
                                            className: z.a9,
                                            children: O.intl.string(X.default.uSL2Gy),
                                        }),
                                        (0, a.jsx)(Z, {
                                            background:
                                                "linear-gradient(90deg, rgb(255 0 0) 0%, rgb(255 255 0) 16.66%, rgb(0 255 0) 33.33%, rgb(0 255 255) 50%, rgb(0 0 255) 66.66%, rgb(255 0 255) 83.33%, rgb(255 0 0) 100%)",
                                            color: ex,
                                            controlKey: ep,
                                            min: 0,
                                            max: 359,
                                            defaultValue: eg,
                                            ariaLabel: O.intl.string(X.default.uSL2Gy),
                                            onValuePreview: eA,
                                            onValueCommit: (e) => {
                                                let l = (0, M.w3)((0, M.sR)(ef, e));
                                                (eA(q(l)), eI(l, eh));
                                            },
                                        }),
                                        (0, a.jsx)(Z, {
                                            background: ev,
                                            color: ex,
                                            controlKey: eE,
                                            min: 15,
                                            max: 75,
                                            defaultValue: eb,
                                            ariaLabel: O.intl.string(X.default.uSL2Gy),
                                            onValuePreview: eN,
                                            onValueCommit: (e) => {
                                                let l = (0, M.w3)((0, M._k)(ef, 90 - e));
                                                (eN(90 - B(l)), eI(l, eh));
                                            },
                                        }),
                                    ],
                                }),
                                (0, a.jsx)("div", {
                                    className: z.uW,
                                    children: (0, a.jsxs)("div", {
                                        className: z.Ib,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: z.Gl,
                                                children: [
                                                    (0, a.jsx)(x.E, {
                                                        id: u,
                                                        variant: "body-sm/medium",
                                                        color: "text-default",
                                                        className: z.KF,
                                                        children: O.intl.string(X.default.xlXkaL),
                                                    }),
                                                    (0, a.jsx)(x.E, {
                                                        variant: "body-sm/medium",
                                                        color: "text-default",
                                                        className: z.rv,
                                                        children: `${Math.round(eh)}%`,
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsx)(
                                                v.A,
                                                {
                                                    "aria-labelledby": u,
                                                    minValue: 0,
                                                    maxValue: 100,
                                                    defaultValue: eh,
                                                    formatValue: (e) => `${Math.round(e)}%`,
                                                    onChangeEnd: (e) => {
                                                        let l = Math.round(e);
                                                        (l !== eh || et?.customUserThemeSettings != null) &&
                                                            (eG(l), eI(ef, l));
                                                    },
                                                },
                                                ey,
                                            ),
                                        ],
                                    }),
                                }),
                                (0, a.jsxs)("div", {
                                    className: z.uW,
                                    children: [
                                        (0, a.jsx)(x.E, {
                                            variant: "body-sm/semibold",
                                            color: "text-default",
                                            className: z.a9,
                                            children: O.intl.string($.default.jSrqR2),
                                        }),
                                        (0, a.jsx)("div", {
                                            className: z.$k,
                                            children: M.Zq.map((e) =>
                                                (0, a.jsx)(
                                                    ee,
                                                    {
                                                        preset: e,
                                                        selected: et?.presetId === e.id,
                                                        disabled: eM,
                                                        onSelect: () => eC(e),
                                                        theme: J,
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: z.uu,
                                    children: [
                                        (0, a.jsx)(h.$, {
                                            buttonRef: t,
                                            variant: "secondary",
                                            size: "md",
                                            fullWidth: !0,
                                            disabled: eM,
                                            onClick: ek,
                                            text: O.intl.string(X.default.c9MBEH),
                                            icon: l
                                                ? { type: "icon", asset: p.DiceIcon }
                                                : {
                                                      type: "rive",
                                                      asset: A.m,
                                                      riveProps: {
                                                          dataBinding: { fill: E.A.colors.ICON_STRONG },
                                                          eventTargetRef: t,
                                                      },
                                                  },
                                        }),
                                        (0, a.jsx)(h.$, {
                                            variant: "secondary",
                                            size: "md",
                                            fullWidth: !0,
                                            disabled: eM || !en,
                                            onClick: ej,
                                            text: O.intl.string(O.t.yBZMsQ),
                                        }),
                                    ],
                                }),
                                null != eH &&
                                    (0, a.jsx)("div", {
                                        role: "alert",
                                        children: (0, a.jsx)(x.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-feedback-critical",
                                            className: z.z3,
                                            children: eH,
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: z.qr,
                        children:
                            ec || null == eo || null == ei
                                ? (0, a.jsxs)("div", {
                                      className: z.zt,
                                      children: [
                                          eJ,
                                          (0, a.jsx)("span", {
                                              className: z._l,
                                              children: (0, a.jsx)(h.$, {
                                                  variant: "primary",
                                                  size: "md",
                                                  fullWidth: !0,
                                                  loading: eW,
                                                  disabled: eD,
                                                  onClick: e_,
                                                  text: O.intl.string(O.t["1Qm822"]),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, a.jsxs)("div", {
                                      className: z.Wz,
                                      children: [
                                          (0, a.jsx)(y.f5, {
                                              value: ed,
                                              children: (0, a.jsx)(T.A, {
                                                  guildId: ei,
                                                  powerup: eo,
                                                  compact: !1,
                                                  grow: !0,
                                                  size: "md",
                                                  skipActivateModal: !0,
                                                  onError: eP,
                                              }),
                                          }),
                                          eJ,
                                      ],
                                  }),
                    }),
                ],
            });
        },
    },
);

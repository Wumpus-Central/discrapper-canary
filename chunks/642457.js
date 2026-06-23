t.r(l), t.d(l, { default: () => et });
var a = t(627968),
    n = t(64700),
    s = t(310784),
    i = t.n(s),
    r = t(512750),
    u = t(943255),
    d = t(575181),
    c = t(17928),
    o = t(451988),
    m = t(314116),
    f = t(629584),
    h = t(821609),
    g = t(364522),
    x = t(534514),
    v = t(834730),
    b = t(106236),
    p = t(926321),
    A = t(908803),
    N = t(661531),
    E = t(793574),
    G = t(688810),
    y = t(793943),
    j = t(468689),
    C = t(378292),
    I = t(868652),
    k = t(645619),
    L = t(71393),
    w = t(652215),
    S = t(828162),
    T = t(439156),
    M = t(973654),
    _ = t(363195),
    P = t(967198),
    R = t(476931),
    V = t(673642),
    U = t(759532),
    D = t(875317),
    W = t(42119),
    J = t(818348),
    H = t(375708),
    O = t(693227),
    Z = t(412848),
    F = t(894284);
function X(e) {
    return L.A.getGuild(e)?.features.has(w.GuildFeatures.GUILD_THEME) === !0;
}
function $(e) {
    return U.Ay.guildId === e && P.A.getGuildId() === e;
}
function K(e) {
    return e.body?.message ?? e.message ?? H.intl.string(H.t.fEptJP);
}
function z(e) {
    let l = i()(e).get("hsl.h");
    return Number.isNaN(l) ? 0 : Math.round(l);
}
function q(e) {
    return Math.round(100 * i()(e).get("hsl.l"));
}
function Y(e) {
    return R.wS + R.iq - q(e);
}
function B(e) {
    let [l, t] = n.useState(0),
        a = n.useRef(null),
        s = n.useRef(e);
    return (
        n.useEffect(() => {
            e !== s.current && (a.current === e ? (a.current = null) : t((e) => e + 1)), (s.current = e);
        }, [e]),
        { key: l, handleInternalChange: n.useCallback((e) => ((a.current = e), e), []) }
    );
}
function Q(e) {
    let {
            background: l,
            color: t,
            controlKey: s,
            min: i,
            max: r,
            defaultValue: u,
            ariaLabel: d,
            onValuePreview: c,
            onValueCommit: o,
        } = e,
        m = n.useRef(u);
    n.useEffect(() => {
        m.current = u;
    }, [u]);
    let f = n.useCallback(() => {
        o(m.current);
    }, [o]);
    return (0, a.jsxs)("div", {
        className: F.TH,
        children: [
            (0, a.jsx)("div", { className: F.uy, style: { background: l } }),
            (0, a.jsx)(
                "input",
                {
                    className: F.d7,
                    style: { color: t },
                    type: "range",
                    min: i,
                    max: r,
                    defaultValue: u,
                    "aria-label": d,
                    onBlur: f,
                    onChange: (e) => {
                        let l = Number(e.currentTarget.value);
                        (m.current = l), c(l);
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
    return (0, a.jsx)(W.IK, {
        preset: l,
        selected: t,
        disabled: n,
        onClick: s,
        label: r,
        theme: i,
        buttonClassName: F.u5,
        graphicClassName: F.kw,
        selectedIndicatorClassName: F.$R,
    });
}
function el() {
    let e = (0, c.bG)([_.A], () => _.A.theme) === J.NJ.LIGHT ? J.NJ.LIGHT : J.NJ.DARK,
        l = [
            {
                name: "",
                value: J.NJ.DARK,
                icon: u.Z,
                className: e === J.NJ.DARK ? F.bx : void 0,
                tooltip: H.intl.string(O.default["Dk+OWY"]),
                tooltipAriaLabel: H.intl.string(O.default["Dk+OWY"]),
            },
            {
                name: "",
                value: J.NJ.LIGHT,
                icon: d.F,
                className: e === J.NJ.LIGHT ? F.bx : void 0,
                tooltip: H.intl.string(O.default["5vlJkY"]),
                tooltipAriaLabel: H.intl.string(O.default["5vlJkY"]),
            },
        ];
    return (0, a.jsx)(f.I, {
        className: F.q0,
        optionClassName: F.C_,
        options: l,
        value: e,
        onChange: (e) => {
            let { value: l } = e;
            return (0, M.GQ)(l);
        },
        look: "pill",
    });
}
function et(e) {
    let { isMobile: l } = e,
        t = n.useRef(null),
        s = n.useRef(!1),
        u = n.useId(),
        [d, f] = n.useState(!1),
        [C, W] = n.useState(null),
        J = (0, c.bG)([_.A], () => _.A.theme),
        {
            draft: et,
            isSaving: ea,
            hasChanges: en,
            saveError: es,
            previewGuildId: ei,
            origin: er,
        } = (0, c.cf)([U.Ay], () => ({
            draft: U.Ay.draft,
            isSaving: U.Ay.isSaving,
            hasChanges: U.Ay.hasChanges(),
            saveError: U.Ay.saveError,
            previewGuildId: U.Ay.guildId,
            origin: U.Ay.origin,
        })),
        eu = er === U.v5.PERK_MODAL ? E.A.GUILD_POWERUPS_OVERVIEW : E.A.GUILD_POWERUPS_GUILD_SETTINGS_GUILD_THEME,
        { analyticsLocations: ed } = (0, G.Ay)(eu),
        ec = (0, c.bG)([k.A], () => (null == ei ? void 0 : k.A.getStateForGuild(ei)?.allPowerups[r.d0]), [ei]),
        eo = (0, c.bG)(
            [L.A, k.A],
            () =>
                null != ei &&
                (L.A.getGuild(ei)?.features.has(w.GuildFeatures.GUILD_THEME) === !0 ||
                    k.A.getStateForGuild(ei)?.unlockedPowerups?.[r.d0] != null),
            [ei],
        ),
        em = (0, c.bG)([k.A], () => null == ei || k.A.hasFetchedPowerupCatalog(ei), [ei]),
        ef = (function (e) {
            let l = e?.customUserThemeSettings?.colors?.[0];
            if (null != l) return l;
            let t = (0, R.Yt)(e?.presetId),
                a = null != t ? (0, R.oE)(t).color : R.a0;
            return (0, R.w3)((0, R._k)(a, q(a)));
        })(et),
        eh = (function (e) {
            let l = e?.customUserThemeSettings?.baseMix;
            if (null != l) return l;
            let t = (0, R.Yt)(e?.presetId);
            return null != t ? (0, R.oE)(t).baseMix : R.BC;
        })(et),
        eg = z(ef),
        ex = Y(ef),
        ev = n.useMemo(() => (0, R.z3)(ef, J), [ef, J]),
        eb = n.useMemo(
            () =>
                (function (e, l) {
                    let { minTone: t, maxTone: a } = (0, R.It)(l),
                        n = i()(e),
                        s = z(e),
                        r = n.get("hsl.s"),
                        u = Number.isNaN(r) ? 0.82 : r,
                        d = i()
                            .hsl(s, u, t / 100)
                            .hex(),
                        c = i()
                            .hsl(s, u, (t + a) / 200)
                            .hex(),
                        o = i()
                            .hsl(s, u, a / 100)
                            .hex();
                    return `linear-gradient(90deg, ${o} 0%, ${c} 50%, ${d} 100%)`;
                })(ef, J),
            [ef, J],
        ),
        { key: ep, handleInternalChange: eA } = B(eg),
        { key: eN, handleInternalChange: eE } = B(ex),
        { key: eG, handleInternalChange: ey } = B(eh),
        ej = n.useCallback((e, l) => {
            (0, V.t$)({ colors: [e], gradientAngle: 0, baseMix: l });
        }, []),
        eC = n.useCallback((e) => {
            (0, V.GC)(e.id);
        }, []),
        eI = n.useCallback(() => {
            let e = (0, R.XY)();
            ej(e.color, e.baseMix);
        }, [ej]),
        ek = n.useCallback(() => {
            let { guildId: e, original: l, originalEnabled: t, origin: a } = U.Ay;
            null != e &&
                null != a &&
                (0, V.tA)({ guildId: e, draft: l, original: l, draftEnabled: t, originalEnabled: t, origin: a });
        }, []),
        eL = n.useCallback(() => {
            let { guildId: e, origin: l } = U.Ay;
            (s.current = !0),
                (0, V.WV)(),
                (0, M.XG)(),
                (0, y.Jp)(),
                null != e &&
                    (l === U.v5.GUILD_SETTINGS
                        ? j.A.open(e, w.BEX.GUILD_THEME, E.A.GUILD_POWERUPS_GUILD_SETTINGS_GUILD_THEME)
                        : l === U.v5.PERK_MODAL && (0, S.A)(e, E.A.GUILD_POWERUPS_OVERVIEW, r.d0));
        }, []),
        ew = n.useCallback(async () => {
            await (0, V.HN)(), (s.current = !0), (0, M.XG)(), (0, y.Jp)();
        }, []),
        eS = n.useCallback(() => {
            (0, m.A)({
                title: H.intl.string(Z.default.H8idcP),
                subtitle: H.intl.string(Z.default["0LL6FX"]),
                confirmText: H.intl.string(H.t["cY+Oob"]),
                cancelText: H.intl.string(H.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async (e) => {
                    try {
                        await ew();
                    } catch (l) {
                        throw (e(K(l)), l);
                    }
                },
            });
        }, [ew]),
        eT = n.useCallback(async () => {
            if ((W(null), null == ei)) return void W(H.intl.string(H.t.fEptJP));
            if ($(ei)) {
                if (X(ei)) return void eS();
                f(!0);
                try {
                    if (
                        (await (X(ei)
                            ? Promise.resolve()
                            : new Promise((e, l) => {
                                  let t = new o.Ep();
                                  function a() {
                                      t.stop(), L.A.removeChangeListener(n);
                                  }
                                  function n() {
                                      X(ei) && (a(), e());
                                  }
                                  t.start(1e4, () => {
                                      a(), l(Error("Timed out waiting for Guild Theme feature."));
                                  }),
                                      L.A.addChangeListener(n),
                                      n();
                              })),
                        !$(ei))
                    )
                        return;
                    eS();
                } catch (e) {
                    W(K(e));
                } finally {
                    f(!1);
                }
            }
        }, [eS, ei]),
        eM = n.useCallback((e) => {
            W(e ?? null);
        }, []),
        e_ = (0, c.bG)([P.A], () => P.A.getGuildId()),
        eP = null != ei && e_ !== ei;
    n.useEffect(() => {
        null != ei &&
            (k.A.shouldFetchCatalogForGuild(ei) && (0, I.AK)(ei), k.A.shouldFetchPowerupsForGuild(ei) && (0, I.Xd)(ei));
    }, [ei]),
        n.useEffect(() => {
            eP && ((s.current = !0), (0, V.WV)(), (0, M.XG)(), (0, y.Jp)());
        }, [eP]),
        n.useEffect(() => {
            if (null == ei) return;
            let { draft: e, draftEnabled: l } = U.Ay;
            (l && (0, D.Om)(e)) || (0, V.GC)(R.Zq["0"].id);
        }, [ei]),
        n.useEffect(() => {
            null == ei && ((0, M.XG)(), (0, y.Jp)());
        }, [ei]),
        n.useEffect(
            () => () => {
                (0, M.XG)(), s.current || U.Ay.isAwaitingGuildUpdate || (0, V.WV)();
            },
            [],
        );
    let eR = ea || d,
        eV = !eo && null == ec,
        eU = eR || (!eo && !em),
        eD = null != ei && em && eV,
        eW = eR || !en || null == et || null == ei || eV,
        eJ = C ?? es ?? (eD ? H.intl.string(H.t.fEptJP) : null),
        eH = (0, a.jsx)(h.$, {
            variant: "secondary",
            size: "md",
            fullWidth: !0,
            disabled: eR,
            onClick: eL,
            text: H.intl.string(H.t["13/7kX"]),
        });
    return (0, a.jsxs)("div", {
        className: F.kL,
        "data-app-right-panel": !0,
        children: [
            (0, a.jsx)(g.Ip, {
                className: F.XG,
                children: (0, a.jsxs)("div", {
                    className: F.rf,
                    children: [
                        (0, a.jsx)(x.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: H.intl.string(Z.default["/6NbRv"]),
                        }),
                        (0, a.jsxs)("div", {
                            className: F.uW,
                            children: [
                                (0, a.jsx)(v.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    className: F.a9,
                                    children: H.intl.string(Z.default.zry4l5),
                                }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: F.yV,
                                    children: H.intl.string(Z.default.HkvkHP),
                                }),
                                (0, a.jsx)(el, {}),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: F.uW,
                            children: [
                                (0, a.jsx)(v.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    className: F.a9,
                                    children: H.intl.string(O.default.uSL2Gy),
                                }),
                                (0, a.jsx)(Q, {
                                    background:
                                        "linear-gradient(90deg, rgb(255 0 0) 0%, rgb(255 255 0) 16.66%, rgb(0 255 0) 33.33%, rgb(0 255 255) 50%, rgb(0 0 255) 66.66%, rgb(255 0 255) 83.33%, rgb(255 0 0) 100%)",
                                    color: ev,
                                    controlKey: ep,
                                    min: 0,
                                    max: 359,
                                    defaultValue: eg,
                                    ariaLabel: H.intl.string(O.default.uSL2Gy),
                                    onValuePreview: eA,
                                    onValueCommit: (e) => {
                                        let l = (0, R.w3)((0, R.sR)(ef, e));
                                        eA(z(l)), ej(l, eh);
                                    },
                                }),
                                (0, a.jsx)(Q, {
                                    background: eb,
                                    color: ev,
                                    controlKey: eN,
                                    min: R.wS,
                                    max: R.iq,
                                    defaultValue: ex,
                                    ariaLabel: H.intl.string(O.default.uSL2Gy),
                                    onValuePreview: eE,
                                    onValueCommit: (e) => {
                                        let l = (0, R.w3)((0, R._k)(ef, R.wS + R.iq - e));
                                        eE(Y(l)), ej(l, eh);
                                    },
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: F.uW,
                            children: (0, a.jsxs)("div", {
                                className: F.Ib,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: F.Gl,
                                        children: [
                                            (0, a.jsx)(v.E, {
                                                id: u,
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: F.KF,
                                                children: H.intl.string(O.default.xlXkaL),
                                            }),
                                            (0, a.jsx)(v.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: F.rv,
                                                children: `${Math.round(eh)}%`,
                                            }),
                                        ],
                                    }),
                                    (0, a.jsx)(
                                        b.A,
                                        {
                                            "aria-labelledby": u,
                                            minValue: 0,
                                            maxValue: 100,
                                            keyboardStep: 1,
                                            initialValue: eh,
                                            defaultValue: eh,
                                            onValueRender: (e) => `${Math.round(e)}%`,
                                            onValueChange: (e) => {
                                                let l = Math.round(e);
                                                (l !== eh || et?.customUserThemeSettings != null) && (ey(l), ej(ef, l));
                                            },
                                        },
                                        eG,
                                    ),
                                ],
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: F.uW,
                            children: [
                                (0, a.jsx)(v.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    className: F.a9,
                                    children: H.intl.string(Z.default.jSrqR2),
                                }),
                                (0, a.jsx)("div", {
                                    className: F.$k,
                                    children: R.Zq.map((e) =>
                                        (0, a.jsx)(
                                            ee,
                                            {
                                                preset: e,
                                                selected: et?.presetId === e.id,
                                                disabled: eR,
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
                            className: F.uu,
                            children: [
                                (0, a.jsx)(h.$, {
                                    buttonRef: t,
                                    variant: "secondary",
                                    size: "md",
                                    fullWidth: !0,
                                    disabled: eR,
                                    onClick: eI,
                                    text: H.intl.string(O.default.c9MBEH),
                                    icon: l
                                        ? { type: "icon", asset: p.j }
                                        : {
                                              type: "rive",
                                              asset: A.m,
                                              riveProps: {
                                                  dataBinding: { fill: N.A.colors.ICON_STRONG },
                                                  eventTargetRef: t,
                                              },
                                          },
                                }),
                                (0, a.jsx)(h.$, {
                                    variant: "secondary",
                                    size: "md",
                                    fullWidth: !0,
                                    disabled: eR || !en,
                                    onClick: ek,
                                    text: H.intl.string(H.t.yBZMsQ),
                                }),
                            ],
                        }),
                        null != eJ &&
                            (0, a.jsx)("div", {
                                role: "alert",
                                children: (0, a.jsx)(v.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-feedback-critical",
                                    className: F.z3,
                                    children: eJ,
                                }),
                            }),
                    ],
                }),
            }),
            (0, a.jsx)("div", {
                className: F.qr,
                children:
                    eo || null == ec || null == ei
                        ? (0, a.jsxs)("div", {
                              className: F.zt,
                              children: [
                                  eH,
                                  (0, a.jsx)("span", {
                                      className: F._l,
                                      children: (0, a.jsx)(h.$, {
                                          variant: "primary",
                                          size: "md",
                                          fullWidth: !0,
                                          loading: eU,
                                          disabled: eW,
                                          onClick: eT,
                                          text: H.intl.string(H.t["1Qm822"]),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsxs)("div", {
                              className: F.Wz,
                              children: [
                                  (0, a.jsx)(G.f5, {
                                      value: ed,
                                      children: (0, a.jsx)(T.A, {
                                          guildId: ei,
                                          powerup: ec,
                                          compact: !1,
                                          grow: !0,
                                          size: "md",
                                          skipActivateModal: !0,
                                          onError: eM,
                                      }),
                                  }),
                                  eH,
                              ],
                          }),
            }),
        ],
    });
}

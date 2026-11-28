(t.r(l), t.d(l, { default: () => el }));
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
    g = t(821609),
    h = t(95362),
    b = t(534514),
    x = t(834730),
    v = t(893007),
    A = t(926321),
    p = t(90302),
    E = t(646514),
    N = t(793574),
    G = t(688810),
    y = t(793943),
    I = t(727419),
    k = t(378292),
    C = t(533993),
    j = t(645619),
    L = t(71393),
    S = t(652215),
    T = t(828162),
    _ = t(439156),
    P = t(973654),
    w = t(413599),
    U = t(967198),
    M = t(476931),
    R = t(673642),
    W = t(909289),
    D = t(875317),
    V = t(42119),
    H = t(818348),
    J = t(792996),
    O = t(40694),
    X = t(418555),
    $ = t(438221);
function F(e) {
    return L.A.getGuild(e)?.features.has(S.GuildFeatures.GUILD_THEME) === !0;
}
function z(e) {
    return W.Ay.guildId === e && U.A.getGuildId() === e;
}
function K(e) {
    return e.body?.message ?? e.message ?? J.intl.string(J.t.fEptJP);
}
function Y(e) {
    let l = i()(e).get("hsl.h");
    return Number.isNaN(l) ? 0 : Math.round(l);
}
function q(e) {
    return Math.round(100 * i()(e).get("hsl.l"));
}
function B(e) {
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
function Q(e) {
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
        className: $.TH,
        children: [
            (0, a.jsx)("div", { className: $.uy, style: { background: l } }),
            (0, a.jsx)(
                "input",
                {
                    className: $.d7,
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
function Z(e) {
    let { preset: l, selected: t, disabled: n, onSelect: s, theme: i } = e,
        r = (0, k.A)(l);
    return (0, a.jsx)(V.IK, {
        preset: l,
        selected: t,
        disabled: n,
        onClick: s,
        label: r,
        theme: i,
        buttonClassName: $.u5,
        graphicClassName: $.kw,
        selectedIndicatorClassName: $.$R,
    });
}
function ee() {
    let e = (0, o.bG)([w.A], () => w.A.theme) === H.NJ.LIGHT ? H.NJ.LIGHT : H.NJ.ASH,
        l = [
            {
                name: "",
                value: H.NJ.ASH,
                icon: u.ThemeDarkIcon,
                className: e === H.NJ.ASH ? $.bx : void 0,
                tooltip: J.intl.string(O.default["Dk+OWY"]),
                tooltipAriaLabel: J.intl.string(O.default["Dk+OWY"]),
            },
            {
                name: "",
                value: H.NJ.LIGHT,
                icon: d.ThemeLightIcon,
                className: e === H.NJ.LIGHT ? $.bx : void 0,
                tooltip: J.intl.string(O.default["5vlJkY"]),
                tooltipAriaLabel: J.intl.string(O.default["5vlJkY"]),
            },
        ];
    return (0, a.jsx)(f.I, {
        className: $.q0,
        optionClassName: $.C_,
        options: l,
        value: e,
        onChange: (e) => {
            let { value: l } = e;
            return (0, P.GQ)(l);
        },
        look: "pill",
    });
}
function el(e) {
    let { isMobile: l } = e,
        t = n.useRef(null),
        s = n.useRef(!1),
        u = n.useId(),
        [d, f] = n.useState(!1),
        [k, V] = n.useState(null),
        H = (0, o.bG)([w.A], () => w.A.theme),
        {
            draft: el,
            isSaving: et,
            hasChanges: ea,
            saveError: en,
            previewGuildId: es,
            origin: ei,
        } = (0, o.cf)([W.Ay], () => ({
            draft: W.Ay.draft,
            isSaving: W.Ay.isSaving,
            hasChanges: W.Ay.hasChanges(),
            saveError: W.Ay.saveError,
            previewGuildId: W.Ay.guildId,
            origin: W.Ay.origin,
        })),
        er = ei === W.v5.PERK_MODAL ? N.A.GUILD_POWERUPS_OVERVIEW : N.A.GUILD_POWERUPS_GUILD_SETTINGS_GUILD_THEME,
        { analyticsLocations: eu } = (0, G.Ay)(er),
        ed = (0, o.bG)([j.A], () => (null == es ? void 0 : j.A.getStateForGuild(es)?.allPowerups[r.d0]), [es]),
        eo = (0, o.bG)(
            [L.A, j.A],
            () =>
                null != es &&
                (L.A.getGuild(es)?.features.has(S.GuildFeatures.GUILD_THEME) === !0 ||
                    j.A.getStateForGuild(es)?.unlockedPowerups?.[r.d0] != null),
            [es],
        ),
        ec = (0, o.bG)([j.A], () => null == es || j.A.hasFetchedPowerupCatalog(es), [es]),
        em = (function (e) {
            let l = e?.customUserThemeSettings?.colors?.[0];
            if (null != l) return l;
            let t = (0, M.Yt)(e?.presetId),
                a = null != t ? (0, M.oE)(t).color : M.a0;
            return (0, M.w3)((0, M._k)(a, q(a)));
        })(el),
        ef = (function (e) {
            let l = e?.customUserThemeSettings?.baseMix;
            if (null != l) return l;
            let t = (0, M.Yt)(e?.presetId);
            return null != t ? (0, M.oE)(t).baseMix : 74;
        })(el),
        eg = Y(em),
        eh = 90 - q(em),
        eb = n.useMemo(() => (0, M.z3)(em, H), [em, H]),
        ex = n.useMemo(
            () =>
                (function (e, l) {
                    let { minTone: t, maxTone: a } = (0, M.It)(l),
                        n = i()(e),
                        s = Y(e),
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
                })(em, H),
            [em, H],
        ),
        { key: ev, handleInternalChange: eA } = B(eg),
        { key: ep, handleInternalChange: eE } = B(eh),
        { key: eN, handleInternalChange: eG } = B(ef),
        ey = n.useCallback((e, l) => {
            (0, R.t$)({ colors: [e], gradientAngle: 0, baseMix: l });
        }, []),
        eI = n.useCallback((e) => {
            (0, R.GC)(e.id);
        }, []),
        ek = n.useCallback(() => {
            let e = (0, M.XY)();
            ey(e.color, e.baseMix);
        }, [ey]),
        eC = n.useCallback(() => {
            let { guildId: e, original: l, originalEnabled: t, origin: a } = W.Ay;
            null != e &&
                null != a &&
                (0, R.tA)({ guildId: e, draft: l, original: l, draftEnabled: t, originalEnabled: t, origin: a });
        }, []),
        ej = n.useCallback(() => {
            let { guildId: e, origin: l } = W.Ay;
            ((s.current = !0),
                (0, R.WV)(),
                (0, P.XG)(),
                (0, y.Jp)(),
                null != e &&
                    (l === W.v5.GUILD_SETTINGS
                        ? I.A.open(e, S.BEX.GUILD_THEME, N.A.GUILD_POWERUPS_GUILD_SETTINGS_GUILD_THEME)
                        : l === W.v5.PERK_MODAL && (0, T.A)(e, N.A.GUILD_POWERUPS_OVERVIEW, r.d0)));
        }, []),
        eL = n.useCallback(async () => {
            (await (0, R.HN)(), (s.current = !0), (0, P.XG)(), (0, y.Jp)());
        }, []),
        eS = n.useCallback(() => {
            (0, m.A)({
                title: J.intl.string(X.default.H8idcP),
                subtitle: J.intl.string(X.default["0LL6FX"]),
                confirmText: J.intl.string(J.t["cY+Oob"]),
                cancelText: J.intl.string(J.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async (e) => {
                    try {
                        await eL();
                    } catch (l) {
                        throw (e(K(l)), l);
                    }
                },
            });
        }, [eL]),
        eT = n.useCallback(async () => {
            if ((V(null), null == es)) return void V(J.intl.string(J.t.fEptJP));
            if (z(es)) {
                if (F(es)) return void eS();
                f(!0);
                try {
                    if (
                        (await (F(es)
                            ? Promise.resolve()
                            : new Promise((e, l) => {
                                  let t = new c.Ep();
                                  function a() {
                                      (t.stop(), L.A.removeChangeListener(n));
                                  }
                                  function n() {
                                      F(es) && (a(), e());
                                  }
                                  (t.start(1e4, () => {
                                      (a(), l(Error("Timed out waiting for Guild Theme feature.")));
                                  }),
                                      L.A.addChangeListener(n),
                                      n());
                              })),
                        !z(es))
                    )
                        return;
                    eS();
                } catch (e) {
                    V(K(e));
                } finally {
                    f(!1);
                }
            }
        }, [eS, es]),
        e_ = n.useCallback((e) => {
            V(e ?? null);
        }, []),
        eP = (0, o.bG)([U.A], () => U.A.getGuildId()),
        ew = null != es && eP !== es;
    (n.useEffect(() => {
        null != es &&
            (j.A.shouldFetchCatalogForGuild(es) && (0, C.AK)(es), j.A.shouldFetchPowerupsForGuild(es) && (0, C.Xd)(es));
    }, [es]),
        n.useEffect(() => {
            ew && ((s.current = !0), (0, R.WV)(), (0, P.XG)(), (0, y.Jp)());
        }, [ew]),
        n.useEffect(() => {
            if (null == es) return;
            let { draft: e, draftEnabled: l } = W.Ay;
            (l && (0, D.Om)(e)) || (0, R.GC)(M.Zq["0"].id);
        }, [es]),
        n.useEffect(() => {
            null == es && ((0, P.XG)(), (0, y.Jp)());
        }, [es]),
        n.useEffect(
            () => () => {
                ((0, P.XG)(), s.current || W.Ay.isAwaitingGuildUpdate || (0, R.WV)());
            },
            [],
        ));
    let eU = et || d,
        eM = !eo && null == ed,
        eR = eU || (!eo && !ec),
        eW = null != es && ec && eM,
        eD = eU || !ea || null == el || null == es || eM,
        eV = k ?? en ?? (eW ? J.intl.string(J.t.fEptJP) : null),
        eH = (0, a.jsx)(g.$, {
            variant: "secondary",
            size: "md",
            fullWidth: !0,
            disabled: eU,
            onClick: ej,
            text: J.intl.string(J.t["13/7kX"]),
        });
    return (0, a.jsxs)("div", {
        className: $.kL,
        "data-app-right-panel": !0,
        children: [
            (0, a.jsx)(h.Ip, {
                className: $.XG,
                children: (0, a.jsxs)("div", {
                    className: $.rf,
                    children: [
                        (0, a.jsx)(b.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: J.intl.string(X.default["/6NbRv"]),
                        }),
                        (0, a.jsxs)("div", {
                            className: $.uW,
                            children: [
                                (0, a.jsx)(x.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-default",
                                    className: $.a9,
                                    children: J.intl.string(X.default.zry4l5),
                                }),
                                (0, a.jsx)(x.E, {
                                    variant: "body-xs/medium",
                                    color: "text-muted",
                                    className: $.yV,
                                    children: J.intl.string(X.default.HkvkHP),
                                }),
                                (0, a.jsx)(ee, {}),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: $.uW,
                            children: [
                                (0, a.jsx)(x.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-default",
                                    className: $.a9,
                                    children: J.intl.string(O.default.uSL2Gy),
                                }),
                                (0, a.jsx)(Q, {
                                    background:
                                        "linear-gradient(90deg, rgb(255 0 0) 0%, rgb(255 255 0) 16.66%, rgb(0 255 0) 33.33%, rgb(0 255 255) 50%, rgb(0 0 255) 66.66%, rgb(255 0 255) 83.33%, rgb(255 0 0) 100%)",
                                    color: eb,
                                    controlKey: ev,
                                    min: 0,
                                    max: 359,
                                    defaultValue: eg,
                                    ariaLabel: J.intl.string(O.default.uSL2Gy),
                                    onValuePreview: eA,
                                    onValueCommit: (e) => {
                                        let l = (0, M.w3)((0, M.sR)(em, e));
                                        (eA(Y(l)), ey(l, ef));
                                    },
                                }),
                                (0, a.jsx)(Q, {
                                    background: ex,
                                    color: eb,
                                    controlKey: ep,
                                    min: 15,
                                    max: 75,
                                    defaultValue: eh,
                                    ariaLabel: J.intl.string(O.default.uSL2Gy),
                                    onValuePreview: eE,
                                    onValueCommit: (e) => {
                                        let l = (0, M.w3)((0, M._k)(em, 90 - e));
                                        (eE(90 - q(l)), ey(l, ef));
                                    },
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: $.uW,
                            children: (0, a.jsxs)("div", {
                                className: $.Ib,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: $.Gl,
                                        children: [
                                            (0, a.jsx)(x.E, {
                                                id: u,
                                                variant: "body-sm/medium",
                                                color: "text-default",
                                                className: $.KF,
                                                children: J.intl.string(O.default.xlXkaL),
                                            }),
                                            (0, a.jsx)(x.E, {
                                                variant: "body-sm/medium",
                                                color: "text-default",
                                                className: $.rv,
                                                children: `${Math.round(ef)}%`,
                                            }),
                                        ],
                                    }),
                                    (0, a.jsx)(
                                        v.A,
                                        {
                                            "aria-labelledby": u,
                                            minValue: 0,
                                            maxValue: 100,
                                            defaultValue: ef,
                                            formatValue: (e) => `${Math.round(e)}%`,
                                            onChangeEnd: (e) => {
                                                let l = Math.round(e);
                                                (l !== ef || el?.customUserThemeSettings != null) && (eG(l), ey(em, l));
                                            },
                                        },
                                        eN,
                                    ),
                                ],
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: $.uW,
                            children: [
                                (0, a.jsx)(x.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-default",
                                    className: $.a9,
                                    children: J.intl.string(X.default.jSrqR2),
                                }),
                                (0, a.jsx)("div", {
                                    className: $.$k,
                                    children: M.Zq.map((e) =>
                                        (0, a.jsx)(
                                            Z,
                                            {
                                                preset: e,
                                                selected: el?.presetId === e.id,
                                                disabled: eU,
                                                onSelect: () => eI(e),
                                                theme: H,
                                            },
                                            e.id,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: $.uu,
                            children: [
                                (0, a.jsx)(g.$, {
                                    buttonRef: t,
                                    variant: "secondary",
                                    size: "md",
                                    fullWidth: !0,
                                    disabled: eU,
                                    onClick: ek,
                                    text: J.intl.string(O.default.c9MBEH),
                                    icon: l
                                        ? { type: "icon", asset: A.DiceIcon }
                                        : {
                                              type: "rive",
                                              asset: p.m,
                                              riveProps: {
                                                  dataBinding: { fill: E.A.colors.ICON_STRONG },
                                                  eventTargetRef: t,
                                              },
                                          },
                                }),
                                (0, a.jsx)(g.$, {
                                    variant: "secondary",
                                    size: "md",
                                    fullWidth: !0,
                                    disabled: eU || !ea,
                                    onClick: eC,
                                    text: J.intl.string(J.t.yBZMsQ),
                                }),
                            ],
                        }),
                        null != eV &&
                            (0, a.jsx)("div", {
                                role: "alert",
                                children: (0, a.jsx)(x.E, {
                                    variant: "body-xs/semibold",
                                    color: "text-feedback-critical",
                                    className: $.z3,
                                    children: eV,
                                }),
                            }),
                    ],
                }),
            }),
            (0, a.jsx)("div", {
                className: $.qr,
                children:
                    eo || null == ed || null == es
                        ? (0, a.jsxs)("div", {
                              className: $.zt,
                              children: [
                                  eH,
                                  (0, a.jsx)("span", {
                                      className: $._l,
                                      children: (0, a.jsx)(g.$, {
                                          variant: "primary",
                                          size: "md",
                                          fullWidth: !0,
                                          loading: eR,
                                          disabled: eD,
                                          onClick: eT,
                                          text: J.intl.string(J.t["1Qm822"]),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsxs)("div", {
                              className: $.Wz,
                              children: [
                                  (0, a.jsx)(G.f5, {
                                      value: eu,
                                      children: (0, a.jsx)(_.A, {
                                          guildId: es,
                                          powerup: ed,
                                          compact: !1,
                                          grow: !0,
                                          size: "md",
                                          skipActivateModal: !0,
                                          onError: e_,
                                      }),
                                  }),
                                  eH,
                              ],
                          }),
            }),
        ],
    });
}

t.r(l), t.d(l, { default: () => ea });
var a = t(477900),
    n = t(582128),
    i = t(310784),
    s = t.n(i),
    r = t(512750),
    u = t(943255),
    d = t(575181),
    c = t(17928),
    o = t(451988),
    m = t(314116),
    f = t(629584),
    g = t(821609),
    h = t(364522),
    x = t(297264),
    b = t(834730),
    v = t(106236),
    p = t(926321),
    A = t(908803),
    N = t(661531),
    E = t(793574),
    G = t(688810),
    y = t(793943),
    C = t(468689),
    I = t(378292),
    k = t(868652),
    j = t(645619),
    L = t(972829),
    S = t(828162),
    T = t(439156),
    _ = t(973654),
    w = t(363195),
    P = t(71393),
    R = t(967198),
    U = t(476931),
    V = t(673642),
    D = t(759532),
    M = t(875317),
    W = t(42119),
    J = t(652215),
    H = t(818348),
    O = t(375708),
    X = t(328157),
    $ = t(376134),
    K = t(438221);
function z(e) {
    return P.A.getGuild(e)?.features.has(J.GuildFeatures.GUILD_THEME) === !0;
}
function F(e) {
    return D.Ay.guildId === e && R.A.getGuildId() === e;
}
function q(e) {
    return e.body?.message ?? e.message ?? O.intl.string(O.t.fEptJP);
}
function Y(e) {
    let l = s()(e).get("hsl.h");
    return Number.isNaN(l) ? 0 : Math.round(l);
}
function B(e) {
    return Math.round(100 * s()(e).get("hsl.l"));
}
function Z(e) {
    return U.wS + U.iq - B(e);
}
function Q(e) {
    let [l, t] = n.useState(0),
        a = n.useRef(null),
        i = n.useRef(e);
    return (
        n.useEffect(() => {
            e !== i.current && (a.current === e ? (a.current = null) : t((e) => e + 1)), (i.current = e);
        }, [e]),
        { key: l, handleInternalChange: n.useCallback((e) => ((a.current = e), e), []) }
    );
}
function ee(e) {
    let {
            background: l,
            color: t,
            controlKey: i,
            min: s,
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
        className: K.TH,
        children: [
            (0, a.jsx)("div", { className: K.uy, style: { background: l } }),
            (0, a.jsx)(
                "input",
                {
                    className: K.d7,
                    style: { color: t },
                    type: "range",
                    min: s,
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
                i,
            ),
        ],
    });
}
function el(e) {
    let { preset: l, selected: t, disabled: n, onSelect: i, theme: s } = e,
        r = (0, I.A)(l);
    return (0, a.jsx)(W.IK, {
        preset: l,
        selected: t,
        disabled: n,
        onClick: i,
        label: r,
        theme: s,
        buttonClassName: K.u5,
        graphicClassName: K.kw,
        selectedIndicatorClassName: K.$R,
    });
}
function et() {
    let e = (0, c.bG)([w.A], () => w.A.theme) === H.NJ.LIGHT ? H.NJ.LIGHT : H.NJ.DARK,
        l = [
            {
                name: "",
                value: H.NJ.DARK,
                icon: u.Z,
                className: e === H.NJ.DARK ? K.bx : void 0,
                tooltip: O.intl.string(X.default["Dk+OWY"]),
                tooltipAriaLabel: O.intl.string(X.default["Dk+OWY"]),
            },
            {
                name: "",
                value: H.NJ.LIGHT,
                icon: d.F,
                className: e === H.NJ.LIGHT ? K.bx : void 0,
                tooltip: O.intl.string(X.default["5vlJkY"]),
                tooltipAriaLabel: O.intl.string(X.default["5vlJkY"]),
            },
        ];
    return (0, a.jsx)(f.I, {
        className: K.q0,
        optionClassName: K.C_,
        options: l,
        value: e,
        onChange: (e) => {
            let { value: l } = e;
            return (0, _.GQ)(l);
        },
        look: "pill",
    });
}
function ea(e) {
    let { isMobile: l } = e,
        t = n.useRef(null),
        i = n.useRef(!1),
        u = n.useId(),
        [d, f] = n.useState(!1),
        [I, W] = n.useState(null),
        H = (0, c.bG)([w.A], () => w.A.theme),
        {
            draft: ea,
            isSaving: en,
            hasChanges: ei,
            saveError: es,
            previewGuildId: er,
            origin: eu,
        } = (0, c.cf)([D.Ay], () => ({
            draft: D.Ay.draft,
            isSaving: D.Ay.isSaving,
            hasChanges: D.Ay.hasChanges(),
            saveError: D.Ay.saveError,
            previewGuildId: D.Ay.guildId,
            origin: D.Ay.origin,
        })),
        ed = eu === D.v5.PERK_MODAL ? E.A.GUILD_POWERUPS_OVERVIEW : E.A.GUILD_POWERUPS_GUILD_SETTINGS_GUILD_THEME,
        { analyticsLocations: ec } = (0, G.Ay)(ed),
        eo = (0, c.bG)([j.A], () => (null == er ? void 0 : j.A.getStateForGuild(er)?.allPowerups[r.d0]), [er]),
        em = (0, L.A)(er),
        ef = (0, c.bG)([j.A], () => null == er || j.A.hasFetchedPowerupCatalog(er), [er]),
        eg = (function (e) {
            let l = e?.customUserThemeSettings?.colors?.[0];
            if (null != l) return l;
            let t = (0, U.Yt)(e?.presetId),
                a = null != t ? (0, U.oE)(t).color : U.a0;
            return (0, U.w3)((0, U._k)(a, B(a)));
        })(ea),
        eh = (function (e) {
            let l = e?.customUserThemeSettings?.baseMix;
            if (null != l) return l;
            let t = (0, U.Yt)(e?.presetId);
            return null != t ? (0, U.oE)(t).baseMix : U.BC;
        })(ea),
        ex = Y(eg),
        eb = Z(eg),
        ev = n.useMemo(() => (0, U.z3)(eg, H), [eg, H]),
        ep = n.useMemo(
            () =>
                (function (e, l) {
                    let { minTone: t, maxTone: a } = (0, U.It)(l),
                        n = s()(e),
                        i = Y(e),
                        r = n.get("hsl.s"),
                        u = Number.isNaN(r) ? 0.82 : r,
                        d = s()
                            .hsl(i, u, t / 100)
                            .hex(),
                        c = s()
                            .hsl(i, u, (t + a) / 200)
                            .hex(),
                        o = s()
                            .hsl(i, u, a / 100)
                            .hex();
                    return `linear-gradient(90deg, ${o} 0%, ${c} 50%, ${d} 100%)`;
                })(eg, H),
            [eg, H],
        ),
        { key: eA, handleInternalChange: eN } = Q(ex),
        { key: eE, handleInternalChange: eG } = Q(eb),
        { key: ey, handleInternalChange: eC } = Q(eh),
        eI = n.useCallback((e, l) => {
            (0, V.t$)({ colors: [e], gradientAngle: 0, baseMix: l });
        }, []),
        ek = n.useCallback((e) => {
            (0, V.GC)(e.id);
        }, []),
        ej = n.useCallback(() => {
            let e = (0, U.XY)();
            eI(e.color, e.baseMix);
        }, [eI]),
        eL = n.useCallback(() => {
            let { guildId: e, original: l, originalEnabled: t, origin: a } = D.Ay;
            null != e &&
                null != a &&
                (0, V.tA)({ guildId: e, draft: l, original: l, draftEnabled: t, originalEnabled: t, origin: a });
        }, []),
        eS = n.useCallback(() => {
            let { guildId: e, origin: l } = D.Ay;
            (i.current = !0),
                (0, V.WV)(),
                (0, _.XG)(),
                (0, y.Jp)(),
                null != e &&
                    (l === D.v5.GUILD_SETTINGS
                        ? C.A.open(e, J.BEX.GUILD_THEME, E.A.GUILD_POWERUPS_GUILD_SETTINGS_GUILD_THEME)
                        : l === D.v5.PERK_MODAL && (0, S.A)(e, E.A.GUILD_POWERUPS_OVERVIEW, r.d0));
        }, []),
        eT = n.useCallback(async () => {
            await (0, V.HN)(), (i.current = !0), (0, _.XG)(), (0, y.Jp)();
        }, []),
        e_ = n.useCallback(() => {
            (0, m.A)({
                title: O.intl.string($.default.H8idcP),
                subtitle: O.intl.string($.default["0LL6FX"]),
                confirmText: O.intl.string(O.t["cY+Oob"]),
                cancelText: O.intl.string(O.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async (e) => {
                    try {
                        await eT();
                    } catch (l) {
                        throw (e(q(l)), l);
                    }
                },
            });
        }, [eT]),
        ew = n.useCallback(async () => {
            if ((W(null), null == er)) return void W(O.intl.string(O.t.fEptJP));
            if (F(er)) {
                if (z(er)) return void e_();
                f(!0);
                try {
                    if (
                        (await (z(er)
                            ? Promise.resolve()
                            : new Promise((e, l) => {
                                  let t = new o.Ep();
                                  function a() {
                                      t.stop(), P.A.removeChangeListener(n);
                                  }
                                  function n() {
                                      z(er) && (a(), e());
                                  }
                                  t.start(1e4, () => {
                                      a(), l(Error("Timed out waiting for Guild Theme feature."));
                                  }),
                                      P.A.addChangeListener(n),
                                      n();
                              })),
                        !F(er))
                    )
                        return;
                    e_();
                } catch (e) {
                    W(q(e));
                } finally {
                    f(!1);
                }
            }
        }, [e_, er]),
        eP = n.useCallback((e) => {
            W(e ?? null);
        }, []),
        eR = (0, c.bG)([R.A], () => R.A.getGuildId()),
        eU = null != er && eR !== er;
    n.useEffect(() => {
        null != er &&
            (j.A.shouldFetchCatalogForGuild(er) && (0, k.AK)(er), j.A.shouldFetchPowerupsForGuild(er) && (0, k.Xd)(er));
    }, [er]),
        n.useEffect(() => {
            eU && ((i.current = !0), (0, V.WV)(), (0, _.XG)(), (0, y.Jp)());
        }, [eU]),
        n.useEffect(() => {
            if (null == er) return;
            let { draft: e, draftEnabled: l } = D.Ay;
            (l && (0, M.Om)(e)) || (0, V.GC)(U.Zq["0"].id);
        }, [er]),
        n.useEffect(() => {
            null == er && ((0, _.XG)(), (0, y.Jp)());
        }, [er]),
        n.useEffect(
            () => () => {
                (0, _.XG)(), i.current || D.Ay.isAwaitingGuildUpdate || (0, V.WV)();
            },
            [],
        );
    let eV = en || d,
        eD = !em && null == eo,
        eM = eV || (!em && !ef),
        eW = null != er && ef && eD,
        eJ = eV || !ei || null == ea || null == er || eD,
        eH = I ?? es ?? (eW ? O.intl.string(O.t.fEptJP) : null),
        eO = (0, a.jsx)(g.$, {
            variant: "secondary",
            size: "md",
            fullWidth: !0,
            disabled: eV,
            onClick: eS,
            text: O.intl.string(O.t["13/7kX"]),
        });
    return (0, a.jsxs)("div", {
        className: K.kL,
        "data-app-right-panel": !0,
        children: [
            (0, a.jsx)(h.Ip, {
                className: K.XG,
                children: (0, a.jsxs)("div", {
                    className: K.rf,
                    children: [
                        (0, a.jsx)(x.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: O.intl.string($.default["/6NbRv"]),
                        }),
                        (0, a.jsxs)("div", {
                            className: K.uW,
                            children: [
                                (0, a.jsx)(b.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    className: K.a9,
                                    children: O.intl.string($.default.zry4l5),
                                }),
                                (0, a.jsx)(b.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: K.yV,
                                    children: O.intl.string($.default.HkvkHP),
                                }),
                                (0, a.jsx)(et, {}),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: K.uW,
                            children: [
                                (0, a.jsx)(b.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    className: K.a9,
                                    children: O.intl.string(X.default.uSL2Gy),
                                }),
                                (0, a.jsx)(ee, {
                                    background:
                                        "linear-gradient(90deg, rgb(255 0 0) 0%, rgb(255 255 0) 16.66%, rgb(0 255 0) 33.33%, rgb(0 255 255) 50%, rgb(0 0 255) 66.66%, rgb(255 0 255) 83.33%, rgb(255 0 0) 100%)",
                                    color: ev,
                                    controlKey: eA,
                                    min: 0,
                                    max: 359,
                                    defaultValue: ex,
                                    ariaLabel: O.intl.string(X.default.uSL2Gy),
                                    onValuePreview: eN,
                                    onValueCommit: (e) => {
                                        let l = (0, U.w3)((0, U.sR)(eg, e));
                                        eN(Y(l)), eI(l, eh);
                                    },
                                }),
                                (0, a.jsx)(ee, {
                                    background: ep,
                                    color: ev,
                                    controlKey: eE,
                                    min: U.wS,
                                    max: U.iq,
                                    defaultValue: eb,
                                    ariaLabel: O.intl.string(X.default.uSL2Gy),
                                    onValuePreview: eG,
                                    onValueCommit: (e) => {
                                        let l = (0, U.w3)((0, U._k)(eg, U.wS + U.iq - e));
                                        eG(Z(l)), eI(l, eh);
                                    },
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: K.uW,
                            children: (0, a.jsxs)("div", {
                                className: K.Ib,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: K.Gl,
                                        children: [
                                            (0, a.jsx)(b.E, {
                                                id: u,
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: K.KF,
                                                children: O.intl.string(X.default.xlXkaL),
                                            }),
                                            (0, a.jsx)(b.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: K.rv,
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
                                            keyboardStep: 1,
                                            initialValue: eh,
                                            defaultValue: eh,
                                            onValueRender: (e) => `${Math.round(e)}%`,
                                            onValueChange: (e) => {
                                                let l = Math.round(e);
                                                (l !== eh || ea?.customUserThemeSettings != null) && (eC(l), eI(eg, l));
                                            },
                                        },
                                        ey,
                                    ),
                                ],
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: K.uW,
                            children: [
                                (0, a.jsx)(b.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    className: K.a9,
                                    children: O.intl.string($.default.jSrqR2),
                                }),
                                (0, a.jsx)("div", {
                                    className: K.$k,
                                    children: U.Zq.map((e) =>
                                        (0, a.jsx)(
                                            el,
                                            {
                                                preset: e,
                                                selected: ea?.presetId === e.id,
                                                disabled: eV,
                                                onSelect: () => ek(e),
                                                theme: H,
                                            },
                                            e.id,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: K.uu,
                            children: [
                                (0, a.jsx)(g.$, {
                                    buttonRef: t,
                                    variant: "secondary",
                                    size: "md",
                                    fullWidth: !0,
                                    disabled: eV,
                                    onClick: ej,
                                    text: O.intl.string(X.default.c9MBEH),
                                    icon: l
                                        ? { type: "icon", asset: p.DiceIcon }
                                        : {
                                              type: "rive",
                                              asset: A.m,
                                              riveProps: {
                                                  dataBinding: { fill: N.A.colors.ICON_STRONG },
                                                  eventTargetRef: t,
                                              },
                                          },
                                }),
                                (0, a.jsx)(g.$, {
                                    variant: "secondary",
                                    size: "md",
                                    fullWidth: !0,
                                    disabled: eV || !ei,
                                    onClick: eL,
                                    text: O.intl.string(O.t.yBZMsQ),
                                }),
                            ],
                        }),
                        null != eH &&
                            (0, a.jsx)("div", {
                                role: "alert",
                                children: (0, a.jsx)(b.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-feedback-critical",
                                    className: K.z3,
                                    children: eH,
                                }),
                            }),
                    ],
                }),
            }),
            (0, a.jsx)("div", {
                className: K.qr,
                children:
                    em || null == eo || null == er
                        ? (0, a.jsxs)("div", {
                              className: K.zt,
                              children: [
                                  eO,
                                  (0, a.jsx)("span", {
                                      className: K._l,
                                      children: (0, a.jsx)(g.$, {
                                          variant: "primary",
                                          size: "md",
                                          fullWidth: !0,
                                          loading: eM,
                                          disabled: eJ,
                                          onClick: ew,
                                          text: O.intl.string(O.t["1Qm822"]),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsxs)("div", {
                              className: K.Wz,
                              children: [
                                  (0, a.jsx)(G.f5, {
                                      value: ec,
                                      children: (0, a.jsx)(T.A, {
                                          guildId: er,
                                          powerup: eo,
                                          compact: !1,
                                          grow: !0,
                                          size: "md",
                                          skipActivateModal: !0,
                                          onError: eP,
                                      }),
                                  }),
                                  eO,
                              ],
                          }),
            }),
        ],
    });
}

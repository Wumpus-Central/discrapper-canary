t.r(l), t.d(l, { default: () => ea });
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
    N = t(908803),
    A = t(661531),
    E = t(793574),
    y = t(688810),
    j = t(793943),
    G = t(468689),
    C = t(378292),
    I = t(868652),
    k = t(645619),
    L = t(972829),
    w = t(828162),
    S = t(439156),
    T = t(973654),
    M = t(363195),
    _ = t(71393),
    R = t(967198),
    P = t(476931),
    V = t(673642),
    U = t(759532),
    D = t(875317),
    W = t(42119),
    J = t(652215),
    O = t(818348),
    H = t(375708),
    Z = t(693227),
    X = t(412848),
    $ = t(894284);
function F(e) {
    return _.A.getGuild(e)?.features.has(J.GuildFeatures.GUILD_THEME) === !0;
}
function K(e) {
    return U.Ay.guildId === e && R.A.getGuildId() === e;
}
function z(e) {
    return e.body?.message ?? e.message ?? H.intl.string(H.t.fEptJP);
}
function q(e) {
    let l = i()(e).get("hsl.h");
    return Number.isNaN(l) ? 0 : Math.round(l);
}
function Y(e) {
    return Math.round(100 * i()(e).get("hsl.l"));
}
function B(e) {
    return P.wS + P.iq - Y(e);
}
function Q(e) {
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
function ee(e) {
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
function el(e) {
    let { preset: l, selected: t, disabled: n, onSelect: s, theme: i } = e,
        r = (0, C.A)(l);
    return (0, a.jsx)(W.IK, {
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
function et() {
    let e = (0, c.bG)([M.A], () => M.A.theme) === O.NJ.LIGHT ? O.NJ.LIGHT : O.NJ.DARK,
        l = [
            {
                name: "",
                value: O.NJ.DARK,
                icon: u.Z,
                className: e === O.NJ.DARK ? $.bx : void 0,
                tooltip: H.intl.string(Z.default["Dk+OWY"]),
                tooltipAriaLabel: H.intl.string(Z.default["Dk+OWY"]),
            },
            {
                name: "",
                value: O.NJ.LIGHT,
                icon: d.F,
                className: e === O.NJ.LIGHT ? $.bx : void 0,
                tooltip: H.intl.string(Z.default["5vlJkY"]),
                tooltipAriaLabel: H.intl.string(Z.default["5vlJkY"]),
            },
        ];
    return (0, a.jsx)(f.I, {
        className: $.q0,
        optionClassName: $.C_,
        options: l,
        value: e,
        onChange: (e) => {
            let { value: l } = e;
            return (0, T.GQ)(l);
        },
        look: "pill",
    });
}
function ea(e) {
    let { isMobile: l } = e,
        t = n.useRef(null),
        s = n.useRef(!1),
        u = n.useId(),
        [d, f] = n.useState(!1),
        [C, W] = n.useState(null),
        O = (0, c.bG)([M.A], () => M.A.theme),
        {
            draft: ea,
            isSaving: en,
            hasChanges: es,
            saveError: ei,
            previewGuildId: er,
            origin: eu,
        } = (0, c.cf)([U.Ay], () => ({
            draft: U.Ay.draft,
            isSaving: U.Ay.isSaving,
            hasChanges: U.Ay.hasChanges(),
            saveError: U.Ay.saveError,
            previewGuildId: U.Ay.guildId,
            origin: U.Ay.origin,
        })),
        ed = eu === U.v5.PERK_MODAL ? E.A.GUILD_POWERUPS_OVERVIEW : E.A.GUILD_POWERUPS_GUILD_SETTINGS_GUILD_THEME,
        { analyticsLocations: ec } = (0, y.Ay)(ed),
        eo = (0, c.bG)([k.A], () => (null == er ? void 0 : k.A.getStateForGuild(er)?.allPowerups[r.d0]), [er]),
        em = (0, L.A)(er),
        ef = (0, c.bG)([k.A], () => null == er || k.A.hasFetchedPowerupCatalog(er), [er]),
        eh = (function (e) {
            let l = e?.customUserThemeSettings?.colors?.[0];
            if (null != l) return l;
            let t = (0, P.Yt)(e?.presetId),
                a = null != t ? (0, P.oE)(t).color : P.a0;
            return (0, P.w3)((0, P._k)(a, Y(a)));
        })(ea),
        eg = (function (e) {
            let l = e?.customUserThemeSettings?.baseMix;
            if (null != l) return l;
            let t = (0, P.Yt)(e?.presetId);
            return null != t ? (0, P.oE)(t).baseMix : P.BC;
        })(ea),
        ex = q(eh),
        ev = B(eh),
        eb = n.useMemo(() => (0, P.z3)(eh, O), [eh, O]),
        ep = n.useMemo(
            () =>
                (function (e, l) {
                    let { minTone: t, maxTone: a } = (0, P.It)(l),
                        n = i()(e),
                        s = q(e),
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
                })(eh, O),
            [eh, O],
        ),
        { key: eN, handleInternalChange: eA } = Q(ex),
        { key: eE, handleInternalChange: ey } = Q(ev),
        { key: ej, handleInternalChange: eG } = Q(eg),
        eC = n.useCallback((e, l) => {
            (0, V.t$)({ colors: [e], gradientAngle: 0, baseMix: l });
        }, []),
        eI = n.useCallback((e) => {
            (0, V.GC)(e.id);
        }, []),
        ek = n.useCallback(() => {
            let e = (0, P.XY)();
            eC(e.color, e.baseMix);
        }, [eC]),
        eL = n.useCallback(() => {
            let { guildId: e, original: l, originalEnabled: t, origin: a } = U.Ay;
            null != e &&
                null != a &&
                (0, V.tA)({ guildId: e, draft: l, original: l, draftEnabled: t, originalEnabled: t, origin: a });
        }, []),
        ew = n.useCallback(() => {
            let { guildId: e, origin: l } = U.Ay;
            (s.current = !0),
                (0, V.WV)(),
                (0, T.XG)(),
                (0, j.Jp)(),
                null != e &&
                    (l === U.v5.GUILD_SETTINGS
                        ? G.A.open(e, J.BEX.GUILD_THEME, E.A.GUILD_POWERUPS_GUILD_SETTINGS_GUILD_THEME)
                        : l === U.v5.PERK_MODAL && (0, w.A)(e, E.A.GUILD_POWERUPS_OVERVIEW, r.d0));
        }, []),
        eS = n.useCallback(async () => {
            await (0, V.HN)(), (s.current = !0), (0, T.XG)(), (0, j.Jp)();
        }, []),
        eT = n.useCallback(() => {
            (0, m.A)({
                title: H.intl.string(X.default.H8idcP),
                subtitle: H.intl.string(X.default["0LL6FX"]),
                confirmText: H.intl.string(H.t["cY+Oob"]),
                cancelText: H.intl.string(H.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async (e) => {
                    try {
                        await eS();
                    } catch (l) {
                        throw (e(z(l)), l);
                    }
                },
            });
        }, [eS]),
        eM = n.useCallback(async () => {
            if ((W(null), null == er)) return void W(H.intl.string(H.t.fEptJP));
            if (K(er)) {
                if (F(er)) return void eT();
                f(!0);
                try {
                    if (
                        (await (F(er)
                            ? Promise.resolve()
                            : new Promise((e, l) => {
                                  let t = new o.Ep();
                                  function a() {
                                      t.stop(), _.A.removeChangeListener(n);
                                  }
                                  function n() {
                                      F(er) && (a(), e());
                                  }
                                  t.start(1e4, () => {
                                      a(), l(Error("Timed out waiting for Guild Theme feature."));
                                  }),
                                      _.A.addChangeListener(n),
                                      n();
                              })),
                        !K(er))
                    )
                        return;
                    eT();
                } catch (e) {
                    W(z(e));
                } finally {
                    f(!1);
                }
            }
        }, [eT, er]),
        e_ = n.useCallback((e) => {
            W(e ?? null);
        }, []),
        eR = (0, c.bG)([R.A], () => R.A.getGuildId()),
        eP = null != er && eR !== er;
    n.useEffect(() => {
        null != er &&
            (k.A.shouldFetchCatalogForGuild(er) && (0, I.AK)(er), k.A.shouldFetchPowerupsForGuild(er) && (0, I.Xd)(er));
    }, [er]),
        n.useEffect(() => {
            eP && ((s.current = !0), (0, V.WV)(), (0, T.XG)(), (0, j.Jp)());
        }, [eP]),
        n.useEffect(() => {
            if (null == er) return;
            let { draft: e, draftEnabled: l } = U.Ay;
            (l && (0, D.Om)(e)) || (0, V.GC)(P.Zq["0"].id);
        }, [er]),
        n.useEffect(() => {
            null == er && ((0, T.XG)(), (0, j.Jp)());
        }, [er]),
        n.useEffect(
            () => () => {
                (0, T.XG)(), s.current || U.Ay.isAwaitingGuildUpdate || (0, V.WV)();
            },
            [],
        );
    let eV = en || d,
        eU = !em && null == eo,
        eD = eV || (!em && !ef),
        eW = null != er && ef && eU,
        eJ = eV || !es || null == ea || null == er || eU,
        eO = C ?? ei ?? (eW ? H.intl.string(H.t.fEptJP) : null),
        eH = (0, a.jsx)(h.$, {
            variant: "secondary",
            size: "md",
            fullWidth: !0,
            disabled: eV,
            onClick: ew,
            text: H.intl.string(H.t["13/7kX"]),
        });
    return (0, a.jsxs)("div", {
        className: $.kL,
        "data-app-right-panel": !0,
        children: [
            (0, a.jsx)(g.Ip, {
                className: $.XG,
                children: (0, a.jsxs)("div", {
                    className: $.rf,
                    children: [
                        (0, a.jsx)(x.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: H.intl.string(X.default["/6NbRv"]),
                        }),
                        (0, a.jsxs)("div", {
                            className: $.uW,
                            children: [
                                (0, a.jsx)(v.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    className: $.a9,
                                    children: H.intl.string(X.default.zry4l5),
                                }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: $.yV,
                                    children: H.intl.string(X.default.HkvkHP),
                                }),
                                (0, a.jsx)(et, {}),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: $.uW,
                            children: [
                                (0, a.jsx)(v.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    className: $.a9,
                                    children: H.intl.string(Z.default.uSL2Gy),
                                }),
                                (0, a.jsx)(ee, {
                                    background:
                                        "linear-gradient(90deg, rgb(255 0 0) 0%, rgb(255 255 0) 16.66%, rgb(0 255 0) 33.33%, rgb(0 255 255) 50%, rgb(0 0 255) 66.66%, rgb(255 0 255) 83.33%, rgb(255 0 0) 100%)",
                                    color: eb,
                                    controlKey: eN,
                                    min: 0,
                                    max: 359,
                                    defaultValue: ex,
                                    ariaLabel: H.intl.string(Z.default.uSL2Gy),
                                    onValuePreview: eA,
                                    onValueCommit: (e) => {
                                        let l = (0, P.w3)((0, P.sR)(eh, e));
                                        eA(q(l)), eC(l, eg);
                                    },
                                }),
                                (0, a.jsx)(ee, {
                                    background: ep,
                                    color: eb,
                                    controlKey: eE,
                                    min: P.wS,
                                    max: P.iq,
                                    defaultValue: ev,
                                    ariaLabel: H.intl.string(Z.default.uSL2Gy),
                                    onValuePreview: ey,
                                    onValueCommit: (e) => {
                                        let l = (0, P.w3)((0, P._k)(eh, P.wS + P.iq - e));
                                        ey(B(l)), eC(l, eg);
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
                                            (0, a.jsx)(v.E, {
                                                id: u,
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: $.KF,
                                                children: H.intl.string(Z.default.xlXkaL),
                                            }),
                                            (0, a.jsx)(v.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: $.rv,
                                                children: `${Math.round(eg)}%`,
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
                                            initialValue: eg,
                                            defaultValue: eg,
                                            onValueRender: (e) => `${Math.round(e)}%`,
                                            onValueChange: (e) => {
                                                let l = Math.round(e);
                                                (l !== eg || ea?.customUserThemeSettings != null) && (eG(l), eC(eh, l));
                                            },
                                        },
                                        ej,
                                    ),
                                ],
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: $.uW,
                            children: [
                                (0, a.jsx)(v.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    className: $.a9,
                                    children: H.intl.string(X.default.jSrqR2),
                                }),
                                (0, a.jsx)("div", {
                                    className: $.$k,
                                    children: P.Zq.map((e) =>
                                        (0, a.jsx)(
                                            el,
                                            {
                                                preset: e,
                                                selected: ea?.presetId === e.id,
                                                disabled: eV,
                                                onSelect: () => eI(e),
                                                theme: O,
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
                                (0, a.jsx)(h.$, {
                                    buttonRef: t,
                                    variant: "secondary",
                                    size: "md",
                                    fullWidth: !0,
                                    disabled: eV,
                                    onClick: ek,
                                    text: H.intl.string(Z.default.c9MBEH),
                                    icon: l
                                        ? { type: "icon", asset: p.j }
                                        : {
                                              type: "rive",
                                              asset: N.m,
                                              riveProps: {
                                                  dataBinding: { fill: A.A.colors.ICON_STRONG },
                                                  eventTargetRef: t,
                                              },
                                          },
                                }),
                                (0, a.jsx)(h.$, {
                                    variant: "secondary",
                                    size: "md",
                                    fullWidth: !0,
                                    disabled: eV || !es,
                                    onClick: eL,
                                    text: H.intl.string(H.t.yBZMsQ),
                                }),
                            ],
                        }),
                        null != eO &&
                            (0, a.jsx)("div", {
                                role: "alert",
                                children: (0, a.jsx)(v.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-feedback-critical",
                                    className: $.z3,
                                    children: eO,
                                }),
                            }),
                    ],
                }),
            }),
            (0, a.jsx)("div", {
                className: $.qr,
                children:
                    em || null == eo || null == er
                        ? (0, a.jsxs)("div", {
                              className: $.zt,
                              children: [
                                  eH,
                                  (0, a.jsx)("span", {
                                      className: $._l,
                                      children: (0, a.jsx)(h.$, {
                                          variant: "primary",
                                          size: "md",
                                          fullWidth: !0,
                                          loading: eD,
                                          disabled: eJ,
                                          onClick: eM,
                                          text: H.intl.string(H.t["1Qm822"]),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsxs)("div", {
                              className: $.Wz,
                              children: [
                                  (0, a.jsx)(y.f5, {
                                      value: ec,
                                      children: (0, a.jsx)(S.A, {
                                          guildId: er,
                                          powerup: eo,
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

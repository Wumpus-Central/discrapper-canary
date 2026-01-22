n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: () => eo,
        OAuth2AuthorizePage: () => es,
        getOAuth2AuthorizeProps: () => ep,
        openOAuth2Modal: () => ef,
        openOAuth2ModalWithCreateGuildModal: () => ed,
        useOAuth2AuthorizeForm: () => ec,
    }),
    n(747238),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(65821),
    n(638769),
    n(938796),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(960488),
    l = n(172218),
    c = n(607399),
    u = n(485845),
    d = n(179771),
    f = n(136722),
    p = n(665260),
    _ = n(158954),
    h = n(311907),
    m = n(192308),
    g = n(732955),
    E = n(397927),
    b = n(830215),
    y = n(58149),
    O = n(269815),
    A = n(537569),
    v = n(627363),
    S = n(224750),
    I = n(62447),
    T = n(854378),
    C = n(272613),
    N = n(49463),
    R = n(14509),
    w = n(976860),
    P = n(611010),
    D = n(427157),
    x = n(961350),
    L = n(488926),
    j = n(998218),
    M = n(123677),
    k = n(716965),
    U = n(332934),
    G = n(376092),
    V = n(647053),
    F = n(671523),
    B = n(774363),
    H = n(404035),
    Y = n(864721),
    W = n(629442),
    K = n(54605),
    z = n(189880),
    q = n(991054),
    X = n(321987),
    Z = n(595244),
    Q = n(618865),
    $ = n(652215),
    J = n(613057),
    ee = n(985018),
    et = n(283872);
function en(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function er(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                en(e, t, n[t]);
            });
    }
    return e;
}
function ei(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function ea(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ei(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function es() {
    let e = (0, o.zy)(),
        t = i.useMemo(() => (0, M._)(e.search), [e.search]);
    (0, O.A)();
    let a = !e.search.includes("response_type"),
        [s, l] = i.useState(!1),
        u = i.useRef(!1),
        [d, f] = i.useState(null),
        p = !c.Fr && !s && (a || !x.default.isAuthenticated());
    if (
        (i.useEffect(() => {
            if (c.Ct && a) {
                let t = new URL("discord://action/oauth2/authorize");
                (t.search = e.search), window.open(t.toString(), "_self");
            } else
                c.Fr ||
                    (!a && x.default.isAuthenticated()) ||
                    u.current ||
                    ((u.current = !0),
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((t) => {
                            let { default: n } = t;
                            if (a)
                                n.request($.e$_.DEEP_LINK, {
                                    type: J.XK.OAUTH2,
                                    params: { search: e.search },
                                })
                                    .then((e) => {
                                        f(null != e && e);
                                    })
                                    .catch(() => f(!1))
                                    .then(() => n.disconnect());
                            else {
                                f(!0);
                                let t = new URLSearchParams(e.search);
                                n.request($.e$_.AUTHORIZE, {
                                    client_id: t.get("client_id"),
                                    scope: t.get("scope"),
                                    response_type: t.get("response_type"),
                                    redirect_uri: t.get("redirect_uri"),
                                    code_challenge: t.get("code_challenge"),
                                    code_challenge_method: t.get("code_challenge_method"),
                                    state: t.get("state"),
                                    permissions: t.get("permissions"),
                                    guild_id: t.get("guild_id"),
                                    channel_id: t.get("channel_id"),
                                    prompt: t.get("prompt"),
                                    disable_guild_select: t.get("disable_guild_select"),
                                    integration_type: t.get("integration_type"),
                                    nonce: t.get("nonce"),
                                })
                                    .then((e) => {
                                        let { location: t } = e;
                                        t && (window.location.href = t);
                                    })
                                    .catch(() => f(!1))
                                    .then(() => n.disconnect());
                            }
                        }));
        }, [e.search, a]),
        p && !1 !== d)
    ) {
        let e;
        return (
            (e =
                !0 === d
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(T.hE, { children: ee.intl.string(ee.t.csrAMJ) }),
                              (0, r.jsx)(T.tK, {
                                  children: a ? ee.intl.string(ee.t["m1+IBn"]) : ee.intl.string(ee.t.kRzrSO),
                              }),
                              (0, r.jsx)(g.$nd, {
                                  onClick: () => l(!0),
                                  variant: "primary",
                                  text: ee.intl.string(ee.t.fIv16B),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(T.hE, { children: ee.intl.string(ee.t["Z+hCVU"]) }),
                              (0, r.jsx)(E.y$y, {}),
                          ],
                      })),
            (0, r.jsx)(X.$, {
                removeChildWrapper: !0,
                children: (0, r.jsx)("div", {
                    className: et.ah,
                    children: e,
                }),
            })
        );
    }
    return (0, r.jsx)(X.$, {
        removeChildWrapper: !0,
        children: (0, r.jsx)(
            eo,
            ea(er({ transitionState: _.ip4.ENTERED }, t), {
                showLogout: !0,
                isExternalStandaloneOAuthPage: !0,
                hideHeader: !0,
            }),
        ),
    });
}
function eo(e) {
    let {
            label: t,
            title: n,
            subtitle: i,
            header: a,
            body: o,
            actions: l,
            nextStep: c,
            appDetails: u,
            hasContentBackground: d,
            noPadding: f,
            modalSize: p,
        } = ec(er({}, e)),
        _ = A.v.useExperiment({ location: "oauth2_authorize" }),
        h =
            null != a || null != o || null != u
                ? (0, r.jsxs)("div", {
                      className: et.Gq,
                      children: [
                          a,
                          (0, r.jsxs)("div", {
                              className: et.FG,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: s()(et.Qs, d ? et.cw : null, f ? et.pN : null),
                                      children: [o, null != c || _.enabled ? null : u],
                                  }),
                                  null == c && _.enabled
                                      ? (0, r.jsx)("div", {
                                            className: s()(et.Qs, d ? et.cw : null, f ? et.pN : null),
                                            children: u,
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  })
                : null;
    return (0, r.jsx)(
        X.f,
        ea(er({}, e), {
            onClose: () => {
                var t;
                return Promise.resolve(null == (t = e.onClose) ? void 0 : t.call(e));
            },
            size: p,
            actions: l,
            title: n,
            subtitle: i,
            "aria-label": t,
            children: h,
        }),
    );
}
function el() {
    return (0, r.jsx)("div", {
        className: et.g4,
        children: (0, r.jsx)(E.y$y, { className: et.u1 }),
    });
}
function ec(e) {
    var t, n, a, s, c, _, m, g;
    let O,
        T,
        C,
        R,
        X,
        {
            clientId: J,
            responseType: en,
            redirectUri: er,
            codeChallenge: ei,
            codeChallengeMethod: ea,
            state: es,
            nonce: eo,
            prompt: ec,
            authorizations: eu,
            scopes: ed,
            permissions: ef,
            guildId: ep,
            channelId: e_,
            integrationType: eh,
            disableGuildSelect: em = !1,
            showLogout: eg = !1,
            cancelCompletesFlow: eE = !0,
            isTrustedName: eb = !1,
            isEmbeddedFlow: ey = !1,
            callback: eO,
            callbackWithoutPost: eA,
            onClose: ev,
            disclosures: eS,
            isExternalStandaloneOAuthPage: eI = !1,
            isTwoWayLinkDiscordConsent: eT = !1,
        } = e,
        eC = null != eh ? (null == eu ? void 0 : eu.get(eh)) : void 0,
        eN = (0, o.zy)(),
        eR = (0, h.bG)([N.A], () => N.A.hasLoadedExperiments);
    i.useEffect(() => {
        x.default.isAuthenticated() && !eR && b.A.getExperiments();
    }, [eR]);
    let [ew, eP] = i.useState(null),
        [eD, ex] = i.useState(null),
        [eL, ej] = i.useState(null),
        [eM, ek] = i.useState(!1),
        [eU, eG] = i.useState(!1),
        eV = null == ew ? void 0 : ew.guilds,
        [eF, eB] = i.useState(null != ep ? ep : null),
        [eH, eY] = i.useState(null != e_ ? e_ : null),
        [eW, eK] = i.useState(L.x3),
        [ez, eq] = i.useState(!1),
        eX = i.useMemo(
            () => ((null == ew ? void 0 : ew.user) != null ? new D.A(ew.user) : null),
            [null == ew ? void 0 : ew.user],
        ),
        eZ = (0, I.A)(null != (t = null == ew ? void 0 : ew.application) ? t : null),
        eQ = i.useMemo(() => (null == eV ? void 0 : eV.find((e) => e.id === eF)), [eV, eF]),
        [e$, eJ] = i.useState(null),
        e0 = i.useMemo(() => {
            var e;
            return (
                null == eC && null == eh && (null != (e = null == ed ? void 0 : ed.length) ? e : 0) === 0 && null == er
            );
        }, [eC, null == ed ? void 0 : ed.length, er, eh]),
        [e1, e2] = i.useState(null);
    i.useEffect(() => {
        e0 && v.Ay.fetchApplication(J).then((e) => e2(P.Ay.createFromServer(e)));
    }, [J, e0]);
    let e3 = i.useMemo(() => {
            var e, t;
            return null == e$
                ? null
                : null == e1 || null == (t = e1.integrationTypesConfig) || null == (e = t[e$])
                  ? void 0
                  : e.oauth2InstallParams;
        }, [null == e1 ? void 0 : e1.integrationTypesConfig, e$]),
        e6 = A.v.useExperiment({ location: "oauth2_authorize" }),
        { requestedScopes: e4, accountScopes: e5 } = i.useMemo(() => {
            let e = e0 ? (null == e3 ? void 0 : e3.scopes) : ed,
                t = (0, M.e)(null != e ? e : []),
                n = V.k$.filter((e) => t.includes(e));
            return {
                requestedScopes: t,
                accountScopes: n,
            };
        }, [null == e3 ? void 0 : e3.scopes, ed, e0]),
        e7 = i.useMemo(() => {
            var e;
            let t = e0 ? f.iu(null != (e = null == e3 ? void 0 : e3.permissions) ? e : 0) : ef;
            return null != t ? t : L.x3;
        }, [null == e3 ? void 0 : e3.permissions, ef, e0]),
        e8 = i.useRef(!1),
        [e9, te] = i.useState(null != eS ? eS : []),
        [tt, tn] = i.useState(null != eS && eS.length > 0);
    i.useEffect(() => {
        if (e8.current) return;
        let e = async () => {
            e8.current = !0;
            try {
                let { disclosures: e, allAcked: t } = await (0, S.vG)(J);
                tn(!t), te(e);
            } catch (n) {
                let { status: e, body: t } = n;
                if (401 === e) return void (0, k.Vh)(eN, "oauth2_error_failed_disclosures");
                ej(
                    Error(
                        null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0]),
                    ),
                );
            } finally {
                e8.current = !1;
            }
        };
        if (null == eS) {
            if (!x.default.isAuthenticated()) return void (0, k.Vh)(eN, "oauth2_error_not_authenticated");
            e();
        }
    }, [J, eN, eS, te, ej, tn, ex]);
    let tr = i.useCallback(
            async (e) => {
                if (null != eA) {
                    ek(!0), eA(e);
                    return;
                }
                if (!e && !eE) {
                    null != eO &&
                        (eO({
                            application: null == ew ? void 0 : ew.application,
                            guild: eQ,
                        }),
                        null == ev || ev());
                    return;
                }
                if (null == e$) return void ej(Error("No integration type was selected."));
                try {
                    ek(!0);
                    let n = await (0, k.Gq)({
                        authorize: e,
                        clientId: J,
                        scopes: e4,
                        responseType: en,
                        redirectUri: er,
                        codeChallenge: ei,
                        codeChallengeMethod: ea,
                        state: es,
                        nonce: eo,
                        integrationType: e$,
                        permissions: f.TF(e7, eW),
                        guildId: e$ === u.b.GUILD_INSTALL && null != eF ? eF : void 0,
                        channelId: e$ === u.b.GUILD_INSTALL && null != eH ? eH : void 0,
                        dmSettings: { allowMobilePush: ez },
                    });
                    if ((e && (await (0, S.Yx)(J, e9)), null != eO))
                        eO({
                            application: null == ew ? void 0 : ew.application,
                            location: n.location,
                            guild: eQ,
                        }),
                            null == ev || ev();
                    else if (null != n.location) {
                        var t;
                        let e = null == (t = j.A.toURLSafe(n.location)) ? void 0 : t.pathname;
                        j.A.isDiscordUrl(n.location) && e === $.BVt.OAUTH2_AUTHORIZED
                            ? (0, w.pX)($.BVt.OAUTH2_AUTHORIZED, {
                                  state: {
                                      application: null == ew ? void 0 : ew.application,
                                      guild: eQ,
                                  },
                              })
                            : (window.location = n.location);
                    } else ek(!1);
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && "" !== e.message ? ej(Error(e.message)) : ej(e),
                        ex("AUTHORIZE_SCOPES"),
                        ek(!1);
                }
            },
            [
                eA,
                eE,
                eO,
                null == ew ? void 0 : ew.application,
                eQ,
                ev,
                J,
                e4,
                en,
                er,
                ei,
                ea,
                es,
                eo,
                e7,
                eW,
                eF,
                e$,
                eH,
                e9,
                ez,
            ],
        ),
        ti = i.useRef(!1),
        ta = i.useCallback(async () => {
            if (!x.default.isAuthenticated()) return void (0, k.Vh)(eN, "oauth2_error_not_authenticated");
            if (!e8.current && !ti.current) {
                ti.current = !0;
                try {
                    let e =
                        null != eC
                            ? eC
                            : await (0, k.qY)({
                                  clientId: J,
                                  scopes: e4,
                                  responseType: en,
                                  redirectUri: er,
                                  codeChallenge: ei,
                                  codeChallengeMethod: ea,
                                  state: es,
                                  nonce: eo,
                                  integrationType: null != e$ ? e$ : void 0,
                              });
                    eP((0, U._)(e)),
                        ec === F.l.NONE && e.authorized && !tt && tr(!0),
                        (0, y.zV)($.HAw.OAUTH2_AUTHORIZE_VIEWED, {
                            application_id: e.application.id,
                            mobile_push_notification_default_setting: !1,
                        });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, k.Vh)(eN, "oauth2_error_unauthorized");
                    ej(
                        Error(
                            null != t.message
                                ? t.message
                                : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0]),
                        ),
                    );
                } finally {
                    ti.current = !1;
                }
            }
        }, [eN, eC, J, e4, en, er, ei, ea, es, eo, e$, ec, tr, tt]),
        ts = i.useMemo(() => {
            var e;
            return null != e1 && e0
                ? Object.entries(null != (e = e1.integrationTypesConfig) ? e : {})
                      .filter((e) => {
                          let [t, n] = e;
                          return null != n.oauth2InstallParams;
                      })
                      .map((e) => {
                          let [t, n] = e;
                          return Number(t);
                      })
                : [];
        }, [e1, e0]),
        to = i.useRef(null);
    i.useEffect(() => {
        eD !== to.current &&
            ((to.current = eD),
            (0, y.zV)($.HAw.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eD,
                application_id: J,
                integration_type: e$,
                scopes: e4,
                permissions: e7.toString(),
                mobile_push_notification_default_setting: !1,
            }));
    }, [J, e$, e7, e4, eD]),
        i.useEffect(() => {
            if (null == eD && (!e0 || null != e1) && eR)
                if (null != eC) {
                    var e;
                    eJ(null != (e = eC.integration_type) ? e : u.b.GUILD_INSTALL), ex("AUTHORIZE_SCOPES");
                } else
                    ts.length > 1
                        ? ex("SELECT_INSTALL_TYPE")
                        : (1 === ts.length ? eJ(ts[0]) : null != eh ? eJ(eh) : eJ(u.b.GUILD_INSTALL),
                          ex("AUTHORIZE_SCOPES"));
        }, [eC, ts, e1, e0, eh, eD, eR]),
        i.useEffect(() => {
            if (null == e$ || null != ew || null != eL) return;
            e$ === u.b.USER_INSTALL && (eB(null), eY(null));
            let e = e4.filter((e) => !V.gX.includes(e));
            0 === e4.length
                ? ej(Error("No scopes were provided."))
                : e.length > 0
                  ? ej(Error("Invalid scope: ".concat(e[0])))
                  : (0, G.F7)(e7)
                    ? ej(Error("Invalid permission(s) provided."))
                    : ta();
        }, [tt, ta, e4, e7, e$, ew, eL]);
    let tl = i.useCallback((e) => {
            e && eG(!0);
        }, []),
        tc = (0, l.K)(tl);
    if (eL instanceof Error)
        return eI
            ? { body: (0, r.jsx)(Z.gz, { message: eL.message }) }
            : eT
              ? {
                    label: ee.intl.string(ee.t.j2d6Km),
                    header: (0, r.jsx)(E.Text, {
                        variant: "text-lg/bold",
                        color: "text-strong",
                        children: ee.intl.string(ee.t.j2d6Km),
                    }),
                    body: (0, r.jsx)(E.Text, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: eL.message,
                    }),
                    actions: [
                        {
                            onClick: ev,
                            text: ee.intl.string(ee.t.cpT0Cq),
                        },
                    ],
                    noPadding: !0,
                }
              : {
                    title: ee.intl.string(ee.t.j2d6Km),
                    subtitle: eL.message,
                    actions: [
                        {
                            onClick: ev,
                            text: ee.intl.string(ee.t.cpT0Cq),
                        },
                    ],
                };
    let tu = (e) => {
            eJ(e), eP(null), ex("AUTHORIZE_SCOPES");
        },
        td = (e, t) => {
            eK((n) => (e ? f.TF(n, t) : f.WQ(n, t)));
        },
        tf = !1,
        tp = !1,
        t_ = !0,
        th = !0,
        tm = !0,
        tg = !1;
    switch (eD) {
        case null:
            return {
                label: ee.intl.string(ee.t.ZTNur7),
                body: (0, r.jsx)(el, {}),
            };
        case "SELECT_INSTALL_TYPE":
            if (null == e1)
                return {
                    label: ee.intl.string(ee.t.ZTNur7),
                    body: (0, r.jsx)(el, {}),
                };
            (O = (0, r.jsx)(q.A, {
                application: e1,
                onSelect: tu,
            })),
                (t_ = !1),
                (th = !1),
                (tm = !1),
                (tg = !0);
            break;
        case "AUTHORIZE_SCOPES":
            if (null == ew || null == eX || null == e$)
                return {
                    label: ee.intl.string(ee.t.ZTNur7),
                    body: (0, r.jsx)(el, {}),
                };
            let tE = null == eL || eL instanceof Error ? {} : eL,
                tb = null == eV ? void 0 : eV.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                ty = e$ === u.b.GUILD_INSTALL && e4.includes(d.F.WEBHOOK_INCOMING),
                tO =
                    ty ||
                    (e$ === u.b.GUILD_INSTALL && (e4.includes(d.F.BOT) || e4.includes(d.F.APPLICATIONS_COMMANDS))),
                tA =
                    (0, p.Lt)(null != (n = ew.application.flags) ? n : 0, $.gfo.EMBEDDED) &&
                    e$ === u.b.USER_INSTALL &&
                    e6.enabled;
            (O = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(H.A, {
                        application: ew.application,
                        accountScopes: e5,
                    }),
                    (0, r.jsx)(Y.A, {
                        application: ew.application,
                        accountScopes: e5,
                        requestedScopes: e4,
                        integrationType: e$,
                        errors: tE,
                        isTrustedName: eb || eZ,
                        noDivider: !tA && !tO && !ty && e6.enabled,
                    }),
                    tA
                        ? (0, r.jsx)("div", {
                              className: et._j,
                              children: (0, r.jsx)(E.dOG, {
                                  label: ee.intl.string(ee.t["Pkw//o"]),
                                  onChange: eq,
                                  description: ee.intl.string(ee.t.hw1nKf),
                                  checked: ez,
                              }),
                          })
                        : null,
                    (0, r.jsx)("div", {
                        className: et.sL,
                        ref: tc,
                    }),
                    tO
                        ? (0, r.jsx)(K.A, {
                              error: (null != (a = null != (s = tE[d.F.BOT]) ? s : tE[d.F.APPLICATIONS_COMMANDS])
                                  ? a
                                  : [])[0],
                              selectedGuildId: eF,
                              onGuildChange: eB,
                              guilds: null != tb ? tb : [],
                              disabled: "" !== eF && null != eF && !0 === em,
                          })
                        : null,
                    ty
                        ? (0, r.jsx)(Q.A, {
                              error: (null != (c = tE[d.F.WEBHOOK_INCOMING]) ? c : [])[0],
                              selectedChannelId: eH,
                              selectedGuildId: eF,
                              onChannelChange: eY,
                          })
                        : null,
                ],
            })),
                e4.includes(d.F.BOT) && !f.aI(e7, L.x3) && (C = "AUTHORIZE_BOT_PERMISSIONS"),
                ts.length > 1 && (T = "SELECT_INSTALL_TYPE"),
                (tp = (tO && null == eQ) || (ty && null == eH)),
                (tf = !0);
            break;
        case "AUTHORIZE_BOT_PERMISSIONS":
            if (null == ew)
                return {
                    label: ee.intl.string(ee.t.ZTNur7),
                    body: (0, r.jsx)(el, {}),
                };
            (O = (0, r.jsx)(W.A, {
                application: ew.application,
                permissions: e7,
                deniedPermissions: eW,
                onPermissionsChange: td,
                guild: eQ,
            })),
                (T = "AUTHORIZE_SCOPES"),
                (tf = !0);
    }
    let tv = [];
    if (t_ && null != ew) {
        let e =
            null != (_ = null == ew ? void 0 : ew.application.approximate_guild_count)
                ? _
                : null == ew || null == (g = ew.bot)
                  ? void 0
                  : g.approximate_guild_count;
        R = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(B.A, {
                    application: ew.application,
                    scopes: e4,
                    disclosures: e9,
                    redirectUri: null != (m = ew.redirect_uri) ? m : null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: ey,
                }),
                (0, r.jsx)("div", {
                    className: et.sL,
                    ref: tc,
                }),
            ],
        });
    }
    return (
        th &&
            null != ew &&
            null != eX &&
            (X = (0, r.jsx)(z.A, {
                user: eX,
                application: ew.application,
                bot: ew.bot,
                accountScopes: e5,
                showLogout: eg || !1,
                location: eN,
                scopes: e4,
            })),
        tm &&
            (tv.push(
                null != T
                    ? {
                          variant: "secondary",
                          onClick: () => ex(T),
                          text: ee.intl.string(ee.t["13/7kX"]),
                      }
                    : {
                          variant: "secondary",
                          onClick: () => tr(!1),
                          text: ee.intl.string(ee.t["ETE/oC"]),
                      },
            ),
            "SELECT_INSTALL_TYPE" !== eD &&
                tv.push(
                    eU
                        ? {
                              onClick: null != C ? () => ex(C) : () => tr(!0),
                              loading: eM,
                              disabled: null == R || tp,
                              text: tp
                                  ? ee.intl.string(ee.t.BwwiSM)
                                  : null != C
                                    ? ee.intl.string(ee.t["3PatSz"])
                                    : ee.intl.string(ee.t["y+/PE9"]),
                          }
                        : {
                              disabled: !0,
                              loading: eM,
                              text: ee.intl.string(ee.t.N22i9F),
                              icon: E.MFz,
                          },
                )),
        {
            header: X,
            body: O,
            actions: tv,
            nextStep: C,
            appDetails: R,
            sendAuthorize: tr,
            hasContentBackground: tf,
            noPadding: tg,
        }
    );
}
function eu(e, t) {
    var n, i;
    if (null == t.location || (null != e.callback && e.callback(t))) return;
    let { host: a, pathname: s, searchParams: o } = null != (n = j.A.toURLSafe(t.location)) ? n : {},
        l = j.A.isDiscordHostname(null != a ? a : null) || window.location.host === a;
    l && s === $.BVt.OAUTH2_AUTHORIZED
        ? (0, m.openModal)((e) =>
              (0, r.jsx)(
                  Z.dR,
                  er(
                      {
                          guild: t.guild,
                          application: t.application,
                      },
                      e,
                  ),
              ),
          )
        : l && (null == s ? void 0 : s.startsWith($.BVt.OAUTH2_ERROR))
          ? (0, m.openModal)((e) => {
                var t, n;
                let i =
                    null !=
                    (t =
                        null != (n = null == o ? void 0 : o.get("error_description"))
                            ? n
                            : null == o
                              ? void 0
                              : o.get("error"))
                        ? t
                        : ee.intl.string(ee.t.mqn873);
                return (
                    Array.isArray(i) && (i = i[0]),
                    (0, r.jsx)(
                        X.f,
                        ea(er({}, e), {
                            children: (0, r.jsx)(Z.gz, {
                                message: i,
                                onClose: e.onClose,
                            }),
                        }),
                    )
                );
            })
          : null == (i = window.open(t.location, "_blank")) || i.focus();
}
function ed(e, t) {
    (0, R._9)() ? C.A.openCreateGuildModal({ onSuccess: (n) => ef(ea(er({}, e), { guildId: n }), t) }) : ef(e, t);
}
function ef(e, t) {
    (0, m.openModal)(
        (t) =>
            (0, r.jsx)(
                eo,
                ea(er({}, t, e), {
                    cancelCompletesFlow: !1,
                    callback: eu.bind(null, e),
                }),
            ),
        { onCloseCallback: t },
    );
}
function ep(e) {
    var t;
    let { hostname: n = "", host: r, pathname: i, search: a } = null != (t = j.A.toURLSafe(e)) ? t : {};
    return null != i &&
        null != a &&
        (j.A.isDiscordHostname(n) || r === window.location.host) &&
        (i.startsWith("/api".concat($.Rsh.OAUTH2_AUTHORIZE)) || i.startsWith($.BVt.OAUTH2_AUTHORIZE))
        ? (0, M._)(a)
        : null;
}

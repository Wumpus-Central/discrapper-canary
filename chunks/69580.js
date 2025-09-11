n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: () => es,
        OAuth2AuthorizePage: () => eo,
        getOAuth2AuthorizeProps: () => e_,
        openOAuth2Modal: () => ef,
        openOAuth2ModalWithCreateGuildModal: () => ed,
        useOAuth2AuthorizeForm: () => ec,
    }),
    n(35282),
    n(388685),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(415506),
    n(642613),
    n(997841),
    n(539854);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(843611),
    l = n(873546),
    c = n(373793),
    u = n(243814),
    d = n(149765),
    f = n(442837),
    _ = n(952265),
    p = n(257465),
    h = n(159691),
    m = n(481060),
    g = n(893776),
    E = n(434650),
    b = n(367907),
    y = n(702493),
    O = n(162685),
    v = n(728345),
    I = n(979200),
    T = n(589414),
    S = n(388905),
    A = n(560067),
    C = n(353926),
    N = n(341298),
    R = n(703656),
    P = n(973616),
    w = n(598077),
    D = n(314897),
    x = n(630388),
    L = n(700785),
    j = n(591759),
    k = n(807675),
    M = n(489863),
    U = n(228763),
    G = n(422559),
    B = n(713938),
    Z = n(166148),
    F = n(807989),
    V = n(627799),
    H = n(260430),
    Y = n(668185),
    W = n(407546),
    K = n(41259),
    z = n(28752),
    q = n(787025),
    X = n(397394),
    Q = n(574384),
    J = n(981631),
    $ = n(186901),
    ee = n(388032),
    et = n(565870);
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
function eo() {
    let e = (0, s.TH)(),
        t = i.useMemo(() => (0, k.y)(e.search), [e.search]);
    (0, y.Z)();
    let a = !e.search.includes("response_type"),
        [o, c] = i.useState(!1),
        u = i.useRef(!1),
        [d, f] = i.useState(null),
        _ = !l.tq && !o && (a || !D.default.isAuthenticated());
    if (
        (i.useEffect(() => {
            if (l.eL && a) {
                let t = new URL("discord://action/oauth2/authorize");
                (t.search = e.search), window.open(t.toString(), "_self");
            } else
                l.tq ||
                    (!a && D.default.isAuthenticated()) ||
                    u.current ||
                    ((u.current = !0),
                    Promise.resolve()
                        .then(n.bind(n, 536285))
                        .then((t) => {
                            let { default: n } = t;
                            if (a)
                                n.request(J.Etm.DEEP_LINK, {
                                    type: $.jE.OAUTH2,
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
                                n.request(J.Etm.AUTHORIZE, {
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
        _ && !1 !== d)
    ) {
        let e;
        return (
            (e =
                !0 === d
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(S.Dx, { children: ee.intl.string(ee.t.csrAMD) }),
                              (0, r.jsx)(S.DK, {
                                  children: a ? ee.intl.string(ee.t["m1+IBg"]) : ee.intl.string(ee.t.kRzrSE),
                              }),
                              (0, r.jsx)(h.zxk, {
                                  onClick: () => c(!0),
                                  variant: "primary",
                                  text: ee.intl.string(ee.t.fIv16O),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(S.Dx, { children: ee.intl.string(ee.t["Z+hCVV"]) }),
                              (0, r.jsx)(m.$jN, {}),
                          ],
                      })),
            (0, r.jsx)(q.G, {
                removeChildWrapper: !0,
                children: (0, r.jsx)("div", {
                    className: et.deepLinkContainer,
                    children: e,
                }),
            })
        );
    }
    return (0, r.jsx)(q.G, {
        removeChildWrapper: !0,
        children: (0, r.jsx)(
            es,
            ea(er({ transitionState: p.D.ENTERED }, t), {
                showLogout: !0,
                isExternalStandaloneOAuthPage: !0,
                hideHeader: !0,
            }),
        ),
    });
}
function es(e) {
    let {
            label: t,
            title: n,
            subtitle: i,
            header: a,
            body: s,
            actions: l,
            nextStep: c,
            appDetails: u,
            hasContentBackground: d,
            noPadding: f,
            modalSize: _,
        } = ec(er({}, e)),
        p = O.w.useExperiment({ location: "oauth2_authorize" }),
        h =
            null != a || null != s || null != u
                ? (0, r.jsxs)("div", {
                      className: et.authorize,
                      children: [
                          a,
                          (0, r.jsxs)("div", {
                              className: et.contentWrapper,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: o()(
                                          et.content,
                                          d ? et.contentBackground : null,
                                          f ? et.noPadding : null,
                                      ),
                                      children: [s, null != c || p.enabled ? null : u],
                                  }),
                                  null == c && p.enabled
                                      ? (0, r.jsx)("div", {
                                            className: o()(
                                                et.content,
                                                d ? et.contentBackground : null,
                                                f ? et.noPadding : null,
                                            ),
                                            children: u,
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  })
                : null;
    return (0, r.jsx)(
        q.j,
        ea(er({}, e), {
            onClose: () => {
                var t;
                return Promise.resolve(null == (t = e.onClose) ? void 0 : t.call(e));
            },
            size: _,
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
        className: et.loadingContainer,
        children: (0, r.jsx)(m.$jN, { className: et.spinner }),
    });
}
function ec(e) {
    var t, n, a, o, l, _, p;
    let h,
        y,
        S,
        A,
        N,
        {
            clientId: q,
            responseType: $,
            redirectUri: en,
            codeChallenge: er,
            codeChallengeMethod: ei,
            state: ea,
            nonce: eo,
            prompt: es,
            authorizations: ec,
            scopes: eu,
            permissions: ed,
            guildId: ef,
            channelId: e_,
            integrationType: ep,
            disableGuildSelect: eh = !1,
            showLogout: em = !1,
            cancelCompletesFlow: eg = !0,
            isTrustedName: eE = !1,
            isEmbeddedFlow: eb = !1,
            callback: ey,
            callbackWithoutPost: eO,
            onClose: ev,
            disclosures: eI,
            isExternalStandaloneOAuthPage: eT = !1,
            isTwoWayLinkDiscordConsent: eS = !1,
        } = e,
        eA = null != ep ? (null == ec ? void 0 : ec.get(ep)) : void 0,
        eC = (0, s.TH)(),
        eN = (0, f.e7)([C.Z], () => C.Z.hasLoadedExperiments);
    i.useEffect(() => {
        D.default.isAuthenticated() && !eN && g.Z.getExperiments();
    }, [eN]);
    let [eR, eP] = i.useState(null),
        [ew, eD] = i.useState(null),
        [ex, eL] = i.useState(null),
        [ej, ek] = i.useState(!1),
        [eM, eU] = i.useState(!1),
        eG = null == eR ? void 0 : eR.guilds,
        [eB, eZ] = i.useState(null != ef ? ef : null),
        [eF, eV] = i.useState(null != e_ ? e_ : null),
        [eH, eY] = i.useState(L.Hn),
        [eW, eK] = i.useState(!1),
        ez = i.useMemo(
            () => ((null == eR ? void 0 : eR.user) != null ? new w.Z(eR.user) : null),
            [null == eR ? void 0 : eR.user],
        ),
        eq = (0, T.Z)(null != (t = null == eR ? void 0 : eR.application) ? t : null),
        eX = i.useMemo(() => (null == eG ? void 0 : eG.find((e) => e.id === eB)), [eG, eB]),
        [eQ, eJ] = i.useState(null),
        e$ = i.useMemo(() => {
            var e;
            return (
                null == eA && null == ep && (null != (e = null == eu ? void 0 : eu.length) ? e : 0) === 0 && null == en
            );
        }, [eA, null == eu ? void 0 : eu.length, en, ep]),
        [e0, e1] = i.useState(null);
    i.useEffect(() => {
        e$ && v.ZP.fetchApplication(q).then((e) => e1(P.ZP.createFromServer(e)));
    }, [q, e$]);
    let e2 = i.useMemo(() => {
            var e, t;
            return null == eQ
                ? null
                : null == e0 || null == (t = e0.integrationTypesConfig) || null == (e = t[eQ])
                  ? void 0
                  : e.oauth2InstallParams;
        }, [null == e0 ? void 0 : e0.integrationTypesConfig, eQ]),
        e3 = O.w.useExperiment({ location: "oauth2_authorize" }),
        { requestedScopes: e4, accountScopes: e8 } = i.useMemo(() => {
            let e = e$ ? (null == e2 ? void 0 : e2.scopes) : eu,
                t = (0, k.K)(null != e ? e : []),
                n = B.Qe.filter((e) => t.includes(e));
            return {
                requestedScopes: t,
                accountScopes: n,
            };
        }, [null == e2 ? void 0 : e2.scopes, eu, e$]),
        e5 = i.useMemo(() => {
            var e;
            let t = e$ ? d.vB(null != (e = null == e2 ? void 0 : e2.permissions) ? e : 0) : ed;
            return null != t ? t : L.Hn;
        }, [null == e2 ? void 0 : e2.permissions, ed, e$]),
        e6 = i.useRef(!1),
        [e7, e9] = i.useState(null != eI ? eI : []),
        [te, tt] = i.useState(null != eI && eI.length > 0);
    i.useEffect(() => {
        if (e6.current) return;
        let e = async () => {
            e6.current = !0;
            try {
                let { disclosures: e, allAcked: t } = await (0, I.de)(q);
                tt(!t), e9(e);
            } catch (n) {
                let { status: e, body: t } = n;
                if (401 === e) return void (0, M.c$)(eC, "oauth2_error_failed_disclosures");
                eL(
                    Error(
                        null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0]),
                    ),
                );
            } finally {
                e6.current = !1;
            }
        };
        if (null == eI) {
            if (!D.default.isAuthenticated()) return void (0, M.c$)(eC, "oauth2_error_not_authenticated");
            e();
        }
    }, [q, eC, eI, e9, eL, tt, eD]);
    let tn = i.useCallback(
            async (e) => {
                if (null != eO) {
                    ek(!0), eO(e);
                    return;
                }
                if (!e && !eg) {
                    null != ey &&
                        (ey({
                            application: null == eR ? void 0 : eR.application,
                            guild: eX,
                        }),
                        null == ev || ev());
                    return;
                }
                if (null == eQ) return void eL(Error("No integration type was selected."));
                try {
                    ek(!0);
                    let n = await (0, M.Iq)({
                        authorize: e,
                        clientId: q,
                        scopes: e4,
                        responseType: $,
                        redirectUri: en,
                        codeChallenge: er,
                        codeChallengeMethod: ei,
                        state: ea,
                        nonce: eo,
                        integrationType: eQ,
                        permissions: d.Od(e5, eH),
                        guildId: eQ === c.Y.GUILD_INSTALL && null != eB ? eB : void 0,
                        channelId: eQ === c.Y.GUILD_INSTALL && null != eF ? eF : void 0,
                        dmSettings: { allowMobilePush: eW },
                    });
                    if ((e && (await (0, I.x9)(q, e7)), null != ey))
                        ey({
                            application: null == eR ? void 0 : eR.application,
                            location: n.location,
                            guild: eX,
                        }),
                            null == ev || ev();
                    else if (null != n.location) {
                        var t;
                        let e = null == (t = j.Z.toURLSafe(n.location)) ? void 0 : t.pathname;
                        j.Z.isDiscordUrl(n.location) && e === J.Z5c.OAUTH2_AUTHORIZED
                            ? (0, R.uL)(J.Z5c.OAUTH2_AUTHORIZED, {
                                  state: {
                                      application: null == eR ? void 0 : eR.application,
                                      guild: eX,
                                  },
                              })
                            : (window.location = n.location);
                    } else ek(!1);
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && "" !== e.message ? eL(Error(e.message)) : eL(e),
                        eD("AUTHORIZE_SCOPES"),
                        ek(!1);
                }
            },
            [
                eO,
                eg,
                ey,
                null == eR ? void 0 : eR.application,
                eX,
                ev,
                q,
                e4,
                $,
                en,
                er,
                ei,
                ea,
                eo,
                e5,
                eH,
                eB,
                eQ,
                eF,
                e7,
                eW,
            ],
        ),
        tr = i.useRef(!1),
        ti = i.useCallback(async () => {
            if (!D.default.isAuthenticated()) return void (0, M.c$)(eC, "oauth2_error_not_authenticated");
            if (!e6.current && !tr.current) {
                tr.current = !0;
                try {
                    let e =
                        null != eA
                            ? eA
                            : await (0, M.Ww)({
                                  clientId: q,
                                  scopes: e4,
                                  responseType: $,
                                  redirectUri: en,
                                  codeChallenge: er,
                                  codeChallengeMethod: ei,
                                  state: ea,
                                  nonce: eo,
                                  integrationType: null != eQ ? eQ : void 0,
                              });
                    eP((0, U.d)(e)),
                        es === Z.s.NONE && e.authorized && !te && tn(!0),
                        (0, b.yw)(J.rMx.OAUTH2_AUTHORIZE_VIEWED, {
                            application_id: e.application.id,
                            mobile_push_notification_default_setting: !1,
                        });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, M.c$)(eC, "oauth2_error_unauthorized");
                    eL(
                        Error(
                            null != t.message
                                ? t.message
                                : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0]),
                        ),
                    );
                } finally {
                    tr.current = !1;
                }
            }
        }, [eC, eA, q, e4, $, en, er, ei, ea, eo, eQ, es, tn, te]),
        ta = i.useMemo(() => {
            var e;
            return null != e0 && e$
                ? Object.entries(null != (e = e0.integrationTypesConfig) ? e : {})
                      .filter((e) => {
                          let [t, n] = e;
                          return null != n.oauth2InstallParams;
                      })
                      .map((e) => {
                          let [t, n] = e;
                          return Number(t);
                      })
                : [];
        }, [e0, e$]),
        to = i.useRef(null);
    i.useEffect(() => {
        ew !== to.current &&
            ((to.current = ew),
            (0, b.yw)(J.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: ew,
                application_id: q,
                integration_type: eQ,
                scopes: e4,
                permissions: e5.toString(),
                mobile_push_notification_default_setting: !1,
            }));
    }, [q, eQ, e5, e4, ew]),
        i.useEffect(() => {
            if (null == ew && (!e$ || null != e0) && eN)
                if (null != eA) {
                    var e;
                    eJ(null != (e = eA.integration_type) ? e : c.Y.GUILD_INSTALL), eD("AUTHORIZE_SCOPES");
                } else
                    ta.length > 1
                        ? eD("SELECT_INSTALL_TYPE")
                        : (1 === ta.length ? eJ(ta[0]) : null != ep ? eJ(ep) : eJ(c.Y.GUILD_INSTALL),
                          eD("AUTHORIZE_SCOPES"));
        }, [eA, ta, e0, e$, ep, ew, eN]),
        i.useEffect(() => {
            if (null == eQ || null != eR || null != ex) return;
            eQ === c.Y.USER_INSTALL && (eZ(null), eV(null));
            let e = e4.filter((e) => !B.ak.includes(e));
            0 === e4.length
                ? eL(Error("No scopes were provided."))
                : e.length > 0
                  ? eL(Error("Invalid scope: ".concat(e[0])))
                  : (0, G._$)(e5)
                    ? eL(Error("Invalid permission(s) provided."))
                    : ti();
        }, [te, ti, e4, e5, eQ, eR, ex]);
    let ts = i.useCallback((e) => {
            e && eU(!0);
        }, []),
        tl = (0, E.O)(ts);
    if (ex instanceof Error)
        return eT
            ? { body: (0, r.jsx)(X.Lk, { message: ex.message }) }
            : eS
              ? {
                    label: ee.intl.string(ee.t.j2d6Ki),
                    header: (0, r.jsx)(m.Text, {
                        variant: "text-lg/bold",
                        color: "header-primary",
                        children: ee.intl.string(ee.t.j2d6Ki),
                    }),
                    body: (0, r.jsx)(m.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: ex.message,
                    }),
                    actions: [
                        {
                            onClick: ev,
                            text: ee.intl.string(ee.t.cpT0Cg),
                        },
                    ],
                    noPadding: !0,
                }
              : {
                    title: ee.intl.string(ee.t.j2d6Ki),
                    subtitle: ex.message,
                    actions: [
                        {
                            onClick: ev,
                            text: ee.intl.string(ee.t.cpT0Cg),
                        },
                    ],
                };
    let tc = (e) => {
            eJ(e), eP(null), eD("AUTHORIZE_SCOPES");
        },
        tu = (e, t) => {
            eY((n) => (e ? d.Od(n, t) : d.IH(n, t)));
        },
        td = !1,
        tf = !1,
        t_ = !0,
        tp = !0,
        th = !0,
        tm = !1;
    switch (ew) {
        case null:
            return {
                label: ee.intl.string(ee.t.ZTNur6),
                body: (0, r.jsx)(el, {}),
            };
        case "SELECT_INSTALL_TYPE":
            if (null == e0)
                return {
                    label: ee.intl.string(ee.t.ZTNur6),
                    body: (0, r.jsx)(el, {}),
                };
            (h = (0, r.jsx)(z.Z, {
                application: e0,
                onSelect: tc,
            })),
                (t_ = !1),
                (tp = !1),
                (th = !1),
                (tm = !0);
            break;
        case "AUTHORIZE_SCOPES":
            if (null == eR || null == ez || null == eQ)
                return {
                    label: ee.intl.string(ee.t.ZTNur6),
                    body: (0, r.jsx)(el, {}),
                };
            let tg = null == ex || ex instanceof Error ? {} : ex,
                tE = null == eG ? void 0 : eG.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tb = eQ === c.Y.GUILD_INSTALL && e4.includes(u.x.WEBHOOK_INCOMING),
                ty =
                    tb ||
                    (eQ === c.Y.GUILD_INSTALL && (e4.includes(u.x.BOT) || e4.includes(u.x.APPLICATIONS_COMMANDS))),
                tO =
                    (0, x.yE)(null != (n = eR.application.flags) ? n : 0, J.udG.EMBEDDED) &&
                    eQ === c.Y.USER_INSTALL &&
                    e3.enabled;
            (h = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(V.Z, {
                        application: eR.application,
                        accountScopes: e8,
                    }),
                    (0, r.jsx)(H.Z, {
                        application: eR.application,
                        accountScopes: e8,
                        requestedScopes: e4,
                        integrationType: eQ,
                        errors: tg,
                        isTrustedName: eE || eq,
                        noDivider: !tO && !ty && !tb && e3.enabled,
                    }),
                    tO
                        ? (0, r.jsx)(m.j7V, {
                              hideBorder: !0,
                              onChange: eK,
                              className: et.mobilePushContainer,
                              note: ee.intl.string(ee.t.hw1nKS),
                              value: eW,
                              children: (0, r.jsx)(m.Text, {
                                  variant: "text-sm/medium",
                                  children: ee.intl.string(ee.t["Pkw//v"]),
                              }),
                          })
                        : null,
                    (0, r.jsx)("div", {
                        className: et.intObserver,
                        ref: tl,
                    }),
                    ty
                        ? (0, r.jsx)(W.Z, {
                              error: (null != (o = null != (a = tg[u.x.BOT]) ? a : tg[u.x.APPLICATIONS_COMMANDS])
                                  ? o
                                  : [])[0],
                              selectedGuildId: eB,
                              onGuildChange: eZ,
                              guilds: null != tE ? tE : [],
                              disabled: "" !== eB && null != eB && !0 === eh,
                          })
                        : null,
                    tb
                        ? (0, r.jsx)(Q.Z, {
                              error: (null != (l = tg[u.x.WEBHOOK_INCOMING]) ? l : [])[0],
                              selectedChannelId: eF,
                              selectedGuildId: eB,
                              onChannelChange: eV,
                          })
                        : null,
                ],
            })),
                e4.includes(u.x.BOT) && !d.fS(e5, L.Hn) && (S = "AUTHORIZE_BOT_PERMISSIONS"),
                ta.length > 1 && (y = "SELECT_INSTALL_TYPE"),
                (tf = (ty && null == eX) || (tb && null == eF)),
                (td = !0);
            break;
        case "AUTHORIZE_BOT_PERMISSIONS":
            if (null == eR)
                return {
                    label: ee.intl.string(ee.t.ZTNur6),
                    body: (0, r.jsx)(el, {}),
                };
            (h = (0, r.jsx)(Y.Z, {
                application: eR.application,
                permissions: e5,
                deniedPermissions: eH,
                onPermissionsChange: tu,
                guild: eX,
            })),
                (y = "AUTHORIZE_SCOPES"),
                (td = !0);
    }
    let tv = [];
    if (t_ && null != eR) {
        let e = null == (_ = eR.bot) ? void 0 : _.approximate_guild_count;
        A = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(F.Z, {
                    application: eR.application,
                    scopes: e4,
                    disclosures: e7,
                    redirectUri: null != (p = eR.redirect_uri) ? p : null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: eb,
                }),
                (0, r.jsx)("div", {
                    className: et.intObserver,
                    ref: tl,
                }),
            ],
        });
    }
    return (
        tp &&
            null != eR &&
            null != ez &&
            (N = (0, r.jsx)(K.Z, {
                user: ez,
                application: eR.application,
                bot: eR.bot,
                accountScopes: e8,
                showLogout: em || !1,
                location: eC,
                scopes: e4,
            })),
        th &&
            (tv.push(
                null != y
                    ? {
                          variant: "secondary",
                          onClick: () => eD(y),
                          text: ee.intl.string(ee.t["13/7kZ"]),
                      }
                    : {
                          variant: "secondary",
                          onClick: () => tn(!1),
                          text: ee.intl.string(ee.t["ETE/oK"]),
                      },
            ),
            "SELECT_INSTALL_TYPE" !== ew &&
                tv.push(
                    eM
                        ? {
                              onClick: null != S ? () => eD(S) : () => tn(!0),
                              loading: ej,
                              disabled: null == A || tf,
                              text: tf
                                  ? ee.intl.string(ee.t.BwwiSE)
                                  : null != S
                                    ? ee.intl.string(ee.t["3PatS0"])
                                    : ee.intl.string(ee.t["y+/PEx"]),
                          }
                        : {
                              disabled: !0,
                              loading: ej,
                              text: ee.intl.string(ee.t.N22i9P),
                              icon: m.cQm,
                          },
                )),
        {
            header: N,
            body: h,
            actions: tv,
            nextStep: S,
            appDetails: A,
            sendAuthorize: tn,
            hasContentBackground: td,
            noPadding: tm,
        }
    );
}
function eu(e, t) {
    var n, i;
    if (null == t.location || (null != e.callback && e.callback(t))) return;
    let { host: a, pathname: o, searchParams: s } = null != (n = j.Z.toURLSafe(t.location)) ? n : {},
        l = j.Z.isDiscordHostname(null != a ? a : null) || window.location.host === a;
    l && o === J.Z5c.OAUTH2_AUTHORIZED
        ? (0, _.h7)((e) =>
              (0, r.jsx)(
                  X.jO,
                  er(
                      {
                          guild: t.guild,
                          application: t.application,
                      },
                      e,
                  ),
              ),
          )
        : l && (null == o ? void 0 : o.startsWith(J.Z5c.OAUTH2_ERROR))
          ? (0, _.h7)((e) => {
                var t, n;
                let i =
                    null !=
                    (n =
                        null != (t = null == s ? void 0 : s.get("error_description"))
                            ? t
                            : null == s
                              ? void 0
                              : s.get("error"))
                        ? n
                        : ee.intl.string(ee.t["mqn87+"]);
                return (
                    Array.isArray(i) && (i = i[0]),
                    (0, r.jsx)(
                        q.j,
                        ea(er({}, e), {
                            children: (0, r.jsx)(X.Lk, {
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
    if ((0, N.g)("create-guild-and-oauth2-modal"))
        return void A.Z.openCreateGuildModal({ onSuccess: (n) => ef(ea(er({}, e), { guildId: n }), t) });
    ef(e, t);
}
function ef(e, t) {
    (0, _.h7)(
        (t) =>
            (0, r.jsx)(
                es,
                ea(er({}, t, e), {
                    cancelCompletesFlow: !1,
                    callback: eu.bind(null, e),
                }),
            ),
        { onCloseCallback: t },
    );
}
function e_(e) {
    var t;
    let { hostname: n = "", host: r, pathname: i, search: a } = null != (t = j.Z.toURLSafe(e)) ? t : {};
    return null != i &&
        null != a &&
        (j.Z.isDiscordHostname(n) || r === window.location.host) &&
        (i.startsWith("/api".concat(J.ANM.OAUTH2_AUTHORIZE)) || i.startsWith(J.Z5c.OAUTH2_AUTHORIZE))
        ? (0, k.y)(a)
        : null;
}

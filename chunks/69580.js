n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: () => el,
        OAuth2AuthorizePage: () => es,
        getOAuth2AuthorizeProps: () => ep,
        openOAuth2Modal: () => e_,
        openOAuth2ModalWithCreateGuildModal: () => ef,
        useOAuth2AuthorizeForm: () => eu,
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
    p = n(922770),
    h = n(680018),
    m = n(257465),
    g = n(481060),
    E = n(893776),
    b = n(434650),
    y = n(367907),
    O = n(702493),
    v = n(162685),
    I = n(728345),
    T = n(979200),
    S = n(589414),
    A = n(388905),
    C = n(560067),
    N = n(353926),
    R = n(341298),
    P = n(703656),
    w = n(973616),
    D = n(598077),
    x = n(314897),
    L = n(630388),
    j = n(700785),
    M = n(591759),
    k = n(807675),
    U = n(489863),
    G = n(228763),
    B = n(422559),
    Z = n(713938),
    F = n(166148),
    V = n(807989),
    H = n(627799),
    Y = n(260430),
    W = n(668185),
    K = n(407546),
    z = n(41259),
    q = n(28752),
    X = n(787025),
    Q = n(397394),
    J = n(574384),
    $ = n(981631),
    ee = n(186901),
    et = n(388032),
    en = n(565870);
function er(e, t, n) {
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
function ei(e) {
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
                er(e, t, n[t]);
            });
    }
    return e;
}
function ea(e, t) {
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
function eo(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ea(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function es() {
    let e = (0, s.TH)(),
        t = i.useMemo(() => (0, k.y)(e.search), [e.search]);
    (0, O.Z)();
    let a = !e.search.includes("response_type"),
        [o, c] = i.useState(!1),
        u = i.useRef(!1),
        [d, f] = i.useState(null),
        _ = !l.tq && !o && (a || !x.default.isAuthenticated());
    if (
        (i.useEffect(() => {
            if (l.eL && a) {
                let t = new URL("discord://action/oauth2/authorize");
                (t.search = e.search), window.open(t.toString(), "_self");
            } else
                l.tq ||
                    (!a && x.default.isAuthenticated()) ||
                    u.current ||
                    ((u.current = !0),
                    Promise.resolve()
                        .then(n.bind(n, 536285))
                        .then((t) => {
                            let { default: n } = t;
                            if (a)
                                n.request($.Etm.DEEP_LINK, {
                                    type: ee.jE.OAUTH2,
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
                                n.request($.Etm.AUTHORIZE, {
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
                              (0, r.jsx)(A.Dx, { children: et.intl.string(et.t.csrAMD) }),
                              (0, r.jsx)(A.DK, {
                                  children: a ? et.intl.string(et.t["m1+IBg"]) : et.intl.string(et.t.kRzrSE),
                              }),
                              (0, r.jsx)(h.z, {
                                  onClick: () => c(!0),
                                  variant: "primary",
                                  text: et.intl.string(et.t.fIv16O),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(A.Dx, { children: et.intl.string(et.t["Z+hCVV"]) }),
                              (0, r.jsx)(p.$, {}),
                          ],
                      })),
            (0, r.jsx)(X.G, {
                removeChildWrapper: !0,
                children: (0, r.jsx)("div", {
                    className: en.deepLinkContainer,
                    children: e,
                }),
            })
        );
    }
    return (0, r.jsx)(X.G, {
        removeChildWrapper: !0,
        children: (0, r.jsx)(
            el,
            eo(ei({ transitionState: m.D.ENTERED }, t), {
                showLogout: !0,
                isExternalStandaloneOAuthPage: !0,
                hideHeader: !0,
            }),
        ),
    });
}
function el(e) {
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
        } = eu(ei({}, e)),
        p = v.w.useExperiment({ location: "oauth2_authorize" }),
        h =
            null != a || null != s || null != u
                ? (0, r.jsxs)("div", {
                      className: en.authorize,
                      children: [
                          a,
                          (0, r.jsxs)("div", {
                              className: en.contentWrapper,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: o()(
                                          en.content,
                                          d ? en.contentBackground : null,
                                          f ? en.noPadding : null,
                                      ),
                                      children: [s, null != c || p.enabled ? null : u],
                                  }),
                                  null == c && p.enabled
                                      ? (0, r.jsx)("div", {
                                            className: o()(
                                                en.content,
                                                d ? en.contentBackground : null,
                                                f ? en.noPadding : null,
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
        X.j,
        eo(ei({}, e), {
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
function ec() {
    return (0, r.jsx)("div", {
        className: en.loadingContainer,
        children: (0, r.jsx)(p.$, { className: en.spinner }),
    });
}
function eu(e) {
    var t, n, a, o, l, _, p;
    let h,
        m,
        O,
        A,
        C,
        {
            clientId: R,
            responseType: X,
            redirectUri: ee,
            codeChallenge: er,
            codeChallengeMethod: ei,
            state: ea,
            nonce: eo,
            prompt: es,
            authorizations: el,
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
        eA = null != ep ? (null == el ? void 0 : el.get(ep)) : void 0,
        eC = (0, s.TH)(),
        eN = (0, f.e7)([N.Z], () => N.Z.hasLoadedExperiments);
    i.useEffect(() => {
        x.default.isAuthenticated() && !eN && E.Z.getExperiments();
    }, [eN]);
    let [eR, eP] = i.useState(null),
        [ew, eD] = i.useState(null),
        [ex, eL] = i.useState(null),
        [ej, eM] = i.useState(!1),
        [ek, eU] = i.useState(!1),
        eG = null == eR ? void 0 : eR.guilds,
        [eB, eZ] = i.useState(null != ef ? ef : null),
        [eF, eV] = i.useState(null != e_ ? e_ : null),
        [eH, eY] = i.useState(j.Hn),
        [eW, eK] = i.useState(!1),
        ez = i.useMemo(
            () => ((null == eR ? void 0 : eR.user) != null ? new D.Z(eR.user) : null),
            [null == eR ? void 0 : eR.user],
        ),
        eq = (0, S.Z)(null != (t = null == eR ? void 0 : eR.application) ? t : null),
        eX = i.useMemo(() => (null == eG ? void 0 : eG.find((e) => e.id === eB)), [eG, eB]),
        [eQ, eJ] = i.useState(null),
        e$ = i.useMemo(() => {
            var e;
            return (
                null == eA && null == ep && (null != (e = null == eu ? void 0 : eu.length) ? e : 0) === 0 && null == ee
            );
        }, [eA, null == eu ? void 0 : eu.length, ee, ep]),
        [e0, e1] = i.useState(null);
    i.useEffect(() => {
        e$ && I.ZP.fetchApplication(R).then((e) => e1(w.ZP.createFromServer(e)));
    }, [R, e$]);
    let e2 = i.useMemo(() => {
            var e, t;
            return null == eQ
                ? null
                : null == e0 || null == (t = e0.integrationTypesConfig) || null == (e = t[eQ])
                  ? void 0
                  : e.oauth2InstallParams;
        }, [null == e0 ? void 0 : e0.integrationTypesConfig, eQ]),
        e3 = v.w.useExperiment({ location: "oauth2_authorize" }),
        { requestedScopes: e4, accountScopes: e8 } = i.useMemo(() => {
            let e = e$ ? (null == e2 ? void 0 : e2.scopes) : eu,
                t = (0, k.K)(null != e ? e : []),
                n = Z.Qe.filter((e) => t.includes(e));
            return {
                requestedScopes: t,
                accountScopes: n,
            };
        }, [null == e2 ? void 0 : e2.scopes, eu, e$]),
        e6 = i.useMemo(() => {
            var e;
            let t = e$ ? d.vB(null != (e = null == e2 ? void 0 : e2.permissions) ? e : 0) : ed;
            return null != t ? t : j.Hn;
        }, [null == e2 ? void 0 : e2.permissions, ed, e$]),
        e5 = i.useRef(!1),
        [e7, e9] = i.useState(null != eI ? eI : []),
        [te, tt] = i.useState(null != eI && eI.length > 0);
    i.useEffect(() => {
        if (e5.current) return;
        let e = async () => {
            e5.current = !0;
            try {
                let { disclosures: e, allAcked: t } = await (0, T.de)(R);
                tt(!t), e9(e);
            } catch (n) {
                let { status: e, body: t } = n;
                if (401 === e) return void (0, U.c$)(eC, "oauth2_error_failed_disclosures");
                eL(
                    Error(
                        null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0]),
                    ),
                );
            } finally {
                e5.current = !1;
            }
        };
        if (null == eI) {
            if (!x.default.isAuthenticated()) return void (0, U.c$)(eC, "oauth2_error_not_authenticated");
            e();
        }
    }, [R, eC, eI, e9, eL, tt, eD]);
    let tn = i.useCallback(
            async (e) => {
                if (null != eO) {
                    eM(!0), eO(e);
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
                    eM(!0);
                    let n = await (0, U.Iq)({
                        authorize: e,
                        clientId: R,
                        scopes: e4,
                        responseType: X,
                        redirectUri: ee,
                        codeChallenge: er,
                        codeChallengeMethod: ei,
                        state: ea,
                        nonce: eo,
                        integrationType: eQ,
                        permissions: d.Od(e6, eH),
                        guildId: eQ === c.Y.GUILD_INSTALL && null != eB ? eB : void 0,
                        channelId: eQ === c.Y.GUILD_INSTALL && null != eF ? eF : void 0,
                        dmSettings: { allowMobilePush: eW },
                    });
                    if ((e && (await (0, T.x9)(R, e7)), null != ey))
                        ey({
                            application: null == eR ? void 0 : eR.application,
                            location: n.location,
                            guild: eX,
                        }),
                            null == ev || ev();
                    else if (null != n.location) {
                        var t;
                        let e = null == (t = M.Z.toURLSafe(n.location)) ? void 0 : t.pathname;
                        M.Z.isDiscordUrl(n.location) && e === $.Z5c.OAUTH2_AUTHORIZED
                            ? (0, P.uL)($.Z5c.OAUTH2_AUTHORIZED, {
                                  state: {
                                      application: null == eR ? void 0 : eR.application,
                                      guild: eX,
                                  },
                              })
                            : (window.location = n.location);
                    } else eM(!1);
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && "" !== e.message ? eL(Error(e.message)) : eL(e),
                        eD("AUTHORIZE_SCOPES"),
                        eM(!1);
                }
            },
            [
                eO,
                eg,
                ey,
                null == eR ? void 0 : eR.application,
                eX,
                ev,
                R,
                e4,
                X,
                ee,
                er,
                ei,
                ea,
                eo,
                e6,
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
            if (!x.default.isAuthenticated()) return void (0, U.c$)(eC, "oauth2_error_not_authenticated");
            if (!e5.current && !tr.current) {
                tr.current = !0;
                try {
                    let e =
                        null != eA
                            ? eA
                            : await (0, U.Ww)({
                                  clientId: R,
                                  scopes: e4,
                                  responseType: X,
                                  redirectUri: ee,
                                  codeChallenge: er,
                                  codeChallengeMethod: ei,
                                  state: ea,
                                  nonce: eo,
                                  integrationType: null != eQ ? eQ : void 0,
                              });
                    eP((0, G.d)(e)),
                        es === F.s.NONE && e.authorized && !te && tn(!0),
                        (0, y.yw)($.rMx.OAUTH2_AUTHORIZE_VIEWED, {
                            application_id: e.application.id,
                            mobile_push_notification_default_setting: !1,
                        });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, U.c$)(eC, "oauth2_error_unauthorized");
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
        }, [eC, eA, R, e4, X, ee, er, ei, ea, eo, eQ, es, tn, te]),
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
            (0, y.yw)($.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: ew,
                application_id: R,
                integration_type: eQ,
                scopes: e4,
                permissions: e6.toString(),
                mobile_push_notification_default_setting: !1,
            }));
    }, [R, eQ, e6, e4, ew]),
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
            let e = e4.filter((e) => !Z.ak.includes(e));
            0 === e4.length
                ? eL(Error("No scopes were provided."))
                : e.length > 0
                  ? eL(Error("Invalid scope: ".concat(e[0])))
                  : (0, B._$)(e6)
                    ? eL(Error("Invalid permission(s) provided."))
                    : ti();
        }, [te, ti, e4, e6, eQ, eR, ex]);
    let ts = i.useCallback((e) => {
            e && eU(!0);
        }, []),
        tl = (0, b.O)(ts);
    if (ex instanceof Error)
        return eT
            ? { body: (0, r.jsx)(Q.Lk, { message: ex.message }) }
            : eS
              ? {
                    label: et.intl.string(et.t.j2d6Ki),
                    header: (0, r.jsx)(g.Text, {
                        variant: "text-lg/bold",
                        color: "header-primary",
                        children: et.intl.string(et.t.j2d6Ki),
                    }),
                    body: (0, r.jsx)(g.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: ex.message,
                    }),
                    actions: [
                        {
                            onClick: ev,
                            text: et.intl.string(et.t.cpT0Cg),
                        },
                    ],
                    noPadding: !0,
                }
              : {
                    title: et.intl.string(et.t.j2d6Ki),
                    subtitle: ex.message,
                    actions: [
                        {
                            onClick: ev,
                            text: et.intl.string(et.t.cpT0Cg),
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
                label: et.intl.string(et.t.ZTNur6),
                body: (0, r.jsx)(ec, {}),
            };
        case "SELECT_INSTALL_TYPE":
            if (null == e0)
                return {
                    label: et.intl.string(et.t.ZTNur6),
                    body: (0, r.jsx)(ec, {}),
                };
            (h = (0, r.jsx)(q.Z, {
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
                    label: et.intl.string(et.t.ZTNur6),
                    body: (0, r.jsx)(ec, {}),
                };
            let tg = null == ex || ex instanceof Error ? {} : ex,
                tE = null == eG ? void 0 : eG.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tb = eQ === c.Y.GUILD_INSTALL && e4.includes(u.x.WEBHOOK_INCOMING),
                ty =
                    tb ||
                    (eQ === c.Y.GUILD_INSTALL && (e4.includes(u.x.BOT) || e4.includes(u.x.APPLICATIONS_COMMANDS))),
                tO =
                    (0, L.yE)(null != (n = eR.application.flags) ? n : 0, $.udG.EMBEDDED) &&
                    eQ === c.Y.USER_INSTALL &&
                    e3.enabled;
            (h = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(H.Z, {
                        application: eR.application,
                        accountScopes: e8,
                    }),
                    (0, r.jsx)(Y.Z, {
                        application: eR.application,
                        accountScopes: e8,
                        requestedScopes: e4,
                        integrationType: eQ,
                        errors: tg,
                        isTrustedName: eE || eq,
                        noDivider: !tO && !ty && !tb && e3.enabled,
                    }),
                    tO
                        ? (0, r.jsx)(g.j7V, {
                              hideBorder: !0,
                              onChange: eK,
                              className: en.mobilePushContainer,
                              note: et.intl.string(et.t.hw1nKS),
                              value: eW,
                              children: (0, r.jsx)(g.Text, {
                                  variant: "text-sm/medium",
                                  children: et.intl.string(et.t["Pkw//v"]),
                              }),
                          })
                        : null,
                    (0, r.jsx)("div", {
                        className: en.intObserver,
                        ref: tl,
                    }),
                    ty
                        ? (0, r.jsx)(K.Z, {
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
                        ? (0, r.jsx)(J.Z, {
                              error: (null != (l = tg[u.x.WEBHOOK_INCOMING]) ? l : [])[0],
                              selectedChannelId: eF,
                              selectedGuildId: eB,
                              onChannelChange: eV,
                          })
                        : null,
                ],
            })),
                e4.includes(u.x.BOT) && !d.fS(e6, j.Hn) && (O = "AUTHORIZE_BOT_PERMISSIONS"),
                ta.length > 1 && (m = "SELECT_INSTALL_TYPE"),
                (tf = (ty && null == eX) || (tb && null == eF)),
                (td = !0);
            break;
        case "AUTHORIZE_BOT_PERMISSIONS":
            if (null == eR)
                return {
                    label: et.intl.string(et.t.ZTNur6),
                    body: (0, r.jsx)(ec, {}),
                };
            (h = (0, r.jsx)(W.Z, {
                application: eR.application,
                permissions: e6,
                deniedPermissions: eH,
                onPermissionsChange: tu,
                guild: eX,
            })),
                (m = "AUTHORIZE_SCOPES"),
                (td = !0);
    }
    let tv = [];
    if (t_ && null != eR) {
        let e = null == (_ = eR.bot) ? void 0 : _.approximate_guild_count;
        A = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(V.Z, {
                    application: eR.application,
                    scopes: e4,
                    disclosures: e7,
                    redirectUri: null != (p = eR.redirect_uri) ? p : null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: eb,
                }),
                (0, r.jsx)("div", {
                    className: en.intObserver,
                    ref: tl,
                }),
            ],
        });
    }
    return (
        tp &&
            null != eR &&
            null != ez &&
            (C = (0, r.jsx)(z.Z, {
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
                null != m
                    ? {
                          variant: "secondary",
                          onClick: () => eD(m),
                          text: et.intl.string(et.t["13/7kZ"]),
                      }
                    : {
                          variant: "secondary",
                          onClick: () => tn(!1),
                          text: et.intl.string(et.t["ETE/oK"]),
                      },
            ),
            "SELECT_INSTALL_TYPE" !== ew &&
                tv.push(
                    ek
                        ? {
                              onClick: null != O ? () => eD(O) : () => tn(!0),
                              loading: ej,
                              disabled: null == A || tf,
                              text: tf
                                  ? et.intl.string(et.t.BwwiSE)
                                  : null != O
                                    ? et.intl.string(et.t["3PatS0"])
                                    : et.intl.string(et.t["y+/PEx"]),
                          }
                        : {
                              disabled: !0,
                              loading: ej,
                              text: et.intl.string(et.t.N22i9P),
                              icon: g.cQm,
                          },
                )),
        {
            header: C,
            body: h,
            actions: tv,
            nextStep: O,
            appDetails: A,
            sendAuthorize: tn,
            hasContentBackground: td,
            noPadding: tm,
        }
    );
}
function ed(e, t) {
    var n, i;
    if (null == t.location || (null != e.callback && e.callback(t))) return;
    let { host: a, pathname: o, searchParams: s } = null != (n = M.Z.toURLSafe(t.location)) ? n : {},
        l = M.Z.isDiscordHostname(null != a ? a : null) || window.location.host === a;
    l && o === $.Z5c.OAUTH2_AUTHORIZED
        ? (0, _.h7)((e) =>
              (0, r.jsx)(
                  Q.jO,
                  ei(
                      {
                          guild: t.guild,
                          application: t.application,
                      },
                      e,
                  ),
              ),
          )
        : l && (null == o ? void 0 : o.startsWith($.Z5c.OAUTH2_ERROR))
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
                        : et.intl.string(et.t["mqn87+"]);
                return (
                    Array.isArray(i) && (i = i[0]),
                    (0, r.jsx)(
                        X.j,
                        eo(ei({}, e), {
                            children: (0, r.jsx)(Q.Lk, {
                                message: i,
                                onClose: e.onClose,
                            }),
                        }),
                    )
                );
            })
          : null == (i = window.open(t.location, "_blank")) || i.focus();
}
function ef(e, t) {
    if ((0, R.g)("create-guild-and-oauth2-modal"))
        return void C.Z.openCreateGuildModal({ onSuccess: (n) => e_(eo(ei({}, e), { guildId: n }), t) });
    e_(e, t);
}
function e_(e, t) {
    (0, _.h7)(
        (t) =>
            (0, r.jsx)(
                el,
                eo(ei({}, t, e), {
                    cancelCompletesFlow: !1,
                    callback: ed.bind(null, e),
                }),
            ),
        { onCloseCallback: t },
    );
}
function ep(e) {
    var t;
    let { hostname: n = "", host: r, pathname: i, search: a } = null != (t = M.Z.toURLSafe(e)) ? t : {};
    return null != i &&
        null != a &&
        (M.Z.isDiscordHostname(n) || r === window.location.host) &&
        (i.startsWith("/api".concat($.ANM.OAUTH2_AUTHORIZE)) || i.startsWith($.Z5c.OAUTH2_AUTHORIZE))
        ? (0, k.y)(a)
        : null;
}

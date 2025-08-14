n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: () => ec,
        OAuth2AuthorizePage: () => el,
        getOAuth2AuthorizeProps: () => eh,
        openOAuth2Modal: () => ep,
        openOAuth2ModalWithCreateGuildModal: () => e_,
        useOAuth2AuthorizeForm: () => ed,
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
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(114858),
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
    b = n(384275),
    y = n(434650),
    O = n(367907),
    v = n(702493),
    I = n(162685),
    T = n(728345),
    S = n(979200),
    A = n(589414),
    N = n(388905),
    C = n(560067),
    R = n(353926),
    P = n(341298),
    w = n(703656),
    D = n(973616),
    L = n(598077),
    x = n(314897),
    M = n(630388),
    k = n(700785),
    j = n(591759),
    U = n(807675),
    G = n(489863),
    B = n(228763),
    Z = n(422559),
    F = n(713938),
    V = n(166148),
    H = n(807989),
    Y = n(627799),
    W = n(260430),
    K = n(668185),
    z = n(407546),
    q = n(41259),
    X = n(28752),
    Q = n(787025),
    J = n(397394),
    $ = n(574384),
    ee = n(981631),
    et = n(186901),
    en = n(388032),
    er = n(565870);
function ei(e, t, n) {
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
function eo(e) {
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
                ei(e, t, n[t]);
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
function es(e, t) {
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
function el() {
    let e = (0, s.TH)(),
        t = i.useMemo(() => (0, U.y)(e.search), [e.search]);
    (0, v.Z)();
    let o = !e.search.includes("response_type"),
        [a, c] = i.useState(!1),
        u = i.useRef(!1),
        [d, f] = i.useState(null),
        _ = !l.tq && !a && (o || !x.default.isAuthenticated());
    if (
        (i.useEffect(() => {
            if (l.eL && o) {
                let t = new URL("discord://action/oauth2/authorize");
                (t.search = e.search), window.open(t.toString(), "_self");
            } else
                l.tq ||
                    (!o && x.default.isAuthenticated()) ||
                    u.current ||
                    ((u.current = !0),
                    Promise.resolve()
                        .then(n.bind(n, 536285))
                        .then((t) => {
                            let { default: n } = t;
                            if (o)
                                n.request(ee.Etm.DEEP_LINK, {
                                    type: et.jE.OAUTH2,
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
                                n.request(ee.Etm.AUTHORIZE, {
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
        }, [e.search, o]),
        _ && !1 !== d)
    ) {
        let e;
        return (
            (e =
                !0 === d
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(N.Dx, { children: en.intl.string(en.t.csrAMD) }),
                              (0, r.jsx)(N.DK, {
                                  children: o ? en.intl.string(en.t["m1+IBg"]) : en.intl.string(en.t.kRzrSE),
                              }),
                              (0, r.jsx)(h.z, {
                                  onClick: () => c(!0),
                                  variant: "primary",
                                  text: en.intl.string(en.t.fIv16O),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(N.Dx, { children: en.intl.string(en.t["Z+hCVV"]) }),
                              (0, r.jsx)(p.$, {}),
                          ],
                      })),
            (0, r.jsx)(Q.G, {
                removeChildWrapper: !0,
                children: (0, r.jsx)("div", {
                    className: er.deepLinkContainer,
                    children: e,
                }),
            })
        );
    }
    return (0, r.jsx)(Q.G, {
        removeChildWrapper: !0,
        children: (0, r.jsx)(
            ec,
            es(eo({ transitionState: m.D.ENTERED }, t), {
                showLogout: !0,
                isExternalStandaloneOAuthPage: !0,
                hideHeader: !0,
            }),
        ),
    });
}
function ec(e) {
    let {
            label: t,
            title: n,
            subtitle: i,
            header: o,
            body: s,
            actions: l,
            nextStep: c,
            appDetails: u,
            hasContentBackground: d,
            noPadding: f,
            modalSize: _,
        } = ed(eo({}, e)),
        p = I.w.useExperiment({ location: "oauth2_authorize" }),
        h =
            null != o
                ? (0, r.jsx)("div", {
                      className: a()(er.fakeHeader, { [er.moveUp]: !e.hideHeader }),
                      children: o,
                  })
                : void 0,
        m =
            null != o || null != s || null != u
                ? (0, r.jsxs)("div", {
                      className: er.authorize,
                      children: [
                          (0, r.jsxs)("div", {
                              className: a()(er.content, d ? er.contentBackground : null, f ? er.noPadding : null),
                              children: [s, null != c || p.enabled ? null : u],
                          }),
                          null == c && p.enabled
                              ? (0, r.jsx)("div", {
                                    className: a()(
                                        er.content,
                                        d ? er.contentBackground : null,
                                        f ? er.noPadding : null,
                                    ),
                                    children: u,
                                })
                              : null,
                      ],
                  })
                : null;
    return (0, r.jsx)(
        Q.j,
        es(eo({}, e), {
            onClose: () => {
                var t;
                return Promise.resolve(null == (t = e.onClose) ? void 0 : t.call(e));
            },
            size: _,
            actions: l,
            title: n,
            subtitle: i,
            input: h,
            "aria-label": t,
            children: m,
        }),
    );
}
function eu() {
    return (0, r.jsx)("div", {
        className: er.loadingContainer,
        children: (0, r.jsx)(p.$, { className: er.spinner }),
    });
}
function ed(e) {
    var t, n, o, a, l, _, p;
    let h,
        m,
        v,
        N,
        C,
        {
            clientId: P,
            responseType: Q,
            redirectUri: et,
            codeChallenge: ei,
            codeChallengeMethod: eo,
            state: ea,
            nonce: es,
            prompt: el,
            authorizations: ec,
            scopes: ed,
            permissions: ef,
            guildId: e_,
            channelId: ep,
            integrationType: eh,
            disableGuildSelect: em = !1,
            showLogout: eg = !1,
            cancelCompletesFlow: eE = !0,
            isTrustedName: eb = !1,
            isEmbeddedFlow: ey = !1,
            callback: eO,
            callbackWithoutPost: ev,
            onClose: eI,
            disclosures: eT,
            isExternalStandaloneOAuthPage: eS = !1,
            isTwoWayLinkDiscordConsent: eA = !1,
        } = e,
        eN = null != eh ? (null == ec ? void 0 : ec.get(eh)) : void 0,
        eC = (0, s.TH)(),
        eR = (0, f.e7)([R.Z], () => R.Z.hasLoadedExperiments);
    i.useEffect(() => {
        x.default.isAuthenticated() && !eR && E.Z.getExperiments();
    }, [eR]);
    let [eP, ew] = i.useState(null),
        [eD, eL] = i.useState(null),
        [ex, eM] = i.useState(null),
        [ek, ej] = i.useState(!1),
        [eU, eG] = i.useState(!1),
        eB = null == eP ? void 0 : eP.guilds,
        [eZ, eF] = i.useState(null != e_ ? e_ : null),
        [eV, eH] = i.useState(null != ep ? ep : null),
        [eY, eW] = i.useState(k.Hn),
        [eK, ez] = i.useState(!1),
        eq = i.useMemo(
            () => ((null == eP ? void 0 : eP.user) != null ? new L.Z(eP.user) : null),
            [null == eP ? void 0 : eP.user],
        ),
        eX = (0, A.Z)(null != (t = null == eP ? void 0 : eP.application) ? t : null),
        eQ = i.useMemo(() => (null == eB ? void 0 : eB.find((e) => e.id === eZ)), [eB, eZ]),
        [eJ, e$] = i.useState(null),
        e0 = i.useMemo(() => {
            var e;
            return (
                null == eN && null == eh && (null != (e = null == ed ? void 0 : ed.length) ? e : 0) === 0 && null == et
            );
        }, [eN, null == ed ? void 0 : ed.length, et, eh]),
        [e1, e2] = i.useState(null);
    i.useEffect(() => {
        e0 && T.ZP.fetchApplication(P).then((e) => e2(D.ZP.createFromServer(e)));
    }, [P, e0]);
    let e3 = i.useMemo(() => {
            var e, t;
            return null == eJ
                ? null
                : null == e1 || null == (t = e1.integrationTypesConfig) || null == (e = t[eJ])
                  ? void 0
                  : e.oauth2InstallParams;
        }, [null == e1 ? void 0 : e1.integrationTypesConfig, eJ]),
        e5 = I.w.useExperiment({ location: "oauth2_authorize" }),
        { requestedScopes: e4, accountScopes: e6 } = i.useMemo(() => {
            let e = e0 ? (null == e3 ? void 0 : e3.scopes) : ed,
                t = (0, U.K)(null != e ? e : []),
                n = F.Qe.filter((e) => t.includes(e));
            return {
                requestedScopes: t,
                accountScopes: n,
            };
        }, [null == e3 ? void 0 : e3.scopes, ed, e0]),
        e8 = i.useMemo(() => {
            var e;
            let t = e0 ? d.vB(null != (e = null == e3 ? void 0 : e3.permissions) ? e : 0) : ef;
            return null != t ? t : k.Hn;
        }, [null == e3 ? void 0 : e3.permissions, ef, e0]),
        e7 = i.useRef(!1),
        [e9, te] = i.useState(null != eT ? eT : []),
        [tt, tn] = i.useState(null != eT && eT.length > 0);
    i.useEffect(() => {
        if (e7.current) return;
        let e = async () => {
            e7.current = !0;
            try {
                let { disclosures: e, allAcked: t } = await (0, S.de)(P);
                tn(!t), te(e);
            } catch (n) {
                let { status: e, body: t } = n;
                if (401 === e) return void (0, G.c$)(eC, "oauth2_error_failed_disclosures");
                eM(
                    Error(
                        null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0]),
                    ),
                );
            } finally {
                e7.current = !1;
            }
        };
        if (null == eT) {
            if (!x.default.isAuthenticated()) return void (0, G.c$)(eC, "oauth2_error_not_authenticated");
            e();
        }
    }, [P, eC, eT, te, eM, tn, eL]);
    let tr = i.useCallback(
            async (e) => {
                if (null != ev) {
                    ej(!0), ev(e);
                    return;
                }
                if (!e && !eE) {
                    null != eO &&
                        (eO({
                            application: null == eP ? void 0 : eP.application,
                            guild: eQ,
                        }),
                        null == eI || eI());
                    return;
                }
                if (null == eJ) return void eM(Error("No integration type was selected."));
                try {
                    ej(!0);
                    let n = await (0, G.Iq)({
                        authorize: e,
                        clientId: P,
                        scopes: e4,
                        responseType: Q,
                        redirectUri: et,
                        codeChallenge: ei,
                        codeChallengeMethod: eo,
                        state: ea,
                        nonce: es,
                        integrationType: eJ,
                        permissions: d.Od(e8, eY),
                        guildId: eJ === c.Y.GUILD_INSTALL && null != eZ ? eZ : void 0,
                        channelId: eJ === c.Y.GUILD_INSTALL && null != eV ? eV : void 0,
                        dmSettings: { allowMobilePush: eK },
                    });
                    if (
                        (e &&
                            (await (0, S.x9)(P, e9),
                            setTimeout(() => {
                                b.Z.fetch();
                            }, 100)),
                        null != eO)
                    )
                        eO({
                            application: null == eP ? void 0 : eP.application,
                            location: n.location,
                            guild: eQ,
                        }),
                            null == eI || eI();
                    else if (null != n.location) {
                        var t;
                        let e = null == (t = j.Z.toURLSafe(n.location)) ? void 0 : t.pathname;
                        j.Z.isDiscordUrl(n.location) && e === ee.Z5c.OAUTH2_AUTHORIZED
                            ? (0, w.uL)(ee.Z5c.OAUTH2_AUTHORIZED, {
                                  state: {
                                      application: null == eP ? void 0 : eP.application,
                                      guild: eQ,
                                  },
                              })
                            : (window.location = n.location);
                    } else ej(!1);
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && "" !== e.message ? eM(Error(e.message)) : eM(e),
                        eL("AUTHORIZE_SCOPES"),
                        ej(!1);
                }
            },
            [
                ev,
                eE,
                eO,
                null == eP ? void 0 : eP.application,
                eQ,
                eI,
                P,
                e4,
                Q,
                et,
                ei,
                eo,
                ea,
                es,
                e8,
                eY,
                eZ,
                eJ,
                eV,
                e9,
                eK,
            ],
        ),
        ti = i.useRef(!1),
        to = i.useCallback(async () => {
            if (!x.default.isAuthenticated()) return void (0, G.c$)(eC, "oauth2_error_not_authenticated");
            if (!e7.current && !ti.current) {
                ti.current = !0;
                try {
                    let e =
                        null != eN
                            ? eN
                            : await (0, G.Ww)({
                                  clientId: P,
                                  scopes: e4,
                                  responseType: Q,
                                  redirectUri: et,
                                  codeChallenge: ei,
                                  codeChallengeMethod: eo,
                                  state: ea,
                                  nonce: es,
                                  integrationType: null != eJ ? eJ : void 0,
                              });
                    ew((0, B.d)(e)),
                        el === V.s.NONE && e.authorized && !tt && tr(!0),
                        (0, O.yw)(ee.rMx.OAUTH2_AUTHORIZE_VIEWED, {
                            application_id: e.application.id,
                            mobile_push_notification_default_setting: !1,
                        });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, G.c$)(eC, "oauth2_error_unauthorized");
                    eM(
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
        }, [eC, eN, P, e4, Q, et, ei, eo, ea, es, eJ, el, tr, tt]),
        ta = i.useMemo(() => {
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
        ts = i.useRef(null);
    i.useEffect(() => {
        eD !== ts.current &&
            ((ts.current = eD),
            (0, O.yw)(ee.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eD,
                application_id: P,
                integration_type: eJ,
                scopes: e4,
                permissions: e8.toString(),
                mobile_push_notification_default_setting: !1,
            }));
    }, [P, eJ, e8, e4, eD]),
        i.useEffect(() => {
            if (null == eD && (!e0 || null != e1) && eR)
                if (null != eN) {
                    var e;
                    e$(null != (e = eN.integration_type) ? e : c.Y.GUILD_INSTALL), eL("AUTHORIZE_SCOPES");
                } else
                    ta.length > 1
                        ? eL("SELECT_INSTALL_TYPE")
                        : (1 === ta.length ? e$(ta[0]) : null != eh ? e$(eh) : e$(c.Y.GUILD_INSTALL),
                          eL("AUTHORIZE_SCOPES"));
        }, [eN, ta, e1, e0, eh, eD, eR]),
        i.useEffect(() => {
            if (null == eJ || null != eP || null != ex) return;
            eJ === c.Y.USER_INSTALL && (eF(null), eH(null));
            let e = e4.filter((e) => !F.ak.includes(e));
            0 === e4.length
                ? eM(Error("No scopes were provided."))
                : e.length > 0
                  ? eM(Error("Invalid scope: ".concat(e[0])))
                  : (0, Z._$)(e8)
                    ? eM(Error("Invalid permission(s) provided."))
                    : to();
        }, [tt, to, e4, e8, eJ, eP, ex]);
    let tl = i.useCallback((e) => {
            e && eG(!0);
        }, []),
        tc = (0, y.O)(tl);
    if (ex instanceof Error)
        return eS
            ? { body: (0, r.jsx)(J.Lk, { message: ex.message }) }
            : eA
              ? {
                    label: en.intl.string(en.t.j2d6Ki),
                    header: (0, r.jsx)(g.Text, {
                        variant: "text-lg/bold",
                        color: "header-primary",
                        children: en.intl.string(en.t.j2d6Ki),
                    }),
                    body: (0, r.jsx)(g.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: ex.message,
                    }),
                    actions: [
                        {
                            onClick: eI,
                            text: en.intl.string(en.t.cpT0Cg),
                        },
                    ],
                    noPadding: !0,
                }
              : {
                    title: en.intl.string(en.t.j2d6Ki),
                    subtitle: ex.message,
                    actions: [
                        {
                            onClick: eI,
                            text: en.intl.string(en.t.cpT0Cg),
                        },
                    ],
                };
    let tu = (e) => {
            e$(e), ew(null), eL("AUTHORIZE_SCOPES");
        },
        td = (e, t) => {
            eW((n) => (e ? d.Od(n, t) : d.IH(n, t)));
        },
        tf = !1,
        t_ = !1,
        tp = !0,
        th = !0,
        tm = !0,
        tg = !1;
    switch (eD) {
        case null:
            return {
                label: en.intl.string(en.t.ZTNur6),
                body: (0, r.jsx)(eu, {}),
            };
        case "SELECT_INSTALL_TYPE":
            if (null == e1)
                return {
                    label: en.intl.string(en.t.ZTNur6),
                    body: (0, r.jsx)(eu, {}),
                };
            (h = (0, r.jsx)(X.Z, {
                application: e1,
                onSelect: tu,
            })),
                (tp = !1),
                (th = !1),
                (tm = !1),
                (tg = !0);
            break;
        case "AUTHORIZE_SCOPES":
            if (null == eP || null == eq || null == eJ)
                return {
                    label: en.intl.string(en.t.ZTNur6),
                    body: (0, r.jsx)(eu, {}),
                };
            let tE = null == ex || ex instanceof Error ? {} : ex,
                tb = null == eB ? void 0 : eB.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                ty = eJ === c.Y.GUILD_INSTALL && e4.includes(u.x.WEBHOOK_INCOMING),
                tO =
                    ty ||
                    (eJ === c.Y.GUILD_INSTALL && (e4.includes(u.x.BOT) || e4.includes(u.x.APPLICATIONS_COMMANDS))),
                tv =
                    (0, M.yE)(null != (n = eP.application.flags) ? n : 0, ee.udG.EMBEDDED) &&
                    eJ === c.Y.USER_INSTALL &&
                    e5.enabled;
            (m = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(Y.Z, {
                        application: eP.application,
                        accountScopes: e6,
                    }),
                    (0, r.jsx)(W.Z, {
                        application: eP.application,
                        accountScopes: e6,
                        requestedScopes: e4,
                        integrationType: eJ,
                        errors: tE,
                        isTrustedName: eb || eX,
                        noDivider: !tv && !tO && !ty && e5.enabled,
                    }),
                    tv
                        ? (0, r.jsx)(g.j7V, {
                              hideBorder: !0,
                              onChange: ez,
                              className: er.mobilePushContainer,
                              note: en.intl.string(en.t.hw1nKS),
                              value: eK,
                              children: (0, r.jsx)(g.Text, {
                                  variant: "text-sm/medium",
                                  children: en.intl.string(en.t["Pkw//v"]),
                              }),
                          })
                        : null,
                    (0, r.jsx)("div", {
                        className: er.intObserver,
                        ref: tc,
                    }),
                    tO
                        ? (0, r.jsx)(z.Z, {
                              error: (null != (a = null != (o = tE[u.x.BOT]) ? o : tE[u.x.APPLICATIONS_COMMANDS])
                                  ? a
                                  : [])[0],
                              selectedGuildId: eZ,
                              onGuildChange: eF,
                              guilds: null != tb ? tb : [],
                              disabled: "" !== eZ && null != eZ && !0 === em,
                          })
                        : null,
                    ty
                        ? (0, r.jsx)($.Z, {
                              error: (null != (l = tE[u.x.WEBHOOK_INCOMING]) ? l : [])[0],
                              selectedChannelId: eV,
                              selectedGuildId: eZ,
                              onChannelChange: eH,
                          })
                        : null,
                ],
            })),
                e4.includes(u.x.BOT) && !d.fS(e8, k.Hn) && (N = "AUTHORIZE_BOT_PERMISSIONS"),
                ta.length > 1 && (v = "SELECT_INSTALL_TYPE"),
                (t_ = (tO && null == eQ) || (ty && null == eV)),
                (tf = !0);
            break;
        case "AUTHORIZE_BOT_PERMISSIONS":
            if (null == eP)
                return {
                    label: en.intl.string(en.t.ZTNur6),
                    body: (0, r.jsx)(eu, {}),
                };
            (m = (0, r.jsx)(K.Z, {
                application: eP.application,
                permissions: e8,
                deniedPermissions: eY,
                onPermissionsChange: td,
                guild: eQ,
            })),
                (v = "AUTHORIZE_SCOPES"),
                (tf = !0);
    }
    let tI = [];
    if (tp && null != eP) {
        let e = null == (_ = eP.bot) ? void 0 : _.approximate_guild_count;
        C = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(H.Z, {
                    application: eP.application,
                    scopes: e4,
                    disclosures: e9,
                    redirectUri: null != (p = eP.redirect_uri) ? p : null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: ey,
                }),
                (0, r.jsx)("div", {
                    className: er.intObserver,
                    ref: tc,
                }),
            ],
        });
    }
    return (
        th &&
            null != eP &&
            null != eq &&
            (h = (0, r.jsx)(q.Z, {
                user: eq,
                application: eP.application,
                bot: eP.bot,
                accountScopes: e6,
                showLogout: eg || !1,
                location: eC,
                scopes: e4,
            })),
        tm &&
            (tI.push(
                null != v
                    ? {
                          variant: "secondary",
                          onClick: () => eL(v),
                          text: en.intl.string(en.t["13/7kZ"]),
                      }
                    : {
                          variant: "secondary",
                          onClick: () => tr(!1),
                          text: en.intl.string(en.t["ETE/oK"]),
                      },
            ),
            "SELECT_INSTALL_TYPE" !== eD &&
                tI.push(
                    eU
                        ? {
                              onClick: null != N ? () => eL(N) : () => tr(!0),
                              loading: ek,
                              disabled: null == C || t_,
                              text: t_
                                  ? en.intl.string(en.t.BwwiSE)
                                  : null != N
                                    ? en.intl.string(en.t["3PatS0"])
                                    : en.intl.string(en.t["y+/PEx"]),
                          }
                        : {
                              disabled: !0,
                              loading: ek,
                              text: en.intl.string(en.t.N22i9P),
                              icon: g.cQm,
                          },
                )),
        {
            header: h,
            body: m,
            actions: tI,
            nextStep: N,
            appDetails: C,
            sendAuthorize: tr,
            hasContentBackground: tf,
            noPadding: tg,
        }
    );
}
function ef(e, t) {
    var n, i;
    if (null == t.location || (null != e.callback && e.callback(t))) return;
    let { host: o, pathname: a, searchParams: s } = null != (n = j.Z.toURLSafe(t.location)) ? n : {},
        l = j.Z.isDiscordHostname(null != o ? o : null) || window.location.host === o;
    l && a === ee.Z5c.OAUTH2_AUTHORIZED
        ? (0, _.h7)((e) =>
              (0, r.jsx)(
                  J.jO,
                  eo(
                      {
                          guild: t.guild,
                          application: t.application,
                      },
                      e,
                  ),
              ),
          )
        : l && (null == a ? void 0 : a.startsWith(ee.Z5c.OAUTH2_ERROR))
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
                        : en.intl.string(en.t["mqn87+"]);
                return (
                    Array.isArray(i) && (i = i[0]),
                    (0, r.jsx)(
                        Q.j,
                        es(eo({}, e), {
                            children: (0, r.jsx)(J.Lk, {
                                message: i,
                                onClose: e.onClose,
                            }),
                        }),
                    )
                );
            })
          : null == (i = window.open(t.location, "_blank")) || i.focus();
}
function e_(e, t) {
    if ((0, P.g)("create-guild-and-oauth2-modal"))
        return void C.Z.openCreateGuildModal({ onSuccess: (n) => ep(es(eo({}, e), { guildId: n }), t) });
    ep(e, t);
}
function ep(e, t) {
    (0, _.h7)(
        (t) =>
            (0, r.jsx)(
                ec,
                es(eo({}, t, e), {
                    cancelCompletesFlow: !1,
                    callback: ef.bind(null, e),
                }),
            ),
        { onCloseCallback: t },
    );
}
function eh(e) {
    var t;
    let { hostname: n = "", host: r, pathname: i, search: o } = null != (t = j.Z.toURLSafe(e)) ? t : {};
    return null != i &&
        null != o &&
        (j.Z.isDiscordHostname(n) || r === window.location.host) &&
        (i.startsWith("/api".concat(ee.ANM.OAUTH2_AUTHORIZE)) || i.startsWith(ee.Z5c.OAUTH2_AUTHORIZE))
        ? (0, U.y)(o)
        : null;
}

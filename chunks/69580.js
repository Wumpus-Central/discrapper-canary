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
    l = n(907331),
    c = n(873546),
    u = n(373793),
    d = n(243814),
    f = n(149765),
    _ = n(793030),
    p = n(442837),
    h = n(952265),
    m = n(159691),
    g = n(481060),
    E = n(893776),
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
    M = n(591759),
    j = n(807675),
    k = n(489863),
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
        t = i.useMemo(() => (0, j.y)(e.search), [e.search]);
    (0, y.Z)();
    let a = !e.search.includes("response_type"),
        [o, l] = i.useState(!1),
        u = i.useRef(!1),
        [d, f] = i.useState(null),
        p = !c.tq && !o && (a || !D.default.isAuthenticated());
    if (
        (i.useEffect(() => {
            if (c.eL && a) {
                let t = new URL("discord://action/oauth2/authorize");
                (t.search = e.search), window.open(t.toString(), "_self");
            } else
                c.tq ||
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
        p && !1 !== d)
    ) {
        let e;
        return (
            (e =
                !0 === d
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(S.Dx, { children: ee.intl.string(ee.t.csrAMJ) }),
                              (0, r.jsx)(S.DK, {
                                  children: a ? ee.intl.string(ee.t["m1+IBn"]) : ee.intl.string(ee.t.kRzrSO),
                              }),
                              (0, r.jsx)(m.zxk, {
                                  onClick: () => l(!0),
                                  variant: "primary",
                                  text: ee.intl.string(ee.t.fIv16B),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(S.Dx, { children: ee.intl.string(ee.t["Z+hCVU"]) }),
                              (0, r.jsx)(g.$jN, {}),
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
            ea(er({ transitionState: _.Dvm.ENTERED }, t), {
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
        children: (0, r.jsx)(g.$jN, { className: et.spinner }),
    });
}
function ec(e) {
    var t, n, a, o, c, _, h, m;
    let y,
        S,
        A,
        N,
        q,
        {
            clientId: $,
            responseType: en,
            redirectUri: er,
            codeChallenge: ei,
            codeChallengeMethod: ea,
            state: eo,
            nonce: es,
            prompt: ec,
            authorizations: eu,
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
        eC = null != eh ? (null == eu ? void 0 : eu.get(eh)) : void 0,
        eN = (0, s.TH)(),
        eR = (0, p.e7)([C.Z], () => C.Z.hasLoadedExperiments);
    i.useEffect(() => {
        D.default.isAuthenticated() && !eR && E.Z.getExperiments();
    }, [eR]);
    let [eP, ew] = i.useState(null),
        [eD, ex] = i.useState(null),
        [eL, eM] = i.useState(null),
        [ej, ek] = i.useState(!1),
        [eU, eG] = i.useState(!1),
        eB = null == eP ? void 0 : eP.guilds,
        [eZ, eF] = i.useState(null != e_ ? e_ : null),
        [eV, eH] = i.useState(null != ep ? ep : null),
        [eY, eW] = i.useState(L.Hn),
        [eK, ez] = i.useState(!1),
        eq = i.useMemo(
            () => ((null == eP ? void 0 : eP.user) != null ? new w.Z(eP.user) : null),
            [null == eP ? void 0 : eP.user],
        ),
        eX = (0, T.Z)(null != (t = null == eP ? void 0 : eP.application) ? t : null),
        eQ = i.useMemo(() => (null == eB ? void 0 : eB.find((e) => e.id === eZ)), [eB, eZ]),
        [eJ, e$] = i.useState(null),
        e0 = i.useMemo(() => {
            var e;
            return (
                null == eC && null == eh && (null != (e = null == ed ? void 0 : ed.length) ? e : 0) === 0 && null == er
            );
        }, [eC, null == ed ? void 0 : ed.length, er, eh]),
        [e1, e3] = i.useState(null);
    i.useEffect(() => {
        e0 && v.ZP.fetchApplication($).then((e) => e3(P.ZP.createFromServer(e)));
    }, [$, e0]);
    let e2 = i.useMemo(() => {
            var e, t;
            return null == eJ
                ? null
                : null == e1 || null == (t = e1.integrationTypesConfig) || null == (e = t[eJ])
                  ? void 0
                  : e.oauth2InstallParams;
        }, [null == e1 ? void 0 : e1.integrationTypesConfig, eJ]),
        e4 = O.w.useExperiment({ location: "oauth2_authorize" }),
        { requestedScopes: e8, accountScopes: e5 } = i.useMemo(() => {
            let e = e0 ? (null == e2 ? void 0 : e2.scopes) : ed,
                t = (0, j.K)(null != e ? e : []),
                n = B.Qe.filter((e) => t.includes(e));
            return {
                requestedScopes: t,
                accountScopes: n,
            };
        }, [null == e2 ? void 0 : e2.scopes, ed, e0]),
        e6 = i.useMemo(() => {
            var e;
            let t = e0 ? f.vB(null != (e = null == e2 ? void 0 : e2.permissions) ? e : 0) : ef;
            return null != t ? t : L.Hn;
        }, [null == e2 ? void 0 : e2.permissions, ef, e0]),
        e7 = i.useRef(!1),
        [e9, te] = i.useState(null != eT ? eT : []),
        [tt, tn] = i.useState(null != eT && eT.length > 0);
    i.useEffect(() => {
        if (e7.current) return;
        let e = async () => {
            e7.current = !0;
            try {
                let { disclosures: e, allAcked: t } = await (0, I.de)($);
                tn(!t), te(e);
            } catch (n) {
                let { status: e, body: t } = n;
                if (401 === e) return void (0, k.c$)(eN, "oauth2_error_failed_disclosures");
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
            if (!D.default.isAuthenticated()) return void (0, k.c$)(eN, "oauth2_error_not_authenticated");
            e();
        }
    }, [$, eN, eT, te, eM, tn, ex]);
    let tr = i.useCallback(
            async (e) => {
                if (null != ev) {
                    ek(!0), ev(e);
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
                    ek(!0);
                    let n = await (0, k.Iq)({
                        authorize: e,
                        clientId: $,
                        scopes: e8,
                        responseType: en,
                        redirectUri: er,
                        codeChallenge: ei,
                        codeChallengeMethod: ea,
                        state: eo,
                        nonce: es,
                        integrationType: eJ,
                        permissions: f.Od(e6, eY),
                        guildId: eJ === u.Y.GUILD_INSTALL && null != eZ ? eZ : void 0,
                        channelId: eJ === u.Y.GUILD_INSTALL && null != eV ? eV : void 0,
                        dmSettings: { allowMobilePush: eK },
                    });
                    if ((e && (await (0, I.x9)($, e9)), null != eO))
                        eO({
                            application: null == eP ? void 0 : eP.application,
                            location: n.location,
                            guild: eQ,
                        }),
                            null == eI || eI();
                    else if (null != n.location) {
                        var t;
                        let e = null == (t = M.Z.toURLSafe(n.location)) ? void 0 : t.pathname;
                        M.Z.isDiscordUrl(n.location) && e === J.Z5c.OAUTH2_AUTHORIZED
                            ? (0, R.uL)(J.Z5c.OAUTH2_AUTHORIZED, {
                                  state: {
                                      application: null == eP ? void 0 : eP.application,
                                      guild: eQ,
                                  },
                              })
                            : (window.location = n.location);
                    } else ek(!1);
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && "" !== e.message ? eM(Error(e.message)) : eM(e),
                        ex("AUTHORIZE_SCOPES"),
                        ek(!1);
                }
            },
            [
                ev,
                eE,
                eO,
                null == eP ? void 0 : eP.application,
                eQ,
                eI,
                $,
                e8,
                en,
                er,
                ei,
                ea,
                eo,
                es,
                e6,
                eY,
                eZ,
                eJ,
                eV,
                e9,
                eK,
            ],
        ),
        ti = i.useRef(!1),
        ta = i.useCallback(async () => {
            if (!D.default.isAuthenticated()) return void (0, k.c$)(eN, "oauth2_error_not_authenticated");
            if (!e7.current && !ti.current) {
                ti.current = !0;
                try {
                    let e =
                        null != eC
                            ? eC
                            : await (0, k.Ww)({
                                  clientId: $,
                                  scopes: e8,
                                  responseType: en,
                                  redirectUri: er,
                                  codeChallenge: ei,
                                  codeChallengeMethod: ea,
                                  state: eo,
                                  nonce: es,
                                  integrationType: null != eJ ? eJ : void 0,
                              });
                    ew((0, U.d)(e)),
                        ec === Z.s.NONE && e.authorized && !tt && tr(!0),
                        (0, b.yw)(J.rMx.OAUTH2_AUTHORIZE_VIEWED, {
                            application_id: e.application.id,
                            mobile_push_notification_default_setting: !1,
                        });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, k.c$)(eN, "oauth2_error_unauthorized");
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
        }, [eN, eC, $, e8, en, er, ei, ea, eo, es, eJ, ec, tr, tt]),
        to = i.useMemo(() => {
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
            (0, b.yw)(J.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eD,
                application_id: $,
                integration_type: eJ,
                scopes: e8,
                permissions: e6.toString(),
                mobile_push_notification_default_setting: !1,
            }));
    }, [$, eJ, e6, e8, eD]),
        i.useEffect(() => {
            if (null == eD && (!e0 || null != e1) && eR)
                if (null != eC) {
                    var e;
                    e$(null != (e = eC.integration_type) ? e : u.Y.GUILD_INSTALL), ex("AUTHORIZE_SCOPES");
                } else
                    to.length > 1
                        ? ex("SELECT_INSTALL_TYPE")
                        : (1 === to.length ? e$(to[0]) : null != eh ? e$(eh) : e$(u.Y.GUILD_INSTALL),
                          ex("AUTHORIZE_SCOPES"));
        }, [eC, to, e1, e0, eh, eD, eR]),
        i.useEffect(() => {
            if (null == eJ || null != eP || null != eL) return;
            eJ === u.Y.USER_INSTALL && (eF(null), eH(null));
            let e = e8.filter((e) => !B.ak.includes(e));
            0 === e8.length
                ? eM(Error("No scopes were provided."))
                : e.length > 0
                  ? eM(Error("Invalid scope: ".concat(e[0])))
                  : (0, G._$)(e6)
                    ? eM(Error("Invalid permission(s) provided."))
                    : ta();
        }, [tt, ta, e8, e6, eJ, eP, eL]);
    let tl = i.useCallback((e) => {
            e && eG(!0);
        }, []),
        tc = (0, l.O)(tl);
    if (eL instanceof Error)
        return eS
            ? { body: (0, r.jsx)(X.Lk, { message: eL.message }) }
            : eA
              ? {
                    label: ee.intl.string(ee.t.j2d6Km),
                    header: (0, r.jsx)(g.Text, {
                        variant: "text-lg/bold",
                        color: "header-primary",
                        children: ee.intl.string(ee.t.j2d6Km),
                    }),
                    body: (0, r.jsx)(g.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: eL.message,
                    }),
                    actions: [
                        {
                            onClick: eI,
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
                            onClick: eI,
                            text: ee.intl.string(ee.t.cpT0Cq),
                        },
                    ],
                };
    let tu = (e) => {
            e$(e), ew(null), ex("AUTHORIZE_SCOPES");
        },
        td = (e, t) => {
            eW((n) => (e ? f.Od(n, t) : f.IH(n, t)));
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
                label: ee.intl.string(ee.t.ZTNur7),
                body: (0, r.jsx)(el, {}),
            };
        case "SELECT_INSTALL_TYPE":
            if (null == e1)
                return {
                    label: ee.intl.string(ee.t.ZTNur7),
                    body: (0, r.jsx)(el, {}),
                };
            (y = (0, r.jsx)(z.Z, {
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
                    label: ee.intl.string(ee.t.ZTNur7),
                    body: (0, r.jsx)(el, {}),
                };
            let tE = null == eL || eL instanceof Error ? {} : eL,
                tb = null == eB ? void 0 : eB.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                ty = eJ === u.Y.GUILD_INSTALL && e8.includes(d.x.WEBHOOK_INCOMING),
                tO =
                    ty ||
                    (eJ === u.Y.GUILD_INSTALL && (e8.includes(d.x.BOT) || e8.includes(d.x.APPLICATIONS_COMMANDS))),
                tv =
                    (0, x.yE)(null != (n = eP.application.flags) ? n : 0, J.udG.EMBEDDED) &&
                    eJ === u.Y.USER_INSTALL &&
                    e4.enabled;
            (y = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(V.Z, {
                        application: eP.application,
                        accountScopes: e5,
                    }),
                    (0, r.jsx)(H.Z, {
                        application: eP.application,
                        accountScopes: e5,
                        requestedScopes: e8,
                        integrationType: eJ,
                        errors: tE,
                        isTrustedName: eb || eX,
                        noDivider: !tv && !tO && !ty && e4.enabled,
                    }),
                    tv
                        ? (0, r.jsx)("div", {
                              className: et.mobilePushContainer,
                              children: (0, r.jsx)(g.rsf, {
                                  label: ee.intl.string(ee.t["Pkw//o"]),
                                  onChange: ez,
                                  description: ee.intl.string(ee.t.hw1nKf),
                                  checked: eK,
                              }),
                          })
                        : null,
                    (0, r.jsx)("div", {
                        className: et.intObserver,
                        ref: tc,
                    }),
                    tO
                        ? (0, r.jsx)(W.Z, {
                              error: (null != (o = null != (a = tE[d.x.BOT]) ? a : tE[d.x.APPLICATIONS_COMMANDS])
                                  ? o
                                  : [])[0],
                              selectedGuildId: eZ,
                              onGuildChange: eF,
                              guilds: null != tb ? tb : [],
                              disabled: "" !== eZ && null != eZ && !0 === em,
                          })
                        : null,
                    ty
                        ? (0, r.jsx)(Q.Z, {
                              error: (null != (c = tE[d.x.WEBHOOK_INCOMING]) ? c : [])[0],
                              selectedChannelId: eV,
                              selectedGuildId: eZ,
                              onChannelChange: eH,
                          })
                        : null,
                ],
            })),
                e8.includes(d.x.BOT) && !f.fS(e6, L.Hn) && (A = "AUTHORIZE_BOT_PERMISSIONS"),
                to.length > 1 && (S = "SELECT_INSTALL_TYPE"),
                (t_ = (tO && null == eQ) || (ty && null == eV)),
                (tf = !0);
            break;
        case "AUTHORIZE_BOT_PERMISSIONS":
            if (null == eP)
                return {
                    label: ee.intl.string(ee.t.ZTNur7),
                    body: (0, r.jsx)(el, {}),
                };
            (y = (0, r.jsx)(Y.Z, {
                application: eP.application,
                permissions: e6,
                deniedPermissions: eY,
                onPermissionsChange: td,
                guild: eQ,
            })),
                (S = "AUTHORIZE_SCOPES"),
                (tf = !0);
    }
    let tI = [];
    if (tp && null != eP) {
        let e =
            null != (h = null == eP ? void 0 : eP.application.approximate_guild_count)
                ? h
                : null == eP || null == (_ = eP.bot)
                  ? void 0
                  : _.approximate_guild_count;
        N = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(F.Z, {
                    application: eP.application,
                    scopes: e8,
                    disclosures: e9,
                    redirectUri: null != (m = eP.redirect_uri) ? m : null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: ey,
                }),
                (0, r.jsx)("div", {
                    className: et.intObserver,
                    ref: tc,
                }),
            ],
        });
    }
    return (
        th &&
            null != eP &&
            null != eq &&
            (q = (0, r.jsx)(K.Z, {
                user: eq,
                application: eP.application,
                bot: eP.bot,
                accountScopes: e5,
                showLogout: eg || !1,
                location: eN,
                scopes: e8,
            })),
        tm &&
            (tI.push(
                null != S
                    ? {
                          variant: "secondary",
                          onClick: () => ex(S),
                          text: ee.intl.string(ee.t["13/7kX"]),
                      }
                    : {
                          variant: "secondary",
                          onClick: () => tr(!1),
                          text: ee.intl.string(ee.t["ETE/oC"]),
                      },
            ),
            "SELECT_INSTALL_TYPE" !== eD &&
                tI.push(
                    eU
                        ? {
                              onClick: null != A ? () => ex(A) : () => tr(!0),
                              loading: ej,
                              disabled: null == N || t_,
                              text: t_
                                  ? ee.intl.string(ee.t.BwwiSM)
                                  : null != A
                                    ? ee.intl.string(ee.t["3PatSz"])
                                    : ee.intl.string(ee.t["y+/PE9"]),
                          }
                        : {
                              disabled: !0,
                              loading: ej,
                              text: ee.intl.string(ee.t.N22i9F),
                              icon: g.cQm,
                          },
                )),
        {
            header: q,
            body: y,
            actions: tI,
            nextStep: A,
            appDetails: N,
            sendAuthorize: tr,
            hasContentBackground: tf,
            noPadding: tg,
        }
    );
}
function eu(e, t) {
    var n, i;
    if (null == t.location || (null != e.callback && e.callback(t))) return;
    let { host: a, pathname: o, searchParams: s } = null != (n = M.Z.toURLSafe(t.location)) ? n : {},
        l = M.Z.isDiscordHostname(null != a ? a : null) || window.location.host === a;
    l && o === J.Z5c.OAUTH2_AUTHORIZED
        ? (0, h.h7)((e) =>
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
          ? (0, h.h7)((e) => {
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
                        : ee.intl.string(ee.t.mqn873);
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
    if ((0, N.g)()) return void A.Z.openCreateGuildModal({ onSuccess: (n) => ef(ea(er({}, e), { guildId: n }), t) });
    ef(e, t);
}
function ef(e, t) {
    (0, h.h7)(
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
    let { hostname: n = "", host: r, pathname: i, search: a } = null != (t = M.Z.toURLSafe(e)) ? t : {};
    return null != i &&
        null != a &&
        (M.Z.isDiscordHostname(n) || r === window.location.host) &&
        (i.startsWith("/api".concat(J.ANM.OAUTH2_AUTHORIZE)) || i.startsWith(J.Z5c.OAUTH2_AUTHORIZE))
        ? (0, j.y)(a)
        : null;
}

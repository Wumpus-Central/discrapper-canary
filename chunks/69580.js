n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: () => es,
        OAuth2AuthorizePage: () => ea,
        getOAuth2AuthorizeProps: () => ep,
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
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(828700),
    l = n(907331),
    c = n(873546),
    u = n(373793),
    d = n(243814),
    f = n(149765),
    p = n(95015),
    _ = n(793030),
    m = n(442837),
    h = n(952265),
    g = n(159691),
    E = n(481060),
    b = n(893776),
    y = n(367907),
    O = n(702493),
    v = n(162685),
    S = n(728345),
    I = n(979200),
    T = n(589414),
    C = n(388905),
    A = n(560067),
    N = n(353926),
    P = n(341298),
    R = n(703656),
    w = n(973616),
    D = n(598077),
    x = n(314897),
    L = n(700785),
    j = n(591759),
    M = n(807675),
    k = n(489863),
    U = n(228763),
    G = n(422559),
    Z = n(713938),
    F = n(166148),
    B = n(807989),
    V = n(627799),
    H = n(260430),
    Y = n(668185),
    W = n(407546),
    K = n(41259),
    z = n(28752),
    q = n(787025),
    Q = n(397394),
    X = n(574384),
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
function eo(e, t) {
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
function ea() {
    let e = (0, s.TH)(),
        t = i.useMemo(() => (0, M.y)(e.search), [e.search]);
    (0, O.Z)();
    let o = !e.search.includes("response_type"),
        [a, l] = i.useState(!1),
        u = i.useRef(!1),
        [d, f] = i.useState(null),
        p = !c.tq && !a && (o || !x.default.isAuthenticated());
    if (
        (i.useEffect(() => {
            if (c.eL && o) {
                let t = new URL("discord://action/oauth2/authorize");
                (t.search = e.search), window.open(t.toString(), "_self");
            } else
                c.tq ||
                    (!o && x.default.isAuthenticated()) ||
                    u.current ||
                    ((u.current = !0),
                    Promise.resolve()
                        .then(n.bind(n, 536285))
                        .then((t) => {
                            let { default: n } = t;
                            if (o)
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
        }, [e.search, o]),
        p && !1 !== d)
    ) {
        let e;
        return (
            (e =
                !0 === d
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(C.Dx, { children: ee.intl.string(ee.t.csrAMJ) }),
                              (0, r.jsx)(C.DK, {
                                  children: o ? ee.intl.string(ee.t["m1+IBn"]) : ee.intl.string(ee.t.kRzrSO),
                              }),
                              (0, r.jsx)(g.zxk, {
                                  onClick: () => l(!0),
                                  variant: "primary",
                                  text: ee.intl.string(ee.t.fIv16B),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(C.Dx, { children: ee.intl.string(ee.t["Z+hCVU"]) }),
                              (0, r.jsx)(E.$jN, {}),
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
            eo(er({ transitionState: _.Dvm.ENTERED }, t), {
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
            header: o,
            body: s,
            actions: l,
            nextStep: c,
            appDetails: u,
            hasContentBackground: d,
            noPadding: f,
            modalSize: p,
        } = ec(er({}, e)),
        _ = v.w.useExperiment({ location: "oauth2_authorize" }),
        m =
            null != o || null != s || null != u
                ? (0, r.jsxs)("div", {
                      className: et.authorize,
                      children: [
                          o,
                          (0, r.jsxs)("div", {
                              className: et.contentWrapper,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: a()(
                                          et.content,
                                          d ? et.contentBackground : null,
                                          f ? et.noPadding : null,
                                      ),
                                      children: [s, null != c || _.enabled ? null : u],
                                  }),
                                  null == c && _.enabled
                                      ? (0, r.jsx)("div", {
                                            className: a()(
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
        eo(er({}, e), {
            onClose: () => {
                var t;
                return Promise.resolve(null == (t = e.onClose) ? void 0 : t.call(e));
            },
            size: p,
            actions: l,
            title: n,
            subtitle: i,
            "aria-label": t,
            children: m,
        }),
    );
}
function el() {
    return (0, r.jsx)("div", {
        className: et.loadingContainer,
        children: (0, r.jsx)(E.$jN, { className: et.spinner }),
    });
}
function ec(e) {
    var t, n, o, a, c, _, h, g;
    let O,
        C,
        A,
        P,
        q,
        {
            clientId: $,
            responseType: en,
            redirectUri: er,
            codeChallenge: ei,
            codeChallengeMethod: eo,
            state: ea,
            nonce: es,
            prompt: ec,
            authorizations: eu,
            scopes: ed,
            permissions: ef,
            guildId: ep,
            channelId: e_,
            integrationType: em,
            disableGuildSelect: eh = !1,
            showLogout: eg = !1,
            cancelCompletesFlow: eE = !0,
            isTrustedName: eb = !1,
            isEmbeddedFlow: ey = !1,
            callback: eO,
            callbackWithoutPost: ev,
            onClose: eS,
            disclosures: eI,
            isExternalStandaloneOAuthPage: eT = !1,
            isTwoWayLinkDiscordConsent: eC = !1,
        } = e,
        eA = null != em ? (null == eu ? void 0 : eu.get(em)) : void 0,
        eN = (0, s.TH)(),
        eP = (0, m.e7)([N.Z], () => N.Z.hasLoadedExperiments);
    i.useEffect(() => {
        x.default.isAuthenticated() && !eP && b.Z.getExperiments();
    }, [eP]);
    let [eR, ew] = i.useState(null),
        [eD, ex] = i.useState(null),
        [eL, ej] = i.useState(null),
        [eM, ek] = i.useState(!1),
        [eU, eG] = i.useState(!1),
        eZ = null == eR ? void 0 : eR.guilds,
        [eF, eB] = i.useState(null != ep ? ep : null),
        [eV, eH] = i.useState(null != e_ ? e_ : null),
        [eY, eW] = i.useState(L.Hn),
        [eK, ez] = i.useState(!1),
        eq = i.useMemo(
            () => ((null == eR ? void 0 : eR.user) != null ? new D.Z(eR.user) : null),
            [null == eR ? void 0 : eR.user],
        ),
        eQ = (0, T.Z)(null != (t = null == eR ? void 0 : eR.application) ? t : null),
        eX = i.useMemo(() => (null == eZ ? void 0 : eZ.find((e) => e.id === eF)), [eZ, eF]),
        [eJ, e$] = i.useState(null),
        e0 = i.useMemo(() => {
            var e;
            return (
                null == eA && null == em && (null != (e = null == ed ? void 0 : ed.length) ? e : 0) === 0 && null == er
            );
        }, [eA, null == ed ? void 0 : ed.length, er, em]),
        [e1, e3] = i.useState(null);
    i.useEffect(() => {
        e0 && S.ZP.fetchApplication($).then((e) => e3(w.ZP.createFromServer(e)));
    }, [$, e0]);
    let e2 = i.useMemo(() => {
            var e, t;
            return null == eJ
                ? null
                : null == e1 || null == (t = e1.integrationTypesConfig) || null == (e = t[eJ])
                  ? void 0
                  : e.oauth2InstallParams;
        }, [null == e1 ? void 0 : e1.integrationTypesConfig, eJ]),
        e4 = v.w.useExperiment({ location: "oauth2_authorize" }),
        { requestedScopes: e5, accountScopes: e8 } = i.useMemo(() => {
            let e = e0 ? (null == e2 ? void 0 : e2.scopes) : ed,
                t = (0, M.K)(null != e ? e : []),
                n = Z.Qe.filter((e) => t.includes(e));
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
        [e9, te] = i.useState(null != eI ? eI : []),
        [tt, tn] = i.useState(null != eI && eI.length > 0);
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
                ej(
                    Error(
                        null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0]),
                    ),
                );
            } finally {
                e7.current = !1;
            }
        };
        if (null == eI) {
            if (!x.default.isAuthenticated()) return void (0, k.c$)(eN, "oauth2_error_not_authenticated");
            e();
        }
    }, [$, eN, eI, te, ej, tn, ex]);
    let tr = i.useCallback(
            async (e) => {
                if (null != ev) {
                    ek(!0), ev(e);
                    return;
                }
                if (!e && !eE) {
                    null != eO &&
                        (eO({
                            application: null == eR ? void 0 : eR.application,
                            guild: eX,
                        }),
                        null == eS || eS());
                    return;
                }
                if (null == eJ) return void ej(Error("No integration type was selected."));
                try {
                    ek(!0);
                    let n = await (0, k.Iq)({
                        authorize: e,
                        clientId: $,
                        scopes: e5,
                        responseType: en,
                        redirectUri: er,
                        codeChallenge: ei,
                        codeChallengeMethod: eo,
                        state: ea,
                        nonce: es,
                        integrationType: eJ,
                        permissions: f.Od(e6, eY),
                        guildId: eJ === u.Y.GUILD_INSTALL && null != eF ? eF : void 0,
                        channelId: eJ === u.Y.GUILD_INSTALL && null != eV ? eV : void 0,
                        dmSettings: { allowMobilePush: eK },
                    });
                    if ((e && (await (0, I.x9)($, e9)), null != eO))
                        eO({
                            application: null == eR ? void 0 : eR.application,
                            location: n.location,
                            guild: eX,
                        }),
                            null == eS || eS();
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
                    (null == e ? void 0 : e.message) != null && "" !== e.message ? ej(Error(e.message)) : ej(e),
                        ex("AUTHORIZE_SCOPES"),
                        ek(!1);
                }
            },
            [
                ev,
                eE,
                eO,
                null == eR ? void 0 : eR.application,
                eX,
                eS,
                $,
                e5,
                en,
                er,
                ei,
                eo,
                ea,
                es,
                e6,
                eY,
                eF,
                eJ,
                eV,
                e9,
                eK,
            ],
        ),
        ti = i.useRef(!1),
        to = i.useCallback(async () => {
            if (!x.default.isAuthenticated()) return void (0, k.c$)(eN, "oauth2_error_not_authenticated");
            if (!e7.current && !ti.current) {
                ti.current = !0;
                try {
                    let e =
                        null != eA
                            ? eA
                            : await (0, k.Ww)({
                                  clientId: $,
                                  scopes: e5,
                                  responseType: en,
                                  redirectUri: er,
                                  codeChallenge: ei,
                                  codeChallengeMethod: eo,
                                  state: ea,
                                  nonce: es,
                                  integrationType: null != eJ ? eJ : void 0,
                              });
                    ew((0, U.d)(e)),
                        ec === F.s.NONE && e.authorized && !tt && tr(!0),
                        (0, y.yw)(J.rMx.OAUTH2_AUTHORIZE_VIEWED, {
                            application_id: e.application.id,
                            mobile_push_notification_default_setting: !1,
                        });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, k.c$)(eN, "oauth2_error_unauthorized");
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
        }, [eN, eA, $, e5, en, er, ei, eo, ea, es, eJ, ec, tr, tt]),
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
            (0, y.yw)(J.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eD,
                application_id: $,
                integration_type: eJ,
                scopes: e5,
                permissions: e6.toString(),
                mobile_push_notification_default_setting: !1,
            }));
    }, [$, eJ, e6, e5, eD]),
        i.useEffect(() => {
            if (null == eD && (!e0 || null != e1) && eP)
                if (null != eA) {
                    var e;
                    e$(null != (e = eA.integration_type) ? e : u.Y.GUILD_INSTALL), ex("AUTHORIZE_SCOPES");
                } else
                    ta.length > 1
                        ? ex("SELECT_INSTALL_TYPE")
                        : (1 === ta.length ? e$(ta[0]) : null != em ? e$(em) : e$(u.Y.GUILD_INSTALL),
                          ex("AUTHORIZE_SCOPES"));
        }, [eA, ta, e1, e0, em, eD, eP]),
        i.useEffect(() => {
            if (null == eJ || null != eR || null != eL) return;
            eJ === u.Y.USER_INSTALL && (eB(null), eH(null));
            let e = e5.filter((e) => !Z.ak.includes(e));
            0 === e5.length
                ? ej(Error("No scopes were provided."))
                : e.length > 0
                  ? ej(Error("Invalid scope: ".concat(e[0])))
                  : (0, G._$)(e6)
                    ? ej(Error("Invalid permission(s) provided."))
                    : to();
        }, [tt, to, e5, e6, eJ, eR, eL]);
    let tl = i.useCallback((e) => {
            e && eG(!0);
        }, []),
        tc = (0, l.O)(tl);
    if (eL instanceof Error)
        return eT
            ? { body: (0, r.jsx)(Q.Lk, { message: eL.message }) }
            : eC
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
                            onClick: eS,
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
                            onClick: eS,
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
        tp = !1,
        t_ = !0,
        tm = !0,
        th = !0,
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
            (O = (0, r.jsx)(z.Z, {
                application: e1,
                onSelect: tu,
            })),
                (t_ = !1),
                (tm = !1),
                (th = !1),
                (tg = !0);
            break;
        case "AUTHORIZE_SCOPES":
            if (null == eR || null == eq || null == eJ)
                return {
                    label: ee.intl.string(ee.t.ZTNur7),
                    body: (0, r.jsx)(el, {}),
                };
            let tE = null == eL || eL instanceof Error ? {} : eL,
                tb = null == eZ ? void 0 : eZ.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                ty = eJ === u.Y.GUILD_INSTALL && e5.includes(d.x.WEBHOOK_INCOMING),
                tO =
                    ty ||
                    (eJ === u.Y.GUILD_INSTALL && (e5.includes(d.x.BOT) || e5.includes(d.x.APPLICATIONS_COMMANDS))),
                tv =
                    (0, p.yE)(null != (n = eR.application.flags) ? n : 0, J.udG.EMBEDDED) &&
                    eJ === u.Y.USER_INSTALL &&
                    e4.enabled;
            (O = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(V.Z, {
                        application: eR.application,
                        accountScopes: e8,
                    }),
                    (0, r.jsx)(H.Z, {
                        application: eR.application,
                        accountScopes: e8,
                        requestedScopes: e5,
                        integrationType: eJ,
                        errors: tE,
                        isTrustedName: eb || eQ,
                        noDivider: !tv && !tO && !ty && e4.enabled,
                    }),
                    tv
                        ? (0, r.jsx)("div", {
                              className: et.mobilePushContainer,
                              children: (0, r.jsx)(E.rsf, {
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
                              error: (null != (a = null != (o = tE[d.x.BOT]) ? o : tE[d.x.APPLICATIONS_COMMANDS])
                                  ? a
                                  : [])[0],
                              selectedGuildId: eF,
                              onGuildChange: eB,
                              guilds: null != tb ? tb : [],
                              disabled: "" !== eF && null != eF && !0 === eh,
                          })
                        : null,
                    ty
                        ? (0, r.jsx)(X.Z, {
                              error: (null != (c = tE[d.x.WEBHOOK_INCOMING]) ? c : [])[0],
                              selectedChannelId: eV,
                              selectedGuildId: eF,
                              onChannelChange: eH,
                          })
                        : null,
                ],
            })),
                e5.includes(d.x.BOT) && !f.fS(e6, L.Hn) && (A = "AUTHORIZE_BOT_PERMISSIONS"),
                ta.length > 1 && (C = "SELECT_INSTALL_TYPE"),
                (tp = (tO && null == eX) || (ty && null == eV)),
                (tf = !0);
            break;
        case "AUTHORIZE_BOT_PERMISSIONS":
            if (null == eR)
                return {
                    label: ee.intl.string(ee.t.ZTNur7),
                    body: (0, r.jsx)(el, {}),
                };
            (O = (0, r.jsx)(Y.Z, {
                application: eR.application,
                permissions: e6,
                deniedPermissions: eY,
                onPermissionsChange: td,
                guild: eX,
            })),
                (C = "AUTHORIZE_SCOPES"),
                (tf = !0);
    }
    let tS = [];
    if (t_ && null != eR) {
        let e =
            null != (h = null == eR ? void 0 : eR.application.approximate_guild_count)
                ? h
                : null == eR || null == (_ = eR.bot)
                  ? void 0
                  : _.approximate_guild_count;
        P = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(B.Z, {
                    application: eR.application,
                    scopes: e5,
                    disclosures: e9,
                    redirectUri: null != (g = eR.redirect_uri) ? g : null,
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
        tm &&
            null != eR &&
            null != eq &&
            (q = (0, r.jsx)(K.Z, {
                user: eq,
                application: eR.application,
                bot: eR.bot,
                accountScopes: e8,
                showLogout: eg || !1,
                location: eN,
                scopes: e5,
            })),
        th &&
            (tS.push(
                null != C
                    ? {
                          variant: "secondary",
                          onClick: () => ex(C),
                          text: ee.intl.string(ee.t["13/7kX"]),
                      }
                    : {
                          variant: "secondary",
                          onClick: () => tr(!1),
                          text: ee.intl.string(ee.t["ETE/oC"]),
                      },
            ),
            "SELECT_INSTALL_TYPE" !== eD &&
                tS.push(
                    eU
                        ? {
                              onClick: null != A ? () => ex(A) : () => tr(!0),
                              loading: eM,
                              disabled: null == P || tp,
                              text: tp
                                  ? ee.intl.string(ee.t.BwwiSM)
                                  : null != A
                                    ? ee.intl.string(ee.t["3PatSz"])
                                    : ee.intl.string(ee.t["y+/PE9"]),
                          }
                        : {
                              disabled: !0,
                              loading: eM,
                              text: ee.intl.string(ee.t.N22i9F),
                              icon: E.cQm,
                          },
                )),
        {
            header: q,
            body: O,
            actions: tS,
            nextStep: A,
            appDetails: P,
            sendAuthorize: tr,
            hasContentBackground: tf,
            noPadding: tg,
        }
    );
}
function eu(e, t) {
    var n, i;
    if (null == t.location || (null != e.callback && e.callback(t))) return;
    let { host: o, pathname: a, searchParams: s } = null != (n = j.Z.toURLSafe(t.location)) ? n : {},
        l = j.Z.isDiscordHostname(null != o ? o : null) || window.location.host === o;
    l && a === J.Z5c.OAUTH2_AUTHORIZED
        ? (0, h.openModal)((e) =>
              (0, r.jsx)(
                  Q.jO,
                  er(
                      {
                          guild: t.guild,
                          application: t.application,
                      },
                      e,
                  ),
              ),
          )
        : l && (null == a ? void 0 : a.startsWith(J.Z5c.OAUTH2_ERROR))
          ? (0, h.openModal)((e) => {
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
                        eo(er({}, e), {
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
function ed(e, t) {
    if ((0, P.g)()) return void A.Z.openCreateGuildModal({ onSuccess: (n) => ef(eo(er({}, e), { guildId: n }), t) });
    ef(e, t);
}
function ef(e, t) {
    (0, h.openModal)(
        (t) =>
            (0, r.jsx)(
                es,
                eo(er({}, t, e), {
                    cancelCompletesFlow: !1,
                    callback: eu.bind(null, e),
                }),
            ),
        { onCloseCallback: t },
    );
}
function ep(e) {
    var t;
    let { hostname: n = "", host: r, pathname: i, search: o } = null != (t = j.Z.toURLSafe(e)) ? t : {};
    return null != i &&
        null != o &&
        (j.Z.isDiscordHostname(n) || r === window.location.host) &&
        (i.startsWith("/api".concat(J.ANM.OAUTH2_AUTHORIZE)) || i.startsWith(J.Z5c.OAUTH2_AUTHORIZE))
        ? (0, M.y)(o)
        : null;
}

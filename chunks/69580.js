(n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: () => el,
        OAuth2AuthorizePage: () => es,
        getOAuth2AuthorizeProps: () => ep,
        openOAuth2Modal: () => ef,
        openOAuth2ModalWithCreateGuildModal: () => e_,
        useOAuth2AuthorizeForm: () => eu
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
    n(539854));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(114858),
    l = n(873546),
    c = n(373793),
    u = n(243814),
    d = n(149765),
    _ = n(442837),
    f = n(952265),
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
    A = n(388905),
    N = n(560067),
    C = n(353926),
    R = n(341298),
    P = n(703656),
    w = n(973616),
    D = n(598077),
    L = n(314897),
    x = n(630388),
    M = n(700785),
    k = n(591759),
    j = n(807675),
    U = n(489863),
    G = n(228763),
    B = n(422559),
    V = n(713938),
    F = n(166148),
    Z = n(807989),
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
    en = n(453214);
function er(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function ei(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                er(e, t, n[t]);
            }));
    }
    return e;
}
function ea(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
        t = i.useMemo(() => (0, j.y)(e.search), [e.search]);
    (0, v.Z)();
    let a = !e.search.includes('response_type'),
        [o, c] = i.useState(!1),
        u = i.useRef(!1),
        [d, _] = i.useState(null),
        f = !l.tq && !o && (a || !L.default.isAuthenticated());
    if (
        (i.useEffect(() => {
            if (l.eL && a) {
                let t = new URL('discord://action/oauth2/authorize');
                ((t.search = e.search), window.open(t.toString(), '_self'));
            } else
                l.tq ||
                    (!a && L.default.isAuthenticated()) ||
                    u.current ||
                    ((u.current = !0),
                    Promise.resolve()
                        .then(n.bind(n, 536285))
                        .then((t) => {
                            let { default: n } = t;
                            if (a)
                                n.request($.Etm.DEEP_LINK, {
                                    type: ee.jE.OAUTH2,
                                    params: { search: e.search }
                                })
                                    .then((e) => {
                                        _(null != e && e);
                                    })
                                    .catch(() => _(!1))
                                    .then(() => n.disconnect());
                            else {
                                _(!0);
                                let t = new URLSearchParams(e.search);
                                n.request($.Etm.AUTHORIZE, {
                                    client_id: t.get('client_id'),
                                    scope: t.get('scope'),
                                    response_type: t.get('response_type'),
                                    redirect_uri: t.get('redirect_uri'),
                                    code_challenge: t.get('code_challenge'),
                                    code_challenge_method: t.get('code_challenge_method'),
                                    state: t.get('state'),
                                    permissions: t.get('permissions'),
                                    guild_id: t.get('guild_id'),
                                    channel_id: t.get('channel_id'),
                                    prompt: t.get('prompt'),
                                    disable_guild_select: t.get('disable_guild_select'),
                                    integration_type: t.get('integration_type'),
                                    nonce: t.get('nonce')
                                })
                                    .then((e) => {
                                        let { location: t } = e;
                                        t && (window.location.href = t);
                                    })
                                    .catch(() => _(!1))
                                    .then(() => n.disconnect());
                            }
                        }));
        }, [e.search, a]),
        f && !1 !== d)
    ) {
        let e;
        return (
            (e =
                !0 === d
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(A.Dx, { children: et.intl.string(et.t.csrAMD) }),
                              (0, r.jsx)(A.DK, { children: a ? et.intl.string(et.t['m1+IBg']) : et.intl.string(et.t.kRzrSE) }),
                              (0, r.jsx)(h.z, {
                                  onClick: () => c(!0),
                                  variant: 'primary',
                                  text: et.intl.string(et.t.fIv16O)
                              })
                          ]
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(A.Dx, { children: et.intl.string(et.t['Z+hCVV']) }), (0, r.jsx)(p.$, {})]
                      })),
            (0, r.jsx)(X.G, {
                removeChildWrapper: !0,
                children: (0, r.jsx)('div', {
                    className: en.deepLinkContainer,
                    children: e
                })
            })
        );
    }
    return (0, r.jsx)(X.G, {
        removeChildWrapper: !0,
        children: (0, r.jsx)(
            el,
            eo(ei({ transitionState: m.Dv.ENTERED }, t), {
                showLogout: !0,
                isExternalStandaloneOAuthPage: !0,
                hideHeader: !0
            })
        )
    });
}
function el(e) {
    let { label: t, title: n, subtitle: i, header: a, body: s, actions: l, nextStep: c, appDetails: u, hasContentBackground: d, noPadding: _, modalSize: f } = eu(ei({}, e)),
        p = I.w.useExperiment({ location: 'oauth2_authorize' }),
        h =
            null != a || null != s || null != u
                ? (0, r.jsxs)('div', {
                      className: en.authorize,
                      children: [
                          a,
                          (0, r.jsxs)('div', {
                              className: en.contentWrapper,
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: o()(en.content, d ? en.contentBackground : null, _ ? en.noPadding : null),
                                      children: [s, null != c || p.enabled ? null : u]
                                  }),
                                  null == c && p.enabled
                                      ? (0, r.jsx)('div', {
                                            className: o()(en.content, d ? en.contentBackground : null, _ ? en.noPadding : null),
                                            children: u
                                        })
                                      : null
                              ]
                          })
                      ]
                  })
                : null;
    return (0, r.jsx)(
        X.j,
        eo(ei({}, e), {
            onClose: () => {
                var t;
                return Promise.resolve(null == (t = e.onClose) ? void 0 : t.call(e));
            },
            size: f,
            actions: l,
            title: n,
            subtitle: i,
            'aria-label': t,
            children: h
        })
    );
}
function ec() {
    return (0, r.jsx)('div', {
        className: en.loadingContainer,
        children: (0, r.jsx)(p.$, { className: en.spinner })
    });
}
function eu(e) {
    var t, n, a, o, l, f;
    let p,
        h,
        m,
        v,
        A,
        { clientId: N, responseType: R, redirectUri: X, codeChallenge: ee, codeChallengeMethod: er, state: ei, nonce: ea, prompt: eo, authorizations: es, scopes: el, permissions: eu, guildId: ed, channelId: e_, integrationType: ef, disableGuildSelect: ep = !1, showLogout: eh = !1, cancelCompletesFlow: em = !0, isTrustedName: eg = !1, isEmbeddedFlow: eE = !1, callback: eb, callbackWithoutPost: ey, onClose: eO, disclosures: ev, isExternalStandaloneOAuthPage: eI = !1, isTwoWayLinkDiscordConsent: eT = !1 } = e,
        eS = null != ef ? (null == es ? void 0 : es.get(ef)) : void 0,
        eA = (0, s.TH)(),
        eN = (0, _.e7)([C.Z], () => C.Z.hasLoadedExperiments);
    i.useEffect(() => {
        L.default.isAuthenticated() && !eN && E.Z.getExperiments();
    }, [eN]);
    let [eC, eR] = i.useState(null),
        [eP, ew] = i.useState(null),
        [eD, eL] = i.useState(null),
        [ex, eM] = i.useState(!1),
        [ek, ej] = i.useState(!1),
        eU = null == eC ? void 0 : eC.guilds,
        [eG, eB] = i.useState(null != ed ? ed : null),
        [eV, eF] = i.useState(null != e_ ? e_ : null),
        [eZ, eH] = i.useState(M.Hn),
        [eY, eW] = i.useState(!1),
        eK = i.useMemo(() => ((null == eC ? void 0 : eC.user) != null ? new D.Z(eC.user) : null), [null == eC ? void 0 : eC.user]),
        ez = i.useMemo(() => (null == eU ? void 0 : eU.find((e) => e.id === eG)), [eU, eG]),
        [eq, eX] = i.useState(null),
        eQ = i.useMemo(() => {
            var e;
            return null == eS && null == ef && (null != (e = null == el ? void 0 : el.length) ? e : 0) === 0 && null == X;
        }, [eS, null == el ? void 0 : el.length, X, ef]),
        [eJ, e$] = i.useState(null);
    i.useEffect(() => {
        eQ && T.ZP.fetchApplication(N).then((e) => e$(w.ZP.createFromServer(e)));
    }, [N, eQ]);
    let e0 = i.useMemo(() => {
            var e, t;
            return null == eq ? null : null == eJ || null == (t = eJ.integrationTypesConfig) || null == (e = t[eq]) ? void 0 : e.oauth2InstallParams;
        }, [null == eJ ? void 0 : eJ.integrationTypesConfig, eq]),
        e1 = I.w.useExperiment({ location: 'oauth2_authorize' }),
        { requestedScopes: e2, accountScopes: e3 } = i.useMemo(() => {
            let e = eQ ? (null == e0 ? void 0 : e0.scopes) : el,
                t = (0, j.K)(null != e ? e : []),
                n = V.Qe.filter((e) => t.includes(e));
            return {
                requestedScopes: t,
                accountScopes: n
            };
        }, [null == e0 ? void 0 : e0.scopes, el, eQ]),
        e4 = i.useMemo(() => {
            var e;
            let t = eQ ? d.vB(null != (e = null == e0 ? void 0 : e0.permissions) ? e : 0) : eu;
            return null != t ? t : M.Hn;
        }, [null == e0 ? void 0 : e0.permissions, eu, eQ]),
        e5 = i.useRef(!1),
        [e6, e8] = i.useState(null != ev ? ev : []),
        [e7, e9] = i.useState(null != ev && ev.length > 0);
    i.useEffect(() => {
        if (e5.current) return;
        let e = async () => {
            e5.current = !0;
            try {
                let { disclosures: e, allAcked: t } = await (0, S.de)(N);
                (e9(!t), e8(e));
            } catch (n) {
                let { status: e, body: t } = n;
                if (401 === e) return void (0, U.c$)(eA, 'oauth2_error_failed_disclosures');
                eL(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
            } finally {
                e5.current = !1;
            }
        };
        if (null == ev) {
            if (!L.default.isAuthenticated()) return void (0, U.c$)(eA, 'oauth2_error_not_authenticated');
            e();
        }
    }, [N, eA, ev, e8, eL, e9, ew]);
    let te = i.useCallback(
            async (e) => {
                if (null != ey) {
                    (eM(!0), ey(e));
                    return;
                }
                if (!e && !em) {
                    null != eb &&
                        (eb({
                            application: null == eC ? void 0 : eC.application,
                            guild: ez
                        }),
                        null == eO || eO());
                    return;
                }
                if (null == eq) return void eL(Error('No integration type was selected.'));
                try {
                    eM(!0);
                    let n = await (0, U.Iq)({
                        authorize: e,
                        clientId: N,
                        scopes: e2,
                        responseType: R,
                        redirectUri: X,
                        codeChallenge: ee,
                        codeChallengeMethod: er,
                        state: ei,
                        nonce: ea,
                        integrationType: eq,
                        permissions: d.Od(e4, eZ),
                        guildId: eq === c.Y.GUILD_INSTALL && null != eG ? eG : void 0,
                        channelId: eq === c.Y.GUILD_INSTALL && null != eV ? eV : void 0,
                        dmSettings: { allowMobilePush: eY }
                    });
                    if (
                        (e &&
                            (await (0, S.x9)(N, e6),
                            setTimeout(() => {
                                b.Z.fetch();
                            }, 100)),
                        null != eb)
                    )
                        (eb({
                            application: null == eC ? void 0 : eC.application,
                            location: n.location,
                            guild: ez
                        }),
                            null == eO || eO());
                    else if (null != n.location) {
                        var t;
                        let e = null == (t = k.Z.toURLSafe(n.location)) ? void 0 : t.pathname;
                        k.Z.isDiscordUrl(n.location) && e === $.Z5c.OAUTH2_AUTHORIZED
                            ? (0, P.uL)($.Z5c.OAUTH2_AUTHORIZED, {
                                  state: {
                                      application: null == eC ? void 0 : eC.application,
                                      guild: ez
                                  }
                              })
                            : (window.location = n.location);
                    } else eM(!1);
                } catch (t) {
                    let e = t.body;
                    ((null == e ? void 0 : e.message) != null && '' !== e.message ? eL(Error(e.message)) : eL(e), ew('AUTHORIZE_SCOPES'), eM(!1));
                }
            },
            [ey, em, eb, null == eC ? void 0 : eC.application, ez, eO, N, e2, R, X, ee, er, ei, ea, e4, eZ, eG, eq, eV, e6, eY]
        ),
        tt = i.useRef(!1),
        tn = i.useCallback(async () => {
            if (!L.default.isAuthenticated()) return void (0, U.c$)(eA, 'oauth2_error_not_authenticated');
            if (!e5.current && !tt.current) {
                tt.current = !0;
                try {
                    let e =
                        null != eS
                            ? eS
                            : await (0, U.Ww)({
                                  clientId: N,
                                  scopes: e2,
                                  responseType: R,
                                  redirectUri: X,
                                  codeChallenge: ee,
                                  codeChallengeMethod: er,
                                  state: ei,
                                  nonce: ea,
                                  integrationType: null != eq ? eq : void 0
                              });
                    (eR((0, G.d)(e)),
                        eo === F.s.NONE && e.authorized && !e7 && te(!0),
                        (0, O.yw)($.rMx.OAUTH2_AUTHORIZE_VIEWED, {
                            application_id: e.application.id,
                            mobile_push_notification_default_setting: !1
                        }));
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, U.c$)(eA, 'oauth2_error_unauthorized');
                    eL(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
                } finally {
                    tt.current = !1;
                }
            }
        }, [eA, eS, N, e2, R, X, ee, er, ei, ea, eq, eo, te, e7]),
        tr = i.useMemo(() => {
            var e;
            return null != eJ && eQ
                ? Object.entries(null != (e = eJ.integrationTypesConfig) ? e : {})
                      .filter((e) => {
                          let [t, n] = e;
                          return null != n.oauth2InstallParams;
                      })
                      .map((e) => {
                          let [t, n] = e;
                          return Number(t);
                      })
                : [];
        }, [eJ, eQ]),
        ti = i.useRef(null);
    (i.useEffect(() => {
        eP !== ti.current &&
            ((ti.current = eP),
            (0, O.yw)($.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eP,
                application_id: N,
                integration_type: eq,
                scopes: e2,
                permissions: e4.toString(),
                mobile_push_notification_default_setting: !1
            }));
    }, [N, eq, e4, e2, eP]),
        i.useEffect(() => {
            if (null == eP && (!eQ || null != eJ) && eN)
                if (null != eS) {
                    var e;
                    (eX(null != (e = eS.integration_type) ? e : c.Y.GUILD_INSTALL), ew('AUTHORIZE_SCOPES'));
                } else tr.length > 1 ? ew('SELECT_INSTALL_TYPE') : (1 === tr.length ? eX(tr[0]) : null != ef ? eX(ef) : eX(c.Y.GUILD_INSTALL), ew('AUTHORIZE_SCOPES'));
        }, [eS, tr, eJ, eQ, ef, eP, eN]),
        i.useEffect(() => {
            if (null == eq || null != eC || null != eD) return;
            eq === c.Y.USER_INSTALL && (eB(null), eF(null));
            let e = e2.filter((e) => !V.ak.includes(e));
            0 === e2.length ? eL(Error('No scopes were provided.')) : e.length > 0 ? eL(Error('Invalid scope: '.concat(e[0]))) : (0, B._$)(e4) ? eL(Error('Invalid permission(s) provided.')) : tn();
        }, [e7, tn, e2, e4, eq, eC, eD]));
    let ta = i.useCallback((e) => {
            e && ej(!0);
        }, []),
        to = (0, y.O)(ta);
    if (eD instanceof Error)
        return eI
            ? { body: (0, r.jsx)(Q.Lk, { message: eD.message }) }
            : eT
              ? {
                    label: et.intl.string(et.t.j2d6Ki),
                    header: (0, r.jsx)(g.Text, {
                        variant: 'text-lg/bold',
                        color: 'header-primary',
                        children: et.intl.string(et.t.j2d6Ki)
                    }),
                    body: (0, r.jsx)(g.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: eD.message
                    }),
                    actions: [
                        {
                            onClick: eO,
                            text: et.intl.string(et.t.cpT0Cg)
                        }
                    ],
                    noPadding: !0
                }
              : {
                    title: et.intl.string(et.t.j2d6Ki),
                    subtitle: eD.message,
                    actions: [
                        {
                            onClick: eO,
                            text: et.intl.string(et.t.cpT0Cg)
                        }
                    ]
                };
    let ts = (e) => {
            (eX(e), eR(null), ew('AUTHORIZE_SCOPES'));
        },
        tl = (e, t) => {
            eH((n) => (e ? d.Od(n, t) : d.IH(n, t)));
        },
        tc = !1,
        tu = !1,
        td = !0,
        t_ = !0,
        tf = !0,
        tp = !1;
    switch (eP) {
        case null:
            return {
                label: et.intl.string(et.t.ZTNur6),
                body: (0, r.jsx)(ec, {})
            };
        case 'SELECT_INSTALL_TYPE':
            if (null == eJ)
                return {
                    label: et.intl.string(et.t.ZTNur6),
                    body: (0, r.jsx)(ec, {})
                };
            ((p = (0, r.jsx)(q.Z, {
                application: eJ,
                onSelect: ts
            })),
                (td = !1),
                (t_ = !1),
                (tf = !1),
                (tp = !0));
            break;
        case 'AUTHORIZE_SCOPES':
            if (null == eC || null == eK || null == eq)
                return {
                    label: et.intl.string(et.t.ZTNur6),
                    body: (0, r.jsx)(ec, {})
                };
            let th = null == eD || eD instanceof Error ? {} : eD,
                tm = null == eU ? void 0 : eU.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tg = eq === c.Y.GUILD_INSTALL && e2.includes(u.x.WEBHOOK_INCOMING),
                tE = tg || (eq === c.Y.GUILD_INSTALL && (e2.includes(u.x.BOT) || e2.includes(u.x.APPLICATIONS_COMMANDS))),
                tb = (0, x.yE)(null != (t = eC.application.flags) ? t : 0, $.udG.EMBEDDED) && eq === c.Y.USER_INSTALL && e1.enabled;
            ((p = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(H.Z, { accountScopes: e3 }),
                    (0, r.jsx)(Y.Z, {
                        application: eC.application,
                        accountScopes: e3,
                        requestedScopes: e2,
                        integrationType: eq,
                        errors: th,
                        isTrustedName: eg,
                        noDivider: !tb && !tE && !tg && e1.enabled
                    }),
                    tb
                        ? (0, r.jsx)(g.j7V, {
                              hideBorder: !0,
                              onChange: eW,
                              className: en.mobilePushContainer,
                              note: et.intl.string(et.t.hw1nKS),
                              value: eY,
                              children: (0, r.jsx)(g.Text, {
                                  variant: 'text-sm/medium',
                                  children: et.intl.string(et.t['Pkw//v'])
                              })
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: en.intObserver,
                        ref: to
                    }),
                    tE
                        ? (0, r.jsx)(K.Z, {
                              error: (null != (a = null != (n = th[u.x.BOT]) ? n : th[u.x.APPLICATIONS_COMMANDS]) ? a : [])[0],
                              selectedGuildId: eG,
                              onGuildChange: eB,
                              guilds: null != tm ? tm : [],
                              disabled: '' !== eG && null != eG && !0 === ep
                          })
                        : null,
                    tg
                        ? (0, r.jsx)(J.Z, {
                              error: (null != (o = th[u.x.WEBHOOK_INCOMING]) ? o : [])[0],
                              selectedChannelId: eV,
                              selectedGuildId: eG,
                              onChannelChange: eF
                          })
                        : null
                ]
            })),
                e2.includes(u.x.BOT) && !d.fS(e4, M.Hn) && (m = 'AUTHORIZE_BOT_PERMISSIONS'),
                tr.length > 1 && (h = 'SELECT_INSTALL_TYPE'),
                (tu = (tE && null == ez) || (tg && null == eV)),
                (tc = !0));
            break;
        case 'AUTHORIZE_BOT_PERMISSIONS':
            if (null == eC)
                return {
                    label: et.intl.string(et.t.ZTNur6),
                    body: (0, r.jsx)(ec, {})
                };
            ((p = (0, r.jsx)(W.Z, {
                application: eC.application,
                permissions: e4,
                deniedPermissions: eZ,
                onPermissionsChange: tl,
                guild: ez
            })),
                (h = 'AUTHORIZE_SCOPES'),
                (tc = !0));
    }
    let ty = [];
    if (td && null != eC) {
        let e = null == (l = eC.bot) ? void 0 : l.approximate_guild_count;
        v = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(Z.Z, {
                    application: eC.application,
                    scopes: e2,
                    disclosures: e6,
                    redirectUri: null != (f = eC.redirect_uri) ? f : null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: eE
                }),
                (0, r.jsx)('div', {
                    className: en.intObserver,
                    ref: to
                })
            ]
        });
    }
    return (
        t_ &&
            null != eC &&
            null != eK &&
            (A = (0, r.jsx)(z.Z, {
                user: eK,
                application: eC.application,
                bot: eC.bot,
                accountScopes: e3,
                showLogout: eh || !1,
                location: eA,
                scopes: e2
            })),
        tf &&
            (ty.push(
                null != h
                    ? {
                          variant: 'secondary',
                          onClick: () => ew(h),
                          text: et.intl.string(et.t['13/7kZ'])
                      }
                    : {
                          variant: 'secondary',
                          onClick: () => te(!1),
                          text: et.intl.string(et.t['ETE/oK'])
                      }
            ),
            'SELECT_INSTALL_TYPE' !== eP &&
                ty.push(
                    ek
                        ? {
                              onClick: null != m ? () => ew(m) : () => te(!0),
                              loading: ex,
                              disabled: null == v || tu,
                              text: tu ? et.intl.string(et.t.BwwiSE) : null != m ? et.intl.string(et.t['3PatS0']) : et.intl.string(et.t['y+/PEx'])
                          }
                        : {
                              disabled: !0,
                              loading: ex,
                              text: et.intl.string(et.t.N22i9P),
                              icon: g.cQm
                          }
                )),
        {
            header: A,
            body: p,
            actions: ty,
            nextStep: m,
            appDetails: v,
            sendAuthorize: te,
            hasContentBackground: tc,
            noPadding: tp
        }
    );
}
function ed(e, t) {
    var n, i;
    if (null == t.location || (null != e.callback && e.callback(t))) return;
    let { host: a, pathname: o, searchParams: s } = null != (n = k.Z.toURLSafe(t.location)) ? n : {},
        l = k.Z.isDiscordHostname(null != a ? a : null) || window.location.host === a;
    l && o === $.Z5c.OAUTH2_AUTHORIZED
        ? (0, f.h7)((e) =>
              (0, r.jsx)(
                  Q.jO,
                  ei(
                      {
                          guild: t.guild,
                          application: t.application
                      },
                      e
                  )
              )
          )
        : l && (null == o ? void 0 : o.startsWith($.Z5c.OAUTH2_ERROR))
          ? (0, f.h7)((e) => {
                var t, n;
                let i = null != (n = null != (t = null == s ? void 0 : s.get('error_description')) ? t : null == s ? void 0 : s.get('error')) ? n : et.intl.string(et.t['mqn87+']);
                return (
                    Array.isArray(i) && (i = i[0]),
                    (0, r.jsx)(
                        X.j,
                        eo(ei({}, e), {
                            children: (0, r.jsx)(Q.Lk, {
                                message: i,
                                onClose: e.onClose
                            })
                        })
                    )
                );
            })
          : null == (i = window.open(t.location, '_blank')) || i.focus();
}
function e_(e, t) {
    if ((0, R.g)('create-guild-and-oauth2-modal')) return void N.Z.openCreateGuildModal({ onSuccess: (n) => ef(eo(ei({}, e), { guildId: n }), t) });
    ef(e, t);
}
function ef(e, t) {
    (0, f.h7)(
        (t) =>
            (0, r.jsx)(
                el,
                eo(ei({}, t, e), {
                    cancelCompletesFlow: !1,
                    callback: ed.bind(null, e)
                })
            ),
        { onCloseCallback: t }
    );
}
function ep(e) {
    var t;
    let { hostname: n = '', host: r, pathname: i, search: a } = null != (t = k.Z.toURLSafe(e)) ? t : {};
    return null != i && null != a && (k.Z.isDiscordHostname(n) || r === window.location.host) && (i.startsWith('/api'.concat($.ANM.OAUTH2_AUTHORIZE)) || i.startsWith($.Z5c.OAUTH2_AUTHORIZE)) ? (0, j.y)(a) : null;
}

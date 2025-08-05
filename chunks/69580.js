(n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: () => ec,
        OAuth2AuthorizePage: () => el,
        getOAuth2AuthorizeProps: () => eh,
        openOAuth2Modal: () => ep,
        openOAuth2ModalWithCreateGuildModal: () => e_,
        useOAuth2AuthorizeForm: () => ed
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
    w = n(353926),
    R = n(341298),
    P = n(703656),
    D = n(973616),
    L = n(598077),
    x = n(314897),
    k = n(630388),
    j = n(700785),
    M = n(591759),
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
    $ = n(28752),
    X = n(787025),
    Q = n(397394),
    J = n(574384),
    ee = n(981631),
    et = n(186901),
    en = n(388032),
    er = n(453214);
function ei(e, t, n) {
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
function ea(e) {
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
                ei(e, t, n[t]);
            }));
    }
    return e;
}
function eo(e, t) {
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
function es(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eo(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function el() {
    let e = (0, s.TH)(),
        t = i.useMemo(() => (0, U.y)(e.search), [e.search]);
    (0, v.Z)();
    let a = !e.search.includes('response_type'),
        [o, c] = i.useState(!1),
        u = i.useRef(!1),
        [d, f] = i.useState(null),
        _ = !l.tq && !o && (a || !x.default.isAuthenticated());
    if (
        (i.useEffect(() => {
            if (l.eL && a) {
                let t = new URL('discord://action/oauth2/authorize');
                ((t.search = e.search), window.open(t.toString(), '_self'));
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
                                n.request(ee.Etm.DEEP_LINK, {
                                    type: et.jE.OAUTH2,
                                    params: { search: e.search }
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
                              (0, r.jsx)(N.Dx, { children: en.intl.string(en.t.csrAMD) }),
                              (0, r.jsx)(N.DK, { children: a ? en.intl.string(en.t['m1+IBg']) : en.intl.string(en.t.kRzrSE) }),
                              (0, r.jsx)(h.z, {
                                  onClick: () => c(!0),
                                  variant: 'primary',
                                  text: en.intl.string(en.t.fIv16O)
                              })
                          ]
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(N.Dx, { children: en.intl.string(en.t['Z+hCVV']) }), (0, r.jsx)(p.$, {})]
                      })),
            (0, r.jsx)(X.G, {
                removeChildWrapper: !0,
                children: (0, r.jsx)('div', {
                    className: er.deepLinkContainer,
                    children: e
                })
            })
        );
    }
    return (0, r.jsx)(X.G, {
        removeChildWrapper: !0,
        children: (0, r.jsx)(
            ec,
            es(ea({ transitionState: m.D.ENTERED }, t), {
                showLogout: !0,
                isExternalStandaloneOAuthPage: !0,
                hideHeader: !0
            })
        )
    });
}
function ec(e) {
    let { label: t, title: n, subtitle: i, header: a, body: s, actions: l, nextStep: c, appDetails: u, hasContentBackground: d, noPadding: f, modalSize: _ } = ed(ea({}, e)),
        p = I.w.useExperiment({ location: 'oauth2_authorize' }),
        h =
            null != a || null != s || null != u
                ? (0, r.jsxs)('div', {
                      className: er.authorize,
                      children: [
                          a,
                          (0, r.jsxs)('div', {
                              className: er.contentWrapper,
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: o()(er.content, d ? er.contentBackground : null, f ? er.noPadding : null),
                                      children: [s, null != c || p.enabled ? null : u]
                                  }),
                                  null == c && p.enabled
                                      ? (0, r.jsx)('div', {
                                            className: o()(er.content, d ? er.contentBackground : null, f ? er.noPadding : null),
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
        es(ea({}, e), {
            onClose: () => {
                var t;
                return Promise.resolve(null == (t = e.onClose) ? void 0 : t.call(e));
            },
            size: _,
            actions: l,
            title: n,
            subtitle: i,
            'aria-label': t,
            children: h
        })
    );
}
function eu() {
    return (0, r.jsx)('div', {
        className: er.loadingContainer,
        children: (0, r.jsx)(p.$, { className: er.spinner })
    });
}
function ed(e) {
    var t, n, a, o, l, _, p;
    let h,
        m,
        v,
        N,
        C,
        { clientId: R, responseType: X, redirectUri: et, codeChallenge: ei, codeChallengeMethod: ea, state: eo, nonce: es, prompt: el, authorizations: ec, scopes: ed, permissions: ef, guildId: e_, channelId: ep, integrationType: eh, disableGuildSelect: em = !1, showLogout: eg = !1, cancelCompletesFlow: eE = !0, isTrustedName: eb = !1, isEmbeddedFlow: ey = !1, callback: eO, callbackWithoutPost: ev, onClose: eI, disclosures: eT, isExternalStandaloneOAuthPage: eS = !1, isTwoWayLinkDiscordConsent: eA = !1 } = e,
        eN = null != eh ? (null == ec ? void 0 : ec.get(eh)) : void 0,
        eC = (0, s.TH)(),
        ew = (0, f.e7)([w.Z], () => w.Z.hasLoadedExperiments);
    i.useEffect(() => {
        x.default.isAuthenticated() && !ew && E.Z.getExperiments();
    }, [ew]);
    let [eR, eP] = i.useState(null),
        [eD, eL] = i.useState(null),
        [ex, ek] = i.useState(null),
        [ej, eM] = i.useState(!1),
        [eU, eG] = i.useState(!1),
        eB = null == eR ? void 0 : eR.guilds,
        [eZ, eF] = i.useState(null != e_ ? e_ : null),
        [eV, eH] = i.useState(null != ep ? ep : null),
        [eY, eW] = i.useState(j.Hn),
        [eK, ez] = i.useState(!1),
        eq = i.useMemo(() => ((null == eR ? void 0 : eR.user) != null ? new L.Z(eR.user) : null), [null == eR ? void 0 : eR.user]),
        e$ = (0, A.Z)(null != (t = null == eR ? void 0 : eR.application) ? t : null),
        eX = i.useMemo(() => (null == eB ? void 0 : eB.find((e) => e.id === eZ)), [eB, eZ]),
        [eQ, eJ] = i.useState(null),
        e0 = i.useMemo(() => {
            var e;
            return null == eN && null == eh && (null != (e = null == ed ? void 0 : ed.length) ? e : 0) === 0 && null == et;
        }, [eN, null == ed ? void 0 : ed.length, et, eh]),
        [e1, e2] = i.useState(null);
    i.useEffect(() => {
        e0 && T.ZP.fetchApplication(R).then((e) => e2(D.ZP.createFromServer(e)));
    }, [R, e0]);
    let e3 = i.useMemo(() => {
            var e, t;
            return null == eQ ? null : null == e1 || null == (t = e1.integrationTypesConfig) || null == (e = t[eQ]) ? void 0 : e.oauth2InstallParams;
        }, [null == e1 ? void 0 : e1.integrationTypesConfig, eQ]),
        e5 = I.w.useExperiment({ location: 'oauth2_authorize' }),
        { requestedScopes: e4, accountScopes: e6 } = i.useMemo(() => {
            let e = e0 ? (null == e3 ? void 0 : e3.scopes) : ed,
                t = (0, U.K)(null != e ? e : []),
                n = F.Qe.filter((e) => t.includes(e));
            return {
                requestedScopes: t,
                accountScopes: n
            };
        }, [null == e3 ? void 0 : e3.scopes, ed, e0]),
        e8 = i.useMemo(() => {
            var e;
            let t = e0 ? d.vB(null != (e = null == e3 ? void 0 : e3.permissions) ? e : 0) : ef;
            return null != t ? t : j.Hn;
        }, [null == e3 ? void 0 : e3.permissions, ef, e0]),
        e7 = i.useRef(!1),
        [e9, te] = i.useState(null != eT ? eT : []),
        [tt, tn] = i.useState(null != eT && eT.length > 0);
    i.useEffect(() => {
        if (e7.current) return;
        let e = async () => {
            e7.current = !0;
            try {
                let { disclosures: e, allAcked: t } = await (0, S.de)(R);
                (tn(!t), te(e));
            } catch (n) {
                let { status: e, body: t } = n;
                if (401 === e) return void (0, G.c$)(eC, 'oauth2_error_failed_disclosures');
                ek(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
            } finally {
                e7.current = !1;
            }
        };
        if (null == eT) {
            if (!x.default.isAuthenticated()) return void (0, G.c$)(eC, 'oauth2_error_not_authenticated');
            e();
        }
    }, [R, eC, eT, te, ek, tn, eL]);
    let tr = i.useCallback(
            async (e) => {
                if (null != ev) {
                    (eM(!0), ev(e));
                    return;
                }
                if (!e && !eE) {
                    null != eO &&
                        (eO({
                            application: null == eR ? void 0 : eR.application,
                            guild: eX
                        }),
                        null == eI || eI());
                    return;
                }
                if (null == eQ) return void ek(Error('No integration type was selected.'));
                try {
                    eM(!0);
                    let n = await (0, G.Iq)({
                        authorize: e,
                        clientId: R,
                        scopes: e4,
                        responseType: X,
                        redirectUri: et,
                        codeChallenge: ei,
                        codeChallengeMethod: ea,
                        state: eo,
                        nonce: es,
                        integrationType: eQ,
                        permissions: d.Od(e8, eY),
                        guildId: eQ === c.Y.GUILD_INSTALL && null != eZ ? eZ : void 0,
                        channelId: eQ === c.Y.GUILD_INSTALL && null != eV ? eV : void 0,
                        dmSettings: { allowMobilePush: eK }
                    });
                    if (
                        (e &&
                            (await (0, S.x9)(R, e9),
                            setTimeout(() => {
                                b.Z.fetch();
                            }, 100)),
                        null != eO)
                    )
                        (eO({
                            application: null == eR ? void 0 : eR.application,
                            location: n.location,
                            guild: eX
                        }),
                            null == eI || eI());
                    else if (null != n.location) {
                        var t;
                        let e = null == (t = M.Z.toURLSafe(n.location)) ? void 0 : t.pathname;
                        M.Z.isDiscordUrl(n.location) && e === ee.Z5c.OAUTH2_AUTHORIZED
                            ? (0, P.uL)(ee.Z5c.OAUTH2_AUTHORIZED, {
                                  state: {
                                      application: null == eR ? void 0 : eR.application,
                                      guild: eX
                                  }
                              })
                            : (window.location = n.location);
                    } else eM(!1);
                } catch (t) {
                    let e = t.body;
                    ((null == e ? void 0 : e.message) != null && '' !== e.message ? ek(Error(e.message)) : ek(e), eL('AUTHORIZE_SCOPES'), eM(!1));
                }
            },
            [ev, eE, eO, null == eR ? void 0 : eR.application, eX, eI, R, e4, X, et, ei, ea, eo, es, e8, eY, eZ, eQ, eV, e9, eK]
        ),
        ti = i.useRef(!1),
        ta = i.useCallback(async () => {
            if (!x.default.isAuthenticated()) return void (0, G.c$)(eC, 'oauth2_error_not_authenticated');
            if (!e7.current && !ti.current) {
                ti.current = !0;
                try {
                    let e =
                        null != eN
                            ? eN
                            : await (0, G.Ww)({
                                  clientId: R,
                                  scopes: e4,
                                  responseType: X,
                                  redirectUri: et,
                                  codeChallenge: ei,
                                  codeChallengeMethod: ea,
                                  state: eo,
                                  nonce: es,
                                  integrationType: null != eQ ? eQ : void 0
                              });
                    (eP((0, B.d)(e)),
                        el === V.s.NONE && e.authorized && !tt && tr(!0),
                        (0, O.yw)(ee.rMx.OAUTH2_AUTHORIZE_VIEWED, {
                            application_id: e.application.id,
                            mobile_push_notification_default_setting: !1
                        }));
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, G.c$)(eC, 'oauth2_error_unauthorized');
                    ek(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
                } finally {
                    ti.current = !1;
                }
            }
        }, [eC, eN, R, e4, X, et, ei, ea, eo, es, eQ, el, tr, tt]),
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
    (i.useEffect(() => {
        eD !== ts.current &&
            ((ts.current = eD),
            (0, O.yw)(ee.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eD,
                application_id: R,
                integration_type: eQ,
                scopes: e4,
                permissions: e8.toString(),
                mobile_push_notification_default_setting: !1
            }));
    }, [R, eQ, e8, e4, eD]),
        i.useEffect(() => {
            if (null == eD && (!e0 || null != e1) && ew)
                if (null != eN) {
                    var e;
                    (eJ(null != (e = eN.integration_type) ? e : c.Y.GUILD_INSTALL), eL('AUTHORIZE_SCOPES'));
                } else to.length > 1 ? eL('SELECT_INSTALL_TYPE') : (1 === to.length ? eJ(to[0]) : null != eh ? eJ(eh) : eJ(c.Y.GUILD_INSTALL), eL('AUTHORIZE_SCOPES'));
        }, [eN, to, e1, e0, eh, eD, ew]),
        i.useEffect(() => {
            if (null == eQ || null != eR || null != ex) return;
            eQ === c.Y.USER_INSTALL && (eF(null), eH(null));
            let e = e4.filter((e) => !F.ak.includes(e));
            0 === e4.length ? ek(Error('No scopes were provided.')) : e.length > 0 ? ek(Error('Invalid scope: '.concat(e[0]))) : (0, Z._$)(e8) ? ek(Error('Invalid permission(s) provided.')) : ta();
        }, [tt, ta, e4, e8, eQ, eR, ex]));
    let tl = i.useCallback((e) => {
            e && eG(!0);
        }, []),
        tc = (0, y.O)(tl);
    if (ex instanceof Error)
        return eS
            ? { body: (0, r.jsx)(Q.Lk, { message: ex.message }) }
            : eA
              ? {
                    label: en.intl.string(en.t.j2d6Ki),
                    header: (0, r.jsx)(g.Text, {
                        variant: 'text-lg/bold',
                        color: 'header-primary',
                        children: en.intl.string(en.t.j2d6Ki)
                    }),
                    body: (0, r.jsx)(g.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: ex.message
                    }),
                    actions: [
                        {
                            onClick: eI,
                            text: en.intl.string(en.t.cpT0Cg)
                        }
                    ],
                    noPadding: !0
                }
              : {
                    title: en.intl.string(en.t.j2d6Ki),
                    subtitle: ex.message,
                    actions: [
                        {
                            onClick: eI,
                            text: en.intl.string(en.t.cpT0Cg)
                        }
                    ]
                };
    let tu = (e) => {
            (eJ(e), eP(null), eL('AUTHORIZE_SCOPES'));
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
                body: (0, r.jsx)(eu, {})
            };
        case 'SELECT_INSTALL_TYPE':
            if (null == e1)
                return {
                    label: en.intl.string(en.t.ZTNur6),
                    body: (0, r.jsx)(eu, {})
                };
            ((h = (0, r.jsx)($.Z, {
                application: e1,
                onSelect: tu
            })),
                (tp = !1),
                (th = !1),
                (tm = !1),
                (tg = !0));
            break;
        case 'AUTHORIZE_SCOPES':
            if (null == eR || null == eq || null == eQ)
                return {
                    label: en.intl.string(en.t.ZTNur6),
                    body: (0, r.jsx)(eu, {})
                };
            let tE = null == ex || ex instanceof Error ? {} : ex,
                tb = null == eB ? void 0 : eB.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                ty = eQ === c.Y.GUILD_INSTALL && e4.includes(u.x.WEBHOOK_INCOMING),
                tO = ty || (eQ === c.Y.GUILD_INSTALL && (e4.includes(u.x.BOT) || e4.includes(u.x.APPLICATIONS_COMMANDS))),
                tv = (0, k.yE)(null != (n = eR.application.flags) ? n : 0, ee.udG.EMBEDDED) && eQ === c.Y.USER_INSTALL && e5.enabled;
            ((h = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(Y.Z, {
                        application: eR.application,
                        accountScopes: e6
                    }),
                    (0, r.jsx)(W.Z, {
                        application: eR.application,
                        accountScopes: e6,
                        requestedScopes: e4,
                        integrationType: eQ,
                        errors: tE,
                        isTrustedName: eb || e$,
                        noDivider: !tv && !tO && !ty && e5.enabled
                    }),
                    tv
                        ? (0, r.jsx)(g.j7V, {
                              hideBorder: !0,
                              onChange: ez,
                              className: er.mobilePushContainer,
                              note: en.intl.string(en.t.hw1nKS),
                              value: eK,
                              children: (0, r.jsx)(g.Text, {
                                  variant: 'text-sm/medium',
                                  children: en.intl.string(en.t['Pkw//v'])
                              })
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: er.intObserver,
                        ref: tc
                    }),
                    tO
                        ? (0, r.jsx)(z.Z, {
                              error: (null != (o = null != (a = tE[u.x.BOT]) ? a : tE[u.x.APPLICATIONS_COMMANDS]) ? o : [])[0],
                              selectedGuildId: eZ,
                              onGuildChange: eF,
                              guilds: null != tb ? tb : [],
                              disabled: '' !== eZ && null != eZ && !0 === em
                          })
                        : null,
                    ty
                        ? (0, r.jsx)(J.Z, {
                              error: (null != (l = tE[u.x.WEBHOOK_INCOMING]) ? l : [])[0],
                              selectedChannelId: eV,
                              selectedGuildId: eZ,
                              onChannelChange: eH
                          })
                        : null
                ]
            })),
                e4.includes(u.x.BOT) && !d.fS(e8, j.Hn) && (v = 'AUTHORIZE_BOT_PERMISSIONS'),
                to.length > 1 && (m = 'SELECT_INSTALL_TYPE'),
                (t_ = (tO && null == eX) || (ty && null == eV)),
                (tf = !0));
            break;
        case 'AUTHORIZE_BOT_PERMISSIONS':
            if (null == eR)
                return {
                    label: en.intl.string(en.t.ZTNur6),
                    body: (0, r.jsx)(eu, {})
                };
            ((h = (0, r.jsx)(K.Z, {
                application: eR.application,
                permissions: e8,
                deniedPermissions: eY,
                onPermissionsChange: td,
                guild: eX
            })),
                (m = 'AUTHORIZE_SCOPES'),
                (tf = !0));
    }
    let tI = [];
    if (tp && null != eR) {
        let e = null == (_ = eR.bot) ? void 0 : _.approximate_guild_count;
        N = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(H.Z, {
                    application: eR.application,
                    scopes: e4,
                    disclosures: e9,
                    redirectUri: null != (p = eR.redirect_uri) ? p : null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: ey
                }),
                (0, r.jsx)('div', {
                    className: er.intObserver,
                    ref: tc
                })
            ]
        });
    }
    return (
        th &&
            null != eR &&
            null != eq &&
            (C = (0, r.jsx)(q.Z, {
                user: eq,
                application: eR.application,
                bot: eR.bot,
                accountScopes: e6,
                showLogout: eg || !1,
                location: eC,
                scopes: e4
            })),
        tm &&
            (tI.push(
                null != m
                    ? {
                          variant: 'secondary',
                          onClick: () => eL(m),
                          text: en.intl.string(en.t['13/7kZ'])
                      }
                    : {
                          variant: 'secondary',
                          onClick: () => tr(!1),
                          text: en.intl.string(en.t['ETE/oK'])
                      }
            ),
            'SELECT_INSTALL_TYPE' !== eD &&
                tI.push(
                    eU
                        ? {
                              onClick: null != v ? () => eL(v) : () => tr(!0),
                              loading: ej,
                              disabled: null == N || t_,
                              text: t_ ? en.intl.string(en.t.BwwiSE) : null != v ? en.intl.string(en.t['3PatS0']) : en.intl.string(en.t['y+/PEx'])
                          }
                        : {
                              disabled: !0,
                              loading: ej,
                              text: en.intl.string(en.t.N22i9P),
                              icon: g.cQm
                          }
                )),
        {
            header: C,
            body: h,
            actions: tI,
            nextStep: v,
            appDetails: N,
            sendAuthorize: tr,
            hasContentBackground: tf,
            noPadding: tg
        }
    );
}
function ef(e, t) {
    var n, i;
    if (null == t.location || (null != e.callback && e.callback(t))) return;
    let { host: a, pathname: o, searchParams: s } = null != (n = M.Z.toURLSafe(t.location)) ? n : {},
        l = M.Z.isDiscordHostname(null != a ? a : null) || window.location.host === a;
    l && o === ee.Z5c.OAUTH2_AUTHORIZED
        ? (0, _.h7)((e) =>
              (0, r.jsx)(
                  Q.jO,
                  ea(
                      {
                          guild: t.guild,
                          application: t.application
                      },
                      e
                  )
              )
          )
        : l && (null == o ? void 0 : o.startsWith(ee.Z5c.OAUTH2_ERROR))
          ? (0, _.h7)((e) => {
                var t, n;
                let i = null != (n = null != (t = null == s ? void 0 : s.get('error_description')) ? t : null == s ? void 0 : s.get('error')) ? n : en.intl.string(en.t['mqn87+']);
                return (
                    Array.isArray(i) && (i = i[0]),
                    (0, r.jsx)(
                        X.j,
                        es(ea({}, e), {
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
    if ((0, R.g)('create-guild-and-oauth2-modal')) return void C.Z.openCreateGuildModal({ onSuccess: (n) => ep(es(ea({}, e), { guildId: n }), t) });
    ep(e, t);
}
function ep(e, t) {
    (0, _.h7)(
        (t) =>
            (0, r.jsx)(
                ec,
                es(ea({}, t, e), {
                    cancelCompletesFlow: !1,
                    callback: ef.bind(null, e)
                })
            ),
        { onCloseCallback: t }
    );
}
function eh(e) {
    var t;
    let { hostname: n = '', host: r, pathname: i, search: a } = null != (t = M.Z.toURLSafe(e)) ? t : {};
    return null != i && null != a && (M.Z.isDiscordHostname(n) || r === window.location.host) && (i.startsWith('/api'.concat(ee.ANM.OAUTH2_AUTHORIZE)) || i.startsWith(ee.Z5c.OAUTH2_AUTHORIZE)) ? (0, U.y)(a) : null;
}

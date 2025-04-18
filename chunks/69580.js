n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: () => eE,
        OAuth2AuthorizePage: () => eg,
        getOAuth2AuthorizeProps: () => eI,
        openOAuth2Modal: () => eO,
        openOAuth2ModalWithCreateGuildModal: () => ev,
        useOAuth2AuthorizeForm: () => eb
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
    n(997841);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(512969),
    l = n(873546),
    c = n(373793),
    u = n(243814),
    d = n(435935),
    f = n(149765),
    _ = n(442837),
    p = n(336317),
    h = n(693789),
    m = n(952265),
    g = n(21340),
    E = n(922770),
    b = n(481060),
    y = n(893776),
    v = n(384275),
    O = n(596454),
    I = n(434650),
    S = n(367907),
    T = n(702493),
    N = n(162685),
    A = n(424602),
    C = n(728345),
    R = n(979200),
    P = n(388905),
    w = n(560067),
    D = n(353926),
    L = n(341298),
    x = n(703656),
    M = n(973616),
    k = n(598077),
    j = n(314897),
    U = n(585483),
    G = n(176354),
    B = n(630388),
    F = n(700785),
    V = n(591759),
    Z = n(807675),
    H = n(489863),
    W = n(228763),
    Y = n(422559),
    K = n(713938),
    z = n(166148),
    q = n(807989),
    Q = n(627799),
    X = n(260430),
    J = n(668185),
    $ = n(407546),
    ee = n(41259),
    et = n(28752),
    en = n(787025),
    er = n(397394),
    ei = n(574384),
    ea = n(960662),
    eo = n(981631),
    es = n(186901),
    el = n(388032),
    ec = n(453214);
function eu(e, t, n) {
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
function ed(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                eu(e, t, n[t]);
            });
    }
    return e;
}
function ef(e, t) {
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
function e_(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ef(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function ep(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = eh(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function eh(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let em = 'oauth2-authorize-header-id';
function eg() {
    let e = (0, s.TH)(),
        t = i.useMemo(() => (0, Z.y)(e.search), [e.search]);
    (0, T.Z)();
    let a = !e.search.includes('response_type'),
        [o, c] = i.useState(!1),
        u = i.useRef(!1),
        [d, f] = i.useState(null),
        _ = a && !l.tq && !o;
    if (
        (i.useEffect(() => {
            if (l.eL && a) {
                let t = new URL('discord://action/oauth2/authorize');
                (t.search = e.search), window.open(t.toString(), '_self');
            } else
                !a ||
                    l.tq ||
                    u.current ||
                    (Promise.resolve()
                        .then(n.bind(n, 536285))
                        .then((t) => {
                            let { default: n } = t;
                            n.request(eo.Etm.DEEP_LINK, {
                                type: es.jE.OAUTH2,
                                params: { search: e.search }
                            })
                                .then((e) => {
                                    f(null != e && e);
                                })
                                .catch(() => f(!1))
                                .then(() => n.disconnect());
                        }),
                    (u.current = !0));
        }, [e.search, a]),
        _ && !1 !== d)
    ) {
        let e;
        return (
            (e =
                !0 === d
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(P.Dx, { children: el.NW.string(el.t.csrAMD) }),
                              (0, r.jsx)(P.DK, { children: el.NW.string(el.t['m1+IBg']) }),
                              (0, r.jsx)(h.zx, {
                                  onClick: () => c(!0),
                                  color: h.zx.Colors.BRAND,
                                  children: el.NW.string(el.t.fIv16O)
                              })
                          ]
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(P.Dx, { children: el.NW.string(el.t['Z+hCVV']) }), (0, r.jsx)(E.$, {})]
                      })),
            (0, r.jsx)(en.G, {
                removeChildWrapper: !0,
                children: (0, r.jsx)('div', {
                    className: ec.deepLinkContainer,
                    children: e
                })
            })
        );
    }
    return (0, r.jsx)(en.G, {
        removeChildWrapper: !0,
        children: (0, r.jsx)(
            eE,
            e_(ed({ transitionState: b.Dvm.ENTERED }, t), {
                showLogout: !0,
                isExternalStandaloneOAuthPage: !0
            })
        )
    });
}
function eE(e) {
    var { transitionState: t } = e;
    let { header: n, body: i, footer: a, nextStep: s, appDetails: l, hasContentBackground: c, minimalPadding: u, extraWide: d, modalSize: f } = eb(ed({}, ep(e, ['transitionState']))),
        _ = N.w.useExperiment({ location: 'oauth2_authorize' }),
        p = (0, r.jsxs)(r.Fragment, {
            children: [
                n,
                (0, r.jsxs)('div', {
                    className: o()(ec.contentWrapper, u ? ec.minimalPadding : null),
                    children: [
                        (0, r.jsxs)('div', {
                            className: o()(ec.content, c ? ec.contentBackground : null, u ? ec.minimalPadding : null, d ? ec.extraWide : null),
                            children: [i, null != s || _.enabled ? null : l]
                        }),
                        null == s && _.enabled
                            ? (0, r.jsx)('div', {
                                  className: o()(ec.content, c ? ec.contentBackground : null, u ? ec.minimalPadding : null, d ? ec.extraWide : null),
                                  children: l
                              })
                            : null
                    ]
                })
            ]
        });
    return (0, r.jsx)(en.j, {
        transitionState: t,
        'aria-labelledby': em,
        footer: a,
        modalSize: f,
        children: (0, r.jsx)('div', {
            className: ec.authorize,
            children: (0, r.jsx)(g.zJ, {
                orientation: 'auto',
                children: p
            })
        })
    });
}
function eb(e) {
    var t, n, a, o, l, m;
    let g,
        T,
        A,
        P,
        w,
        L,
        { clientId: U, responseType: en, redirectUri: es, codeChallenge: eu, codeChallengeMethod: ef, state: ep, nonce: eh, prompt: eg, authorizations: eE, scopes: eb, permissions: ey, guildId: ev, channelId: eO, integrationType: eI, disableGuildSelect: eS = !1, showLogout: eT = !1, cancelCompletesFlow: eN = !0, isTrustedName: eA = !1, isEmbeddedFlow: eC = !1, callback: eR, callbackWithoutPost: eP, onClose: ew, disclosures: eD, isExternalStandaloneOAuthPage: eL = !1 } = e,
        ex = null != eI ? (null == eE ? void 0 : eE.get(eI)) : void 0,
        eM = (0, s.TH)(),
        ek = (0, _.e7)([D.Z], () => D.Z.hasLoadedExperiments);
    i.useEffect(() => {
        j.default.isAuthenticated() && !ek && y.Z.getExperiments();
    }, [ek]);
    let [ej, eU] = i.useState(null),
        [eG, eB] = i.useState(null),
        [eF, eV] = i.useState(null),
        [eZ, eH] = i.useState(!1),
        [eW, eY] = i.useState(!1),
        eK = null == ej ? void 0 : ej.guilds,
        [ez, eq] = i.useState(null != ev ? ev : null),
        [eQ, eX] = i.useState(null != eO ? eO : null),
        [eJ, e$] = i.useState(F.Hn),
        [e0, e1] = i.useState(!1),
        e2 = i.useMemo(() => ((null == ej ? void 0 : ej.user) != null ? new k.Z(ej.user) : null), [null == ej ? void 0 : ej.user]),
        e3 = i.useMemo(() => (null == eK ? void 0 : eK.find((e) => e.id === ez)), [eK, ez]),
        [e4, e5] = i.useState(null),
        e6 = i.useMemo(() => {
            var e;
            return null == ex && null == eI && (null != (e = null == eb ? void 0 : eb.length) ? e : 0) === 0 && null == es;
        }, [ex, null == eb ? void 0 : eb.length, es, eI]),
        [e8, e7] = i.useState(null);
    i.useEffect(() => {
        e6 && C.ZP.fetchApplication(U).then((e) => e7(M.ZP.createFromServer(e)));
    }, [U, e6]);
    let e9 = i.useMemo(() => {
            var e, t;
            return null == e4 ? null : null == e8 || null == (t = e8.integrationTypesConfig) || null == (e = t[e4]) ? void 0 : e.oauth2InstallParams;
        }, [null == e8 ? void 0 : e8.integrationTypesConfig, e4]),
        te = N.w.useExperiment({ location: 'oauth2_authorize' }),
        { requestedScopes: tt, accountScopes: tn } = i.useMemo(() => {
            let e = e6 ? (null == e9 ? void 0 : e9.scopes) : eb,
                t = (0, Z.K)(null != e ? e : []),
                n = K.Qe.filter((e) => t.includes(e));
            return {
                requestedScopes: t,
                accountScopes: n
            };
        }, [null == e9 ? void 0 : e9.scopes, eb, e6]),
        tr = i.useMemo(() => {
            var e;
            let t = e6 ? f.vB(null != (e = null == e9 ? void 0 : e9.permissions) ? e : 0) : ey;
            return null != t ? t : F.Hn;
        }, [null == e9 ? void 0 : e9.permissions, ey, e6]),
        ti = i.useRef(!1),
        [ta, to] = i.useState(null != eD ? eD : []),
        [ts, tl] = i.useState(null != eD && eD.length > 0);
    i.useEffect(() => {
        if (ti.current) return;
        let e = async () => {
            ti.current = !0;
            try {
                let { disclosures: e, allAcked: t } = await (0, R.de)(U);
                tl(!t), to(e);
            } catch (n) {
                let { status: e, body: t } = n;
                if (401 === e) return void (0, H.c$)(eM, 'oauth2_error_failed_disclosures');
                eV(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
            } finally {
                ti.current = !1;
            }
        };
        if (null == eD) {
            if (!j.default.isAuthenticated()) return void (0, H.c$)(eM, 'oauth2_error_not_authenticated');
            e();
        }
    }, [U, eM, eD, to, eV, tl, eB]);
    let tc = i.useCallback(
            async (e) => {
                if (null != eP) {
                    eH(!0), eP(e);
                    return;
                }
                if (!e && !eN) {
                    null != eR &&
                        (eR({
                            application: null == ej ? void 0 : ej.application,
                            guild: e3
                        }),
                        null == ew || ew());
                    return;
                }
                if (null == e4) return void eV(Error('No integration type was selected.'));
                try {
                    eH(!0);
                    let n = await (0, H.Iq)({
                        authorize: e,
                        clientId: U,
                        scopes: tt,
                        responseType: en,
                        redirectUri: es,
                        codeChallenge: eu,
                        codeChallengeMethod: ef,
                        state: ep,
                        nonce: eh,
                        integrationType: e4,
                        permissions: f.Od(tr, eJ),
                        guildId: e4 === c.Y.GUILD_INSTALL && null != ez ? ez : void 0,
                        channelId: e4 === c.Y.GUILD_INSTALL && null != eQ ? eQ : void 0,
                        dmSettings: { allowMobilePush: e0 }
                    });
                    if (
                        (e &&
                            (await (0, R.x9)(U, ta),
                            setTimeout(() => {
                                v.Z.fetch();
                            }, 100)),
                        null != eR)
                    )
                        eR({
                            application: null == ej ? void 0 : ej.application,
                            location: n.location,
                            guild: e3
                        }),
                            null == ew || ew();
                    else if (null != n.location) {
                        var t;
                        let e = null == (t = V.Z.toURLSafe(n.location)) ? void 0 : t.pathname;
                        V.Z.isDiscordUrl(n.location) && e === eo.Z5c.OAUTH2_AUTHORIZED
                            ? (0, x.uL)(eo.Z5c.OAUTH2_AUTHORIZED, {
                                  state: {
                                      application: null == ej ? void 0 : ej.application,
                                      guild: e3
                                  }
                              })
                            : (window.location = n.location);
                    } else eH(!1);
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && '' !== e.message ? eV(Error(e.message)) : eV(e), eB('AUTHORIZE_SCOPES'), eH(!1);
                }
            },
            [eP, eN, eR, null == ej ? void 0 : ej.application, e3, ew, U, tt, en, es, eu, ef, ep, eh, tr, eJ, ez, e4, eQ, ta, e0]
        ),
        tu = i.useRef(!1),
        td = i.useCallback(async () => {
            if (!j.default.isAuthenticated()) return void (0, H.c$)(eM, 'oauth2_error_not_authenticated');
            if (!ti.current && !tu.current) {
                tu.current = !0;
                try {
                    let e =
                        null != ex
                            ? ex
                            : await (0, H.Ww)({
                                  clientId: U,
                                  scopes: tt,
                                  responseType: en,
                                  redirectUri: es,
                                  codeChallenge: eu,
                                  codeChallengeMethod: ef,
                                  state: ep,
                                  nonce: eh,
                                  integrationType: null != e4 ? e4 : void 0
                              });
                    eU((0, W.d)(e)), eg === z.s.NONE && e.authorized && !ts && tc(!0), (0, S.yw)(eo.rMx.OAUTH2_AUTHORIZE_VIEWED, { application_id: e.application.id });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, H.c$)(eM, 'oauth2_error_unauthorized');
                    eV(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
                } finally {
                    tu.current = !1;
                }
            }
        }, [eM, ex, U, tt, en, es, eu, ef, ep, eh, e4, eg, tc, ts]),
        tf = i.useMemo(() => {
            var e;
            return null != e8 && e6
                ? Object.entries(null != (e = e8.integrationTypesConfig) ? e : {})
                      .filter((e) => {
                          let [t, n] = e;
                          return null != n.oauth2InstallParams;
                      })
                      .map((e) => {
                          let [t, n] = e;
                          return Number(t);
                      })
                : [];
        }, [e8, e6]),
        t_ = i.useRef(null);
    i.useEffect(() => {
        eG !== t_.current &&
            ((t_.current = eG),
            (0, S.yw)(eo.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eG,
                application_id: U,
                integration_type: e4,
                scopes: tt,
                permissions: tr.toString()
            }));
    }, [U, e4, tr, tt, eG]),
        i.useEffect(() => {
            if (null == eG && (!e6 || null != e8) && ek)
                if (null != ex) {
                    var e;
                    e5(null != (e = ex.integration_type) ? e : c.Y.GUILD_INSTALL), eB('AUTHORIZE_SCOPES');
                } else tf.length > 1 ? eB('SELECT_INSTALL_TYPE') : (1 === tf.length ? e5(tf[0]) : null != eI ? e5(eI) : e5(c.Y.GUILD_INSTALL), eB('AUTHORIZE_SCOPES'));
        }, [ex, tf, e8, e6, eI, eG, ek]),
        i.useEffect(() => {
            if (null == e4 || null != ej || null != eF) return;
            e4 === c.Y.USER_INSTALL && (eq(null), eX(null));
            let e = tt.filter((e) => !K.ak.includes(e));
            0 === tt.length ? eV(Error('No scopes were provided.')) : e.length > 0 ? eV(Error('Invalid scope: '.concat(e[0]))) : (0, Y._$)(tr) ? eV(Error('Invalid permission(s) provided.')) : td();
        }, [ts, td, tt, tr, e4, ej, eF]);
    let tp = i.useCallback((e) => {
            e && eY(!0);
        }, []),
        th = (0, I.O)(tp);
    if (eF instanceof Error)
        return eL
            ? { body: (0, r.jsx)(er.Lk, { message: eF.message }) }
            : {
                  header: (0, r.jsxs)(b.xBx, {
                      className: ec.errorHeader,
                      separator: !1,
                      justify: d.k.Justify.BETWEEN,
                      children: [
                          (0, r.jsx)(b.Text, {
                              variant: 'text-lg/bold',
                              color: 'header-primary',
                              children: 'Error'
                          }),
                          (0, r.jsx)(h.zx, {
                              'aria-label': el.NW.string(el.t.cpT0Cg),
                              look: h.zx.Looks.BLANK,
                              size: h.zx.Sizes.NONE,
                              onClick: ew,
                              children: (0, r.jsx)(b.Dio, { size: 'md' })
                          })
                      ]
                  }),
                  body: (0, r.jsx)(b.hzk, {
                      scrollbarType: 'none',
                      children: (0, r.jsx)(b.Text, {
                          variant: 'text-md/normal',
                          color: 'header-secondary',
                          children: eF.message
                      })
                  }),
                  footer: (0, r.jsx)(b.mzw, {
                      children: (0, r.jsx)(h.zx, {
                          onClick: ew,
                          children: 'Close'
                      })
                  }),
                  minimalPadding: !0,
                  extraWide: !0,
                  modalSize: b.CgR.SMALL
              };
    let tm = (e) => {
            e5(e), eU(null), eB('AUTHORIZE_SCOPES');
        },
        tg = (e, t) => {
            e$((n) => (e ? f.Od(n, t) : f.IH(n, t)));
        },
        tE = !1,
        tb = !1,
        ty = !0,
        tv = !0,
        tO = !0,
        tI = !1;
    switch (eG) {
        case null:
            return { body: (0, r.jsx)(E.$, { className: ec.spinner }) };
        case 'SELECT_INSTALL_TYPE':
            if (null == e8) return { body: (0, r.jsx)(E.$, { className: ec.spinner }) };
            (g = (0, r.jsx)(et.Z, {
                application: e8,
                onSelect: tm,
                onClose: ew
            })),
                (ty = !1),
                (tv = !1),
                (tO = !1),
                (tI = !0);
            break;
        case 'AUTHORIZE_SCOPES':
            if (null == ej || null == e2 || null == e4) return { body: (0, r.jsx)(E.$, { className: ec.spinner }) };
            let tS = null == eF || eF instanceof Error ? {} : eF,
                tT = null == eK ? void 0 : eK.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tN = e4 === c.Y.GUILD_INSTALL && tt.includes(u.x.WEBHOOK_INCOMING),
                tA = tN || (e4 === c.Y.GUILD_INSTALL && (tt.includes(u.x.BOT) || tt.includes(u.x.APPLICATIONS_COMMANDS))),
                tC = (0, B.yE)(null != (t = ej.application.flags) ? t : 0, eo.udG.EMBEDDED) && e4 === c.Y.USER_INSTALL && te.enabled;
            (g = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(Q.Z, { accountScopes: tn }),
                    (0, r.jsx)(X.Z, {
                        application: ej.application,
                        accountScopes: tn,
                        requestedScopes: tt,
                        integrationType: e4,
                        errors: tS,
                        isTrustedName: eA,
                        noDivider: !tC && !tA && !tN && te.enabled
                    }),
                    tC
                        ? (0, r.jsx)(b.j7V, {
                              hideBorder: !0,
                              onChange: e1,
                              className: ec.mobilePushContainer,
                              note: el.NW.string(el.t.hw1nKS),
                              value: e0,
                              children: (0, r.jsx)(b.Text, {
                                  variant: 'text-sm/medium',
                                  children: el.NW.string(el.t['Pkw//v'])
                              })
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: ec.intObserver,
                        ref: th
                    }),
                    tA
                        ? (0, r.jsx)($.Z, {
                              error: (null != (a = null != (n = tS[u.x.BOT]) ? n : tS[u.x.APPLICATIONS_COMMANDS]) ? a : [])[0],
                              selectedGuildId: ez,
                              onGuildChange: eq,
                              guilds: null != tT ? tT : [],
                              disabled: '' !== ez && null != ez && !0 === eS
                          })
                        : null,
                    tN
                        ? (0, r.jsx)(ei.Z, {
                              error: (null != (o = tS[u.x.WEBHOOK_INCOMING]) ? o : [])[0],
                              selectedChannelId: eQ,
                              selectedGuildId: ez,
                              onChannelChange: eX
                          })
                        : null
                ]
            })),
                tt.includes(u.x.BOT) && !f.fS(tr, F.Hn) && (A = 'AUTHORIZE_BOT_PERMISSIONS'),
                tf.length > 1 && (T = 'SELECT_INSTALL_TYPE'),
                (tb = (tA && null == e3) || (tN && null == eQ)),
                (tE = !0);
            break;
        case 'AUTHORIZE_BOT_PERMISSIONS':
            if (null == ej) return { body: (0, r.jsx)(E.$, { className: ec.spinner }) };
            (g = (0, r.jsx)(J.Z, {
                application: ej.application,
                permissions: tr,
                deniedPermissions: eJ,
                onPermissionsChange: tg,
                guild: e3
            })),
                (T = 'AUTHORIZE_SCOPES'),
                (tE = !0);
    }
    if (ty && null != ej) {
        let e = null == (l = ej.bot) ? void 0 : l.approximate_guild_count;
        P = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(q.Z, {
                    application: ej.application,
                    scopes: tt,
                    disclosures: ta,
                    redirectUri: null != (m = ej.redirect_uri) ? m : null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: eC
                }),
                (0, r.jsx)('div', {
                    className: ec.intObserver,
                    ref: th
                })
            ]
        });
    }
    return (
        tv &&
            null != ej &&
            null != e2 &&
            (w = (0, r.jsx)(ee.Z, {
                id: em,
                user: e2,
                application: ej.application,
                bot: ej.bot,
                accountScopes: tn,
                showLogout: eT || !1,
                location: eM,
                scopes: tt
            })),
        tO &&
            (L = (0, r.jsxs)('div', {
                className: ec.footer,
                children: [
                    null != T
                        ? (0, r.jsx)(h.zx, {
                              look: h.zx.Looks.FILLED,
                              color: h.zx.Colors.PRIMARY,
                              onClick: () => eB(T),
                              children: el.NW.string(el.t['13/7kZ'])
                          })
                        : (0, r.jsx)(h.zx, {
                              look: h.zx.Looks.FILLED,
                              color: h.zx.Colors.PRIMARY,
                              onClick: () => tc(!1),
                              children: el.NW.string(el.t['ETE/oK'])
                          }),
                    'SELECT_INSTALL_TYPE' !== eG
                        ? eW
                            ? (0, r.jsx)('div', {
                                  className: ec.action,
                                  children: (0, r.jsx)(h.zx, {
                                      onClick: null != A ? () => eB(A) : () => tc(!0),
                                      submitting: eZ,
                                      disabled: null == P || tb,
                                      children: tb ? el.NW.string(el.t.BwwiSE) : null != A ? el.NW.string(el.t['3PatS0']) : el.NW.string(el.t['y+/PEx'])
                                  })
                              })
                            : (0, r.jsx)('div', {
                                  className: ec.action,
                                  children: (0, r.jsx)(b.ua7, {
                                      text: el.NW.string(el.t['7UiwCw']),
                                      children: (e) =>
                                          (0, r.jsx)(
                                              'div',
                                              e_(ed({}, e), {
                                                  className: ec.tooltip,
                                                  children: (0, r.jsxs)(h.zx, {
                                                      disabled: !0,
                                                      submitting: eZ,
                                                      innerClassName: ec.buttonWithEmoji,
                                                      children: [
                                                          el.NW.string(el.t.N22i9P),
                                                          ' ',
                                                          (0, r.jsx)(O.Z, {
                                                              className: ec.emoji,
                                                              src: G.ZP.getURL(p.Z.convert.fromCodePoint(ea.I)),
                                                              emojiName: ':point_down:',
                                                              animated: !1
                                                          })
                                                      ]
                                                  })
                                              })
                                          )
                                  })
                              })
                        : null
                ]
            })),
        {
            header: w,
            body: g,
            footer: L,
            nextStep: A,
            appDetails: P,
            sendAuthorize: tc,
            hasContentBackground: tE,
            minimalPadding: tI
        }
    );
}
function ey(e, t) {
    var n, i;
    if (null == t.location || (null != e && e(t))) return;
    let { host: a, pathname: o, searchParams: s } = null != (n = V.Z.toURLSafe(t.location)) ? n : {},
        l = V.Z.isDiscordHostname(null != a ? a : null) || window.location.host === a;
    if (l && o === eo.Z5c.OAUTH2_AUTHORIZED) {
        let e = A._f.getCurrentConfig({ location: 'inAppOAuth2ModalCallback' }, { autoTrackExposure: !1 }),
            n = window.location.pathname.startsWith(eo.ANM.CHANNELS);
        e.enabled && null != t.application && null == t.guild && n
            ? U.S.safeDispatch(eo.CkL.SHOW_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { application: t.application })
            : (0, m.h7)((e) => {
                  let n = (0, r.jsx)(er._Z, {
                      guild: t.guild,
                      application: t.application,
                      onClose: e.onClose
                  });
                  return (0, r.jsx)(
                      en.j,
                      e_(ed({}, e), {
                          'aria-labelledby': em,
                          footer: n,
                          children: (0, r.jsx)(er.Jh, {
                              guild: t.guild,
                              application: t.application,
                              onClose: e.onClose
                          })
                      })
                  );
              });
    } else
        l && (null == o ? void 0 : o.startsWith(eo.Z5c.OAUTH2_ERROR))
            ? (0, m.h7)((e) => {
                  var t, n;
                  let i = null != (n = null != (t = null == s ? void 0 : s.get('error_description')) ? t : null == s ? void 0 : s.get('error')) ? n : el.NW.string(el.t['mqn87+']);
                  return (
                      Array.isArray(i) && (i = i[0]),
                      (0, r.jsx)(
                          en.j,
                          e_(ed({}, e), {
                              'aria-labelledby': em,
                              children: (0, r.jsx)(er.Lk, {
                                  message: i,
                                  onClose: e.onClose
                              })
                          })
                      )
                  );
              })
            : null == (i = window.open(t.location, '_blank')) || i.focus();
}
function ev(e, t) {
    if ((0, L.g)('create-guild-and-oauth2-modal')) return void w.Z.openCreateGuildModal({ onSuccess: (n) => eO(e_(ed({}, e), { guildId: n }), t) });
    eO(e, t);
}
function eO(e, t) {
    (0, m.h7)(
        (t) =>
            (0, r.jsx)(
                eE,
                e_(ed({}, t, e), {
                    cancelCompletesFlow: !1,
                    callback: ey.bind(null, e.callback)
                })
            ),
        { onCloseCallback: t }
    );
}
function eI(e) {
    var t;
    let { hostname: n = '', host: r, pathname: i, search: a } = null != (t = V.Z.toURLSafe(e)) ? t : {};
    return null != i && null != a && (V.Z.isDiscordHostname(n) || r === window.location.host) && (i.startsWith('/api'.concat(eo.ANM.OAUTH2_AUTHORIZE)) || i.startsWith(eo.Z5c.OAUTH2_AUTHORIZE)) ? (0, Z.y)(a) : null;
}

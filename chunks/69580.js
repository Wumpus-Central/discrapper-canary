n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: () => em,
        OAuth2AuthorizePage: () => eh,
        getOAuth2AuthorizeProps: () => ev,
        openOAuth2Modal: () => eO,
        openOAuth2ModalWithCreateGuildModal: () => ey,
        useOAuth2AuthorizeForm: () => eE
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
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(114858),
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
    O = n(384275),
    v = n(596454),
    I = n(434650),
    S = n(367907),
    T = n(702493),
    A = n(162685),
    N = n(728345),
    C = n(979200),
    R = n(388905),
    P = n(560067),
    w = n(353926),
    D = n(341298),
    L = n(703656),
    x = n(973616),
    M = n(598077),
    k = n(314897),
    j = n(176354),
    U = n(630388),
    G = n(700785),
    B = n(591759),
    V = n(807675),
    F = n(489863),
    Z = n(228763),
    H = n(422559),
    Y = n(713938),
    W = n(166148),
    K = n(807989),
    z = n(627799),
    q = n(260430),
    Q = n(668185),
    X = n(407546),
    J = n(41259),
    $ = n(28752),
    ee = n(787025),
    et = n(397394),
    en = n(574384),
    er = n(960662),
    ei = n(981631),
    eo = n(186901),
    ea = n(388032),
    es = n(453214);
function el(e, t, n) {
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
function ec(e) {
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
                el(e, t, n[t]);
            });
    }
    return e;
}
function eu(e, t) {
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
function ed(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eu(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function ef(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = e_(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function e_(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let ep = 'oauth2-authorize-header-id';
function eh() {
    let e = (0, s.TH)(),
        t = i.useMemo(() => (0, V.y)(e.search), [e.search]);
    (0, T.Z)();
    let o = !e.search.includes('response_type'),
        [a, c] = i.useState(!1),
        u = i.useRef(!1),
        [d, f] = i.useState(null),
        _ = o && !l.tq && !a;
    if (
        (i.useEffect(() => {
            if (l.eL && o) {
                let t = new URL('discord://action/oauth2/authorize');
                (t.search = e.search), window.open(t.toString(), '_self');
            } else
                !o ||
                    l.tq ||
                    u.current ||
                    (Promise.resolve()
                        .then(n.bind(n, 536285))
                        .then((t) => {
                            let { default: n } = t;
                            n.request(ei.Etm.DEEP_LINK, {
                                type: eo.jE.OAUTH2,
                                params: { search: e.search }
                            })
                                .then((e) => {
                                    f(null != e && e);
                                })
                                .catch(() => f(!1))
                                .then(() => n.disconnect());
                        }),
                    (u.current = !0));
        }, [e.search, o]),
        _ && !1 !== d)
    ) {
        let e;
        return (
            (e =
                !0 === d
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(R.Dx, { children: ea.intl.string(ea.t.csrAMD) }),
                              (0, r.jsx)(R.DK, { children: ea.intl.string(ea.t['m1+IBg']) }),
                              (0, r.jsx)(h.zx, {
                                  onClick: () => c(!0),
                                  color: h.zx.Colors.BRAND,
                                  children: ea.intl.string(ea.t.fIv16O)
                              })
                          ]
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(R.Dx, { children: ea.intl.string(ea.t['Z+hCVV']) }), (0, r.jsx)(E.$, {})]
                      })),
            (0, r.jsx)(ee.G, {
                removeChildWrapper: !0,
                children: (0, r.jsx)('div', {
                    className: es.deepLinkContainer,
                    children: e
                })
            })
        );
    }
    return (0, r.jsx)(ee.G, {
        removeChildWrapper: !0,
        children: (0, r.jsx)(
            em,
            ed(ec({ transitionState: b.Dvm.ENTERED }, t), {
                showLogout: !0,
                isExternalStandaloneOAuthPage: !0
            })
        )
    });
}
function em(e) {
    var { transitionState: t } = e;
    let { header: n, body: i, footer: o, nextStep: s, appDetails: l, hasContentBackground: c, minimalPadding: u, extraWide: d, modalSize: f } = eE(ec({}, ef(e, ['transitionState']))),
        _ = A.w.useExperiment({ location: 'oauth2_authorize' }),
        p = (0, r.jsxs)(r.Fragment, {
            children: [
                n,
                (0, r.jsxs)('div', {
                    className: a()(es.contentWrapper, u ? es.minimalPadding : null),
                    children: [
                        (0, r.jsxs)('div', {
                            className: a()(es.content, c ? es.contentBackground : null, u ? es.minimalPadding : null, d ? es.extraWide : null),
                            children: [i, null != s || _.enabled ? null : l]
                        }),
                        null == s && _.enabled
                            ? (0, r.jsx)('div', {
                                  className: a()(es.content, c ? es.contentBackground : null, u ? es.minimalPadding : null, d ? es.extraWide : null),
                                  children: l
                              })
                            : null
                    ]
                })
            ]
        });
    return (0, r.jsx)(ee.j, {
        transitionState: t,
        'aria-labelledby': ep,
        footer: o,
        modalSize: f,
        children: (0, r.jsx)('div', {
            className: es.authorize,
            children: (0, r.jsx)(g.zJ, {
                orientation: 'auto',
                children: p
            })
        })
    });
}
function eg() {
    return (0, r.jsx)('div', {
        className: es.loadingContainer,
        children: (0, r.jsx)(E.$, { className: es.spinner })
    });
}
function eE(e) {
    var t, n, o, a, l, m;
    let g,
        E,
        T,
        R,
        P,
        D,
        { clientId: ee, responseType: eo, redirectUri: el, codeChallenge: eu, codeChallengeMethod: ef, state: e_, nonce: eh, prompt: em, authorizations: eE, scopes: eb, permissions: ey, guildId: eO, channelId: ev, integrationType: eI, disableGuildSelect: eS = !1, showLogout: eT = !1, cancelCompletesFlow: eA = !0, isTrustedName: eN = !1, isEmbeddedFlow: eC = !1, callback: eR, callbackWithoutPost: eP, onClose: ew, disclosures: eD, isExternalStandaloneOAuthPage: eL = !1 } = e,
        ex = null != eI ? (null == eE ? void 0 : eE.get(eI)) : void 0,
        eM = (0, s.TH)(),
        ek = (0, _.e7)([w.Z], () => w.Z.hasLoadedExperiments);
    i.useEffect(() => {
        k.default.isAuthenticated() && !ek && y.Z.getExperiments();
    }, [ek]);
    let [ej, eU] = i.useState(null),
        [eG, eB] = i.useState(null),
        [eV, eF] = i.useState(null),
        [eZ, eH] = i.useState(!1),
        [eY, eW] = i.useState(!1),
        eK = null == ej ? void 0 : ej.guilds,
        [ez, eq] = i.useState(null != eO ? eO : null),
        [eQ, eX] = i.useState(null != ev ? ev : null),
        [eJ, e$] = i.useState(G.Hn),
        [e0, e1] = i.useState(!1),
        e2 = i.useMemo(() => ((null == ej ? void 0 : ej.user) != null ? new M.Z(ej.user) : null), [null == ej ? void 0 : ej.user]),
        e3 = i.useMemo(() => (null == eK ? void 0 : eK.find((e) => e.id === ez)), [eK, ez]),
        [e4, e5] = i.useState(null),
        e6 = i.useMemo(() => {
            var e;
            return null == ex && null == eI && (null != (e = null == eb ? void 0 : eb.length) ? e : 0) === 0 && null == el;
        }, [ex, null == eb ? void 0 : eb.length, el, eI]),
        [e8, e7] = i.useState(null);
    i.useEffect(() => {
        e6 && N.ZP.fetchApplication(ee).then((e) => e7(x.ZP.createFromServer(e)));
    }, [ee, e6]);
    let e9 = i.useMemo(() => {
            var e, t;
            return null == e4 ? null : null == e8 || null == (t = e8.integrationTypesConfig) || null == (e = t[e4]) ? void 0 : e.oauth2InstallParams;
        }, [null == e8 ? void 0 : e8.integrationTypesConfig, e4]),
        te = A.w.useExperiment({ location: 'oauth2_authorize' }),
        { requestedScopes: tt, accountScopes: tn } = i.useMemo(() => {
            let e = e6 ? (null == e9 ? void 0 : e9.scopes) : eb,
                t = (0, V.K)(null != e ? e : []),
                n = Y.Qe.filter((e) => t.includes(e));
            return {
                requestedScopes: t,
                accountScopes: n
            };
        }, [null == e9 ? void 0 : e9.scopes, eb, e6]),
        tr = i.useMemo(() => {
            var e;
            let t = e6 ? f.vB(null != (e = null == e9 ? void 0 : e9.permissions) ? e : 0) : ey;
            return null != t ? t : G.Hn;
        }, [null == e9 ? void 0 : e9.permissions, ey, e6]),
        ti = i.useRef(!1),
        [to, ta] = i.useState(null != eD ? eD : []),
        [ts, tl] = i.useState(null != eD && eD.length > 0);
    i.useEffect(() => {
        if (ti.current) return;
        let e = async () => {
            ti.current = !0;
            try {
                let { disclosures: e, allAcked: t } = await (0, C.de)(ee);
                tl(!t), ta(e);
            } catch (n) {
                let { status: e, body: t } = n;
                if (401 === e) return void (0, F.c$)(eM, 'oauth2_error_failed_disclosures');
                eF(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
            } finally {
                ti.current = !1;
            }
        };
        if (null == eD) {
            if (!k.default.isAuthenticated()) return void (0, F.c$)(eM, 'oauth2_error_not_authenticated');
            e();
        }
    }, [ee, eM, eD, ta, eF, tl, eB]);
    let tc = i.useCallback(
            async (e) => {
                if (null != eP) {
                    eH(!0), eP(e);
                    return;
                }
                if (!e && !eA) {
                    null != eR &&
                        (eR({
                            application: null == ej ? void 0 : ej.application,
                            guild: e3
                        }),
                        null == ew || ew());
                    return;
                }
                if (null == e4) return void eF(Error('No integration type was selected.'));
                try {
                    eH(!0);
                    let n = await (0, F.Iq)({
                        authorize: e,
                        clientId: ee,
                        scopes: tt,
                        responseType: eo,
                        redirectUri: el,
                        codeChallenge: eu,
                        codeChallengeMethod: ef,
                        state: e_,
                        nonce: eh,
                        integrationType: e4,
                        permissions: f.Od(tr, eJ),
                        guildId: e4 === c.Y.GUILD_INSTALL && null != ez ? ez : void 0,
                        channelId: e4 === c.Y.GUILD_INSTALL && null != eQ ? eQ : void 0,
                        dmSettings: { allowMobilePush: e0 }
                    });
                    if (
                        (e &&
                            (await (0, C.x9)(ee, to),
                            setTimeout(() => {
                                O.Z.fetch();
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
                        let e = null == (t = B.Z.toURLSafe(n.location)) ? void 0 : t.pathname;
                        B.Z.isDiscordUrl(n.location) && e === ei.Z5c.OAUTH2_AUTHORIZED
                            ? (0, L.uL)(ei.Z5c.OAUTH2_AUTHORIZED, {
                                  state: {
                                      application: null == ej ? void 0 : ej.application,
                                      guild: e3
                                  }
                              })
                            : (window.location = n.location);
                    } else eH(!1);
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && '' !== e.message ? eF(Error(e.message)) : eF(e), eB('AUTHORIZE_SCOPES'), eH(!1);
                }
            },
            [eP, eA, eR, null == ej ? void 0 : ej.application, e3, ew, ee, tt, eo, el, eu, ef, e_, eh, tr, eJ, ez, e4, eQ, to, e0]
        ),
        tu = i.useRef(!1),
        td = i.useCallback(async () => {
            if (!k.default.isAuthenticated()) return void (0, F.c$)(eM, 'oauth2_error_not_authenticated');
            if (!ti.current && !tu.current) {
                tu.current = !0;
                try {
                    let e =
                        null != ex
                            ? ex
                            : await (0, F.Ww)({
                                  clientId: ee,
                                  scopes: tt,
                                  responseType: eo,
                                  redirectUri: el,
                                  codeChallenge: eu,
                                  codeChallengeMethod: ef,
                                  state: e_,
                                  nonce: eh,
                                  integrationType: null != e4 ? e4 : void 0
                              });
                    eU((0, Z.d)(e)),
                        em === W.s.NONE && e.authorized && !ts && tc(!0),
                        (0, S.yw)(ei.rMx.OAUTH2_AUTHORIZE_VIEWED, {
                            application_id: e.application.id,
                            mobile_push_notification_default_setting: !1
                        });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, F.c$)(eM, 'oauth2_error_unauthorized');
                    eF(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
                } finally {
                    tu.current = !1;
                }
            }
        }, [eM, ex, ee, tt, eo, el, eu, ef, e_, eh, e4, em, tc, ts]),
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
            (0, S.yw)(ei.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eG,
                application_id: ee,
                integration_type: e4,
                scopes: tt,
                permissions: tr.toString(),
                mobile_push_notification_default_setting: !1
            }));
    }, [ee, e4, tr, tt, eG]),
        i.useEffect(() => {
            if (null == eG && (!e6 || null != e8) && ek)
                if (null != ex) {
                    var e;
                    e5(null != (e = ex.integration_type) ? e : c.Y.GUILD_INSTALL), eB('AUTHORIZE_SCOPES');
                } else tf.length > 1 ? eB('SELECT_INSTALL_TYPE') : (1 === tf.length ? e5(tf[0]) : null != eI ? e5(eI) : e5(c.Y.GUILD_INSTALL), eB('AUTHORIZE_SCOPES'));
        }, [ex, tf, e8, e6, eI, eG, ek]),
        i.useEffect(() => {
            if (null == e4 || null != ej || null != eV) return;
            e4 === c.Y.USER_INSTALL && (eq(null), eX(null));
            let e = tt.filter((e) => !Y.ak.includes(e));
            0 === tt.length ? eF(Error('No scopes were provided.')) : e.length > 0 ? eF(Error('Invalid scope: '.concat(e[0]))) : (0, H._$)(tr) ? eF(Error('Invalid permission(s) provided.')) : td();
        }, [ts, td, tt, tr, e4, ej, eV]);
    let tp = i.useCallback((e) => {
            e && eW(!0);
        }, []),
        th = (0, I.O)(tp);
    if (eV instanceof Error)
        return eL
            ? { body: (0, r.jsx)(et.Lk, { message: eV.message }) }
            : {
                  header: (0, r.jsxs)(b.xBx, {
                      className: es.errorHeader,
                      separator: !1,
                      justify: d.k.Justify.BETWEEN,
                      children: [
                          (0, r.jsx)(b.Text, {
                              variant: 'text-lg/bold',
                              color: 'header-primary',
                              children: 'Error'
                          }),
                          (0, r.jsx)(h.zx, {
                              'aria-label': ea.intl.string(ea.t.cpT0Cg),
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
                          children: eV.message
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
        tO = !0,
        tv = !0,
        tI = !1;
    switch (eG) {
        case null:
            return { body: (0, r.jsx)(eg, {}) };
        case 'SELECT_INSTALL_TYPE':
            if (null == e8) return { body: (0, r.jsx)(eg, {}) };
            (g = (0, r.jsx)($.Z, {
                application: e8,
                onSelect: tm,
                onClose: ew
            })),
                (ty = !1),
                (tO = !1),
                (tv = !1),
                (tI = !0);
            break;
        case 'AUTHORIZE_SCOPES':
            if (null == ej || null == e2 || null == e4) return { body: (0, r.jsx)(eg, {}) };
            let tS = null == eV || eV instanceof Error ? {} : eV,
                tT = null == eK ? void 0 : eK.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tA = e4 === c.Y.GUILD_INSTALL && tt.includes(u.x.WEBHOOK_INCOMING),
                tN = tA || (e4 === c.Y.GUILD_INSTALL && (tt.includes(u.x.BOT) || tt.includes(u.x.APPLICATIONS_COMMANDS))),
                tC = (0, U.yE)(null != (t = ej.application.flags) ? t : 0, ei.udG.EMBEDDED) && e4 === c.Y.USER_INSTALL && te.enabled;
            (g = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(z.Z, { accountScopes: tn }),
                    (0, r.jsx)(q.Z, {
                        application: ej.application,
                        accountScopes: tn,
                        requestedScopes: tt,
                        integrationType: e4,
                        errors: tS,
                        isTrustedName: eN,
                        noDivider: !tC && !tN && !tA && te.enabled
                    }),
                    tC
                        ? (0, r.jsx)(b.j7V, {
                              hideBorder: !0,
                              onChange: e1,
                              className: es.mobilePushContainer,
                              note: ea.intl.string(ea.t.hw1nKS),
                              value: e0,
                              children: (0, r.jsx)(b.Text, {
                                  variant: 'text-sm/medium',
                                  children: ea.intl.string(ea.t['Pkw//v'])
                              })
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: es.intObserver,
                        ref: th
                    }),
                    tN
                        ? (0, r.jsx)(X.Z, {
                              error: (null != (o = null != (n = tS[u.x.BOT]) ? n : tS[u.x.APPLICATIONS_COMMANDS]) ? o : [])[0],
                              selectedGuildId: ez,
                              onGuildChange: eq,
                              guilds: null != tT ? tT : [],
                              disabled: '' !== ez && null != ez && !0 === eS
                          })
                        : null,
                    tA
                        ? (0, r.jsx)(en.Z, {
                              error: (null != (a = tS[u.x.WEBHOOK_INCOMING]) ? a : [])[0],
                              selectedChannelId: eQ,
                              selectedGuildId: ez,
                              onChannelChange: eX
                          })
                        : null
                ]
            })),
                tt.includes(u.x.BOT) && !f.fS(tr, G.Hn) && (T = 'AUTHORIZE_BOT_PERMISSIONS'),
                tf.length > 1 && (E = 'SELECT_INSTALL_TYPE'),
                (tb = (tN && null == e3) || (tA && null == eQ)),
                (tE = !0);
            break;
        case 'AUTHORIZE_BOT_PERMISSIONS':
            if (null == ej) return { body: (0, r.jsx)(eg, {}) };
            (g = (0, r.jsx)(Q.Z, {
                application: ej.application,
                permissions: tr,
                deniedPermissions: eJ,
                onPermissionsChange: tg,
                guild: e3
            })),
                (E = 'AUTHORIZE_SCOPES'),
                (tE = !0);
    }
    if (ty && null != ej) {
        let e = null == (l = ej.bot) ? void 0 : l.approximate_guild_count;
        R = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(K.Z, {
                    application: ej.application,
                    scopes: tt,
                    disclosures: to,
                    redirectUri: null != (m = ej.redirect_uri) ? m : null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: eC
                }),
                (0, r.jsx)('div', {
                    className: es.intObserver,
                    ref: th
                })
            ]
        });
    }
    return (
        tO &&
            null != ej &&
            null != e2 &&
            (P = (0, r.jsx)(J.Z, {
                id: ep,
                user: e2,
                application: ej.application,
                bot: ej.bot,
                accountScopes: tn,
                showLogout: eT || !1,
                location: eM,
                scopes: tt
            })),
        tv &&
            (D = (0, r.jsxs)('div', {
                className: es.footer,
                children: [
                    null != E
                        ? (0, r.jsx)(h.zx, {
                              look: h.zx.Looks.FILLED,
                              color: h.zx.Colors.PRIMARY,
                              onClick: () => eB(E),
                              children: ea.intl.string(ea.t['13/7kZ'])
                          })
                        : (0, r.jsx)(h.zx, {
                              look: h.zx.Looks.FILLED,
                              color: h.zx.Colors.PRIMARY,
                              onClick: () => tc(!1),
                              children: ea.intl.string(ea.t['ETE/oK'])
                          }),
                    'SELECT_INSTALL_TYPE' !== eG
                        ? eY
                            ? (0, r.jsx)('div', {
                                  className: es.action,
                                  children: (0, r.jsx)(h.zx, {
                                      onClick: null != T ? () => eB(T) : () => tc(!0),
                                      submitting: eZ,
                                      disabled: null == R || tb,
                                      children: tb ? ea.intl.string(ea.t.BwwiSE) : null != T ? ea.intl.string(ea.t['3PatS0']) : ea.intl.string(ea.t['y+/PEx'])
                                  })
                              })
                            : (0, r.jsx)('div', {
                                  className: es.action,
                                  children: (0, r.jsx)(b.ua7, {
                                      text: ea.intl.string(ea.t['7UiwCw']),
                                      children: (e) =>
                                          (0, r.jsx)(
                                              'div',
                                              ed(ec({}, e), {
                                                  className: es.tooltip,
                                                  children: (0, r.jsxs)(h.zx, {
                                                      disabled: !0,
                                                      submitting: eZ,
                                                      innerClassName: es.buttonWithEmoji,
                                                      children: [
                                                          ea.intl.string(ea.t.N22i9P),
                                                          ' ',
                                                          (0, r.jsx)(v.Z, {
                                                              className: es.emoji,
                                                              src: j.ZP.getURL(p.Z.convert.fromCodePoint(er.I)),
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
            header: P,
            body: g,
            footer: D,
            nextStep: T,
            appDetails: R,
            sendAuthorize: tc,
            hasContentBackground: tE,
            minimalPadding: tI
        }
    );
}
function eb(e, t) {
    var n, i;
    if (null == t.location || (null != e && e(t))) return;
    let { host: o, pathname: a, searchParams: s } = null != (n = B.Z.toURLSafe(t.location)) ? n : {},
        l = B.Z.isDiscordHostname(null != o ? o : null) || window.location.host === o;
    l && a === ei.Z5c.OAUTH2_AUTHORIZED
        ? (0, m.h7)((e) => {
              let n = (0, r.jsx)(et._Z, {
                  guild: t.guild,
                  application: t.application,
                  onClose: e.onClose
              });
              return (0, r.jsx)(
                  ee.j,
                  ed(ec({}, e), {
                      'aria-labelledby': ep,
                      footer: n,
                      children: (0, r.jsx)(et.Jh, {
                          guild: t.guild,
                          application: t.application,
                          onClose: e.onClose
                      })
                  })
              );
          })
        : l && (null == a ? void 0 : a.startsWith(ei.Z5c.OAUTH2_ERROR))
          ? (0, m.h7)((e) => {
                var t, n;
                let i = null != (n = null != (t = null == s ? void 0 : s.get('error_description')) ? t : null == s ? void 0 : s.get('error')) ? n : ea.intl.string(ea.t['mqn87+']);
                return (
                    Array.isArray(i) && (i = i[0]),
                    (0, r.jsx)(
                        ee.j,
                        ed(ec({}, e), {
                            'aria-labelledby': ep,
                            children: (0, r.jsx)(et.Lk, {
                                message: i,
                                onClose: e.onClose
                            })
                        })
                    )
                );
            })
          : null == (i = window.open(t.location, '_blank')) || i.focus();
}
function ey(e, t) {
    if ((0, D.g)('create-guild-and-oauth2-modal')) return void P.Z.openCreateGuildModal({ onSuccess: (n) => eO(ed(ec({}, e), { guildId: n }), t) });
    eO(e, t);
}
function eO(e, t) {
    (0, m.h7)(
        (t) =>
            (0, r.jsx)(
                em,
                ed(ec({}, t, e), {
                    cancelCompletesFlow: !1,
                    callback: eb.bind(null, e.callback)
                })
            ),
        { onCloseCallback: t }
    );
}
function ev(e) {
    var t;
    let { hostname: n = '', host: r, pathname: i, search: o } = null != (t = B.Z.toURLSafe(e)) ? t : {};
    return null != i && null != o && (B.Z.isDiscordHostname(n) || r === window.location.host) && (i.startsWith('/api'.concat(ei.ANM.OAUTH2_AUTHORIZE)) || i.startsWith(ei.Z5c.OAUTH2_AUTHORIZE)) ? (0, V.y)(o) : null;
}

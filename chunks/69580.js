n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: () => eg,
        OAuth2AuthorizePage: () => eh,
        getOAuth2AuthorizeProps: () => ey,
        openOAuth2Modal: () => eb,
        openOAuth2ModalWithCreateGuildModal: () => ev,
        useOAuth2AuthorizeForm: () => em
    }),
    n(301563),
    n(47120),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(411104),
    n(230036);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(512969),
    l = n(873546),
    c = n(373793),
    u = n(243814),
    d = n(435935),
    f = n(149765),
    _ = n(442837),
    p = n(336317),
    h = n(693789),
    g = n(952265),
    m = n(21340),
    E = n(922770),
    v = n(481060),
    b = n(893776),
    y = n(384275),
    O = n(596454),
    S = n(434650),
    I = n(367907),
    T = n(702493),
    N = n(424602),
    A = n(728345),
    C = n(979200),
    R = n(388905),
    P = n(560067),
    D = n(353926),
    w = n(341298),
    L = n(703656),
    x = n(973616),
    M = n(598077),
    k = n(314897),
    j = n(585483),
    U = n(176354),
    G = n(700785),
    B = n(591759),
    V = n(807675),
    F = n(489863),
    Z = n(228763),
    H = n(422559),
    W = n(713938),
    Y = n(166148),
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
    es = n(898998);
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
                              (0, r.jsx)(R.Dx, { children: ea.NW.string(ea.t.csrAMD) }),
                              (0, r.jsx)(R.DK, { children: ea.NW.string(ea.t['m1+IBg']) }),
                              (0, r.jsx)(h.zx, {
                                  onClick: () => c(!0),
                                  color: h.zx.Colors.BRAND,
                                  children: ea.NW.string(ea.t.fIv16O)
                              })
                          ]
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(R.Dx, { children: ea.NW.string(ea.t['Z+hCVV']) }), (0, r.jsx)(E.$, {})]
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
            eg,
            ed(ec({ transitionState: v.Dvm.ENTERED }, t), {
                showLogout: !0,
                isExternalStandaloneOAuthPage: !0
            })
        )
    });
}
function eg(e) {
    var { transitionState: t } = e;
    let { header: n, body: i, footer: o, nextStep: s, appDetails: l, hasContentBackground: c, minimalPadding: u, extraWide: d, modalSize: f } = em(ec({}, ef(e, ['transitionState']))),
        _ = (0, r.jsxs)(r.Fragment, {
            children: [
                n,
                (0, r.jsxs)('div', {
                    className: a()(es.content, c ? es.contentBackground : null, u ? es.minimalPadding : null, d ? es.extraWide : null),
                    children: [i, null == s ? l : null]
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
            children: (0, r.jsx)(m.zJ, {
                orientation: 'auto',
                children: _
            })
        })
    });
}
function em(e) {
    var t, n, o, a, l;
    let g,
        m,
        T,
        N,
        R,
        P,
        { clientId: w, responseType: j, redirectUri: ee, codeChallenge: eo, codeChallengeMethod: el, state: eu, nonce: ef, prompt: e_, authorizations: eh, scopes: eg, permissions: em, guildId: eE, channelId: ev, integrationType: eb, disableGuildSelect: ey = !1, showLogout: eO = !1, cancelCompletesFlow: eS = !0, isTrustedName: eI = !1, isEmbeddedFlow: eT = !1, callback: eN, callbackWithoutPost: eA, onClose: eC, disclosures: eR, isExternalStandaloneOAuthPage: eP = !1 } = e,
        eD = null != eb ? (null == eh ? void 0 : eh.get(eb)) : void 0,
        ew = (0, s.TH)(),
        eL = (0, _.e7)([D.Z], () => D.Z.hasLoadedExperiments);
    i.useEffect(() => {
        k.default.isAuthenticated() && !eL && b.Z.getExperiments();
    }, [eL]);
    let [ex, eM] = i.useState(null),
        [ek, ej] = i.useState(null),
        [eU, eG] = i.useState(null),
        [eB, eV] = i.useState(!1),
        [eF, eZ] = i.useState(!1),
        eH = null == ex ? void 0 : ex.guilds,
        [eW, eY] = i.useState(null != eE ? eE : null),
        [eK, ez] = i.useState(null != ev ? ev : null),
        [eq, eQ] = i.useState(G.Hn),
        eX = i.useMemo(() => ((null == ex ? void 0 : ex.user) != null ? new M.Z(ex.user) : null), [null == ex ? void 0 : ex.user]),
        eJ = i.useMemo(() => (null == eH ? void 0 : eH.find((e) => e.id === eW)), [eH, eW]),
        [e$, e0] = i.useState(null),
        e1 = i.useMemo(() => {
            var e;
            return null == eD && null == eb && (null !== (e = null == eg ? void 0 : eg.length) && void 0 !== e ? e : 0) === 0 && null == ee;
        }, [eD, null == eg ? void 0 : eg.length, ee, eb]),
        [e2, e3] = i.useState(null);
    i.useEffect(() => {
        e1 && A.ZP.fetchApplication(w).then((e) => e3(x.ZP.createFromServer(e)));
    }, [w, e1]);
    let e4 = i.useMemo(() => {
            var e, t;
            return null == e$ ? null : null == e2 ? void 0 : null === (t = e2.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[e$]) || void 0 === e ? void 0 : e.oauth2InstallParams;
        }, [null == e2 ? void 0 : e2.integrationTypesConfig, e$]),
        { requestedScopes: e6, accountScopes: e5 } = i.useMemo(() => {
            let e = e1 ? (null == e4 ? void 0 : e4.scopes) : eg,
                t = (0, V.K)(null != e ? e : []),
                n = W.Qe.filter((e) => t.includes(e));
            return {
                requestedScopes: t,
                accountScopes: n
            };
        }, [null == e4 ? void 0 : e4.scopes, eg, e1]),
        e7 = i.useMemo(() => {
            var e;
            let t = e1 ? f.vB(null !== (e = null == e4 ? void 0 : e4.permissions) && void 0 !== e ? e : 0) : em;
            return null != t ? t : G.Hn;
        }, [null == e4 ? void 0 : e4.permissions, em, e1]),
        e8 = i.useRef(!1),
        [e9, te] = i.useState(null != eR ? eR : []),
        [tt, tn] = i.useState(null != eR && eR.length > 0);
    i.useEffect(() => {
        if (e8.current) return;
        let e = async () => {
            e8.current = !0;
            try {
                let { disclosures: e, allAcked: t } = await (0, C.de)(w);
                tn(!t), te(e);
            } catch (n) {
                let { status: e, body: t } = n;
                if (401 === e) {
                    (0, F.c$)(ew);
                    return;
                }
                eG(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
            } finally {
                e8.current = !1;
            }
        };
        if (null == eR) {
            if (!k.default.isAuthenticated()) {
                (0, F.c$)(ew);
                return;
            }
            e();
        }
    }, [w, ew, eR, te, eG, tn, ej]);
    let tr = i.useCallback(
            async (e) => {
                if (null != eA) {
                    eV(!0), eA(e);
                    return;
                }
                if (!e && !eS) {
                    null != eN &&
                        (eN({
                            application: null == ex ? void 0 : ex.application,
                            guild: eJ
                        }),
                        null == eC || eC());
                    return;
                }
                if (null == e$) {
                    eG(Error('No integration type was selected.'));
                    return;
                }
                try {
                    eV(!0);
                    let n = await (0, F.Iq)({
                        authorize: e,
                        clientId: w,
                        scopes: e6,
                        responseType: j,
                        redirectUri: ee,
                        codeChallenge: eo,
                        codeChallengeMethod: el,
                        state: eu,
                        nonce: ef,
                        integrationType: e$,
                        permissions: f.Od(e7, eq),
                        guildId: e$ === c.Y.GUILD_INSTALL && null != eW ? eW : void 0,
                        channelId: e$ === c.Y.GUILD_INSTALL && null != eK ? eK : void 0
                    });
                    if (
                        (e &&
                            (await (0, C.x9)(w, e9),
                            setTimeout(() => {
                                y.Z.fetch();
                            }, 100)),
                        null != eN)
                    )
                        eN({
                            application: null == ex ? void 0 : ex.application,
                            location: n.location,
                            guild: eJ
                        }),
                            null == eC || eC();
                    else if (null != n.location) {
                        var t;
                        let e = null === (t = B.Z.toURLSafe(n.location)) || void 0 === t ? void 0 : t.pathname;
                        B.Z.isDiscordUrl(n.location) && e === ei.Z5c.OAUTH2_AUTHORIZED
                            ? (0, L.uL)(ei.Z5c.OAUTH2_AUTHORIZED, {
                                  state: {
                                      application: null == ex ? void 0 : ex.application,
                                      guild: eJ
                                  }
                              })
                            : (window.location = n.location);
                    } else eV(!1);
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && '' !== e.message ? eG(Error(e.message)) : eG(e), ej('AUTHORIZE_SCOPES'), eV(!1);
                }
            },
            [eA, eS, eN, null == ex ? void 0 : ex.application, eJ, eC, w, e6, j, ee, eo, el, eu, ef, e7, eq, eW, e$, eK, e9]
        ),
        ti = i.useRef(!1),
        to = i.useCallback(async () => {
            if (!k.default.isAuthenticated()) {
                (0, F.c$)(ew);
                return;
            }
            if (!e8.current && !ti.current) {
                ti.current = !0;
                try {
                    let e =
                        null != eD
                            ? eD
                            : await (0, F.Ww)({
                                  clientId: w,
                                  scopes: e6,
                                  responseType: j,
                                  redirectUri: ee,
                                  codeChallenge: eo,
                                  codeChallengeMethod: el,
                                  state: eu,
                                  nonce: ef,
                                  integrationType: null != e$ ? e$ : void 0
                              });
                    eM((0, Z.d)(e)), e_ === Y.s.NONE && e.authorized && !tt && tr(!0), (0, I.yw)(ei.rMx.OAUTH2_AUTHORIZE_VIEWED, { application_id: e.application.id });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) {
                        (0, F.c$)(ew);
                        return;
                    }
                    eG(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
                } finally {
                    ti.current = !1;
                }
            }
        }, [ew, eD, w, e6, j, ee, eo, el, eu, ef, e$, e_, tr, tt]),
        ta = i.useMemo(() => {
            var e;
            return null != e2 && e1
                ? Object.entries(null !== (e = e2.integrationTypesConfig) && void 0 !== e ? e : {})
                      .filter((e) => {
                          let [t, n] = e;
                          return null != n.oauth2InstallParams;
                      })
                      .map((e) => {
                          let [t, n] = e;
                          return Number(t);
                      })
                : [];
        }, [e2, e1]),
        ts = i.useRef(null);
    i.useEffect(() => {
        ek !== ts.current &&
            ((ts.current = ek),
            (0, I.yw)(ei.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: ek,
                application_id: w,
                integration_type: e$,
                scopes: e6,
                permissions: e7.toString()
            }));
    }, [w, e$, e7, e6, ek]),
        i.useEffect(() => {
            if (null == ek && (!e1 || null != e2) && eL) {
                if (null != eD) {
                    var e;
                    e0(null !== (e = eD.integration_type) && void 0 !== e ? e : c.Y.GUILD_INSTALL), ej('AUTHORIZE_SCOPES');
                } else ta.length > 1 ? ej('SELECT_INSTALL_TYPE') : (1 === ta.length ? e0(ta[0]) : null != eb ? e0(eb) : e0(c.Y.GUILD_INSTALL), ej('AUTHORIZE_SCOPES'));
            }
        }, [eD, ta, e2, e1, eb, ek, eL]),
        i.useEffect(() => {
            if (null == e$ || null != ex || null != eU) return;
            e$ === c.Y.USER_INSTALL && (eY(null), ez(null));
            let e = e6.filter((e) => !W.ak.includes(e));
            0 === e6.length ? eG(Error('No scopes were provided.')) : e.length > 0 ? eG(Error('Invalid scope: '.concat(e[0]))) : (0, H._$)(e7) ? eG(Error('Invalid permission(s) provided.')) : to();
        }, [tt, to, e6, e7, e$, ex, eU]);
    let tl = i.useCallback((e) => {
            e && eZ(!0);
        }, []),
        tc = (0, S.O)(tl);
    if (eU instanceof Error)
        return eP
            ? { body: (0, r.jsx)(et.Lk, { message: eU.message }) }
            : {
                  header: (0, r.jsxs)(v.xBx, {
                      className: es.errorHeader,
                      separator: !1,
                      justify: d.k.Justify.BETWEEN,
                      children: [
                          (0, r.jsx)(v.Text, {
                              variant: 'text-lg/bold',
                              color: 'header-primary',
                              children: 'Error'
                          }),
                          (0, r.jsx)(h.zx, {
                              'aria-label': ea.NW.string(ea.t.cpT0Cg),
                              look: h.zx.Looks.BLANK,
                              size: h.zx.Sizes.NONE,
                              onClick: eC,
                              children: (0, r.jsx)(v.Dio, { size: 'md' })
                          })
                      ]
                  }),
                  body: (0, r.jsx)(v.hzk, {
                      scrollbarType: 'none',
                      children: (0, r.jsx)(v.Text, {
                          variant: 'text-md/normal',
                          color: 'header-secondary',
                          children: eU.message
                      })
                  }),
                  footer: (0, r.jsx)(v.mzw, {
                      children: (0, r.jsx)(h.zx, {
                          onClick: eC,
                          children: 'Close'
                      })
                  }),
                  minimalPadding: !0,
                  extraWide: !0,
                  modalSize: v.CgR.SMALL
              };
    let tu = (e) => {
            e0(e), eM(null), ej('AUTHORIZE_SCOPES');
        },
        td = (e, t) => {
            eQ((n) => (e ? f.Od(n, t) : f.IH(n, t)));
        },
        tf = !1,
        t_ = !1,
        tp = !0,
        th = !0,
        tg = !0,
        tm = !1;
    switch (ek) {
        case null:
            return { body: (0, r.jsx)(E.$, { className: es.spinner }) };
        case 'SELECT_INSTALL_TYPE':
            if (null == e2) return { body: (0, r.jsx)(E.$, { className: es.spinner }) };
            (g = (0, r.jsx)($.Z, {
                application: e2,
                onSelect: tu,
                onClose: eC
            })),
                (tp = !1),
                (th = !1),
                (tg = !1),
                (tm = !0);
            break;
        case 'AUTHORIZE_SCOPES':
            if (null == ex || null == eX || null == e$) return { body: (0, r.jsx)(E.$, { className: es.spinner }) };
            let tE = null == eU || eU instanceof Error ? {} : eU,
                tv = null == eH ? void 0 : eH.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tb = e$ === c.Y.GUILD_INSTALL && e6.includes(u.x.WEBHOOK_INCOMING),
                ty = tb || (e$ === c.Y.GUILD_INSTALL && (e6.includes(u.x.BOT) || e6.includes(u.x.APPLICATIONS_COMMANDS)));
            (g = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(z.Z, { accountScopes: e5 }),
                    (0, r.jsx)(q.Z, {
                        application: ex.application,
                        accountScopes: e5,
                        requestedScopes: e6,
                        integrationType: e$,
                        errors: tE,
                        isTrustedName: eI
                    }),
                    (0, r.jsx)('div', {
                        className: es.intObserver,
                        ref: tc
                    }),
                    ty
                        ? (0, r.jsx)(X.Z, {
                              error: (null !== (n = null !== (t = tE[u.x.BOT]) && void 0 !== t ? t : tE[u.x.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
                              selectedGuildId: eW,
                              onGuildChange: eY,
                              guilds: null != tv ? tv : [],
                              disabled: '' !== eW && null != eW && !0 === ey
                          })
                        : null,
                    tb
                        ? (0, r.jsx)(en.Z, {
                              error: (null !== (o = tE[u.x.WEBHOOK_INCOMING]) && void 0 !== o ? o : [])[0],
                              selectedChannelId: eK,
                              selectedGuildId: eW,
                              onChannelChange: ez
                          })
                        : null
                ]
            })),
                e6.includes(u.x.BOT) && !f.fS(e7, G.Hn) && (T = 'AUTHORIZE_BOT_PERMISSIONS'),
                ta.length > 1 && (m = 'SELECT_INSTALL_TYPE'),
                (t_ = (ty && null == eJ) || (tb && null == eK)),
                (tf = !0);
            break;
        case 'AUTHORIZE_BOT_PERMISSIONS':
            if (null == ex) return { body: (0, r.jsx)(E.$, { className: es.spinner }) };
            (g = (0, r.jsx)(Q.Z, {
                application: ex.application,
                permissions: e7,
                deniedPermissions: eq,
                onPermissionsChange: td,
                guild: eJ
            })),
                (m = 'AUTHORIZE_SCOPES'),
                (tf = !0);
    }
    if (tp && null != ex) {
        let e = null === (a = ex.bot) || void 0 === a ? void 0 : a.approximate_guild_count;
        N = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(K.Z, {
                    application: ex.application,
                    scopes: e6,
                    disclosures: e9,
                    redirectUri: null !== (l = ex.redirect_uri) && void 0 !== l ? l : null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: eT
                }),
                (0, r.jsx)('div', {
                    className: es.intObserver,
                    ref: tc
                })
            ]
        });
    }
    return (
        th &&
            null != ex &&
            null != eX &&
            (R = (0, r.jsx)(J.Z, {
                id: ep,
                user: eX,
                application: ex.application,
                bot: ex.bot,
                accountScopes: e5,
                showLogout: eO || !1,
                location: ew,
                scopes: e6
            })),
        tg &&
            (P = (0, r.jsxs)('div', {
                className: es.footer,
                children: [
                    null != m
                        ? (0, r.jsx)(h.zx, {
                              look: h.zx.Looks.FILLED,
                              color: h.zx.Colors.PRIMARY,
                              onClick: () => ej(m),
                              children: ea.NW.string(ea.t['13/7kZ'])
                          })
                        : (0, r.jsx)(h.zx, {
                              look: h.zx.Looks.FILLED,
                              color: h.zx.Colors.PRIMARY,
                              onClick: () => tr(!1),
                              children: ea.NW.string(ea.t['ETE/oK'])
                          }),
                    'SELECT_INSTALL_TYPE' !== ek
                        ? eF
                            ? (0, r.jsx)('div', {
                                  className: es.action,
                                  children: (0, r.jsx)(h.zx, {
                                      onClick: null != T ? () => ej(T) : () => tr(!0),
                                      submitting: eB,
                                      disabled: null == N || t_,
                                      children: t_ ? ea.NW.string(ea.t.BwwiSE) : null != T ? ea.NW.string(ea.t['3PatS0']) : ea.NW.string(ea.t['y+/PEx'])
                                  })
                              })
                            : (0, r.jsx)('div', {
                                  className: es.action,
                                  children: (0, r.jsx)(v.ua7, {
                                      text: ea.NW.string(ea.t['7UiwCw']),
                                      children: (e) =>
                                          (0, r.jsx)(
                                              'div',
                                              ed(ec({}, e), {
                                                  className: es.tooltip,
                                                  children: (0, r.jsxs)(h.zx, {
                                                      disabled: !0,
                                                      submitting: eB,
                                                      innerClassName: es.buttonWithEmoji,
                                                      children: [
                                                          ea.NW.string(ea.t.N22i9P),
                                                          ' ',
                                                          (0, r.jsx)(O.Z, {
                                                              className: es.emoji,
                                                              src: U.ZP.getURL(p.Z.convert.fromCodePoint(er.I)),
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
            header: R,
            body: g,
            footer: P,
            nextStep: T,
            appDetails: N,
            sendAuthorize: tr,
            hasContentBackground: tf,
            minimalPadding: tm
        }
    );
}
function eE(e, t) {
    var n, i;
    if (null == t.location || (null != e && e(t))) return;
    let { host: o, pathname: a, searchParams: s } = null !== (n = B.Z.toURLSafe(t.location)) && void 0 !== n ? n : {},
        l = B.Z.isDiscordHostname(null != o ? o : null) || window.location.host === o;
    if (l && a === ei.Z5c.OAUTH2_AUTHORIZED) {
        let e = N._f.getCurrentConfig({ location: 'inAppOAuth2ModalCallback' }, { autoTrackExposure: !1 }),
            n = window.location.pathname.startsWith(ei.ANM.CHANNELS);
        e.enabled && null != t.application && null == t.guild && n
            ? j.S.safeDispatch(ei.CkL.SHOW_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { application: t.application })
            : (0, g.h7)((e) => {
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
              });
    } else
        l && (null == a ? void 0 : a.startsWith(ei.Z5c.OAUTH2_ERROR))
            ? (0, g.h7)((e) => {
                  var t, n;
                  let i = null !== (n = null !== (t = null == s ? void 0 : s.get('error_description')) && void 0 !== t ? t : null == s ? void 0 : s.get('error')) && void 0 !== n ? n : ea.NW.string(ea.t['mqn87+']);
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
            : null === (i = window.open(t.location, '_blank')) || void 0 === i || i.focus();
}
function ev(e, t) {
    if ((0, w.g)('create-guild-and-oauth2-modal')) {
        P.Z.openCreateGuildModal({ onSuccess: (n) => eb(ed(ec({}, e), { guildId: n }), t) });
        return;
    }
    eb(e, t);
}
function eb(e, t) {
    (0, g.h7)(
        (t) =>
            (0, r.jsx)(
                eg,
                ed(ec({}, t, e), {
                    cancelCompletesFlow: !1,
                    callback: eE.bind(null, e.callback)
                })
            ),
        { onCloseCallback: t }
    );
}
function ey(e) {
    var t;
    let { hostname: n = '', host: r, pathname: i, search: o } = null !== (t = B.Z.toURLSafe(e)) && void 0 !== t ? t : {};
    return null != i && null != o && (B.Z.isDiscordHostname(n) || r === window.location.host) && (i.startsWith('/api'.concat(ei.ANM.OAUTH2_AUTHORIZE)) || i.startsWith(ei.Z5c.OAUTH2_AUTHORIZE)) ? (0, V.y)(o) : null;
}

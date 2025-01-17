r.r(n),
    r.d(n, {
        OAuth2AuthorizeModal: function () {
            return eE;
        },
        OAuth2AuthorizePage: function () {
            return eg;
        },
        getOAuth2AuthorizeProps: function () {
            return ey;
        },
        openOAuth2Modal: function () {
            return eb;
        },
        openOAuth2ModalWithCreateGuildModal: function () {
            return eT;
        },
        useOAuth2AuthorizeForm: function () {
            return ev;
        }
    });
var i,
    a = r(47120);
var s = r(315314);
var o = r(610138);
var l = r(216116);
var u = r(78328);
var c = r(815648);
var d = r(411104);
var f = r(200651),
    _ = r(192379),
    h = r(120356),
    p = r.n(h),
    m = r(512969),
    g = r(873546),
    E = r(373793),
    v = r(243814),
    I = r(149765),
    T = r(442837),
    b = r(336317),
    y = r(693789),
    S = r(952265),
    A = r(21340),
    N = r(922770),
    C = r(481060),
    R = r(893776),
    O = r(384275),
    D = r(596454),
    L = r(434650),
    x = r(367907),
    w = r(702493),
    P = r(424602),
    M = r(728345),
    k = r(979200),
    U = r(388905),
    B = r(560067),
    G = r(353926),
    Z = r(341298),
    F = r(703656),
    V = r(973616),
    j = r(598077),
    H = r(314897),
    Y = r(585483),
    W = r(176354),
    K = r(700785),
    z = r(591759),
    q = r(807675),
    Q = r(489863),
    X = r(228763),
    J = r(422559),
    $ = r(713938),
    ee = r(166148),
    et = r(807989),
    en = r(627799),
    er = r(260430),
    ei = r(668185),
    ea = r(407546),
    es = r(41259),
    eo = r(28752),
    el = r(787025),
    eu = r(397394),
    ec = r(574384),
    ed = r(960662),
    ef = r(981631),
    e_ = r(186901),
    eh = r(388032),
    ep = r(961653);
let em = 'oauth2-authorize-header-id';
function eg() {
    let e = (0, m.TH)(),
        n = _.useMemo(() => (0, q.y)(e.search), [e.search]);
    (0, w.Z)();
    let i = !e.search.includes('response_type'),
        [a, s] = _.useState(!1),
        o = _.useRef(!1),
        [l, u] = _.useState(null),
        c = i && !g.tq && !a;
    if (
        (_.useEffect(() => {
            if (g.eL && i) {
                let n = new URL('discord://action/oauth2/authorize');
                (n.search = e.search), window.open(n.toString(), '_self');
            } else
                i &&
                    !g.tq &&
                    !o.current &&
                    (Promise.resolve()
                        .then(r.bind(r, 536285))
                        .then((n) => {
                            let { default: r } = n;
                            r.request(ef.Etm.DEEP_LINK, {
                                type: e_.jE.OAUTH2,
                                params: { search: e.search }
                            })
                                .then((e) => {
                                    u(null != e && e);
                                })
                                .catch(() => u(!1))
                                .then(() => r.disconnect());
                        }),
                    (o.current = !0));
        }, [e.search, i]),
        c && !1 !== l)
    ) {
        let e;
        return (
            (e =
                !0 === l
                    ? (0, f.jsxs)(f.Fragment, {
                          children: [
                              (0, f.jsx)(U.Dx, { children: eh.intl.string(eh.t.csrAMD) }),
                              (0, f.jsx)(U.DK, { children: eh.intl.string(eh.t['m1+IBg']) }),
                              (0, f.jsx)(y.zx, {
                                  onClick: () => s(!0),
                                  color: y.zx.Colors.BRAND,
                                  children: eh.intl.string(eh.t.fIv16O)
                              })
                          ]
                      })
                    : (0, f.jsxs)(f.Fragment, {
                          children: [(0, f.jsx)(U.Dx, { children: eh.intl.string(eh.t['Z+hCVV']) }), (0, f.jsx)(N.$, {})]
                      })),
            (0, f.jsx)(el.G, {
                removeChildWrapper: !0,
                children: (0, f.jsx)('div', {
                    className: ep.deepLinkContainer,
                    children: e
                })
            })
        );
    }
    return (0, f.jsx)(el.G, {
        removeChildWrapper: !0,
        children: (0, f.jsx)(eE, {
            transitionState: C.ModalTransitionState.ENTERED,
            ...n,
            showLogout: !0
        })
    });
}
function eE(e) {
    let { transitionState: n, ...r } = e,
        { header: i, body: a, footer: s, nextStep: o, appDetails: l, hasContentBackground: u, minimalPadding: c } = ev({ ...r }),
        d = (0, f.jsxs)(f.Fragment, {
            children: [
                i,
                (0, f.jsxs)('div', {
                    className: p()(ep.content, u ? ep.contentBackground : null, c ? ep.minimalPadding : null),
                    children: [a, null == o ? l : null]
                })
            ]
        });
    return (0, f.jsx)(el.j, {
        transitionState: n,
        'aria-labelledby': em,
        footer: s,
        children: (0, f.jsx)('div', {
            className: p()(ep.authorize),
            children: (0, f.jsx)(A.zJ, {
                orientation: 'auto',
                children: d
            })
        })
    });
}
function ev(e) {
    var n, r, i, a, s;
    let o,
        l,
        u,
        c,
        d,
        h,
        { clientId: g, responseType: S, redirectUri: A, codeChallenge: w, codeChallengeMethod: P, state: U, nonce: B, prompt: Z, authorizations: Y, scopes: el, permissions: e_, guildId: eg, channelId: eE, integrationType: ev, disableGuildSelect: eI = !1, showLogout: eT = !1, cancelCompletesFlow: eb = !0, isTrustedName: ey = !1, isEmbeddedFlow: eS = !1, callback: eA, callbackWithoutPost: eN, onClose: eC, disclosures: eR } = e,
        eO = null != ev ? (null == Y ? void 0 : Y.get(ev)) : void 0,
        eD = (0, m.TH)(),
        eL = (0, T.e7)([G.Z], () => G.Z.hasLoadedExperiments);
    _.useEffect(() => {
        H.default.isAuthenticated() && !eL && R.Z.getExperiments();
    }, [eL]);
    let [ex, ew] = _.useState(null),
        [eP, eM] = _.useState(null),
        [ek, eU] = _.useState(null),
        [eB, eG] = _.useState(!1),
        [eZ, eF] = _.useState(!1),
        eV = null == ex ? void 0 : ex.guilds,
        [ej, eH] = _.useState(null != eg ? eg : null),
        [eY, eW] = _.useState(null != eE ? eE : null),
        [eK, ez] = _.useState(K.Hn),
        eq = _.useMemo(() => ((null == ex ? void 0 : ex.user) != null ? new j.Z(ex.user) : null), [null == ex ? void 0 : ex.user]),
        eQ = _.useMemo(() => (null == eV ? void 0 : eV.find((e) => e.id === ej)), [eV, ej]),
        [eX, eJ] = _.useState(null),
        e$ = _.useMemo(() => {
            var e;
            return null == eO && null == ev && (null !== (e = null == el ? void 0 : el.length) && void 0 !== e ? e : 0) === 0 && null == A;
        }, [eO, null == el ? void 0 : el.length, A, ev]),
        [e0, e1] = _.useState(null);
    _.useEffect(() => {
        e$ && M.ZP.fetchApplication(g).then((e) => e1(V.ZP.createFromServer(e)));
    }, [g, e$]);
    let e2 = _.useMemo(() => {
            var e, n;
            return null == eX ? null : null == e0 ? void 0 : null === (n = e0.integrationTypesConfig) || void 0 === n ? void 0 : null === (e = n[eX]) || void 0 === e ? void 0 : e.oauth2InstallParams;
        }, [null == e0 ? void 0 : e0.integrationTypesConfig, eX]),
        { requestedScopes: e3, accountScopes: e4 } = _.useMemo(() => {
            let e = e$ ? (null == e2 ? void 0 : e2.scopes) : el,
                n = (0, q.K)(null != e ? e : []),
                r = $.Qe.filter((e) => n.includes(e));
            return {
                requestedScopes: n,
                accountScopes: r
            };
        }, [null == e2 ? void 0 : e2.scopes, el, e$]),
        e6 = _.useMemo(() => {
            var e;
            let n = e$ ? I.vB(null !== (e = null == e2 ? void 0 : e2.permissions) && void 0 !== e ? e : 0) : e_;
            return null != n ? n : K.Hn;
        }, [null == e2 ? void 0 : e2.permissions, e_, e$]),
        e5 = _.useRef(!1),
        [e7, e8] = _.useState(null != eR ? eR : []),
        [e9, te] = _.useState(null != eR && eR.length > 0);
    _.useEffect(() => {
        if (e5.current) return;
        let e = async () => {
            e5.current = !0;
            try {
                let { disclosures: e, allAcked: n } = await (0, k.de)(g);
                te(!n), e8(e);
            } catch (r) {
                let { status: e, body: n } = r;
                if (401 === e) {
                    (0, Q.c$)(eD);
                    return;
                }
                eU(Error(null != n.message ? n.message : ''.concat(Object.keys(n)[0], ': ').concat(Object.values(n)[0])));
            } finally {
                e5.current = !1;
            }
        };
        if (null == eR) {
            if (!H.default.isAuthenticated()) {
                (0, Q.c$)(eD);
                return;
            }
            e();
        }
    }, [g, eD, eR, e8, eU, te, eM]);
    let tt = _.useCallback(
            async (e) => {
                if (null != eN) {
                    eG(!0), eN(e);
                    return;
                }
                if (!e && !eb) {
                    null != eA &&
                        (eA({
                            application: null == ex ? void 0 : ex.application,
                            guild: eQ
                        }),
                        null == eC || eC());
                    return;
                }
                if (null == eX) {
                    eU(Error('No integration type was selected.'));
                    return;
                }
                try {
                    eG(!0);
                    let r = await (0, Q.Iq)({
                        authorize: e,
                        clientId: g,
                        scopes: e3,
                        responseType: S,
                        redirectUri: A,
                        codeChallenge: w,
                        codeChallengeMethod: P,
                        state: U,
                        nonce: B,
                        integrationType: eX,
                        permissions: I.Od(e6, eK),
                        guildId: eX === E.Y.GUILD_INSTALL && null != ej ? ej : void 0,
                        channelId: eX === E.Y.GUILD_INSTALL && null != eY ? eY : void 0
                    });
                    if (
                        (e &&
                            (await (0, k.x9)(g, e7),
                            setTimeout(() => {
                                O.Z.fetch();
                            }, 100)),
                        null != eA)
                    )
                        eA({
                            application: null == ex ? void 0 : ex.application,
                            location: r.location,
                            guild: eQ
                        }),
                            null == eC || eC();
                    else if (null != r.location) {
                        var n;
                        let e = null === (n = z.Z.toURLSafe(r.location)) || void 0 === n ? void 0 : n.pathname;
                        z.Z.isDiscordUrl(r.location) && e === ef.Z5c.OAUTH2_AUTHORIZED
                            ? (0, F.uL)(ef.Z5c.OAUTH2_AUTHORIZED, {
                                  state: {
                                      application: null == ex ? void 0 : ex.application,
                                      guild: eQ
                                  }
                              })
                            : (window.location = r.location);
                    } else eG(!1);
                } catch (n) {
                    let e = n.body;
                    (null == e ? void 0 : e.message) != null && '' !== e.message ? eU(Error(e.message)) : eU(e), eM('AUTHORIZE_SCOPES'), eG(!1);
                }
            },
            [eN, eb, eA, null == ex ? void 0 : ex.application, eQ, eC, g, e3, S, A, w, P, U, B, e6, eK, ej, eX, eY, e7]
        ),
        tn = _.useRef(!1),
        tr = _.useCallback(async () => {
            if (!H.default.isAuthenticated()) {
                (0, Q.c$)(eD);
                return;
            }
            if (!e5.current) {
                if (!tn.current) {
                    tn.current = !0;
                    try {
                        let e =
                            null != eO
                                ? eO
                                : await (0, Q.Ww)({
                                      clientId: g,
                                      scopes: e3,
                                      responseType: S,
                                      redirectUri: A,
                                      codeChallenge: w,
                                      codeChallengeMethod: P,
                                      state: U,
                                      nonce: B,
                                      integrationType: null != eX ? eX : void 0
                                  });
                        ew((0, X.d)(e)), Z === ee.s.NONE && e.authorized && !e9 && tt(!0), (0, x.yw)(ef.rMx.OAUTH2_AUTHORIZE_VIEWED, { application_id: e.application.id });
                    } catch (r) {
                        let { status: e, body: n } = r;
                        if (401 === e) {
                            (0, Q.c$)(eD);
                            return;
                        }
                        eU(Error(null != n.message ? n.message : ''.concat(Object.keys(n)[0], ': ').concat(Object.values(n)[0])));
                    } finally {
                        tn.current = !1;
                    }
                }
            }
        }, [eD, eO, g, e3, S, A, w, P, U, B, eX, Z, tt, e9]),
        ti = _.useMemo(() => {
            var e;
            return null != e0 && e$
                ? Object.entries(null !== (e = e0.integrationTypesConfig) && void 0 !== e ? e : {})
                      .filter((e) => {
                          let [n, r] = e;
                          return null != r.oauth2InstallParams;
                      })
                      .map((e) => {
                          let [n, r] = e;
                          return Number(n);
                      })
                : [];
        }, [e0, e$]),
        ta = _.useRef(null);
    _.useEffect(() => {
        eP !== ta.current &&
            ((ta.current = eP),
            (0, x.yw)(ef.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eP,
                application_id: g,
                integration_type: eX,
                scopes: e3,
                permissions: e6.toString()
            }));
    }, [g, eX, e6, e3, eP]),
        _.useEffect(() => {
            if (null == eP && (!e$ || null != e0) && !!eL)
                if (null != eO) {
                    var e;
                    eJ(null !== (e = eO.integration_type) && void 0 !== e ? e : E.Y.GUILD_INSTALL), eM('AUTHORIZE_SCOPES');
                } else ti.length > 1 ? eM('SELECT_INSTALL_TYPE') : (1 === ti.length ? eJ(ti[0]) : null != ev ? eJ(ev) : eJ(E.Y.GUILD_INSTALL), eM('AUTHORIZE_SCOPES'));
        }, [eO, ti, e0, e$, ev, eP, eL]),
        _.useEffect(() => {
            if (null == eX || null != ex || null != ek) return;
            eX === E.Y.USER_INSTALL && (eH(null), eW(null));
            let e = e3.filter((e) => !$.ak.includes(e));
            0 === e3.length ? eU(Error('No scopes were provided.')) : e.length > 0 ? eU(Error('Invalid scope: '.concat(e[0]))) : (0, J._$)(e6) ? eU(Error('Invalid permission(s) provided.')) : tr();
        }, [e9, tr, e3, e6, eX, ex, ek]);
    let ts = _.useCallback((e) => {
            e && eF(!0);
        }, []),
        to = (0, L.O)(ts);
    if (ek instanceof Error) return { body: (0, f.jsx)(eu.Lk, { message: ek.message }) };
    let tl = (e) => {
            eJ(e), ew(null), eM('AUTHORIZE_SCOPES');
        },
        tu = (e, n) => {
            ez((r) => (e ? I.Od(r, n) : I.IH(r, n)));
        },
        tc = !1,
        td = !1,
        tf = !0,
        t_ = !0,
        th = !0,
        tp = !1;
    switch (eP) {
        case null:
            return { body: (0, f.jsx)(N.$, { className: ep.spinner }) };
        case 'SELECT_INSTALL_TYPE':
            if (null == e0) return { body: (0, f.jsx)(N.$, { className: ep.spinner }) };
            (o = (0, f.jsx)(eo.Z, {
                application: e0,
                onSelect: tl,
                onClose: eC
            })),
                (tf = !1),
                (t_ = !1),
                (th = !1),
                (tp = !0);
            break;
        case 'AUTHORIZE_SCOPES':
            if (null == ex || null == eq || null == eX) return { body: (0, f.jsx)(N.$, { className: ep.spinner }) };
            let tm = null == ek || ek instanceof Error ? {} : ek,
                tg = null == eV ? void 0 : eV.sort((e, n) => e.name.toLowerCase().localeCompare(n.name.toLowerCase())),
                tE = eX === E.Y.GUILD_INSTALL && e3.includes(v.x.WEBHOOK_INCOMING),
                tv = tE || (eX === E.Y.GUILD_INSTALL && (e3.includes(v.x.BOT) || e3.includes(v.x.APPLICATIONS_COMMANDS)));
            (o = (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsx)(en.Z, { accountScopes: e4 }),
                    (0, f.jsx)(er.Z, {
                        application: ex.application,
                        accountScopes: e4,
                        requestedScopes: e3,
                        integrationType: eX,
                        errors: tm,
                        isTrustedName: ey
                    }),
                    (0, f.jsx)('div', {
                        className: ep.intObserver,
                        ref: to
                    }),
                    tv
                        ? (0, f.jsx)(ea.Z, {
                              error: (null !== (r = null !== (n = tm[v.x.BOT]) && void 0 !== n ? n : tm[v.x.APPLICATIONS_COMMANDS]) && void 0 !== r ? r : [])[0],
                              selectedGuildId: ej,
                              onGuildChange: eH,
                              guilds: null != tg ? tg : [],
                              disabled: '' !== ej && null != ej && !0 === eI
                          })
                        : null,
                    tE
                        ? (0, f.jsx)(ec.Z, {
                              error: (null !== (i = tm[v.x.WEBHOOK_INCOMING]) && void 0 !== i ? i : [])[0],
                              selectedChannelId: eY,
                              selectedGuildId: ej,
                              onChannelChange: eW
                          })
                        : null
                ]
            })),
                e3.includes(v.x.BOT) && !I.fS(e6, K.Hn) && (u = 'AUTHORIZE_BOT_PERMISSIONS'),
                ti.length > 1 && (l = 'SELECT_INSTALL_TYPE'),
                (td = (tv && null == eQ) || (tE && null == eY)),
                (tc = !0);
            break;
        case 'AUTHORIZE_BOT_PERMISSIONS':
            if (null == ex) return { body: (0, f.jsx)(N.$, { className: ep.spinner }) };
            (o = (0, f.jsx)(ei.Z, {
                application: ex.application,
                permissions: e6,
                deniedPermissions: eK,
                onPermissionsChange: tu,
                guild: eQ
            })),
                (l = 'AUTHORIZE_SCOPES'),
                (tc = !0);
    }
    if (tf && null != ex) {
        let e = null === (a = ex.bot) || void 0 === a ? void 0 : a.approximate_guild_count;
        c = (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(et.Z, {
                    application: ex.application,
                    scopes: e3,
                    disclosures: e7,
                    redirectUri: null !== (s = ex.redirect_uri) && void 0 !== s ? s : null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: eS
                }),
                (0, f.jsx)('div', {
                    className: ep.intObserver,
                    ref: to
                })
            ]
        });
    }
    return (
        t_ &&
            null != ex &&
            null != eq &&
            (d = (0, f.jsx)(es.Z, {
                id: em,
                user: eq,
                application: ex.application,
                bot: ex.bot,
                accountScopes: e4,
                showLogout: eT || !1,
                location: eD
            })),
        th &&
            (h = (0, f.jsxs)('div', {
                className: p()(ep.footer),
                children: [
                    null != l
                        ? (0, f.jsx)(y.zx, {
                              look: y.zx.Looks.LINK,
                              color: y.zx.Colors.PRIMARY,
                              onClick: () => eM(l),
                              children: eh.intl.string(eh.t['13/7kZ'])
                          })
                        : (0, f.jsx)(y.zx, {
                              look: y.zx.Looks.LINK,
                              color: y.zx.Colors.PRIMARY,
                              onClick: () => tt(!1),
                              children: eh.intl.string(eh.t['ETE/oK'])
                          }),
                    'SELECT_INSTALL_TYPE' !== eP
                        ? eZ
                            ? (0, f.jsx)('div', {
                                  className: ep.action,
                                  children: (0, f.jsx)(y.zx, {
                                      onClick: null != u ? () => eM(u) : () => tt(!0),
                                      submitting: eB,
                                      disabled: null == c || td,
                                      children: td ? eh.intl.string(eh.t.BwwiSE) : null != u ? eh.intl.string(eh.t['3PatS0']) : eh.intl.string(eh.t['y+/PEx'])
                                  })
                              })
                            : (0, f.jsx)('div', {
                                  className: ep.action,
                                  children: (0, f.jsx)(C.Tooltip, {
                                      text: eh.intl.string(eh.t['7UiwCw']),
                                      children: (e) =>
                                          (0, f.jsx)('div', {
                                              ...e,
                                              className: ep.tooltip,
                                              children: (0, f.jsxs)(y.zx, {
                                                  disabled: !0,
                                                  submitting: eB,
                                                  innerClassName: ep.buttonWithEmoji,
                                                  children: [
                                                      eh.intl.string(eh.t.N22i9P),
                                                      ' ',
                                                      (0, f.jsx)(D.Z, {
                                                          className: ep.emoji,
                                                          src: W.ZP.getURL(b.Z.convert.fromCodePoint(ed.I)),
                                                          emojiName: ':point_down:',
                                                          animated: !1
                                                      })
                                                  ]
                                              })
                                          })
                                  })
                              })
                        : null
                ]
            })),
        {
            header: d,
            body: o,
            footer: h,
            nextStep: u,
            appDetails: c,
            sendAuthorize: tt,
            hasContentBackground: tc,
            minimalPadding: tp
        }
    );
}
function eI(e, n) {
    var r, i;
    if (null == n.location || (null != e && e(n))) return;
    let { host: a, pathname: s, searchParams: o } = null !== (r = z.Z.toURLSafe(n.location)) && void 0 !== r ? r : {},
        l = z.Z.isDiscordHostname(null != a ? a : null) || window.location.host === a;
    if (l && s === ef.Z5c.OAUTH2_AUTHORIZED) {
        let e = P._f.getCurrentConfig({ location: 'inAppOAuth2ModalCallback' }, { autoTrackExposure: !1 }),
            r = window.location.pathname.startsWith(ef.ANM.CHANNELS);
        e.enabled && null != n.application && null == n.guild && r
            ? Y.S.safeDispatch(ef.CkL.SHOW_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { application: n.application })
            : (0, S.h7)((e) => {
                  let r = (0, f.jsx)(eu._Z, {
                      guild: n.guild,
                      application: n.application,
                      onClose: e.onClose
                  });
                  return (0, f.jsx)(el.j, {
                      ...e,
                      'aria-labelledby': em,
                      footer: r,
                      children: (0, f.jsx)(eu.Jh, {
                          guild: n.guild,
                          application: n.application,
                          onClose: e.onClose
                      })
                  });
              });
    } else
        l && (null == s ? void 0 : s.startsWith(ef.Z5c.OAUTH2_ERROR))
            ? (0, S.h7)((e) => {
                  var n, r;
                  let i = null !== (r = null !== (n = null == o ? void 0 : o.get('error_description')) && void 0 !== n ? n : null == o ? void 0 : o.get('error')) && void 0 !== r ? r : eh.intl.string(eh.t['mqn87+']);
                  return (
                      Array.isArray(i) && (i = i[0]),
                      (0, f.jsx)(el.j, {
                          ...e,
                          'aria-labelledby': em,
                          children: (0, f.jsx)(eu.Lk, {
                              message: i,
                              onClose: e.onClose
                          })
                      })
                  );
              })
            : null === (i = window.open(n.location, '_blank')) || void 0 === i || i.focus();
}
function eT(e, n) {
    if ((0, Z.g)('create-guild-and-oauth2-modal')) {
        B.Z.openCreateGuildModal({
            onSuccess: (r) =>
                eb(
                    {
                        ...e,
                        guildId: r
                    },
                    n
                )
        });
        return;
    }
    eb(e, n);
}
function eb(e, n) {
    (0, S.h7)(
        (n) =>
            (0, f.jsx)(eE, {
                ...n,
                ...e,
                cancelCompletesFlow: !1,
                callback: eI.bind(null, e.callback)
            }),
        { onCloseCallback: n }
    );
}
function ey(e) {
    var n;
    let { hostname: r = '', host: i, pathname: a, search: s } = null !== (n = z.Z.toURLSafe(e)) && void 0 !== n ? n : {};
    return null != a && null != s && (z.Z.isDiscordHostname(r) || i === window.location.host) && (a.startsWith('/api'.concat(ef.ANM.OAUTH2_AUTHORIZE)) || a.startsWith(ef.Z5c.OAUTH2_AUTHORIZE)) ? (0, q.y)(s) : null;
}
!(function (e) {
    (e.SELECT_INSTALL_TYPE = 'SELECT_INSTALL_TYPE'), (e.AUTHORIZE_SCOPES = 'AUTHORIZE_SCOPES'), (e.AUTHORIZE_BOT_PERMISSIONS = 'AUTHORIZE_BOT_PERMISSIONS');
})(i || (i = {}));

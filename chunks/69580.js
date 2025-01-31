n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: () => ec,
        OAuth2AuthorizePage: () => eu,
        getOAuth2AuthorizeProps: () => eh,
        openOAuth2Modal: () => ep,
        openOAuth2ModalWithCreateGuildModal: () => e_,
        useOAuth2AuthorizeForm: () => ed
    }),
    n(47120),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(411104);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(512969),
    l = n(873546),
    u = n(373793),
    c = n(243814),
    d = n(435935),
    f = n(149765),
    _ = n(442837),
    p = n(336317),
    h = n(693789),
    m = n(952265),
    g = n(21340),
    E = n(922770),
    v = n(481060),
    y = n(893776),
    I = n(384275),
    b = n(596454),
    T = n(434650),
    S = n(367907),
    A = n(702493),
    N = n(424602),
    C = n(728345),
    R = n(979200),
    O = n(388905),
    D = n(560067),
    x = n(353926),
    L = n(341298),
    P = n(703656),
    w = n(973616),
    M = n(598077),
    k = n(314897),
    U = n(585483),
    G = n(176354),
    B = n(700785),
    Z = n(591759),
    F = n(807675),
    V = n(489863),
    j = n(228763),
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
    ei = n(960662),
    er = n(981631),
    ea = n(186901),
    es = n(388032),
    eo = n(961653);
let el = 'oauth2-authorize-header-id';
function eu() {
    let e = (0, o.TH)(),
        t = r.useMemo(() => (0, F.y)(e.search), [e.search]);
    (0, A.Z)();
    let a = !e.search.includes('response_type'),
        [s, u] = r.useState(!1),
        c = r.useRef(!1),
        [d, f] = r.useState(null),
        _ = a && !l.tq && !s;
    if (
        (r.useEffect(() => {
            if (l.eL && a) {
                let t = new URL('discord://action/oauth2/authorize');
                (t.search = e.search), window.open(t.toString(), '_self');
            } else
                !a ||
                    l.tq ||
                    c.current ||
                    (Promise.resolve()
                        .then(n.bind(n, 536285))
                        .then((t) => {
                            let { default: n } = t;
                            n.request(er.Etm.DEEP_LINK, {
                                type: ea.jE.OAUTH2,
                                params: { search: e.search }
                            })
                                .then((e) => {
                                    f(null != e && e);
                                })
                                .catch(() => f(!1))
                                .then(() => n.disconnect());
                        }),
                    (c.current = !0));
        }, [e.search, a]),
        _ && !1 !== d)
    ) {
        let e;
        return (
            (e =
                !0 === d
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(O.Dx, { children: es.intl.string(es.t.csrAMD) }),
                              (0, i.jsx)(O.DK, { children: es.intl.string(es.t['m1+IBg']) }),
                              (0, i.jsx)(h.zx, {
                                  onClick: () => u(!0),
                                  color: h.zx.Colors.BRAND,
                                  children: es.intl.string(es.t.fIv16O)
                              })
                          ]
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [(0, i.jsx)(O.Dx, { children: es.intl.string(es.t['Z+hCVV']) }), (0, i.jsx)(E.$, {})]
                      })),
            (0, i.jsx)(ee.G, {
                removeChildWrapper: !0,
                children: (0, i.jsx)('div', {
                    className: eo.deepLinkContainer,
                    children: e
                })
            })
        );
    }
    return (0, i.jsx)(ee.G, {
        removeChildWrapper: !0,
        children: (0, i.jsx)(ec, {
            transitionState: v.Dvm.ENTERED,
            ...t,
            showLogout: !0
        })
    });
}
function ec(e) {
    let { transitionState: t, ...n } = e,
        { header: r, body: a, footer: o, nextStep: l, appDetails: u, hasContentBackground: c, minimalPadding: d, extraWide: f, modalSize: _ } = ed({ ...n }),
        p = (0, i.jsxs)(i.Fragment, {
            children: [
                r,
                (0, i.jsxs)('div', {
                    className: s()(eo.content, c ? eo.contentBackground : null, d ? eo.minimalPadding : null, f ? eo.extraWide : null),
                    children: [a, null == l ? u : null]
                })
            ]
        });
    return (0, i.jsx)(ee.j, {
        transitionState: t,
        'aria-labelledby': el,
        footer: o,
        modalSize: _,
        children: (0, i.jsx)('div', {
            className: s()(eo.authorize),
            children: (0, i.jsx)(g.zJ, {
                orientation: 'auto',
                children: p
            })
        })
    });
}
function ed(e) {
    var t, n, a, l, m;
    let g,
        A,
        N,
        O,
        D,
        L,
        { clientId: U, responseType: ee, redirectUri: et, codeChallenge: ea, codeChallengeMethod: eu, state: ec, nonce: ed, prompt: ef, authorizations: e_, scopes: ep, permissions: eh, guildId: em, channelId: eg, integrationType: eE, disableGuildSelect: ev = !1, showLogout: ey = !1, cancelCompletesFlow: eI = !0, isTrustedName: eb = !1, isEmbeddedFlow: eT = !1, callback: eS, callbackWithoutPost: eA, onClose: eN, disclosures: eC } = e,
        eR = null != eE ? (null == e_ ? void 0 : e_.get(eE)) : void 0,
        eO = (0, o.TH)(),
        eD = (0, _.e7)([x.Z], () => x.Z.hasLoadedExperiments);
    r.useEffect(() => {
        k.default.isAuthenticated() && !eD && y.Z.getExperiments();
    }, [eD]);
    let [ex, eL] = r.useState(null),
        [eP, ew] = r.useState(null),
        [eM, ek] = r.useState(null),
        [eU, eG] = r.useState(!1),
        [eB, eZ] = r.useState(!1),
        eF = null == ex ? void 0 : ex.guilds,
        [eV, ej] = r.useState(null != em ? em : null),
        [eH, eY] = r.useState(null != eg ? eg : null),
        [eW, eK] = r.useState(B.Hn),
        ez = r.useMemo(() => ((null == ex ? void 0 : ex.user) != null ? new M.Z(ex.user) : null), [null == ex ? void 0 : ex.user]),
        eq = r.useMemo(() => (null == eF ? void 0 : eF.find((e) => e.id === eV)), [eF, eV]),
        [eQ, eX] = r.useState(null),
        eJ = r.useMemo(() => {
            var e;
            return null == eR && null == eE && (null !== (e = null == ep ? void 0 : ep.length) && void 0 !== e ? e : 0) === 0 && null == et;
        }, [eR, null == ep ? void 0 : ep.length, et, eE]),
        [e$, e0] = r.useState(null);
    r.useEffect(() => {
        eJ && C.ZP.fetchApplication(U).then((e) => e0(w.ZP.createFromServer(e)));
    }, [U, eJ]);
    let e1 = r.useMemo(() => {
            var e, t;
            return null == eQ ? null : null == e$ ? void 0 : null === (t = e$.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[eQ]) || void 0 === e ? void 0 : e.oauth2InstallParams;
        }, [null == e$ ? void 0 : e$.integrationTypesConfig, eQ]),
        { requestedScopes: e2, accountScopes: e3 } = r.useMemo(() => {
            let e = eJ ? (null == e1 ? void 0 : e1.scopes) : ep,
                t = (0, F.K)(null != e ? e : []),
                n = Y.Qe.filter((e) => t.includes(e));
            return {
                requestedScopes: t,
                accountScopes: n
            };
        }, [null == e1 ? void 0 : e1.scopes, ep, eJ]),
        e4 = r.useMemo(() => {
            var e;
            let t = eJ ? f.vB(null !== (e = null == e1 ? void 0 : e1.permissions) && void 0 !== e ? e : 0) : eh;
            return null != t ? t : B.Hn;
        }, [null == e1 ? void 0 : e1.permissions, eh, eJ]),
        e6 = r.useRef(!1),
        [e5, e7] = r.useState(null != eC ? eC : []),
        [e8, e9] = r.useState(null != eC && eC.length > 0);
    r.useEffect(() => {
        if (e6.current) return;
        let e = async () => {
            e6.current = !0;
            try {
                let { disclosures: e, allAcked: t } = await (0, R.de)(U);
                e9(!t), e7(e);
            } catch (n) {
                let { status: e, body: t } = n;
                if (401 === e) {
                    (0, V.c$)(eO);
                    return;
                }
                ek(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
            } finally {
                e6.current = !1;
            }
        };
        if (null == eC) {
            if (!k.default.isAuthenticated()) {
                (0, V.c$)(eO);
                return;
            }
            e();
        }
    }, [U, eO, eC, e7, ek, e9, ew]);
    let te = r.useCallback(
            async (e) => {
                if (null != eA) {
                    eG(!0), eA(e);
                    return;
                }
                if (!e && !eI) {
                    null != eS &&
                        (eS({
                            application: null == ex ? void 0 : ex.application,
                            guild: eq
                        }),
                        null == eN || eN());
                    return;
                }
                if (null == eQ) {
                    ek(Error('No integration type was selected.'));
                    return;
                }
                try {
                    eG(!0);
                    let n = await (0, V.Iq)({
                        authorize: e,
                        clientId: U,
                        scopes: e2,
                        responseType: ee,
                        redirectUri: et,
                        codeChallenge: ea,
                        codeChallengeMethod: eu,
                        state: ec,
                        nonce: ed,
                        integrationType: eQ,
                        permissions: f.Od(e4, eW),
                        guildId: eQ === u.Y.GUILD_INSTALL && null != eV ? eV : void 0,
                        channelId: eQ === u.Y.GUILD_INSTALL && null != eH ? eH : void 0
                    });
                    if (
                        (e &&
                            (await (0, R.x9)(U, e5),
                            setTimeout(() => {
                                I.Z.fetch();
                            }, 100)),
                        null != eS)
                    )
                        eS({
                            application: null == ex ? void 0 : ex.application,
                            location: n.location,
                            guild: eq
                        }),
                            null == eN || eN();
                    else if (null != n.location) {
                        var t;
                        let e = null === (t = Z.Z.toURLSafe(n.location)) || void 0 === t ? void 0 : t.pathname;
                        Z.Z.isDiscordUrl(n.location) && e === er.Z5c.OAUTH2_AUTHORIZED
                            ? (0, P.uL)(er.Z5c.OAUTH2_AUTHORIZED, {
                                  state: {
                                      application: null == ex ? void 0 : ex.application,
                                      guild: eq
                                  }
                              })
                            : (window.location = n.location);
                    } else eG(!1);
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && '' !== e.message ? ek(Error(e.message)) : ek(e), ew('AUTHORIZE_SCOPES'), eG(!1);
                }
            },
            [eA, eI, eS, null == ex ? void 0 : ex.application, eq, eN, U, e2, ee, et, ea, eu, ec, ed, e4, eW, eV, eQ, eH, e5]
        ),
        tt = r.useRef(!1),
        tn = r.useCallback(async () => {
            if (!k.default.isAuthenticated()) {
                (0, V.c$)(eO);
                return;
            }
            if (!e6.current && !tt.current) {
                tt.current = !0;
                try {
                    let e =
                        null != eR
                            ? eR
                            : await (0, V.Ww)({
                                  clientId: U,
                                  scopes: e2,
                                  responseType: ee,
                                  redirectUri: et,
                                  codeChallenge: ea,
                                  codeChallengeMethod: eu,
                                  state: ec,
                                  nonce: ed,
                                  integrationType: null != eQ ? eQ : void 0
                              });
                    eL((0, j.d)(e)), ef === W.s.NONE && e.authorized && !e8 && te(!0), (0, S.yw)(er.rMx.OAUTH2_AUTHORIZE_VIEWED, { application_id: e.application.id });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) {
                        (0, V.c$)(eO);
                        return;
                    }
                    ek(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
                } finally {
                    tt.current = !1;
                }
            }
        }, [eO, eR, U, e2, ee, et, ea, eu, ec, ed, eQ, ef, te, e8]),
        ti = r.useMemo(() => {
            var e;
            return null != e$ && eJ
                ? Object.entries(null !== (e = e$.integrationTypesConfig) && void 0 !== e ? e : {})
                      .filter((e) => {
                          let [t, n] = e;
                          return null != n.oauth2InstallParams;
                      })
                      .map((e) => {
                          let [t, n] = e;
                          return Number(t);
                      })
                : [];
        }, [e$, eJ]),
        tr = r.useRef(null);
    r.useEffect(() => {
        eP !== tr.current &&
            ((tr.current = eP),
            (0, S.yw)(er.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eP,
                application_id: U,
                integration_type: eQ,
                scopes: e2,
                permissions: e4.toString()
            }));
    }, [U, eQ, e4, e2, eP]),
        r.useEffect(() => {
            if (null == eP && (!eJ || null != e$) && eD) {
                if (null != eR) {
                    var e;
                    eX(null !== (e = eR.integration_type) && void 0 !== e ? e : u.Y.GUILD_INSTALL), ew('AUTHORIZE_SCOPES');
                } else ti.length > 1 ? ew('SELECT_INSTALL_TYPE') : (1 === ti.length ? eX(ti[0]) : null != eE ? eX(eE) : eX(u.Y.GUILD_INSTALL), ew('AUTHORIZE_SCOPES'));
            }
        }, [eR, ti, e$, eJ, eE, eP, eD]),
        r.useEffect(() => {
            if (null == eQ || null != ex || null != eM) return;
            eQ === u.Y.USER_INSTALL && (ej(null), eY(null));
            let e = e2.filter((e) => !Y.ak.includes(e));
            0 === e2.length ? ek(Error('No scopes were provided.')) : e.length > 0 ? ek(Error('Invalid scope: '.concat(e[0]))) : (0, H._$)(e4) ? ek(Error('Invalid permission(s) provided.')) : tn();
        }, [e8, tn, e2, e4, eQ, ex, eM]);
    let ta = r.useCallback((e) => {
            e && eZ(!0);
        }, []),
        ts = (0, T.O)(ta);
    if (eM instanceof Error)
        return {
            header: (0, i.jsxs)(v.xBx, {
                className: eo.errorHeader,
                separator: !1,
                justify: d.k.Justify.BETWEEN,
                children: [
                    (0, i.jsx)(v.Text, {
                        variant: 'text-lg/bold',
                        color: 'header-primary',
                        children: 'Error'
                    }),
                    (0, i.jsx)(h.zx, {
                        'aria-label': es.intl.string(es.t.cpT0Cg),
                        look: h.zx.Looks.BLANK,
                        size: h.zx.Sizes.NONE,
                        onClick: eN,
                        children: (0, i.jsx)(v.Dio, { size: 'md' })
                    })
                ]
            }),
            body: (0, i.jsx)(v.hzk, {
                scrollbarType: 'none',
                children: (0, i.jsx)(v.Text, {
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: eM.message
                })
            }),
            footer: (0, i.jsx)(v.mzw, {
                children: (0, i.jsx)(h.zx, {
                    onClick: eN,
                    children: 'Close'
                })
            }),
            minimalPadding: !0,
            extraWide: !0,
            modalSize: v.CgR.SMALL
        };
    let to = (e) => {
            eX(e), eL(null), ew('AUTHORIZE_SCOPES');
        },
        tl = (e, t) => {
            eK((n) => (e ? f.Od(n, t) : f.IH(n, t)));
        },
        tu = !1,
        tc = !1,
        td = !0,
        tf = !0,
        t_ = !0,
        tp = !1;
    switch (eP) {
        case null:
            return { body: (0, i.jsx)(E.$, { className: eo.spinner }) };
        case 'SELECT_INSTALL_TYPE':
            if (null == e$) return { body: (0, i.jsx)(E.$, { className: eo.spinner }) };
            (g = (0, i.jsx)($.Z, {
                application: e$,
                onSelect: to,
                onClose: eN
            })),
                (td = !1),
                (tf = !1),
                (t_ = !1),
                (tp = !0);
            break;
        case 'AUTHORIZE_SCOPES':
            if (null == ex || null == ez || null == eQ) return { body: (0, i.jsx)(E.$, { className: eo.spinner }) };
            let th = null == eM || eM instanceof Error ? {} : eM,
                tm = null == eF ? void 0 : eF.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tg = eQ === u.Y.GUILD_INSTALL && e2.includes(c.x.WEBHOOK_INCOMING),
                tE = tg || (eQ === u.Y.GUILD_INSTALL && (e2.includes(c.x.BOT) || e2.includes(c.x.APPLICATIONS_COMMANDS)));
            (g = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(z.Z, { accountScopes: e3 }),
                    (0, i.jsx)(q.Z, {
                        application: ex.application,
                        accountScopes: e3,
                        requestedScopes: e2,
                        integrationType: eQ,
                        errors: th,
                        isTrustedName: eb
                    }),
                    (0, i.jsx)('div', {
                        className: eo.intObserver,
                        ref: ts
                    }),
                    tE
                        ? (0, i.jsx)(X.Z, {
                              error: (null !== (n = null !== (t = th[c.x.BOT]) && void 0 !== t ? t : th[c.x.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
                              selectedGuildId: eV,
                              onGuildChange: ej,
                              guilds: null != tm ? tm : [],
                              disabled: '' !== eV && null != eV && !0 === ev
                          })
                        : null,
                    tg
                        ? (0, i.jsx)(en.Z, {
                              error: (null !== (a = th[c.x.WEBHOOK_INCOMING]) && void 0 !== a ? a : [])[0],
                              selectedChannelId: eH,
                              selectedGuildId: eV,
                              onChannelChange: eY
                          })
                        : null
                ]
            })),
                e2.includes(c.x.BOT) && !f.fS(e4, B.Hn) && (N = 'AUTHORIZE_BOT_PERMISSIONS'),
                ti.length > 1 && (A = 'SELECT_INSTALL_TYPE'),
                (tc = (tE && null == eq) || (tg && null == eH)),
                (tu = !0);
            break;
        case 'AUTHORIZE_BOT_PERMISSIONS':
            if (null == ex) return { body: (0, i.jsx)(E.$, { className: eo.spinner }) };
            (g = (0, i.jsx)(Q.Z, {
                application: ex.application,
                permissions: e4,
                deniedPermissions: eW,
                onPermissionsChange: tl,
                guild: eq
            })),
                (A = 'AUTHORIZE_SCOPES'),
                (tu = !0);
    }
    if (td && null != ex) {
        let e = null === (l = ex.bot) || void 0 === l ? void 0 : l.approximate_guild_count;
        O = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(K.Z, {
                    application: ex.application,
                    scopes: e2,
                    disclosures: e5,
                    redirectUri: null !== (m = ex.redirect_uri) && void 0 !== m ? m : null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: eT
                }),
                (0, i.jsx)('div', {
                    className: eo.intObserver,
                    ref: ts
                })
            ]
        });
    }
    return (
        tf &&
            null != ex &&
            null != ez &&
            (D = (0, i.jsx)(J.Z, {
                id: el,
                user: ez,
                application: ex.application,
                bot: ex.bot,
                accountScopes: e3,
                showLogout: ey || !1,
                location: eO
            })),
        t_ &&
            (L = (0, i.jsxs)('div', {
                className: s()(eo.footer),
                children: [
                    null != A
                        ? (0, i.jsx)(h.zx, {
                              look: h.zx.Looks.LINK,
                              color: h.zx.Colors.PRIMARY,
                              onClick: () => ew(A),
                              children: es.intl.string(es.t['13/7kZ'])
                          })
                        : (0, i.jsx)(h.zx, {
                              look: h.zx.Looks.LINK,
                              color: h.zx.Colors.PRIMARY,
                              onClick: () => te(!1),
                              children: es.intl.string(es.t['ETE/oK'])
                          }),
                    'SELECT_INSTALL_TYPE' !== eP
                        ? eB
                            ? (0, i.jsx)('div', {
                                  className: eo.action,
                                  children: (0, i.jsx)(h.zx, {
                                      onClick: null != N ? () => ew(N) : () => te(!0),
                                      submitting: eU,
                                      disabled: null == O || tc,
                                      children: tc ? es.intl.string(es.t.BwwiSE) : null != N ? es.intl.string(es.t['3PatS0']) : es.intl.string(es.t['y+/PEx'])
                                  })
                              })
                            : (0, i.jsx)('div', {
                                  className: eo.action,
                                  children: (0, i.jsx)(v.ua7, {
                                      text: es.intl.string(es.t['7UiwCw']),
                                      children: (e) =>
                                          (0, i.jsx)('div', {
                                              ...e,
                                              className: eo.tooltip,
                                              children: (0, i.jsxs)(h.zx, {
                                                  disabled: !0,
                                                  submitting: eU,
                                                  innerClassName: eo.buttonWithEmoji,
                                                  children: [
                                                      es.intl.string(es.t.N22i9P),
                                                      ' ',
                                                      (0, i.jsx)(b.Z, {
                                                          className: eo.emoji,
                                                          src: G.ZP.getURL(p.Z.convert.fromCodePoint(ei.I)),
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
            header: D,
            body: g,
            footer: L,
            nextStep: N,
            appDetails: O,
            sendAuthorize: te,
            hasContentBackground: tu,
            minimalPadding: tp
        }
    );
}
function ef(e, t) {
    var n, r;
    if (null == t.location || (null != e && e(t))) return;
    let { host: a, pathname: s, searchParams: o } = null !== (n = Z.Z.toURLSafe(t.location)) && void 0 !== n ? n : {},
        l = Z.Z.isDiscordHostname(null != a ? a : null) || window.location.host === a;
    if (l && s === er.Z5c.OAUTH2_AUTHORIZED) {
        let e = N._f.getCurrentConfig({ location: 'inAppOAuth2ModalCallback' }, { autoTrackExposure: !1 }),
            n = window.location.pathname.startsWith(er.ANM.CHANNELS);
        e.enabled && null != t.application && null == t.guild && n
            ? U.S.safeDispatch(er.CkL.SHOW_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { application: t.application })
            : (0, m.h7)((e) => {
                  let n = (0, i.jsx)(et._Z, {
                      guild: t.guild,
                      application: t.application,
                      onClose: e.onClose
                  });
                  return (0, i.jsx)(ee.j, {
                      ...e,
                      'aria-labelledby': el,
                      footer: n,
                      children: (0, i.jsx)(et.Jh, {
                          guild: t.guild,
                          application: t.application,
                          onClose: e.onClose
                      })
                  });
              });
    } else
        l && (null == s ? void 0 : s.startsWith(er.Z5c.OAUTH2_ERROR))
            ? (0, m.h7)((e) => {
                  var t, n;
                  let r = null !== (n = null !== (t = null == o ? void 0 : o.get('error_description')) && void 0 !== t ? t : null == o ? void 0 : o.get('error')) && void 0 !== n ? n : es.intl.string(es.t['mqn87+']);
                  return (
                      Array.isArray(r) && (r = r[0]),
                      (0, i.jsx)(ee.j, {
                          ...e,
                          'aria-labelledby': el,
                          children: (0, i.jsx)(et.Lk, {
                              message: r,
                              onClose: e.onClose
                          })
                      })
                  );
              })
            : null === (r = window.open(t.location, '_blank')) || void 0 === r || r.focus();
}
function e_(e, t) {
    if ((0, L.g)('create-guild-and-oauth2-modal')) {
        D.Z.openCreateGuildModal({
            onSuccess: (n) =>
                ep(
                    {
                        ...e,
                        guildId: n
                    },
                    t
                )
        });
        return;
    }
    ep(e, t);
}
function ep(e, t) {
    (0, m.h7)(
        (t) =>
            (0, i.jsx)(ec, {
                ...t,
                ...e,
                cancelCompletesFlow: !1,
                callback: ef.bind(null, e.callback)
            }),
        { onCloseCallback: t }
    );
}
function eh(e) {
    var t;
    let { hostname: n = '', host: i, pathname: r, search: a } = null !== (t = Z.Z.toURLSafe(e)) && void 0 !== t ? t : {};
    return null != r && null != a && (Z.Z.isDiscordHostname(n) || i === window.location.host) && (r.startsWith('/api'.concat(er.ANM.OAUTH2_AUTHORIZE)) || r.startsWith(er.Z5c.OAUTH2_AUTHORIZE)) ? (0, F.y)(a) : null;
}

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
            showLogout: !0,
            isExternalStandaloneOAuthPage: !0
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
        { clientId: U, responseType: ee, redirectUri: ea, codeChallenge: eu, codeChallengeMethod: ec, state: ed, nonce: ef, prompt: e_, authorizations: ep, scopes: eh, permissions: em, guildId: eg, channelId: eE, integrationType: ev, disableGuildSelect: ey = !1, showLogout: eI = !1, cancelCompletesFlow: eb = !0, isTrustedName: eT = !1, isEmbeddedFlow: eS = !1, callback: eA, callbackWithoutPost: eN, onClose: eC, disclosures: eR, isExternalStandaloneOAuthPage: eO = !1 } = e,
        eD = null != ev ? (null == ep ? void 0 : ep.get(ev)) : void 0,
        ex = (0, o.TH)(),
        eL = (0, _.e7)([x.Z], () => x.Z.hasLoadedExperiments);
    r.useEffect(() => {
        k.default.isAuthenticated() && !eL && y.Z.getExperiments();
    }, [eL]);
    let [eP, ew] = r.useState(null),
        [eM, ek] = r.useState(null),
        [eU, eG] = r.useState(null),
        [eB, eZ] = r.useState(!1),
        [eF, eV] = r.useState(!1),
        ej = null == eP ? void 0 : eP.guilds,
        [eH, eY] = r.useState(null != eg ? eg : null),
        [eW, eK] = r.useState(null != eE ? eE : null),
        [ez, eq] = r.useState(B.Hn),
        eQ = r.useMemo(() => ((null == eP ? void 0 : eP.user) != null ? new M.Z(eP.user) : null), [null == eP ? void 0 : eP.user]),
        eX = r.useMemo(() => (null == ej ? void 0 : ej.find((e) => e.id === eH)), [ej, eH]),
        [eJ, e$] = r.useState(null),
        e0 = r.useMemo(() => {
            var e;
            return null == eD && null == ev && (null !== (e = null == eh ? void 0 : eh.length) && void 0 !== e ? e : 0) === 0 && null == ea;
        }, [eD, null == eh ? void 0 : eh.length, ea, ev]),
        [e1, e2] = r.useState(null);
    r.useEffect(() => {
        e0 && C.ZP.fetchApplication(U).then((e) => e2(w.ZP.createFromServer(e)));
    }, [U, e0]);
    let e3 = r.useMemo(() => {
            var e, t;
            return null == eJ ? null : null == e1 ? void 0 : null === (t = e1.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[eJ]) || void 0 === e ? void 0 : e.oauth2InstallParams;
        }, [null == e1 ? void 0 : e1.integrationTypesConfig, eJ]),
        { requestedScopes: e4, accountScopes: e6 } = r.useMemo(() => {
            let e = e0 ? (null == e3 ? void 0 : e3.scopes) : eh,
                t = (0, F.K)(null != e ? e : []),
                n = Y.Qe.filter((e) => t.includes(e));
            return {
                requestedScopes: t,
                accountScopes: n
            };
        }, [null == e3 ? void 0 : e3.scopes, eh, e0]),
        e5 = r.useMemo(() => {
            var e;
            let t = e0 ? f.vB(null !== (e = null == e3 ? void 0 : e3.permissions) && void 0 !== e ? e : 0) : em;
            return null != t ? t : B.Hn;
        }, [null == e3 ? void 0 : e3.permissions, em, e0]),
        e7 = r.useRef(!1),
        [e8, e9] = r.useState(null != eR ? eR : []),
        [te, tt] = r.useState(null != eR && eR.length > 0);
    r.useEffect(() => {
        if (e7.current) return;
        let e = async () => {
            e7.current = !0;
            try {
                let { disclosures: e, allAcked: t } = await (0, R.de)(U);
                tt(!t), e9(e);
            } catch (n) {
                let { status: e, body: t } = n;
                if (401 === e) {
                    (0, V.c$)(ex);
                    return;
                }
                eG(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
            } finally {
                e7.current = !1;
            }
        };
        if (null == eR) {
            if (!k.default.isAuthenticated()) {
                (0, V.c$)(ex);
                return;
            }
            e();
        }
    }, [U, ex, eR, e9, eG, tt, ek]);
    let tn = r.useCallback(
            async (e) => {
                if (null != eN) {
                    eZ(!0), eN(e);
                    return;
                }
                if (!e && !eb) {
                    null != eA &&
                        (eA({
                            application: null == eP ? void 0 : eP.application,
                            guild: eX
                        }),
                        null == eC || eC());
                    return;
                }
                if (null == eJ) {
                    eG(Error('No integration type was selected.'));
                    return;
                }
                try {
                    eZ(!0);
                    let n = await (0, V.Iq)({
                        authorize: e,
                        clientId: U,
                        scopes: e4,
                        responseType: ee,
                        redirectUri: ea,
                        codeChallenge: eu,
                        codeChallengeMethod: ec,
                        state: ed,
                        nonce: ef,
                        integrationType: eJ,
                        permissions: f.Od(e5, ez),
                        guildId: eJ === u.Y.GUILD_INSTALL && null != eH ? eH : void 0,
                        channelId: eJ === u.Y.GUILD_INSTALL && null != eW ? eW : void 0
                    });
                    if (
                        (e &&
                            (await (0, R.x9)(U, e8),
                            setTimeout(() => {
                                I.Z.fetch();
                            }, 100)),
                        null != eA)
                    )
                        eA({
                            application: null == eP ? void 0 : eP.application,
                            location: n.location,
                            guild: eX
                        }),
                            null == eC || eC();
                    else if (null != n.location) {
                        var t;
                        let e = null === (t = Z.Z.toURLSafe(n.location)) || void 0 === t ? void 0 : t.pathname;
                        Z.Z.isDiscordUrl(n.location) && e === er.Z5c.OAUTH2_AUTHORIZED
                            ? (0, P.uL)(er.Z5c.OAUTH2_AUTHORIZED, {
                                  state: {
                                      application: null == eP ? void 0 : eP.application,
                                      guild: eX
                                  }
                              })
                            : (window.location = n.location);
                    } else eZ(!1);
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && '' !== e.message ? eG(Error(e.message)) : eG(e), ek('AUTHORIZE_SCOPES'), eZ(!1);
                }
            },
            [eN, eb, eA, null == eP ? void 0 : eP.application, eX, eC, U, e4, ee, ea, eu, ec, ed, ef, e5, ez, eH, eJ, eW, e8]
        ),
        ti = r.useRef(!1),
        tr = r.useCallback(async () => {
            if (!k.default.isAuthenticated()) {
                (0, V.c$)(ex);
                return;
            }
            if (!e7.current && !ti.current) {
                ti.current = !0;
                try {
                    let e =
                        null != eD
                            ? eD
                            : await (0, V.Ww)({
                                  clientId: U,
                                  scopes: e4,
                                  responseType: ee,
                                  redirectUri: ea,
                                  codeChallenge: eu,
                                  codeChallengeMethod: ec,
                                  state: ed,
                                  nonce: ef,
                                  integrationType: null != eJ ? eJ : void 0
                              });
                    ew((0, j.d)(e)), e_ === W.s.NONE && e.authorized && !te && tn(!0), (0, S.yw)(er.rMx.OAUTH2_AUTHORIZE_VIEWED, { application_id: e.application.id });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) {
                        (0, V.c$)(ex);
                        return;
                    }
                    eG(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
                } finally {
                    ti.current = !1;
                }
            }
        }, [ex, eD, U, e4, ee, ea, eu, ec, ed, ef, eJ, e_, tn, te]),
        ta = r.useMemo(() => {
            var e;
            return null != e1 && e0
                ? Object.entries(null !== (e = e1.integrationTypesConfig) && void 0 !== e ? e : {})
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
        ts = r.useRef(null);
    r.useEffect(() => {
        eM !== ts.current &&
            ((ts.current = eM),
            (0, S.yw)(er.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eM,
                application_id: U,
                integration_type: eJ,
                scopes: e4,
                permissions: e5.toString()
            }));
    }, [U, eJ, e5, e4, eM]),
        r.useEffect(() => {
            if (null == eM && (!e0 || null != e1) && eL) {
                if (null != eD) {
                    var e;
                    e$(null !== (e = eD.integration_type) && void 0 !== e ? e : u.Y.GUILD_INSTALL), ek('AUTHORIZE_SCOPES');
                } else ta.length > 1 ? ek('SELECT_INSTALL_TYPE') : (1 === ta.length ? e$(ta[0]) : null != ev ? e$(ev) : e$(u.Y.GUILD_INSTALL), ek('AUTHORIZE_SCOPES'));
            }
        }, [eD, ta, e1, e0, ev, eM, eL]),
        r.useEffect(() => {
            if (null == eJ || null != eP || null != eU) return;
            eJ === u.Y.USER_INSTALL && (eY(null), eK(null));
            let e = e4.filter((e) => !Y.ak.includes(e));
            0 === e4.length ? eG(Error('No scopes were provided.')) : e.length > 0 ? eG(Error('Invalid scope: '.concat(e[0]))) : (0, H._$)(e5) ? eG(Error('Invalid permission(s) provided.')) : tr();
        }, [te, tr, e4, e5, eJ, eP, eU]);
    let to = r.useCallback((e) => {
            e && eV(!0);
        }, []),
        tl = (0, T.O)(to);
    if (eU instanceof Error)
        return eO
            ? { body: (0, i.jsx)(et.Lk, { message: eU.message }) }
            : {
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
                              onClick: eC,
                              children: (0, i.jsx)(v.Dio, { size: 'md' })
                          })
                      ]
                  }),
                  body: (0, i.jsx)(v.hzk, {
                      scrollbarType: 'none',
                      children: (0, i.jsx)(v.Text, {
                          variant: 'text-md/normal',
                          color: 'header-secondary',
                          children: eU.message
                      })
                  }),
                  footer: (0, i.jsx)(v.mzw, {
                      children: (0, i.jsx)(h.zx, {
                          onClick: eC,
                          children: 'Close'
                      })
                  }),
                  minimalPadding: !0,
                  extraWide: !0,
                  modalSize: v.CgR.SMALL
              };
    let tu = (e) => {
            e$(e), ew(null), ek('AUTHORIZE_SCOPES');
        },
        tc = (e, t) => {
            eq((n) => (e ? f.Od(n, t) : f.IH(n, t)));
        },
        td = !1,
        tf = !1,
        t_ = !0,
        tp = !0,
        th = !0,
        tm = !1;
    switch (eM) {
        case null:
            return { body: (0, i.jsx)(E.$, { className: eo.spinner }) };
        case 'SELECT_INSTALL_TYPE':
            if (null == e1) return { body: (0, i.jsx)(E.$, { className: eo.spinner }) };
            (g = (0, i.jsx)($.Z, {
                application: e1,
                onSelect: tu,
                onClose: eC
            })),
                (t_ = !1),
                (tp = !1),
                (th = !1),
                (tm = !0);
            break;
        case 'AUTHORIZE_SCOPES':
            if (null == eP || null == eQ || null == eJ) return { body: (0, i.jsx)(E.$, { className: eo.spinner }) };
            let tg = null == eU || eU instanceof Error ? {} : eU,
                tE = null == ej ? void 0 : ej.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tv = eJ === u.Y.GUILD_INSTALL && e4.includes(c.x.WEBHOOK_INCOMING),
                ty = tv || (eJ === u.Y.GUILD_INSTALL && (e4.includes(c.x.BOT) || e4.includes(c.x.APPLICATIONS_COMMANDS)));
            (g = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(z.Z, { accountScopes: e6 }),
                    (0, i.jsx)(q.Z, {
                        application: eP.application,
                        accountScopes: e6,
                        requestedScopes: e4,
                        integrationType: eJ,
                        errors: tg,
                        isTrustedName: eT
                    }),
                    (0, i.jsx)('div', {
                        className: eo.intObserver,
                        ref: tl
                    }),
                    ty
                        ? (0, i.jsx)(X.Z, {
                              error: (null !== (n = null !== (t = tg[c.x.BOT]) && void 0 !== t ? t : tg[c.x.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
                              selectedGuildId: eH,
                              onGuildChange: eY,
                              guilds: null != tE ? tE : [],
                              disabled: '' !== eH && null != eH && !0 === ey
                          })
                        : null,
                    tv
                        ? (0, i.jsx)(en.Z, {
                              error: (null !== (a = tg[c.x.WEBHOOK_INCOMING]) && void 0 !== a ? a : [])[0],
                              selectedChannelId: eW,
                              selectedGuildId: eH,
                              onChannelChange: eK
                          })
                        : null
                ]
            })),
                e4.includes(c.x.BOT) && !f.fS(e5, B.Hn) && (N = 'AUTHORIZE_BOT_PERMISSIONS'),
                ta.length > 1 && (A = 'SELECT_INSTALL_TYPE'),
                (tf = (ty && null == eX) || (tv && null == eW)),
                (td = !0);
            break;
        case 'AUTHORIZE_BOT_PERMISSIONS':
            if (null == eP) return { body: (0, i.jsx)(E.$, { className: eo.spinner }) };
            (g = (0, i.jsx)(Q.Z, {
                application: eP.application,
                permissions: e5,
                deniedPermissions: ez,
                onPermissionsChange: tc,
                guild: eX
            })),
                (A = 'AUTHORIZE_SCOPES'),
                (td = !0);
    }
    if (t_ && null != eP) {
        let e = null === (l = eP.bot) || void 0 === l ? void 0 : l.approximate_guild_count;
        O = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(K.Z, {
                    application: eP.application,
                    scopes: e4,
                    disclosures: e8,
                    redirectUri: null !== (m = eP.redirect_uri) && void 0 !== m ? m : null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: eS
                }),
                (0, i.jsx)('div', {
                    className: eo.intObserver,
                    ref: tl
                })
            ]
        });
    }
    return (
        tp &&
            null != eP &&
            null != eQ &&
            (D = (0, i.jsx)(J.Z, {
                id: el,
                user: eQ,
                application: eP.application,
                bot: eP.bot,
                accountScopes: e6,
                showLogout: eI || !1,
                location: ex
            })),
        th &&
            (L = (0, i.jsxs)('div', {
                className: s()(eo.footer),
                children: [
                    null != A
                        ? (0, i.jsx)(h.zx, {
                              look: h.zx.Looks.LINK,
                              color: h.zx.Colors.PRIMARY,
                              onClick: () => ek(A),
                              children: es.intl.string(es.t['13/7kZ'])
                          })
                        : (0, i.jsx)(h.zx, {
                              look: h.zx.Looks.LINK,
                              color: h.zx.Colors.PRIMARY,
                              onClick: () => tn(!1),
                              children: es.intl.string(es.t['ETE/oK'])
                          }),
                    'SELECT_INSTALL_TYPE' !== eM
                        ? eF
                            ? (0, i.jsx)('div', {
                                  className: eo.action,
                                  children: (0, i.jsx)(h.zx, {
                                      onClick: null != N ? () => ek(N) : () => tn(!0),
                                      submitting: eB,
                                      disabled: null == O || tf,
                                      children: tf ? es.intl.string(es.t.BwwiSE) : null != N ? es.intl.string(es.t['3PatS0']) : es.intl.string(es.t['y+/PEx'])
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
                                                  submitting: eB,
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
            sendAuthorize: tn,
            hasContentBackground: td,
            minimalPadding: tm
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

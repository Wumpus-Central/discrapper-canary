n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: () => ed,
        OAuth2AuthorizePage: () => ec,
        getOAuth2AuthorizeProps: () => em,
        openOAuth2Modal: () => eh,
        openOAuth2ModalWithCreateGuildModal: () => ep,
        useOAuth2AuthorizeForm: () => ef
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
    Z = n(358085),
    F = n(591759),
    V = n(807675),
    j = n(489863),
    H = n(228763),
    Y = n(422559),
    W = n(713938),
    K = n(166148),
    z = n(807989),
    q = n(627799),
    Q = n(260430),
    X = n(668185),
    J = n(407546),
    $ = n(41259),
    ee = n(28752),
    et = n(787025),
    en = n(397394),
    ei = n(574384),
    er = n(960662),
    ea = n(981631),
    es = n(186901),
    eo = n(388032),
    el = n(961653);
let eu = 'oauth2-authorize-header-id';
function ec() {
    let e = (0, o.TH)(),
        t = r.useMemo(() => (0, V.y)(e.search), [e.search]);
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
                            n.request(ea.Etm.DEEP_LINK, {
                                type: es.jE.OAUTH2,
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
                              (0, i.jsx)(O.Dx, { children: eo.intl.string(eo.t.csrAMD) }),
                              (0, i.jsx)(O.DK, { children: eo.intl.string(eo.t['m1+IBg']) }),
                              (0, i.jsx)(h.zx, {
                                  onClick: () => u(!0),
                                  color: h.zx.Colors.BRAND,
                                  children: eo.intl.string(eo.t.fIv16O)
                              })
                          ]
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [(0, i.jsx)(O.Dx, { children: eo.intl.string(eo.t['Z+hCVV']) }), (0, i.jsx)(E.$, {})]
                      })),
            (0, i.jsx)(et.G, {
                removeChildWrapper: !0,
                children: (0, i.jsx)('div', {
                    className: el.deepLinkContainer,
                    children: e
                })
            })
        );
    }
    return (0, i.jsx)(et.G, {
        removeChildWrapper: !0,
        children: (0, i.jsx)(ed, {
            transitionState: v.Dvm.ENTERED,
            ...t,
            showLogout: !0
        })
    });
}
function ed(e) {
    let { transitionState: t, ...n } = e,
        { header: r, body: a, footer: o, nextStep: l, appDetails: u, hasContentBackground: c, minimalPadding: d, extraWide: f, modalSize: _ } = ef({ ...n }),
        p = (0, i.jsxs)(i.Fragment, {
            children: [
                r,
                (0, i.jsxs)('div', {
                    className: s()(el.content, c ? el.contentBackground : null, d ? el.minimalPadding : null, f ? el.extraWide : null),
                    children: [a, null == l ? u : null]
                })
            ]
        });
    return (0, i.jsx)(et.j, {
        transitionState: t,
        'aria-labelledby': eu,
        footer: o,
        modalSize: _,
        children: (0, i.jsx)('div', {
            className: s()(el.authorize),
            children: (0, i.jsx)(g.zJ, {
                orientation: 'auto',
                children: p
            })
        })
    });
}
function ef(e) {
    var t, n, a, l, m;
    let g,
        A,
        N,
        O,
        D,
        L,
        { clientId: U, responseType: et, redirectUri: es, codeChallenge: ec, codeChallengeMethod: ed, state: ef, nonce: e_, prompt: ep, authorizations: eh, scopes: em, permissions: eg, guildId: eE, channelId: ev, integrationType: ey, disableGuildSelect: eI = !1, showLogout: eb = !1, cancelCompletesFlow: eT = !0, isTrustedName: eS = !1, isEmbeddedFlow: eA = !1, callback: eN, callbackWithoutPost: eC, onClose: eR, disclosures: eO } = e,
        eD = null != ey ? (null == eh ? void 0 : eh.get(ey)) : void 0,
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
        [eH, eY] = r.useState(null != eE ? eE : null),
        [eW, eK] = r.useState(null != ev ? ev : null),
        [ez, eq] = r.useState(B.Hn),
        eQ = r.useMemo(() => ((null == eP ? void 0 : eP.user) != null ? new M.Z(eP.user) : null), [null == eP ? void 0 : eP.user]),
        eX = r.useMemo(() => (null == ej ? void 0 : ej.find((e) => e.id === eH)), [ej, eH]),
        [eJ, e$] = r.useState(null),
        e0 = r.useMemo(() => {
            var e;
            return null == eD && null == ey && (null !== (e = null == em ? void 0 : em.length) && void 0 !== e ? e : 0) === 0 && null == es;
        }, [eD, null == em ? void 0 : em.length, es, ey]),
        [e1, e2] = r.useState(null);
    r.useEffect(() => {
        e0 && C.ZP.fetchApplication(U).then((e) => e2(w.ZP.createFromServer(e)));
    }, [U, e0]);
    let e3 = r.useMemo(() => {
            var e, t;
            return null == eJ ? null : null == e1 ? void 0 : null === (t = e1.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[eJ]) || void 0 === e ? void 0 : e.oauth2InstallParams;
        }, [null == e1 ? void 0 : e1.integrationTypesConfig, eJ]),
        { requestedScopes: e4, accountScopes: e6 } = r.useMemo(() => {
            let e = e0 ? (null == e3 ? void 0 : e3.scopes) : em,
                t = (0, V.K)(null != e ? e : []),
                n = W.Qe.filter((e) => t.includes(e));
            return {
                requestedScopes: t,
                accountScopes: n
            };
        }, [null == e3 ? void 0 : e3.scopes, em, e0]),
        e5 = r.useMemo(() => {
            var e;
            let t = e0 ? f.vB(null !== (e = null == e3 ? void 0 : e3.permissions) && void 0 !== e ? e : 0) : eg;
            return null != t ? t : B.Hn;
        }, [null == e3 ? void 0 : e3.permissions, eg, e0]),
        e7 = r.useRef(!1),
        [e8, e9] = r.useState(null != eO ? eO : []),
        [te, tt] = r.useState(null != eO && eO.length > 0);
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
                    (0, j.c$)(ex);
                    return;
                }
                eG(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
            } finally {
                e7.current = !1;
            }
        };
        if (null == eO) {
            if (!k.default.isAuthenticated()) {
                (0, j.c$)(ex);
                return;
            }
            e();
        }
    }, [U, ex, eO, e9, eG, tt, ek]);
    let tn = r.useCallback(
            async (e) => {
                if (null != eC) {
                    eZ(!0), eC(e);
                    return;
                }
                if (!e && !eT) {
                    null != eN &&
                        (eN({
                            application: null == eP ? void 0 : eP.application,
                            guild: eX
                        }),
                        null == eR || eR());
                    return;
                }
                if (null == eJ) {
                    eG(Error('No integration type was selected.'));
                    return;
                }
                try {
                    eZ(!0);
                    let n = await (0, j.Iq)({
                        authorize: e,
                        clientId: U,
                        scopes: e4,
                        responseType: et,
                        redirectUri: es,
                        codeChallenge: ec,
                        codeChallengeMethod: ed,
                        state: ef,
                        nonce: e_,
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
                        null != eN)
                    )
                        eN({
                            application: null == eP ? void 0 : eP.application,
                            location: n.location,
                            guild: eX
                        }),
                            null == eR || eR();
                    else if (null != n.location) {
                        var t;
                        let e = null === (t = F.Z.toURLSafe(n.location)) || void 0 === t ? void 0 : t.pathname;
                        F.Z.isDiscordUrl(n.location) && e === ea.Z5c.OAUTH2_AUTHORIZED
                            ? (0, P.uL)(ea.Z5c.OAUTH2_AUTHORIZED, {
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
            [eC, eT, eN, null == eP ? void 0 : eP.application, eX, eR, U, e4, et, es, ec, ed, ef, e_, e5, ez, eH, eJ, eW, e8]
        ),
        ti = r.useRef(!1),
        tr = r.useCallback(async () => {
            if (!k.default.isAuthenticated()) {
                (0, j.c$)(ex);
                return;
            }
            if (!e7.current && !ti.current) {
                ti.current = !0;
                try {
                    let e =
                        null != eD
                            ? eD
                            : await (0, j.Ww)({
                                  clientId: U,
                                  scopes: e4,
                                  responseType: et,
                                  redirectUri: es,
                                  codeChallenge: ec,
                                  codeChallengeMethod: ed,
                                  state: ef,
                                  nonce: e_,
                                  integrationType: null != eJ ? eJ : void 0
                              });
                    ew((0, H.d)(e)), ep === K.s.NONE && e.authorized && !te && tn(!0), (0, S.yw)(ea.rMx.OAUTH2_AUTHORIZE_VIEWED, { application_id: e.application.id });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) {
                        (0, j.c$)(ex);
                        return;
                    }
                    eG(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
                } finally {
                    ti.current = !1;
                }
            }
        }, [ex, eD, U, e4, et, es, ec, ed, ef, e_, eJ, ep, tn, te]),
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
            (0, S.yw)(ea.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
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
                } else ta.length > 1 ? ek('SELECT_INSTALL_TYPE') : (1 === ta.length ? e$(ta[0]) : null != ey ? e$(ey) : e$(u.Y.GUILD_INSTALL), ek('AUTHORIZE_SCOPES'));
            }
        }, [eD, ta, e1, e0, ey, eM, eL]),
        r.useEffect(() => {
            if (null == eJ || null != eP || null != eU) return;
            eJ === u.Y.USER_INSTALL && (eY(null), eK(null));
            let e = e4.filter((e) => !W.ak.includes(e));
            0 === e4.length ? eG(Error('No scopes were provided.')) : e.length > 0 ? eG(Error('Invalid scope: '.concat(e[0]))) : (0, Y._$)(e5) ? eG(Error('Invalid permission(s) provided.')) : tr();
        }, [te, tr, e4, e5, eJ, eP, eU]);
    let to = r.useCallback((e) => {
            e && eV(!0);
        }, []),
        tl = (0, T.O)(to);
    if (eU instanceof Error)
        return (0, Z.isWeb)()
            ? { body: (0, i.jsx)(en.Lk, { message: eU.message }) }
            : {
                  header: (0, i.jsxs)(v.xBx, {
                      className: el.errorHeader,
                      separator: !1,
                      justify: d.k.Justify.BETWEEN,
                      children: [
                          (0, i.jsx)(v.Text, {
                              variant: 'text-lg/bold',
                              color: 'header-primary',
                              children: 'Error'
                          }),
                          (0, i.jsx)(h.zx, {
                              'aria-label': eo.intl.string(eo.t.cpT0Cg),
                              look: h.zx.Looks.BLANK,
                              size: h.zx.Sizes.NONE,
                              onClick: eR,
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
                          onClick: eR,
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
            return { body: (0, i.jsx)(E.$, { className: el.spinner }) };
        case 'SELECT_INSTALL_TYPE':
            if (null == e1) return { body: (0, i.jsx)(E.$, { className: el.spinner }) };
            (g = (0, i.jsx)(ee.Z, {
                application: e1,
                onSelect: tu,
                onClose: eR
            })),
                (t_ = !1),
                (tp = !1),
                (th = !1),
                (tm = !0);
            break;
        case 'AUTHORIZE_SCOPES':
            if (null == eP || null == eQ || null == eJ) return { body: (0, i.jsx)(E.$, { className: el.spinner }) };
            let tg = null == eU || eU instanceof Error ? {} : eU,
                tE = null == ej ? void 0 : ej.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tv = eJ === u.Y.GUILD_INSTALL && e4.includes(c.x.WEBHOOK_INCOMING),
                ty = tv || (eJ === u.Y.GUILD_INSTALL && (e4.includes(c.x.BOT) || e4.includes(c.x.APPLICATIONS_COMMANDS)));
            (g = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(q.Z, { accountScopes: e6 }),
                    (0, i.jsx)(Q.Z, {
                        application: eP.application,
                        accountScopes: e6,
                        requestedScopes: e4,
                        integrationType: eJ,
                        errors: tg,
                        isTrustedName: eS
                    }),
                    (0, i.jsx)('div', {
                        className: el.intObserver,
                        ref: tl
                    }),
                    ty
                        ? (0, i.jsx)(J.Z, {
                              error: (null !== (n = null !== (t = tg[c.x.BOT]) && void 0 !== t ? t : tg[c.x.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
                              selectedGuildId: eH,
                              onGuildChange: eY,
                              guilds: null != tE ? tE : [],
                              disabled: '' !== eH && null != eH && !0 === eI
                          })
                        : null,
                    tv
                        ? (0, i.jsx)(ei.Z, {
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
            if (null == eP) return { body: (0, i.jsx)(E.$, { className: el.spinner }) };
            (g = (0, i.jsx)(X.Z, {
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
                (0, i.jsx)(z.Z, {
                    application: eP.application,
                    scopes: e4,
                    disclosures: e8,
                    redirectUri: null !== (m = eP.redirect_uri) && void 0 !== m ? m : null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: eA
                }),
                (0, i.jsx)('div', {
                    className: el.intObserver,
                    ref: tl
                })
            ]
        });
    }
    return (
        tp &&
            null != eP &&
            null != eQ &&
            (D = (0, i.jsx)($.Z, {
                id: eu,
                user: eQ,
                application: eP.application,
                bot: eP.bot,
                accountScopes: e6,
                showLogout: eb || !1,
                location: ex
            })),
        th &&
            (L = (0, i.jsxs)('div', {
                className: s()(el.footer),
                children: [
                    null != A
                        ? (0, i.jsx)(h.zx, {
                              look: h.zx.Looks.LINK,
                              color: h.zx.Colors.PRIMARY,
                              onClick: () => ek(A),
                              children: eo.intl.string(eo.t['13/7kZ'])
                          })
                        : (0, i.jsx)(h.zx, {
                              look: h.zx.Looks.LINK,
                              color: h.zx.Colors.PRIMARY,
                              onClick: () => tn(!1),
                              children: eo.intl.string(eo.t['ETE/oK'])
                          }),
                    'SELECT_INSTALL_TYPE' !== eM
                        ? eF
                            ? (0, i.jsx)('div', {
                                  className: el.action,
                                  children: (0, i.jsx)(h.zx, {
                                      onClick: null != N ? () => ek(N) : () => tn(!0),
                                      submitting: eB,
                                      disabled: null == O || tf,
                                      children: tf ? eo.intl.string(eo.t.BwwiSE) : null != N ? eo.intl.string(eo.t['3PatS0']) : eo.intl.string(eo.t['y+/PEx'])
                                  })
                              })
                            : (0, i.jsx)('div', {
                                  className: el.action,
                                  children: (0, i.jsx)(v.ua7, {
                                      text: eo.intl.string(eo.t['7UiwCw']),
                                      children: (e) =>
                                          (0, i.jsx)('div', {
                                              ...e,
                                              className: el.tooltip,
                                              children: (0, i.jsxs)(h.zx, {
                                                  disabled: !0,
                                                  submitting: eB,
                                                  innerClassName: el.buttonWithEmoji,
                                                  children: [
                                                      eo.intl.string(eo.t.N22i9P),
                                                      ' ',
                                                      (0, i.jsx)(b.Z, {
                                                          className: el.emoji,
                                                          src: G.ZP.getURL(p.Z.convert.fromCodePoint(er.I)),
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
function e_(e, t) {
    var n, r;
    if (null == t.location || (null != e && e(t))) return;
    let { host: a, pathname: s, searchParams: o } = null !== (n = F.Z.toURLSafe(t.location)) && void 0 !== n ? n : {},
        l = F.Z.isDiscordHostname(null != a ? a : null) || window.location.host === a;
    if (l && s === ea.Z5c.OAUTH2_AUTHORIZED) {
        let e = N._f.getCurrentConfig({ location: 'inAppOAuth2ModalCallback' }, { autoTrackExposure: !1 }),
            n = window.location.pathname.startsWith(ea.ANM.CHANNELS);
        e.enabled && null != t.application && null == t.guild && n
            ? U.S.safeDispatch(ea.CkL.SHOW_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { application: t.application })
            : (0, m.h7)((e) => {
                  let n = (0, i.jsx)(en._Z, {
                      guild: t.guild,
                      application: t.application,
                      onClose: e.onClose
                  });
                  return (0, i.jsx)(et.j, {
                      ...e,
                      'aria-labelledby': eu,
                      footer: n,
                      children: (0, i.jsx)(en.Jh, {
                          guild: t.guild,
                          application: t.application,
                          onClose: e.onClose
                      })
                  });
              });
    } else
        l && (null == s ? void 0 : s.startsWith(ea.Z5c.OAUTH2_ERROR))
            ? (0, m.h7)((e) => {
                  var t, n;
                  let r = null !== (n = null !== (t = null == o ? void 0 : o.get('error_description')) && void 0 !== t ? t : null == o ? void 0 : o.get('error')) && void 0 !== n ? n : eo.intl.string(eo.t['mqn87+']);
                  return (
                      Array.isArray(r) && (r = r[0]),
                      (0, i.jsx)(et.j, {
                          ...e,
                          'aria-labelledby': eu,
                          children: (0, i.jsx)(en.Lk, {
                              message: r,
                              onClose: e.onClose
                          })
                      })
                  );
              })
            : null === (r = window.open(t.location, '_blank')) || void 0 === r || r.focus();
}
function ep(e, t) {
    if ((0, L.g)('create-guild-and-oauth2-modal')) {
        D.Z.openCreateGuildModal({
            onSuccess: (n) =>
                eh(
                    {
                        ...e,
                        guildId: n
                    },
                    t
                )
        });
        return;
    }
    eh(e, t);
}
function eh(e, t) {
    (0, m.h7)(
        (t) =>
            (0, i.jsx)(ed, {
                ...t,
                ...e,
                cancelCompletesFlow: !1,
                callback: e_.bind(null, e.callback)
            }),
        { onCloseCallback: t }
    );
}
function em(e) {
    var t;
    let { hostname: n = '', host: i, pathname: r, search: a } = null !== (t = F.Z.toURLSafe(e)) && void 0 !== t ? t : {};
    return null != r && null != a && (F.Z.isDiscordHostname(n) || i === window.location.host) && (r.startsWith('/api'.concat(ea.ANM.OAUTH2_AUTHORIZE)) || r.startsWith(ea.Z5c.OAUTH2_AUTHORIZE)) ? (0, V.y)(a) : null;
}

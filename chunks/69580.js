n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: () => em,
        OAuth2AuthorizePage: () => eh,
        getOAuth2AuthorizeProps: () => ey,
        openOAuth2Modal: () => eb,
        openOAuth2ModalWithCreateGuildModal: () => ev,
        useOAuth2AuthorizeForm: () => eg
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
    p = n(442837),
    _ = n(336317),
    h = n(693789),
    m = n(952265),
    g = n(21340),
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
    w = n(353926),
    D = n(341298),
    x = n(703656),
    L = n(973616),
    M = n(598077),
    k = n(314897),
    j = n(585483),
    U = n(176354),
    G = n(700785),
    B = n(591759),
    Z = n(807675),
    F = n(489863),
    V = n(228763),
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
    es = n(478454);
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
        i = ep(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function ep(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let e_ = 'oauth2-authorize-header-id';
function eh() {
    let e = (0, s.TH)(),
        t = i.useMemo(() => (0, Z.y)(e.search), [e.search]);
    (0, T.Z)();
    let o = !e.search.includes('response_type'),
        [a, c] = i.useState(!1),
        u = i.useRef(!1),
        [d, f] = i.useState(null),
        p = o && !l.tq && !a;
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
        p && !1 !== d)
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
            em,
            ed(ec({ transitionState: v.Dvm.ENTERED }, t), {
                showLogout: !0,
                isExternalStandaloneOAuthPage: !0
            })
        )
    });
}
function em(e) {
    var { transitionState: t } = e;
    let { header: n, body: i, footer: o, nextStep: s, appDetails: l, hasContentBackground: c, minimalPadding: u, extraWide: d, modalSize: f } = eg(ec({}, ef(e, ['transitionState']))),
        p = (0, r.jsxs)(r.Fragment, {
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
        'aria-labelledby': e_,
        footer: o,
        modalSize: f,
        children: (0, r.jsx)('div', {
            className: a()(es.authorize),
            children: (0, r.jsx)(g.zJ, {
                orientation: 'auto',
                children: p
            })
        })
    });
}
function eg(e) {
    var t, n, o, l, m;
    let g,
        T,
        N,
        R,
        P,
        D,
        { clientId: j, responseType: ee, redirectUri: eo, codeChallenge: el, codeChallengeMethod: eu, state: ef, nonce: ep, prompt: eh, authorizations: em, scopes: eg, permissions: eE, guildId: ev, channelId: eb, integrationType: ey, disableGuildSelect: eO = !1, showLogout: eS = !1, cancelCompletesFlow: eI = !0, isTrustedName: eT = !1, isEmbeddedFlow: eN = !1, callback: eA, callbackWithoutPost: eC, onClose: eR, disclosures: eP, isExternalStandaloneOAuthPage: ew = !1 } = e,
        eD = null != ey ? (null == em ? void 0 : em.get(ey)) : void 0,
        ex = (0, s.TH)(),
        eL = (0, p.e7)([w.Z], () => w.Z.hasLoadedExperiments);
    i.useEffect(() => {
        k.default.isAuthenticated() && !eL && b.Z.getExperiments();
    }, [eL]);
    let [eM, ek] = i.useState(null),
        [ej, eU] = i.useState(null),
        [eG, eB] = i.useState(null),
        [eZ, eF] = i.useState(!1),
        [eV, eH] = i.useState(!1),
        eW = null == eM ? void 0 : eM.guilds,
        [eY, eK] = i.useState(null != ev ? ev : null),
        [ez, eq] = i.useState(null != eb ? eb : null),
        [eQ, eX] = i.useState(G.Hn),
        eJ = i.useMemo(() => ((null == eM ? void 0 : eM.user) != null ? new M.Z(eM.user) : null), [null == eM ? void 0 : eM.user]),
        e$ = i.useMemo(() => (null == eW ? void 0 : eW.find((e) => e.id === eY)), [eW, eY]),
        [e0, e1] = i.useState(null),
        e2 = i.useMemo(() => {
            var e;
            return null == eD && null == ey && (null !== (e = null == eg ? void 0 : eg.length) && void 0 !== e ? e : 0) === 0 && null == eo;
        }, [eD, null == eg ? void 0 : eg.length, eo, ey]),
        [e3, e4] = i.useState(null);
    i.useEffect(() => {
        e2 && A.ZP.fetchApplication(j).then((e) => e4(L.ZP.createFromServer(e)));
    }, [j, e2]);
    let e6 = i.useMemo(() => {
            var e, t;
            return null == e0 ? null : null == e3 ? void 0 : null === (t = e3.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[e0]) || void 0 === e ? void 0 : e.oauth2InstallParams;
        }, [null == e3 ? void 0 : e3.integrationTypesConfig, e0]),
        { requestedScopes: e5, accountScopes: e7 } = i.useMemo(() => {
            let e = e2 ? (null == e6 ? void 0 : e6.scopes) : eg,
                t = (0, Z.K)(null != e ? e : []),
                n = W.Qe.filter((e) => t.includes(e));
            return {
                requestedScopes: t,
                accountScopes: n
            };
        }, [null == e6 ? void 0 : e6.scopes, eg, e2]),
        e8 = i.useMemo(() => {
            var e;
            let t = e2 ? f.vB(null !== (e = null == e6 ? void 0 : e6.permissions) && void 0 !== e ? e : 0) : eE;
            return null != t ? t : G.Hn;
        }, [null == e6 ? void 0 : e6.permissions, eE, e2]),
        e9 = i.useRef(!1),
        [te, tt] = i.useState(null != eP ? eP : []),
        [tn, tr] = i.useState(null != eP && eP.length > 0);
    i.useEffect(() => {
        if (e9.current) return;
        let e = async () => {
            e9.current = !0;
            try {
                let { disclosures: e, allAcked: t } = await (0, C.de)(j);
                tr(!t), tt(e);
            } catch (n) {
                let { status: e, body: t } = n;
                if (401 === e) {
                    (0, F.c$)(ex);
                    return;
                }
                eB(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
            } finally {
                e9.current = !1;
            }
        };
        if (null == eP) {
            if (!k.default.isAuthenticated()) {
                (0, F.c$)(ex);
                return;
            }
            e();
        }
    }, [j, ex, eP, tt, eB, tr, eU]);
    let ti = i.useCallback(
            async (e) => {
                if (null != eC) {
                    eF(!0), eC(e);
                    return;
                }
                if (!e && !eI) {
                    null != eA &&
                        (eA({
                            application: null == eM ? void 0 : eM.application,
                            guild: e$
                        }),
                        null == eR || eR());
                    return;
                }
                if (null == e0) {
                    eB(Error('No integration type was selected.'));
                    return;
                }
                try {
                    eF(!0);
                    let n = await (0, F.Iq)({
                        authorize: e,
                        clientId: j,
                        scopes: e5,
                        responseType: ee,
                        redirectUri: eo,
                        codeChallenge: el,
                        codeChallengeMethod: eu,
                        state: ef,
                        nonce: ep,
                        integrationType: e0,
                        permissions: f.Od(e8, eQ),
                        guildId: e0 === c.Y.GUILD_INSTALL && null != eY ? eY : void 0,
                        channelId: e0 === c.Y.GUILD_INSTALL && null != ez ? ez : void 0
                    });
                    if (
                        (e &&
                            (await (0, C.x9)(j, te),
                            setTimeout(() => {
                                y.Z.fetch();
                            }, 100)),
                        null != eA)
                    )
                        eA({
                            application: null == eM ? void 0 : eM.application,
                            location: n.location,
                            guild: e$
                        }),
                            null == eR || eR();
                    else if (null != n.location) {
                        var t;
                        let e = null === (t = B.Z.toURLSafe(n.location)) || void 0 === t ? void 0 : t.pathname;
                        B.Z.isDiscordUrl(n.location) && e === ei.Z5c.OAUTH2_AUTHORIZED
                            ? (0, x.uL)(ei.Z5c.OAUTH2_AUTHORIZED, {
                                  state: {
                                      application: null == eM ? void 0 : eM.application,
                                      guild: e$
                                  }
                              })
                            : (window.location = n.location);
                    } else eF(!1);
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && '' !== e.message ? eB(Error(e.message)) : eB(e), eU('AUTHORIZE_SCOPES'), eF(!1);
                }
            },
            [eC, eI, eA, null == eM ? void 0 : eM.application, e$, eR, j, e5, ee, eo, el, eu, ef, ep, e8, eQ, eY, e0, ez, te]
        ),
        to = i.useRef(!1),
        ta = i.useCallback(async () => {
            if (!k.default.isAuthenticated()) {
                (0, F.c$)(ex);
                return;
            }
            if (!e9.current && !to.current) {
                to.current = !0;
                try {
                    let e =
                        null != eD
                            ? eD
                            : await (0, F.Ww)({
                                  clientId: j,
                                  scopes: e5,
                                  responseType: ee,
                                  redirectUri: eo,
                                  codeChallenge: el,
                                  codeChallengeMethod: eu,
                                  state: ef,
                                  nonce: ep,
                                  integrationType: null != e0 ? e0 : void 0
                              });
                    ek((0, V.d)(e)), eh === Y.s.NONE && e.authorized && !tn && ti(!0), (0, I.yw)(ei.rMx.OAUTH2_AUTHORIZE_VIEWED, { application_id: e.application.id });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) {
                        (0, F.c$)(ex);
                        return;
                    }
                    eB(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
                } finally {
                    to.current = !1;
                }
            }
        }, [ex, eD, j, e5, ee, eo, el, eu, ef, ep, e0, eh, ti, tn]),
        ts = i.useMemo(() => {
            var e;
            return null != e3 && e2
                ? Object.entries(null !== (e = e3.integrationTypesConfig) && void 0 !== e ? e : {})
                      .filter((e) => {
                          let [t, n] = e;
                          return null != n.oauth2InstallParams;
                      })
                      .map((e) => {
                          let [t, n] = e;
                          return Number(t);
                      })
                : [];
        }, [e3, e2]),
        tl = i.useRef(null);
    i.useEffect(() => {
        ej !== tl.current &&
            ((tl.current = ej),
            (0, I.yw)(ei.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: ej,
                application_id: j,
                integration_type: e0,
                scopes: e5,
                permissions: e8.toString()
            }));
    }, [j, e0, e8, e5, ej]),
        i.useEffect(() => {
            if (null == ej && (!e2 || null != e3) && eL) {
                if (null != eD) {
                    var e;
                    e1(null !== (e = eD.integration_type) && void 0 !== e ? e : c.Y.GUILD_INSTALL), eU('AUTHORIZE_SCOPES');
                } else ts.length > 1 ? eU('SELECT_INSTALL_TYPE') : (1 === ts.length ? e1(ts[0]) : null != ey ? e1(ey) : e1(c.Y.GUILD_INSTALL), eU('AUTHORIZE_SCOPES'));
            }
        }, [eD, ts, e3, e2, ey, ej, eL]),
        i.useEffect(() => {
            if (null == e0 || null != eM || null != eG) return;
            e0 === c.Y.USER_INSTALL && (eK(null), eq(null));
            let e = e5.filter((e) => !W.ak.includes(e));
            0 === e5.length ? eB(Error('No scopes were provided.')) : e.length > 0 ? eB(Error('Invalid scope: '.concat(e[0]))) : (0, H._$)(e8) ? eB(Error('Invalid permission(s) provided.')) : ta();
        }, [tn, ta, e5, e8, e0, eM, eG]);
    let tc = i.useCallback((e) => {
            e && eH(!0);
        }, []),
        tu = (0, S.O)(tc);
    if (eG instanceof Error)
        return ew
            ? { body: (0, r.jsx)(et.Lk, { message: eG.message }) }
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
                              onClick: eR,
                              children: (0, r.jsx)(v.Dio, { size: 'md' })
                          })
                      ]
                  }),
                  body: (0, r.jsx)(v.hzk, {
                      scrollbarType: 'none',
                      children: (0, r.jsx)(v.Text, {
                          variant: 'text-md/normal',
                          color: 'header-secondary',
                          children: eG.message
                      })
                  }),
                  footer: (0, r.jsx)(v.mzw, {
                      children: (0, r.jsx)(h.zx, {
                          onClick: eR,
                          children: 'Close'
                      })
                  }),
                  minimalPadding: !0,
                  extraWide: !0,
                  modalSize: v.CgR.SMALL
              };
    let td = (e) => {
            e1(e), ek(null), eU('AUTHORIZE_SCOPES');
        },
        tf = (e, t) => {
            eX((n) => (e ? f.Od(n, t) : f.IH(n, t)));
        },
        tp = !1,
        t_ = !1,
        th = !0,
        tm = !0,
        tg = !0,
        tE = !1;
    switch (ej) {
        case null:
            return { body: (0, r.jsx)(E.$, { className: es.spinner }) };
        case 'SELECT_INSTALL_TYPE':
            if (null == e3) return { body: (0, r.jsx)(E.$, { className: es.spinner }) };
            (g = (0, r.jsx)($.Z, {
                application: e3,
                onSelect: td,
                onClose: eR
            })),
                (th = !1),
                (tm = !1),
                (tg = !1),
                (tE = !0);
            break;
        case 'AUTHORIZE_SCOPES':
            if (null == eM || null == eJ || null == e0) return { body: (0, r.jsx)(E.$, { className: es.spinner }) };
            let tv = null == eG || eG instanceof Error ? {} : eG,
                tb = null == eW ? void 0 : eW.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                ty = e0 === c.Y.GUILD_INSTALL && e5.includes(u.x.WEBHOOK_INCOMING),
                tO = ty || (e0 === c.Y.GUILD_INSTALL && (e5.includes(u.x.BOT) || e5.includes(u.x.APPLICATIONS_COMMANDS)));
            (g = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(z.Z, { accountScopes: e7 }),
                    (0, r.jsx)(q.Z, {
                        application: eM.application,
                        accountScopes: e7,
                        requestedScopes: e5,
                        integrationType: e0,
                        errors: tv,
                        isTrustedName: eT
                    }),
                    (0, r.jsx)('div', {
                        className: es.intObserver,
                        ref: tu
                    }),
                    tO
                        ? (0, r.jsx)(X.Z, {
                              error: (null !== (n = null !== (t = tv[u.x.BOT]) && void 0 !== t ? t : tv[u.x.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
                              selectedGuildId: eY,
                              onGuildChange: eK,
                              guilds: null != tb ? tb : [],
                              disabled: '' !== eY && null != eY && !0 === eO
                          })
                        : null,
                    ty
                        ? (0, r.jsx)(en.Z, {
                              error: (null !== (o = tv[u.x.WEBHOOK_INCOMING]) && void 0 !== o ? o : [])[0],
                              selectedChannelId: ez,
                              selectedGuildId: eY,
                              onChannelChange: eq
                          })
                        : null
                ]
            })),
                e5.includes(u.x.BOT) && !f.fS(e8, G.Hn) && (N = 'AUTHORIZE_BOT_PERMISSIONS'),
                ts.length > 1 && (T = 'SELECT_INSTALL_TYPE'),
                (t_ = (tO && null == e$) || (ty && null == ez)),
                (tp = !0);
            break;
        case 'AUTHORIZE_BOT_PERMISSIONS':
            if (null == eM) return { body: (0, r.jsx)(E.$, { className: es.spinner }) };
            (g = (0, r.jsx)(Q.Z, {
                application: eM.application,
                permissions: e8,
                deniedPermissions: eQ,
                onPermissionsChange: tf,
                guild: e$
            })),
                (T = 'AUTHORIZE_SCOPES'),
                (tp = !0);
    }
    if (th && null != eM) {
        let e = null === (l = eM.bot) || void 0 === l ? void 0 : l.approximate_guild_count;
        R = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(K.Z, {
                    application: eM.application,
                    scopes: e5,
                    disclosures: te,
                    redirectUri: null !== (m = eM.redirect_uri) && void 0 !== m ? m : null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: eN
                }),
                (0, r.jsx)('div', {
                    className: es.intObserver,
                    ref: tu
                })
            ]
        });
    }
    return (
        tm &&
            null != eM &&
            null != eJ &&
            (P = (0, r.jsx)(J.Z, {
                id: e_,
                user: eJ,
                application: eM.application,
                bot: eM.bot,
                accountScopes: e7,
                showLogout: eS || !1,
                location: ex
            })),
        tg &&
            (D = (0, r.jsxs)('div', {
                className: a()(es.footer),
                children: [
                    null != T
                        ? (0, r.jsx)(h.zx, {
                              look: h.zx.Looks.FILLED,
                              color: h.zx.Colors.PRIMARY,
                              onClick: () => eU(T),
                              children: ea.NW.string(ea.t['13/7kZ'])
                          })
                        : (0, r.jsx)(h.zx, {
                              look: h.zx.Looks.FILLED,
                              color: h.zx.Colors.PRIMARY,
                              onClick: () => ti(!1),
                              children: ea.NW.string(ea.t['ETE/oK'])
                          }),
                    'SELECT_INSTALL_TYPE' !== ej
                        ? eV
                            ? (0, r.jsx)('div', {
                                  className: es.action,
                                  children: (0, r.jsx)(h.zx, {
                                      onClick: null != N ? () => eU(N) : () => ti(!0),
                                      submitting: eZ,
                                      disabled: null == R || t_,
                                      children: t_ ? ea.NW.string(ea.t.BwwiSE) : null != N ? ea.NW.string(ea.t['3PatS0']) : ea.NW.string(ea.t['y+/PEx'])
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
                                                      submitting: eZ,
                                                      innerClassName: es.buttonWithEmoji,
                                                      children: [
                                                          ea.NW.string(ea.t.N22i9P),
                                                          ' ',
                                                          (0, r.jsx)(O.Z, {
                                                              className: es.emoji,
                                                              src: U.ZP.getURL(_.Z.convert.fromCodePoint(er.I)),
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
            nextStep: N,
            appDetails: R,
            sendAuthorize: ti,
            hasContentBackground: tp,
            minimalPadding: tE
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
            : (0, m.h7)((e) => {
                  let n = (0, r.jsx)(et._Z, {
                      guild: t.guild,
                      application: t.application,
                      onClose: e.onClose
                  });
                  return (0, r.jsx)(
                      ee.j,
                      ed(ec({}, e), {
                          'aria-labelledby': e_,
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
            ? (0, m.h7)((e) => {
                  var t, n;
                  let i = null !== (n = null !== (t = null == s ? void 0 : s.get('error_description')) && void 0 !== t ? t : null == s ? void 0 : s.get('error')) && void 0 !== n ? n : ea.NW.string(ea.t['mqn87+']);
                  return (
                      Array.isArray(i) && (i = i[0]),
                      (0, r.jsx)(
                          ee.j,
                          ed(ec({}, e), {
                              'aria-labelledby': e_,
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
    if ((0, D.g)('create-guild-and-oauth2-modal')) {
        P.Z.openCreateGuildModal({ onSuccess: (n) => eb(ed(ec({}, e), { guildId: n }), t) });
        return;
    }
    eb(e, t);
}
function eb(e, t) {
    (0, m.h7)(
        (t) =>
            (0, r.jsx)(
                em,
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
    return null != i && null != o && (B.Z.isDiscordHostname(n) || r === window.location.host) && (i.startsWith('/api'.concat(ei.ANM.OAUTH2_AUTHORIZE)) || i.startsWith(ei.Z5c.OAUTH2_AUTHORIZE)) ? (0, Z.y)(o) : null;
}

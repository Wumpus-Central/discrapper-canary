"use strict";
n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: () => eo,
        OAuth2AuthorizePage: () => ea,
        getOAuth2AuthorizeProps: () => ef,
        openOAuth2Modal: () => e_,
        openOAuth2ModalWithCreateGuildModal: () => ec,
        useOAuth2AuthorizeForm: () => eu,
    }),
    n(323874),
    n(14289),
    n(35956),
    n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(873263),
    l = n(172218),
    u = n(935399),
    d = n(607399),
    c = n(485845),
    _ = n(179771),
    f = n(136722),
    E = n(815390),
    h = n(311907),
    p = n(192308),
    m = n(821609),
    g = n(289873),
    A = n(834730),
    I = n(708988),
    T = n(73153),
    S = n(830215),
    y = n(803306),
    N = n(58149),
    O = n(269815),
    R = n(627363),
    v = n(224750),
    C = n(62447),
    b = n(854378),
    D = n(268218),
    L = n(272613),
    w = n(49463),
    M = n(14509),
    P = n(976860),
    U = n(611010),
    k = n(427157),
    x = n(961350),
    G = n(488926),
    V = n(998218),
    F = n(123677),
    B = n(716965),
    H = n(332934),
    Y = n(376092),
    W = n(647053),
    j = n(671523),
    K = n(774363),
    $ = n(404035),
    z = n(864721),
    q = n(629442),
    X = n(54605),
    Q = n(189880),
    J = n(321987),
    Z = n(595244),
    ee = n(618865),
    et = n(652215),
    en = n(613057),
    er = n(985018),
    ei = n(636663);
let es = (0, D.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("24199"),
            n.e("57036"),
            n.e("70474"),
            n.e("76640"),
            n.e("7175"),
            n.e("55202"),
            n.e("23353"),
            n.e("73667"),
            n.e("11250"),
            n.e("14138"),
            n.e("3442"),
            n.e("85071"),
            n.e("88017"),
            n.e("70994"),
            n.e("17239"),
            n.e("24267"),
            n.e("51793"),
            n.e("58164"),
            n.e("81645"),
            n.e("36682"),
            n.e("63070"),
            n.e("25370"),
            n.e("96313"),
            n.e("58405"),
        ]).then(n.bind(n, 991054)),
    webpackId: 991054,
});
function ea() {
    let e = (0, o.zy)(),
        t = i.useMemo(() => (0, F._)(e.search), [e.search]);
    (0, O.A)();
    let s = !e.search.includes("response_type"),
        [a, l] = i.useState(!1),
        u = i.useRef(!1),
        [c, _] = i.useState(null),
        f = !d.Fr && !a && (s || !x.default.isAuthenticated());
    if (
        (i.useEffect(() => {
            if (d.Ct && s) {
                let t = new URL("discord://action/oauth2/authorize");
                (t.search = e.search), window.open(t.toString(), "_self");
            } else
                d.Fr ||
                    (!s && x.default.isAuthenticated()) ||
                    u.current ||
                    ((u.current = !0),
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((t) => {
                            let { default: n } = t;
                            if (s)
                                n.request(et.e$_.DEEP_LINK, { type: en.XK.OAUTH2, params: { search: e.search } })
                                    .then((e) => {
                                        _(e ?? !1);
                                    })
                                    .catch(() => _(!1))
                                    .then(() => n.disconnect());
                            else {
                                _(!0);
                                let t = new URLSearchParams(e.search);
                                n.request(et.e$_.AUTHORIZE, {
                                    client_id: t.get("client_id"),
                                    scope: t.get("scope"),
                                    response_type: t.get("response_type"),
                                    redirect_uri: t.get("redirect_uri"),
                                    code_challenge: t.get("code_challenge"),
                                    code_challenge_method: t.get("code_challenge_method"),
                                    state: t.get("state"),
                                    permissions: t.get("permissions"),
                                    guild_id: t.get("guild_id"),
                                    channel_id: t.get("channel_id"),
                                    prompt: t.get("prompt"),
                                    disable_guild_select: t.get("disable_guild_select"),
                                    integration_type: t.get("integration_type"),
                                    nonce: t.get("nonce"),
                                })
                                    .then((e) => {
                                        let { location: t } = e;
                                        t && (window.location.href = t);
                                    })
                                    .catch(() => _(!1))
                                    .then(() => n.disconnect());
                            }
                        }));
        }, [e.search, s]),
        f && !1 !== c)
    ) {
        let e;
        return (
            (e =
                !0 === c
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(b.hE, { children: er.intl.string(er.t.csrAMJ) }),
                              (0, r.jsx)(b.tK, {
                                  children: s ? er.intl.string(er.t["m1+IBn"]) : er.intl.string(er.t.kRzrSO),
                              }),
                              (0, r.jsx)(m.$, {
                                  onClick: () => l(!0),
                                  variant: "primary",
                                  text: er.intl.string(er.t.fIv16B),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(b.hE, { children: er.intl.string(er.t["Z+hCVU"]) }),
                              (0, r.jsx)(g.y, {}),
                          ],
                      })),
            (0, r.jsx)(J.$, { removeChildWrapper: !0, children: (0, r.jsx)("div", { className: ei.ah, children: e }) })
        );
    }
    return (0, r.jsx)(J.$, {
        removeChildWrapper: !0,
        children: (0, r.jsx)(eo, {
            transitionState: E.i.ENTERED,
            ...t,
            showLogout: !0,
            isExternalStandaloneOAuthPage: !0,
            hideHeader: !0,
        }),
    });
}
function eo(e) {
    let {
            label: t,
            title: n,
            subtitle: i,
            header: s,
            body: o,
            actions: l,
            nextStep: u,
            appDetails: d,
            hasContentBackground: c,
            noPadding: _,
            modalSize: f,
        } = eu({ ...e }),
        E =
            null != s || null != o || null != d
                ? (0, r.jsxs)("div", {
                      className: ei.Gq,
                      children: [
                          s,
                          (0, r.jsx)("div", {
                              className: ei.FG,
                              children: (0, r.jsxs)("div", {
                                  className: a()(ei.Qs, c ? ei.cw : null, _ ? ei.pN : null),
                                  children: [o, null == u ? d : null],
                              }),
                          }),
                      ],
                  })
                : null;
    return (0, r.jsx)(J.f, {
        ...e,
        onClose: () => Promise.resolve(e.onClose?.()),
        size: f,
        actions: l,
        title: n,
        subtitle: i,
        "aria-label": t,
        children: E,
    });
}
function el() {
    return (0, r.jsx)("div", { className: ei.g4, children: (0, r.jsx)(g.y, { className: ei.u1 }) });
}
function eu(e) {
    let t,
        n,
        s,
        a,
        d,
        {
            clientId: E,
            responseType: p,
            redirectUri: m,
            codeChallenge: g,
            codeChallengeMethod: O,
            state: b,
            nonce: D,
            prompt: L,
            authorizations: M,
            scopes: J,
            permissions: en,
            guildId: ea,
            channelId: eo,
            integrationType: eu,
            disableGuildSelect: ed = !1,
            showLogout: ec = !1,
            cancelCompletesFlow: e_ = !0,
            isTrustedName: ef = !1,
            isEmbeddedFlow: eE = !1,
            callback: eh,
            callbackWithoutPost: ep,
            onClose: em,
            disclosures: eg,
            isExternalStandaloneOAuthPage: eA = !1,
            isTwoWayLinkDiscordConsent: eI = !1,
        } = e,
        eT = null != eu ? M?.get(eu) : void 0,
        eS = (0, o.zy)(),
        ey = (0, h.bG)([w.A], () => w.A.hasLoadedExperiments);
    i.useEffect(() => {
        x.default.isAuthenticated() && !ey && S.A.getExperiments();
    }, [ey]);
    let [eN, eO] = i.useState(null),
        [eR, ev] = i.useState(null),
        [eC, eb] = i.useState(null),
        [eD, eL] = i.useState(!1),
        [ew, eM] = i.useState(!1),
        eP = eN?.guilds,
        [eU, ek] = i.useState(ea ?? null),
        [ex, eG] = i.useState(eo ?? null),
        [eV, eF] = i.useState(G.x3),
        eB = i.useMemo(() => (eN?.user != null ? new k.A(eN.user) : null), [eN?.user]),
        eH = (0, C.A)(eN?.application ?? null),
        eY = i.useMemo(() => eP?.find((e) => e.id === eU), [eP, eU]),
        [eW, ej] = i.useState(null),
        eK = i.useMemo(() => null == eT && null == eu && (J?.length ?? 0) === 0 && null == m, [eT, J?.length, m, eu]),
        [e$, ez] = i.useState(null);
    i.useEffect(() => {
        eK && R.Ay.fetchApplication(E).then((e) => ez(U.Ay.createFromServer(e)));
    }, [E, eK]);
    let eq = i.useMemo(
            () => (null == eW ? null : e$?.integrationTypesConfig?.[eW]?.oauth2InstallParams),
            [e$?.integrationTypesConfig, eW],
        ),
        { requestedScopes: eX, accountScopes: eQ } = i.useMemo(() => {
            let e = eK ? eq?.scopes : J,
                t = (0, F.e)(e ?? []),
                n = W.k$.filter((e) => t.includes(e));
            return { requestedScopes: t, accountScopes: n };
        }, [eq?.scopes, J, eK]),
        eJ = i.useMemo(() => (eK ? f.iu(eq?.permissions ?? 0) : en) ?? G.x3, [eq?.permissions, en, eK]),
        eZ = i.useRef(!1),
        [e0, e1] = i.useState(eg ?? []),
        [e2, e3] = i.useState(null != eg && eg.length > 0);
    (0, u.Ay)(() => {
        let e = x.default.getAnalyticsToken();
        null != e
            ? T.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: x.default.getId() })
            : (0, y.rQ)({ withAnalyticsToken: !0 }).catch(et.tEg);
    }),
        i.useEffect(() => {
            if (eZ.current) return;
            let e = async () => {
                eZ.current = !0;
                try {
                    let { disclosures: e, allAcked: t } = await (0, v.vG)(E);
                    e3(!t), e1(e);
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, B.Vh)(eS, "oauth2_error_failed_disclosures");
                    eb(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    eZ.current = !1;
                }
            };
            if (null == eg) {
                if (!x.default.isAuthenticated()) return void (0, B.Vh)(eS, "oauth2_error_not_authenticated");
                e();
            }
        }, [E, eS, eg, e1, eb, e3, ev]);
    let e6 = i.useCallback(
            async (e) => {
                if (null != ep) {
                    eL(!0), ep(e);
                    return;
                }
                if (!e && !e_) {
                    null != eh && (eh({ application: eN?.application, guild: eY }), em?.());
                    return;
                }
                if (null == eW) return void eb(Error("No integration type was selected."));
                try {
                    eL(!0);
                    let t = await (0, B.Gq)({
                        authorize: e,
                        clientId: E,
                        scopes: eX,
                        responseType: p,
                        redirectUri: m,
                        codeChallenge: g,
                        codeChallengeMethod: O,
                        state: b,
                        nonce: D,
                        integrationType: eW,
                        permissions: f.TF(eJ, eV),
                        guildId: eW === c.b.GUILD_INSTALL && null != eU ? eU : void 0,
                        channelId: eW === c.b.GUILD_INSTALL && null != ex ? ex : void 0,
                    });
                    if ((e && (await (0, v.Yx)(E, e0)), null != eh))
                        eh({ application: eN?.application, location: t.location, guild: eY }), em?.();
                    else if (null != t.location) {
                        let e = V.A.toURLSafe(t.location)?.pathname;
                        V.A.isDiscordUrl(t.location) && e === et.BVt.OAUTH2_AUTHORIZED
                            ? (0, P.pX)(et.BVt.OAUTH2_AUTHORIZED, {
                                  state: { application: eN?.application, guild: eY },
                              })
                            : (window.location = t.location);
                    } else eL(!1);
                } catch (t) {
                    let e = t.body;
                    e?.message != null && "" !== e.message ? eb(Error(e.message)) : eb(e),
                        ev("AUTHORIZE_SCOPES"),
                        eL(!1);
                }
            },
            [ep, e_, eh, eN?.application, eY, em, E, eX, p, m, g, O, b, D, eJ, eV, eU, eW, ex, e0],
        ),
        e4 = i.useRef(!1),
        e5 = i.useCallback(async () => {
            if (!x.default.isAuthenticated()) return void (0, B.Vh)(eS, "oauth2_error_not_authenticated");
            if (!eZ.current && !e4.current) {
                e4.current = !0;
                try {
                    let e =
                        null != eT
                            ? eT
                            : await (0, B.qY)({
                                  clientId: E,
                                  scopes: eX,
                                  responseType: p,
                                  redirectUri: m,
                                  codeChallenge: g,
                                  codeChallengeMethod: O,
                                  state: b,
                                  nonce: D,
                                  integrationType: eW ?? void 0,
                              });
                    eO((0, H._)(e)),
                        L === j.l.NONE && e.authorized && !e2 && e6(!0),
                        (0, N.zV)(et.HAw.OAUTH2_AUTHORIZE_VIEWED, { application_id: e.application.id });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, B.Vh)(eS, "oauth2_error_unauthorized");
                    eb(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    e4.current = !1;
                }
            }
        }, [eS, eT, E, eX, p, m, g, O, b, D, eW, L, e6, e2]),
        e7 = i.useMemo(
            () =>
                null != e$ && eK
                    ? Object.entries(e$.integrationTypesConfig ?? {})
                          .filter((e) => {
                              let [t, n] = e;
                              return null != n.oauth2InstallParams;
                          })
                          .map((e) => {
                              let [t, n] = e;
                              return Number(t);
                          })
                    : [],
            [e$, eK],
        ),
        e8 = i.useRef(null);
    i.useEffect(() => {
        eR !== e8.current &&
            ((e8.current = eR),
            (0, N.zV)(et.HAw.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eR,
                application_id: E,
                integration_type: eW,
                scopes: eX,
                permissions: eJ.toString(),
            }));
    }, [E, eW, eJ, eX, eR]),
        i.useEffect(() => {
            null == eR &&
                (!eK || null != e$) &&
                ey &&
                (null != eT
                    ? (ej(eT.integration_type ?? c.b.GUILD_INSTALL), ev("AUTHORIZE_SCOPES"))
                    : e7.length > 1
                      ? ev("SELECT_INSTALL_TYPE")
                      : (1 === e7.length ? ej(e7[0]) : null != eu ? ej(eu) : ej(c.b.GUILD_INSTALL),
                        ev("AUTHORIZE_SCOPES")));
        }, [eT, e7, e$, eK, eu, eR, ey]),
        i.useEffect(() => {
            if (null == eW || null != eN || null != eC) return;
            eW === c.b.USER_INSTALL && (ek(null), eG(null));
            let e = eX.filter((e) => !W.gX.includes(e));
            0 === eX.length
                ? eb(Error("No scopes were provided."))
                : e.length > 0
                  ? eb(Error(`Invalid scope: ${e[0]}`))
                  : (0, Y.F7)(eJ)
                    ? eb(Error("Invalid permission(s) provided."))
                    : e5();
        }, [e2, e5, eX, eJ, eW, eN, eC]);
    let e9 = i.useCallback((e) => {
            e && eM(!0);
        }, []),
        te = (0, l.K)(e9);
    if (eC instanceof Error)
        return eA
            ? { body: (0, r.jsx)(Z.gz, { message: eC.message }) }
            : eI
              ? {
                    label: er.intl.string(er.t.j2d6Km),
                    header: (0, r.jsx)(A.E, {
                        variant: "text-lg/bold",
                        color: "text-strong",
                        children: er.intl.string(er.t.j2d6Km),
                    }),
                    body: (0, r.jsx)(A.E, { variant: "text-md/normal", color: "text-default", children: eC.message }),
                    actions: [{ onClick: em, text: er.intl.string(er.t.cpT0Cq) }],
                    noPadding: !0,
                }
              : {
                    title: er.intl.string(er.t.j2d6Km),
                    subtitle: eC.message,
                    actions: [{ onClick: em, text: er.intl.string(er.t.cpT0Cq) }],
                };
    let tt = !1,
        tn = !1,
        tr = !0,
        ti = !0,
        ts = !0,
        ta = !1;
    switch (eR) {
        case null:
            return { label: er.intl.string(er.t.ZTNur7), body: (0, r.jsx)(el, {}) };
        case "SELECT_INSTALL_TYPE":
            if (null == e$) return { label: er.intl.string(er.t.ZTNur7), body: (0, r.jsx)(el, {}) };
            (t = (0, r.jsx)(es, {
                application: e$,
                onSelect: (e) => {
                    ej(e), eO(null), ev("AUTHORIZE_SCOPES");
                },
            })),
                (tr = !1),
                (ti = !1),
                (ts = !1),
                (ta = !0);
            break;
        case "AUTHORIZE_SCOPES":
            if (null == eN || null == eB || null == eW)
                return { label: er.intl.string(er.t.ZTNur7), body: (0, r.jsx)(el, {}) };
            let to = null == eC || eC instanceof Error ? {} : eC,
                tl = eP?.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tu = eW === c.b.GUILD_INSTALL && eX.includes(_.F.WEBHOOK_INCOMING),
                td =
                    tu ||
                    (eW === c.b.GUILD_INSTALL && (eX.includes(_.F.BOT) || eX.includes(_.F.APPLICATIONS_COMMANDS)));
            (t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)($.A, { application: eN.application, accountScopes: eQ }),
                    (0, r.jsx)(z.A, {
                        application: eN.application,
                        accountScopes: eQ,
                        requestedScopes: eX,
                        integrationType: eW,
                        errors: to,
                        isTrustedName: ef || eH,
                    }),
                    (0, r.jsx)("div", { className: ei.sL, ref: te }),
                    td
                        ? (0, r.jsx)(X.A, {
                              error: (to[_.F.BOT] ?? to[_.F.APPLICATIONS_COMMANDS] ?? [])[0],
                              selectedGuildId: eU,
                              onGuildChange: ek,
                              guilds: tl ?? [],
                              disabled: "" !== eU && null != eU && !0 === ed,
                          })
                        : null,
                    tu
                        ? (0, r.jsx)(ee.A, {
                              error: (to[_.F.WEBHOOK_INCOMING] ?? [])[0],
                              selectedChannelId: ex,
                              selectedGuildId: eU,
                              onChannelChange: eG,
                          })
                        : null,
                ],
            })),
                eX.includes(_.F.BOT) && !f.aI(eJ, G.x3) && (s = "AUTHORIZE_BOT_PERMISSIONS"),
                e7.length > 1 && (n = "SELECT_INSTALL_TYPE"),
                (tn = (td && null == eY) || (tu && null == ex)),
                (tt = !0);
            break;
        case "AUTHORIZE_BOT_PERMISSIONS":
            if (null == eN) return { label: er.intl.string(er.t.ZTNur7), body: (0, r.jsx)(el, {}) };
            (t = (0, r.jsx)(q.A, {
                application: eN.application,
                permissions: eJ,
                deniedPermissions: eV,
                onPermissionsChange: (e, t) => {
                    eF((n) => (e ? f.TF(n, t) : f.WQ(n, t)));
                },
                guild: eY,
            })),
                (n = "AUTHORIZE_SCOPES"),
                (tt = !0);
    }
    let tc = [];
    if (tr && null != eN) {
        let e = eN?.application.approximate_guild_count ?? eN?.bot?.approximate_guild_count;
        a = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(K.A, {
                    application: eN.application,
                    scopes: eX,
                    disclosures: e0,
                    redirectUri: eN.redirect_uri ?? null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: eE,
                }),
                (0, r.jsx)("div", { className: ei.sL, ref: te }),
            ],
        });
    }
    return (
        ti &&
            null != eN &&
            null != eB &&
            (d = (0, r.jsx)(Q.A, {
                user: eB,
                application: eN.application,
                bot: eN.bot,
                accountScopes: eQ,
                showLogout: ec || !1,
                location: eS,
                scopes: eX,
            })),
        ts &&
            (tc.push(
                null != n
                    ? { variant: "secondary", onClick: () => ev(n), text: er.intl.string(er.t["13/7kX"]) }
                    : { variant: "secondary", onClick: () => e6(!1), text: er.intl.string(er.t["ETE/oC"]) },
            ),
            "SELECT_INSTALL_TYPE" !== eR &&
                tc.push(
                    ew
                        ? {
                              onClick: null != s ? () => ev(s) : () => e6(!0),
                              loading: eD,
                              disabled: null == a || tn,
                              text: tn
                                  ? er.intl.string(er.t.BwwiSM)
                                  : null != s
                                    ? er.intl.string(er.t["3PatSz"])
                                    : er.intl.string(er.t["y+/PE9"]),
                          }
                        : { disabled: !0, loading: eD, text: er.intl.string(er.t.N22i9F), icon: I.M },
                )),
        {
            header: d,
            body: t,
            actions: tc,
            nextStep: s,
            appDetails: a,
            sendAuthorize: e6,
            hasContentBackground: tt,
            noPadding: ta,
        }
    );
}
function ed(e, t) {
    if (null == t.location || (null != e.callback && e.callback(t))) return;
    let { host: n, pathname: i, searchParams: s } = V.A.toURLSafe(t.location) ?? {},
        a = V.A.isDiscordHostname(n ?? null) || window.location.host === n;
    a && i === et.BVt.OAUTH2_AUTHORIZED
        ? (0, p.openModal)((e) => (0, r.jsx)(Z.dR, { guild: t.guild, application: t.application, ...e }))
        : a && i?.startsWith(et.BVt.OAUTH2_ERROR)
          ? (0, p.openModal)((e) => {
                let t = s?.get("error_description") ?? s?.get("error") ?? er.intl.string(er.t.mqn873);
                return (
                    Array.isArray(t) && (t = t[0]),
                    (0, r.jsx)(J.f, { ...e, children: (0, r.jsx)(Z.gz, { message: t, onClose: e.onClose }) })
                );
            })
          : window.open(t.location, "_blank")?.focus();
}
function ec(e, t) {
    (0, M._9)() ? L.A.openCreateGuildModal({ onSuccess: (n) => e_({ ...e, guildId: n }, t) }) : e_(e, t);
}
function e_(e, t) {
    (0, p.openModal)((t) => (0, r.jsx)(eo, { ...t, ...e, cancelCompletesFlow: !1, callback: ed.bind(null, e) }), {
        onCloseCallback: t,
    });
}
function ef(e) {
    let { hostname: t = "", host: n, pathname: r, search: i } = V.A.toURLSafe(e) ?? {};
    return null != r &&
        null != i &&
        (V.A.isDiscordHostname(t) || n === window.location.host) &&
        (r.startsWith(`/api${et.Rsh.OAUTH2_AUTHORIZE}`) || r.startsWith(et.BVt.OAUTH2_AUTHORIZE))
        ? (0, F._)(i)
        : null;
}

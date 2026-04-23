"use strict";
n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: () => eo,
        OAuth2AuthorizePage: () => ea,
        getOAuth2AuthorizeProps: () => ef,
        openOAuth2Modal: () => e_,
        openOAuth2ModalWithCreateGuildModal: () => ed,
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
    c = n(607399),
    d = n(485845),
    _ = n(179771),
    f = n(136722),
    p = n(815390),
    h = n(311907),
    E = n(192308),
    m = n(821609),
    g = n(289873),
    A = n(834730),
    I = n(708988),
    T = n(73153),
    S = n(830215),
    y = n(803306),
    N = n(58149),
    v = n(269815),
    C = n(627363),
    O = n(224750),
    R = n(62447),
    b = n(854378),
    D = n(268218),
    L = n(272613),
    w = n(49463),
    M = n(14509),
    P = n(976860),
    x = n(611010),
    k = n(427157),
    U = n(961350),
    G = n(488926),
    F = n(998218),
    V = n(123677),
    B = n(716965),
    H = n(332934),
    j = n(376092),
    Y = n(647053),
    W = n(671523),
    K = n(774363),
    $ = n(404035),
    z = n(864721),
    q = n(629442),
    X = n(54605),
    Q = n(189880),
    Z = n(321987),
    J = n(595244),
    ee = n(618865),
    et = n(652215),
    en = n(613057),
    er = n(985018),
    ei = n(636663);
let es = (0, D.Fe)({ createPromise: () => n.e("58405").then(n.bind(n, 991054)), webpackId: 991054 });
function ea() {
    let e = (0, o.zy)(),
        t = i.useMemo(() => (0, V._)(e.search), [e.search]);
    (0, v.A)();
    let s = !e.search.includes("response_type"),
        [a, l] = i.useState(!1),
        u = i.useRef(!1),
        [d, _] = i.useState(null),
        f = !c.Fr && !a && (s || !U.default.isAuthenticated());
    if (
        (i.useEffect(() => {
            if (c.Ct && s) {
                let t = new URL("discord://action/oauth2/authorize");
                (t.search = e.search), window.open(t.toString(), "_self");
            } else
                c.Fr ||
                    (!s && U.default.isAuthenticated()) ||
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
        f && !1 !== d)
    ) {
        let e;
        return (
            (e =
                !0 === d
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
            (0, r.jsx)(Z.$, { removeChildWrapper: !0, children: (0, r.jsx)("div", { className: ei.ah, children: e }) })
        );
    }
    return (0, r.jsx)(Z.$, {
        removeChildWrapper: !0,
        children: (0, r.jsx)(eo, {
            transitionState: p.i.ENTERED,
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
            appDetails: c,
            hasContentBackground: d,
            noPadding: _,
            modalSize: f,
        } = eu({ ...e }),
        p =
            null != s || null != o || null != c
                ? (0, r.jsxs)("div", {
                      className: ei.Gq,
                      children: [
                          s,
                          (0, r.jsx)("div", {
                              className: ei.FG,
                              children: (0, r.jsxs)("div", {
                                  className: a()(ei.Qs, d ? ei.cw : null, _ ? ei.pN : null),
                                  children: [o, null == u ? c : null],
                              }),
                          }),
                      ],
                  })
                : null;
    return (0, r.jsx)(Z.f, {
        ...e,
        onClose: () => Promise.resolve(e.onClose?.()),
        size: f,
        actions: l,
        title: n,
        subtitle: i,
        "aria-label": t,
        children: p,
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
        c,
        {
            clientId: p,
            responseType: E,
            redirectUri: m,
            codeChallenge: g,
            codeChallengeMethod: v,
            state: b,
            nonce: D,
            prompt: L,
            authorizations: M,
            scopes: Z,
            permissions: en,
            guildId: ea,
            channelId: eo,
            integrationType: eu,
            disableGuildSelect: ec = !1,
            showLogout: ed = !1,
            cancelCompletesFlow: e_ = !0,
            isTrustedName: ef = !1,
            isEmbeddedFlow: ep = !1,
            callback: eh,
            callbackWithoutPost: eE,
            onClose: em,
            disclosures: eg,
            isExternalStandaloneOAuthPage: eA = !1,
            isTwoWayLinkDiscordConsent: eI = !1,
        } = e,
        eT = null != eu ? M?.get(eu) : void 0,
        eS = (0, o.zy)(),
        ey = (0, h.bG)([w.A], () => w.A.hasLoadedExperiments);
    i.useEffect(() => {
        U.default.isAuthenticated() && !ey && S.A.getExperiments();
    }, [ey]);
    let [eN, ev] = i.useState(null),
        [eC, eO] = i.useState(null),
        [eR, eb] = i.useState(null),
        [eD, eL] = i.useState(!1),
        [ew, eM] = i.useState(!1),
        eP = eN?.guilds,
        [ex, ek] = i.useState(ea ?? null),
        [eU, eG] = i.useState(eo ?? null),
        [eF, eV] = i.useState(G.x3),
        eB = i.useMemo(() => (eN?.user != null ? new k.A(eN.user) : null), [eN?.user]),
        eH = (0, R.A)(eN?.application ?? null),
        ej = i.useMemo(() => eP?.find((e) => e.id === ex), [eP, ex]),
        [eY, eW] = i.useState(null),
        eK = i.useMemo(() => null == eT && null == eu && (Z?.length ?? 0) === 0 && null == m, [eT, Z?.length, m, eu]),
        [e$, ez] = i.useState(null);
    i.useEffect(() => {
        eK && C.Ay.fetchApplication(p).then((e) => ez(x.Ay.createFromServer(e)));
    }, [p, eK]);
    let eq = i.useMemo(
            () => (null == eY ? null : e$?.integrationTypesConfig?.[eY]?.oauth2InstallParams),
            [e$?.integrationTypesConfig, eY],
        ),
        { requestedScopes: eX, accountScopes: eQ } = i.useMemo(() => {
            let e = eK ? eq?.scopes : Z,
                t = (0, V.e)(e ?? []),
                n = Y.k$.filter((e) => t.includes(e));
            return { requestedScopes: t, accountScopes: n };
        }, [eq?.scopes, Z, eK]),
        eZ = i.useMemo(() => (eK ? f.iu(eq?.permissions ?? 0) : en) ?? G.x3, [eq?.permissions, en, eK]),
        eJ = i.useRef(!1),
        [e0, e1] = i.useState(eg ?? []),
        [e2, e3] = i.useState(null != eg && eg.length > 0);
    (0, u.Ay)(() => {
        let e = U.default.getAnalyticsToken();
        null != e
            ? T.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: U.default.getId() })
            : (0, y.rQ)({ withAnalyticsToken: !0 }).catch(et.tEg);
    }),
        i.useEffect(() => {
            if (eJ.current) return;
            let e = async () => {
                eJ.current = !0;
                try {
                    let { disclosures: e, allAcked: t } = await (0, O.vG)(p);
                    e3(!t), e1(e);
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, B.Vh)(eS, "oauth2_error_failed_disclosures");
                    eb(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    eJ.current = !1;
                }
            };
            if (null == eg) {
                if (!U.default.isAuthenticated()) return void (0, B.Vh)(eS, "oauth2_error_not_authenticated");
                e();
            }
        }, [p, eS, eg, e1, eb, e3, eO]);
    let e6 = i.useCallback(
            async (e) => {
                if (null != eE) {
                    eL(!0), eE(e);
                    return;
                }
                if (!e && !e_) {
                    null != eh && (eh({ application: eN?.application, guild: ej }), em?.());
                    return;
                }
                if (null == eY) return void eb(Error("No integration type was selected."));
                try {
                    eL(!0);
                    let t = await (0, B.Gq)({
                        authorize: e,
                        clientId: p,
                        scopes: eX,
                        responseType: E,
                        redirectUri: m,
                        codeChallenge: g,
                        codeChallengeMethod: v,
                        state: b,
                        nonce: D,
                        integrationType: eY,
                        permissions: f.TF(eZ, eF),
                        guildId: eY === d.b.GUILD_INSTALL && null != ex ? ex : void 0,
                        channelId: eY === d.b.GUILD_INSTALL && null != eU ? eU : void 0,
                    });
                    if ((e && (await (0, O.Yx)(p, e0)), null != eh))
                        eh({ application: eN?.application, location: t.location, guild: ej }), em?.();
                    else if (null != t.location) {
                        let e = F.A.toURLSafe(t.location)?.pathname;
                        F.A.isDiscordUrl(t.location) && e === et.BVt.OAUTH2_AUTHORIZED
                            ? (0, P.pX)(et.BVt.OAUTH2_AUTHORIZED, {
                                  state: { application: eN?.application, guild: ej },
                              })
                            : (window.location = t.location);
                    } else eL(!1);
                } catch (t) {
                    let e = t.body;
                    e?.message != null && "" !== e.message ? eb(Error(e.message)) : eb(e),
                        eO("AUTHORIZE_SCOPES"),
                        eL(!1);
                }
            },
            [eE, e_, eh, eN?.application, ej, em, p, eX, E, m, g, v, b, D, eZ, eF, ex, eY, eU, e0],
        ),
        e4 = i.useRef(!1),
        e7 = i.useCallback(async () => {
            if (!U.default.isAuthenticated()) return void (0, B.Vh)(eS, "oauth2_error_not_authenticated");
            if (!eJ.current && !e4.current) {
                e4.current = !0;
                try {
                    let e =
                        null != eT
                            ? eT
                            : await (0, B.qY)({
                                  clientId: p,
                                  scopes: eX,
                                  responseType: E,
                                  redirectUri: m,
                                  codeChallenge: g,
                                  codeChallengeMethod: v,
                                  state: b,
                                  nonce: D,
                                  integrationType: eY ?? void 0,
                              });
                    ev((0, H._)(e)),
                        L === W.l.NONE && e.authorized && !e2 && e6(!0),
                        (0, N.zV)(et.HAw.OAUTH2_AUTHORIZE_VIEWED, { application_id: e.application.id });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, B.Vh)(eS, "oauth2_error_unauthorized");
                    eb(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    e4.current = !1;
                }
            }
        }, [eS, eT, p, eX, E, m, g, v, b, D, eY, L, e6, e2]),
        e5 = i.useMemo(
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
        eC !== e8.current &&
            ((e8.current = eC),
            (0, N.zV)(et.HAw.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eC,
                application_id: p,
                integration_type: eY,
                scopes: eX,
                permissions: eZ.toString(),
            }));
    }, [p, eY, eZ, eX, eC]),
        i.useEffect(() => {
            null == eC &&
                (!eK || null != e$) &&
                ey &&
                (null != eT
                    ? (eW(eT.integration_type ?? d.b.GUILD_INSTALL), eO("AUTHORIZE_SCOPES"))
                    : e5.length > 1
                      ? eO("SELECT_INSTALL_TYPE")
                      : (1 === e5.length ? eW(e5[0]) : null != eu ? eW(eu) : eW(d.b.GUILD_INSTALL),
                        eO("AUTHORIZE_SCOPES")));
        }, [eT, e5, e$, eK, eu, eC, ey]),
        i.useEffect(() => {
            if (null == eY || null != eN || null != eR) return;
            eY === d.b.USER_INSTALL && (ek(null), eG(null));
            let e = eX.filter((e) => !Y.gX.includes(e));
            0 === eX.length
                ? eb(Error("No scopes were provided."))
                : e.length > 0
                  ? eb(Error(`Invalid scope: ${e[0]}`))
                  : (0, j.F7)(eZ)
                    ? eb(Error("Invalid permission(s) provided."))
                    : e7();
        }, [e2, e7, eX, eZ, eY, eN, eR]);
    let e9 = i.useCallback((e) => {
            e && eM(!0);
        }, []),
        te = (0, l.K)(e9);
    if (eR instanceof Error)
        return eA
            ? { body: (0, r.jsx)(J.gz, { message: eR.message }) }
            : eI
              ? {
                    label: er.intl.string(er.t.j2d6Km),
                    header: (0, r.jsx)(A.E, {
                        variant: "text-lg/bold",
                        color: "text-strong",
                        children: er.intl.string(er.t.j2d6Km),
                    }),
                    body: (0, r.jsx)(A.E, { variant: "text-md/normal", color: "text-default", children: eR.message }),
                    actions: [{ onClick: em, text: er.intl.string(er.t.cpT0Cq) }],
                    noPadding: !0,
                }
              : {
                    title: er.intl.string(er.t.j2d6Km),
                    subtitle: eR.message,
                    actions: [{ onClick: em, text: er.intl.string(er.t.cpT0Cq) }],
                };
    let tt = !1,
        tn = !1,
        tr = !0,
        ti = !0,
        ts = !0,
        ta = !1;
    switch (eC) {
        case null:
            return { label: er.intl.string(er.t.ZTNur7), body: (0, r.jsx)(el, {}) };
        case "SELECT_INSTALL_TYPE":
            if (null == e$) return { label: er.intl.string(er.t.ZTNur7), body: (0, r.jsx)(el, {}) };
            (t = (0, r.jsx)(es, {
                application: e$,
                onSelect: (e) => {
                    eW(e), ev(null), eO("AUTHORIZE_SCOPES");
                },
            })),
                (tr = !1),
                (ti = !1),
                (ts = !1),
                (ta = !0);
            break;
        case "AUTHORIZE_SCOPES":
            if (null == eN || null == eB || null == eY)
                return { label: er.intl.string(er.t.ZTNur7), body: (0, r.jsx)(el, {}) };
            let to = null == eR || eR instanceof Error ? {} : eR,
                tl = eP?.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tu = eY === d.b.GUILD_INSTALL && eX.includes(_.F.WEBHOOK_INCOMING),
                tc =
                    tu ||
                    (eY === d.b.GUILD_INSTALL && (eX.includes(_.F.BOT) || eX.includes(_.F.APPLICATIONS_COMMANDS)));
            (t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)($.A, { application: eN.application, accountScopes: eQ }),
                    (0, r.jsx)(z.A, {
                        application: eN.application,
                        accountScopes: eQ,
                        requestedScopes: eX,
                        integrationType: eY,
                        errors: to,
                        isTrustedName: ef || eH,
                    }),
                    (0, r.jsx)("div", { className: ei.sL, ref: te }),
                    tc
                        ? (0, r.jsx)(X.A, {
                              error: (to[_.F.BOT] ?? to[_.F.APPLICATIONS_COMMANDS] ?? [])[0],
                              selectedGuildId: ex,
                              onGuildChange: ek,
                              guilds: tl ?? [],
                              disabled: "" !== ex && null != ex && !0 === ec,
                          })
                        : null,
                    tu
                        ? (0, r.jsx)(ee.A, {
                              error: (to[_.F.WEBHOOK_INCOMING] ?? [])[0],
                              selectedChannelId: eU,
                              selectedGuildId: ex,
                              onChannelChange: eG,
                          })
                        : null,
                ],
            })),
                eX.includes(_.F.BOT) && !f.aI(eZ, G.x3) && (s = "AUTHORIZE_BOT_PERMISSIONS"),
                e5.length > 1 && (n = "SELECT_INSTALL_TYPE"),
                (tn = (tc && null == ej) || (tu && null == eU)),
                (tt = !0);
            break;
        case "AUTHORIZE_BOT_PERMISSIONS":
            if (null == eN) return { label: er.intl.string(er.t.ZTNur7), body: (0, r.jsx)(el, {}) };
            (t = (0, r.jsx)(q.A, {
                application: eN.application,
                permissions: eZ,
                deniedPermissions: eF,
                onPermissionsChange: (e, t) => {
                    eV((n) => (e ? f.TF(n, t) : f.WQ(n, t)));
                },
                guild: ej,
            })),
                (n = "AUTHORIZE_SCOPES"),
                (tt = !0);
    }
    let td = [];
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
                    isEmbeddedFlow: ep,
                }),
                (0, r.jsx)("div", { className: ei.sL, ref: te }),
            ],
        });
    }
    return (
        ti &&
            null != eN &&
            null != eB &&
            (c = (0, r.jsx)(Q.A, {
                user: eB,
                application: eN.application,
                bot: eN.bot,
                accountScopes: eQ,
                showLogout: ed || !1,
                location: eS,
                scopes: eX,
            })),
        ts &&
            (td.push(
                null != n
                    ? { variant: "secondary", onClick: () => eO(n), text: er.intl.string(er.t["13/7kX"]) }
                    : { variant: "secondary", onClick: () => e6(!1), text: er.intl.string(er.t["ETE/oC"]) },
            ),
            "SELECT_INSTALL_TYPE" !== eC &&
                td.push(
                    ew
                        ? {
                              onClick: null != s ? () => eO(s) : () => e6(!0),
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
            header: c,
            body: t,
            actions: td,
            nextStep: s,
            appDetails: a,
            sendAuthorize: e6,
            hasContentBackground: tt,
            noPadding: ta,
        }
    );
}
function ec(e, t) {
    if (null == t.location || (null != e.callback && e.callback(t))) return;
    let { host: n, pathname: i, searchParams: s } = F.A.toURLSafe(t.location) ?? {},
        a = F.A.isDiscordHostname(n ?? null) || window.location.host === n;
    a && i === et.BVt.OAUTH2_AUTHORIZED
        ? (0, E.openModal)((e) => (0, r.jsx)(J.dR, { guild: t.guild, application: t.application, ...e }))
        : a && i?.startsWith(et.BVt.OAUTH2_ERROR)
          ? (0, E.openModal)((e) => {
                let t = s?.get("error_description") ?? s?.get("error") ?? er.intl.string(er.t.mqn873);
                return (
                    Array.isArray(t) && (t = t[0]),
                    (0, r.jsx)(Z.f, { ...e, children: (0, r.jsx)(J.gz, { message: t, onClose: e.onClose }) })
                );
            })
          : window.open(t.location, "_blank")?.focus();
}
function ed(e, t) {
    (0, M._9)() ? L.A.openCreateGuildModal({ onSuccess: (n) => e_({ ...e, guildId: n }, t) }) : e_(e, t);
}
function e_(e, t) {
    (0, E.openModal)((t) => (0, r.jsx)(eo, { ...t, ...e, cancelCompletesFlow: !1, callback: ec.bind(null, e) }), {
        onCloseCallback: t,
    });
}
function ef(e) {
    let { hostname: t = "", host: n, pathname: r, search: i } = F.A.toURLSafe(e) ?? {};
    return null != r &&
        null != i &&
        (F.A.isDiscordHostname(t) || n === window.location.host) &&
        (r.startsWith(`/api${et.Rsh.OAUTH2_AUTHORIZE}`) || r.startsWith(et.BVt.OAUTH2_AUTHORIZE))
        ? (0, V._)(i)
        : null;
}

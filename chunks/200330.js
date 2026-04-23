n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: () => e_,
        OAuth2AuthorizePage: () => es,
        getOAuth2AuthorizeProps: () => eu,
        openOAuth2Modal: () => ec,
        openOAuth2ModalWithCreateGuildModal: () => ed,
        useOAuth2AuthorizeForm: () => eo,
    }),
    n(323874),
    n(14289),
    n(35956),
    n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    _ = n(873263),
    l = n(172218),
    o = n(935399),
    E = n(607399),
    d = n(485845),
    c = n(179771),
    u = n(136722),
    I = n(815390),
    A = n(17928),
    T = n(192308),
    S = n(821609),
    N = n(289873),
    O = n(834730),
    R = n(708988),
    f = n(228366),
    C = n(830215),
    p = n(803306),
    m = n(58149),
    L = n(269815),
    D = n(627363),
    h = n(224750),
    g = n(62447),
    b = n(854378),
    U = n(268218),
    P = n(272613),
    M = n(736056),
    y = n(14509),
    G = n(976860),
    v = n(395671),
    B = n(889227),
    w = n(495544),
    F = n(488926),
    V = n(998218),
    H = n(123677),
    k = n(716965),
    x = n(332934),
    W = n(376092),
    Y = n(647053),
    j = n(671523),
    K = n(694214),
    $ = n(404035),
    Q = n(864721),
    q = n(629442),
    X = n(54605),
    z = n(189880),
    J = n(321987),
    Z = n(595244),
    ee = n(618865),
    et = n(652215),
    en = n(613057),
    ei = n(985018),
    er = n(636663);
let ea = (0, U.Fe)({ createPromise: () => n.e("58405").then(n.bind(n, 991054)), webpackId: 991054 });
function es() {
    let e = (0, _.zy)(),
        t = r.useMemo(() => (0, H._)(e.search), [e.search]);
    (0, L.A)();
    let a = !e.search.includes("response_type"),
        [s, l] = r.useState(!1),
        o = r.useRef(!1),
        [d, c] = r.useState(null),
        u = !E.Fr && !s && (a || !w.default.isAuthenticated());
    if (
        (r.useEffect(() => {
            if (E.Ct && a) {
                let t = new URL("discord://action/oauth2/authorize");
                (t.search = e.search), window.open(t.toString(), "_self");
            } else
                E.Fr ||
                    (!a && w.default.isAuthenticated()) ||
                    o.current ||
                    ((o.current = !0),
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((t) => {
                            let { default: n } = t;
                            if (a)
                                n.request(et.e$_.DEEP_LINK, { type: en.XK.OAUTH2, params: { search: e.search } })
                                    .then((e) => {
                                        c(e ?? !1);
                                    })
                                    .catch(() => c(!1))
                                    .then(() => n.disconnect());
                            else {
                                c(!0);
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
                                    .catch(() => c(!1))
                                    .then(() => n.disconnect());
                            }
                        }));
        }, [e.search, a]),
        u && !1 !== d)
    ) {
        let e;
        return (
            (e =
                !0 === d
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(b.hE, { children: ei.intl.string(ei.t.csrAMJ) }),
                              (0, i.jsx)(b.tK, {
                                  children: a ? ei.intl.string(ei.t["m1+IBn"]) : ei.intl.string(ei.t.kRzrSO),
                              }),
                              (0, i.jsx)(S.$, {
                                  onClick: () => l(!0),
                                  variant: "primary",
                                  text: ei.intl.string(ei.t.fIv16B),
                              }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(b.hE, { children: ei.intl.string(ei.t["Z+hCVU"]) }),
                              (0, i.jsx)(N.y, {}),
                          ],
                      })),
            (0, i.jsx)(J.$, { removeChildWrapper: !0, children: (0, i.jsx)("div", { className: er.ah, children: e }) })
        );
    }
    return (0, i.jsx)(J.$, {
        removeChildWrapper: !0,
        children: (0, i.jsx)(e_, {
            transitionState: I.i.ENTERED,
            ...t,
            showLogout: !0,
            isExternalStandaloneOAuthPage: !0,
            hideHeader: !0,
        }),
    });
}
function e_(e) {
    let {
            label: t,
            title: n,
            subtitle: r,
            header: a,
            body: _,
            actions: l,
            nextStep: o,
            appDetails: E,
            hasContentBackground: d,
            noPadding: c,
            modalSize: u,
        } = eo({ ...e }),
        I =
            null != a || null != _ || null != E
                ? (0, i.jsxs)("div", {
                      className: er.Gq,
                      children: [
                          a,
                          (0, i.jsx)("div", {
                              className: er.FG,
                              children: (0, i.jsxs)("div", {
                                  className: s()(er.Qs, d ? er.cw : null, c ? er.pN : null),
                                  children: [_, null == o ? E : null],
                              }),
                          }),
                      ],
                  })
                : null;
    return (0, i.jsx)(J.f, {
        ...e,
        onClose: () => Promise.resolve(e.onClose?.()),
        size: u,
        actions: l,
        title: n,
        subtitle: r,
        "aria-label": t,
        children: I,
    });
}
function el() {
    return (0, i.jsx)("div", { className: er.g4, children: (0, i.jsx)(N.y, { className: er.u1 }) });
}
function eo(e) {
    let t,
        n,
        a,
        s,
        E,
        {
            clientId: I,
            responseType: T,
            redirectUri: S,
            codeChallenge: N,
            codeChallengeMethod: L,
            state: b,
            nonce: U,
            prompt: P,
            authorizations: y,
            scopes: J,
            permissions: en,
            guildId: es,
            channelId: e_,
            integrationType: eo,
            disableGuildSelect: eE = !1,
            showLogout: ed = !1,
            cancelCompletesFlow: ec = !0,
            isTrustedName: eu = !1,
            isEmbeddedFlow: eI = !1,
            callback: eA,
            callbackWithoutPost: eT,
            onClose: eS,
            disclosures: eN,
            isExternalStandaloneOAuthPage: eO = !1,
            isTwoWayLinkDiscordConsent: eR = !1,
        } = e,
        ef = null != eo ? y?.get(eo) : void 0,
        eC = (0, _.zy)(),
        ep = (0, A.bG)([M.A], () => M.A.hasLoadedExperiments);
    r.useEffect(() => {
        w.default.isAuthenticated() && !ep && C.A.getExperiments();
    }, [ep]);
    let [em, eL] = r.useState(null),
        [eD, eh] = r.useState(null),
        [eg, eb] = r.useState(null),
        [eU, eP] = r.useState(!1),
        [eM, ey] = r.useState(!1),
        eG = em?.guilds,
        [ev, eB] = r.useState(es ?? null),
        [ew, eF] = r.useState(e_ ?? null),
        [eV, eH] = r.useState(F.x3),
        ek = r.useMemo(() => (em?.user != null ? new B.A(em.user) : null), [em?.user]),
        ex = (0, g.A)(em?.application ?? null),
        eW = r.useMemo(() => eG?.find((e) => e.id === ev), [eG, ev]),
        [eY, ej] = r.useState(null),
        eK = r.useMemo(() => null == ef && null == eo && (J?.length ?? 0) === 0 && null == S, [ef, J?.length, S, eo]),
        [e$, eQ] = r.useState(null);
    r.useEffect(() => {
        eK && D.Ay.fetchApplication(I).then((e) => eQ(v.Ay.createFromServer(e)));
    }, [I, eK]);
    let eq = r.useMemo(
            () => (null == eY ? null : e$?.integrationTypesConfig?.[eY]?.oauth2InstallParams),
            [e$?.integrationTypesConfig, eY],
        ),
        { requestedScopes: eX, accountScopes: ez } = r.useMemo(() => {
            let e = eK ? eq?.scopes : J,
                t = (0, H.e)(e ?? []),
                n = Y.k$.filter((e) => t.includes(e));
            return { requestedScopes: t, accountScopes: n };
        }, [eq?.scopes, J, eK]),
        eJ = r.useMemo(() => (eK ? u.iu(eq?.permissions ?? 0) : en) ?? F.x3, [eq?.permissions, en, eK]),
        eZ = r.useRef(!1),
        [e0, e1] = r.useState(eN ?? []),
        [e2, e3] = r.useState(null != eN && eN.length > 0);
    (0, o.Ay)(() => {
        let e = w.default.getAnalyticsToken();
        null != e
            ? f.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: w.default.getId() })
            : (0, p.rQ)({ withAnalyticsToken: !0 }).catch(et.tEg);
    }),
        r.useEffect(() => {
            if (eZ.current) return;
            let e = async () => {
                eZ.current = !0;
                try {
                    let { disclosures: e, allAcked: t } = await (0, h.vG)(I);
                    e3(!t), e1(e);
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, k.Vh)(eC, "oauth2_error_failed_disclosures");
                    eb(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    eZ.current = !1;
                }
            };
            if (null == eN) {
                if (!w.default.isAuthenticated()) return void (0, k.Vh)(eC, "oauth2_error_not_authenticated");
                e();
            }
        }, [I, eC, eN, e1, eb, e3, eh]);
    let e6 = r.useCallback(
            async (e) => {
                if (null != eT) {
                    eP(!0), eT(e);
                    return;
                }
                if (!e && !ec) {
                    null != eA && (eA({ application: em?.application, guild: eW }), eS?.());
                    return;
                }
                if (null == eY) return void eb(Error("No integration type was selected."));
                try {
                    eP(!0);
                    let t = await (0, k.Gq)({
                        authorize: e,
                        clientId: I,
                        scopes: eX,
                        responseType: T,
                        redirectUri: S,
                        codeChallenge: N,
                        codeChallengeMethod: L,
                        state: b,
                        nonce: U,
                        integrationType: eY,
                        permissions: u.TF(eJ, eV),
                        guildId: eY === d.b.GUILD_INSTALL && null != ev ? ev : void 0,
                        channelId: eY === d.b.GUILD_INSTALL && null != ew ? ew : void 0,
                    });
                    if ((e && (await (0, h.Yx)(I, e0)), null != eA))
                        eA({ application: em?.application, location: t.location, guild: eW }), eS?.();
                    else if (null != t.location) {
                        let e = V.A.toURLSafe(t.location)?.pathname;
                        V.A.isDiscordUrl(t.location) && e === et.BVt.OAUTH2_AUTHORIZED
                            ? (0, G.pX)(et.BVt.OAUTH2_AUTHORIZED, {
                                  state: { application: em?.application, guild: eW },
                              })
                            : (window.location = t.location);
                    } else eP(!1);
                } catch (t) {
                    let e = t.body;
                    e?.message != null && "" !== e.message ? eb(Error(e.message)) : eb(e),
                        eh("AUTHORIZE_SCOPES"),
                        eP(!1);
                }
            },
            [eT, ec, eA, em?.application, eW, eS, I, eX, T, S, N, L, b, U, eJ, eV, ev, eY, ew, e0],
        ),
        e5 = r.useRef(!1),
        e8 = r.useCallback(async () => {
            if (!w.default.isAuthenticated()) return void (0, k.Vh)(eC, "oauth2_error_not_authenticated");
            if (!eZ.current && !e5.current) {
                e5.current = !0;
                try {
                    let e =
                        null != ef
                            ? ef
                            : await (0, k.qY)({
                                  clientId: I,
                                  scopes: eX,
                                  responseType: T,
                                  redirectUri: S,
                                  codeChallenge: N,
                                  codeChallengeMethod: L,
                                  state: b,
                                  nonce: U,
                                  integrationType: eY ?? void 0,
                              });
                    eL((0, x._)(e)),
                        P === j.l.NONE && e.authorized && !e2 && e6(!0),
                        (0, m.zV)(et.HAw.OAUTH2_AUTHORIZE_VIEWED, { application_id: e.application.id });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, k.Vh)(eC, "oauth2_error_unauthorized");
                    eb(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    e5.current = !1;
                }
            }
        }, [eC, ef, I, eX, T, S, N, L, b, U, eY, P, e6, e2]),
        e4 = r.useMemo(
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
        e7 = r.useRef(null);
    r.useEffect(() => {
        eD !== e7.current &&
            ((e7.current = eD),
            (0, m.zV)(et.HAw.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eD,
                application_id: I,
                integration_type: eY,
                scopes: eX,
                permissions: eJ.toString(),
            }));
    }, [I, eY, eJ, eX, eD]),
        r.useEffect(() => {
            null == eD &&
                (!eK || null != e$) &&
                ep &&
                (null != ef
                    ? (ej(ef.integration_type ?? d.b.GUILD_INSTALL), eh("AUTHORIZE_SCOPES"))
                    : e4.length > 1
                      ? eh("SELECT_INSTALL_TYPE")
                      : (1 === e4.length ? ej(e4[0]) : null != eo ? ej(eo) : ej(d.b.GUILD_INSTALL),
                        eh("AUTHORIZE_SCOPES")));
        }, [ef, e4, e$, eK, eo, eD, ep]),
        r.useEffect(() => {
            if (null == eY || null != em || null != eg) return;
            eY === d.b.USER_INSTALL && (eB(null), eF(null));
            let e = eX.filter((e) => !Y.gX.includes(e));
            0 === eX.length
                ? eb(Error("No scopes were provided."))
                : e.length > 0
                  ? eb(Error(`Invalid scope: ${e[0]}`))
                  : (0, W.F7)(eJ)
                    ? eb(Error("Invalid permission(s) provided."))
                    : e8();
        }, [e2, e8, eX, eJ, eY, em, eg]);
    let e9 = r.useCallback((e) => {
            e && ey(!0);
        }, []),
        te = (0, l.K)(e9);
    if (eg instanceof Error)
        return eO
            ? { body: (0, i.jsx)(Z.gz, { message: eg.message }) }
            : eR
              ? {
                    label: ei.intl.string(ei.t.j2d6Km),
                    header: (0, i.jsx)(O.E, {
                        variant: "text-lg/bold",
                        color: "text-strong",
                        children: ei.intl.string(ei.t.j2d6Km),
                    }),
                    body: (0, i.jsx)(O.E, { variant: "text-md/normal", color: "text-default", children: eg.message }),
                    actions: [{ onClick: eS, text: ei.intl.string(ei.t.cpT0Cq) }],
                    noPadding: !0,
                }
              : {
                    title: ei.intl.string(ei.t.j2d6Km),
                    subtitle: eg.message,
                    actions: [{ onClick: eS, text: ei.intl.string(ei.t.cpT0Cq) }],
                };
    let tt = !1,
        tn = !1,
        ti = !0,
        tr = !0,
        ta = !0,
        ts = !1;
    switch (eD) {
        case null:
            return { label: ei.intl.string(ei.t.ZTNur7), body: (0, i.jsx)(el, {}) };
        case "SELECT_INSTALL_TYPE":
            if (null == e$) return { label: ei.intl.string(ei.t.ZTNur7), body: (0, i.jsx)(el, {}) };
            (t = (0, i.jsx)(ea, {
                application: e$,
                onSelect: (e) => {
                    ej(e), eL(null), eh("AUTHORIZE_SCOPES");
                },
            })),
                (ti = !1),
                (tr = !1),
                (ta = !1),
                (ts = !0);
            break;
        case "AUTHORIZE_SCOPES":
            if (null == em || null == ek || null == eY)
                return { label: ei.intl.string(ei.t.ZTNur7), body: (0, i.jsx)(el, {}) };
            let t_ = null == eg || eg instanceof Error ? {} : eg,
                tl = eG?.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                to = eY === d.b.GUILD_INSTALL && eX.includes(c.F.WEBHOOK_INCOMING),
                tE =
                    to ||
                    (eY === d.b.GUILD_INSTALL && (eX.includes(c.F.BOT) || eX.includes(c.F.APPLICATIONS_COMMANDS)));
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)($.A, { application: em.application, accountScopes: ez }),
                    (0, i.jsx)(Q.A, {
                        application: em.application,
                        accountScopes: ez,
                        requestedScopes: eX,
                        integrationType: eY,
                        errors: t_,
                        isTrustedName: eu || ex,
                    }),
                    (0, i.jsx)("div", { className: er.sL, ref: te }),
                    tE
                        ? (0, i.jsx)(X.A, {
                              error: (t_[c.F.BOT] ?? t_[c.F.APPLICATIONS_COMMANDS] ?? [])[0],
                              selectedGuildId: ev,
                              onGuildChange: eB,
                              guilds: tl ?? [],
                              disabled: "" !== ev && null != ev && !0 === eE,
                          })
                        : null,
                    to
                        ? (0, i.jsx)(ee.A, {
                              error: (t_[c.F.WEBHOOK_INCOMING] ?? [])[0],
                              selectedChannelId: ew,
                              selectedGuildId: ev,
                              onChannelChange: eF,
                          })
                        : null,
                ],
            })),
                eX.includes(c.F.BOT) && !u.aI(eJ, F.x3) && (a = "AUTHORIZE_BOT_PERMISSIONS"),
                e4.length > 1 && (n = "SELECT_INSTALL_TYPE"),
                (tn = (tE && null == eW) || (to && null == ew)),
                (tt = !0);
            break;
        case "AUTHORIZE_BOT_PERMISSIONS":
            if (null == em) return { label: ei.intl.string(ei.t.ZTNur7), body: (0, i.jsx)(el, {}) };
            (t = (0, i.jsx)(q.A, {
                application: em.application,
                permissions: eJ,
                deniedPermissions: eV,
                onPermissionsChange: (e, t) => {
                    eH((n) => (e ? u.TF(n, t) : u.WQ(n, t)));
                },
                guild: eW,
            })),
                (n = "AUTHORIZE_SCOPES"),
                (tt = !0);
    }
    let td = [];
    if (ti && null != em) {
        let e = em?.application.approximate_guild_count ?? em?.bot?.approximate_guild_count;
        s = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(K.A, {
                    application: em.application,
                    scopes: eX,
                    disclosures: e0,
                    redirectUri: em.redirect_uri ?? null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: eI,
                }),
                (0, i.jsx)("div", { className: er.sL, ref: te }),
            ],
        });
    }
    return (
        tr &&
            null != em &&
            null != ek &&
            (E = (0, i.jsx)(z.A, {
                user: ek,
                application: em.application,
                bot: em.bot,
                accountScopes: ez,
                showLogout: ed || !1,
                location: eC,
                scopes: eX,
            })),
        ta &&
            (td.push(
                null != n
                    ? { variant: "secondary", onClick: () => eh(n), text: ei.intl.string(ei.t["13/7kX"]) }
                    : { variant: "secondary", onClick: () => e6(!1), text: ei.intl.string(ei.t["ETE/oC"]) },
            ),
            "SELECT_INSTALL_TYPE" !== eD &&
                td.push(
                    eM
                        ? {
                              onClick: null != a ? () => eh(a) : () => e6(!0),
                              loading: eU,
                              disabled: null == s || tn,
                              text: tn
                                  ? ei.intl.string(ei.t.BwwiSM)
                                  : null != a
                                    ? ei.intl.string(ei.t["3PatSz"])
                                    : ei.intl.string(ei.t["y+/PE9"]),
                          }
                        : { disabled: !0, loading: eU, text: ei.intl.string(ei.t.N22i9F), icon: R.M },
                )),
        {
            header: E,
            body: t,
            actions: td,
            nextStep: a,
            appDetails: s,
            sendAuthorize: e6,
            hasContentBackground: tt,
            noPadding: ts,
        }
    );
}
function eE(e, t) {
    if (null == t.location || (null != e.callback && e.callback(t))) return;
    let { host: n, pathname: r, searchParams: a } = V.A.toURLSafe(t.location) ?? {},
        s = V.A.isDiscordHostname(n ?? null) || window.location.host === n;
    s && r === et.BVt.OAUTH2_AUTHORIZED
        ? (0, T.openModal)((e) => (0, i.jsx)(Z.dR, { guild: t.guild, application: t.application, ...e }))
        : s && r?.startsWith(et.BVt.OAUTH2_ERROR)
          ? (0, T.openModal)((e) => {
                let t = a?.get("error_description") ?? a?.get("error") ?? ei.intl.string(ei.t.mqn873);
                return (
                    Array.isArray(t) && (t = t[0]),
                    (0, i.jsx)(J.f, { ...e, children: (0, i.jsx)(Z.gz, { message: t, onClose: e.onClose }) })
                );
            })
          : window.open(t.location, "_blank")?.focus();
}
function ed(e, t) {
    (0, y._9)() ? P.A.openCreateGuildModal({ onSuccess: (n) => ec({ ...e, guildId: n }, t) }) : ec(e, t);
}
function ec(e, t) {
    (0, T.openModal)((t) => (0, i.jsx)(e_, { ...t, ...e, cancelCompletesFlow: !1, callback: eE.bind(null, e) }), {
        onCloseCallback: t,
    });
}
function eu(e) {
    let { hostname: t = "", host: n, pathname: i, search: r } = V.A.toURLSafe(e) ?? {};
    return null != i &&
        null != r &&
        (V.A.isDiscordHostname(t) || n === window.location.host) &&
        (i.startsWith(`/api${et.Rsh.OAUTH2_AUTHORIZE}`) || i.startsWith(et.BVt.OAUTH2_AUTHORIZE))
        ? (0, H._)(r)
        : null;
}

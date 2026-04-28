n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: () => es,
        OAuth2AuthorizePage: () => e_,
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
    a = n(64700),
    r = n(503698),
    _ = n.n(r),
    s = n(873263),
    l = n(172218),
    o = n(935399),
    E = n(607399),
    d = n(485845),
    c = n(179771),
    u = n(136722),
    I = n(815390),
    T = n(17928),
    A = n(192308),
    S = n(821609),
    N = n(289873),
    O = n(834730),
    R = n(708988),
    f = n(228366),
    C = n(830215),
    p = n(803306),
    D = n(58149),
    L = n(269815),
    m = n(627363),
    h = n(224750),
    g = n(62447),
    U = n(854378),
    b = n(268218),
    P = n(272613),
    M = n(736056),
    G = n(14509),
    y = n(976860),
    v = n(395671),
    B = n(889227),
    w = n(495544),
    F = n(488926),
    V = n(998218),
    H = n(123677),
    k = n(716965),
    W = n(332934),
    Y = n(376092),
    x = n(647053),
    K = n(671523),
    j = n(694214),
    $ = n(404035),
    Q = n(864721),
    q = n(629442),
    X = n(54605),
    z = n(189880),
    Z = n(321987),
    J = n(595244),
    ee = n(618865),
    et = n(652215),
    en = n(613057),
    ei = n(985018),
    ea = n(636663);
let er = (0, b.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("24199"),
            n.e("57036"),
            n.e("88394"),
            n.e("80527"),
            n.e("21909"),
            n.e("31825"),
            n.e("23353"),
            n.e("96123"),
            n.e("7175"),
            n.e("37249"),
            n.e("14138"),
            n.e("8971"),
            n.e("88017"),
            n.e("77404"),
            n.e("1040"),
            n.e("64615"),
            n.e("17239"),
            n.e("7454"),
            n.e("64492"),
            n.e("20861"),
            n.e("36682"),
            n.e("45723"),
            n.e("56871"),
            n.e("69601"),
            n.e("63191"),
            n.e("51444"),
            n.e("62290"),
            n.e("80973"),
            n.e("58405"),
        ]).then(n.bind(n, 991054)),
    webpackId: 991054,
});
function e_() {
    let e = (0, s.zy)(),
        t = a.useMemo(() => (0, H._)(e.search), [e.search]);
    (0, L.A)();
    let r = !e.search.includes("response_type"),
        [_, l] = a.useState(!1),
        o = a.useRef(!1),
        [d, c] = a.useState(null),
        u = !E.Fr && !_ && (r || !w.default.isAuthenticated());
    if (
        (a.useEffect(() => {
            if (E.Ct && r) {
                let t = new URL("discord://action/oauth2/authorize");
                (t.search = e.search), window.open(t.toString(), "_self");
            } else
                E.Fr ||
                    (!r && w.default.isAuthenticated()) ||
                    o.current ||
                    ((o.current = !0),
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((t) => {
                            let { default: n } = t;
                            if (r)
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
        }, [e.search, r]),
        u && !1 !== d)
    ) {
        let e;
        return (
            (e =
                !0 === d
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(U.hE, { children: ei.intl.string(ei.t.csrAMJ) }),
                              (0, i.jsx)(U.tK, {
                                  children: r ? ei.intl.string(ei.t["m1+IBn"]) : ei.intl.string(ei.t.kRzrSO),
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
                              (0, i.jsx)(U.hE, { children: ei.intl.string(ei.t["Z+hCVU"]) }),
                              (0, i.jsx)(N.y, {}),
                          ],
                      })),
            (0, i.jsx)(Z.$, { removeChildWrapper: !0, children: (0, i.jsx)("div", { className: ea.ah, children: e }) })
        );
    }
    return (0, i.jsx)(Z.$, {
        removeChildWrapper: !0,
        children: (0, i.jsx)(es, {
            transitionState: I.i.ENTERED,
            ...t,
            showLogout: !0,
            isExternalStandaloneOAuthPage: !0,
            hideHeader: !0,
        }),
    });
}
function es(e) {
    let {
            label: t,
            title: n,
            subtitle: a,
            header: r,
            body: s,
            actions: l,
            nextStep: o,
            appDetails: E,
            hasContentBackground: d,
            noPadding: c,
            modalSize: u,
        } = eo({ ...e }),
        I =
            null != r || null != s || null != E
                ? (0, i.jsxs)("div", {
                      className: ea.Gq,
                      children: [
                          r,
                          (0, i.jsx)("div", {
                              className: ea.FG,
                              children: (0, i.jsxs)("div", {
                                  className: _()(ea.Qs, d ? ea.cw : null, c ? ea.pN : null),
                                  children: [s, null == o ? E : null],
                              }),
                          }),
                      ],
                  })
                : null;
    return (0, i.jsx)(Z.f, {
        ...e,
        onClose: () => Promise.resolve(e.onClose?.()),
        size: u,
        actions: l,
        title: n,
        subtitle: a,
        "aria-label": t,
        children: I,
    });
}
function el() {
    return (0, i.jsx)("div", { className: ea.g4, children: (0, i.jsx)(N.y, { className: ea.u1 }) });
}
function eo(e) {
    let t,
        n,
        r,
        _,
        E,
        {
            clientId: I,
            responseType: A,
            redirectUri: S,
            codeChallenge: N,
            codeChallengeMethod: L,
            state: U,
            nonce: b,
            prompt: P,
            authorizations: G,
            scopes: Z,
            permissions: en,
            guildId: e_,
            channelId: es,
            integrationType: eo,
            disableGuildSelect: eE = !1,
            showLogout: ed = !1,
            cancelCompletesFlow: ec = !0,
            isTrustedName: eu = !1,
            isEmbeddedFlow: eI = !1,
            callback: eT,
            callbackWithoutPost: eA,
            onClose: eS,
            disclosures: eN,
            isExternalStandaloneOAuthPage: eO = !1,
            isTwoWayLinkDiscordConsent: eR = !1,
        } = e,
        ef = null != eo ? G?.get(eo) : void 0,
        eC = (0, s.zy)(),
        ep = (0, T.bG)([M.A], () => M.A.hasLoadedExperiments);
    a.useEffect(() => {
        w.default.isAuthenticated() && !ep && C.A.getExperiments();
    }, [ep]);
    let [eD, eL] = a.useState(null),
        [em, eh] = a.useState(null),
        [eg, eU] = a.useState(null),
        [eb, eP] = a.useState(!1),
        [eM, eG] = a.useState(!1),
        ey = eD?.guilds,
        [ev, eB] = a.useState(e_ ?? null),
        [ew, eF] = a.useState(es ?? null),
        [eV, eH] = a.useState(F.x3),
        ek = a.useMemo(() => (eD?.user != null ? new B.A(eD.user) : null), [eD?.user]),
        eW = (0, g.A)(eD?.application ?? null),
        eY = a.useMemo(() => ey?.find((e) => e.id === ev), [ey, ev]),
        [ex, eK] = a.useState(null),
        ej = a.useMemo(() => null == ef && null == eo && (Z?.length ?? 0) === 0 && null == S, [ef, Z?.length, S, eo]),
        [e$, eQ] = a.useState(null);
    a.useEffect(() => {
        ej && m.Ay.fetchApplication(I).then((e) => eQ(v.Ay.createFromServer(e)));
    }, [I, ej]);
    let eq = a.useMemo(
            () => (null == ex ? null : e$?.integrationTypesConfig?.[ex]?.oauth2InstallParams),
            [e$?.integrationTypesConfig, ex],
        ),
        { requestedScopes: eX, accountScopes: ez } = a.useMemo(() => {
            let e = ej ? eq?.scopes : Z,
                t = (0, H.e)(e ?? []),
                n = x.k$.filter((e) => t.includes(e));
            return { requestedScopes: t, accountScopes: n };
        }, [eq?.scopes, Z, ej]),
        eZ = a.useMemo(() => (ej ? u.iu(eq?.permissions ?? 0) : en) ?? F.x3, [eq?.permissions, en, ej]),
        eJ = a.useRef(!1),
        [e0, e1] = a.useState(eN ?? []),
        [e2, e3] = a.useState(null != eN && eN.length > 0);
    (0, o.Ay)(() => {
        let e = w.default.getAnalyticsToken();
        null != e
            ? f.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: w.default.getId() })
            : (0, p.rQ)({ withAnalyticsToken: !0 }).catch(et.tEg);
    }),
        a.useEffect(() => {
            if (eJ.current) return;
            let e = async () => {
                eJ.current = !0;
                try {
                    let { disclosures: e, allAcked: t } = await (0, h.vG)(I);
                    e3(!t), e1(e);
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, k.Vh)(eC, "oauth2_error_failed_disclosures");
                    eU(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    eJ.current = !1;
                }
            };
            if (null == eN) {
                if (!w.default.isAuthenticated()) return void (0, k.Vh)(eC, "oauth2_error_not_authenticated");
                e();
            }
        }, [I, eC, eN, e1, eU, e3, eh]);
    let e6 = a.useCallback(
            async (e) => {
                if (null != eA) {
                    eP(!0), eA(e);
                    return;
                }
                if (!e && !ec) {
                    null != eT && (eT({ application: eD?.application, guild: eY }), eS?.());
                    return;
                }
                if (null == ex) return void eU(Error("No integration type was selected."));
                try {
                    eP(!0);
                    let t = await (0, k.Gq)({
                        authorize: e,
                        clientId: I,
                        scopes: eX,
                        responseType: A,
                        redirectUri: S,
                        codeChallenge: N,
                        codeChallengeMethod: L,
                        state: U,
                        nonce: b,
                        integrationType: ex,
                        permissions: u.TF(eZ, eV),
                        guildId: ex === d.b.GUILD_INSTALL && null != ev ? ev : void 0,
                        channelId: ex === d.b.GUILD_INSTALL && null != ew ? ew : void 0,
                    });
                    if ((e && (await (0, h.Yx)(I, e0)), null != eT))
                        eT({ application: eD?.application, location: t.location, guild: eY }), eS?.();
                    else if (null != t.location) {
                        let e = V.A.toURLSafe(t.location)?.pathname;
                        V.A.isDiscordUrl(t.location) && e === et.BVt.OAUTH2_AUTHORIZED
                            ? (0, y.pX)(et.BVt.OAUTH2_AUTHORIZED, {
                                  state: { application: eD?.application, guild: eY },
                              })
                            : (window.location = t.location);
                    } else eP(!1);
                } catch (t) {
                    let e = t.body;
                    e?.message != null && "" !== e.message ? eU(Error(e.message)) : eU(e),
                        eh("AUTHORIZE_SCOPES"),
                        eP(!1);
                }
            },
            [eA, ec, eT, eD?.application, eY, eS, I, eX, A, S, N, L, U, b, eZ, eV, ev, ex, ew, e0],
        ),
        e5 = a.useRef(!1),
        e4 = a.useCallback(async () => {
            if (!w.default.isAuthenticated()) return void (0, k.Vh)(eC, "oauth2_error_not_authenticated");
            if (!eJ.current && !e5.current) {
                e5.current = !0;
                try {
                    let e =
                        null != ef
                            ? ef
                            : await (0, k.qY)({
                                  clientId: I,
                                  scopes: eX,
                                  responseType: A,
                                  redirectUri: S,
                                  codeChallenge: N,
                                  codeChallengeMethod: L,
                                  state: U,
                                  nonce: b,
                                  integrationType: ex ?? void 0,
                              });
                    eL((0, W._)(e)),
                        P === K.l.NONE && e.authorized && !e2 && e6(!0),
                        (0, D.zV)(et.HAw.OAUTH2_AUTHORIZE_VIEWED, { application_id: e.application.id });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, k.Vh)(eC, "oauth2_error_unauthorized");
                    eU(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    e5.current = !1;
                }
            }
        }, [eC, ef, I, eX, A, S, N, L, U, b, ex, P, e6, e2]),
        e8 = a.useMemo(
            () =>
                null != e$ && ej
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
            [e$, ej],
        ),
        e7 = a.useRef(null);
    a.useEffect(() => {
        em !== e7.current &&
            ((e7.current = em),
            (0, D.zV)(et.HAw.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: em,
                application_id: I,
                integration_type: ex,
                scopes: eX,
                permissions: eZ.toString(),
            }));
    }, [I, ex, eZ, eX, em]),
        a.useEffect(() => {
            null == em &&
                (!ej || null != e$) &&
                ep &&
                (null != ef
                    ? (eK(ef.integration_type ?? d.b.GUILD_INSTALL), eh("AUTHORIZE_SCOPES"))
                    : e8.length > 1
                      ? eh("SELECT_INSTALL_TYPE")
                      : (1 === e8.length ? eK(e8[0]) : null != eo ? eK(eo) : eK(d.b.GUILD_INSTALL),
                        eh("AUTHORIZE_SCOPES")));
        }, [ef, e8, e$, ej, eo, em, ep]),
        a.useEffect(() => {
            if (null == ex || null != eD || null != eg) return;
            ex === d.b.USER_INSTALL && (eB(null), eF(null));
            let e = eX.filter((e) => !x.gX.includes(e));
            0 === eX.length
                ? eU(Error("No scopes were provided."))
                : e.length > 0
                  ? eU(Error(`Invalid scope: ${e[0]}`))
                  : (0, Y.F7)(eZ)
                    ? eU(Error("Invalid permission(s) provided."))
                    : e4();
        }, [e2, e4, eX, eZ, ex, eD, eg]);
    let e9 = a.useCallback((e) => {
            e && eG(!0);
        }, []),
        te = (0, l.K)(e9);
    if (eg instanceof Error)
        return eO
            ? { body: (0, i.jsx)(J.gz, { message: eg.message }) }
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
        ta = !0,
        tr = !0,
        t_ = !1;
    switch (em) {
        case null:
            return { label: ei.intl.string(ei.t.ZTNur7), body: (0, i.jsx)(el, {}) };
        case "SELECT_INSTALL_TYPE":
            if (null == e$) return { label: ei.intl.string(ei.t.ZTNur7), body: (0, i.jsx)(el, {}) };
            (t = (0, i.jsx)(er, {
                application: e$,
                onSelect: (e) => {
                    eK(e), eL(null), eh("AUTHORIZE_SCOPES");
                },
            })),
                (ti = !1),
                (ta = !1),
                (tr = !1),
                (t_ = !0);
            break;
        case "AUTHORIZE_SCOPES":
            if (null == eD || null == ek || null == ex)
                return { label: ei.intl.string(ei.t.ZTNur7), body: (0, i.jsx)(el, {}) };
            let ts = null == eg || eg instanceof Error ? {} : eg,
                tl = ey?.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                to = ex === d.b.GUILD_INSTALL && eX.includes(c.F.WEBHOOK_INCOMING),
                tE =
                    to ||
                    (ex === d.b.GUILD_INSTALL && (eX.includes(c.F.BOT) || eX.includes(c.F.APPLICATIONS_COMMANDS)));
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)($.A, { application: eD.application, accountScopes: ez }),
                    (0, i.jsx)(Q.A, {
                        application: eD.application,
                        accountScopes: ez,
                        requestedScopes: eX,
                        integrationType: ex,
                        errors: ts,
                        isTrustedName: eu || eW,
                    }),
                    (0, i.jsx)("div", { className: ea.sL, ref: te }),
                    tE
                        ? (0, i.jsx)(X.A, {
                              error: (ts[c.F.BOT] ?? ts[c.F.APPLICATIONS_COMMANDS] ?? [])[0],
                              selectedGuildId: ev,
                              onGuildChange: eB,
                              guilds: tl ?? [],
                              disabled: "" !== ev && null != ev && !0 === eE,
                          })
                        : null,
                    to
                        ? (0, i.jsx)(ee.A, {
                              error: (ts[c.F.WEBHOOK_INCOMING] ?? [])[0],
                              selectedChannelId: ew,
                              selectedGuildId: ev,
                              onChannelChange: eF,
                          })
                        : null,
                ],
            })),
                eX.includes(c.F.BOT) && !u.aI(eZ, F.x3) && (r = "AUTHORIZE_BOT_PERMISSIONS"),
                e8.length > 1 && (n = "SELECT_INSTALL_TYPE"),
                (tn = (tE && null == eY) || (to && null == ew)),
                (tt = !0);
            break;
        case "AUTHORIZE_BOT_PERMISSIONS":
            if (null == eD) return { label: ei.intl.string(ei.t.ZTNur7), body: (0, i.jsx)(el, {}) };
            (t = (0, i.jsx)(q.A, {
                application: eD.application,
                permissions: eZ,
                deniedPermissions: eV,
                onPermissionsChange: (e, t) => {
                    eH((n) => (e ? u.TF(n, t) : u.WQ(n, t)));
                },
                guild: eY,
            })),
                (n = "AUTHORIZE_SCOPES"),
                (tt = !0);
    }
    let td = [];
    if (ti && null != eD) {
        let e = eD?.application.approximate_guild_count ?? eD?.bot?.approximate_guild_count;
        _ = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(j.A, {
                    application: eD.application,
                    scopes: eX,
                    disclosures: e0,
                    redirectUri: eD.redirect_uri ?? null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: eI,
                }),
                (0, i.jsx)("div", { className: ea.sL, ref: te }),
            ],
        });
    }
    return (
        ta &&
            null != eD &&
            null != ek &&
            (E = (0, i.jsx)(z.A, {
                user: ek,
                application: eD.application,
                bot: eD.bot,
                accountScopes: ez,
                showLogout: ed || !1,
                location: eC,
                scopes: eX,
            })),
        tr &&
            (td.push(
                null != n
                    ? { variant: "secondary", onClick: () => eh(n), text: ei.intl.string(ei.t["13/7kX"]) }
                    : { variant: "secondary", onClick: () => e6(!1), text: ei.intl.string(ei.t["ETE/oC"]) },
            ),
            "SELECT_INSTALL_TYPE" !== em &&
                td.push(
                    eM
                        ? {
                              onClick: null != r ? () => eh(r) : () => e6(!0),
                              loading: eb,
                              disabled: null == _ || tn,
                              text: tn
                                  ? ei.intl.string(ei.t.BwwiSM)
                                  : null != r
                                    ? ei.intl.string(ei.t["3PatSz"])
                                    : ei.intl.string(ei.t["y+/PE9"]),
                          }
                        : { disabled: !0, loading: eb, text: ei.intl.string(ei.t.N22i9F), icon: R.M },
                )),
        {
            header: E,
            body: t,
            actions: td,
            nextStep: r,
            appDetails: _,
            sendAuthorize: e6,
            hasContentBackground: tt,
            noPadding: t_,
        }
    );
}
function eE(e, t) {
    if (null == t.location || (null != e.callback && e.callback(t))) return;
    let { host: n, pathname: a, searchParams: r } = V.A.toURLSafe(t.location) ?? {},
        _ = V.A.isDiscordHostname(n ?? null) || window.location.host === n;
    _ && a === et.BVt.OAUTH2_AUTHORIZED
        ? (0, A.openModal)((e) => (0, i.jsx)(J.dR, { guild: t.guild, application: t.application, ...e }))
        : _ && a?.startsWith(et.BVt.OAUTH2_ERROR)
          ? (0, A.openModal)((e) => {
                let t = r?.get("error_description") ?? r?.get("error") ?? ei.intl.string(ei.t.mqn873);
                return (
                    Array.isArray(t) && (t = t[0]),
                    (0, i.jsx)(Z.f, { ...e, children: (0, i.jsx)(J.gz, { message: t, onClose: e.onClose }) })
                );
            })
          : window.open(t.location, "_blank")?.focus();
}
function ed(e, t) {
    (0, G._9)() ? P.A.openCreateGuildModal({ onSuccess: (n) => ec({ ...e, guildId: n }, t) }) : ec(e, t);
}
function ec(e, t) {
    (0, A.openModal)((t) => (0, i.jsx)(es, { ...t, ...e, cancelCompletesFlow: !1, callback: eE.bind(null, e) }), {
        onCloseCallback: t,
    });
}
function eu(e) {
    let { hostname: t = "", host: n, pathname: i, search: a } = V.A.toURLSafe(e) ?? {};
    return null != i &&
        null != a &&
        (V.A.isDiscordHostname(t) || n === window.location.host) &&
        (i.startsWith(`/api${et.Rsh.OAUTH2_AUTHORIZE}`) || i.startsWith(et.BVt.OAUTH2_AUTHORIZE))
        ? (0, H._)(a)
        : null;
}

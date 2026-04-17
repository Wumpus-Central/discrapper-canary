"use strict";
n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: () => ei,
        OAuth2AuthorizePage: () => er,
        getOAuth2AuthorizeProps: () => ec,
        openOAuth2Modal: () => eu,
        openOAuth2ModalWithCreateGuildModal: () => el,
        useOAuth2AuthorizeForm: () => ea,
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
    p = n(158954),
    h = n(311907),
    m = n(192308),
    E = n(732955),
    g = n(397927),
    A = n(73153),
    I = n(830215),
    T = n(803306),
    S = n(58149),
    y = n(269815),
    v = n(627363),
    N = n(224750),
    C = n(62447),
    R = n(854378),
    O = n(272613),
    b = n(49463),
    D = n(14509),
    L = n(976860),
    w = n(611010),
    M = n(427157),
    P = n(961350),
    x = n(488926),
    k = n(998218),
    U = n(123677),
    G = n(716965),
    F = n(332934),
    V = n(376092),
    B = n(647053),
    H = n(671523),
    j = n(774363),
    Y = n(404035),
    W = n(864721),
    K = n(629442),
    $ = n(54605),
    z = n(189880),
    q = n(991054),
    Z = n(321987),
    X = n(595244),
    Q = n(618865),
    J = n(652215),
    ee = n(613057),
    et = n(985018),
    en = n(636663);
function er() {
    let e = (0, o.zy)(),
        t = i.useMemo(() => (0, U._)(e.search), [e.search]);
    (0, y.A)();
    let s = !e.search.includes("response_type"),
        [a, l] = i.useState(!1),
        u = i.useRef(!1),
        [d, _] = i.useState(null),
        f = !c.Fr && !a && (s || !P.default.isAuthenticated());
    if (
        (i.useEffect(() => {
            if (c.Ct && s) {
                let t = new URL("discord://action/oauth2/authorize");
                (t.search = e.search), window.open(t.toString(), "_self");
            } else
                c.Fr ||
                    (!s && P.default.isAuthenticated()) ||
                    u.current ||
                    ((u.current = !0),
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((t) => {
                            let { default: n } = t;
                            if (s)
                                n.request(J.e$_.DEEP_LINK, { type: ee.XK.OAUTH2, params: { search: e.search } })
                                    .then((e) => {
                                        _(e ?? !1);
                                    })
                                    .catch(() => _(!1))
                                    .then(() => n.disconnect());
                            else {
                                _(!0);
                                let t = new URLSearchParams(e.search);
                                n.request(J.e$_.AUTHORIZE, {
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
                              (0, r.jsx)(R.hE, { children: et.intl.string(et.t.csrAMJ) }),
                              (0, r.jsx)(R.tK, {
                                  children: s ? et.intl.string(et.t["m1+IBn"]) : et.intl.string(et.t.kRzrSO),
                              }),
                              (0, r.jsx)(E.$nd, {
                                  onClick: () => l(!0),
                                  variant: "primary",
                                  text: et.intl.string(et.t.fIv16B),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(R.hE, { children: et.intl.string(et.t["Z+hCVU"]) }),
                              (0, r.jsx)(g.y$y, {}),
                          ],
                      })),
            (0, r.jsx)(Z.$, { removeChildWrapper: !0, children: (0, r.jsx)("div", { className: en.ah, children: e }) })
        );
    }
    return (0, r.jsx)(Z.$, {
        removeChildWrapper: !0,
        children: (0, r.jsx)(ei, {
            transitionState: p.ip4.ENTERED,
            ...t,
            showLogout: !0,
            isExternalStandaloneOAuthPage: !0,
            hideHeader: !0,
        }),
    });
}
function ei(e) {
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
        } = ea({ ...e }),
        p =
            null != s || null != o || null != c
                ? (0, r.jsxs)("div", {
                      className: en.Gq,
                      children: [
                          s,
                          (0, r.jsx)("div", {
                              className: en.FG,
                              children: (0, r.jsxs)("div", {
                                  className: a()(en.Qs, d ? en.cw : null, _ ? en.pN : null),
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
function es() {
    return (0, r.jsx)("div", { className: en.g4, children: (0, r.jsx)(g.y$y, { className: en.u1 }) });
}
function ea(e) {
    let t,
        n,
        s,
        a,
        c,
        {
            clientId: p,
            responseType: m,
            redirectUri: E,
            codeChallenge: y,
            codeChallengeMethod: R,
            state: O,
            nonce: D,
            prompt: Z,
            authorizations: ee,
            scopes: er,
            permissions: ei,
            guildId: ea,
            channelId: eo,
            integrationType: el,
            disableGuildSelect: eu = !1,
            showLogout: ec = !1,
            cancelCompletesFlow: ed = !0,
            isTrustedName: e_ = !1,
            isEmbeddedFlow: ef = !1,
            callback: ep,
            callbackWithoutPost: eh,
            onClose: em,
            disclosures: eE,
            isExternalStandaloneOAuthPage: eg = !1,
            isTwoWayLinkDiscordConsent: eA = !1,
        } = e,
        eI = null != el ? ee?.get(el) : void 0,
        eT = (0, o.zy)(),
        eS = (0, h.bG)([b.A], () => b.A.hasLoadedExperiments);
    i.useEffect(() => {
        P.default.isAuthenticated() && !eS && I.A.getExperiments();
    }, [eS]);
    let [ey, ev] = i.useState(null),
        [eN, eC] = i.useState(null),
        [eR, eO] = i.useState(null),
        [eb, eD] = i.useState(!1),
        [eL, ew] = i.useState(!1),
        eM = ey?.guilds,
        [eP, ex] = i.useState(ea ?? null),
        [ek, eU] = i.useState(eo ?? null),
        [eG, eF] = i.useState(x.x3),
        eV = i.useMemo(() => (ey?.user != null ? new M.A(ey.user) : null), [ey?.user]),
        eB = (0, C.A)(ey?.application ?? null),
        eH = i.useMemo(() => eM?.find((e) => e.id === eP), [eM, eP]),
        [ej, eY] = i.useState(null),
        eW = i.useMemo(() => null == eI && null == el && (er?.length ?? 0) === 0 && null == E, [eI, er?.length, E, el]),
        [eK, e$] = i.useState(null);
    i.useEffect(() => {
        eW && v.Ay.fetchApplication(p).then((e) => e$(w.Ay.createFromServer(e)));
    }, [p, eW]);
    let ez = i.useMemo(
            () => (null == ej ? null : eK?.integrationTypesConfig?.[ej]?.oauth2InstallParams),
            [eK?.integrationTypesConfig, ej],
        ),
        { requestedScopes: eq, accountScopes: eZ } = i.useMemo(() => {
            let e = eW ? ez?.scopes : er,
                t = (0, U.e)(e ?? []),
                n = B.k$.filter((e) => t.includes(e));
            return { requestedScopes: t, accountScopes: n };
        }, [ez?.scopes, er, eW]),
        eX = i.useMemo(() => (eW ? f.iu(ez?.permissions ?? 0) : ei) ?? x.x3, [ez?.permissions, ei, eW]),
        eQ = i.useRef(!1),
        [eJ, e0] = i.useState(eE ?? []),
        [e1, e2] = i.useState(null != eE && eE.length > 0);
    (0, u.Ay)(() => {
        let e = P.default.getAnalyticsToken();
        null != e
            ? A.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: P.default.getId() })
            : (0, T.rQ)({ withAnalyticsToken: !0 }).catch(J.tEg);
    }),
        i.useEffect(() => {
            if (eQ.current) return;
            let e = async () => {
                eQ.current = !0;
                try {
                    let { disclosures: e, allAcked: t } = await (0, N.vG)(p);
                    e2(!t), e0(e);
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, G.Vh)(eT, "oauth2_error_failed_disclosures");
                    eO(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    eQ.current = !1;
                }
            };
            if (null == eE) {
                if (!P.default.isAuthenticated()) return void (0, G.Vh)(eT, "oauth2_error_not_authenticated");
                e();
            }
        }, [p, eT, eE, e0, eO, e2, eC]);
    let e3 = i.useCallback(
            async (e) => {
                if (null != eh) {
                    eD(!0), eh(e);
                    return;
                }
                if (!e && !ed) {
                    null != ep && (ep({ application: ey?.application, guild: eH }), em?.());
                    return;
                }
                if (null == ej) return void eO(Error("No integration type was selected."));
                try {
                    eD(!0);
                    let t = await (0, G.Gq)({
                        authorize: e,
                        clientId: p,
                        scopes: eq,
                        responseType: m,
                        redirectUri: E,
                        codeChallenge: y,
                        codeChallengeMethod: R,
                        state: O,
                        nonce: D,
                        integrationType: ej,
                        permissions: f.TF(eX, eG),
                        guildId: ej === d.b.GUILD_INSTALL && null != eP ? eP : void 0,
                        channelId: ej === d.b.GUILD_INSTALL && null != ek ? ek : void 0,
                    });
                    if ((e && (await (0, N.Yx)(p, eJ)), null != ep))
                        ep({ application: ey?.application, location: t.location, guild: eH }), em?.();
                    else if (null != t.location) {
                        let e = k.A.toURLSafe(t.location)?.pathname;
                        k.A.isDiscordUrl(t.location) && e === J.BVt.OAUTH2_AUTHORIZED
                            ? (0, L.pX)(J.BVt.OAUTH2_AUTHORIZED, { state: { application: ey?.application, guild: eH } })
                            : (window.location = t.location);
                    } else eD(!1);
                } catch (t) {
                    let e = t.body;
                    e?.message != null && "" !== e.message ? eO(Error(e.message)) : eO(e),
                        eC("AUTHORIZE_SCOPES"),
                        eD(!1);
                }
            },
            [eh, ed, ep, ey?.application, eH, em, p, eq, m, E, y, R, O, D, eX, eG, eP, ej, ek, eJ],
        ),
        e6 = i.useRef(!1),
        e4 = i.useCallback(async () => {
            if (!P.default.isAuthenticated()) return void (0, G.Vh)(eT, "oauth2_error_not_authenticated");
            if (!eQ.current && !e6.current) {
                e6.current = !0;
                try {
                    let e =
                        null != eI
                            ? eI
                            : await (0, G.qY)({
                                  clientId: p,
                                  scopes: eq,
                                  responseType: m,
                                  redirectUri: E,
                                  codeChallenge: y,
                                  codeChallengeMethod: R,
                                  state: O,
                                  nonce: D,
                                  integrationType: ej ?? void 0,
                              });
                    ev((0, F._)(e)),
                        Z === H.l.NONE && e.authorized && !e1 && e3(!0),
                        (0, S.zV)(J.HAw.OAUTH2_AUTHORIZE_VIEWED, { application_id: e.application.id });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, G.Vh)(eT, "oauth2_error_unauthorized");
                    eO(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    e6.current = !1;
                }
            }
        }, [eT, eI, p, eq, m, E, y, R, O, D, ej, Z, e3, e1]),
        e5 = i.useMemo(
            () =>
                null != eK && eW
                    ? Object.entries(eK.integrationTypesConfig ?? {})
                          .filter((e) => {
                              let [t, n] = e;
                              return null != n.oauth2InstallParams;
                          })
                          .map((e) => {
                              let [t, n] = e;
                              return Number(t);
                          })
                    : [],
            [eK, eW],
        ),
        e7 = i.useRef(null);
    i.useEffect(() => {
        eN !== e7.current &&
            ((e7.current = eN),
            (0, S.zV)(J.HAw.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eN,
                application_id: p,
                integration_type: ej,
                scopes: eq,
                permissions: eX.toString(),
            }));
    }, [p, ej, eX, eq, eN]),
        i.useEffect(() => {
            null == eN &&
                (!eW || null != eK) &&
                eS &&
                (null != eI
                    ? (eY(eI.integration_type ?? d.b.GUILD_INSTALL), eC("AUTHORIZE_SCOPES"))
                    : e5.length > 1
                      ? eC("SELECT_INSTALL_TYPE")
                      : (1 === e5.length ? eY(e5[0]) : null != el ? eY(el) : eY(d.b.GUILD_INSTALL),
                        eC("AUTHORIZE_SCOPES")));
        }, [eI, e5, eK, eW, el, eN, eS]),
        i.useEffect(() => {
            if (null == ej || null != ey || null != eR) return;
            ej === d.b.USER_INSTALL && (ex(null), eU(null));
            let e = eq.filter((e) => !B.gX.includes(e));
            0 === eq.length
                ? eO(Error("No scopes were provided."))
                : e.length > 0
                  ? eO(Error(`Invalid scope: ${e[0]}`))
                  : (0, V.F7)(eX)
                    ? eO(Error("Invalid permission(s) provided."))
                    : e4();
        }, [e1, e4, eq, eX, ej, ey, eR]);
    let e8 = i.useCallback((e) => {
            e && ew(!0);
        }, []),
        e9 = (0, l.K)(e8);
    if (eR instanceof Error)
        return eg
            ? { body: (0, r.jsx)(X.gz, { message: eR.message }) }
            : eA
              ? {
                    label: et.intl.string(et.t.j2d6Km),
                    header: (0, r.jsx)(g.Text, {
                        variant: "text-lg/bold",
                        color: "text-strong",
                        children: et.intl.string(et.t.j2d6Km),
                    }),
                    body: (0, r.jsx)(g.Text, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: eR.message,
                    }),
                    actions: [{ onClick: em, text: et.intl.string(et.t.cpT0Cq) }],
                    noPadding: !0,
                }
              : {
                    title: et.intl.string(et.t.j2d6Km),
                    subtitle: eR.message,
                    actions: [{ onClick: em, text: et.intl.string(et.t.cpT0Cq) }],
                };
    let te = (e) => {
            eY(e), ev(null), eC("AUTHORIZE_SCOPES");
        },
        tt = (e, t) => {
            eF((n) => (e ? f.TF(n, t) : f.WQ(n, t)));
        },
        tn = !1,
        tr = !1,
        ti = !0,
        ts = !0,
        ta = !0,
        to = !1;
    switch (eN) {
        case null:
            return { label: et.intl.string(et.t.ZTNur7), body: (0, r.jsx)(es, {}) };
        case "SELECT_INSTALL_TYPE":
            if (null == eK) return { label: et.intl.string(et.t.ZTNur7), body: (0, r.jsx)(es, {}) };
            (t = (0, r.jsx)(q.A, { application: eK, onSelect: te })), (ti = !1), (ts = !1), (ta = !1), (to = !0);
            break;
        case "AUTHORIZE_SCOPES":
            if (null == ey || null == eV || null == ej)
                return { label: et.intl.string(et.t.ZTNur7), body: (0, r.jsx)(es, {}) };
            let tl = null == eR || eR instanceof Error ? {} : eR,
                tu = eM?.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tc = ej === d.b.GUILD_INSTALL && eq.includes(_.F.WEBHOOK_INCOMING),
                td =
                    tc ||
                    (ej === d.b.GUILD_INSTALL && (eq.includes(_.F.BOT) || eq.includes(_.F.APPLICATIONS_COMMANDS)));
            (t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(Y.A, { application: ey.application, accountScopes: eZ }),
                    (0, r.jsx)(W.A, {
                        application: ey.application,
                        accountScopes: eZ,
                        requestedScopes: eq,
                        integrationType: ej,
                        errors: tl,
                        isTrustedName: e_ || eB,
                    }),
                    (0, r.jsx)("div", { className: en.sL, ref: e9 }),
                    td
                        ? (0, r.jsx)($.A, {
                              error: (tl[_.F.BOT] ?? tl[_.F.APPLICATIONS_COMMANDS] ?? [])[0],
                              selectedGuildId: eP,
                              onGuildChange: ex,
                              guilds: tu ?? [],
                              disabled: "" !== eP && null != eP && !0 === eu,
                          })
                        : null,
                    tc
                        ? (0, r.jsx)(Q.A, {
                              error: (tl[_.F.WEBHOOK_INCOMING] ?? [])[0],
                              selectedChannelId: ek,
                              selectedGuildId: eP,
                              onChannelChange: eU,
                          })
                        : null,
                ],
            })),
                eq.includes(_.F.BOT) && !f.aI(eX, x.x3) && (s = "AUTHORIZE_BOT_PERMISSIONS"),
                e5.length > 1 && (n = "SELECT_INSTALL_TYPE"),
                (tr = (td && null == eH) || (tc && null == ek)),
                (tn = !0);
            break;
        case "AUTHORIZE_BOT_PERMISSIONS":
            if (null == ey) return { label: et.intl.string(et.t.ZTNur7), body: (0, r.jsx)(es, {}) };
            (t = (0, r.jsx)(K.A, {
                application: ey.application,
                permissions: eX,
                deniedPermissions: eG,
                onPermissionsChange: tt,
                guild: eH,
            })),
                (n = "AUTHORIZE_SCOPES"),
                (tn = !0);
    }
    let t_ = [];
    if (ti && null != ey) {
        let e = ey?.application.approximate_guild_count ?? ey?.bot?.approximate_guild_count;
        a = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(j.A, {
                    application: ey.application,
                    scopes: eq,
                    disclosures: eJ,
                    redirectUri: ey.redirect_uri ?? null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: ef,
                }),
                (0, r.jsx)("div", { className: en.sL, ref: e9 }),
            ],
        });
    }
    return (
        ts &&
            null != ey &&
            null != eV &&
            (c = (0, r.jsx)(z.A, {
                user: eV,
                application: ey.application,
                bot: ey.bot,
                accountScopes: eZ,
                showLogout: ec || !1,
                location: eT,
                scopes: eq,
            })),
        ta &&
            (t_.push(
                null != n
                    ? { variant: "secondary", onClick: () => eC(n), text: et.intl.string(et.t["13/7kX"]) }
                    : { variant: "secondary", onClick: () => e3(!1), text: et.intl.string(et.t["ETE/oC"]) },
            ),
            "SELECT_INSTALL_TYPE" !== eN &&
                t_.push(
                    eL
                        ? {
                              onClick: null != s ? () => eC(s) : () => e3(!0),
                              loading: eb,
                              disabled: null == a || tr,
                              text: tr
                                  ? et.intl.string(et.t.BwwiSM)
                                  : null != s
                                    ? et.intl.string(et.t["3PatSz"])
                                    : et.intl.string(et.t["y+/PE9"]),
                          }
                        : { disabled: !0, loading: eb, text: et.intl.string(et.t.N22i9F), icon: g.MFz },
                )),
        {
            header: c,
            body: t,
            actions: t_,
            nextStep: s,
            appDetails: a,
            sendAuthorize: e3,
            hasContentBackground: tn,
            noPadding: to,
        }
    );
}
function eo(e, t) {
    if (null == t.location || (null != e.callback && e.callback(t))) return;
    let { host: n, pathname: i, searchParams: s } = k.A.toURLSafe(t.location) ?? {},
        a = k.A.isDiscordHostname(n ?? null) || window.location.host === n;
    a && i === J.BVt.OAUTH2_AUTHORIZED
        ? (0, m.openModal)((e) => (0, r.jsx)(X.dR, { guild: t.guild, application: t.application, ...e }))
        : a && i?.startsWith(J.BVt.OAUTH2_ERROR)
          ? (0, m.openModal)((e) => {
                let t = s?.get("error_description") ?? s?.get("error") ?? et.intl.string(et.t.mqn873);
                return (
                    Array.isArray(t) && (t = t[0]),
                    (0, r.jsx)(Z.f, { ...e, children: (0, r.jsx)(X.gz, { message: t, onClose: e.onClose }) })
                );
            })
          : window.open(t.location, "_blank")?.focus();
}
function el(e, t) {
    (0, D._9)() ? O.A.openCreateGuildModal({ onSuccess: (n) => eu({ ...e, guildId: n }, t) }) : eu(e, t);
}
function eu(e, t) {
    (0, m.openModal)((t) => (0, r.jsx)(ei, { ...t, ...e, cancelCompletesFlow: !1, callback: eo.bind(null, e) }), {
        onCloseCallback: t,
    });
}
function ec(e) {
    let { hostname: t = "", host: n, pathname: r, search: i } = k.A.toURLSafe(e) ?? {};
    return null != r &&
        null != i &&
        (k.A.isDiscordHostname(t) || n === window.location.host) &&
        (r.startsWith(`/api${J.Rsh.OAUTH2_AUTHORIZE}`) || r.startsWith(J.BVt.OAUTH2_AUTHORIZE))
        ? (0, U._)(i)
        : null;
}

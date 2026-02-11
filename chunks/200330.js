"use strict";
n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: () => ei,
        OAuth2AuthorizePage: () => er,
        getOAuth2AuthorizeProps: () => ec,
        openOAuth2Modal: () => eu,
        openOAuth2ModalWithCreateGuildModal: () => el,
        useOAuth2AuthorizeForm: () => es,
    }),
    n(323874),
    n(14289),
    n(35956),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(960488),
    l = n(172218),
    u = n(607399),
    c = n(485845),
    d = n(179771),
    _ = n(136722),
    f = n(158954),
    h = n(311907),
    p = n(192308),
    g = n(732955),
    E = n(397927),
    A = n(830215),
    I = n(58149),
    T = n(269815),
    y = n(537569),
    S = n(627363),
    v = n(224750),
    C = n(62447),
    b = n(20015),
    N = n(854378),
    R = n(272613),
    O = n(49463),
    D = n(14509),
    L = n(976860),
    w = n(611010),
    x = n(427157),
    P = n(961350),
    M = n(488926),
    k = n(998218),
    U = n(123677),
    G = n(716965),
    F = n(332934),
    V = n(376092),
    B = n(647053),
    j = n(671523),
    H = n(774363),
    Y = n(404035),
    W = n(864721),
    K = n(629442),
    $ = n(54605),
    z = n(189880),
    q = n(991054),
    X = n(321987),
    Z = n(595244),
    Q = n(618865),
    J = n(652215),
    ee = n(613057),
    et = n(985018),
    en = n(283872);
function er() {
    let e = (0, o.zy)(),
        t = i.useMemo(() => (0, U._)(e.search), [e.search]);
    (0, T.A)();
    let a = !e.search.includes("response_type"),
        [s, l] = i.useState(!1),
        c = i.useRef(!1),
        [d, _] = i.useState(null),
        h = !u.Fr && !s && (a || !P.default.isAuthenticated());
    if (
        (i.useEffect(() => {
            if (u.Ct && a) {
                let t = new URL("discord://action/oauth2/authorize");
                (t.search = e.search), window.open(t.toString(), "_self");
            } else
                u.Fr ||
                    (!a && P.default.isAuthenticated()) ||
                    c.current ||
                    ((c.current = !0),
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((t) => {
                            let { default: n } = t;
                            if (a)
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
        }, [e.search, a]),
        h && !1 !== d)
    ) {
        let e;
        return (
            (e =
                !0 === d
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(N.hE, { children: et.intl.string(et.t.csrAMJ) }),
                              (0, r.jsx)(N.tK, {
                                  children: a ? et.intl.string(et.t["m1+IBn"]) : et.intl.string(et.t.kRzrSO),
                              }),
                              (0, r.jsx)(g.$nd, {
                                  onClick: () => l(!0),
                                  variant: "primary",
                                  text: et.intl.string(et.t.fIv16B),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(N.hE, { children: et.intl.string(et.t["Z+hCVU"]) }),
                              (0, r.jsx)(E.y$y, {}),
                          ],
                      })),
            (0, r.jsx)(X.$, { removeChildWrapper: !0, children: (0, r.jsx)("div", { className: en.ah, children: e }) })
        );
    }
    return (0, r.jsx)(X.$, {
        removeChildWrapper: !0,
        children: (0, r.jsx)(ei, {
            transitionState: f.ip4.ENTERED,
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
            header: a,
            body: o,
            actions: l,
            nextStep: u,
            appDetails: c,
            hasContentBackground: d,
            noPadding: _,
            modalSize: f,
        } = es({ ...e }),
        h = y.v.useExperiment({ location: "oauth2_authorize" }),
        p =
            null != a || null != o || null != c
                ? (0, r.jsxs)("div", {
                      className: en.Gq,
                      children: [
                          a,
                          (0, r.jsxs)("div", {
                              className: en.FG,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: s()(en.Qs, d ? en.cw : null, _ ? en.pN : null),
                                      children: [o, null != u || h.enabled ? null : c],
                                  }),
                                  null == u && h.enabled
                                      ? (0, r.jsx)("div", {
                                            className: s()(en.Qs, d ? en.cw : null, _ ? en.pN : null),
                                            children: c,
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  })
                : null;
    return (0, r.jsx)(X.f, {
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
function ea() {
    return (0, r.jsx)("div", { className: en.g4, children: (0, r.jsx)(E.y$y, { className: en.u1 }) });
}
function es(e) {
    let t,
        n,
        a,
        s,
        u,
        {
            clientId: f,
            responseType: p,
            redirectUri: g,
            codeChallenge: T,
            codeChallengeMethod: N,
            state: R,
            nonce: D,
            prompt: X,
            authorizations: ee,
            scopes: er,
            permissions: ei,
            guildId: es,
            channelId: eo,
            integrationType: el,
            disableGuildSelect: eu = !1,
            showLogout: ec = !1,
            cancelCompletesFlow: ed = !0,
            isTrustedName: e_ = !1,
            isEmbeddedFlow: ef = !1,
            callback: eh,
            callbackWithoutPost: ep,
            onClose: em,
            disclosures: eg,
            isExternalStandaloneOAuthPage: eE = !1,
            isTwoWayLinkDiscordConsent: eA = !1,
        } = e,
        eI = null != el ? ee?.get(el) : void 0,
        eT = (0, o.zy)(),
        ey = (0, h.bG)([O.A], () => O.A.hasLoadedExperiments);
    i.useEffect(() => {
        P.default.isAuthenticated() && !ey && A.A.getExperiments();
    }, [ey]);
    let [eS, ev] = i.useState(null),
        [eC, eb] = i.useState(null),
        [eN, eR] = i.useState(null),
        [eO, eD] = i.useState(!1),
        [eL, ew] = i.useState(!1),
        ex = eS?.guilds,
        [eP, eM] = i.useState(es ?? null),
        [ek, eU] = i.useState(eo ?? null),
        [eG, eF] = i.useState(M.x3),
        [eV, eB] = i.useState(!1),
        ej = i.useMemo(() => (eS?.user != null ? new x.A(eS.user) : null), [eS?.user]),
        eH = (0, C.A)(eS?.application ?? null),
        eY = i.useMemo(() => ex?.find((e) => e.id === eP), [ex, eP]),
        [eW, eK] = i.useState(null),
        e$ = i.useMemo(() => null == eI && null == el && (er?.length ?? 0) === 0 && null == g, [eI, er?.length, g, el]),
        [ez, eq] = i.useState(null);
    i.useEffect(() => {
        e$ && S.Ay.fetchApplication(f).then((e) => eq(w.Ay.createFromServer(e)));
    }, [f, e$]);
    let eX = i.useMemo(
            () => (null == eW ? null : ez?.integrationTypesConfig?.[eW]?.oauth2InstallParams),
            [ez?.integrationTypesConfig, eW],
        ),
        eZ = y.v.useExperiment({ location: "oauth2_authorize" }),
        { requestedScopes: eQ, accountScopes: eJ } = i.useMemo(() => {
            let e = e$ ? eX?.scopes : er,
                t = (0, U.e)(e ?? []),
                n = B.k$.filter((e) => t.includes(e));
            return { requestedScopes: t, accountScopes: n };
        }, [eX?.scopes, er, e$]),
        e0 = i.useMemo(() => (e$ ? _.iu(eX?.permissions ?? 0) : ei) ?? M.x3, [eX?.permissions, ei, e$]),
        e1 = i.useRef(!1),
        [e2, e3] = i.useState(eg ?? []),
        [e6, e4] = i.useState(null != eg && eg.length > 0);
    i.useEffect(() => {
        if (e1.current) return;
        let e = async () => {
            e1.current = !0;
            try {
                let { disclosures: e, allAcked: t } = await (0, v.vG)(f);
                e4(!t), e3(e);
            } catch (n) {
                let { status: e, body: t } = n;
                if (401 === e) return void (0, G.Vh)(eT, "oauth2_error_failed_disclosures");
                eR(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
            } finally {
                e1.current = !1;
            }
        };
        if (null == eg) {
            if (!P.default.isAuthenticated()) return void (0, G.Vh)(eT, "oauth2_error_not_authenticated");
            e();
        }
    }, [f, eT, eg, e3, eR, e4, eb]);
    let e5 = i.useCallback(
            async (e) => {
                if (null != ep) {
                    eD(!0), ep(e);
                    return;
                }
                if (!e && !ed) {
                    null != eh && (eh({ application: eS?.application, guild: eY }), em?.());
                    return;
                }
                if (null == eW) return void eR(Error("No integration type was selected."));
                try {
                    eD(!0);
                    let t = await (0, G.Gq)({
                        authorize: e,
                        clientId: f,
                        scopes: eQ,
                        responseType: p,
                        redirectUri: g,
                        codeChallenge: T,
                        codeChallengeMethod: N,
                        state: R,
                        nonce: D,
                        integrationType: eW,
                        permissions: _.TF(e0, eG),
                        guildId: eW === c.b.GUILD_INSTALL && null != eP ? eP : void 0,
                        channelId: eW === c.b.GUILD_INSTALL && null != ek ? ek : void 0,
                        dmSettings: { allowMobilePush: eV },
                    });
                    if ((e && (await (0, v.Yx)(f, e2)), null != eh))
                        eh({ application: eS?.application, location: t.location, guild: eY }), em?.();
                    else if (null != t.location) {
                        let e = k.A.toURLSafe(t.location)?.pathname;
                        k.A.isDiscordUrl(t.location) && e === J.BVt.OAUTH2_AUTHORIZED
                            ? (0, L.pX)(J.BVt.OAUTH2_AUTHORIZED, { state: { application: eS?.application, guild: eY } })
                            : (window.location = t.location);
                    } else eD(!1);
                } catch (t) {
                    let e = t.body;
                    e?.message != null && "" !== e.message ? eR(Error(e.message)) : eR(e),
                        eb("AUTHORIZE_SCOPES"),
                        eD(!1);
                }
            },
            [ep, ed, eh, eS?.application, eY, em, f, eQ, p, g, T, N, R, D, e0, eG, eP, eW, ek, e2, eV],
        ),
        e7 = i.useRef(!1),
        e8 = i.useCallback(async () => {
            if (!P.default.isAuthenticated()) return void (0, G.Vh)(eT, "oauth2_error_not_authenticated");
            if (!e1.current && !e7.current) {
                e7.current = !0;
                try {
                    let e =
                        null != eI
                            ? eI
                            : await (0, G.qY)({
                                  clientId: f,
                                  scopes: eQ,
                                  responseType: p,
                                  redirectUri: g,
                                  codeChallenge: T,
                                  codeChallengeMethod: N,
                                  state: R,
                                  nonce: D,
                                  integrationType: eW ?? void 0,
                              });
                    ev((0, F._)(e)),
                        X === j.l.NONE && e.authorized && !e6 && e5(!0),
                        (0, I.zV)(J.HAw.OAUTH2_AUTHORIZE_VIEWED, {
                            application_id: e.application.id,
                            mobile_push_notification_default_setting: !1,
                        });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, G.Vh)(eT, "oauth2_error_unauthorized");
                    eR(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    e7.current = !1;
                }
            }
        }, [eT, eI, f, eQ, p, g, T, N, R, D, eW, X, e5, e6]),
        e9 = i.useMemo(
            () =>
                null != ez && e$
                    ? Object.entries(ez.integrationTypesConfig ?? {})
                          .filter((e) => {
                              let [t, n] = e;
                              return null != n.oauth2InstallParams;
                          })
                          .map((e) => {
                              let [t, n] = e;
                              return Number(t);
                          })
                    : [],
            [ez, e$],
        ),
        te = i.useRef(null);
    i.useEffect(() => {
        eC !== te.current &&
            ((te.current = eC),
            (0, I.zV)(J.HAw.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eC,
                application_id: f,
                integration_type: eW,
                scopes: eQ,
                permissions: e0.toString(),
                mobile_push_notification_default_setting: !1,
            }));
    }, [f, eW, e0, eQ, eC]),
        i.useEffect(() => {
            null == eC &&
                (!e$ || null != ez) &&
                ey &&
                (null != eI
                    ? (eK(eI.integration_type ?? c.b.GUILD_INSTALL), eb("AUTHORIZE_SCOPES"))
                    : e9.length > 1
                      ? eb("SELECT_INSTALL_TYPE")
                      : (1 === e9.length ? eK(e9[0]) : null != el ? eK(el) : eK(c.b.GUILD_INSTALL),
                        eb("AUTHORIZE_SCOPES")));
        }, [eI, e9, ez, e$, el, eC, ey]),
        i.useEffect(() => {
            if (null == eW || null != eS || null != eN) return;
            eW === c.b.USER_INSTALL && (eM(null), eU(null));
            let e = eQ.filter((e) => !B.gX.includes(e));
            0 === eQ.length
                ? eR(Error("No scopes were provided."))
                : e.length > 0
                  ? eR(Error(`Invalid scope: ${e[0]}`))
                  : (0, V.F7)(e0)
                    ? eR(Error("Invalid permission(s) provided."))
                    : e8();
        }, [e6, e8, eQ, e0, eW, eS, eN]);
    let tt = i.useCallback((e) => {
            e && ew(!0);
        }, []),
        tn = (0, l.K)(tt);
    if (eN instanceof Error)
        return eE
            ? { body: (0, r.jsx)(Z.gz, { message: eN.message }) }
            : eA
              ? {
                    label: et.intl.string(et.t.j2d6Km),
                    header: (0, r.jsx)(E.Text, {
                        variant: "text-lg/bold",
                        color: "text-strong",
                        children: et.intl.string(et.t.j2d6Km),
                    }),
                    body: (0, r.jsx)(E.Text, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: eN.message,
                    }),
                    actions: [{ onClick: em, text: et.intl.string(et.t.cpT0Cq) }],
                    noPadding: !0,
                }
              : {
                    title: et.intl.string(et.t.j2d6Km),
                    subtitle: eN.message,
                    actions: [{ onClick: em, text: et.intl.string(et.t.cpT0Cq) }],
                };
    let tr = (e) => {
            eK(e), ev(null), eb("AUTHORIZE_SCOPES");
        },
        ti = (e, t) => {
            eF((n) => (e ? _.TF(n, t) : _.WQ(n, t)));
        },
        ta = !1,
        ts = !1,
        to = !0,
        tl = !0,
        tu = !0,
        tc = !1;
    switch (eC) {
        case null:
            return { label: et.intl.string(et.t.ZTNur7), body: (0, r.jsx)(ea, {}) };
        case "SELECT_INSTALL_TYPE":
            if (null == ez) return { label: et.intl.string(et.t.ZTNur7), body: (0, r.jsx)(ea, {}) };
            (t = (0, r.jsx)(q.A, { application: ez, onSelect: tr })), (to = !1), (tl = !1), (tu = !1), (tc = !0);
            break;
        case "AUTHORIZE_SCOPES":
            if (null == eS || null == ej || null == eW)
                return { label: et.intl.string(et.t.ZTNur7), body: (0, r.jsx)(ea, {}) };
            let td = null == eN || eN instanceof Error ? {} : eN,
                t_ = ex?.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tf = eW === c.b.GUILD_INSTALL && eQ.includes(d.F.WEBHOOK_INCOMING),
                th =
                    tf ||
                    (eW === c.b.GUILD_INSTALL && (eQ.includes(d.F.BOT) || eQ.includes(d.F.APPLICATIONS_COMMANDS))),
                tp = (0, b.n)(eS.application, J.gfo.EMBEDDED) && eW === c.b.USER_INSTALL && eZ.enabled;
            (t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(Y.A, { application: eS.application, accountScopes: eJ }),
                    (0, r.jsx)(W.A, {
                        application: eS.application,
                        accountScopes: eJ,
                        requestedScopes: eQ,
                        integrationType: eW,
                        errors: td,
                        isTrustedName: e_ || eH,
                        noDivider: !tp && !th && !tf && eZ.enabled,
                    }),
                    tp
                        ? (0, r.jsx)("div", {
                              className: en._j,
                              children: (0, r.jsx)(E.dOG, {
                                  label: et.intl.string(et.t["Pkw//o"]),
                                  onChange: eB,
                                  description: et.intl.string(et.t.hw1nKf),
                                  checked: eV,
                              }),
                          })
                        : null,
                    (0, r.jsx)("div", { className: en.sL, ref: tn }),
                    th
                        ? (0, r.jsx)($.A, {
                              error: (td[d.F.BOT] ?? td[d.F.APPLICATIONS_COMMANDS] ?? [])[0],
                              selectedGuildId: eP,
                              onGuildChange: eM,
                              guilds: t_ ?? [],
                              disabled: "" !== eP && null != eP && !0 === eu,
                          })
                        : null,
                    tf
                        ? (0, r.jsx)(Q.A, {
                              error: (td[d.F.WEBHOOK_INCOMING] ?? [])[0],
                              selectedChannelId: ek,
                              selectedGuildId: eP,
                              onChannelChange: eU,
                          })
                        : null,
                ],
            })),
                eQ.includes(d.F.BOT) && !_.aI(e0, M.x3) && (a = "AUTHORIZE_BOT_PERMISSIONS"),
                e9.length > 1 && (n = "SELECT_INSTALL_TYPE"),
                (ts = (th && null == eY) || (tf && null == ek)),
                (ta = !0);
            break;
        case "AUTHORIZE_BOT_PERMISSIONS":
            if (null == eS) return { label: et.intl.string(et.t.ZTNur7), body: (0, r.jsx)(ea, {}) };
            (t = (0, r.jsx)(K.A, {
                application: eS.application,
                permissions: e0,
                deniedPermissions: eG,
                onPermissionsChange: ti,
                guild: eY,
            })),
                (n = "AUTHORIZE_SCOPES"),
                (ta = !0);
    }
    let tm = [];
    if (to && null != eS) {
        let e = eS?.application.approximate_guild_count ?? eS?.bot?.approximate_guild_count;
        s = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(H.A, {
                    application: eS.application,
                    scopes: eQ,
                    disclosures: e2,
                    redirectUri: eS.redirect_uri ?? null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: ef,
                }),
                (0, r.jsx)("div", { className: en.sL, ref: tn }),
            ],
        });
    }
    return (
        tl &&
            null != eS &&
            null != ej &&
            (u = (0, r.jsx)(z.A, {
                user: ej,
                application: eS.application,
                bot: eS.bot,
                accountScopes: eJ,
                showLogout: ec || !1,
                location: eT,
                scopes: eQ,
            })),
        tu &&
            (tm.push(
                null != n
                    ? { variant: "secondary", onClick: () => eb(n), text: et.intl.string(et.t["13/7kX"]) }
                    : { variant: "secondary", onClick: () => e5(!1), text: et.intl.string(et.t["ETE/oC"]) },
            ),
            "SELECT_INSTALL_TYPE" !== eC &&
                tm.push(
                    eL
                        ? {
                              onClick: null != a ? () => eb(a) : () => e5(!0),
                              loading: eO,
                              disabled: null == s || ts,
                              text: ts
                                  ? et.intl.string(et.t.BwwiSM)
                                  : null != a
                                    ? et.intl.string(et.t["3PatSz"])
                                    : et.intl.string(et.t["y+/PE9"]),
                          }
                        : { disabled: !0, loading: eO, text: et.intl.string(et.t.N22i9F), icon: E.MFz },
                )),
        {
            header: u,
            body: t,
            actions: tm,
            nextStep: a,
            appDetails: s,
            sendAuthorize: e5,
            hasContentBackground: ta,
            noPadding: tc,
        }
    );
}
function eo(e, t) {
    if (null == t.location || (null != e.callback && e.callback(t))) return;
    let { host: n, pathname: i, searchParams: a } = k.A.toURLSafe(t.location) ?? {},
        s = k.A.isDiscordHostname(n ?? null) || window.location.host === n;
    s && i === J.BVt.OAUTH2_AUTHORIZED
        ? (0, p.openModal)((e) => (0, r.jsx)(Z.dR, { guild: t.guild, application: t.application, ...e }))
        : s && i?.startsWith(J.BVt.OAUTH2_ERROR)
          ? (0, p.openModal)((e) => {
                let t = a?.get("error_description") ?? a?.get("error") ?? et.intl.string(et.t.mqn873);
                return (
                    Array.isArray(t) && (t = t[0]),
                    (0, r.jsx)(X.f, { ...e, children: (0, r.jsx)(Z.gz, { message: t, onClose: e.onClose }) })
                );
            })
          : window.open(t.location, "_blank")?.focus();
}
function el(e, t) {
    (0, D._9)() ? R.A.openCreateGuildModal({ onSuccess: (n) => eu({ ...e, guildId: n }, t) }) : eu(e, t);
}
function eu(e, t) {
    (0, p.openModal)((t) => (0, r.jsx)(ei, { ...t, ...e, cancelCompletesFlow: !1, callback: eo.bind(null, e) }), {
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

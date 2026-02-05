"use strict";
n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: () => er,
        OAuth2AuthorizePage: () => en,
        getOAuth2AuthorizeProps: () => eu,
        openOAuth2Modal: () => el,
        openOAuth2ModalWithCreateGuildModal: () => eo,
        useOAuth2AuthorizeForm: () => ea,
    }),
    n(323874),
    n(14289),
    n(35956),
    n(938796),
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
    f = n(665260),
    p = n(158954),
    h = n(311907),
    m = n(192308),
    g = n(732955),
    E = n(397927),
    A = n(830215),
    I = n(58149),
    T = n(269815),
    y = n(537569),
    S = n(627363),
    v = n(224750),
    C = n(62447),
    b = n(854378),
    N = n(272613),
    R = n(49463),
    O = n(14509),
    D = n(976860),
    L = n(611010),
    w = n(427157),
    x = n(961350),
    P = n(488926),
    M = n(998218),
    k = n(123677),
    U = n(716965),
    G = n(332934),
    V = n(376092),
    F = n(647053),
    B = n(671523),
    j = n(774363),
    H = n(404035),
    Y = n(864721),
    W = n(629442),
    K = n(54605),
    z = n(189880),
    $ = n(991054),
    q = n(321987),
    Z = n(595244),
    Q = n(618865),
    X = n(652215),
    J = n(613057),
    ee = n(985018),
    et = n(283872);
function en() {
    let e = (0, o.zy)(),
        t = i.useMemo(() => (0, k._)(e.search), [e.search]);
    (0, T.A)();
    let a = !e.search.includes("response_type"),
        [s, l] = i.useState(!1),
        c = i.useRef(!1),
        [d, _] = i.useState(null),
        f = !u.Fr && !s && (a || !x.default.isAuthenticated());
    if (
        (i.useEffect(() => {
            if (u.Ct && a) {
                let t = new URL("discord://action/oauth2/authorize");
                (t.search = e.search), window.open(t.toString(), "_self");
            } else
                u.Fr ||
                    (!a && x.default.isAuthenticated()) ||
                    c.current ||
                    ((c.current = !0),
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((t) => {
                            let { default: n } = t;
                            if (a)
                                n.request(X.e$_.DEEP_LINK, { type: J.XK.OAUTH2, params: { search: e.search } })
                                    .then((e) => {
                                        _(e ?? !1);
                                    })
                                    .catch(() => _(!1))
                                    .then(() => n.disconnect());
                            else {
                                _(!0);
                                let t = new URLSearchParams(e.search);
                                n.request(X.e$_.AUTHORIZE, {
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
        f && !1 !== d)
    ) {
        let e;
        return (
            (e =
                !0 === d
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(b.hE, { children: ee.intl.string(ee.t.csrAMJ) }),
                              (0, r.jsx)(b.tK, {
                                  children: a ? ee.intl.string(ee.t["m1+IBn"]) : ee.intl.string(ee.t.kRzrSO),
                              }),
                              (0, r.jsx)(g.$nd, {
                                  onClick: () => l(!0),
                                  variant: "primary",
                                  text: ee.intl.string(ee.t.fIv16B),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(b.hE, { children: ee.intl.string(ee.t["Z+hCVU"]) }),
                              (0, r.jsx)(E.y$y, {}),
                          ],
                      })),
            (0, r.jsx)(q.$, { removeChildWrapper: !0, children: (0, r.jsx)("div", { className: et.ah, children: e }) })
        );
    }
    return (0, r.jsx)(q.$, {
        removeChildWrapper: !0,
        children: (0, r.jsx)(er, {
            transitionState: p.ip4.ENTERED,
            ...t,
            showLogout: !0,
            isExternalStandaloneOAuthPage: !0,
            hideHeader: !0,
        }),
    });
}
function er(e) {
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
        } = ea({ ...e }),
        p = y.v.useExperiment({ location: "oauth2_authorize" }),
        h =
            null != a || null != o || null != c
                ? (0, r.jsxs)("div", {
                      className: et.Gq,
                      children: [
                          a,
                          (0, r.jsxs)("div", {
                              className: et.FG,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: s()(et.Qs, d ? et.cw : null, _ ? et.pN : null),
                                      children: [o, null != u || p.enabled ? null : c],
                                  }),
                                  null == u && p.enabled
                                      ? (0, r.jsx)("div", {
                                            className: s()(et.Qs, d ? et.cw : null, _ ? et.pN : null),
                                            children: c,
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  })
                : null;
    return (0, r.jsx)(q.f, {
        ...e,
        onClose: () => Promise.resolve(e.onClose?.()),
        size: f,
        actions: l,
        title: n,
        subtitle: i,
        "aria-label": t,
        children: h,
    });
}
function ei() {
    return (0, r.jsx)("div", { className: et.g4, children: (0, r.jsx)(E.y$y, { className: et.u1 }) });
}
function ea(e) {
    let t,
        n,
        a,
        s,
        u,
        {
            clientId: p,
            responseType: m,
            redirectUri: g,
            codeChallenge: T,
            codeChallengeMethod: b,
            state: N,
            nonce: O,
            prompt: q,
            authorizations: J,
            scopes: en,
            permissions: er,
            guildId: ea,
            channelId: es,
            integrationType: eo,
            disableGuildSelect: el = !1,
            showLogout: eu = !1,
            cancelCompletesFlow: ec = !0,
            isTrustedName: ed = !1,
            isEmbeddedFlow: e_ = !1,
            callback: ef,
            callbackWithoutPost: ep,
            onClose: eh,
            disclosures: em,
            isExternalStandaloneOAuthPage: eg = !1,
            isTwoWayLinkDiscordConsent: eE = !1,
        } = e,
        eA = null != eo ? J?.get(eo) : void 0,
        eI = (0, o.zy)(),
        eT = (0, h.bG)([R.A], () => R.A.hasLoadedExperiments);
    i.useEffect(() => {
        x.default.isAuthenticated() && !eT && A.A.getExperiments();
    }, [eT]);
    let [ey, eS] = i.useState(null),
        [ev, eC] = i.useState(null),
        [eb, eN] = i.useState(null),
        [eR, eO] = i.useState(!1),
        [eD, eL] = i.useState(!1),
        ew = ey?.guilds,
        [ex, eP] = i.useState(ea ?? null),
        [eM, ek] = i.useState(es ?? null),
        [eU, eG] = i.useState(P.x3),
        [eV, eF] = i.useState(!1),
        eB = i.useMemo(() => (ey?.user != null ? new w.A(ey.user) : null), [ey?.user]),
        ej = (0, C.A)(ey?.application ?? null),
        eH = i.useMemo(() => ew?.find((e) => e.id === ex), [ew, ex]),
        [eY, eW] = i.useState(null),
        eK = i.useMemo(() => null == eA && null == eo && (en?.length ?? 0) === 0 && null == g, [eA, en?.length, g, eo]),
        [ez, e$] = i.useState(null);
    i.useEffect(() => {
        eK && S.Ay.fetchApplication(p).then((e) => e$(L.Ay.createFromServer(e)));
    }, [p, eK]);
    let eq = i.useMemo(
            () => (null == eY ? null : ez?.integrationTypesConfig?.[eY]?.oauth2InstallParams),
            [ez?.integrationTypesConfig, eY],
        ),
        eZ = y.v.useExperiment({ location: "oauth2_authorize" }),
        { requestedScopes: eQ, accountScopes: eX } = i.useMemo(() => {
            let e = eK ? eq?.scopes : en,
                t = (0, k.e)(e ?? []),
                n = F.k$.filter((e) => t.includes(e));
            return { requestedScopes: t, accountScopes: n };
        }, [eq?.scopes, en, eK]),
        eJ = i.useMemo(() => (eK ? _.iu(eq?.permissions ?? 0) : er) ?? P.x3, [eq?.permissions, er, eK]),
        e0 = i.useRef(!1),
        [e1, e2] = i.useState(em ?? []),
        [e3, e6] = i.useState(null != em && em.length > 0);
    i.useEffect(() => {
        if (e0.current) return;
        let e = async () => {
            e0.current = !0;
            try {
                let { disclosures: e, allAcked: t } = await (0, v.vG)(p);
                e6(!t), e2(e);
            } catch (n) {
                let { status: e, body: t } = n;
                if (401 === e) return void (0, U.Vh)(eI, "oauth2_error_failed_disclosures");
                eN(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
            } finally {
                e0.current = !1;
            }
        };
        if (null == em) {
            if (!x.default.isAuthenticated()) return void (0, U.Vh)(eI, "oauth2_error_not_authenticated");
            e();
        }
    }, [p, eI, em, e2, eN, e6, eC]);
    let e4 = i.useCallback(
            async (e) => {
                if (null != ep) {
                    eO(!0), ep(e);
                    return;
                }
                if (!e && !ec) {
                    null != ef && (ef({ application: ey?.application, guild: eH }), eh?.());
                    return;
                }
                if (null == eY) return void eN(Error("No integration type was selected."));
                try {
                    eO(!0);
                    let t = await (0, U.Gq)({
                        authorize: e,
                        clientId: p,
                        scopes: eQ,
                        responseType: m,
                        redirectUri: g,
                        codeChallenge: T,
                        codeChallengeMethod: b,
                        state: N,
                        nonce: O,
                        integrationType: eY,
                        permissions: _.TF(eJ, eU),
                        guildId: eY === c.b.GUILD_INSTALL && null != ex ? ex : void 0,
                        channelId: eY === c.b.GUILD_INSTALL && null != eM ? eM : void 0,
                        dmSettings: { allowMobilePush: eV },
                    });
                    if ((e && (await (0, v.Yx)(p, e1)), null != ef))
                        ef({ application: ey?.application, location: t.location, guild: eH }), eh?.();
                    else if (null != t.location) {
                        let e = M.A.toURLSafe(t.location)?.pathname;
                        M.A.isDiscordUrl(t.location) && e === X.BVt.OAUTH2_AUTHORIZED
                            ? (0, D.pX)(X.BVt.OAUTH2_AUTHORIZED, { state: { application: ey?.application, guild: eH } })
                            : (window.location = t.location);
                    } else eO(!1);
                } catch (t) {
                    let e = t.body;
                    e?.message != null && "" !== e.message ? eN(Error(e.message)) : eN(e),
                        eC("AUTHORIZE_SCOPES"),
                        eO(!1);
                }
            },
            [ep, ec, ef, ey?.application, eH, eh, p, eQ, m, g, T, b, N, O, eJ, eU, ex, eY, eM, e1, eV],
        ),
        e5 = i.useRef(!1),
        e7 = i.useCallback(async () => {
            if (!x.default.isAuthenticated()) return void (0, U.Vh)(eI, "oauth2_error_not_authenticated");
            if (!e0.current && !e5.current) {
                e5.current = !0;
                try {
                    let e =
                        null != eA
                            ? eA
                            : await (0, U.qY)({
                                  clientId: p,
                                  scopes: eQ,
                                  responseType: m,
                                  redirectUri: g,
                                  codeChallenge: T,
                                  codeChallengeMethod: b,
                                  state: N,
                                  nonce: O,
                                  integrationType: eY ?? void 0,
                              });
                    eS((0, G._)(e)),
                        q === B.l.NONE && e.authorized && !e3 && e4(!0),
                        (0, I.zV)(X.HAw.OAUTH2_AUTHORIZE_VIEWED, {
                            application_id: e.application.id,
                            mobile_push_notification_default_setting: !1,
                        });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, U.Vh)(eI, "oauth2_error_unauthorized");
                    eN(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    e5.current = !1;
                }
            }
        }, [eI, eA, p, eQ, m, g, T, b, N, O, eY, q, e4, e3]),
        e8 = i.useMemo(
            () =>
                null != ez && eK
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
            [ez, eK],
        ),
        e9 = i.useRef(null);
    i.useEffect(() => {
        ev !== e9.current &&
            ((e9.current = ev),
            (0, I.zV)(X.HAw.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: ev,
                application_id: p,
                integration_type: eY,
                scopes: eQ,
                permissions: eJ.toString(),
                mobile_push_notification_default_setting: !1,
            }));
    }, [p, eY, eJ, eQ, ev]),
        i.useEffect(() => {
            null == ev &&
                (!eK || null != ez) &&
                eT &&
                (null != eA
                    ? (eW(eA.integration_type ?? c.b.GUILD_INSTALL), eC("AUTHORIZE_SCOPES"))
                    : e8.length > 1
                      ? eC("SELECT_INSTALL_TYPE")
                      : (1 === e8.length ? eW(e8[0]) : null != eo ? eW(eo) : eW(c.b.GUILD_INSTALL),
                        eC("AUTHORIZE_SCOPES")));
        }, [eA, e8, ez, eK, eo, ev, eT]),
        i.useEffect(() => {
            if (null == eY || null != ey || null != eb) return;
            eY === c.b.USER_INSTALL && (eP(null), ek(null));
            let e = eQ.filter((e) => !F.gX.includes(e));
            0 === eQ.length
                ? eN(Error("No scopes were provided."))
                : e.length > 0
                  ? eN(Error(`Invalid scope: ${e[0]}`))
                  : (0, V.F7)(eJ)
                    ? eN(Error("Invalid permission(s) provided."))
                    : e7();
        }, [e3, e7, eQ, eJ, eY, ey, eb]);
    let te = i.useCallback((e) => {
            e && eL(!0);
        }, []),
        tt = (0, l.K)(te);
    if (eb instanceof Error)
        return eg
            ? { body: (0, r.jsx)(Z.gz, { message: eb.message }) }
            : eE
              ? {
                    label: ee.intl.string(ee.t.j2d6Km),
                    header: (0, r.jsx)(E.Text, {
                        variant: "text-lg/bold",
                        color: "text-strong",
                        children: ee.intl.string(ee.t.j2d6Km),
                    }),
                    body: (0, r.jsx)(E.Text, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: eb.message,
                    }),
                    actions: [{ onClick: eh, text: ee.intl.string(ee.t.cpT0Cq) }],
                    noPadding: !0,
                }
              : {
                    title: ee.intl.string(ee.t.j2d6Km),
                    subtitle: eb.message,
                    actions: [{ onClick: eh, text: ee.intl.string(ee.t.cpT0Cq) }],
                };
    let tn = (e) => {
            eW(e), eS(null), eC("AUTHORIZE_SCOPES");
        },
        tr = (e, t) => {
            eG((n) => (e ? _.TF(n, t) : _.WQ(n, t)));
        },
        ti = !1,
        ta = !1,
        ts = !0,
        to = !0,
        tl = !0,
        tu = !1;
    switch (ev) {
        case null:
            return { label: ee.intl.string(ee.t.ZTNur7), body: (0, r.jsx)(ei, {}) };
        case "SELECT_INSTALL_TYPE":
            if (null == ez) return { label: ee.intl.string(ee.t.ZTNur7), body: (0, r.jsx)(ei, {}) };
            (t = (0, r.jsx)($.A, { application: ez, onSelect: tn })), (ts = !1), (to = !1), (tl = !1), (tu = !0);
            break;
        case "AUTHORIZE_SCOPES":
            if (null == ey || null == eB || null == eY)
                return { label: ee.intl.string(ee.t.ZTNur7), body: (0, r.jsx)(ei, {}) };
            let tc = null == eb || eb instanceof Error ? {} : eb,
                td = ew?.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                t_ = eY === c.b.GUILD_INSTALL && eQ.includes(d.F.WEBHOOK_INCOMING),
                tf =
                    t_ ||
                    (eY === c.b.GUILD_INSTALL && (eQ.includes(d.F.BOT) || eQ.includes(d.F.APPLICATIONS_COMMANDS))),
                tp = (0, f.Lt)(ey.application.flags ?? 0, X.gfo.EMBEDDED) && eY === c.b.USER_INSTALL && eZ.enabled;
            (t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(H.A, { application: ey.application, accountScopes: eX }),
                    (0, r.jsx)(Y.A, {
                        application: ey.application,
                        accountScopes: eX,
                        requestedScopes: eQ,
                        integrationType: eY,
                        errors: tc,
                        isTrustedName: ed || ej,
                        noDivider: !tp && !tf && !t_ && eZ.enabled,
                    }),
                    tp
                        ? (0, r.jsx)("div", {
                              className: et._j,
                              children: (0, r.jsx)(E.dOG, {
                                  label: ee.intl.string(ee.t["Pkw//o"]),
                                  onChange: eF,
                                  description: ee.intl.string(ee.t.hw1nKf),
                                  checked: eV,
                              }),
                          })
                        : null,
                    (0, r.jsx)("div", { className: et.sL, ref: tt }),
                    tf
                        ? (0, r.jsx)(K.A, {
                              error: (tc[d.F.BOT] ?? tc[d.F.APPLICATIONS_COMMANDS] ?? [])[0],
                              selectedGuildId: ex,
                              onGuildChange: eP,
                              guilds: td ?? [],
                              disabled: "" !== ex && null != ex && !0 === el,
                          })
                        : null,
                    t_
                        ? (0, r.jsx)(Q.A, {
                              error: (tc[d.F.WEBHOOK_INCOMING] ?? [])[0],
                              selectedChannelId: eM,
                              selectedGuildId: ex,
                              onChannelChange: ek,
                          })
                        : null,
                ],
            })),
                eQ.includes(d.F.BOT) && !_.aI(eJ, P.x3) && (a = "AUTHORIZE_BOT_PERMISSIONS"),
                e8.length > 1 && (n = "SELECT_INSTALL_TYPE"),
                (ta = (tf && null == eH) || (t_ && null == eM)),
                (ti = !0);
            break;
        case "AUTHORIZE_BOT_PERMISSIONS":
            if (null == ey) return { label: ee.intl.string(ee.t.ZTNur7), body: (0, r.jsx)(ei, {}) };
            (t = (0, r.jsx)(W.A, {
                application: ey.application,
                permissions: eJ,
                deniedPermissions: eU,
                onPermissionsChange: tr,
                guild: eH,
            })),
                (n = "AUTHORIZE_SCOPES"),
                (ti = !0);
    }
    let th = [];
    if (ts && null != ey) {
        let e = ey?.application.approximate_guild_count ?? ey?.bot?.approximate_guild_count;
        s = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(j.A, {
                    application: ey.application,
                    scopes: eQ,
                    disclosures: e1,
                    redirectUri: ey.redirect_uri ?? null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: e_,
                }),
                (0, r.jsx)("div", { className: et.sL, ref: tt }),
            ],
        });
    }
    return (
        to &&
            null != ey &&
            null != eB &&
            (u = (0, r.jsx)(z.A, {
                user: eB,
                application: ey.application,
                bot: ey.bot,
                accountScopes: eX,
                showLogout: eu || !1,
                location: eI,
                scopes: eQ,
            })),
        tl &&
            (th.push(
                null != n
                    ? { variant: "secondary", onClick: () => eC(n), text: ee.intl.string(ee.t["13/7kX"]) }
                    : { variant: "secondary", onClick: () => e4(!1), text: ee.intl.string(ee.t["ETE/oC"]) },
            ),
            "SELECT_INSTALL_TYPE" !== ev &&
                th.push(
                    eD
                        ? {
                              onClick: null != a ? () => eC(a) : () => e4(!0),
                              loading: eR,
                              disabled: null == s || ta,
                              text: ta
                                  ? ee.intl.string(ee.t.BwwiSM)
                                  : null != a
                                    ? ee.intl.string(ee.t["3PatSz"])
                                    : ee.intl.string(ee.t["y+/PE9"]),
                          }
                        : { disabled: !0, loading: eR, text: ee.intl.string(ee.t.N22i9F), icon: E.MFz },
                )),
        {
            header: u,
            body: t,
            actions: th,
            nextStep: a,
            appDetails: s,
            sendAuthorize: e4,
            hasContentBackground: ti,
            noPadding: tu,
        }
    );
}
function es(e, t) {
    if (null == t.location || (null != e.callback && e.callback(t))) return;
    let { host: n, pathname: i, searchParams: a } = M.A.toURLSafe(t.location) ?? {},
        s = M.A.isDiscordHostname(n ?? null) || window.location.host === n;
    s && i === X.BVt.OAUTH2_AUTHORIZED
        ? (0, m.openModal)((e) => (0, r.jsx)(Z.dR, { guild: t.guild, application: t.application, ...e }))
        : s && i?.startsWith(X.BVt.OAUTH2_ERROR)
          ? (0, m.openModal)((e) => {
                let t = a?.get("error_description") ?? a?.get("error") ?? ee.intl.string(ee.t.mqn873);
                return (
                    Array.isArray(t) && (t = t[0]),
                    (0, r.jsx)(q.f, { ...e, children: (0, r.jsx)(Z.gz, { message: t, onClose: e.onClose }) })
                );
            })
          : window.open(t.location, "_blank")?.focus();
}
function eo(e, t) {
    (0, O._9)() ? N.A.openCreateGuildModal({ onSuccess: (n) => el({ ...e, guildId: n }, t) }) : el(e, t);
}
function el(e, t) {
    (0, m.openModal)((t) => (0, r.jsx)(er, { ...t, ...e, cancelCompletesFlow: !1, callback: es.bind(null, e) }), {
        onCloseCallback: t,
    });
}
function eu(e) {
    let { hostname: t = "", host: n, pathname: r, search: i } = M.A.toURLSafe(e) ?? {};
    return null != r &&
        null != i &&
        (M.A.isDiscordHostname(t) || n === window.location.host) &&
        (r.startsWith(`/api${X.Rsh.OAUTH2_AUTHORIZE}`) || r.startsWith(X.BVt.OAUTH2_AUTHORIZE))
        ? (0, k._)(i)
        : null;
}

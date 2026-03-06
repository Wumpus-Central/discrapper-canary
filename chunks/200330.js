"use strict";
n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: () => et,
        OAuth2AuthorizePage: () => ee,
        getOAuth2AuthorizeProps: () => eo,
        openOAuth2Modal: () => ea,
        openOAuth2ModalWithCreateGuildModal: () => es,
        useOAuth2AuthorizeForm: () => er,
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
    u = n(607399),
    c = n(485845),
    d = n(179771),
    _ = n(136722),
    f = n(158954),
    p = n(311907),
    h = n(192308),
    m = n(732955),
    E = n(397927),
    g = n(830215),
    A = n(58149),
    I = n(269815),
    T = n(627363),
    S = n(224750),
    y = n(62447),
    v = n(854378),
    N = n(272613),
    C = n(49463),
    R = n(14509),
    O = n(976860),
    b = n(611010),
    D = n(427157),
    L = n(961350),
    w = n(488926),
    M = n(998218),
    x = n(123677),
    P = n(716965),
    k = n(332934),
    U = n(376092),
    G = n(647053),
    F = n(671523),
    V = n(774363),
    B = n(404035),
    H = n(864721),
    j = n(629442),
    Y = n(54605),
    W = n(189880),
    K = n(991054),
    $ = n(321987),
    z = n(595244),
    q = n(618865),
    Z = n(652215),
    X = n(613057),
    Q = n(985018),
    J = n(443298);
function ee() {
    let e = (0, o.zy)(),
        t = i.useMemo(() => (0, x._)(e.search), [e.search]);
    (0, I.A)();
    let s = !e.search.includes("response_type"),
        [a, l] = i.useState(!1),
        c = i.useRef(!1),
        [d, _] = i.useState(null),
        p = !u.Fr && !a && (s || !L.default.isAuthenticated());
    if (
        (i.useEffect(() => {
            if (u.Ct && s) {
                let t = new URL("discord://action/oauth2/authorize");
                (t.search = e.search), window.open(t.toString(), "_self");
            } else
                u.Fr ||
                    (!s && L.default.isAuthenticated()) ||
                    c.current ||
                    ((c.current = !0),
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((t) => {
                            let { default: n } = t;
                            if (s)
                                n.request(Z.e$_.DEEP_LINK, { type: X.XK.OAUTH2, params: { search: e.search } })
                                    .then((e) => {
                                        _(e ?? !1);
                                    })
                                    .catch(() => _(!1))
                                    .then(() => n.disconnect());
                            else {
                                _(!0);
                                let t = new URLSearchParams(e.search);
                                n.request(Z.e$_.AUTHORIZE, {
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
        p && !1 !== d)
    ) {
        let e;
        return (
            (e =
                !0 === d
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(v.hE, { children: Q.intl.string(Q.t.csrAMJ) }),
                              (0, r.jsx)(v.tK, {
                                  children: s ? Q.intl.string(Q.t["m1+IBn"]) : Q.intl.string(Q.t.kRzrSO),
                              }),
                              (0, r.jsx)(m.$nd, {
                                  onClick: () => l(!0),
                                  variant: "primary",
                                  text: Q.intl.string(Q.t.fIv16B),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(v.hE, { children: Q.intl.string(Q.t["Z+hCVU"]) }),
                              (0, r.jsx)(E.y$y, {}),
                          ],
                      })),
            (0, r.jsx)($.$, { removeChildWrapper: !0, children: (0, r.jsx)("div", { className: J.ah, children: e }) })
        );
    }
    return (0, r.jsx)($.$, {
        removeChildWrapper: !0,
        children: (0, r.jsx)(et, {
            transitionState: f.ip4.ENTERED,
            ...t,
            showLogout: !0,
            isExternalStandaloneOAuthPage: !0,
            hideHeader: !0,
        }),
    });
}
function et(e) {
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
        } = er({ ...e }),
        p =
            null != s || null != o || null != c
                ? (0, r.jsxs)("div", {
                      className: J.Gq,
                      children: [
                          s,
                          (0, r.jsx)("div", {
                              className: J.FG,
                              children: (0, r.jsxs)("div", {
                                  className: a()(J.Qs, d ? J.cw : null, _ ? J.pN : null),
                                  children: [o, null == u ? c : null],
                              }),
                          }),
                      ],
                  })
                : null;
    return (0, r.jsx)($.f, {
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
function en() {
    return (0, r.jsx)("div", { className: J.g4, children: (0, r.jsx)(E.y$y, { className: J.u1 }) });
}
function er(e) {
    let t,
        n,
        s,
        a,
        u,
        {
            clientId: f,
            responseType: h,
            redirectUri: m,
            codeChallenge: I,
            codeChallengeMethod: v,
            state: N,
            nonce: R,
            prompt: $,
            authorizations: X,
            scopes: ee,
            permissions: et,
            guildId: er,
            channelId: ei,
            integrationType: es,
            disableGuildSelect: ea = !1,
            showLogout: eo = !1,
            cancelCompletesFlow: el = !0,
            isTrustedName: eu = !1,
            isEmbeddedFlow: ec = !1,
            callback: ed,
            callbackWithoutPost: e_,
            onClose: ef,
            disclosures: ep,
            isExternalStandaloneOAuthPage: eh = !1,
            isTwoWayLinkDiscordConsent: em = !1,
        } = e,
        eE = null != es ? X?.get(es) : void 0,
        eg = (0, o.zy)(),
        eA = (0, p.bG)([C.A], () => C.A.hasLoadedExperiments);
    i.useEffect(() => {
        L.default.isAuthenticated() && !eA && g.A.getExperiments();
    }, [eA]);
    let [eI, eT] = i.useState(null),
        [eS, ey] = i.useState(null),
        [ev, eN] = i.useState(null),
        [eC, eR] = i.useState(!1),
        [eO, eb] = i.useState(!1),
        eD = eI?.guilds,
        [eL, ew] = i.useState(er ?? null),
        [eM, ex] = i.useState(ei ?? null),
        [eP, ek] = i.useState(w.x3),
        eU = i.useMemo(() => (eI?.user != null ? new D.A(eI.user) : null), [eI?.user]),
        eG = (0, y.A)(eI?.application ?? null),
        eF = i.useMemo(() => eD?.find((e) => e.id === eL), [eD, eL]),
        [eV, eB] = i.useState(null),
        eH = i.useMemo(() => null == eE && null == es && (ee?.length ?? 0) === 0 && null == m, [eE, ee?.length, m, es]),
        [ej, eY] = i.useState(null);
    i.useEffect(() => {
        eH && T.Ay.fetchApplication(f).then((e) => eY(b.Ay.createFromServer(e)));
    }, [f, eH]);
    let eW = i.useMemo(
            () => (null == eV ? null : ej?.integrationTypesConfig?.[eV]?.oauth2InstallParams),
            [ej?.integrationTypesConfig, eV],
        ),
        { requestedScopes: eK, accountScopes: e$ } = i.useMemo(() => {
            let e = eH ? eW?.scopes : ee,
                t = (0, x.e)(e ?? []),
                n = G.k$.filter((e) => t.includes(e));
            return { requestedScopes: t, accountScopes: n };
        }, [eW?.scopes, ee, eH]),
        ez = i.useMemo(() => (eH ? _.iu(eW?.permissions ?? 0) : et) ?? w.x3, [eW?.permissions, et, eH]),
        eq = i.useRef(!1),
        [eZ, eX] = i.useState(ep ?? []),
        [eQ, eJ] = i.useState(null != ep && ep.length > 0);
    i.useEffect(() => {
        if (eq.current) return;
        let e = async () => {
            eq.current = !0;
            try {
                let { disclosures: e, allAcked: t } = await (0, S.vG)(f);
                eJ(!t), eX(e);
            } catch (n) {
                let { status: e, body: t } = n;
                if (401 === e) return void (0, P.Vh)(eg, "oauth2_error_failed_disclosures");
                eN(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
            } finally {
                eq.current = !1;
            }
        };
        if (null == ep) {
            if (!L.default.isAuthenticated()) return void (0, P.Vh)(eg, "oauth2_error_not_authenticated");
            e();
        }
    }, [f, eg, ep, eX, eN, eJ, ey]);
    let e0 = i.useCallback(
            async (e) => {
                if (null != e_) {
                    eR(!0), e_(e);
                    return;
                }
                if (!e && !el) {
                    null != ed && (ed({ application: eI?.application, guild: eF }), ef?.());
                    return;
                }
                if (null == eV) return void eN(Error("No integration type was selected."));
                try {
                    eR(!0);
                    let t = await (0, P.Gq)({
                        authorize: e,
                        clientId: f,
                        scopes: eK,
                        responseType: h,
                        redirectUri: m,
                        codeChallenge: I,
                        codeChallengeMethod: v,
                        state: N,
                        nonce: R,
                        integrationType: eV,
                        permissions: _.TF(ez, eP),
                        guildId: eV === c.b.GUILD_INSTALL && null != eL ? eL : void 0,
                        channelId: eV === c.b.GUILD_INSTALL && null != eM ? eM : void 0,
                    });
                    if ((e && (await (0, S.Yx)(f, eZ)), null != ed))
                        ed({ application: eI?.application, location: t.location, guild: eF }), ef?.();
                    else if (null != t.location) {
                        let e = M.A.toURLSafe(t.location)?.pathname;
                        M.A.isDiscordUrl(t.location) && e === Z.BVt.OAUTH2_AUTHORIZED
                            ? (0, O.pX)(Z.BVt.OAUTH2_AUTHORIZED, { state: { application: eI?.application, guild: eF } })
                            : (window.location = t.location);
                    } else eR(!1);
                } catch (t) {
                    let e = t.body;
                    e?.message != null && "" !== e.message ? eN(Error(e.message)) : eN(e),
                        ey("AUTHORIZE_SCOPES"),
                        eR(!1);
                }
            },
            [e_, el, ed, eI?.application, eF, ef, f, eK, h, m, I, v, N, R, ez, eP, eL, eV, eM, eZ],
        ),
        e1 = i.useRef(!1),
        e2 = i.useCallback(async () => {
            if (!L.default.isAuthenticated()) return void (0, P.Vh)(eg, "oauth2_error_not_authenticated");
            if (!eq.current && !e1.current) {
                e1.current = !0;
                try {
                    let e =
                        null != eE
                            ? eE
                            : await (0, P.qY)({
                                  clientId: f,
                                  scopes: eK,
                                  responseType: h,
                                  redirectUri: m,
                                  codeChallenge: I,
                                  codeChallengeMethod: v,
                                  state: N,
                                  nonce: R,
                                  integrationType: eV ?? void 0,
                              });
                    eT((0, k._)(e)),
                        $ === F.l.NONE && e.authorized && !eQ && e0(!0),
                        (0, A.zV)(Z.HAw.OAUTH2_AUTHORIZE_VIEWED, { application_id: e.application.id });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, P.Vh)(eg, "oauth2_error_unauthorized");
                    eN(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    e1.current = !1;
                }
            }
        }, [eg, eE, f, eK, h, m, I, v, N, R, eV, $, e0, eQ]),
        e3 = i.useMemo(
            () =>
                null != ej && eH
                    ? Object.entries(ej.integrationTypesConfig ?? {})
                          .filter((e) => {
                              let [t, n] = e;
                              return null != n.oauth2InstallParams;
                          })
                          .map((e) => {
                              let [t, n] = e;
                              return Number(t);
                          })
                    : [],
            [ej, eH],
        ),
        e6 = i.useRef(null);
    i.useEffect(() => {
        eS !== e6.current &&
            ((e6.current = eS),
            (0, A.zV)(Z.HAw.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eS,
                application_id: f,
                integration_type: eV,
                scopes: eK,
                permissions: ez.toString(),
            }));
    }, [f, eV, ez, eK, eS]),
        i.useEffect(() => {
            null == eS &&
                (!eH || null != ej) &&
                eA &&
                (null != eE
                    ? (eB(eE.integration_type ?? c.b.GUILD_INSTALL), ey("AUTHORIZE_SCOPES"))
                    : e3.length > 1
                      ? ey("SELECT_INSTALL_TYPE")
                      : (1 === e3.length ? eB(e3[0]) : null != es ? eB(es) : eB(c.b.GUILD_INSTALL),
                        ey("AUTHORIZE_SCOPES")));
        }, [eE, e3, ej, eH, es, eS, eA]),
        i.useEffect(() => {
            if (null == eV || null != eI || null != ev) return;
            eV === c.b.USER_INSTALL && (ew(null), ex(null));
            let e = eK.filter((e) => !G.gX.includes(e));
            0 === eK.length
                ? eN(Error("No scopes were provided."))
                : e.length > 0
                  ? eN(Error(`Invalid scope: ${e[0]}`))
                  : (0, U.F7)(ez)
                    ? eN(Error("Invalid permission(s) provided."))
                    : e2();
        }, [eQ, e2, eK, ez, eV, eI, ev]);
    let e4 = i.useCallback((e) => {
            e && eb(!0);
        }, []),
        e5 = (0, l.K)(e4);
    if (ev instanceof Error)
        return eh
            ? { body: (0, r.jsx)(z.gz, { message: ev.message }) }
            : em
              ? {
                    label: Q.intl.string(Q.t.j2d6Km),
                    header: (0, r.jsx)(E.Text, {
                        variant: "text-lg/bold",
                        color: "text-strong",
                        children: Q.intl.string(Q.t.j2d6Km),
                    }),
                    body: (0, r.jsx)(E.Text, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: ev.message,
                    }),
                    actions: [{ onClick: ef, text: Q.intl.string(Q.t.cpT0Cq) }],
                    noPadding: !0,
                }
              : {
                    title: Q.intl.string(Q.t.j2d6Km),
                    subtitle: ev.message,
                    actions: [{ onClick: ef, text: Q.intl.string(Q.t.cpT0Cq) }],
                };
    let e7 = (e) => {
            eB(e), eT(null), ey("AUTHORIZE_SCOPES");
        },
        e8 = (e, t) => {
            ek((n) => (e ? _.TF(n, t) : _.WQ(n, t)));
        },
        e9 = !1,
        te = !1,
        tt = !0,
        tn = !0,
        tr = !0,
        ti = !1;
    switch (eS) {
        case null:
            return { label: Q.intl.string(Q.t.ZTNur7), body: (0, r.jsx)(en, {}) };
        case "SELECT_INSTALL_TYPE":
            if (null == ej) return { label: Q.intl.string(Q.t.ZTNur7), body: (0, r.jsx)(en, {}) };
            (t = (0, r.jsx)(K.A, { application: ej, onSelect: e7 })), (tt = !1), (tn = !1), (tr = !1), (ti = !0);
            break;
        case "AUTHORIZE_SCOPES":
            if (null == eI || null == eU || null == eV)
                return { label: Q.intl.string(Q.t.ZTNur7), body: (0, r.jsx)(en, {}) };
            let ts = null == ev || ev instanceof Error ? {} : ev,
                ta = eD?.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                to = eV === c.b.GUILD_INSTALL && eK.includes(d.F.WEBHOOK_INCOMING),
                tl =
                    to ||
                    (eV === c.b.GUILD_INSTALL && (eK.includes(d.F.BOT) || eK.includes(d.F.APPLICATIONS_COMMANDS)));
            (t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(B.A, { application: eI.application, accountScopes: e$ }),
                    (0, r.jsx)(H.A, {
                        application: eI.application,
                        accountScopes: e$,
                        requestedScopes: eK,
                        integrationType: eV,
                        errors: ts,
                        isTrustedName: eu || eG,
                    }),
                    (0, r.jsx)("div", { className: J.sL, ref: e5 }),
                    tl
                        ? (0, r.jsx)(Y.A, {
                              error: (ts[d.F.BOT] ?? ts[d.F.APPLICATIONS_COMMANDS] ?? [])[0],
                              selectedGuildId: eL,
                              onGuildChange: ew,
                              guilds: ta ?? [],
                              disabled: "" !== eL && null != eL && !0 === ea,
                          })
                        : null,
                    to
                        ? (0, r.jsx)(q.A, {
                              error: (ts[d.F.WEBHOOK_INCOMING] ?? [])[0],
                              selectedChannelId: eM,
                              selectedGuildId: eL,
                              onChannelChange: ex,
                          })
                        : null,
                ],
            })),
                eK.includes(d.F.BOT) && !_.aI(ez, w.x3) && (s = "AUTHORIZE_BOT_PERMISSIONS"),
                e3.length > 1 && (n = "SELECT_INSTALL_TYPE"),
                (te = (tl && null == eF) || (to && null == eM)),
                (e9 = !0);
            break;
        case "AUTHORIZE_BOT_PERMISSIONS":
            if (null == eI) return { label: Q.intl.string(Q.t.ZTNur7), body: (0, r.jsx)(en, {}) };
            (t = (0, r.jsx)(j.A, {
                application: eI.application,
                permissions: ez,
                deniedPermissions: eP,
                onPermissionsChange: e8,
                guild: eF,
            })),
                (n = "AUTHORIZE_SCOPES"),
                (e9 = !0);
    }
    let tu = [];
    if (tt && null != eI) {
        let e = eI?.application.approximate_guild_count ?? eI?.bot?.approximate_guild_count;
        a = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(V.A, {
                    application: eI.application,
                    scopes: eK,
                    disclosures: eZ,
                    redirectUri: eI.redirect_uri ?? null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: ec,
                }),
                (0, r.jsx)("div", { className: J.sL, ref: e5 }),
            ],
        });
    }
    return (
        tn &&
            null != eI &&
            null != eU &&
            (u = (0, r.jsx)(W.A, {
                user: eU,
                application: eI.application,
                bot: eI.bot,
                accountScopes: e$,
                showLogout: eo || !1,
                location: eg,
                scopes: eK,
            })),
        tr &&
            (tu.push(
                null != n
                    ? { variant: "secondary", onClick: () => ey(n), text: Q.intl.string(Q.t["13/7kX"]) }
                    : { variant: "secondary", onClick: () => e0(!1), text: Q.intl.string(Q.t["ETE/oC"]) },
            ),
            "SELECT_INSTALL_TYPE" !== eS &&
                tu.push(
                    eO
                        ? {
                              onClick: null != s ? () => ey(s) : () => e0(!0),
                              loading: eC,
                              disabled: null == a || te,
                              text: te
                                  ? Q.intl.string(Q.t.BwwiSM)
                                  : null != s
                                    ? Q.intl.string(Q.t["3PatSz"])
                                    : Q.intl.string(Q.t["y+/PE9"]),
                          }
                        : { disabled: !0, loading: eC, text: Q.intl.string(Q.t.N22i9F), icon: E.MFz },
                )),
        {
            header: u,
            body: t,
            actions: tu,
            nextStep: s,
            appDetails: a,
            sendAuthorize: e0,
            hasContentBackground: e9,
            noPadding: ti,
        }
    );
}
function ei(e, t) {
    if (null == t.location || (null != e.callback && e.callback(t))) return;
    let { host: n, pathname: i, searchParams: s } = M.A.toURLSafe(t.location) ?? {},
        a = M.A.isDiscordHostname(n ?? null) || window.location.host === n;
    a && i === Z.BVt.OAUTH2_AUTHORIZED
        ? (0, h.openModal)((e) => (0, r.jsx)(z.dR, { guild: t.guild, application: t.application, ...e }))
        : a && i?.startsWith(Z.BVt.OAUTH2_ERROR)
          ? (0, h.openModal)((e) => {
                let t = s?.get("error_description") ?? s?.get("error") ?? Q.intl.string(Q.t.mqn873);
                return (
                    Array.isArray(t) && (t = t[0]),
                    (0, r.jsx)($.f, { ...e, children: (0, r.jsx)(z.gz, { message: t, onClose: e.onClose }) })
                );
            })
          : window.open(t.location, "_blank")?.focus();
}
function es(e, t) {
    (0, R._9)() ? N.A.openCreateGuildModal({ onSuccess: (n) => ea({ ...e, guildId: n }, t) }) : ea(e, t);
}
function ea(e, t) {
    (0, h.openModal)((t) => (0, r.jsx)(et, { ...t, ...e, cancelCompletesFlow: !1, callback: ei.bind(null, e) }), {
        onCloseCallback: t,
    });
}
function eo(e) {
    let { hostname: t = "", host: n, pathname: r, search: i } = M.A.toURLSafe(e) ?? {};
    return null != r &&
        null != i &&
        (M.A.isDiscordHostname(t) || n === window.location.host) &&
        (r.startsWith(`/api${Z.Rsh.OAUTH2_AUTHORIZE}`) || r.startsWith(Z.BVt.OAUTH2_AUTHORIZE))
        ? (0, x._)(i)
        : null;
}

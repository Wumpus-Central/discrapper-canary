l.d(t, { default: () => ev });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(284009),
    c = l.n(r),
    o = l(735438),
    u = l.n(o),
    d = l(485845),
    x = l(17928),
    m = l(661531),
    h = l(990078),
    j = l(462887),
    A = l(862482),
    f = l(534514),
    p = l(834730),
    g = l(933832),
    N = l(939249),
    v = l(602853),
    y = l(885574),
    E = l(243721),
    C = l(192308),
    b = l(231723),
    S = l(935462),
    _ = l(289873),
    k = l(364522),
    w = l(821609),
    T = l(123292),
    P = l(685094),
    R = l(77468),
    I = l(66834),
    L = l(730134),
    G = l(964486),
    M = l(736653),
    O = l(573648),
    $ = l(95561),
    V = l(941314),
    z = l(46225),
    D = l(858177),
    H = l(709066),
    U = l(920268),
    X = l(47167),
    Y = l(713654),
    F = l(46937),
    K = l(773669),
    B = l(780964),
    Q = l(858897),
    Z = l(889227),
    W = l(495544),
    q = l(546183),
    J = l(734057),
    ee = l(30370),
    et = l(696451),
    el = l(576705),
    en = l(147925),
    ei = l(174459),
    es = l(619006),
    ea = l(370480),
    er = l(773952),
    ec = l(355971),
    eo = l(967740),
    eu = l(293260),
    ed = l(783419),
    ex = l(652215),
    em = l(375708),
    eh = l(353659);
function ej(e) {
    let { platformType: t, className: l } = e,
        i = (0, M.Ay)(),
        s = O.A.get(t);
    return (0, n.jsx)("img", {
        src: (0, j.q)(i) ? s.icon.lightSVG : s.icon.darkSVG,
        alt: "",
        className: a()(eh.tV, l),
    });
}
function eA(e) {
    let { channel: t, className: l } = e,
        i = (0, Y.gU)(t),
        s = (0, X.Ay)(t);
    return (0, n.jsxs)("div", {
        className: a()(eh.HA, l),
        children: [
            null != i ? (0, n.jsx)(i, { className: eh.er }) : null,
            (0, n.jsx)(f.D, { variant: "heading-lg/semibold", color: "text-default", className: eh.Kw, children: s }),
        ],
    });
}
function ef(e) {
    let t,
        { connectionType: l, connectionMetadataField: i, operator: s, value: a, result: r, description: c } = e,
        o = null;
    if (l === ed.UX) return null;
    if (null != c)
        switch (s) {
            case ed.so.LESS_THAN:
                o = em.intl.format(em.t["2p7dA3"], { description: c, count: Math.max(0, Number(a) - 1) });
                break;
            case ed.so.GREATER_THAN:
                o = em.intl.format(em.t["2p7dA3"], { description: c, count: Math.max(0, Number(a) + 1) });
                break;
            default:
                o = c;
        }
    else {
        let e;
        switch (s) {
            case ed.so.EQUAL:
                (e = em.t["0BlpbA"]), l === ex.fg2.PAYPAL && i === ed.pK.PAYPAL_VERIFIED && (e = em.t.dcSDhW);
                break;
            case ed.so.NOT_EQUAL:
                e = em.t.otcpTN;
                break;
            case ed.so.LESS_THAN:
                e = em.t.Ef35xs;
                break;
            case ed.so.GREATER_THAN:
                e = em.t["8W9OXU"];
                break;
            case void 0:
            case null:
                return null;
        }
        if (
            null ==
            (o = (0, ea.RP)({ connectionType: l, connectionMetadataField: i, operator: s, operatorText: e, value: a }))
        )
            return null;
    }
    return (
        (t = r ? "text-default" : "text-feedback-critical"),
        (0, n.jsx)(p.E, { variant: "text-xs/normal", color: t, className: eh.E6, children: o })
    );
}
function ep(e) {
    let t,
        s,
        { eligibilityState: r, onAttempted: c } = e,
        o = (0, D.O)(r.application_id),
        { canStartAuthorization: u, startAuthorization: x } = (0, z.RD)(o),
        m = u,
        h = r.identity_connected_account_type,
        j = r.identity_auth_required_scopes;
    if (!m && null != h && null != j) {
        let e = O.A.get(h);
        null != e && e.enabled && (m = !0);
    }
    let A = r.application,
        f = i.useMemo(() => (A?.bot != null ? new Z.A(A.bot) : null), [A]),
        v = r.result;
    null != f && (t = (0, n.jsx)(H.A, { className: eh.AO, verified: f.isVerifiedBot() })),
        (s = v
            ? (0, n.jsx)(g.A, { size: "md", color: "currentColor", className: eh.rA })
            : m
              ? (0, n.jsx)(en.A, { direction: en.A.Directions.RIGHT, className: eh.t4 })
              : (0, n.jsx)(p.E, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: em.intl.string(em.t.cEts68),
                }));
    let y = i.useCallback(() => {
        v ||
            !m ||
            (c(null != h && ee.A.getAccounts().some((e) => e.type === h) ? null : r.connection_type, A ?? null),
            u
                ? x({ analyticsLocations: ["Verified Roles Connect Accounts Modal"] })
                : null != h &&
                  null != j &&
                  Promise.resolve()
                      .then(l.bind(l, 887909))
                      .then((e) => {
                          let { openOAuth2Modal: t } = e;
                          t({
                              clientId: r.application_id ?? "",
                              scopes: j,
                              integrationType: d.b.USER_INSTALL,
                              connectedAccountProvider: h,
                              callback: () => !0,
                          });
                      }));
    }, [v, m, u, x, c, A, r.connection_type, r.application_id, h, j]);
    return ea.iC.includes(A?.id ?? "")
        ? null
        : (0, n.jsxs)(N.D, {
              className: a()(eh.UY, v ? eh.o6 : null, m ? null : eh.pC),
              onClick: !v && m ? y : void 0,
              children: [
                  null != f ? (0, n.jsx)(L.A, { user: f }) : null,
                  (0, n.jsxs)("div", {
                      className: eh.EZ,
                      children: [
                          (0, n.jsxs)("div", {
                              className: eh.Pf,
                              children: [
                                  (0, n.jsx)(p.E, {
                                      variant: "text-md/medium",
                                      color: "text-strong",
                                      children: A?.name,
                                  }),
                                  t,
                              ],
                          }),
                          A?.name != null ? (0, n.jsx)(ef, { connectionType: ed.UX, result: v }) : null,
                          m || v
                              ? null
                              : (0, n.jsx)(p.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: em.intl.string(em.t["+z5dYe"]),
                                }),
                      ],
                  }),
                  s,
              ],
          });
}
function eg(e) {
    let { eligibilityStatesGroups: t, onPlatformConnect: l, onPlatformConnected: s } = e,
        [r, o] = i.useState({}),
        [d, x] = i.useState(0),
        [j, f] = i.useState(null),
        [E, C] = i.useState(null),
        b = i.useMemo(() => u().flatten(t), [t]),
        S = i.useMemo(
            () =>
                u().groupBy(b, (e) => `${e.connection_type}${null != e.application_id ? `:${e.application_id}` : ""}`),
            [b],
        );
    i.useEffect(() => x(Date.now()), [b]),
        i.useEffect(() => {
            if (null == j) return;
            let e = S[`${j}${null != E ? `:${E.id}` : ""}`];
            null == e || (e.every((e) => e.result) && s(e[0]?.identity_connected_account_type ?? j, E));
        }, [S, j, E, s]);
    let _ = (0, v.r)(m.A.unsafe_rawColors.GREEN_330).hex(),
        k = V.A.useConfig({ location: "Linked Roles Modal" }).enabled;
    return (0, n.jsx)(n.Fragment, {
        children: Object.keys(S)
            .sort((e, t) => {
                let l = S[e].every((e) => e.result),
                    n = S[t].every((e) => e.result);
                return !0 === l && !1 === n ? 1 : !1 === l && !0 === n ? -1 : 0;
            })
            .map((e) => {
                let t,
                    i,
                    s,
                    u = S[e];
                if (e.startsWith(`${ed.UX}:`) && null != u[0])
                    return (0, n.jsx)(
                        ep,
                        {
                            eligibilityState: u[0],
                            onAttempted: (e, t) => {
                                f(e), C(t), l();
                            },
                        },
                        e,
                    );
                let x = u.find((e) => null == e.operator),
                    m = u.filter((e) => null != e.operator),
                    j = (null == x || x.result) && m.every((e) => e.result),
                    v = u.find((e) => null != e.application),
                    E = O.A.get(e),
                    b = null == E || E.enabled,
                    w = null != E && null != E.replacedBy && k,
                    T = w || !b,
                    P = v?.application,
                    R = P?.bot != null ? new Z.A(P.bot) : null;
                ea.iC.includes(P?.id ?? "")
                    ? (t = (0, n.jsx)(ec.A, { className: eh.AO, color: _, size: 16 }))
                    : null != R && (t = (0, n.jsx)(H.A, { className: eh.AO, verified: R.isVerifiedBot() }));
                let I = r[E?.type ?? ed.zR],
                    G = !j && null != I && I <= d;
                return (
                    (i = j
                        ? (0, n.jsx)(g.A, { size: "md", color: "currentColor", className: eh.rA })
                        : G
                          ? (0, n.jsx)(A.$n, {
                                size: A.$n.Sizes.TINY,
                                look: A.$n.Looks.LINK,
                                color: A.$n.Colors.LINK,
                                className: eh.gN,
                                children: em.intl.string(em.t["5911Lb"]),
                            })
                          : T
                            ? (0, n.jsx)(p.E, {
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: em.intl.string(em.t.cEts68),
                              })
                            : (0, n.jsx)(en.A, { direction: en.A.Directions.RIGHT, className: eh.t4 })),
                    w
                        ? (s = em.intl.format(em.t.Rzz1Xs, { platformName: E?.name }))
                        : E?.type === ex.fg2.STEAM && (s = em.intl.string(em.t.NcZh6K)),
                    (0, n.jsxs)(
                        N.D,
                        {
                            className: a()(eh.UY, j ? eh.o6 : null, T ? eh.pC : null),
                            onClick:
                                j || T
                                    ? void 0
                                    : () => {
                                          var e;
                                          return (
                                              (e = E?.type ?? ed.zR),
                                              void ((0, er.A)({
                                                  platformType: e,
                                                  location: "Verified Roles Connect Accounts Modal",
                                                  overrideUrl: P?.role_connections_verification_url,
                                              }),
                                              o({ ...r, [e]: Date.now() }),
                                              f(e),
                                              C(P ?? null),
                                              l())
                                          );
                                      },
                            children: [
                                !j && G
                                    ? (0, n.jsx)("div", {
                                          className: eh.Z1,
                                          children: (0, n.jsx)(p.E, {
                                              variant: "text-xs/normal",
                                              color: "always-white",
                                              children: em.intl.string(em.t.UB3hKo),
                                          }),
                                      })
                                    : null,
                                null != E ? (0, n.jsx)(ej, { platformType: E.type }) : null,
                                null != R ? (0, n.jsx)(L.A, { user: R }) : null,
                                (0, n.jsxs)("div", {
                                    className: eh.EZ,
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: eh.Pf,
                                            children: [
                                                (0, n.jsx)(p.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    children: E?.name ?? P?.name,
                                                }),
                                                t,
                                                null != s
                                                    ? (0, n.jsx)(h.m, {
                                                          text: s,
                                                          children: (0, n.jsx)(y.m, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: eh.$I,
                                                          }),
                                                      })
                                                    : null,
                                            ],
                                        }),
                                        m.map((e) => {
                                            let {
                                                connection_type: t,
                                                connection_metadata_field: l,
                                                operator: i,
                                                value: s,
                                                result: a,
                                                description: r,
                                            } = e;
                                            return (
                                                c()(null != l, "connectionMetadataField is null"),
                                                c()(null != i, "operator is null"),
                                                c()(null != s, "value is null"),
                                                (0, n.jsx)(
                                                    ef,
                                                    {
                                                        connectionType: t,
                                                        connectionMetadataField: l,
                                                        operator: i,
                                                        value: s,
                                                        result: a,
                                                        description: r,
                                                    },
                                                    l,
                                                )
                                            );
                                        }),
                                    ],
                                }),
                                i,
                            ],
                        },
                        e,
                    )
                );
            }),
    });
}
function eN(e) {
    let t,
        l,
        s,
        { account: a, setShowPreviewInvisibleIcon: r, setShowPreviewMetadata: c } = e,
        [o, u] = i.useState(a.friendSync),
        [d, x] = i.useState(a.showActivity),
        [m, h] = i.useState(1 === a.metadataVisibility),
        [j, A] = i.useState(1 === a.visibility);
    (0, G.Ay)(() => {
        r(!j), c(m);
    });
    let f = O.A.get(a.type);
    return (
        ex.txh.has(a.type) &&
            (t = (0, n.jsx)(E.d, {
                label: em.intl.string(em.t["+KCMSi"]),
                checked: o,
                onChange: (e) => {
                    u(e), R.A.setFriendSync(a.type, a.id, e);
                },
            })),
        ex.ewM.has(a.type) &&
            (l = (0, n.jsx)(E.d, {
                label: em.intl.format(em.t["6u6J0q"], { platform: f.name }),
                checked: d,
                onChange: (e) => {
                    x(e), R.A.setShowActivity(a.type, a.id, e);
                },
            })),
        !0 === f.hasMetadata &&
            (s = (0, n.jsx)(E.d, {
                label: em.intl.string(em.t.FYKGsL),
                checked: m,
                disabled: !j,
                onChange: (e) => {
                    c(e), h(e), R.A.setMetadataVisibility(a.type, a.id, +!!e);
                },
            })),
        (0, n.jsxs)("div", {
            className: eh.ek,
            children: [
                (0, n.jsx)(E.d, {
                    label: em.intl.string(em.t.f7yOAX),
                    checked: j,
                    onChange: (e) => {
                        r(!e), A(e), R.A.setVisibility(a.type, a.id, +!!e);
                    },
                }),
                s,
                l,
                t,
            ],
        })
    );
}
function ev(e) {
    let { transitionState: t, onClose: l, guildId: s, role: a } = e,
        [r, o] = i.useState(0),
        [u, d] = i.useState(null),
        [m, j] = i.useState(!1),
        [A, g] = i.useState(!0),
        [N, v] = i.useState(!1),
        [E, R] = i.useState(!0),
        [L, G] = i.useState(!1),
        V = (0, x.bG)([ee.A], () => ee.A.getAccounts()),
        z = (0, x.bG)([q.default], () => q.default.getNewestTokens()),
        D = (0, x.bG)([W.default], () => W.default.getId()),
        [H, X] = i.useState(null),
        [Y, Z] = i.useState(null),
        [en, ea] = i.useState(null),
        er = (0, M.Ay)(),
        ec = (0, x.bG)([K.default], () => K.default.locale),
        ed = (0, x.bG)([et.Ay], () => et.Ay.getMember(s, D)),
        ej = Object.values((0, x.bG)([J.A], () => J.A.getMutableGuildChannelsForGuild(s))).filter(
            (e) => el.A.can(ex.xBc.VIEW_CHANNEL, e) && el.A.can(ex.xBc.SEND_MESSAGES, e) && (0, U.A)(e).includes(a),
        );
    function ef() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        l?.(), e && (0, C.closeModal)(eu.CB, b.SY);
    }
    function ep() {
        ef(!0), (0, Q.openUserSettings)(B.X.AUTHORIZED_APPS_PANEL);
    }
    function ev() {
        ef(!0), (0, Q.openUserSettings)(B.X.CONNECTIONS_PANEL);
    }
    async function ey() {
        v(!0), await I.A.assignGuildRoleConnection(s, a.id);
    }
    function eE() {
        ei.default.track(ex.HAw.PASSPORT_CHALLENGE_STARTED, { role_id: a.id, ...(0, $.H$)(s) });
    }
    function eC(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        X(e),
            Z(t),
            o(1),
            null != t &&
                (0, es.XC)()
                    .then((e) => {
                        ea(e);
                    })
                    .catch(() => {});
    }
    return (
        i.useEffect(() => {
            I.A.fetchGuildRoleConnectionsEligibility(s, a.id).then((e) => {
                d(e), j(e.some((e) => e.every((e) => e.result))), g(!1);
            });
        }, [s, a.id, V, z]),
        i.useEffect(() => {
            ei.default.track(ex.HAw.PASSPORT_CHALLENGE_VIEWED, { role_id: a.id, ...(0, $.H$)(s) });
        }, [s, a.id]),
        i.useEffect(() => {
            N &&
                null != ed &&
                ed.roles.includes(a.id) &&
                (v(!1),
                ej.length > 0 ? o(2) : l?.(),
                ei.default.track(ex.HAw.PASSPORT_CHALLENGE_FINISHED, { role_id: a.id, ...(0, $.H$)(s) }));
        }, [N, ej.length, ed, s, a.id, l]),
        (0, n.jsxs)(S.EO, {
            size: S.rI.MEDIUM,
            transitionState: t,
            "aria-label": em.intl.string(em.t.zOZh3R),
            className: eh.CR,
            parentComponent: "GuildRoleConnectionsConnectAccountsModal",
            children: [
                (function () {
                    switch (r) {
                        case 0:
                            return (0, n.jsxs)(S.rQ, {
                                className: eh.wx,
                                separator: !1,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: eh.TK,
                                        children: (0, n.jsx)(f.D, {
                                            variant: "heading-xl/semibold",
                                            children: em.intl.string(em.t.zOZh3R),
                                        }),
                                    }),
                                    (0, n.jsx)(S.s_, { onClick: () => ef() }),
                                ],
                            });
                        case 1: {
                            c()(null != H, "lastPlatformConnected is null");
                            let e = O.A.get(H)?.name ?? Y?.name;
                            return (0, n.jsxs)(S.rQ, {
                                className: eh.wx,
                                separator: !1,
                                children: [
                                    (0, n.jsx)(f.D, {
                                        variant: "heading-xl/semibold",
                                        className: eh.TK,
                                        children: em.intl.format(em.t.yQvgBO, { platformName: e }),
                                    }),
                                    (0, n.jsx)(S.s_, { onClick: () => ef() }),
                                ],
                            });
                        }
                        case 2:
                            return (0, n.jsxs)(S.rQ, {
                                className: eh.wx,
                                separator: !1,
                                children: [
                                    (0, n.jsx)(f.D, {
                                        variant: "heading-xl/extrabold",
                                        className: eh.TK,
                                        children: em.intl.string(em.t.najNdz),
                                    }),
                                    (0, n.jsx)(S.s_, { onClick: () => ef(!0) }),
                                ],
                            });
                        default:
                            return null;
                    }
                })(),
                (0, n.jsx)(P.Y, {
                    step: r,
                    steps: [0, 1, 2],
                    children: (function () {
                        switch (r) {
                            case 0: {
                                let e = null != u && u.length > 1,
                                    t = null != u && 1 === u.length && 1 === u[0].length;
                                return (0, n.jsx)(S.$m, {
                                    children:
                                        A || null == u
                                            ? (0, n.jsx)(_.y, { className: eh.NL })
                                            : (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                      (0, n.jsx)(p.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-default",
                                                          children: em.intl.format(
                                                              t ? em.t.jHfRvZ : e ? em.t["mOQ8k+"] : em.t.U0olLg,
                                                              { roleName: a.name },
                                                          ),
                                                      }),
                                                      (0, n.jsx)(k.Ip, {
                                                          className: eh.NL,
                                                          children: (0, n.jsx)(eg, {
                                                              eligibilityStatesGroups: u,
                                                              onPlatformConnect: eE,
                                                              onPlatformConnected: eC,
                                                          }),
                                                      }),
                                                      (0, n.jsx)(p.E, {
                                                          variant: "text-xs/normal",
                                                          className: eh.PJ,
                                                          color: "text-default",
                                                          children: em.intl.format(em.t.gsgvxh, {
                                                              privacyPolicyUrl: ex.X7G.PRIVACY,
                                                              onAuthorizedApplicationsClick: () => ep(),
                                                              onConnectionsClick: () => ev(),
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                });
                            }
                            case 1: {
                                c()(null != H, "lastPlatformConnected is null");
                                let e = V.find((e) => {
                                        let { type: t } = e;
                                        return H === t;
                                    }),
                                    t = en?.find((e) => {
                                        let { application: t } = e;
                                        return t.id === Y?.id;
                                    });
                                return (0, n.jsxs)(S.$m, {
                                    children: [
                                        (0, n.jsx)(p.E, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            children: em.intl.format(em.t.gsgvxh, {
                                                privacyPolicyUrl: ex.X7G.PRIVACY,
                                                onAuthorizedApplicationsClick: () => ep(),
                                                onConnectionsClick: () => ev(),
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: eh.m1,
                                            children:
                                                null == e && null == t
                                                    ? (0, n.jsx)(_.y, { className: eh.bD })
                                                    : (0, n.jsxs)(n.Fragment, {
                                                          children: [
                                                              null != e
                                                                  ? (0, n.jsxs)(n.Fragment, {
                                                                        children: [
                                                                            (0, n.jsxs)("div", {
                                                                                className: eh.yk,
                                                                                children: [
                                                                                    (0, n.jsx)(p.E, {
                                                                                        variant: "eyebrow",
                                                                                        color: "text-default",
                                                                                        children: em.intl.string(
                                                                                            em.t.TOjkEg,
                                                                                        ),
                                                                                    }),
                                                                                    (0, n.jsx)(F.wQ, {
                                                                                        connectedAccount: e,
                                                                                        userId: D,
                                                                                        theme: er,
                                                                                        locale: ec,
                                                                                        className: eh.eT,
                                                                                        showMetadata: E,
                                                                                        showInvisibleIcon: L,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, n.jsxs)("div", {
                                                                                className: eh.yk,
                                                                                children: [
                                                                                    (0, n.jsx)(p.E, {
                                                                                        variant: "eyebrow",
                                                                                        color: "text-default",
                                                                                        children: em.intl.string(
                                                                                            em.t.jndPhX,
                                                                                        ),
                                                                                    }),
                                                                                    (0, n.jsx)(eN, {
                                                                                        account: e,
                                                                                        setShowPreviewInvisibleIcon: G,
                                                                                        setShowPreviewMetadata: R,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    })
                                                                  : null,
                                                              null != t
                                                                  ? (0, n.jsxs)("div", {
                                                                        className: eh.yk,
                                                                        children: [
                                                                            (0, n.jsxs)("div", {
                                                                                className: eh.a5,
                                                                                children: [
                                                                                    (0, n.jsx)(p.E, {
                                                                                        variant: "eyebrow",
                                                                                        color: "text-default",
                                                                                        children: em.intl.string(
                                                                                            em.t.TOjkEg,
                                                                                        ),
                                                                                    }),
                                                                                    (0, n.jsx)(h.m, {
                                                                                        text: em.intl.string(
                                                                                            em.t.x3svVc,
                                                                                        ),
                                                                                        children: (0, n.jsx)(y.m, {
                                                                                            size: "xs",
                                                                                            color: "currentColor",
                                                                                        }),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, n.jsx)(F.Wc, {
                                                                                applicationRoleConnection: t,
                                                                                className: eh.eT,
                                                                                locale: ec,
                                                                            }),
                                                                        ],
                                                                    })
                                                                  : null,
                                                          ],
                                                      }),
                                        }),
                                    ],
                                });
                            }
                            case 2:
                                return (0, n.jsxs)(S.$m, {
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: eh.kf,
                                            children: [
                                                (0, n.jsx)(eo.A, { guildId: s, className: eh.w$, role: a, size: 24 }),
                                                (0, n.jsx)(p.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: eh.jm,
                                                    children: a.name,
                                                }),
                                            ],
                                        }),
                                        (0, n.jsx)(k.Ip, {
                                            className: eh.eu,
                                            children: ej.map((e) => (0, n.jsx)(eA, { channel: e }, e.id)),
                                        }),
                                    ],
                                });
                            default:
                                return null;
                        }
                    })(),
                }),
                (function () {
                    let e = u?.flat().some((e) => null == e.application_id) ?? !1;
                    switch (r) {
                        case 0:
                            return (0, n.jsxs)(S.jl, {
                                children: [
                                    (0, n.jsx)(w.$, {
                                        variant: "primary",
                                        text: em.intl.string(em.t["8SuVoE"]),
                                        onClick: () => ey(),
                                        disabled: A || !m || N,
                                    }),
                                    e
                                        ? (0, n.jsx)("div", {
                                              className: eh.yY,
                                              children: (0, n.jsx)(T.Q, {
                                                  variant: "primary",
                                                  text: em.intl.string(em.t.VXV55P),
                                                  onClick: ev,
                                              }),
                                          })
                                        : null,
                                ],
                            });
                        case 1:
                            return (0, n.jsx)(S.jl, {
                                children: (0, n.jsx)(w.$, {
                                    variant: "primary",
                                    text: em.intl.string(em.t.i4jeWR),
                                    onClick: () => o(0),
                                }),
                            });
                        default:
                            return (0, n.jsxs)(S.jl, {
                                children: [
                                    (0, n.jsx)(w.$, {
                                        variant: "primary",
                                        text: em.intl.string(em.t.cpT0Cq),
                                        onClick: () => ef(!0),
                                    }),
                                    e
                                        ? (0, n.jsx)("div", {
                                              className: eh.yY,
                                              children: (0, n.jsx)(T.Q, {
                                                  variant: "primary",
                                                  text: em.intl.string(em.t.VXV55P),
                                                  onClick: ev,
                                              }),
                                          })
                                        : null,
                                ],
                            });
                    }
                })(),
            ],
        })
    );
}

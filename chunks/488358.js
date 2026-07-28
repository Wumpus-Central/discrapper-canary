l.d(t, { default: () => ef });
var n = l(477900),
    i = l(582128),
    s = l(503698),
    a = l.n(s),
    r = l(284009),
    o = l.n(r),
    c = l(435558),
    u = l.n(c),
    d = l(485845),
    m = l(189213),
    x = l(17928),
    h = l(661531),
    A = l(462887),
    p = l(297264),
    f = l(834730),
    j = l(933832),
    g = l(939249),
    v = l(602853),
    y = l(866665),
    N = l(885574),
    E = l(243721),
    b = l(192308),
    S = l(231723),
    C = l(289873),
    _ = l(364522),
    k = l(123292),
    P = l(77468),
    T = l(66834),
    w = l(730134),
    R = l(964486),
    G = l(736653),
    I = l(573648),
    L = l(95561),
    M = l(206828),
    V = l(858177),
    H = l(709066),
    O = l(920268),
    U = l(47167),
    D = l(713654),
    z = l(733110),
    X = l(46937),
    F = l(773669),
    $ = l(780964),
    B = l(766075),
    Y = l(889227),
    Q = l(280450),
    W = l(734057),
    Z = l(30370),
    K = l(696451),
    q = l(576705),
    J = l(147925),
    ee = l(174459),
    et = l(619006),
    el = l(370480),
    en = l(968309),
    ei = l(355971),
    es = l(967740),
    ea = l(293260),
    er = l(783419),
    eo = l(652215),
    ec = l(375708),
    eu = l(814275);
function ed(e) {
    let { platformType: t, className: l } = e,
        i = (0, G.Ay)(),
        s = I.A.get(t);
    return (0, n.jsx)("img", {
        src: (0, A.q)(i) ? s.icon.lightSVG : s.icon.darkSVG,
        alt: "",
        className: a()(eu.tV, l),
    });
}
function em(e) {
    let { channel: t, className: l } = e,
        i = (0, D.gU)(t),
        s = (0, U.Ay)(t);
    return (0, n.jsxs)("div", {
        className: a()(eu.HA, l),
        children: [
            null != i ? (0, n.jsx)(i, { className: eu.er }) : null,
            (0, n.jsx)(p.D, { variant: "heading-lg/semibold", color: "text-default", className: eu.Kw, children: s }),
        ],
    });
}
function ex(e) {
    let t,
        { connectionType: l, connectionMetadataField: i, operator: s, value: a, result: r, description: o } = e,
        c = null;
    if (l === er.UX) return null;
    if (null != o)
        switch (s) {
            case er.so.LESS_THAN:
                c = ec.intl.format(ec.t["2p7dA3"], { description: o, count: Math.max(0, Number(a) - 1) });
                break;
            case er.so.GREATER_THAN:
                c = ec.intl.format(ec.t["2p7dA3"], { description: o, count: Math.max(0, Number(a) + 1) });
                break;
            default:
                c = o;
        }
    else {
        let e;
        switch (s) {
            case er.so.EQUAL:
                (e = ec.t["0BlpbA"]), l === eo.fg2.PAYPAL && i === er.pK.PAYPAL_VERIFIED && (e = ec.t.dcSDhW);
                break;
            case er.so.NOT_EQUAL:
                e = ec.t.otcpTN;
                break;
            case er.so.LESS_THAN:
                e = ec.t.Ef35xs;
                break;
            case er.so.GREATER_THAN:
                e = ec.t["8W9OXU"];
                break;
            case void 0:
            case null:
                return null;
        }
        if (
            null ==
            (c = (0, el.RP)({ connectionType: l, connectionMetadataField: i, operator: s, operatorText: e, value: a }))
        )
            return null;
    }
    return (
        (t = r ? "text-default" : "text-feedback-critical"),
        (0, n.jsx)(f.E, { variant: "text-xs/normal", color: t, className: eu.E6, children: c })
    );
}
function eh(e) {
    let t,
        s,
        { eligibilityState: r, onAttempted: o } = e,
        c = (0, V.O)(r.application_id),
        { canStartAuthorization: u, startAuthorization: m } = (0, M.RD)(c),
        x = u,
        h = r.identity_connected_account_type,
        A = r.identity_auth_required_scopes;
    if (!x && null != h && null != A) {
        let e = I.A.get(h);
        null != e && e.enabled && (x = !0);
    }
    let p = r.application,
        v = i.useMemo(() => (p?.bot != null ? new Y.A(p.bot) : null), [p]),
        y = r.result;
    null != v && (t = (0, n.jsx)(H.A, { className: eu.AO, verified: v.isVerifiedBot() })),
        (s = y
            ? (0, n.jsx)(j.A, { size: "md", color: "currentColor", className: eu.rA })
            : x
              ? (0, n.jsx)(J.A, { direction: J.A.Directions.RIGHT, className: eu.t4 })
              : (0, n.jsx)(f.E, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: ec.intl.string(ec.t.cEts68),
                }));
    let N = i.useCallback(() => {
        y ||
            !x ||
            (o(null != h && Z.A.getAccounts().some((e) => e.type === h) ? null : r.connection_type, p ?? null),
            u
                ? m({ analyticsLocations: ["Verified Roles Connect Accounts Modal"] })
                : null != h &&
                  null != A &&
                  Promise.resolve()
                      .then(l.bind(l, 887909))
                      .then((e) => {
                          let { openOAuth2Modal: t } = e;
                          t({
                              clientId: r.application_id ?? "",
                              scopes: A,
                              integrationType: d.b.USER_INSTALL,
                              connectedAccountProvider: h,
                              callback: () => !0,
                          });
                      }));
    }, [y, x, u, m, o, p, r.connection_type, r.application_id, h, A]);
    return el.iC.includes(p?.id ?? "")
        ? null
        : (0, n.jsxs)(g.D, {
              className: a()(eu.UY, y ? eu.o6 : null, x ? null : eu.pC),
              onClick: !y && x ? N : void 0,
              children: [
                  null != v ? (0, n.jsx)(w.A, { user: v }) : null,
                  (0, n.jsxs)("div", {
                      className: eu.EZ,
                      children: [
                          (0, n.jsxs)("div", {
                              className: eu.Pf,
                              children: [
                                  (0, n.jsx)(f.E, {
                                      variant: "text-md/medium",
                                      color: "text-strong",
                                      children: p?.name,
                                  }),
                                  t,
                              ],
                          }),
                          p?.name != null ? (0, n.jsx)(ex, { connectionType: er.UX, result: y }) : null,
                          x || y
                              ? null
                              : (0, n.jsx)(f.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: ec.intl.string(ec.t["+z5dYe"]),
                                }),
                      ],
                  }),
                  s,
              ],
          });
}
function eA(e) {
    let { eligibilityStatesGroups: t, onPlatformConnect: l, onPlatformConnected: s } = e,
        [r, c] = i.useState({}),
        [d, m] = i.useState(0),
        [x, A] = i.useState(null),
        [p, E] = i.useState(null),
        b = i.useMemo(() => u().flatten(t), [t]),
        S = i.useMemo(
            () =>
                u().groupBy(b, (e) => `${e.connection_type}${null != e.application_id ? `:${e.application_id}` : ""}`),
            [b],
        );
    i.useEffect(() => m(Date.now()), [b]),
        i.useEffect(() => {
            if (null == x) return;
            let e = S[`${x}${null != p ? `:${p.id}` : ""}`];
            null == e || (e.every((e) => e.result) && s(e[0]?.identity_connected_account_type ?? x, p));
        }, [S, x, p, s]);
    let C = (0, v.r)(h.A.unsafe_rawColors.GREEN_330).hex();
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
                if (e.startsWith(`${er.UX}:`) && null != u[0])
                    return (0, n.jsx)(
                        eh,
                        {
                            eligibilityState: u[0],
                            onAttempted: (e, t) => {
                                A(e), E(t), l();
                            },
                        },
                        e,
                    );
                let m = u.find((e) => null == e.operator),
                    x = u.filter((e) => null != e.operator),
                    h = (null == m || m.result) && x.every((e) => e.result),
                    p = u.find((e) => null != e.application),
                    v = I.A.get(e),
                    b = null == v || v.enabled,
                    _ =
                        null != v &&
                        v.migrationData?.getMigrationExperimentEnabled("GuildRoleConnectionsConnectAccountsModal"),
                    k = _ || !b,
                    P = p?.application,
                    T = P?.bot != null ? new Y.A(P.bot) : null;
                el.iC.includes(P?.id ?? "")
                    ? (t = (0, n.jsx)(ei.A, { className: eu.AO, color: C, size: 16 }))
                    : null != T && (t = (0, n.jsx)(H.A, { className: eu.AO, verified: T.isVerifiedBot() }));
                let R = r[v?.type ?? er.zR],
                    G = !h && null != R && R <= d;
                return (
                    (i = h
                        ? (0, n.jsx)(j.A, { size: "md", color: "currentColor", className: eu.rA })
                        : G
                          ? (0, n.jsx)(f.E, {
                                variant: "text-md/medium",
                                color: "text-link",
                                className: eu.dj,
                                children: ec.intl.string(ec.t["5911Lb"]),
                            })
                          : k
                            ? (0, n.jsx)(f.E, {
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: ec.intl.string(ec.t.cEts68),
                              })
                            : (0, n.jsx)(J.A, { direction: J.A.Directions.RIGHT, className: eu.t4 })),
                    _
                        ? (s = ec.intl.format(ec.t.Rzz1Xs, { platformName: v?.name }))
                        : v?.type === eo.fg2.STEAM && (s = ec.intl.string(ec.t.NcZh6K)),
                    (0, n.jsxs)(
                        g.D,
                        {
                            className: a()(eu.UY, h ? eu.o6 : null, k ? eu.pC : null),
                            onClick:
                                h || k
                                    ? void 0
                                    : () => {
                                          var e;
                                          return (
                                              (e = v?.type ?? er.zR),
                                              void ((0, en.A)({
                                                  platformType: e,
                                                  location: "Verified Roles Connect Accounts Modal",
                                                  overrideUrl: P?.role_connections_verification_url,
                                              }),
                                              c({ ...r, [e]: Date.now() }),
                                              A(e),
                                              E(P ?? null),
                                              l())
                                          );
                                      },
                            children: [
                                !h && G
                                    ? (0, n.jsx)("div", {
                                          className: eu.Z1,
                                          children: (0, n.jsx)(f.E, {
                                              variant: "text-xs/normal",
                                              color: "text-overlay-light",
                                              children: ec.intl.string(ec.t.UB3hKo),
                                          }),
                                      })
                                    : null,
                                null != v ? (0, n.jsx)(ed, { platformType: v.type }) : null,
                                null != T ? (0, n.jsx)(w.A, { user: T }) : null,
                                (0, n.jsxs)("div", {
                                    className: eu.EZ,
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: eu.Pf,
                                            children: [
                                                (0, n.jsx)(f.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    children: v?.name ?? P?.name,
                                                }),
                                                t,
                                                null != s
                                                    ? (0, n.jsx)(y.m, {
                                                          text: s,
                                                          children: (0, n.jsx)(N.m, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: eu.$I,
                                                          }),
                                                      })
                                                    : null,
                                            ],
                                        }),
                                        x.map((e) => {
                                            let {
                                                connection_type: t,
                                                connection_metadata_field: l,
                                                operator: i,
                                                value: s,
                                                result: a,
                                                description: r,
                                            } = e;
                                            return (
                                                o()(null != l, "connectionMetadataField is null"),
                                                o()(null != i, "operator is null"),
                                                o()(null != s, "value is null"),
                                                (0, n.jsx)(
                                                    ex,
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
function ep(e) {
    let t,
        l,
        s,
        { account: a, setShowPreviewInvisibleIcon: r, setShowPreviewMetadata: o } = e,
        [c, u] = i.useState(a.friendSync),
        [d, m] = i.useState(a.showActivity),
        [x, h] = i.useState(1 === a.metadataVisibility),
        [A, p] = i.useState(1 === a.visibility);
    (0, R.Ay)(() => {
        r(!A), o(x);
    });
    let f = I.A.get(a.type);
    return (
        eo.txh.has(a.type) &&
            (t = (0, n.jsx)(E.d, {
                label: ec.intl.string(ec.t["+KCMSi"]),
                checked: c,
                onChange: (e) => {
                    u(e), P.A.setFriendSync(a.type, a.id, e);
                },
            })),
        eo.ewM.has(a.type) &&
            (l = (0, n.jsx)(E.d, {
                label: ec.intl.format(ec.t["6u6J0q"], { platform: f.name }),
                checked: d,
                onChange: (e) => {
                    m(e), P.A.setShowActivity(a.type, a.id, e);
                },
            })),
        !0 === f.hasMetadata &&
            (s = (0, n.jsx)(E.d, {
                label: ec.intl.string(ec.t.FYKGsL),
                checked: x,
                disabled: !A,
                onChange: (e) => {
                    o(e), h(e), P.A.setMetadataVisibility(a.type, a.id, +!!e);
                },
            })),
        (0, n.jsxs)("div", {
            className: eu.ek,
            children: [
                (0, n.jsx)(E.d, {
                    label: ec.intl.string(ec.t.f7yOAX),
                    checked: A,
                    onChange: (e) => {
                        r(!e), p(e), P.A.setVisibility(a.type, a.id, +!!e);
                    },
                }),
                s,
                l,
                t,
            ],
        })
    );
}
function ef(e) {
    let t,
        l,
        s,
        a,
        r,
        { transitionState: c, onClose: u, guildId: d, role: h } = e,
        [A, p] = i.useState(0),
        [j, g] = i.useState(null),
        [v, E] = i.useState(!1),
        [P, w] = i.useState(!0),
        [R, M] = i.useState(!1),
        [V, H] = i.useState(!0),
        [U, D] = i.useState(!1),
        Y = (0, x.bG)([Z.A], () => Z.A.getAccounts()),
        J = (0, x.bG)([z.default], () => z.default.getNewestTokens()),
        el = (0, x.bG)([Q.default], () => Q.default.getId()),
        [en, ei] = i.useState(null),
        [er, ed] = i.useState(null),
        [ex, eh] = i.useState(null),
        ef = (0, G.Ay)(),
        ej = (0, x.bG)([F.default], () => F.default.locale),
        eg = (0, x.bG)([K.Ay], () => K.Ay.getMember(d, el)),
        ev = Object.values((0, x.bG)([W.A], () => W.A.getMutableGuildChannelsForGuild(d))).filter(
            (e) => q.A.can(eo.xBc.VIEW_CHANNEL, e) && q.A.can(eo.xBc.SEND_MESSAGES, e) && (0, O.A)(e).includes(h),
        );
    function ey() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        u?.(), e && (0, b.closeModal)(ea.CB, S.SY);
    }
    function eN() {
        ey(!0), (0, B.openUserSettings)($.X.AUTHORIZED_APPS_PANEL);
    }
    function eE() {
        ey(!0), (0, B.openUserSettings)($.X.CONNECTIONS_PANEL);
    }
    async function eb() {
        M(!0), await T.A.assignGuildRoleConnection(d, h.id);
    }
    i.useEffect(() => {
        T.A.fetchGuildRoleConnectionsEligibility(d, h.id).then((e) => {
            g(e), E(e.some((e) => e.every((e) => e.result))), w(!1);
        });
    }, [d, h.id, Y, J]),
        i.useEffect(() => {
            ee.default.track(eo.HAw.PASSPORT_CHALLENGE_VIEWED, { role_id: h.id, ...(0, L.H$)(d) });
        }, [d, h.id]),
        i.useEffect(() => {
            R &&
                null != eg &&
                eg.roles.includes(h.id) &&
                (M(!1),
                ev.length > 0 ? p(2) : u?.(),
                ee.default.track(eo.HAw.PASSPORT_CHALLENGE_FINISHED, { role_id: h.id, ...(0, L.H$)(d) }));
        }, [R, ev.length, eg, d, h.id, u]);
    let eS = j?.flat().some((e) => null == e.application_id) ?? !1;
    switch (A) {
        case 0: {
            let e = null != j && j.length > 1,
                i = null != j && 1 === j.length && 1 === j[0].length;
            (t = ec.intl.string(ec.t.zOZh3R)),
                (l =
                    P || null == j
                        ? (0, n.jsx)(C.y, { className: eu.NL })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(f.E, {
                                      variant: "text-md/medium",
                                      color: "text-default",
                                      children: ec.intl.format(i ? ec.t.jHfRvZ : e ? ec.t["mOQ8k+"] : ec.t.U0olLg, {
                                          roleName: h.name,
                                      }),
                                  }),
                                  (0, n.jsx)(_.Ip, {
                                      className: eu.NL,
                                      children: (0, n.jsx)(eA, {
                                          eligibilityStatesGroups: j,
                                          onPlatformConnect: function () {
                                              ee.default.track(eo.HAw.PASSPORT_CHALLENGE_STARTED, {
                                                  role_id: h.id,
                                                  ...(0, L.H$)(d),
                                              });
                                          },
                                          onPlatformConnected: function (e) {
                                              let t =
                                                  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                              ei(e),
                                                  ed(t),
                                                  p(1),
                                                  null != t &&
                                                      (0, et.XC)()
                                                          .then((e) => {
                                                              eh(e);
                                                          })
                                                          .catch(() => {});
                                          },
                                      }),
                                  }),
                                  (0, n.jsx)(f.E, {
                                      variant: "text-xs/normal",
                                      className: eu.PJ,
                                      color: "text-default",
                                      children: ec.intl.format(ec.t.gsgvxh, {
                                          privacyPolicyUrl: eo.X7G.PRIVACY,
                                          onAuthorizedApplicationsClick: () => eN(),
                                          onConnectionsClick: () => eE(),
                                      }),
                                  }),
                              ],
                          })),
                (s = [
                    {
                        variant: "primary",
                        text: ec.intl.string(ec.t["8SuVoE"]),
                        onClick: () => eb(),
                        disabled: P || !v || R,
                    },
                ]),
                (a = eS
                    ? (0, n.jsx)(k.Q, { variant: "primary", text: ec.intl.string(ec.t.VXV55P), onClick: eE })
                    : void 0),
                (r = () => (ey(), Promise.resolve()));
            break;
        }
        case 1: {
            o()(null != en, "lastPlatformConnected is null");
            let e = I.A.get(en)?.name ?? er?.name,
                i = Y.find((e) => {
                    let { type: t } = e;
                    return en === t;
                }),
                c = ex?.find((e) => {
                    let { application: t } = e;
                    return t.id === er?.id;
                });
            (t = ec.intl.formatToPlainString(ec.t.yQvgBO, { platformName: e })),
                (l = (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(f.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: ec.intl.format(ec.t.gsgvxh, {
                                privacyPolicyUrl: eo.X7G.PRIVACY,
                                onAuthorizedApplicationsClick: () => eN(),
                                onConnectionsClick: () => eE(),
                            }),
                        }),
                        (0, n.jsx)("div", {
                            className: eu.m1,
                            children:
                                null == i && null == c
                                    ? (0, n.jsx)(C.y, { className: eu.bD })
                                    : (0, n.jsxs)(n.Fragment, {
                                          children: [
                                              null != i
                                                  ? (0, n.jsxs)(n.Fragment, {
                                                        children: [
                                                            (0, n.jsxs)("div", {
                                                                className: eu.yk,
                                                                children: [
                                                                    (0, n.jsx)(f.E, {
                                                                        variant: "eyebrow",
                                                                        color: "text-default",
                                                                        children: ec.intl.string(ec.t.TOjkEg),
                                                                    }),
                                                                    (0, n.jsx)(X.wQ, {
                                                                        connectedAccount: i,
                                                                        userId: el,
                                                                        theme: ef,
                                                                        locale: ej,
                                                                        className: eu.eT,
                                                                        showMetadata: V,
                                                                        showInvisibleIcon: U,
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, n.jsxs)("div", {
                                                                className: eu.yk,
                                                                children: [
                                                                    (0, n.jsx)(f.E, {
                                                                        variant: "eyebrow",
                                                                        color: "text-default",
                                                                        children: ec.intl.string(ec.t.jndPhX),
                                                                    }),
                                                                    (0, n.jsx)(ep, {
                                                                        account: i,
                                                                        setShowPreviewInvisibleIcon: D,
                                                                        setShowPreviewMetadata: H,
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    })
                                                  : null,
                                              null != c
                                                  ? (0, n.jsxs)("div", {
                                                        className: eu.yk,
                                                        children: [
                                                            (0, n.jsxs)("div", {
                                                                className: eu.a5,
                                                                children: [
                                                                    (0, n.jsx)(f.E, {
                                                                        variant: "eyebrow",
                                                                        color: "text-default",
                                                                        children: ec.intl.string(ec.t.TOjkEg),
                                                                    }),
                                                                    (0, n.jsx)(y.m, {
                                                                        text: ec.intl.string(ec.t.x3svVc),
                                                                        children: (0, n.jsx)(N.m, {
                                                                            size: "xs",
                                                                            color: "currentColor",
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, n.jsx)(X.Wc, {
                                                                applicationRoleConnection: c,
                                                                className: eu.eT,
                                                                locale: ej,
                                                            }),
                                                        ],
                                                    })
                                                  : null,
                                          ],
                                      }),
                        }),
                    ],
                })),
                (s = [{ variant: "primary", text: ec.intl.string(ec.t.i4jeWR), onClick: () => p(0) }]),
                (a = void 0),
                (r = () => (ey(), Promise.resolve()));
            break;
        }
        case 2:
            (t = ec.intl.string(ec.t.najNdz)),
                (l = (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsxs)("div", {
                            className: eu.kf,
                            children: [
                                (0, n.jsx)(es.A, { guildId: d, className: eu.w$, role: h, size: 24 }),
                                (0, n.jsx)(f.E, {
                                    variant: "text-lg/semibold",
                                    color: "text-strong",
                                    className: eu.jm,
                                    children: h.name,
                                }),
                            ],
                        }),
                        (0, n.jsx)(_.Ip, {
                            className: eu.eu,
                            children: ev.map((e) => (0, n.jsx)(em, { channel: e }, e.id)),
                        }),
                    ],
                })),
                (s = [{ variant: "primary", text: ec.intl.string(ec.t.cpT0Cq), onClick: () => ey(!0) }]),
                (a = eS
                    ? (0, n.jsx)(k.Q, { variant: "primary", text: ec.intl.string(ec.t.VXV55P), onClick: eE })
                    : void 0),
                (r = () => (ey(!0), Promise.resolve()));
    }
    return (0, n.jsx)(m.Modal, {
        transitionState: c,
        onClose: r,
        title: t,
        actions: s,
        actionBarInput: a,
        children: l,
    });
}

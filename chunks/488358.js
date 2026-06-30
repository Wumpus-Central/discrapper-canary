l.d(t, { default: () => ej });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(284009),
    o = l.n(r),
    c = l(735438),
    u = l.n(c),
    d = l(485845),
    m = l(189213),
    x = l(17928),
    h = l(661531),
    A = l(990078),
    p = l(462887),
    f = l(534514),
    j = l(834730),
    g = l(933832),
    v = l(939249),
    y = l(602853),
    N = l(885574),
    E = l(243721),
    S = l(192308),
    b = l(231723),
    C = l(289873),
    _ = l(364522),
    k = l(123292),
    P = l(77468),
    w = l(66834),
    R = l(730134),
    T = l(964486),
    I = l(736653),
    G = l(573648),
    L = l(95561),
    M = l(941314),
    V = l(206828),
    H = l(858177),
    O = l(709066),
    U = l(920268),
    D = l(47167),
    z = l(713654),
    X = l(46937),
    F = l(773669),
    $ = l(780964),
    B = l(766075),
    Y = l(889227),
    K = l(495544),
    Q = l(546183),
    W = l(734057),
    Z = l(30370),
    q = l(696451),
    J = l(576705),
    ee = l(147925),
    et = l(174459),
    el = l(619006),
    en = l(370480),
    ei = l(968309),
    es = l(355971),
    ea = l(967740),
    er = l(293260),
    eo = l(783419),
    ec = l(652215),
    eu = l(375708),
    ed = l(353659);
function em(e) {
    let { platformType: t, className: l } = e,
        i = (0, I.Ay)(),
        s = G.A.get(t);
    return (0, n.jsx)("img", {
        src: (0, p.q)(i) ? s.icon.lightSVG : s.icon.darkSVG,
        alt: "",
        className: a()(ed.tV, l),
    });
}
function ex(e) {
    let { channel: t, className: l } = e,
        i = (0, z.gU)(t),
        s = (0, D.Ay)(t);
    return (0, n.jsxs)("div", {
        className: a()(ed.HA, l),
        children: [
            null != i ? (0, n.jsx)(i, { className: ed.er }) : null,
            (0, n.jsx)(f.D, { variant: "heading-lg/semibold", color: "text-default", className: ed.Kw, children: s }),
        ],
    });
}
function eh(e) {
    let t,
        { connectionType: l, connectionMetadataField: i, operator: s, value: a, result: r, description: o } = e,
        c = null;
    if (l === eo.UX) return null;
    if (null != o)
        switch (s) {
            case eo.so.LESS_THAN:
                c = eu.intl.format(eu.t["2p7dA3"], { description: o, count: Math.max(0, Number(a) - 1) });
                break;
            case eo.so.GREATER_THAN:
                c = eu.intl.format(eu.t["2p7dA3"], { description: o, count: Math.max(0, Number(a) + 1) });
                break;
            default:
                c = o;
        }
    else {
        let e;
        switch (s) {
            case eo.so.EQUAL:
                (e = eu.t["0BlpbA"]), l === ec.fg2.PAYPAL && i === eo.pK.PAYPAL_VERIFIED && (e = eu.t.dcSDhW);
                break;
            case eo.so.NOT_EQUAL:
                e = eu.t.otcpTN;
                break;
            case eo.so.LESS_THAN:
                e = eu.t.Ef35xs;
                break;
            case eo.so.GREATER_THAN:
                e = eu.t["8W9OXU"];
                break;
            case void 0:
            case null:
                return null;
        }
        if (
            null ==
            (c = (0, en.RP)({ connectionType: l, connectionMetadataField: i, operator: s, operatorText: e, value: a }))
        )
            return null;
    }
    return (
        (t = r ? "text-default" : "text-feedback-critical"),
        (0, n.jsx)(j.E, { variant: "text-xs/normal", color: t, className: ed.E6, children: c })
    );
}
function eA(e) {
    let t,
        s,
        { eligibilityState: r, onAttempted: o } = e,
        c = (0, H.O)(r.application_id),
        { canStartAuthorization: u, startAuthorization: m } = (0, V.RD)(c),
        x = u,
        h = r.identity_connected_account_type,
        A = r.identity_auth_required_scopes;
    if (!x && null != h && null != A) {
        let e = G.A.get(h);
        null != e && e.enabled && (x = !0);
    }
    let p = r.application,
        f = i.useMemo(() => (p?.bot != null ? new Y.A(p.bot) : null), [p]),
        y = r.result;
    null != f && (t = (0, n.jsx)(O.A, { className: ed.AO, verified: f.isVerifiedBot() })),
        (s = y
            ? (0, n.jsx)(g.A, { size: "md", color: "currentColor", className: ed.rA })
            : x
              ? (0, n.jsx)(ee.A, { direction: ee.A.Directions.RIGHT, className: ed.t4 })
              : (0, n.jsx)(j.E, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: eu.intl.string(eu.t.cEts68),
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
    return en.iC.includes(p?.id ?? "")
        ? null
        : (0, n.jsxs)(v.D, {
              className: a()(ed.UY, y ? ed.o6 : null, x ? null : ed.pC),
              onClick: !y && x ? N : void 0,
              children: [
                  null != f ? (0, n.jsx)(R.A, { user: f }) : null,
                  (0, n.jsxs)("div", {
                      className: ed.EZ,
                      children: [
                          (0, n.jsxs)("div", {
                              className: ed.Pf,
                              children: [
                                  (0, n.jsx)(j.E, {
                                      variant: "text-md/medium",
                                      color: "text-strong",
                                      children: p?.name,
                                  }),
                                  t,
                              ],
                          }),
                          p?.name != null ? (0, n.jsx)(eh, { connectionType: eo.UX, result: y }) : null,
                          x || y
                              ? null
                              : (0, n.jsx)(j.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: eu.intl.string(eu.t["+z5dYe"]),
                                }),
                      ],
                  }),
                  s,
              ],
          });
}
function ep(e) {
    let { eligibilityStatesGroups: t, onPlatformConnect: l, onPlatformConnected: s } = e,
        [r, c] = i.useState({}),
        [d, m] = i.useState(0),
        [x, p] = i.useState(null),
        [f, E] = i.useState(null),
        S = i.useMemo(() => u().flatten(t), [t]),
        b = i.useMemo(
            () =>
                u().groupBy(S, (e) => `${e.connection_type}${null != e.application_id ? `:${e.application_id}` : ""}`),
            [S],
        );
    i.useEffect(() => m(Date.now()), [S]),
        i.useEffect(() => {
            if (null == x) return;
            let e = b[`${x}${null != f ? `:${f.id}` : ""}`];
            null == e || (e.every((e) => e.result) && s(e[0]?.identity_connected_account_type ?? x, f));
        }, [b, x, f, s]);
    let C = (0, y.r)(h.A.unsafe_rawColors.GREEN_330).hex(),
        _ = (0, M.useIsRiotSocialSDKMigrationEnabled)({ location: "Linked Roles Modal" });
    return (0, n.jsx)(n.Fragment, {
        children: Object.keys(b)
            .sort((e, t) => {
                let l = b[e].every((e) => e.result),
                    n = b[t].every((e) => e.result);
                return !0 === l && !1 === n ? 1 : !1 === l && !0 === n ? -1 : 0;
            })
            .map((e) => {
                let t,
                    i,
                    s,
                    u = b[e];
                if (e.startsWith(`${eo.UX}:`) && null != u[0])
                    return (0, n.jsx)(
                        eA,
                        {
                            eligibilityState: u[0],
                            onAttempted: (e, t) => {
                                p(e), E(t), l();
                            },
                        },
                        e,
                    );
                let m = u.find((e) => null == e.operator),
                    x = u.filter((e) => null != e.operator),
                    h = (null == m || m.result) && x.every((e) => e.result),
                    f = u.find((e) => null != e.application),
                    y = G.A.get(e),
                    S = null == y || y.enabled,
                    k = null != y && null != y.replacedBy && _,
                    P = k || !S,
                    w = f?.application,
                    T = w?.bot != null ? new Y.A(w.bot) : null;
                en.iC.includes(w?.id ?? "")
                    ? (t = (0, n.jsx)(es.A, { className: ed.AO, color: C, size: 16 }))
                    : null != T && (t = (0, n.jsx)(O.A, { className: ed.AO, verified: T.isVerifiedBot() }));
                let I = r[y?.type ?? eo.zR],
                    L = !h && null != I && I <= d;
                return (
                    (i = h
                        ? (0, n.jsx)(g.A, { size: "md", color: "currentColor", className: ed.rA })
                        : L
                          ? (0, n.jsx)(j.E, {
                                variant: "text-md/medium",
                                color: "text-link",
                                className: ed.dj,
                                children: eu.intl.string(eu.t["5911Lb"]),
                            })
                          : P
                            ? (0, n.jsx)(j.E, {
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: eu.intl.string(eu.t.cEts68),
                              })
                            : (0, n.jsx)(ee.A, { direction: ee.A.Directions.RIGHT, className: ed.t4 })),
                    k
                        ? (s = eu.intl.format(eu.t.Rzz1Xs, { platformName: y?.name }))
                        : y?.type === ec.fg2.STEAM && (s = eu.intl.string(eu.t.NcZh6K)),
                    (0, n.jsxs)(
                        v.D,
                        {
                            className: a()(ed.UY, h ? ed.o6 : null, P ? ed.pC : null),
                            onClick:
                                h || P
                                    ? void 0
                                    : () => {
                                          var e;
                                          return (
                                              (e = y?.type ?? eo.zR),
                                              void ((0, ei.A)({
                                                  platformType: e,
                                                  location: "Verified Roles Connect Accounts Modal",
                                                  overrideUrl: w?.role_connections_verification_url,
                                              }),
                                              c({ ...r, [e]: Date.now() }),
                                              p(e),
                                              E(w ?? null),
                                              l())
                                          );
                                      },
                            children: [
                                !h && L
                                    ? (0, n.jsx)("div", {
                                          className: ed.Z1,
                                          children: (0, n.jsx)(j.E, {
                                              variant: "text-xs/normal",
                                              color: "always-white",
                                              children: eu.intl.string(eu.t.UB3hKo),
                                          }),
                                      })
                                    : null,
                                null != y ? (0, n.jsx)(em, { platformType: y.type }) : null,
                                null != T ? (0, n.jsx)(R.A, { user: T }) : null,
                                (0, n.jsxs)("div", {
                                    className: ed.EZ,
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: ed.Pf,
                                            children: [
                                                (0, n.jsx)(j.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    children: y?.name ?? w?.name,
                                                }),
                                                t,
                                                null != s
                                                    ? (0, n.jsx)(A.m, {
                                                          text: s,
                                                          children: (0, n.jsx)(N.m, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: ed.$I,
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
                                                    eh,
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
function ef(e) {
    let t,
        l,
        s,
        { account: a, setShowPreviewInvisibleIcon: r, setShowPreviewMetadata: o } = e,
        [c, u] = i.useState(a.friendSync),
        [d, m] = i.useState(a.showActivity),
        [x, h] = i.useState(1 === a.metadataVisibility),
        [A, p] = i.useState(1 === a.visibility);
    (0, T.Ay)(() => {
        r(!A), o(x);
    });
    let f = G.A.get(a.type);
    return (
        ec.txh.has(a.type) &&
            (t = (0, n.jsx)(E.d, {
                label: eu.intl.string(eu.t["+KCMSi"]),
                checked: c,
                onChange: (e) => {
                    u(e), P.A.setFriendSync(a.type, a.id, e);
                },
            })),
        ec.ewM.has(a.type) &&
            (l = (0, n.jsx)(E.d, {
                label: eu.intl.format(eu.t["6u6J0q"], { platform: f.name }),
                checked: d,
                onChange: (e) => {
                    m(e), P.A.setShowActivity(a.type, a.id, e);
                },
            })),
        !0 === f.hasMetadata &&
            (s = (0, n.jsx)(E.d, {
                label: eu.intl.string(eu.t.FYKGsL),
                checked: x,
                disabled: !A,
                onChange: (e) => {
                    o(e), h(e), P.A.setMetadataVisibility(a.type, a.id, +!!e);
                },
            })),
        (0, n.jsxs)("div", {
            className: ed.ek,
            children: [
                (0, n.jsx)(E.d, {
                    label: eu.intl.string(eu.t.f7yOAX),
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
function ej(e) {
    let t,
        l,
        s,
        a,
        r,
        { transitionState: c, onClose: u, guildId: d, role: h } = e,
        [p, f] = i.useState(0),
        [g, v] = i.useState(null),
        [y, E] = i.useState(!1),
        [P, R] = i.useState(!0),
        [T, M] = i.useState(!1),
        [V, H] = i.useState(!0),
        [O, D] = i.useState(!1),
        z = (0, x.bG)([Z.A], () => Z.A.getAccounts()),
        Y = (0, x.bG)([Q.default], () => Q.default.getNewestTokens()),
        ee = (0, x.bG)([K.default], () => K.default.getId()),
        [en, ei] = i.useState(null),
        [es, eo] = i.useState(null),
        [em, eh] = i.useState(null),
        eA = (0, I.Ay)(),
        ej = (0, x.bG)([F.default], () => F.default.locale),
        eg = (0, x.bG)([q.Ay], () => q.Ay.getMember(d, ee)),
        ev = Object.values((0, x.bG)([W.A], () => W.A.getMutableGuildChannelsForGuild(d))).filter(
            (e) => J.A.can(ec.xBc.VIEW_CHANNEL, e) && J.A.can(ec.xBc.SEND_MESSAGES, e) && (0, U.A)(e).includes(h),
        );
    function ey() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        u?.(), e && (0, S.closeModal)(er.CB, b.SY);
    }
    function eN() {
        ey(!0), (0, B.openUserSettings)($.X.AUTHORIZED_APPS_PANEL);
    }
    function eE() {
        ey(!0), (0, B.openUserSettings)($.X.CONNECTIONS_PANEL);
    }
    async function eS() {
        M(!0), await w.A.assignGuildRoleConnection(d, h.id);
    }
    i.useEffect(() => {
        w.A.fetchGuildRoleConnectionsEligibility(d, h.id).then((e) => {
            v(e), E(e.some((e) => e.every((e) => e.result))), R(!1);
        });
    }, [d, h.id, z, Y]),
        i.useEffect(() => {
            et.default.track(ec.HAw.PASSPORT_CHALLENGE_VIEWED, { role_id: h.id, ...(0, L.H$)(d) });
        }, [d, h.id]),
        i.useEffect(() => {
            T &&
                null != eg &&
                eg.roles.includes(h.id) &&
                (M(!1),
                ev.length > 0 ? f(2) : u?.(),
                et.default.track(ec.HAw.PASSPORT_CHALLENGE_FINISHED, { role_id: h.id, ...(0, L.H$)(d) }));
        }, [T, ev.length, eg, d, h.id, u]);
    let eb = g?.flat().some((e) => null == e.application_id) ?? !1;
    switch (p) {
        case 0: {
            let e = null != g && g.length > 1,
                i = null != g && 1 === g.length && 1 === g[0].length;
            (t = eu.intl.string(eu.t.zOZh3R)),
                (l =
                    P || null == g
                        ? (0, n.jsx)(C.y, { className: ed.NL })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(j.E, {
                                      variant: "text-md/medium",
                                      color: "text-default",
                                      children: eu.intl.format(i ? eu.t.jHfRvZ : e ? eu.t["mOQ8k+"] : eu.t.U0olLg, {
                                          roleName: h.name,
                                      }),
                                  }),
                                  (0, n.jsx)(_.Ip, {
                                      className: ed.NL,
                                      children: (0, n.jsx)(ep, {
                                          eligibilityStatesGroups: g,
                                          onPlatformConnect: function () {
                                              et.default.track(ec.HAw.PASSPORT_CHALLENGE_STARTED, {
                                                  role_id: h.id,
                                                  ...(0, L.H$)(d),
                                              });
                                          },
                                          onPlatformConnected: function (e) {
                                              let t =
                                                  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                              ei(e),
                                                  eo(t),
                                                  f(1),
                                                  null != t &&
                                                      (0, el.XC)()
                                                          .then((e) => {
                                                              eh(e);
                                                          })
                                                          .catch(() => {});
                                          },
                                      }),
                                  }),
                                  (0, n.jsx)(j.E, {
                                      variant: "text-xs/normal",
                                      className: ed.PJ,
                                      color: "text-default",
                                      children: eu.intl.format(eu.t.gsgvxh, {
                                          privacyPolicyUrl: ec.X7G.PRIVACY,
                                          onAuthorizedApplicationsClick: () => eN(),
                                          onConnectionsClick: () => eE(),
                                      }),
                                  }),
                              ],
                          })),
                (s = [
                    {
                        variant: "primary",
                        text: eu.intl.string(eu.t["8SuVoE"]),
                        onClick: () => eS(),
                        disabled: P || !y || T,
                    },
                ]),
                (a = eb
                    ? (0, n.jsx)(k.Q, { variant: "primary", text: eu.intl.string(eu.t.VXV55P), onClick: eE })
                    : void 0),
                (r = () => (ey(), Promise.resolve()));
            break;
        }
        case 1: {
            o()(null != en, "lastPlatformConnected is null");
            let e = G.A.get(en)?.name ?? es?.name,
                i = z.find((e) => {
                    let { type: t } = e;
                    return en === t;
                }),
                c = em?.find((e) => {
                    let { application: t } = e;
                    return t.id === es?.id;
                });
            (t = eu.intl.formatToPlainString(eu.t.yQvgBO, { platformName: e })),
                (l = (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(j.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: eu.intl.format(eu.t.gsgvxh, {
                                privacyPolicyUrl: ec.X7G.PRIVACY,
                                onAuthorizedApplicationsClick: () => eN(),
                                onConnectionsClick: () => eE(),
                            }),
                        }),
                        (0, n.jsx)("div", {
                            className: ed.m1,
                            children:
                                null == i && null == c
                                    ? (0, n.jsx)(C.y, { className: ed.bD })
                                    : (0, n.jsxs)(n.Fragment, {
                                          children: [
                                              null != i
                                                  ? (0, n.jsxs)(n.Fragment, {
                                                        children: [
                                                            (0, n.jsxs)("div", {
                                                                className: ed.yk,
                                                                children: [
                                                                    (0, n.jsx)(j.E, {
                                                                        variant: "eyebrow",
                                                                        color: "text-default",
                                                                        children: eu.intl.string(eu.t.TOjkEg),
                                                                    }),
                                                                    (0, n.jsx)(X.wQ, {
                                                                        connectedAccount: i,
                                                                        userId: ee,
                                                                        theme: eA,
                                                                        locale: ej,
                                                                        className: ed.eT,
                                                                        showMetadata: V,
                                                                        showInvisibleIcon: O,
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, n.jsxs)("div", {
                                                                className: ed.yk,
                                                                children: [
                                                                    (0, n.jsx)(j.E, {
                                                                        variant: "eyebrow",
                                                                        color: "text-default",
                                                                        children: eu.intl.string(eu.t.jndPhX),
                                                                    }),
                                                                    (0, n.jsx)(ef, {
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
                                                        className: ed.yk,
                                                        children: [
                                                            (0, n.jsxs)("div", {
                                                                className: ed.a5,
                                                                children: [
                                                                    (0, n.jsx)(j.E, {
                                                                        variant: "eyebrow",
                                                                        color: "text-default",
                                                                        children: eu.intl.string(eu.t.TOjkEg),
                                                                    }),
                                                                    (0, n.jsx)(A.m, {
                                                                        text: eu.intl.string(eu.t.x3svVc),
                                                                        children: (0, n.jsx)(N.m, {
                                                                            size: "xs",
                                                                            color: "currentColor",
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, n.jsx)(X.Wc, {
                                                                applicationRoleConnection: c,
                                                                className: ed.eT,
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
                (s = [{ variant: "primary", text: eu.intl.string(eu.t.i4jeWR), onClick: () => f(0) }]),
                (a = void 0),
                (r = () => (ey(), Promise.resolve()));
            break;
        }
        case 2:
            (t = eu.intl.string(eu.t.najNdz)),
                (l = (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsxs)("div", {
                            className: ed.kf,
                            children: [
                                (0, n.jsx)(ea.A, { guildId: d, className: ed.w$, role: h, size: 24 }),
                                (0, n.jsx)(j.E, {
                                    variant: "text-lg/semibold",
                                    color: "text-strong",
                                    className: ed.jm,
                                    children: h.name,
                                }),
                            ],
                        }),
                        (0, n.jsx)(_.Ip, {
                            className: ed.eu,
                            children: ev.map((e) => (0, n.jsx)(ex, { channel: e }, e.id)),
                        }),
                    ],
                })),
                (s = [{ variant: "primary", text: eu.intl.string(eu.t.cpT0Cq), onClick: () => ey(!0) }]),
                (a = eb
                    ? (0, n.jsx)(k.Q, { variant: "primary", text: eu.intl.string(eu.t.VXV55P), onClick: eE })
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

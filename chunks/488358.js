l.d(t, { default: () => ep });
var n = l(477900),
    i = l(582128),
    a = l(503698),
    s = l.n(a),
    r = l(284009),
    c = l.n(r),
    o = l(435558),
    u = l.n(o),
    d = l(485845),
    m = l(17928),
    x = l(661531),
    h = l(189213),
    A = l(462887),
    f = l(297264),
    p = l(834730),
    j = l(933832),
    g = l(939249),
    v = l(602853),
    y = l(866665),
    N = l(885574),
    E = l(193249),
    C = l(192308),
    S = l(231723),
    b = l(289873),
    k = l(364522),
    _ = l(123292),
    P = l(77468),
    T = l(66834),
    I = l(730134),
    R = l(964486),
    w = l(736653),
    G = l(573648),
    L = l(666860),
    O = l(206828),
    V = l(80558),
    H = l(709066),
    M = l(920268),
    U = l(47167),
    D = l(713654),
    z = l(733110),
    X = l(46937),
    F = l(773669),
    $ = l(780964),
    Y = l(766075),
    B = l(889227),
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
    ea = l(967740),
    es = l(293260),
    er = l(783419),
    ec = l(652215),
    eo = l(105292),
    eu = l(219426);
function ed(e) {
    let { platformType: t, className: l } = e,
        i = (0, w.Ay)(),
        a = G.A.get(t);
    return (0, n.jsx)("img", {
        src: (0, A.q)(i) ? a.icon.lightSVG : a.icon.darkSVG,
        alt: "",
        className: s()(eu.tV, l),
    });
}
function em(e) {
    let { channel: t, className: l } = e,
        i = (0, D.gU)(t),
        a = (0, U.Ay)(t);
    return (0, n.jsxs)("div", {
        className: s()(eu.HA, l),
        children: [
            null != i ? (0, n.jsx)(i, { className: eu.er }) : null,
            (0, n.jsx)(f.D, { variant: "heading-lg/semibold", color: "text-default", className: eu.Kw, children: a }),
        ],
    });
}
function ex(e) {
    let t,
        { connectionType: l, connectionMetadataField: i, operator: a, value: s, result: r, description: c } = e,
        o = null;
    if (l === er.UX) return null;
    if (null != c)
        switch (a) {
            case er.so.LESS_THAN:
                o = eo.intl.format(eo.t["2p7dA3"], { description: c, count: Math.max(0, Number(s) - 1) });
                break;
            case er.so.GREATER_THAN:
                o = eo.intl.format(eo.t["2p7dA3"], { description: c, count: Math.max(0, Number(s) + 1) });
                break;
            default:
                o = c;
        }
    else {
        let e;
        switch (a) {
            case er.so.EQUAL:
                ((e = eo.t["0BlpbA"]), l === ec.fg2.PAYPAL && i === er.pK.PAYPAL_VERIFIED && (e = eo.t.dcSDhW));
                break;
            case er.so.NOT_EQUAL:
                e = eo.t.otcpTN;
                break;
            case er.so.LESS_THAN:
                e = eo.t.Ef35xs;
                break;
            case er.so.GREATER_THAN:
                e = eo.t["8W9OXU"];
                break;
            case void 0:
            case null:
                return null;
        }
        if (
            null ==
            (o = (0, el.RP)({ connectionType: l, connectionMetadataField: i, operator: a, operatorText: e, value: s }))
        )
            return null;
    }
    return (
        (t = r ? "text-default" : "text-feedback-critical"),
        (0, n.jsx)(p.E, { variant: "text-xs/normal", color: t, className: eu.E6, children: o })
    );
}
function eh(e) {
    let t,
        a,
        { eligibilityState: r, onAttempted: c } = e,
        o = (0, V.O)(r.application_id),
        { canStartAuthorization: u, startAuthorization: m } = (0, O.RD)(o),
        x = u,
        h = r.identity_connected_account_type,
        A = r.identity_auth_required_scopes;
    if (!x && null != h && null != A) {
        let e = G.A.get(h);
        null != e && e.enabled && (x = !0);
    }
    let f = r.application,
        v = i.useMemo(() => (f?.bot != null ? new B.A(f.bot) : null), [f]),
        y = r.result;
    (null != v && (t = (0, n.jsx)(H.A, { className: eu.AO, verified: v.isVerifiedBot() })),
        (a = y
            ? (0, n.jsx)(j.CheckmarkLargeIcon, { size: "md", color: "currentColor", className: eu.rA })
            : x
              ? (0, n.jsx)(J.A, { direction: J.A.Directions.RIGHT, className: eu.t4 })
              : (0, n.jsx)(p.E, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: eo.intl.string(eo.t.cEts68),
                })));
    let N = i.useCallback(() => {
        y ||
            !x ||
            (c(null != h && Z.A.getAccounts().some((e) => e.type === h) ? null : r.connection_type, f ?? null),
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
    }, [y, x, u, m, c, f, r.connection_type, r.application_id, h, A]);
    return el.iC.includes(f?.id ?? "")
        ? null
        : (0, n.jsxs)(g.D, {
              className: s()(eu.UY, y ? eu.o6 : null, x ? null : eu.pC),
              onClick: !y && x ? N : void 0,
              children: [
                  null != v ? (0, n.jsx)(I.A, { user: v }) : null,
                  (0, n.jsxs)("div", {
                      className: eu.EZ,
                      children: [
                          (0, n.jsxs)("div", {
                              className: eu.Pf,
                              children: [
                                  (0, n.jsx)(p.E, {
                                      variant: "text-md/medium",
                                      color: "text-strong",
                                      children: f?.name,
                                  }),
                                  t,
                              ],
                          }),
                          f?.name != null ? (0, n.jsx)(ex, { connectionType: er.UX, result: y }) : null,
                          x || y
                              ? null
                              : (0, n.jsx)(p.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: eo.intl.string(eo.t["+z5dYe"]),
                                }),
                      ],
                  }),
                  a,
              ],
          });
}
function eA(e) {
    let { eligibilityStatesGroups: t, onPlatformConnect: l, onPlatformConnected: a } = e,
        [r, o] = i.useState({}),
        [d, m] = i.useState(0),
        [h, A] = i.useState(null),
        [f, E] = i.useState(null),
        C = i.useMemo(() => u().flatten(t), [t]),
        S = i.useMemo(
            () =>
                u().groupBy(C, (e) => `${e.connection_type}${null != e.application_id ? `:${e.application_id}` : ""}`),
            [C],
        );
    (i.useEffect(() => m(Date.now()), [C]),
        i.useEffect(() => {
            if (null == h) return;
            let e = S[`${h}${null != f ? `:${f.id}` : ""}`];
            null == e || (e.every((e) => e.result) && a(e[0]?.identity_connected_account_type ?? h, f));
        }, [S, h, f, a]));
    let b = (0, v.r)(x.A.unsafe_rawColors.GREEN_330).hex();
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
                    a,
                    u = S[e];
                if (e.startsWith(`${er.UX}:`) && null != u[0])
                    return (0, n.jsx)(
                        eh,
                        {
                            eligibilityState: u[0],
                            onAttempted: (e, t) => {
                                (A(e), E(t), l());
                            },
                        },
                        e,
                    );
                let m = u.find((e) => null == e.operator),
                    x = u.filter((e) => null != e.operator),
                    h = (null == m || m.result) && x.every((e) => e.result),
                    f = u.find((e) => null != e.application),
                    v = G.A.get(e),
                    C = null == v || v.enabled,
                    k = v?.migrationData != null,
                    _ = k || !C,
                    P = f?.application,
                    T = P?.bot != null ? new B.A(P.bot) : null;
                el.iC.includes(P?.id ?? "")
                    ? (t = (0, n.jsx)(ei.A, { className: eu.AO, color: b, size: 16 }))
                    : null != T && (t = (0, n.jsx)(H.A, { className: eu.AO, verified: T.isVerifiedBot() }));
                let R = r[v?.type ?? er.zR],
                    w = !h && null != R && R <= d;
                return (
                    (i = h
                        ? (0, n.jsx)(j.CheckmarkLargeIcon, { size: "md", color: "currentColor", className: eu.rA })
                        : w
                          ? (0, n.jsx)(p.E, {
                                variant: "text-md/medium",
                                color: "text-link",
                                className: eu.dj,
                                children: eo.intl.string(eo.t["5911Lb"]),
                            })
                          : _
                            ? (0, n.jsx)(p.E, {
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: eo.intl.string(eo.t.cEts68),
                              })
                            : (0, n.jsx)(J.A, { direction: J.A.Directions.RIGHT, className: eu.t4 })),
                    k
                        ? (a = eo.intl.format(eo.t.Rzz1Xs, { platformName: v?.name }))
                        : v?.type === ec.fg2.STEAM && (a = eo.intl.string(eo.t.NcZh6K)),
                    (0, n.jsxs)(
                        g.D,
                        {
                            className: s()(eu.UY, h ? eu.o6 : null, _ ? eu.pC : null),
                            onClick:
                                h || _
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
                                              o({ ...r, [e]: Date.now() }),
                                              A(e),
                                              E(P ?? null),
                                              l())
                                          );
                                      },
                            children: [
                                !h && w
                                    ? (0, n.jsx)("div", {
                                          className: eu.Z1,
                                          children: (0, n.jsx)(p.E, {
                                              variant: "text-xs/normal",
                                              color: "text-overlay-light",
                                              children: eo.intl.string(eo.t.UB3hKo),
                                          }),
                                      })
                                    : null,
                                null != v ? (0, n.jsx)(ed, { platformType: v.type }) : null,
                                null != T ? (0, n.jsx)(I.A, { user: T }) : null,
                                (0, n.jsxs)("div", {
                                    className: eu.EZ,
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: eu.Pf,
                                            children: [
                                                (0, n.jsx)(p.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    children: v?.name ?? P?.name,
                                                }),
                                                t,
                                                null != a
                                                    ? (0, n.jsx)(y.m, {
                                                          text: a,
                                                          children: (0, n.jsx)(N.CircleInformationIcon, {
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
                                                value: a,
                                                result: s,
                                                description: r,
                                            } = e;
                                            return (
                                                c()(null != l, "connectionMetadataField is null"),
                                                c()(null != i, "operator is null"),
                                                c()(null != a, "value is null"),
                                                (0, n.jsx)(
                                                    ex,
                                                    {
                                                        connectionType: t,
                                                        connectionMetadataField: l,
                                                        operator: i,
                                                        value: a,
                                                        result: s,
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
        a,
        { account: s, setShowPreviewInvisibleIcon: r, setShowPreviewMetadata: c } = e,
        [o, u] = i.useState(s.friendSync),
        [d, m] = i.useState(s.showActivity),
        [x, h] = i.useState(1 === s.metadataVisibility),
        [A, f] = i.useState(1 === s.visibility);
    (0, R.Ay)(() => {
        (r(!A), c(x));
    });
    let p = G.A.get(s.type);
    return (
        ec.txh.has(s.type) &&
            (t = (0, n.jsx)(E.d, {
                label: eo.intl.string(eo.t["+KCMSi"]),
                checked: o,
                onChange: (e) => {
                    (u(e), P.A.setFriendSync(s.type, s.id, e));
                },
            })),
        ec.ewM.has(s.type) &&
            (l = (0, n.jsx)(E.d, {
                label: eo.intl.format(eo.t["6u6J0q"], { platform: p.name }),
                checked: d,
                onChange: (e) => {
                    (m(e), P.A.setShowActivity(s.type, s.id, e));
                },
            })),
        !0 === p.hasMetadata &&
            (a = (0, n.jsx)(E.d, {
                label: eo.intl.string(eo.t.FYKGsL),
                checked: x,
                disabled: !A,
                onChange: (e) => {
                    (c(e), h(e), P.A.setMetadataVisibility(s.type, s.id, +!!e));
                },
            })),
        (0, n.jsxs)("div", {
            className: eu.ek,
            children: [
                (0, n.jsx)(E.d, {
                    label: eo.intl.string(eo.t.f7yOAX),
                    checked: A,
                    onChange: (e) => {
                        (r(!e), f(e), P.A.setVisibility(s.type, s.id, +!!e));
                    },
                }),
                a,
                l,
                t,
            ],
        })
    );
}
function ep(e) {
    let t,
        l,
        a,
        s,
        r,
        { transitionState: o, onClose: u, guildId: d, role: x } = e,
        [A, f] = i.useState(0),
        [j, g] = i.useState(null),
        [v, E] = i.useState(!1),
        [P, I] = i.useState(!0),
        [R, O] = i.useState(!1),
        [V, H] = i.useState(!0),
        [U, D] = i.useState(!1),
        B = (0, m.bG)([Z.A], () => Z.A.getAccounts()),
        J = (0, m.bG)([z.default], () => z.default.getNewestTokens()),
        el = (0, m.bG)([Q.default], () => Q.default.getId()),
        [en, ei] = i.useState(null),
        [er, ed] = i.useState(null),
        [ex, eh] = i.useState(null),
        ep = (0, w.Ay)(),
        ej = (0, m.bG)([F.default], () => F.default.locale),
        eg = (0, m.bG)([K.Ay], () => K.Ay.getMember(d, el)),
        ev = Object.values((0, m.bG)([W.A], () => W.A.getMutableGuildChannelsForGuild(d))).filter(
            (e) => q.A.can(ec.xBc.VIEW_CHANNEL, e) && q.A.can(ec.xBc.SEND_MESSAGES, e) && (0, M.A)(e).includes(x),
        );
    function ey() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (u?.(), e && (0, C.closeModal)(es.CB, S.SY));
    }
    function eN() {
        (ey(!0), (0, Y.openUserSettings)($.X.AUTHORIZED_APPS_CATEGORY));
    }
    function eE() {
        (ey(!0), (0, Y.openUserSettings)($.X.CONNECTIONS_CATEGORY));
    }
    async function eC() {
        (O(!0), await T.A.assignGuildRoleConnection(d, x.id));
    }
    (i.useEffect(() => {
        T.A.fetchGuildRoleConnectionsEligibility(d, x.id).then((e) => {
            (g(e), E(e.some((e) => e.every((e) => e.result))), I(!1));
        });
    }, [d, x.id, B, J]),
        i.useEffect(() => {
            ee.default.track(ec.HAw.PASSPORT_CHALLENGE_VIEWED, { role_id: x.id, ...(0, L.H$)(d) });
        }, [d, x.id]),
        i.useEffect(() => {
            R &&
                null != eg &&
                eg.roles.includes(x.id) &&
                (O(!1),
                ev.length > 0 ? f(2) : u?.(),
                ee.default.track(ec.HAw.PASSPORT_CHALLENGE_FINISHED, { role_id: x.id, ...(0, L.H$)(d) }));
        }, [R, ev.length, eg, d, x.id, u]));
    let eS = j?.flat().some((e) => null == e.application_id) ?? !1;
    switch (A) {
        case 0: {
            let e = null != j && j.length > 1,
                i = null != j && 1 === j.length && 1 === j[0].length;
            ((t = eo.intl.string(eo.t.zOZh3R)),
                (l =
                    P || null == j
                        ? (0, n.jsx)(b.y, { className: eu.NL })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(p.E, {
                                      variant: "text-md/medium",
                                      color: "text-default",
                                      children: eo.intl.format(i ? eo.t.jHfRvZ : e ? eo.t["mOQ8k+"] : eo.t.U0olLg, {
                                          roleName: x.name,
                                      }),
                                  }),
                                  (0, n.jsx)(k.Ip, {
                                      className: eu.NL,
                                      children: (0, n.jsx)(eA, {
                                          eligibilityStatesGroups: j,
                                          onPlatformConnect: function () {
                                              ee.default.track(ec.HAw.PASSPORT_CHALLENGE_STARTED, {
                                                  role_id: x.id,
                                                  ...(0, L.H$)(d),
                                              });
                                          },
                                          onPlatformConnected: function (e) {
                                              let t =
                                                  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                              (ei(e),
                                                  ed(t),
                                                  f(1),
                                                  null != t &&
                                                      (0, et.XC)()
                                                          .then((e) => {
                                                              eh(e);
                                                          })
                                                          .catch(() => {}));
                                          },
                                      }),
                                  }),
                                  (0, n.jsx)(p.E, {
                                      variant: "text-xs/normal",
                                      className: eu.PJ,
                                      color: "text-default",
                                      children: eo.intl.format(eo.t.gsgvxh, {
                                          privacyPolicyUrl: ec.X7G.PRIVACY,
                                          onAuthorizedApplicationsClick: () => eN(),
                                          onConnectionsClick: () => eE(),
                                      }),
                                  }),
                              ],
                          })),
                (a = [
                    {
                        variant: "primary",
                        text: eo.intl.string(eo.t["8SuVoE"]),
                        onClick: () => eC(),
                        disabled: P || !v || R,
                    },
                ]),
                (s = eS
                    ? (0, n.jsx)(_.Q, { variant: "primary", text: eo.intl.string(eo.t.VXV55P), onClick: eE })
                    : void 0),
                (r = () => (ey(), Promise.resolve())));
            break;
        }
        case 1: {
            c()(null != en, "lastPlatformConnected is null");
            let e = G.A.get(en)?.name ?? er?.name,
                i = B.find((e) => {
                    let { type: t } = e;
                    return en === t;
                }),
                o = ex?.find((e) => {
                    let { application: t } = e;
                    return t.id === er?.id;
                });
            ((t = eo.intl.formatToPlainString(eo.t.yQvgBO, { platformName: e })),
                (l = (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(p.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: eo.intl.format(eo.t.gsgvxh, {
                                privacyPolicyUrl: ec.X7G.PRIVACY,
                                onAuthorizedApplicationsClick: () => eN(),
                                onConnectionsClick: () => eE(),
                            }),
                        }),
                        (0, n.jsx)("div", {
                            className: eu.m1,
                            children:
                                null == i && null == o
                                    ? (0, n.jsx)(b.y, { className: eu.bD })
                                    : (0, n.jsxs)(n.Fragment, {
                                          children: [
                                              null != i
                                                  ? (0, n.jsxs)(n.Fragment, {
                                                        children: [
                                                            (0, n.jsxs)("div", {
                                                                className: eu.yk,
                                                                children: [
                                                                    (0, n.jsx)(p.E, {
                                                                        variant: "eyebrow",
                                                                        color: "text-default",
                                                                        children: eo.intl.string(eo.t.TOjkEg),
                                                                    }),
                                                                    (0, n.jsx)(X.wQ, {
                                                                        connectedAccount: i,
                                                                        userId: el,
                                                                        theme: ep,
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
                                                                    (0, n.jsx)(p.E, {
                                                                        variant: "eyebrow",
                                                                        color: "text-default",
                                                                        children: eo.intl.string(eo.t.jndPhX),
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
                                              null != o
                                                  ? (0, n.jsxs)("div", {
                                                        className: eu.yk,
                                                        children: [
                                                            (0, n.jsxs)("div", {
                                                                className: eu.a5,
                                                                children: [
                                                                    (0, n.jsx)(p.E, {
                                                                        variant: "eyebrow",
                                                                        color: "text-default",
                                                                        children: eo.intl.string(eo.t.TOjkEg),
                                                                    }),
                                                                    (0, n.jsx)(y.m, {
                                                                        text: eo.intl.string(eo.t.x3svVc),
                                                                        children: (0, n.jsx)(N.CircleInformationIcon, {
                                                                            size: "xs",
                                                                            color: "currentColor",
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, n.jsx)(X.Wc, {
                                                                applicationRoleConnection: o,
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
                (a = [{ variant: "primary", text: eo.intl.string(eo.t.i4jeWR), onClick: () => f(0) }]),
                (s = void 0),
                (r = () => (ey(), Promise.resolve())));
            break;
        }
        case 2:
            ((t = eo.intl.string(eo.t.najNdz)),
                (l = (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsxs)("div", {
                            className: eu.kf,
                            children: [
                                (0, n.jsx)(ea.A, { guildId: d, className: eu.w$, role: x, size: 24 }),
                                (0, n.jsx)(p.E, {
                                    variant: "text-lg/semibold",
                                    color: "text-strong",
                                    className: eu.jm,
                                    children: x.name,
                                }),
                            ],
                        }),
                        (0, n.jsx)(k.Ip, {
                            className: eu.eu,
                            children: ev.map((e) => (0, n.jsx)(em, { channel: e }, e.id)),
                        }),
                    ],
                })),
                (a = [{ variant: "primary", text: eo.intl.string(eo.t.cpT0Cq), onClick: () => ey(!0) }]),
                (s = eS
                    ? (0, n.jsx)(_.Q, { variant: "primary", text: eo.intl.string(eo.t.VXV55P), onClick: eE })
                    : void 0),
                (r = () => (ey(!0), Promise.resolve())));
    }
    return (0, n.jsx)(h.a, { transitionState: o, onClose: r, title: t, actions: a, actionBarInput: s, children: l });
}

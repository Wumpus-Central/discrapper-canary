var n = l(477900),
    i = l(582128),
    s = l(503698),
    a = l.n(s),
    r = l(284009),
    o = l.n(r),
    c = l(435558),
    d = l.n(c),
    u = l(485845),
    m = l(855986),
    x = l(646514),
    h = l(189213),
    A = l(462887),
    f = l(534514),
    p = l(834730),
    j = l(933832),
    y = l(939249),
    g = l(602853),
    v = l(866665),
    b = l(885574),
    N = l(143129),
    E = l(192308),
    C = l(231723),
    S = l(289873),
    k = l(95362),
    _ = l(123292),
    P = l(77468),
    T = l(778858),
    I = l(730134),
    R = l(964486),
    w = l(736653),
    G = l(573648),
    L = l(149468),
    O = l(724302),
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
    B = l(619019),
    Q = l(46653),
    W = l(734057),
    Z = l(417869),
    K = l(696451),
    q = l(576705),
    J = l(147925),
    ee = l(129230),
    et = l(619006),
    el = l(370480),
    en = l(80320),
    ei = l(355971),
    es = l(967740),
    ea = l(293260),
    er = l(783419),
    eo = l(652215),
    ec = l(792996),
    ed = l(219426);
function eu(e) {
    let { platformType: t, className: l } = e,
        i = (0, w.Ay)(),
        s = G.A.get(t);
    return (0, n.jsx)("img", {
        src: (0, A.q)(i) ? s.icon.lightSVG : s.icon.darkSVG,
        alt: "",
        className: a()(ed.tV, l),
    });
}
function em(e) {
    let { channel: t, className: l } = e,
        i = (0, D.gU)(t),
        s = (0, U.Ay)(t);
    return (0, n.jsxs)("div", {
        className: a()(ed.HA, l),
        children: [
            null != i ? (0, n.jsx)(i, { className: ed.er }) : null,
            (0, n.jsx)(f.D, { variant: "heading-lg/semibold", color: "text-default", className: ed.Kw, children: s }),
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
                ((e = ec.t["0BlpbA"]), l === eo.fg2.PAYPAL && i === er.pK.PAYPAL_VERIFIED && (e = ec.t.dcSDhW));
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
        (0, n.jsx)(p.E, { variant: "body-xs/normal", color: t, className: ed.E6, children: c })
    );
}
function eh(e) {
    let t,
        s,
        { eligibilityState: r, onAttempted: o } = e,
        c = (0, V.O)(r.application_id),
        { canStartAuthorization: d, startAuthorization: m } = (0, O.RD)(c),
        x = d,
        h = r.identity_connected_account_type,
        A = r.identity_auth_required_scopes;
    if (!x && null != h && null != A) {
        let e = G.A.get(h);
        null != e && e.enabled && (x = !0);
    }
    let f = r.application,
        g = i.useMemo(() => (f?.bot != null ? new B.A(f.bot) : null), [f]),
        v = r.result;
    (null != g && (t = (0, n.jsx)(H.A, { className: ed.AO, verified: g.isVerifiedBot() })),
        (s = v
            ? (0, n.jsx)(j.CheckmarkLargeIcon, { size: "md", color: "currentColor", className: ed.rA })
            : x
              ? (0, n.jsx)(J.A, { direction: J.A.Directions.RIGHT, className: ed.t4 })
              : (0, n.jsx)(p.E, {
                    variant: "body-md/medium",
                    color: "text-muted",
                    children: ec.intl.string(ec.t.cEts68),
                })));
    let b = i.useCallback(() => {
        v ||
            !x ||
            (o(null != h && Z.A.getAccounts().some((e) => e.type === h) ? null : r.connection_type, f ?? null),
            d
                ? m({ analyticsLocations: ["Verified Roles Connect Accounts Modal"] })
                : null != h &&
                  null != A &&
                  Promise.resolve()
                      .then(l.bind(l, 610056))
                      .then((e) => {
                          let { openOAuth2Modal: t } = e;
                          t({
                              clientId: r.application_id ?? "",
                              scopes: A,
                              integrationType: u.b.USER_INSTALL,
                              connectedAccountProvider: h,
                              callback: () => !0,
                          });
                      }));
    }, [v, x, d, m, o, f, r.connection_type, r.application_id, h, A]);
    return el.iC.includes(f?.id ?? "")
        ? null
        : (0, n.jsxs)(y.D, {
              className: a()(ed.UY, v ? ed.o6 : null, x ? null : ed.pC),
              onClick: !v && x ? b : void 0,
              children: [
                  null != g ? (0, n.jsx)(I.A, { user: g }) : null,
                  (0, n.jsxs)("div", {
                      className: ed.EZ,
                      children: [
                          (0, n.jsxs)("div", {
                              className: ed.Pf,
                              children: [
                                  (0, n.jsx)(p.E, {
                                      variant: "body-md/medium",
                                      color: "text-strong",
                                      children: f?.name,
                                  }),
                                  t,
                              ],
                          }),
                          f?.name != null ? (0, n.jsx)(ex, { connectionType: er.UX, result: v }) : null,
                          x || v
                              ? null
                              : (0, n.jsx)(p.E, {
                                    variant: "body-xs/normal",
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
        [u, m] = i.useState(0),
        [h, A] = i.useState(null),
        [f, N] = i.useState(null),
        E = i.useMemo(() => d().flatten(t), [t]),
        C = i.useMemo(
            () =>
                d().groupBy(E, (e) => `${e.connection_type}${null != e.application_id ? `:${e.application_id}` : ""}`),
            [E],
        );
    (i.useEffect(() => m(Date.now()), [E]),
        i.useEffect(() => {
            if (null == h) return;
            let e = C[`${h}${null != f ? `:${f.id}` : ""}`];
            null == e || (e.every((e) => e.result) && s(e[0]?.identity_connected_account_type ?? h, f));
        }, [C, h, f, s]));
    let S = (0, g.r)(x.A.unsafe_rawColors.GREEN_330).hex();
    return (0, n.jsx)(n.Fragment, {
        children: Object.keys(C)
            .sort((e, t) => {
                let l = C[e].every((e) => e.result),
                    n = C[t].every((e) => e.result);
                return !0 === l && !1 === n ? 1 : !1 === l && !0 === n ? -1 : 0;
            })
            .map((e) => {
                let t,
                    i,
                    s,
                    d = C[e];
                if (e.startsWith(`${er.UX}:`) && null != d[0])
                    return (0, n.jsx)(
                        eh,
                        {
                            eligibilityState: d[0],
                            onAttempted: (e, t) => {
                                (A(e), N(t), l());
                            },
                        },
                        e,
                    );
                let m = d.find((e) => null == e.operator),
                    x = d.filter((e) => null != e.operator),
                    h = (null == m || m.result) && x.every((e) => e.result),
                    f = d.find((e) => null != e.application),
                    g = G.A.get(e),
                    E = null == g || g.enabled,
                    k = g?.migrationData != null,
                    _ = k || !E,
                    P = f?.application,
                    T = P?.bot != null ? new B.A(P.bot) : null;
                el.iC.includes(P?.id ?? "")
                    ? (t = (0, n.jsx)(ei.A, { className: ed.AO, color: S, size: 16 }))
                    : null != T && (t = (0, n.jsx)(H.A, { className: ed.AO, verified: T.isVerifiedBot() }));
                let R = r[g?.type ?? er.zR],
                    w = !h && null != R && R <= u;
                return (
                    (i = h
                        ? (0, n.jsx)(j.CheckmarkLargeIcon, { size: "md", color: "currentColor", className: ed.rA })
                        : w
                          ? (0, n.jsx)(p.E, {
                                variant: "body-md/medium",
                                color: "text-link",
                                className: ed.dj,
                                children: ec.intl.string(ec.t["5911Lb"]),
                            })
                          : _
                            ? (0, n.jsx)(p.E, {
                                  variant: "body-md/medium",
                                  color: "text-muted",
                                  children: ec.intl.string(ec.t.cEts68),
                              })
                            : (0, n.jsx)(J.A, { direction: J.A.Directions.RIGHT, className: ed.t4 })),
                    k
                        ? (s = ec.intl.format(ec.t.Rzz1Xs, { platformName: g?.name }))
                        : g?.type === eo.fg2.STEAM && (s = ec.intl.string(ec.t.NcZh6K)),
                    (0, n.jsxs)(
                        y.D,
                        {
                            className: a()(ed.UY, h ? ed.o6 : null, _ ? ed.pC : null),
                            onClick:
                                h || _
                                    ? void 0
                                    : () => {
                                          var e;
                                          return (
                                              (e = g?.type ?? er.zR),
                                              void ((0, en.A)({
                                                  platformType: e,
                                                  location: "Verified Roles Connect Accounts Modal",
                                                  overrideUrl: P?.role_connections_verification_url,
                                              }),
                                              c({ ...r, [e]: Date.now() }),
                                              A(e),
                                              N(P ?? null),
                                              l())
                                          );
                                      },
                            children: [
                                !h && w
                                    ? (0, n.jsx)("div", {
                                          className: ed.Z1,
                                          children: (0, n.jsx)(p.E, {
                                              variant: "body-xs/normal",
                                              color: "text-overlay-light",
                                              children: ec.intl.string(ec.t.UB3hKo),
                                          }),
                                      })
                                    : null,
                                null != g ? (0, n.jsx)(eu, { platformType: g.type }) : null,
                                null != T ? (0, n.jsx)(I.A, { user: T }) : null,
                                (0, n.jsxs)("div", {
                                    className: ed.EZ,
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: ed.Pf,
                                            children: [
                                                (0, n.jsx)(p.E, {
                                                    variant: "body-md/medium",
                                                    color: "text-strong",
                                                    children: g?.name ?? P?.name,
                                                }),
                                                t,
                                                null != s
                                                    ? (0, n.jsx)(v.m, {
                                                          text: s,
                                                          children: (0, n.jsx)(b.CircleInformationIcon, {
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
function ef(e) {
    let t,
        l,
        s,
        { account: a, setShowPreviewInvisibleIcon: r, setShowPreviewMetadata: o } = e,
        [c, d] = i.useState(a.friendSync),
        [u, m] = i.useState(a.showActivity),
        [x, h] = i.useState(1 === a.metadataVisibility),
        [A, f] = i.useState(1 === a.visibility);
    (0, R.Ay)(() => {
        (r(!A), o(x));
    });
    let p = G.A.get(a.type);
    return (
        eo.txh.has(a.type) &&
            (t = (0, n.jsx)(N.d, {
                label: ec.intl.string(ec.t["+KCMSi"]),
                checked: c,
                onChange: (e) => {
                    (d(e), P.A.setFriendSync(a.type, a.id, e));
                },
            })),
        eo.ewM.has(a.type) &&
            (l = (0, n.jsx)(N.d, {
                label: ec.intl.format(ec.t["6u6J0q"], { platform: p.name }),
                checked: u,
                onChange: (e) => {
                    (m(e), P.A.setShowActivity(a.type, a.id, e));
                },
            })),
        !0 === p.hasMetadata &&
            (s = (0, n.jsx)(N.d, {
                label: ec.intl.string(ec.t.FYKGsL),
                checked: x,
                disabled: !A,
                onChange: (e) => {
                    (o(e), h(e), P.A.setMetadataVisibility(a.type, a.id, +!!e));
                },
            })),
        (0, n.jsxs)("div", {
            className: ed.ek,
            children: [
                (0, n.jsx)(N.d, {
                    label: ec.intl.string(ec.t.f7yOAX),
                    checked: A,
                    onChange: (e) => {
                        (r(!e), f(e), P.A.setVisibility(a.type, a.id, +!!e));
                    },
                }),
                s,
                l,
                t,
            ],
        })
    );
}
l.d(
    t,
    {},
    {
        default: function (e) {
            let t,
                l,
                s,
                a,
                r,
                { transitionState: c, onClose: d, guildId: u, role: x } = e,
                [A, f] = i.useState(0),
                [j, y] = i.useState(null),
                [g, N] = i.useState(!1),
                [P, I] = i.useState(!0),
                [R, O] = i.useState(!1),
                [V, H] = i.useState(!0),
                [U, D] = i.useState(!1),
                B = (0, m.bG)([Z.A], () => Z.A.getAccounts()),
                J = (0, m.bG)([z.A], () => z.A.getNewestTokens()),
                el = (0, m.bG)([Q.default], () => Q.default.getId()),
                [en, ei] = i.useState(null),
                [er, eu] = i.useState(null),
                [ex, eh] = i.useState(null),
                ep = (0, w.Ay)(),
                ej = (0, m.bG)([F.default], () => F.default.locale),
                ey = (0, m.bG)([K.Ay], () => K.Ay.getMember(u, el)),
                eg = Object.values((0, m.bG)([W.A], () => W.A.getMutableGuildChannelsForGuild(u))).filter(
                    (e) =>
                        q.A.can(eo.xBc.VIEW_CHANNEL, e) && q.A.can(eo.xBc.SEND_MESSAGES, e) && (0, M.A)(e).includes(x),
                );
            function ev() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                (d?.(), e && (0, E.Oo)(ea.CB, C.SY));
            }
            function eb() {
                (ev(!0), (0, Y.openUserSettings)($.X.AUTHORIZED_APPS_CATEGORY));
            }
            function eN() {
                (ev(!0), (0, Y.openUserSettings)($.X.CONNECTIONS_CATEGORY));
            }
            (i.useEffect(() => {
                T.A.fetchGuildRoleConnectionsEligibility(u, x.id).then((e) => {
                    (y(e), N(e.some((e) => e.every((e) => e.result))), I(!1));
                });
            }, [u, x.id, B, J]),
                i.useEffect(() => {
                    ee.default.track(eo.HAw.PASSPORT_CHALLENGE_VIEWED, { role_id: x.id, ...(0, L.H$)(u) });
                }, [u, x.id]),
                i.useEffect(() => {
                    R &&
                        null != ey &&
                        ey.roles.includes(x.id) &&
                        (O(!1),
                        eg.length > 0 ? f(2) : d?.(),
                        ee.default.track(eo.HAw.PASSPORT_CHALLENGE_FINISHED, { role_id: x.id, ...(0, L.H$)(u) }));
                }, [R, eg.length, ey, u, x.id, d]));
            let eE = j?.flat().some((e) => null == e.application_id) ?? !1;
            switch (A) {
                case 0: {
                    let e = null != j && j.length > 1,
                        i = null != j && 1 === j.length && 1 === j[0].length;
                    ((t = ec.intl.string(ec.t.zOZh3R)),
                        (l =
                            P || null == j
                                ? (0, n.jsx)(S.y, { className: ed.NL })
                                : (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)(p.E, {
                                              variant: "body-md/medium",
                                              color: "text-default",
                                              children: ec.intl.format(
                                                  i ? ec.t.jHfRvZ : e ? ec.t["mOQ8k+"] : ec.t.U0olLg,
                                                  { roleName: x.name },
                                              ),
                                          }),
                                          (0, n.jsx)(k.Ip, {
                                              className: ed.NL,
                                              children: (0, n.jsx)(eA, {
                                                  eligibilityStatesGroups: j,
                                                  onPlatformConnect: function () {
                                                      ee.default.track(eo.HAw.PASSPORT_CHALLENGE_STARTED, {
                                                          role_id: x.id,
                                                          ...(0, L.H$)(u),
                                                      });
                                                  },
                                                  onPlatformConnected: function (e) {
                                                      let t =
                                                          arguments.length > 1 && void 0 !== arguments[1]
                                                              ? arguments[1]
                                                              : null;
                                                      (ei(e),
                                                          eu(t),
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
                                              variant: "body-xs/normal",
                                              className: ed.PJ,
                                              color: "text-default",
                                              children: ec.intl.format(ec.t.gsgvxh, {
                                                  privacyPolicyUrl: eo.X7G.PRIVACY,
                                                  onAuthorizedApplicationsClick: () => eb(),
                                                  onConnectionsClick: () => eN(),
                                              }),
                                          }),
                                      ],
                                  })),
                        (s = [
                            {
                                variant: "primary",
                                text: ec.intl.string(ec.t["8SuVoE"]),
                                onClick: () =>
                                    (async function () {
                                        (O(!0), await T.A.assignGuildRoleConnection(u, x.id));
                                    })(),
                                disabled: P || !g || R,
                            },
                        ]),
                        (a = eE
                            ? (0, n.jsx)(_.Q, { variant: "primary", text: ec.intl.string(ec.t.VXV55P), onClick: eN })
                            : void 0),
                        (r = () => (ev(), Promise.resolve())));
                    break;
                }
                case 1: {
                    o()(null != en, "lastPlatformConnected is null");
                    let e = G.A.get(en)?.name ?? er?.name,
                        i = B.find((e) => {
                            let { type: t } = e;
                            return en === t;
                        }),
                        c = ex?.find((e) => {
                            let { application: t } = e;
                            return t.id === er?.id;
                        });
                    ((t = ec.intl.formatToPlainString(ec.t.yQvgBO, { platformName: e })),
                        (l = (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(p.E, {
                                    variant: "body-md/normal",
                                    color: "text-default",
                                    children: ec.intl.format(ec.t.gsgvxh, {
                                        privacyPolicyUrl: eo.X7G.PRIVACY,
                                        onAuthorizedApplicationsClick: () => eb(),
                                        onConnectionsClick: () => eN(),
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    className: ed.m1,
                                    children:
                                        null == i && null == c
                                            ? (0, n.jsx)(S.y, { className: ed.bD })
                                            : (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                      null != i
                                                          ? (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                    (0, n.jsxs)("div", {
                                                                        className: ed.yk,
                                                                        children: [
                                                                            (0, n.jsx)(p.E, {
                                                                                variant: "body-sm/medium",
                                                                                color: "text-default",
                                                                                children: ec.intl.string(ec.t.TOjkEg),
                                                                            }),
                                                                            (0, n.jsx)(X.wQ, {
                                                                                connectedAccount: i,
                                                                                userId: el,
                                                                                theme: ep,
                                                                                locale: ej,
                                                                                className: ed.eT,
                                                                                showMetadata: V,
                                                                                showInvisibleIcon: U,
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    (0, n.jsxs)("div", {
                                                                        className: ed.yk,
                                                                        children: [
                                                                            (0, n.jsx)(p.E, {
                                                                                variant: "body-sm/medium",
                                                                                color: "text-default",
                                                                                children: ec.intl.string(ec.t.jndPhX),
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
                                                                            (0, n.jsx)(p.E, {
                                                                                variant: "body-sm/medium",
                                                                                color: "text-default",
                                                                                children: ec.intl.string(ec.t.TOjkEg),
                                                                            }),
                                                                            (0, n.jsx)(v.m, {
                                                                                text: ec.intl.string(ec.t.x3svVc),
                                                                                children: (0, n.jsx)(
                                                                                    b.CircleInformationIcon,
                                                                                    {
                                                                                        size: "xs",
                                                                                        color: "currentColor",
                                                                                    },
                                                                                ),
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
                        (s = [{ variant: "primary", text: ec.intl.string(ec.t.i4jeWR), onClick: () => f(0) }]),
                        (a = void 0),
                        (r = () => (ev(), Promise.resolve())));
                    break;
                }
                case 2:
                    ((t = ec.intl.string(ec.t.najNdz)),
                        (l = (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)("div", {
                                    className: ed.kf,
                                    children: [
                                        (0, n.jsx)(es.A, { guildId: u, className: ed.w$, role: x, size: 24 }),
                                        (0, n.jsx)(p.E, {
                                            variant: "body-lg/semibold",
                                            color: "text-strong",
                                            className: ed.jm,
                                            children: x.name,
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(k.Ip, {
                                    className: ed.eu,
                                    children: eg.map((e) => (0, n.jsx)(em, { channel: e }, e.id)),
                                }),
                            ],
                        })),
                        (s = [{ variant: "primary", text: ec.intl.string(ec.t.cpT0Cq), onClick: () => ev(!0) }]),
                        (a = eE
                            ? (0, n.jsx)(_.Q, { variant: "primary", text: ec.intl.string(ec.t.VXV55P), onClick: eN })
                            : void 0),
                        (r = () => (ev(!0), Promise.resolve())));
            }
            return (0, n.jsx)(h.a, {
                transitionState: c,
                onClose: r,
                title: t,
                actions: s,
                actionBarInput: a,
                children: l,
            });
        },
    },
);

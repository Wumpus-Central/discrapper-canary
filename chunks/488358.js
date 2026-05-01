l.d(t, { default: () => ef });
var n = l(627968),
    s = l(64700),
    i = l(503698),
    a = l.n(i),
    r = l(284009),
    c = l.n(r),
    o = l(735438),
    d = l.n(o),
    u = l(17928),
    x = l(661531),
    m = l(990078),
    h = l(462887),
    j = l(862482),
    f = l(534514),
    A = l(834730),
    p = l(602853),
    g = l(933832),
    N = l(939249),
    v = l(885574),
    y = l(243721),
    E = l(192308),
    C = l(231723),
    S = l(935462),
    b = l(289873),
    k = l(364522),
    _ = l(821609),
    w = l(123292),
    P = l(685094),
    R = l(77468),
    T = l(686956),
    I = l(730134),
    G = l(964486),
    L = l(736653),
    M = l(573648),
    $ = l(58149),
    O = l(941314),
    H = l(709066),
    V = l(920268),
    z = l(47167),
    D = l(713654),
    U = l(46937),
    F = l(773669),
    K = l(780964),
    X = l(858897),
    Y = l(889227),
    Q = l(495544),
    B = l(734057),
    Z = l(30370),
    W = l(696451),
    q = l(576705),
    J = l(147925),
    ee = l(954571),
    et = l(619006),
    el = l(370480),
    en = l(773952),
    es = l(355971),
    ei = l(967740),
    ea = l(293260),
    er = l(783419),
    ec = l(652215),
    eo = l(985018),
    ed = l(353659);
function eu(e) {
    let { platformType: t, className: l } = e,
        s = (0, L.Ay)(),
        i = M.A.get(t);
    return (0, n.jsx)("img", {
        src: (0, h.q)(s) ? i.icon.lightSVG : i.icon.darkSVG,
        alt: "",
        className: a()(ed.tV, l),
    });
}
function ex(e) {
    let { channel: t, className: l } = e,
        s = (0, D.gU)(t),
        i = (0, z.Ay)(t);
    return (0, n.jsxs)("div", {
        className: a()(ed.HA, l),
        children: [
            null != s ? (0, n.jsx)(s, { className: ed.er }) : null,
            (0, n.jsx)(f.D, { variant: "heading-lg/semibold", color: "text-default", className: ed.Kw, children: i }),
        ],
    });
}
function em(e) {
    let t,
        { connectionType: l, connectionMetadataField: s, operator: i, value: a, result: r, description: c } = e,
        o = null;
    if (null != c)
        switch (i) {
            case er.so.LESS_THAN:
                o = eo.intl.format(eo.t["2p7dA3"], { description: c, count: Math.max(0, Number(a) - 1) });
                break;
            case er.so.GREATER_THAN:
                o = eo.intl.format(eo.t["2p7dA3"], { description: c, count: Math.max(0, Number(a) + 1) });
                break;
            default:
                o = c;
        }
    else {
        let e;
        switch (i) {
            case er.so.EQUAL:
                (e = eo.t["0BlpbA"]), l === ec.fg2.PAYPAL && s === er.pK.PAYPAL_VERIFIED && (e = eo.t.dcSDhW);
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
            (o = (0, el.RP)({ connectionType: l, connectionMetadataField: s, operator: i, operatorText: e, value: a }))
        )
            return null;
    }
    return (
        (t = r ? "text-default" : "text-feedback-critical"),
        (0, n.jsx)(A.E, { variant: "text-xs/normal", color: t, className: ed.E6, children: o })
    );
}
function eh(e) {
    let { eligibilityStatesGroups: t, onPlatformConnect: l, onPlatformConnected: i } = e,
        [r, o] = s.useState({}),
        [u, h] = s.useState(0),
        [f, y] = s.useState(null),
        [E, C] = s.useState(null),
        S = s.useMemo(() => d().flatten(t), [t]),
        b = s.useMemo(
            () =>
                d().groupBy(S, (e) => `${e.connection_type}${null != e.application_id ? `:${e.application_id}` : ""}`),
            [S],
        );
    s.useEffect(() => h(Date.now()), [S]),
        s.useEffect(() => {
            if (null == f) return;
            let e = b[`${f}${null != E ? `:${E.id}` : ""}`];
            null == e || (e.every((e) => e.result) && i(f, E));
        }, [b, f, E, i]);
    let k = (0, p.r)(x.A.unsafe_rawColors.GREEN_330).hex(),
        _ = O.A.useConfig({ location: "Linked Roles Modal" }).enabled;
    return (0, n.jsx)(n.Fragment, {
        children: Object.keys(b)
            .sort((e, t) => {
                let l = b[e].every((e) => e.result),
                    n = b[t].every((e) => e.result);
                return !0 === l && !1 === n ? 1 : !1 === l && !0 === n ? -1 : 0;
            })
            .map((e) => {
                let t,
                    s,
                    i,
                    d = b[e],
                    x = d.find((e) => null == e.operator),
                    h = d.filter((e) => null != e.operator),
                    f = (null == x || x.result) && h.every((e) => e.result),
                    p = d.find((e) => null != e.application),
                    E = M.A.get(e),
                    S = null == E || E.enabled,
                    w = null != E && null != E.replacedBy && _,
                    P = w || !S,
                    R = p?.application,
                    T = R?.bot != null ? new Y.A(R.bot) : null;
                el.iC.includes(R?.id ?? "")
                    ? (t = (0, n.jsx)(es.A, { className: ed.AO, color: k, size: 16 }))
                    : null != T && (t = (0, n.jsx)(H.A, { className: ed.AO, verified: T.isVerifiedBot() }));
                let G = r[E?.type ?? er.zR],
                    L = !f && null != G && G <= u;
                return (
                    (s = f
                        ? (0, n.jsx)(g.A, { size: "md", color: "currentColor", className: ed.rA })
                        : L
                          ? (0, n.jsx)(j.$n, {
                                size: j.$n.Sizes.TINY,
                                look: j.$n.Looks.LINK,
                                color: j.$n.Colors.LINK,
                                className: ed.gN,
                                children: eo.intl.string(eo.t["5911Lb"]),
                            })
                          : P
                            ? (0, n.jsx)(A.E, {
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: eo.intl.string(eo.t.cEts68),
                              })
                            : (0, n.jsx)(J.A, { direction: J.A.Directions.RIGHT, className: ed.t4 })),
                    w
                        ? (i = eo.intl.format(eo.t.Rzz1Xs, { platformName: E?.name }))
                        : E?.type === ec.fg2.STEAM && (i = eo.intl.string(eo.t.NcZh6K)),
                    (0, n.jsxs)(
                        N.D,
                        {
                            className: a()(ed.UY, f ? ed.o6 : null, P ? ed.pC : null),
                            onClick:
                                f || P
                                    ? void 0
                                    : () => {
                                          var e;
                                          return (
                                              (e = E?.type ?? er.zR),
                                              void ((0, en.A)({
                                                  platformType: e,
                                                  location: "Verified Roles Connect Accounts Modal",
                                                  overrideUrl: R?.role_connections_verification_url,
                                              }),
                                              o({ ...r, [e]: Date.now() }),
                                              y(e),
                                              C(R ?? null),
                                              l())
                                          );
                                      },
                            children: [
                                !f && L
                                    ? (0, n.jsx)("div", {
                                          className: ed.Z1,
                                          children: (0, n.jsx)(A.E, {
                                              variant: "text-xs/normal",
                                              color: "always-white",
                                              children: eo.intl.string(eo.t.UB3hKo),
                                          }),
                                      })
                                    : null,
                                null != E ? (0, n.jsx)(eu, { platformType: E.type }) : null,
                                null != T ? (0, n.jsx)(I.A, { user: T }) : null,
                                (0, n.jsxs)("div", {
                                    className: ed.EZ,
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: ed.Pf,
                                            children: [
                                                (0, n.jsx)(A.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    children: E?.name ?? R?.name,
                                                }),
                                                t,
                                                null != i
                                                    ? (0, n.jsx)(m.m, {
                                                          text: i,
                                                          children: (0, n.jsx)(v.m, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: ed.$I,
                                                          }),
                                                      })
                                                    : null,
                                            ],
                                        }),
                                        h.map((e) => {
                                            let {
                                                connection_type: t,
                                                connection_metadata_field: l,
                                                operator: s,
                                                value: i,
                                                result: a,
                                                description: r,
                                            } = e;
                                            return (
                                                c()(null != l, "connectionMetadataField is null"),
                                                c()(null != s, "operator is null"),
                                                c()(null != i, "value is null"),
                                                (0, n.jsx)(
                                                    em,
                                                    {
                                                        connectionType: t,
                                                        connectionMetadataField: l,
                                                        operator: s,
                                                        value: i,
                                                        result: a,
                                                        description: r,
                                                    },
                                                    l,
                                                )
                                            );
                                        }),
                                    ],
                                }),
                                s,
                            ],
                        },
                        e,
                    )
                );
            }),
    });
}
function ej(e) {
    let t,
        l,
        i,
        { account: a, setShowPreviewInvisibleIcon: r, setShowPreviewMetadata: c } = e,
        [o, d] = s.useState(a.friendSync),
        [u, x] = s.useState(a.showActivity),
        [m, h] = s.useState(1 === a.metadataVisibility),
        [j, f] = s.useState(1 === a.visibility);
    (0, G.Ay)(() => {
        r(!j), c(m);
    });
    let A = M.A.get(a.type);
    return (
        ec.txh.has(a.type) &&
            (t = (0, n.jsx)(y.d, {
                label: eo.intl.string(eo.t["+KCMSi"]),
                checked: o,
                onChange: (e) => {
                    d(e), R.A.setFriendSync(a.type, a.id, e);
                },
            })),
        ec.ewM.has(a.type) &&
            (l = (0, n.jsx)(y.d, {
                label: eo.intl.format(eo.t["6u6J0q"], { platform: A.name }),
                checked: u,
                onChange: (e) => {
                    x(e), R.A.setShowActivity(a.type, a.id, e);
                },
            })),
        !0 === A.hasMetadata &&
            (i = (0, n.jsx)(y.d, {
                label: eo.intl.string(eo.t.FYKGsL),
                checked: m,
                disabled: !j,
                onChange: (e) => {
                    c(e), h(e), R.A.setMetadataVisibility(a.type, a.id, +!!e);
                },
            })),
        (0, n.jsxs)("div", {
            className: ed.ek,
            children: [
                (0, n.jsx)(y.d, {
                    label: eo.intl.string(eo.t.f7yOAX),
                    checked: j,
                    onChange: (e) => {
                        r(!e), f(e), R.A.setVisibility(a.type, a.id, +!!e);
                    },
                }),
                i,
                l,
                t,
            ],
        })
    );
}
function ef(e) {
    let { transitionState: t, onClose: l, guildId: i, role: a } = e,
        [r, o] = s.useState(0),
        [d, x] = s.useState(null),
        [h, j] = s.useState(!1),
        [p, g] = s.useState(!0),
        [N, y] = s.useState(!1),
        [R, I] = s.useState(!0),
        [G, O] = s.useState(!1),
        H = (0, u.bG)([Z.A], () => Z.A.getAccounts()),
        z = (0, u.bG)([Q.default], () => Q.default.getId()),
        [D, Y] = s.useState(null),
        [J, el] = s.useState(null),
        [en, es] = s.useState(null),
        er = (0, L.Ay)(),
        eu = (0, u.bG)([F.default], () => F.default.locale),
        em = (0, u.bG)([W.Ay], () => W.Ay.getMember(i, z)),
        ef = Object.values((0, u.bG)([B.A], () => B.A.getMutableGuildChannelsForGuild(i))).filter(
            (e) => q.A.can(ec.xBc.VIEW_CHANNEL, e) && q.A.can(ec.xBc.SEND_MESSAGES, e) && (0, V.A)(e).includes(a),
        );
    function eA() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        l?.(), e && (0, E.closeModal)(ea.CB, C.SY);
    }
    function ep() {
        eA(!0), (0, X.openUserSettings)(K.X.AUTHORIZED_APPS_PANEL);
    }
    function eg() {
        eA(!0), (0, X.openUserSettings)(K.X.CONNECTIONS_PANEL);
    }
    async function eN() {
        y(!0), await T.A.assignGuildRoleConnection(i, a.id);
    }
    function ev() {
        ee.default.track(ec.HAw.PASSPORT_CHALLENGE_STARTED, { role_id: a.id, ...(0, $.H$)(i) });
    }
    function ey(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        Y(e),
            el(t),
            o(1),
            null != t &&
                (0, et.XC)()
                    .then((e) => {
                        es(e);
                    })
                    .catch(() => {});
    }
    return (
        s.useEffect(() => {
            T.A.fetchGuildRoleConnectionsEligibility(i, a.id).then((e) => {
                x(e), j(e.some((e) => e.every((e) => e.result))), g(!1);
            });
        }, [i, a.id, H]),
        s.useEffect(() => {
            ee.default.track(ec.HAw.PASSPORT_CHALLENGE_VIEWED, { role_id: a.id, ...(0, $.H$)(i) });
        }, [i, a.id]),
        s.useEffect(() => {
            N &&
                null != em &&
                em.roles.includes(a.id) &&
                (y(!1),
                ef.length > 0 ? o(2) : l?.(),
                ee.default.track(ec.HAw.PASSPORT_CHALLENGE_FINISHED, { role_id: a.id, ...(0, $.H$)(i) }));
        }, [N, ef.length, em, i, a.id, l]),
        (0, n.jsxs)(S.EO, {
            size: S.rI.MEDIUM,
            transitionState: t,
            "aria-label": eo.intl.string(eo.t.zOZh3R),
            className: ed.CR,
            parentComponent: "GuildRoleConnectionsConnectAccountsModal",
            children: [
                (function () {
                    switch (r) {
                        case 0:
                            return (0, n.jsxs)(S.rQ, {
                                className: ed.wx,
                                separator: !1,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: ed.TK,
                                        children: (0, n.jsx)(f.D, {
                                            variant: "heading-xl/semibold",
                                            children: eo.intl.string(eo.t.zOZh3R),
                                        }),
                                    }),
                                    (0, n.jsx)(S.s_, { onClick: () => eA() }),
                                ],
                            });
                        case 1: {
                            c()(null != D, "lastPlatformConnected is null");
                            let e = J?.name ?? M.A.get(D)?.name;
                            return (0, n.jsxs)(S.rQ, {
                                className: ed.wx,
                                separator: !1,
                                children: [
                                    (0, n.jsx)(f.D, {
                                        variant: "heading-xl/semibold",
                                        className: ed.TK,
                                        children: eo.intl.format(eo.t.yQvgBO, { platformName: e }),
                                    }),
                                    (0, n.jsx)(S.s_, { onClick: () => eA() }),
                                ],
                            });
                        }
                        case 2:
                            return (0, n.jsxs)(S.rQ, {
                                className: ed.wx,
                                separator: !1,
                                children: [
                                    (0, n.jsx)(f.D, {
                                        variant: "heading-xl/extrabold",
                                        className: ed.TK,
                                        children: eo.intl.string(eo.t.najNdz),
                                    }),
                                    (0, n.jsx)(S.s_, { onClick: () => eA(!0) }),
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
                                let e = null != d && d.length > 1,
                                    t = null != d && 1 === d.length && 1 === d[0].length;
                                return (0, n.jsx)(S.$m, {
                                    children:
                                        p || null == d
                                            ? (0, n.jsx)(b.y, { className: ed.NL })
                                            : (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                      (0, n.jsx)(A.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-default",
                                                          children: eo.intl.format(
                                                              t ? eo.t.jHfRvZ : e ? eo.t["mOQ8k+"] : eo.t.U0olLg,
                                                              { roleName: a.name },
                                                          ),
                                                      }),
                                                      (0, n.jsx)(k.Ip, {
                                                          className: ed.NL,
                                                          children: (0, n.jsx)(eh, {
                                                              eligibilityStatesGroups: d,
                                                              onPlatformConnect: ev,
                                                              onPlatformConnected: ey,
                                                          }),
                                                      }),
                                                      (0, n.jsx)(A.E, {
                                                          variant: "text-xs/normal",
                                                          className: ed.PJ,
                                                          color: "text-default",
                                                          children: eo.intl.format(eo.t.gsgvxh, {
                                                              privacyPolicyUrl: ec.X7G.PRIVACY,
                                                              onAuthorizedApplicationsClick: () => ep(),
                                                              onConnectionsClick: () => eg(),
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                });
                            }
                            case 1: {
                                c()(null != D, "lastPlatformConnected is null");
                                let e = H.find((e) => {
                                        let { type: t } = e;
                                        return D === t;
                                    }),
                                    t = en?.find((e) => {
                                        let { application: t } = e;
                                        return t.id === J?.id;
                                    });
                                return (0, n.jsxs)(S.$m, {
                                    children: [
                                        (0, n.jsx)(A.E, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            children: eo.intl.format(eo.t.gsgvxh, {
                                                privacyPolicyUrl: ec.X7G.PRIVACY,
                                                onAuthorizedApplicationsClick: () => ep(),
                                                onConnectionsClick: () => eg(),
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: ed.m1,
                                            children:
                                                null == e && null == t
                                                    ? (0, n.jsx)(b.y, { className: ed.bD })
                                                    : (0, n.jsxs)(n.Fragment, {
                                                          children: [
                                                              null != e
                                                                  ? (0, n.jsxs)(n.Fragment, {
                                                                        children: [
                                                                            (0, n.jsxs)("div", {
                                                                                className: ed.yk,
                                                                                children: [
                                                                                    (0, n.jsx)(A.E, {
                                                                                        variant: "eyebrow",
                                                                                        color: "text-default",
                                                                                        children: eo.intl.string(
                                                                                            eo.t.TOjkEg,
                                                                                        ),
                                                                                    }),
                                                                                    (0, n.jsx)(U.wQ, {
                                                                                        connectedAccount: e,
                                                                                        userId: z,
                                                                                        theme: er,
                                                                                        locale: eu,
                                                                                        className: ed.eT,
                                                                                        showMetadata: R,
                                                                                        showInvisibleIcon: G,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, n.jsxs)("div", {
                                                                                className: ed.yk,
                                                                                children: [
                                                                                    (0, n.jsx)(A.E, {
                                                                                        variant: "eyebrow",
                                                                                        color: "text-default",
                                                                                        children: eo.intl.string(
                                                                                            eo.t.jndPhX,
                                                                                        ),
                                                                                    }),
                                                                                    (0, n.jsx)(ej, {
                                                                                        account: e,
                                                                                        setShowPreviewInvisibleIcon: O,
                                                                                        setShowPreviewMetadata: I,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    })
                                                                  : null,
                                                              null != t
                                                                  ? (0, n.jsxs)("div", {
                                                                        className: ed.yk,
                                                                        children: [
                                                                            (0, n.jsxs)("div", {
                                                                                className: ed.a5,
                                                                                children: [
                                                                                    (0, n.jsx)(A.E, {
                                                                                        variant: "eyebrow",
                                                                                        color: "text-default",
                                                                                        children: eo.intl.string(
                                                                                            eo.t.TOjkEg,
                                                                                        ),
                                                                                    }),
                                                                                    (0, n.jsx)(m.m, {
                                                                                        text: eo.intl.string(
                                                                                            eo.t.x3svVc,
                                                                                        ),
                                                                                        children: (0, n.jsx)(v.m, {
                                                                                            size: "xs",
                                                                                            color: "currentColor",
                                                                                        }),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, n.jsx)(U.Wc, {
                                                                                applicationRoleConnection: t,
                                                                                className: ed.eT,
                                                                                locale: eu,
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
                                            className: ed.kf,
                                            children: [
                                                (0, n.jsx)(ei.A, { guildId: i, className: ed.w$, role: a, size: 24 }),
                                                (0, n.jsx)(A.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: ed.jm,
                                                    children: a.name,
                                                }),
                                            ],
                                        }),
                                        (0, n.jsx)(k.Ip, {
                                            className: ed.eu,
                                            children: ef.map((e) => (0, n.jsx)(ex, { channel: e }, e.id)),
                                        }),
                                    ],
                                });
                            default:
                                return null;
                        }
                    })(),
                }),
                (function () {
                    let e = d?.flat().some((e) => null == e.application_id) ?? !1;
                    switch (r) {
                        case 0:
                            return (0, n.jsxs)(S.jl, {
                                children: [
                                    (0, n.jsx)(_.$, {
                                        variant: "primary",
                                        text: eo.intl.string(eo.t["8SuVoE"]),
                                        onClick: () => eN(),
                                        disabled: p || !h || N,
                                    }),
                                    e
                                        ? (0, n.jsx)("div", {
                                              className: ed.yY,
                                              children: (0, n.jsx)(w.Q, {
                                                  variant: "primary",
                                                  text: eo.intl.string(eo.t.VXV55P),
                                                  onClick: eg,
                                              }),
                                          })
                                        : null,
                                ],
                            });
                        case 1:
                            return (0, n.jsx)(S.jl, {
                                children: (0, n.jsx)(_.$, {
                                    variant: "primary",
                                    text: eo.intl.string(eo.t.i4jeWR),
                                    onClick: () => o(0),
                                }),
                            });
                        default:
                            return (0, n.jsxs)(S.jl, {
                                children: [
                                    (0, n.jsx)(_.$, {
                                        variant: "primary",
                                        text: eo.intl.string(eo.t.cpT0Cq),
                                        onClick: () => eA(!0),
                                    }),
                                    e
                                        ? (0, n.jsx)("div", {
                                              className: ed.yY,
                                              children: (0, n.jsx)(w.Q, {
                                                  variant: "primary",
                                                  text: eo.intl.string(eo.t.VXV55P),
                                                  onClick: eg,
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

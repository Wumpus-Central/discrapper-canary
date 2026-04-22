n.d(t, { default: () => ex });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(284009),
    c = n.n(o),
    r = n(735438),
    d = n.n(r),
    u = n(311907),
    h = n(827734),
    p = n(990078),
    m = n(462887),
    x = n(862482),
    g = n(534514),
    _ = n(834730),
    f = n(602853),
    A = n(933832),
    b = n(939249),
    C = n(885574),
    N = n(243721),
    v = n(192308),
    y = n(231723),
    j = n(935462),
    S = n(289873),
    E = n(573613),
    I = n(821609),
    T = n(123292),
    R = n(685094),
    k = n(77468),
    O = n(686956),
    P = n(730134),
    G = n(964486),
    w = n(736653),
    H = n(573648),
    M = n(58149),
    L = n(709066),
    D = n(920268),
    U = n(47167),
    V = n(713654),
    F = n(46937),
    $ = n(773669),
    B = n(780964),
    K = n(858897),
    Y = n(427157),
    z = n(961350),
    W = n(734057),
    X = n(962173),
    Q = n(696451),
    Z = n(576705),
    q = n(147925),
    J = n(954571),
    ee = n(619006),
    et = n(370480),
    en = n(882997),
    ea = n(355971),
    ei = n(967740),
    es = n(293260),
    el = n(783419),
    eo = n(652215),
    ec = n(985018),
    er = n(353659);
function ed(e) {
    let { platformType: t, className: n } = e,
        i = (0, w.Ay)(),
        s = H.A.get(t);
    return (0, a.jsx)("img", {
        src: (0, m.q)(i) ? s.icon.lightSVG : s.icon.darkSVG,
        alt: "",
        className: l()(er.tV, n),
    });
}
function eu(e) {
    let { channel: t, className: n } = e,
        i = (0, V.gU)(t),
        s = (0, U.Ay)(t);
    return (0, a.jsxs)("div", {
        className: l()(er.HA, n),
        children: [
            null != i ? (0, a.jsx)(i, { className: er.er }) : null,
            (0, a.jsx)(g.D, { variant: "heading-lg/semibold", color: "text-default", className: er.Kw, children: s }),
        ],
    });
}
function eh(e) {
    let t,
        { connectionType: n, connectionMetadataField: i, operator: s, value: l, result: o, description: c } = e,
        r = null;
    if (null != c)
        switch (s) {
            case el.so.LESS_THAN:
                r = ec.intl.format(ec.t["2p7dA3"], { description: c, count: Math.max(0, Number(l) - 1) });
                break;
            case el.so.GREATER_THAN:
                r = ec.intl.format(ec.t["2p7dA3"], { description: c, count: Math.max(0, Number(l) + 1) });
                break;
            default:
                r = c;
        }
    else {
        let e;
        switch (s) {
            case el.so.EQUAL:
                (e = ec.t["0BlpbA"]), n === eo.fg2.PAYPAL && i === el.pK.PAYPAL_VERIFIED && (e = ec.t.dcSDhW);
                break;
            case el.so.NOT_EQUAL:
                e = ec.t.otcpTN;
                break;
            case el.so.LESS_THAN:
                e = ec.t.Ef35xs;
                break;
            case el.so.GREATER_THAN:
                e = ec.t["8W9OXU"];
                break;
            case void 0:
            case null:
                return null;
        }
        if (
            null ==
            (r = (0, et.RP)({ connectionType: n, connectionMetadataField: i, operator: s, operatorText: e, value: l }))
        )
            return null;
    }
    return (
        (t = o ? "text-default" : "text-feedback-critical"),
        (0, a.jsx)(_.E, { variant: "text-xs/normal", color: t, className: er.E6, children: r })
    );
}
function ep(e) {
    let { eligibilityStatesGroups: t, onPlatformConnect: n, onPlatformConnected: s } = e,
        [o, r] = i.useState({}),
        [u, m] = i.useState(0),
        [g, N] = i.useState(null),
        [v, y] = i.useState(null),
        j = i.useMemo(() => d().flatten(t), [t]),
        S = i.useMemo(
            () =>
                d().groupBy(j, (e) => `${e.connection_type}${null != e.application_id ? `:${e.application_id}` : ""}`),
            [j],
        );
    i.useEffect(() => m(Date.now()), [j]),
        i.useEffect(() => {
            if (null == g) return;
            let e = S[`${g}${null != v ? `:${v.id}` : ""}`];
            null == e || (e.every((e) => e.result) && s(g, v));
        }, [S, g, v, s]);
    let E = (0, f.r)(h.A.unsafe_rawColors.GREEN_330).hex();
    return (0, a.jsx)(a.Fragment, {
        children: Object.keys(S)
            .sort((e, t) => {
                let n = S[e].every((e) => e.result),
                    a = S[t].every((e) => e.result);
                return !0 === n && !1 === a ? 1 : !1 === n && !0 === a ? -1 : 0;
            })
            .map((e) => {
                let t,
                    i,
                    s,
                    d = S[e],
                    h = d.find((e) => null == e.operator),
                    m = d.filter((e) => null != e.operator),
                    g = (null == h || h.result) && m.every((e) => e.result),
                    f = d.find((e) => null != e.application),
                    v = H.A.get(e),
                    j = null == v || v.enabled,
                    I = f?.application,
                    T = I?.bot != null ? new Y.A(I.bot) : null;
                et.iC.includes(I?.id ?? "")
                    ? (t = (0, a.jsx)(ea.A, { className: er.AO, color: E, size: 16 }))
                    : null != T && (t = (0, a.jsx)(L.A, { className: er.AO, verified: T.isVerifiedBot() }));
                let R = o[v?.type ?? el.zR],
                    k = !g && null != R && R <= u;
                return (
                    (i = g
                        ? (0, a.jsx)(A.A, { size: "md", color: "currentColor", className: er.rA })
                        : k
                          ? (0, a.jsx)(x.$n, {
                                size: x.$n.Sizes.TINY,
                                look: x.$n.Looks.LINK,
                                color: x.$n.Colors.LINK,
                                className: er.gN,
                                children: ec.intl.string(ec.t["5911Lb"]),
                            })
                          : j
                            ? (0, a.jsx)(q.A, { direction: q.A.Directions.RIGHT, className: er.t4 })
                            : (0, a.jsx)(_.E, {
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: ec.intl.string(ec.t.cEts68),
                              })),
                    v?.type === eo.fg2.STEAM && (s = ec.intl.string(ec.t.NcZh6K)),
                    (0, a.jsxs)(
                        b.D,
                        {
                            className: l()(er.UY, g ? er.o6 : null, j ? null : er.pC),
                            onClick:
                                !g && j
                                    ? () => {
                                          var e;
                                          return (
                                              (e = v?.type ?? el.zR),
                                              void ((0, en.A)({
                                                  platformType: e,
                                                  location: "Verified Roles Connect Accounts Modal",
                                                  overrideUrl: I?.role_connections_verification_url,
                                              }),
                                              r({ ...o, [e]: Date.now() }),
                                              N(e),
                                              y(I ?? null),
                                              n())
                                          );
                                      }
                                    : void 0,
                            children: [
                                !g && k
                                    ? (0, a.jsx)("div", {
                                          className: er.Z1,
                                          children: (0, a.jsx)(_.E, {
                                              variant: "text-xs/normal",
                                              color: "always-white",
                                              children: ec.intl.string(ec.t.UB3hKo),
                                          }),
                                      })
                                    : null,
                                null != v ? (0, a.jsx)(ed, { platformType: v.type }) : null,
                                null != T ? (0, a.jsx)(P.A, { user: T }) : null,
                                (0, a.jsxs)("div", {
                                    className: er.EZ,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: er.Pf,
                                            children: [
                                                (0, a.jsx)(_.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    children: v?.name ?? I?.name,
                                                }),
                                                t,
                                                null != s
                                                    ? (0, a.jsx)(p.m, {
                                                          text: s,
                                                          children: (0, a.jsx)(C.m, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: er.$I,
                                                          }),
                                                      })
                                                    : null,
                                            ],
                                        }),
                                        m.map((e) => {
                                            let {
                                                connection_type: t,
                                                connection_metadata_field: n,
                                                operator: i,
                                                value: s,
                                                result: l,
                                                description: o,
                                            } = e;
                                            return (
                                                c()(null != n, "connectionMetadataField is null"),
                                                c()(null != i, "operator is null"),
                                                c()(null != s, "value is null"),
                                                (0, a.jsx)(
                                                    eh,
                                                    {
                                                        connectionType: t,
                                                        connectionMetadataField: n,
                                                        operator: i,
                                                        value: s,
                                                        result: l,
                                                        description: o,
                                                    },
                                                    n,
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
function em(e) {
    let t,
        n,
        s,
        { account: l, setShowPreviewInvisibleIcon: o, setShowPreviewMetadata: c } = e,
        [r, d] = i.useState(l.friendSync),
        [u, h] = i.useState(l.showActivity),
        [p, m] = i.useState(1 === l.metadataVisibility),
        [x, g] = i.useState(1 === l.visibility);
    (0, G.Ay)(() => {
        o(!x), c(p);
    });
    let _ = H.A.get(l.type);
    return (
        eo.txh.has(l.type) &&
            (t = (0, a.jsx)(N.d, {
                label: ec.intl.string(ec.t["+KCMSi"]),
                checked: r,
                onChange: (e) => {
                    d(e), k.A.setFriendSync(l.type, l.id, e);
                },
            })),
        eo.ewM.has(l.type) &&
            (n = (0, a.jsx)(N.d, {
                label: ec.intl.format(ec.t["6u6J0q"], { platform: _.name }),
                checked: u,
                onChange: (e) => {
                    h(e), k.A.setShowActivity(l.type, l.id, e);
                },
            })),
        !0 === _.hasMetadata &&
            (s = (0, a.jsx)(N.d, {
                label: ec.intl.string(ec.t.FYKGsL),
                checked: p,
                disabled: !x,
                onChange: (e) => {
                    c(e), m(e), k.A.setMetadataVisibility(l.type, l.id, +!!e);
                },
            })),
        (0, a.jsxs)("div", {
            className: er.ek,
            children: [
                (0, a.jsx)(N.d, {
                    label: ec.intl.string(ec.t.f7yOAX),
                    checked: x,
                    onChange: (e) => {
                        o(!e), g(e), k.A.setVisibility(l.type, l.id, +!!e);
                    },
                }),
                s,
                n,
                t,
            ],
        })
    );
}
function ex(e) {
    let { transitionState: t, onClose: n, guildId: s, role: l } = e,
        [o, r] = i.useState(0),
        [d, h] = i.useState(null),
        [m, x] = i.useState(!1),
        [f, A] = i.useState(!0),
        [b, N] = i.useState(!1),
        [k, P] = i.useState(!0),
        [G, L] = i.useState(!1),
        U = (0, u.bG)([X.A], () => X.A.getAccounts()),
        V = (0, u.bG)([z.default], () => z.default.getId()),
        [Y, q] = i.useState(null),
        [et, en] = i.useState(null),
        [ea, el] = i.useState(null),
        ed = (0, w.Ay)(),
        eh = (0, u.bG)([$.default], () => $.default.locale),
        ex = (0, u.bG)([Q.Ay], () => Q.Ay.getMember(s, V)),
        eg = Object.values((0, u.bG)([W.A], () => W.A.getMutableGuildChannelsForGuild(s))).filter(
            (e) => Z.A.can(eo.xBc.VIEW_CHANNEL, e) && Z.A.can(eo.xBc.SEND_MESSAGES, e) && (0, D.A)(e).includes(l),
        );
    function e_() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        n?.(), e && (0, v.closeModal)(es.CB, y.SY);
    }
    function ef() {
        e_(!0), (0, K.openUserSettings)(B.X.AUTHORIZED_APPS_PANEL);
    }
    function eA() {
        e_(!0), (0, K.openUserSettings)(B.X.CONNECTIONS_PANEL);
    }
    async function eb() {
        N(!0), await O.A.assignGuildRoleConnection(s, l.id);
    }
    function eC() {
        J.default.track(eo.HAw.PASSPORT_CHALLENGE_STARTED, { role_id: l.id, ...(0, M.H$)(s) });
    }
    function eN(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        q(e),
            en(t),
            r(1),
            null != t &&
                (0, ee.XC)()
                    .then((e) => {
                        el(e);
                    })
                    .catch(() => {});
    }
    return (
        i.useEffect(() => {
            O.A.fetchGuildRoleConnectionsEligibility(s, l.id).then((e) => {
                h(e), x(e.some((e) => e.every((e) => e.result))), A(!1);
            });
        }, [s, l.id, U]),
        i.useEffect(() => {
            J.default.track(eo.HAw.PASSPORT_CHALLENGE_VIEWED, { role_id: l.id, ...(0, M.H$)(s) });
        }, [s, l.id]),
        i.useEffect(() => {
            b &&
                null != ex &&
                ex.roles.includes(l.id) &&
                (N(!1),
                eg.length > 0 ? r(2) : n?.(),
                J.default.track(eo.HAw.PASSPORT_CHALLENGE_FINISHED, { role_id: l.id, ...(0, M.H$)(s) }));
        }, [b, eg.length, ex, s, l.id, n]),
        (0, a.jsxs)(j.EO, {
            size: j.rI.MEDIUM,
            transitionState: t,
            "aria-label": ec.intl.string(ec.t.zOZh3R),
            className: er.CR,
            parentComponent: "GuildRoleConnectionsConnectAccountsModal",
            children: [
                (function () {
                    switch (o) {
                        case 0:
                            return (0, a.jsxs)(j.rQ, {
                                className: er.wx,
                                separator: !1,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: er.TK,
                                        children: (0, a.jsx)(g.D, {
                                            variant: "heading-xl/semibold",
                                            children: ec.intl.string(ec.t.zOZh3R),
                                        }),
                                    }),
                                    (0, a.jsx)(j.s_, { onClick: () => e_() }),
                                ],
                            });
                        case 1: {
                            c()(null != Y, "lastPlatformConnected is null");
                            let e = et?.name ?? H.A.get(Y)?.name;
                            return (0, a.jsxs)(j.rQ, {
                                className: er.wx,
                                separator: !1,
                                children: [
                                    (0, a.jsx)(g.D, {
                                        variant: "heading-xl/semibold",
                                        className: er.TK,
                                        children: ec.intl.format(ec.t.yQvgBO, { platformName: e }),
                                    }),
                                    (0, a.jsx)(j.s_, { onClick: () => e_() }),
                                ],
                            });
                        }
                        case 2:
                            return (0, a.jsxs)(j.rQ, {
                                className: er.wx,
                                separator: !1,
                                children: [
                                    (0, a.jsx)(g.D, {
                                        variant: "heading-xl/extrabold",
                                        className: er.TK,
                                        children: ec.intl.string(ec.t.najNdz),
                                    }),
                                    (0, a.jsx)(j.s_, { onClick: () => e_(!0) }),
                                ],
                            });
                        default:
                            return null;
                    }
                })(),
                (0, a.jsx)(R.Y, {
                    step: o,
                    steps: [0, 1, 2],
                    children: (function () {
                        switch (o) {
                            case 0: {
                                let e = null != d && d.length > 1,
                                    t = null != d && 1 === d.length && 1 === d[0].length;
                                return (0, a.jsx)(j.$m, {
                                    children:
                                        f || null == d
                                            ? (0, a.jsx)(S.y, { className: er.NL })
                                            : (0, a.jsxs)(a.Fragment, {
                                                  children: [
                                                      (0, a.jsx)(_.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-default",
                                                          children: ec.intl.format(
                                                              t ? ec.t.jHfRvZ : e ? ec.t["mOQ8k+"] : ec.t.U0olLg,
                                                              { roleName: l.name },
                                                          ),
                                                      }),
                                                      (0, a.jsx)(E.Ip, {
                                                          className: er.NL,
                                                          children: (0, a.jsx)(ep, {
                                                              eligibilityStatesGroups: d,
                                                              onPlatformConnect: eC,
                                                              onPlatformConnected: eN,
                                                          }),
                                                      }),
                                                      (0, a.jsx)(_.E, {
                                                          variant: "text-xs/normal",
                                                          className: er.PJ,
                                                          color: "text-default",
                                                          children: ec.intl.format(ec.t.gsgvxh, {
                                                              privacyPolicyUrl: eo.X7G.PRIVACY,
                                                              onAuthorizedApplicationsClick: () => ef(),
                                                              onConnectionsClick: () => eA(),
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                });
                            }
                            case 1: {
                                c()(null != Y, "lastPlatformConnected is null");
                                let e = U.find((e) => {
                                        let { type: t } = e;
                                        return Y === t;
                                    }),
                                    t = ea?.find((e) => {
                                        let { application: t } = e;
                                        return t.id === et?.id;
                                    });
                                return (0, a.jsxs)(j.$m, {
                                    children: [
                                        (0, a.jsx)(_.E, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            children: ec.intl.format(ec.t.gsgvxh, {
                                                privacyPolicyUrl: eo.X7G.PRIVACY,
                                                onAuthorizedApplicationsClick: () => ef(),
                                                onConnectionsClick: () => eA(),
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            className: er.m1,
                                            children:
                                                null == e && null == t
                                                    ? (0, a.jsx)(S.y, { className: er.bD })
                                                    : (0, a.jsxs)(a.Fragment, {
                                                          children: [
                                                              null != e
                                                                  ? (0, a.jsxs)(a.Fragment, {
                                                                        children: [
                                                                            (0, a.jsxs)("div", {
                                                                                className: er.yk,
                                                                                children: [
                                                                                    (0, a.jsx)(_.E, {
                                                                                        variant: "eyebrow",
                                                                                        color: "text-default",
                                                                                        children: ec.intl.string(
                                                                                            ec.t.TOjkEg,
                                                                                        ),
                                                                                    }),
                                                                                    (0, a.jsx)(F.wQ, {
                                                                                        connectedAccount: e,
                                                                                        userId: V,
                                                                                        theme: ed,
                                                                                        locale: eh,
                                                                                        className: er.eT,
                                                                                        showMetadata: k,
                                                                                        showInvisibleIcon: G,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, a.jsxs)("div", {
                                                                                className: er.yk,
                                                                                children: [
                                                                                    (0, a.jsx)(_.E, {
                                                                                        variant: "eyebrow",
                                                                                        color: "text-default",
                                                                                        children: ec.intl.string(
                                                                                            ec.t.jndPhX,
                                                                                        ),
                                                                                    }),
                                                                                    (0, a.jsx)(em, {
                                                                                        account: e,
                                                                                        setShowPreviewInvisibleIcon: L,
                                                                                        setShowPreviewMetadata: P,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    })
                                                                  : null,
                                                              null != t
                                                                  ? (0, a.jsxs)("div", {
                                                                        className: er.yk,
                                                                        children: [
                                                                            (0, a.jsxs)("div", {
                                                                                className: er.a5,
                                                                                children: [
                                                                                    (0, a.jsx)(_.E, {
                                                                                        variant: "eyebrow",
                                                                                        color: "text-default",
                                                                                        children: ec.intl.string(
                                                                                            ec.t.TOjkEg,
                                                                                        ),
                                                                                    }),
                                                                                    (0, a.jsx)(p.m, {
                                                                                        text: ec.intl.string(
                                                                                            ec.t.x3svVc,
                                                                                        ),
                                                                                        children: (0, a.jsx)(C.m, {
                                                                                            size: "xs",
                                                                                            color: "currentColor",
                                                                                        }),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, a.jsx)(F.Wc, {
                                                                                applicationRoleConnection: t,
                                                                                className: er.eT,
                                                                                locale: eh,
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
                                return (0, a.jsxs)(j.$m, {
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: er.kf,
                                            children: [
                                                (0, a.jsx)(ei.A, { guildId: s, className: er.w$, role: l, size: 24 }),
                                                (0, a.jsx)(_.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: er.jm,
                                                    children: l.name,
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(E.Ip, {
                                            className: er.eu,
                                            children: eg.map((e) => (0, a.jsx)(eu, { channel: e }, e.id)),
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
                    switch (o) {
                        case 0:
                            return (0, a.jsxs)(j.jl, {
                                children: [
                                    (0, a.jsx)(I.$, {
                                        variant: "primary",
                                        text: ec.intl.string(ec.t["8SuVoE"]),
                                        onClick: () => eb(),
                                        disabled: f || !m || b,
                                    }),
                                    e
                                        ? (0, a.jsx)("div", {
                                              className: er.yY,
                                              children: (0, a.jsx)(T.Q, {
                                                  variant: "primary",
                                                  text: ec.intl.string(ec.t.VXV55P),
                                                  onClick: eA,
                                              }),
                                          })
                                        : null,
                                ],
                            });
                        case 1:
                            return (0, a.jsx)(j.jl, {
                                children: (0, a.jsx)(I.$, {
                                    variant: "primary",
                                    text: ec.intl.string(ec.t.i4jeWR),
                                    onClick: () => r(0),
                                }),
                            });
                        default:
                            return (0, a.jsxs)(j.jl, {
                                children: [
                                    (0, a.jsx)(I.$, {
                                        variant: "primary",
                                        text: ec.intl.string(ec.t.cpT0Cq),
                                        onClick: () => e_(!0),
                                    }),
                                    e
                                        ? (0, a.jsx)("div", {
                                              className: er.yY,
                                              children: (0, a.jsx)(T.Q, {
                                                  variant: "primary",
                                                  text: ec.intl.string(ec.t.VXV55P),
                                                  onClick: eA,
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

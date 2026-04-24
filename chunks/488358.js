n.d(t, { default: () => e_ });
var a = n(627968),
    l = n(64700),
    c = n(503698),
    o = n.n(c),
    i = n(284009),
    s = n.n(i),
    r = n(735438),
    d = n.n(r),
    u = n(17928),
    h = n(661531),
    m = n(990078),
    x = n(462887),
    p = n(862482),
    _ = n(534514),
    f = n(834730),
    C = n(602853),
    b = n(933832),
    A = n(939249),
    N = n(885574),
    j = n(243721),
    y = n(192308),
    g = n(231723),
    E = n(935462),
    v = n(289873),
    S = n(364522),
    I = n(821609),
    k = n(123292),
    T = n(685094),
    R = n(77468),
    O = n(686956),
    G = n(730134),
    w = n(964486),
    P = n(736653),
    L = n(573648),
    M = n(58149),
    U = n(941314),
    D = n(709066),
    V = n(920268),
    H = n(47167),
    F = n(713654),
    $ = n(46937),
    B = n(773669),
    z = n(780964),
    K = n(858897),
    Y = n(889227),
    X = n(495544),
    Q = n(734057),
    W = n(30370),
    Z = n(696451),
    q = n(576705),
    J = n(147925),
    ee = n(954571),
    et = n(619006),
    en = n(370480),
    ea = n(773952),
    el = n(355971),
    ec = n(967740),
    eo = n(293260),
    ei = n(783419),
    es = n(652215),
    er = n(985018),
    ed = n(353659);
function eu(e) {
    let { platformType: t, className: n } = e,
        l = (0, P.Ay)(),
        c = L.A.get(t);
    return (0, a.jsx)("img", {
        src: (0, x.q)(l) ? c.icon.lightSVG : c.icon.darkSVG,
        alt: "",
        className: o()(ed.tV, n),
    });
}
function eh(e) {
    let { channel: t, className: n } = e,
        l = (0, F.gU)(t),
        c = (0, H.Ay)(t);
    return (0, a.jsxs)("div", {
        className: o()(ed.HA, n),
        children: [
            null != l ? (0, a.jsx)(l, { className: ed.er }) : null,
            (0, a.jsx)(_.D, { variant: "heading-lg/semibold", color: "text-default", className: ed.Kw, children: c }),
        ],
    });
}
function em(e) {
    let t,
        { connectionType: n, connectionMetadataField: l, operator: c, value: o, result: i, description: s } = e,
        r = null;
    if (null != s)
        switch (c) {
            case ei.so.LESS_THAN:
                r = er.intl.format(er.t["2p7dA3"], { description: s, count: Math.max(0, Number(o) - 1) });
                break;
            case ei.so.GREATER_THAN:
                r = er.intl.format(er.t["2p7dA3"], { description: s, count: Math.max(0, Number(o) + 1) });
                break;
            default:
                r = s;
        }
    else {
        let e;
        switch (c) {
            case ei.so.EQUAL:
                (e = er.t["0BlpbA"]), n === es.fg2.PAYPAL && l === ei.pK.PAYPAL_VERIFIED && (e = er.t.dcSDhW);
                break;
            case ei.so.NOT_EQUAL:
                e = er.t.otcpTN;
                break;
            case ei.so.LESS_THAN:
                e = er.t.Ef35xs;
                break;
            case ei.so.GREATER_THAN:
                e = er.t["8W9OXU"];
                break;
            case void 0:
            case null:
                return null;
        }
        if (
            null ==
            (r = (0, en.RP)({ connectionType: n, connectionMetadataField: l, operator: c, operatorText: e, value: o }))
        )
            return null;
    }
    return (
        (t = i ? "text-default" : "text-feedback-critical"),
        (0, a.jsx)(f.E, { variant: "text-xs/normal", color: t, className: ed.E6, children: r })
    );
}
function ex(e) {
    let { eligibilityStatesGroups: t, onPlatformConnect: n, onPlatformConnected: c } = e,
        [i, r] = l.useState({}),
        [u, x] = l.useState(0),
        [_, j] = l.useState(null),
        [y, g] = l.useState(null),
        E = l.useMemo(() => d().flatten(t), [t]),
        v = l.useMemo(
            () =>
                d().groupBy(E, (e) => `${e.connection_type}${null != e.application_id ? `:${e.application_id}` : ""}`),
            [E],
        );
    l.useEffect(() => x(Date.now()), [E]),
        l.useEffect(() => {
            if (null == _) return;
            let e = v[`${_}${null != y ? `:${y.id}` : ""}`];
            null == e || (e.every((e) => e.result) && c(_, y));
        }, [v, _, y, c]);
    let S = (0, C.r)(h.A.unsafe_rawColors.GREEN_330).hex(),
        I = U.A.useConfig({ location: "Linked Roles Modal" }).enabled;
    return (0, a.jsx)(a.Fragment, {
        children: Object.keys(v)
            .sort((e, t) => {
                let n = v[e].every((e) => e.result),
                    a = v[t].every((e) => e.result);
                return !0 === n && !1 === a ? 1 : !1 === n && !0 === a ? -1 : 0;
            })
            .map((e) => {
                let t,
                    l,
                    c,
                    d = v[e],
                    h = d.find((e) => null == e.operator),
                    x = d.filter((e) => null != e.operator),
                    _ = (null == h || h.result) && x.every((e) => e.result),
                    C = d.find((e) => null != e.application),
                    y = L.A.get(e),
                    E = null == y || y.enabled,
                    k = null != y && null != y.replacedBy && I,
                    T = k || !E,
                    R = C?.application,
                    O = R?.bot != null ? new Y.A(R.bot) : null;
                en.iC.includes(R?.id ?? "")
                    ? (t = (0, a.jsx)(el.A, { className: ed.AO, color: S, size: 16 }))
                    : null != O && (t = (0, a.jsx)(D.A, { className: ed.AO, verified: O.isVerifiedBot() }));
                let w = i[y?.type ?? ei.zR],
                    P = !_ && null != w && w <= u;
                return (
                    (l = _
                        ? (0, a.jsx)(b.A, { size: "md", color: "currentColor", className: ed.rA })
                        : P
                          ? (0, a.jsx)(p.$n, {
                                size: p.$n.Sizes.TINY,
                                look: p.$n.Looks.LINK,
                                color: p.$n.Colors.LINK,
                                className: ed.gN,
                                children: er.intl.string(er.t["5911Lb"]),
                            })
                          : T
                            ? (0, a.jsx)(f.E, {
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: er.intl.string(er.t.cEts68),
                              })
                            : (0, a.jsx)(J.A, { direction: J.A.Directions.RIGHT, className: ed.t4 })),
                    k
                        ? (c = er.intl.format(er.t.Rzz1Xs, { platformName: y?.name }))
                        : y?.type === es.fg2.STEAM && (c = er.intl.string(er.t.NcZh6K)),
                    (0, a.jsxs)(
                        A.D,
                        {
                            className: o()(ed.UY, _ ? ed.o6 : null, T ? ed.pC : null),
                            onClick:
                                _ || T
                                    ? void 0
                                    : () => {
                                          var e;
                                          return (
                                              (e = y?.type ?? ei.zR),
                                              void ((0, ea.A)({
                                                  platformType: e,
                                                  location: "Verified Roles Connect Accounts Modal",
                                                  overrideUrl: R?.role_connections_verification_url,
                                              }),
                                              r({ ...i, [e]: Date.now() }),
                                              j(e),
                                              g(R ?? null),
                                              n())
                                          );
                                      },
                            children: [
                                !_ && P
                                    ? (0, a.jsx)("div", {
                                          className: ed.Z1,
                                          children: (0, a.jsx)(f.E, {
                                              variant: "text-xs/normal",
                                              color: "always-white",
                                              children: er.intl.string(er.t.UB3hKo),
                                          }),
                                      })
                                    : null,
                                null != y ? (0, a.jsx)(eu, { platformType: y.type }) : null,
                                null != O ? (0, a.jsx)(G.A, { user: O }) : null,
                                (0, a.jsxs)("div", {
                                    className: ed.EZ,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: ed.Pf,
                                            children: [
                                                (0, a.jsx)(f.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    children: y?.name ?? R?.name,
                                                }),
                                                t,
                                                null != c
                                                    ? (0, a.jsx)(m.m, {
                                                          text: c,
                                                          children: (0, a.jsx)(N.m, {
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
                                                connection_metadata_field: n,
                                                operator: l,
                                                value: c,
                                                result: o,
                                                description: i,
                                            } = e;
                                            return (
                                                s()(null != n, "connectionMetadataField is null"),
                                                s()(null != l, "operator is null"),
                                                s()(null != c, "value is null"),
                                                (0, a.jsx)(
                                                    em,
                                                    {
                                                        connectionType: t,
                                                        connectionMetadataField: n,
                                                        operator: l,
                                                        value: c,
                                                        result: o,
                                                        description: i,
                                                    },
                                                    n,
                                                )
                                            );
                                        }),
                                    ],
                                }),
                                l,
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
        n,
        c,
        { account: o, setShowPreviewInvisibleIcon: i, setShowPreviewMetadata: s } = e,
        [r, d] = l.useState(o.friendSync),
        [u, h] = l.useState(o.showActivity),
        [m, x] = l.useState(1 === o.metadataVisibility),
        [p, _] = l.useState(1 === o.visibility);
    (0, w.Ay)(() => {
        i(!p), s(m);
    });
    let f = L.A.get(o.type);
    return (
        es.txh.has(o.type) &&
            (t = (0, a.jsx)(j.d, {
                label: er.intl.string(er.t["+KCMSi"]),
                checked: r,
                onChange: (e) => {
                    d(e), R.A.setFriendSync(o.type, o.id, e);
                },
            })),
        es.ewM.has(o.type) &&
            (n = (0, a.jsx)(j.d, {
                label: er.intl.format(er.t["6u6J0q"], { platform: f.name }),
                checked: u,
                onChange: (e) => {
                    h(e), R.A.setShowActivity(o.type, o.id, e);
                },
            })),
        !0 === f.hasMetadata &&
            (c = (0, a.jsx)(j.d, {
                label: er.intl.string(er.t.FYKGsL),
                checked: m,
                disabled: !p,
                onChange: (e) => {
                    s(e), x(e), R.A.setMetadataVisibility(o.type, o.id, +!!e);
                },
            })),
        (0, a.jsxs)("div", {
            className: ed.ek,
            children: [
                (0, a.jsx)(j.d, {
                    label: er.intl.string(er.t.f7yOAX),
                    checked: p,
                    onChange: (e) => {
                        i(!e), _(e), R.A.setVisibility(o.type, o.id, +!!e);
                    },
                }),
                c,
                n,
                t,
            ],
        })
    );
}
function e_(e) {
    let { transitionState: t, onClose: n, guildId: c, role: o } = e,
        [i, r] = l.useState(0),
        [d, h] = l.useState(null),
        [x, p] = l.useState(!1),
        [C, b] = l.useState(!0),
        [A, j] = l.useState(!1),
        [R, G] = l.useState(!0),
        [w, U] = l.useState(!1),
        D = (0, u.bG)([W.A], () => W.A.getAccounts()),
        H = (0, u.bG)([X.default], () => X.default.getId()),
        [F, Y] = l.useState(null),
        [J, en] = l.useState(null),
        [ea, el] = l.useState(null),
        ei = (0, P.Ay)(),
        eu = (0, u.bG)([B.default], () => B.default.locale),
        em = (0, u.bG)([Z.Ay], () => Z.Ay.getMember(c, H)),
        e_ = Object.values((0, u.bG)([Q.A], () => Q.A.getMutableGuildChannelsForGuild(c))).filter(
            (e) => q.A.can(es.xBc.VIEW_CHANNEL, e) && q.A.can(es.xBc.SEND_MESSAGES, e) && (0, V.A)(e).includes(o),
        );
    function ef() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        n?.(), e && (0, y.closeModal)(eo.CB, g.SY);
    }
    function eC() {
        ef(!0), (0, K.openUserSettings)(z.X.AUTHORIZED_APPS_PANEL);
    }
    function eb() {
        ef(!0), (0, K.openUserSettings)(z.X.CONNECTIONS_PANEL);
    }
    async function eA() {
        j(!0), await O.A.assignGuildRoleConnection(c, o.id);
    }
    function eN() {
        ee.default.track(es.HAw.PASSPORT_CHALLENGE_STARTED, { role_id: o.id, ...(0, M.H$)(c) });
    }
    function ej(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        Y(e),
            en(t),
            r(1),
            null != t &&
                (0, et.XC)()
                    .then((e) => {
                        el(e);
                    })
                    .catch(() => {});
    }
    return (
        l.useEffect(() => {
            O.A.fetchGuildRoleConnectionsEligibility(c, o.id).then((e) => {
                h(e), p(e.some((e) => e.every((e) => e.result))), b(!1);
            });
        }, [c, o.id, D]),
        l.useEffect(() => {
            ee.default.track(es.HAw.PASSPORT_CHALLENGE_VIEWED, { role_id: o.id, ...(0, M.H$)(c) });
        }, [c, o.id]),
        l.useEffect(() => {
            A &&
                null != em &&
                em.roles.includes(o.id) &&
                (j(!1),
                e_.length > 0 ? r(2) : n?.(),
                ee.default.track(es.HAw.PASSPORT_CHALLENGE_FINISHED, { role_id: o.id, ...(0, M.H$)(c) }));
        }, [A, e_.length, em, c, o.id, n]),
        (0, a.jsxs)(E.EO, {
            size: E.rI.MEDIUM,
            transitionState: t,
            "aria-label": er.intl.string(er.t.zOZh3R),
            className: ed.CR,
            parentComponent: "GuildRoleConnectionsConnectAccountsModal",
            children: [
                (function () {
                    switch (i) {
                        case 0:
                            return (0, a.jsxs)(E.rQ, {
                                className: ed.wx,
                                separator: !1,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: ed.TK,
                                        children: (0, a.jsx)(_.D, {
                                            variant: "heading-xl/semibold",
                                            children: er.intl.string(er.t.zOZh3R),
                                        }),
                                    }),
                                    (0, a.jsx)(E.s_, { onClick: () => ef() }),
                                ],
                            });
                        case 1: {
                            s()(null != F, "lastPlatformConnected is null");
                            let e = J?.name ?? L.A.get(F)?.name;
                            return (0, a.jsxs)(E.rQ, {
                                className: ed.wx,
                                separator: !1,
                                children: [
                                    (0, a.jsx)(_.D, {
                                        variant: "heading-xl/semibold",
                                        className: ed.TK,
                                        children: er.intl.format(er.t.yQvgBO, { platformName: e }),
                                    }),
                                    (0, a.jsx)(E.s_, { onClick: () => ef() }),
                                ],
                            });
                        }
                        case 2:
                            return (0, a.jsxs)(E.rQ, {
                                className: ed.wx,
                                separator: !1,
                                children: [
                                    (0, a.jsx)(_.D, {
                                        variant: "heading-xl/extrabold",
                                        className: ed.TK,
                                        children: er.intl.string(er.t.najNdz),
                                    }),
                                    (0, a.jsx)(E.s_, { onClick: () => ef(!0) }),
                                ],
                            });
                        default:
                            return null;
                    }
                })(),
                (0, a.jsx)(T.Y, {
                    step: i,
                    steps: [0, 1, 2],
                    children: (function () {
                        switch (i) {
                            case 0: {
                                let e = null != d && d.length > 1,
                                    t = null != d && 1 === d.length && 1 === d[0].length;
                                return (0, a.jsx)(E.$m, {
                                    children:
                                        C || null == d
                                            ? (0, a.jsx)(v.y, { className: ed.NL })
                                            : (0, a.jsxs)(a.Fragment, {
                                                  children: [
                                                      (0, a.jsx)(f.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-default",
                                                          children: er.intl.format(
                                                              t ? er.t.jHfRvZ : e ? er.t["mOQ8k+"] : er.t.U0olLg,
                                                              { roleName: o.name },
                                                          ),
                                                      }),
                                                      (0, a.jsx)(S.Ip, {
                                                          className: ed.NL,
                                                          children: (0, a.jsx)(ex, {
                                                              eligibilityStatesGroups: d,
                                                              onPlatformConnect: eN,
                                                              onPlatformConnected: ej,
                                                          }),
                                                      }),
                                                      (0, a.jsx)(f.E, {
                                                          variant: "text-xs/normal",
                                                          className: ed.PJ,
                                                          color: "text-default",
                                                          children: er.intl.format(er.t.gsgvxh, {
                                                              privacyPolicyUrl: es.X7G.PRIVACY,
                                                              onAuthorizedApplicationsClick: () => eC(),
                                                              onConnectionsClick: () => eb(),
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                });
                            }
                            case 1: {
                                s()(null != F, "lastPlatformConnected is null");
                                let e = D.find((e) => {
                                        let { type: t } = e;
                                        return F === t;
                                    }),
                                    t = ea?.find((e) => {
                                        let { application: t } = e;
                                        return t.id === J?.id;
                                    });
                                return (0, a.jsxs)(E.$m, {
                                    children: [
                                        (0, a.jsx)(f.E, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            children: er.intl.format(er.t.gsgvxh, {
                                                privacyPolicyUrl: es.X7G.PRIVACY,
                                                onAuthorizedApplicationsClick: () => eC(),
                                                onConnectionsClick: () => eb(),
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            className: ed.m1,
                                            children:
                                                null == e && null == t
                                                    ? (0, a.jsx)(v.y, { className: ed.bD })
                                                    : (0, a.jsxs)(a.Fragment, {
                                                          children: [
                                                              null != e
                                                                  ? (0, a.jsxs)(a.Fragment, {
                                                                        children: [
                                                                            (0, a.jsxs)("div", {
                                                                                className: ed.yk,
                                                                                children: [
                                                                                    (0, a.jsx)(f.E, {
                                                                                        variant: "eyebrow",
                                                                                        color: "text-default",
                                                                                        children: er.intl.string(
                                                                                            er.t.TOjkEg,
                                                                                        ),
                                                                                    }),
                                                                                    (0, a.jsx)($.wQ, {
                                                                                        connectedAccount: e,
                                                                                        userId: H,
                                                                                        theme: ei,
                                                                                        locale: eu,
                                                                                        className: ed.eT,
                                                                                        showMetadata: R,
                                                                                        showInvisibleIcon: w,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, a.jsxs)("div", {
                                                                                className: ed.yk,
                                                                                children: [
                                                                                    (0, a.jsx)(f.E, {
                                                                                        variant: "eyebrow",
                                                                                        color: "text-default",
                                                                                        children: er.intl.string(
                                                                                            er.t.jndPhX,
                                                                                        ),
                                                                                    }),
                                                                                    (0, a.jsx)(ep, {
                                                                                        account: e,
                                                                                        setShowPreviewInvisibleIcon: U,
                                                                                        setShowPreviewMetadata: G,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    })
                                                                  : null,
                                                              null != t
                                                                  ? (0, a.jsxs)("div", {
                                                                        className: ed.yk,
                                                                        children: [
                                                                            (0, a.jsxs)("div", {
                                                                                className: ed.a5,
                                                                                children: [
                                                                                    (0, a.jsx)(f.E, {
                                                                                        variant: "eyebrow",
                                                                                        color: "text-default",
                                                                                        children: er.intl.string(
                                                                                            er.t.TOjkEg,
                                                                                        ),
                                                                                    }),
                                                                                    (0, a.jsx)(m.m, {
                                                                                        text: er.intl.string(
                                                                                            er.t.x3svVc,
                                                                                        ),
                                                                                        children: (0, a.jsx)(N.m, {
                                                                                            size: "xs",
                                                                                            color: "currentColor",
                                                                                        }),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, a.jsx)($.Wc, {
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
                                return (0, a.jsxs)(E.$m, {
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: ed.kf,
                                            children: [
                                                (0, a.jsx)(ec.A, { guildId: c, className: ed.w$, role: o, size: 24 }),
                                                (0, a.jsx)(f.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: ed.jm,
                                                    children: o.name,
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(S.Ip, {
                                            className: ed.eu,
                                            children: e_.map((e) => (0, a.jsx)(eh, { channel: e }, e.id)),
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
                    switch (i) {
                        case 0:
                            return (0, a.jsxs)(E.jl, {
                                children: [
                                    (0, a.jsx)(I.$, {
                                        variant: "primary",
                                        text: er.intl.string(er.t["8SuVoE"]),
                                        onClick: () => eA(),
                                        disabled: C || !x || A,
                                    }),
                                    e
                                        ? (0, a.jsx)("div", {
                                              className: ed.yY,
                                              children: (0, a.jsx)(k.Q, {
                                                  variant: "primary",
                                                  text: er.intl.string(er.t.VXV55P),
                                                  onClick: eb,
                                              }),
                                          })
                                        : null,
                                ],
                            });
                        case 1:
                            return (0, a.jsx)(E.jl, {
                                children: (0, a.jsx)(I.$, {
                                    variant: "primary",
                                    text: er.intl.string(er.t.i4jeWR),
                                    onClick: () => r(0),
                                }),
                            });
                        default:
                            return (0, a.jsxs)(E.jl, {
                                children: [
                                    (0, a.jsx)(I.$, {
                                        variant: "primary",
                                        text: er.intl.string(er.t.cpT0Cq),
                                        onClick: () => ef(!0),
                                    }),
                                    e
                                        ? (0, a.jsx)("div", {
                                              className: ed.yY,
                                              children: (0, a.jsx)(k.Q, {
                                                  variant: "primary",
                                                  text: er.intl.string(er.t.VXV55P),
                                                  onClick: eb,
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

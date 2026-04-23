n.d(t, { default: () => ep });
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
    O = n(77468),
    R = n(686956),
    G = n(730134),
    w = n(964486),
    P = n(736653),
    L = n(573648),
    M = n(58149),
    U = n(709066),
    D = n(920268),
    V = n(47167),
    H = n(713654),
    F = n(46937),
    $ = n(773669),
    B = n(780964),
    z = n(858897),
    K = n(889227),
    Y = n(495544),
    Q = n(734057),
    W = n(30370),
    X = n(696451),
    Z = n(576705),
    q = n(147925),
    J = n(954571),
    ee = n(619006),
    et = n(370480),
    en = n(773952),
    ea = n(355971),
    el = n(967740),
    ec = n(293260),
    eo = n(783419),
    ei = n(652215),
    es = n(985018),
    er = n(353659);
function ed(e) {
    let { platformType: t, className: n } = e,
        l = (0, P.Ay)(),
        c = L.A.get(t);
    return (0, a.jsx)("img", {
        src: (0, x.q)(l) ? c.icon.lightSVG : c.icon.darkSVG,
        alt: "",
        className: o()(er.tV, n),
    });
}
function eu(e) {
    let { channel: t, className: n } = e,
        l = (0, H.gU)(t),
        c = (0, V.Ay)(t);
    return (0, a.jsxs)("div", {
        className: o()(er.HA, n),
        children: [
            null != l ? (0, a.jsx)(l, { className: er.er }) : null,
            (0, a.jsx)(_.D, { variant: "heading-lg/semibold", color: "text-default", className: er.Kw, children: c }),
        ],
    });
}
function eh(e) {
    let t,
        { connectionType: n, connectionMetadataField: l, operator: c, value: o, result: i, description: s } = e,
        r = null;
    if (null != s)
        switch (c) {
            case eo.so.LESS_THAN:
                r = es.intl.format(es.t["2p7dA3"], { description: s, count: Math.max(0, Number(o) - 1) });
                break;
            case eo.so.GREATER_THAN:
                r = es.intl.format(es.t["2p7dA3"], { description: s, count: Math.max(0, Number(o) + 1) });
                break;
            default:
                r = s;
        }
    else {
        let e;
        switch (c) {
            case eo.so.EQUAL:
                (e = es.t["0BlpbA"]), n === ei.fg2.PAYPAL && l === eo.pK.PAYPAL_VERIFIED && (e = es.t.dcSDhW);
                break;
            case eo.so.NOT_EQUAL:
                e = es.t.otcpTN;
                break;
            case eo.so.LESS_THAN:
                e = es.t.Ef35xs;
                break;
            case eo.so.GREATER_THAN:
                e = es.t["8W9OXU"];
                break;
            case void 0:
            case null:
                return null;
        }
        if (
            null ==
            (r = (0, et.RP)({ connectionType: n, connectionMetadataField: l, operator: c, operatorText: e, value: o }))
        )
            return null;
    }
    return (
        (t = i ? "text-default" : "text-feedback-critical"),
        (0, a.jsx)(f.E, { variant: "text-xs/normal", color: t, className: er.E6, children: r })
    );
}
function em(e) {
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
    let S = (0, C.r)(h.A.unsafe_rawColors.GREEN_330).hex();
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
                    I = C?.application,
                    k = I?.bot != null ? new K.A(I.bot) : null;
                et.iC.includes(I?.id ?? "")
                    ? (t = (0, a.jsx)(ea.A, { className: er.AO, color: S, size: 16 }))
                    : null != k && (t = (0, a.jsx)(U.A, { className: er.AO, verified: k.isVerifiedBot() }));
                let T = i[y?.type ?? eo.zR],
                    O = !_ && null != T && T <= u;
                return (
                    (l = _
                        ? (0, a.jsx)(b.A, { size: "md", color: "currentColor", className: er.rA })
                        : O
                          ? (0, a.jsx)(p.$n, {
                                size: p.$n.Sizes.TINY,
                                look: p.$n.Looks.LINK,
                                color: p.$n.Colors.LINK,
                                className: er.gN,
                                children: es.intl.string(es.t["5911Lb"]),
                            })
                          : E
                            ? (0, a.jsx)(q.A, { direction: q.A.Directions.RIGHT, className: er.t4 })
                            : (0, a.jsx)(f.E, {
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: es.intl.string(es.t.cEts68),
                              })),
                    y?.type === ei.fg2.STEAM && (c = es.intl.string(es.t.NcZh6K)),
                    (0, a.jsxs)(
                        A.D,
                        {
                            className: o()(er.UY, _ ? er.o6 : null, E ? null : er.pC),
                            onClick:
                                !_ && E
                                    ? () => {
                                          var e;
                                          return (
                                              (e = y?.type ?? eo.zR),
                                              void ((0, en.A)({
                                                  platformType: e,
                                                  location: "Verified Roles Connect Accounts Modal",
                                                  overrideUrl: I?.role_connections_verification_url,
                                              }),
                                              r({ ...i, [e]: Date.now() }),
                                              j(e),
                                              g(I ?? null),
                                              n())
                                          );
                                      }
                                    : void 0,
                            children: [
                                !_ && O
                                    ? (0, a.jsx)("div", {
                                          className: er.Z1,
                                          children: (0, a.jsx)(f.E, {
                                              variant: "text-xs/normal",
                                              color: "always-white",
                                              children: es.intl.string(es.t.UB3hKo),
                                          }),
                                      })
                                    : null,
                                null != y ? (0, a.jsx)(ed, { platformType: y.type }) : null,
                                null != k ? (0, a.jsx)(G.A, { user: k }) : null,
                                (0, a.jsxs)("div", {
                                    className: er.EZ,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: er.Pf,
                                            children: [
                                                (0, a.jsx)(f.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    children: y?.name ?? I?.name,
                                                }),
                                                t,
                                                null != c
                                                    ? (0, a.jsx)(m.m, {
                                                          text: c,
                                                          children: (0, a.jsx)(N.m, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: er.$I,
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
                                                    eh,
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
function ex(e) {
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
        ei.txh.has(o.type) &&
            (t = (0, a.jsx)(j.d, {
                label: es.intl.string(es.t["+KCMSi"]),
                checked: r,
                onChange: (e) => {
                    d(e), O.A.setFriendSync(o.type, o.id, e);
                },
            })),
        ei.ewM.has(o.type) &&
            (n = (0, a.jsx)(j.d, {
                label: es.intl.format(es.t["6u6J0q"], { platform: f.name }),
                checked: u,
                onChange: (e) => {
                    h(e), O.A.setShowActivity(o.type, o.id, e);
                },
            })),
        !0 === f.hasMetadata &&
            (c = (0, a.jsx)(j.d, {
                label: es.intl.string(es.t.FYKGsL),
                checked: m,
                disabled: !p,
                onChange: (e) => {
                    s(e), x(e), O.A.setMetadataVisibility(o.type, o.id, +!!e);
                },
            })),
        (0, a.jsxs)("div", {
            className: er.ek,
            children: [
                (0, a.jsx)(j.d, {
                    label: es.intl.string(es.t.f7yOAX),
                    checked: p,
                    onChange: (e) => {
                        i(!e), _(e), O.A.setVisibility(o.type, o.id, +!!e);
                    },
                }),
                c,
                n,
                t,
            ],
        })
    );
}
function ep(e) {
    let { transitionState: t, onClose: n, guildId: c, role: o } = e,
        [i, r] = l.useState(0),
        [d, h] = l.useState(null),
        [x, p] = l.useState(!1),
        [C, b] = l.useState(!0),
        [A, j] = l.useState(!1),
        [O, G] = l.useState(!0),
        [w, U] = l.useState(!1),
        V = (0, u.bG)([W.A], () => W.A.getAccounts()),
        H = (0, u.bG)([Y.default], () => Y.default.getId()),
        [K, q] = l.useState(null),
        [et, en] = l.useState(null),
        [ea, eo] = l.useState(null),
        ed = (0, P.Ay)(),
        eh = (0, u.bG)([$.default], () => $.default.locale),
        ep = (0, u.bG)([X.Ay], () => X.Ay.getMember(c, H)),
        e_ = Object.values((0, u.bG)([Q.A], () => Q.A.getMutableGuildChannelsForGuild(c))).filter(
            (e) => Z.A.can(ei.xBc.VIEW_CHANNEL, e) && Z.A.can(ei.xBc.SEND_MESSAGES, e) && (0, D.A)(e).includes(o),
        );
    function ef() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        n?.(), e && (0, y.closeModal)(ec.CB, g.SY);
    }
    function eC() {
        ef(!0), (0, z.openUserSettings)(B.X.AUTHORIZED_APPS_PANEL);
    }
    function eb() {
        ef(!0), (0, z.openUserSettings)(B.X.CONNECTIONS_PANEL);
    }
    async function eA() {
        j(!0), await R.A.assignGuildRoleConnection(c, o.id);
    }
    function eN() {
        J.default.track(ei.HAw.PASSPORT_CHALLENGE_STARTED, { role_id: o.id, ...(0, M.H$)(c) });
    }
    function ej(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        q(e),
            en(t),
            r(1),
            null != t &&
                (0, ee.XC)()
                    .then((e) => {
                        eo(e);
                    })
                    .catch(() => {});
    }
    return (
        l.useEffect(() => {
            R.A.fetchGuildRoleConnectionsEligibility(c, o.id).then((e) => {
                h(e), p(e.some((e) => e.every((e) => e.result))), b(!1);
            });
        }, [c, o.id, V]),
        l.useEffect(() => {
            J.default.track(ei.HAw.PASSPORT_CHALLENGE_VIEWED, { role_id: o.id, ...(0, M.H$)(c) });
        }, [c, o.id]),
        l.useEffect(() => {
            A &&
                null != ep &&
                ep.roles.includes(o.id) &&
                (j(!1),
                e_.length > 0 ? r(2) : n?.(),
                J.default.track(ei.HAw.PASSPORT_CHALLENGE_FINISHED, { role_id: o.id, ...(0, M.H$)(c) }));
        }, [A, e_.length, ep, c, o.id, n]),
        (0, a.jsxs)(E.EO, {
            size: E.rI.MEDIUM,
            transitionState: t,
            "aria-label": es.intl.string(es.t.zOZh3R),
            className: er.CR,
            parentComponent: "GuildRoleConnectionsConnectAccountsModal",
            children: [
                (function () {
                    switch (i) {
                        case 0:
                            return (0, a.jsxs)(E.rQ, {
                                className: er.wx,
                                separator: !1,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: er.TK,
                                        children: (0, a.jsx)(_.D, {
                                            variant: "heading-xl/semibold",
                                            children: es.intl.string(es.t.zOZh3R),
                                        }),
                                    }),
                                    (0, a.jsx)(E.s_, { onClick: () => ef() }),
                                ],
                            });
                        case 1: {
                            s()(null != K, "lastPlatformConnected is null");
                            let e = et?.name ?? L.A.get(K)?.name;
                            return (0, a.jsxs)(E.rQ, {
                                className: er.wx,
                                separator: !1,
                                children: [
                                    (0, a.jsx)(_.D, {
                                        variant: "heading-xl/semibold",
                                        className: er.TK,
                                        children: es.intl.format(es.t.yQvgBO, { platformName: e }),
                                    }),
                                    (0, a.jsx)(E.s_, { onClick: () => ef() }),
                                ],
                            });
                        }
                        case 2:
                            return (0, a.jsxs)(E.rQ, {
                                className: er.wx,
                                separator: !1,
                                children: [
                                    (0, a.jsx)(_.D, {
                                        variant: "heading-xl/extrabold",
                                        className: er.TK,
                                        children: es.intl.string(es.t.najNdz),
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
                                            ? (0, a.jsx)(v.y, { className: er.NL })
                                            : (0, a.jsxs)(a.Fragment, {
                                                  children: [
                                                      (0, a.jsx)(f.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-default",
                                                          children: es.intl.format(
                                                              t ? es.t.jHfRvZ : e ? es.t["mOQ8k+"] : es.t.U0olLg,
                                                              { roleName: o.name },
                                                          ),
                                                      }),
                                                      (0, a.jsx)(S.Ip, {
                                                          className: er.NL,
                                                          children: (0, a.jsx)(em, {
                                                              eligibilityStatesGroups: d,
                                                              onPlatformConnect: eN,
                                                              onPlatformConnected: ej,
                                                          }),
                                                      }),
                                                      (0, a.jsx)(f.E, {
                                                          variant: "text-xs/normal",
                                                          className: er.PJ,
                                                          color: "text-default",
                                                          children: es.intl.format(es.t.gsgvxh, {
                                                              privacyPolicyUrl: ei.X7G.PRIVACY,
                                                              onAuthorizedApplicationsClick: () => eC(),
                                                              onConnectionsClick: () => eb(),
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                });
                            }
                            case 1: {
                                s()(null != K, "lastPlatformConnected is null");
                                let e = V.find((e) => {
                                        let { type: t } = e;
                                        return K === t;
                                    }),
                                    t = ea?.find((e) => {
                                        let { application: t } = e;
                                        return t.id === et?.id;
                                    });
                                return (0, a.jsxs)(E.$m, {
                                    children: [
                                        (0, a.jsx)(f.E, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            children: es.intl.format(es.t.gsgvxh, {
                                                privacyPolicyUrl: ei.X7G.PRIVACY,
                                                onAuthorizedApplicationsClick: () => eC(),
                                                onConnectionsClick: () => eb(),
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            className: er.m1,
                                            children:
                                                null == e && null == t
                                                    ? (0, a.jsx)(v.y, { className: er.bD })
                                                    : (0, a.jsxs)(a.Fragment, {
                                                          children: [
                                                              null != e
                                                                  ? (0, a.jsxs)(a.Fragment, {
                                                                        children: [
                                                                            (0, a.jsxs)("div", {
                                                                                className: er.yk,
                                                                                children: [
                                                                                    (0, a.jsx)(f.E, {
                                                                                        variant: "eyebrow",
                                                                                        color: "text-default",
                                                                                        children: es.intl.string(
                                                                                            es.t.TOjkEg,
                                                                                        ),
                                                                                    }),
                                                                                    (0, a.jsx)(F.wQ, {
                                                                                        connectedAccount: e,
                                                                                        userId: H,
                                                                                        theme: ed,
                                                                                        locale: eh,
                                                                                        className: er.eT,
                                                                                        showMetadata: O,
                                                                                        showInvisibleIcon: w,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, a.jsxs)("div", {
                                                                                className: er.yk,
                                                                                children: [
                                                                                    (0, a.jsx)(f.E, {
                                                                                        variant: "eyebrow",
                                                                                        color: "text-default",
                                                                                        children: es.intl.string(
                                                                                            es.t.jndPhX,
                                                                                        ),
                                                                                    }),
                                                                                    (0, a.jsx)(ex, {
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
                                                                        className: er.yk,
                                                                        children: [
                                                                            (0, a.jsxs)("div", {
                                                                                className: er.a5,
                                                                                children: [
                                                                                    (0, a.jsx)(f.E, {
                                                                                        variant: "eyebrow",
                                                                                        color: "text-default",
                                                                                        children: es.intl.string(
                                                                                            es.t.TOjkEg,
                                                                                        ),
                                                                                    }),
                                                                                    (0, a.jsx)(m.m, {
                                                                                        text: es.intl.string(
                                                                                            es.t.x3svVc,
                                                                                        ),
                                                                                        children: (0, a.jsx)(N.m, {
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
                                return (0, a.jsxs)(E.$m, {
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: er.kf,
                                            children: [
                                                (0, a.jsx)(el.A, { guildId: c, className: er.w$, role: o, size: 24 }),
                                                (0, a.jsx)(f.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: er.jm,
                                                    children: o.name,
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(S.Ip, {
                                            className: er.eu,
                                            children: e_.map((e) => (0, a.jsx)(eu, { channel: e }, e.id)),
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
                                        text: es.intl.string(es.t["8SuVoE"]),
                                        onClick: () => eA(),
                                        disabled: C || !x || A,
                                    }),
                                    e
                                        ? (0, a.jsx)("div", {
                                              className: er.yY,
                                              children: (0, a.jsx)(k.Q, {
                                                  variant: "primary",
                                                  text: es.intl.string(es.t.VXV55P),
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
                                    text: es.intl.string(es.t.i4jeWR),
                                    onClick: () => r(0),
                                }),
                            });
                        default:
                            return (0, a.jsxs)(E.jl, {
                                children: [
                                    (0, a.jsx)(I.$, {
                                        variant: "primary",
                                        text: es.intl.string(es.t.cpT0Cq),
                                        onClick: () => ef(!0),
                                    }),
                                    e
                                        ? (0, a.jsx)("div", {
                                              className: er.yY,
                                              children: (0, a.jsx)(k.Q, {
                                                  variant: "primary",
                                                  text: es.intl.string(es.t.VXV55P),
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

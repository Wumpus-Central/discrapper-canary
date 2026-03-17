n.d(t, { default: () => ee });
var a = n(627968),
    l = n(64700),
    c = n(503698),
    o = n.n(c),
    i = n(284009),
    s = n.n(i),
    r = n(735438),
    d = n.n(r),
    u = n(311907),
    h = n(827734),
    x = n(990078),
    m = n(582754),
    p = n(421380),
    _ = n(397927),
    C = n(77468),
    f = n(686956),
    b = n(730134),
    A = n(964486),
    N = n(736653),
    j = n(573648),
    y = n(58149),
    g = n(709066),
    v = n(920268),
    T = n(713654),
    E = n(46937),
    S = n(773669),
    I = n(780964),
    k = n(840065),
    O = n(427157),
    G = n(961350),
    R = n(734057),
    w = n(962173),
    P = n(696451),
    L = n(576705),
    U = n(147925),
    M = n(954571),
    H = n(619006),
    V = n(370480),
    F = n(882997),
    D = n(355971),
    $ = n(967740),
    B = n(293260),
    Y = n(783419),
    z = n(652215),
    K = n(985018),
    Q = n(102448);
function W(e) {
    let { platformType: t, className: n } = e,
        l = (0, N.Ay)(),
        c = j.A.get(t);
    return (0, a.jsx)("img", {
        src: (0, m.qB)(l) ? c.icon.lightSVG : c.icon.darkSVG,
        alt: "",
        className: o()(Q.tV, n),
    });
}
function X(e) {
    let { channel: t, className: n } = e,
        l = (0, T.gU)(t);
    return (0, a.jsxs)("div", {
        className: o()(Q.HA, n),
        children: [
            null != l ? (0, a.jsx)(l, { className: Q.er }) : null,
            (0, a.jsx)(_.Heading, {
                variant: "heading-lg/semibold",
                color: "text-default",
                className: Q.Kw,
                children: t.name,
            }),
        ],
    });
}
function Z(e) {
    let t,
        { connectionType: n, connectionMetadataField: l, operator: c, value: o, result: i, description: s } = e,
        r = null;
    if (null != s)
        switch (c) {
            case Y.so.LESS_THAN:
                r = K.intl.format(K.t["2p7dA3"], { description: s, count: Math.max(0, Number(o) - 1) });
                break;
            case Y.so.GREATER_THAN:
                r = K.intl.format(K.t["2p7dA3"], { description: s, count: Math.max(0, Number(o) + 1) });
                break;
            default:
                r = s;
        }
    else {
        let e;
        switch (c) {
            case Y.so.EQUAL:
                (e = K.t["0BlpbA"]), n === z.fg2.PAYPAL && l === Y.pK.PAYPAL_VERIFIED && (e = K.t.dcSDhW);
                break;
            case Y.so.NOT_EQUAL:
                e = K.t.otcpTN;
                break;
            case Y.so.LESS_THAN:
                e = K.t.Ef35xs;
                break;
            case Y.so.GREATER_THAN:
                e = K.t["8W9OXU"];
                break;
            case void 0:
            case null:
                return null;
        }
        if (
            null ==
            (r = (0, V.RP)({ connectionType: n, connectionMetadataField: l, operator: c, operatorText: e, value: o }))
        )
            return null;
    }
    return (
        (t = i ? "text-default" : "text-feedback-critical"),
        (0, a.jsx)(_.Text, { variant: "text-xs/normal", color: t, className: Q.E6, children: r })
    );
}
function q(e) {
    let { eligibilityStatesGroups: t, onPlatformConnect: n, onPlatformConnected: c } = e,
        [i, r] = l.useState({}),
        [u, m] = l.useState(0),
        [C, f] = l.useState(null),
        [A, N] = l.useState(null),
        y = l.useMemo(() => d().flatten(t), [t]),
        v = l.useMemo(
            () =>
                d().groupBy(y, (e) => `${e.connection_type}${null != e.application_id ? `:${e.application_id}` : ""}`),
            [y],
        );
    l.useEffect(() => m(Date.now()), [y]),
        l.useEffect(() => {
            if (null == C) return;
            let e = v[`${C}${null != A ? `:${A.id}` : ""}`];
            null == e || (e.every((e) => e.result) && c(C, A));
        }, [v, C, A, c]);
    let T = (0, _.rdh)(h.A.unsafe_rawColors.GREEN_330).hex();
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
                    m = d.filter((e) => null != e.operator),
                    C = (null == h || h.result) && m.every((e) => e.result),
                    A = d.find((e) => null != e.application),
                    y = j.A.get(e),
                    E = null == y || y.enabled,
                    S = A?.application,
                    I = S?.bot != null ? new O.A(S.bot) : null;
                V.iC.includes(S?.id ?? "")
                    ? (t = (0, a.jsx)(D.A, { className: Q.AO, color: T, size: 16 }))
                    : null != I && (t = (0, a.jsx)(g.A, { className: Q.AO, verified: I.isVerifiedBot() }));
                let k = i[y?.type ?? Y.zR],
                    G = !C && null != k && k <= u;
                return (
                    (l = C
                        ? (0, a.jsx)(_.A9s, { size: "md", color: "currentColor", className: Q.rA })
                        : G
                          ? (0, a.jsx)(p.$n, {
                                size: p.$n.Sizes.TINY,
                                look: p.$n.Looks.LINK,
                                color: p.$n.Colors.LINK,
                                className: Q.gN,
                                children: K.intl.string(K.t["5911Lb"]),
                            })
                          : E
                            ? (0, a.jsx)(U.A, { direction: U.A.Directions.RIGHT, className: Q.t4 })
                            : (0, a.jsx)(_.Text, {
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: K.intl.string(K.t.cEts68),
                              })),
                    y?.type === z.fg2.STEAM && (c = K.intl.string(K.t.NcZh6K)),
                    (0, a.jsxs)(
                        _.DUT,
                        {
                            className: o()(Q.UY, C ? Q.o6 : null, E ? null : Q.pC),
                            onClick:
                                !C && E
                                    ? () => {
                                          var e;
                                          return (
                                              (e = y?.type ?? Y.zR),
                                              void ((0, F.A)({
                                                  platformType: e,
                                                  location: "Verified Roles Connect Accounts Modal",
                                                  overrideUrl: S?.role_connections_verification_url,
                                              }),
                                              r({ ...i, [e]: Date.now() }),
                                              f(e),
                                              N(S ?? null),
                                              n())
                                          );
                                      }
                                    : void 0,
                            children: [
                                !C && G
                                    ? (0, a.jsx)("div", {
                                          className: Q.Z1,
                                          children: (0, a.jsx)(_.Text, {
                                              variant: "text-xs/normal",
                                              color: "always-white",
                                              children: K.intl.string(K.t.UB3hKo),
                                          }),
                                      })
                                    : null,
                                null != y ? (0, a.jsx)(W, { platformType: y.type }) : null,
                                null != I ? (0, a.jsx)(b.A, { user: I }) : null,
                                (0, a.jsxs)("div", {
                                    className: Q.EZ,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: Q.Pf,
                                            children: [
                                                (0, a.jsx)(_.Text, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    children: y?.name ?? S?.name,
                                                }),
                                                t,
                                                null != c
                                                    ? (0, a.jsx)(x.m, {
                                                          text: c,
                                                          children: (0, a.jsx)(_.mir, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: Q.$I,
                                                          }),
                                                      })
                                                    : null,
                                            ],
                                        }),
                                        m.map((e) => {
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
                                                    Z,
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
function J(e) {
    let t,
        n,
        c,
        { account: o, setShowPreviewInvisibleIcon: i, setShowPreviewMetadata: s } = e,
        [r, d] = l.useState(o.friendSync),
        [u, h] = l.useState(o.showActivity),
        [x, m] = l.useState(1 === o.metadataVisibility),
        [p, f] = l.useState(1 === o.visibility);
    (0, A.Ay)(() => {
        i(!p), s(x);
    });
    let b = j.A.get(o.type);
    return (
        z.txh.has(o.type) &&
            (t = (0, a.jsx)(_.dOG, {
                label: K.intl.string(K.t["+KCMSi"]),
                checked: r,
                onChange: (e) => {
                    d(e), C.A.setFriendSync(o.type, o.id, e);
                },
            })),
        z.ewM.has(o.type) &&
            (n = (0, a.jsx)(_.dOG, {
                label: K.intl.format(K.t["6u6J0q"], { platform: b.name }),
                checked: u,
                onChange: (e) => {
                    h(e), C.A.setShowActivity(o.type, o.id, e);
                },
            })),
        !0 === b.hasMetadata &&
            (c = (0, a.jsx)(_.dOG, {
                label: K.intl.string(K.t.FYKGsL),
                checked: x,
                disabled: !p,
                onChange: (e) => {
                    s(e), m(e), C.A.setMetadataVisibility(o.type, o.id, +!!e);
                },
            })),
        (0, a.jsxs)("div", {
            className: Q.ek,
            children: [
                (0, a.jsx)(_.dOG, {
                    label: K.intl.string(K.t.f7yOAX),
                    checked: p,
                    onChange: (e) => {
                        i(!e), f(e), C.A.setVisibility(o.type, o.id, +!!e);
                    },
                }),
                c,
                n,
                t,
            ],
        })
    );
}
function ee(e) {
    let { transitionState: t, onClose: n, guildId: c, role: o } = e,
        [i, r] = l.useState(0),
        [d, h] = l.useState(null),
        [m, p] = l.useState(!1),
        [C, b] = l.useState(!0),
        [A, g] = l.useState(!1),
        [T, O] = l.useState(!0),
        [U, V] = l.useState(!1),
        F = (0, u.bG)([w.A], () => w.A.getAccounts()),
        D = (0, u.bG)([G.default], () => G.default.getId()),
        [Y, W] = l.useState(null),
        [Z, ee] = l.useState(null),
        [et, en] = l.useState(null),
        ea = (0, N.Ay)(),
        el = (0, u.bG)([S.default], () => S.default.locale),
        ec = (0, u.bG)([P.Ay], () => P.Ay.getMember(c, D)),
        eo = Object.values((0, u.bG)([R.A], () => R.A.getMutableGuildChannelsForGuild(c))).filter(
            (e) => L.A.can(z.xBc.VIEW_CHANNEL, e) && L.A.can(z.xBc.SEND_MESSAGES, e) && (0, v.A)(e).includes(o),
        );
    function ei() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        n?.(), e && (0, _.OoC)(B.CB, _.SYi);
    }
    function es() {
        ei(!0), (0, k.openUserSettings)(I.X.AUTHORIZED_APPS_PANEL);
    }
    function er() {
        ei(!0), (0, k.openUserSettings)(I.X.CONNECTIONS_PANEL);
    }
    async function ed() {
        g(!0), await f.A.assignGuildRoleConnection(c, o.id);
    }
    function eu() {
        M.default.track(z.HAw.PASSPORT_CHALLENGE_STARTED, { role_id: o.id, ...(0, y.H$)(c) });
    }
    function eh(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        W(e),
            ee(t),
            r(1),
            null != t &&
                (0, H.XC)()
                    .then((e) => {
                        en(e);
                    })
                    .catch(() => {});
    }
    return (
        l.useEffect(() => {
            f.A.fetchGuildRoleConnectionsEligibility(c, o.id).then((e) => {
                h(e), p(e.some((e) => e.every((e) => e.result))), b(!1);
            });
        }, [c, o.id, F]),
        l.useEffect(() => {
            M.default.track(z.HAw.PASSPORT_CHALLENGE_VIEWED, { role_id: o.id, ...(0, y.H$)(c) });
        }, [c, o.id]),
        l.useEffect(() => {
            A &&
                null != ec &&
                ec.roles.includes(o.id) &&
                (g(!1),
                eo.length > 0 ? r(2) : n?.(),
                M.default.track(z.HAw.PASSPORT_CHALLENGE_FINISHED, { role_id: o.id, ...(0, y.H$)(c) }));
        }, [A, eo.length, ec, c, o.id, n]),
        (0, a.jsxs)(_.EOs, {
            size: _.rIJ.MEDIUM,
            transitionState: t,
            "aria-label": K.intl.string(K.t.zOZh3R),
            className: Q.CR,
            parentComponent: "GuildRoleConnectionsConnectAccountsModal",
            children: [
                (function () {
                    switch (i) {
                        case 0:
                            return (0, a.jsxs)(_.rQ0, {
                                className: Q.wx,
                                separator: !1,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: Q.TK,
                                        children: (0, a.jsx)(_.Heading, {
                                            variant: "heading-xl/semibold",
                                            children: K.intl.string(K.t.zOZh3R),
                                        }),
                                    }),
                                    (0, a.jsx)(_.s_y, { onClick: () => ei() }),
                                ],
                            });
                        case 1: {
                            s()(null != Y, "lastPlatformConnected is null");
                            let e = Z?.name ?? j.A.get(Y)?.name;
                            return (0, a.jsxs)(_.rQ0, {
                                className: Q.wx,
                                separator: !1,
                                children: [
                                    (0, a.jsx)(_.Heading, {
                                        variant: "heading-xl/semibold",
                                        className: Q.TK,
                                        children: K.intl.format(K.t.yQvgBO, { platformName: e }),
                                    }),
                                    (0, a.jsx)(_.s_y, { onClick: () => ei() }),
                                ],
                            });
                        }
                        case 2:
                            return (0, a.jsxs)(_.rQ0, {
                                className: Q.wx,
                                separator: !1,
                                children: [
                                    (0, a.jsx)(_.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: Q.TK,
                                        children: K.intl.string(K.t.najNdz),
                                    }),
                                    (0, a.jsx)(_.s_y, { onClick: () => ei(!0) }),
                                ],
                            });
                        default:
                            return null;
                    }
                })(),
                (0, a.jsx)(_.YC2, {
                    step: i,
                    steps: [0, 1, 2],
                    children: (function () {
                        switch (i) {
                            case 0: {
                                let e = null != d && d.length > 1,
                                    t = null != d && 1 === d.length && 1 === d[0].length;
                                return (0, a.jsx)(_.$mQ, {
                                    children:
                                        C || null == d
                                            ? (0, a.jsx)(_.y$y, { className: Q.NL })
                                            : (0, a.jsxs)(a.Fragment, {
                                                  children: [
                                                      (0, a.jsx)(_.Text, {
                                                          variant: "text-md/medium",
                                                          color: "text-default",
                                                          children: K.intl.format(
                                                              t ? K.t.jHfRvZ : e ? K.t["mOQ8k+"] : K.t.U0olLg,
                                                              { roleName: o.name },
                                                          ),
                                                      }),
                                                      (0, a.jsx)(_.IpV, {
                                                          className: Q.NL,
                                                          children: (0, a.jsx)(q, {
                                                              eligibilityStatesGroups: d,
                                                              onPlatformConnect: eu,
                                                              onPlatformConnected: eh,
                                                          }),
                                                      }),
                                                      (0, a.jsx)(_.Text, {
                                                          variant: "text-xs/normal",
                                                          className: Q.PJ,
                                                          color: "text-default",
                                                          children: K.intl.format(K.t.gsgvxh, {
                                                              privacyPolicyUrl: z.X7G.PRIVACY,
                                                              onAuthorizedApplicationsClick: () => es(),
                                                              onConnectionsClick: () => er(),
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                });
                            }
                            case 1: {
                                s()(null != Y, "lastPlatformConnected is null");
                                let e = F.find((e) => {
                                        let { type: t } = e;
                                        return Y === t;
                                    }),
                                    t = et?.find((e) => {
                                        let { application: t } = e;
                                        return t.id === Z?.id;
                                    });
                                return (0, a.jsxs)(_.$mQ, {
                                    children: [
                                        (0, a.jsx)(_.Text, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            children: K.intl.format(K.t.gsgvxh, {
                                                privacyPolicyUrl: z.X7G.PRIVACY,
                                                onAuthorizedApplicationsClick: () => es(),
                                                onConnectionsClick: () => er(),
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            className: Q.m1,
                                            children:
                                                null == e && null == t
                                                    ? (0, a.jsx)(_.y$y, { className: Q.bD })
                                                    : (0, a.jsxs)(a.Fragment, {
                                                          children: [
                                                              null != e
                                                                  ? (0, a.jsxs)(a.Fragment, {
                                                                        children: [
                                                                            (0, a.jsxs)("div", {
                                                                                className: Q.yk,
                                                                                children: [
                                                                                    (0, a.jsx)(_.Text, {
                                                                                        variant: "eyebrow",
                                                                                        color: "text-default",
                                                                                        children: K.intl.string(
                                                                                            K.t.TOjkEg,
                                                                                        ),
                                                                                    }),
                                                                                    (0, a.jsx)(E.wQ, {
                                                                                        connectedAccount: e,
                                                                                        userId: D,
                                                                                        theme: ea,
                                                                                        locale: el,
                                                                                        className: Q.eT,
                                                                                        showMetadata: T,
                                                                                        showInvisibleIcon: U,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, a.jsxs)("div", {
                                                                                className: Q.yk,
                                                                                children: [
                                                                                    (0, a.jsx)(_.Text, {
                                                                                        variant: "eyebrow",
                                                                                        color: "text-default",
                                                                                        children: K.intl.string(
                                                                                            K.t.jndPhX,
                                                                                        ),
                                                                                    }),
                                                                                    (0, a.jsx)(J, {
                                                                                        account: e,
                                                                                        setShowPreviewInvisibleIcon: V,
                                                                                        setShowPreviewMetadata: O,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    })
                                                                  : null,
                                                              null != t
                                                                  ? (0, a.jsxs)("div", {
                                                                        className: Q.yk,
                                                                        children: [
                                                                            (0, a.jsxs)("div", {
                                                                                className: Q.a5,
                                                                                children: [
                                                                                    (0, a.jsx)(_.Text, {
                                                                                        variant: "eyebrow",
                                                                                        color: "text-default",
                                                                                        children: K.intl.string(
                                                                                            K.t.TOjkEg,
                                                                                        ),
                                                                                    }),
                                                                                    (0, a.jsx)(x.m, {
                                                                                        text: K.intl.string(K.t.x3svVc),
                                                                                        children: (0, a.jsx)(_.mir, {
                                                                                            size: "xs",
                                                                                            color: "currentColor",
                                                                                        }),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, a.jsx)(E.Wc, {
                                                                                applicationRoleConnection: t,
                                                                                className: Q.eT,
                                                                                locale: el,
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
                                return (0, a.jsxs)(_.$mQ, {
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: Q.kf,
                                            children: [
                                                (0, a.jsx)($.A, { guildId: c, className: Q.w$, role: o, size: 24 }),
                                                (0, a.jsx)(_.Text, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: Q.jm,
                                                    children: o.name,
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(_.IpV, {
                                            className: Q.eu,
                                            children: eo.map((e) => (0, a.jsx)(X, { channel: e }, e.id)),
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
                            return (0, a.jsxs)(_.jlY, {
                                children: [
                                    (0, a.jsx)(_.Button, {
                                        variant: "primary",
                                        text: K.intl.string(K.t["8SuVoE"]),
                                        onClick: () => ed(),
                                        disabled: C || !m || A,
                                    }),
                                    e
                                        ? (0, a.jsx)("div", {
                                              className: Q.yY,
                                              children: (0, a.jsx)(_.QWc, {
                                                  variant: "primary",
                                                  text: K.intl.string(K.t.VXV55P),
                                                  onClick: er,
                                              }),
                                          })
                                        : null,
                                ],
                            });
                        case 1:
                            return (0, a.jsx)(_.jlY, {
                                children: (0, a.jsx)(_.Button, {
                                    variant: "primary",
                                    text: K.intl.string(K.t.i4jeWR),
                                    onClick: () => r(0),
                                }),
                            });
                        default:
                            return (0, a.jsxs)(_.jlY, {
                                children: [
                                    (0, a.jsx)(_.Button, {
                                        variant: "primary",
                                        text: K.intl.string(K.t.cpT0Cq),
                                        onClick: () => ei(!0),
                                    }),
                                    e
                                        ? (0, a.jsx)("div", {
                                              className: Q.yY,
                                              children: (0, a.jsx)(_.QWc, {
                                                  variant: "primary",
                                                  text: K.intl.string(K.t.VXV55P),
                                                  onClick: er,
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

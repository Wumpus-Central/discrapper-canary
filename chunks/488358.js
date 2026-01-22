l.d(t, { default: () => et }), l(228524), l(896048), l(638769), l(864466), l(443073);
var n = l(627968),
    a = l(64700),
    i = l(503698),
    c = l.n(i),
    s = l(284009),
    r = l.n(s),
    o = l(735438),
    d = l.n(o),
    u = l(311907),
    m = l(827734),
    x = l(990078),
    f = l(582754),
    h = l(421380),
    p = l(397927),
    j = l(77468),
    b = l(686956),
    v = l(730134),
    _ = l(964486),
    N = l(736653),
    y = l(573648),
    A = l(58149),
    g = l(709066),
    T = l(920268),
    C = l(713654),
    E = l(46937),
    O = l(773669),
    S = l(780964),
    I = l(840065),
    w = l(427157),
    k = l(961350),
    P = l(734057),
    R = l(962173),
    G = l(696451),
    D = l(576705),
    L = l(147925),
    U = l(954571),
    H = l(619006),
    M = l(370480),
    V = l(882997),
    F = l(355971),
    Y = l(967740),
    K = l(293260),
    z = l(783419),
    W = l(652215),
    B = l(985018),
    $ = l(102448);
function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = l[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function Z(e) {
    let { platformType: t, className: l } = e,
        a = (0, N.Ay)(),
        i = y.A.get(t);
    return (0, n.jsx)("img", {
        src: (0, f.qB)(a) ? i.icon.lightSVG : i.icon.darkSVG,
        alt: "",
        className: c()($.tV, l),
    });
}
function X(e) {
    let { channel: t, className: l } = e,
        a = (0, C.gU)(t);
    return (0, n.jsxs)("div", {
        className: c()($.HA, l),
        children: [
            null != a ? (0, n.jsx)(a, { className: $.er }) : null,
            (0, n.jsx)(p.Heading, {
                variant: "heading-lg/semibold",
                color: "text-default",
                className: $.Kw,
                children: t.name,
            }),
        ],
    });
}
function J(e) {
    let t,
        { connectionType: l, connectionMetadataField: a, operator: i, value: c, result: s, description: r } = e,
        o = null;
    if (null != r)
        switch (i) {
            case z.so.LESS_THAN:
                o = B.intl.format(B.t["2p7dA3"], {
                    description: r,
                    count: Math.max(0, Number(c) - 1),
                });
                break;
            case z.so.GREATER_THAN:
                o = B.intl.format(B.t["2p7dA3"], {
                    description: r,
                    count: Math.max(0, Number(c) + 1),
                });
                break;
            default:
                o = r;
        }
    else {
        let e;
        switch (i) {
            case z.so.EQUAL:
                (e = B.t["0BlpbA"]), l === W.fg2.PAYPAL && a === z.pK.PAYPAL_VERIFIED && (e = B.t.dcSDhW);
                break;
            case z.so.NOT_EQUAL:
                e = B.t.otcpTN;
                break;
            case z.so.LESS_THAN:
                e = B.t.Ef35xs;
                break;
            case z.so.GREATER_THAN:
                e = B.t["8W9OXU"];
                break;
            case void 0:
            case null:
                return null;
        }
        if (
            null ==
            (o = (0, M.RP)({
                connectionType: l,
                connectionMetadataField: a,
                operator: i,
                operatorText: e,
                value: c,
            }))
        )
            return null;
    }
    return (
        (t = s ? "text-default" : "text-feedback-critical"),
        (0, n.jsx)(p.Text, {
            variant: "text-xs/normal",
            color: t,
            className: $.E6,
            children: o,
        })
    );
}
function q(e) {
    let { eligibilityStatesGroups: t, onPlatformConnect: l, onPlatformConnected: i } = e,
        [s, o] = a.useState({}),
        [u, f] = a.useState(0),
        [j, b] = a.useState(null),
        [_, N] = a.useState(null),
        A = a.useMemo(() => d().flatten(t), [t]),
        T = a.useMemo(
            () =>
                d().groupBy(A, (e) =>
                    "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : ""),
                ),
            [A],
        );
    a.useEffect(() => f(Date.now()), [A]),
        a.useEffect(() => {
            if (null == j) return;
            let e = T["".concat(j).concat(null != _ ? ":".concat(_.id) : "")];
            null == e || (e.every((e) => e.result) && i(j, _));
        }, [T, j, _, i]);
    let C = (0, p.rdh)(m.A.unsafe_rawColors.GREEN_330).hex();
    return (0, n.jsx)(n.Fragment, {
        children: Object.keys(T)
            .sort((e, t) => {
                let l = T[e].every((e) => e.result),
                    n = T[t].every((e) => e.result);
                return !0 === l && !1 === n ? 1 : !1 === l && !0 === n ? -1 : 0;
            })
            .map((e) => {
                var t, a, i;
                let d,
                    m,
                    f,
                    j = T[e],
                    _ = j.find((e) => null == e.operator),
                    A = j.filter((e) => null != e.operator),
                    E = (null == _ || _.result) && A.every((e) => e.result),
                    O = j.find((e) => null != e.application),
                    S = y.A.get(e),
                    I = null == S || S.enabled,
                    k = null == O ? void 0 : O.application,
                    P = (null == k ? void 0 : k.bot) != null ? new w.A(k.bot) : null;
                M.iC.includes(null != (t = null == k ? void 0 : k.id) ? t : "")
                    ? (d = (0, n.jsx)(F.A, {
                          className: $.AO,
                          color: C,
                          size: 16,
                      }))
                    : null != P &&
                      (d = (0, n.jsx)(g.A, {
                          className: $.AO,
                          verified: P.isVerifiedBot(),
                      }));
                let R = s[null != (a = null == S ? void 0 : S.type) ? a : z.zR],
                    G = !E && null != R && R <= u;
                return (
                    (m = E
                        ? (0, n.jsx)(p.A9s, {
                              size: "md",
                              color: "currentColor",
                              className: $.rA,
                          })
                        : G
                          ? (0, n.jsx)(h.$n, {
                                size: h.$n.Sizes.TINY,
                                look: h.$n.Looks.LINK,
                                color: h.$n.Colors.LINK,
                                className: $.gN,
                                children: B.intl.string(B.t["5911Lb"]),
                            })
                          : I
                            ? (0, n.jsx)(L.A, {
                                  direction: L.A.Directions.RIGHT,
                                  className: $.t4,
                              })
                            : (0, n.jsx)(p.Text, {
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: B.intl.string(B.t.cEts68),
                              })),
                    (null == S ? void 0 : S.type) === W.fg2.STEAM && (f = B.intl.string(B.t.NcZh6K)),
                    (0, n.jsxs)(
                        p.DUT,
                        {
                            className: c()($.UY, E ? $.o6 : null, I ? null : $.pC),
                            onClick:
                                !E && I
                                    ? () => {
                                          var e, t, n, a;
                                          return (
                                              (t = null != (e = null == S ? void 0 : S.type) ? e : z.zR),
                                              void ((0, V.A)({
                                                  platformType: t,
                                                  location: "Verified Roles Connect Accounts Modal",
                                                  overrideUrl: null == k ? void 0 : k.role_connections_verification_url,
                                              }),
                                              o(
                                                  ((n = Q({}, s)),
                                                  (a = a = { [t]: Date.now() }),
                                                  Object.getOwnPropertyDescriptors
                                                      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                                                      : (function (e, t) {
                                                            var l = Object.keys(e);
                                                            if (Object.getOwnPropertySymbols) {
                                                                var n = Object.getOwnPropertySymbols(e);
                                                                l.push.apply(l, n);
                                                            }
                                                            return l;
                                                        })(Object(a)).forEach(function (e) {
                                                            Object.defineProperty(
                                                                n,
                                                                e,
                                                                Object.getOwnPropertyDescriptor(a, e),
                                                            );
                                                        }),
                                                  n),
                                              ),
                                              b(t),
                                              N(null != k ? k : null),
                                              l())
                                          );
                                      }
                                    : void 0,
                            children: [
                                !E && G
                                    ? (0, n.jsx)("div", {
                                          className: $.Z1,
                                          children: (0, n.jsx)(p.Text, {
                                              variant: "text-xs/normal",
                                              color: "always-white",
                                              children: B.intl.string(B.t.UB3hKo),
                                          }),
                                      })
                                    : null,
                                null != S ? (0, n.jsx)(Z, { platformType: S.type }) : null,
                                null != P ? (0, n.jsx)(v.A, { user: P }) : null,
                                (0, n.jsxs)("div", {
                                    className: $.EZ,
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: $.Pf,
                                            children: [
                                                (0, n.jsx)(p.Text, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    children:
                                                        null != (i = null == S ? void 0 : S.name)
                                                            ? i
                                                            : null == k
                                                              ? void 0
                                                              : k.name,
                                                }),
                                                d,
                                                null != f
                                                    ? (0, n.jsx)(x.m, {
                                                          text: f,
                                                          children: (0, n.jsx)(p.mir, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: $.$I,
                                                          }),
                                                      })
                                                    : null,
                                            ],
                                        }),
                                        A.map((e) => {
                                            let {
                                                connection_type: t,
                                                connection_metadata_field: l,
                                                operator: a,
                                                value: i,
                                                result: c,
                                                description: s,
                                            } = e;
                                            return (
                                                r()(null != l, "connectionMetadataField is null"),
                                                r()(null != a, "operator is null"),
                                                r()(null != i, "value is null"),
                                                (0, n.jsx)(
                                                    J,
                                                    {
                                                        connectionType: t,
                                                        connectionMetadataField: l,
                                                        operator: a,
                                                        value: i,
                                                        result: c,
                                                        description: s,
                                                    },
                                                    l,
                                                )
                                            );
                                        }),
                                    ],
                                }),
                                m,
                            ],
                        },
                        e,
                    )
                );
            }),
    });
}
function ee(e) {
    let t,
        l,
        i,
        { account: c, setShowPreviewInvisibleIcon: s, setShowPreviewMetadata: r } = e,
        [o, d] = a.useState(c.friendSync),
        [u, m] = a.useState(c.showActivity),
        [x, f] = a.useState(1 === c.metadataVisibility),
        [h, b] = a.useState(1 === c.visibility);
    (0, _.Ay)(() => {
        s(!h), r(x);
    });
    let v = y.A.get(c.type);
    return (
        W.txh.has(c.type) &&
            (t = (0, n.jsx)(p.dOG, {
                label: B.intl.string(B.t["+KCMSi"]),
                checked: o,
                onChange: (e) => {
                    d(e), j.A.setFriendSync(c.type, c.id, e);
                },
            })),
        W.ewM.has(c.type) &&
            (l = (0, n.jsx)(p.dOG, {
                label: B.intl.format(B.t["6u6J0q"], { platform: v.name }),
                checked: u,
                onChange: (e) => {
                    m(e), j.A.setShowActivity(c.type, c.id, e);
                },
            })),
        !0 === v.hasMetadata &&
            (i = (0, n.jsx)(p.dOG, {
                label: B.intl.string(B.t.FYKGsL),
                checked: x,
                disabled: !h,
                onChange: (e) => {
                    r(e), f(e), j.A.setMetadataVisibility(c.type, c.id, +!!e);
                },
            })),
        (0, n.jsxs)("div", {
            className: $.ek,
            children: [
                (0, n.jsx)(p.dOG, {
                    label: B.intl.string(B.t.f7yOAX),
                    checked: h,
                    onChange: (e) => {
                        s(!e), b(e), j.A.setVisibility(c.type, c.id, +!!e);
                    },
                }),
                i,
                l,
                t,
            ],
        })
    );
}
function et(e) {
    let { transitionState: t, onClose: l, guildId: i, role: c } = e,
        [s, o] = a.useState(0),
        [d, m] = a.useState(null),
        [f, h] = a.useState(!1),
        [j, v] = a.useState(!0),
        [_, g] = a.useState(!1),
        [C, w] = a.useState(!0),
        [L, M] = a.useState(!1),
        V = (0, u.bG)([R.A], () => R.A.getAccounts()),
        F = (0, u.bG)([k.default], () => k.default.getId()),
        [z, Z] = a.useState(null),
        [J, et] = a.useState(null),
        [el, en] = a.useState(null),
        ea = (0, N.Ay)(),
        ei = (0, u.bG)([O.default], () => O.default.locale),
        ec = (0, u.bG)([G.Ay], () => G.Ay.getMember(i, F)),
        es = Object.values((0, u.bG)([P.A], () => P.A.getMutableGuildChannelsForGuild(i))).filter(
            (e) => D.A.can(W.xBc.VIEW_CHANNEL, e) && D.A.can(W.xBc.SEND_MESSAGES, e) && (0, T.A)(e).includes(c),
        );
    function er() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        null == l || l(), e && (0, p.OoC)(K.CB, p.SYi);
    }
    function eo() {
        er(!0), (0, I.openUserSettings)(S.X.AUTHORIZED_APPS_PANEL, { section: W.nc_.AUTHORIZED_APPS });
    }
    function ed() {
        er(!0), (0, I.openUserSettings)(S.X.CONNECTIONS_PANEL, { section: W.nc_.CONNECTIONS });
    }
    async function eu() {
        g(!0), await b.A.assignGuildRoleConnection(i, c.id);
    }
    function em() {
        U.default.track(W.HAw.PASSPORT_CHALLENGE_STARTED, Q({ role_id: c.id }, (0, A.H$)(i)));
    }
    function ex(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        Z(e),
            et(t),
            o(1),
            null != t &&
                (0, H.XC)()
                    .then((e) => {
                        en(e);
                    })
                    .catch(() => {});
    }
    return (
        a.useEffect(() => {
            b.A.fetchGuildRoleConnectionsEligibility(i, c.id).then((e) => {
                m(e), h(e.some((e) => e.every((e) => e.result))), v(!1);
            });
        }, [i, c.id, V]),
        a.useEffect(() => {
            U.default.track(W.HAw.PASSPORT_CHALLENGE_VIEWED, Q({ role_id: c.id }, (0, A.H$)(i)));
        }, [i, c.id]),
        a.useEffect(() => {
            _ &&
                null != ec &&
                ec.roles.includes(c.id) &&
                (g(!1),
                es.length > 0 ? o(2) : null == l || l(),
                U.default.track(W.HAw.PASSPORT_CHALLENGE_FINISHED, Q({ role_id: c.id }, (0, A.H$)(i))));
        }, [_, es.length, ec, i, c.id, l]),
        (0, n.jsxs)(p.EOs, {
            size: p.rIJ.MEDIUM,
            transitionState: t,
            "aria-label": B.intl.string(B.t.zOZh3R),
            className: $.CR,
            parentComponent: "GuildRoleConnectionsConnectAccountsModal",
            children: [
                (function () {
                    switch (s) {
                        case 0:
                            return (0, n.jsxs)(p.rQ0, {
                                className: $.wx,
                                separator: !1,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: $.TK,
                                        children: (0, n.jsx)(p.Heading, {
                                            variant: "heading-xl/semibold",
                                            children: B.intl.string(B.t.zOZh3R),
                                        }),
                                    }),
                                    (0, n.jsx)(p.s_y, { onClick: () => er() }),
                                ],
                            });
                        case 1: {
                            var e, t;
                            r()(null != z, "lastPlatformConnected is null");
                            let l =
                                null != (e = null == J ? void 0 : J.name)
                                    ? e
                                    : null == (t = y.A.get(z))
                                      ? void 0
                                      : t.name;
                            return (0, n.jsxs)(p.rQ0, {
                                className: $.wx,
                                separator: !1,
                                children: [
                                    (0, n.jsx)(p.Heading, {
                                        variant: "heading-xl/semibold",
                                        className: $.TK,
                                        children: B.intl.format(B.t.yQvgBO, { platformName: l }),
                                    }),
                                    (0, n.jsx)(p.s_y, { onClick: () => er() }),
                                ],
                            });
                        }
                        case 2:
                            return (0, n.jsxs)(p.rQ0, {
                                className: $.wx,
                                separator: !1,
                                children: [
                                    (0, n.jsx)(p.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: $.TK,
                                        children: B.intl.string(B.t.najNdz),
                                    }),
                                    (0, n.jsx)(p.s_y, { onClick: () => er(!0) }),
                                ],
                            });
                        default:
                            return null;
                    }
                })(),
                (0, n.jsx)(p.YC2, {
                    step: s,
                    steps: [0, 1, 2],
                    children: (function () {
                        switch (s) {
                            case 0: {
                                let e = null != d && d.length > 1,
                                    t = null != d && 1 === d.length && 1 === d[0].length;
                                return (0, n.jsx)(p.$mQ, {
                                    children:
                                        j || null == d
                                            ? (0, n.jsx)(p.y$y, { className: $.NL })
                                            : (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                      (0, n.jsx)(p.Text, {
                                                          variant: "text-md/medium",
                                                          color: "text-default",
                                                          children: B.intl.format(
                                                              t ? B.t.jHfRvZ : e ? B.t["mOQ8k+"] : B.t.U0olLg,
                                                              { roleName: c.name },
                                                          ),
                                                      }),
                                                      (0, n.jsx)(p.IpV, {
                                                          className: $.NL,
                                                          children: (0, n.jsx)(q, {
                                                              eligibilityStatesGroups: d,
                                                              onPlatformConnect: em,
                                                              onPlatformConnected: ex,
                                                          }),
                                                      }),
                                                      (0, n.jsx)(p.Text, {
                                                          variant: "text-xs/normal",
                                                          className: $.PJ,
                                                          color: "text-default",
                                                          children: B.intl.format(B.t.gsgvxh, {
                                                              privacyPolicyUrl: W.X7G.PRIVACY,
                                                              onAuthorizedApplicationsClick: () => eo(),
                                                              onConnectionsClick: () => ed(),
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                });
                            }
                            case 1: {
                                r()(null != z, "lastPlatformConnected is null");
                                let e = V.find((e) => {
                                        let { type: t } = e;
                                        return z === t;
                                    }),
                                    t =
                                        null == el
                                            ? void 0
                                            : el.find((e) => {
                                                  let { application: t } = e;
                                                  return t.id === (null == J ? void 0 : J.id);
                                              });
                                return (0, n.jsxs)(p.$mQ, {
                                    children: [
                                        (0, n.jsx)(p.Text, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            children: B.intl.format(B.t.gsgvxh, {
                                                privacyPolicyUrl: W.X7G.PRIVACY,
                                                onAuthorizedApplicationsClick: () => eo(),
                                                onConnectionsClick: () => ed(),
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: $.m1,
                                            children:
                                                null == e && null == t
                                                    ? (0, n.jsx)(p.y$y, { className: $.bD })
                                                    : (0, n.jsxs)(n.Fragment, {
                                                          children: [
                                                              null != e
                                                                  ? (0, n.jsxs)(n.Fragment, {
                                                                        children: [
                                                                            (0, n.jsxs)("div", {
                                                                                className: $.yk,
                                                                                children: [
                                                                                    (0, n.jsx)(p.Text, {
                                                                                        variant: "eyebrow",
                                                                                        color: "text-default",
                                                                                        children: B.intl.string(
                                                                                            B.t.TOjkEg,
                                                                                        ),
                                                                                    }),
                                                                                    (0, n.jsx)(E.wQ, {
                                                                                        connectedAccount: e,
                                                                                        userId: F,
                                                                                        theme: ea,
                                                                                        locale: ei,
                                                                                        className: $.eT,
                                                                                        showMetadata: C,
                                                                                        showInvisibleIcon: L,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, n.jsxs)("div", {
                                                                                className: $.yk,
                                                                                children: [
                                                                                    (0, n.jsx)(p.Text, {
                                                                                        variant: "eyebrow",
                                                                                        color: "text-default",
                                                                                        children: B.intl.string(
                                                                                            B.t.jndPhX,
                                                                                        ),
                                                                                    }),
                                                                                    (0, n.jsx)(ee, {
                                                                                        account: e,
                                                                                        setShowPreviewInvisibleIcon: M,
                                                                                        setShowPreviewMetadata: w,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    })
                                                                  : null,
                                                              null != t
                                                                  ? (0, n.jsxs)("div", {
                                                                        className: $.yk,
                                                                        children: [
                                                                            (0, n.jsxs)("div", {
                                                                                className: $.a5,
                                                                                children: [
                                                                                    (0, n.jsx)(p.Text, {
                                                                                        variant: "eyebrow",
                                                                                        color: "text-default",
                                                                                        children: B.intl.string(
                                                                                            B.t.TOjkEg,
                                                                                        ),
                                                                                    }),
                                                                                    (0, n.jsx)(x.m, {
                                                                                        text: B.intl.string(B.t.x3svVc),
                                                                                        children: (0, n.jsx)(p.mir, {
                                                                                            size: "xs",
                                                                                            color: "currentColor",
                                                                                        }),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, n.jsx)(E.Wc, {
                                                                                applicationRoleConnection: t,
                                                                                className: $.eT,
                                                                                locale: ei,
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
                                return (0, n.jsxs)(p.$mQ, {
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: $.kf,
                                            children: [
                                                (0, n.jsx)(Y.A, {
                                                    guildId: i,
                                                    className: $.w$,
                                                    role: c,
                                                    size: 24,
                                                }),
                                                (0, n.jsx)(p.Text, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: $.jm,
                                                    children: c.name,
                                                }),
                                            ],
                                        }),
                                        (0, n.jsx)(p.IpV, {
                                            className: $.eu,
                                            children: es.map((e) => (0, n.jsx)(X, { channel: e }, e.id)),
                                        }),
                                    ],
                                });
                            default:
                                return null;
                        }
                    })(),
                }),
                (function () {
                    var e;
                    let t = null != (e = null == d ? void 0 : d.flat().some((e) => null == e.application_id)) && e;
                    switch (s) {
                        case 0:
                            return (0, n.jsxs)(p.jlY, {
                                children: [
                                    (0, n.jsx)(p.Button, {
                                        variant: "primary",
                                        text: B.intl.string(B.t["8SuVoE"]),
                                        onClick: () => eu(),
                                        disabled: j || !f || _,
                                    }),
                                    t
                                        ? (0, n.jsx)("div", {
                                              className: $.yY,
                                              children: (0, n.jsx)(p.QWc, {
                                                  variant: "primary",
                                                  text: B.intl.string(B.t.VXV55P),
                                                  onClick: ed,
                                              }),
                                          })
                                        : null,
                                ],
                            });
                        case 1:
                            return (0, n.jsx)(p.jlY, {
                                children: (0, n.jsx)(p.Button, {
                                    variant: "primary",
                                    text: B.intl.string(B.t.i4jeWR),
                                    onClick: () => o(0),
                                }),
                            });
                        default:
                            return (0, n.jsxs)(p.jlY, {
                                children: [
                                    (0, n.jsx)(p.Button, {
                                        variant: "primary",
                                        text: B.intl.string(B.t.cpT0Cq),
                                        onClick: () => er(!0),
                                    }),
                                    t
                                        ? (0, n.jsx)("div", {
                                              className: $.yY,
                                              children: (0, n.jsx)(p.QWc, {
                                                  variant: "primary",
                                                  text: B.intl.string(B.t.VXV55P),
                                                  onClick: ed,
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

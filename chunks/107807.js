t.d(n, { default: () => en }), t(953529), t(388685), t(642613), t(472816), t(794429);
var c = t(951288),
    o = t(647438),
    a = t(120356),
    l = t.n(a),
    r = t(512722),
    i = t.n(r),
    s = t(392711),
    d = t.n(s),
    u = t(442837),
    h = t(692547),
    m = t(780384),
    x = t(755721),
    C = t(481060),
    p = t(457330),
    N = t(749210),
    v = t(99690),
    b = t(493773),
    j = t(410030),
    f = t(726542),
    A = t(367907),
    _ = t(385499),
    y = t(277800),
    T = t(471445),
    O = t(819602),
    g = t(706454),
    I = t(313789),
    E = t(518596),
    k = t(598077),
    P = t(314897),
    S = t(592125),
    w = t(553795),
    G = t(271383),
    R = t(496675),
    Z = t(259580),
    B = t(626135),
    D = t(228643),
    L = t(275759),
    M = t(231757),
    U = t(753194),
    V = t(225104),
    z = t(458034),
    F = t(856651),
    H = t(981631),
    Y = t(388032),
    W = t(92264);
function q(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            c = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (c = c.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            c.forEach(function (n) {
                var c;
                (c = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: c,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = c);
            });
    }
    return e;
}
function K(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var c = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, c);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function Q(e) {
    let { platformType: n, className: t } = e,
        o = (0, j.ZP)(),
        a = f.Z.get(n);
    return (0, c.jsx)("img", {
        src: (0, m.ap)(o) ? a.icon.lightSVG : a.icon.darkSVG,
        alt: "",
        className: l()(W.platformIcon, t),
    });
}
function J(e) {
    let { channel: n, className: t } = e,
        o = (0, T.KS)(n);
    return (0, c.jsxs)("div", {
        className: l()(W.channelName, t),
        children: [
            null != o ? (0, c.jsx)(o, { className: W.channelNameIcon }) : null,
            (0, c.jsx)(C.X6q, {
                variant: "heading-lg/semibold",
                color: "text-default",
                className: W.channelNameText,
                children: n.name,
            }),
        ],
    });
}
function X(e) {
    let n,
        { connectionType: t, connectionMetadataField: o, operator: a, value: l, result: r, description: i } = e,
        s = null;
    if (null != i)
        switch (a) {
            case F.iO.LESS_THAN:
                s = Y.intl.format(Y.t["2p7dAw"], {
                    description: i,
                    count: Math.max(0, Number(l) - 1),
                });
                break;
            case F.iO.GREATER_THAN:
                s = Y.intl.format(Y.t["2p7dAw"], {
                    description: i,
                    count: Math.max(0, Number(l) + 1),
                });
                break;
            default:
                s = i;
        }
    else {
        let e;
        switch (a) {
            case F.iO.EQUAL:
                (e = Y.t["0BlpbG"]), t === H.ABu.PAYPAL && o === F.PC.PAYPAL_VERIFIED && (e = Y.t.dcSDhY);
                break;
            case F.iO.NOT_EQUAL:
                e = Y.t.otcpTE;
                break;
            case F.iO.LESS_THAN:
                e = Y.t.Ef35xs;
                break;
            case F.iO.GREATER_THAN:
                e = Y.t["8W9OXV"];
                break;
            case void 0:
            case null:
                return null;
        }
        if (
            null ==
            (s = (0, L.n_)({
                connectionType: t,
                connectionMetadataField: o,
                operator: a,
                operatorText: e,
                value: l,
            }))
        )
            return null;
    }
    return (
        (n = r ? "header-secondary" : "text-danger"),
        (0, c.jsx)(C.Text, {
            variant: "text-xs/normal",
            color: n,
            className: W.connectionsCheck,
            children: s,
        })
    );
}
function $(e) {
    let { eligibilityStatesGroups: n, onPlatformConnect: t, onPlatformConnected: a } = e,
        [r, s] = o.useState({}),
        [u, m] = o.useState(0),
        [p, N] = o.useState(null),
        [b, j] = o.useState(null),
        A = o.useMemo(() => d().flatten(n), [n]),
        y = o.useMemo(
            () =>
                d().groupBy(A, (e) =>
                    "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : ""),
                ),
            [A],
        );
    o.useEffect(() => m(Date.now()), [A]),
        o.useEffect(() => {
            if (null == p) return;
            let e = y["".concat(p).concat(null != b ? ":".concat(b.id) : "")];
            null != e && e.every((e) => e.result) && a(p, b);
        }, [y, p, b, a]);
    let T = (0, C.dQu)(h.Z.unsafe_rawColors.GREEN_330).hex();
    return (0, c.jsx)(c.Fragment, {
        children: Object.keys(y)
            .sort((e, n) => {
                let t = y[e].every((e) => e.result),
                    c = y[n].every((e) => e.result);
                return !0 === t && !1 === c ? 1 : !1 === t && !0 === c ? -1 : 0;
            })
            .map((e) => {
                var n, o, a;
                let d,
                    h,
                    m,
                    p = y[e],
                    b = p.find((e) => null == e.operator),
                    A = p.filter((e) => null != e.operator),
                    O = (null == b || b.result) && A.every((e) => e.result),
                    g = p.find((e) => null != e.application),
                    I = f.Z.get(e),
                    E = null == I || I.enabled,
                    P = null == g ? void 0 : g.application,
                    S = (null == P ? void 0 : P.bot) != null ? new k.Z(P.bot) : null;
                L.SJ.includes(null != (n = null == P ? void 0 : P.id) ? n : "")
                    ? (d = (0, c.jsx)(U.Z, {
                          className: W.botTag,
                          color: T,
                          size: 16,
                      }))
                    : null != S &&
                      (d = (0, c.jsx)(_.Z, {
                          className: W.botTag,
                          verified: S.isVerifiedBot(),
                      }));
                let w = r[null != (o = null == I ? void 0 : I.type) ? o : F.Kt],
                    G = !O && null != w && w <= u;
                return (
                    (h = O
                        ? (0, c.jsx)(C.dz2, {
                              size: "md",
                              color: "currentColor",
                              className: W.connectionsChecksGroupCheckmark,
                          })
                        : G
                          ? (0, c.jsx)(x.zx, {
                                size: x.zx.Sizes.TINY,
                                look: x.zx.Looks.LINK,
                                color: x.zx.Colors.LINK,
                                className: W.connectionsChecksGroupRetryButton,
                                children: Y.intl.string(Y.t["5911LS"]),
                            })
                          : E
                            ? (0, c.jsx)(Z.Z, {
                                  direction: Z.Z.Directions.RIGHT,
                                  className: W.connectionsChecksGroupCaret,
                              })
                            : (0, c.jsx)(C.Text, {
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: Y.intl.string(Y.t["cEts6+"]),
                              })),
                    (null == I ? void 0 : I.type) === H.ABu.STEAM && (m = Y.intl.string(Y.t.NcZh6O)),
                    (0, c.jsxs)(
                        C.P3F,
                        {
                            className: l()(
                                W.connectionsChecksGroup,
                                O ? W.connectionsChecksGroupPassed : null,
                                E ? null : W.connectionsChecksGroupPlatformDisabled,
                            ),
                            onClick:
                                !O && E
                                    ? () => {
                                          var e, n;
                                          return (
                                              (n = null != (e = null == I ? void 0 : I.type) ? e : F.Kt),
                                              void ((0, M.Z)({
                                                  platformType: n,
                                                  location: "Verified Roles Connect Accounts Modal",
                                                  overrideUrl: null == P ? void 0 : P.role_connections_verification_url,
                                              }),
                                              s(K(q({}, r), { [n]: Date.now() })),
                                              N(n),
                                              j(null != P ? P : null),
                                              t())
                                          );
                                      }
                                    : void 0,
                            children: [
                                !O && G
                                    ? (0, c.jsx)("div", {
                                          className: W.connectionsChecksGroupRequirementsNotMet,
                                          children: (0, c.jsx)(C.Text, {
                                              variant: "text-xs/normal",
                                              color: "always-white",
                                              children: Y.intl.string(Y.t.UB3hKi),
                                          }),
                                      })
                                    : null,
                                null != I ? (0, c.jsx)(Q, { platformType: I.type }) : null,
                                null != S ? (0, c.jsx)(v.Z, { user: S }) : null,
                                (0, c.jsxs)("div", {
                                    className: W.connectionsChecksGroupTextContainer,
                                    children: [
                                        (0, c.jsxs)("div", {
                                            className: W.connectionsChecksGroupTextNameContainer,
                                            children: [
                                                (0, c.jsx)(C.Text, {
                                                    variant: "text-md/medium",
                                                    color: "header-primary",
                                                    children:
                                                        null != (a = null == I ? void 0 : I.name)
                                                            ? a
                                                            : null == P
                                                              ? void 0
                                                              : P.name,
                                                }),
                                                d,
                                                null != m
                                                    ? (0, c.jsx)(C.ua7, {
                                                          text: m,
                                                          children: (e) =>
                                                              (0, c.jsx)(
                                                                  C.d3s,
                                                                  K(
                                                                      q(
                                                                          {
                                                                              size: "xs",
                                                                              color: "currentColor",
                                                                          },
                                                                          e,
                                                                      ),
                                                                      {
                                                                          className:
                                                                              W.connectionsChecksGroupTextNameInfoIcon,
                                                                      },
                                                                  ),
                                                              ),
                                                      })
                                                    : null,
                                            ],
                                        }),
                                        A.map((e) => {
                                            let {
                                                connection_type: n,
                                                connection_metadata_field: t,
                                                operator: o,
                                                value: a,
                                                result: l,
                                                description: r,
                                            } = e;
                                            return (
                                                i()(null != t, "connectionMetadataField is null"),
                                                i()(null != o, "operator is null"),
                                                i()(null != a, "value is null"),
                                                (0, c.jsx)(
                                                    X,
                                                    {
                                                        connectionType: n,
                                                        connectionMetadataField: t,
                                                        operator: o,
                                                        value: a,
                                                        result: l,
                                                        description: r,
                                                    },
                                                    t,
                                                )
                                            );
                                        }),
                                    ],
                                }),
                                h,
                            ],
                        },
                        e,
                    )
                );
            }),
    });
}
function ee(e) {
    let n,
        t,
        a,
        { account: l, setShowPreviewInvisibleIcon: r, setShowPreviewMetadata: i } = e,
        [s, d] = o.useState(l.friendSync),
        [u, h] = o.useState(l.showActivity),
        [m, x] = o.useState(1 === l.metadataVisibility),
        [N, v] = o.useState(1 === l.visibility);
    (0, b.ZP)(() => {
        r(!N), i(m);
    });
    let j = f.Z.get(l.type);
    return (
        H.BFP.has(l.type) &&
            (n = (0, c.jsx)(C.j7V, {
                className: W.accountConnectedPrivacyOptionsSwitchItem,
                hideBorder: !0,
                value: s,
                onChange: (e) => {
                    d(e), p.Z.setFriendSync(l.type, l.id, e);
                },
                children: (0, c.jsx)(C.Text, {
                    variant: "text-sm/semibold",
                    children: Y.intl.string(Y.t["+KCMSk"]),
                }),
            })),
        H.vbS.has(l.type) &&
            (t = (0, c.jsx)(C.j7V, {
                className: W.accountConnectedPrivacyOptionsSwitchItem,
                hideBorder: !0,
                value: u,
                onChange: (e) => {
                    h(e), p.Z.setShowActivity(l.type, l.id, e);
                },
                children: (0, c.jsx)(C.Text, {
                    variant: "text-sm/semibold",
                    children: Y.intl.format(Y.t["6u6J0t"], { platform: j.name }),
                }),
            })),
        !0 === j.hasMetadata &&
            (a = (0, c.jsx)(C.j7V, {
                className: W.accountConnectedPrivacyOptionsSwitchItem,
                hideBorder: !0,
                value: m,
                disabled: !N,
                onChange: (e) => {
                    i(e), x(e), p.Z.setMetadataVisibility(l.type, l.id, +!!e);
                },
                children: (0, c.jsx)(C.Text, {
                    variant: "text-sm/semibold",
                    children: Y.intl.string(Y.t.FYKGsL),
                }),
            })),
        (0, c.jsxs)("div", {
            className: W.accountConnectedPrivacyOptionsContainer,
            children: [
                (0, c.jsx)(C.j7V, {
                    className: W.accountConnectedPrivacyOptionsSwitchItem,
                    hideBorder: !0,
                    value: N,
                    onChange: (e) => {
                        r(!e), v(e), p.Z.setVisibility(l.type, l.id, +!!e);
                    },
                    children: (0, c.jsx)(C.Text, {
                        variant: "text-sm/semibold",
                        children: Y.intl.string(Y.t.f7yOAQ),
                    }),
                }),
                a,
                t,
                n,
            ],
        })
    );
}
function en(e) {
    let { transitionState: n, onClose: t, guildId: a, role: l } = e,
        [r, s] = o.useState(0),
        [d, h] = o.useState(null),
        [m, x] = o.useState(!1),
        [p, v] = o.useState(!0),
        [b, _] = o.useState(!1),
        [T, k] = o.useState(!0),
        [Z, L] = o.useState(!1),
        M = (0, u.e7)([w.Z], () => w.Z.getAccounts()),
        U = (0, u.e7)([P.default], () => P.default.getId()),
        [F, K] = o.useState(null),
        [Q, X] = o.useState(null),
        [en, et] = o.useState(null),
        ec = (0, j.ZP)(),
        eo = (0, u.e7)([g.default], () => g.default.locale),
        ea = (0, u.e7)([G.ZP], () => G.ZP.getMember(a, U)),
        el = Object.values((0, u.e7)([S.Z], () => S.Z.getMutableGuildChannelsForGuild(a))).filter(
            (e) => R.Z.can(H.Plq.VIEW_CHANNEL, e) && R.Z.can(H.Plq.SEND_MESSAGES, e) && (0, y.Z)(e).includes(l),
        );
    function er() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        null == t || t(), e && (0, C.Mr3)(z.s$, C.z1l);
    }
    function ei() {
        er(!0), (0, E.openUserSettings)(I.n.AUTHORIZED_APPS_PANEL, { section: H.oAB.AUTHORIZED_APPS });
    }
    function es() {
        er(!0), (0, E.openUserSettings)(I.n.CONNECTIONS_PANEL, { section: H.oAB.CONNECTIONS });
    }
    async function ed() {
        _(!0), await N.Z.assignGuildRoleConnection(a, l.id);
    }
    function eu() {
        B.default.track(H.rMx.PASSPORT_CHALLENGE_STARTED, q({ role_id: l.id }, (0, A.hH)(a)));
    }
    function eh(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        K(e),
            X(n),
            s(1),
            null != n &&
                (0, D.nj)()
                    .then((e) => {
                        et(e);
                    })
                    .catch(() => {});
    }
    return (
        o.useEffect(() => {
            N.Z.fetchGuildRoleConnectionsEligibility(a, l.id).then((e) => {
                h(e), x(e.some((e) => e.every((e) => e.result))), v(!1);
            });
        }, [a, l.id, M]),
        o.useEffect(() => {
            B.default.track(H.rMx.PASSPORT_CHALLENGE_VIEWED, q({ role_id: l.id }, (0, A.hH)(a)));
        }, [a, l.id]),
        o.useEffect(() => {
            b &&
                null != ea &&
                ea.roles.includes(l.id) &&
                (_(!1),
                el.length > 0 ? s(2) : null == t || t(),
                B.default.track(H.rMx.PASSPORT_CHALLENGE_FINISHED, q({ role_id: l.id }, (0, A.hH)(a))));
        }, [b, el.length, ea, a, l.id, t]),
        (0, c.jsxs)(C.Y0X, {
            size: C.CgR.MEDIUM,
            transitionState: n,
            "aria-label": Y.intl.string(Y.t.zOZh3d),
            className: W.modalRoot,
            parentComponent: "GuildRoleConnectionsConnectAccountsModal",
            children: [
                (function () {
                    switch (r) {
                        case 0:
                            return (0, c.jsxs)(C.xBx, {
                                className: W.header,
                                separator: !1,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: W.headerText,
                                        children: (0, c.jsx)(C.X6q, {
                                            variant: "heading-xl/semibold",
                                            children: Y.intl.string(Y.t.zOZh3d),
                                        }),
                                    }),
                                    (0, c.jsx)(C.olH, { onClick: () => er() }),
                                ],
                            });
                        case 1: {
                            var e, n;
                            i()(null != F, "lastPlatformConnected is null");
                            let t =
                                null != (n = null == Q ? void 0 : Q.name)
                                    ? n
                                    : null == (e = f.Z.get(F))
                                      ? void 0
                                      : e.name;
                            return (0, c.jsxs)(C.xBx, {
                                className: W.header,
                                separator: !1,
                                children: [
                                    (0, c.jsx)(C.X6q, {
                                        variant: "heading-xl/semibold",
                                        className: W.headerText,
                                        children: Y.intl.format(Y.t.yQvgBA, { platformName: t }),
                                    }),
                                    (0, c.jsx)(C.olH, { onClick: () => er() }),
                                ],
                            });
                        }
                        case 2:
                            return (0, c.jsxs)(C.xBx, {
                                className: W.header,
                                separator: !1,
                                children: [
                                    (0, c.jsx)(C.X6q, {
                                        variant: "heading-xl/extrabold",
                                        className: W.headerText,
                                        children: Y.intl.string(Y.t.najNd3),
                                    }),
                                    (0, c.jsx)(C.olH, { onClick: () => er(!0) }),
                                ],
                            });
                        default:
                            return null;
                    }
                })(),
                (0, c.jsx)(C.qBt, {
                    step: r,
                    steps: [0, 1, 2],
                    children: (function () {
                        switch (r) {
                            case 0: {
                                let e = null != d && d.length > 1,
                                    n = null != d && 1 === d.length && 1 === d[0].length;
                                return (0, c.jsx)(C.hzk, {
                                    children:
                                        p || null == d
                                            ? (0, c.jsx)(C.$jN, { className: W.connectionsChecksGroups })
                                            : (0, c.jsxs)(c.Fragment, {
                                                  children: [
                                                      (0, c.jsx)(C.Text, {
                                                          variant: "text-md/medium",
                                                          color: "header-secondary",
                                                          children: Y.intl.format(
                                                              n ? Y.t.jHfRvb : e ? Y.t.mOQ8k5 : Y.t.U0olLi,
                                                              { roleName: l.name },
                                                          ),
                                                      }),
                                                      (0, c.jsx)(C.zJl, {
                                                          className: W.connectionsChecksGroups,
                                                          children: (0, c.jsx)($, {
                                                              eligibilityStatesGroups: d,
                                                              onPlatformConnect: eu,
                                                              onPlatformConnected: eh,
                                                          }),
                                                      }),
                                                      (0, c.jsx)(C.Text, {
                                                          variant: "text-xs/normal",
                                                          className: W.footerText,
                                                          color: "header-secondary",
                                                          children: Y.intl.format(Y.t.gsgvxs, {
                                                              privacyPolicyUrl: H.EYA.PRIVACY,
                                                              onAuthorizedApplicationsClick: () => ei(),
                                                              onConnectionsClick: () => es(),
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                });
                            }
                            case 1: {
                                i()(null != F, "lastPlatformConnected is null");
                                let e = M.find((e) => {
                                        let { type: n } = e;
                                        return F === n;
                                    }),
                                    n =
                                        null == en
                                            ? void 0
                                            : en.find((e) => {
                                                  let { application: n } = e;
                                                  return n.id === (null == Q ? void 0 : Q.id);
                                              });
                                return (0, c.jsxs)(C.hzk, {
                                    children: [
                                        (0, c.jsx)(C.Text, {
                                            variant: "text-md/normal",
                                            color: "header-secondary",
                                            children: Y.intl.format(Y.t.gsgvxs, {
                                                privacyPolicyUrl: H.EYA.PRIVACY,
                                                onAuthorizedApplicationsClick: () => ei(),
                                                onConnectionsClick: () => es(),
                                            }),
                                        }),
                                        (0, c.jsx)("div", {
                                            className: W.accountConnectedContainer,
                                            children:
                                                null == e && null == n
                                                    ? (0, c.jsx)(C.$jN, { className: W.accountConnectedLoading })
                                                    : (0, c.jsxs)(c.Fragment, {
                                                          children: [
                                                              null != e
                                                                  ? (0, c.jsxs)(c.Fragment, {
                                                                        children: [
                                                                            (0, c.jsxs)("div", {
                                                                                className:
                                                                                    W.accountConnectedContainerChild,
                                                                                children: [
                                                                                    (0, c.jsx)(C.Text, {
                                                                                        variant: "eyebrow",
                                                                                        color: "header-secondary",
                                                                                        children: Y.intl.string(
                                                                                            Y.t.TOjkEh,
                                                                                        ),
                                                                                    }),
                                                                                    (0, c.jsx)(O.E3, {
                                                                                        connectedAccount: e,
                                                                                        userId: U,
                                                                                        theme: ec,
                                                                                        locale: eo,
                                                                                        className:
                                                                                            W.accountConnectedPreviewConnectedUserAccount,
                                                                                        showMetadata: T,
                                                                                        showInvisibleIcon: Z,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, c.jsxs)("div", {
                                                                                className:
                                                                                    W.accountConnectedContainerChild,
                                                                                children: [
                                                                                    (0, c.jsx)(C.Text, {
                                                                                        variant: "eyebrow",
                                                                                        color: "header-secondary",
                                                                                        children: Y.intl.string(
                                                                                            Y.t.jndPhY,
                                                                                        ),
                                                                                    }),
                                                                                    (0, c.jsx)(ee, {
                                                                                        account: e,
                                                                                        setShowPreviewInvisibleIcon: L,
                                                                                        setShowPreviewMetadata: k,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    })
                                                                  : null,
                                                              null != n
                                                                  ? (0, c.jsxs)("div", {
                                                                        className: W.accountConnectedContainerChild,
                                                                        children: [
                                                                            (0, c.jsxs)("div", {
                                                                                className: W.accountConnectedHeader,
                                                                                children: [
                                                                                    (0, c.jsx)(C.Text, {
                                                                                        variant: "eyebrow",
                                                                                        color: "header-secondary",
                                                                                        children: Y.intl.string(
                                                                                            Y.t.TOjkEh,
                                                                                        ),
                                                                                    }),
                                                                                    (0, c.jsx)(C.ua7, {
                                                                                        text: Y.intl.string(Y.t.x3svVV),
                                                                                        children: (e) =>
                                                                                            (0, c.jsx)(
                                                                                                C.d3s,
                                                                                                q(
                                                                                                    {
                                                                                                        size: "xs",
                                                                                                        color: "currentColor",
                                                                                                    },
                                                                                                    e,
                                                                                                ),
                                                                                            ),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, c.jsx)(O.tH, {
                                                                                applicationRoleConnection: n,
                                                                                className:
                                                                                    W.accountConnectedPreviewConnectedUserAccount,
                                                                                locale: eo,
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
                                return (0, c.jsxs)(C.hzk, {
                                    children: [
                                        (0, c.jsxs)("div", {
                                            className: W.roleGranted,
                                            children: [
                                                (0, c.jsx)(V.Z, {
                                                    guildId: a,
                                                    className: W.verifiedIcon,
                                                    role: l,
                                                    size: 24,
                                                }),
                                                (0, c.jsx)(C.Text, {
                                                    variant: "text-lg/semibold",
                                                    color: "header-primary",
                                                    className: W.roleGrantedName,
                                                    children: l.name,
                                                }),
                                            ],
                                        }),
                                        (0, c.jsx)(C.zJl, {
                                            className: W.channelsGranted,
                                            children: el.map((e) => (0, c.jsx)(J, { channel: e }, e.id)),
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
                    let n = null != (e = null == d ? void 0 : d.flat().some((e) => null == e.application_id)) && e;
                    switch (r) {
                        case 0:
                            return (0, c.jsxs)(C.mzw, {
                                children: [
                                    (0, c.jsx)(C.zxk, {
                                        variant: "primary",
                                        text: Y.intl.string(Y.t["8SuVoK"]),
                                        onClick: () => ed(),
                                        disabled: p || !m || b,
                                    }),
                                    n
                                        ? (0, c.jsx)("div", {
                                              className: W.manageConnectionsFooterButton,
                                              children: (0, c.jsx)(C.Avr, {
                                                  variant: "primary",
                                                  text: Y.intl.string(Y.t.VXV55O),
                                                  onClick: es,
                                              }),
                                          })
                                        : null,
                                ],
                            });
                        case 1:
                            return (0, c.jsx)(C.mzw, {
                                children: (0, c.jsx)(C.zxk, {
                                    variant: "primary",
                                    text: Y.intl.string(Y.t.i4jeWV),
                                    onClick: () => s(0),
                                }),
                            });
                        default:
                            return (0, c.jsxs)(C.mzw, {
                                children: [
                                    (0, c.jsx)(C.zxk, {
                                        variant: "primary",
                                        text: Y.intl.string(Y.t.cpT0Cg),
                                        onClick: () => er(!0),
                                    }),
                                    n
                                        ? (0, c.jsx)("div", {
                                              className: W.manageConnectionsFooterButton,
                                              children: (0, c.jsx)(C.Avr, {
                                                  variant: "primary",
                                                  text: Y.intl.string(Y.t.VXV55O),
                                                  onClick: es,
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

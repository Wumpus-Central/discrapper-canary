t.d(n, { default: () => ee }), t(953529), t(388685), t(642613), t(472816), t(794429);
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
    p = t(481060),
    C = t(457330),
    N = t(749210),
    v = t(230711),
    b = t(99690),
    j = t(493773),
    f = t(410030),
    A = t(726542),
    y = t(367907),
    _ = t(385499),
    T = t(277800),
    O = t(471445),
    g = t(819602),
    I = t(706454),
    k = t(598077),
    E = t(314897),
    P = t(592125),
    S = t(553795),
    w = t(271383),
    G = t(496675),
    R = t(259580),
    Z = t(626135),
    B = t(228643),
    M = t(275759),
    D = t(231757),
    L = t(753194),
    V = t(225104),
    z = t(458034),
    F = t(856651),
    U = t(981631),
    H = t(388032),
    Y = t(670733);
function W(e) {
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
function q(e, n) {
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
function K(e) {
    let { platformType: n, className: t } = e,
        o = (0, f.ZP)(),
        a = A.Z.get(n);
    return (0, c.jsx)("img", {
        src: (0, m.ap)(o) ? a.icon.lightSVG : a.icon.darkSVG,
        alt: "",
        className: l()(Y.platformIcon, t),
    });
}
function Q(e) {
    let { channel: n, className: t } = e,
        o = (0, O.KS)(n);
    return (0, c.jsxs)("div", {
        className: l()(Y.channelName, t),
        children: [
            null != o ? (0, c.jsx)(o, { className: Y.channelNameIcon }) : null,
            (0, c.jsx)(p.X6q, {
                variant: "heading-lg/semibold",
                color: "text-default",
                className: Y.channelNameText,
                children: n.name,
            }),
        ],
    });
}
function J(e) {
    let n,
        { connectionType: t, connectionMetadataField: o, operator: a, value: l, result: r, description: i } = e,
        s = null;
    if (null != i)
        switch (a) {
            case F.iO.LESS_THAN:
                s = H.intl.format(H.t["2p7dAw"], {
                    description: i,
                    count: Math.max(0, Number(l) - 1),
                });
                break;
            case F.iO.GREATER_THAN:
                s = H.intl.format(H.t["2p7dAw"], {
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
                (e = H.t["0BlpbG"]), t === U.ABu.PAYPAL && o === F.PC.PAYPAL_VERIFIED && (e = H.t.dcSDhY);
                break;
            case F.iO.NOT_EQUAL:
                e = H.t.otcpTE;
                break;
            case F.iO.LESS_THAN:
                e = H.t.Ef35xs;
                break;
            case F.iO.GREATER_THAN:
                e = H.t["8W9OXV"];
                break;
            case void 0:
            case null:
                return null;
        }
        if (
            null ==
            (s = (0, M.n_)({
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
        (0, c.jsx)(p.Text, {
            variant: "text-xs/normal",
            color: n,
            className: Y.connectionsCheck,
            children: s,
        })
    );
}
function X(e) {
    let { eligibilityStatesGroups: n, onPlatformConnect: t, onPlatformConnected: a } = e,
        [r, s] = o.useState({}),
        [u, m] = o.useState(0),
        [C, N] = o.useState(null),
        [v, j] = o.useState(null),
        f = o.useMemo(() => d().flatten(n), [n]),
        y = o.useMemo(
            () =>
                d().groupBy(f, (e) =>
                    "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : ""),
                ),
            [f],
        );
    o.useEffect(() => m(Date.now()), [f]),
        o.useEffect(() => {
            if (null == C) return;
            let e = y["".concat(C).concat(null != v ? ":".concat(v.id) : "")];
            null != e && e.every((e) => e.result) && a(C, v);
        }, [y, C, v, a]);
    let T = (0, p.dQu)(h.Z.unsafe_rawColors.GREEN_330).hex();
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
                    C = y[e],
                    v = C.find((e) => null == e.operator),
                    f = C.filter((e) => null != e.operator),
                    O = (null == v || v.result) && f.every((e) => e.result),
                    g = C.find((e) => null != e.application),
                    I = A.Z.get(e),
                    E = null == I || I.enabled,
                    P = null == g ? void 0 : g.application,
                    S = (null == P ? void 0 : P.bot) != null ? new k.Z(P.bot) : null;
                M.SJ.includes(null != (n = null == P ? void 0 : P.id) ? n : "")
                    ? (d = (0, c.jsx)(L.Z, {
                          className: Y.botTag,
                          color: T,
                          size: 16,
                      }))
                    : null != S &&
                      (d = (0, c.jsx)(_.Z, {
                          className: Y.botTag,
                          verified: S.isVerifiedBot(),
                      }));
                let w = r[null != (o = null == I ? void 0 : I.type) ? o : F.Kt],
                    G = !O && null != w && w <= u;
                return (
                    (h = O
                        ? (0, c.jsx)(p.dz2, {
                              size: "md",
                              color: "currentColor",
                              className: Y.connectionsChecksGroupCheckmark,
                          })
                        : G
                          ? (0, c.jsx)(x.zx, {
                                size: x.zx.Sizes.TINY,
                                look: x.zx.Looks.LINK,
                                color: x.zx.Colors.LINK,
                                className: Y.connectionsChecksGroupRetryButton,
                                children: H.intl.string(H.t["5911LS"]),
                            })
                          : E
                            ? (0, c.jsx)(R.Z, {
                                  direction: R.Z.Directions.RIGHT,
                                  className: Y.connectionsChecksGroupCaret,
                              })
                            : (0, c.jsx)(p.Text, {
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: H.intl.string(H.t["cEts6+"]),
                              })),
                    (null == I ? void 0 : I.type) === U.ABu.STEAM && (m = H.intl.string(H.t.NcZh6O)),
                    (0, c.jsxs)(
                        p.P3F,
                        {
                            className: l()(
                                Y.connectionsChecksGroup,
                                O ? Y.connectionsChecksGroupPassed : null,
                                E ? null : Y.connectionsChecksGroupPlatformDisabled,
                            ),
                            onClick:
                                !O && E
                                    ? () => {
                                          var e, n;
                                          return (
                                              (n = null != (e = null == I ? void 0 : I.type) ? e : F.Kt),
                                              void ((0, D.Z)({
                                                  platformType: n,
                                                  location: "Verified Roles Connect Accounts Modal",
                                                  overrideUrl: null == P ? void 0 : P.role_connections_verification_url,
                                              }),
                                              s(q(W({}, r), { [n]: Date.now() })),
                                              N(n),
                                              j(null != P ? P : null),
                                              t())
                                          );
                                      }
                                    : void 0,
                            children: [
                                !O && G
                                    ? (0, c.jsx)("div", {
                                          className: Y.connectionsChecksGroupRequirementsNotMet,
                                          children: (0, c.jsx)(p.Text, {
                                              variant: "text-xs/normal",
                                              color: "always-white",
                                              children: H.intl.string(H.t.UB3hKi),
                                          }),
                                      })
                                    : null,
                                null != I ? (0, c.jsx)(K, { platformType: I.type }) : null,
                                null != S ? (0, c.jsx)(b.Z, { user: S }) : null,
                                (0, c.jsxs)("div", {
                                    className: Y.connectionsChecksGroupTextContainer,
                                    children: [
                                        (0, c.jsxs)("div", {
                                            className: Y.connectionsChecksGroupTextNameContainer,
                                            children: [
                                                (0, c.jsx)(p.Text, {
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
                                                    ? (0, c.jsx)(p.ua7, {
                                                          text: m,
                                                          children: (e) =>
                                                              (0, c.jsx)(
                                                                  p.d3s,
                                                                  q(
                                                                      W(
                                                                          {
                                                                              size: "xs",
                                                                              color: "currentColor",
                                                                          },
                                                                          e,
                                                                      ),
                                                                      {
                                                                          className:
                                                                              Y.connectionsChecksGroupTextNameInfoIcon,
                                                                      },
                                                                  ),
                                                              ),
                                                      })
                                                    : null,
                                            ],
                                        }),
                                        f.map((e) => {
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
                                                    J,
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
function $(e) {
    let n,
        t,
        a,
        { account: l, setShowPreviewInvisibleIcon: r, setShowPreviewMetadata: i } = e,
        [s, d] = o.useState(l.friendSync),
        [u, h] = o.useState(l.showActivity),
        [m, x] = o.useState(1 === l.metadataVisibility),
        [N, v] = o.useState(1 === l.visibility);
    (0, j.ZP)(() => {
        r(!N), i(m);
    });
    let b = A.Z.get(l.type);
    return (
        U.BFP.has(l.type) &&
            (n = (0, c.jsx)(p.j7V, {
                className: Y.accountConnectedPrivacyOptionsSwitchItem,
                hideBorder: !0,
                value: s,
                onChange: (e) => {
                    d(e), C.Z.setFriendSync(l.type, l.id, e);
                },
                children: (0, c.jsx)(p.Text, {
                    variant: "text-sm/semibold",
                    children: H.intl.string(H.t["+KCMSk"]),
                }),
            })),
        U.vbS.has(l.type) &&
            (t = (0, c.jsx)(p.j7V, {
                className: Y.accountConnectedPrivacyOptionsSwitchItem,
                hideBorder: !0,
                value: u,
                onChange: (e) => {
                    h(e), C.Z.setShowActivity(l.type, l.id, e);
                },
                children: (0, c.jsx)(p.Text, {
                    variant: "text-sm/semibold",
                    children: H.intl.format(H.t["6u6J0t"], { platform: b.name }),
                }),
            })),
        !0 === b.hasMetadata &&
            (a = (0, c.jsx)(p.j7V, {
                className: Y.accountConnectedPrivacyOptionsSwitchItem,
                hideBorder: !0,
                value: m,
                disabled: !N,
                onChange: (e) => {
                    i(e), x(e), C.Z.setMetadataVisibility(l.type, l.id, +!!e);
                },
                children: (0, c.jsx)(p.Text, {
                    variant: "text-sm/semibold",
                    children: H.intl.string(H.t.FYKGsL),
                }),
            })),
        (0, c.jsxs)("div", {
            className: Y.accountConnectedPrivacyOptionsContainer,
            children: [
                (0, c.jsx)(p.j7V, {
                    className: Y.accountConnectedPrivacyOptionsSwitchItem,
                    hideBorder: !0,
                    value: N,
                    onChange: (e) => {
                        r(!e), v(e), C.Z.setVisibility(l.type, l.id, +!!e);
                    },
                    children: (0, c.jsx)(p.Text, {
                        variant: "text-sm/semibold",
                        children: H.intl.string(H.t.f7yOAQ),
                    }),
                }),
                a,
                t,
                n,
            ],
        })
    );
}
function ee(e) {
    let { transitionState: n, onClose: t, guildId: a, role: l } = e,
        [r, s] = o.useState(0),
        [d, h] = o.useState(null),
        [m, x] = o.useState(!1),
        [C, b] = o.useState(!0),
        [j, _] = o.useState(!1),
        [O, k] = o.useState(!0),
        [R, M] = o.useState(!1),
        D = (0, u.e7)([S.Z], () => S.Z.getAccounts()),
        L = (0, u.e7)([E.default], () => E.default.getId()),
        [F, q] = o.useState(null),
        [K, J] = o.useState(null),
        [ee, en] = o.useState(null),
        et = (0, f.ZP)(),
        ec = (0, u.e7)([I.default], () => I.default.locale),
        eo = (0, u.e7)([w.ZP], () => w.ZP.getMember(a, L)),
        ea = Object.values((0, u.e7)([P.Z], () => P.Z.getMutableGuildChannelsForGuild(a))).filter(
            (e) => G.Z.can(U.Plq.VIEW_CHANNEL, e) && G.Z.can(U.Plq.SEND_MESSAGES, e) && (0, T.Z)(e).includes(l),
        );
    function el() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        null == t || t(), e && (0, p.Mr3)(z.s$, p.z1l);
    }
    function er() {
        el(!0), v.Z.open(U.oAB.AUTHORIZED_APPS);
    }
    function ei() {
        el(!0), v.Z.open(U.oAB.CONNECTIONS);
    }
    async function es() {
        _(!0), await N.Z.assignGuildRoleConnection(a, l.id);
    }
    function ed() {
        Z.default.track(U.rMx.PASSPORT_CHALLENGE_STARTED, W({ role_id: l.id }, (0, y.hH)(a)));
    }
    function eu(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        q(e),
            J(n),
            s(1),
            null != n &&
                (0, B.nj)()
                    .then((e) => {
                        en(e);
                    })
                    .catch(() => {});
    }
    return (
        o.useEffect(() => {
            N.Z.fetchGuildRoleConnectionsEligibility(a, l.id).then((e) => {
                h(e), x(e.some((e) => e.every((e) => e.result))), b(!1);
            });
        }, [a, l.id, D]),
        o.useEffect(() => {
            Z.default.track(U.rMx.PASSPORT_CHALLENGE_VIEWED, W({ role_id: l.id }, (0, y.hH)(a)));
        }, [a, l.id]),
        o.useEffect(() => {
            j &&
                null != eo &&
                eo.roles.includes(l.id) &&
                (_(!1),
                ea.length > 0 ? s(2) : null == t || t(),
                Z.default.track(U.rMx.PASSPORT_CHALLENGE_FINISHED, W({ role_id: l.id }, (0, y.hH)(a))));
        }, [j, ea.length, eo, a, l.id, t]),
        (0, c.jsxs)(p.Y0X, {
            size: p.CgR.MEDIUM,
            transitionState: n,
            "aria-label": H.intl.string(H.t.zOZh3d),
            className: Y.modalRoot,
            parentComponent: "GuildRoleConnectionsConnectAccountsModal",
            children: [
                (function () {
                    switch (r) {
                        case 0:
                            return (0, c.jsxs)(p.xBx, {
                                className: Y.header,
                                separator: !1,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: Y.headerText,
                                        children: (0, c.jsx)(p.X6q, {
                                            variant: "heading-xl/semibold",
                                            children: H.intl.string(H.t.zOZh3d),
                                        }),
                                    }),
                                    (0, c.jsx)(p.olH, { onClick: () => el() }),
                                ],
                            });
                        case 1: {
                            var e, n;
                            i()(null != F, "lastPlatformConnected is null");
                            let t =
                                null != (n = null == K ? void 0 : K.name)
                                    ? n
                                    : null == (e = A.Z.get(F))
                                      ? void 0
                                      : e.name;
                            return (0, c.jsxs)(p.xBx, {
                                className: Y.header,
                                separator: !1,
                                children: [
                                    (0, c.jsx)(p.X6q, {
                                        variant: "heading-xl/semibold",
                                        className: Y.headerText,
                                        children: H.intl.format(H.t.yQvgBA, { platformName: t }),
                                    }),
                                    (0, c.jsx)(p.olH, { onClick: () => el() }),
                                ],
                            });
                        }
                        case 2:
                            return (0, c.jsxs)(p.xBx, {
                                className: Y.header,
                                separator: !1,
                                children: [
                                    (0, c.jsx)(p.X6q, {
                                        variant: "heading-xl/extrabold",
                                        className: Y.headerText,
                                        children: H.intl.string(H.t.najNd3),
                                    }),
                                    (0, c.jsx)(p.olH, { onClick: () => el(!0) }),
                                ],
                            });
                        default:
                            return null;
                    }
                })(),
                (0, c.jsx)(p.qBt, {
                    step: r,
                    steps: [0, 1, 2],
                    children: (function () {
                        switch (r) {
                            case 0: {
                                let e = null != d && d.length > 1,
                                    n = null != d && 1 === d.length && 1 === d[0].length;
                                return (0, c.jsx)(p.hzk, {
                                    children:
                                        C || null == d
                                            ? (0, c.jsx)(p.$jN, { className: Y.connectionsChecksGroups })
                                            : (0, c.jsxs)(c.Fragment, {
                                                  children: [
                                                      (0, c.jsx)(p.Text, {
                                                          variant: "text-md/medium",
                                                          color: "header-secondary",
                                                          children: H.intl.format(
                                                              n ? H.t.jHfRvb : e ? H.t.mOQ8k5 : H.t.U0olLi,
                                                              { roleName: l.name },
                                                          ),
                                                      }),
                                                      (0, c.jsx)(p.zJl, {
                                                          className: Y.connectionsChecksGroups,
                                                          children: (0, c.jsx)(X, {
                                                              eligibilityStatesGroups: d,
                                                              onPlatformConnect: ed,
                                                              onPlatformConnected: eu,
                                                          }),
                                                      }),
                                                      (0, c.jsx)(p.Text, {
                                                          variant: "text-xs/normal",
                                                          className: Y.footerText,
                                                          color: "header-secondary",
                                                          children: H.intl.format(H.t.gsgvxs, {
                                                              privacyPolicyUrl: U.EYA.PRIVACY,
                                                              onAuthorizedApplicationsClick: () => er(),
                                                              onConnectionsClick: () => ei(),
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                });
                            }
                            case 1: {
                                i()(null != F, "lastPlatformConnected is null");
                                let e = D.find((e) => {
                                        let { type: n } = e;
                                        return F === n;
                                    }),
                                    n =
                                        null == ee
                                            ? void 0
                                            : ee.find((e) => {
                                                  let { application: n } = e;
                                                  return n.id === (null == K ? void 0 : K.id);
                                              });
                                return (0, c.jsxs)(p.hzk, {
                                    children: [
                                        (0, c.jsx)(p.Text, {
                                            variant: "text-md/normal",
                                            color: "header-secondary",
                                            children: H.intl.format(H.t.gsgvxs, {
                                                privacyPolicyUrl: U.EYA.PRIVACY,
                                                onAuthorizedApplicationsClick: () => er(),
                                                onConnectionsClick: () => ei(),
                                            }),
                                        }),
                                        (0, c.jsx)("div", {
                                            className: Y.accountConnectedContainer,
                                            children:
                                                null == e && null == n
                                                    ? (0, c.jsx)(p.$jN, { className: Y.accountConnectedLoading })
                                                    : (0, c.jsxs)(c.Fragment, {
                                                          children: [
                                                              null != e
                                                                  ? (0, c.jsxs)(c.Fragment, {
                                                                        children: [
                                                                            (0, c.jsxs)("div", {
                                                                                className:
                                                                                    Y.accountConnectedContainerChild,
                                                                                children: [
                                                                                    (0, c.jsx)(p.Text, {
                                                                                        variant: "eyebrow",
                                                                                        color: "header-secondary",
                                                                                        children: H.intl.string(
                                                                                            H.t.TOjkEh,
                                                                                        ),
                                                                                    }),
                                                                                    (0, c.jsx)(g.E3, {
                                                                                        connectedAccount: e,
                                                                                        userId: L,
                                                                                        theme: et,
                                                                                        locale: ec,
                                                                                        className:
                                                                                            Y.accountConnectedPreviewConnectedUserAccount,
                                                                                        showMetadata: O,
                                                                                        showInvisibleIcon: R,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, c.jsxs)("div", {
                                                                                className:
                                                                                    Y.accountConnectedContainerChild,
                                                                                children: [
                                                                                    (0, c.jsx)(p.Text, {
                                                                                        variant: "eyebrow",
                                                                                        color: "header-secondary",
                                                                                        children: H.intl.string(
                                                                                            H.t.jndPhY,
                                                                                        ),
                                                                                    }),
                                                                                    (0, c.jsx)($, {
                                                                                        account: e,
                                                                                        setShowPreviewInvisibleIcon: M,
                                                                                        setShowPreviewMetadata: k,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    })
                                                                  : null,
                                                              null != n
                                                                  ? (0, c.jsxs)("div", {
                                                                        className: Y.accountConnectedContainerChild,
                                                                        children: [
                                                                            (0, c.jsxs)("div", {
                                                                                className: Y.accountConnectedHeader,
                                                                                children: [
                                                                                    (0, c.jsx)(p.Text, {
                                                                                        variant: "eyebrow",
                                                                                        color: "header-secondary",
                                                                                        children: H.intl.string(
                                                                                            H.t.TOjkEh,
                                                                                        ),
                                                                                    }),
                                                                                    (0, c.jsx)(p.ua7, {
                                                                                        text: H.intl.string(H.t.x3svVV),
                                                                                        children: (e) =>
                                                                                            (0, c.jsx)(
                                                                                                p.d3s,
                                                                                                W(
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
                                                                            (0, c.jsx)(g.tH, {
                                                                                applicationRoleConnection: n,
                                                                                className:
                                                                                    Y.accountConnectedPreviewConnectedUserAccount,
                                                                                locale: ec,
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
                                return (0, c.jsxs)(p.hzk, {
                                    children: [
                                        (0, c.jsxs)("div", {
                                            className: Y.roleGranted,
                                            children: [
                                                (0, c.jsx)(V.Z, {
                                                    guildId: a,
                                                    className: Y.verifiedIcon,
                                                    role: l,
                                                    size: 24,
                                                }),
                                                (0, c.jsx)(p.Text, {
                                                    variant: "text-lg/semibold",
                                                    color: "header-primary",
                                                    className: Y.roleGrantedName,
                                                    children: l.name,
                                                }),
                                            ],
                                        }),
                                        (0, c.jsx)(p.zJl, {
                                            className: Y.channelsGranted,
                                            children: ea.map((e) => (0, c.jsx)(Q, { channel: e }, e.id)),
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
                            return (0, c.jsxs)(p.mzw, {
                                children: [
                                    (0, c.jsx)(p.zxk, {
                                        variant: "primary",
                                        text: H.intl.string(H.t["8SuVoK"]),
                                        onClick: () => es(),
                                        disabled: C || !m || j,
                                    }),
                                    n
                                        ? (0, c.jsx)("div", {
                                              className: Y.manageConnectionsFooterButton,
                                              children: (0, c.jsx)(p.Avr, {
                                                  variant: "primary",
                                                  text: H.intl.string(H.t.VXV55O),
                                                  onClick: ei,
                                              }),
                                          })
                                        : null,
                                ],
                            });
                        case 1:
                            return (0, c.jsx)(p.mzw, {
                                children: (0, c.jsx)(p.zxk, {
                                    variant: "primary",
                                    text: H.intl.string(H.t.i4jeWV),
                                    onClick: () => s(0),
                                }),
                            });
                        default:
                            return (0, c.jsxs)(p.mzw, {
                                children: [
                                    (0, c.jsx)(p.zxk, {
                                        variant: "primary",
                                        text: H.intl.string(H.t.cpT0Cg),
                                        onClick: () => el(!0),
                                    }),
                                    n
                                        ? (0, c.jsx)("div", {
                                              className: Y.manageConnectionsFooterButton,
                                              children: (0, c.jsx)(p.Avr, {
                                                  variant: "primary",
                                                  text: H.intl.string(H.t.VXV55O),
                                                  onClick: ei,
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

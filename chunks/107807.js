t.d(n, { default: () => ee }), t(953529), t(388685), t(642613), t(472816), t(794429);
var c = t(255367),
    o = t(73800),
    a = t(120356),
    i = t.n(a),
    l = t(512722),
    r = t.n(l),
    s = t(392711),
    d = t.n(s),
    u = t(442837),
    h = t(692547),
    p = t(780384),
    m = t(755721),
    C = t(481060),
    x = t(457330),
    b = t(749210),
    _ = t(230711),
    f = t(99690),
    y = t(493773),
    v = t(410030),
    N = t(726542),
    A = t(367907),
    S = t(385499),
    g = t(277800),
    j = t(471445),
    I = t(819602),
    O = t(706454),
    T = t(598077),
    P = t(314897),
    E = t(592125),
    k = t(553795),
    G = t(271383),
    w = t(496675),
    R = t(259580),
    L = t(626135),
    Z = t(228643),
    V = t(275759),
    D = t(231757),
    M = t(753194),
    B = t(225104),
    U = t(458034),
    F = t(856651),
    z = t(981631),
    H = t(388032),
    q = t(670733);
function Y(e) {
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
        o = (0, v.ZP)(),
        a = N.Z.get(n);
    return (0, c.jsx)("img", {
        src: (0, p.ap)(o) ? a.icon.lightSVG : a.icon.darkSVG,
        alt: "",
        className: i()(q.platformIcon, t),
    });
}
function W(e) {
    let { channel: n, className: t } = e,
        o = (0, j.KS)(n);
    return (0, c.jsxs)("div", {
        className: i()(q.channelName, t),
        children: [
            null != o ? (0, c.jsx)(o, { className: q.channelNameIcon }) : null,
            (0, c.jsx)(C.X6q, {
                variant: "heading-lg/semibold",
                color: "text-default",
                className: q.channelNameText,
                children: n.name,
            }),
        ],
    });
}
function X(e) {
    let n,
        { connectionType: t, connectionMetadataField: o, operator: a, value: i, result: l, description: r } = e,
        s = null;
    if (null != r)
        switch (a) {
            case F.iO.LESS_THAN:
                s = H.intl.format(H.t["2p7dAw"], {
                    description: r,
                    count: Math.max(0, Number(i) - 1),
                });
                break;
            case F.iO.GREATER_THAN:
                s = H.intl.format(H.t["2p7dAw"], {
                    description: r,
                    count: Math.max(0, Number(i) + 1),
                });
                break;
            default:
                s = r;
        }
    else {
        let e;
        switch (a) {
            case F.iO.EQUAL:
                (e = H.t["0BlpbG"]), t === z.ABu.PAYPAL && o === F.PC.PAYPAL_VERIFIED && (e = H.t.dcSDhY);
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
            (s = (0, V.n_)({
                connectionType: t,
                connectionMetadataField: o,
                operator: a,
                operatorText: e,
                value: i,
            }))
        )
            return null;
    }
    return (
        (n = l ? "header-secondary" : "text-danger"),
        (0, c.jsx)(C.Text, {
            variant: "text-xs/normal",
            color: n,
            className: q.connectionsCheck,
            children: s,
        })
    );
}
function J(e) {
    let { eligibilityStatesGroups: n, onPlatformConnect: t, onPlatformConnected: a } = e,
        [l, s] = o.useState({}),
        [u, p] = o.useState(0),
        [x, b] = o.useState(null),
        [_, y] = o.useState(null),
        v = o.useMemo(() => d().flatten(n), [n]),
        A = o.useMemo(
            () =>
                d().groupBy(v, (e) =>
                    "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : ""),
                ),
            [v],
        );
    o.useEffect(() => p(Date.now()), [v]),
        o.useEffect(() => {
            if (null == x) return;
            let e = A["".concat(x).concat(null != _ ? ":".concat(_.id) : "")];
            null != e && e.every((e) => e.result) && a(x, _);
        }, [A, x, _, a]);
    let g = (0, C.dQu)(h.Z.unsafe_rawColors.GREEN_330).hex();
    return (0, c.jsx)(c.Fragment, {
        children: Object.keys(A)
            .sort((e, n) => {
                let t = A[e].every((e) => e.result),
                    c = A[n].every((e) => e.result);
                return !0 === t && !1 === c ? 1 : !1 === t && !0 === c ? -1 : 0;
            })
            .map((e) => {
                var n, o, a;
                let d,
                    h,
                    p,
                    x = A[e],
                    _ = x.find((e) => null == e.operator),
                    v = x.filter((e) => null != e.operator),
                    j = (null == _ || _.result) && v.every((e) => e.result),
                    I = x.find((e) => null != e.application),
                    O = N.Z.get(e),
                    P = null == O || O.enabled,
                    E = null == I ? void 0 : I.application,
                    k = (null == E ? void 0 : E.bot) != null ? new T.Z(E.bot) : null;
                V.SJ.includes(null != (n = null == E ? void 0 : E.id) ? n : "")
                    ? (d = (0, c.jsx)(M.Z, {
                          className: q.botTag,
                          color: g,
                          size: 16,
                      }))
                    : null != k &&
                      (d = (0, c.jsx)(S.Z, {
                          className: q.botTag,
                          verified: k.isVerifiedBot(),
                      }));
                let G = l[null != (o = null == O ? void 0 : O.type) ? o : F.Kt],
                    w = !j && null != G && G <= u;
                return (
                    (h = j
                        ? (0, c.jsx)(C.dz2, {
                              size: "md",
                              color: "currentColor",
                              className: q.connectionsChecksGroupCheckmark,
                          })
                        : w
                          ? (0, c.jsx)(m.zx, {
                                size: m.zx.Sizes.TINY,
                                look: m.zx.Looks.LINK,
                                color: m.zx.Colors.LINK,
                                className: q.connectionsChecksGroupRetryButton,
                                children: H.intl.string(H.t["5911LS"]),
                            })
                          : P
                            ? (0, c.jsx)(R.Z, {
                                  direction: R.Z.Directions.RIGHT,
                                  className: q.connectionsChecksGroupCaret,
                              })
                            : (0, c.jsx)(C.Text, {
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: H.intl.string(H.t["cEts6+"]),
                              })),
                    (null == O ? void 0 : O.type) === z.ABu.STEAM && (p = H.intl.string(H.t.NcZh6O)),
                    (0, c.jsxs)(
                        C.P3F,
                        {
                            className: i()(
                                q.connectionsChecksGroup,
                                j ? q.connectionsChecksGroupPassed : null,
                                P ? null : q.connectionsChecksGroupPlatformDisabled,
                            ),
                            onClick:
                                !j && P
                                    ? () => {
                                          var e, n;
                                          return (
                                              (n = null != (e = null == O ? void 0 : O.type) ? e : F.Kt),
                                              void ((0, D.Z)({
                                                  platformType: n,
                                                  location: "Verified Roles Connect Accounts Modal",
                                                  overrideUrl: null == E ? void 0 : E.role_connections_verification_url,
                                              }),
                                              s(K(Y({}, l), { [n]: Date.now() })),
                                              b(n),
                                              y(null != E ? E : null),
                                              t())
                                          );
                                      }
                                    : void 0,
                            children: [
                                !j && w
                                    ? (0, c.jsx)("div", {
                                          className: q.connectionsChecksGroupRequirementsNotMet,
                                          children: (0, c.jsx)(C.Text, {
                                              variant: "text-xs/normal",
                                              color: "always-white",
                                              children: H.intl.string(H.t.UB3hKi),
                                          }),
                                      })
                                    : null,
                                null != O ? (0, c.jsx)(Q, { platformType: O.type }) : null,
                                null != k ? (0, c.jsx)(f.Z, { user: k }) : null,
                                (0, c.jsxs)("div", {
                                    className: q.connectionsChecksGroupTextContainer,
                                    children: [
                                        (0, c.jsxs)("div", {
                                            className: q.connectionsChecksGroupTextNameContainer,
                                            children: [
                                                (0, c.jsx)(C.Text, {
                                                    variant: "text-md/medium",
                                                    color: "header-primary",
                                                    children:
                                                        null != (a = null == O ? void 0 : O.name)
                                                            ? a
                                                            : null == E
                                                              ? void 0
                                                              : E.name,
                                                }),
                                                d,
                                                null != p
                                                    ? (0, c.jsx)(C.ua7, {
                                                          text: p,
                                                          children: (e) =>
                                                              (0, c.jsx)(
                                                                  C.d3s,
                                                                  K(
                                                                      Y(
                                                                          {
                                                                              size: "xs",
                                                                              color: "currentColor",
                                                                          },
                                                                          e,
                                                                      ),
                                                                      {
                                                                          className:
                                                                              q.connectionsChecksGroupTextNameInfoIcon,
                                                                      },
                                                                  ),
                                                              ),
                                                      })
                                                    : null,
                                            ],
                                        }),
                                        v.map((e) => {
                                            let {
                                                connection_type: n,
                                                connection_metadata_field: t,
                                                operator: o,
                                                value: a,
                                                result: i,
                                                description: l,
                                            } = e;
                                            return (
                                                r()(null != t, "connectionMetadataField is null"),
                                                r()(null != o, "operator is null"),
                                                r()(null != a, "value is null"),
                                                (0, c.jsx)(
                                                    X,
                                                    {
                                                        connectionType: n,
                                                        connectionMetadataField: t,
                                                        operator: o,
                                                        value: a,
                                                        result: i,
                                                        description: l,
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
        { account: i, setShowPreviewInvisibleIcon: l, setShowPreviewMetadata: r } = e,
        [s, d] = o.useState(i.friendSync),
        [u, h] = o.useState(i.showActivity),
        [p, m] = o.useState(1 === i.metadataVisibility),
        [b, _] = o.useState(1 === i.visibility);
    (0, y.ZP)(() => {
        l(!b), r(p);
    });
    let f = N.Z.get(i.type);
    return (
        z.BFP.has(i.type) &&
            (n = (0, c.jsx)(C.j7V, {
                className: q.accountConnectedPrivacyOptionsSwitchItem,
                hideBorder: !0,
                value: s,
                onChange: (e) => {
                    d(e), x.Z.setFriendSync(i.type, i.id, e);
                },
                children: (0, c.jsx)(C.Text, {
                    variant: "text-sm/semibold",
                    children: H.intl.string(H.t["+KCMSk"]),
                }),
            })),
        z.vbS.has(i.type) &&
            (t = (0, c.jsx)(C.j7V, {
                className: q.accountConnectedPrivacyOptionsSwitchItem,
                hideBorder: !0,
                value: u,
                onChange: (e) => {
                    h(e), x.Z.setShowActivity(i.type, i.id, e);
                },
                children: (0, c.jsx)(C.Text, {
                    variant: "text-sm/semibold",
                    children: H.intl.format(H.t["6u6J0t"], { platform: f.name }),
                }),
            })),
        !0 === f.hasMetadata &&
            (a = (0, c.jsx)(C.j7V, {
                className: q.accountConnectedPrivacyOptionsSwitchItem,
                hideBorder: !0,
                value: p,
                disabled: !b,
                onChange: (e) => {
                    r(e), m(e), x.Z.setMetadataVisibility(i.type, i.id, +!!e);
                },
                children: (0, c.jsx)(C.Text, {
                    variant: "text-sm/semibold",
                    children: H.intl.string(H.t.FYKGsL),
                }),
            })),
        (0, c.jsxs)("div", {
            className: q.accountConnectedPrivacyOptionsContainer,
            children: [
                (0, c.jsx)(C.j7V, {
                    className: q.accountConnectedPrivacyOptionsSwitchItem,
                    hideBorder: !0,
                    value: b,
                    onChange: (e) => {
                        l(!e), _(e), x.Z.setVisibility(i.type, i.id, +!!e);
                    },
                    children: (0, c.jsx)(C.Text, {
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
    let { transitionState: n, onClose: t, guildId: a, role: i } = e,
        [l, s] = o.useState(0),
        [d, h] = o.useState(null),
        [p, m] = o.useState(!1),
        [x, f] = o.useState(!0),
        [y, S] = o.useState(!1),
        [j, T] = o.useState(!0),
        [R, V] = o.useState(!1),
        D = (0, u.e7)([k.Z], () => k.Z.getAccounts()),
        M = (0, u.e7)([P.default], () => P.default.getId()),
        [F, K] = o.useState(null),
        [Q, X] = o.useState(null),
        [ee, en] = o.useState(null),
        et = (0, v.ZP)(),
        ec = (0, u.e7)([O.default], () => O.default.locale),
        eo = (0, u.e7)([G.ZP], () => G.ZP.getMember(a, M)),
        ea = Object.values((0, u.e7)([E.Z], () => E.Z.getMutableGuildChannelsForGuild(a))).filter(
            (e) => w.Z.can(z.Plq.VIEW_CHANNEL, e) && w.Z.can(z.Plq.SEND_MESSAGES, e) && (0, g.Z)(e).includes(i),
        );
    function ei() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        null == t || t(), e && (0, C.Mr3)(U.s$, C.z1l);
    }
    function el() {
        ei(!0), _.Z.open(z.oAB.AUTHORIZED_APPS);
    }
    function er() {
        ei(!0), _.Z.open(z.oAB.CONNECTIONS);
    }
    async function es() {
        S(!0), await b.Z.assignGuildRoleConnection(a, i.id);
    }
    function ed() {
        L.default.track(z.rMx.PASSPORT_CHALLENGE_STARTED, Y({ role_id: i.id }, (0, A.hH)(a)));
    }
    function eu(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        K(e),
            X(n),
            s(1),
            null != n &&
                (0, Z.nj)()
                    .then((e) => {
                        en(e);
                    })
                    .catch(() => {});
    }
    return (
        o.useEffect(() => {
            b.Z.fetchGuildRoleConnectionsEligibility(a, i.id).then((e) => {
                h(e), m(e.some((e) => e.every((e) => e.result))), f(!1);
            });
        }, [a, i.id, D]),
        o.useEffect(() => {
            L.default.track(z.rMx.PASSPORT_CHALLENGE_VIEWED, Y({ role_id: i.id }, (0, A.hH)(a)));
        }, [a, i.id]),
        o.useEffect(() => {
            y &&
                null != eo &&
                eo.roles.includes(i.id) &&
                (S(!1),
                ea.length > 0 ? s(2) : null == t || t(),
                L.default.track(z.rMx.PASSPORT_CHALLENGE_FINISHED, Y({ role_id: i.id }, (0, A.hH)(a))));
        }, [y, ea.length, eo, a, i.id, t]),
        (0, c.jsxs)(C.Y0X, {
            size: C.CgR.MEDIUM,
            transitionState: n,
            "aria-label": H.intl.string(H.t.zOZh3d),
            className: q.modalRoot,
            parentComponent: "GuildRoleConnectionsConnectAccountsModal",
            children: [
                (function () {
                    switch (l) {
                        case 0:
                            return (0, c.jsxs)(C.xBx, {
                                className: q.header,
                                separator: !1,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: q.headerText,
                                        children: (0, c.jsx)(C.X6q, {
                                            variant: "heading-xl/semibold",
                                            children: H.intl.string(H.t.zOZh3d),
                                        }),
                                    }),
                                    (0, c.jsx)(C.olH, { onClick: () => ei() }),
                                ],
                            });
                        case 1: {
                            var e, n;
                            r()(null != F, "lastPlatformConnected is null");
                            let t =
                                null != (n = null == Q ? void 0 : Q.name)
                                    ? n
                                    : null == (e = N.Z.get(F))
                                      ? void 0
                                      : e.name;
                            return (0, c.jsxs)(C.xBx, {
                                className: q.header,
                                separator: !1,
                                children: [
                                    (0, c.jsx)(C.X6q, {
                                        variant: "heading-xl/semibold",
                                        className: q.headerText,
                                        children: H.intl.format(H.t.yQvgBA, { platformName: t }),
                                    }),
                                    (0, c.jsx)(C.olH, { onClick: () => ei() }),
                                ],
                            });
                        }
                        case 2:
                            return (0, c.jsxs)(C.xBx, {
                                className: q.header,
                                separator: !1,
                                children: [
                                    (0, c.jsx)(C.X6q, {
                                        variant: "heading-xl/extrabold",
                                        className: q.headerText,
                                        children: H.intl.string(H.t.najNd3),
                                    }),
                                    (0, c.jsx)(C.olH, { onClick: () => ei(!0) }),
                                ],
                            });
                        default:
                            return null;
                    }
                })(),
                (0, c.jsx)(C.qBt, {
                    step: l,
                    steps: [0, 1, 2],
                    children: (function () {
                        switch (l) {
                            case 0: {
                                let e = null != d && d.length > 1,
                                    n = null != d && 1 === d.length && 1 === d[0].length;
                                return (0, c.jsx)(C.hzk, {
                                    children:
                                        x || null == d
                                            ? (0, c.jsx)(C.$jN, { className: q.connectionsChecksGroups })
                                            : (0, c.jsxs)(c.Fragment, {
                                                  children: [
                                                      (0, c.jsx)(C.Text, {
                                                          variant: "text-md/medium",
                                                          color: "header-secondary",
                                                          children: H.intl.format(
                                                              n ? H.t.jHfRvb : e ? H.t.mOQ8k5 : H.t.U0olLi,
                                                              { roleName: i.name },
                                                          ),
                                                      }),
                                                      (0, c.jsx)(C.zJl, {
                                                          className: q.connectionsChecksGroups,
                                                          children: (0, c.jsx)(J, {
                                                              eligibilityStatesGroups: d,
                                                              onPlatformConnect: ed,
                                                              onPlatformConnected: eu,
                                                          }),
                                                      }),
                                                      (0, c.jsx)(C.Text, {
                                                          variant: "text-xs/normal",
                                                          className: q.footerText,
                                                          color: "header-secondary",
                                                          children: H.intl.format(H.t.gsgvxs, {
                                                              privacyPolicyUrl: z.EYA.PRIVACY,
                                                              onAuthorizedApplicationsClick: () => el(),
                                                              onConnectionsClick: () => er(),
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                });
                            }
                            case 1: {
                                r()(null != F, "lastPlatformConnected is null");
                                let e = D.find((e) => {
                                        let { type: n } = e;
                                        return F === n;
                                    }),
                                    n =
                                        null == ee
                                            ? void 0
                                            : ee.find((e) => {
                                                  let { application: n } = e;
                                                  return n.id === (null == Q ? void 0 : Q.id);
                                              });
                                return (0, c.jsxs)(C.hzk, {
                                    children: [
                                        (0, c.jsx)(C.Text, {
                                            variant: "text-md/normal",
                                            color: "header-secondary",
                                            children: H.intl.format(H.t.gsgvxs, {
                                                privacyPolicyUrl: z.EYA.PRIVACY,
                                                onAuthorizedApplicationsClick: () => el(),
                                                onConnectionsClick: () => er(),
                                            }),
                                        }),
                                        (0, c.jsx)("div", {
                                            className: q.accountConnectedContainer,
                                            children:
                                                null == e && null == n
                                                    ? (0, c.jsx)(C.$jN, { className: q.accountConnectedLoading })
                                                    : (0, c.jsxs)(c.Fragment, {
                                                          children: [
                                                              null != e
                                                                  ? (0, c.jsxs)(c.Fragment, {
                                                                        children: [
                                                                            (0, c.jsxs)("div", {
                                                                                className:
                                                                                    q.accountConnectedContainerChild,
                                                                                children: [
                                                                                    (0, c.jsx)(C.Text, {
                                                                                        variant: "eyebrow",
                                                                                        color: "header-secondary",
                                                                                        children: H.intl.string(
                                                                                            H.t.TOjkEh,
                                                                                        ),
                                                                                    }),
                                                                                    (0, c.jsx)(I.E3, {
                                                                                        connectedAccount: e,
                                                                                        userId: M,
                                                                                        theme: et,
                                                                                        locale: ec,
                                                                                        className:
                                                                                            q.accountConnectedPreviewConnectedUserAccount,
                                                                                        showMetadata: j,
                                                                                        showInvisibleIcon: R,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, c.jsxs)("div", {
                                                                                className:
                                                                                    q.accountConnectedContainerChild,
                                                                                children: [
                                                                                    (0, c.jsx)(C.Text, {
                                                                                        variant: "eyebrow",
                                                                                        color: "header-secondary",
                                                                                        children: H.intl.string(
                                                                                            H.t.jndPhY,
                                                                                        ),
                                                                                    }),
                                                                                    (0, c.jsx)($, {
                                                                                        account: e,
                                                                                        setShowPreviewInvisibleIcon: V,
                                                                                        setShowPreviewMetadata: T,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    })
                                                                  : null,
                                                              null != n
                                                                  ? (0, c.jsxs)("div", {
                                                                        className: q.accountConnectedContainerChild,
                                                                        children: [
                                                                            (0, c.jsxs)("div", {
                                                                                className: q.accountConnectedHeader,
                                                                                children: [
                                                                                    (0, c.jsx)(C.Text, {
                                                                                        variant: "eyebrow",
                                                                                        color: "header-secondary",
                                                                                        children: H.intl.string(
                                                                                            H.t.TOjkEh,
                                                                                        ),
                                                                                    }),
                                                                                    (0, c.jsx)(C.ua7, {
                                                                                        text: H.intl.string(H.t.x3svVV),
                                                                                        children: (e) =>
                                                                                            (0, c.jsx)(
                                                                                                C.d3s,
                                                                                                Y(
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
                                                                            (0, c.jsx)(I.tH, {
                                                                                applicationRoleConnection: n,
                                                                                className:
                                                                                    q.accountConnectedPreviewConnectedUserAccount,
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
                                return (0, c.jsxs)(C.hzk, {
                                    children: [
                                        (0, c.jsxs)("div", {
                                            className: q.roleGranted,
                                            children: [
                                                (0, c.jsx)(B.Z, {
                                                    guildId: a,
                                                    className: q.verifiedIcon,
                                                    role: i,
                                                    size: 24,
                                                }),
                                                (0, c.jsx)(C.Text, {
                                                    variant: "text-lg/semibold",
                                                    color: "header-primary",
                                                    className: q.roleGrantedName,
                                                    children: i.name,
                                                }),
                                            ],
                                        }),
                                        (0, c.jsx)(C.zJl, {
                                            className: q.channelsGranted,
                                            children: ea.map((e) => (0, c.jsx)(W, { channel: e }, e.id)),
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
                    switch (l) {
                        case 0:
                            return (0, c.jsxs)(C.mzw, {
                                children: [
                                    (0, c.jsx)(C.zxk, {
                                        variant: "primary",
                                        text: H.intl.string(H.t["8SuVoK"]),
                                        onClick: () => es(),
                                        disabled: x || !p || y,
                                    }),
                                    n
                                        ? (0, c.jsx)("div", {
                                              className: q.manageConnectionsFooterButton,
                                              children: (0, c.jsx)(C.Avr, {
                                                  variant: "primary",
                                                  text: H.intl.string(H.t.VXV55O),
                                                  onClick: er,
                                              }),
                                          })
                                        : null,
                                ],
                            });
                        case 1:
                            return (0, c.jsx)(C.mzw, {
                                children: (0, c.jsx)(C.zxk, {
                                    variant: "primary",
                                    text: H.intl.string(H.t.i4jeWV),
                                    onClick: () => s(0),
                                }),
                            });
                        default:
                            return (0, c.jsxs)(C.mzw, {
                                children: [
                                    (0, c.jsx)(C.zxk, {
                                        variant: "primary",
                                        text: H.intl.string(H.t.cpT0Cg),
                                        onClick: () => ei(!0),
                                    }),
                                    n
                                        ? (0, c.jsx)("div", {
                                              className: q.manageConnectionsFooterButton,
                                              children: (0, c.jsx)(C.Avr, {
                                                  variant: "primary",
                                                  text: H.intl.string(H.t.VXV55O),
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

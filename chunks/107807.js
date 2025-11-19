t.d(n, { default: () => en }), t(953529), t(388685), t(642613), t(472816), t(794429);
var c = t(54381),
    o = t(473749),
    a = t(120356),
    l = t.n(a),
    i = t(512722),
    r = t.n(i),
    s = t(392711),
    d = t.n(s),
    u = t(442837),
    h = t(692547),
    m = t(28664),
    x = t(780384),
    C = t(755721),
    p = t(481060),
    N = t(457330),
    A = t(749210),
    v = t(99690),
    f = t(493773),
    j = t(410030),
    b = t(726542),
    _ = t(367907),
    T = t(385499),
    y = t(277800),
    g = t(471445),
    I = t(819602),
    E = t(706454),
    k = t(313789),
    O = t(518596),
    P = t(598077),
    S = t(314897),
    G = t(592125),
    w = t(553795),
    R = t(271383),
    Z = t(496675),
    B = t(259580),
    L = t(626135),
    M = t(228643),
    D = t(275759),
    H = t(231757),
    U = t(753194),
    F = t(225104),
    z = t(458034),
    V = t(856651),
    W = t(981631),
    Y = t(388032),
    q = t(670733);
function K(e) {
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
function J(e) {
    let { platformType: n, className: t } = e,
        o = (0, j.ZP)(),
        a = b.Z.get(n);
    return (0, c.jsx)("img", {
        src: (0, x.ap)(o) ? a.icon.lightSVG : a.icon.darkSVG,
        alt: "",
        className: l()(q.platformIcon, t),
    });
}
function Q(e) {
    let { channel: n, className: t } = e,
        o = (0, g.KS)(n);
    return (0, c.jsxs)("div", {
        className: l()(q.channelName, t),
        children: [
            null != o ? (0, c.jsx)(o, { className: q.channelNameIcon }) : null,
            (0, c.jsx)(p.Heading, {
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
        { connectionType: t, connectionMetadataField: o, operator: a, value: l, result: i, description: r } = e,
        s = null;
    if (null != r)
        switch (a) {
            case V.iO.LESS_THAN:
                s = Y.intl.format(Y.t["2p7dA3"], {
                    description: r,
                    count: Math.max(0, Number(l) - 1),
                });
                break;
            case V.iO.GREATER_THAN:
                s = Y.intl.format(Y.t["2p7dA3"], {
                    description: r,
                    count: Math.max(0, Number(l) + 1),
                });
                break;
            default:
                s = r;
        }
    else {
        let e;
        switch (a) {
            case V.iO.EQUAL:
                (e = Y.t["0BlpbA"]), t === W.ABu.PAYPAL && o === V.PC.PAYPAL_VERIFIED && (e = Y.t.dcSDhW);
                break;
            case V.iO.NOT_EQUAL:
                e = Y.t.otcpTN;
                break;
            case V.iO.LESS_THAN:
                e = Y.t.Ef35xs;
                break;
            case V.iO.GREATER_THAN:
                e = Y.t["8W9OXU"];
                break;
            case void 0:
            case null:
                return null;
        }
        if (
            null ==
            (s = (0, D.n_)({
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
        (n = i ? "header-secondary" : "text-danger"),
        (0, c.jsx)(p.Text, {
            variant: "text-xs/normal",
            color: n,
            className: q.connectionsCheck,
            children: s,
        })
    );
}
function $(e) {
    let { eligibilityStatesGroups: n, onPlatformConnect: t, onPlatformConnected: a } = e,
        [i, s] = o.useState({}),
        [u, x] = o.useState(0),
        [N, A] = o.useState(null),
        [f, j] = o.useState(null),
        _ = o.useMemo(() => d().flatten(n), [n]),
        y = o.useMemo(
            () =>
                d().groupBy(_, (e) =>
                    "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : ""),
                ),
            [_],
        );
    o.useEffect(() => x(Date.now()), [_]),
        o.useEffect(() => {
            if (null == N) return;
            let e = y["".concat(N).concat(null != f ? ":".concat(f.id) : "")];
            null != e && e.every((e) => e.result) && a(N, f);
        }, [y, N, f, a]);
    let g = (0, p.dQu)(h.Z.unsafe_rawColors.GREEN_330).hex();
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
                    x,
                    N = y[e],
                    f = N.find((e) => null == e.operator),
                    _ = N.filter((e) => null != e.operator),
                    I = (null == f || f.result) && _.every((e) => e.result),
                    E = N.find((e) => null != e.application),
                    k = b.Z.get(e),
                    O = null == k || k.enabled,
                    S = null == E ? void 0 : E.application,
                    G = (null == S ? void 0 : S.bot) != null ? new P.Z(S.bot) : null;
                D.SJ.includes(null != (n = null == S ? void 0 : S.id) ? n : "")
                    ? (d = (0, c.jsx)(U.Z, {
                          className: q.botTag,
                          color: g,
                          size: 16,
                      }))
                    : null != G &&
                      (d = (0, c.jsx)(T.Z, {
                          className: q.botTag,
                          verified: G.isVerifiedBot(),
                      }));
                let w = i[null != (o = null == k ? void 0 : k.type) ? o : V.Kt],
                    R = !I && null != w && w <= u;
                return (
                    (h = I
                        ? (0, c.jsx)(p.dz2, {
                              size: "md",
                              color: "currentColor",
                              className: q.connectionsChecksGroupCheckmark,
                          })
                        : R
                          ? (0, c.jsx)(C.zx, {
                                size: C.zx.Sizes.TINY,
                                look: C.zx.Looks.LINK,
                                color: C.zx.Colors.LINK,
                                className: q.connectionsChecksGroupRetryButton,
                                children: Y.intl.string(Y.t["5911Lb"]),
                            })
                          : O
                            ? (0, c.jsx)(B.Z, {
                                  direction: B.Z.Directions.RIGHT,
                                  className: q.connectionsChecksGroupCaret,
                              })
                            : (0, c.jsx)(p.Text, {
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: Y.intl.string(Y.t.cEts68),
                              })),
                    (null == k ? void 0 : k.type) === W.ABu.STEAM && (x = Y.intl.string(Y.t.NcZh6K)),
                    (0, c.jsxs)(
                        p.P3F,
                        {
                            className: l()(
                                q.connectionsChecksGroup,
                                I ? q.connectionsChecksGroupPassed : null,
                                O ? null : q.connectionsChecksGroupPlatformDisabled,
                            ),
                            onClick:
                                !I && O
                                    ? () => {
                                          var e, n, c, o;
                                          return (
                                              (n = null != (e = null == k ? void 0 : k.type) ? e : V.Kt),
                                              void ((0, H.Z)({
                                                  platformType: n,
                                                  location: "Verified Roles Connect Accounts Modal",
                                                  overrideUrl: null == S ? void 0 : S.role_connections_verification_url,
                                              }),
                                              s(
                                                  ((c = K({}, i)),
                                                  (o = o = { [n]: Date.now() }),
                                                  Object.getOwnPropertyDescriptors
                                                      ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(o))
                                                      : (function (e, n) {
                                                            var t = Object.keys(e);
                                                            if (Object.getOwnPropertySymbols) {
                                                                var c = Object.getOwnPropertySymbols(e);
                                                                t.push.apply(t, c);
                                                            }
                                                            return t;
                                                        })(Object(o)).forEach(function (e) {
                                                            Object.defineProperty(
                                                                c,
                                                                e,
                                                                Object.getOwnPropertyDescriptor(o, e),
                                                            );
                                                        }),
                                                  c),
                                              ),
                                              A(n),
                                              j(null != S ? S : null),
                                              t())
                                          );
                                      }
                                    : void 0,
                            children: [
                                !I && R
                                    ? (0, c.jsx)("div", {
                                          className: q.connectionsChecksGroupRequirementsNotMet,
                                          children: (0, c.jsx)(p.Text, {
                                              variant: "text-xs/normal",
                                              color: "always-white",
                                              children: Y.intl.string(Y.t.UB3hKo),
                                          }),
                                      })
                                    : null,
                                null != k ? (0, c.jsx)(J, { platformType: k.type }) : null,
                                null != G ? (0, c.jsx)(v.Z, { user: G }) : null,
                                (0, c.jsxs)("div", {
                                    className: q.connectionsChecksGroupTextContainer,
                                    children: [
                                        (0, c.jsxs)("div", {
                                            className: q.connectionsChecksGroupTextNameContainer,
                                            children: [
                                                (0, c.jsx)(p.Text, {
                                                    variant: "text-md/medium",
                                                    color: "header-primary",
                                                    children:
                                                        null != (a = null == k ? void 0 : k.name)
                                                            ? a
                                                            : null == S
                                                              ? void 0
                                                              : S.name,
                                                }),
                                                d,
                                                null != x
                                                    ? (0, c.jsx)(m.u, {
                                                          text: x,
                                                          children: (0, c.jsx)(p.d3s, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: q.connectionsChecksGroupTextNameInfoIcon,
                                                          }),
                                                      })
                                                    : null,
                                            ],
                                        }),
                                        _.map((e) => {
                                            let {
                                                connection_type: n,
                                                connection_metadata_field: t,
                                                operator: o,
                                                value: a,
                                                result: l,
                                                description: i,
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
                                                        result: l,
                                                        description: i,
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
        { account: l, setShowPreviewInvisibleIcon: i, setShowPreviewMetadata: r } = e,
        [s, d] = o.useState(l.friendSync),
        [u, h] = o.useState(l.showActivity),
        [m, x] = o.useState(1 === l.metadataVisibility),
        [C, A] = o.useState(1 === l.visibility);
    (0, f.ZP)(() => {
        i(!C), r(m);
    });
    let v = b.Z.get(l.type);
    return (
        W.BFP.has(l.type) &&
            (n = (0, c.jsx)(p.rsf, {
                label: Y.intl.string(Y.t["+KCMSi"]),
                checked: s,
                onChange: (e) => {
                    d(e), N.Z.setFriendSync(l.type, l.id, e);
                },
            })),
        W.vbS.has(l.type) &&
            (t = (0, c.jsx)(p.rsf, {
                label: Y.intl.format(Y.t["6u6J0q"], { platform: v.name }),
                checked: u,
                onChange: (e) => {
                    h(e), N.Z.setShowActivity(l.type, l.id, e);
                },
            })),
        !0 === v.hasMetadata &&
            (a = (0, c.jsx)(p.rsf, {
                label: Y.intl.string(Y.t.FYKGsL),
                checked: m,
                disabled: !C,
                onChange: (e) => {
                    r(e), x(e), N.Z.setMetadataVisibility(l.type, l.id, +!!e);
                },
            })),
        (0, c.jsxs)("div", {
            className: q.accountConnectedPrivacyOptionsContainer,
            children: [
                (0, c.jsx)(p.rsf, {
                    label: Y.intl.string(Y.t.f7yOAX),
                    checked: C,
                    onChange: (e) => {
                        i(!e), A(e), N.Z.setVisibility(l.type, l.id, +!!e);
                    },
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
        [i, s] = o.useState(0),
        [d, h] = o.useState(null),
        [x, C] = o.useState(!1),
        [N, v] = o.useState(!0),
        [f, T] = o.useState(!1),
        [g, P] = o.useState(!0),
        [B, D] = o.useState(!1),
        H = (0, u.e7)([w.Z], () => w.Z.getAccounts()),
        U = (0, u.e7)([S.default], () => S.default.getId()),
        [V, J] = o.useState(null),
        [X, en] = o.useState(null),
        [et, ec] = o.useState(null),
        eo = (0, j.ZP)(),
        ea = (0, u.e7)([E.default], () => E.default.locale),
        el = (0, u.e7)([R.ZP], () => R.ZP.getMember(a, U)),
        ei = Object.values((0, u.e7)([G.Z], () => G.Z.getMutableGuildChannelsForGuild(a))).filter(
            (e) => Z.Z.can(W.Plq.VIEW_CHANNEL, e) && Z.Z.can(W.Plq.SEND_MESSAGES, e) && (0, y.Z)(e).includes(l),
        );
    function er() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        null == t || t(), e && (0, p.Mr3)(z.s$, p.z1l);
    }
    function es() {
        er(!0), (0, O.openUserSettings)(k.n.AUTHORIZED_APPS_PANEL, { section: W.oAB.AUTHORIZED_APPS });
    }
    function ed() {
        er(!0), (0, O.openUserSettings)(k.n.CONNECTIONS_PANEL, { section: W.oAB.CONNECTIONS });
    }
    async function eu() {
        T(!0), await A.Z.assignGuildRoleConnection(a, l.id);
    }
    function eh() {
        L.default.track(W.rMx.PASSPORT_CHALLENGE_STARTED, K({ role_id: l.id }, (0, _.hH)(a)));
    }
    function em(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        J(e),
            en(n),
            s(1),
            null != n &&
                (0, M.nj)()
                    .then((e) => {
                        ec(e);
                    })
                    .catch(() => {});
    }
    return (
        o.useEffect(() => {
            A.Z.fetchGuildRoleConnectionsEligibility(a, l.id).then((e) => {
                h(e), C(e.some((e) => e.every((e) => e.result))), v(!1);
            });
        }, [a, l.id, H]),
        o.useEffect(() => {
            L.default.track(W.rMx.PASSPORT_CHALLENGE_VIEWED, K({ role_id: l.id }, (0, _.hH)(a)));
        }, [a, l.id]),
        o.useEffect(() => {
            f &&
                null != el &&
                el.roles.includes(l.id) &&
                (T(!1),
                ei.length > 0 ? s(2) : null == t || t(),
                L.default.track(W.rMx.PASSPORT_CHALLENGE_FINISHED, K({ role_id: l.id }, (0, _.hH)(a))));
        }, [f, ei.length, el, a, l.id, t]),
        (0, c.jsxs)(p.Y0X, {
            size: p.CgR.MEDIUM,
            transitionState: n,
            "aria-label": Y.intl.string(Y.t.zOZh3R),
            className: q.modalRoot,
            parentComponent: "GuildRoleConnectionsConnectAccountsModal",
            children: [
                (function () {
                    switch (i) {
                        case 0:
                            return (0, c.jsxs)(p.xBx, {
                                className: q.header,
                                separator: !1,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: q.headerText,
                                        children: (0, c.jsx)(p.Heading, {
                                            variant: "heading-xl/semibold",
                                            children: Y.intl.string(Y.t.zOZh3R),
                                        }),
                                    }),
                                    (0, c.jsx)(p.olH, { onClick: () => er() }),
                                ],
                            });
                        case 1: {
                            var e, n;
                            r()(null != V, "lastPlatformConnected is null");
                            let t =
                                null != (n = null == X ? void 0 : X.name)
                                    ? n
                                    : null == (e = b.Z.get(V))
                                      ? void 0
                                      : e.name;
                            return (0, c.jsxs)(p.xBx, {
                                className: q.header,
                                separator: !1,
                                children: [
                                    (0, c.jsx)(p.Heading, {
                                        variant: "heading-xl/semibold",
                                        className: q.headerText,
                                        children: Y.intl.format(Y.t.yQvgBO, { platformName: t }),
                                    }),
                                    (0, c.jsx)(p.olH, { onClick: () => er() }),
                                ],
                            });
                        }
                        case 2:
                            return (0, c.jsxs)(p.xBx, {
                                className: q.header,
                                separator: !1,
                                children: [
                                    (0, c.jsx)(p.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: q.headerText,
                                        children: Y.intl.string(Y.t.najNdz),
                                    }),
                                    (0, c.jsx)(p.olH, { onClick: () => er(!0) }),
                                ],
                            });
                        default:
                            return null;
                    }
                })(),
                (0, c.jsx)(p.qBt, {
                    step: i,
                    steps: [0, 1, 2],
                    children: (function () {
                        switch (i) {
                            case 0: {
                                let e = null != d && d.length > 1,
                                    n = null != d && 1 === d.length && 1 === d[0].length;
                                return (0, c.jsx)(p.hzk, {
                                    children:
                                        N || null == d
                                            ? (0, c.jsx)(p.$jN, { className: q.connectionsChecksGroups })
                                            : (0, c.jsxs)(c.Fragment, {
                                                  children: [
                                                      (0, c.jsx)(p.Text, {
                                                          variant: "text-md/medium",
                                                          color: "header-secondary",
                                                          children: Y.intl.format(
                                                              n ? Y.t.jHfRvZ : e ? Y.t["mOQ8k+"] : Y.t.U0olLg,
                                                              { roleName: l.name },
                                                          ),
                                                      }),
                                                      (0, c.jsx)(p.zJl, {
                                                          className: q.connectionsChecksGroups,
                                                          children: (0, c.jsx)($, {
                                                              eligibilityStatesGroups: d,
                                                              onPlatformConnect: eh,
                                                              onPlatformConnected: em,
                                                          }),
                                                      }),
                                                      (0, c.jsx)(p.Text, {
                                                          variant: "text-xs/normal",
                                                          className: q.footerText,
                                                          color: "header-secondary",
                                                          children: Y.intl.format(Y.t.gsgvxh, {
                                                              privacyPolicyUrl: W.EYA.PRIVACY,
                                                              onAuthorizedApplicationsClick: () => es(),
                                                              onConnectionsClick: () => ed(),
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                });
                            }
                            case 1: {
                                r()(null != V, "lastPlatformConnected is null");
                                let e = H.find((e) => {
                                        let { type: n } = e;
                                        return V === n;
                                    }),
                                    n =
                                        null == et
                                            ? void 0
                                            : et.find((e) => {
                                                  let { application: n } = e;
                                                  return n.id === (null == X ? void 0 : X.id);
                                              });
                                return (0, c.jsxs)(p.hzk, {
                                    children: [
                                        (0, c.jsx)(p.Text, {
                                            variant: "text-md/normal",
                                            color: "header-secondary",
                                            children: Y.intl.format(Y.t.gsgvxh, {
                                                privacyPolicyUrl: W.EYA.PRIVACY,
                                                onAuthorizedApplicationsClick: () => es(),
                                                onConnectionsClick: () => ed(),
                                            }),
                                        }),
                                        (0, c.jsx)("div", {
                                            className: q.accountConnectedContainer,
                                            children:
                                                null == e && null == n
                                                    ? (0, c.jsx)(p.$jN, { className: q.accountConnectedLoading })
                                                    : (0, c.jsxs)(c.Fragment, {
                                                          children: [
                                                              null != e
                                                                  ? (0, c.jsxs)(c.Fragment, {
                                                                        children: [
                                                                            (0, c.jsxs)("div", {
                                                                                className:
                                                                                    q.accountConnectedContainerChild,
                                                                                children: [
                                                                                    (0, c.jsx)(p.Text, {
                                                                                        variant: "eyebrow",
                                                                                        color: "header-secondary",
                                                                                        children: Y.intl.string(
                                                                                            Y.t.TOjkEg,
                                                                                        ),
                                                                                    }),
                                                                                    (0, c.jsx)(I.E3, {
                                                                                        connectedAccount: e,
                                                                                        userId: U,
                                                                                        theme: eo,
                                                                                        locale: ea,
                                                                                        className:
                                                                                            q.accountConnectedPreviewConnectedUserAccount,
                                                                                        showMetadata: g,
                                                                                        showInvisibleIcon: B,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, c.jsxs)("div", {
                                                                                className:
                                                                                    q.accountConnectedContainerChild,
                                                                                children: [
                                                                                    (0, c.jsx)(p.Text, {
                                                                                        variant: "eyebrow",
                                                                                        color: "header-secondary",
                                                                                        children: Y.intl.string(
                                                                                            Y.t.jndPhX,
                                                                                        ),
                                                                                    }),
                                                                                    (0, c.jsx)(ee, {
                                                                                        account: e,
                                                                                        setShowPreviewInvisibleIcon: D,
                                                                                        setShowPreviewMetadata: P,
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
                                                                                    (0, c.jsx)(p.Text, {
                                                                                        variant: "eyebrow",
                                                                                        color: "header-secondary",
                                                                                        children: Y.intl.string(
                                                                                            Y.t.TOjkEg,
                                                                                        ),
                                                                                    }),
                                                                                    (0, c.jsx)(m.u, {
                                                                                        text: Y.intl.string(Y.t.x3svVc),
                                                                                        children: (0, c.jsx)(p.d3s, {
                                                                                            size: "xs",
                                                                                            color: "currentColor",
                                                                                        }),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, c.jsx)(I.tH, {
                                                                                applicationRoleConnection: n,
                                                                                className:
                                                                                    q.accountConnectedPreviewConnectedUserAccount,
                                                                                locale: ea,
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
                                            className: q.roleGranted,
                                            children: [
                                                (0, c.jsx)(F.Z, {
                                                    guildId: a,
                                                    className: q.verifiedIcon,
                                                    role: l,
                                                    size: 24,
                                                }),
                                                (0, c.jsx)(p.Text, {
                                                    variant: "text-lg/semibold",
                                                    color: "header-primary",
                                                    className: q.roleGrantedName,
                                                    children: l.name,
                                                }),
                                            ],
                                        }),
                                        (0, c.jsx)(p.zJl, {
                                            className: q.channelsGranted,
                                            children: ei.map((e) => (0, c.jsx)(Q, { channel: e }, e.id)),
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
                    switch (i) {
                        case 0:
                            return (0, c.jsxs)(p.mzw, {
                                children: [
                                    (0, c.jsx)(p.Button, {
                                        variant: "primary",
                                        text: Y.intl.string(Y.t["8SuVoE"]),
                                        onClick: () => eu(),
                                        disabled: N || !x || f,
                                    }),
                                    n
                                        ? (0, c.jsx)("div", {
                                              className: q.manageConnectionsFooterButton,
                                              children: (0, c.jsx)(p.Avr, {
                                                  variant: "primary",
                                                  text: Y.intl.string(Y.t.VXV55P),
                                                  onClick: ed,
                                              }),
                                          })
                                        : null,
                                ],
                            });
                        case 1:
                            return (0, c.jsx)(p.mzw, {
                                children: (0, c.jsx)(p.Button, {
                                    variant: "primary",
                                    text: Y.intl.string(Y.t.i4jeWR),
                                    onClick: () => s(0),
                                }),
                            });
                        default:
                            return (0, c.jsxs)(p.mzw, {
                                children: [
                                    (0, c.jsx)(p.Button, {
                                        variant: "primary",
                                        text: Y.intl.string(Y.t.cpT0Cq),
                                        onClick: () => er(!0),
                                    }),
                                    n
                                        ? (0, c.jsx)("div", {
                                              className: q.manageConnectionsFooterButton,
                                              children: (0, c.jsx)(p.Avr, {
                                                  variant: "primary",
                                                  text: Y.intl.string(Y.t.VXV55P),
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

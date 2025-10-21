t.d(n, { default: () => en }), t(953529), t(388685), t(642613), t(472816), t(794429);
var c = t(951288),
    o = t(647438),
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
    k = t(706454),
    E = t(313789),
    O = t(518596),
    S = t(598077),
    P = t(314897),
    G = t(592125),
    w = t(553795),
    R = t(271383),
    Z = t(496675),
    L = t(259580),
    M = t(626135),
    B = t(228643),
    D = t(275759),
    H = t(231757),
    U = t(753194),
    F = t(225104),
    z = t(458034),
    V = t(856651),
    Y = t(981631),
    W = t(388032),
    K = t(92264);
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
function Q(e) {
    let { platformType: n, className: t } = e,
        o = (0, j.ZP)(),
        a = b.Z.get(n);
    return (0, c.jsx)("img", {
        src: (0, x.ap)(o) ? a.icon.lightSVG : a.icon.darkSVG,
        alt: "",
        className: l()(K.platformIcon, t),
    });
}
function J(e) {
    let { channel: n, className: t } = e,
        o = (0, g.KS)(n);
    return (0, c.jsxs)("div", {
        className: l()(K.channelName, t),
        children: [
            null != o ? (0, c.jsx)(o, { className: K.channelNameIcon }) : null,
            (0, c.jsx)(p.Heading, {
                variant: "heading-lg/semibold",
                color: "text-default",
                className: K.channelNameText,
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
                s = W.intl.format(W.t["2p7dAw"], {
                    description: r,
                    count: Math.max(0, Number(l) - 1),
                });
                break;
            case V.iO.GREATER_THAN:
                s = W.intl.format(W.t["2p7dAw"], {
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
                (e = W.t["0BlpbG"]), t === Y.ABu.PAYPAL && o === V.PC.PAYPAL_VERIFIED && (e = W.t.dcSDhY);
                break;
            case V.iO.NOT_EQUAL:
                e = W.t.otcpTE;
                break;
            case V.iO.LESS_THAN:
                e = W.t.Ef35xs;
                break;
            case V.iO.GREATER_THAN:
                e = W.t["8W9OXV"];
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
            className: K.connectionsCheck,
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
                    k = N.find((e) => null != e.application),
                    E = b.Z.get(e),
                    O = null == E || E.enabled,
                    P = null == k ? void 0 : k.application,
                    G = (null == P ? void 0 : P.bot) != null ? new S.Z(P.bot) : null;
                D.SJ.includes(null != (n = null == P ? void 0 : P.id) ? n : "")
                    ? (d = (0, c.jsx)(U.Z, {
                          className: K.botTag,
                          color: g,
                          size: 16,
                      }))
                    : null != G &&
                      (d = (0, c.jsx)(T.Z, {
                          className: K.botTag,
                          verified: G.isVerifiedBot(),
                      }));
                let w = i[null != (o = null == E ? void 0 : E.type) ? o : V.Kt],
                    R = !I && null != w && w <= u;
                return (
                    (h = I
                        ? (0, c.jsx)(p.dz2, {
                              size: "md",
                              color: "currentColor",
                              className: K.connectionsChecksGroupCheckmark,
                          })
                        : R
                          ? (0, c.jsx)(C.zx, {
                                size: C.zx.Sizes.TINY,
                                look: C.zx.Looks.LINK,
                                color: C.zx.Colors.LINK,
                                className: K.connectionsChecksGroupRetryButton,
                                children: W.intl.string(W.t["5911LS"]),
                            })
                          : O
                            ? (0, c.jsx)(L.Z, {
                                  direction: L.Z.Directions.RIGHT,
                                  className: K.connectionsChecksGroupCaret,
                              })
                            : (0, c.jsx)(p.Text, {
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: W.intl.string(W.t["cEts6+"]),
                              })),
                    (null == E ? void 0 : E.type) === Y.ABu.STEAM && (x = W.intl.string(W.t.NcZh6O)),
                    (0, c.jsxs)(
                        p.P3F,
                        {
                            className: l()(
                                K.connectionsChecksGroup,
                                I ? K.connectionsChecksGroupPassed : null,
                                O ? null : K.connectionsChecksGroupPlatformDisabled,
                            ),
                            onClick:
                                !I && O
                                    ? () => {
                                          var e, n, c, o;
                                          return (
                                              (n = null != (e = null == E ? void 0 : E.type) ? e : V.Kt),
                                              void ((0, H.Z)({
                                                  platformType: n,
                                                  location: "Verified Roles Connect Accounts Modal",
                                                  overrideUrl: null == P ? void 0 : P.role_connections_verification_url,
                                              }),
                                              s(
                                                  ((c = q({}, i)),
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
                                              j(null != P ? P : null),
                                              t())
                                          );
                                      }
                                    : void 0,
                            children: [
                                !I && R
                                    ? (0, c.jsx)("div", {
                                          className: K.connectionsChecksGroupRequirementsNotMet,
                                          children: (0, c.jsx)(p.Text, {
                                              variant: "text-xs/normal",
                                              color: "always-white",
                                              children: W.intl.string(W.t.UB3hKi),
                                          }),
                                      })
                                    : null,
                                null != E ? (0, c.jsx)(Q, { platformType: E.type }) : null,
                                null != G ? (0, c.jsx)(v.Z, { user: G }) : null,
                                (0, c.jsxs)("div", {
                                    className: K.connectionsChecksGroupTextContainer,
                                    children: [
                                        (0, c.jsxs)("div", {
                                            className: K.connectionsChecksGroupTextNameContainer,
                                            children: [
                                                (0, c.jsx)(p.Text, {
                                                    variant: "text-md/medium",
                                                    color: "header-primary",
                                                    children:
                                                        null != (a = null == E ? void 0 : E.name)
                                                            ? a
                                                            : null == P
                                                              ? void 0
                                                              : P.name,
                                                }),
                                                d,
                                                null != x
                                                    ? (0, c.jsx)(m.u, {
                                                          text: x,
                                                          children: (0, c.jsx)(p.d3s, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: K.connectionsChecksGroupTextNameInfoIcon,
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
        Y.BFP.has(l.type) &&
            (n = (0, c.jsx)(p.rsf, {
                label: W.intl.string(W.t["+KCMSk"]),
                checked: s,
                onChange: (e) => {
                    d(e), N.Z.setFriendSync(l.type, l.id, e);
                },
            })),
        Y.vbS.has(l.type) &&
            (t = (0, c.jsx)(p.rsf, {
                label: W.intl.format(W.t["6u6J0t"], { platform: v.name }),
                checked: u,
                onChange: (e) => {
                    h(e), N.Z.setShowActivity(l.type, l.id, e);
                },
            })),
        !0 === v.hasMetadata &&
            (a = (0, c.jsx)(p.rsf, {
                label: W.intl.string(W.t.FYKGsL),
                checked: m,
                disabled: !C,
                onChange: (e) => {
                    r(e), x(e), N.Z.setMetadataVisibility(l.type, l.id, +!!e);
                },
            })),
        (0, c.jsxs)("div", {
            className: K.accountConnectedPrivacyOptionsContainer,
            children: [
                (0, c.jsx)(p.rsf, {
                    label: W.intl.string(W.t.f7yOAQ),
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
        [g, S] = o.useState(!0),
        [L, D] = o.useState(!1),
        H = (0, u.e7)([w.Z], () => w.Z.getAccounts()),
        U = (0, u.e7)([P.default], () => P.default.getId()),
        [V, Q] = o.useState(null),
        [X, en] = o.useState(null),
        [et, ec] = o.useState(null),
        eo = (0, j.ZP)(),
        ea = (0, u.e7)([k.default], () => k.default.locale),
        el = (0, u.e7)([R.ZP], () => R.ZP.getMember(a, U)),
        ei = Object.values((0, u.e7)([G.Z], () => G.Z.getMutableGuildChannelsForGuild(a))).filter(
            (e) => Z.Z.can(Y.Plq.VIEW_CHANNEL, e) && Z.Z.can(Y.Plq.SEND_MESSAGES, e) && (0, y.Z)(e).includes(l),
        );
    function er() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        null == t || t(), e && (0, p.Mr3)(z.s$, p.z1l);
    }
    function es() {
        er(!0), (0, O.openUserSettings)(E.n.AUTHORIZED_APPS_PANEL, { section: Y.oAB.AUTHORIZED_APPS });
    }
    function ed() {
        er(!0), (0, O.openUserSettings)(E.n.CONNECTIONS_PANEL, { section: Y.oAB.CONNECTIONS });
    }
    async function eu() {
        T(!0), await A.Z.assignGuildRoleConnection(a, l.id);
    }
    function eh() {
        M.default.track(Y.rMx.PASSPORT_CHALLENGE_STARTED, q({ role_id: l.id }, (0, _.hH)(a)));
    }
    function em(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        Q(e),
            en(n),
            s(1),
            null != n &&
                (0, B.nj)()
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
            M.default.track(Y.rMx.PASSPORT_CHALLENGE_VIEWED, q({ role_id: l.id }, (0, _.hH)(a)));
        }, [a, l.id]),
        o.useEffect(() => {
            f &&
                null != el &&
                el.roles.includes(l.id) &&
                (T(!1),
                ei.length > 0 ? s(2) : null == t || t(),
                M.default.track(Y.rMx.PASSPORT_CHALLENGE_FINISHED, q({ role_id: l.id }, (0, _.hH)(a))));
        }, [f, ei.length, el, a, l.id, t]),
        (0, c.jsxs)(p.Y0X, {
            size: p.CgR.MEDIUM,
            transitionState: n,
            "aria-label": W.intl.string(W.t.zOZh3d),
            className: K.modalRoot,
            parentComponent: "GuildRoleConnectionsConnectAccountsModal",
            children: [
                (function () {
                    switch (i) {
                        case 0:
                            return (0, c.jsxs)(p.xBx, {
                                className: K.header,
                                separator: !1,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: K.headerText,
                                        children: (0, c.jsx)(p.Heading, {
                                            variant: "heading-xl/semibold",
                                            children: W.intl.string(W.t.zOZh3d),
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
                                className: K.header,
                                separator: !1,
                                children: [
                                    (0, c.jsx)(p.Heading, {
                                        variant: "heading-xl/semibold",
                                        className: K.headerText,
                                        children: W.intl.format(W.t.yQvgBA, { platformName: t }),
                                    }),
                                    (0, c.jsx)(p.olH, { onClick: () => er() }),
                                ],
                            });
                        }
                        case 2:
                            return (0, c.jsxs)(p.xBx, {
                                className: K.header,
                                separator: !1,
                                children: [
                                    (0, c.jsx)(p.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: K.headerText,
                                        children: W.intl.string(W.t.najNd3),
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
                                            ? (0, c.jsx)(p.$jN, { className: K.connectionsChecksGroups })
                                            : (0, c.jsxs)(c.Fragment, {
                                                  children: [
                                                      (0, c.jsx)(p.Text, {
                                                          variant: "text-md/medium",
                                                          color: "header-secondary",
                                                          children: W.intl.format(
                                                              n ? W.t.jHfRvb : e ? W.t.mOQ8k5 : W.t.U0olLi,
                                                              { roleName: l.name },
                                                          ),
                                                      }),
                                                      (0, c.jsx)(p.zJl, {
                                                          className: K.connectionsChecksGroups,
                                                          children: (0, c.jsx)($, {
                                                              eligibilityStatesGroups: d,
                                                              onPlatformConnect: eh,
                                                              onPlatformConnected: em,
                                                          }),
                                                      }),
                                                      (0, c.jsx)(p.Text, {
                                                          variant: "text-xs/normal",
                                                          className: K.footerText,
                                                          color: "header-secondary",
                                                          children: W.intl.format(W.t.gsgvxs, {
                                                              privacyPolicyUrl: Y.EYA.PRIVACY,
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
                                            children: W.intl.format(W.t.gsgvxs, {
                                                privacyPolicyUrl: Y.EYA.PRIVACY,
                                                onAuthorizedApplicationsClick: () => es(),
                                                onConnectionsClick: () => ed(),
                                            }),
                                        }),
                                        (0, c.jsx)("div", {
                                            className: K.accountConnectedContainer,
                                            children:
                                                null == e && null == n
                                                    ? (0, c.jsx)(p.$jN, { className: K.accountConnectedLoading })
                                                    : (0, c.jsxs)(c.Fragment, {
                                                          children: [
                                                              null != e
                                                                  ? (0, c.jsxs)(c.Fragment, {
                                                                        children: [
                                                                            (0, c.jsxs)("div", {
                                                                                className:
                                                                                    K.accountConnectedContainerChild,
                                                                                children: [
                                                                                    (0, c.jsx)(p.Text, {
                                                                                        variant: "eyebrow",
                                                                                        color: "header-secondary",
                                                                                        children: W.intl.string(
                                                                                            W.t.TOjkEh,
                                                                                        ),
                                                                                    }),
                                                                                    (0, c.jsx)(I.E3, {
                                                                                        connectedAccount: e,
                                                                                        userId: U,
                                                                                        theme: eo,
                                                                                        locale: ea,
                                                                                        className:
                                                                                            K.accountConnectedPreviewConnectedUserAccount,
                                                                                        showMetadata: g,
                                                                                        showInvisibleIcon: L,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, c.jsxs)("div", {
                                                                                className:
                                                                                    K.accountConnectedContainerChild,
                                                                                children: [
                                                                                    (0, c.jsx)(p.Text, {
                                                                                        variant: "eyebrow",
                                                                                        color: "header-secondary",
                                                                                        children: W.intl.string(
                                                                                            W.t.jndPhY,
                                                                                        ),
                                                                                    }),
                                                                                    (0, c.jsx)(ee, {
                                                                                        account: e,
                                                                                        setShowPreviewInvisibleIcon: D,
                                                                                        setShowPreviewMetadata: S,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    })
                                                                  : null,
                                                              null != n
                                                                  ? (0, c.jsxs)("div", {
                                                                        className: K.accountConnectedContainerChild,
                                                                        children: [
                                                                            (0, c.jsxs)("div", {
                                                                                className: K.accountConnectedHeader,
                                                                                children: [
                                                                                    (0, c.jsx)(p.Text, {
                                                                                        variant: "eyebrow",
                                                                                        color: "header-secondary",
                                                                                        children: W.intl.string(
                                                                                            W.t.TOjkEh,
                                                                                        ),
                                                                                    }),
                                                                                    (0, c.jsx)(m.u, {
                                                                                        text: W.intl.string(W.t.x3svVV),
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
                                                                                    K.accountConnectedPreviewConnectedUserAccount,
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
                                            className: K.roleGranted,
                                            children: [
                                                (0, c.jsx)(F.Z, {
                                                    guildId: a,
                                                    className: K.verifiedIcon,
                                                    role: l,
                                                    size: 24,
                                                }),
                                                (0, c.jsx)(p.Text, {
                                                    variant: "text-lg/semibold",
                                                    color: "header-primary",
                                                    className: K.roleGrantedName,
                                                    children: l.name,
                                                }),
                                            ],
                                        }),
                                        (0, c.jsx)(p.zJl, {
                                            className: K.channelsGranted,
                                            children: ei.map((e) => (0, c.jsx)(J, { channel: e }, e.id)),
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
                                        text: W.intl.string(W.t["8SuVoK"]),
                                        onClick: () => eu(),
                                        disabled: N || !x || f,
                                    }),
                                    n
                                        ? (0, c.jsx)("div", {
                                              className: K.manageConnectionsFooterButton,
                                              children: (0, c.jsx)(p.Avr, {
                                                  variant: "primary",
                                                  text: W.intl.string(W.t.VXV55O),
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
                                    text: W.intl.string(W.t.i4jeWV),
                                    onClick: () => s(0),
                                }),
                            });
                        default:
                            return (0, c.jsxs)(p.mzw, {
                                children: [
                                    (0, c.jsx)(p.Button, {
                                        variant: "primary",
                                        text: W.intl.string(W.t.cpT0Cg),
                                        onClick: () => er(!0),
                                    }),
                                    n
                                        ? (0, c.jsx)("div", {
                                              className: K.manageConnectionsFooterButton,
                                              children: (0, c.jsx)(p.Avr, {
                                                  variant: "primary",
                                                  text: W.intl.string(W.t.VXV55O),
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

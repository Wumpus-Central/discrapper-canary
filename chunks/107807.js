t.d(n, { default: () => $ }), t(953529), t(388685), t(642613), t(472816), t(794429);
var c = t(255367),
    o = t(73800),
    a = t(120356),
    l = t.n(a),
    i = t(512722),
    r = t.n(i),
    s = t(392711),
    d = t.n(s),
    u = t(442837),
    h = t(692547),
    m = t(780384),
    C = t(481060),
    x = t(457330),
    p = t(749210),
    f = t(230711),
    N = t(99690),
    b = t(493773),
    _ = t(410030),
    j = t(726542),
    v = t(367907),
    y = t(385499),
    A = t(277800),
    g = t(471445),
    k = t(819602),
    T = t(706454),
    I = t(598077),
    O = t(314897),
    S = t(592125),
    E = t(553795),
    P = t(271383),
    G = t(496675),
    w = t(259580),
    R = t(626135),
    L = t(228643),
    M = t(275759),
    Z = t(231757),
    V = t(753194),
    B = t(225104),
    z = t(458034),
    D = t(856651),
    F = t(981631),
    H = t(388032),
    U = t(268300);
function K(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            c = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (c = c.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            c.forEach(function (n) {
                var c;
                (c = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: c,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = c);
            });
    }
    return e;
}
function Y(e, n) {
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
function q(e) {
    let { platformType: n, className: t } = e,
        o = (0, _.ZP)(),
        a = j.Z.get(n);
    return (0, c.jsx)('img', {
        src: (0, m.ap)(o) ? a.icon.lightSVG : a.icon.darkSVG,
        alt: '',
        className: l()(U.platformIcon, t)
    });
}
function W(e) {
    let { channel: n, className: t } = e,
        o = (0, g.KS)(n);
    return (0, c.jsxs)('div', {
        className: l()(U.channelName, t),
        children: [
            null != o ? (0, c.jsx)(o, { className: U.channelNameIcon }) : null,
            (0, c.jsx)(C.X6q, {
                variant: 'heading-lg/semibold',
                color: 'text-normal',
                className: U.channelNameText,
                children: n.name
            })
        ]
    });
}
function X(e) {
    let n,
        { connectionType: t, connectionMetadataField: o, operator: a, value: l, result: i, description: r } = e,
        s = null;
    if (null != r)
        switch (a) {
            case D.iO.LESS_THAN:
                s = H.intl.format(H.t['2p7dAw'], {
                    description: r,
                    count: Math.max(0, Number(l) - 1)
                });
                break;
            case D.iO.GREATER_THAN:
                s = H.intl.format(H.t['2p7dAw'], {
                    description: r,
                    count: Math.max(0, Number(l) + 1)
                });
                break;
            default:
                s = r;
        }
    else {
        let e;
        switch (a) {
            case D.iO.EQUAL:
                (e = H.t['0BlpbG']), t === F.ABu.PAYPAL && o === D.PC.PAYPAL_VERIFIED && (e = H.t.dcSDhY);
                break;
            case D.iO.NOT_EQUAL:
                e = H.t.otcpTE;
                break;
            case D.iO.LESS_THAN:
                e = H.t.Ef35xs;
                break;
            case D.iO.GREATER_THAN:
                e = H.t['8W9OXV'];
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
                value: l
            }))
        )
            return null;
    }
    return (
        (n = i ? 'header-secondary' : 'text-danger'),
        (0, c.jsx)(C.Text, {
            variant: 'text-xs/normal',
            color: n,
            className: U.connectionsCheck,
            children: s
        })
    );
}
function Q(e) {
    let { eligibilityStatesGroups: n, onPlatformConnect: t, onPlatformConnected: a } = e,
        [i, s] = o.useState({}),
        [u, m] = o.useState(0),
        [x, p] = o.useState(null),
        [f, b] = o.useState(null),
        _ = o.useMemo(() => d().flatten(n), [n]),
        v = o.useMemo(() => d().groupBy(_, (e) => ''.concat(e.connection_type).concat(null != e.application_id ? ':'.concat(e.application_id) : '')), [_]);
    o.useEffect(() => m(Date.now()), [_]),
        o.useEffect(() => {
            if (null == x) return;
            let e = v[''.concat(x).concat(null != f ? ':'.concat(f.id) : '')];
            null != e && e.every((e) => e.result) && a(x, f);
        }, [v, x, f, a]);
    let A = (0, C.dQu)(h.Z.unsafe_rawColors.GREEN_330).hex();
    return (0, c.jsx)(c.Fragment, {
        children: Object.keys(v)
            .sort((e, n) => {
                let t = v[e].every((e) => e.result),
                    c = v[n].every((e) => e.result);
                return !0 === t && !1 === c ? 1 : !1 === t && !0 === c ? -1 : 0;
            })
            .map((e) => {
                var n, o, a;
                let d,
                    h,
                    m,
                    x = v[e],
                    f = x.find((e) => null == e.operator),
                    _ = x.filter((e) => null != e.operator),
                    g = (null == f || f.result) && _.every((e) => e.result),
                    k = x.find((e) => null != e.application),
                    T = j.Z.get(e),
                    O = null == T || T.enabled,
                    S = null == k ? void 0 : k.application,
                    E = (null == S ? void 0 : S.bot) != null ? new I.Z(S.bot) : null;
                M.SJ.includes(null != (n = null == S ? void 0 : S.id) ? n : '')
                    ? (d = (0, c.jsx)(V.Z, {
                          className: U.botTag,
                          color: A,
                          size: 16
                      }))
                    : null != E &&
                      (d = (0, c.jsx)(y.Z, {
                          className: U.botTag,
                          verified: E.isVerifiedBot()
                      }));
                let P = i[null != (o = null == T ? void 0 : T.type) ? o : D.Kt],
                    G = !g && null != P && P <= u;
                return (
                    (h = g
                        ? (0, c.jsx)(C.dz2, {
                              size: 'md',
                              color: 'currentColor',
                              className: U.connectionsChecksGroupCheckmark
                          })
                        : G
                          ? (0, c.jsx)(C.zxk, {
                                size: C.zxk.Sizes.TINY,
                                look: C.zxk.Looks.LINK,
                                color: C.zxk.Colors.LINK,
                                className: U.connectionsChecksGroupRetryButton,
                                children: H.intl.string(H.t['5911LS'])
                            })
                          : O
                            ? (0, c.jsx)(w.Z, {
                                  direction: w.Z.Directions.RIGHT,
                                  className: U.connectionsChecksGroupCaret
                              })
                            : (0, c.jsx)(C.Text, {
                                  variant: 'text-md/medium',
                                  color: 'text-muted',
                                  children: H.intl.string(H.t['cEts6+'])
                              })),
                    (null == T ? void 0 : T.type) === F.ABu.STEAM && (m = H.intl.string(H.t.NcZh6O)),
                    (0, c.jsxs)(
                        C.P3F,
                        {
                            className: l()(U.connectionsChecksGroup, g ? U.connectionsChecksGroupPassed : null, O ? null : U.connectionsChecksGroupPlatformDisabled),
                            onClick:
                                !g && O
                                    ? () => {
                                          var e, n;
                                          return (
                                              (n = null != (e = null == T ? void 0 : T.type) ? e : D.Kt),
                                              void ((0, Z.Z)({
                                                  platformType: n,
                                                  location: 'Verified Roles Connect Accounts Modal',
                                                  overrideUrl: null == S ? void 0 : S.role_connections_verification_url
                                              }),
                                              s(Y(K({}, i), { [n]: Date.now() })),
                                              p(n),
                                              b(null != S ? S : null),
                                              t())
                                          );
                                      }
                                    : void 0,
                            children: [
                                !g && G
                                    ? (0, c.jsx)('div', {
                                          className: U.connectionsChecksGroupRequirementsNotMet,
                                          children: (0, c.jsx)(C.Text, {
                                              variant: 'text-xs/normal',
                                              color: 'always-white',
                                              children: H.intl.string(H.t.UB3hKi)
                                          })
                                      })
                                    : null,
                                null != T ? (0, c.jsx)(q, { platformType: T.type }) : null,
                                null != E ? (0, c.jsx)(N.Z, { user: E }) : null,
                                (0, c.jsxs)('div', {
                                    className: U.connectionsChecksGroupTextContainer,
                                    children: [
                                        (0, c.jsxs)('div', {
                                            className: U.connectionsChecksGroupTextNameContainer,
                                            children: [
                                                (0, c.jsx)(C.Text, {
                                                    variant: 'text-md/medium',
                                                    color: 'header-primary',
                                                    children: null != (a = null == T ? void 0 : T.name) ? a : null == S ? void 0 : S.name
                                                }),
                                                d,
                                                null != m
                                                    ? (0, c.jsx)(C.ua7, {
                                                          text: m,
                                                          children: (e) =>
                                                              (0, c.jsx)(
                                                                  C.d3s,
                                                                  Y(
                                                                      K(
                                                                          {
                                                                              size: 'xs',
                                                                              color: 'currentColor'
                                                                          },
                                                                          e
                                                                      ),
                                                                      { className: U.connectionsChecksGroupTextNameInfoIcon }
                                                                  )
                                                              )
                                                      })
                                                    : null
                                            ]
                                        }),
                                        _.map((e) => {
                                            let { connection_type: n, connection_metadata_field: t, operator: o, value: a, result: l, description: i } = e;
                                            return (
                                                r()(null != t, 'connectionMetadataField is null'),
                                                r()(null != o, 'operator is null'),
                                                r()(null != a, 'value is null'),
                                                (0, c.jsx)(
                                                    X,
                                                    {
                                                        connectionType: n,
                                                        connectionMetadataField: t,
                                                        operator: o,
                                                        value: a,
                                                        result: l,
                                                        description: i
                                                    },
                                                    t
                                                )
                                            );
                                        })
                                    ]
                                }),
                                h
                            ]
                        },
                        e
                    )
                );
            })
    });
}
function J(e) {
    let n,
        t,
        a,
        { account: l, setShowPreviewInvisibleIcon: i, setShowPreviewMetadata: r } = e,
        [s, d] = o.useState(l.friendSync),
        [u, h] = o.useState(l.showActivity),
        [m, p] = o.useState(1 === l.metadataVisibility),
        [f, N] = o.useState(1 === l.visibility);
    (0, b.ZP)(() => {
        i(!f), r(m);
    });
    let _ = j.Z.get(l.type);
    return (
        F.BFP.has(l.type) &&
            (n = (0, c.jsx)(C.j7V, {
                className: U.accountConnectedPrivacyOptionsSwitchItem,
                hideBorder: !0,
                value: s,
                onChange: (e) => {
                    d(e), x.Z.setFriendSync(l.type, l.id, e);
                },
                children: (0, c.jsx)(C.Text, {
                    variant: 'text-sm/semibold',
                    children: H.intl.string(H.t['+KCMSk'])
                })
            })),
        F.vbS.has(l.type) &&
            (t = (0, c.jsx)(C.j7V, {
                className: U.accountConnectedPrivacyOptionsSwitchItem,
                hideBorder: !0,
                value: u,
                onChange: (e) => {
                    h(e), x.Z.setShowActivity(l.type, l.id, e);
                },
                children: (0, c.jsx)(C.Text, {
                    variant: 'text-sm/semibold',
                    children: H.intl.format(H.t['6u6J0t'], { platform: _.name })
                })
            })),
        !0 === _.hasMetadata &&
            (a = (0, c.jsx)(C.j7V, {
                className: U.accountConnectedPrivacyOptionsSwitchItem,
                hideBorder: !0,
                value: m,
                disabled: !f,
                onChange: (e) => {
                    r(e), p(e), x.Z.setMetadataVisibility(l.type, l.id, +!!e);
                },
                children: (0, c.jsx)(C.Text, {
                    variant: 'text-sm/semibold',
                    children: H.intl.string(H.t.FYKGsL)
                })
            })),
        (0, c.jsxs)('div', {
            className: U.accountConnectedPrivacyOptionsContainer,
            children: [
                (0, c.jsx)(C.j7V, {
                    className: U.accountConnectedPrivacyOptionsSwitchItem,
                    hideBorder: !0,
                    value: f,
                    onChange: (e) => {
                        i(!e), N(e), x.Z.setVisibility(l.type, l.id, +!!e);
                    },
                    children: (0, c.jsx)(C.Text, {
                        variant: 'text-sm/semibold',
                        children: H.intl.string(H.t.f7yOAQ)
                    })
                }),
                a,
                t,
                n
            ]
        })
    );
}
function $(e) {
    let { transitionState: n, onClose: t, guildId: a, role: l } = e,
        [i, s] = o.useState(0),
        [d, h] = o.useState(null),
        [m, x] = o.useState(!1),
        [N, b] = o.useState(!0),
        [y, g] = o.useState(!1),
        [I, w] = o.useState(!0),
        [M, Z] = o.useState(!1),
        V = (0, u.e7)([E.Z], () => E.Z.getAccounts()),
        D = (0, u.e7)([O.default], () => O.default.getId()),
        [Y, q] = o.useState(null),
        [X, $] = o.useState(null),
        [ee, en] = o.useState(null),
        et = (0, _.ZP)(),
        ec = (0, u.e7)([T.default], () => T.default.locale),
        eo = (0, u.e7)([P.ZP], () => P.ZP.getMember(a, D)),
        ea = Object.values((0, u.e7)([S.Z], () => S.Z.getMutableGuildChannelsForGuild(a))).filter((e) => G.Z.can(F.Plq.VIEW_CHANNEL, e) && G.Z.can(F.Plq.SEND_MESSAGES, e) && (0, A.Z)(e).includes(l));
    function el() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        null == t || t(), e && (0, C.Mr3)(z.s$, C.z1l);
    }
    function ei() {
        el(!0), f.Z.open(F.oAB.AUTHORIZED_APPS);
    }
    function er() {
        el(!0), f.Z.open(F.oAB.CONNECTIONS);
    }
    async function es() {
        g(!0), await p.Z.assignGuildRoleConnection(a, l.id);
    }
    function ed() {
        R.default.track(F.rMx.PASSPORT_CHALLENGE_STARTED, K({ role_id: l.id }, (0, v.hH)(a)));
    }
    function eu(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        q(e),
            $(n),
            s(1),
            null != n &&
                (0, L.nj)()
                    .then((e) => {
                        en(e);
                    })
                    .catch(() => {});
    }
    return (
        o.useEffect(() => {
            p.Z.fetchGuildRoleConnectionsEligibility(a, l.id).then((e) => {
                h(e), x(e.some((e) => e.every((e) => e.result))), b(!1);
            });
        }, [a, l.id, V]),
        o.useEffect(() => {
            R.default.track(F.rMx.PASSPORT_CHALLENGE_VIEWED, K({ role_id: l.id }, (0, v.hH)(a)));
        }, [a, l.id]),
        o.useEffect(() => {
            y && null != eo && eo.roles.includes(l.id) && (g(!1), ea.length > 0 ? s(2) : null == t || t(), R.default.track(F.rMx.PASSPORT_CHALLENGE_FINISHED, K({ role_id: l.id }, (0, v.hH)(a))));
        }, [y, ea.length, eo, a, l.id, t]),
        (0, c.jsxs)(C.Y0X, {
            size: C.CgR.MEDIUM,
            transitionState: n,
            'aria-label': H.intl.string(H.t.zOZh3d),
            className: U.modalRoot,
            children: [
                (function () {
                    switch (i) {
                        case 0:
                            return (0, c.jsxs)(C.xBx, {
                                className: U.header,
                                separator: !1,
                                children: [
                                    (0, c.jsx)('div', {
                                        className: U.headerText,
                                        children: (0, c.jsx)(C.X6q, {
                                            variant: 'heading-xl/extrabold',
                                            children: H.intl.string(H.t.zOZh3d)
                                        })
                                    }),
                                    (0, c.jsx)(C.olH, { onClick: () => el() })
                                ]
                            });
                        case 1: {
                            var e, n;
                            r()(null != Y, 'lastPlatformConnected is null');
                            let t = null != (n = null == X ? void 0 : X.name) ? n : null == (e = j.Z.get(Y)) ? void 0 : e.name;
                            return (0, c.jsxs)(C.xBx, {
                                className: U.header,
                                separator: !1,
                                children: [
                                    (0, c.jsx)(C.X6q, {
                                        variant: 'heading-xl/extrabold',
                                        className: U.headerText,
                                        children: H.intl.format(H.t.yQvgBA, { platformName: t })
                                    }),
                                    (0, c.jsx)(C.olH, { onClick: () => el() })
                                ]
                            });
                        }
                        case 2:
                            return (0, c.jsxs)(C.xBx, {
                                className: U.header,
                                separator: !1,
                                children: [
                                    (0, c.jsx)(C.X6q, {
                                        variant: 'heading-xl/extrabold',
                                        className: U.headerText,
                                        children: H.intl.string(H.t.najNd3)
                                    }),
                                    (0, c.jsx)(C.olH, { onClick: () => el(!0) })
                                ]
                            });
                        default:
                            return null;
                    }
                })(),
                (0, c.jsx)(C.qBt, {
                    step: i,
                    steps: [0, 1, 2],
                    children: (function () {
                        switch (i) {
                            case 0: {
                                let e = null != d && d.length > 1,
                                    n = null != d && 1 === d.length && 1 === d[0].length;
                                return (0, c.jsx)(C.hzk, {
                                    children:
                                        N || null == d
                                            ? (0, c.jsx)(C.$jN, { className: U.connectionsChecksGroups })
                                            : (0, c.jsxs)(c.Fragment, {
                                                  children: [
                                                      (0, c.jsx)(C.Text, {
                                                          variant: 'text-md/medium',
                                                          color: 'header-secondary',
                                                          children: H.intl.format(n ? H.t.jHfRvb : e ? H.t.mOQ8k5 : H.t.U0olLi, { roleName: l.name })
                                                      }),
                                                      (0, c.jsx)(C.zJl, {
                                                          className: U.connectionsChecksGroups,
                                                          children: (0, c.jsx)(Q, {
                                                              eligibilityStatesGroups: d,
                                                              onPlatformConnect: ed,
                                                              onPlatformConnected: eu
                                                          })
                                                      }),
                                                      (0, c.jsx)(C.Text, {
                                                          variant: 'text-xs/normal',
                                                          className: U.footerText,
                                                          color: 'header-secondary',
                                                          children: H.intl.format(H.t.gsgvxs, {
                                                              privacyPolicyUrl: F.EYA.PRIVACY,
                                                              onAuthorizedApplicationsClick: () => ei(),
                                                              onConnectionsClick: () => er()
                                                          })
                                                      })
                                                  ]
                                              })
                                });
                            }
                            case 1: {
                                r()(null != Y, 'lastPlatformConnected is null');
                                let e = V.find((e) => {
                                        let { type: n } = e;
                                        return Y === n;
                                    }),
                                    n =
                                        null == ee
                                            ? void 0
                                            : ee.find((e) => {
                                                  let { application: n } = e;
                                                  return n.id === (null == X ? void 0 : X.id);
                                              });
                                return (0, c.jsxs)(C.hzk, {
                                    children: [
                                        (0, c.jsx)(C.Text, {
                                            variant: 'text-md/normal',
                                            color: 'header-secondary',
                                            children: H.intl.format(H.t.gsgvxs, {
                                                privacyPolicyUrl: F.EYA.PRIVACY,
                                                onAuthorizedApplicationsClick: () => ei(),
                                                onConnectionsClick: () => er()
                                            })
                                        }),
                                        (0, c.jsx)('div', {
                                            className: U.accountConnectedContainer,
                                            children:
                                                null == e && null == n
                                                    ? (0, c.jsx)(C.$jN, { className: U.accountConnectedLoading })
                                                    : (0, c.jsxs)(c.Fragment, {
                                                          children: [
                                                              null != e
                                                                  ? (0, c.jsxs)(c.Fragment, {
                                                                        children: [
                                                                            (0, c.jsxs)('div', {
                                                                                className: U.accountConnectedContainerChild,
                                                                                children: [
                                                                                    (0, c.jsx)(C.Text, {
                                                                                        variant: 'eyebrow',
                                                                                        color: 'header-secondary',
                                                                                        children: H.intl.string(H.t.TOjkEh)
                                                                                    }),
                                                                                    (0, c.jsx)(k.E3, {
                                                                                        connectedAccount: e,
                                                                                        userId: D,
                                                                                        theme: et,
                                                                                        locale: ec,
                                                                                        className: U.accountConnectedPreviewConnectedUserAccount,
                                                                                        showMetadata: I,
                                                                                        showInvisibleIcon: M
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            (0, c.jsxs)('div', {
                                                                                className: U.accountConnectedContainerChild,
                                                                                children: [
                                                                                    (0, c.jsx)(C.Text, {
                                                                                        variant: 'eyebrow',
                                                                                        color: 'header-secondary',
                                                                                        children: H.intl.string(H.t.jndPhY)
                                                                                    }),
                                                                                    (0, c.jsx)(J, {
                                                                                        account: e,
                                                                                        setShowPreviewInvisibleIcon: Z,
                                                                                        setShowPreviewMetadata: w
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                  : null,
                                                              null != n
                                                                  ? (0, c.jsxs)('div', {
                                                                        className: U.accountConnectedContainerChild,
                                                                        children: [
                                                                            (0, c.jsxs)('div', {
                                                                                className: U.accountConnectedHeader,
                                                                                children: [
                                                                                    (0, c.jsx)(C.Text, {
                                                                                        variant: 'eyebrow',
                                                                                        color: 'header-secondary',
                                                                                        children: H.intl.string(H.t.TOjkEh)
                                                                                    }),
                                                                                    (0, c.jsx)(C.ua7, {
                                                                                        text: H.intl.string(H.t.x3svVV),
                                                                                        children: (e) =>
                                                                                            (0, c.jsx)(
                                                                                                C.d3s,
                                                                                                K(
                                                                                                    {
                                                                                                        size: 'xs',
                                                                                                        color: 'currentColor'
                                                                                                    },
                                                                                                    e
                                                                                                )
                                                                                            )
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            (0, c.jsx)(k.tH, {
                                                                                applicationRoleConnection: n,
                                                                                className: U.accountConnectedPreviewConnectedUserAccount,
                                                                                locale: ec
                                                                            })
                                                                        ]
                                                                    })
                                                                  : null
                                                          ]
                                                      })
                                        })
                                    ]
                                });
                            }
                            case 2:
                                return (0, c.jsxs)(C.hzk, {
                                    children: [
                                        (0, c.jsxs)('div', {
                                            className: U.roleGranted,
                                            children: [
                                                (0, c.jsx)(B.Z, {
                                                    guildId: a,
                                                    className: U.verifiedIcon,
                                                    role: l,
                                                    size: 24
                                                }),
                                                (0, c.jsx)(C.Text, {
                                                    variant: 'text-lg/semibold',
                                                    color: 'header-primary',
                                                    className: U.roleGrantedName,
                                                    children: l.name
                                                })
                                            ]
                                        }),
                                        (0, c.jsx)(C.zJl, {
                                            className: U.channelsGranted,
                                            children: ea.map((e) => (0, c.jsx)(W, { channel: e }, e.id))
                                        })
                                    ]
                                });
                            default:
                                return null;
                        }
                    })()
                }),
                (function () {
                    var e;
                    let n = null != (e = null == d ? void 0 : d.flat().some((e) => null == e.application_id)) && e;
                    switch (i) {
                        case 0:
                            return (0, c.jsxs)(C.mzw, {
                                children: [
                                    (0, c.jsx)(C.zxk, {
                                        color: C.Ttl.BRAND,
                                        onClick: () => es(),
                                        disabled: N || !m || y,
                                        children: H.intl.string(H.t['8SuVoK'])
                                    }),
                                    n
                                        ? (0, c.jsx)('div', {
                                              className: U.manageConnectionsFooterButton,
                                              children: (0, c.jsx)(C.zxk, {
                                                  look: C.iLD.LINK,
                                                  color: C.Ttl.LINK,
                                                  onClick: er,
                                                  children: H.intl.string(H.t.VXV55O)
                                              })
                                          })
                                        : null
                                ]
                            });
                        case 1:
                            return (0, c.jsx)(C.mzw, {
                                children: (0, c.jsx)(C.zxk, {
                                    color: C.Ttl.BRAND,
                                    onClick: () => s(0),
                                    children: H.intl.string(H.t.i4jeWV)
                                })
                            });
                        default:
                            return (0, c.jsxs)(C.mzw, {
                                children: [
                                    (0, c.jsx)(C.zxk, {
                                        color: C.Ttl.BRAND,
                                        onClick: () => el(!0),
                                        children: H.intl.string(H.t.cpT0Cg)
                                    }),
                                    n
                                        ? (0, c.jsx)('div', {
                                              className: U.manageConnectionsFooterButton,
                                              children: (0, c.jsx)(C.zxk, {
                                                  look: C.iLD.LINK,
                                                  color: C.Ttl.LINK,
                                                  onClick: er,
                                                  children: H.intl.string(H.t.VXV55O)
                                              })
                                          })
                                        : null
                                ]
                            });
                    }
                })()
            ]
        })
    );
}

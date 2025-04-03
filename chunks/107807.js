t.d(n, { default: () => $ }), t(266796), t(47120), t(230036), t(86693), t(536091);
var c = t(200651),
    o = t(192379),
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
    N = t(230711),
    f = t(99690),
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
    W = t(225104),
    B = t(458034),
    z = t(856651),
    D = t(981631),
    F = t(388032),
    H = t(268300);
function U(e) {
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
function Y(e) {
    let { platformType: n, className: t } = e,
        o = (0, _.ZP)(),
        a = j.Z.get(n);
    return (0, c.jsx)('img', {
        src: (0, m.ap)(o) ? a.icon.lightSVG : a.icon.darkSVG,
        alt: '',
        className: l()(H.platformIcon, t)
    });
}
function q(e) {
    let { channel: n, className: t } = e,
        o = (0, g.KS)(n);
    return (0, c.jsxs)('div', {
        className: l()(H.channelName, t),
        children: [
            null != o ? (0, c.jsx)(o, { className: H.channelNameIcon }) : null,
            (0, c.jsx)(C.X6q, {
                variant: 'heading-lg/semibold',
                color: 'text-normal',
                className: H.channelNameText,
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
            case z.iO.LESS_THAN:
                s = F.NW.format(F.t['2p7dAw'], {
                    description: r,
                    count: Math.max(0, Number(l) - 1)
                });
                break;
            case z.iO.GREATER_THAN:
                s = F.NW.format(F.t['2p7dAw'], {
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
            case z.iO.EQUAL:
                (e = F.t['0BlpbG']), t === D.ABu.PAYPAL && o === z.PC.PAYPAL_VERIFIED && (e = F.t.dcSDhY);
                break;
            case z.iO.NOT_EQUAL:
                e = F.t.otcpTE;
                break;
            case z.iO.LESS_THAN:
                e = F.t.Ef35xs;
                break;
            case z.iO.GREATER_THAN:
                e = F.t['8W9OXV'];
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
            className: H.connectionsCheck,
            children: s
        })
    );
}
function Q(e) {
    let { eligibilityStatesGroups: n, onPlatformConnect: t, onPlatformConnected: a } = e,
        [i, s] = o.useState({}),
        [u, m] = o.useState(0),
        [x, p] = o.useState(null),
        [N, b] = o.useState(null),
        _ = o.useMemo(() => d().flatten(n), [n]),
        v = o.useMemo(() => d().groupBy(_, (e) => ''.concat(e.connection_type).concat(null != e.application_id ? ':'.concat(e.application_id) : '')), [_]);
    o.useEffect(() => m(Date.now()), [_]),
        o.useEffect(() => {
            if (null == x) return;
            let e = v[''.concat(x).concat(null != N ? ':'.concat(N.id) : '')];
            null != e && e.every((e) => e.result) && a(x, N);
        }, [v, x, N, a]);
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
                    N = x.find((e) => null == e.operator),
                    _ = x.filter((e) => null != e.operator),
                    g = (null == N || N.result) && _.every((e) => e.result),
                    k = x.find((e) => null != e.application),
                    T = j.Z.get(e),
                    O = null == T || T.enabled,
                    S = null == k ? void 0 : k.application,
                    E = (null == S ? void 0 : S.bot) != null ? new I.Z(S.bot) : null;
                M.SJ.includes(null != (n = null == S ? void 0 : S.id) ? n : '')
                    ? (d = (0, c.jsx)(V.Z, {
                          className: H.botTag,
                          color: A,
                          size: 16
                      }))
                    : null != E &&
                      (d = (0, c.jsx)(y.Z, {
                          className: H.botTag,
                          verified: E.isVerifiedBot()
                      }));
                let P = i[null != (o = null == T ? void 0 : T.type) ? o : z.Kt],
                    G = !g && null != P && P <= u;
                return (
                    (h = g
                        ? (0, c.jsx)(C.dz2, {
                              size: 'md',
                              color: 'currentColor',
                              className: H.connectionsChecksGroupCheckmark
                          })
                        : G
                          ? (0, c.jsx)(C.zxk, {
                                size: C.zxk.Sizes.TINY,
                                look: C.zxk.Looks.LINK,
                                color: C.zxk.Colors.LINK,
                                className: H.connectionsChecksGroupRetryButton,
                                children: F.NW.string(F.t['5911LS'])
                            })
                          : O
                            ? (0, c.jsx)(w.Z, {
                                  direction: w.Z.Directions.RIGHT,
                                  className: H.connectionsChecksGroupCaret
                              })
                            : (0, c.jsx)(C.Text, {
                                  variant: 'text-md/medium',
                                  color: 'text-muted',
                                  children: F.NW.string(F.t['cEts6+'])
                              })),
                    (null == T ? void 0 : T.type) === D.ABu.STEAM && (m = F.NW.string(F.t.NcZh6O)),
                    (0, c.jsxs)(
                        C.P3F,
                        {
                            className: l()(H.connectionsChecksGroup, g ? H.connectionsChecksGroupPassed : null, O ? null : H.connectionsChecksGroupPlatformDisabled),
                            onClick:
                                !g && O
                                    ? () => {
                                          var e, n;
                                          return (
                                              (n = null != (e = null == T ? void 0 : T.type) ? e : z.Kt),
                                              void ((0, Z.Z)({
                                                  platformType: n,
                                                  location: 'Verified Roles Connect Accounts Modal',
                                                  overrideUrl: null == S ? void 0 : S.role_connections_verification_url
                                              }),
                                              s(K(U({}, i), { [n]: Date.now() })),
                                              p(n),
                                              b(null != S ? S : null),
                                              t())
                                          );
                                      }
                                    : void 0,
                            children: [
                                !g && G
                                    ? (0, c.jsx)('div', {
                                          className: H.connectionsChecksGroupRequirementsNotMet,
                                          children: (0, c.jsx)(C.Text, {
                                              variant: 'text-xs/normal',
                                              color: 'always-white',
                                              children: F.NW.string(F.t.UB3hKi)
                                          })
                                      })
                                    : null,
                                null != T ? (0, c.jsx)(Y, { platformType: T.type }) : null,
                                null != E ? (0, c.jsx)(f.Z, { user: E }) : null,
                                (0, c.jsxs)('div', {
                                    className: H.connectionsChecksGroupTextContainer,
                                    children: [
                                        (0, c.jsxs)('div', {
                                            className: H.connectionsChecksGroupTextNameContainer,
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
                                                                  K(
                                                                      U(
                                                                          {
                                                                              size: 'xs',
                                                                              color: 'currentColor'
                                                                          },
                                                                          e
                                                                      ),
                                                                      { className: H.connectionsChecksGroupTextNameInfoIcon }
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
        [N, f] = o.useState(1 === l.visibility);
    (0, b.ZP)(() => {
        i(!N), r(m);
    });
    let _ = j.Z.get(l.type);
    return (
        D.BFP.has(l.type) &&
            (n = (0, c.jsx)(C.j7V, {
                className: H.accountConnectedPrivacyOptionsSwitchItem,
                hideBorder: !0,
                value: s,
                onChange: (e) => {
                    d(e), x.Z.setFriendSync(l.type, l.id, e);
                },
                children: (0, c.jsx)(C.Text, {
                    variant: 'text-sm/semibold',
                    children: F.NW.string(F.t['+KCMSk'])
                })
            })),
        D.vbS.has(l.type) &&
            (t = (0, c.jsx)(C.j7V, {
                className: H.accountConnectedPrivacyOptionsSwitchItem,
                hideBorder: !0,
                value: u,
                onChange: (e) => {
                    h(e), x.Z.setShowActivity(l.type, l.id, e);
                },
                children: (0, c.jsx)(C.Text, {
                    variant: 'text-sm/semibold',
                    children: F.NW.format(F.t['6u6J0t'], { platform: _.name })
                })
            })),
        !0 === _.hasMetadata &&
            (a = (0, c.jsx)(C.j7V, {
                className: H.accountConnectedPrivacyOptionsSwitchItem,
                hideBorder: !0,
                value: m,
                disabled: !N,
                onChange: (e) => {
                    r(e), p(e), x.Z.setMetadataVisibility(l.type, l.id, +!!e);
                },
                children: (0, c.jsx)(C.Text, {
                    variant: 'text-sm/semibold',
                    children: F.NW.string(F.t.FYKGsL)
                })
            })),
        (0, c.jsxs)('div', {
            className: H.accountConnectedPrivacyOptionsContainer,
            children: [
                (0, c.jsx)(C.j7V, {
                    className: H.accountConnectedPrivacyOptionsSwitchItem,
                    hideBorder: !0,
                    value: N,
                    onChange: (e) => {
                        i(!e), f(e), x.Z.setVisibility(l.type, l.id, +!!e);
                    },
                    children: (0, c.jsx)(C.Text, {
                        variant: 'text-sm/semibold',
                        children: F.NW.string(F.t.f7yOAQ)
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
        [f, b] = o.useState(!0),
        [y, g] = o.useState(!1),
        [I, w] = o.useState(!0),
        [M, Z] = o.useState(!1),
        V = (0, u.e7)([E.Z], () => E.Z.getAccounts()),
        z = (0, u.e7)([O.default], () => O.default.getId()),
        [K, Y] = o.useState(null),
        [X, $] = o.useState(null),
        [ee, en] = o.useState(null),
        et = (0, _.ZP)(),
        ec = (0, u.e7)([T.default], () => T.default.locale),
        eo = (0, u.e7)([P.ZP], () => P.ZP.getMember(a, z)),
        ea = Object.values((0, u.e7)([S.Z], () => S.Z.getMutableGuildChannelsForGuild(a))).filter((e) => G.Z.can(D.Plq.VIEW_CHANNEL, e) && G.Z.can(D.Plq.SEND_MESSAGES, e) && (0, A.Z)(e).includes(l));
    function el() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        null == t || t(), e && (0, C.Mr3)(B.s$, C.z1l);
    }
    function ei() {
        el(!0), N.Z.open(D.oAB.AUTHORIZED_APPS);
    }
    function er() {
        el(!0), N.Z.open(D.oAB.CONNECTIONS);
    }
    async function es() {
        g(!0), await p.Z.assignGuildRoleConnection(a, l.id);
    }
    function ed() {
        R.default.track(D.rMx.PASSPORT_CHALLENGE_STARTED, U({ role_id: l.id }, (0, v.hH)(a)));
    }
    function eu(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        Y(e),
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
            R.default.track(D.rMx.PASSPORT_CHALLENGE_VIEWED, U({ role_id: l.id }, (0, v.hH)(a)));
        }, [a, l.id]),
        o.useEffect(() => {
            y && null != eo && eo.roles.includes(l.id) && (g(!1), ea.length > 0 ? s(2) : null == t || t(), R.default.track(D.rMx.PASSPORT_CHALLENGE_FINISHED, U({ role_id: l.id }, (0, v.hH)(a))));
        }, [y, ea.length, eo, a, l.id, t]),
        (0, c.jsxs)(C.Y0X, {
            size: C.CgR.MEDIUM,
            transitionState: n,
            'aria-label': F.NW.string(F.t.zOZh3d),
            className: H.modalRoot,
            children: [
                (function () {
                    switch (i) {
                        case 0:
                            return (0, c.jsxs)(C.xBx, {
                                className: H.header,
                                separator: !1,
                                children: [
                                    (0, c.jsx)('div', {
                                        className: H.headerText,
                                        children: (0, c.jsx)(C.X6q, {
                                            variant: 'heading-xl/extrabold',
                                            children: F.NW.string(F.t.zOZh3d)
                                        })
                                    }),
                                    (0, c.jsx)(C.olH, { onClick: () => el() })
                                ]
                            });
                        case 1: {
                            var e, n;
                            r()(null != K, 'lastPlatformConnected is null');
                            let t = null != (n = null == X ? void 0 : X.name) ? n : null == (e = j.Z.get(K)) ? void 0 : e.name;
                            return (0, c.jsxs)(C.xBx, {
                                className: H.header,
                                separator: !1,
                                children: [
                                    (0, c.jsx)(C.X6q, {
                                        variant: 'heading-xl/extrabold',
                                        className: H.headerText,
                                        children: F.NW.format(F.t.yQvgBA, { platformName: t })
                                    }),
                                    (0, c.jsx)(C.olH, { onClick: () => el() })
                                ]
                            });
                        }
                        case 2:
                            return (0, c.jsxs)(C.xBx, {
                                className: H.header,
                                separator: !1,
                                children: [
                                    (0, c.jsx)(C.X6q, {
                                        variant: 'heading-xl/extrabold',
                                        className: H.headerText,
                                        children: F.NW.string(F.t.najNd3)
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
                                        f || null == d
                                            ? (0, c.jsx)(C.$jN, { className: H.connectionsChecksGroups })
                                            : (0, c.jsxs)(c.Fragment, {
                                                  children: [
                                                      (0, c.jsx)(C.Text, {
                                                          variant: 'text-md/medium',
                                                          color: 'header-secondary',
                                                          children: F.NW.format(n ? F.t.jHfRvb : e ? F.t.mOQ8k5 : F.t.U0olLi, { roleName: l.name })
                                                      }),
                                                      (0, c.jsx)(C.zJl, {
                                                          className: H.connectionsChecksGroups,
                                                          children: (0, c.jsx)(Q, {
                                                              eligibilityStatesGroups: d,
                                                              onPlatformConnect: ed,
                                                              onPlatformConnected: eu
                                                          })
                                                      }),
                                                      (0, c.jsx)(C.Text, {
                                                          variant: 'text-xs/normal',
                                                          className: H.footerText,
                                                          color: 'header-secondary',
                                                          children: F.NW.format(F.t.gsgvxs, {
                                                              privacyPolicyUrl: D.EYA.PRIVACY,
                                                              onAuthorizedApplicationsClick: () => ei(),
                                                              onConnectionsClick: () => er()
                                                          })
                                                      })
                                                  ]
                                              })
                                });
                            }
                            case 1: {
                                r()(null != K, 'lastPlatformConnected is null');
                                let e = V.find((e) => {
                                        let { type: n } = e;
                                        return K === n;
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
                                            children: F.NW.format(F.t.gsgvxs, {
                                                privacyPolicyUrl: D.EYA.PRIVACY,
                                                onAuthorizedApplicationsClick: () => ei(),
                                                onConnectionsClick: () => er()
                                            })
                                        }),
                                        (0, c.jsx)('div', {
                                            className: H.accountConnectedContainer,
                                            children:
                                                null == e && null == n
                                                    ? (0, c.jsx)(C.$jN, { className: H.accountConnectedLoading })
                                                    : (0, c.jsxs)(c.Fragment, {
                                                          children: [
                                                              null != e
                                                                  ? (0, c.jsxs)(c.Fragment, {
                                                                        children: [
                                                                            (0, c.jsxs)('div', {
                                                                                className: H.accountConnectedContainerChild,
                                                                                children: [
                                                                                    (0, c.jsx)(C.Text, {
                                                                                        variant: 'eyebrow',
                                                                                        color: 'header-secondary',
                                                                                        children: F.NW.string(F.t.TOjkEh)
                                                                                    }),
                                                                                    (0, c.jsx)(k.E3, {
                                                                                        connectedAccount: e,
                                                                                        userId: z,
                                                                                        theme: et,
                                                                                        locale: ec,
                                                                                        className: H.accountConnectedPreviewConnectedUserAccount,
                                                                                        showMetadata: I,
                                                                                        showInvisibleIcon: M
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            (0, c.jsxs)('div', {
                                                                                className: H.accountConnectedContainerChild,
                                                                                children: [
                                                                                    (0, c.jsx)(C.Text, {
                                                                                        variant: 'eyebrow',
                                                                                        color: 'header-secondary',
                                                                                        children: F.NW.string(F.t.jndPhY)
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
                                                                        className: H.accountConnectedContainerChild,
                                                                        children: [
                                                                            (0, c.jsxs)('div', {
                                                                                className: H.accountConnectedHeader,
                                                                                children: [
                                                                                    (0, c.jsx)(C.Text, {
                                                                                        variant: 'eyebrow',
                                                                                        color: 'header-secondary',
                                                                                        children: F.NW.string(F.t.TOjkEh)
                                                                                    }),
                                                                                    (0, c.jsx)(C.ua7, {
                                                                                        text: F.NW.string(F.t.x3svVV),
                                                                                        children: (e) =>
                                                                                            (0, c.jsx)(
                                                                                                C.d3s,
                                                                                                U(
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
                                                                                className: H.accountConnectedPreviewConnectedUserAccount,
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
                                            className: H.roleGranted,
                                            children: [
                                                (0, c.jsx)(W.Z, {
                                                    guildId: a,
                                                    className: H.verifiedIcon,
                                                    role: l,
                                                    size: 24
                                                }),
                                                (0, c.jsx)(C.Text, {
                                                    variant: 'text-lg/semibold',
                                                    color: 'header-primary',
                                                    className: H.roleGrantedName,
                                                    children: l.name
                                                })
                                            ]
                                        }),
                                        (0, c.jsx)(C.zJl, {
                                            className: H.channelsGranted,
                                            children: ea.map((e) => (0, c.jsx)(q, { channel: e }, e.id))
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
                                        disabled: f || !m || y,
                                        children: F.NW.string(F.t['8SuVoK'])
                                    }),
                                    n
                                        ? (0, c.jsx)('div', {
                                              className: H.manageConnectionsFooterButton,
                                              children: (0, c.jsx)(C.zxk, {
                                                  look: C.iLD.LINK,
                                                  color: C.Ttl.LINK,
                                                  onClick: er,
                                                  children: F.NW.string(F.t.VXV55O)
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
                                    children: F.NW.string(F.t.i4jeWV)
                                })
                            });
                        default:
                            return (0, c.jsxs)(C.mzw, {
                                children: [
                                    (0, c.jsx)(C.zxk, {
                                        color: C.Ttl.BRAND,
                                        onClick: () => el(!0),
                                        children: F.NW.string(F.t.cpT0Cg)
                                    }),
                                    n
                                        ? (0, c.jsx)('div', {
                                              className: H.manageConnectionsFooterButton,
                                              children: (0, c.jsx)(C.zxk, {
                                                  look: C.iLD.LINK,
                                                  color: C.Ttl.LINK,
                                                  onClick: er,
                                                  children: F.NW.string(F.t.VXV55O)
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

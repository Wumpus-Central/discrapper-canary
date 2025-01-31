t.d(n, { default: () => Q }), t(47120), t(536091);
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
    C = t(780384),
    m = t(481060),
    x = t(457330),
    p = t(749210),
    N = t(230711),
    _ = t(99690),
    f = t(493773),
    v = t(410030),
    b = t(726542),
    A = t(367907),
    j = t(385499),
    y = t(277800),
    T = t(471445),
    k = t(819602),
    g = t(706454),
    I = t(598077),
    S = t(314897),
    E = t(592125),
    G = t(553795),
    O = t(271383),
    P = t(496675),
    w = t(259580),
    R = t(626135),
    L = t(228643),
    M = t(275759),
    Z = t(231757),
    V = t(753194),
    B = t(225104),
    z = t(458034),
    F = t(856651),
    H = t(981631),
    U = t(388032),
    D = t(245209);
function K(e) {
    let { platformType: n, className: t } = e,
        o = (0, v.ZP)(),
        a = b.Z.get(n);
    return (0, c.jsx)('img', {
        src: (0, C.ap)(o) ? a.icon.lightSVG : a.icon.darkSVG,
        alt: '',
        className: l()(D.platformIcon, t)
    });
}
function Y(e) {
    let { channel: n, className: t } = e,
        o = (0, T.KS)(n);
    return (0, c.jsxs)('div', {
        className: l()(D.channelName, t),
        children: [
            null != o ? (0, c.jsx)(o, { className: D.channelNameIcon }) : null,
            (0, c.jsx)(m.X6q, {
                variant: 'heading-lg/semibold',
                color: 'text-normal',
                className: D.channelNameText,
                children: n.name
            })
        ]
    });
}
function q(e) {
    let n,
        { connectionType: t, connectionMetadataField: o, operator: a, value: l, result: i, description: r } = e,
        s = null;
    if (null != r)
        switch (a) {
            case F.iO.LESS_THAN:
                s = U.intl.format(U.t['2p7dAw'], {
                    description: r,
                    count: Math.max(0, Number(l) - 1)
                });
                break;
            case F.iO.GREATER_THAN:
                s = U.intl.format(U.t['2p7dAw'], {
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
            case F.iO.EQUAL:
                (e = U.t['0BlpbG']), t === H.ABu.PAYPAL && o === F.PC.PAYPAL_VERIFIED && (e = U.t.dcSDhY);
                break;
            case F.iO.NOT_EQUAL:
                e = U.t.otcpTE;
                break;
            case F.iO.LESS_THAN:
                e = U.t.Ef35xs;
                break;
            case F.iO.GREATER_THAN:
                e = U.t['8W9OXV'];
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
        (0, c.jsx)(m.Text, {
            variant: 'text-xs/normal',
            color: n,
            className: D.connectionsCheck,
            children: s
        })
    );
}
function W(e) {
    let { eligibilityStatesGroups: n, onPlatformConnect: t, onPlatformConnected: a } = e,
        [i, s] = o.useState({}),
        [u, C] = o.useState(0),
        [x, p] = o.useState(null),
        [N, f] = o.useState(null),
        v = o.useMemo(() => d().flatten(n), [n]),
        A = o.useMemo(() => d().groupBy(v, (e) => ''.concat(e.connection_type).concat(null != e.application_id ? ':'.concat(e.application_id) : '')), [v]);
    o.useEffect(() => C(Date.now()), [v]),
        o.useEffect(() => {
            if (null == x) return;
            let e = A[''.concat(x).concat(null != N ? ':'.concat(N.id) : '')];
            null != e && e.every((e) => e.result) && a(x, N);
        }, [A, x, N, a]);
    let y = (0, m.dQu)(h.Z.unsafe_rawColors.GREEN_330).hex();
    return (0, c.jsx)(c.Fragment, {
        children: Object.keys(A)
            .sort((e, n) => {
                let t = A[e].every((e) => e.result),
                    c = A[n].every((e) => e.result);
                return !0 === t && !1 === c ? 1 : !1 === t && !0 === c ? -1 : 0;
            })
            .map((e) => {
                var n, o, a;
                let d, h, C;
                let x = A[e],
                    N = x.find((e) => null == e.operator),
                    v = x.filter((e) => null != e.operator),
                    T = (null == N || N.result) && v.every((e) => e.result),
                    k = x.find((e) => null != e.application),
                    g = b.Z.get(e),
                    S = null == g || g.enabled,
                    E = null == k ? void 0 : k.application,
                    G = (null == E ? void 0 : E.bot) != null ? new I.Z(E.bot) : null;
                M.SJ.includes(null !== (n = null == E ? void 0 : E.id) && void 0 !== n ? n : '')
                    ? (d = (0, c.jsx)(V.Z, {
                          className: D.botTag,
                          color: y,
                          size: 16
                      }))
                    : null != G &&
                      (d = (0, c.jsx)(j.Z, {
                          className: D.botTag,
                          verified: G.isVerifiedBot()
                      }));
                let O = i[null !== (o = null == g ? void 0 : g.type) && void 0 !== o ? o : F.Kt],
                    P = !T && null != O && O <= u;
                return (
                    (h = T
                        ? (0, c.jsx)(m.dz2, {
                              size: 'md',
                              color: 'currentColor',
                              className: D.connectionsChecksGroupCheckmark
                          })
                        : P
                          ? (0, c.jsx)(m.zxk, {
                                size: m.zxk.Sizes.TINY,
                                look: m.zxk.Looks.LINK,
                                color: m.zxk.Colors.LINK,
                                className: D.connectionsChecksGroupRetryButton,
                                children: U.intl.string(U.t['5911LS'])
                            })
                          : S
                            ? (0, c.jsx)(w.Z, {
                                  direction: w.Z.Directions.RIGHT,
                                  className: D.connectionsChecksGroupCaret
                              })
                            : (0, c.jsx)(m.Text, {
                                  variant: 'text-md/medium',
                                  color: 'text-muted',
                                  children: U.intl.string(U.t['cEts6+'])
                              })),
                    (null == g ? void 0 : g.type) === H.ABu.STEAM && (C = U.intl.string(U.t.NcZh6O)),
                    (0, c.jsxs)(
                        m.P3F,
                        {
                            className: l()(D.connectionsChecksGroup, T ? D.connectionsChecksGroupPassed : null, S ? null : D.connectionsChecksGroupPlatformDisabled),
                            onClick:
                                !T && S
                                    ? () => {
                                          var e, n;
                                          return (
                                              (n = null !== (e = null == g ? void 0 : g.type) && void 0 !== e ? e : F.Kt),
                                              void ((0, Z.Z)({
                                                  platformType: n,
                                                  location: 'Verified Roles Connect Accounts Modal',
                                                  overrideUrl: null == E ? void 0 : E.role_connections_verification_url
                                              }),
                                              s({
                                                  ...i,
                                                  [n]: Date.now()
                                              }),
                                              p(n),
                                              f(null != E ? E : null),
                                              t())
                                          );
                                      }
                                    : void 0,
                            children: [
                                !T && P
                                    ? (0, c.jsx)('div', {
                                          className: D.connectionsChecksGroupRequirementsNotMet,
                                          children: (0, c.jsx)(m.Text, {
                                              variant: 'text-xs/normal',
                                              color: 'always-white',
                                              children: U.intl.string(U.t.UB3hKi)
                                          })
                                      })
                                    : null,
                                null != g ? (0, c.jsx)(K, { platformType: g.type }) : null,
                                null != G ? (0, c.jsx)(_.Z, { user: G }) : null,
                                (0, c.jsxs)('div', {
                                    className: D.connectionsChecksGroupTextContainer,
                                    children: [
                                        (0, c.jsxs)('div', {
                                            className: D.connectionsChecksGroupTextNameContainer,
                                            children: [
                                                (0, c.jsx)(m.Text, {
                                                    variant: 'text-md/medium',
                                                    color: 'header-primary',
                                                    children: null !== (a = null == g ? void 0 : g.name) && void 0 !== a ? a : null == E ? void 0 : E.name
                                                }),
                                                d,
                                                null != C
                                                    ? (0, c.jsx)(m.ua7, {
                                                          text: C,
                                                          children: (e) =>
                                                              (0, c.jsx)(m.d3s, {
                                                                  size: 'xs',
                                                                  color: 'currentColor',
                                                                  ...e,
                                                                  className: D.connectionsChecksGroupTextNameInfoIcon
                                                              })
                                                      })
                                                    : null
                                            ]
                                        }),
                                        v.map((e) => {
                                            let { connection_type: n, connection_metadata_field: t, operator: o, value: a, result: l, description: i } = e;
                                            return (
                                                r()(null != t, 'connectionMetadataField is null'),
                                                r()(null != o, 'operator is null'),
                                                r()(null != a, 'value is null'),
                                                (0, c.jsx)(
                                                    q,
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
function X(e) {
    let n,
        t,
        a,
        { account: l, setShowPreviewInvisibleIcon: i, setShowPreviewMetadata: r } = e,
        [s, d] = o.useState(l.friendSync),
        [u, h] = o.useState(l.showActivity),
        [C, p] = o.useState(1 === l.metadataVisibility),
        [N, _] = o.useState(1 === l.visibility);
    (0, f.Z)(() => {
        i(!N), r(C);
    });
    let v = b.Z.get(l.type);
    return (
        H.BFP.has(l.type) &&
            (n = (0, c.jsx)(m.j7V, {
                className: D.accountConnectedPrivacyOptionsSwitchItem,
                hideBorder: !0,
                value: s,
                onChange: (e) => {
                    d(e), x.Z.setFriendSync(l.type, l.id, e);
                },
                children: (0, c.jsx)(m.Text, {
                    variant: 'text-sm/semibold',
                    children: U.intl.string(U.t['+KCMSk'])
                })
            })),
        H.vbS.has(l.type) &&
            (t = (0, c.jsx)(m.j7V, {
                className: D.accountConnectedPrivacyOptionsSwitchItem,
                hideBorder: !0,
                value: u,
                onChange: (e) => {
                    h(e), x.Z.setShowActivity(l.type, l.id, e);
                },
                children: (0, c.jsx)(m.Text, {
                    variant: 'text-sm/semibold',
                    children: U.intl.format(U.t['6u6J0t'], { platform: v.name })
                })
            })),
        !0 === v.hasMetadata &&
            (a = (0, c.jsx)(m.j7V, {
                className: D.accountConnectedPrivacyOptionsSwitchItem,
                hideBorder: !0,
                value: C,
                disabled: !N,
                onChange: (e) => {
                    r(e), p(e), x.Z.setMetadataVisibility(l.type, l.id, e ? 1 : 0);
                },
                children: (0, c.jsx)(m.Text, {
                    variant: 'text-sm/semibold',
                    children: U.intl.string(U.t.FYKGsL)
                })
            })),
        (0, c.jsxs)('div', {
            className: D.accountConnectedPrivacyOptionsContainer,
            children: [
                (0, c.jsx)(m.j7V, {
                    className: D.accountConnectedPrivacyOptionsSwitchItem,
                    hideBorder: !0,
                    value: N,
                    onChange: (e) => {
                        i(!e), _(e), x.Z.setVisibility(l.type, l.id, e ? 1 : 0);
                    },
                    children: (0, c.jsx)(m.Text, {
                        variant: 'text-sm/semibold',
                        children: U.intl.string(U.t.f7yOAQ)
                    })
                }),
                a,
                t,
                n
            ]
        })
    );
}
function Q(e) {
    let { transitionState: n, onClose: t, guildId: a, role: l } = e,
        [i, s] = o.useState(0),
        [d, h] = o.useState(null),
        [C, x] = o.useState(!1),
        [_, f] = o.useState(!0),
        [j, T] = o.useState(!1),
        [I, w] = o.useState(!0),
        [M, Z] = o.useState(!1),
        V = (0, u.e7)([G.Z], () => G.Z.getAccounts()),
        F = (0, u.e7)([S.default], () => S.default.getId()),
        [K, q] = o.useState(null),
        [Q, J] = o.useState(null),
        [$, ee] = o.useState(null),
        en = (0, v.ZP)(),
        et = (0, u.e7)([g.default], () => g.default.locale),
        ec = (0, u.e7)([O.ZP], () => O.ZP.getMember(a, F)),
        eo = Object.values((0, u.e7)([E.Z], () => E.Z.getMutableGuildChannelsForGuild(a))).filter((e) => P.Z.can(H.Plq.VIEW_CHANNEL, e) && P.Z.can(H.Plq.SEND_MESSAGES, e) && (0, y.Z)(e).includes(l));
    function ea() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        null == t || t(), e && (0, m.Mr3)(z.s$, m.z1l);
    }
    function el() {
        ea(!0), N.Z.open(H.oAB.AUTHORIZED_APPS);
    }
    function ei() {
        ea(!0), N.Z.open(H.oAB.CONNECTIONS);
    }
    async function er() {
        T(!0), await p.Z.assignGuildRoleConnection(a, l.id);
    }
    function es() {
        R.default.track(H.rMx.PASSPORT_CHALLENGE_STARTED, {
            role_id: l.id,
            ...(0, A.hH)(a)
        });
    }
    function ed(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        q(e),
            J(n),
            s(1),
            null != n &&
                (0, L.nj)()
                    .then((e) => {
                        ee(e);
                    })
                    .catch(() => {});
    }
    return (
        o.useEffect(() => {
            p.Z.fetchGuildRoleConnectionsEligibility(a, l.id).then((e) => {
                h(e), x(e.some((e) => e.every((e) => e.result))), f(!1);
            });
        }, [a, l.id, V]),
        o.useEffect(() => {
            R.default.track(H.rMx.PASSPORT_CHALLENGE_VIEWED, {
                role_id: l.id,
                ...(0, A.hH)(a)
            });
        }, [a, l.id]),
        o.useEffect(() => {
            j &&
                null != ec &&
                ec.roles.includes(l.id) &&
                (T(!1),
                eo.length > 0 ? s(2) : null == t || t(),
                R.default.track(H.rMx.PASSPORT_CHALLENGE_FINISHED, {
                    role_id: l.id,
                    ...(0, A.hH)(a)
                }));
        }, [j, eo.length, ec, a, l.id, t]),
        (0, c.jsxs)(m.Y0X, {
            size: m.CgR.MEDIUM,
            transitionState: n,
            'aria-label': U.intl.string(U.t.zOZh3d),
            className: D.modalRoot,
            children: [
                (function () {
                    switch (i) {
                        case 0:
                            return (0, c.jsxs)(m.xBx, {
                                className: D.header,
                                separator: !1,
                                children: [
                                    (0, c.jsx)('div', {
                                        className: D.headerText,
                                        children: (0, c.jsx)(m.X6q, {
                                            variant: 'heading-xl/extrabold',
                                            children: U.intl.string(U.t.zOZh3d)
                                        })
                                    }),
                                    (0, c.jsx)(m.olH, { onClick: () => ea() })
                                ]
                            });
                        case 1: {
                            var e, n;
                            r()(null != K, 'lastPlatformConnected is null');
                            let t = null !== (n = null == Q ? void 0 : Q.name) && void 0 !== n ? n : null === (e = b.Z.get(K)) || void 0 === e ? void 0 : e.name;
                            return (0, c.jsxs)(m.xBx, {
                                className: D.header,
                                separator: !1,
                                children: [
                                    (0, c.jsx)(m.X6q, {
                                        variant: 'heading-xl/extrabold',
                                        className: D.headerText,
                                        children: U.intl.format(U.t.yQvgBA, { platformName: t })
                                    }),
                                    (0, c.jsx)(m.olH, { onClick: () => ea() })
                                ]
                            });
                        }
                        case 2:
                            return (0, c.jsxs)(m.xBx, {
                                className: D.header,
                                separator: !1,
                                children: [
                                    (0, c.jsx)(m.X6q, {
                                        variant: 'heading-xl/extrabold',
                                        className: D.headerText,
                                        children: U.intl.string(U.t.najNd3)
                                    }),
                                    (0, c.jsx)(m.olH, { onClick: () => ea(!0) })
                                ]
                            });
                        default:
                            return null;
                    }
                })(),
                (0, c.jsx)(m.qBt, {
                    step: i,
                    steps: [0, 1, 2],
                    children: (function () {
                        switch (i) {
                            case 0: {
                                let e = null != d && d.length > 1,
                                    n = null != d && 1 === d.length && 1 === d[0].length;
                                return (0, c.jsx)(m.hzk, {
                                    children:
                                        _ || null == d
                                            ? (0, c.jsx)(m.$jN, { className: D.connectionsChecksGroups })
                                            : (0, c.jsxs)(c.Fragment, {
                                                  children: [
                                                      (0, c.jsx)(m.Text, {
                                                          variant: 'text-md/medium',
                                                          color: 'header-secondary',
                                                          children: U.intl.format(n ? U.t.jHfRvb : e ? U.t.mOQ8k5 : U.t.U0olLi, { roleName: l.name })
                                                      }),
                                                      (0, c.jsx)(m.zJl, {
                                                          className: D.connectionsChecksGroups,
                                                          children: (0, c.jsx)(W, {
                                                              eligibilityStatesGroups: d,
                                                              onPlatformConnect: es,
                                                              onPlatformConnected: ed
                                                          })
                                                      }),
                                                      (0, c.jsx)(m.Text, {
                                                          variant: 'text-xs/normal',
                                                          className: D.footerText,
                                                          color: 'header-secondary',
                                                          children: U.intl.format(U.t.gsgvxs, {
                                                              privacyPolicyUrl: H.EYA.PRIVACY,
                                                              onAuthorizedApplicationsClick: () => el(),
                                                              onConnectionsClick: () => ei()
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
                                        null == $
                                            ? void 0
                                            : $.find((e) => {
                                                  let { application: n } = e;
                                                  return n.id === (null == Q ? void 0 : Q.id);
                                              });
                                return (0, c.jsxs)(m.hzk, {
                                    children: [
                                        (0, c.jsx)(m.Text, {
                                            variant: 'text-md/normal',
                                            color: 'header-secondary',
                                            children: U.intl.format(U.t.gsgvxs, {
                                                privacyPolicyUrl: H.EYA.PRIVACY,
                                                onAuthorizedApplicationsClick: () => el(),
                                                onConnectionsClick: () => ei()
                                            })
                                        }),
                                        (0, c.jsx)('div', {
                                            className: D.accountConnectedContainer,
                                            children:
                                                null == e && null == n
                                                    ? (0, c.jsx)(m.$jN, { className: D.accountConnectedLoading })
                                                    : (0, c.jsxs)(c.Fragment, {
                                                          children: [
                                                              null != e
                                                                  ? (0, c.jsxs)(c.Fragment, {
                                                                        children: [
                                                                            (0, c.jsxs)('div', {
                                                                                className: D.accountConnectedContainerChild,
                                                                                children: [
                                                                                    (0, c.jsx)(m.Text, {
                                                                                        variant: 'eyebrow',
                                                                                        color: 'header-secondary',
                                                                                        children: U.intl.string(U.t.TOjkEh)
                                                                                    }),
                                                                                    (0, c.jsx)(k.E3, {
                                                                                        connectedAccount: e,
                                                                                        userId: F,
                                                                                        theme: en,
                                                                                        locale: et,
                                                                                        className: D.accountConnectedPreviewConnectedUserAccount,
                                                                                        showMetadata: I,
                                                                                        showInvisibleIcon: M
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            (0, c.jsxs)('div', {
                                                                                className: D.accountConnectedContainerChild,
                                                                                children: [
                                                                                    (0, c.jsx)(m.Text, {
                                                                                        variant: 'eyebrow',
                                                                                        color: 'header-secondary',
                                                                                        children: U.intl.string(U.t.jndPhY)
                                                                                    }),
                                                                                    (0, c.jsx)(X, {
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
                                                                        className: D.accountConnectedContainerChild,
                                                                        children: [
                                                                            (0, c.jsxs)('div', {
                                                                                className: D.accountConnectedHeader,
                                                                                children: [
                                                                                    (0, c.jsx)(m.Text, {
                                                                                        variant: 'eyebrow',
                                                                                        color: 'header-secondary',
                                                                                        children: U.intl.string(U.t.TOjkEh)
                                                                                    }),
                                                                                    (0, c.jsx)(m.ua7, {
                                                                                        text: U.intl.string(U.t.x3svVV),
                                                                                        children: (e) =>
                                                                                            (0, c.jsx)(m.d3s, {
                                                                                                size: 'xs',
                                                                                                color: 'currentColor',
                                                                                                ...e
                                                                                            })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            (0, c.jsx)(k.tH, {
                                                                                applicationRoleConnection: n,
                                                                                className: D.accountConnectedPreviewConnectedUserAccount,
                                                                                locale: et
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
                                return (0, c.jsxs)(m.hzk, {
                                    children: [
                                        (0, c.jsxs)('div', {
                                            className: D.roleGranted,
                                            children: [
                                                (0, c.jsx)(B.Z, {
                                                    guildId: a,
                                                    className: D.verifiedIcon,
                                                    role: l,
                                                    size: 24
                                                }),
                                                (0, c.jsx)(m.Text, {
                                                    variant: 'text-lg/semibold',
                                                    color: 'header-primary',
                                                    className: D.roleGrantedName,
                                                    children: l.name
                                                })
                                            ]
                                        }),
                                        (0, c.jsx)(m.zJl, {
                                            className: D.channelsGranted,
                                            children: eo.map((e) => (0, c.jsx)(Y, { channel: e }, e.id))
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
                    let n = null !== (e = null == d ? void 0 : d.flat().some((e) => null == e.application_id)) && void 0 !== e && e;
                    switch (i) {
                        case 0:
                            return (0, c.jsxs)(m.mzw, {
                                children: [
                                    (0, c.jsx)(m.zxk, {
                                        color: m.Ttl.BRAND,
                                        onClick: () => er(),
                                        disabled: _ || !C || j,
                                        children: U.intl.string(U.t['8SuVoK'])
                                    }),
                                    n
                                        ? (0, c.jsx)('div', {
                                              className: D.manageConnectionsFooterButton,
                                              children: (0, c.jsx)(m.zxk, {
                                                  look: m.iLD.LINK,
                                                  color: m.Ttl.LINK,
                                                  onClick: ei,
                                                  children: U.intl.string(U.t.VXV55O)
                                              })
                                          })
                                        : null
                                ]
                            });
                        case 1:
                            return (0, c.jsx)(m.mzw, {
                                children: (0, c.jsx)(m.zxk, {
                                    color: m.Ttl.BRAND,
                                    onClick: () => s(0),
                                    children: U.intl.string(U.t.i4jeWV)
                                })
                            });
                        default:
                            return (0, c.jsxs)(m.mzw, {
                                children: [
                                    (0, c.jsx)(m.zxk, {
                                        color: m.Ttl.BRAND,
                                        onClick: () => ea(!0),
                                        children: U.intl.string(U.t.cpT0Cg)
                                    }),
                                    n
                                        ? (0, c.jsx)('div', {
                                              className: D.manageConnectionsFooterButton,
                                              children: (0, c.jsx)(m.zxk, {
                                                  look: m.iLD.LINK,
                                                  color: m.Ttl.LINK,
                                                  onClick: ei,
                                                  children: U.intl.string(U.t.VXV55O)
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

n.d(t, { Z: () => Q }), n(388685), n(539854), n(457542);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(704215),
    c = n(692547),
    d = n(844168),
    u = n(780384),
    m = n(481060),
    g = n(570140),
    p = n(457330),
    h = n(497321),
    f = n(23551),
    b = n(468026),
    _ = n(410030),
    x = n(726542),
    E = n(122021),
    j = n(275759),
    C = n(231757),
    O = n(888496),
    S = n(605236),
    v = n(565138),
    T = n(297700),
    I = n(553795),
    N = n(430824),
    y = n(771845),
    A = n(246946),
    P = n(626135),
    R = n(63063),
    D = n(706454),
    Z = n(349728),
    w = n(494620),
    k = n(205266),
    L = n(216153),
    B = n(981631),
    M = n(856651),
    U = n(921944),
    V = n(388032),
    G = n(741138),
    F = n(20493);
function H(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
let z = (e) => {
    var t, n;
    let r,
        { integration: s } = e,
        {
            isJoining: l,
            joinErrorMessage: o,
            showJoinErrorMessage: c
        } = (0, a.cj)(
            [I.Z],
            () => ({
                isJoining: I.Z.isJoining(s.id),
                joinErrorMessage: '' === I.Z.joinErrorMessage(s.id) ? V.intl.string(V.t.j2d6Ki) : I.Z.joinErrorMessage(s.id),
                showJoinErrorMessage: void 0 !== I.Z.joinErrorMessage(s.id)
            }),
            [s.id]
        );
    return (
        null != (0, a.e7)([N.Z], () => N.Z.getGuild(s.guild.id), [s.guild.id]) ||
            (r = (0, i.jsx)(m.zxk, {
                size: m.PhG.SMALL,
                onClick: function () {
                    p.Z.joinServer(s.id, () => {});
                },
                disabled: l,
                children: (0, i.jsx)('span', { children: l ? V.intl.string(V.t.RXvQQk) : V.intl.string(V.t.XpeFYm) })
            })),
        (0, i.jsxs)('div', {
            className: G.integrationWrapper,
            children: [
                (0, i.jsxs)('div', {
                    className: G.integration,
                    children: [
                        (0, i.jsx)(v.Z, {
                            size: v.Z.Sizes.SMALL,
                            guild: s.guild,
                            className: G.guildIcon
                        }),
                        (0, i.jsxs)('div', {
                            className: G.integrationInner,
                            children: [
                                (0, i.jsx)(m.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'header-primary',
                                    children: s.guild.toString()
                                }),
                                (0, i.jsx)(m.eee, {
                                    href: null == (n = x.Z.get(s.type)) || null == (t = n.getPlatformUserUrl) ? void 0 : t.call(n, s.account),
                                    children: (0, i.jsx)(m.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: s.account.name
                                    })
                                })
                            ]
                        }),
                        r
                    ]
                }),
                c &&
                    (0, i.jsx)(m.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-danger',
                        className: G.integrationError,
                        children: o
                    })
            ]
        })
    );
};
function Y(e) {
    var t;
    let n,
        s,
        l,
        { onDisconnect: a, account: o, theme: d, locale: g } = e,
        [h, f] = r.useState(o.friendSync),
        [_, S] = r.useState(o.visibility),
        [v, I] = r.useState(o.metadataVisibility),
        [N, y] = r.useState(o.showActivity),
        [A, P] = r.useState(null),
        [D, U] = r.useState(null),
        [F, Y] = r.useState(!1),
        [W, K] = r.useState([]),
        q = (0, E.rR)(o.type),
        X = x.Z.get(q);
    r.useEffect(() => {
        f(o.friendSync), S(o.visibility), I(o.metadataVisibility), y(o.showActivity);
    }, [o]);
    let Q = {
            inProgressVisibility: A,
            inProgressMetadataVisibility: D
        },
        J = r.useRef(Q);
    r.useEffect(() => {
        J.current = Q;
    }),
        r.useEffect(() => {
            if (!1 === o.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = J.current;
            null != e && (S(e), p.Z.setVisibility(o.type, o.id, e), P(null)), null != t && (I(t), p.Z.setMetadataVisibility(o.type, o.id, t), U(null));
        }, [o]);
    function $() {
        let e = x.Z.get(o.type),
            t = V.intl.format(V.t.VgqIPj, { provider: e.name });
        (0, Z.Z)(o) &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    t,
                    (0, i.jsx)(w.Z, {
                        className: G.infoBox,
                        children: V.intl.format(V.t.COW3Xl, { platformName: e.name })
                    })
                ]
            })),
            (0, m.h7j)((n) =>
                (0, i.jsx)(
                    b.default,
                    H(
                        {
                            title: V.intl.formatToPlainString(V.t.U5x12d, { name: e.name }),
                            body: t,
                            confirmText: V.intl.string(V.t.bsbMV1),
                            cancelText: V.intl.string(V.t['ETE/oK']),
                            onConfirm: a
                        },
                        n
                    )
                )
            );
    }
    return (0, i.jsxs)('div', {
        className: G.connection,
        children: [
            (function (e) {
                var t;
                let n = x.Z.get(e.type),
                    r = x.Z.get(q),
                    s = '1' === (null != (t = e.metadata) ? t : {})[M.PC.TWITTER_VERIFIED],
                    l = null;
                return (
                    n.type === B.ABu.TWITTER &&
                        s &&
                        (l = (0, i.jsx)(m.ua7, {
                            text: V.intl.string(V.t.Jebrw8),
                            children: (e) => {
                                var t, n;
                                return (0, i.jsx)(
                                    T.Z,
                                    ((t = H({}, e)),
                                    (n = n =
                                        {
                                            color: c.Z.unsafe_rawColors.TWITTER.css,
                                            children: (0, i.jsx)(m.kmB, {
                                                size: 'xs',
                                                color: c.Z.unsafe_rawColors.WHITE_500.css
                                            })
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var i = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, i);
                                              }
                                              return n;
                                          })(Object(n)).forEach(function (e) {
                                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                          }),
                                    t)
                                );
                            }
                        })),
                    (0, i.jsxs)('div', {
                        className: G.connectionHeader,
                        children: [
                            (0, i.jsx)('img', {
                                alt: r.name,
                                className: G.connectionIcon,
                                src: (0, u.wj)(d) ? r.icon.darkSVG : r.icon.lightSVG
                            }),
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: G.connectionAccountLabelContainer,
                                        children: [
                                            (0, i.jsx)(m.Text, {
                                                color: 'header-primary',
                                                variant: 'text-md/semibold',
                                                className: G.connectionAccountValue,
                                                children: e.name
                                            }),
                                            null != l &&
                                                (0, i.jsx)('div', {
                                                    className: G.connectionAccountLabelVerified,
                                                    children: l
                                                })
                                        ]
                                    }),
                                    (0, i.jsx)(m.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        className: G.connectionAccountLabel,
                                        children: r.name
                                    })
                                ]
                            }),
                            (0, i.jsx)(m.P3F, {
                                className: G.connectionDelete,
                                onClick: $,
                                'aria-label': V.intl.string(V.t.ppppRE),
                                focusProps: {
                                    offset: {
                                        top: -4,
                                        left: -4,
                                        right: -4
                                    }
                                },
                                children: (0, i.jsx)(m.Dio, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            })
                        ]
                    })
                );
            })(o),
            o.twoWayLink
                ? null
                : o.type === B.ABu.XBOX
                  ? (0, i.jsx)('div', {
                        className: G.upsellWrapper,
                        children: (0, i.jsx)(L.Y, {})
                    })
                  : o.type === B.ABu.PLAYSTATION
                    ? (0, i.jsx)('div', {
                          className: G.upsellWrapper,
                          children: (0, i.jsx)(k.t, {})
                      })
                    : null,
            (function (e) {
                var t;
                let n = null != (t = e.metadata) ? t : {},
                    r = null,
                    s = (0, j.FI)(n[M.PC.CREATED_AT], g);
                switch (e.type) {
                    case B.ABu.REDDIT:
                        r = (0, O.oP)(n, G.metadataItem);
                        break;
                    case B.ABu.STEAM:
                        r = (0, O.Dq)(n, G.metadataItem);
                        break;
                    case B.ABu.BLUESKY:
                    case B.ABu.TWITTER:
                    case B.ABu.MASTODON:
                        r = (0, O.rJ)(n, G.metadataItem);
                        break;
                    case B.ABu.EBAY:
                        r = (0, O.ul)(n, G.metadataItem);
                        break;
                    case B.ABu.PAYPAL:
                        r = (0, O.li)(n, G.metadataItem);
                        break;
                    case B.ABu.TIKTOK:
                        r = (0, O.hf)(n, G.metadataItem);
                }
                null !== s &&
                    (null == r && (r = []),
                    null == r ||
                        r.push(
                            (0, i.jsx)(
                                m.Text,
                                {
                                    variant: 'text-xs/normal',
                                    color: 'interactive-active',
                                    className: G.connectedAccountVanityMetadataCreatedAt,
                                    children: V.intl.format(V.t['9rfonp'], { date: s })
                                },
                                'member-since'
                            )
                        ));
                let l = W.includes(e.id),
                    a = V.intl.string(V.t.wzzjk5);
                if (null == r || 0 === r.length)
                    if (!0 !== x.Z.get(e.type).hasMetadata) return null;
                    else
                        (r = [
                            (0, i.jsx)(
                                m.IGR,
                                {
                                    className: G.connectionMetadataUpsellTag,
                                    text: V.intl.string(V.t.y2b7CA)
                                },
                                'badge'
                            ),
                            (0, i.jsx)(
                                m.Text,
                                {
                                    variant: 'text-xs/normal',
                                    className: G.connectionMetadataUpsellDescription,
                                    children: V.intl.format(V.t.Up2ni4, { helpdeskUrl: R.Z.getArticleURL(B.BhN.CONNECTION_DETAILS) })
                                },
                                'label'
                            )
                        ]),
                            (a = V.intl.string(V.t['LVh3//']));
                return (
                    l && (a = V.intl.string(V.t.i4jeWV)),
                    r.push(
                        (0, i.jsx)(
                            m.zxk,
                            {
                                className: G.metadataRefreshButton,
                                color: l ? m.zxk.Colors.GREEN : m.zxk.Colors.BRAND,
                                size: m.zxk.Sizes.SMALL,
                                submitting: F,
                                disabled: l,
                                'aria-label': V.intl.string(V.t.sCkLYG),
                                onClick: l
                                    ? void 0
                                    : () => {
                                          Y(!0),
                                              p.Z.refresh(e.type, e.id).finally(() => {
                                                  setTimeout(() => {
                                                      W.push(e.id), K(W), Y(!1);
                                                  }, 2000);
                                              });
                                      },
                                children: a
                            },
                            'refresh-button'
                        )
                    ),
                    (0, i.jsx)('div', {
                        className: G.metadataContainer,
                        children: r
                    })
                );
            })(o),
            (B.BFP.has(o.type) &&
                (n = (0, i.jsx)(m.j7V, {
                    className: G.connectionOptionSwitch,
                    hideBorder: !0,
                    value: h,
                    onChange: function (e) {
                        f(e), p.Z.setFriendSync(o.type, o.id, e);
                    },
                    children: (0, i.jsx)(m.Text, {
                        variant: 'text-sm/semibold',
                        children: V.intl.string(V.t['+KCMSk'])
                    })
                })),
            B.vbS.has(o.type) &&
                (s = (0, i.jsx)(m.j7V, {
                    className: G.connectionOptionSwitch,
                    hideBorder: !0,
                    value: N,
                    onChange: function (e) {
                        y(e), p.Z.setShowActivity(o.type, o.id, e);
                    },
                    children: (0, i.jsx)(m.Text, {
                        variant: 'text-sm/semibold',
                        children: V.intl.format(V.t['6u6J0t'], { platform: X.name })
                    })
                })),
            (null == (t = x.Z.get(o.type)) ? void 0 : t.hasMetadata) === !0 &&
                (l = (0, i.jsx)(m.j7V, {
                    className: G.connectionOptionSwitch,
                    hideBorder: !0,
                    value: 1 === v,
                    onChange: function (e) {
                        let { verified: t } = o,
                            n = +!!e;
                        if (e && !t) {
                            U(n),
                                (0, C.Z)({
                                    platformType: o.type,
                                    location: 'User Settings'
                                });
                            return;
                        }
                        I(n), p.Z.setMetadataVisibility(o.type, o.id, n);
                    },
                    disabled: 1 !== _ || null == o.metadata,
                    children: (0, i.jsx)(m.Text, {
                        variant: 'text-sm/semibold',
                        children: V.intl.string(V.t.FYKGsL)
                    })
                })),
            (0, i.jsx)('div', {
                className: G.connectionOptionsWrapper,
                children: (0, i.jsxs)('div', {
                    className: G.connectionOptions,
                    children: [
                        (0, i.jsx)(m.j7V, {
                            className: G.connectionOptionSwitch,
                            hideBorder: !0,
                            value: 1 === _,
                            onChange: function (e) {
                                let { verified: t } = o,
                                    n = +!!e;
                                if (e && !t) {
                                    P(n),
                                        (0, C.Z)({
                                            platformType: o.type,
                                            location: 'User Settings'
                                        });
                                    return;
                                }
                                S(n), p.Z.setVisibility(o.type, o.id, n);
                            },
                            children: (0, i.jsx)(m.Text, {
                                variant: 'text-sm/semibold',
                                children: V.intl.string(V.t.f7yOAQ)
                            })
                        }),
                        l,
                        s,
                        n
                    ]
                })
            })),
            (function () {
                if (o.revoked || o.integrations.length > 0) return (0, i.jsx)(m.$i$, { className: G.connectedAccountSeparator });
            })(),
            o.revoked
                ? (0, i.jsx)(m.xJW, {
                      className: G.integrationsWrapper,
                      children: (0, i.jsx)(m.R94, {
                          className: G.integrationRevoked,
                          children: V.intl.format(V.t['6C4lgI'], {
                              onReconnect: function () {
                                  (0, C.Z)({
                                      platformType: o.type,
                                      location: 'User Settings'
                                  });
                              }
                          })
                      })
                  })
                : o.integrations.length > 0
                  ? (0, i.jsxs)(m.xJW, {
                        className: G.integrationsWrapper,
                        children: [
                            (0, i.jsx)(m.vwX, {
                                tag: m.RB0.H5,
                                children: (0, i.jsx)(m.Text, {
                                    variant: 'text-xs/semibold',
                                    children: V.intl.string(V.t.fOe3fX)
                                })
                            }),
                            (0, i.jsx)('div', { children: o.integrations.map((e) => (0, i.jsx)(z, { integration: e }, e.id)) })
                        ]
                    })
                  : void 0
        ]
    });
}
function W() {
    return (
        r.useEffect(
            () => () => {
                (0, S.EW)(o.z.NEW_CRUNCHYROLL_CONNECTION, { dismissAction: U.L.AUTO });
            },
            []
        ),
        (0, i.jsxs)('div', {
            className: G.connectContainer,
            children: [
                (0, i.jsx)(m.X6q, {
                    variant: 'heading-md/bold',
                    color: 'interactive-active',
                    className: G.connectHeader,
                    children: V.intl.string(V.t.ZeDrUV)
                }),
                (0, i.jsx)(m.Text, {
                    variant: 'text-xs/normal',
                    color: 'header-secondary',
                    children: V.intl.format(V.t['oYc+Gx'], { privacyPolicyUrl: B.EYA.PRIVACY })
                }),
                (0, i.jsx)(q, {})
            ]
        })
    );
}
function K(e) {
    let t = x.Z.get(e);
    (0, C.Z)({ platformType: t.type }),
        P.default.track(B.rMx.ACCOUNT_LINK_STEP, {
            previous_step: 'desktop connections',
            current_step: 'desktop oauth',
            platform_type: t.type
        });
}
function q() {
    function e() {
        g.Z.dispatch({
            type: 'CONNECTIONS_GRID_MODAL_SHOW',
            onComplete: K
        });
    }
    let t = (0, E.fq)();
    return (0, i.jsxs)('div', {
        className: G.connectionsContainer,
        children: [
            t.slice(0, 10).map((e) =>
                (0, i.jsx)(
                    f.Z,
                    {
                        type: e.type,
                        className: G.__invalid_accountButton,
                        innerClassName: G.accountButtonInner
                    },
                    e.type
                )
            ),
            (0, i.jsx)(m.ua7, {
                text: V.intl.string(V.t.QqTz8f),
                children: (t) => {
                    let { onMouseEnter: n, onMouseLeave: r } = t;
                    return (0, i.jsx)('div', {
                        className: l()(G.accountAddWrapper, G.__invalid_accountButton),
                        children: (0, i.jsx)(m.tEY, {
                            children: (0, i.jsx)('button', {
                                onMouseEnter: n,
                                onMouseLeave: r,
                                className: l()(G.accountAddInner, G.accountButtonInner),
                                type: 'button',
                                onClick: e,
                                'aria-label': V.intl.string(V.t.Zhcj9f),
                                children: (0, i.jsx)(m.Fbu, {
                                    color: 'currentColor',
                                    size: 'md',
                                    'aria-label': V.intl.string(V.t.QqTz8f)
                                })
                            })
                        })
                    });
                }
            })
        ]
    });
}
function X(e) {
    let t,
        { fetching: r, accounts: s, theme: l, locale: a } = e,
        o = (0, d.C)('user-settings-connections');
    return (
        (t = r
            ? (0, i.jsx)(m.$jN, {
                  className: F.marginTop20,
                  type: m.$jN.Type.SPINNING_CIRCLE
              })
            : 0 === s.length
              ? (0, i.jsxs)(m.ubH, {
                    className: F.marginTop40,
                    theme: l,
                    children: [
                        !o &&
                            (0, i.jsx)(m.oxh, {
                                darkSrc: n(703152),
                                lightSrc: n(548617),
                                width: 230,
                                height: 220
                            }),
                        (0, i.jsx)(m.OZU, {
                            note: V.intl.string(V.t.WenGZ2),
                            children: V.intl.string(V.t['aoLS8/'])
                        })
                    ]
                })
              : s
                    .filter((e) => x.Z.isSupported(e.type))
                    .map((e, t) =>
                        (0, i.jsx)(
                            Y,
                            {
                                theme: l,
                                account: e,
                                locale: a,
                                onDisconnect: () =>
                                    (function (e) {
                                        let { type: t, id: n } = e;
                                        p.Z.disconnect(t, n);
                                    })(e)
                            },
                            t
                        )
                    )),
        (0, i.jsx)(m.xJW, {
            className: G.connectionList,
            children: t
        })
    );
}
let Q = () => {
    let e = (0, a.e7)([A.Z], () => A.Z.hidePersonalInformation),
        t = (0, a.e7)([I.Z], () => I.Z.isFetching()),
        n = (0, a.e7)([I.Z], () => I.Z.getAccounts()),
        s = (0, _.ZP)();
    (0, a.e7)([y.ZP], () => y.ZP.getFlattenedGuildIds());
    let l = (0, a.e7)([D.default], () => D.default.locale);
    return (r.useEffect(() => {
        p.Z.fetch();
    }, []),
    e)
        ? (0, i.jsx)(h.Z, {})
        : (0, i.jsxs)(m.hjN, {
              className: G.__invalid_connections,
              tag: m.RB0.H1,
              title: V.intl.string(V.t['3fe7U1']),
              children: [
                  (0, i.jsx)(W, {}),
                  (0, i.jsx)(X, {
                      fetching: t,
                      accounts: n,
                      theme: s,
                      locale: l
                  })
              ]
          });
};

(n.d(t, { Z: () => J }), n(388685), n(539854), n(457542));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(704215),
    c = n(692547),
    d = n(780384),
    u = n(755721),
    m = n(481060),
    p = n(570140),
    g = n(457330),
    h = n(497321),
    f = n(23551),
    b = n(468026),
    x = n(410030),
    _ = n(726542),
    j = n(122021),
    E = n(275759),
    C = n(231757),
    O = n(888496),
    v = n(266454),
    S = n(565138),
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
let W = (e) => {
    var t, n;
    let r,
        { integration: s } = e,
        {
            isJoining: a,
            joinErrorMessage: o,
            showJoinErrorMessage: c
        } = (0, l.cj)(
            [I.Z],
            () => ({
                isJoining: I.Z.isJoining(s.id),
                joinErrorMessage: '' === I.Z.joinErrorMessage(s.id) ? V.intl.string(V.t.j2d6Ki) : I.Z.joinErrorMessage(s.id),
                showJoinErrorMessage: void 0 !== I.Z.joinErrorMessage(s.id)
            }),
            [s.id]
        );
    return (
        null != (0, l.e7)([N.Z], () => N.Z.getGuild(s.guild.id), [s.guild.id]) ||
            (r = (0, i.jsx)(u.zx, {
                size: u.Ph.SMALL,
                onClick: function () {
                    g.Z.joinServer(s.id, () => {});
                },
                disabled: a,
                children: (0, i.jsx)('span', { children: a ? V.intl.string(V.t.RXvQQk) : V.intl.string(V.t.XpeFYm) })
            })),
        (0, i.jsxs)('div', {
            className: G.integrationWrapper,
            children: [
                (0, i.jsxs)('div', {
                    className: G.integration,
                    children: [
                        (0, i.jsx)(S.Z, {
                            size: S.Z.Sizes.SMALL,
                            guild: s.guild,
                            className: G.guildIcon
                        }),
                        (0, i.jsxs)('div', {
                            className: G.integrationInner,
                            children: [
                                (0, i.jsx)(m.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'header-primary',
                                    children: s.guild.name
                                }),
                                (0, i.jsx)(m.eee, {
                                    href: null == (n = _.Z.get(s.type)) || null == (t = n.getPlatformUserUrl) ? void 0 : t.call(n, s.account),
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
function z(e) {
    var t;
    let n,
        s,
        a,
        { onDisconnect: l, account: o, theme: p, locale: h } = e,
        [f, x] = r.useState(o.friendSync),
        [v, S] = r.useState(o.visibility),
        [I, N] = r.useState(o.metadataVisibility),
        [y, A] = r.useState(o.showActivity),
        [P, D] = r.useState(null),
        [U, F] = r.useState(null),
        [z, Y] = r.useState(!1),
        [K, q] = r.useState([]),
        X = (0, j.rR)(o.type),
        J = _.Z.get(X);
    r.useEffect(() => {
        (x(o.friendSync), S(o.visibility), N(o.metadataVisibility), A(o.showActivity));
    }, [o]);
    let Q = {
            inProgressVisibility: P,
            inProgressMetadataVisibility: U
        },
        $ = r.useRef(Q);
    (r.useEffect(() => {
        $.current = Q;
    }),
        r.useEffect(() => {
            if (!1 === o.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = $.current;
            (null != e && (S(e), g.Z.setVisibility(o.type, o.id, e), D(null)), null != t && (N(t), g.Z.setMetadataVisibility(o.type, o.id, t), F(null)));
        }, [o]));
    function ee() {
        let e = _.Z.get(o.type),
            t = V.intl.format(V.t.VgqIPj, { provider: e.name });
        ((0, Z.Z)(o) &&
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
                            onConfirm: l
                        },
                        n
                    )
                )
            ));
    }
    return (0, i.jsxs)('div', {
        className: G.connection,
        children: [
            (function (e) {
                var t;
                let n = _.Z.get(e.type),
                    r = _.Z.get(X),
                    s = '1' === (null != (t = e.metadata) ? t : {})[M.PC.TWITTER_VERIFIED],
                    a = null;
                return (
                    n.type === B.ABu.TWITTER &&
                        s &&
                        (a = (0, i.jsx)(m.ua7, {
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
                                src: (0, d.wj)(p) ? r.icon.darkSVG : r.icon.lightSVG
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
                                            null != a &&
                                                (0, i.jsx)('div', {
                                                    className: G.connectionAccountLabelVerified,
                                                    children: a
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
                                onClick: ee,
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
                    s = (0, E.FI)(n[M.PC.CREATED_AT], h);
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
                let a = K.includes(e.id),
                    l = V.intl.string(V.t.wzzjk5);
                if (null == r || 0 === r.length)
                    if (!0 !== _.Z.get(e.type).hasMetadata) return null;
                    else
                        ((r = [
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
                            (l = V.intl.string(V.t['LVh3//'])));
                return (
                    a && (l = V.intl.string(V.t.i4jeWV)),
                    r.push(
                        (0, i.jsx)(
                            u.zx,
                            {
                                className: G.metadataRefreshButton,
                                color: a ? u.zx.Colors.GREEN : u.zx.Colors.BRAND,
                                size: u.zx.Sizes.SMALL,
                                submitting: z,
                                disabled: a,
                                'aria-label': V.intl.string(V.t.sCkLYG),
                                onClick: a
                                    ? void 0
                                    : () => {
                                          (Y(!0),
                                              g.Z.refresh(e.type, e.id).finally(() => {
                                                  setTimeout(() => {
                                                      (K.push(e.id), q(K), Y(!1));
                                                  }, 2000);
                                              }));
                                      },
                                children: l
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
                    value: f,
                    onChange: function (e) {
                        (x(e), g.Z.setFriendSync(o.type, o.id, e));
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
                    value: y,
                    onChange: function (e) {
                        (A(e), g.Z.setShowActivity(o.type, o.id, e));
                    },
                    children: (0, i.jsx)(m.Text, {
                        variant: 'text-sm/semibold',
                        children: V.intl.format(V.t['6u6J0t'], { platform: J.name })
                    })
                })),
            (null == (t = _.Z.get(o.type)) ? void 0 : t.hasMetadata) === !0 &&
                (a = (0, i.jsx)(m.j7V, {
                    className: G.connectionOptionSwitch,
                    hideBorder: !0,
                    value: 1 === I,
                    onChange: function (e) {
                        let { verified: t } = o,
                            n = +!!e;
                        if (e && !t) {
                            (F(n),
                                (0, C.Z)({
                                    platformType: o.type,
                                    location: 'User Settings'
                                }));
                            return;
                        }
                        (N(n), g.Z.setMetadataVisibility(o.type, o.id, n));
                    },
                    disabled: 1 !== v || null == o.metadata,
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
                            value: 1 === v,
                            onChange: function (e) {
                                let { verified: t } = o,
                                    n = +!!e;
                                if (e && !t) {
                                    (D(n),
                                        (0, C.Z)({
                                            platformType: o.type,
                                            location: 'User Settings'
                                        }));
                                    return;
                                }
                                (S(n), g.Z.setVisibility(o.type, o.id, n));
                            },
                            children: (0, i.jsx)(m.Text, {
                                variant: 'text-sm/semibold',
                                children: V.intl.string(V.t.f7yOAQ)
                            })
                        }),
                        a,
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
                            (0, i.jsx)('div', { children: o.integrations.map((e) => (0, i.jsx)(W, { integration: e }, e.id)) })
                        ]
                    })
                  : void 0
        ]
    });
}
function Y() {
    return (
        r.useEffect(
            () => () => {
                (0, v.Q3)(o.z.NEW_CRUNCHYROLL_CONNECTION, { dismissAction: U.L.AUTO });
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
    let t = _.Z.get(e);
    ((0, C.Z)({ platformType: t.type }),
        P.default.track(B.rMx.ACCOUNT_LINK_STEP, {
            previous_step: 'desktop connections',
            current_step: 'desktop oauth',
            platform_type: t.type
        }));
}
function q() {
    function e() {
        p.Z.dispatch({
            type: 'CONNECTIONS_GRID_MODAL_SHOW',
            onComplete: K
        });
    }
    let t = (0, j.fq)();
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
                        className: a()(G.accountAddWrapper, G.__invalid_accountButton),
                        children: (0, i.jsx)(m.tEY, {
                            children: (0, i.jsx)('button', {
                                onMouseEnter: n,
                                onMouseLeave: r,
                                className: a()(G.accountAddInner, G.accountButtonInner),
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
        { fetching: n, accounts: r, theme: s, locale: a } = e;
    return (
        (t = n
            ? (0, i.jsx)(m.$jN, {
                  className: F.marginTop20,
                  type: m.$jN.Type.SPINNING_CIRCLE
              })
            : 0 === r.length
              ? (0, i.jsx)(m.ubH, {
                    className: F.marginTop40,
                    theme: s,
                    children: (0, i.jsx)(m.OZU, {
                        note: V.intl.string(V.t.WenGZ2),
                        children: V.intl.string(V.t['aoLS8/'])
                    })
                })
              : r
                    .filter((e) => _.Z.isSupported(e.type))
                    .map((e, t) =>
                        (0, i.jsx)(
                            z,
                            {
                                theme: s,
                                account: e,
                                locale: a,
                                onDisconnect: () =>
                                    (function (e) {
                                        let { type: t, id: n } = e;
                                        g.Z.disconnect(t, n);
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
let J = () => {
    let e = (0, l.e7)([A.Z], () => A.Z.hidePersonalInformation),
        t = (0, l.e7)([I.Z], () => I.Z.isFetching()),
        n = (0, l.e7)([I.Z], () => I.Z.getAccounts()),
        s = (0, x.ZP)();
    (0, l.e7)([y.ZP], () => y.ZP.getFlattenedGuildIds());
    let a = (0, l.e7)([D.default], () => D.default.locale);
    return (r.useEffect(() => {
        g.Z.fetch();
    }, []),
    e)
        ? (0, i.jsx)(h.Z, {})
        : (0, i.jsxs)(m.hjN, {
              className: G.__invalid_connections,
              tag: m.RB0.H1,
              title: V.intl.string(V.t['3fe7U1']),
              children: [
                  (0, i.jsx)(Y, {}),
                  (0, i.jsx)(X, {
                      fetching: t,
                      accounts: n,
                      theme: s,
                      locale: a
                  })
              ]
          });
};

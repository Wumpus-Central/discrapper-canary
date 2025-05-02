n.d(t, { Z: () => X }), n(388685), n(539854), n(457542);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(704215),
    c = n(692547),
    d = n(780384),
    u = n(481060),
    m = n(570140),
    p = n(457330),
    g = n(497321),
    h = n(23551),
    f = n(468026),
    b = n(410030),
    _ = n(726542),
    x = n(122021),
    E = n(275759),
    j = n(231757),
    C = n(888496),
    O = n(605236),
    S = n(565138),
    v = n(297700),
    T = n(553795),
    I = n(430824),
    N = n(771845),
    y = n(246946),
    A = n(626135),
    P = n(63063),
    R = n(706454),
    D = n(349728),
    Z = n(494620),
    w = n(205266),
    k = n(216153),
    L = n(981631),
    B = n(856651),
    M = n(921944),
    U = n(388032),
    V = n(741138),
    G = n(20493);
function F(e) {
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
let H = (e) => {
    var t, n;
    let r,
        { integration: s } = e,
        {
            isJoining: l,
            joinErrorMessage: o,
            showJoinErrorMessage: c
        } = (0, a.cj)(
            [T.Z],
            () => ({
                isJoining: T.Z.isJoining(s.id),
                joinErrorMessage: '' === T.Z.joinErrorMessage(s.id) ? U.intl.string(U.t.j2d6Ki) : T.Z.joinErrorMessage(s.id),
                showJoinErrorMessage: void 0 !== T.Z.joinErrorMessage(s.id)
            }),
            [s.id]
        );
    return (
        null != (0, a.e7)([I.Z], () => I.Z.getGuild(s.guild.id), [s.guild.id]) ||
            (r = (0, i.jsx)(u.zxk, {
                size: u.PhG.SMALL,
                onClick: function () {
                    p.Z.joinServer(s.id, () => {});
                },
                disabled: l,
                children: (0, i.jsx)('span', { children: l ? U.intl.string(U.t.RXvQQk) : U.intl.string(U.t.XpeFYm) })
            })),
        (0, i.jsxs)('div', {
            className: V.integrationWrapper,
            children: [
                (0, i.jsxs)('div', {
                    className: V.integration,
                    children: [
                        (0, i.jsx)(S.Z, {
                            size: S.Z.Sizes.SMALL,
                            guild: s.guild,
                            className: V.guildIcon
                        }),
                        (0, i.jsxs)('div', {
                            className: V.integrationInner,
                            children: [
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'header-primary',
                                    children: s.guild.toString()
                                }),
                                (0, i.jsx)(u.eee, {
                                    href: null == (n = _.Z.get(s.type)) || null == (t = n.getPlatformUserUrl) ? void 0 : t.call(n, s.account),
                                    children: (0, i.jsx)(u.Text, {
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
                    (0, i.jsx)(u.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-danger',
                        className: V.integrationError,
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
        l,
        { onDisconnect: a, account: o, theme: m, locale: g } = e,
        [h, b] = r.useState(o.friendSync),
        [O, S] = r.useState(o.visibility),
        [T, I] = r.useState(o.metadataVisibility),
        [N, y] = r.useState(o.showActivity),
        [A, R] = r.useState(null),
        [M, G] = r.useState(null),
        [z, W] = r.useState(!1),
        [Y, K] = r.useState([]),
        q = (0, x.rR)(o.type),
        X = _.Z.get(q);
    r.useEffect(() => {
        b(o.friendSync), S(o.visibility), I(o.metadataVisibility), y(o.showActivity);
    }, [o]);
    let Q = {
            inProgressVisibility: A,
            inProgressMetadataVisibility: M
        },
        J = r.useRef(Q);
    r.useEffect(() => {
        J.current = Q;
    }),
        r.useEffect(() => {
            if (!1 === o.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = J.current;
            null != e && (S(e), p.Z.setVisibility(o.type, o.id, e), R(null)), null != t && (I(t), p.Z.setMetadataVisibility(o.type, o.id, t), G(null));
        }, [o]);
    function $() {
        let e = _.Z.get(o.type),
            t = U.intl.string(U.t.apVJu7);
        (0, D.Z)(o) &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    t,
                    (0, i.jsx)(Z.Z, {
                        className: V.infoBox,
                        children: U.intl.format(U.t.COW3Xl, { platformName: e.name })
                    })
                ]
            })),
            (0, u.h7j)((n) =>
                (0, i.jsx)(
                    f.default,
                    F(
                        {
                            title: U.intl.formatToPlainString(U.t.U5x12d, { name: e.name }),
                            body: t,
                            confirmText: U.intl.string(U.t.bsbMV1),
                            cancelText: U.intl.string(U.t['ETE/oK']),
                            onConfirm: a
                        },
                        n
                    )
                )
            );
    }
    return (0, i.jsxs)('div', {
        className: V.connection,
        children: [
            (function (e) {
                var t;
                let n = _.Z.get(e.type),
                    r = _.Z.get(q),
                    s = '1' === (null != (t = e.metadata) ? t : {})[B.PC.TWITTER_VERIFIED],
                    l = null;
                return (
                    n.type === L.ABu.TWITTER &&
                        s &&
                        (l = (0, i.jsx)(u.ua7, {
                            text: U.intl.string(U.t.Jebrw8),
                            children: (e) => {
                                var t, n;
                                return (0, i.jsx)(
                                    v.Z,
                                    ((t = F({}, e)),
                                    (n = n =
                                        {
                                            color: c.Z.unsafe_rawColors.TWITTER.css,
                                            children: (0, i.jsx)(u.kmB, {
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
                        className: V.connectionHeader,
                        children: [
                            (0, i.jsx)('img', {
                                alt: r.name,
                                className: V.connectionIcon,
                                src: (0, d.wj)(m) ? r.icon.darkSVG : r.icon.lightSVG
                            }),
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: V.connectionAccountLabelContainer,
                                        children: [
                                            (0, i.jsx)(u.Text, {
                                                color: 'header-primary',
                                                variant: 'text-md/semibold',
                                                className: V.connectionAccountValue,
                                                children: e.name
                                            }),
                                            null != l &&
                                                (0, i.jsx)('div', {
                                                    className: V.connectionAccountLabelVerified,
                                                    children: l
                                                })
                                        ]
                                    }),
                                    (0, i.jsx)(u.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        className: V.connectionAccountLabel,
                                        children: r.name
                                    })
                                ]
                            }),
                            (0, i.jsx)(u.P3F, {
                                className: V.connectionDelete,
                                onClick: $,
                                'aria-label': U.intl.string(U.t.ppppRE),
                                focusProps: {
                                    offset: {
                                        top: -4,
                                        left: -4,
                                        right: -4
                                    }
                                },
                                children: (0, i.jsx)(u.Dio, {
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
                : o.type === L.ABu.XBOX
                  ? (0, i.jsx)('div', {
                        className: V.upsellWrapper,
                        children: (0, i.jsx)(k.Y, {})
                    })
                  : o.type === L.ABu.PLAYSTATION
                    ? (0, i.jsx)('div', {
                          className: V.upsellWrapper,
                          children: (0, i.jsx)(w.t, {})
                      })
                    : null,
            (function (e) {
                var t;
                let n = null != (t = e.metadata) ? t : {},
                    r = null,
                    s = (0, E.FI)(n[B.PC.CREATED_AT], g);
                switch (e.type) {
                    case L.ABu.REDDIT:
                        r = (0, C.oP)(n, V.metadataItem);
                        break;
                    case L.ABu.STEAM:
                        r = (0, C.Dq)(n, V.metadataItem);
                        break;
                    case L.ABu.BLUESKY:
                    case L.ABu.TWITTER:
                    case L.ABu.MASTODON:
                        r = (0, C.rJ)(n, V.metadataItem);
                        break;
                    case L.ABu.EBAY:
                        r = (0, C.ul)(n, V.metadataItem);
                        break;
                    case L.ABu.PAYPAL:
                        r = (0, C.li)(n, V.metadataItem);
                        break;
                    case L.ABu.TIKTOK:
                        r = (0, C.hf)(n, V.metadataItem);
                }
                null !== s &&
                    (null == r && (r = []),
                    null == r ||
                        r.push(
                            (0, i.jsx)(
                                u.Text,
                                {
                                    variant: 'text-xs/normal',
                                    color: 'interactive-active',
                                    className: V.connectedAccountVanityMetadataCreatedAt,
                                    children: U.intl.format(U.t['9rfonp'], { date: s })
                                },
                                'member-since'
                            )
                        ));
                let l = Y.includes(e.id),
                    a = U.intl.string(U.t.wzzjk5);
                if (null == r || 0 === r.length)
                    if (!0 !== _.Z.get(e.type).hasMetadata) return null;
                    else
                        (r = [
                            (0, i.jsx)(
                                u.IGR,
                                {
                                    className: V.connectionMetadataUpsellTag,
                                    text: U.intl.string(U.t.y2b7CA)
                                },
                                'badge'
                            ),
                            (0, i.jsx)(
                                u.Text,
                                {
                                    variant: 'text-xs/normal',
                                    className: V.connectionMetadataUpsellDescription,
                                    children: U.intl.format(U.t.Up2ni4, { helpdeskUrl: P.Z.getArticleURL(L.BhN.CONNECTION_DETAILS) })
                                },
                                'label'
                            )
                        ]),
                            (a = U.intl.string(U.t['LVh3//']));
                return (
                    l && (a = U.intl.string(U.t.i4jeWV)),
                    r.push(
                        (0, i.jsx)(
                            u.zxk,
                            {
                                className: V.metadataRefreshButton,
                                color: l ? u.zxk.Colors.GREEN : u.zxk.Colors.BRAND,
                                size: u.zxk.Sizes.SMALL,
                                submitting: z,
                                disabled: l,
                                'aria-label': U.intl.string(U.t.sCkLYG),
                                onClick: l
                                    ? void 0
                                    : () => {
                                          W(!0),
                                              p.Z.refresh(e.type, e.id).finally(() => {
                                                  setTimeout(() => {
                                                      Y.push(e.id), K(Y), W(!1);
                                                  }, 2000);
                                              });
                                      },
                                children: a
                            },
                            'refresh-button'
                        )
                    ),
                    (0, i.jsx)('div', {
                        className: V.metadataContainer,
                        children: r
                    })
                );
            })(o),
            (L.BFP.has(o.type) &&
                (n = (0, i.jsx)(u.j7V, {
                    className: V.connectionOptionSwitch,
                    hideBorder: !0,
                    value: h,
                    onChange: function (e) {
                        b(e), p.Z.setFriendSync(o.type, o.id, e);
                    },
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-sm/semibold',
                        children: U.intl.string(U.t['+KCMSk'])
                    })
                })),
            L.vbS.has(o.type) &&
                (s = (0, i.jsx)(u.j7V, {
                    className: V.connectionOptionSwitch,
                    hideBorder: !0,
                    value: N,
                    onChange: function (e) {
                        y(e), p.Z.setShowActivity(o.type, o.id, e);
                    },
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-sm/semibold',
                        children: U.intl.format(U.t['6u6J0t'], { platform: X.name })
                    })
                })),
            (null == (t = _.Z.get(o.type)) ? void 0 : t.hasMetadata) === !0 &&
                (l = (0, i.jsx)(u.j7V, {
                    className: V.connectionOptionSwitch,
                    hideBorder: !0,
                    value: 1 === T,
                    onChange: function (e) {
                        let { verified: t } = o,
                            n = +!!e;
                        if (e && !t) {
                            G(n),
                                (0, j.Z)({
                                    platformType: o.type,
                                    location: 'User Settings'
                                });
                            return;
                        }
                        I(n), p.Z.setMetadataVisibility(o.type, o.id, n);
                    },
                    disabled: 1 !== O || null == o.metadata,
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-sm/semibold',
                        children: U.intl.string(U.t.FYKGsL)
                    })
                })),
            (0, i.jsx)('div', {
                className: V.connectionOptionsWrapper,
                children: (0, i.jsxs)('div', {
                    className: V.connectionOptions,
                    children: [
                        (0, i.jsx)(u.j7V, {
                            className: V.connectionOptionSwitch,
                            hideBorder: !0,
                            value: 1 === O,
                            onChange: function (e) {
                                let { verified: t } = o,
                                    n = +!!e;
                                if (e && !t) {
                                    R(n),
                                        (0, j.Z)({
                                            platformType: o.type,
                                            location: 'User Settings'
                                        });
                                    return;
                                }
                                S(n), p.Z.setVisibility(o.type, o.id, n);
                            },
                            children: (0, i.jsx)(u.Text, {
                                variant: 'text-sm/semibold',
                                children: U.intl.string(U.t.f7yOAQ)
                            })
                        }),
                        l,
                        s,
                        n
                    ]
                })
            })),
            (function () {
                if (o.revoked || o.integrations.length > 0) return (0, i.jsx)(u.$i$, { className: V.connectedAccountSeparator });
            })(),
            o.revoked
                ? (0, i.jsx)(u.xJW, {
                      className: V.integrationsWrapper,
                      children: (0, i.jsx)(u.R94, {
                          className: V.integrationRevoked,
                          children: U.intl.format(U.t['6C4lgI'], {
                              onReconnect: function () {
                                  (0, j.Z)({
                                      platformType: o.type,
                                      location: 'User Settings'
                                  });
                              }
                          })
                      })
                  })
                : o.integrations.length > 0
                  ? (0, i.jsxs)(u.xJW, {
                        className: V.integrationsWrapper,
                        children: [
                            (0, i.jsx)(u.vwX, {
                                tag: u.RB0.H5,
                                children: (0, i.jsx)(u.Text, {
                                    variant: 'text-xs/semibold',
                                    children: U.intl.string(U.t.fOe3fX)
                                })
                            }),
                            (0, i.jsx)('div', { children: o.integrations.map((e) => (0, i.jsx)(H, { integration: e }, e.id)) })
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
                (0, O.EW)(o.z.NEW_CRUNCHYROLL_CONNECTION, { dismissAction: M.L.AUTO });
            },
            []
        ),
        (0, i.jsxs)('div', {
            className: V.connectContainer,
            children: [
                (0, i.jsx)(u.X6q, {
                    variant: 'heading-md/bold',
                    color: 'interactive-active',
                    className: V.connectHeader,
                    children: U.intl.string(U.t.ZeDrUV)
                }),
                (0, i.jsx)(u.Text, {
                    variant: 'text-xs/normal',
                    color: 'header-secondary',
                    children: U.intl.format(U.t['oYc+Gx'], { privacyPolicyUrl: L.EYA.PRIVACY })
                }),
                (0, i.jsx)(K, {})
            ]
        })
    );
}
function Y(e) {
    let t = _.Z.get(e);
    (0, j.Z)({ platformType: t.type }),
        A.default.track(L.rMx.ACCOUNT_LINK_STEP, {
            previous_step: 'desktop connections',
            current_step: 'desktop oauth',
            platform_type: t.type
        });
}
function K() {
    function e() {
        m.Z.dispatch({
            type: 'CONNECTIONS_GRID_MODAL_SHOW',
            onComplete: Y
        });
    }
    let t = (0, x.fq)();
    return (0, i.jsxs)('div', {
        className: V.connectionsContainer,
        children: [
            t.slice(0, 10).map((e) =>
                (0, i.jsx)(
                    h.Z,
                    {
                        type: e.type,
                        className: V.__invalid_accountButton,
                        innerClassName: V.accountButtonInner
                    },
                    e.type
                )
            ),
            (0, i.jsx)(u.ua7, {
                text: U.intl.string(U.t.QqTz8f),
                children: (t) => {
                    let { onMouseEnter: n, onMouseLeave: r } = t;
                    return (0, i.jsx)('div', {
                        className: l()(V.accountAddWrapper, V.__invalid_accountButton),
                        children: (0, i.jsx)(u.tEY, {
                            children: (0, i.jsx)('button', {
                                onMouseEnter: n,
                                onMouseLeave: r,
                                className: l()(V.accountAddInner, V.accountButtonInner),
                                type: 'button',
                                onClick: e,
                                'aria-label': U.intl.string(U.t.Zhcj9f),
                                children: (0, i.jsx)(u.Fbu, {
                                    color: 'currentColor',
                                    size: 'md',
                                    'aria-label': U.intl.string(U.t.QqTz8f)
                                })
                            })
                        })
                    });
                }
            })
        ]
    });
}
function q(e) {
    let t,
        { fetching: r, accounts: s, theme: l, locale: a } = e;
    return (
        (t = r
            ? (0, i.jsx)(u.$jN, {
                  className: G.marginTop20,
                  type: u.$jN.Type.SPINNING_CIRCLE
              })
            : 0 === s.length
              ? (0, i.jsxs)(u.ubH, {
                    className: G.marginTop40,
                    theme: l,
                    children: [
                        (0, i.jsx)(u.oxh, {
                            darkSrc: n(703152),
                            lightSrc: n(548617),
                            width: 230,
                            height: 220
                        }),
                        (0, i.jsx)(u.OZU, {
                            note: U.intl.string(U.t.WenGZ2),
                            children: U.intl.string(U.t['aoLS8/'])
                        })
                    ]
                })
              : s
                    .filter((e) => _.Z.isSupported(e.type))
                    .map((e, t) =>
                        (0, i.jsx)(
                            z,
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
        (0, i.jsx)(u.xJW, {
            className: V.connectionList,
            children: t
        })
    );
}
let X = () => {
    let e = (0, a.e7)([y.Z], () => y.Z.hidePersonalInformation),
        t = (0, a.e7)([T.Z], () => T.Z.isFetching()),
        n = (0, a.e7)([T.Z], () => T.Z.getAccounts()),
        s = (0, b.ZP)();
    (0, a.e7)([N.ZP], () => N.ZP.getFlattenedGuildIds());
    let l = (0, a.e7)([R.default], () => R.default.locale);
    return (r.useEffect(() => {
        p.Z.fetch();
    }, []),
    e)
        ? (0, i.jsx)(g.Z, {})
        : (0, i.jsxs)(u.hjN, {
              className: V.__invalid_connections,
              tag: u.RB0.H1,
              title: U.intl.string(U.t['3fe7U1']),
              children: [
                  (0, i.jsx)(W, {}),
                  (0, i.jsx)(q, {
                      fetching: t,
                      accounts: n,
                      theme: s,
                      locale: l
                  })
              ]
          });
};

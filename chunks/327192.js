n.d(t, {
    ZP: () => J,
    mN: () => K,
    vq: () => X,
}),
    n(388685),
    n(539854),
    n(457542);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(692547),
    u = n(28664),
    d = n(780384),
    f = n(481060),
    p = n(570140),
    _ = n(457330),
    m = n(497321),
    h = n(23551),
    g = n(410030),
    E = n(726542),
    b = n(122021),
    y = n(275759),
    O = n(231757),
    v = n(888496),
    S = n(565138),
    I = n(297700),
    T = n(553795),
    C = n(430824),
    A = n(246946),
    N = n(626135),
    P = n(63063),
    R = n(706454),
    w = n(526665),
    D = n(349728),
    x = n(494620),
    L = n(273313),
    j = n(205266),
    M = n(216153),
    k = n(981631),
    U = n(856651),
    G = n(388032),
    Z = n(454578);
function F(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                F(e, t, n[t]);
            });
    }
    return e;
}
function V(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function H(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : V(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Y = (e) => {
    var t, n;
    let i,
        { integration: a } = e,
        {
            isJoining: o,
            joinErrorMessage: s,
            showJoinErrorMessage: c,
        } = (0, l.cj)(
            [T.Z],
            () => ({
                isJoining: T.Z.isJoining(a.id),
                joinErrorMessage:
                    "" === T.Z.joinErrorMessage(a.id) ? G.intl.string(G.t.j2d6Km) : T.Z.joinErrorMessage(a.id),
                showJoinErrorMessage: void 0 !== T.Z.joinErrorMessage(a.id),
            }),
            [a.id],
        );
    function u() {
        _.Z.joinServer(a.id, () => {});
    }
    return (
        null == (0, l.e7)([C.Z], () => C.Z.getGuild(a.guild.id), [a.guild.id]) &&
            (i = (0, r.jsx)(f.Button, {
                size: "sm",
                onClick: u,
                disabled: o,
                variant: "primary",
                text: o ? G.intl.string(G.t.RXvQQu) : G.intl.string(G.t.XpeFYr),
            })),
        (0, r.jsxs)("div", {
            className: Z.integrationWrapper,
            children: [
                (0, r.jsxs)("div", {
                    className: Z.integration,
                    children: [
                        (0, r.jsx)(S.Z, {
                            size: S.Z.Sizes.SMALL,
                            guild: a.guild,
                            className: Z.guildIcon,
                        }),
                        (0, r.jsxs)("div", {
                            className: Z.integrationInner,
                            children: [
                                (0, r.jsx)(f.Text, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: a.guild.name,
                                }),
                                (0, r.jsx)(f.Anchor, {
                                    href:
                                        null == (n = E.Z.get(a.type)) || null == (t = n.getPlatformUserUrl)
                                            ? void 0
                                            : t.call(n, a.account),
                                    children: (0, r.jsx)(f.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: a.account.name,
                                    }),
                                }),
                            ],
                        }),
                        i,
                    ],
                }),
                c &&
                    (0, r.jsx)(f.Text, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: Z.integrationError,
                        children: s,
                    }),
            ],
        })
    );
};
function W(e) {
    let { onDisconnect: t, account: n, theme: a, locale: l } = e,
        [p, m] = i.useState(n.friendSync),
        [h, g] = i.useState(n.visibility),
        [S, T] = i.useState(n.metadataVisibility),
        [C, A] = i.useState(n.showActivity),
        [N, R] = i.useState(null),
        [L, F] = i.useState(null),
        [V, W] = i.useState(!1),
        [K, z] = i.useState([]),
        q = (0, b.rR)(n.type),
        Q = E.Z.get(q);
    i.useEffect(() => {
        m(n.friendSync), g(n.visibility), T(n.metadataVisibility), A(n.showActivity);
    }, [n]);
    let X = {
            inProgressVisibility: N,
            inProgressMetadataVisibility: L,
        },
        J = i.useRef(X);
    function $(e) {
        var t;
        let n = E.Z.get(e.type),
            i = E.Z.get(q),
            o = "1" === (null != (t = e.metadata) ? t : {})[U.PC.TWITTER_VERIFIED],
            s = null;
        return (
            n.type === k.ABu.TWITTER &&
                o &&
                (s = (0, r.jsx)(u.u, {
                    text: G.intl.string(G.t.Jebrww),
                    children: (0, r.jsx)(I.Z, {
                        color: c.Z.unsafe_rawColors.TWITTER.css,
                        children: (0, r.jsx)(f.kmB, {
                            size: "xs",
                            color: c.Z.unsafe_rawColors.WHITE_500.css,
                        }),
                    }),
                })),
            (0, r.jsxs)("div", {
                className: Z.connectionHeader,
                children: [
                    (0, r.jsx)("img", {
                        alt: i.name,
                        className: Z.connectionIcon,
                        src: (0, d.wj)(a) ? i.icon.darkSVG : i.icon.lightSVG,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: Z.connectionAccountLabelContainer,
                                children: [
                                    (0, r.jsx)(f.Text, {
                                        color: "text-strong",
                                        variant: "text-md/semibold",
                                        className: Z.connectionAccountValue,
                                        children: e.name,
                                    }),
                                    null != s &&
                                        (0, r.jsx)("div", {
                                            className: Z.connectionAccountLabelVerified,
                                            children: s,
                                        }),
                                ],
                            }),
                            (0, r.jsx)(f.Text, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                className: Z.connectionAccountLabel,
                                children: i.name,
                            }),
                        ],
                    }),
                    (0, r.jsx)(f.P3F, {
                        className: Z.connectionDelete,
                        onClick: eo,
                        "aria-label": G.intl.string(G.t.ppppRJ),
                        focusProps: {
                            offset: {
                                top: -4,
                                left: -4,
                                right: -4,
                            },
                        },
                        children: (0, r.jsx)(f.Dio, {
                            size: "xs",
                            color: "currentColor",
                        }),
                    }),
                ],
            })
        );
    }
    function ee(e) {
        return e.twoWayLink
            ? null
            : e.type === k.ABu.XBOX
              ? (0, r.jsx)(M.Y, {})
              : e.type === k.ABu.PLAYSTATION
                ? (0, r.jsx)(j.t, {})
                : null;
    }
    function et(e) {
        var t;
        let n = null != (t = e.metadata) ? t : {},
            i = null,
            a = (0, y.FI)(n[U.PC.CREATED_AT], l);
        switch (e.type) {
            case k.ABu.REDDIT:
                i = (0, v.oP)(n, Z.metadataItem);
                break;
            case k.ABu.STEAM:
                i = (0, v.Dq)(n, Z.metadataItem);
                break;
            case k.ABu.BLUESKY:
            case k.ABu.TWITTER:
            case k.ABu.MASTODON:
                i = (0, v.rJ)(n, Z.metadataItem);
                break;
            case k.ABu.EBAY:
                i = (0, v.ul)(n, Z.metadataItem);
                break;
            case k.ABu.PAYPAL:
                i = (0, v.li)(n, Z.metadataItem);
                break;
            case k.ABu.TIKTOK:
                i = (0, v.hf)(n, Z.metadataItem);
        }
        null !== a &&
            (null == i && (i = []),
            null == i ||
                i.push(
                    (0, r.jsx)(
                        f.Text,
                        {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            className: Z.connectedAccountVanityMetadataCreatedAt,
                            children: G.intl.format(G.t["9rfonh"], { date: a }),
                        },
                        "member-since",
                    ),
                ));
        let o = K.includes(e.id),
            s = G.intl.string(G.t.wzzjk9);
        if (null == i || 0 === i.length)
            if (!0 !== E.Z.get(e.type).hasMetadata) return null;
            else
                (i = [
                    (0, r.jsx)(
                        f.IGR,
                        {
                            className: Z.connectionMetadataUpsellTag,
                            text: G.intl.string(G.t.y2b7CA),
                        },
                        "badge",
                    ),
                    (0, r.jsx)(
                        f.Text,
                        {
                            variant: "text-xs/normal",
                            className: Z.connectionMetadataUpsellDescription,
                            children: G.intl.format(G.t.Up2ni7, {
                                helpdeskUrl: P.Z.getArticleURL(k.BhN.CONNECTION_DETAILS),
                            }),
                        },
                        "label",
                    ),
                ]),
                    (s = G.intl.string(G.t["LVh3/5"]));
        return (
            o && (s = G.intl.string(G.t.i4jeWR)),
            i.push(
                (0, r.jsx)(
                    "div",
                    {
                        className: Z.metadataRefreshButton,
                        children: (0, r.jsx)(f.Button, {
                            text: s,
                            variant: "secondary",
                            size: "sm",
                            loading: V,
                            disabled: o,
                            "aria-label": G.intl.string(G.t.sCkLYH),
                            onClick: o
                                ? void 0
                                : () => {
                                      W(!0),
                                          _.Z.refresh(e.type, e.id).finally(() => {
                                              setTimeout(() => {
                                                  K.push(e.id), z(K), W(!1);
                                              }, 2000);
                                          });
                                  },
                        }),
                    },
                    "refresh-button",
                ),
            ),
            (0, r.jsx)("div", {
                className: Z.metadataContainer,
                children: i,
            })
        );
    }
    function en(e) {
        var t;
        let i, a, o;
        return (
            k.BFP.has(n.type) &&
                (i = (0, r.jsx)(f.rsf, {
                    label: G.intl.string(G.t["+KCMSi"]),
                    checked: p,
                    onChange: ec,
                })),
            k.vbS.has(n.type) &&
                (a = (0, r.jsx)(f.rsf, {
                    label: G.intl.format(G.t["6u6J0q"], { platform: e.name }),
                    checked: C,
                    onChange: eu,
                })),
            (null == (t = E.Z.get(n.type)) ? void 0 : t.hasMetadata) === !0 &&
                (o = (0, r.jsx)(f.rsf, {
                    label: G.intl.string(G.t.FYKGsL),
                    checked: 1 === S,
                    onChange: el,
                    disabled: 1 !== h || null == n.metadata,
                })),
            (0, r.jsxs)("div", {
                className: Z.connectionOptions,
                children: [
                    (0, r.jsx)(f.rsf, {
                        label: G.intl.string(G.t.f7yOAX),
                        checked: 1 === h,
                        onChange: es,
                    }),
                    o,
                    a,
                    i,
                ],
            })
        );
    }
    function er() {
        return n.revoked
            ? (0, r.jsx)(s.Wn, {
                  messageType: s.QYI.INFO,
                  children: G.intl.format(G.t["6C4lgA"], { onReconnect: ea }),
              })
            : n.integrations.length > 0
              ? (0, r.jsx)(f.gNt, {
                    label: G.intl.string(G.t.fOe3fZ),
                    children: n.integrations.map((e) => (0, r.jsx)(Y, { integration: e }, e.id)),
                })
              : void 0;
    }
    function ei() {
        if (n.revoked || n.integrations.length > 0) return (0, r.jsx)(f.izJ, {});
    }
    function ea() {
        (0, O.Z)({
            platformType: n.type,
            location: "User Settings",
        });
    }
    function eo() {
        let e = E.Z.get(n.type);
        (0, f.h7j)((i) =>
            (0, r.jsx)(
                s.Modal,
                H(
                    B(
                        {
                            title: G.intl.formatToPlainString(G.t.U5x12f, { name: e.name }),
                            subtitle: G.intl.format(G.t.VgqIPj, { provider: e.name }),
                            actions: [
                                {
                                    text: G.intl.string(G.t["ETE/oC"]),
                                    onClick: i.onClose,
                                    variant: "secondary",
                                },
                                {
                                    text: G.intl.string(G.t.bsbMVz),
                                    onClick: () => {
                                        t(), i.onClose();
                                    },
                                    variant: "primary",
                                },
                            ],
                        },
                        i,
                    ),
                    {
                        children:
                            (0, D.Z)(n) &&
                            (0, r.jsx)(x.Z, { children: G.intl.format(G.t.COW3Xn, { platformName: e.name }) }),
                    },
                ),
            ),
        );
    }
    function es(e) {
        let { verified: t } = n,
            r = +!!e;
        if (e && !t) {
            R(r),
                (0, O.Z)({
                    platformType: n.type,
                    location: "User Settings",
                });
            return;
        }
        g(r), _.Z.setVisibility(n.type, n.id, r);
    }
    function el(e) {
        let { verified: t } = n,
            r = +!!e;
        if (e && !t) {
            F(r),
                (0, O.Z)({
                    platformType: n.type,
                    location: "User Settings",
                });
            return;
        }
        T(r), _.Z.setMetadataVisibility(n.type, n.id, r);
    }
    function ec(e) {
        m(e), _.Z.setFriendSync(n.type, n.id, e);
    }
    function eu(e) {
        A(e), _.Z.setShowActivity(n.type, n.id, e);
    }
    i.useEffect(() => {
        J.current = X;
    }),
        i.useEffect(() => {
            if (!1 === n.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = J.current;
            null != e && (g(e), _.Z.setVisibility(n.type, n.id, e), R(null)),
                null != t && (T(t), _.Z.setMetadataVisibility(n.type, n.id, t), F(null));
        }, [n]);
    let ed = (0, w.wy)("ConnectedAccount");
    return (0, r.jsxs)("div", {
        className: o()(Z.connection, { [Z.connectionUserSettingsRedesign]: ed }),
        children: [$(n), ee(n), et(n), en(Q), ei(), er()],
    });
}
function K() {
    return (0, l.e7)([A.Z], () => A.Z.hidePersonalInformation)
        ? (0, r.jsx)(m.Z, {})
        : (0, r.jsx)(f.gNt, {
              label: G.intl.string(G.t.ZeDrUf),
              description: G.intl.format(G.t["oYc+Gz"], { privacyPolicyUrl: k.EYA.PRIVACY }),
              children: (0, r.jsx)(q, {}),
          });
}
function z(e) {
    let t = E.Z.get(e);
    (0, O.Z)({ platformType: t.type }),
        N.default.track(k.rMx.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function q() {
    function e() {
        p.Z.dispatch({
            type: "CONNECTIONS_GRID_MODAL_SHOW",
            onComplete: z,
        });
    }
    let t = (0, b.fq)();
    return (0, r.jsxs)("div", {
        className: Z.connectionsContainer,
        children: [
            t.slice(0, 10).map((e) =>
                (0, r.jsx)(
                    h.Z,
                    {
                        type: e.type,
                        className: Z.__invalid_accountButton,
                        innerClassName: Z.accountButtonInner,
                    },
                    e.type,
                ),
            ),
            (0, r.jsx)(u.u, {
                text: G.intl.string(G.t.QqTz8b),
                children: (0, r.jsx)("div", {
                    className: o()(Z.accountAddWrapper, Z.__invalid_accountButton),
                    children: (0, r.jsx)(f.tEY, {
                        children: (0, r.jsx)("button", {
                            className: o()(Z.accountAddInner, Z.accountButtonInner),
                            type: "button",
                            onClick: e,
                            "aria-label": G.intl.string(G.t.Zhcj9X),
                            children: (0, r.jsx)(f.Fbu, {
                                color: "currentColor",
                                size: "md",
                                "aria-label": G.intl.string(G.t.QqTz8b),
                            }),
                        }),
                    }),
                }),
            }),
        ],
    });
}
function Q(e) {
    let t,
        { fetching: n, accounts: i, theme: a, locale: o } = e;
    function s(e) {
        let { type: t, id: n } = e;
        _.Z.disconnect(t, n);
    }
    return (
        (t = n
            ? (0, r.jsx)(f.$jN, { type: f.$jN.Type.SPINNING_CIRCLE })
            : 0 === i.length
              ? (0, r.jsx)(f.ubH, {
                    theme: a,
                    children: (0, r.jsx)(f.OZU, {
                        note: G.intl.string(G.t.WenGZ2),
                        children: G.intl.string(G.t.aoLS84),
                    }),
                })
              : i
                    .filter((e) => E.Z.isSupported(e.type))
                    .map((e, t) =>
                        (0, r.jsx)(
                            W,
                            {
                                theme: a,
                                account: e,
                                locale: o,
                                onDisconnect: () => s(e),
                            },
                            t,
                        ),
                    )),
        (0, r.jsx)("div", {
            className: Z.connectionList,
            children: t,
        })
    );
}
function X() {
    let e = (0, l.e7)([A.Z], () => A.Z.hidePersonalInformation),
        t = (0, l.e7)([T.Z], () => T.Z.isFetching()),
        n = (0, l.e7)([T.Z], () => T.Z.getAccounts()),
        i = (0, g.ZP)(),
        a = (0, l.e7)([R.default], () => R.default.locale);
    return e
        ? null
        : (0, r.jsx)(Q, {
              fetching: t,
              accounts: n,
              theme: i,
              locale: a,
          });
}
let J = () => {
    let e = (0, l.e7)([A.Z], () => A.Z.hidePersonalInformation),
        t = (0, l.e7)([T.Z], () => T.Z.isFetching()),
        n = (0, l.e7)([T.Z], () => T.Z.getAccounts()),
        a = (0, g.ZP)(),
        o = (0, l.e7)([R.default], () => R.default.locale);
    return (i.useEffect(() => {
        _.Z.fetch();
    }, []),
    e)
        ? (0, r.jsx)(m.Z, {})
        : (0, r.jsxs)(L.Z, {
              title: G.intl.string(G.t["3fe7U5"]),
              children: [
                  (0, r.jsx)(K, {}),
                  (0, r.jsx)(f.izJ, { gap: 24 }),
                  (0, r.jsx)(Q, {
                      fetching: t,
                      accounts: n,
                      theme: a,
                      locale: o,
                  }),
              ],
          });
};

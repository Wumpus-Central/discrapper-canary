n.d(t, { Z: () => $ }), n(388685), n(539854), n(457542);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(692547),
    u = n(82659),
    d = n(780384),
    f = n(481060),
    _ = n(570140),
    p = n(457330),
    h = n(497321),
    m = n(23551),
    g = n(410030),
    E = n(726542),
    b = n(122021),
    y = n(275759),
    O = n(231757),
    v = n(888496),
    I = n(266454),
    T = n(565138),
    S = n(297700),
    A = n(553795),
    C = n(430824),
    N = n(246946),
    R = n(626135),
    P = n(63063),
    w = n(706454),
    D = n(349728),
    x = n(494620),
    L = n(273313),
    j = n(205266),
    M = n(216153),
    k = n(981631),
    U = n(856651),
    G = n(921944),
    B = n(388032),
    Z = n(465631),
    F = n(10198);
function V(e, t, n) {
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
function H(e) {
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
                V(e, t, n[t]);
            });
    }
    return e;
}
function Y(e, t) {
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
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let K = (e) => {
    var t, n;
    let i,
        { integration: a } = e,
        {
            isJoining: o,
            joinErrorMessage: l,
            showJoinErrorMessage: c,
        } = (0, s.cj)(
            [A.Z],
            () => ({
                isJoining: A.Z.isJoining(a.id),
                joinErrorMessage:
                    "" === A.Z.joinErrorMessage(a.id) ? B.intl.string(B.t.j2d6Ki) : A.Z.joinErrorMessage(a.id),
                showJoinErrorMessage: void 0 !== A.Z.joinErrorMessage(a.id),
            }),
            [a.id],
        );
    function u() {
        p.Z.joinServer(a.id, () => {});
    }
    return (
        null == (0, s.e7)([C.Z], () => C.Z.getGuild(a.guild.id), [a.guild.id]) &&
            (i = (0, r.jsx)(f.zxk, {
                size: "sm",
                onClick: u,
                disabled: o,
                variant: "primary",
                text: o ? B.intl.string(B.t.RXvQQk) : B.intl.string(B.t.XpeFYm),
            })),
        (0, r.jsxs)("div", {
            className: Z.integrationWrapper,
            children: [
                (0, r.jsxs)("div", {
                    className: Z.integration,
                    children: [
                        (0, r.jsx)(T.Z, {
                            size: T.Z.Sizes.SMALL,
                            guild: a.guild,
                            className: Z.guildIcon,
                        }),
                        (0, r.jsxs)("div", {
                            className: Z.integrationInner,
                            children: [
                                (0, r.jsx)(f.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: a.guild.name,
                                }),
                                (0, r.jsx)(f.eee, {
                                    href:
                                        null == (n = E.Z.get(a.type)) || null == (t = n.getPlatformUserUrl)
                                            ? void 0
                                            : t.call(n, a.account),
                                    children: (0, r.jsx)(f.Text, {
                                        variant: "text-xs/normal",
                                        color: "header-secondary",
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
                        color: "text-danger",
                        className: Z.integrationError,
                        children: l,
                    }),
            ],
        })
    );
};
function z(e) {
    let { onDisconnect: t, account: n, theme: a, locale: o } = e,
        [s, l] = i.useState(n.friendSync),
        [_, h] = i.useState(n.visibility),
        [m, g] = i.useState(n.metadataVisibility),
        [I, T] = i.useState(n.showActivity),
        [A, C] = i.useState(null),
        [N, R] = i.useState(null),
        [w, L] = i.useState(!1),
        [G, F] = i.useState([]),
        V = (0, b.rR)(n.type),
        Y = E.Z.get(V);
    i.useEffect(() => {
        l(n.friendSync), h(n.visibility), g(n.metadataVisibility), T(n.showActivity);
    }, [n]);
    let z = {
            inProgressVisibility: A,
            inProgressMetadataVisibility: N,
        },
        q = i.useRef(z);
    function X(e) {
        var t;
        let n = E.Z.get(e.type),
            i = E.Z.get(V),
            o = "1" === (null != (t = e.metadata) ? t : {})[U.PC.TWITTER_VERIFIED],
            s = null;
        return (
            n.type === k.ABu.TWITTER &&
                o &&
                (s = (0, r.jsx)(f.ua7, {
                    text: B.intl.string(B.t.Jebrw8),
                    children: (e) =>
                        (0, r.jsx)(
                            S.Z,
                            W(H({}, e), {
                                color: c.Z.unsafe_rawColors.TWITTER.css,
                                children: (0, r.jsx)(f.kmB, {
                                    size: "xs",
                                    color: c.Z.unsafe_rawColors.WHITE_500.css,
                                }),
                            }),
                        ),
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
                                        color: "header-primary",
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
                                color: "header-secondary",
                                className: Z.connectionAccountLabel,
                                children: i.name,
                            }),
                        ],
                    }),
                    (0, r.jsx)(f.P3F, {
                        className: Z.connectionDelete,
                        onClick: er,
                        "aria-label": B.intl.string(B.t.ppppRE),
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
    function Q(e) {
        return e.twoWayLink
            ? null
            : e.type === k.ABu.XBOX
              ? (0, r.jsx)("div", {
                    className: Z.upsellWrapper,
                    children: (0, r.jsx)(M.Y, {}),
                })
              : e.type === k.ABu.PLAYSTATION
                ? (0, r.jsx)("div", {
                      className: Z.upsellWrapper,
                      children: (0, r.jsx)(j.t, {}),
                  })
                : null;
    }
    function J(e) {
        var t;
        let n = null != (t = e.metadata) ? t : {},
            i = null,
            a = (0, y.FI)(n[U.PC.CREATED_AT], o);
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
                            color: "interactive-active",
                            className: Z.connectedAccountVanityMetadataCreatedAt,
                            children: B.intl.format(B.t["9rfonp"], { date: a }),
                        },
                        "member-since",
                    ),
                ));
        let s = G.includes(e.id),
            l = B.intl.string(B.t.wzzjk5);
        if (null == i || 0 === i.length)
            if (!0 !== E.Z.get(e.type).hasMetadata) return null;
            else
                (i = [
                    (0, r.jsx)(
                        f.IGR,
                        {
                            className: Z.connectionMetadataUpsellTag,
                            text: B.intl.string(B.t.y2b7CA),
                        },
                        "badge",
                    ),
                    (0, r.jsx)(
                        f.Text,
                        {
                            variant: "text-xs/normal",
                            className: Z.connectionMetadataUpsellDescription,
                            children: B.intl.format(B.t.Up2ni4, {
                                helpdeskUrl: P.Z.getArticleURL(k.BhN.CONNECTION_DETAILS),
                            }),
                        },
                        "label",
                    ),
                ]),
                    (l = B.intl.string(B.t["LVh3//"]));
        return (
            s && (l = B.intl.string(B.t.i4jeWV)),
            i.push(
                (0, r.jsx)(
                    "div",
                    {
                        className: Z.metadataRefreshButton,
                        children: (0, r.jsx)(f.zxk, {
                            text: l,
                            variant: "primary",
                            size: "sm",
                            loading: w,
                            disabled: s,
                            "aria-label": B.intl.string(B.t.sCkLYG),
                            onClick: s
                                ? void 0
                                : () => {
                                      L(!0),
                                          p.Z.refresh(e.type, e.id).finally(() => {
                                              setTimeout(() => {
                                                  G.push(e.id), F(G), L(!1);
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
    function $(e) {
        var t;
        let i, a, o;
        return (
            k.BFP.has(n.type) &&
                (i = (0, r.jsx)(f.j7V, {
                    className: Z.connectionOptionSwitch,
                    hideBorder: !0,
                    value: s,
                    onChange: eo,
                    children: (0, r.jsx)(f.Text, {
                        variant: "text-sm/semibold",
                        children: B.intl.string(B.t["+KCMSk"]),
                    }),
                })),
            k.vbS.has(n.type) &&
                (a = (0, r.jsx)(f.j7V, {
                    className: Z.connectionOptionSwitch,
                    hideBorder: !0,
                    value: I,
                    onChange: es,
                    children: (0, r.jsx)(f.Text, {
                        variant: "text-sm/semibold",
                        children: B.intl.format(B.t["6u6J0t"], { platform: e.name }),
                    }),
                })),
            (null == (t = E.Z.get(n.type)) ? void 0 : t.hasMetadata) === !0 &&
                (o = (0, r.jsx)(f.j7V, {
                    className: Z.connectionOptionSwitch,
                    hideBorder: !0,
                    value: 1 === m,
                    onChange: ea,
                    disabled: 1 !== _ || null == n.metadata,
                    children: (0, r.jsx)(f.Text, {
                        variant: "text-sm/semibold",
                        children: B.intl.string(B.t.FYKGsL),
                    }),
                })),
            (0, r.jsx)("div", {
                className: Z.connectionOptionsWrapper,
                children: (0, r.jsxs)("div", {
                    className: Z.connectionOptions,
                    children: [
                        (0, r.jsx)(f.j7V, {
                            className: Z.connectionOptionSwitch,
                            hideBorder: !0,
                            value: 1 === _,
                            onChange: ei,
                            children: (0, r.jsx)(f.Text, {
                                variant: "text-sm/semibold",
                                children: B.intl.string(B.t.f7yOAQ),
                            }),
                        }),
                        o,
                        a,
                        i,
                    ],
                }),
            })
        );
    }
    function ee() {
        return n.revoked
            ? (0, r.jsx)("div", {
                  className: Z.integrationsWrapper,
                  children: (0, r.jsx)(f.R94, {
                      className: Z.integrationRevoked,
                      children: B.intl.format(B.t["6C4lgI"], { onReconnect: en }),
                  }),
              })
            : n.integrations.length > 0
              ? (0, r.jsxs)("div", {
                    className: Z.integrationsWrapper,
                    children: [
                        (0, r.jsx)(f.vwX, {
                            children: (0, r.jsx)(f.Text, {
                                variant: "text-xs/semibold",
                                children: B.intl.string(B.t.fOe3fX),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            children: n.integrations.map((e) => (0, r.jsx)(K, { integration: e }, e.id)),
                        }),
                    ],
                })
              : void 0;
    }
    function et() {
        if (n.revoked || n.integrations.length > 0)
            return (0, r.jsx)(f.$i$, { className: Z.connectedAccountSeparator });
    }
    function en() {
        (0, O.Z)({
            platformType: n.type,
            location: "User Settings",
        });
    }
    function er() {
        let e = E.Z.get(n.type);
        (0, f.h7j)((i) =>
            (0, r.jsx)(
                u.Modal,
                W(
                    H(
                        {
                            title: B.intl.formatToPlainString(B.t.U5x12d, { name: e.name }),
                            subtitle: B.intl.format(B.t.VgqIPj, { provider: e.name }),
                            actions: [
                                {
                                    text: B.intl.string(B.t["ETE/oK"]),
                                    onClick: i.onClose,
                                    variant: "secondary",
                                },
                                {
                                    text: B.intl.string(B.t.bsbMV1),
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
                            (0, r.jsx)(x.Z, { children: B.intl.format(B.t.COW3Xl, { platformName: e.name }) }),
                    },
                ),
            ),
        );
    }
    function ei(e) {
        let { verified: t } = n,
            r = +!!e;
        if (e && !t) {
            C(r),
                (0, O.Z)({
                    platformType: n.type,
                    location: "User Settings",
                });
            return;
        }
        h(r), p.Z.setVisibility(n.type, n.id, r);
    }
    function ea(e) {
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
        g(r), p.Z.setMetadataVisibility(n.type, n.id, r);
    }
    function eo(e) {
        l(e), p.Z.setFriendSync(n.type, n.id, e);
    }
    function es(e) {
        T(e), p.Z.setShowActivity(n.type, n.id, e);
    }
    return (
        i.useEffect(() => {
            q.current = z;
        }),
        i.useEffect(() => {
            if (!1 === n.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = q.current;
            null != e && (h(e), p.Z.setVisibility(n.type, n.id, e), C(null)),
                null != t && (g(t), p.Z.setMetadataVisibility(n.type, n.id, t), R(null));
        }, [n]),
        (0, r.jsxs)("div", {
            className: Z.connection,
            children: [X(n), Q(n), J(n), $(Y), et(), ee()],
        })
    );
}
function q() {
    return (
        i.useEffect(
            () => () => {
                (0, I.Q3)(l.z.NEW_CRUNCHYROLL_CONNECTION, { dismissAction: G.L.AUTO });
            },
            [],
        ),
        (0, r.jsxs)("div", {
            className: Z.connectContainer,
            children: [
                (0, r.jsx)(f.X6q, {
                    variant: "heading-md/bold",
                    color: "interactive-active",
                    className: Z.connectHeader,
                    children: B.intl.string(B.t.ZeDrUV),
                }),
                (0, r.jsx)(f.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: B.intl.format(B.t["oYc+Gx"], { privacyPolicyUrl: k.EYA.PRIVACY }),
                }),
                (0, r.jsx)(Q, {}),
            ],
        })
    );
}
function X(e) {
    let t = E.Z.get(e);
    (0, O.Z)({ platformType: t.type }),
        R.default.track(k.rMx.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function Q() {
    function e() {
        _.Z.dispatch({
            type: "CONNECTIONS_GRID_MODAL_SHOW",
            onComplete: X,
        });
    }
    let t = (0, b.fq)();
    return (0, r.jsxs)("div", {
        className: Z.connectionsContainer,
        children: [
            t.slice(0, 10).map((e) =>
                (0, r.jsx)(
                    m.Z,
                    {
                        type: e.type,
                        className: Z.__invalid_accountButton,
                        innerClassName: Z.accountButtonInner,
                    },
                    e.type,
                ),
            ),
            (0, r.jsx)(f.ua7, {
                text: B.intl.string(B.t.QqTz8f),
                children: (t) => {
                    let { onMouseEnter: n, onMouseLeave: i } = t;
                    return (0, r.jsx)("div", {
                        className: o()(Z.accountAddWrapper, Z.__invalid_accountButton),
                        children: (0, r.jsx)(f.tEY, {
                            children: (0, r.jsx)("button", {
                                onMouseEnter: n,
                                onMouseLeave: i,
                                className: o()(Z.accountAddInner, Z.accountButtonInner),
                                type: "button",
                                onClick: e,
                                "aria-label": B.intl.string(B.t.Zhcj9f),
                                children: (0, r.jsx)(f.Fbu, {
                                    color: "currentColor",
                                    size: "md",
                                    "aria-label": B.intl.string(B.t.QqTz8f),
                                }),
                            }),
                        }),
                    });
                },
            }),
        ],
    });
}
function J(e) {
    let t,
        { fetching: n, accounts: i, theme: a, locale: o } = e;
    function s(e) {
        let { type: t, id: n } = e;
        p.Z.disconnect(t, n);
    }
    return (
        (t = n
            ? (0, r.jsx)(f.$jN, {
                  className: F.marginTop20,
                  type: f.$jN.Type.SPINNING_CIRCLE,
              })
            : 0 === i.length
              ? (0, r.jsx)(f.ubH, {
                    className: F.marginTop40,
                    theme: a,
                    children: (0, r.jsx)(f.OZU, {
                        note: B.intl.string(B.t.WenGZ2),
                        children: B.intl.string(B.t["aoLS8/"]),
                    }),
                })
              : i
                    .filter((e) => E.Z.isSupported(e.type))
                    .map((e, t) =>
                        (0, r.jsx)(
                            z,
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
let $ = () => {
    let e = (0, s.e7)([N.Z], () => N.Z.hidePersonalInformation),
        t = (0, s.e7)([A.Z], () => A.Z.isFetching()),
        n = (0, s.e7)([A.Z], () => A.Z.getAccounts()),
        a = (0, g.ZP)(),
        o = (0, s.e7)([w.default], () => w.default.locale);
    return (i.useEffect(() => {
        p.Z.fetch();
    }, []),
    e)
        ? (0, r.jsx)(h.Z, {})
        : (0, r.jsxs)(L.Z, {
              title: B.intl.string(B.t["3fe7U1"]),
              children: [
                  (0, r.jsx)(q, {}),
                  (0, r.jsx)(J, {
                      fetching: t,
                      accounts: n,
                      theme: a,
                      locale: o,
                  }),
              ],
          });
};

n.d(t, { Z: () => ee }), n(388685), n(539854), n(457542);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(704215),
    u = n(692547),
    d = n(28664),
    f = n(780384),
    _ = n(481060),
    p = n(570140),
    h = n(457330),
    m = n(497321),
    g = n(23551),
    E = n(410030),
    b = n(726542),
    y = n(122021),
    O = n(275759),
    v = n(231757),
    I = n(888496),
    T = n(266454),
    S = n(565138),
    A = n(297700),
    C = n(553795),
    N = n(430824),
    R = n(246946),
    P = n(626135),
    D = n(63063),
    w = n(706454),
    L = n(526665),
    x = n(349728),
    M = n(494620),
    j = n(273313),
    k = n(205266),
    U = n(216153),
    G = n(981631),
    B = n(856651),
    Z = n(921944),
    F = n(388032),
    V = n(465631);
function H(e, t, n) {
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
function Y(e) {
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
                H(e, t, n[t]);
            });
    }
    return e;
}
function W(e, t) {
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
function K(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : W(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let z = (e) => {
    var t, n;
    let i,
        { integration: a } = e,
        {
            isJoining: o,
            joinErrorMessage: s,
            showJoinErrorMessage: c,
        } = (0, l.cj)(
            [C.Z],
            () => ({
                isJoining: C.Z.isJoining(a.id),
                joinErrorMessage:
                    "" === C.Z.joinErrorMessage(a.id) ? F.intl.string(F.t.j2d6Km) : C.Z.joinErrorMessage(a.id),
                showJoinErrorMessage: void 0 !== C.Z.joinErrorMessage(a.id),
            }),
            [a.id],
        );
    function u() {
        h.Z.joinServer(a.id, () => {});
    }
    return (
        null == (0, l.e7)([N.Z], () => N.Z.getGuild(a.guild.id), [a.guild.id]) &&
            (i = (0, r.jsx)(_.Button, {
                size: "sm",
                onClick: u,
                disabled: o,
                variant: "primary",
                text: o ? F.intl.string(F.t.RXvQQu) : F.intl.string(F.t.XpeFYr),
            })),
        (0, r.jsxs)("div", {
            className: V.integrationWrapper,
            children: [
                (0, r.jsxs)("div", {
                    className: V.integration,
                    children: [
                        (0, r.jsx)(S.Z, {
                            size: S.Z.Sizes.SMALL,
                            guild: a.guild,
                            className: V.guildIcon,
                        }),
                        (0, r.jsxs)("div", {
                            className: V.integrationInner,
                            children: [
                                (0, r.jsx)(_.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: a.guild.name,
                                }),
                                (0, r.jsx)(_.Anchor, {
                                    href:
                                        null == (n = b.Z.get(a.type)) || null == (t = n.getPlatformUserUrl)
                                            ? void 0
                                            : t.call(n, a.account),
                                    children: (0, r.jsx)(_.Text, {
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
                    (0, r.jsx)(_.Text, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        className: V.integrationError,
                        children: s,
                    }),
            ],
        })
    );
};
function q(e) {
    let { onDisconnect: t, account: n, theme: a, locale: l } = e,
        [c, p] = i.useState(n.friendSync),
        [m, g] = i.useState(n.visibility),
        [E, T] = i.useState(n.metadataVisibility),
        [S, C] = i.useState(n.showActivity),
        [N, R] = i.useState(null),
        [P, w] = i.useState(null),
        [j, Z] = i.useState(!1),
        [H, W] = i.useState([]),
        q = (0, y.rR)(n.type),
        X = b.Z.get(q);
    i.useEffect(() => {
        p(n.friendSync), g(n.visibility), T(n.metadataVisibility), C(n.showActivity);
    }, [n]);
    let Q = {
            inProgressVisibility: N,
            inProgressMetadataVisibility: P,
        },
        J = i.useRef(Q);
    function $(e) {
        var t;
        let n = b.Z.get(e.type),
            i = b.Z.get(q),
            o = "1" === (null != (t = e.metadata) ? t : {})[B.PC.TWITTER_VERIFIED],
            s = null;
        return (
            n.type === G.ABu.TWITTER &&
                o &&
                (s = (0, r.jsx)(d.u, {
                    text: F.intl.string(F.t.Jebrww),
                    children: (0, r.jsx)(A.Z, {
                        color: u.Z.unsafe_rawColors.TWITTER.css,
                        children: (0, r.jsx)(_.kmB, {
                            size: "xs",
                            color: u.Z.unsafe_rawColors.WHITE_500.css,
                        }),
                    }),
                })),
            (0, r.jsxs)("div", {
                className: V.connectionHeader,
                children: [
                    (0, r.jsx)("img", {
                        alt: i.name,
                        className: V.connectionIcon,
                        src: (0, f.wj)(a) ? i.icon.darkSVG : i.icon.lightSVG,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: V.connectionAccountLabelContainer,
                                children: [
                                    (0, r.jsx)(_.Text, {
                                        color: "header-primary",
                                        variant: "text-md/semibold",
                                        className: V.connectionAccountValue,
                                        children: e.name,
                                    }),
                                    null != s &&
                                        (0, r.jsx)("div", {
                                            className: V.connectionAccountLabelVerified,
                                            children: s,
                                        }),
                                ],
                            }),
                            (0, r.jsx)(_.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: V.connectionAccountLabel,
                                children: i.name,
                            }),
                        ],
                    }),
                    (0, r.jsx)(_.P3F, {
                        className: V.connectionDelete,
                        onClick: eo,
                        "aria-label": F.intl.string(F.t.ppppRJ),
                        focusProps: {
                            offset: {
                                top: -4,
                                left: -4,
                                right: -4,
                            },
                        },
                        children: (0, r.jsx)(_.Dio, {
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
            : e.type === G.ABu.XBOX
              ? (0, r.jsx)(U.Y, {})
              : e.type === G.ABu.PLAYSTATION
                ? (0, r.jsx)(k.t, {})
                : null;
    }
    function et(e) {
        var t;
        let n = null != (t = e.metadata) ? t : {},
            i = null,
            a = (0, O.FI)(n[B.PC.CREATED_AT], l);
        switch (e.type) {
            case G.ABu.REDDIT:
                i = (0, I.oP)(n, V.metadataItem);
                break;
            case G.ABu.STEAM:
                i = (0, I.Dq)(n, V.metadataItem);
                break;
            case G.ABu.BLUESKY:
            case G.ABu.TWITTER:
            case G.ABu.MASTODON:
                i = (0, I.rJ)(n, V.metadataItem);
                break;
            case G.ABu.EBAY:
                i = (0, I.ul)(n, V.metadataItem);
                break;
            case G.ABu.PAYPAL:
                i = (0, I.li)(n, V.metadataItem);
                break;
            case G.ABu.TIKTOK:
                i = (0, I.hf)(n, V.metadataItem);
        }
        null !== a &&
            (null == i && (i = []),
            null == i ||
                i.push(
                    (0, r.jsx)(
                        _.Text,
                        {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            className: V.connectedAccountVanityMetadataCreatedAt,
                            children: F.intl.format(F.t["9rfonh"], { date: a }),
                        },
                        "member-since",
                    ),
                ));
        let o = H.includes(e.id),
            s = F.intl.string(F.t.wzzjk9);
        if (null == i || 0 === i.length)
            if (!0 !== b.Z.get(e.type).hasMetadata) return null;
            else
                (i = [
                    (0, r.jsx)(
                        _.IGR,
                        {
                            className: V.connectionMetadataUpsellTag,
                            text: F.intl.string(F.t.y2b7CA),
                        },
                        "badge",
                    ),
                    (0, r.jsx)(
                        _.Text,
                        {
                            variant: "text-xs/normal",
                            className: V.connectionMetadataUpsellDescription,
                            children: F.intl.format(F.t.Up2ni7, {
                                helpdeskUrl: D.Z.getArticleURL(G.BhN.CONNECTION_DETAILS),
                            }),
                        },
                        "label",
                    ),
                ]),
                    (s = F.intl.string(F.t["LVh3/5"]));
        return (
            o && (s = F.intl.string(F.t.i4jeWR)),
            i.push(
                (0, r.jsx)(
                    "div",
                    {
                        className: V.metadataRefreshButton,
                        children: (0, r.jsx)(_.Button, {
                            text: s,
                            variant: "secondary",
                            size: "sm",
                            loading: j,
                            disabled: o,
                            "aria-label": F.intl.string(F.t.sCkLYH),
                            onClick: o
                                ? void 0
                                : () => {
                                      Z(!0),
                                          h.Z.refresh(e.type, e.id).finally(() => {
                                              setTimeout(() => {
                                                  H.push(e.id), W(H), Z(!1);
                                              }, 2000);
                                          });
                                  },
                        }),
                    },
                    "refresh-button",
                ),
            ),
            (0, r.jsx)("div", {
                className: V.metadataContainer,
                children: i,
            })
        );
    }
    function en(e) {
        var t;
        let i, a, o;
        return (
            G.BFP.has(n.type) &&
                (i = (0, r.jsx)(_.rsf, {
                    label: F.intl.string(F.t["+KCMSi"]),
                    checked: c,
                    onChange: ec,
                })),
            G.vbS.has(n.type) &&
                (a = (0, r.jsx)(_.rsf, {
                    label: F.intl.format(F.t["6u6J0q"], { platform: e.name }),
                    checked: S,
                    onChange: eu,
                })),
            (null == (t = b.Z.get(n.type)) ? void 0 : t.hasMetadata) === !0 &&
                (o = (0, r.jsx)(_.rsf, {
                    label: F.intl.string(F.t.FYKGsL),
                    checked: 1 === E,
                    onChange: el,
                    disabled: 1 !== m || null == n.metadata,
                })),
            (0, r.jsxs)("div", {
                className: V.connectionOptions,
                children: [
                    (0, r.jsx)(_.rsf, {
                        label: F.intl.string(F.t.f7yOAX),
                        checked: 1 === m,
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
                  children: F.intl.format(F.t["6C4lgA"], { onReconnect: ea }),
              })
            : n.integrations.length > 0
              ? (0, r.jsx)(_.gNt, {
                    label: F.intl.string(F.t.fOe3fZ),
                    children: n.integrations.map((e) => (0, r.jsx)(z, { integration: e }, e.id)),
                })
              : void 0;
    }
    function ei() {
        if (n.revoked || n.integrations.length > 0) return (0, r.jsx)(_.izJ, {});
    }
    function ea() {
        (0, v.Z)({
            platformType: n.type,
            location: "User Settings",
        });
    }
    function eo() {
        let e = b.Z.get(n.type);
        (0, _.h7j)((i) =>
            (0, r.jsx)(
                s.Modal,
                K(
                    Y(
                        {
                            title: F.intl.formatToPlainString(F.t.U5x12f, { name: e.name }),
                            subtitle: F.intl.format(F.t.VgqIPj, { provider: e.name }),
                            actions: [
                                {
                                    text: F.intl.string(F.t["ETE/oC"]),
                                    onClick: i.onClose,
                                    variant: "secondary",
                                },
                                {
                                    text: F.intl.string(F.t.bsbMVz),
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
                            (0, x.Z)(n) &&
                            (0, r.jsx)(M.Z, { children: F.intl.format(F.t.COW3Xn, { platformName: e.name }) }),
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
                (0, v.Z)({
                    platformType: n.type,
                    location: "User Settings",
                });
            return;
        }
        g(r), h.Z.setVisibility(n.type, n.id, r);
    }
    function el(e) {
        let { verified: t } = n,
            r = +!!e;
        if (e && !t) {
            w(r),
                (0, v.Z)({
                    platformType: n.type,
                    location: "User Settings",
                });
            return;
        }
        T(r), h.Z.setMetadataVisibility(n.type, n.id, r);
    }
    function ec(e) {
        p(e), h.Z.setFriendSync(n.type, n.id, e);
    }
    function eu(e) {
        C(e), h.Z.setShowActivity(n.type, n.id, e);
    }
    i.useEffect(() => {
        J.current = Q;
    }),
        i.useEffect(() => {
            if (!1 === n.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = J.current;
            null != e && (g(e), h.Z.setVisibility(n.type, n.id, e), R(null)),
                null != t && (T(t), h.Z.setMetadataVisibility(n.type, n.id, t), w(null));
        }, [n]);
    let ed = (0, L.wy)("ConnectedAccount");
    return (0, r.jsxs)("div", {
        className: o()(V.connection, { [V.connectionUserSettingsRedesign]: ed }),
        children: [$(n), ee(n), et(n), en(X), ei(), er()],
    });
}
function X() {
    return (
        i.useEffect(
            () => () => {
                (0, T.Q3)(c.z.NEW_CRUNCHYROLL_CONNECTION, { dismissAction: Z.L.AUTO });
            },
            [],
        ),
        (0, r.jsx)(_.gNt, {
            label: F.intl.string(F.t.ZeDrUf),
            description: F.intl.format(F.t["oYc+Gz"], { privacyPolicyUrl: G.EYA.PRIVACY }),
            children: (0, r.jsx)(J, {}),
        })
    );
}
function Q(e) {
    let t = b.Z.get(e);
    (0, v.Z)({ platformType: t.type }),
        P.default.track(G.rMx.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function J() {
    function e() {
        p.Z.dispatch({
            type: "CONNECTIONS_GRID_MODAL_SHOW",
            onComplete: Q,
        });
    }
    let t = (0, y.fq)();
    return (0, r.jsxs)("div", {
        className: V.connectionsContainer,
        children: [
            t.slice(0, 10).map((e) =>
                (0, r.jsx)(
                    g.Z,
                    {
                        type: e.type,
                        className: V.__invalid_accountButton,
                        innerClassName: V.accountButtonInner,
                    },
                    e.type,
                ),
            ),
            (0, r.jsx)(d.u, {
                text: F.intl.string(F.t.QqTz8b),
                children: (0, r.jsx)("div", {
                    className: o()(V.accountAddWrapper, V.__invalid_accountButton),
                    children: (0, r.jsx)(_.tEY, {
                        children: (0, r.jsx)("button", {
                            className: o()(V.accountAddInner, V.accountButtonInner),
                            type: "button",
                            onClick: e,
                            "aria-label": F.intl.string(F.t.Zhcj9X),
                            children: (0, r.jsx)(_.Fbu, {
                                color: "currentColor",
                                size: "md",
                                "aria-label": F.intl.string(F.t.QqTz8b),
                            }),
                        }),
                    }),
                }),
            }),
        ],
    });
}
function $(e) {
    let t,
        { fetching: n, accounts: i, theme: a, locale: o } = e;
    function s(e) {
        let { type: t, id: n } = e;
        h.Z.disconnect(t, n);
    }
    return (
        (t = n
            ? (0, r.jsx)(_.$jN, { type: _.$jN.Type.SPINNING_CIRCLE })
            : 0 === i.length
              ? (0, r.jsx)(_.ubH, {
                    theme: a,
                    children: (0, r.jsx)(_.OZU, {
                        note: F.intl.string(F.t.WenGZ2),
                        children: F.intl.string(F.t.aoLS84),
                    }),
                })
              : i
                    .filter((e) => b.Z.isSupported(e.type))
                    .map((e, t) =>
                        (0, r.jsx)(
                            q,
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
            className: V.connectionList,
            children: t,
        })
    );
}
let ee = () => {
    let e = (0, l.e7)([R.Z], () => R.Z.hidePersonalInformation),
        t = (0, l.e7)([C.Z], () => C.Z.isFetching()),
        n = (0, l.e7)([C.Z], () => C.Z.getAccounts()),
        a = (0, E.ZP)(),
        o = (0, l.e7)([w.default], () => w.default.locale);
    return (i.useEffect(() => {
        h.Z.fetch();
    }, []),
    e)
        ? (0, r.jsx)(m.Z, {})
        : (0, r.jsxs)(j.Z, {
              title: F.intl.string(F.t["3fe7U5"]),
              children: [
                  (0, r.jsx)(X, {}),
                  (0, r.jsx)(_.izJ, { gap: 24 }),
                  (0, r.jsx)($, {
                      fetching: t,
                      accounts: n,
                      theme: a,
                      locale: o,
                  }),
              ],
          });
};

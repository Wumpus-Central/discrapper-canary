n.d(t, {
    ZP: () => X,
    mN: () => W,
    vq: () => Q,
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
    m = n(23551),
    h = n(410030),
    g = n(726542),
    E = n(122021),
    b = n(275759),
    y = n(231757),
    O = n(888496),
    v = n(565138),
    S = n(297700),
    I = n(553795),
    T = n(430824),
    C = n(246946),
    A = n(626135),
    N = n(63063),
    P = n(706454),
    R = n(526665),
    w = n(349728),
    D = n(494620),
    x = n(273313),
    L = n(205266),
    j = n(216153),
    M = n(981631),
    k = n(856651),
    U = n(388032),
    G = n(454578);
function Z(e, t, n) {
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
function F(e) {
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
                Z(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
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
function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : B(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let H = (e) => {
    var t, n;
    let i,
        { integration: a } = e,
        {
            isJoining: o,
            joinErrorMessage: s,
            showJoinErrorMessage: c,
        } = (0, l.cj)(
            [I.Z],
            () => ({
                isJoining: I.Z.isJoining(a.id),
                joinErrorMessage:
                    "" === I.Z.joinErrorMessage(a.id) ? U.intl.string(U.t.j2d6Km) : I.Z.joinErrorMessage(a.id),
                showJoinErrorMessage: void 0 !== I.Z.joinErrorMessage(a.id),
            }),
            [a.id],
        );
    function u() {
        _.Z.joinServer(a.id, () => {});
    }
    return (
        null == (0, l.e7)([T.Z], () => T.Z.getGuild(a.guild.id), [a.guild.id]) &&
            (i = (0, r.jsx)(f.Button, {
                size: "sm",
                onClick: u,
                disabled: o,
                variant: "primary",
                text: o ? U.intl.string(U.t.RXvQQu) : U.intl.string(U.t.XpeFYr),
            })),
        (0, r.jsxs)("div", {
            className: G.integrationWrapper,
            children: [
                (0, r.jsxs)("div", {
                    className: G.integration,
                    children: [
                        (0, r.jsx)(v.Z, {
                            size: v.Z.Sizes.SMALL,
                            guild: a.guild,
                            className: G.guildIcon,
                        }),
                        (0, r.jsxs)("div", {
                            className: G.integrationInner,
                            children: [
                                (0, r.jsx)(f.Text, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: a.guild.name,
                                }),
                                (0, r.jsx)(f.Anchor, {
                                    href:
                                        null == (n = g.Z.get(a.type)) || null == (t = n.getPlatformUserUrl)
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
                        className: G.integrationError,
                        children: s,
                    }),
            ],
        })
    );
};
function Y(e) {
    let { onDisconnect: t, account: n, theme: a, locale: l } = e,
        [p, m] = i.useState(n.friendSync),
        [h, v] = i.useState(n.visibility),
        [I, T] = i.useState(n.metadataVisibility),
        [C, A] = i.useState(n.showActivity),
        [P, x] = i.useState(null),
        [Z, B] = i.useState(null),
        [Y, W] = i.useState(!1),
        [K, z] = i.useState([]),
        q = (0, E.rR)(n.type),
        Q = g.Z.get(q);
    i.useEffect(() => {
        m(n.friendSync), v(n.visibility), T(n.metadataVisibility), A(n.showActivity);
    }, [n]);
    let X = {
            inProgressVisibility: P,
            inProgressMetadataVisibility: Z,
        },
        J = i.useRef(X);
    function $(e) {
        var t;
        let n = g.Z.get(e.type),
            i = g.Z.get(q),
            o = "1" === (null != (t = e.metadata) ? t : {})[k.PC.TWITTER_VERIFIED],
            s = null;
        return (
            n.type === M.ABu.TWITTER &&
                o &&
                (s = (0, r.jsx)(u.u, {
                    text: U.intl.string(U.t.Jebrww),
                    children: (0, r.jsx)(S.Z, {
                        color: c.Z.unsafe_rawColors.TWITTER.css,
                        children: (0, r.jsx)(f.kmB, {
                            size: "xs",
                            color: c.Z.unsafe_rawColors.WHITE.css,
                        }),
                    }),
                })),
            (0, r.jsxs)("div", {
                className: G.connectionHeader,
                children: [
                    (0, r.jsx)("img", {
                        alt: i.name,
                        className: G.connectionIcon,
                        src: (0, d.wj)(a) ? i.icon.darkSVG : i.icon.lightSVG,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: G.connectionAccountLabelContainer,
                                children: [
                                    (0, r.jsx)(f.Text, {
                                        color: "text-strong",
                                        variant: "text-md/semibold",
                                        className: G.connectionAccountValue,
                                        children: e.name,
                                    }),
                                    null != s &&
                                        (0, r.jsx)("div", {
                                            className: G.connectionAccountLabelVerified,
                                            children: s,
                                        }),
                                ],
                            }),
                            (0, r.jsx)(f.Text, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                className: G.connectionAccountLabel,
                                children: i.name,
                            }),
                        ],
                    }),
                    (0, r.jsx)(f.P3F, {
                        className: G.connectionDelete,
                        onClick: eo,
                        "aria-label": U.intl.string(U.t.ppppRJ),
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
            : e.type === M.ABu.XBOX
              ? (0, r.jsx)(j.Y, {})
              : e.type === M.ABu.PLAYSTATION
                ? (0, r.jsx)(L.t, {})
                : null;
    }
    function et(e) {
        var t;
        let n = null != (t = e.metadata) ? t : {},
            i = null,
            a = (0, b.FI)(n[k.PC.CREATED_AT], l);
        switch (e.type) {
            case M.ABu.REDDIT:
                i = (0, O.oP)(n, G.metadataItem);
                break;
            case M.ABu.STEAM:
                i = (0, O.Dq)(n, G.metadataItem);
                break;
            case M.ABu.BLUESKY:
            case M.ABu.TWITTER:
            case M.ABu.MASTODON:
                i = (0, O.rJ)(n, G.metadataItem);
                break;
            case M.ABu.EBAY:
                i = (0, O.ul)(n, G.metadataItem);
                break;
            case M.ABu.PAYPAL:
                i = (0, O.li)(n, G.metadataItem);
                break;
            case M.ABu.TIKTOK:
                i = (0, O.hf)(n, G.metadataItem);
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
                            className: G.connectedAccountVanityMetadataCreatedAt,
                            children: U.intl.format(U.t["9rfonh"], { date: a }),
                        },
                        "member-since",
                    ),
                ));
        let o = K.includes(e.id),
            s = U.intl.string(U.t.wzzjk9);
        if (null == i || 0 === i.length)
            if (!0 !== g.Z.get(e.type).hasMetadata) return null;
            else
                (i = [
                    (0, r.jsx)(
                        f.IGR,
                        {
                            className: G.connectionMetadataUpsellTag,
                            text: U.intl.string(U.t.y2b7CA),
                        },
                        "badge",
                    ),
                    (0, r.jsx)(
                        f.Text,
                        {
                            variant: "text-xs/normal",
                            className: G.connectionMetadataUpsellDescription,
                            children: U.intl.format(U.t.Up2ni7, {
                                helpdeskUrl: N.Z.getArticleURL(M.BhN.CONNECTION_DETAILS),
                            }),
                        },
                        "label",
                    ),
                ]),
                    (s = U.intl.string(U.t["LVh3/5"]));
        return (
            o && (s = U.intl.string(U.t.i4jeWR)),
            i.push(
                (0, r.jsx)(
                    "div",
                    {
                        className: G.metadataRefreshButton,
                        children: (0, r.jsx)(f.Button, {
                            text: s,
                            variant: "secondary",
                            size: "sm",
                            loading: Y,
                            disabled: o,
                            "aria-label": U.intl.string(U.t.sCkLYH),
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
                className: G.metadataContainer,
                children: i,
            })
        );
    }
    function en(e) {
        var t;
        let i, a, o;
        return (
            M.BFP.has(n.type) &&
                (i = (0, r.jsx)(f.rsf, {
                    label: U.intl.string(U.t["+KCMSi"]),
                    checked: p,
                    onChange: ec,
                })),
            M.vbS.has(n.type) &&
                (a = (0, r.jsx)(f.rsf, {
                    label: U.intl.format(U.t["6u6J0q"], { platform: e.name }),
                    checked: C,
                    onChange: eu,
                })),
            (null == (t = g.Z.get(n.type)) ? void 0 : t.hasMetadata) === !0 &&
                (o = (0, r.jsx)(f.rsf, {
                    label: U.intl.string(U.t.FYKGsL),
                    checked: 1 === I,
                    onChange: el,
                    disabled: 1 !== h || null == n.metadata,
                })),
            (0, r.jsxs)("div", {
                className: G.connectionOptions,
                children: [
                    (0, r.jsx)(f.rsf, {
                        label: U.intl.string(U.t.f7yOAX),
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
                  children: U.intl.format(U.t["6C4lgA"], { onReconnect: ea }),
              })
            : n.integrations.length > 0
              ? (0, r.jsx)(f.gNt, {
                    label: U.intl.string(U.t.fOe3fZ),
                    children: n.integrations.map((e) => (0, r.jsx)(H, { integration: e }, e.id)),
                })
              : void 0;
    }
    function ei() {
        if (n.revoked || n.integrations.length > 0) return (0, r.jsx)(f.izJ, {});
    }
    function ea() {
        (0, y.Z)({
            platformType: n.type,
            location: "User Settings",
        });
    }
    function eo() {
        let e = g.Z.get(n.type);
        (0, f.h7j)((i) =>
            (0, r.jsx)(
                s.Modal,
                V(
                    F(
                        {
                            title: U.intl.formatToPlainString(U.t.U5x12f, { name: e.name }),
                            subtitle: U.intl.format(U.t.VgqIPj, { provider: e.name }),
                            actions: [
                                {
                                    text: U.intl.string(U.t["ETE/oC"]),
                                    onClick: i.onClose,
                                    variant: "secondary",
                                },
                                {
                                    text: U.intl.string(U.t.bsbMVz),
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
                            (0, w.Z)(n) &&
                            (0, r.jsx)(D.Z, { children: U.intl.format(U.t.COW3Xn, { platformName: e.name }) }),
                    },
                ),
            ),
        );
    }
    function es(e) {
        let { verified: t } = n,
            r = +!!e;
        if (e && !t) {
            x(r),
                (0, y.Z)({
                    platformType: n.type,
                    location: "User Settings",
                });
            return;
        }
        v(r), _.Z.setVisibility(n.type, n.id, r);
    }
    function el(e) {
        let { verified: t } = n,
            r = +!!e;
        if (e && !t) {
            B(r),
                (0, y.Z)({
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
            null != e && (v(e), _.Z.setVisibility(n.type, n.id, e), x(null)),
                null != t && (T(t), _.Z.setMetadataVisibility(n.type, n.id, t), B(null));
        }, [n]);
    let ed = (0, R.wy)("ConnectedAccount");
    return (0, r.jsxs)("div", {
        className: o()(G.connection, { [G.connectionUserSettingsRedesign]: ed }),
        children: [$(n), ee(n), et(n), en(Q), ei(), er()],
    });
}
function W() {
    return (0, r.jsx)(f.gNt, {
        label: U.intl.string(U.t.ZeDrUf),
        description: U.intl.format(U.t["oYc+Gz"], { privacyPolicyUrl: M.EYA.PRIVACY }),
        children: (0, r.jsx)(z, {}),
    });
}
function K(e) {
    let t = g.Z.get(e);
    (0, y.Z)({ platformType: t.type }),
        A.default.track(M.rMx.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function z() {
    function e() {
        p.Z.dispatch({
            type: "CONNECTIONS_GRID_MODAL_SHOW",
            onComplete: K,
        });
    }
    let t = (0, E.fq)();
    return (0, r.jsxs)("div", {
        className: G.connectionsContainer,
        children: [
            t.slice(0, 10).map((e) =>
                (0, r.jsx)(
                    m.Z,
                    {
                        type: e.type,
                        className: G.__invalid_accountButton,
                        innerClassName: G.accountButtonInner,
                    },
                    e.type,
                ),
            ),
            (0, r.jsx)(u.u, {
                text: U.intl.string(U.t.QqTz8b),
                children: (0, r.jsx)("div", {
                    className: o()(G.accountAddWrapper, G.__invalid_accountButton),
                    children: (0, r.jsx)(f.tEY, {
                        children: (0, r.jsx)("button", {
                            className: o()(G.accountAddInner, G.accountButtonInner),
                            type: "button",
                            onClick: e,
                            "aria-label": U.intl.string(U.t.Zhcj9X),
                            children: (0, r.jsx)(f.Fbu, {
                                color: "currentColor",
                                size: "md",
                                "aria-label": U.intl.string(U.t.QqTz8b),
                            }),
                        }),
                    }),
                }),
            }),
        ],
    });
}
function q(e) {
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
                        note: U.intl.string(U.t.WenGZ2),
                        children: U.intl.string(U.t.aoLS84),
                    }),
                })
              : i
                    .filter((e) => g.Z.isSupported(e.type))
                    .map((e, t) =>
                        (0, r.jsx)(
                            Y,
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
            className: G.connectionList,
            children: t,
        })
    );
}
function Q() {
    let e = (0, l.e7)([C.Z], () => C.Z.hidePersonalInformation),
        t = (0, l.e7)([I.Z], () => I.Z.isFetching()),
        n = (0, l.e7)([I.Z], () => I.Z.getAccounts()),
        i = (0, h.ZP)(),
        a = (0, l.e7)([P.default], () => P.default.locale);
    return e
        ? null
        : (0, r.jsx)(q, {
              fetching: t,
              accounts: n,
              theme: i,
              locale: a,
          });
}
let X = () => {
    let e = (0, l.e7)([I.Z], () => I.Z.isFetching()),
        t = (0, l.e7)([I.Z], () => I.Z.getAccounts()),
        n = (0, h.ZP)(),
        a = (0, l.e7)([P.default], () => P.default.locale);
    return (
        i.useEffect(() => {
            _.Z.fetch();
        }, []),
        (0, r.jsxs)(x.Z, {
            title: U.intl.string(U.t["3fe7U5"]),
            children: [
                (0, r.jsx)(W, {}),
                (0, r.jsx)(f.izJ, { gap: 24 }),
                (0, r.jsx)(q, {
                    fetching: e,
                    accounts: t,
                    theme: n,
                    locale: a,
                }),
            ],
        })
    );
};

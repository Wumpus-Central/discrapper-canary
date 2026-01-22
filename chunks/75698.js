n.d(t, {
    Ay: () => Z,
    d7: () => X,
    u: () => W,
}),
    n(896048),
    n(321073),
    n(492834);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    c = n(827734),
    u = n(990078),
    d = n(582754),
    f = n(397927),
    p = n(73153),
    _ = n(77468),
    h = n(289498),
    m = n(736653),
    g = n(573648),
    E = n(681819),
    b = n(370480),
    y = n(882997),
    O = n(169869),
    A = n(263063),
    v = n(496885),
    S = n(962173),
    I = n(71393),
    T = n(351906),
    C = n(954571),
    N = n(975571),
    R = n(773669),
    w = n(747454),
    P = n(801264),
    D = n(790174),
    x = n(131678),
    L = n(138410),
    j = n(652215),
    M = n(783419),
    k = n(985018),
    U = n(612028);
function G(e, t, n) {
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
function V(e) {
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
                G(e, t, n[t]);
            });
    }
    return e;
}
function F(e, t) {
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
function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : F(Object(t)).forEach(function (n) {
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
            isJoining: s,
            joinErrorMessage: o,
            showJoinErrorMessage: c,
        } = (0, l.cf)(
            [S.A],
            () => ({
                isJoining: S.A.isJoining(a.id),
                joinErrorMessage:
                    "" === S.A.joinErrorMessage(a.id) ? k.intl.string(k.t.j2d6Km) : S.A.joinErrorMessage(a.id),
                showJoinErrorMessage: void 0 !== S.A.joinErrorMessage(a.id),
            }),
            [a.id],
        );
    function u() {
        _.A.joinServer(a.id, () => {});
    }
    return (
        null == (0, l.bG)([I.A], () => I.A.getGuild(a.guild.id), [a.guild.id]) &&
            (i = (0, r.jsx)(f.Button, {
                size: "sm",
                onClick: u,
                disabled: s,
                variant: "primary",
                text: s ? k.intl.string(k.t.RXvQQu) : k.intl.string(k.t.XpeFYr),
            })),
        (0, r.jsxs)("div", {
            className: U.iA,
            children: [
                (0, r.jsxs)("div", {
                    className: U.XX,
                    children: [
                        (0, r.jsx)(A.A, {
                            size: A.A.Sizes.SMALL,
                            guild: a.guild,
                            className: U.$f,
                        }),
                        (0, r.jsxs)("div", {
                            className: U.Vn,
                            children: [
                                (0, r.jsx)(f.Text, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: a.guild.name,
                                }),
                                (0, r.jsx)(f.MzZ, {
                                    href:
                                        null == (n = g.A.get(a.type)) || null == (t = n.getPlatformUserUrl)
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
                        className: U.R,
                        children: o,
                    }),
            ],
        })
    );
};
function Y(e) {
    let { onDisconnect: t, account: n, theme: a, locale: s } = e,
        [l, p] = i.useState(n.friendSync),
        [h, m] = i.useState(n.visibility),
        [A, S] = i.useState(n.metadataVisibility),
        [I, T] = i.useState(n.showActivity),
        [C, R] = i.useState(null),
        [D, G] = i.useState(null),
        [F, Y] = i.useState(!1),
        [W, K] = i.useState([]),
        z = (0, E.ML)(n.type),
        q = g.A.get(z);
    i.useEffect(() => {
        p(n.friendSync), m(n.visibility), S(n.metadataVisibility), T(n.showActivity);
    }, [n]);
    let X = {
            inProgressVisibility: C,
            inProgressMetadataVisibility: D,
        },
        Z = i.useRef(X);
    function Q(e) {
        var t;
        let n = g.A.get(e.type),
            i = g.A.get(z),
            s = "1" === (null != (t = e.metadata) ? t : {})[M.pK.TWITTER_VERIFIED],
            o = null;
        return (
            n.type === j.fg2.TWITTER &&
                s &&
                (o = (0, r.jsx)(u.m, {
                    text: k.intl.string(k.t.Jebrww),
                    children: (0, r.jsx)(v.A, {
                        color: c.A.unsafe_rawColors.TWITTER.css,
                        children: (0, r.jsx)(f.Uzd, {
                            size: "xs",
                            color: c.A.unsafe_rawColors.WHITE.css,
                        }),
                    }),
                })),
            (0, r.jsxs)("div", {
                className: U.Il,
                children: [
                    (0, r.jsx)("img", {
                        alt: i.name,
                        className: U.gj,
                        src: (0, d.Mw)(a) ? i.icon.darkSVG : i.icon.lightSVG,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: U.$p,
                                children: [
                                    (0, r.jsx)(f.Text, {
                                        color: "text-strong",
                                        variant: "text-md/semibold",
                                        className: U.RW,
                                        children: e.name,
                                    }),
                                    null != o &&
                                        (0, r.jsx)("div", {
                                            className: U.cG,
                                            children: o,
                                        }),
                                ],
                            }),
                            (0, r.jsx)(f.Text, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                className: U.Au,
                                children: i.name,
                            }),
                        ],
                    }),
                    (0, r.jsx)(f.DUT, {
                        className: U.uH,
                        onClick: ei,
                        "aria-label": k.intl.string(k.t.ppppRJ),
                        focusProps: {
                            offset: {
                                top: -4,
                                left: -4,
                                right: -4,
                            },
                        },
                        children: (0, r.jsx)(f.PGe, {
                            size: "xs",
                            color: "currentColor",
                        }),
                    }),
                ],
            })
        );
    }
    function $(e) {
        return e.twoWayLink
            ? null
            : e.type === j.fg2.XBOX
              ? (0, r.jsx)(L._, {})
              : e.type === j.fg2.PLAYSTATION
                ? (0, r.jsx)(x.j, {})
                : null;
    }
    function J(e) {
        var t;
        let n = null != (t = e.metadata) ? t : {},
            i = null,
            a = (0, b.An)(n[M.pK.CREATED_AT], s);
        switch (e.type) {
            case j.fg2.REDDIT:
                i = (0, O.xE)(n, U.Nz);
                break;
            case j.fg2.STEAM:
                i = (0, O.dy)(n, U.Nz);
                break;
            case j.fg2.BLUESKY:
            case j.fg2.TWITTER:
            case j.fg2.MASTODON:
                i = (0, O.ED)(n, U.Nz);
                break;
            case j.fg2.EBAY:
                i = (0, O.ub)(n, U.Nz);
                break;
            case j.fg2.PAYPAL:
                i = (0, O.gZ)(n, U.Nz);
                break;
            case j.fg2.TIKTOK:
                i = (0, O.HU)(n, U.Nz);
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
                            className: U.M4,
                            children: k.intl.format(k.t["9rfonh"], { date: a }),
                        },
                        "member-since",
                    ),
                ));
        let o = W.includes(e.id),
            l = k.intl.string(k.t.wzzjk9);
        if (null == i || 0 === i.length)
            if (!0 !== g.A.get(e.type).hasMetadata) return null;
            else
                (i = [
                    (0, r.jsx)(
                        f.LpS,
                        {
                            className: U.Z3,
                            text: k.intl.string(k.t.y2b7CA),
                        },
                        "badge",
                    ),
                    (0, r.jsx)(
                        f.Text,
                        {
                            variant: "text-xs/normal",
                            className: U.vt,
                            children: k.intl.format(k.t.Up2ni7, {
                                helpdeskUrl: N.A.getArticleURL(j.MVz.CONNECTION_DETAILS),
                            }),
                        },
                        "label",
                    ),
                ]),
                    (l = k.intl.string(k.t["LVh3/5"]));
        return (
            o && (l = k.intl.string(k.t.i4jeWR)),
            i.push(
                (0, r.jsx)(
                    "div",
                    {
                        className: U.jy,
                        children: (0, r.jsx)(f.Button, {
                            text: l,
                            variant: "secondary",
                            size: "sm",
                            loading: F,
                            disabled: o,
                            "aria-label": k.intl.string(k.t.sCkLYH),
                            onClick: o
                                ? void 0
                                : () => {
                                      Y(!0),
                                          _.A.refresh(e.type, e.id).finally(() => {
                                              setTimeout(() => {
                                                  W.push(e.id), K(W), Y(!1);
                                              }, 2000);
                                          });
                                  },
                        }),
                    },
                    "refresh-button",
                ),
            ),
            (0, r.jsx)("div", {
                className: U.tJ,
                children: i,
            })
        );
    }
    function ee(e) {
        var t;
        let i, a, s;
        return (
            j.txh.has(n.type) &&
                (i = (0, r.jsx)(f.dOG, {
                    label: k.intl.string(k.t["+KCMSi"]),
                    checked: l,
                    onChange: eo,
                })),
            j.ewM.has(n.type) &&
                (a = (0, r.jsx)(f.dOG, {
                    label: k.intl.format(k.t["6u6J0q"], { platform: e.name }),
                    checked: I,
                    onChange: el,
                })),
            (null == (t = g.A.get(n.type)) ? void 0 : t.hasMetadata) === !0 &&
                (s = (0, r.jsx)(f.dOG, {
                    label: k.intl.string(k.t.FYKGsL),
                    checked: 1 === A,
                    onChange: es,
                    disabled: 1 !== h || null == n.metadata,
                })),
            (0, r.jsxs)("div", {
                className: U.HZ,
                children: [
                    (0, r.jsx)(f.dOG, {
                        label: k.intl.string(k.t.f7yOAX),
                        checked: 1 === h,
                        onChange: ea,
                    }),
                    s,
                    a,
                    i,
                ],
            })
        );
    }
    function et() {
        return n.revoked
            ? (0, r.jsx)(o.po8, {
                  messageType: o.YCn.INFO,
                  children: k.intl.format(k.t["6C4lgA"], { onReconnect: er }),
              })
            : n.integrations.length > 0
              ? (0, r.jsx)(f.D0$, {
                    label: k.intl.string(k.t.fOe3fZ),
                    children: n.integrations.map((e) => (0, r.jsx)(H, { integration: e }, e.id)),
                })
              : void 0;
    }
    function en() {
        if (n.revoked || n.integrations.length > 0) return (0, r.jsx)(f.cGx, {});
    }
    function er() {
        (0, y.A)({
            platformType: n.type,
            location: "User Settings",
        });
    }
    function ei() {
        let e = g.A.get(n.type);
        (0, f.qfG)((i) =>
            (0, r.jsx)(
                o.Modal,
                B(
                    V(
                        {
                            title: k.intl.formatToPlainString(k.t.U5x12f, { name: e.name }),
                            subtitle: k.intl.format(k.t.VgqIPj, { provider: e.name }),
                            actions: [
                                {
                                    text: k.intl.string(k.t["ETE/oC"]),
                                    onClick: i.onClose,
                                    variant: "secondary",
                                },
                                {
                                    text: k.intl.string(k.t.bsbMVz),
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
                            (0, w.A)(n) &&
                            (0, r.jsx)(P.A, { children: k.intl.format(k.t.COW3Xn, { platformName: e.name }) }),
                    },
                ),
            ),
        );
    }
    function ea(e) {
        let { verified: t } = n,
            r = +!!e;
        if (e && !t) {
            R(r),
                (0, y.A)({
                    platformType: n.type,
                    location: "User Settings",
                });
            return;
        }
        m(r), _.A.setVisibility(n.type, n.id, r);
    }
    function es(e) {
        let { verified: t } = n,
            r = +!!e;
        if (e && !t) {
            G(r),
                (0, y.A)({
                    platformType: n.type,
                    location: "User Settings",
                });
            return;
        }
        S(r), _.A.setMetadataVisibility(n.type, n.id, r);
    }
    function eo(e) {
        p(e), _.A.setFriendSync(n.type, n.id, e);
    }
    function el(e) {
        T(e), _.A.setShowActivity(n.type, n.id, e);
    }
    return (
        i.useEffect(() => {
            Z.current = X;
        }),
        i.useEffect(() => {
            if (!1 === n.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = Z.current;
            null != e && (m(e), _.A.setVisibility(n.type, n.id, e), R(null)),
                null != t && (S(t), _.A.setMetadataVisibility(n.type, n.id, t), G(null));
        }, [n]),
        (0, r.jsxs)("div", {
            className: U.FI,
            children: [Q(n), $(n), J(n), ee(q), en(), et()],
        })
    );
}
function W() {
    return (0, r.jsx)(f.D0$, {
        label: k.intl.string(k.t.ZeDrUf),
        description: k.intl.format(k.t["oYc+Gz"], { privacyPolicyUrl: j.X7G.PRIVACY }),
        children: (0, r.jsx)(z, {}),
    });
}
function K(e) {
    let t = g.A.get(e);
    (0, y.A)({ platformType: t.type }),
        C.default.track(j.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function z() {
    function e() {
        p.h.dispatch({
            type: "CONNECTIONS_GRID_MODAL_SHOW",
            onComplete: K,
        });
    }
    let t = (0, E.gn)();
    return (0, r.jsxs)("div", {
        className: U.lA,
        children: [
            t.slice(0, 10).map((e) =>
                (0, r.jsx)(
                    h.A,
                    {
                        type: e.type,
                        className: U.__invalid_accountButton,
                        innerClassName: U.U$,
                    },
                    e.type,
                ),
            ),
            (0, r.jsx)(u.m, {
                text: k.intl.string(k.t.QqTz8b),
                children: (0, r.jsx)("div", {
                    className: s()(U.ej, U.__invalid_accountButton),
                    children: (0, r.jsx)(f.vN3, {
                        children: (0, r.jsx)("button", {
                            className: s()(U.R8, U.U$),
                            type: "button",
                            onClick: e,
                            "aria-label": k.intl.string(k.t.Zhcj9X),
                            children: (0, r.jsx)(f._BQ, {
                                color: "currentColor",
                                size: "md",
                                "aria-label": k.intl.string(k.t.QqTz8b),
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
        { fetching: n, accounts: i, theme: a, locale: s } = e;
    function o(e) {
        let { type: t, id: n } = e;
        _.A.disconnect(t, n);
    }
    return (
        (t = n
            ? (0, r.jsx)(f.y$y, { type: f.y$y.Type.SPINNING_CIRCLE })
            : 0 === i.length
              ? (0, r.jsx)(f.ppr, {
                    theme: a,
                    children: (0, r.jsx)(f.SGT, {
                        note: k.intl.string(k.t.WenGZ2),
                        children: k.intl.string(k.t.aoLS84),
                    }),
                })
              : i
                    .filter((e) => g.A.isSupported(e.type))
                    .map((e, t) =>
                        (0, r.jsx)(
                            Y,
                            {
                                theme: a,
                                account: e,
                                locale: s,
                                onDisconnect: () => o(e),
                            },
                            t,
                        ),
                    )),
        (0, r.jsx)("div", {
            className: U.V,
            children: t,
        })
    );
}
function X() {
    let e = (0, l.bG)([T.A], () => T.A.hidePersonalInformation),
        t = (0, l.bG)([S.A], () => S.A.isFetching()),
        n = (0, l.bG)([S.A], () => S.A.getAccounts()),
        i = (0, m.Ay)(),
        a = (0, l.bG)([R.default], () => R.default.locale);
    return e
        ? null
        : (0, r.jsx)(q, {
              fetching: t,
              accounts: n,
              theme: i,
              locale: a,
          });
}
let Z = () => {
    let e = (0, l.bG)([S.A], () => S.A.isFetching()),
        t = (0, l.bG)([S.A], () => S.A.getAccounts()),
        n = (0, m.Ay)(),
        a = (0, l.bG)([R.default], () => R.default.locale);
    return (
        i.useEffect(() => {
            _.A.fetch();
        }, []),
        (0, r.jsxs)(D.A, {
            title: k.intl.string(k.t["3fe7U5"]),
            children: [
                (0, r.jsx)(W, {}),
                (0, r.jsx)(f.cGx, { gap: 24 }),
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

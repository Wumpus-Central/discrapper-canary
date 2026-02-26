n.d(t, { Ay: () => W, d7: () => z, u: () => w }), n(321073);
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(158954),
    o = n(311907),
    c = n(827734),
    d = n(990078),
    u = n(582754),
    _ = n(397927),
    m = n(73153),
    A = n(77468),
    g = n(289498),
    h = n(736653),
    x = n(573648),
    p = n(681819),
    E = n(370480),
    C = n(882997),
    T = n(169869),
    S = n(263063),
    I = n(496885),
    f = n(962173),
    N = n(71393),
    b = n(351906),
    j = n(954571),
    v = n(975571),
    O = n(773669),
    R = n(747454),
    y = n(801264),
    P = n(790174),
    L = n(131678),
    D = n(138410),
    M = n(652215),
    G = n(783419),
    U = n(985018),
    k = n(326730);
let V = (e) => {
    let t,
        { integration: n } = e,
        {
            isJoining: s,
            joinErrorMessage: a,
            showJoinErrorMessage: l,
        } = (0, o.cf)(
            [f.A],
            () => ({
                isJoining: f.A.isJoining(n.id),
                joinErrorMessage:
                    "" === f.A.joinErrorMessage(n.id) ? U.intl.string(U.t.j2d6Km) : f.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== f.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, o.bG)([N.A], () => N.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, i.jsx)(_.Button, {
                size: "sm",
                onClick: function () {
                    A.A.joinServer(n.id, () => {});
                },
                disabled: s,
                variant: "primary",
                text: s ? U.intl.string(U.t.RXvQQu) : U.intl.string(U.t.XpeFYr),
            })),
        (0, i.jsxs)("div", {
            className: k.iA,
            children: [
                (0, i.jsxs)("div", {
                    className: k.XX,
                    children: [
                        (0, i.jsx)(S.Ay, { size: S.Ay.Sizes.SMALL, guild: n.guild, className: k.$f }),
                        (0, i.jsxs)("div", {
                            className: k.Vn,
                            children: [
                                (0, i.jsx)(_.Text, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, i.jsx)(_.MzZ, {
                                    href: x.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                                    children: (0, i.jsx)(_.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: n.account.name,
                                    }),
                                }),
                            ],
                        }),
                        t,
                    ],
                }),
                l &&
                    (0, i.jsx)(_.Text, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: k.R,
                        children: a,
                    }),
            ],
        })
    );
};
function H(e) {
    let t,
        n,
        a,
        l,
        o,
        m,
        g,
        { onDisconnect: h, account: S, theme: f, locale: N } = e,
        [b, j] = s.useState(S.friendSync),
        [O, P] = s.useState(S.visibility),
        [H, w] = s.useState(S.metadataVisibility),
        [B, Y] = s.useState(S.showActivity),
        [F, z] = s.useState(null),
        [W, K] = s.useState(null),
        [Z, q] = s.useState(!1),
        [X, Q] = s.useState([]),
        J = (0, p.ML)(S.type),
        $ = x.A.get(J);
    s.useEffect(() => {
        j(S.friendSync), P(S.visibility), w(S.metadataVisibility), Y(S.showActivity);
    }, [S]);
    let ee = { inProgressVisibility: F, inProgressMetadataVisibility: W },
        et = s.useRef(ee);
    return (
        s.useEffect(() => {
            et.current = ee;
        }),
        s.useEffect(() => {
            if (!1 === S.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = et.current;
            null != e && (P(e), A.A.setVisibility(S.type, S.id, e), z(null)),
                null != t && (w(t), A.A.setMetadataVisibility(S.type, S.id, t), K(null));
        }, [S]),
        (0, i.jsxs)("div", {
            className: k.FI,
            children: [
                ((t = x.A.get(S.type)),
                (n = x.A.get(J)),
                (a = "1" === (S.metadata ?? {})[G.pK.TWITTER_VERIFIED]),
                (l = null),
                t.type === M.fg2.TWITTER &&
                    a &&
                    (l = (0, i.jsx)(d.m, {
                        text: U.intl.string(U.t.Jebrww),
                        children: (0, i.jsx)(I.A, {
                            color: c.A.unsafe_rawColors.TWITTER.css,
                            children: (0, i.jsx)(_.Uzd, { size: "xs", color: c.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, i.jsxs)("div", {
                    className: k.Il,
                    children: [
                        (0, i.jsx)("img", {
                            alt: n.name,
                            className: k.gj,
                            src: (0, u.Mw)(f) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsxs)("div", {
                                    className: k.$p,
                                    children: [
                                        (0, i.jsx)(_.Text, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: k.RW,
                                            children: S.name,
                                        }),
                                        null != l && (0, i.jsx)("div", { className: k.cG, children: l }),
                                    ],
                                }),
                                (0, i.jsx)(_.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: k.Au,
                                    children: n.name,
                                }),
                            ],
                        }),
                        (0, i.jsx)(_.DUT, {
                            className: k.uH,
                            onClick: function () {
                                let e = x.A.get(S.type);
                                (0, _.qfG)((t) =>
                                    (0, i.jsx)(r.Modal, {
                                        title: U.intl.formatToPlainString(U.t.U5x12f, { name: e.name }),
                                        subtitle: U.intl.format(U.t.VgqIPj, { provider: e.name }),
                                        actions: [
                                            {
                                                text: U.intl.string(U.t["ETE/oC"]),
                                                onClick: t.onClose,
                                                variant: "secondary",
                                            },
                                            {
                                                text: U.intl.string(U.t.bsbMVz),
                                                onClick: () => {
                                                    h(), t.onClose();
                                                },
                                                variant: "primary",
                                            },
                                        ],
                                        ...t,
                                        children:
                                            (0, R.A)(S) &&
                                            (0, i.jsx)(y.A, {
                                                children: U.intl.format(U.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": U.intl.string(U.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, i.jsx)(_.PGe, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                S.twoWayLink
                    ? null
                    : S.type === M.fg2.XBOX
                      ? (0, i.jsx)(D._, {})
                      : S.type === M.fg2.PLAYSTATION
                        ? (0, i.jsx)(L.j, {})
                        : null,
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        s = (0, E.An)(t[G.pK.CREATED_AT], N);
                    switch (e.type) {
                        case M.fg2.REDDIT:
                            n = (0, T.xE)(t, k.Nz);
                            break;
                        case M.fg2.STEAM:
                            n = (0, T.dy)(t, k.Nz);
                            break;
                        case M.fg2.BLUESKY:
                        case M.fg2.TWITTER:
                        case M.fg2.MASTODON:
                            n = (0, T.ED)(t, k.Nz);
                            break;
                        case M.fg2.EBAY:
                            n = (0, T.ub)(t, k.Nz);
                            break;
                        case M.fg2.PAYPAL:
                            n = (0, T.gZ)(t, k.Nz);
                            break;
                        case M.fg2.TIKTOK:
                            n = (0, T.HU)(t, k.Nz);
                    }
                    null !== s &&
                        (null == n && (n = []),
                        n?.push(
                            (0, i.jsx)(
                                _.Text,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: k.M4,
                                    children: U.intl.format(U.t["9rfonh"], { date: s }),
                                },
                                "member-since",
                            ),
                        ));
                    let a = X.includes(e.id),
                        l = U.intl.string(U.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== x.A.get(e.type).hasMetadata) return null;
                        else
                            (n = [
                                (0, i.jsx)(_.LpS, { className: k.Z3, text: U.intl.string(U.t.y2b7CA) }, "badge"),
                                (0, i.jsx)(
                                    _.Text,
                                    {
                                        variant: "text-xs/normal",
                                        className: k.vt,
                                        children: U.intl.format(U.t.Up2ni7, {
                                            helpdeskUrl: v.A.getArticleURL(M.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (l = U.intl.string(U.t["LVh3/5"]));
                    return (
                        a && (l = U.intl.string(U.t.i4jeWR)),
                        n.push(
                            (0, i.jsx)(
                                "div",
                                {
                                    className: k.jy,
                                    children: (0, i.jsx)(_.Button, {
                                        text: l,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: Z,
                                        disabled: a,
                                        "aria-label": U.intl.string(U.t.sCkLYH),
                                        onClick: a
                                            ? void 0
                                            : () => {
                                                  q(!0),
                                                      A.A.refresh(e.type, e.id).finally(() => {
                                                          setTimeout(() => {
                                                              X.push(e.id), Q(X), q(!1);
                                                          }, 2e3);
                                                      });
                                              },
                                    }),
                                },
                                "refresh-button",
                            ),
                        ),
                        (0, i.jsx)("div", { className: k.tJ, children: n })
                    );
                })(S),
                (M.txh.has(S.type) &&
                    (o = (0, i.jsx)(_.dOG, {
                        label: U.intl.string(U.t["+KCMSi"]),
                        checked: b,
                        onChange: function (e) {
                            j(e), A.A.setFriendSync(S.type, S.id, e);
                        },
                    })),
                M.ewM.has(S.type) &&
                    (m = (0, i.jsx)(_.dOG, {
                        label: U.intl.format(U.t["6u6J0q"], { platform: $.name }),
                        checked: B,
                        onChange: function (e) {
                            Y(e), A.A.setShowActivity(S.type, S.id, e);
                        },
                    })),
                x.A.get(S.type)?.hasMetadata === !0 &&
                    (g = (0, i.jsx)(_.dOG, {
                        label: U.intl.string(U.t.FYKGsL),
                        checked: 1 === H,
                        onChange: function (e) {
                            let { verified: t } = S,
                                n = +!!e;
                            if (e && !t) {
                                K(n), (0, C.A)({ platformType: S.type, location: "User Settings" });
                                return;
                            }
                            w(n), A.A.setMetadataVisibility(S.type, S.id, n);
                        },
                        disabled: 1 !== O || null == S.metadata,
                    })),
                (0, i.jsxs)("div", {
                    className: k.HZ,
                    children: [
                        (0, i.jsx)(_.dOG, {
                            label: U.intl.string(U.t.f7yOAX),
                            checked: 1 === O,
                            onChange: function (e) {
                                let { verified: t } = S,
                                    n = +!!e;
                                if (e && !t) {
                                    z(n), (0, C.A)({ platformType: S.type, location: "User Settings" });
                                    return;
                                }
                                P(n), A.A.setVisibility(S.type, S.id, n);
                            },
                        }),
                        g,
                        m,
                        o,
                    ],
                })),
                (function () {
                    if (S.revoked || S.integrations.length > 0) return (0, i.jsx)(_.cGx, {});
                })(),
                S.revoked
                    ? (0, i.jsx)(r.po8, {
                          messageType: r.YCn.INFO,
                          children: U.intl.format(U.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, C.A)({ platformType: S.type, location: "User Settings" });
                              },
                          }),
                      })
                    : S.integrations.length > 0
                      ? (0, i.jsx)(_.D0$, {
                            label: U.intl.string(U.t.fOe3fZ),
                            children: S.integrations.map((e) => (0, i.jsx)(V, { integration: e }, e.id)),
                        })
                      : void 0,
            ],
        })
    );
}
function w() {
    return (0, i.jsx)(_.D0$, {
        label: U.intl.string(U.t.ZeDrUf),
        description: U.intl.format(U.t["oYc+Gz"], { privacyPolicyUrl: M.X7G.PRIVACY }),
        children: (0, i.jsx)(Y, {}),
    });
}
function B(e) {
    let t = x.A.get(e);
    (0, C.A)({ platformType: t.type }),
        j.default.track(M.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function Y() {
    let e = (0, p.gn)();
    return (0, i.jsxs)("div", {
        className: k.lA,
        children: [
            e
                .slice(0, 10)
                .map((e) =>
                    (0, i.jsx)(
                        g.A,
                        { type: e.type, className: k.__invalid_accountButton, innerClassName: k.U$ },
                        e.type,
                    ),
                ),
            (0, i.jsx)(d.m, {
                text: U.intl.string(U.t.QqTz8b),
                children: (0, i.jsx)("div", {
                    className: l()(k.ej, k.__invalid_accountButton),
                    children: (0, i.jsx)(_.vN3, {
                        children: (0, i.jsx)("button", {
                            className: l()(k.R8, k.U$),
                            type: "button",
                            onClick: function () {
                                m.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: B });
                            },
                            "aria-label": U.intl.string(U.t.Zhcj9X),
                            children: (0, i.jsx)(_._BQ, {
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
function F(e) {
    let t,
        { fetching: n, accounts: s, theme: a, locale: l } = e;
    return (
        (t = n
            ? (0, i.jsx)(_.y$y, { type: _.y$y.Type.SPINNING_CIRCLE })
            : 0 === s.length
              ? (0, i.jsx)(_.ppr, {
                    theme: a,
                    children: (0, i.jsx)(_.SGT, {
                        note: U.intl.string(U.t.WenGZ2),
                        children: U.intl.string(U.t.aoLS84),
                    }),
                })
              : s
                    .filter((e) => x.A.isSupported(e.type))
                    .map((e, t) =>
                        (0, i.jsx)(
                            H,
                            {
                                theme: a,
                                account: e,
                                locale: l,
                                onDisconnect: () =>
                                    (function (e) {
                                        let { type: t, id: n } = e;
                                        A.A.disconnect(t, n);
                                    })(e),
                            },
                            t,
                        ),
                    )),
        (0, i.jsx)("div", { className: k.V, children: t })
    );
}
function z() {
    let e = (0, o.bG)([b.A], () => b.A.hidePersonalInformation),
        t = (0, o.bG)([f.A], () => f.A.isFetching()),
        n = (0, o.bG)([f.A], () => f.A.getAccounts()),
        s = (0, h.Ay)(),
        a = (0, o.bG)([O.default], () => O.default.locale);
    return e ? null : (0, i.jsx)(F, { fetching: t, accounts: n, theme: s, locale: a });
}
let W = () => {
    let e = (0, o.bG)([f.A], () => f.A.isFetching()),
        t = (0, o.bG)([f.A], () => f.A.getAccounts()),
        n = (0, h.Ay)(),
        a = (0, o.bG)([O.default], () => O.default.locale);
    return (
        s.useEffect(() => {
            A.A.fetch();
        }, []),
        (0, i.jsxs)(P.A, {
            title: U.intl.string(U.t["3fe7U5"]),
            children: [
                (0, i.jsx)(w, {}),
                (0, i.jsx)(_.cGx, { gap: 24 }),
                (0, i.jsx)(F, { fetching: e, accounts: t, theme: n, locale: a }),
            ],
        })
    );
};

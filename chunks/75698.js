n.d(t, { Ay: () => K, d7: () => W, u: () => B }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(158954),
    o = n(311907),
    d = n(827734),
    c = n(990078),
    u = n(582754),
    h = n(397927),
    A = n(73153),
    g = n(77468),
    m = n(289498),
    p = n(736653),
    _ = n(573648),
    x = n(681819),
    f = n(370480),
    E = n(882997),
    C = n(169869),
    I = n(263063),
    S = n(496885),
    b = n(962173),
    N = n(71393),
    T = n(351906),
    j = n(954571),
    v = n(975571),
    y = n(773669),
    R = n(747454),
    O = n(801264),
    L = n(790174),
    D = n(131678),
    M = n(138410),
    G = n(652215),
    U = n(783419),
    P = n(985018),
    k = n(612028);
let w = (e) => {
    let t,
        { integration: n } = e,
        {
            isJoining: l,
            joinErrorMessage: s,
            showJoinErrorMessage: a,
        } = (0, o.cf)(
            [b.A],
            () => ({
                isJoining: b.A.isJoining(n.id),
                joinErrorMessage:
                    "" === b.A.joinErrorMessage(n.id) ? P.intl.string(P.t.j2d6Km) : b.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== b.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, o.bG)([N.A], () => N.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, i.jsx)(h.Button, {
                size: "sm",
                onClick: function () {
                    g.A.joinServer(n.id, () => {});
                },
                disabled: l,
                variant: "primary",
                text: l ? P.intl.string(P.t.RXvQQu) : P.intl.string(P.t.XpeFYr),
            })),
        (0, i.jsxs)("div", {
            className: k.iA,
            children: [
                (0, i.jsxs)("div", {
                    className: k.XX,
                    children: [
                        (0, i.jsx)(I.A, { size: I.A.Sizes.SMALL, guild: n.guild, className: k.$f }),
                        (0, i.jsxs)("div", {
                            className: k.Vn,
                            children: [
                                (0, i.jsx)(h.Text, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, i.jsx)(h.MzZ, {
                                    href: _.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                                    children: (0, i.jsx)(h.Text, {
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
                a &&
                    (0, i.jsx)(h.Text, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: k.R,
                        children: s,
                    }),
            ],
        })
    );
};
function V(e) {
    let t,
        n,
        s,
        a,
        o,
        A,
        m,
        { onDisconnect: p, account: I, theme: b, locale: N } = e,
        [T, j] = l.useState(I.friendSync),
        [y, L] = l.useState(I.visibility),
        [V, B] = l.useState(I.metadataVisibility),
        [H, F] = l.useState(I.showActivity),
        [Y, W] = l.useState(null),
        [K, z] = l.useState(null),
        [X, q] = l.useState(!1),
        [J, Q] = l.useState([]),
        Z = (0, x.ML)(I.type),
        $ = _.A.get(Z);
    l.useEffect(() => {
        j(I.friendSync), L(I.visibility), B(I.metadataVisibility), F(I.showActivity);
    }, [I]);
    let ee = { inProgressVisibility: Y, inProgressMetadataVisibility: K },
        et = l.useRef(ee);
    return (
        l.useEffect(() => {
            et.current = ee;
        }),
        l.useEffect(() => {
            if (!1 === I.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = et.current;
            null != e && (L(e), g.A.setVisibility(I.type, I.id, e), W(null)),
                null != t && (B(t), g.A.setMetadataVisibility(I.type, I.id, t), z(null));
        }, [I]),
        (0, i.jsxs)("div", {
            className: k.FI,
            children: [
                ((t = _.A.get(I.type)),
                (n = _.A.get(Z)),
                (s = "1" === (I.metadata ?? {})[U.pK.TWITTER_VERIFIED]),
                (a = null),
                t.type === G.fg2.TWITTER &&
                    s &&
                    (a = (0, i.jsx)(c.m, {
                        text: P.intl.string(P.t.Jebrww),
                        children: (0, i.jsx)(S.A, {
                            color: d.A.unsafe_rawColors.TWITTER.css,
                            children: (0, i.jsx)(h.Uzd, { size: "xs", color: d.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, i.jsxs)("div", {
                    className: k.Il,
                    children: [
                        (0, i.jsx)("img", {
                            alt: n.name,
                            className: k.gj,
                            src: (0, u.Mw)(b) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsxs)("div", {
                                    className: k.$p,
                                    children: [
                                        (0, i.jsx)(h.Text, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: k.RW,
                                            children: I.name,
                                        }),
                                        null != a && (0, i.jsx)("div", { className: k.cG, children: a }),
                                    ],
                                }),
                                (0, i.jsx)(h.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: k.Au,
                                    children: n.name,
                                }),
                            ],
                        }),
                        (0, i.jsx)(h.DUT, {
                            className: k.uH,
                            onClick: function () {
                                let e = _.A.get(I.type);
                                (0, h.qfG)((t) =>
                                    (0, i.jsx)(r.Modal, {
                                        title: P.intl.formatToPlainString(P.t.U5x12f, { name: e.name }),
                                        subtitle: P.intl.format(P.t.VgqIPj, { provider: e.name }),
                                        actions: [
                                            {
                                                text: P.intl.string(P.t["ETE/oC"]),
                                                onClick: t.onClose,
                                                variant: "secondary",
                                            },
                                            {
                                                text: P.intl.string(P.t.bsbMVz),
                                                onClick: () => {
                                                    p(), t.onClose();
                                                },
                                                variant: "primary",
                                            },
                                        ],
                                        ...t,
                                        children:
                                            (0, R.A)(I) &&
                                            (0, i.jsx)(O.A, {
                                                children: P.intl.format(P.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": P.intl.string(P.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, i.jsx)(h.PGe, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                I.twoWayLink
                    ? null
                    : I.type === G.fg2.XBOX
                      ? (0, i.jsx)(M._, {})
                      : I.type === G.fg2.PLAYSTATION
                        ? (0, i.jsx)(D.j, {})
                        : null,
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        l = (0, f.An)(t[U.pK.CREATED_AT], N);
                    switch (e.type) {
                        case G.fg2.REDDIT:
                            n = (0, C.xE)(t, k.Nz);
                            break;
                        case G.fg2.STEAM:
                            n = (0, C.dy)(t, k.Nz);
                            break;
                        case G.fg2.BLUESKY:
                        case G.fg2.TWITTER:
                        case G.fg2.MASTODON:
                            n = (0, C.ED)(t, k.Nz);
                            break;
                        case G.fg2.EBAY:
                            n = (0, C.ub)(t, k.Nz);
                            break;
                        case G.fg2.PAYPAL:
                            n = (0, C.gZ)(t, k.Nz);
                            break;
                        case G.fg2.TIKTOK:
                            n = (0, C.HU)(t, k.Nz);
                    }
                    null !== l &&
                        (null == n && (n = []),
                        n?.push(
                            (0, i.jsx)(
                                h.Text,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: k.M4,
                                    children: P.intl.format(P.t["9rfonh"], { date: l }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = J.includes(e.id),
                        a = P.intl.string(P.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== _.A.get(e.type).hasMetadata) return null;
                        else
                            (n = [
                                (0, i.jsx)(h.LpS, { className: k.Z3, text: P.intl.string(P.t.y2b7CA) }, "badge"),
                                (0, i.jsx)(
                                    h.Text,
                                    {
                                        variant: "text-xs/normal",
                                        className: k.vt,
                                        children: P.intl.format(P.t.Up2ni7, {
                                            helpdeskUrl: v.A.getArticleURL(G.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (a = P.intl.string(P.t["LVh3/5"]));
                    return (
                        s && (a = P.intl.string(P.t.i4jeWR)),
                        n.push(
                            (0, i.jsx)(
                                "div",
                                {
                                    className: k.jy,
                                    children: (0, i.jsx)(h.Button, {
                                        text: a,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: X,
                                        disabled: s,
                                        "aria-label": P.intl.string(P.t.sCkLYH),
                                        onClick: s
                                            ? void 0
                                            : () => {
                                                  q(!0),
                                                      g.A.refresh(e.type, e.id).finally(() => {
                                                          setTimeout(() => {
                                                              J.push(e.id), Q(J), q(!1);
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
                })(I),
                (G.txh.has(I.type) &&
                    (o = (0, i.jsx)(h.dOG, {
                        label: P.intl.string(P.t["+KCMSi"]),
                        checked: T,
                        onChange: function (e) {
                            j(e), g.A.setFriendSync(I.type, I.id, e);
                        },
                    })),
                G.ewM.has(I.type) &&
                    (A = (0, i.jsx)(h.dOG, {
                        label: P.intl.format(P.t["6u6J0q"], { platform: $.name }),
                        checked: H,
                        onChange: function (e) {
                            F(e), g.A.setShowActivity(I.type, I.id, e);
                        },
                    })),
                _.A.get(I.type)?.hasMetadata === !0 &&
                    (m = (0, i.jsx)(h.dOG, {
                        label: P.intl.string(P.t.FYKGsL),
                        checked: 1 === V,
                        onChange: function (e) {
                            let { verified: t } = I,
                                n = +!!e;
                            if (e && !t) {
                                z(n), (0, E.A)({ platformType: I.type, location: "User Settings" });
                                return;
                            }
                            B(n), g.A.setMetadataVisibility(I.type, I.id, n);
                        },
                        disabled: 1 !== y || null == I.metadata,
                    })),
                (0, i.jsxs)("div", {
                    className: k.HZ,
                    children: [
                        (0, i.jsx)(h.dOG, {
                            label: P.intl.string(P.t.f7yOAX),
                            checked: 1 === y,
                            onChange: function (e) {
                                let { verified: t } = I,
                                    n = +!!e;
                                if (e && !t) {
                                    W(n), (0, E.A)({ platformType: I.type, location: "User Settings" });
                                    return;
                                }
                                L(n), g.A.setVisibility(I.type, I.id, n);
                            },
                        }),
                        m,
                        A,
                        o,
                    ],
                })),
                (function () {
                    if (I.revoked || I.integrations.length > 0) return (0, i.jsx)(h.cGx, {});
                })(),
                I.revoked
                    ? (0, i.jsx)(r.po8, {
                          messageType: r.YCn.INFO,
                          children: P.intl.format(P.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, E.A)({ platformType: I.type, location: "User Settings" });
                              },
                          }),
                      })
                    : I.integrations.length > 0
                      ? (0, i.jsx)(h.D0$, {
                            label: P.intl.string(P.t.fOe3fZ),
                            children: I.integrations.map((e) => (0, i.jsx)(w, { integration: e }, e.id)),
                        })
                      : void 0,
            ],
        })
    );
}
function B() {
    return (0, i.jsx)(h.D0$, {
        label: P.intl.string(P.t.ZeDrUf),
        description: P.intl.format(P.t["oYc+Gz"], { privacyPolicyUrl: G.X7G.PRIVACY }),
        children: (0, i.jsx)(F, {}),
    });
}
function H(e) {
    let t = _.A.get(e);
    (0, E.A)({ platformType: t.type }),
        j.default.track(G.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function F() {
    let e = (0, x.gn)();
    return (0, i.jsxs)("div", {
        className: k.lA,
        children: [
            e
                .slice(0, 10)
                .map((e) =>
                    (0, i.jsx)(
                        m.A,
                        { type: e.type, className: k.__invalid_accountButton, innerClassName: k.U$ },
                        e.type,
                    ),
                ),
            (0, i.jsx)(c.m, {
                text: P.intl.string(P.t.QqTz8b),
                children: (0, i.jsx)("div", {
                    className: a()(k.ej, k.__invalid_accountButton),
                    children: (0, i.jsx)(h.vN3, {
                        children: (0, i.jsx)("button", {
                            className: a()(k.R8, k.U$),
                            type: "button",
                            onClick: function () {
                                A.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: H });
                            },
                            "aria-label": P.intl.string(P.t.Zhcj9X),
                            children: (0, i.jsx)(h._BQ, {
                                color: "currentColor",
                                size: "md",
                                "aria-label": P.intl.string(P.t.QqTz8b),
                            }),
                        }),
                    }),
                }),
            }),
        ],
    });
}
function Y(e) {
    let t,
        { fetching: n, accounts: l, theme: s, locale: a } = e;
    return (
        (t = n
            ? (0, i.jsx)(h.y$y, { type: h.y$y.Type.SPINNING_CIRCLE })
            : 0 === l.length
              ? (0, i.jsx)(h.ppr, {
                    theme: s,
                    children: (0, i.jsx)(h.SGT, {
                        note: P.intl.string(P.t.WenGZ2),
                        children: P.intl.string(P.t.aoLS84),
                    }),
                })
              : l
                    .filter((e) => _.A.isSupported(e.type))
                    .map((e, t) =>
                        (0, i.jsx)(
                            V,
                            {
                                theme: s,
                                account: e,
                                locale: a,
                                onDisconnect: () =>
                                    (function (e) {
                                        let { type: t, id: n } = e;
                                        g.A.disconnect(t, n);
                                    })(e),
                            },
                            t,
                        ),
                    )),
        (0, i.jsx)("div", { className: k.V, children: t })
    );
}
function W() {
    let e = (0, o.bG)([T.A], () => T.A.hidePersonalInformation),
        t = (0, o.bG)([b.A], () => b.A.isFetching()),
        n = (0, o.bG)([b.A], () => b.A.getAccounts()),
        l = (0, p.Ay)(),
        s = (0, o.bG)([y.default], () => y.default.locale);
    return e ? null : (0, i.jsx)(Y, { fetching: t, accounts: n, theme: l, locale: s });
}
let K = () => {
    let e = (0, o.bG)([b.A], () => b.A.isFetching()),
        t = (0, o.bG)([b.A], () => b.A.getAccounts()),
        n = (0, p.Ay)(),
        s = (0, o.bG)([y.default], () => y.default.locale);
    return (
        l.useEffect(() => {
            g.A.fetch();
        }, []),
        (0, i.jsxs)(L.A, {
            title: P.intl.string(P.t["3fe7U5"]),
            children: [
                (0, i.jsx)(B, {}),
                (0, i.jsx)(h.cGx, { gap: 24 }),
                (0, i.jsx)(Y, { fetching: e, accounts: t, theme: n, locale: s }),
            ],
        })
    );
};

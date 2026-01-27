n.d(t, {
    Ay: () => W,
    d7: () => z,
    u: () => H,
}),
    n(896048),
    n(321073),
    n(492834);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(158954),
    o = n(311907),
    c = n(827734),
    d = n(990078),
    u = n(582754),
    g = n(397927),
    h = n(73153),
    x = n(77468),
    A = n(289498),
    p = n(736653),
    m = n(573648),
    j = n(681819),
    b = n(370480),
    O = n(882997),
    S = n(169869),
    E = n(263063),
    f = n(496885),
    v = n(962173),
    T = n(71393),
    C = n(351906),
    y = n(954571),
    N = n(975571),
    I = n(773669),
    _ = n(747454),
    P = n(801264),
    G = n(790174),
    R = n(131678),
    D = n(138410),
    L = n(652215),
    k = n(783419),
    w = n(985018),
    V = n(612028);
let M = (e) => {
    var t, n;
    let s,
        { integration: l } = e,
        {
            isJoining: r,
            joinErrorMessage: a,
            showJoinErrorMessage: c,
        } = (0, o.cf)(
            [v.A],
            () => ({
                isJoining: v.A.isJoining(l.id),
                joinErrorMessage:
                    "" === v.A.joinErrorMessage(l.id) ? w.intl.string(w.t.j2d6Km) : v.A.joinErrorMessage(l.id),
                showJoinErrorMessage: void 0 !== v.A.joinErrorMessage(l.id),
            }),
            [l.id],
        );
    return (
        null != (0, o.bG)([T.A], () => T.A.getGuild(l.guild.id), [l.guild.id]) ||
            (s = (0, i.jsx)(g.Button, {
                size: "sm",
                onClick: function () {
                    x.A.joinServer(l.id, () => {});
                },
                disabled: r,
                variant: "primary",
                text: r ? w.intl.string(w.t.RXvQQu) : w.intl.string(w.t.XpeFYr),
            })),
        (0, i.jsxs)("div", {
            className: V.iA,
            children: [
                (0, i.jsxs)("div", {
                    className: V.XX,
                    children: [
                        (0, i.jsx)(E.A, {
                            size: E.A.Sizes.SMALL,
                            guild: l.guild,
                            className: V.$f,
                        }),
                        (0, i.jsxs)("div", {
                            className: V.Vn,
                            children: [
                                (0, i.jsx)(g.Text, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: l.guild.name,
                                }),
                                (0, i.jsx)(g.MzZ, {
                                    href:
                                        null == (n = m.A.get(l.type)) || null == (t = n.getPlatformUserUrl)
                                            ? void 0
                                            : t.call(n, l.account),
                                    children: (0, i.jsx)(g.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: l.account.name,
                                    }),
                                }),
                            ],
                        }),
                        s,
                    ],
                }),
                c &&
                    (0, i.jsx)(g.Text, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: V.R,
                        children: a,
                    }),
            ],
        })
    );
};

function U(e) {
    var t, n;
    let l,
        r,
        o,
        h,
        A,
        p,
        E,
        { onDisconnect: v, account: T, theme: C, locale: y } = e,
        [I, G] = s.useState(T.friendSync),
        [U, H] = s.useState(T.visibility),
        [Y, B] = s.useState(T.metadataVisibility),
        [F, z] = s.useState(T.showActivity),
        [W, K] = s.useState(null),
        [J, Q] = s.useState(null),
        [X, q] = s.useState(!1),
        [Z, $] = s.useState([]),
        ee = (0, j.ML)(T.type),
        et = m.A.get(ee);
    s.useEffect(() => {
        G(T.friendSync), H(T.visibility), B(T.metadataVisibility), z(T.showActivity);
    }, [T]);
    let en = {
            inProgressVisibility: W,
            inProgressMetadataVisibility: J,
        },
        ei = s.useRef(en);
    return (
        s.useEffect(() => {
            ei.current = en;
        }),
        s.useEffect(() => {
            if (!1 === T.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = ei.current;
            null != e && (H(e), x.A.setVisibility(T.type, T.id, e), K(null)),
                null != t && (B(t), x.A.setMetadataVisibility(T.type, T.id, t), Q(null));
        }, [T]),
        (0, i.jsxs)("div", {
            className: V.FI,
            children: [
                ((l = m.A.get(T.type)),
                (r = m.A.get(ee)),
                (o = "1" === (null != (t = T.metadata) ? t : {})[k.pK.TWITTER_VERIFIED]),
                (h = null),
                l.type === L.fg2.TWITTER &&
                    o &&
                    (h = (0, i.jsx)(d.m, {
                        text: w.intl.string(w.t.Jebrww),
                        children: (0, i.jsx)(f.A, {
                            color: c.A.unsafe_rawColors.TWITTER.css,
                            children: (0, i.jsx)(g.Uzd, {
                                size: "xs",
                                color: c.A.unsafe_rawColors.WHITE.css,
                            }),
                        }),
                    })),
                (0, i.jsxs)("div", {
                    className: V.Il,
                    children: [
                        (0, i.jsx)("img", {
                            alt: r.name,
                            className: V.gj,
                            src: (0, u.Mw)(C) ? r.icon.darkSVG : r.icon.lightSVG,
                        }),
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsxs)("div", {
                                    className: V.$p,
                                    children: [
                                        (0, i.jsx)(g.Text, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: V.RW,
                                            children: T.name,
                                        }),
                                        null != h &&
                                            (0, i.jsx)("div", {
                                                className: V.cG,
                                                children: h,
                                            }),
                                    ],
                                }),
                                (0, i.jsx)(g.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: V.Au,
                                    children: r.name,
                                }),
                            ],
                        }),
                        (0, i.jsx)(g.DUT, {
                            className: V.uH,
                            onClick: function () {
                                let e = m.A.get(T.type);
                                (0, g.qfG)((t) => {
                                    var n, s;
                                    return (0, i.jsx)(
                                        a.Modal,
                                        ((n = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    i = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                    (i = i.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                        }),
                                                    )),
                                                    i.forEach(function (t) {
                                                        var i;
                                                        (i = n[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: i,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0,
                                                                  })
                                                                : (e[t] = i);
                                                    });
                                            }
                                            return e;
                                        })(
                                            {
                                                title: w.intl.formatToPlainString(w.t.U5x12f, {
                                                    name: e.name,
                                                }),
                                                subtitle: w.intl.format(w.t.VgqIPj, {
                                                    provider: e.name,
                                                }),
                                                actions: [
                                                    {
                                                        text: w.intl.string(w.t["ETE/oC"]),
                                                        onClick: t.onClose,
                                                        variant: "secondary",
                                                    },
                                                    {
                                                        text: w.intl.string(w.t.bsbMVz),
                                                        onClick: () => {
                                                            v(), t.onClose();
                                                        },
                                                        variant: "primary",
                                                    },
                                                ],
                                            },
                                            t,
                                        )),
                                        (s = s =
                                            {
                                                children:
                                                    (0, _.A)(T) &&
                                                    (0, i.jsx)(P.A, {
                                                        children: w.intl.format(w.t.COW3Xn, {
                                                            platformName: e.name,
                                                        }),
                                                    }),
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var i = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, i);
                                                  }
                                                  return n;
                                              })(Object(s)).forEach(function (e) {
                                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e));
                                              }),
                                        n),
                                    );
                                });
                            },
                            "aria-label": w.intl.string(w.t.ppppRJ),
                            focusProps: {
                                offset: {
                                    top: -4,
                                    left: -4,
                                    right: -4,
                                },
                            },
                            children: (0, i.jsx)(g.PGe, {
                                size: "xs",
                                color: "currentColor",
                            }),
                        }),
                    ],
                })),
                T.twoWayLink
                    ? null
                    : T.type === L.fg2.XBOX
                      ? (0, i.jsx)(D._, {})
                      : T.type === L.fg2.PLAYSTATION
                        ? (0, i.jsx)(R.j, {})
                        : null,
                (function (e) {
                    var t;
                    let n = null != (t = e.metadata) ? t : {},
                        s = null,
                        l = (0, b.An)(n[k.pK.CREATED_AT], y);
                    switch (e.type) {
                        case L.fg2.REDDIT:
                            s = (0, S.xE)(n, V.Nz);
                            break;
                        case L.fg2.STEAM:
                            s = (0, S.dy)(n, V.Nz);
                            break;
                        case L.fg2.BLUESKY:
                        case L.fg2.TWITTER:
                        case L.fg2.MASTODON:
                            s = (0, S.ED)(n, V.Nz);
                            break;
                        case L.fg2.EBAY:
                            s = (0, S.ub)(n, V.Nz);
                            break;
                        case L.fg2.PAYPAL:
                            s = (0, S.gZ)(n, V.Nz);
                            break;
                        case L.fg2.TIKTOK:
                            s = (0, S.HU)(n, V.Nz);
                    }
                    null !== l &&
                        (null == s && (s = []),
                        null == s ||
                            s.push(
                                (0, i.jsx)(
                                    g.Text,
                                    {
                                        variant: "text-xs/normal",
                                        color: "text-subtle",
                                        className: V.M4,
                                        children: w.intl.format(w.t["9rfonh"], {
                                            date: l,
                                        }),
                                    },
                                    "member-since",
                                ),
                            ));
                    let r = Z.includes(e.id),
                        a = w.intl.string(w.t.wzzjk9);
                    if (null == s || 0 === s.length)
                        if (!0 !== m.A.get(e.type).hasMetadata) return null;
                        else
                            (s = [
                                (0, i.jsx)(
                                    g.LpS,
                                    {
                                        className: V.Z3,
                                        text: w.intl.string(w.t.y2b7CA),
                                    },
                                    "badge",
                                ),
                                (0, i.jsx)(
                                    g.Text,
                                    {
                                        variant: "text-xs/normal",
                                        className: V.vt,
                                        children: w.intl.format(w.t.Up2ni7, {
                                            helpdeskUrl: N.A.getArticleURL(L.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (a = w.intl.string(w.t["LVh3/5"]));
                    return (
                        r && (a = w.intl.string(w.t.i4jeWR)),
                        s.push(
                            (0, i.jsx)(
                                "div",
                                {
                                    className: V.jy,
                                    children: (0, i.jsx)(g.Button, {
                                        text: a,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: X,
                                        disabled: r,
                                        "aria-label": w.intl.string(w.t.sCkLYH),
                                        onClick: r
                                            ? void 0
                                            : () => {
                                                  q(!0),
                                                      x.A.refresh(e.type, e.id).finally(() => {
                                                          setTimeout(() => {
                                                              Z.push(e.id), $(Z), q(!1);
                                                          }, 2e3);
                                                      });
                                              },
                                    }),
                                },
                                "refresh-button",
                            ),
                        ),
                        (0, i.jsx)("div", {
                            className: V.tJ,
                            children: s,
                        })
                    );
                })(T),
                (L.txh.has(T.type) &&
                    (A = (0, i.jsx)(g.dOG, {
                        label: w.intl.string(w.t["+KCMSi"]),
                        checked: I,
                        onChange: function (e) {
                            G(e), x.A.setFriendSync(T.type, T.id, e);
                        },
                    })),
                L.ewM.has(T.type) &&
                    (p = (0, i.jsx)(g.dOG, {
                        label: w.intl.format(w.t["6u6J0q"], {
                            platform: et.name,
                        }),
                        checked: F,
                        onChange: function (e) {
                            z(e), x.A.setShowActivity(T.type, T.id, e);
                        },
                    })),
                (null == (n = m.A.get(T.type)) ? void 0 : n.hasMetadata) === !0 &&
                    (E = (0, i.jsx)(g.dOG, {
                        label: w.intl.string(w.t.FYKGsL),
                        checked: 1 === Y,
                        onChange: function (e) {
                            let { verified: t } = T,
                                n = +!!e;
                            if (e && !t) {
                                Q(n),
                                    (0, O.A)({
                                        platformType: T.type,
                                        location: "User Settings",
                                    });
                                return;
                            }
                            B(n), x.A.setMetadataVisibility(T.type, T.id, n);
                        },
                        disabled: 1 !== U || null == T.metadata,
                    })),
                (0, i.jsxs)("div", {
                    className: V.HZ,
                    children: [
                        (0, i.jsx)(g.dOG, {
                            label: w.intl.string(w.t.f7yOAX),
                            checked: 1 === U,
                            onChange: function (e) {
                                let { verified: t } = T,
                                    n = +!!e;
                                if (e && !t) {
                                    K(n),
                                        (0, O.A)({
                                            platformType: T.type,
                                            location: "User Settings",
                                        });
                                    return;
                                }
                                H(n), x.A.setVisibility(T.type, T.id, n);
                            },
                        }),
                        E,
                        p,
                        A,
                    ],
                })),
                (function () {
                    if (T.revoked || T.integrations.length > 0) return (0, i.jsx)(g.cGx, {});
                })(),
                T.revoked
                    ? (0, i.jsx)(a.po8, {
                          messageType: a.YCn.INFO,
                          children: w.intl.format(w.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, O.A)({
                                      platformType: T.type,
                                      location: "User Settings",
                                  });
                              },
                          }),
                      })
                    : T.integrations.length > 0
                      ? (0, i.jsx)(g.D0$, {
                            label: w.intl.string(w.t.fOe3fZ),
                            children: T.integrations.map((e) =>
                                (0, i.jsx)(
                                    M,
                                    {
                                        integration: e,
                                    },
                                    e.id,
                                ),
                            ),
                        })
                      : void 0,
            ],
        })
    );
}

function H() {
    return (0, i.jsx)(g.D0$, {
        label: w.intl.string(w.t.ZeDrUf),
        description: w.intl.format(w.t["oYc+Gz"], {
            privacyPolicyUrl: L.X7G.PRIVACY,
        }),
        children: (0, i.jsx)(B, {}),
    });
}

function Y(e) {
    let t = m.A.get(e);
    (0, O.A)({
        platformType: t.type,
    }),
        y.default.track(L.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}

function B() {
    let e = (0, j.gn)();
    return (0, i.jsxs)("div", {
        className: V.lA,
        children: [
            e.slice(0, 10).map((e) =>
                (0, i.jsx)(
                    A.A,
                    {
                        type: e.type,
                        className: V.__invalid_accountButton,
                        innerClassName: V.U$,
                    },
                    e.type,
                ),
            ),
            (0, i.jsx)(d.m, {
                text: w.intl.string(w.t.QqTz8b),
                children: (0, i.jsx)("div", {
                    className: r()(V.ej, V.__invalid_accountButton),
                    children: (0, i.jsx)(g.vN3, {
                        children: (0, i.jsx)("button", {
                            className: r()(V.R8, V.U$),
                            type: "button",
                            onClick: function () {
                                h.h.dispatch({
                                    type: "CONNECTIONS_GRID_MODAL_SHOW",
                                    onComplete: Y,
                                });
                            },
                            "aria-label": w.intl.string(w.t.Zhcj9X),
                            children: (0, i.jsx)(g._BQ, {
                                color: "currentColor",
                                size: "md",
                                "aria-label": w.intl.string(w.t.QqTz8b),
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
        { fetching: n, accounts: s, theme: l, locale: r } = e;
    return (
        (t = n
            ? (0, i.jsx)(g.y$y, {
                  type: g.y$y.Type.SPINNING_CIRCLE,
              })
            : 0 === s.length
              ? (0, i.jsx)(g.ppr, {
                    theme: l,
                    children: (0, i.jsx)(g.SGT, {
                        note: w.intl.string(w.t.WenGZ2),
                        children: w.intl.string(w.t.aoLS84),
                    }),
                })
              : s
                    .filter((e) => m.A.isSupported(e.type))
                    .map((e, t) =>
                        (0, i.jsx)(
                            U,
                            {
                                theme: l,
                                account: e,
                                locale: r,
                                onDisconnect: () =>
                                    (function (e) {
                                        let { type: t, id: n } = e;
                                        x.A.disconnect(t, n);
                                    })(e),
                            },
                            t,
                        ),
                    )),
        (0, i.jsx)("div", {
            className: V.V,
            children: t,
        })
    );
}

function z() {
    let e = (0, o.bG)([C.A], () => C.A.hidePersonalInformation),
        t = (0, o.bG)([v.A], () => v.A.isFetching()),
        n = (0, o.bG)([v.A], () => v.A.getAccounts()),
        s = (0, p.Ay)(),
        l = (0, o.bG)([I.default], () => I.default.locale);
    return e
        ? null
        : (0, i.jsx)(F, {
              fetching: t,
              accounts: n,
              theme: s,
              locale: l,
          });
}
let W = () => {
    let e = (0, o.bG)([v.A], () => v.A.isFetching()),
        t = (0, o.bG)([v.A], () => v.A.getAccounts()),
        n = (0, p.Ay)(),
        l = (0, o.bG)([I.default], () => I.default.locale);
    return (
        s.useEffect(() => {
            x.A.fetch();
        }, []),
        (0, i.jsxs)(G.A, {
            title: w.intl.string(w.t["3fe7U5"]),
            children: [
                (0, i.jsx)(H, {}),
                (0, i.jsx)(g.cGx, {
                    gap: 24,
                }),
                (0, i.jsx)(F, {
                    fetching: e,
                    accounts: t,
                    theme: n,
                    locale: l,
                }),
            ],
        })
    );
};

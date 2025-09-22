n.d(t, { f: () => B }), n(388685), n(997841);
var l = n(951288),
    i = n(647438),
    r = n(120356),
    a = n.n(r),
    s = n(512722),
    o = n.n(s),
    u = n(533800),
    d = n(442837),
    c = n(692547),
    g = n(755721),
    h = n(481060),
    m = n(239091),
    p = n(657305),
    v = n(835473),
    I = n(471445),
    x = n(313201),
    f = n(925329),
    j = n(65361),
    N = n(305347),
    _ = n(246946),
    E = n(626135),
    S = n(934415),
    b = n(572004),
    O = n(971130),
    y = n(366980),
    T = n(281123),
    C = n(981631),
    P = n(388032),
    Z = n(202722);
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let M = (e) => {
        let { inviteIcon: t, channelIcon: n, heading: i, subheading: r } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                null == t
                    ? null
                    : (0, l.jsx)("div", {
                          className: Z.inviteIcon,
                          children: t,
                      }),
                (0, l.jsxs)("div", {
                    className: Z.inviteTarget,
                    children: [
                        (0, l.jsxs)("div", {
                            className: Z.inviteTargetHeading,
                            children: [
                                null == n ? null : n,
                                (0, l.jsx)(h.X6q, {
                                    variant: "heading-md/semibold",
                                    color: "header-secondary",
                                    lineClamp: 1,
                                    children: i,
                                }),
                            ],
                        }),
                        r,
                    ],
                }),
            ],
        });
    },
    R = (e) => {
        let { guild: t, channel: n } = e,
            i = (0, S.a5)({ type: n.type }),
            r = (0, l.jsx)(h.Text, {
                variant: "text-xs/medium",
                color: "header-muted",
                lineClamp: 1,
                children: [i, t.name].join("\xA0\xA0\u2022\xA0\xA0"),
            }),
            a = (0, I.KS)(n, t),
            s = (0, l.jsx)(N.Ft, {
                guildId: t.id,
                guildName: t.name,
                guildIcon: t.icon,
                iconSize: 40,
            });
        return (0, l.jsx)(M, {
            inviteIcon: s,
            channelIcon:
                null == a
                    ? null
                    : (0, l.jsx)(a, {
                          className: Z.inviteTargetIcon,
                          size: "xs",
                      }),
            heading: n.name,
            subheading: r,
        });
    },
    D = (e) => {
        let t,
            { guild: n } = e,
            { guildProfile: r, fetchGuildProfile: a } = (0, j.u)(n.id);
        i.useEffect(() => {
            a();
        }, [a]),
            (t =
                null === r
                    ? null
                    : (0, l.jsxs)("div", {
                          className: Z.guildPresence,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: Z.onlineCount,
                                  children: [
                                      (0, l.jsx)("div", { className: Z.dot }),
                                      (0, l.jsx)(h.Text, {
                                          variant: "text-xs/medium",
                                          color: "header-muted",
                                          children: P.intl.format(P.t["LC+S+v"], { membersOnline: r.onlineCount }),
                                      }),
                                  ],
                              }),
                              (0, l.jsxs)("div", {
                                  className: Z.memberCount,
                                  children: [
                                      (0, l.jsx)("div", { className: Z.dot }),
                                      (0, l.jsx)(h.Text, {
                                          variant: "text-xs/medium",
                                          color: "header-muted",
                                          children: P.intl.format(P.t.zRl6XV, { count: r.memberCount }),
                                      }),
                                  ],
                              }),
                          ],
                      }));
        let s = (0, l.jsx)(N.Ft, {
            guildId: n.id,
            guildName: n.name,
            guildIcon: n.icon,
            iconSize: 40,
        });
        return (0, l.jsx)(M, {
            inviteIcon: s,
            heading: n.name,
            subheading: t,
        });
    },
    k = (e) => {
        let { applicationId: t } = e,
            [n] = (0, v.Z)([t]);
        if (null == n) return null;
        let i = (0, p.Z)(n.name),
            r = (0, l.jsx)(h.Text, {
                variant: "text-xs/medium",
                color: "header-muted",
                lineClamp: 1,
                children: (0, l.jsx)(l.Fragment, { children: n.tags.join("\xA0\xA0\u2022\xA0\xA0") }),
            }),
            a = (0, l.jsx)(f.Z, {
                game: n,
                size: f.A.MEDIUM,
                className: Z.inviteIcon,
            });
        return (0, l.jsx)(M, {
            inviteIcon: a,
            heading: i,
            subheading: r,
        });
    };
function L(e) {
    let { guild: t, channel: n, applicationId: i } = e;
    return null != i
        ? (0, l.jsx)(k, { applicationId: i })
        : null != n
          ? (0, l.jsx)(R, {
                guild: t,
                channel: n,
            })
          : (0, l.jsx)(D, { guild: t });
}
function U(e) {
    let { className: t, children: n } = e;
    return (0, l.jsx)("div", {
        className: a()(t, Z.advancedOptions),
        children: n,
    });
}
function V(e) {
    let t,
        n,
        { className: i, children: r, htmlFor: s, onClick: o } = e;
    return (
        null != s
            ? ((t = "label"), (n = { htmlFor: s }))
            : null != o
              ? ((t = h.P3F), (n = { onClick: o }))
              : ((t = "div"), (n = {})),
        (0, l.jsx)(
            t,
            w(A({ className: Z.advancedOption }, n), {
                children: (0, l.jsx)("div", {
                    className: a()(i, Z.advancedOptionInner),
                    children: r,
                }),
            }),
        )
    );
}
function B(e) {
    let {
            className: t,
            guild: r,
            channel: s,
            applicationId: p,
            getInviteKey: v,
            sendInvite: I,
            canUseVanityURL: f,
            disabled: j,
            hasSelection: N,
            options: S,
            setOptions: M,
            isApplicationBypassAllowed: R,
            isGuestInviteAllowed: D,
            isTemporaryInviteAllowed: k,
            setError: B,
            analyticsLocation: F,
        } = e,
        [z, G] = i.useState(!1),
        [q, H] = i.useState(!1),
        W = i.useRef(null),
        [K] = (0, d.Wu)([_.Z], () => [_.Z.hideInstantInvites]),
        Y = (0, x.Dt)(),
        X = (0, x.Dt)(),
        Q = (0, x.Dt)(),
        J = i.useMemo(() => (f && null != r.vanityURLCode ? (0, y.Z)(r.vanityURLCode, !1) : null), [r, f]),
        $ = i.useCallback(async () => {
            var e, t;
            if (j) return;
            null !== W.current && clearTimeout(W.current);
            let n = await v();
            o()(null != n, "Invite key could not be determined.");
            let l = (0, y.Z)(n);
            return (
                (0, b.JG)(
                    l,
                    () => {
                        G(!0),
                            (W.current = setTimeout(() => {
                                G(!1), (W.current = null);
                            }, 1000));
                    },
                    (e) => {
                        B(e);
                    },
                ),
                E.default.track(C.rMx.COPY_INSTANT_INVITE, {
                    server: r.id,
                    channel: null != (e = null == s ? void 0 : s.id) ? e : null,
                    channel_type: null != (t = null == s ? void 0 : s.type) ? t : null,
                    location: F,
                    code: n,
                    application_id: p,
                }),
                () => {
                    null !== W.current && clearTimeout(W.current);
                }
            );
        }, [j, v, r, s, F, p, B]),
        ee = i.useCallback(
            (e) => {
                M({ max_age: e });
            },
            [M],
        ),
        et = i.useCallback(
            (e) => {
                M({ max_uses: e });
            },
            [M],
        ),
        en = i.useCallback(
            (e) => {
                S.flags === e ? M({ flags: void 0 }) : M({ flags: e });
            },
            [S, M],
        ),
        el = i.useCallback(
            (e) => {
                M({ temporary: e });
            },
            [M],
        ),
        ei = i.useCallback(
            (e) => {
                var t;
                let i = null == (t = e.currentTarget) ? void 0 : t.getBoundingClientRect(),
                    { left: r = 0, width: a = 0 } = null != i ? i : {};
                (e.pageX = r + a + 12),
                    (0, m.jW)(e, async () => {
                        let { default: e } = await n.e("84212").then(n.bind(n, 593851));
                        return (t) =>
                            (0, l.jsx)(
                                e,
                                w(A({}, t), {
                                    initialOptions: S,
                                    onChangeMaxAge: ee,
                                    onChangeMaxUses: et,
                                }),
                            );
                    });
            },
            [S, ee, et],
        ),
        er = (function (e) {
            let t = T.H.find((t) => {
                    let { value: n } = t;
                    return n === e.max_age;
                }),
                n = T.p.find((t) => {
                    let { value: n } = t;
                    return n === e.max_uses;
                });
            return null == t || null == n
                ? null
                : t.value === O.ZP.INVITE_OPTIONS_FOREVER.value && n.value === O.ZP.INVITE_OPTIONS_UNLIMITED.value
                  ? P.intl.string(P.t["5u4A6e"])
                  : t.value !== O.ZP.INVITE_OPTIONS_FOREVER.value && n.value !== O.ZP.INVITE_OPTIONS_UNLIMITED.value
                    ? P.intl.formatToPlainString(P.t["Z5Vt5+"], {
                          maxAge: t.label,
                          maxUses: n.label,
                      })
                    : n.value === O.ZP.INVITE_OPTIONS_UNLIMITED.value && t.value !== O.ZP.INVITE_OPTIONS_FOREVER.value
                      ? t.label
                      : n.value !== O.ZP.INVITE_OPTIONS_UNLIMITED.value && t.value === O.ZP.INVITE_OPTIONS_FOREVER.value
                        ? n.label
                        : null;
        })(S);
    return (0, l.jsxs)("div", {
        className: a()(t, Z.footer),
        children: [
            (0, l.jsxs)("div", {
                className: Z.guildRow,
                children: [
                    (0, l.jsx)(L, {
                        guild: r,
                        channel: s,
                        applicationId: p,
                    }),
                    (0, l.jsx)(h.ua7, {
                        position: "top",
                        text: P.intl.string(P.t["4QuV7O"]),
                        children: (e) =>
                            (0, l.jsx)(
                                h.P3F,
                                w(A({ className: a()(Z.settingsButton, { [Z.settingsOpen]: q }) }, e), {
                                    onClick: () => {
                                        var t;
                                        null == e || null == (t = e.onClick) || t.call(e), H((e) => !e);
                                    },
                                    children: (0, l.jsx)(h.ewm, {
                                        size: "refresh_sm",
                                        color: c.Z.colors.ICON_PRIMARY,
                                    }),
                                }),
                            ),
                    }),
                ],
            }),
            q &&
                (0, l.jsxs)(U, {
                    children: [
                        (0, l.jsxs)(V, {
                            onClick: ei,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: Z.advancedOptionContent,
                                    children: [
                                        (0, l.jsx)(h.X6q, {
                                            variant: "heading-md/medium",
                                            children: P.intl.string(P.t.YlT5MT),
                                        }),
                                        (0, l.jsx)(h.ua7, {
                                            position: "top",
                                            text: P.intl.string(P.t.efLzgY),
                                            children: (e) =>
                                                (0, l.jsx)(
                                                    h.idN,
                                                    w(A({}, e), {
                                                        size: "xs",
                                                        color: c.Z.colors.INTERACTIVE_NORMAL,
                                                    }),
                                                ),
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: Z.advancedOptionContent,
                                    children: [
                                        null != er &&
                                            (0, l.jsx)(h.Text, {
                                                variant: "text-sm/medium",
                                                color: "header-muted",
                                                children: er,
                                            }),
                                        (0, l.jsx)(h.Fbu, {
                                            size: "xs",
                                            color: c.Z.colors.INTERACTIVE_NORMAL,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        R &&
                            (0, l.jsxs)(V, {
                                htmlFor: Y,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: Z.advancedOptionContent,
                                        children: [
                                            (0, l.jsx)(h.X6q, {
                                                variant: "heading-md/medium",
                                                children: P.intl.string(P.t.EPIOl5),
                                            }),
                                            (0, l.jsx)(h.ua7, {
                                                position: "top",
                                                text: P.intl.string(P.t["jvd/LC"]),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        h.idN,
                                                        w(A({}, e), {
                                                            size: "xs",
                                                            color: c.Z.colors.INTERACTIVE_NORMAL,
                                                        }),
                                                    ),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(g.T2, {
                                        id: Y,
                                        checked: S.flags === u.$.IS_APPLICATION_BYPASS,
                                        onChange: () => en(u.$.IS_APPLICATION_BYPASS),
                                    }),
                                ],
                            }),
                        D &&
                            (0, l.jsxs)(V, {
                                htmlFor: X,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: Z.advancedOptionContent,
                                        children: [
                                            (0, l.jsx)(h.X6q, {
                                                variant: "heading-md/medium",
                                                children: P.intl.string(P.t.NKqlpq),
                                            }),
                                            (0, l.jsx)(h.ua7, {
                                                position: "top",
                                                text: P.intl.string(P.t.pBOevb),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        h.idN,
                                                        w(A({}, e), {
                                                            size: "xs",
                                                            color: c.Z.colors.INTERACTIVE_NORMAL,
                                                        }),
                                                    ),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(g.T2, {
                                        id: X,
                                        checked: S.flags === u.$.IS_GUEST_INVITE,
                                        onChange: () => en(u.$.IS_GUEST_INVITE),
                                    }),
                                ],
                            }),
                        k &&
                            (0, l.jsxs)(V, {
                                htmlFor: Q,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: Z.advancedOptionContent,
                                        children: [
                                            (0, l.jsx)(h.X6q, {
                                                variant: "heading-md/medium",
                                                children: P.intl.string(P.t.UL177u),
                                            }),
                                            (0, l.jsx)(h.ua7, {
                                                position: "top",
                                                text: P.intl.string(P.t.cl1HNT),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        h.idN,
                                                        w(A({}, e), {
                                                            size: "xs",
                                                            color: c.Z.colors.INTERACTIVE_NORMAL,
                                                        }),
                                                    ),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(g.T2, {
                                        id: Q,
                                        checked: !!S.temporary,
                                        onChange: (e) => el(e),
                                    }),
                                ],
                            }),
                    ],
                }),
            (0, l.jsxs)("div", {
                className: Z.buttonRow,
                children: [
                    (0, l.jsx)(h.ua7, {
                        position: "top",
                        text: J,
                        shouldShow: null !== J && !K,
                        children: (e) =>
                            (0, l.jsx)(
                                g.zx,
                                w(
                                    A(
                                        {
                                            className: Z.button,
                                            innerClassName: Z.buttonInner,
                                            color: g.zx.Colors.PRIMARY,
                                        },
                                        e,
                                    ),
                                    {
                                        onClick: () => {
                                            var t;
                                            null == e || null == (t = e.onClick) || t.call(e), $();
                                        },
                                        disabled: j,
                                        children: z
                                            ? (0, l.jsxs)(l.Fragment, {
                                                  children: [
                                                      (0, l.jsx)(h.dz2, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                      }),
                                                      (0, l.jsx)("span", { children: P.intl.string(P.t["+5kSoa"]) }),
                                                  ],
                                              })
                                            : (0, l.jsxs)(l.Fragment, {
                                                  children: [
                                                      (0, l.jsx)(h.xPt, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                      }),
                                                      (0, l.jsx)("span", { children: P.intl.string(P.t.WqhZsr) }),
                                                  ],
                                              }),
                                    },
                                ),
                            ),
                    }),
                    (0, l.jsxs)(g.zx, {
                        className: Z.button,
                        innerClassName: Z.buttonInner,
                        onClick: () => I(),
                        disabled: !N || j,
                        children: [
                            (0, l.jsx)("span", { children: P.intl.string(P.t.BcAABg) }),
                            (0, l.jsx)(h.Uuj, {
                                size: "xs",
                                color: "currentColor",
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}

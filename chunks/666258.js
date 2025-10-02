n.d(t, { f: () => F }), n(388685), n(997841);
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
    x = n(471445),
    I = n(313201),
    f = n(925329),
    j = n(65361),
    N = n(305347),
    _ = n(246946),
    S = n(626135),
    b = n(934415),
    E = n(572004),
    O = n(971130),
    T = n(366980),
    y = n(281123),
    C = n(981631),
    P = n(388032),
    Z = n(350250);
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
function M(e, t) {
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
let w = (e) => {
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
            i = (0, b.a5)({ type: n.type }),
            r = (0, l.jsx)(h.Text, {
                variant: "text-xs/medium",
                color: "header-muted",
                lineClamp: 1,
                children: [i, t.name].join("\xA0\xA0\u2022\xA0\xA0"),
            }),
            a = (0, x.KS)(n, t),
            s = (0, l.jsx)(N.Ft, {
                guildId: t.id,
                guildName: t.name,
                guildIcon: t.icon,
                iconSize: 40,
            });
        return (0, l.jsx)(w, {
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
    k = (e) => {
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
        return (0, l.jsx)(w, {
            inviteIcon: s,
            heading: n.name,
            subheading: t,
        });
    },
    D = (e) => {
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
        return (0, l.jsx)(w, {
            inviteIcon: a,
            heading: i,
            subheading: r,
        });
    };
function L(e) {
    let { guild: t, channel: n, applicationId: i } = e;
    return null != i
        ? (0, l.jsx)(D, { applicationId: i })
        : null != n
          ? (0, l.jsx)(R, {
                guild: t,
                channel: n,
            })
          : (0, l.jsx)(k, { guild: t });
}
function V(e) {
    let { className: t, children: n } = e;
    return (0, l.jsx)("div", {
        className: a()(t, Z.advancedOptions),
        children: n,
    });
}
function U(e) {
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
            M(A({ className: Z.advancedOption }, n), {
                children: (0, l.jsx)("div", {
                    className: a()(i, Z.advancedOptionInner),
                    children: r,
                }),
            }),
        )
    );
}
function F(e) {
    let {
            className: t,
            guild: r,
            channel: s,
            applicationId: p,
            getInviteKey: v,
            sendInvite: x,
            canUseVanityURL: f,
            disabled: j,
            hasSelection: N,
            options: b,
            setOptions: w,
            isApplicationBypassAllowed: R,
            isGuestInviteAllowed: k,
            isTemporaryInviteAllowed: D,
            setError: F,
            analyticsLocation: B,
        } = e,
        [G, z] = i.useState(!1),
        [H, q] = i.useState(!1),
        Y = i.useRef(null),
        [W] = (0, d.Wu)([_.Z], () => [_.Z.hideInstantInvites]),
        K = (0, I.Dt)(),
        X = (0, I.Dt)(),
        Q = (0, I.Dt)(),
        $ = i.useMemo(() => (f && null != r.vanityURLCode ? (0, T.Z)(r.vanityURLCode, !1) : null), [r, f]),
        J = i.useCallback(async () => {
            var e, t;
            if (j) return;
            null !== Y.current && clearTimeout(Y.current);
            let n = await v();
            o()(null != n, "Invite key could not be determined.");
            let l = (0, T.Z)(n);
            return (
                (0, E.JG)(
                    l,
                    () => {
                        z(!0),
                            (Y.current = setTimeout(() => {
                                z(!1), (Y.current = null);
                            }, 1000));
                    },
                    (e) => {
                        F(e);
                    },
                ),
                S.default.track(C.rMx.COPY_INSTANT_INVITE, {
                    server: r.id,
                    channel: null != (e = null == s ? void 0 : s.id) ? e : null,
                    channel_type: null != (t = null == s ? void 0 : s.type) ? t : null,
                    location: B,
                    code: n,
                    application_id: p,
                }),
                () => {
                    null !== Y.current && clearTimeout(Y.current);
                }
            );
        }, [j, v, r, s, B, p, F]),
        ee = i.useCallback(
            (e) => {
                w({ max_age: e });
            },
            [w],
        ),
        et = i.useCallback(
            (e) => {
                w({ max_uses: e });
            },
            [w],
        ),
        en = i.useCallback(
            (e) => {
                b.flags === e ? w({ flags: void 0 }) : w({ flags: e });
            },
            [b, w],
        ),
        el = i.useCallback(
            (e) => {
                w({ temporary: e });
            },
            [w],
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
                                M(A({}, t), {
                                    initialOptions: b,
                                    onChangeMaxAge: ee,
                                    onChangeMaxUses: et,
                                }),
                            );
                    });
            },
            [b, ee, et],
        ),
        er = (function (e) {
            let t = y.H.find((t) => {
                    let { value: n } = t;
                    return n === e.max_age;
                }),
                n = y.p.find((t) => {
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
        })(b);
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
                                M(A({ className: a()(Z.settingsButton, { [Z.settingsOpen]: H }) }, e), {
                                    onClick: () => {
                                        var t;
                                        null == e || null == (t = e.onClick) || t.call(e), q((e) => !e);
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
            H &&
                (0, l.jsxs)(V, {
                    children: [
                        (0, l.jsxs)(U, {
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
                                                    M(A({}, e), {
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
                            (0, l.jsxs)(U, {
                                htmlFor: K,
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
                                                        M(A({}, e), {
                                                            size: "xs",
                                                            color: c.Z.colors.INTERACTIVE_NORMAL,
                                                        }),
                                                    ),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(h.rsf, {
                                        id: K,
                                        checked: b.flags === u.$.IS_APPLICATION_BYPASS,
                                        onChange: () => en(u.$.IS_APPLICATION_BYPASS),
                                    }),
                                ],
                            }),
                        k &&
                            (0, l.jsxs)(U, {
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
                                                        M(A({}, e), {
                                                            size: "xs",
                                                            color: c.Z.colors.INTERACTIVE_NORMAL,
                                                        }),
                                                    ),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(h.rsf, {
                                        id: X,
                                        checked: b.flags === u.$.IS_GUEST_INVITE,
                                        onChange: () => en(u.$.IS_GUEST_INVITE),
                                    }),
                                ],
                            }),
                        D &&
                            (0, l.jsxs)(U, {
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
                                                        M(A({}, e), {
                                                            size: "xs",
                                                            color: c.Z.colors.INTERACTIVE_NORMAL,
                                                        }),
                                                    ),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(h.rsf, {
                                        id: Q,
                                        checked: !!b.temporary,
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
                        text: $,
                        shouldShow: null !== $ && !W,
                        children: (e) =>
                            (0, l.jsx)(
                                g.zx,
                                M(
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
                                            null == e || null == (t = e.onClick) || t.call(e), J();
                                        },
                                        disabled: j,
                                        children: G
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
                        onClick: () => x(),
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

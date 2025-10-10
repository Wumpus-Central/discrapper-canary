n.d(t, { f: () => F }), n(388685), n(997841);
var l = n(951288),
    i = n(647438),
    s = n(120356),
    r = n.n(s),
    a = n(512722),
    o = n.n(a),
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
    N = n(65361),
    S = n(305347),
    _ = n(246946),
    j = n(626135),
    b = n(934415),
    E = n(572004),
    y = n(971130),
    T = n(366980),
    O = n(281123),
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
        let { inviteIcon: t, channelIcon: n, heading: i, subheading: s } = e;
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
                        s,
                    ],
                }),
            ],
        });
    },
    R = (e) => {
        let { guild: t, channel: n } = e,
            i = (0, b.a5)({ type: n.type }),
            s = (0, l.jsx)(h.Text, {
                variant: "text-xs/medium",
                color: "header-muted",
                lineClamp: 1,
                children: [i, t.name].join("\xA0\xA0\u2022\xA0\xA0"),
            }),
            r = (0, I.KS)(n, t),
            a = (0, l.jsx)(S.Ft, {
                guildId: t.id,
                guildName: t.name,
                guildIcon: t.icon,
                iconSize: 40,
            });
        return (0, l.jsx)(w, {
            inviteIcon: a,
            channelIcon:
                null == r
                    ? null
                    : (0, l.jsx)(r, {
                          className: Z.inviteTargetIcon,
                          size: "xs",
                      }),
            heading: n.name,
            subheading: s,
        });
    },
    V = (e) => {
        let t,
            { guild: n } = e,
            { guildProfile: s, fetchGuildProfile: r } = (0, N.u)(n.id);
        i.useEffect(() => {
            r();
        }, [r]),
            (t =
                null === s
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
                                          children: P.intl.format(P.t["LC+S+v"], { membersOnline: s.onlineCount }),
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
                                          children: P.intl.format(P.t.zRl6XV, { count: s.memberCount }),
                                      }),
                                  ],
                              }),
                          ],
                      }));
        let a = (0, l.jsx)(S.Ft, {
            guildId: n.id,
            guildName: n.name,
            guildIcon: n.icon,
            iconSize: 40,
        });
        return (0, l.jsx)(w, {
            inviteIcon: a,
            heading: n.name,
            subheading: t,
        });
    },
    k = (e) => {
        let { applicationId: t } = e,
            [n] = (0, v.Z)([t]);
        if (null == n) return null;
        let i = (0, p.Z)(n.name),
            s = (0, l.jsx)(h.Text, {
                variant: "text-xs/medium",
                color: "header-muted",
                lineClamp: 1,
                children: (0, l.jsx)(l.Fragment, { children: n.tags.join("\xA0\xA0\u2022\xA0\xA0") }),
            }),
            r = (0, l.jsx)(f.Z, {
                game: n,
                size: f.A.MEDIUM,
                className: Z.inviteIcon,
            });
        return (0, l.jsx)(w, {
            inviteIcon: r,
            heading: i,
            subheading: s,
        });
    };
function D(e) {
    let { guild: t, channel: n, applicationId: i } = e;
    return null != i
        ? (0, l.jsx)(k, { applicationId: i })
        : null != n
          ? (0, l.jsx)(R, {
                guild: t,
                channel: n,
            })
          : (0, l.jsx)(V, { guild: t });
}
function L(e) {
    let { className: t, children: n } = e;
    return (0, l.jsx)("div", {
        className: r()(t, Z.advancedOptions),
        children: n,
    });
}
function U(e) {
    let t,
        n,
        { className: i, children: s, htmlFor: a, onClick: o } = e;
    return (
        null != a
            ? ((t = "label"), (n = { htmlFor: a }))
            : null != o
              ? ((t = h.P3F), (n = { onClick: o }))
              : ((t = "div"), (n = {})),
        (0, l.jsx)(
            t,
            M(A({ className: Z.advancedOption }, n), {
                children: (0, l.jsx)("div", {
                    className: r()(i, Z.advancedOptionInner),
                    children: s,
                }),
            }),
        )
    );
}
function F(e) {
    let {
            className: t,
            guild: s,
            channel: a,
            applicationId: p,
            getInviteKey: v,
            sendInvite: I,
            canUseVanityURL: f,
            disabled: N,
            hasSelection: S,
            options: b,
            setOptions: w,
            isApplicationBypassAllowed: R,
            isGuestInviteAllowed: V,
            isTemporaryInviteAllowed: k,
            setError: F,
            analyticsLocation: B,
        } = e,
        [z, G] = i.useState(!1),
        [H, q] = i.useState(!1),
        W = i.useRef(null),
        [Y] = (0, d.Wu)([_.Z], () => [_.Z.hideInstantInvites]),
        K = (0, x.Dt)(),
        X = (0, x.Dt)(),
        Q = (0, x.Dt)(),
        $ = i.useMemo(() => (f && null != s.vanityURLCode ? (0, T.Z)(s.vanityURLCode, !1) : null), [s, f]),
        J = i.useCallback(async () => {
            var e, t;
            if (N) return;
            null !== W.current && clearTimeout(W.current);
            let n = await v();
            o()(null != n, "Invite key could not be determined.");
            let l = (0, T.Z)(n);
            return (
                (0, E.JG)(
                    l,
                    () => {
                        G(!0),
                            (W.current = setTimeout(() => {
                                G(!1), (W.current = null);
                            }, 1000));
                    },
                    (e) => {
                        F(e);
                    },
                ),
                j.default.track(C.rMx.COPY_INSTANT_INVITE, {
                    server: s.id,
                    channel: null != (e = null == a ? void 0 : a.id) ? e : null,
                    channel_type: null != (t = null == a ? void 0 : a.type) ? t : null,
                    location: B,
                    code: n,
                    application_id: p,
                }),
                () => {
                    null !== W.current && clearTimeout(W.current);
                }
            );
        }, [N, v, s, a, B, p, F]),
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
                    { left: s = 0, width: r = 0 } = null != i ? i : {};
                (e.pageX = s + r + 12),
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
        es = (function (e) {
            let t = O.H.find((t) => {
                    let { value: n } = t;
                    return n === e.max_age;
                }),
                n = O.p.find((t) => {
                    let { value: n } = t;
                    return n === e.max_uses;
                });
            return null == t || null == n
                ? null
                : t.value === y.ZP.INVITE_OPTIONS_FOREVER.value && n.value === y.ZP.INVITE_OPTIONS_UNLIMITED.value
                  ? P.intl.string(P.t["5u4A6e"])
                  : t.value !== y.ZP.INVITE_OPTIONS_FOREVER.value && n.value !== y.ZP.INVITE_OPTIONS_UNLIMITED.value
                    ? P.intl.formatToPlainString(P.t["Z5Vt5+"], {
                          maxAge: t.label,
                          maxUses: n.label,
                      })
                    : n.value === y.ZP.INVITE_OPTIONS_UNLIMITED.value && t.value !== y.ZP.INVITE_OPTIONS_FOREVER.value
                      ? t.label
                      : n.value !== y.ZP.INVITE_OPTIONS_UNLIMITED.value && t.value === y.ZP.INVITE_OPTIONS_FOREVER.value
                        ? n.label
                        : null;
        })(b);
    return (0, l.jsxs)("div", {
        className: r()(t, Z.footer),
        children: [
            (0, l.jsxs)("div", {
                className: Z.guildRow,
                children: [
                    (0, l.jsx)(D, {
                        guild: s,
                        channel: a,
                        applicationId: p,
                    }),
                    (0, l.jsx)(h.ua7, {
                        "data-migration-pending": !0,
                        position: "top",
                        text: P.intl.string(P.t["4QuV7O"]),
                        children: (e) =>
                            (0, l.jsx)(
                                h.P3F,
                                M(A({ className: r()(Z.settingsButton, { [Z.settingsOpen]: H }) }, e), {
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
                (0, l.jsxs)(L, {
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
                                            "data-migration-pending": !0,
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
                                        null != es &&
                                            (0, l.jsx)(h.Text, {
                                                variant: "text-sm/medium",
                                                color: "header-muted",
                                                children: es,
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
                                                "data-migration-pending": !0,
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
                        V &&
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
                                                "data-migration-pending": !0,
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
                        k &&
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
                                                "data-migration-pending": !0,
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
                        "data-migration-pending": !0,
                        position: "top",
                        text: $,
                        shouldShow: null !== $ && !Y,
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
                                        disabled: N,
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
                        disabled: !S || N,
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

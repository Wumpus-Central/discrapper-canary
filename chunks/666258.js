n.d(t, { f: () => F }), n(388685), n(997841);
var l = n(951288),
    i = n(647438),
    a = n(120356),
    r = n.n(a),
    s = n(512722),
    o = n.n(s),
    u = n(533800),
    c = n(442837),
    d = n(692547),
    g = n(755721),
    m = n(481060),
    I = n(239091),
    p = n(657305),
    f = n(835473),
    v = n(471445),
    x = n(313201),
    h = n(925329),
    _ = n(65361),
    b = n(305347),
    O = n(246946),
    N = n(626135),
    E = n(934415),
    j = n(572004),
    S = n(971130),
    T = n(366980),
    P = n(281123),
    y = n(981631),
    C = n(388032),
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
let R = (e) => {
        let { inviteIcon: t, channelIcon: n, heading: i, subheading: a } = e;
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
                                (0, l.jsx)(m.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "header-secondary",
                                    lineClamp: 1,
                                    children: i,
                                }),
                            ],
                        }),
                        a,
                    ],
                }),
            ],
        });
    },
    k = (e) => {
        let { guild: t, channel: n } = e,
            i = (0, E.a5)({ type: n.type }),
            a = (0, l.jsx)(m.Text, {
                variant: "text-xs/medium",
                color: "header-muted",
                lineClamp: 1,
                children: [i, t.name].join("\xA0\xA0\u2022\xA0\xA0"),
            }),
            r = (0, v.KS)(n, t),
            s = (0, l.jsx)(b.Ft, {
                guildId: t.id,
                guildName: t.name,
                guildIcon: t.icon,
                iconSize: 40,
            });
        return (0, l.jsx)(R, {
            inviteIcon: s,
            channelIcon:
                null == r
                    ? null
                    : (0, l.jsx)(r, {
                          className: Z.inviteTargetIcon,
                          size: "xs",
                      }),
            heading: n.name,
            subheading: a,
        });
    },
    w = (e) => {
        let t,
            { guild: n } = e,
            { guildProfile: a, fetchGuildProfile: r } = (0, _.u)(n.id);
        i.useEffect(() => {
            r();
        }, [r]),
            (t =
                null === a
                    ? null
                    : (0, l.jsxs)("div", {
                          className: Z.guildPresence,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: Z.onlineCount,
                                  children: [
                                      (0, l.jsx)("div", { className: Z.dot }),
                                      (0, l.jsx)(m.Text, {
                                          variant: "text-xs/medium",
                                          color: "header-muted",
                                          children: C.intl.format(C.t["LC+S+m"], { membersOnline: a.onlineCount }),
                                      }),
                                  ],
                              }),
                              (0, l.jsxs)("div", {
                                  className: Z.memberCount,
                                  children: [
                                      (0, l.jsx)("div", { className: Z.dot }),
                                      (0, l.jsx)(m.Text, {
                                          variant: "text-xs/medium",
                                          color: "header-muted",
                                          children: C.intl.format(C.t.zRl6XR, { count: a.memberCount }),
                                      }),
                                  ],
                              }),
                          ],
                      }));
        let s = (0, l.jsx)(b.Ft, {
            guildId: n.id,
            guildName: n.name,
            guildIcon: n.icon,
            iconSize: 40,
        });
        return (0, l.jsx)(R, {
            inviteIcon: s,
            heading: n.name,
            subheading: t,
        });
    },
    D = (e) => {
        let { applicationId: t } = e,
            [n] = (0, f.Z)([t]);
        if (null == n) return null;
        let i = (0, p.Z)(n.name),
            a = (0, l.jsx)(m.Text, {
                variant: "text-xs/medium",
                color: "header-muted",
                lineClamp: 1,
                children: (0, l.jsx)(l.Fragment, { children: n.tags.join("\xA0\xA0\u2022\xA0\xA0") }),
            }),
            r = (0, l.jsx)(h.Z, {
                game: n,
                size: h.A.MEDIUM,
                className: Z.inviteIcon,
            });
        return (0, l.jsx)(R, {
            inviteIcon: r,
            heading: i,
            subheading: a,
        });
    };
function V(e) {
    let { guild: t, channel: n, applicationId: i } = e;
    return null != i
        ? (0, l.jsx)(D, { applicationId: i })
        : null != n
          ? (0, l.jsx)(k, {
                guild: t,
                channel: n,
            })
          : (0, l.jsx)(w, { guild: t });
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
        { className: i, children: a, htmlFor: s, onClick: o } = e;
    return (
        null != s
            ? ((t = "label"), (n = { htmlFor: s }))
            : null != o
              ? ((t = m.P3F), (n = { onClick: o }))
              : ((t = "div"), (n = {})),
        (0, l.jsx)(
            t,
            M(A({ className: Z.advancedOption }, n), {
                children: (0, l.jsx)("div", {
                    className: r()(i, Z.advancedOptionInner),
                    children: a,
                }),
            }),
        )
    );
}
function F(e) {
    let {
            className: t,
            guild: a,
            channel: s,
            applicationId: p,
            getInviteKey: f,
            sendInvite: v,
            canUseVanityURL: h,
            disabled: _,
            hasSelection: b,
            options: E,
            setOptions: R,
            isApplicationBypassAllowed: k,
            isGuestInviteAllowed: w,
            isTemporaryInviteAllowed: D,
            setError: F,
            analyticsLocation: G,
        } = e,
        [z, B] = i.useState(!1),
        [H, q] = i.useState(!1),
        W = i.useRef(null),
        [Y] = (0, c.Wu)([O.Z], () => [O.Z.hideInstantInvites]),
        K = (0, x.Dt)(),
        Q = (0, x.Dt)(),
        X = (0, x.Dt)(),
        J = i.useMemo(() => (h && null != a.vanityURLCode ? (0, T.Z)(a.vanityURLCode, !1) : null), [a, h]),
        $ = i.useCallback(async () => {
            var e, t;
            if (_) return;
            null !== W.current && clearTimeout(W.current);
            let n = await f();
            o()(null != n, "Invite key could not be determined.");
            let l = (0, T.Z)(n);
            return (
                (0, j.JG)(
                    l,
                    () => {
                        B(!0),
                            (W.current = setTimeout(() => {
                                B(!1), (W.current = null);
                            }, 1000));
                    },
                    (e) => {
                        F(e);
                    },
                ),
                N.default.track(y.rMx.COPY_INSTANT_INVITE, {
                    server: a.id,
                    channel: null != (e = null == s ? void 0 : s.id) ? e : null,
                    channel_type: null != (t = null == s ? void 0 : s.type) ? t : null,
                    location: G,
                    code: n,
                    application_id: p,
                }),
                () => {
                    null !== W.current && clearTimeout(W.current);
                }
            );
        }, [_, f, a, s, G, p, F]),
        ee = i.useCallback(
            (e) => {
                R({ max_age: e });
            },
            [R],
        ),
        et = i.useCallback(
            (e) => {
                R({ max_uses: e });
            },
            [R],
        ),
        en = i.useCallback(
            (e) => {
                E.flags === e ? R({ flags: void 0 }) : R({ flags: e });
            },
            [E, R],
        ),
        el = i.useCallback(
            (e) => {
                R({ temporary: e });
            },
            [R],
        ),
        ei = i.useCallback(
            (e) => {
                var t;
                let i = null == (t = e.currentTarget) ? void 0 : t.getBoundingClientRect(),
                    { left: a = 0, width: r = 0 } = null != i ? i : {};
                (e.pageX = a + r + 12),
                    (0, I.jW)(e, async () => {
                        let { default: e } = await n.e("84212").then(n.bind(n, 593851));
                        return (t) =>
                            (0, l.jsx)(
                                e,
                                M(A({}, t), {
                                    initialOptions: E,
                                    onChangeMaxAge: ee,
                                    onChangeMaxUses: et,
                                }),
                            );
                    });
            },
            [E, ee, et],
        ),
        ea = (function (e) {
            let t = P.H.find((t) => {
                    let { value: n } = t;
                    return n === e.max_age;
                }),
                n = P.p.find((t) => {
                    let { value: n } = t;
                    return n === e.max_uses;
                });
            return null == t || null == n
                ? null
                : t.value === S.ZP.INVITE_OPTIONS_FOREVER.value && n.value === S.ZP.INVITE_OPTIONS_UNLIMITED.value
                  ? C.intl.string(C.t["5u4A6V"])
                  : t.value !== S.ZP.INVITE_OPTIONS_FOREVER.value && n.value !== S.ZP.INVITE_OPTIONS_UNLIMITED.value
                    ? C.intl.formatToPlainString(C.t.Z5Vt52, {
                          maxAge: t.label,
                          maxUses: n.label,
                      })
                    : n.value === S.ZP.INVITE_OPTIONS_UNLIMITED.value && t.value !== S.ZP.INVITE_OPTIONS_FOREVER.value
                      ? t.label
                      : n.value !== S.ZP.INVITE_OPTIONS_UNLIMITED.value && t.value === S.ZP.INVITE_OPTIONS_FOREVER.value
                        ? n.label
                        : null;
        })(E);
    return (0, l.jsxs)("div", {
        className: r()(t, Z.footer),
        children: [
            (0, l.jsxs)("div", {
                className: Z.guildRow,
                children: [
                    (0, l.jsx)(V, {
                        guild: a,
                        channel: s,
                        applicationId: p,
                    }),
                    (0, l.jsx)(m.aML, {
                        "data-migration-pending": !0,
                        position: "top",
                        text: C.intl.string(C.t["4QuV7G"]),
                        children: (e) =>
                            (0, l.jsx)(
                                m.P3F,
                                M(A({ className: r()(Z.settingsButton, { [Z.settingsOpen]: H }) }, e), {
                                    onClick: () => {
                                        var t;
                                        null == e || null == (t = e.onClick) || t.call(e), q((e) => !e);
                                    },
                                    children: (0, l.jsx)(m.ewm, {
                                        size: "refresh_sm",
                                        color: d.Z.colors.ICON_PRIMARY,
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
                                        (0, l.jsx)(m.Heading, {
                                            variant: "heading-md/medium",
                                            children: C.intl.string(C.t.YlT5Me),
                                        }),
                                        (0, l.jsx)(m.aML, {
                                            "data-migration-pending": !0,
                                            position: "top",
                                            text: C.intl.string(C.t.efLzgX),
                                            children: (e) =>
                                                (0, l.jsx)(
                                                    m.idN,
                                                    M(A({}, e), {
                                                        size: "xs",
                                                        color: d.Z.colors.INTERACTIVE_NORMAL,
                                                    }),
                                                ),
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: Z.advancedOptionContent,
                                    children: [
                                        null != ea &&
                                            (0, l.jsx)(m.Text, {
                                                variant: "text-sm/medium",
                                                color: "header-muted",
                                                children: ea,
                                            }),
                                        (0, l.jsx)(m.Fbu, {
                                            size: "xs",
                                            color: d.Z.colors.INTERACTIVE_NORMAL,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        k &&
                            (0, l.jsxs)(U, {
                                htmlFor: K,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: Z.advancedOptionContent,
                                        children: [
                                            (0, l.jsx)(m.Heading, {
                                                variant: "heading-md/medium",
                                                children: C.intl.string(C.t.EPIOlw),
                                            }),
                                            (0, l.jsx)(m.aML, {
                                                "data-migration-pending": !0,
                                                position: "top",
                                                text: C.intl.string(C.t["jvd/LF"]),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        m.idN,
                                                        M(A({}, e), {
                                                            size: "xs",
                                                            color: d.Z.colors.INTERACTIVE_NORMAL,
                                                        }),
                                                    ),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(m.rsf, {
                                        id: K,
                                        checked: E.flags === u.$.IS_APPLICATION_BYPASS,
                                        onChange: () => en(u.$.IS_APPLICATION_BYPASS),
                                    }),
                                ],
                            }),
                        w &&
                            (0, l.jsxs)(U, {
                                htmlFor: Q,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: Z.advancedOptionContent,
                                        children: [
                                            (0, l.jsx)(m.Heading, {
                                                variant: "heading-md/medium",
                                                children: C.intl.string(C.t.NKqlpn),
                                            }),
                                            (0, l.jsx)(m.aML, {
                                                "data-migration-pending": !0,
                                                position: "top",
                                                text: C.intl.string(C.t.pBOeva),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        m.idN,
                                                        M(A({}, e), {
                                                            size: "xs",
                                                            color: d.Z.colors.INTERACTIVE_NORMAL,
                                                        }),
                                                    ),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(m.rsf, {
                                        id: Q,
                                        checked: E.flags === u.$.IS_GUEST_INVITE,
                                        onChange: () => en(u.$.IS_GUEST_INVITE),
                                    }),
                                ],
                            }),
                        D &&
                            (0, l.jsxs)(U, {
                                htmlFor: X,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: Z.advancedOptionContent,
                                        children: [
                                            (0, l.jsx)(m.Heading, {
                                                variant: "heading-md/medium",
                                                children: C.intl.string(C.t.UL177t),
                                            }),
                                            (0, l.jsx)(m.aML, {
                                                "data-migration-pending": !0,
                                                position: "top",
                                                text: C.intl.string(C.t.cl1HNR),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        m.idN,
                                                        M(A({}, e), {
                                                            size: "xs",
                                                            color: d.Z.colors.INTERACTIVE_NORMAL,
                                                        }),
                                                    ),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(m.rsf, {
                                        id: X,
                                        checked: !!E.temporary,
                                        onChange: (e) => el(e),
                                    }),
                                ],
                            }),
                    ],
                }),
            (0, l.jsxs)("div", {
                className: Z.buttonRow,
                children: [
                    (0, l.jsx)(m.aML, {
                        "data-migration-pending": !0,
                        position: "top",
                        text: J,
                        shouldShow: null !== J && !Y,
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
                                            null == e || null == (t = e.onClick) || t.call(e), $();
                                        },
                                        disabled: _,
                                        children: z
                                            ? (0, l.jsxs)(l.Fragment, {
                                                  children: [
                                                      (0, l.jsx)(m.dz2, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                      }),
                                                      (0, l.jsx)("span", { children: C.intl.string(C.t["+5kSoW"]) }),
                                                  ],
                                              })
                                            : (0, l.jsxs)(l.Fragment, {
                                                  children: [
                                                      (0, l.jsx)(m.xPt, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                      }),
                                                      (0, l.jsx)("span", { children: C.intl.string(C.t.WqhZss) }),
                                                  ],
                                              }),
                                    },
                                ),
                            ),
                    }),
                    (0, l.jsxs)(g.zx, {
                        className: Z.button,
                        innerClassName: Z.buttonInner,
                        onClick: () => v(),
                        disabled: !b || _,
                        children: [
                            (0, l.jsx)("span", { children: C.intl.string(C.t.BcAABv) }),
                            (0, l.jsx)(m.Uuj, {
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

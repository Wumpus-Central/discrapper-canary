n.d(t, {
    A: () => x,
}),
    n(938796),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(821418),
    a = n(665260),
    s = n(990078),
    o = n(397927),
    c = n(846293),
    u = n(793574),
    d = n(688810),
    p = n(517905),
    m = n(986268),
    f = n(529200),
    g = n(95701),
    h = n(860689),
    _ = n(505417),
    b = n(168428),
    A = n(652215),
    y = n(985018),
    v = n(563111);

function x(e) {
    var t, x, O, E;
    let j,
        C,
        I,
        {
            onTransitionToInviteChannel: S,
            onAcceptInstantInvite: T,
            guild: N,
            invite: P,
            message: w,
            currentUserId: R,
        } = e,
        D = R === w.author.id,
        { channel: L, approximate_member_count: M, approximate_presence_count: k } = P,
        U = P.state === A.elq.ACCEPTING,
        G = null != L ? (0, g.OY)(L) : null,
        B = null != N,
        F = null != G,
        H = null != G && G.isGuildStageVoice(),
        V = (0, a.Lt)(null != (t = P.flags) ? t : 0, l.Q.IS_GUEST_INVITE),
        z = null != (x = null == G ? void 0 : G.isGuildVoiceOrThread()) && x,
        W = null != (O = null == N ? void 0 : N.features.has(A.GuildFeatures.HUB)) && O,
        K = null == N ? void 0 : N.id,
        { analyticsLocations: Y } = (0, d.Ay)(u.A.INVITE_EMBED),
        [q, J] = i.useState(!1),
        Q = i.useCallback(() => J(!1), []),
        Z = i.useRef(null),
        X = i.useCallback(() => {
            J(!0), (0, c.Pq)(K, "show profile", Y);
        }, [K, Y]),
        $ = i.useCallback(() => {
            let e = "noop";
            B ? (S(), (e = "transition")) : (T(), (e = "accept")),
                (0, c.he)(
                    {
                        invite: P,
                        action: e,
                        inviter_id: w.author.id,
                        invite_message_id: w.id,
                    },
                    Y,
                );
        }, [P, w, Y, B, S, T]);
    if (null == N) {
        if (null == P.guild) return (0, r.jsx)(b.A, {});
        (N = h.DY(P.guild)).premiumTier = null != (E = P.guild.premium_tier) ? E : A.TVA.NONE;
    }
    let ee = (0, _.l)({
        isVoiceChannel: z,
        isOwnInvite: D,
        isGuest: V,
        isHubGuild: W,
        isStage: H,
        isStream: !1,
    });
    return (
        (C = (0, r.jsxs)("span", {
            className: v.FA,
            children: [
                (0, r.jsx)(p.A, {
                    guildId: N.id,
                    name: N.name,
                    shouldShow: q,
                    onRequestClose: Q,
                    targetElementRef: Z,
                    children: () =>
                        (0, r.jsx)(f.A.GuildName, {
                            guild: N,
                            ref: Z,
                        }),
                }),
                (0, r.jsx)("span", {
                    className: v.E3,
                    children: (0, r.jsx)(m.A, {
                        guild: N,
                        isBannerVisible: !1,
                        disableBoostClick: !0,
                    }),
                }),
            ],
        })),
        V &&
            (I = (0, r.jsx)(s.m, {
                asContainer: !0,
                text: y.intl.string(y.t["/FeTK6"]),
                children: (0, r.jsx)(o.mir, {
                    size: "md",
                    color: "currentColor",
                    className: v.G,
                }),
            })),
        z
            ? ((C = (0, r.jsx)(f.A.Channel, {
                  channel: G,
              })),
              (j = (0, r.jsxs)("span", {
                  className: v.FA,
                  children: [
                      y.intl.format(y.t["2wimj5"], {
                          guildName: N.name,
                      }),
                      (0, r.jsx)("span", {
                          className: v.E3,
                          children: (0, r.jsx)(m.A, {
                              guild: N,
                              isBannerVisible: !1,
                          }),
                      }),
                  ],
              })))
            : (null != M && M >= 5) || (null != k && k > 0)
              ? (j = (0, r.jsx)(f.A.Data, {
                    members: M,
                    membersOnline: k,
                }))
              : F &&
                (j = (0, r.jsx)(f.A.Channel, {
                    channel: G,
                    guild: N,
                })),
        (0, r.jsxs)(f.A, {
            children: [
                (0, r.jsx)(f.A.GuildSplash, {
                    guild: N,
                }),
                (0, r.jsx)(f.A.Header, {
                    text: ee,
                    extra: I,
                }),
                (0, r.jsxs)(f.A.Body, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: v.iH,
                            children: [
                                (0, r.jsx)(f.A.Icon, {
                                    guild: N,
                                }),
                                (0, r.jsx)(f.A.Info, {
                                    title: C,
                                    onClick: X,
                                    children: j,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: v.UD,
                            children: (0, r.jsx)(o.Button, {
                                onClick: $,
                                loading: U,
                                variant: "active",
                                fullWidth: z,
                                text: z
                                    ? H
                                        ? y.intl.string(y.t["7vb2cc"])
                                        : y.intl.string(y.t.gpqgah)
                                    : B
                                      ? y.intl.string(y.t.cEnaWx)
                                      : y.intl.string(y.t.XpeFYr),
                            }),
                        }),
                    ],
                }),
                N.features.has(A.GuildFeatures.HUB) &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("div", {
                                className: v.me,
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: y.intl.format(y.t["/o1IfA"], {
                                    onClick: () =>
                                        (0, o.mMO)(async () => {
                                            let { default: e } = await Promise.all([n.e("98363"), n.e("13781")]).then(
                                                n.bind(n, 780086),
                                            );
                                            return (t) =>
                                                (0, r.jsx)(
                                                    e,
                                                    (function (e) {
                                                        for (var t = 1; t < arguments.length; t++) {
                                                            var n = null != arguments[t] ? arguments[t] : {},
                                                                r = Object.keys(n);
                                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                                (r = r.concat(
                                                                    Object.getOwnPropertySymbols(n).filter(
                                                                        function (e) {
                                                                            return Object.getOwnPropertyDescriptor(n, e)
                                                                                .enumerable;
                                                                        },
                                                                    ),
                                                                )),
                                                                r.forEach(function (t) {
                                                                    var r;
                                                                    (r = n[t]),
                                                                        t in e
                                                                            ? Object.defineProperty(e, t, {
                                                                                  value: r,
                                                                                  enumerable: !0,
                                                                                  configurable: !0,
                                                                                  writable: !0,
                                                                              })
                                                                            : (e[t] = r);
                                                                });
                                                        }
                                                        return e;
                                                    })({}, t),
                                                );
                                        }),
                                }),
                            }),
                        ],
                    }),
            ],
        })
    );
}

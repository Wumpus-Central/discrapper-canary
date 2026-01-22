n.d(t, { A: () => S }), n(938796), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(821418),
    s = n(665260),
    o = n(990078),
    l = n(397927),
    c = n(846293),
    u = n(793574),
    d = n(688810),
    f = n(517905),
    p = n(986268),
    _ = n(529200),
    h = n(95701),
    m = n(860689),
    g = n(505417),
    E = n(168428),
    b = n(652215),
    y = n(985018),
    O = n(563111);
function A(e, t, n) {
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
function v(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function S(e) {
    var t, A, S, I;
    let T,
        C,
        N,
        {
            onTransitionToInviteChannel: R,
            onAcceptInstantInvite: w,
            guild: P,
            invite: D,
            message: x,
            currentUserId: L,
        } = e,
        j = L === x.author.id,
        { channel: M, approximate_member_count: k, approximate_presence_count: U } = D,
        G = D.state === b.elq.ACCEPTING,
        V = null != M ? (0, h.OY)(M) : null,
        F = null != P,
        B = null != V,
        H = null != V && V.isGuildStageVoice(),
        Y = (0, s.Lt)(null != (t = D.flags) ? t : 0, a.Q.IS_GUEST_INVITE),
        W = null != (A = null == V ? void 0 : V.isGuildVoiceOrThread()) && A,
        K = null != (S = null == P ? void 0 : P.features.has(b.GuildFeatures.HUB)) && S,
        z = null == P ? void 0 : P.id,
        { analyticsLocations: q } = (0, d.Ay)(u.A.INVITE_EMBED),
        [X, Z] = i.useState(!1),
        Q = i.useCallback(() => Z(!1), []),
        $ = i.useRef(null),
        J = i.useCallback(() => {
            Z(!0), (0, c.Pq)(z, "show profile", q);
        }, [z, q]),
        ee = i.useCallback(() => {
            let e = "noop";
            F ? (R(), (e = "transition")) : (w(), (e = "accept")),
                (0, c.he)(
                    {
                        invite: D,
                        action: e,
                        inviter_id: x.author.id,
                        invite_message_id: x.id,
                    },
                    q,
                );
        }, [D, x, q, F, R, w]);
    if (null == P) {
        if (null == D.guild) return (0, r.jsx)(E.A, {});
        (P = m.DY(D.guild)).premiumTier = null != (I = D.guild.premium_tier) ? I : b.TVA.NONE;
    }
    let et = (0, g.l)({
        isVoiceChannel: W,
        isOwnInvite: j,
        isGuest: Y,
        isHubGuild: K,
        isStage: H,
        isStream: !1,
    });
    return (
        (C = (0, r.jsxs)("span", {
            className: O.FA,
            children: [
                (0, r.jsx)(f.A, {
                    guildId: P.id,
                    name: P.name,
                    shouldShow: X,
                    onRequestClose: Q,
                    targetElementRef: $,
                    children: () =>
                        (0, r.jsx)(_.A.GuildName, {
                            guild: P,
                            ref: $,
                        }),
                }),
                (0, r.jsx)("span", {
                    className: O.E3,
                    children: (0, r.jsx)(p.A, {
                        guild: P,
                        isBannerVisible: !1,
                        disableBoostClick: !0,
                    }),
                }),
            ],
        })),
        Y &&
            (N = (0, r.jsx)(o.m, {
                asContainer: !0,
                text: y.intl.string(y.t["/FeTK6"]),
                children: (0, r.jsx)(l.mir, {
                    size: "md",
                    color: "currentColor",
                    className: O.G,
                }),
            })),
        W
            ? ((C = (0, r.jsx)(_.A.Channel, { channel: V })),
              (T = (0, r.jsxs)("span", {
                  className: O.FA,
                  children: [
                      y.intl.format(y.t["2wimj5"], { guildName: P.name }),
                      (0, r.jsx)("span", {
                          className: O.E3,
                          children: (0, r.jsx)(p.A, {
                              guild: P,
                              isBannerVisible: !1,
                          }),
                      }),
                  ],
              })))
            : (null != k && k >= 5) || (null != U && U > 0)
              ? (T = (0, r.jsx)(_.A.Data, {
                    members: k,
                    membersOnline: U,
                }))
              : B &&
                (T = (0, r.jsx)(_.A.Channel, {
                    channel: V,
                    guild: P,
                })),
        (0, r.jsxs)(_.A, {
            children: [
                (0, r.jsx)(_.A.GuildSplash, { guild: P }),
                (0, r.jsx)(_.A.Header, {
                    text: et,
                    extra: N,
                }),
                (0, r.jsxs)(_.A.Body, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: O.iH,
                            children: [
                                (0, r.jsx)(_.A.Icon, { guild: P }),
                                (0, r.jsx)(_.A.Info, {
                                    title: C,
                                    onClick: J,
                                    children: T,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: O.UD,
                            children: (0, r.jsx)(l.Button, {
                                onClick: ee,
                                loading: G,
                                variant: "active",
                                fullWidth: W,
                                text: W
                                    ? H
                                        ? y.intl.string(y.t["7vb2cc"])
                                        : y.intl.string(y.t.gpqgah)
                                    : F
                                      ? y.intl.string(y.t.cEnaWx)
                                      : y.intl.string(y.t.XpeFYr),
                            }),
                        }),
                    ],
                }),
                P.features.has(b.GuildFeatures.HUB) &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("div", { className: O.me }),
                            (0, r.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: y.intl.format(y.t["/o1IfA"], {
                                    onClick: () =>
                                        (0, l.mMO)(async () => {
                                            let { default: e } = await Promise.all([n.e("98363"), n.e("13781")]).then(
                                                n.bind(n, 780086),
                                            );
                                            return (t) => (0, r.jsx)(e, v({}, t));
                                        }),
                                }),
                            }),
                        ],
                    }),
            ],
        })
    );
}

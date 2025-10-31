n.d(t, { Z: () => T }), n(997841), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(533800),
    o = n(28664),
    s = n(481060),
    l = n(447543),
    c = n(100527),
    u = n(906732),
    d = n(857395),
    f = n(358555),
    _ = n(955415),
    p = n(131704),
    h = n(630388),
    m = n(411198),
    g = n(277707),
    E = n(358595),
    b = n(981631),
    y = n(388032),
    O = n(105341);
function v(e, t, n) {
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
function I(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function T(e) {
    var t, v, T;
    let S,
        A,
        C,
        {
            onTransitionToInviteChannel: N,
            onAcceptInstantInvite: R,
            guild: P,
            invite: w,
            message: D,
            currentUserId: x,
        } = e,
        L = x === D.author.id,
        { channel: M, approximate_member_count: k, approximate_presence_count: j } = w,
        U = w.state === b.r2o.ACCEPTING,
        G = null != M ? (0, p.jD)(M) : null,
        B = null != P,
        Z = null != G,
        F = null != G && G.isGuildVocal(),
        V = null != G && G.isGuildStageVoice(),
        H = (0, h.yE)(null != (t = w.flags) ? t : 0, a.$.IS_GUEST_INVITE),
        Y = null != (v = null == P ? void 0 : P.features.has(b.GuildFeatures.HUB)) && v,
        W = null == P ? void 0 : P.id,
        { analyticsLocations: K } = (0, u.ZP)(c.Z.INVITE_EMBED),
        [z, q] = i.useState(!1),
        X = i.useCallback(() => q(!1), []),
        Q = i.useRef(null),
        J = i.useCallback(() => {
            q(!0), (0, l.CB)(W, "show profile", K);
        }, [W, K]),
        $ = i.useCallback(() => {
            let e = "noop";
            B ? (N(), (e = "transition")) : (R(), (e = "accept")),
                (0, l.r$)(
                    {
                        invite: w,
                        action: e,
                        inviter_id: D.author.id,
                        invite_message_id: D.id,
                    },
                    K,
                );
        }, [w, D, K, B, N, R]);
    if (null == P) {
        if (null == w.guild) return (0, r.jsx)(E.Z, {});
        (P = m.Qs(w.guild)).premiumTier = null != (T = w.guild.premium_tier) ? T : b.Eu4.NONE;
    }
    let ee = (0, g.e)({
        isVoiceChannel: F,
        isOwnInvite: L,
        isGuest: H,
        isHubGuild: Y,
        isStage: V,
        isStream: !1,
    });
    return (
        (A = (0, r.jsxs)("span", {
            className: O.infoTitle,
            children: [
                (0, r.jsx)(d.Z, {
                    guildId: P.id,
                    name: P.name,
                    shouldShow: z,
                    onRequestClose: X,
                    targetElementRef: Q,
                    children: () =>
                        (0, r.jsx)(_.Z.GuildName, {
                            guild: P,
                            ref: Q,
                        }),
                }),
                (0, r.jsx)("span", {
                    className: O.infoBadge,
                    children: (0, r.jsx)(f.Z, {
                        guild: P,
                        isBannerVisible: !1,
                        disableBoostClick: !0,
                    }),
                }),
            ],
        })),
        H &&
            (C = (0, r.jsx)(o.u, {
                asContainer: !0,
                text: y.intl.string(y.t["/FeTK6"]),
                children: (0, r.jsx)(s.d3s, {
                    size: "md",
                    color: "currentColor",
                    className: O.infoIcon,
                }),
            })),
        F
            ? ((A = (0, r.jsx)(_.Z.Channel, { channel: G })),
              (S = (0, r.jsxs)("span", {
                  className: O.infoTitle,
                  children: [
                      y.intl.format(y.t["2wimj5"], { guildName: P.name }),
                      (0, r.jsx)("span", {
                          className: O.infoBadge,
                          children: (0, r.jsx)(f.Z, {
                              guild: P,
                              isBannerVisible: !1,
                          }),
                      }),
                  ],
              })))
            : (null != k && k >= 5) || (null != j && j > 0)
              ? (S = (0, r.jsx)(_.Z.Data, {
                    members: k,
                    membersOnline: j,
                }))
              : Z &&
                (S = (0, r.jsx)(_.Z.Channel, {
                    channel: G,
                    guild: P,
                })),
        (0, r.jsxs)(_.Z, {
            children: [
                (0, r.jsx)(_.Z.GuildSplash, { guild: P }),
                (0, r.jsx)(_.Z.Header, {
                    text: ee,
                    extra: C,
                }),
                (0, r.jsxs)(_.Z.Body, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: O.headerLine,
                            children: [
                                (0, r.jsx)(_.Z.Icon, { guild: P }),
                                (0, r.jsx)(_.Z.Info, {
                                    title: A,
                                    onClick: J,
                                    children: S,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: O.buttonContainer,
                            children: (0, r.jsx)(s.Button, {
                                onClick: $,
                                loading: U,
                                variant: "active",
                                fullWidth: F,
                                text: F
                                    ? V
                                        ? y.intl.string(y.t["7vb2cc"])
                                        : y.intl.string(y.t.gpqgah)
                                    : B
                                      ? y.intl.string(y.t.cEnaWx)
                                      : y.intl.string(y.t.XpeFYr),
                            }),
                        }),
                    ],
                }),
                P.features.has(b.GuildFeatures.HUB) &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("div", { className: O.separator }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: y.intl.format(y.t["/o1IfA"], {
                                    onClick: () =>
                                        (0, s.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e("95468"), n.e("70799")]).then(
                                                n.bind(n, 650233),
                                            );
                                            return (t) => (0, r.jsx)(e, I({}, t));
                                        }),
                                }),
                            }),
                        ],
                    }),
            ],
        })
    );
}

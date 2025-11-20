n.d(t, { Z: () => T }), n(997841), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(533800),
    o = n(95015),
    s = n(28664),
    l = n(481060),
    c = n(447543),
    u = n(100527),
    d = n(906732),
    f = n(857395),
    _ = n(358555),
    p = n(955415),
    h = n(131704),
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
            invite: D,
            message: w,
            currentUserId: L,
        } = e,
        x = L === w.author.id,
        { channel: M, approximate_member_count: k, approximate_presence_count: j } = D,
        U = D.state === b.r2o.ACCEPTING,
        G = null != M ? (0, h.jD)(M) : null,
        B = null != P,
        Z = null != G,
        F = null != G && G.isGuildVocal(),
        V = null != G && G.isGuildStageVoice(),
        H = (0, o.yE)(null != (t = D.flags) ? t : 0, a.$.IS_GUEST_INVITE),
        Y = null != (v = null == P ? void 0 : P.features.has(b.GuildFeatures.HUB)) && v,
        W = null == P ? void 0 : P.id,
        { analyticsLocations: K } = (0, d.ZP)(u.Z.INVITE_EMBED),
        [z, q] = i.useState(!1),
        X = i.useCallback(() => q(!1), []),
        Q = i.useRef(null),
        J = i.useCallback(() => {
            q(!0), (0, c.CB)(W, "show profile", K);
        }, [W, K]),
        $ = i.useCallback(() => {
            let e = "noop";
            B ? (N(), (e = "transition")) : (R(), (e = "accept")),
                (0, c.r$)(
                    {
                        invite: D,
                        action: e,
                        inviter_id: w.author.id,
                        invite_message_id: w.id,
                    },
                    K,
                );
        }, [D, w, K, B, N, R]);
    if (null == P) {
        if (null == D.guild) return (0, r.jsx)(E.Z, {});
        (P = m.Qs(D.guild)).premiumTier = null != (T = D.guild.premium_tier) ? T : b.Eu4.NONE;
    }
    let ee = (0, g.e)({
        isVoiceChannel: F,
        isOwnInvite: x,
        isGuest: H,
        isHubGuild: Y,
        isStage: V,
        isStream: !1,
    });
    return (
        (A = (0, r.jsxs)("span", {
            className: O.infoTitle,
            children: [
                (0, r.jsx)(f.Z, {
                    guildId: P.id,
                    name: P.name,
                    shouldShow: z,
                    onRequestClose: X,
                    targetElementRef: Q,
                    children: () =>
                        (0, r.jsx)(p.Z.GuildName, {
                            guild: P,
                            ref: Q,
                        }),
                }),
                (0, r.jsx)("span", {
                    className: O.infoBadge,
                    children: (0, r.jsx)(_.Z, {
                        guild: P,
                        isBannerVisible: !1,
                        disableBoostClick: !0,
                    }),
                }),
            ],
        })),
        H &&
            (C = (0, r.jsx)(s.u, {
                asContainer: !0,
                text: y.intl.string(y.t["/FeTK6"]),
                children: (0, r.jsx)(l.d3s, {
                    size: "md",
                    color: "currentColor",
                    className: O.infoIcon,
                }),
            })),
        F
            ? ((A = (0, r.jsx)(p.Z.Channel, { channel: G })),
              (S = (0, r.jsxs)("span", {
                  className: O.infoTitle,
                  children: [
                      y.intl.format(y.t["2wimj5"], { guildName: P.name }),
                      (0, r.jsx)("span", {
                          className: O.infoBadge,
                          children: (0, r.jsx)(_.Z, {
                              guild: P,
                              isBannerVisible: !1,
                          }),
                      }),
                  ],
              })))
            : (null != k && k >= 5) || (null != j && j > 0)
              ? (S = (0, r.jsx)(p.Z.Data, {
                    members: k,
                    membersOnline: j,
                }))
              : Z &&
                (S = (0, r.jsx)(p.Z.Channel, {
                    channel: G,
                    guild: P,
                })),
        (0, r.jsxs)(p.Z, {
            children: [
                (0, r.jsx)(p.Z.GuildSplash, { guild: P }),
                (0, r.jsx)(p.Z.Header, {
                    text: ee,
                    extra: C,
                }),
                (0, r.jsxs)(p.Z.Body, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: O.headerLine,
                            children: [
                                (0, r.jsx)(p.Z.Icon, { guild: P }),
                                (0, r.jsx)(p.Z.Info, {
                                    title: A,
                                    onClick: J,
                                    children: S,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: O.buttonContainer,
                            children: (0, r.jsx)(l.Button, {
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
                            (0, r.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: y.intl.format(y.t["/o1IfA"], {
                                    onClick: () =>
                                        (0, l.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e("7082"), n.e("98639")]).then(
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

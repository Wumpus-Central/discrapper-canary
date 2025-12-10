n.d(t, { Z: () => I }), n(997841), n(388685);
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
    p = n(358555),
    _ = n(955415),
    m = n(131704),
    h = n(411198),
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
function S(e) {
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
function I(e) {
    var t, v, I;
    let T,
        C,
        A,
        {
            onTransitionToInviteChannel: N,
            onAcceptInstantInvite: P,
            guild: R,
            invite: D,
            message: w,
            currentUserId: x,
        } = e,
        L = x === w.author.id,
        { channel: j, approximate_member_count: M, approximate_presence_count: k } = D,
        U = D.state === b.r2o.ACCEPTING,
        G = null != j ? (0, m.jD)(j) : null,
        Z = null != R,
        B = null != G,
        F = null != G && G.isGuildVocal(),
        V = null != G && G.isGuildStageVoice(),
        H = (0, o.yE)(null != (t = D.flags) ? t : 0, a.$.IS_GUEST_INVITE),
        Y = null != (v = null == R ? void 0 : R.features.has(b.GuildFeatures.HUB)) && v,
        W = null == R ? void 0 : R.id,
        { analyticsLocations: K } = (0, d.ZP)(u.Z.INVITE_EMBED),
        [z, q] = i.useState(!1),
        Q = i.useCallback(() => q(!1), []),
        X = i.useRef(null),
        J = i.useCallback(() => {
            q(!0), (0, c.CB)(W, "show profile", K);
        }, [W, K]),
        $ = i.useCallback(() => {
            let e = "noop";
            Z ? (N(), (e = "transition")) : (P(), (e = "accept")),
                (0, c.r$)(
                    {
                        invite: D,
                        action: e,
                        inviter_id: w.author.id,
                        invite_message_id: w.id,
                    },
                    K,
                );
        }, [D, w, K, Z, N, P]);
    if (null == R) {
        if (null == D.guild) return (0, r.jsx)(E.Z, {});
        (R = h.Qs(D.guild)).premiumTier = null != (I = D.guild.premium_tier) ? I : b.Eu4.NONE;
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
        (C = (0, r.jsxs)("span", {
            className: O.infoTitle,
            children: [
                (0, r.jsx)(f.Z, {
                    guildId: R.id,
                    name: R.name,
                    shouldShow: z,
                    onRequestClose: Q,
                    targetElementRef: X,
                    children: () =>
                        (0, r.jsx)(_.Z.GuildName, {
                            guild: R,
                            ref: X,
                        }),
                }),
                (0, r.jsx)("span", {
                    className: O.infoBadge,
                    children: (0, r.jsx)(p.Z, {
                        guild: R,
                        isBannerVisible: !1,
                        disableBoostClick: !0,
                    }),
                }),
            ],
        })),
        H &&
            (A = (0, r.jsx)(s.u, {
                asContainer: !0,
                text: y.intl.string(y.t["/FeTK6"]),
                children: (0, r.jsx)(l.d3s, {
                    size: "md",
                    color: "currentColor",
                    className: O.infoIcon,
                }),
            })),
        F
            ? ((C = (0, r.jsx)(_.Z.Channel, { channel: G })),
              (T = (0, r.jsxs)("span", {
                  className: O.infoTitle,
                  children: [
                      y.intl.format(y.t["2wimj5"], { guildName: R.name }),
                      (0, r.jsx)("span", {
                          className: O.infoBadge,
                          children: (0, r.jsx)(p.Z, {
                              guild: R,
                              isBannerVisible: !1,
                          }),
                      }),
                  ],
              })))
            : (null != M && M >= 5) || (null != k && k > 0)
              ? (T = (0, r.jsx)(_.Z.Data, {
                    members: M,
                    membersOnline: k,
                }))
              : B &&
                (T = (0, r.jsx)(_.Z.Channel, {
                    channel: G,
                    guild: R,
                })),
        (0, r.jsxs)(_.Z, {
            children: [
                (0, r.jsx)(_.Z.GuildSplash, { guild: R }),
                (0, r.jsx)(_.Z.Header, {
                    text: ee,
                    extra: A,
                }),
                (0, r.jsxs)(_.Z.Body, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: O.headerLine,
                            children: [
                                (0, r.jsx)(_.Z.Icon, { guild: R }),
                                (0, r.jsx)(_.Z.Info, {
                                    title: C,
                                    onClick: J,
                                    children: T,
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
                                    : Z
                                      ? y.intl.string(y.t.cEnaWx)
                                      : y.intl.string(y.t.XpeFYr),
                            }),
                        }),
                    ],
                }),
                R.features.has(b.GuildFeatures.HUB) &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("div", { className: O.separator }),
                            (0, r.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: y.intl.format(y.t["/o1IfA"], {
                                    onClick: () =>
                                        (0, l.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e("7082"), n.e("98639")]).then(
                                                n.bind(n, 650233),
                                            );
                                            return (t) => (0, r.jsx)(e, S({}, t));
                                        }),
                                }),
                            }),
                        ],
                    }),
            ],
        })
    );
}

n.d(t, { Z: () => I }), n(997841), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(533800),
    o = n(481060),
    s = n(447543),
    l = n(100527),
    c = n(906732),
    u = n(857395),
    d = n(358555),
    f = n(955415),
    _ = n(131704),
    p = n(630388),
    h = n(411198),
    m = n(277707),
    g = n(358595),
    E = n(981631),
    b = n(388032),
    y = n(105341);
function O(e, t, n) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e) {
    var t, O, I;
    let T,
        S,
        A,
        {
            onTransitionToInviteChannel: C,
            onAcceptInstantInvite: N,
            guild: R,
            invite: P,
            message: w,
            currentUserId: D,
        } = e,
        x = D === w.author.id,
        { channel: L, approximate_member_count: j, approximate_presence_count: M } = P,
        k = P.state === E.r2o.ACCEPTING,
        U = null != L ? (0, _.jD)(L) : null,
        G = null != R,
        B = null != U,
        Z = null != U && U.isGuildVocal(),
        V = null != U && U.isGuildStageVoice(),
        F = (0, p.yE)(null != (t = P.flags) ? t : 0, a.$.IS_GUEST_INVITE),
        H = null != (O = null == R ? void 0 : R.features.has(E.oNc.HUB)) && O,
        Y = null == R ? void 0 : R.id,
        { analyticsLocations: W } = (0, c.ZP)(l.Z.INVITE_EMBED),
        [K, z] = i.useState(!1),
        q = i.useCallback(() => z(!1), []),
        X = i.useRef(null),
        Q = i.useCallback(() => {
            z(!0), (0, s.CB)(Y, "show profile", W);
        }, [Y, W]),
        J = i.useCallback(() => {
            let e = "noop";
            G ? (C(), (e = "transition")) : (N(), (e = "accept")),
                (0, s.r$)(
                    {
                        invite: P,
                        action: e,
                        inviter_id: w.author.id,
                        invite_message_id: w.id,
                    },
                    W,
                );
        }, [P, w, W, G, C, N]);
    if (null == R) {
        if (null == P.guild) return (0, r.jsx)(g.Z, {});
        (R = h.Qs(P.guild)).premiumTier = null != (I = P.guild.premium_tier) ? I : E.Eu4.NONE;
    }
    let $ = (0, m.e)({
        isVoiceChannel: Z,
        isOwnInvite: x,
        isGuest: F,
        isHubGuild: H,
        isStage: V,
        isStream: !1,
    });
    return (
        (S = (0, r.jsxs)("span", {
            className: y.infoTitle,
            children: [
                (0, r.jsx)(u.Z, {
                    guildId: R.id,
                    name: R.name,
                    shouldShow: K,
                    onRequestClose: q,
                    targetElementRef: X,
                    children: () =>
                        (0, r.jsx)(f.Z.GuildName, {
                            guild: R,
                            ref: X,
                        }),
                }),
                (0, r.jsx)("span", {
                    className: y.infoBadge,
                    children: (0, r.jsx)(d.Z, {
                        guild: R,
                        isBannerVisible: !1,
                        disableBoostClick: !0,
                    }),
                }),
            ],
        })),
        F &&
            (A = (0, r.jsx)(o.DY3, {
                className: y.tooltipContainer,
                text: b.intl.string(b.t["/FeTKy"]),
                children: (0, r.jsx)(o.d3s, {
                    size: "md",
                    color: "currentColor",
                    className: y.infoIcon,
                }),
            })),
        Z
            ? ((S = (0, r.jsx)(f.Z.Channel, { channel: U })),
              (T = (0, r.jsxs)("span", {
                  className: y.infoTitle,
                  children: [
                      b.intl.format(b.t["2wimj4"], { guildName: R.name }),
                      (0, r.jsx)("span", {
                          className: y.infoBadge,
                          children: (0, r.jsx)(d.Z, {
                              guild: R,
                              isBannerVisible: !1,
                          }),
                      }),
                  ],
              })))
            : (null != j && j >= 5) || (null != M && M > 0)
              ? (T = (0, r.jsx)(f.Z.Data, {
                    members: j,
                    membersOnline: M,
                }))
              : B &&
                (T = (0, r.jsx)(f.Z.Channel, {
                    channel: U,
                    guild: R,
                })),
        (0, r.jsxs)(f.Z, {
            children: [
                (0, r.jsx)(f.Z.GuildSplash, { guild: R }),
                (0, r.jsx)(f.Z.Header, {
                    text: $,
                    extra: A,
                }),
                (0, r.jsxs)(f.Z.Body, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: y.headerLine,
                            children: [
                                (0, r.jsx)(f.Z.Icon, { guild: R }),
                                (0, r.jsx)(f.Z.Info, {
                                    title: S,
                                    onClick: Q,
                                    children: T,
                                }),
                            ],
                        }),
                        (0, r.jsx)(f.Z.Button, {
                            onClick: J,
                            submitting: k,
                            color: f.Z.Button.Colors.GREEN,
                            children: Z
                                ? V
                                    ? b.intl.string(b.t["7vb2cX"])
                                    : b.intl.string(b.t.gpqgam)
                                : G
                                  ? b.intl.string(b.t.cEnaW1)
                                  : b.intl.string(b.t.XpeFYm),
                        }),
                    ],
                }),
                R.features.has(E.oNc.HUB) &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("div", { className: y.separator }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: b.intl.format(b.t["/o1IfH"], {
                                    onClick: () =>
                                        (0, o.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e("95468"), n.e("70799")]).then(
                                                n.bind(n, 650233),
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

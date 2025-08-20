n.d(t, { Z: () => v }), n(997841), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(533800),
    o = n(481060),
    a = n(447543),
    s = n(100527),
    c = n(906732),
    u = n(857395),
    d = n(358555),
    p = n(955415),
    m = n(131704),
    f = n(630388),
    g = n(411198),
    _ = n(277707),
    h = n(358595),
    b = n(981631),
    E = n(388032),
    C = n(105341);
function v(e) {
    var t, v, O;
    let y,
        x,
        j,
        {
            onTransitionToInviteChannel: I,
            onAcceptInstantInvite: S,
            guild: T,
            invite: P,
            message: N,
            currentUserId: A,
        } = e,
        w = A === N.author.id,
        { channel: Z, approximate_member_count: R, approximate_presence_count: D } = P,
        L = P.state === b.r2o.ACCEPTING,
        M = null != Z ? (0, m.jD)(Z) : null,
        k = null != T,
        U = null != M,
        F = null != M && M.isGuildVocal(),
        B = null != M && M.isGuildStageVoice(),
        G = (0, f.yE)(null != (t = P.flags) ? t : 0, l.$.IS_GUEST_INVITE),
        H = null != (v = null == T ? void 0 : T.features.has(b.oNc.HUB)) && v,
        V = null == T ? void 0 : T.id,
        { analyticsLocations: z } = (0, c.ZP)(s.Z.INVITE_EMBED),
        [W, Y] = i.useState(!1),
        K = i.useCallback(() => Y(!1), []),
        X = i.useRef(null),
        q = i.useCallback(() => {
            Y(!0), (0, a.CB)(V, "show profile", z);
        }, [V, z]),
        J = i.useCallback(() => {
            let e = "noop";
            k ? (I(), (e = "transition")) : (S(), (e = "accept")),
                (0, a.r$)(
                    {
                        invite: P,
                        action: e,
                        inviter_id: N.author.id,
                        invite_message_id: N.id,
                    },
                    z,
                );
        }, [P, N, z, k, I, S]);
    if (null == T) {
        if (null == P.guild) return (0, r.jsx)(h.Z, {});
        (T = g.Qs(P.guild)).premiumTier = null != (O = P.guild.premium_tier) ? O : b.Eu4.NONE;
    }
    let Q = (0, _.e)({
        isVoiceChannel: F,
        isOwnInvite: w,
        isGuest: G,
        isHubGuild: H,
        isStage: B,
        isStream: !1,
    });
    return (
        (x = (0, r.jsxs)("span", {
            className: C.infoTitle,
            children: [
                (0, r.jsx)(u.Z, {
                    guildId: T.id,
                    name: T.name,
                    shouldShow: W,
                    onRequestClose: K,
                    targetElementRef: X,
                    children: () =>
                        (0, r.jsx)(p.Z.GuildName, {
                            guild: T,
                            ref: X,
                        }),
                }),
                (0, r.jsx)("span", {
                    className: C.infoBadge,
                    children: (0, r.jsx)(d.Z, {
                        guild: T,
                        isBannerVisible: !1,
                        disableBoostClick: !0,
                    }),
                }),
            ],
        })),
        G &&
            (j = (0, r.jsx)(o.DY3, {
                className: C.tooltipContainer,
                text: E.intl.string(E.t["/FeTKy"]),
                children: (0, r.jsx)(o.d3s, {
                    size: "md",
                    color: "currentColor",
                    className: C.infoIcon,
                }),
            })),
        F
            ? ((x = (0, r.jsx)(p.Z.Channel, { channel: M })),
              (y = (0, r.jsxs)("span", {
                  className: C.infoTitle,
                  children: [
                      E.intl.format(E.t["2wimj4"], { guildName: T.name }),
                      (0, r.jsx)("span", {
                          className: C.infoBadge,
                          children: (0, r.jsx)(d.Z, {
                              guild: T,
                              isBannerVisible: !1,
                          }),
                      }),
                  ],
              })))
            : (null != R && R >= 5) || (null != D && D > 0)
              ? (y = (0, r.jsx)(p.Z.Data, {
                    members: R,
                    membersOnline: D,
                }))
              : U &&
                (y = (0, r.jsx)(p.Z.Channel, {
                    channel: M,
                    guild: T,
                })),
        (0, r.jsxs)(p.Z, {
            children: [
                (0, r.jsx)(p.Z.GuildSplash, { guild: T }),
                (0, r.jsx)(p.Z.Header, {
                    text: Q,
                    extra: j,
                }),
                (0, r.jsxs)(p.Z.Body, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: C.headerLine,
                            children: [
                                (0, r.jsx)(p.Z.Icon, { guild: T }),
                                (0, r.jsx)(p.Z.Info, {
                                    title: x,
                                    onClick: q,
                                    children: y,
                                }),
                            ],
                        }),
                        (0, r.jsx)(p.Z.Button, {
                            onClick: J,
                            submitting: L,
                            color: p.Z.Button.Colors.GREEN,
                            children: F
                                ? B
                                    ? E.intl.string(E.t["7vb2cX"])
                                    : E.intl.string(E.t.gpqgam)
                                : k
                                  ? E.intl.string(E.t.cEnaW1)
                                  : E.intl.string(E.t.XpeFYm),
                        }),
                    ],
                }),
                T.features.has(b.oNc.HUB) &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("div", { className: C.separator }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: E.intl.format(E.t["/o1IfH"], {
                                    onClick: () =>
                                        (0, o.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e("95468"), n.e("70799")]).then(
                                                n.bind(n, 650233),
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

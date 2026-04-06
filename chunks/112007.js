n.d(t, { A: () => S }), n(938796);
var i = n(627968),
    l = n(64700),
    s = n(110259),
    r = n(821418),
    a = n(665260),
    o = n(311907),
    d = n(990078),
    c = n(397927),
    u = n(846293),
    _ = n(793574),
    m = n(688810),
    h = n(139286),
    p = n(290331),
    g = n(517905),
    A = n(986268),
    x = n(21599),
    f = n(529200),
    C = n(95701),
    E = n(696451),
    I = n(860689),
    v = n(505417),
    b = n(168428),
    T = n(652215),
    N = n(985018),
    y = n(366228);
function S(e) {
    let t,
        S,
        j,
        {
            onTransitionToInviteChannel: L,
            onAcceptInstantInvite: R,
            guild: P,
            invite: D,
            message: M,
            currentUserId: w,
        } = e,
        k = w === M.author.id,
        { channel: O, approximate_member_count: U, approximate_presence_count: B } = D,
        G = D.state === T.elq.ACCEPTING,
        F = null != O ? (0, C.OY)(O) : null,
        H = null != P,
        V = null != F,
        q = null != F && F.isGuildStageVoice(),
        W = (0, a.Lt)(D.flags ?? 0, r.Q.IS_GUEST_INVITE),
        Y = F?.isGuildVoiceOrThread() ?? !1,
        z = P?.features.has(T.GuildFeatures.HUB) ?? !1,
        Q = P?.id,
        { analyticsLocations: K } = (0, m.Ay)(_.A.INVITE_EMBED);
    (0, h.A)({
        name: s.ImpressionNames.INVITE_EMBED,
        type: s.ImpressionTypes.VIEW,
        properties: {
            invite_code: D.code,
            invite_guild_id: D.guild?.id,
            invite_channel_id: O?.id,
            invite_instance_id: (0, x._U)(D.code, M.id),
            invite_channel_type: O?.type,
            embed_type: "guild_invite",
            location_stack: K,
        },
    });
    let [J, X] = l.useState(!1),
        Z = l.useCallback(() => X(!1), []),
        $ = l.useRef(null),
        ee = (0, o.bG)([E.Ay], () => p.A.canAcceptInvite([E.Ay], D)),
        et = l.useCallback(() => {
            X(!0), (0, u.Pq)(Q, "show profile", K);
        }, [Q, K]),
        en = l.useCallback(() => {
            let e = "noop";
            H ? (L(), (e = "transition")) : (R(), (e = "accept")),
                (0, u.he)(
                    {
                        invite: D,
                        action: e,
                        inviter_id: M.author.id,
                        invite_message_id: M.id,
                        invite_instance_id: (0, x._U)(D.code, M.id),
                    },
                    K,
                );
        }, [D, M, K, H, L, R]);
    if (null == P) {
        if (null == D.guild) return (0, i.jsx)(b.A, {});
        (P = I.DY(D.guild)).premiumTier = D.guild.premium_tier ?? T.TVA.NONE;
    }
    let ei = (0, v.l)({ isVoiceChannel: Y, isOwnInvite: k, isGuest: W, isHubGuild: z, isStage: q, isStream: !1 });
    return (
        (S = (0, i.jsxs)("span", {
            className: y.FA,
            children: [
                (0, i.jsx)(g.A, {
                    guildId: P.id,
                    name: P.name,
                    shouldShow: J,
                    onRequestClose: Z,
                    targetElementRef: $,
                    children: () => (0, i.jsx)(f.A.GuildName, { guild: P, ref: $ }),
                }),
                (0, i.jsx)("span", {
                    className: y.E3,
                    children: (0, i.jsx)(A.A, { guild: P, isBannerVisible: !1, disableBoostClick: !0 }),
                }),
            ],
        })),
        W &&
            (j = (0, i.jsx)(d.m, {
                asContainer: !0,
                text: N.intl.string(N.t["/FeTK6"]),
                children: (0, i.jsx)(c.mir, { size: "md", color: "currentColor", className: y.G }),
            })),
        Y
            ? ((S = (0, i.jsx)(f.A.Channel, { channel: F })),
              (t = (0, i.jsxs)("span", {
                  className: y.FA,
                  children: [
                      N.intl.format(N.t["2wimj5"], { guildName: P.name }),
                      (0, i.jsx)("span", {
                          className: y.E3,
                          children: (0, i.jsx)(A.A, { guild: P, isBannerVisible: !1 }),
                      }),
                  ],
              })))
            : (null != U && U >= 5) || (null != B && B > 0)
              ? (t = (0, i.jsx)(f.A.Data, { members: U, membersOnline: B }))
              : V && (t = (0, i.jsx)(f.A.Channel, { channel: F, guild: P })),
        (0, i.jsxs)(f.A, {
            children: [
                (0, i.jsx)(f.A.GuildSplash, { guild: P }),
                (0, i.jsx)(f.A.Header, { text: ei, extra: j }),
                (0, i.jsxs)(f.A.Body, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: y.iH,
                            children: [
                                (0, i.jsx)(f.A.Icon, { guild: P }),
                                (0, i.jsx)(f.A.Info, { title: S, onClick: et, children: t }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: y.UD,
                            children: (0, i.jsx)(c.Button, {
                                onClick: en,
                                loading: G,
                                variant: "active",
                                fullWidth: Y,
                                disabled: !ee,
                                text: Y
                                    ? q
                                        ? N.intl.string(N.t["7vb2cc"])
                                        : N.intl.string(N.t.gpqgah)
                                    : H
                                      ? N.intl.string(N.t.cEnaWx)
                                      : N.intl.string(N.t.XpeFYr),
                            }),
                        }),
                    ],
                }),
                P.features.has(T.GuildFeatures.HUB) &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)("div", { className: y.me }),
                            (0, i.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: N.intl.format(N.t["/o1IfA"], {
                                    onClick: () =>
                                        (0, c.mMO)(async () => {
                                            let { default: e } = await n.e("98363").then(n.bind(n, 780086));
                                            return (t) => (0, i.jsx)(e, { ...t });
                                        }),
                                }),
                            }),
                        ],
                    }),
            ],
        })
    );
}

n.d(t, { A: () => R }), n(938796);
var i = n(627968),
    l = n(64700),
    a = n(110259),
    s = n(821418),
    r = n(665260),
    o = n(311907),
    d = n(990078),
    c = n(885574),
    u = n(821609),
    m = n(834730),
    _ = n(192308),
    h = n(846293),
    p = n(793574),
    g = n(688810),
    A = n(139286),
    f = n(290331),
    x = n(517905),
    C = n(986268),
    E = n(21599),
    I = n(529200),
    v = n(95701),
    b = n(696451),
    T = n(860689),
    S = n(505417),
    y = n(168428),
    N = n(652215),
    j = n(985018),
    L = n(602052);
function R(e) {
    let t,
        R,
        P,
        {
            onTransitionToInviteChannel: w,
            onAcceptInstantInvite: D,
            guild: k,
            invite: O,
            message: M,
            currentUserId: U,
        } = e,
        G = U === M.author.id,
        { channel: B, approximate_member_count: F, approximate_presence_count: H } = O,
        V = O.state === N.elq.ACCEPTING,
        q = null != B ? (0, v.OY)(B) : null,
        W = null != k,
        z = null != q,
        Y = null != q && q.isGuildStageVoice(),
        Q = (0, r.Lt)(O.flags ?? 0, s.Q.IS_GUEST_INVITE),
        K = q?.isGuildVoiceOrThread() ?? !1,
        Z = k?.features.has(N.GuildFeatures.HUB) ?? !1,
        J = k?.id,
        { analyticsLocations: X } = (0, g.Ay)(p.A.INVITE_EMBED);
    (0, A.A)({
        name: a.ImpressionNames.INVITE_EMBED,
        type: a.ImpressionTypes.VIEW,
        properties: {
            invite_code: O.code,
            invite_guild_id: O.guild?.id,
            invite_channel_id: B?.id,
            invite_instance_id: (0, E._U)(O.code, M.id),
            invite_channel_type: B?.type,
            embed_type: "guild_invite",
            location_stack: X,
        },
    });
    let [$, ee] = l.useState(!1),
        et = l.useCallback(() => ee(!1), []),
        en = l.useRef(null),
        ei = (0, o.bG)([b.Ay], () => f.A.canAcceptInvite([b.Ay], O)),
        el = l.useCallback(() => {
            ee(!0), (0, h.Pq)(J, "show profile", X);
        }, [J, X]),
        ea = l.useCallback(() => {
            let e = "noop";
            W ? (w(), (e = "transition")) : (D(), (e = "accept")),
                (0, h.he)(
                    {
                        invite: O,
                        action: e,
                        inviter_id: M.author.id,
                        invite_message_id: M.id,
                        invite_instance_id: (0, E._U)(O.code, M.id),
                    },
                    X,
                );
        }, [O, M, X, W, w, D]);
    if (null == k) {
        if (null == O.guild) return (0, i.jsx)(y.A, {});
        (k = T.DY(O.guild)).premiumTier = O.guild.premium_tier ?? N.TVA.NONE;
    }
    let es = (0, S.l)({ isVoiceChannel: K, isOwnInvite: G, isGuest: Q, isHubGuild: Z, isStage: Y, isStream: !1 });
    return (
        (R = (0, i.jsxs)("span", {
            className: L.FA,
            children: [
                (0, i.jsx)(x.A, {
                    guildId: k.id,
                    name: k.name,
                    shouldShow: $,
                    onRequestClose: et,
                    targetElementRef: en,
                    children: () => (0, i.jsx)(I.A.GuildName, { guild: k, ref: en }),
                }),
                (0, i.jsx)("span", {
                    className: L.E3,
                    children: (0, i.jsx)(C.A, { guild: k, isBannerVisible: !1, disableBoostClick: !0 }),
                }),
            ],
        })),
        Q &&
            (P = (0, i.jsx)(d.m, {
                asContainer: !0,
                text: j.intl.string(j.t["/FeTK6"]),
                children: (0, i.jsx)(c.m, { size: "md", color: "currentColor", className: L.G }),
            })),
        K
            ? ((R = (0, i.jsx)(I.A.Channel, { channel: q })),
              (t = (0, i.jsxs)("span", {
                  className: L.FA,
                  children: [
                      j.intl.format(j.t["2wimj5"], { guildName: k.name }),
                      (0, i.jsx)("span", {
                          className: L.E3,
                          children: (0, i.jsx)(C.A, { guild: k, isBannerVisible: !1 }),
                      }),
                  ],
              })))
            : (null != F && F >= 5) || (null != H && H > 0)
              ? (t = (0, i.jsx)(I.A.Data, { members: F, membersOnline: H }))
              : z && (t = (0, i.jsx)(I.A.Channel, { channel: q, guild: k })),
        (0, i.jsxs)(I.A, {
            children: [
                (0, i.jsx)(I.A.GuildSplash, { guild: k }),
                (0, i.jsx)(I.A.Header, { text: es, extra: P }),
                (0, i.jsxs)(I.A.Body, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: L.iH,
                            children: [
                                (0, i.jsx)(I.A.Icon, { guild: k }),
                                (0, i.jsx)(I.A.Info, { title: R, onClick: el, children: t }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: L.UD,
                            children: (0, i.jsx)(u.$, {
                                onClick: ea,
                                loading: V,
                                variant: "active",
                                fullWidth: K,
                                disabled: !ei,
                                text: K
                                    ? Y
                                        ? j.intl.string(j.t["7vb2cc"])
                                        : j.intl.string(j.t.gpqgah)
                                    : W
                                      ? j.intl.string(j.t.cEnaWx)
                                      : j.intl.string(j.t.XpeFYr),
                            }),
                        }),
                    ],
                }),
                k.features.has(N.GuildFeatures.HUB) &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)("div", { className: L.me }),
                            (0, i.jsx)(m.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: j.intl.format(j.t["/o1IfA"], {
                                    onClick: () =>
                                        (0, _.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([n.e("98363"), n.e("96318")]).then(
                                                n.bind(n, 780086),
                                            );
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

n.d(t, { A: () => I }), n(938796);
var i = n(627968),
    l = n(64700),
    a = n(821418),
    r = n(665260),
    s = n(990078),
    o = n(397927),
    d = n(846293),
    c = n(793574),
    u = n(688810),
    m = n(517905),
    _ = n(986268),
    h = n(529200),
    p = n(95701),
    g = n(860689),
    A = n(505417),
    f = n(168428),
    x = n(652215),
    E = n(985018),
    C = n(563111);
function I(e) {
    let t,
        I,
        T,
        {
            onTransitionToInviteChannel: v,
            onAcceptInstantInvite: N,
            guild: S,
            invite: b,
            message: j,
            currentUserId: y,
        } = e,
        R = y === j.author.id,
        { channel: L, approximate_member_count: M, approximate_presence_count: O } = b,
        D = b.state === x.elq.ACCEPTING,
        P = null != L ? (0, p.OY)(L) : null,
        k = null != S,
        U = null != P,
        w = null != P && P.isGuildStageVoice(),
        G = (0, r.Lt)(b.flags ?? 0, a.Q.IS_GUEST_INVITE),
        B = P?.isGuildVoiceOrThread() ?? !1,
        F = S?.features.has(x.GuildFeatures.HUB) ?? !1,
        H = S?.id,
        { analyticsLocations: V } = (0, u.Ay)(c.A.INVITE_EMBED),
        [z, W] = l.useState(!1),
        Y = l.useCallback(() => W(!1), []),
        q = l.useRef(null),
        K = l.useCallback(() => {
            W(!0), (0, d.Pq)(H, "show profile", V);
        }, [H, V]),
        Q = l.useCallback(() => {
            let e = "noop";
            k ? (v(), (e = "transition")) : (N(), (e = "accept")),
                (0, d.he)({ invite: b, action: e, inviter_id: j.author.id, invite_message_id: j.id }, V);
        }, [b, j, V, k, v, N]);
    if (null == S) {
        if (null == b.guild) return (0, i.jsx)(f.A, {});
        (S = g.DY(b.guild)).premiumTier = b.guild.premium_tier ?? x.TVA.NONE;
    }
    let J = (0, A.l)({ isVoiceChannel: B, isOwnInvite: R, isGuest: G, isHubGuild: F, isStage: w, isStream: !1 });
    return (
        (I = (0, i.jsxs)("span", {
            className: C.FA,
            children: [
                (0, i.jsx)(m.A, {
                    guildId: S.id,
                    name: S.name,
                    shouldShow: z,
                    onRequestClose: Y,
                    targetElementRef: q,
                    children: () => (0, i.jsx)(h.A.GuildName, { guild: S, ref: q }),
                }),
                (0, i.jsx)("span", {
                    className: C.E3,
                    children: (0, i.jsx)(_.A, { guild: S, isBannerVisible: !1, disableBoostClick: !0 }),
                }),
            ],
        })),
        G &&
            (T = (0, i.jsx)(s.m, {
                asContainer: !0,
                text: E.intl.string(E.t["/FeTK6"]),
                children: (0, i.jsx)(o.mir, { size: "md", color: "currentColor", className: C.G }),
            })),
        B
            ? ((I = (0, i.jsx)(h.A.Channel, { channel: P })),
              (t = (0, i.jsxs)("span", {
                  className: C.FA,
                  children: [
                      E.intl.format(E.t["2wimj5"], { guildName: S.name }),
                      (0, i.jsx)("span", {
                          className: C.E3,
                          children: (0, i.jsx)(_.A, { guild: S, isBannerVisible: !1 }),
                      }),
                  ],
              })))
            : (null != M && M >= 5) || (null != O && O > 0)
              ? (t = (0, i.jsx)(h.A.Data, { members: M, membersOnline: O }))
              : U && (t = (0, i.jsx)(h.A.Channel, { channel: P, guild: S })),
        (0, i.jsxs)(h.A, {
            children: [
                (0, i.jsx)(h.A.GuildSplash, { guild: S }),
                (0, i.jsx)(h.A.Header, { text: J, extra: T }),
                (0, i.jsxs)(h.A.Body, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: C.iH,
                            children: [
                                (0, i.jsx)(h.A.Icon, { guild: S }),
                                (0, i.jsx)(h.A.Info, { title: I, onClick: K, children: t }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: C.UD,
                            children: (0, i.jsx)(o.Button, {
                                onClick: Q,
                                loading: D,
                                variant: "active",
                                fullWidth: B,
                                text: B
                                    ? w
                                        ? E.intl.string(E.t["7vb2cc"])
                                        : E.intl.string(E.t.gpqgah)
                                    : k
                                      ? E.intl.string(E.t.cEnaWx)
                                      : E.intl.string(E.t.XpeFYr),
                            }),
                        }),
                    ],
                }),
                S.features.has(x.GuildFeatures.HUB) &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)("div", { className: C.me }),
                            (0, i.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: E.intl.format(E.t["/o1IfA"], {
                                    onClick: () =>
                                        (0, o.mMO)(async () => {
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

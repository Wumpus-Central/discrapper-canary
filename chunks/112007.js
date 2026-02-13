n.d(t, { A: () => S }), n(938796);
var i = n(627968),
    l = n(64700),
    a = n(821418),
    r = n(665260),
    s = n(311907),
    o = n(990078),
    d = n(397927),
    c = n(846293),
    u = n(793574),
    m = n(688810),
    _ = n(290331),
    h = n(517905),
    p = n(986268),
    g = n(529200),
    A = n(95701),
    f = n(696451),
    x = n(860689),
    E = n(505417),
    C = n(168428),
    I = n(652215),
    T = n(985018),
    v = n(563111);
function S(e) {
    let t,
        S,
        N,
        {
            onTransitionToInviteChannel: b,
            onAcceptInstantInvite: j,
            guild: y,
            invite: R,
            message: L,
            currentUserId: M,
        } = e,
        O = M === L.author.id,
        { channel: D, approximate_member_count: P, approximate_presence_count: k } = R,
        U = R.state === I.elq.ACCEPTING,
        w = null != D ? (0, A.OY)(D) : null,
        G = null != y,
        B = null != w,
        F = null != w && w.isGuildStageVoice(),
        H = (0, r.Lt)(R.flags ?? 0, a.Q.IS_GUEST_INVITE),
        V = w?.isGuildVoiceOrThread() ?? !1,
        z = y?.features.has(I.GuildFeatures.HUB) ?? !1,
        W = y?.id,
        { analyticsLocations: Y } = (0, m.Ay)(u.A.INVITE_EMBED),
        [q, K] = l.useState(!1),
        Q = l.useCallback(() => K(!1), []),
        J = l.useRef(null),
        X = (0, s.bG)([f.Ay], () => _.A.canAcceptInvite([f.Ay], R)),
        Z = l.useCallback(() => {
            K(!0), (0, c.Pq)(W, "show profile", Y);
        }, [W, Y]),
        $ = l.useCallback(() => {
            let e = "noop";
            G ? (b(), (e = "transition")) : (j(), (e = "accept")),
                (0, c.he)({ invite: R, action: e, inviter_id: L.author.id, invite_message_id: L.id }, Y);
        }, [R, L, Y, G, b, j]);
    if (null == y) {
        if (null == R.guild) return (0, i.jsx)(C.A, {});
        (y = x.DY(R.guild)).premiumTier = R.guild.premium_tier ?? I.TVA.NONE;
    }
    let ee = (0, E.l)({ isVoiceChannel: V, isOwnInvite: O, isGuest: H, isHubGuild: z, isStage: F, isStream: !1 });
    return (
        (S = (0, i.jsxs)("span", {
            className: v.FA,
            children: [
                (0, i.jsx)(h.A, {
                    guildId: y.id,
                    name: y.name,
                    shouldShow: q,
                    onRequestClose: Q,
                    targetElementRef: J,
                    children: () => (0, i.jsx)(g.A.GuildName, { guild: y, ref: J }),
                }),
                (0, i.jsx)("span", {
                    className: v.E3,
                    children: (0, i.jsx)(p.A, { guild: y, isBannerVisible: !1, disableBoostClick: !0 }),
                }),
            ],
        })),
        H &&
            (N = (0, i.jsx)(o.m, {
                asContainer: !0,
                text: T.intl.string(T.t["/FeTK6"]),
                children: (0, i.jsx)(d.mir, { size: "md", color: "currentColor", className: v.G }),
            })),
        V
            ? ((S = (0, i.jsx)(g.A.Channel, { channel: w })),
              (t = (0, i.jsxs)("span", {
                  className: v.FA,
                  children: [
                      T.intl.format(T.t["2wimj5"], { guildName: y.name }),
                      (0, i.jsx)("span", {
                          className: v.E3,
                          children: (0, i.jsx)(p.A, { guild: y, isBannerVisible: !1 }),
                      }),
                  ],
              })))
            : (null != P && P >= 5) || (null != k && k > 0)
              ? (t = (0, i.jsx)(g.A.Data, { members: P, membersOnline: k }))
              : B && (t = (0, i.jsx)(g.A.Channel, { channel: w, guild: y })),
        (0, i.jsxs)(g.A, {
            children: [
                (0, i.jsx)(g.A.GuildSplash, { guild: y }),
                (0, i.jsx)(g.A.Header, { text: ee, extra: N }),
                (0, i.jsxs)(g.A.Body, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: v.iH,
                            children: [
                                (0, i.jsx)(g.A.Icon, { guild: y }),
                                (0, i.jsx)(g.A.Info, { title: S, onClick: Z, children: t }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: v.UD,
                            children: (0, i.jsx)(d.Button, {
                                onClick: $,
                                loading: U,
                                variant: "active",
                                fullWidth: V,
                                disabled: !X,
                                text: V
                                    ? F
                                        ? T.intl.string(T.t["7vb2cc"])
                                        : T.intl.string(T.t.gpqgah)
                                    : G
                                      ? T.intl.string(T.t.cEnaWx)
                                      : T.intl.string(T.t.XpeFYr),
                            }),
                        }),
                    ],
                }),
                y.features.has(I.GuildFeatures.HUB) &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)("div", { className: v.me }),
                            (0, i.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: T.intl.format(T.t["/o1IfA"], {
                                    onClick: () =>
                                        (0, d.mMO)(async () => {
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

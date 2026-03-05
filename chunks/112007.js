n.d(t, { A: () => v }), n(938796);
var i = n(627968),
    l = n(64700),
    r = n(821418),
    a = n(665260),
    s = n(311907),
    o = n(990078),
    d = n(397927),
    c = n(846293),
    u = n(793574),
    _ = n(688810),
    m = n(290331),
    h = n(517905),
    p = n(986268),
    g = n(529200),
    A = n(95701),
    x = n(696451),
    f = n(860689),
    C = n(505417),
    E = n(168428),
    I = n(652215),
    b = n(985018),
    T = n(42441);
function v(e) {
    let t,
        v,
        S,
        {
            onTransitionToInviteChannel: y,
            onAcceptInstantInvite: N,
            guild: j,
            invite: L,
            message: R,
            currentUserId: P,
        } = e,
        M = P === R.author.id,
        { channel: w, approximate_member_count: D, approximate_presence_count: O } = L,
        k = L.state === I.elq.ACCEPTING,
        U = null != w ? (0, A.OY)(w) : null,
        G = null != j,
        B = null != U,
        F = null != U && U.isGuildStageVoice(),
        H = (0, a.Lt)(L.flags ?? 0, r.Q.IS_GUEST_INVITE),
        V = U?.isGuildVoiceOrThread() ?? !1,
        W = j?.features.has(I.GuildFeatures.HUB) ?? !1,
        q = j?.id,
        { analyticsLocations: Y } = (0, _.Ay)(u.A.INVITE_EMBED),
        [z, Q] = l.useState(!1),
        K = l.useCallback(() => Q(!1), []),
        J = l.useRef(null),
        X = (0, s.bG)([x.Ay], () => m.A.canAcceptInvite([x.Ay], L)),
        Z = l.useCallback(() => {
            Q(!0), (0, c.Pq)(q, "show profile", Y);
        }, [q, Y]),
        $ = l.useCallback(() => {
            let e = "noop";
            G ? (y(), (e = "transition")) : (N(), (e = "accept")),
                (0, c.he)({ invite: L, action: e, inviter_id: R.author.id, invite_message_id: R.id }, Y);
        }, [L, R, Y, G, y, N]);
    if (null == j) {
        if (null == L.guild) return (0, i.jsx)(E.A, {});
        (j = f.DY(L.guild)).premiumTier = L.guild.premium_tier ?? I.TVA.NONE;
    }
    let ee = (0, C.l)({ isVoiceChannel: V, isOwnInvite: M, isGuest: H, isHubGuild: W, isStage: F, isStream: !1 });
    return (
        (v = (0, i.jsxs)("span", {
            className: T.FA,
            children: [
                (0, i.jsx)(h.A, {
                    guildId: j.id,
                    name: j.name,
                    shouldShow: z,
                    onRequestClose: K,
                    targetElementRef: J,
                    children: () => (0, i.jsx)(g.A.GuildName, { guild: j, ref: J }),
                }),
                (0, i.jsx)("span", {
                    className: T.E3,
                    children: (0, i.jsx)(p.A, { guild: j, isBannerVisible: !1, disableBoostClick: !0 }),
                }),
            ],
        })),
        H &&
            (S = (0, i.jsx)(o.m, {
                asContainer: !0,
                text: b.intl.string(b.t["/FeTK6"]),
                children: (0, i.jsx)(d.mir, { size: "md", color: "currentColor", className: T.G }),
            })),
        V
            ? ((v = (0, i.jsx)(g.A.Channel, { channel: U })),
              (t = (0, i.jsxs)("span", {
                  className: T.FA,
                  children: [
                      b.intl.format(b.t["2wimj5"], { guildName: j.name }),
                      (0, i.jsx)("span", {
                          className: T.E3,
                          children: (0, i.jsx)(p.A, { guild: j, isBannerVisible: !1 }),
                      }),
                  ],
              })))
            : (null != D && D >= 5) || (null != O && O > 0)
              ? (t = (0, i.jsx)(g.A.Data, { members: D, membersOnline: O }))
              : B && (t = (0, i.jsx)(g.A.Channel, { channel: U, guild: j })),
        (0, i.jsxs)(g.A, {
            children: [
                (0, i.jsx)(g.A.GuildSplash, { guild: j }),
                (0, i.jsx)(g.A.Header, { text: ee, extra: S }),
                (0, i.jsxs)(g.A.Body, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: T.iH,
                            children: [
                                (0, i.jsx)(g.A.Icon, { guild: j }),
                                (0, i.jsx)(g.A.Info, { title: v, onClick: Z, children: t }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: T.UD,
                            children: (0, i.jsx)(d.Button, {
                                onClick: $,
                                loading: k,
                                variant: "active",
                                fullWidth: V,
                                disabled: !X,
                                text: V
                                    ? F
                                        ? b.intl.string(b.t["7vb2cc"])
                                        : b.intl.string(b.t.gpqgah)
                                    : G
                                      ? b.intl.string(b.t.cEnaWx)
                                      : b.intl.string(b.t.XpeFYr),
                            }),
                        }),
                    ],
                }),
                j.features.has(I.GuildFeatures.HUB) &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)("div", { className: T.me }),
                            (0, i.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: b.intl.format(b.t["/o1IfA"], {
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

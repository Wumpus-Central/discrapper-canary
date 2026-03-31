n.d(t, { A: () => y }), n(938796);
var i = n(627968),
    a = n(64700),
    r = n(821418),
    l = n(665260),
    s = n(311907),
    o = n(990078),
    d = n(397927),
    c = n(846293),
    u = n(793574),
    _ = n(688810),
    m = n(290331),
    h = n(517905),
    p = n(986268),
    g = n(21599),
    A = n(529200),
    x = n(95701),
    f = n(696451),
    C = n(860689),
    I = n(505417),
    E = n(168428),
    b = n(652215),
    v = n(985018),
    T = n(366228);
function y(e) {
    let t,
        y,
        S,
        {
            onTransitionToInviteChannel: N,
            onAcceptInstantInvite: j,
            guild: L,
            invite: R,
            message: P,
            currentUserId: w,
        } = e,
        M = w === P.author.id,
        { channel: D, approximate_member_count: k, approximate_presence_count: O } = R,
        U = R.state === b.elq.ACCEPTING,
        B = null != D ? (0, x.OY)(D) : null,
        G = null != L,
        F = null != B,
        H = null != B && B.isGuildStageVoice(),
        V = (0, l.Lt)(R.flags ?? 0, r.Q.IS_GUEST_INVITE),
        q = B?.isGuildVoiceOrThread() ?? !1,
        W = L?.features.has(b.GuildFeatures.HUB) ?? !1,
        z = L?.id,
        { analyticsLocations: Y } = (0, _.Ay)(u.A.INVITE_EMBED),
        [Q, K] = a.useState(!1),
        J = a.useCallback(() => K(!1), []),
        X = a.useRef(null),
        Z = (0, s.bG)([f.Ay], () => m.A.canAcceptInvite([f.Ay], R)),
        $ = a.useCallback(() => {
            K(!0), (0, c.Pq)(z, "show profile", Y);
        }, [z, Y]),
        ee = a.useCallback(() => {
            let e = "noop";
            G ? (N(), (e = "transition")) : (j(), (e = "accept")),
                (0, c.he)(
                    {
                        invite: R,
                        action: e,
                        inviter_id: P.author.id,
                        invite_message_id: P.id,
                        invite_instance_id: (0, g._U)(R.code, P.id),
                    },
                    Y,
                );
        }, [R, P, Y, G, N, j]);
    if (null == L) {
        if (null == R.guild) return (0, i.jsx)(E.A, {});
        (L = C.DY(R.guild)).premiumTier = R.guild.premium_tier ?? b.TVA.NONE;
    }
    let et = (0, I.l)({ isVoiceChannel: q, isOwnInvite: M, isGuest: V, isHubGuild: W, isStage: H, isStream: !1 });
    return (
        (y = (0, i.jsxs)("span", {
            className: T.FA,
            children: [
                (0, i.jsx)(h.A, {
                    guildId: L.id,
                    name: L.name,
                    shouldShow: Q,
                    onRequestClose: J,
                    targetElementRef: X,
                    children: () => (0, i.jsx)(A.A.GuildName, { guild: L, ref: X }),
                }),
                (0, i.jsx)("span", {
                    className: T.E3,
                    children: (0, i.jsx)(p.A, { guild: L, isBannerVisible: !1, disableBoostClick: !0 }),
                }),
            ],
        })),
        V &&
            (S = (0, i.jsx)(o.m, {
                asContainer: !0,
                text: v.intl.string(v.t["/FeTK6"]),
                children: (0, i.jsx)(d.mir, { size: "md", color: "currentColor", className: T.G }),
            })),
        q
            ? ((y = (0, i.jsx)(A.A.Channel, { channel: B })),
              (t = (0, i.jsxs)("span", {
                  className: T.FA,
                  children: [
                      v.intl.format(v.t["2wimj5"], { guildName: L.name }),
                      (0, i.jsx)("span", {
                          className: T.E3,
                          children: (0, i.jsx)(p.A, { guild: L, isBannerVisible: !1 }),
                      }),
                  ],
              })))
            : (null != k && k >= 5) || (null != O && O > 0)
              ? (t = (0, i.jsx)(A.A.Data, { members: k, membersOnline: O }))
              : F && (t = (0, i.jsx)(A.A.Channel, { channel: B, guild: L })),
        (0, i.jsxs)(A.A, {
            children: [
                (0, i.jsx)(A.A.GuildSplash, { guild: L }),
                (0, i.jsx)(A.A.Header, { text: et, extra: S }),
                (0, i.jsxs)(A.A.Body, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: T.iH,
                            children: [
                                (0, i.jsx)(A.A.Icon, { guild: L }),
                                (0, i.jsx)(A.A.Info, { title: y, onClick: $, children: t }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: T.UD,
                            children: (0, i.jsx)(d.Button, {
                                onClick: ee,
                                loading: U,
                                variant: "active",
                                fullWidth: q,
                                disabled: !Z,
                                text: q
                                    ? H
                                        ? v.intl.string(v.t["7vb2cc"])
                                        : v.intl.string(v.t.gpqgah)
                                    : G
                                      ? v.intl.string(v.t.cEnaWx)
                                      : v.intl.string(v.t.XpeFYr),
                            }),
                        }),
                    ],
                }),
                L.features.has(b.GuildFeatures.HUB) &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)("div", { className: T.me }),
                            (0, i.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: v.intl.format(v.t["/o1IfA"], {
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

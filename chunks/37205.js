n.d(t, { A: () => w });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(284009),
    o = n.n(s),
    d = n(311907),
    c = n(397927),
    u = n(846293),
    _ = n(956793),
    m = n(401843),
    h = n(104171),
    p = n(793574),
    g = n(688810),
    A = n(450149),
    x = n(290331),
    f = n(21119),
    C = n(95701),
    I = n(734057),
    E = n(696451),
    v = n(71393),
    b = n(576705),
    T = n(607567),
    S = n(860689),
    y = n(422844),
    N = n(72951),
    j = n(453178),
    L = n(182912),
    R = n(341678),
    P = n(652215),
    M = n(985018),
    D = n(519934);
function w(e) {
    let {
            invite: t,
            currentUserId: n,
            message: l,
            guild: s,
            onTransitionToInviteChannel: A,
            onAcceptInstantInvite: w,
        } = e,
        k = (0, y.xR)("VoiceInviteEmbed"),
        U = s ?? null;
    null == U && null != t.guild && (U = S.DY(t.guild));
    let G = null != t.channel ? (0, C.OY)(t.channel) : null;
    o()(null != U, "Voice Invite Embed must be used in context of a guild."),
        o()(null != G, "Voice Invite Embed must be able to resolve an invite channel.");
    let B = (0, d.bG)([b.A, I.A], () => {
            let e = I.A.getChannel(G.id);
            return null == e || b.A.canBasicChannel(P.hVb.VIEW_CHANNEL, e);
        }, [G.id]),
        F = (0, d.bG)([T.Ay], () => (B ? T.Ay.getVoiceStatesForChannelAlt(G.id, U.id) : []), [G.id, U.id, B]),
        { label: H, sublabel: V } = (function (e) {
            let { currentUserId: t, author: n, voiceStates: i } = e,
                r = n.id === t,
                l = i.length > 0,
                a = i.some((e) => e.user?.id === n.id),
                s = i.length - !!a;
            return l
                ? r
                    ? {
                          label: a
                              ? M.intl.format(M.t["2RWMFV"], { othersCount: s })
                              : M.intl.format(M.t.IWXzHV, { othersCount: s }),
                      }
                    : {
                          label: a
                              ? M.intl.format(M.t.Da7tZx, { othersCount: s })
                              : M.intl.format(M.t["3VbQvv"], { othersCount: s }),
                      }
                : {
                      label: r ? M.intl.string(M.t.DVDvCD) : M.intl.string(M.t.TY77rq),
                      sublabel: M.intl.string(M.t.wM2WTM),
                  };
        })({ currentUserId: n, author: l.author, voiceStates: F }),
        W = (0, d.bG)([v.A], () => null != v.A.getGuild(U.id), [U.id]),
        q = (0, d.bG)([E.Ay], () => x.A.canAcceptInvite([E.Ay], t), [t]),
        Y = t.state === P.elq.ACCEPTING,
        { analyticsLocations: z } = (0, g.Ay)(p.A.INVITE_EMBED),
        Q = r.useCallback(() => {
            let e = W ? "transition" : "accept";
            W ? A() : w(), (0, u.he)({ invite: t, action: e, inviter_id: l.author.id, invite_message_id: l.id }, z);
        }, [t, l, z, W, A, w]),
        K = (0, R.A)({ invite: t, message: l, voiceStates: F, guildId: U.id, channelId: G.id }),
        J = k.activityPreviewEnabled && null != K,
        X = r.useCallback(() => {
            null != K &&
                (W ? (_.default.selectVoiceChannel(K.channelId), (0, m.Nl)(K)) : w(),
                (0, u.he)(
                    { invite: t, action: W ? "watch" : "accept", inviter_id: l.author.id, invite_message_id: l.id },
                    z,
                ));
        }, [K, W, t, l, z, w]),
        Z = (0, d.bG)([f.A], () => {
            let e = l.author.id,
                t = F.map((e) => e.user),
                n = t.find((t) => t.id === e),
                i = t
                    .filter((t) => t.id !== e)
                    .sort((e, t) => {
                        let n = f.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                        return (f.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                    });
            return null != n ? [n, ...i] : i;
        }, [F, l.author.id]);
    return (0, i.jsxs)("div", {
        className: a()(D.kL, { [D.VD]: J }),
        children: [
            (0, i.jsx)("div", { className: D.ys }),
            (0, i.jsx)("div", { className: D.r$, style: { "--custom-number-of-dots": 24 } }),
            J ? (0, i.jsx)(O, { className: D.tB, stream: K }) : null,
            (0, i.jsxs)("div", {
                className: D.rf,
                children: [
                    (0, i.jsxs)("div", {
                        className: D.Qs,
                        children: [
                            (0, i.jsx)(N.A, { channel: G, guild: U, onClick: A }),
                            (0, i.jsxs)("div", {
                                className: D.WD,
                                children: [
                                    J
                                        ? (0, i.jsx)(h.Ay, {
                                              className: D.WM,
                                              showDefaultAvatarsForNullUsers: !0,
                                              guildId: G.guild_id,
                                              users: Z,
                                              count: F.length,
                                              max: 3,
                                          })
                                        : null,
                                    (0, i.jsx)(c.Text, { variant: "text-md/medium", children: H }),
                                    null != V
                                        ? (0, i.jsx)(c.Text, {
                                              variant: "text-sm/normal",
                                              className: D.$B,
                                              children: V,
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    J
                        ? (0, i.jsx)(j.A, { stream: K, currentUserId: n, onClick: X, className: D.Rh })
                        : (0, i.jsx)(L.A, { voiceStates: F, guildId: U.id }),
                ],
            }),
            (0, i.jsx)("div", {
                className: D.xk,
                children: (0, i.jsx)(c.Button, {
                    onClick: Q,
                    loading: Y,
                    variant: "active",
                    fullWidth: !0,
                    disabled: !q,
                    text: M.intl.string(M.t.gpqgah),
                }),
            }),
        ],
    });
}
function O(e) {
    let { className: t, stream: n } = e,
        { previewUrl: r, isLoading: l } = (0, A.A)(n.guildId, n.channelId, n.ownerId),
        s = null != r && !l;
    return (0, i.jsx)("div", {
        className: a()(t, D.rr, { [D.pc]: !s }),
        style: { "--custom-bg-url": s ? `url(${r})` : "unset" },
        children: (0, i.jsx)("div", { className: D.bW }),
    });
}

n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    s = n(284009),
    r = n.n(s),
    a = n(110259),
    o = n(158954),
    d = n(311907),
    c = n(846293),
    u = n(793574),
    _ = n(688810),
    m = n(139286),
    h = n(21599),
    p = n(529200),
    g = n(95701),
    A = n(616356),
    x = n(967198),
    f = n(860689),
    C = n(427262),
    E = n(168428),
    I = n(652215),
    v = n(172799),
    b = n(985018),
    T = n(366228);
function N(e) {
    let t,
        {
            invite: n,
            currentUserId: s,
            guild: N,
            message: y,
            onTransitionToInviteChannel: S,
            onAcceptInstantInvite: j,
        } = e,
        L = N?.id,
        R = (0, d.bG)([x.A], () => x.A.getGuildId()),
        P = (0, d.bG)(
            [A.A],
            () => (null != n && null != n.target_user ? A.A.getActiveStreamForUser(n.target_user.id, L) : null),
            [n, L],
        ),
        D = (0, d.bG)(
            [A.A],
            () => (null != n && null != n.target_user ? A.A.getStreamForUser(n.target_user.id, L) : null),
            [n, L],
        ),
        { analyticsLocations: M } = (0, _.Ay)(u.A.INVITE_EMBED);
    (0, m.A)({
        name: a.ImpressionNames.INVITE_EMBED,
        type: a.ImpressionTypes.VIEW,
        properties: {
            invite_code: n.code,
            invite_guild_id: n.guild?.id,
            invite_channel_id: n.channel?.id,
            invite_instance_id: (0, h._U)(n.code, y.id),
            invite_channel_type: n.channel?.type,
            embed_type: "streaming_invite",
            location_stack: M,
        },
    });
    let w = null != n && n.target_type === v.yV.STREAM && null != n.target_user && null != P,
        k =
            null != n &&
            null != D &&
            null != n.channel &&
            null != n.guild &&
            D.channelId === n.channel.id &&
            D.guildId === n.guild.id;
    r()(null != n, "Invite cannot be null");
    let { target_type: O, target_user: U } = n;
    r()(O === v.yV.STREAM && null != U, "invalid streaming invite");
    let B = s === U.id,
        G = n.state === I.elq.ACCEPTING,
        F = l.useCallback(() => {
            let e = "noop";
            w ? (S(), (e = "transition")) : (j(), (e = "accept")),
                (0, c.he)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: y.author.id,
                        invite_message_id: y.id,
                        invite_instance_id: (0, h._U)(n.code, y.id),
                    },
                    M,
                );
        }, [n, y, M, w, S, j]),
        H = null != N;
    if (null == N) {
        if (null == n.guild) return (0, i.jsx)(E.A, {});
        N = (0, f.DY)(n.guild);
    }
    let V = null != n.channel ? (0, g.OY)(n.channel) : null,
        q = C.Ay.getName(U),
        W = w || (!k && H),
        Y = b.intl.string(b.t.I6JG46),
        z = "active";
    H && !k
        ? ((t = B ? b.intl.string(b.t.oBLoZJ) : b.intl.formatToPlainString(b.t["0QJmA+"], { name: q })),
          (Y = b.intl.string(b.t.Wdi5E1)))
        : ((z = "active"),
          w && ((Y = b.intl.string(b.t.Q1W99y)), (z = "secondary")),
          (t = B ? b.intl.string(b.t["4hyaHu"]) : b.intl.formatToPlainString(b.t.QmlLEq, { name: q })));
    let Q =
        R === N.id && null != V
            ? (0, i.jsx)(p.A.Channel, { channel: V })
            : b.intl.formatToPlainString(b.t.u0vaDE, { guildName: N.name });
    return (0, i.jsxs)(p.A, {
        children: [
            (0, i.jsx)(p.A.Header, { text: b.intl.string(b.t["wS+5Wb"]) }),
            (0, i.jsxs)(p.A.Body, {
                children: [
                    (0, i.jsxs)("div", {
                        className: T.iH,
                        children: [
                            (0, i.jsx)(p.A.Icon, { guild: N, onClick: H && k ? F : void 0 }),
                            (0, i.jsx)(p.A.Info, { title: t, onClick: H && k ? F : void 0, children: Q }),
                        ],
                    }),
                    (0, i.jsx)(o.$nd, { onClick: F, loading: G, disabled: W, variant: z, text: Y }),
                ],
            }),
        ],
    });
}

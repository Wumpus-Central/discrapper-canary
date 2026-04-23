n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    a = n(284009),
    s = n.n(a),
    r = n(110259),
    o = n(821609),
    d = n(311907),
    c = n(846293),
    u = n(793574),
    m = n(688810),
    _ = n(139286),
    h = n(21599),
    p = n(529200),
    g = n(95701),
    A = n(616356),
    f = n(967198),
    x = n(860689),
    C = n(427262),
    E = n(168428),
    I = n(652215),
    v = n(172799),
    b = n(985018),
    T = n(344900);
function S(e) {
    let t,
        {
            invite: n,
            currentUserId: a,
            guild: S,
            message: y,
            onTransitionToInviteChannel: N,
            onAcceptInstantInvite: j,
        } = e,
        L = S?.id,
        R = (0, d.bG)([f.A], () => f.A.getGuildId()),
        P = (0, d.bG)(
            [A.A],
            () => (null != n && null != n.target_user ? A.A.getActiveStreamForUser(n.target_user.id, L) : null),
            [n, L],
        ),
        w = (0, d.bG)(
            [A.A],
            () => (null != n && null != n.target_user ? A.A.getStreamForUser(n.target_user.id, L) : null),
            [n, L],
        ),
        { analyticsLocations: D } = (0, m.Ay)(u.A.INVITE_EMBED);
    (0, _.A)({
        name: r.ImpressionNames.INVITE_EMBED,
        type: r.ImpressionTypes.VIEW,
        properties: {
            invite_code: n.code,
            invite_guild_id: n.guild?.id,
            invite_channel_id: n.channel?.id,
            invite_instance_id: (0, h._U)(n.code, y.id),
            invite_channel_type: n.channel?.type,
            embed_type: "streaming_invite",
            location_stack: D,
        },
    });
    let k = null != n && n.target_type === v.yV.STREAM && null != n.target_user && null != P,
        O =
            null != n &&
            null != w &&
            null != n.channel &&
            null != n.guild &&
            w.channelId === n.channel.id &&
            w.guildId === n.guild.id;
    s()(null != n, "Invite cannot be null");
    let { target_type: M, target_user: U } = n;
    s()(M === v.yV.STREAM && null != U, "invalid streaming invite");
    let G = a === U.id,
        B = n.state === I.elq.ACCEPTING,
        F = l.useCallback(() => {
            let e = "noop";
            k ? (N(), (e = "transition")) : (j(), (e = "accept")),
                (0, c.he)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: y.author.id,
                        invite_message_id: y.id,
                        invite_instance_id: (0, h._U)(n.code, y.id),
                    },
                    D,
                );
        }, [n, y, D, k, N, j]),
        H = null != S;
    if (null == S) {
        if (null == n.guild) return (0, i.jsx)(E.A, {});
        S = (0, x.DY)(n.guild);
    }
    let V = null != n.channel ? (0, g.OY)(n.channel) : null,
        q = C.Ay.getName(U),
        W = k || (!O && H),
        z = b.intl.string(b.t.I6JG46),
        Y = "active";
    H && !O
        ? ((t = G ? b.intl.string(b.t.oBLoZJ) : b.intl.formatToPlainString(b.t["0QJmA+"], { name: q })),
          (z = b.intl.string(b.t.Wdi5E1)))
        : ((Y = "active"),
          k && ((z = b.intl.string(b.t.Q1W99y)), (Y = "secondary")),
          (t = G ? b.intl.string(b.t["4hyaHu"]) : b.intl.formatToPlainString(b.t.QmlLEq, { name: q })));
    let Q =
        R === S.id && null != V
            ? (0, i.jsx)(p.A.Channel, { channel: V })
            : b.intl.formatToPlainString(b.t.u0vaDE, { guildName: S.name });
    return (0, i.jsxs)(p.A, {
        children: [
            (0, i.jsx)(p.A.Header, { text: b.intl.string(b.t["wS+5Wb"]) }),
            (0, i.jsxs)(p.A.Body, {
                children: [
                    (0, i.jsxs)("div", {
                        className: T.iH,
                        children: [
                            (0, i.jsx)(p.A.Icon, { guild: S, onClick: H && O ? F : void 0 }),
                            (0, i.jsx)(p.A.Info, { title: t, onClick: H && O ? F : void 0, children: Q }),
                        ],
                    }),
                    (0, i.jsx)(o.$, { onClick: F, loading: B, disabled: W, variant: Y, text: z }),
                ],
            }),
        ],
    });
}

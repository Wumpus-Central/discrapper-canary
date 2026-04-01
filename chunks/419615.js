n.d(t, { A: () => m });
var i = n(119966),
    l = n(478437),
    a = n(344351),
    r = n(179771),
    s = n(420970),
    o = n(795816),
    d = n(933958),
    c = n(734057),
    u = n(954843),
    A = n(613057),
    h = n(652215),
    _ = n(818348);
let m = {
    [_.e$.INVITE_USER_EMBEDDED]: (0, s.T)(_.e$.INVITE_USER_EMBEDDED, {
        scope: { [A.sm.ANY]: [r.F.DM_CHANNELS_MESSAGES_WRITE, r.F.ACTIVITIES_INVITES_WRITE] },
        async handler(e) {
            let t,
                {
                    socket: n,
                    args: { user_id: r, content: s },
                } = e,
                A = n.application.id;
            if (null == A) throw new i.G({ errorCode: _.Lw.INVALID_COMMAND }, "No application.");
            let m = d.Ay.getConnectedActivityLocation();
            if (null == m)
                throw new i.G(
                    { errorCode: _.Lw.NO_ELIGIBLE_ACTIVITY },
                    "No eligible activity for application. Ensure an activity was set using setActivity.",
                );
            switch (m.kind) {
                case a.T.GUILD_CHANNEL:
                case a.T.GUILD_CHANNEL_MESSAGE:
                    t = (0, u.W)().channel;
                    break;
                case a.T.PRIVATE_CHANNEL:
                case a.T.PRIVATE_CHANNEL_MESSAGE:
                    let p = c.A.getChannel(m.channel_id);
                    if (null == p) throw new i.G({ errorCode: _.Lw.INVALID_CHANNEL }, "Invalid channel");
                    if (p.type === l.r.DM)
                        throw new i.G({ errorCode: _.Lw.INVALID_CHANNEL }, "Cannot send invite to a DM");
                    t = p;
                    break;
                default:
                    throw new i.G({ errorCode: _.Lw.NO_ELIGIBLE_ACTIVITY }, "Unsupported activity location");
            }
            try {
                await (0, o.Ue)({
                    channelId: t.id,
                    applicationId: A,
                    userId: r,
                    prefixedContent: s,
                    location: "RPC_ACTIVITY_INVITE_USER",
                    inviteAnalyticsMetadata: { source: h.PE1.ACTIVITY_INVITE },
                });
            } catch {
                throw new i.G({ errorCode: _.Lw.UNKNOWN_ERROR }, "Failed to invite user");
            }
        },
    }),
};

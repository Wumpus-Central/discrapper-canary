n.d(t, { A: () => E });
var i = n(119966),
    r = n(478437),
    a = n(344351),
    l = n(179771),
    s = n(420970),
    o = n(795816),
    d = n(933958),
    u = n(734057),
    c = n(954843),
    A = n(613057),
    h = n(652215),
    _ = n(818348);
let E = {
    [_.e$.INVITE_USER_EMBEDDED]: (0, s.T)(_.e$.INVITE_USER_EMBEDDED, {
        scope: { [A.sm.ANY]: [l.F.DM_CHANNELS_MESSAGES_WRITE, l.F.ACTIVITIES_INVITES_WRITE] },
        async handler(e) {
            let t,
                {
                    socket: n,
                    args: { user_id: l, content: s },
                } = e,
                A = n.application.id;
            if (null == A) throw new i.G({ errorCode: _.Lw.INVALID_COMMAND }, "No application.");
            let E = d.Ay.getConnectedActivityLocation();
            if (null == E)
                throw new i.G(
                    { errorCode: _.Lw.NO_ELIGIBLE_ACTIVITY },
                    "No eligible activity for application. Ensure an activity was set using setActivity.",
                );
            switch (E.kind) {
                case a.T.GUILD_CHANNEL:
                case a.T.GUILD_CHANNEL_MESSAGE:
                    t = (0, c.W)().channel;
                    break;
                case a.T.PRIVATE_CHANNEL:
                case a.T.PRIVATE_CHANNEL_MESSAGE:
                    let p = u.A.getChannel(E.channel_id);
                    if (null == p) throw new i.G({ errorCode: _.Lw.INVALID_CHANNEL }, "Invalid channel");
                    if (p.type === r.r.DM)
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
                    userId: l,
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

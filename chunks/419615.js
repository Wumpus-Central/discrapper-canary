n.d(t, { A: () => A });
var r = n(119966),
    i = n(478437),
    l = n(344351),
    a = n(179771),
    s = n(420970),
    o = n(795816),
    c = n(933958),
    u = n(734057),
    d = n(954843),
    p = n(613057),
    f = n(652215),
    h = n(818348);
let A = {
    [h.e$.INVITE_USER_EMBEDDED]: (0, s.T)(h.e$.INVITE_USER_EMBEDDED, {
        scope: { [p.sm.ANY]: [a.F.RELATIONSHIPS_READ] },
        async handler(e) {
            let t,
                {
                    socket: n,
                    args: { user_id: a, content: s },
                } = e,
                p = n.application.id;
            if (null == p) throw new r.G({ errorCode: h.Lw.INVALID_COMMAND }, "No application.");
            let A = c.Ay.getConnectedActivityLocation();
            if (null == A)
                throw new r.G(
                    { errorCode: h.Lw.NO_ELIGIBLE_ACTIVITY },
                    "No eligible activity for application. Ensure an activity was set using setActivity.",
                );
            switch (A.kind) {
                case l.T.GUILD_CHANNEL:
                case l.T.GUILD_CHANNEL_MESSAGE:
                    t = (0, d.W)().channel;
                    break;
                case l.T.PRIVATE_CHANNEL:
                case l.T.PRIVATE_CHANNEL_MESSAGE:
                    let g = u.A.getChannel(A.channel_id);
                    if (null == g) throw new r.G({ errorCode: h.Lw.INVALID_CHANNEL }, "Invalid channel");
                    if (g.type === i.r.DM)
                        throw new r.G({ errorCode: h.Lw.INVALID_CHANNEL }, "Cannot send invite to a DM");
                    t = g;
                    break;
                default:
                    throw new r.G({ errorCode: h.Lw.NO_ELIGIBLE_ACTIVITY }, "Unsupported activity location");
            }
            try {
                await (0, o.Ue)({
                    channelId: t.id,
                    applicationId: p,
                    userId: a,
                    prefixedContent: s,
                    location: "RPC_ACTIVITY_INVITE_USER",
                    inviteAnalyticsMetadata: { source: f.PE1.ACTIVITY_INVITE },
                });
            } catch (e) {
                throw new r.G({ errorCode: h.Lw.UNKNOWN_ERROR }, "Failed to invite user");
            }
        },
    }),
};

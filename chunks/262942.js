var i = n(778858),
    _ = n(780964),
    r = n(843010),
    s = n(766075),
    E = n(734057),
    d = n(309010),
    u = n(612200),
    C = n(204925);
n.d(
    t,
    {},
    {
        A: function (e) {
            if (e === C.w_.NSFW_SERVER_INVITE_EMBED) return void (0, u.IO)(e);
            if (e === C.w_.FAMILY_CENTER) {
                ((0, u.IO)(e), (0, r.f)() && (0, s.openUserSettings)(_.X.ACCOUNT_FAMILY_CENTER_CATEGORY));
                return;
            }
            let t = E.A.getChannel(d.Ay.getChannelId())?.getGuildId();
            (i.A.nsfwReturnToSafety(t), (0, u.IO)(e));
        },
    },
);

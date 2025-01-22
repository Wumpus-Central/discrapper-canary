r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(626135),
    a = r(981631);
function o(e) {
    let { type: n, source: r, userId: o, guildId: s, channelId: l, channelType: u, applicationId: c, partyId: d, messageId: f, locationObject: p, analyticsLocations: h, referrerId: _, inviterUserId: m } = e;
    i.default.track(a.rMx.APPLICATION_OPENED, {
        type: n,
        source: r,
        guild_id: s,
        channel_id: l,
        channel_type: u,
        application_id: c,
        party_id: null != d ? d : void 0,
        other_user_id: o,
        message_id: f,
        location: p,
        location_stack: h,
        referrer_id: _,
        invite_inviter_id: m
    });
}

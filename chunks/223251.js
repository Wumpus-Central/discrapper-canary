"use strict";
i.d(t, { A: () => E });
var n = i(64700),
    s = i(136722),
    a = i(311907),
    l = i(58149),
    r = i(237774),
    o = i(885437),
    d = i(973854),
    c = i(815706),
    u = i(808728),
    h = i(696451),
    _ = i(71393),
    p = i(576705),
    f = i(309010),
    m = i(967198),
    g = i(287809),
    A = i(256415),
    x = i(9302),
    v = i(652215);
class y extends n.Component {
    componentDidUpdate(e) {
        if (this.props.locked) return null;
        let {
            selectedGuild: t,
            selectedChannel: i,
            isMemberPending: n,
            hasPreviewEnabled: s,
            postableChannelCount: a,
        } = this.props;
        null != t &&
            (t !== e.selectedGuild || (n && !e.isMemberPending)) &&
            ((0, c.z)(v.HAw.GUILD_VIEWED, {
                ...(n ? { is_pending: n, preview_enabled: s } : {}),
                postable_channels: a,
            }),
            (0, r.k)(v.HAw.GUILD_VIEWED_CLICKSTREAM, { guild_id: t })),
            null != i &&
                i !== e.selectedChannel &&
                ((0, c.z)(v.HAw.CHANNEL_OPENED, { ...(0, o.p)(i), ...(0, l.qL)(i) }), (0, d.A)({ channelId: i }));
    }
    render() {
        return null;
    }
}
let E = a.Ay.connectStores([m.A, f.A, _.A, g.default, A.default, u.Ay, p.A, h.Ay], () => {
    let e = m.A.getGuildId(),
        t = f.A.getChannelId(e),
        i = _.A.getGuild(e),
        n = g.default.getCurrentUser(),
        a = u.Ay.getChannels(i?.id)[u.I6] ?? [],
        l =
            a.length > 0
                ? a.filter((e) => {
                      let { channel: t } = e;
                      return p.A.can(s.kg(v.xBc.SEND_MESSAGES, v.xBc.VIEW_CHANNEL), t);
                  }).length
                : 0,
        r = null != n && null != e && (h.Ay.getMember(e, n.id)?.isPending ?? !1);
    return {
        selectedGuild: e,
        selectedChannel: t,
        locked: A.default.isLocked((0, x.getPID)()),
        hasPreviewEnabled: i?.features.has(v.GuildFeatures.PREVIEW_ENABLED),
        isMemberPending: r,
        postableChannelCount: l,
    };
})(y);

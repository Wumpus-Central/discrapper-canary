"use strict";
n.d(t, { A: () => S });
var i = n(64700),
    s = n(136722),
    l = n(311907),
    a = n(58149),
    r = n(332456),
    o = n(237774),
    d = n(973854),
    c = n(815706),
    u = n(734057),
    h = n(808728),
    p = n(696451),
    A = n(71393),
    f = n(576705),
    g = n(309010),
    _ = n(967198),
    m = n(287809),
    x = n(256415),
    E = n(9302),
    v = n(652215);
class y extends i.Component {
    componentDidUpdate(e) {
        if (this.props.locked) return null;
        let {
            selectedGuild: t,
            selectedChannel: n,
            isMemberPending: i,
            hasPreviewEnabled: s,
            postableChannelCount: l,
        } = this.props;
        if (
            (null != t &&
                (t !== e.selectedGuild || (i && !e.isMemberPending)) &&
                ((0, c.z)(v.HAw.GUILD_VIEWED, {
                    ...(i ? { is_pending: i, preview_enabled: s } : {}),
                    postable_channels: l,
                }),
                (0, o.k)(v.HAw.GUILD_VIEWED_CLICKSTREAM, { guild_id: t })),
            null != n && n !== e.selectedChannel)
        ) {
            let e = (0, r.C)(u.A.getChannel(n), !0);
            (0, c.z)(v.HAw.CHANNEL_OPENED, { ...e, ...(0, a.qL)(n) }), (0, d.A)({ channelId: n });
        }
    }
    render() {
        return null;
    }
}
let S = l.Ay.connectStores([_.A, g.A, A.A, m.default, x.default, h.Ay, f.A, p.Ay], () => {
    let e = _.A.getGuildId(),
        t = g.A.getChannelId(e),
        n = A.A.getGuild(e),
        i = m.default.getCurrentUser(),
        l = h.Ay.getChannels(n?.id)[h.I6] ?? [],
        a =
            l.length > 0
                ? l.filter((e) => {
                      let { channel: t } = e;
                      return f.A.can(s.kg(v.xBc.SEND_MESSAGES, v.xBc.VIEW_CHANNEL), t);
                  }).length
                : 0,
        r = null != i && null != e && (p.Ay.getMember(e, i.id)?.isPending ?? !1);
    return {
        selectedGuild: e,
        selectedChannel: t,
        locked: x.default.isLocked((0, E.getPID)()),
        hasPreviewEnabled: n?.features.has(v.GuildFeatures.PREVIEW_ENABLED),
        isMemberPending: r,
        postableChannelCount: a,
    };
})(y);

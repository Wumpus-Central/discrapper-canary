"use strict";
n.d(t, { A: () => v });
var i = n(64700),
    s = n(136722),
    l = n(311907),
    a = n(58149),
    r = n(237774),
    o = n(885437),
    d = n(973854),
    c = n(815706),
    u = n(808728),
    h = n(696451),
    p = n(71393),
    A = n(576705),
    f = n(309010),
    _ = n(967198),
    g = n(287809),
    m = n(256415),
    E = n(9302),
    x = n(652215);
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
        null != t &&
            (t !== e.selectedGuild || (i && !e.isMemberPending)) &&
            ((0, c.z)(x.HAw.GUILD_VIEWED, {
                ...(i ? { is_pending: i, preview_enabled: s } : {}),
                postable_channels: l,
            }),
            (0, r.k)(x.HAw.GUILD_VIEWED_CLICKSTREAM, { guild_id: t })),
            null != n &&
                n !== e.selectedChannel &&
                ((0, c.z)(x.HAw.CHANNEL_OPENED, { ...(0, o.p)(n), ...(0, a.qL)(n) }), (0, d.A)({ channelId: n }));
    }
    render() {
        return null;
    }
}
let v = l.Ay.connectStores([_.A, f.A, p.A, g.default, m.default, u.Ay, A.A, h.Ay], () => {
    let e = _.A.getGuildId(),
        t = f.A.getChannelId(e),
        n = p.A.getGuild(e),
        i = g.default.getCurrentUser(),
        l = u.Ay.getChannels(n?.id)[u.I6] ?? [],
        a =
            l.length > 0
                ? l.filter((e) => {
                      let { channel: t } = e;
                      return A.A.can(s.kg(x.xBc.SEND_MESSAGES, x.xBc.VIEW_CHANNEL), t);
                  }).length
                : 0,
        r = null != i && null != e && (h.Ay.getMember(e, i.id)?.isPending ?? !1);
    return {
        selectedGuild: e,
        selectedChannel: t,
        locked: m.default.isLocked((0, E.getPID)()),
        hasPreviewEnabled: n?.features.has(x.GuildFeatures.PREVIEW_ENABLED),
        isMemberPending: r,
        postableChannelCount: a,
    };
})(y);
